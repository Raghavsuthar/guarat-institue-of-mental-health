import { MythFact, Language } from '../types';
import { BASE_URL } from './seo';

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 8
): number {
  const words = text.split(/\s+/);
  let line = '';
  let currentY = y;
  let linesCount = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
      linesCount++;
      if (linesCount >= maxLines) {
        ctx.fillText(line.trim() + '...', x, currentY);
        return currentY + lineHeight;
      }
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY + lineHeight;
}

export function generateMythCardCanvas(myth: MythFact, lang: Language): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  // Background - Deep dignified medical teal gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1080);
  bgGrad.addColorStop(0, '#042f2e');
  bgGrad.addColorStop(0.5, '#0f766e');
  bgGrad.addColorStop(1, '#115e59');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1080, 1080);

  // Soft inner card container
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(50, 50, 980, 980, 36);
  ctx.fill();

  // Subtle border
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Header Bar
  ctx.fillStyle = '#f0fdfa';
  ctx.beginPath();
  ctx.roundRect(50, 50, 980, 130, [36, 36, 0, 0]);
  ctx.fill();

  // Header Line Separator
  ctx.strokeStyle = '#ccfbf1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 180);
  ctx.lineTo(1030, 180);
  ctx.stroke();

  // Header Title
  ctx.fillStyle = '#0f766e';
  ctx.font = '700 28px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  ctx.fillText('Gujarat Institute of Mental Health', 90, 110);

  const headerSub =
    lang === 'en'
      ? 'Mental Health Myth Buster · Public Awareness'
      : lang === 'hi'
      ? 'मानसिक स्वास्थ्य भ्रांति निवारण · जन जागरूकता'
      : 'માનસિક સ્વાસ્થ્ય ગેરમાન્યતા નિવારણ · લોક જાગૃતિ';
  ctx.fillStyle = '#64748b';
  ctx.font = '500 20px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  ctx.fillText(headerSub, 90, 145);

  let currentY = 240;

  // 1. Myth Pill
  const mythLabel = lang === 'en' ? '❌ COMMON MYTH' : lang === 'hi' ? '❌ प्रचलित भ्रम' : '❌ પ્રચલિત વહેમ';
  ctx.fillStyle = '#fef2f2';
  ctx.beginPath();
  ctx.roundRect(90, currentY - 32, 260, 44, 22);
  ctx.fill();
  ctx.strokeStyle = '#fecaca';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#991b1b';
  ctx.font = '700 20px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  ctx.fillText(mythLabel, 115, currentY - 3);

  currentY += 45;

  // Myth Text
  const mythText = `"${myth.myth[lang] || myth.myth.en}"`;
  ctx.fillStyle = '#1c2430';
  ctx.font = '700 30px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  currentY = wrapText(ctx, mythText, 90, currentY, 900, 42, 3);

  currentY += 25;

  // 2. Fact Pill
  const factLabel = lang === 'en' ? '✅ SCIENTIFIC FACT' : lang === 'hi' ? '✅ वैज्ञानिक सत्य' : '✅ વૈજ્ઞાનિક સત્ય';
  ctx.fillStyle = '#f0fdf4';
  ctx.beginPath();
  ctx.roundRect(90, currentY - 32, 280, 44, 22);
  ctx.fill();
  ctx.strokeStyle = '#bbf7d0';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#166534';
  ctx.font = '700 20px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  ctx.fillText(factLabel, 115, currentY - 3);

  currentY += 45;

  // Fact Text
  const factText = myth.fact[lang] || myth.fact.en;
  ctx.fillStyle = '#0f766e';
  ctx.font = '700 28px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  currentY = wrapText(ctx, factText, 90, currentY, 900, 40, 3);

  currentY += 25;

  // Explanation snippet
  const expText = myth.explanation[lang] || myth.explanation.en;
  ctx.fillStyle = '#475569';
  ctx.font = '400 22px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  currentY = wrapText(ctx, expText, 90, currentY, 900, 34, 4);

  // Footer Card
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.roundRect(50, 930, 980, 100, [0, 0, 36, 36]);
  ctx.fill();

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 930);
  ctx.lineTo(1030, 930);
  ctx.stroke();

  // Footer text
  ctx.fillStyle = '#0f766e';
  ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('gujarat-institute-of-mental-health.in', 90, 975);

  ctx.fillStyle = '#64748b';
  ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Free Educational Health Resource · Tele-MANAS: 14416 (24x7)', 90, 1005);

  return canvas;
}

export function downloadMythCard(myth: MythFact, lang: Language) {
  const canvas = generateMythCardCanvas(myth, lang);
  const link = document.createElement('a');
  link.download = `-myth-${myth.id}-${lang}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}


