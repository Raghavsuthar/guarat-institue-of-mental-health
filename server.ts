import express from 'express';
import { GEMINI_MODEL, QA_SYSTEM_INSTRUCTION } from './api/qa';
import path from 'path';
import { apiErrorMessage, apiErrorStatus, enforceRateLimit, getAnalyticsSummary, hasValidAdminToken, isCrisisQuery, recordAnalyticsPing } from './server/shared/analytics';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '16kb' }));

// API handlers use shared Upstash-backed rate limits and storage.

// Security headers - CSP for XSS protection
app.use((_req, res, next) => {
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://generativelanguage.googleapis.com; " +
    "frame-ancestors 'none';"
  );
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// 1. Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Gujarat Institute of Mental Health Psychiatry Education Portal',
    timestamp: new Date().toISOString(),
  });
});

// 2. Anonymous aggregate analytics (durable Upstash storage)
app.post('/api/analytics/ping', async (req, res) => {
  try {
    if (!(await enforceRateLimit(req, 'analytics-ping', 60, 60, req.ip || req.socket.remoteAddress))) {
      res.setHeader('Retry-After', '60');
      res.status(429).json({ error: 'Too many requests. Please try again later.' });
      return;
    }
    await recordAnalyticsPing(req.body);
    res.setHeader('Cache-Control', 'no-store');
    res.status(202).json({ ok: true });
  } catch (error) {
    const status = apiErrorStatus(error);
    res.status(status >= 500 ? 503 : status).json({ error: apiErrorMessage(error) });
  }
});

// 3. Protected analytics summary
app.get('/api/analytics/summary', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, private');
  const configuredSecret = process.env.ADMIN_PASSWORD;
  if (!configuredSecret || configuredSecret.length < 32) {
    res.status(503).json({ error: 'Admin analytics is not configured. Set a unique server-side ADMIN_PASSWORD of at least 32 characters.' });
    return;
  }
  try {
    if (!(await enforceRateLimit(req, 'admin-summary', 10, 900, req.ip || req.socket.remoteAddress))) {
      res.setHeader('Retry-After', '900');
      res.status(429).json({ error: 'Too many admin attempts. Try again later.' });
      return;
    }
    if (!hasValidAdminToken(req, configuredSecret)) {
      res.status(401).json({ error: 'Unauthorized.' });
      return;
    }
    res.status(200).json(await getAnalyticsSummary());
  } catch (error) {
    const status = apiErrorStatus(error);
    res.status(status >= 500 ? 503 : status).json({ error: apiErrorMessage(error) });
  }
});

// 4. Educational Q&A Assistant endpoint
app.post('/api/qa', async (req, res) => {
  try {
    const { query, lang = 'en' } = req.body || {};
    if (!query || typeof query !== 'string' || query.length > 2000) {
      res.status(400).json({ error: 'Query is required and must be no longer than 2000 characters.' });
      return;
    }

    if (!['en', 'hi', 'gu'].includes(lang)) {
      res.status(400).json({ error: 'Unsupported language' });
      return;
    }

    // Crisis short-circuiting: NEVER query AI if distress/self-harm language detected!
    if (isCrisisQuery(query)) {
      res.json({
        crisis: true,
        message:
          lang === 'hi'
            ? 'यदि आप या आपका कोई परिचित संकट में है, तो कृपया तुरंत सहायता लें। भारत सरकार की टेली-मानस हेल्पलाइन 14416 पर 24 घंटे मुफ्त और गोपनीय परामर्श उपलब्ध है।'
            : lang === 'gu'
            ? 'જો તમે અથવા તમારી નજીકની વ્યક્તિ સંકટમાં હોય, તો કૃપા કરીને તરત જ સહાય લો. ભારત સરકારની ટેલી-માનસ હેલ્પલાઇન 14416 પર 24x7 મફત અને ખાનગી મદદ ઉપલબ્ધ છે.'
            : 'If you or someone you know is going through a mental health crisis or having thoughts of self-harm, immediate compassionate help is available 24x7 across India on Tele-MANAS: 14416 (toll-free).',
        helpline: '14416',
        emergency: '112',
      });
      return;
    }

    // Normal Educational Inquiry using Gemini
    if (!(await enforceRateLimit(req, 'qa', 20, 60, req.ip || req.socket.remoteAddress))) {
      res.setHeader('Retry-After', '60');
      res.status(429).json({ error: 'Too many questions. Please wait and try again.' });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      res.json({
        answer:
          lang === 'hi'
            ? 'यह पोर्टल एक सार्वजनिक मनोचिकित्सा शिक्षा संसाधन है। किसी भी व्यक्तिगत चिकित्सा सलाह के लिए कृपया पंजीकृत मनोचिकित्सक से परामर्श लें।'
            : lang === 'gu'
            ? 'આ પોર્ટલ જાહેર મનોચિકિત્સા શિક્ષણ સંસાધન છે. વ્યક્તિગત તબીબી સલાહ માટે મનોચિકિત્સકનો સંપર્ક કરો.'
            : 'This portal is an educational resource created by Gujarat Institute of Mental Health. Please consult a qualified doctor or registered psychiatrist for personalized evaluation and care.',
      });
      return;
    }

    const { GoogleGenAI } = await import('@google/genai');
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: [{ role: 'user', parts: [{ text: query }] }],
      config: {
        systemInstruction: QA_SYSTEM_INSTRUCTION,
      },
    });

    res.json({
      answer: response.text || 'Unable to generate educational answer at this time.',
    });
  } catch (err) {
    const status = apiErrorStatus(err);
    res.status(status >= 500 ? 503 : status).json({ error: apiErrorMessage(err) });
  }
});

// Vite or Static file serving
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

start();

