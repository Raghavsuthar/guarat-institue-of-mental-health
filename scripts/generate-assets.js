import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Base SVG Icon (Calm Teal, Mental Health & Healing emblem)
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="108" fill="#0f766e"/>
  <!-- Gentle concentric aura circles representing calm thoughts -->
  <circle cx="256" cy="256" r="190" fill="none" stroke="#14b8a6" stroke-width="6" opacity="0.3" stroke-dasharray="12 12"/>
  <circle cx="256" cy="256" r="150" fill="none" stroke="#5eead4" stroke-width="4" opacity="0.4"/>
  
  <!-- Mind / Lotus harmony emblem -->
  <g transform="translate(256, 260) scale(1.15)">
    <!-- Central lotus leaf / mind core -->
    <path d="M0 -120 C45 -60 70 0 0 90 C-70 0 -45 -60 0 -120 Z" fill="#ffffff" opacity="0.95"/>
    <!-- Left petal / cerebral hemisphere -->
    <path d="M-15 -90 C-75 -50 -115 10 -25 75 C-40 20 -35 -40 -15 -90 Z" fill="#ccfbf1" opacity="0.9"/>
    <!-- Right petal / cerebral hemisphere -->
    <path d="M15 -90 C75 -50 115 10 25 75 C40 20 35 -40 15 -90 Z" fill="#ccfbf1" opacity="0.9"/>
    <!-- Lower calming foundation arc -->
    <path d="M-60 85 C-20 105 20 105 60 85 C30 95 -30 95 -60 85 Z" fill="#fef08a" opacity="0.9"/>
    <!-- Inner warm spark of consciousness -->
    <circle cx="0" cy="-20" r="14" fill="#facc15"/>
  </g>
  
  <!-- Subtitle emblem mark -->
  <text x="256" y="445" text-anchor="middle" fill="#f0fdfa" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" letter-spacing="4">Gujarat Institute of Mental Health</text>
</svg>`;

// 2. Maskable SVG (with 15% safe padding around all sides, full-bleed solid background)
const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#0f766e"/>
  <g transform="translate(0, -10) scale(0.76) transform-origin: 256 256">
    <circle cx="256" cy="256" r="170" fill="none" stroke="#14b8a6" stroke-width="8" opacity="0.3"/>
    <g transform="translate(256, 256) scale(1.1)">
      <path d="M0 -120 C45 -60 70 0 0 90 C-70 0 -45 -60 0 -120 Z" fill="#ffffff" opacity="0.95"/>
      <path d="M-15 -90 C-75 -50 -115 10 -25 75 C-40 20 -35 -40 -15 -90 Z" fill="#ccfbf1" opacity="0.9"/>
      <path d="M15 -90 C75 -50 115 10 25 75 C40 20 35 -40 15 -90 Z" fill="#ccfbf1" opacity="0.9"/>
      <circle cx="0" cy="-20" r="14" fill="#facc15"/>
    </g>
  </g>
  <text x="256" y="440" text-anchor="middle" fill="#ccfbf1" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600" letter-spacing="3">PSYCHIATRY EDUCATION</text>
</svg>`;

// 3. Open Graph Social Card (1200x630) for WhatsApp and Facebook Link Previews
// Refreshed with the clinical illustration system: Nilgiri Teal, Indian Marigold, and Twilight Plum
const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#042f2e"/>
      <stop offset="45%" stop-color="#115e59"/>
      <stop offset="85%" stop-color="#2a2236"/>
      <stop offset="100%" stop-color="#3b2d4a"/>
    </linearGradient>
    <linearGradient id="marigoldSun" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#b86b26"/>
      <stop offset="60%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#fef3c7"/>
    </linearGradient>
    <linearGradient id="plumAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5e4a72"/>
      <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="tealPetal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14b8a6"/>
      <stop offset="100%" stop-color="#0f766e"/>
    </linearGradient>
    <linearGradient id="cardGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0d9488" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.15"/>
    </linearGradient>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>

  <!-- Subtle grid texture lines -->
  <g stroke="#ffffff" stroke-width="0.5" opacity="0.05">
    <line x1="0" y1="105" x2="1200" y2="105"/>
    <line x1="0" y1="210" x2="1200" y2="210"/>
    <line x1="0" y1="315" x2="1200" y2="315"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="0" y1="525" x2="1200" y2="525"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
  </g>

  <!-- Right Decorative Illustrated Panel: Cerebral Harmony & Growth -->
  <g transform="translate(940, 270)">
    <!-- Expanding harmonic waves -->
    <circle cx="0" cy="0" r="230" fill="none" stroke="#2dd4bf" stroke-width="1.5" opacity="0.2" stroke-dasharray="8 8"/>
    <circle cx="0" cy="0" r="180" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.25"/>
    <circle cx="0" cy="0" r="130" fill="none" stroke="#ccfbf1" stroke-width="1" opacity="0.3"/>

    <!-- Twilight Plum Backdrop Halo -->
    <circle cx="0" cy="0" r="100" fill="#5e4a72" opacity="0.45"/>

    <!-- Marigold Recovery Sun Horizon Arc -->
    <path d="M-90,20 Q0,-70 90,20 Z" fill="url(#marigoldSun)" opacity="0.9"/>
    
    <!-- Stylized Neural Arbor & Synapse Bridges -->
    <path d="M-60,30 Q-40,-50 0,-95 Q40,-50 60,30" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.85"/>
    <path d="M-30,-20 Q-60,-80 -90,-60" fill="none" stroke="#2dd4bf" stroke-width="2" opacity="0.75"/>
    <path d="M30,-20 Q60,-80 90,-60" fill="none" stroke="#2dd4bf" stroke-width="2" opacity="0.75"/>
    
    <!-- Synaptic Nodes -->
    <circle cx="0" cy="-95" r="7" fill="#fef3c7" stroke="#b86b26" stroke-width="2"/>
    <circle cx="-90" cy="-60" r="5.5" fill="#5eead4"/>
    <circle cx="90" cy="-60" r="5.5" fill="#5eead4"/>
    <circle cx="-40" cy="-35" r="4" fill="#fef08a"/>
    <circle cx="40" cy="-35" r="4" fill="#fef08a"/>

    <!-- Organic Botanical Leaves (Restoration & Healing) -->
    <path d="M-10,40 C-50,60 -70,110 0,120 C-10,90 -20,70 -10,40 Z" fill="url(#tealPetal)" opacity="0.9"/>
    <path d="M10,40 C50,60 70,110 0,120 C10,90 20,70 10,40 Z" fill="url(#tealPetal)" opacity="0.9"/>
    <circle cx="0" cy="40" r="8" fill="#f59e0b"/>
  </g>

  <!-- Left Content Area -->
  <g transform="translate(90, 80)">
    <!-- Category & Accreditation Badge -->
    <g>
      <rect x="0" y="0" width="370" height="36" rx="18" fill="#042f2e" stroke="#2dd4bf" stroke-width="1.5"/>
      <circle cx="20" cy="18" r="6" fill="#10b981"/>
      <text x="36" y="24" fill="#ccfbf1" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" letter-spacing="1">EVIDENCE-BASED PSYCHIATRIC EDUCATION</text>
    </g>

    <!-- Institute Header & Public Education Tagline -->
    <g transform="translate(0, 75)">
      <text x="0" y="32" fill="#fef3c7" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" letter-spacing="-0.5">Gujarat Institute of Mental Health</text>
      <text x="0" y="70" fill="#5eead4" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="600">Public Mental Health Education · Gujarat</text>
      <text x="0" y="98" fill="#a7f3d0" font-family="monospace" font-size="14" font-weight="500">English · हिन्दी · ગુજરાતી · Non-Commercial Public Education</text>
    </g>

    <!-- Portal Title & Mission -->
    <g transform="translate(0, 215)">
      <text x="0" y="36" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="40" font-weight="800">Clinical Mental Health Guide</text>
      <text x="0" y="72" fill="#e2e8f0" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400">Neutral medical science, treatment pathways &amp; anti-stigma literacy</text>
    </g>

    <!-- Trilingual Badges -->
    <g transform="translate(0, 315)">
      <!-- English -->
      <rect x="0" y="0" width="125" height="34" rx="8" fill="#134e4a" stroke="#2dd4bf" stroke-width="1"/>
      <text x="62" y="22" text-anchor="middle" fill="#f0fdfa" font-family="system-ui, sans-serif" font-size="14" font-weight="600">English</text>

      <!-- Hindi -->
      <rect x="135" y="0" width="125" height="34" rx="8" fill="#3b2d4a" stroke="#c084fc" stroke-width="1"/>
      <text x="197" y="22" text-anchor="middle" fill="#f3e8ff" font-family="system-ui, sans-serif" font-size="15" font-weight="600">हिन्दी</text>

      <!-- Gujarati -->
      <rect x="270" y="0" width="125" height="34" rx="8" fill="#451a03" stroke="#f59e0b" stroke-width="1"/>
      <text x="332" y="22" text-anchor="middle" fill="#fef3c7" font-family="system-ui, sans-serif" font-size="15" font-weight="600">ગુજરાતી</text>
    </g>

    <!-- Domain Pillars Tags -->
    <g transform="translate(0, 370)">
      <text x="0" y="16" fill="#99f6e4" font-family="system-ui, sans-serif" font-size="14" font-weight="600" letter-spacing="0.5">
        Conditions &amp; Mood  •  Psychopharmacology  •  Evidence-Based Therapy  •  Myth vs. Fact
      </text>
    </g>
  </g>

  <!-- Emergency Crisis Helpline Banner at Bottom -->
  <g transform="translate(0, 545)">
    <rect width="1200" height="85" fill="#021c1b"/>
    <line x1="0" y1="0" x2="1200" y2="0" stroke="#0d9488" stroke-width="1.5"/>
    
    <!-- Phone / Alert Emblem -->
    <circle cx="100" cy="42" r="18" fill="#b91c1c"/>
    <text x="100" y="47" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="900">SOS</text>

    <!-- National 24/7 Helpline -->
    <text x="132" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="17" font-weight="700">Tele-MANAS (Govt. of India): 14416 or 1800-891-4416</text>
    <text x="132" y="58" fill="#99f6e4" font-family="system-ui, sans-serif" font-size="13" font-weight="500">24×7 Free, Confidential, Multilingual Mental Health Crisis Support</text>

    <!-- Right badge -->
    <rect x="990" y="22" width="140" height="36" rx="18" fill="#134e4a" stroke="#2dd4bf" stroke-width="1"/>
    <text x="1060" y="45" text-anchor="middle" fill="#fef3c7" font-family="system-ui, sans-serif" font-size="13" font-weight="700">FREE RESOURCE</text>
  </g>
</svg>`;

async function run() {
  // Write SVGs
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), iconSvg);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvg);

  // Generate PNGs using sharp
  const iconBuffer = Buffer.from(iconSvg);
  const maskableBuffer = Buffer.from(maskableSvg);
  const ogBuffer = Buffer.from(ogImageSvg);

  await sharp(iconBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Generated pwa-192x192.png');

  await sharp(iconBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Generated pwa-512x512.png');

  await sharp(maskableBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Generated pwa-maskable-512x512.png');

  await sharp(iconBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  await sharp(iconBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('Generated favicon-32x32.png');

  await sharp(ogBuffer).resize(1200, 630).png().toFile(path.join(publicDir, 'og-image.png'));
  console.log('Generated og-image.png');
}

run().catch(console.error);


