import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Wind, Brain, Activity } from 'lucide-react';
import { Language } from '../../types';

interface PortalHeroVisualProps {
  currentLang: Language;
  className?: string;
}

/**
 * PortalHeroVisual: The central vivid visual moment for the HomeView.
 * Explicitly designed around the core tenets of Clinical Psychiatry:
 * - The universal Psychiatric emblem Psi (Ψ)
 * - Cortical neurobiology, synaptic transmission & neurotransmitter pathways (5-HT, DA, GABA)
 * - Vagal parasympathetic regulation (4-2-6 breath pacer)
 * - Clinical EEG Alpha rhythm (8-12 Hz) representing neurological calm & homeostasis
 * - Biopsychosocial equilibrium (Biological, Psychological, Social)
 */
export const PortalHeroVisual: React.FC<PortalHeroVisualProps> = ({
  currentLang,
  className = 'w-full h-44 sm:h-56 md:h-64',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isPacerActive] = useState(true);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [secondsRemaining, setSecondsRemaining] = useState(4);

  useEffect(() => {
    if (!isPacerActive || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          if (phase === 'inhale') {
            setPhase('hold');
            return 2;
          } else if (phase === 'hold') {
            setPhase('exhale');
            return 6;
          } else {
            setPhase('inhale');
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPacerActive, phase, prefersReducedMotion]);

  const phaseLabel = {
    en: {
      inhale: 'Inhale gently...',
      hold: 'Softly hold...',
      exhale: 'Slowly exhale...',
      pacerBadge: '4-2-6 Vagus Pacer',
      portalBadge: 'Clinical Psychiatry & Neurobiology',
      bio: 'Biological',
      psycho: 'Psychological',
      social: 'Social',
      eegLabel: 'α Alpha Rhythm (8–12 Hz) • Neurological Equilibrium',
    },
    hi: {
      inhale: 'सांस अंदर लें...',
      hold: 'सहजता से रोकें...',
      exhale: 'धीरे सांस छोड़ें...',
      pacerBadge: '4-2-6 वेगस पेसर',
      portalBadge: 'मनोरोग विज्ञान व तंत्रिका संतुलन',
      bio: 'जैविक (न्यूरोबायोलॉजी)',
      psycho: 'मनोवैज्ञानिक (संज्ञान)',
      social: 'सामाजिक (सहानुभूति)',
      eegLabel: 'α अल्फा तरंग (8–12 Hz) • तंत्रिका संतुलन व शांति',
    },
    gu: {
      inhale: 'શ્વાસ અંદર લો...',
      hold: 'હળવેથી રોકો...',
      exhale: 'શ્વાસ બહાર કાઢો...',
      pacerBadge: '4-2-6 વેગસ પેસર',
      portalBadge: 'મનોચિકિત્સા વિજ્ઞાન અને ન્યુરોબાયોલોજી',
      bio: 'જૈવિક (ન્યુરોકેમિસ્ટ્રી)',
      psycho: 'મનોવૈજ્ઞાનિક (વિચાર)',
      social: 'સામાજિક (સહાય)',
      eegLabel: 'α આલ્ફા રિધમ (૮–૧૨ Hz) • ન્યુરોલોજીકલ સંતુલન',
    },
  }[currentLang];

  const ariaLabel =
    currentLang === 'en'
      ? 'Clinical psychiatry artwork featuring the Greek Psi symbol, synaptic cerebral neural networks, neurotransmitter pathways, and a vagal breath pacer'
      : currentLang === 'hi'
      ? 'मनोरोग विज्ञान का प्रतीक साई (Ψ), सेरेब्रल न्यूरल नेटवर्क और 4-2-6 ब्रीदिंग पेसर को दर्शाता वैज्ञानिक चित्रण'
      : 'મનોચિકિત્સા પ્રતીક સાઈ (Ψ), ન્યુરલ સર્કિટ અને શ્વાસોચ્છવાસ પેસર દર્શાવતું વૈજ્ઞાનિક ચિત્ર';

  // Animation variants respecting reduced motion
  const transitionBase = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: 'easeOut' as const };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-xl border border-stone-200/90 bg-white shadow-xs ${className}`}
    >
      {/* Top Left Clinical Psychiatry Badge */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-teal-200/80 shadow-2xs text-[11px] sm:text-xs text-teal-950 select-none pointer-events-none">
        <Brain className="w-3.5 h-3.5 text-teal-700 shrink-0" />
        <span className="font-semibold tracking-tight text-teal-900">
          {phaseLabel.portalBadge}
        </span>
      </div>

      {/* Top Right Floating Parasympathetic Breath Pacer Pill */}
      {!prefersReducedMotion && (
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-stone-200/90 shadow-2xs text-[11px] sm:text-xs text-stone-700 select-none pointer-events-none">
          <Wind className="w-3.5 h-3.5 text-teal-700 shrink-0" />
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              phase === 'inhale'
                ? 'bg-amber-500'
                : phase === 'hold'
                ? 'bg-purple-600'
                : 'bg-teal-600'
            }`}
            aria-hidden="true"
          />
          <span className="font-medium text-stone-800 tracking-tight hidden sm:inline">
            {phaseLabel[phase]}
          </span>
          <span className="font-mono text-[10px] text-stone-600 font-semibold bg-stone-100 px-1.5 py-0.5 rounded">
            {secondsRemaining}s
          </span>
        </div>
      )}

      {/* Main SVG Artwork */}
      <svg
        viewBox="0 0 800 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        role="img"
        aria-label={ariaLabel}
      >
        <defs>
          {/* Clinical Psychiatry Canvas Gradient: Soft porcelain to serotonergic cyan to calm plum */}
          <linearGradient id="psychiatrySkyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="25%" stopColor="#F0FDFA" />
            <stop offset="55%" stopColor="#FAF5FF" />
            <stop offset="85%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#F0FDF4" />
          </linearGradient>

          {/* Synaptic & EEG Coordinate Grid Pattern */}
          <pattern id="synapticGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F766E" strokeWidth="0.5" strokeOpacity="0.06" />
            <circle cx="40" cy="0" r="1.2" fill="#0F766E" opacity="0.12" />
          </pattern>

          {/* Greek Psi (Ψ) Stem & Arm Gradient */}
          <linearGradient id="psiStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="30%" stopColor="#0F766E" />
            <stop offset="70%" stopColor="#115E59" />
            <stop offset="100%" stopColor="#5E4A72" />
          </linearGradient>

          {/* Golden Beacon of Consciousness & Recovery */}
          <linearGradient id="marigoldSun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B86B26" />
          </linearGradient>

          {/* Cerebral Cortex Gyri Gradient */}
          <linearGradient id="cortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#5E4A72" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#B86B26" stopOpacity="0.25" />
          </linearGradient>

          {/* Synaptic Cleft Field Glow */}
          <radialGradient id="synapticCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#99F6E4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FAF5FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Backdrop Sky Canvas: TARGETED SELECTED ELEMENT */}
        <rect width="800" height="280" fill="url(#psychiatrySkyGrad)" />

        {/* 2. Synaptic & Coordinate Grid Overlay */}
        <rect width="800" height="280" fill="url(#synapticGrid)" />

        {/* 3. Neural Synaptic Network & Axon Arborization */}
        <g stroke="#0F766E" strokeOpacity="0.22" strokeWidth="1.2" strokeLinecap="round">
          {/* Left Hemisphere Frontal Circuitry */}
          <path d="M 120 70 Q 180 55 240 85 T 320 110" fill="none" strokeDasharray="3 4" />
          <path d="M 80 130 Q 150 115 220 140 T 310 160" fill="none" />
          <path d="M 140 180 Q 200 160 270 190 T 340 210" fill="none" strokeDasharray="4 4" />

          {/* Right Hemisphere Neuroplastic Sprouting */}
          <path d="M 680 70 Q 620 55 560 85 T 480 110" fill="none" strokeDasharray="3 4" />
          <path d="M 720 130 Q 650 115 580 140 T 490 160" fill="none" />
          <path d="M 660 180 Q 600 160 530 190 T 460 210" fill="none" strokeDasharray="4 4" />
        </g>

        {/* 4. Symmetrical Cerebral Cortex Contours (Left & Right Hemispheres) */}
        <path
          d="M 230 180 C 210 130, 240 80, 290 70 C 330 60, 360 85, 380 110"
          fill="none"
          stroke="#0F766E"
          strokeWidth="1.8"
          strokeOpacity="0.45"
        />
        <path
          d="M 570 180 C 590 130, 560 80, 510 70 C 470 60, 440 85, 420 110"
          fill="none"
          stroke="#5E4A72"
          strokeWidth="1.8"
          strokeOpacity="0.45"
        />

        {/* Cortical Gyri & Sulci folds */}
        <path
          d="M 260 110 Q 285 95 315 115 T 355 130"
          fill="none"
          stroke="#0D9488"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.6"
        />
        <path
          d="M 540 110 Q 515 95 485 115 T 445 130"
          fill="none"
          stroke="#7E22CE"
          strokeWidth="1.2"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        {/* 5. Central Synaptic Core Glow */}
        <circle cx="400" cy="135" r="95" fill="url(#synapticCoreGlow)" />

        {/* 6. Concentric Neural Oscillation Rings (syncing with vagal respiration) */}
        <motion.g
          animate={
            prefersReducedMotion
              ? { opacity: 0.6 }
              : {
                  opacity: [0.4, 0.75, 0.75, 0.4],
                  scale: [0.97, 1.03, 1.03, 0.97],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.333, 0.5, 1],
                }
          }
          style={{ transformOrigin: '400px 135px' }}
        >
          <circle cx="400" cy="135" r="75" stroke="#14B8A6" strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
          <circle cx="400" cy="135" r="105" stroke="#F59E0B" strokeWidth="1" strokeDasharray="6 8" opacity="0.35" />
          <circle cx="400" cy="135" r="135" stroke="#8B5CF6" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.25" />
        </motion.g>

        {/* 7. Golden Consciousness Core with Synchronized Breath Pacing */}
        <motion.circle
          cx="400"
          cy="135"
          r="42"
          fill="url(#marigoldSun)"
          animate={
            prefersReducedMotion
              ? { r: 42, opacity: 0.95 }
              : {
                  r: [40, 50, 50, 40],
                  opacity: [0.88, 1, 1, 0.88],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.333, 0.5, 1],
                }
          }
        />
        <motion.circle
          cx="400"
          cy="135"
          r="49"
          stroke="#FDE68A"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={
            prefersReducedMotion
              ? { r: 49, opacity: 0.7 }
              : {
                  r: [47, 58, 58, 47],
                  opacity: [0.4, 0.85, 0.85, 0.4],
                  rotate: [0, 180, 180, 360],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.333, 0.5, 1],
                }
          }
          style={{ transformOrigin: '400px 135px' }}
        />

        {/* 8. The Universal Psychiatric Symbol Psi (Ψ) Centerpiece */}
        <g id="psychiatry-psi-symbol">
          {/* Outer Curved Arms of the Psi (Ψ) */}
          <motion.path
            d="M 310 95 C 310 185, 360 215, 400 215 C 440 215, 490 185, 490 95"
            fill="none"
            stroke="url(#psiStemGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ ...transitionBase, duration: 1.2 }}
          />

          {/* Left and Right Finials of the Psi Symbol */}
          <circle cx="310" cy="95" r="4.5" fill="#0F766E" />
          <circle cx="490" cy="95" r="4.5" fill="#5E4A72" />

          {/* Central Vertical Ascending Stem of the Psi (Ψ) */}
          <motion.line
            x1="400"
            y1="52"
            x2="400"
            y2="238"
            stroke="url(#psiStemGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ ...transitionBase, duration: 1 }}
          />

          {/* Top Golden Beacon at the Apex of Psi (Representing Insight & Recovery) */}
          <circle cx="400" cy="52" r="6" fill="#F59E0B" />
          <circle cx="400" cy="52" r="9" stroke="#FDE68A" strokeWidth="1.5" opacity="0.75" />
          <circle cx="400" cy="238" r="4" fill="#5E4A72" />
        </g>

        {/* 9. Neurotransmitter Key Nodes & Pathways */}
        {/* Serotonin (5-HT) Node - Left Temporal/Limbic Circuit */}
        <g transform="translate(195, 88)">
          <circle cx="0" cy="0" r="14" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#0F766E" fontSize="9" fontWeight="bold" fontFamily="system-ui">
            5-HT
          </text>
          <text x="0" y="24" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="600" opacity="0.8">
            Serotonin
          </text>
        </g>

        {/* Dopamine (DA) Node - Left Mesolimbic Reward Axis */}
        <g transform="translate(125, 145)">
          <circle cx="0" cy="0" r="14" fill="#FFFBEB" stroke="#B86B26" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#B86B26" fontSize="9" fontWeight="bold" fontFamily="system-ui">
            DA
          </text>
          <text x="0" y="24" textAnchor="middle" fill="#B86B26" fontSize="8" fontWeight="600" opacity="0.8">
            Dopamine
          </text>
        </g>

        {/* GABA Inhibitory Node - Right Prefrontal/Anxiolysis Axis */}
        <g transform="translate(605, 88)">
          <circle cx="0" cy="0" r="14" fill="#FAF5FF" stroke="#6B21A8" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#6B21A8" fontSize="9" fontWeight="bold" fontFamily="system-ui">
            GABA
          </text>
          <text x="0" y="24" textAnchor="middle" fill="#6B21A8" fontSize="8" fontWeight="600" opacity="0.8">
            Calm / Balance
          </text>
        </g>

        {/* BDNF Neuroplasticity Node - Right Hippocampal Growth Axis */}
        <g transform="translate(675, 145)">
          <circle cx="0" cy="0" r="14" fill="#F0FDF4" stroke="#15803D" strokeWidth="1.2" />
          <text x="0" y="3.5" textAnchor="middle" fill="#15803D" fontSize="8.5" fontWeight="bold" fontFamily="system-ui">
            BDNF
          </text>
          <text x="0" y="24" textAnchor="middle" fill="#15803D" fontSize="8" fontWeight="600" opacity="0.8">
            Neuroplasticity
          </text>
        </g>

        {/* Synaptic Vesicle Micro-Particles Drifting Across Pathways */}
        <circle cx="235" cy="115" r="2" fill="#0D9488" opacity="0.8" />
        <circle cx="270" cy="135" r="2.5" fill="#B86B26" opacity="0.8" />
        <circle cx="530" cy="135" r="2.5" fill="#7E22CE" opacity="0.8" />
        <circle cx="565" cy="115" r="2" fill="#16A34A" opacity="0.8" />

        {/* 10. Clinical EEG Alpha Rhythm Waveform (8-12 Hz) across the lower baseline */}
        <g id="clinical-eeg-trace">
          {/* Baseline guide line */}
          <line x1="40" y1="248" x2="760" y2="248" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />

          {/* Calm Alpha brainwave showing restoration of clinical equilibrium */}
          <path
            d="M 40 248 L 120 248 Q 135 242 145 254 T 165 248 L 220 248 C 240 240, 260 256, 280 248 C 300 240, 320 256, 340 248 C 360 242, 380 254, 400 248 C 420 242, 440 254, 460 248 C 480 240, 500 256, 520 248 C 540 240, 560 256, 580 248 L 635 248 Q 650 242 660 254 T 680 248 L 760 248"
            fill="none"
            stroke="#0F766E"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Dynamic EEG Pulse Head */}
          <motion.circle
            cx="400"
            cy="248"
            r="3.5"
            fill="#0F766E"
            animate={
              prefersReducedMotion
                ? { opacity: 0.8 }
                : {
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }
          />

          {/* EEG Legend Label */}
          <text
            x="400"
            y="266"
            textAnchor="middle"
            fill="#64748B"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.04em"
            fontFamily="system-ui"
          >
            {phaseLabel.eegLabel}
          </text>
        </g>

        {/* 11. Biopsychosocial Trinity Grounding Legend (Left, Center, Right) */}
        <g fontSize="8.5" fontWeight="600" fontFamily="system-ui" opacity="0.75">
          {/* Biological */}
          <text x="120" y="266" textAnchor="middle" fill="#0F766E">
            ● {phaseLabel.bio}
          </text>

          {/* Psychological (Center) is flanked by the EEG label */}

          {/* Social */}
          <text x="680" y="266" textAnchor="middle" fill="#5E4A72">
            ● {phaseLabel.social}
          </text>
        </g>

        {/* Bottom Tri-Color Clinical Border Accent */}
        <line x1="0" y1="278" x2="270" y2="278" stroke="#0F766E" strokeWidth="3" />
        <line x1="270" y1="278" x2="530" y2="278" stroke="#B86B26" strokeWidth="3" />
        <line x1="530" y1="278" x2="800" y2="278" stroke="#5E4A72" strokeWidth="3" />
      </svg>
    </motion.div>
  );
};
