import { Language, ShareCardData } from '../types';
import { BASE_URL } from './seo';

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string | null | undefined,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 8
): number {
  if (!text || typeof text !== 'string') return y;
  const words = text.split(/\s+/).filter(Boolean);
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

export function generateShareCardCanvas(data: ShareCardData): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const isStory = data.format === 'story';
  canvas.width = 1080;
  canvas.height = isStory ? 1920 : 1080;

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const W = canvas.width;
  const H = canvas.height;
  const lang: Language = data.lang || 'en';
  const cardType = data.type || (data.kind as string) || 'condition';

  // Background - Deep medical teal gradient
  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, '#042f2e');
  bgGrad.addColorStop(0.4, '#0f766e');
  bgGrad.addColorStop(1, '#115e59');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Soft inner card container
  const margin = 48;
  const cardW = W - margin * 2;
  const cardH = H - margin * 2;

  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(margin, margin, cardW, cardH, 36);
  ctx.fill();

  // Subtle card border
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Header Banner inside card
  const headerHeight = 140;
  ctx.fillStyle = '#f0fdfa';
  ctx.beginPath();
  ctx.roundRect(margin, margin, cardW, headerHeight, [36, 36, 0, 0]);
  ctx.fill();

  ctx.strokeStyle = '#ccfbf1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(margin, margin + headerHeight);
  ctx.lineTo(margin + cardW, margin + headerHeight);
  ctx.stroke();

  // Doctor attribution & subtitle
  ctx.fillStyle = '#0f766e';
  ctx.font = '700 28px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  ctx.fillText('Gujarat Institute of Mental Health', margin + 40, margin + 65);

  const subHeader =
    data.sourceLabel ||
    (lang === 'en'
      ? 'Public Psychiatry Education · Verified Evidence-Based Resource'
      : lang === 'hi'
      ? 'सार्वजनिक मनोचिकित्सा शिक्षा · प्रमाण-आधारित संसाधन'
      : 'જાહેર મનોચિકિત્સા શિક્ષણ · પ્રમાણ-આધારિત સંસાધન');

  ctx.fillStyle = '#64748b';
  ctx.font = '500 20px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  ctx.fillText(subHeader, margin + 40, margin + 105);

  // Content start Y
  let currentY = margin + headerHeight + 60;

  // Type Badge / Tag
  let badgeText = '';
  let badgeBg = '#f0fdfa';
  let badgeBorder = '#99f6e4';
  let badgeColor = '#0f766e';

  switch (cardType) {
    case 'condition':
      badgeText = lang === 'en' ? 'CLINICAL CONDITION GUIDE' : lang === 'hi' ? 'चिकित्सीय स्थिति मार्गदर्शिका' : 'તબીબી સ્થિતિ માર્ગદર્શિકા';
      break;
    case 'myth':
      badgeText = lang === 'en' ? 'MYTH VS SCIENTIFIC FACT' : lang === 'hi' ? 'भ्रम बनाम वैज्ञानिक सत्य' : 'વહેમ વિરુદ્ધ વૈજ્ઞાનિક સત્ય';
      badgeBg = '#fef2f2';
      badgeBorder = '#fecaca';
      badgeColor = '#991b1b';
      break;
    case 'faq':
      badgeText = lang === 'en' ? 'FREQUENTLY ASKED QUESTION' : lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'વારંવાર પૂછાતા પ્રશ્નો';
      badgeBg = '#eff6ff';
      badgeBorder = '#bfdbfe';
      badgeColor = '#1d4ed8';
      break;
    case 'glossary':
      badgeText = lang === 'en' ? 'MENTAL HEALTH DICTIONARY' : lang === 'hi' ? 'मानसिक स्वास्थ्य शब्दकोश' : 'માનસિક સ્વાસ્થ્ય શબ્દકોશ';
      badgeBg = '#f5f3ff';
      badgeBorder = '#ddd6fe';
      badgeColor = '#6d28d9';
      break;
    case 'screener':
      badgeText = lang === 'en' ? 'EDUCATIONAL SELF-CHECK' : lang === 'hi' ? 'शैक्षिक आत्म-जांच' : 'શૈક્ષણિક સ્વ-મૂલ્યાંકન';
      badgeBg = '#fdf4ff';
      badgeBorder = '#f5d0fe';
      badgeColor = '#86198f';
      break;
    case 'medication':
      badgeText = lang === 'en' ? 'MEDICATION GUIDE' : lang === 'hi' ? 'मनोचिकित्सा दवा मार्गदर्शिका' : 'દવા માર્ગદર્શિકા';
      badgeBg = '#eff6ff';
      badgeBorder = '#bfdbfe';
      badgeColor = '#1e40af';
      break;
    case 'substance':
      badgeText = lang === 'en' ? 'ADDICTION RECOVERY' : lang === 'hi' ? 'व्यसन मुक्ति एवं विज्ञान' : 'વ્યસન મુક્તિ અને વિજ્ઞાન';
      badgeBg = '#fef3c7';
      badgeBorder = '#fde68a';
      badgeColor = '#92400e';
      break;
    case 'article':
      badgeText = lang === 'en' ? 'EDUCATIONAL ARTICLE' : lang === 'hi' ? 'शैक्षणिक मनोचिकित्सा लेख' : 'શૈક્ષણિક લેખ';
      badgeBg = '#f0fdf4';
      badgeBorder = '#bbf7d0';
      badgeColor = '#166534';
      break;
    default:
      badgeText = (data.category ? data.category.toUpperCase() : '') || (lang === 'en' ? 'HEALTH GUIDE' : lang === 'hi' ? 'स्वास्थ्य मार्गदर्शिका' : 'આરોગ્ય માર્ગદર્શિકા');
      break;
  }

  // Draw Badge
  ctx.font = '700 18px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  const badgeWidth = ctx.measureText(badgeText).width + 36;
  ctx.fillStyle = badgeBg;
  ctx.beginPath();
  ctx.roundRect(margin + 40, currentY - 32, badgeWidth, 42, 21);
  ctx.fill();
  ctx.strokeStyle = badgeBorder;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = badgeColor;
  ctx.fillText(badgeText, margin + 58, currentY - 5);

  currentY += 45;

  // Title
  ctx.fillStyle = '#1c2430';
  ctx.font = isStory
    ? '800 42px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif'
    : '800 36px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  currentY = wrapText(ctx, data.title || 'Mental Health Guide', margin + 40, currentY, cardW - 80, isStory ? 56 : 48, 3);

  // Subtitle (if present)
  if (data.subtitle) {
    currentY += 15;
    ctx.fillStyle = '#0f766e';
    ctx.font = '600 24px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
    currentY = wrapText(ctx, data.subtitle, margin + 40, currentY, cardW - 80, 36, 2);
  }

  currentY += 30;

  // Disclaimer Box coordinates ahead of time so points don't overlap
  const footerHeight = isStory ? 180 : 130;
  const disclaimerBoxY = H - margin - footerHeight - 95;

  // Key Points / Facts List - Safely resolve from keyPoints, points, or myth/fact
  let rawPoints: string[] = [];
  if (Array.isArray(data.keyPoints) && data.keyPoints.length > 0) {
    rawPoints = data.keyPoints;
  } else if (Array.isArray(data.points) && data.points.length > 0) {
    rawPoints = data.points;
  } else if (data.mythText && data.factText) {
    const mythPrefix = lang === 'hi' ? 'भ्रम: ' : lang === 'gu' ? 'વહેમ: ' : 'Myth: ';
    const factPrefix = lang === 'hi' ? 'सत्य: ' : lang === 'gu' ? 'સત્ય: ' : 'Fact: ';
    rawPoints = [
      `${mythPrefix}"${data.mythText}"`,
      `${factPrefix}${data.factText}`,
    ];
    if (data.explanation) {
      rawPoints.push(data.explanation);
    }
  } else if (data.explanation) {
    rawPoints = [data.explanation];
  } else if (data.subtitle) {
    rawPoints = [data.subtitle];
  }

  const validPoints = rawPoints.filter(
    (p): p is string => typeof p === 'string' && p.trim().length > 0
  );
  const maxPoints = isStory ? 5 : 4;
  const pointsToShow = validPoints.slice(0, maxPoints);

  for (let idx = 0; idx < pointsToShow.length; idx++) {
    const point = pointsToShow[idx];
    // Check if we would collide with disclaimer box
    if (currentY + 50 >= disclaimerBoxY) {
      break;
    }

    // Bullet Container
    const bulletSize = 34;
    const bulletX = margin + 40;
    const bulletY = currentY - 24;

    ctx.fillStyle = '#f0fdfa';
    ctx.beginPath();
    ctx.arc(bulletX + bulletSize / 2, bulletY + bulletSize / 2, bulletSize / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#99f6e4';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#0f766e';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${idx + 1}`, bulletX + bulletSize / 2, bulletY + bulletSize / 2 + 6);
    ctx.textAlign = 'left';

    // Point Text
    ctx.fillStyle = '#334155';
    ctx.font = isStory
      ? '500 24px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif'
      : '500 22px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';

    const textX = bulletX + bulletSize + 20;
    const textW = cardW - 80 - (bulletSize + 20);
    const nextY = wrapText(ctx, point, textX, currentY, textW, isStory ? 38 : 34, isStory ? 4 : 3);
    currentY = Math.max(nextY + (isStory ? 28 : 20), currentY + 60);
  }

  // Disclaimer Box above footer
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.roundRect(margin + 40, disclaimerBoxY, cardW - 80, 80, 16);
  ctx.fill();
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#64748b';
  ctx.font = '500 16px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  const disclaimerText = data.disclaimer || 'Educational purposes only · Not medical advice or diagnosis · Consult a registered psychiatrist for care.';
  wrapText(ctx, `⚠️ ${disclaimerText}`, margin + 55, disclaimerBoxY + 30, cardW - 110, 24, 2);

  // Card Footer (Branding + Helplines)
  const footerY = H - margin - footerHeight;
  ctx.fillStyle = '#f0fdfa';
  ctx.beginPath();
  ctx.roundRect(margin, footerY, cardW, footerHeight, [0, 0, 36, 36]);
  ctx.fill();

  ctx.strokeStyle = '#ccfbf1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(margin, footerY);
  ctx.lineTo(margin + cardW, footerY);
  ctx.stroke();

  // Footer text
  ctx.fillStyle = '#0f766e';
  ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('gujarat-institute-of-mental-health.in', margin + 40, footerY + 50);

  ctx.fillStyle = '#047857';
  ctx.font = '600 18px "Plus Jakarta Sans", "Noto Sans Devanagari", "Noto Sans Gujarati", sans-serif';
  const helplineText =
    lang === 'en'
      ? 'Tele-MANAS: 14416 (Govt of India, 24x7 Free & Confidential) · Emergency: 112'
      : lang === 'hi'
      ? 'टेली-मानस: 14416 (भारत सरकार, 24x7 निःशुल्क एवं गोपनीय) · आपातकालीन: 112'
      : 'ટેલી-માનસ: 14416 (ભારત સરકાર, 24x7 મફત અને ગુપ્ત) · ઇમરજન્સી: 112';
  ctx.fillText(helplineText, margin + 40, footerY + 85);

  if (isStory) {
    ctx.fillStyle = '#64748b';
    ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Free Public Mental Health Education · Scan or visit link to read more', margin + 40, footerY + 125);
  }

  return canvas;
}

export function downloadShareCard(data: ShareCardData, filenamePrefix: string = '-education') {
  const canvas = generateShareCardCanvas(data);
  const link = document.createElement('a');
  const typeStr = data.type || data.kind || 'guide';
  const formatStr = data.format || 'square';
  const langStr = data.lang || 'en';
  link.download = `${filenamePrefix}-${typeStr}-${formatStr}-${langStr}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}


