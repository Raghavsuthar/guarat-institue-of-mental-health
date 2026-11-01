import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ConditionCategory } from '../../types';

interface IllustrationProps {
  className?: string;
  ariaLabel?: string;
}

/**
 * Mood Disorders: A serene dawn breaking over soft hills with warm light, symbolizing the return of hope and steady emotional warmth.
 */
export const MoodIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration representing hope, renewal, and emotional balance across the horizon',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="moodSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#f0fdfa" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="moodSun" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fde047" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="moodHillFar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#99f6e4" />
        <stop offset="100%" stopColor="#5eead4" />
      </linearGradient>
      <linearGradient id="moodHillMid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
      <linearGradient id="moodHillNear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#115e59" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
    </defs>
    {/* Sky Backdrop */}
    <rect width="480" height="180" rx="16" fill="url(#moodSky)" />

    {/* Sun & Diffuse Rays */}
    <circle cx="240" cy="95" r="44" fill="url(#moodSun)" opacity="0.85" />
    <circle cx="240" cy="95" r="62" stroke="#fde047" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.4" />
    <circle cx="240" cy="95" r="82" stroke="#fde047" strokeWidth="1" strokeDasharray="4 8" opacity="0.25" />

    {/* Distant Rolling Hills */}
    <path
      d="M-20 180 L-20 125 Q70 95 160 115 T340 105 Q410 95 500 130 L500 180 Z"
      fill="url(#moodHillFar)"
      opacity="0.5"
    />
    {/* Midground Foothills */}
    <path
      d="M-20 180 L-20 140 Q80 110 200 130 T420 120 Q470 122 500 145 L500 180 Z"
      fill="url(#moodHillMid)"
      opacity="0.8"
    />
    {/* Foreground Serene Ridge */}
    <path
      d="M-20 180 L-20 155 Q120 135 240 150 Q360 162 500 148 L500 180 Z"
      fill="url(#moodHillNear)"
    />

    {/* Gentle Soaring Birds */}
    <path d="M120 55 Q128 50 136 55 Q144 50 152 55" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M145 68 Q151 64 157 68 Q163 64 169 68" stroke="#0f766e" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M330 60 Q337 56 344 60 Q351 56 358 60" stroke="#0f766e" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.5" />
  </svg>
);

/**
 * Anxiety & Panic: Rhythmic, soothing water waves settling into stillness, symbolizing calming the nervous system.
 */
export const AnxietyIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing gentle water waves settling into tranquil still water',
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 480 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id="anxietyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0fdfa" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </linearGradient>
        <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#115e59" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      <rect width="480" height="180" rx="16" fill="url(#anxietyBg)" />

      {/* Concentric Grounding Droplets */}
      <motion.ellipse
        cx="240"
        cy="70"
        rx="70"
        ry="18"
        stroke="#14b8a6"
        strokeWidth="1"
        opacity="0.3"
        fill="none"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [0.96, 1.04, 0.96],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '240px 70px' }}
      />
      <motion.ellipse
        cx="240"
        cy="70"
        rx="120"
        ry="30"
        stroke="#0d9488"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [0.98, 1.02, 0.98],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{ transformOrigin: '240px 70px' }}
      />
      <ellipse cx="240" cy="70" rx="170" ry="42" stroke="#0f766e" strokeWidth="0.8" opacity="0.15" fill="none" />

      {/* Smooth Grounding Stone */}
      <ellipse cx="240" cy="70" rx="22" ry="10" fill="#134e4a" opacity="0.85" />
      <ellipse cx="240" cy="67" rx="16" ry="6" fill="#2dd4bf" opacity="0.6" />

      {/* Layered Calming Waves in Motion */}
      {/* Wave Layer 1: Background Soft Crest (Targeted Selected Wave Element) */}
      <motion.path
        d="M-20 180 L-20 130 C60 115 120 145 200 130 C280 115 360 140 440 128 C470 124 500 128 500 128 L500 180 Z"
        fill="url(#waveGrad1)"
        opacity="0.35"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [-14, 14, -14],
                y: [-2.5, 3, -2.5],
              }
        }
        transition={{
          duration: 7.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Wave Layer 2: Mid-level Flowing Current */}
      <motion.path
        d="M-20 180 L-20 145 C80 135 160 155 240 142 C320 130 400 150 500 140 L500 180 Z"
        fill="url(#waveGrad2)"
        opacity="0.65"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [12, -12, 12],
                y: [2, -2.5, 2],
              }
        }
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Wave Layer 3: Foreground Serene Grounded Baseline Wave */}
      <motion.path
        d="M-20 180 L-20 160 C100 152 200 165 300 156 C400 148 460 158 500 154 L500 180 Z"
        fill="#0f766e"
        opacity="0.9"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [-8, 8, -8],
                y: [-1.5, 2, -1.5],
              }
        }
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Serene Water Lilies / Lotus Petals Gently Drifting with Waves */}
      <motion.path
        d="M120 120 C125 110 135 110 140 120 C135 125 125 125 120 120 Z"
        fill="#99f6e4"
        opacity="0.8"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [-2, 3, -2],
                x: [-3, 3, -3],
                rotate: [-3, 3, -3],
              }
        }
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '130px 118px' }}
      />
      <motion.path
        d="M350 112 C355 104 365 104 370 112 C365 117 355 117 350 112 Z"
        fill="#99f6e4"
        opacity="0.75"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [2, -3, 2],
                x: [3, -3, 3],
                rotate: [3, -3, 3],
              }
        }
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ transformOrigin: '360px 110px' }}
      />
    </svg>
  );
};

/**
 * OCD: Balanced zen stones with a gently unwinding spiral that resolves into clean harmony.
 */
export const OCDIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing balanced stones and an unwinding spiral finding peaceful order',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="ocdBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#f0fdfa" />
      </linearGradient>
      <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#ocdBg)" />

    {/* Peaceful Raked Sand Waves in Garden */}
    <path d="M40 145 C120 135 200 155 280 145 C360 135 420 145 460 140" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
    <path d="M30 160 C110 150 190 170 270 160 C350 150 430 160 470 155" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />

    {/* Balanced Cairn Stones */}
    <ellipse cx="240" cy="148" rx="44" ry="14" fill="#0f766e" />
    <ellipse cx="240" cy="126" rx="34" ry="12" fill="url(#stoneGrad)" />
    <ellipse cx="240" cy="106" rx="25" ry="10" fill="#2dd4bf" />
    <ellipse cx="240" cy="88" rx="17" ry="8" fill="#99f6e4" />
    <circle cx="240" cy="74" r="6" fill="#fde047" />

    {/* Unwinding Spirals of Clarity on sides */}
    <path
      d="M100 100 A20 20 0 0 1 120 80 A25 25 0 0 1 145 105 A30 30 0 0 1 115 135 L80 135"
      stroke="#14b8a6"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.45"
    />
    <path
      d="M380 100 A20 20 0 0 0 360 80 A25 25 0 0 0 335 105 A30 30 0 0 0 365 135 L400 135"
      stroke="#0d9488"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.45"
    />

    {/* Gentle Green Leaf on the Stone */}
    <path
      d="M245 84 C255 78 268 82 272 90 C265 94 252 92 245 84 Z"
      fill="#10b981"
      opacity="0.85"
    />
    <path d="M246 84 L270 90" stroke="#047857" strokeWidth="0.8" />
  </svg>
);

/**
 * Psychotic Disorders: A steady beacon / lighthouse sending clear guiding light through gentle mist, restoring reality and orientation.
 */
export const PsychoticIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration of a steady guiding light beam bringing clarity and grounded orientation',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="psychSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="60%" stopColor="#0f766e" />
        <stop offset="100%" stopColor="#134e4a" />
      </linearGradient>
      <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#psychSky)" />

    {/* Gentle Stars in Deep Night */}
    <circle cx="80" cy="40" r="1.5" fill="#fef08a" opacity="0.6" />
    <circle cx="160" cy="30" r="1.2" fill="#ffffff" opacity="0.5" />
    <circle cx="380" cy="45" r="1.5" fill="#fef08a" opacity="0.6" />
    <circle cx="430" cy="25" r="1.2" fill="#ffffff" opacity="0.7" />

    {/* Clear Guiding Light Beams */}
    <polygon points="140,82 460,20 460,140" fill="url(#beamGrad)" opacity="0.35" />
    <polygon points="140,82 0,40 0,120" fill="url(#beamGrad)" opacity="0.15" />

    {/* Solid Lighthouse Tower on Firm Ground */}
    <path d="M120 180 L130 90 L150 90 L160 180 Z" fill="#f8fafc" />
    <rect x="127" y="115" width="26" height="10" fill="#0f766e" />
    <rect x="124" y="145" width="32" height="10" fill="#0f766e" />
    {/* Lantern Room */}
    <rect x="130" y="75" width="20" height="15" fill="#1e293b" rx="2" />
    <circle cx="140" cy="82" r="6" fill="#fef08a" />
    <path d="M126 75 L140 65 L154 75 Z" fill="#0f766e" />

    {/* Firm Coastal Shoreline */}
    <path d="M-20 180 Q100 160 200 168 T500 165 L500 180 Z" fill="#0f172a" />
    <path d="M0 174 Q120 168 240 172 T480 170" stroke="#5eead4" strokeWidth="1.5" opacity="0.4" fill="none" />
  </svg>
);

/**
 * Trauma & PTSD: A sheltered natural harbor surrounded by protective arching headlands, safe waters, and resilient sprout.
 */
export const TraumaIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a sheltered peaceful harbor and safe natural sanctuary',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="traumaSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#e0f2fe" />
        <stop offset="60%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#ccfbf1" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#traumaSky)" />

    {/* Protective Embracing Headlands (Left and Right) */}
    <path
      d="M-20 180 L-20 90 C40 85 90 120 130 140 C170 160 190 180 200 180 Z"
      fill="#115e59"
      opacity="0.8"
    />
    <path
      d="M500 180 L500 85 C440 80 390 115 350 140 C310 160 290 180 280 180 Z"
      fill="#0f766e"
      opacity="0.8"
    />

    {/* Sheltered Calm Basin Waters */}
    <ellipse cx="240" cy="155" rx="120" ry="25" fill="#5eead4" opacity="0.4" />
    <ellipse cx="240" cy="155" rx="80" ry="16" fill="#99f6e4" opacity="0.6" />

    {/* Protective Arching Leaf Canopy */}
    <path
      d="M160 160 C180 70 300 70 320 160"
      stroke="#14b8a6"
      strokeWidth="2.5"
      strokeDasharray="4 4"
      fill="none"
      opacity="0.5"
    />

    {/* Resilient Growing Sprout in Center */}
    <path d="M240 165 L240 125" stroke="#065f46" strokeWidth="2.5" strokeLinecap="round" />
    <path
      d="M240 140 C230 130 215 132 212 142 C222 146 235 144 240 140 Z"
      fill="#10b981"
    />
    <path
      d="M240 130 C250 120 265 122 268 132 C258 136 245 134 240 130 Z"
      fill="#34d399"
    />
    {/* Gentle Protective Sunlight */}
    <circle cx="240" cy="50" r="18" fill="#fef08a" opacity="0.8" />
    <circle cx="240" cy="50" r="28" stroke="#fde047" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
  </svg>
);

/**
 * Neurodevelopmental (ADHD & Autism): An interconnected constellation of diverse nodes and pathways, highlighting neurodivergent strengths.
 */
export const NeurodevelopmentalIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing interconnected neural constellation and diverse cognitive pathways',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="neuroBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#ecfdf5" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#neuroBg)" />

    {/* Connecting Synaptic Pathways */}
    <path d="M90 90 Q160 50 240 85 T390 90" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M140 130 Q240 150 340 120" stroke="#0d9488" strokeWidth="1.8" fill="none" opacity="0.4" />
    <path d="M160 50 L200 110 L280 60 L320 120" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4" />
    <path d="M200 110 L240 85 L280 60" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.6" />

    {/* Vibrant Glowing Constellation Nodes */}
    <circle cx="90" cy="90" r="10" fill="#0f766e" />
    <circle cx="90" cy="90" r="16" stroke="#14b8a6" strokeWidth="1.2" opacity="0.4" />

    <circle cx="160" cy="50" r="8" fill="#3b82f6" opacity="0.85" />
    <circle cx="140" cy="130" r="11" fill="#14b8a6" />

    <circle cx="200" cy="110" r="9" fill="#10b981" />

    <circle cx="240" cy="85" r="14" fill="#0d9488" />
    <circle cx="240" cy="85" r="22" stroke="#5eead4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="240" cy="85" r="5" fill="#fef08a" />

    <circle cx="280" cy="60" r="10" fill="#6366f1" opacity="0.85" />
    <circle cx="320" cy="120" r="9" fill="#14b8a6" />
    <circle cx="340" cy="75" r="7" fill="#10b981" />
    <circle cx="390" cy="90" r="11" fill="#0f766e" />
    <circle cx="390" cy="90" r="18" stroke="#14b8a6" strokeWidth="1.2" opacity="0.4" />

    {/* Gentle Creative Sparkles */}
    <polygon points="215,40 218,47 225,50 218,53 215,60 212,53 205,50 212,47" fill="#fbbf24" opacity="0.8" />
    <polygon points="275,120 277,125 282,127 277,129 275,134 273,129 268,127 273,125" fill="#fbbf24" opacity="0.8" />
  </svg>
);

/**
 * Sleep Disorders: Serene crescent moon resting in starlit twilight clouds, representing deep biological restoration.
 */
export const SleepIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a peaceful crescent moon resting among tranquil twilight clouds',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="sleepSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="50%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#134e4a" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#sleepSky)" />

    {/* Soft Constellation Stars */}
    <circle cx="60" cy="50" r="1.5" fill="#fef08a" opacity="0.7" />
    <circle cx="120" cy="30" r="1.2" fill="#e2e8f0" opacity="0.6" />
    <circle cx="180" cy="65" r="1" fill="#fef08a" opacity="0.5" />
    <circle cx="340" cy="40" r="1.2" fill="#e2e8f0" opacity="0.6" />
    <circle cx="400" cy="55" r="1.5" fill="#fef08a" opacity="0.7" />
    <circle cx="440" cy="30" r="1" fill="#ffffff" opacity="0.5" />

    {/* Serene Crescent Moon */}
    <path
      d="M260 50 A35 35 0 1 0 260 115 A26 26 0 1 1 260 50 Z"
      fill="#fef08a"
    />
    <circle cx="238" cy="82" r="38" stroke="#fef08a" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

    {/* Floating Restful Clouds */}
    <path
      d="M40 150 Q70 120 110 135 Q140 115 170 130 Q210 120 230 145 L230 180 L40 180 Z"
      fill="#334155"
      opacity="0.6"
    />
    <path
      d="M260 155 Q300 125 340 140 Q380 120 420 138 Q450 128 470 150 L470 180 L260 180 Z"
      fill="#334155"
      opacity="0.6"
    />
    <path
      d="M140 160 Q190 135 240 150 Q290 130 340 155 L340 180 L140 180 Z"
      fill="#115e59"
      opacity="0.8"
    />
  </svg>
);

/**
 * Eating Disorders: Wholesome table setting with a peaceful bowl of warm nourishment and grain stalks (NO body silhouettes, NO weight motifs).
 */
export const EatingIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a peaceful table setting with warm nourishing bowl and wholesome grain',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="eatBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fefce8" />
        <stop offset="100%" stopColor="#f0fdf4" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#eatBg)" />

    {/* Warm Serene Table Mat */}
    <rect x="120" y="80" width="240" height="70" rx="12" fill="#d1fae5" opacity="0.6" />
    <rect x="130" y="86" width="220" height="58" rx="8" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.5" />

    {/* Nourishing Ceramic Bowl */}
    <path
      d="M200 115 C200 138 280 138 280 115 L200 115 Z"
      fill="#0f766e"
    />
    <ellipse cx="240" cy="115" rx="40" ry="10" fill="#14b8a6" />
    <ellipse cx="240" cy="115" rx="34" ry="7" fill="#ccfbf1" />

    {/* Gentle Steaming Aroma (Warmth & Comfort) */}
    <path d="M230 102 Q226 90 232 80" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M240 100 Q244 88 238 76" stroke="#0f766e" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M250 102 Q254 90 248 80" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

    {/* Wholesome Wheat / Golden Grain Stalk on Side */}
    <path d="M305 130 C320 115 330 95 340 75" stroke="#d97706" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <ellipse cx="320" cy="110" rx="4" ry="7" transform="rotate(30 320 110)" fill="#f59e0b" />
    <ellipse cx="328" cy="98" rx="4" ry="7" transform="rotate(25 328 98)" fill="#fbbf24" />
    <ellipse cx="338" cy="84" rx="4" ry="7" transform="rotate(20 338 84)" fill="#fde047" />

    {/* Fresh Olive / Botanical Branch on Left */}
    <path d="M175 130 C160 115 150 95 140 75" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M165 115 C155 110 155 100 162 105 Z" fill="#10b981" />
    <path d="M152 98 C142 94 144 84 150 90 Z" fill="#34d399" />
  </svg>
);

/**
 * Somatic Symptom Disorders: Flowing harmony connecting mind, heart, and physical body in gentle equilibrium.
 */
export const SomaticIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration representing mind-body harmony, nervous system balance, and gentle physical restoration',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="somaticBg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f0fdfa" />
        <stop offset="50%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#fef3c7" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#somaticBg)" />

    {/* Concentric Mind-Body Resonance Waves */}
    <circle cx="160" cy="90" r="45" stroke="#14b8a6" strokeWidth="1.2" opacity="0.3" strokeDasharray="4 4" fill="none" />
    <circle cx="320" cy="90" r="45" stroke="#f59e0b" strokeWidth="1.2" opacity="0.3" strokeDasharray="4 4" fill="none" />

    {/* Connecting Flow Ribbon (Vagus Nerve & Nervous System Harmony) */}
    <path
      d="M160 90 C210 50 270 130 320 90"
      stroke="#0f766e"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M160 90 C210 130 270 50 320 90"
      stroke="#14b8a6"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />

    {/* Left Node: Calm Mind Sphere */}
    <circle cx="160" cy="90" r="22" fill="#0f766e" />
    <circle cx="160" cy="90" r="14" fill="#2dd4bf" />
    <circle cx="160" cy="90" r="6" fill="#f0fdfa" />

    {/* Right Node: Regulated Heart & Body Sphere */}
    <circle cx="320" cy="90" r="22" fill="#d97706" />
    <circle cx="320" cy="90" r="14" fill="#fbbf24" />
    <circle cx="320" cy="90" r="6" fill="#fffbeb" />

    {/* Soothing Flora in the Center Equilibrium */}
    <ellipse cx="240" cy="90" rx="8" ry="16" fill="#10b981" opacity="0.8" />
    <ellipse cx="240" cy="90" rx="16" ry="8" fill="#34d399" opacity="0.5" />
    <circle cx="240" cy="90" r="4" fill="#fef08a" />
  </svg>
);

/**
 * Geriatric Psychiatry: A venerable oak tree with flourishing leaves and graceful growth rings, celebrating dignity and longevity.
 */
export const GeriatricIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a flourishing oak tree and growth rings representing dignity, wisdom, and life continuity',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="gerBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fefce8" />
        <stop offset="100%" stopColor="#f0fdfa" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#gerBg)" />

    {/* Gentle Tree Rings of Life and Memory in Background */}
    <circle cx="240" cy="115" r="75" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.5" />
    <circle cx="240" cy="115" r="55" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.6" />
    <circle cx="240" cy="115" r="35" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.7" />

    {/* Sturdy Caring Trunk */}
    <path
      d="M232 165 C230 135 225 115 210 95 C222 100 234 100 240 85 C246 100 258 100 270 95 C255 115 250 135 248 165 Z"
      fill="#78350f"
    />
    <path d="M225 165 Q235 150 240 165 Q245 150 255 165" stroke="#451a03" strokeWidth="1.5" fill="none" />

    {/* Lush Flourishing Canopy Leaves */}
    <circle cx="240" cy="65" r="32" fill="#047857" opacity="0.9" />
    <circle cx="215" cy="72" r="25" fill="#059669" opacity="0.85" />
    <circle cx="265" cy="72" r="25" fill="#10b981" opacity="0.8" />
    <circle cx="240" cy="45" r="22" fill="#34d399" opacity="0.85" />

    {/* Golden Autumn Highlights (Dignity & Wisdom) */}
    <circle cx="230" cy="55" r="8" fill="#fbbf24" opacity="0.7" />
    <circle cx="255" cy="60" r="10" fill="#f59e0b" opacity="0.6" />

    {/* Solid Gentle Earth */}
    <path d="M120 165 Q240 155 360 165" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/**
 * Personality Disorders: A balanced sailboat on calm waters with a guiding compass star, symbolizing relational stability and steady self-identity.
 */
export const PersonalityIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a sailboat with guiding compass star finding steady equilibrium',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="persBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#persBg)" />

    {/* Guiding North Compass Star (Values & Core Self) */}
    <polygon points="240,25 244,38 257,42 244,46 240,59 236,46 223,42 236,38" fill="#0d9488" />
    <circle cx="240" cy="42" r="2" fill="#fef08a" />
    <circle cx="240" cy="42" r="25" stroke="#0d9488" strokeWidth="0.8" strokeDasharray="2 4" fill="none" opacity="0.4" />

    {/* Steady Keel Sailboat */}
    <path d="M210 135 L270 135 L260 150 L220 150 Z" fill="#0f766e" />
    {/* Mast & Sails */}
    <line x1="240" y1="65" x2="240" y2="135" stroke="#134e4a" strokeWidth="2.5" />
    <path d="M242 70 L268 125 L242 125 Z" fill="#14b8a6" />
    <path d="M238 78 L216 125 L238 125 Z" fill="#2dd4bf" opacity="0.85" />

    {/* Calm Balanced Ripples */}
    <path d="M120 150 Q180 144 240 150 T360 150" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M160 160 Q240 154 320 160" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);

/**
 * Perinatal Psychiatry: A tender, warm nest cradled by blooming lotus and willow leaves, representing maternal and family nurture.
 */
export const PerinatalIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a supportive nest with blooming flora representing maternal and perinatal nurture',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="perBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff1f2" />
        <stop offset="50%" stopColor="#fdf2f8" />
        <stop offset="100%" stopColor="#f0fdfa" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#perBg)" />

    {/* Warm Protective Radiance */}
    <circle cx="240" cy="90" r="50" fill="#fecdd3" opacity="0.4" />
    <circle cx="240" cy="90" r="70" stroke="#fda4af" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.3" />

    {/* Protective Embracing Willow / Olive Branches */}
    <path
      d="M160 140 C170 85 220 70 240 70 C260 70 310 85 320 140"
      stroke="#0f766e"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M190 95 C182 90 182 82 190 85 Z" fill="#14b8a6" />
    <path d="M290 95 C298 90 298 82 290 85 Z" fill="#14b8a6" />

    {/* Supportive Gentle Nest */}
    <ellipse cx="240" cy="130" rx="45" ry="18" fill="#fde68a" opacity="0.7" />
    <path
      d="M195 130 C200 150 280 150 285 130 Z"
      fill="#d97706"
      opacity="0.85"
    />

    {/* Blooming Lotus / Flower of Life in Nest */}
    <circle cx="240" cy="118" r="14" fill="#fb7185" />
    <circle cx="232" cy="120" r="10" fill="#f43f5e" opacity="0.8" />
    <circle cx="248" cy="120" r="10" fill="#f43f5e" opacity="0.8" />
    <circle cx="240" cy="112" r="10" fill="#fda4af" />
    <circle cx="240" cy="118" r="5" fill="#fef08a" />
  </svg>
);

/**
 * Women's Mental Health: A serene life-course archway with blossoming flora, warm protective glow, and biological balance ripples representing female resilience and wellbeing.
 */
export const WomensMentalHealthIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration showing a supportive archway, blooming lotus, and gentle ripples representing women\'s mental health across the life course',
}) => (
  <svg
    viewBox="0 0 480 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="wmhBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff1f2" />
        <stop offset="60%" stopColor="#fdf4ff" />
        <stop offset="100%" stopColor="#f0fdfa" />
      </linearGradient>
      <linearGradient id="wmhLotus" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#be123c" />
      </linearGradient>
    </defs>
    <rect width="480" height="180" rx="16" fill="url(#wmhBg)" />

    {/* Warm Radiance of Life Course */}
    <circle cx="240" cy="85" r="55" fill="#fce7f3" opacity="0.6" />
    <circle cx="240" cy="85" r="75" stroke="#fbcfe8" strokeWidth="1" strokeDasharray="5 7" fill="none" opacity="0.5" />
    <circle cx="240" cy="85" r="95" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="3 5" fill="none" opacity="0.35" />

    {/* Elegant Supportive Arch of Biological Resilience */}
    <path
      d="M150 150 C160 70 215 50 240 50 C265 50 320 70 330 150"
      stroke="#0f766e"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M175 105 C165 98 168 88 178 92 Z" fill="#0d9488" />
    <path d="M305 105 C315 98 312 88 302 92 Z" fill="#0d9488" />

    {/* Blossoming Lotus Centerpiece */}
    <ellipse cx="240" cy="132" rx="42" ry="14" fill="#fed7aa" opacity="0.6" />
    <path d="M210 132 C215 152 265 152 270 132 Z" fill="#0f766e" opacity="0.85" />
    <circle cx="240" cy="116" r="15" fill="#fb7185" />
    <circle cx="230" cy="118" r="11" fill="url(#wmhLotus)" opacity="0.85" />
    <circle cx="250" cy="118" r="11" fill="url(#wmhLotus)" opacity="0.85" />
    <circle cx="240" cy="108" r="11" fill="#fda4af" />
    <circle cx="240" cy="116" r="5" fill="#fef08a" />

    {/* Grounding Horizon Line */}
    <path d="M90 155 Q240 148 390 155" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

/**
 * Treatments Section Header: Two paths uniting across a bridge under a verdant archway, representing the collaborative therapeutic alliance.
 */
export const TreatmentsSectionIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration representing evidence-based psychotherapy, compassionate dialogue, and the therapeutic alliance',
}) => (
  <svg
    viewBox="0 0 520 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="treatSky" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#ccfbf1" />
      </linearGradient>
    </defs>
    <rect width="520" height="160" rx="16" fill="url(#treatSky)" />

    {/* Gentle Sun of Understanding */}
    <circle cx="260" cy="65" r="32" fill="#fef08a" opacity="0.75" />
    <circle cx="260" cy="65" r="48" stroke="#fde047" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" fill="none" />

    {/* Overarching Branch of Guidance */}
    <path
      d="M60 160 C140 60 380 60 460 160"
      stroke="#115e59"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    {/* Leaves on Branch */}
    <path d="M190 75 C180 65 185 55 195 62 Z" fill="#0d9488" />
    <path d="M230 63 C225 50 238 52 238 60 Z" fill="#14b8a6" />
    <path d="M290 63 C295 50 282 52 282 60 Z" fill="#14b8a6" />
    <path d="M330 75 C340 65 335 55 325 62 Z" fill="#0d9488" />

    {/* Two Meeting Paths Creating a Solid Bridge */}
    <path
      d="M100 160 Q180 140 235 125 L285 125 Q340 140 420 160 Z"
      fill="#0f766e"
      opacity="0.85"
    />
    <path
      d="M220 125 L300 125 L290 135 L230 135 Z"
      fill="#14b8a6"
    />

    {/* Central Flower of Personal Growth */}
    <circle cx="260" cy="115" r="7" fill="#10b981" />
    <circle cx="260" cy="115" r="3" fill="#fef08a" />
    <path d="M260 125 L260 115" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * Medications Section Header: Balanced biological equilibrium scales surrounded by restorative cellular and neurochemical rings.
 */
export const MedicationsSectionIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-full',
  ariaLabel = 'Calming illustration representing neurochemical equilibrium, molecular balance, and medical science',
}) => (
  <svg
    viewBox="0 0 520 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="medSky" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="50%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
    </defs>
    <rect width="520" height="160" rx="16" fill="url(#medSky)" />

    {/* Concentric Neurochemical Harmony Orbits */}
    <ellipse cx="260" cy="80" rx="130" ry="35" stroke="#0f766e" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.35" />
    <ellipse cx="260" cy="80" rx="80" ry="22" stroke="#14b8a6" strokeWidth="1.2" fill="none" opacity="0.45" />

    {/* Central Fulcrum of Scientific Balance */}
    <path d="M255 140 L260 70 L265 140 Z" fill="#115e59" />
    <circle cx="260" cy="70" r="7" fill="#0f766e" />
    <circle cx="260" cy="70" r="3" fill="#5eead4" />

    {/* Horizontal Scale Beam in Perfect Equilibrium */}
    <line x1="160" y1="70" x2="360" y2="70" stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />

    {/* Left Equilibrium Pan (Chemical Serenity) */}
    <line x1="180" y1="70" x2="165" y2="98" stroke="#14b8a6" strokeWidth="1.5" />
    <line x1="180" y1="70" x2="195" y2="98" stroke="#14b8a6" strokeWidth="1.5" />
    <path d="M155 98 Q180 115 205 98 Z" fill="#0d9488" />
    <circle cx="180" cy="92" r="6" fill="#5eead4" />

    {/* Right Equilibrium Pan (Clinical Wellbeing) */}
    <line x1="340" y1="70" x2="325" y2="98" stroke="#14b8a6" strokeWidth="1.5" />
    <line x1="340" y1="70" x2="355" y2="98" stroke="#14b8a6" strokeWidth="1.5" />
    <path d="M315 98 Q340 115 365 98 Z" fill="#0d9488" />
    <circle cx="340" cy="92" r="6" fill="#fde047" />

    {/* Stable Solid Foundation */}
    <rect x="230" y="140" width="60" height="8" rx="4" fill="#0f766e" />
  </svg>
);

/**
 * Universal Category Illustration Router Component
 */
export const CategoryIllustration: React.FC<{
  category: ConditionCategory | 'treatments';
  className?: string;
  ariaLabel?: string;
}> = ({ category, className = 'w-full h-40 sm:h-48', ariaLabel }) => {
  switch (category) {
    case 'mood':
      return <MoodIllustration className={className} ariaLabel={ariaLabel} />;
    case 'anxiety':
      return <AnxietyIllustration className={className} ariaLabel={ariaLabel} />;
    case 'ocd':
      return <OCDIllustration className={className} ariaLabel={ariaLabel} />;
    case 'psychotic':
      return <PsychoticIllustration className={className} ariaLabel={ariaLabel} />;
    case 'trauma':
      return <TraumaIllustration className={className} ariaLabel={ariaLabel} />;
    case 'neurodevelopmental':
      return <NeurodevelopmentalIllustration className={className} ariaLabel={ariaLabel} />;
    case 'sleep':
      return <SleepIllustration className={className} ariaLabel={ariaLabel} />;
    case 'eating':
      return <EatingIllustration className={className} ariaLabel={ariaLabel} />;
    case 'somatic':
      return <SomaticIllustration className={className} ariaLabel={ariaLabel} />;
    case 'geriatric':
      return <GeriatricIllustration className={className} ariaLabel={ariaLabel} />;
    case 'personality':
      return <PersonalityIllustration className={className} ariaLabel={ariaLabel} />;
    case 'perinatal':
      return <PerinatalIllustration className={className} ariaLabel={ariaLabel} />;
    case 'treatments':
      return <TreatmentsSectionIllustration className={className} ariaLabel={ariaLabel} />;
    default:
      return <MoodIllustration className={className} ariaLabel={ariaLabel} />;
  }
};
