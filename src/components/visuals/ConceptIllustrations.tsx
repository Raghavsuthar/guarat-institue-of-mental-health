import React from 'react';

interface IllustrationProps {
  className?: string;
  ariaLabel?: string;
}

/**
 * Neural Circuitry & Brain Concept Illustration:
 * Used in biological causes and neurobiology sections to illustrate synaptic pathways and biological balance without stigmatizing imagery.
 */
export const NeuralCircuitryIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-44 sm:h-52',
  ariaLabel = 'Illustration of neural circuitry and chemical transmission pathways within the human brain',
}) => (
  <svg
    viewBox="0 0 460 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="brainBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
      <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0f766e" />
        <stop offset="50%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect width="460" height="180" rx="14" fill="url(#brainBg)" />

    {/* Stylized Cerebral Hemisphere Outline */}
    <path
      d="M130 145 C90 140 70 115 75 85 C80 55 110 35 155 35 C175 35 195 42 210 52 C225 38 250 32 275 35 C320 40 350 70 345 105 C340 135 315 150 280 150 C265 150 250 144 240 138 C230 152 205 155 180 155 C160 155 145 150 130 145 Z"
      stroke="#0f766e"
      strokeWidth="2"
      strokeDasharray="4 4"
      fill="none"
      opacity="0.4"
    />

    {/* Neural Interconnecting Pathways */}
    <path d="M120 90 L160 65 L210 85 L260 60 L300 95" stroke="url(#neuralGrad)" strokeWidth="2.5" fill="none" />
    <path d="M160 65 L170 120 L230 130 L260 60" stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.7" />
    <path d="M210 85 L230 130 L290 130 L300 95" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.6" />
    <path d="M120 90 L170 120" stroke="#0f766e" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.5" />

    {/* Synaptic Nodes */}
    <circle cx="120" cy="90" r="8" fill="#0f766e" />
    <circle cx="120" cy="90" r="14" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />

    <circle cx="160" cy="65" r="9" fill="#14b8a6" />
    <circle cx="160" cy="65" r="3" fill="#fef08a" />

    <circle cx="210" cy="85" r="11" fill="#0d9488" />
    <circle cx="210" cy="85" r="18" stroke="#5eead4" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.5" />
    <circle cx="210" cy="85" r="4" fill="#fef08a" />

    <circle cx="260" cy="60" r="9" fill="#3b82f6" />
    <circle cx="300" cy="95" r="8" fill="#0f766e" />

    <circle cx="170" cy="120" r="8" fill="#0d9488" />
    <circle cx="230" cy="130" r="10" fill="#14b8a6" />
    <circle cx="290" cy="130" r="7" fill="#3b82f6" />

    {/* Transmitting Signal Pulses */}
    <circle cx="185" cy="75" r="3.5" fill="#f59e0b" />
    <circle cx="235" cy="72" r="3.5" fill="#f59e0b" />
    <circle cx="200" cy="108" r="3" fill="#10b981" />
    <circle cx="260" cy="130" r="3" fill="#10b981" />

    {/* Educational Text Labels */}
    <text x="75" y="168" fill="#0f766e" fontSize="10" fontWeight="600" fontFamily="sans-serif">
      Prefrontal Networks
    </text>
    <text x="210" y="24" fill="#0f766e" fontSize="10" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">
      Neurochemical Equilibrium
    </text>
    <text x="375" y="168" fill="#0f766e" fontSize="10" fontWeight="600" fontFamily="sans-serif" textAnchor="end">
      Limbic Regulation
    </text>
  </svg>
);

/**
 * Support Network & Family Circle Concept Illustration:
 * Used in family interventions, psychoeducation, and social support sections.
 */
export const SupportNetworkIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-44 sm:h-52',
  ariaLabel = 'Illustration of an interconnected circle of care representing family, friends, clinicians, and community support',
}) => (
  <svg
    viewBox="0 0 460 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="supportBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fefce8" />
        <stop offset="50%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#f0fdf4" />
      </linearGradient>
    </defs>
    <rect width="460" height="180" rx="14" fill="url(#supportBg)" />

    {/* Concentric Embracing Circles of Care */}
    <circle cx="230" cy="90" r="68" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4 6" fill="none" opacity="0.4" />
    <circle cx="230" cy="90" r="42" stroke="#0f766e" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.5" />

    {/* Central Safe Haven Sphere (The Individual) */}
    <circle cx="230" cy="90" r="20" fill="#0f766e" />
    <circle cx="230" cy="90" r="14" fill="#2dd4bf" />
    <circle cx="230" cy="90" r="6" fill="#ffffff" />

    {/* Radiating Caring Pillars / Petals (Family, Doctor, Therapist, Community) */}
    {/* Top: Clinical & Psychiatric Care */}
    <circle cx="230" cy="28" r="13" fill="#0d9488" />
    <path d="M230 41 L230 70" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
    <text x="230" y="16" fill="#134e4a" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
      Psychiatric Care
    </text>

    {/* Bottom: Family & Loved Ones */}
    <circle cx="230" cy="152" r="13" fill="#059669" />
    <path d="M230 139 L230 110" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    <text x="230" y="174" fill="#065f46" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
      Family & Loved Ones
    </text>

    {/* Left: Psychotherapy & Counseling */}
    <circle cx="162" cy="90" r="13" fill="#3b82f6" />
    <path d="M175 90 L210 90" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    <text x="135" y="94" fill="#1e3a8a" fontSize="9" fontWeight="600" textAnchor="end" fontFamily="sans-serif">
      Psychotherapy
    </text>

    {/* Right: Community & Peer Support */}
    <circle cx="298" cy="90" r="13" fill="#d97706" />
    <path d="M285 90 L250 90" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
    <text x="322" y="94" fill="#78350f" fontSize="9" fontWeight="600" textAnchor="start" fontFamily="sans-serif">
      Community Support
    </text>

    {/* Connecting Diagonal Branches */}
    <circle cx="182" cy="46" r="6" fill="#14b8a6" opacity="0.8" />
    <line x1="187" y1="51" x2="215" y2="76" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="3 3" />

    <circle cx="278" cy="46" r="6" fill="#14b8a6" opacity="0.8" />
    <line x1="273" y1="51" x2="245" y2="76" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="3 3" />

    <circle cx="182" cy="134" r="6" fill="#14b8a6" opacity="0.8" />
    <line x1="187" y1="129" x2="215" y2="104" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="3 3" />

    <circle cx="278" cy="134" r="6" fill="#14b8a6" opacity="0.8" />
    <line x1="273" y1="129" x2="245" y2="104" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="3 3" />
  </svg>
);

/**
 * Growth & Recovery Path Concept Illustration:
 * Used in recovery outlook, relapse prevention, and rehabilitation sections.
 */
export const GrowthPathIllustration: React.FC<IllustrationProps> = ({
  className = 'w-full h-44 sm:h-52',
  ariaLabel = 'Illustration of a winding stepping-stone pathway leading to a bright, calm sunrise horizon',
}) => (
  <svg
    viewBox="0 0 460 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="growthSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
        <stop offset="60%" stopColor="#f0fdfa" />
        <stop offset="100%" stopColor="#ccfbf1" />
      </linearGradient>
    </defs>
    <rect width="460" height="180" rx="14" fill="url(#growthSky)" />

    {/* Radiant Horizon of Long-Term Recovery */}
    <circle cx="230" cy="50" r="30" fill="#fde047" opacity="0.8" />
    <circle cx="230" cy="50" r="50" stroke="#fde047" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />

    {/* Rolling Terraces of Stability */}
    <path d="M-20 180 L-20 110 Q100 85 230 95 Q360 85 480 110 L480 180 Z" fill="#99f6e4" opacity="0.4" />
    <path d="M-20 180 L-20 130 Q120 110 230 118 Q340 110 480 130 L480 180 Z" fill="#5eead4" opacity="0.5" />
    <path d="M-20 180 L-20 150 Q120 130 230 140 Q340 130 480 150 L480 180 Z" fill="#0f766e" />

    {/* Stepping Stones of Incremental Progress */}
    <ellipse cx="230" cy="98" rx="16" ry="6" fill="#115e59" />
    <ellipse cx="226" cy="115" rx="22" ry="8" fill="#14b8a6" />
    <ellipse cx="234" cy="134" rx="30" ry="10" fill="#2dd4bf" />
    <ellipse cx="228" cy="155" rx="40" ry="12" fill="#99f6e4" />

    {/* Flourishing Wildflowers of Resilience along Path */}
    {/* Left Flower */}
    <path d="M120 160 Q120 140 130 130" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
    <circle cx="130" cy="128" r="6" fill="#fbbf24" />
    <circle cx="130" cy="128" r="2.5" fill="#f59e0b" />
    <path d="M124 145 C116 142 116 136 122 138 Z" fill="#10b981" />

    {/* Right Flower */}
    <path d="M340 160 Q340 140 330 130" stroke="#047857" strokeWidth="2" strokeLinecap="round" />
    <circle cx="330" cy="128" r="6" fill="#fb7185" />
    <circle cx="330" cy="128" r="2.5" fill="#f43f5e" />
    <path d="M336 145 C344 142 344 136 338 138 Z" fill="#10b981" />

    {/* Inspiring Milestone Labels */}
    <text x="230" y="86" fill="#0f766e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
      Sustained Wellness & Relapse Prevention
    </text>
  </svg>
);
