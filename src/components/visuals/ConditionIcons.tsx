import React from 'react';

export interface ConditionIconProps {
  conditionIcon?: string;
  conditionId?: string;
  className?: string;
  ariaLabel?: string;
}

interface BaseIconProps {
  className?: string;
  ariaLabel?: string;
}

/**
 * 1. Major Depressive Disorder (Depression)
 * Lifting raincloud parting to reveal an ascending warm amber sunbeam.
 */
export const DepressionIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of depression recovery: parting cloud with a rising ray of warm sunlight',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="depCloud" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#99f6e4" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
      <linearGradient id="depSun" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    {/* Emerging Sun & Rays */}
    <circle cx="28" cy="18" r="9" fill="url(#depSun)" />
    <path d="M28 6V3M37 9L39 7M40 18H43M37 27L39 29" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    {/* Gently Parting Soft Cloud */}
    <path
      d="M11 36C7.686 36 5 33.314 5 30C5 27.02 7.17 24.55 10.02 24.08C10.74 18.98 15.11 15 20.4 15C24.38 15 27.79 17.26 29.5 20.6C30.6 20.2 31.78 20 33 20C37.42 20 41 23.58 41 28C41 32.42 37.42 36 33 36H11Z"
      fill="url(#depCloud)"
      fillOpacity="0.88"
    />
    {/* Upward Rising Light Vector */}
    <path d="M19 33L24 26L29 33" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 2. Bipolar Disorder
 * Dual harmonic waves (golden crest & teal trough) balancing along a serene center horizon.
 */
export const BipolarIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of bipolar mood stabilization: dual harmonic waves meeting at an equilibrium line',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="bipSun" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#d97706" />
      </linearGradient>
      <linearGradient id="bipTeal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
    </defs>
    {/* Central Equilibrium Horizon */}
    <line x1="6" y1="24" x2="42" y2="24" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
    {/* Warm High Energy Flow Arc */}
    <path
      d="M8 24C12 12 18 10 24 24"
      stroke="url(#bipSun)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="16" cy="14" r="3.5" fill="#f59e0b" />
    {/* Cool Deep Restoration Flow Arc */}
    <path
      d="M24 24C30 38 36 36 40 24"
      stroke="url(#bipTeal)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="34" r="3.5" fill="#0f766e" />
    {/* Central Harmony Anchor Point */}
    <circle cx="24" cy="24" r="4.5" fill="#ffffff" stroke="#115e59" strokeWidth="2" />
  </svg>
);

/**
 * 3. Generalized Anxiety Disorder (GAD)
 * Rapid agitated ripple smoothly settling into wide glassy calm lines.
 */
export const AnxietyGADIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of anxiety down-regulation: oscillating wave settling into calm glassy water',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Fast Oscillations settling into peaceful laminar lines */}
    <path
      d="M6 24C7.5 17 9.5 17 11 24C12.5 31 14.5 31 16 24C18 19 21 19 24 24C28 29 34 24 42 24"
      stroke="#0f766e"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Secondary calming baseline waves */}
    <path
      d="M10 32C14 29 20 29 26 32C31 34 37 32 42 32"
      stroke="#14b8a6"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.8"
    />
    <path
      d="M16 16C22 17 28 15 34 16C38 16.5 40 16 42 16"
      stroke="#5eead4"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* Calming grounding bead */}
    <circle cx="42" cy="24" r="2.5" fill="#f59e0b" />
  </svg>
);

/**
 * 4. Panic Disorder & Panic Attacks
 * Tachycardic peak smoothing into a deep sinusoidal vagal curve with a solid anchor.
 */
export const PanicDisorderIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of panic recovery: sharp heartbeat peak regulated into calm vagus breathing wave',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Cardiac Spike transitioning into soft resonant vagal wave */}
    <path
      d="M6 28H14L17 12L21 38L24 22L27 28C30 28 32 19 36 19C40 19 41 28 44 28"
      stroke="#0d9488"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Grounding Anchor Dot */}
    <circle cx="36" cy="19" r="3.5" fill="#f59e0b" />
    <path d="M26 38H44" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
  </svg>
);

/**
 * 5. Obsessive-Compulsive Disorder (OCD)
 * Repetitive closed circular loop unspooling into an open, liberating forward path.
 */
export const OCDIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of OCD recovery: compulsive cognitive loop breaking open into a clear forward direction',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Inner Loop */}
    <path
      d="M22 13C16 13 11 18 11 24C11 30 16 35 22 35C28 35 33 30 33 24C33 19 29 15 24 15C19 15 15 19 15 24C15 28 18 31 22 31C26 31 29 28 29 24"
      stroke="#115e59"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Path unspooling freely towards the right */}
    <path
      d="M29 24C29 18 35 14 43 14"
      stroke="#f59e0b"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <polygon points="43,11 47,14 43,17" fill="#f59e0b" />
  </svg>
);

/**
 * 6. Schizophrenia & Psychotic Disorders
 * Diffuse sensory facets refocused through a crystalline prism into a clear, unified beam.
 */
export const SchizophreniaIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of psychotic recovery: refocused crystal prism producing unified clarity of thought',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="schizPrism" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5eead4" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
    </defs>
    {/* Diffuse input facets on the left */}
    <line x1="6" y1="16" x2="18" y2="22" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 3" />
    <line x1="6" y1="24" x2="18" y2="24" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 3" />
    <line x1="6" y1="32" x2="18" y2="26" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 3" />
    {/* Crystalline Integrating Prism */}
    <polygon
      points="24,10 32,24 24,38 16,24"
      fill="url(#schizPrism)"
      stroke="#115e59"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="3.5" fill="#fef3c7" />
    {/* Cohesive, solid focused light beam on the right */}
    <line x1="32" y1="24" x2="44" y2="24" stroke="#f59e0b" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="32" y1="22" x2="42" y2="20" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="26" x2="42" y2="28" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 7. Post-Traumatic Stress Disorder (PTSD)
 * Protective silhouette with a radiant golden kintsugi seam down the center.
 */
export const PTSDIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of trauma recovery: kintsugi mended golden seam on a protective shield',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Protective Shield Contour */}
    <path
      d="M24 7L38 12V24C38 33 24 41 24 41C24 41 10 33 10 24V12L24 7Z"
      fill="#ccfbf1"
      stroke="#0f766e"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Radiant Kintsugi Golden Mending Seam */}
    <path
      d="M24 8L22 17L27 22L21 28L25 34L24 40"
      stroke="#d97706"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Glow points along the repair */}
    <circle cx="22" cy="17" r="1.5" fill="#fbbf24" />
    <circle cx="27" cy="22" r="1.5" fill="#fbbf24" />
    <circle cx="21" cy="28" r="1.5" fill="#fbbf24" />
  </svg>
);

/**
 * 8. Geriatric Psychiatry (Dementia & Delirium)
 * Concentric tree rings of lived experience anchored by an enduring lantern flame.
 */
export const GeriatricIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of geriatric care: rings of wisdom and memory cradling a steady lantern light',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Concentric Annual Rings */}
    <circle cx="24" cy="24" r="18" stroke="#115e59" strokeWidth="1.6" strokeDasharray="5 3" opacity="0.6" />
    <circle cx="24" cy="24" r="13" stroke="#0f766e" strokeWidth="1.8" strokeDasharray="6 3" opacity="0.8" />
    <circle cx="24" cy="24" r="8" stroke="#14b8a6" strokeWidth="2" />
    {/* Steady Enduring Lantern Flame */}
    <path
      d="M24 16C24 16 20 21 20 24C20 26.2 21.8 28 24 28C26.2 28 28 26.2 28 24C28 21 24 16 24 16Z"
      fill="#f59e0b"
    />
    <circle cx="24" cy="25" r="2" fill="#fef08a" />
  </svg>
);

/**
 * 9. Anorexia Nervosa
 * Gentle cupping hands nourishing an emergent green sprout with twin leaves.
 */
export const AnorexiaIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of anorexia recovery: tender hands nourishing a thriving green leaf sprout',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Cupping Caring Hands */}
    <path
      d="M8 32C12 38 20 40 24 40C28 40 36 38 40 32C36 35 28 36 24 36C20 36 12 35 8 32Z"
      fill="#0f766e"
    />
    <path
      d="M10 26C14 31 19 33 24 33C29 33 34 31 38 26"
      stroke="#0f766e"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Growing Sprout Stem */}
    <path d="M24 34V18" stroke="#115e59" strokeWidth="2.4" strokeLinecap="round" />
    {/* Twin Nourishing Leaves */}
    <path
      d="M24 23C20 18 13 19 13 24C18 25 22 24 24 23Z"
      fill="#2dd4bf"
      stroke="#0f766e"
      strokeWidth="1.5"
    />
    <path
      d="M24 18C28 13 35 14 35 19C30 20 26 19 24 18Z"
      fill="#34d399"
      stroke="#059669"
      strokeWidth="1.5"
    />
    <circle cx="24" cy="14" r="2.5" fill="#f59e0b" />
  </svg>
);

/**
 * 10. Bulimia Nervosa
 * Rhythmic balanced vessel containing calm water at a restorative, steady level.
 */
export const BulimiaIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of bulimia recovery: balanced vessel holding calm, rhythmic water without excess or depletion',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Harmonious Ceramic Bowl Silhouette */}
    <path
      d="M10 18H38C38 31 29 38 24 38C19 38 10 31 10 18Z"
      fill="#f0fdfa"
      stroke="#0f766e"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Balanced Water Level with Steady Rhythmic Surface */}
    <path
      d="M12 25C15 23 18 27 21 25C24 23 27 27 30 25C33 23 35 25 36 25"
      stroke="#14b8a6"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="24" cy="31" r="3" fill="#f59e0b" />
    <line x1="8" y1="18" x2="40" y2="18" stroke="#115e59" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/**
 * 11. Binge Eating Disorder (BED)
 * Mindful directional compass with a warm stabilizing anchor at its core.
 */
export const BingeEatingIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of binge eating recovery: mindful internal compass and stabilizing anchor',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Outer Dial Circle */}
    <circle cx="24" cy="24" r="17" stroke="#14b8a6" strokeWidth="2" />
    {/* Four Cardinal Markers of Mindful Presence */}
    <line x1="24" y1="9" x2="24" y2="12" stroke="#0f766e" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="24" y1="36" x2="24" y2="39" stroke="#0f766e" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="9" y1="24" x2="12" y2="24" stroke="#0f766e" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="36" y1="24" x2="39" y2="24" stroke="#0f766e" strokeWidth="2.2" strokeLinecap="round" />
    {/* Calming Core Anchor / Lotus */}
    <path
      d="M24 16L27 23L34 24L28 28L30 35L24 31L18 35L20 28L14 24L21 23L24 16Z"
      fill="#fef3c7"
      stroke="#f59e0b"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="25" r="2.5" fill="#0f766e" />
  </svg>
);

/**
 * 12. Attention-Deficit / Hyperactivity Disorder (ADHD)
 * Dynamic scattered dots channeling inward into a crisp, focused central diamond.
 */
export const ADHDIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of ADHD focus: energetic orbiting particles converging into a clear central spark',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Scattered outer energetic particles */}
    <circle cx="8" cy="14" r="2.5" fill="#f59e0b" />
    <circle cx="12" cy="36" r="2.5" fill="#0f766e" />
    <circle cx="38" cy="11" r="2.5" fill="#14b8a6" />
    <circle cx="41" cy="34" r="2.5" fill="#f59e0b" />
    <circle cx="24" cy="6" r="2.2" fill="#5eead4" />
    {/* Inward convergent guidance lines */}
    <line x1="10" y1="16" x2="19" y2="21" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="14" y1="34" x2="20" y2="27" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="36" y1="13" x2="28" y2="21" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="39" y1="32" x2="28" y2="27" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* Central Brilliant Diamond of Hyperfocus & Executive Drive */}
    <polygon points="24,15 31,24 24,33 17,24" fill="#0f766e" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="3" fill="#fef08a" />
  </svg>
);

/**
 * 13. Autism Spectrum Disorder (ASD)
 * Harmonic open spiral with interconnected geometric facets celebrating neurodiversity.
 */
export const AutismIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of autism acceptance: open harmonic gradient spiral celebrating neurodiverse perception',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Flowing Harmonic Spiral Arcs */}
    <path
      d="M24 24A4 4 0 0 1 28 20A8 8 0 0 1 36 28A12 12 0 0 1 24 40A16 16 0 0 1 8 24A20 20 0 0 1 28 4"
      stroke="#0f766e"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    {/* Interconnected Perspective Gems */}
    <circle cx="24" cy="24" r="3" fill="#f59e0b" />
    <circle cx="28" cy="20" r="3.2" fill="#14b8a6" />
    <circle cx="36" cy="28" r="3.5" fill="#7c3aed" />
    <circle cx="24" cy="40" r="3" fill="#f59e0b" />
    <circle cx="8" cy="24" r="3.5" fill="#0d9488" />
    <circle cx="28" cy="4" r="3" fill="#fbbf24" />
  </svg>
);

/**
 * 14. Social Anxiety Disorder (Social Phobia)
 * Warm illuminated doorway and stepping bridge inviting safe human connection.
 */
export const SocialAnxietyIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of social anxiety exposure: open illuminated doorway leading to a welcoming circle',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Open Welcoming Portal Arch */}
    <path
      d="M13 38V18C13 12 18 7 24 7C30 7 35 12 35 18V38"
      stroke="#0f766e"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* Warm Light Beaming Outward */}
    <polygon points="17,38 24,20 31,38" fill="#fef3c7" opacity="0.8" />
    {/* Welcoming Gathering Circle at Threshold */}
    <circle cx="24" cy="22" r="3.5" fill="#f59e0b" />
    <circle cx="16" cy="38" r="3" fill="#14b8a6" />
    <circle cx="24" cy="38" r="3" fill="#0f766e" />
    <circle cx="32" cy="38" r="3" fill="#14b8a6" />
    <line x1="8" y1="38" x2="40" y2="38" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 15. Specific Phobia
 * Ascending stepped ladder of gradual exposure leading up to a calm golden sun.
 */
export const SpecificPhobiaIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of phobia desensitization: ascending steps of courage leading toward a shining sun',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Radiant Summit Sun */}
    <circle cx="37" cy="13" r="7" fill="#fef08a" stroke="#f59e0b" strokeWidth="2" />
    <path d="M37 3V1M44 6L46 4M47 13H49M44 20L46 22" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
    {/* Ascending Steps of Systematic Desensitization */}
    <path
      d="M7 38H15V31H23V24H31V17H38"
      stroke="#0f766e"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Confident footing markers along the journey */}
    <circle cx="15" cy="31" r="2" fill="#14b8a6" />
    <circle cx="23" cy="24" r="2" fill="#14b8a6" />
    <circle cx="31" cy="17" r="2" fill="#14b8a6" />
  </svg>
);

/**
 * 16. Insomnia Disorder
 * Glowing twilight crescent cradling a soft resting feather with slow circadian night breezes.
 */
export const InsomniaIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of insomnia treatment: calm crescent moon cradling a feather with gentle night waves',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Serene Crescent Moon */}
    <path
      d="M31 10C24 11 19 16 19 23C19 31 25 37 33 37C35 37 37 36 39 35C33 40 23 39 17 33C11 27 12 17 18 11C22 7 27 8 31 10Z"
      fill="#ccfbf1"
      stroke="#0f766e"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Floating Restful Feather */}
    <path
      d="M24 16C29 16 34 19 36 24C32 25 28 23 25 20L23 25"
      stroke="#f59e0b"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Slow Circadian Waves */}
    <path
      d="M10 40C16 38 22 42 28 40C34 38 40 41 42 40"
      stroke="#14b8a6"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="35" cy="14" r="1.5" fill="#f59e0b" />
  </svg>
);

/**
 * 17. Somatic Symptom Disorder
 * Mind-body interconnected resonance rings (neural teal & visceral amber).
 */
export const SomaticSymptomIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of mind-body integration: harmonic intersecting rings connecting neurological and physical well-being',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Neural Ring (Teal) */}
    <ellipse
      cx="20"
      cy="24"
      rx="12"
      ry="15"
      stroke="#0f766e"
      strokeWidth="2.5"
      transform="rotate(-15 20 24)"
    />
    {/* Visceral Somatic Ring (Warm Amber) */}
    <ellipse
      cx="28"
      cy="24"
      rx="12"
      ry="15"
      stroke="#f59e0b"
      strokeWidth="2.5"
      transform="rotate(15 28 24)"
    />
    {/* Harmonic Convergence Core */}
    <circle cx="24" cy="24" r="3.5" fill="#ffffff" stroke="#115e59" strokeWidth="2" />
  </svg>
);

/**
 * 18. Illness Anxiety Disorder (Hypochondriasis)
 * Reassuring leaf shield with a calm horizontal baseline of bodily trust.
 */
export const IllnessAnxietyIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of bodily reassurance: peaceful shield embracing a gentle restorative leaf',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Protective Reassuring Shield Contour */}
    <path
      d="M24 7C31 10 37 12 37 20C37 30 29 37 24 41C19 37 11 30 11 20C11 12 17 10 24 7Z"
      fill="#f0fdfa"
      stroke="#0f766e"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    {/* Gentle Peepal/Olive Leaf within representing body safety */}
    <path
      d="M24 16C29 16 32 21 31 27C27 28 24 26 24 21C24 26 21 28 17 27C16 21 19 16 24 16Z"
      fill="#2dd4bf"
      stroke="#115e59"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M24 20V32" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="34" r="2" fill="#f59e0b" />
  </svg>
);

/**
 * 19. Persistent Depressive Disorder (Dysthymia)
 * Unfolding spiral koru fern frond symbolizing patient, enduring neuroplastic growth.
 */
export const PersistentDepressionIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of steady dysthymia recovery: spiral koru fern frond unrolling into vital leaves',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Unfurling Spiral Koru Stem */}
    <path
      d="M12 40C12 30 20 23 26 21C31 19 34 14 31 10C28 6 22 7 21 12C20 16 24 18 26 17"
      stroke="#0f766e"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* Small emergent leaf shoots */}
    <path
      d="M16 31C20 28 23 29 23 33"
      stroke="#14b8a6"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M20 24C24 21 28 22 27 26"
      stroke="#2dd4bf"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Golden spark of enduring vitality at the tip */}
    <circle cx="26" cy="17" r="2.5" fill="#f59e0b" />
    <line x1="8" y1="41" x2="38" y2="41" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * 20. Premenstrual Dysphoric Disorder (PMDD)
 * Complete monthly lunar arc balanced by a stabilizing golden horizontal axis.
 */
export const PMDDIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of PMDD hormonal balance: cyclical lunar phase arc smoothed by an unwavering horizontal axis',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Moon Cycle Arc */}
    <path
      d="M8 24C8 14 15 7 24 7C33 7 40 14 40 24"
      stroke="#7c3aed"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeDasharray="4 3"
    />
    {/* Stabilizing Neuroendocrine Horizon */}
    <line x1="6" y1="24" x2="42" y2="24" stroke="#f59e0b" strokeWidth="2.8" strokeLinecap="round" />
    {/* Three Phase Milestones: Waxing, Full Balance, Waning Ease */}
    <circle cx="12" cy="17" r="3" fill="#a78bfa" />
    <circle cx="24" cy="7" r="4.5" fill="#fef08a" stroke="#f59e0b" strokeWidth="2" />
    <circle cx="36" cy="17" r="3" fill="#a78bfa" />
    {/* Grounding Base Support Arc */}
    <path
      d="M14 28C18 33 30 33 34 28"
      stroke="#0f766e"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * 21. Personality Disorders: Clinical Overview
 * Sculpted multifaceted gemstone resting in an empathetic supportive cradle.
 */
export const PersonalityDisordersIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of personality growth: multifaceted crystal held safely in an empathetic cradle',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    <defs>
      <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa" />
        <stop offset="50%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#0f766e" />
      </linearGradient>
    </defs>
    {/* Multifaceted Sculpted Gemstone of Identity */}
    <polygon
      points="24,8 34,16 30,28 18,28 14,16"
      fill="url(#gemGrad)"
      stroke="#115e59"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Inner Facet Lines */}
    <line x1="24" y1="8" x2="24" y2="28" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
    <line x1="14" y1="16" x2="34" y2="16" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
    {/* Empathetic Holding Cradle */}
    <path
      d="M10 28C13 36 20 40 24 40C28 40 35 36 38 28"
      stroke="#f59e0b"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * 22. Perinatal & Postpartum Depression and Anxiety
 * Nurturing protective nest cradling a rising golden sun of dawn.
 */
export const PostpartumIcon: React.FC<BaseIconProps> = ({
  className = 'w-6 h-6',
  ariaLabel = 'Symbol of perinatal recovery: intertwined protective nest holding a warm rising sun of maternal hope',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label={ariaLabel}
  >
    {/* Rising Morning Sun of Hope */}
    <circle cx="24" cy="20" r="8" fill="#fef08a" stroke="#f59e0b" strokeWidth="2" />
    <path d="M24 8V6M16 12L14 10M32 12L34 10" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
    {/* Intertwined Protective Nest of Family Care */}
    <path
      d="M9 25C13 35 35 35 39 25"
      stroke="#0f766e"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M13 29C17 38 31 38 35 29"
      stroke="#14b8a6"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M17 33C20 39 28 39 31 33"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Master Map linking all 22 condition IDs/conditionIcon keys to their unique SVG component.
 */
export const conditionIconsMap: Record<string, React.FC<BaseIconProps>> = {
  'depression': DepressionIcon,
  'major-depressive-disorder': DepressionIcon,
  'bipolar': BipolarIcon,
  'bipolar-disorder': BipolarIcon,
  'anxiety-gad': AnxietyGADIcon,
  'generalized-anxiety-disorder': AnxietyGADIcon,
  'panic-disorder': PanicDisorderIcon,
  'ocd': OCDIcon,
  'obsessive-compulsive-disorder': OCDIcon,
  'schizophrenia': SchizophreniaIcon,
  'ptsd': PTSDIcon,
  'post-traumatic-stress-disorder': PTSDIcon,
  'geriatric-dementia-delirium': GeriatricIcon,
  'geriatric-psychiatry-dementia-delirium': GeriatricIcon,
  'anorexia-nervosa': AnorexiaIcon,
  'bulimia-nervosa': BulimiaIcon,
  'binge-eating-disorder': BingeEatingIcon,
  'adhd': ADHDIcon,
  'attention-deficit-hyperactivity-disorder-adhd': ADHDIcon,
  'autism-spectrum-disorder': AutismIcon,
  'autism-spectrum-disorder-asd': AutismIcon,
  'social-anxiety-disorder': SocialAnxietyIcon,
  'specific-phobia': SpecificPhobiaIcon,
  'insomnia-disorder': InsomniaIcon,
  'somatic-symptom-disorder': SomaticSymptomIcon,
  'illness-anxiety-disorder': IllnessAnxietyIcon,
  'persistent-depressive-disorder': PersistentDepressionIcon,
  'persistent-depressive-disorder-dysthymia': PersistentDepressionIcon,
  'pmdd': PMDDIcon,
  'premenstrual-dysphoric-disorder-pmdd': PMDDIcon,
  'personality-disorders-overview': PersonalityDisordersIcon,
  'postpartum-depression-and-anxiety': PostpartumIcon,
};

/**
 * Universal Condition Icon Dispatcher
 */
export const ConditionIcon: React.FC<ConditionIconProps> = ({
  conditionIcon,
  conditionId,
  className = 'w-6 h-6',
  ariaLabel,
}) => {
  const key = conditionIcon || conditionId || '';
  const Component = conditionIconsMap[key] || DepressionIcon;
  return <Component className={className} ariaLabel={ariaLabel} />;
};
