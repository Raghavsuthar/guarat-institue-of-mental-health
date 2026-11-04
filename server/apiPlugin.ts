import fs from 'fs';
import path from 'path';
import { Plugin } from 'vite';
import { hasValidAdminToken, isCrisisQuery } from './shared/analytics';
import { GEMINI_MODEL } from '../api/qa';

const DATA_FILE = path.resolve('.analytics-data-dev.json');

interface AnalyticsStore {
  totalViews: number;
  byLang: { en: number; hi: number; gu: number };
  byPath: Record<string, number>;
  referrers: Record<string, number>;
  deviceBreakdown: { mobile: number; desktop: number; tablet: number };
  events: {
    screenerCompleted: number;
    mythCardShared: number;
    cardShared: number;
    qrLanded: number;
    pwaInstalled: number;
    readAloud: number;
  };
  dailyTrend: Array<{ date: string; views: number; events: number }>;
  lastUpdated: string;
}

function getInitialStore(): AnalyticsStore {
  // Empty baseline: analytics must only represent events actually received.
  return {
    totalViews: 0,
    byLang: { en: 0, hi: 0, gu: 0 },
    byPath: {},
    referrers: {},
    deviceBreakdown: { mobile: 0, desktop: 0, tablet: 0 },
    events: {
      screenerCompleted: 0,
      mythCardShared: 0,
      cardShared: 0,
      qrLanded: 0,
      pwaInstalled: 0,
      readAloud: 0,
    },
    dailyTrend: [],
    lastUpdated: new Date().toISOString(),
  };
}

function loadStore(): AnalyticsStore {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading analytics store:', err);
  }
  const initial = getInitialStore();
  saveStore(initial);
  return initial;
}

function saveStore(store: AnalyticsStore) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving analytics store:', err);
  }
}

export function apiServerPlugin(): Plugin {
  return {
    name: 'psychedu-api-endpoints',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';

        // 0. GET /api/health
        if (url === '/api/health' || url.startsWith('/api/health?')) {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(
            JSON.stringify({
              status: 'ok',
              service: 'Gujarat Institute of Mental Health Psychiatry Education Portal',
              timestamp: new Date().toISOString(),
            })
          );
          return;
        }

        // 1. POST /api/analytics/ping
        if (url.startsWith('/api/analytics/ping') && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const payload = JSON.parse(body);
              const store = loadStore();

              const lang = (payload.lang || 'en') as 'en' | 'hi' | 'gu';
              const rawPath = (payload.path || 'home').replace(/^\/+|\/+$/g, '') || 'home';
              const referrer = payload.referrerDomain || 'Direct / QR Poster';
              const device = (payload.deviceType || 'mobile') as 'mobile' | 'desktop' | 'tablet';
              const today = new Date().toISOString().split('T')[0];

              if (payload.eventType === 'page_view' || !payload.eventType) {
                store.totalViews += 1;
                store.byLang[lang] = (store.byLang[lang] || 0) + 1;
                store.byPath[rawPath] = (store.byPath[rawPath] || 0) + 1;
                store.referrers[referrer] = (store.referrers[referrer] || 0) + 1;
                store.deviceBreakdown[device] = (store.deviceBreakdown[device] || 0) + 1;

                // Update today's bucket in daily trend
                let bucket = store.dailyTrend.find((b) => b.date === today);
                if (!bucket) {
                  bucket = { date: today, views: 0, events: 0 };
                  store.dailyTrend.push(bucket);
                  if (store.dailyTrend.length > 90) store.dailyTrend.shift();
                }
                bucket.views += 1;
              } else {
                // Event recording
                let eventKey: keyof AnalyticsStore['events'] = 'cardShared';
                if (payload.eventType === 'screener_completed') eventKey = 'screenerCompleted';
                else if (payload.eventType === 'myth_card_shared') eventKey = 'mythCardShared';
                else if (payload.eventType === 'qr_landed') eventKey = 'qrLanded';
                else if (payload.eventType === 'pwa_installed') eventKey = 'pwaInstalled';
                else if (payload.eventType === 'read_aloud') eventKey = 'readAloud';

                store.events[eventKey] = (store.events[eventKey] || 0) + 1;

                let bucket = store.dailyTrend.find((b) => b.date === today);
                if (!bucket) {
                  bucket = { date: today, views: 0, events: 0 };
                  store.dailyTrend.push(bucket);
                }
                bucket.events += 1;
              }

              store.lastUpdated = new Date().toISOString();
              saveStore(store);

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ ok: true }));
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid payload' }));
            }
          });
          return;
        }

        // 2. GET /api/analytics/summary
        if (url.startsWith('/api/analytics/summary') && req.method === 'GET') {
          const adminPassword = process.env.ADMIN_PASSWORD;

          if (!adminPassword || adminPassword.length < 32) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 503;
            res.end(JSON.stringify({ error: 'Admin analytics is not configured.' }));
            return;
          }

          if (!hasValidAdminToken({ headers: { authorization: req.headers['authorization'] } }, adminPassword)) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 401;
            res.end(JSON.stringify({ error: 'Unauthorized.' }));
            return;
          }

          const store = loadStore();

          // Sort top pages
          const topPages = Object.entries(store.byPath)
            .map(([path, count]) => ({ path, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

          // Sort top referrers
          const topReferrers = Object.entries(store.referrers)
            .map(([domain, count]) => ({ domain, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(
            JSON.stringify({
              totalViews: store.totalViews,
              byLang: store.byLang,
              topPages,
              topReferrers,
              deviceBreakdown: store.deviceBreakdown,
              events: store.events,
              dailyTrend: store.dailyTrend.slice(-30),
              allDailyTrend: store.dailyTrend,
              lastUpdated: store.lastUpdated,
            })
          );
          return;
        }

        // 3. POST /api/qa - Educational Q&A Assistant (Section 6)
        if (url.startsWith('/api/qa') && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { query, lang = 'en' } = JSON.parse(body);
              if (!query || typeof query !== 'string') {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Query is required' }));
                return;
              }

              // Crisis short-circuiting: NEVER query AI if distress/self-harm language detected!
              if (isCrisisQuery(query)) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    crisis: true,
                    message:
                      lang === 'hi'
                        ? 'यदि आप या आपका कोई परिचित संकट में है, तो कृपया तुरंत सहायता लें। भारत सरकार की टेली-मानस हेल्पलाइन 14416 पर 24 घंटे मुफ्त और गोपनीय परामर्श उपलब्ध है।'
                        : lang === 'gu'
                        ? 'જો તમે અથવા તમારી નજીકની વ્યક્તિ સંકટમાં હોય, તો કૃપા કરીને તરત જ સહાય લો. ભારત સરકારની ટેલી-માનસ હેલ્પલાઇન 14416 પર 24x7 મફત અને ખાનગી મદદ ઉપલબ્ધ છે.'
                        : 'If you or someone you know is going through a mental health crisis or having thoughts of self-harm, immediate compassionate help is available 24x7 across India on Tele-MANAS: 14416 (toll-free).',
                    helpline: '14416',
                    emergency: '112',
                  })
                );
                return;
              }

              // Normal Educational Inquiry using Gemini
              if (!process.env.GEMINI_API_KEY) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    answer:
                      lang === 'hi'
                        ? 'यह पोर्टल एक सार्वजनिक मनोचिकित्सा शिक्षा संसाधन है। किसी भी व्यक्तिगत चिकित्सा सलाह के लिए कृपया पंजीकृत मनोचिकित्सक से परामर्श लें।'
                        : lang === 'gu'
                        ? 'આ પોર્ટલ જાહેર મનોચિકિત્સા શિક્ષણ સંસાધન છે. વ્યક્તિગત તબીબી સલાહ માટે મનોચિકિત્સકનો સંપર્ક કરો.'
                        : 'This portal is an educational resource created by Gujarat Institute of Mental Health. Please consult a qualified doctor or registered psychiatrist for personalized evaluation and care.',
                  })
                );
                return;
              }

              const { GoogleGenAI } = await import('@google/genai');
              const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

              const systemInstruction = `You are an educational assistant for Gujarat Institute of Mental Health's Public Psychiatry Education platform (gujarat-institute-of-mental-health.in).
Gujarat Institute of Mental Health is a public mental health education platform in India dedicated to destigmatizing mental health and addiction science.

MANDATORY SAFETY AND ETHICAL BOUNDARIES:
1. STRICTLY EDUCATE, NEVER DIAGNOSE. Do not say "You might have depression" or "Based on what you said, you have ADHD". Say "In clinical psychiatry, these symptoms are often evaluated under..."
2. NEVER prescribe or recommend medication names, specific dosages, or medical regimens.
3. NEVER role-play as the user's personal doctor or therapist.
4. Keep answers compassionate, objective, destigmatizing, and concise (2-3 short paragraphs max).
5. Ground your answers in biopsychosocial psychiatry, clinical psychotherapy concepts (CBT, ERP, DBT), lifestyle pillars (sleep hygiene, circadian rhythm, exercise), and standard public mental health guidelines.
6. Emphasize that psychiatric conditions are treatable medical conditions involving neurocircuitry, genetic vulnerabilities, and environmental stress.
7. Language requirement: If user asks in Hindi, answer in clean, accessible Hindi (Devanagari). If user asks in Gujarati, answer in Gujarati. If in English, answer in English.
8. Always conclude with a calm reminder: "This information is for education only. Please consult a registered psychiatrist or MBBS doctor for an individualized clinical assessment."`;

              const response = await ai.models.generateContent({
                model: GEMINI_MODEL,
                contents: [{ role: 'user', parts: [{ text: query }] }],
                config: {
                  systemInstruction,
                },
              });

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  answer: response.text || 'Unable to generate educational answer at this time.',
                })
              );
            } catch (err) {
              console.error('API QA Error:', err);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to process inquiry' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

