import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, RotateCcw, Info } from 'lucide-react';
import { Language } from '../../types';

interface NeurotransmitterSynapseDiagramProps {
  currentLang: Language;
  className?: string;
}

export const NeurotransmitterSynapseDiagram: React.FC<NeurotransmitterSynapseDiagramProps> = ({
  currentLang,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);

  const t = {
    en: {
      title: 'How Brain Cells Communicate (Synaptic Transmission)',
      caption:
        'Neurons communicate by releasing chemical messengers (neurotransmitters like serotonin, dopamine, and GABA) across the synaptic cleft into receptor sites. Psychiatric medications and lifestyle supports help regulate this delicate neurochemical equilibrium.',
      play: 'Play Animation',
      pause: 'Pause Animation',
      reset: 'Reset',
      presynaptic: 'Presynaptic Neuron Terminal (Sending)',
      postsynaptic: 'Postsynaptic Neuron (Receiving)',
      cleft: 'Synaptic Cleft',
      vesicles: 'Synaptic Vesicles',
      neurotransmitters: 'Neurotransmitters (Serotonin / Dopamine / GABA)',
      receptors: 'Neurotransmitter Receptors',
      reuptake: 'Reuptake Transporter Pump',
      signal: 'Electrical Signal (Action Potential)',
      binding: 'Chemical Binding & Channel Activation',
      reducedMotionNotice: 'Motion reduced based on system settings. Showing static clinical diagram.',
    },
    hi: {
      title: 'मस्तिष्क की कोशिकाएं कैसे संवाद करती हैं (सिनैप्टिक संचरण)',
      caption:
        'मस्तिष्क की न्यूरॉन कोशिकाएं सिनैप्टिक गैप के माध्यम से सेरोटोनिन, डोपामिन और गाबा जैसे रासायनिक संदेशवाहकों को रिसेप्टर्स तक भेजकर संवाद करती हैं। दवाएं और थेरेपी इसी रासायनिक संतुलन को सामान्य बनाती हैं।',
      play: 'एनीमेशन चलाएं',
      pause: 'एनीमेशन रोकें',
      reset: 'रीसेट करें',
      presynaptic: 'प्रेषक न्यूरॉन (प्री-सिनैप्टिक)',
      postsynaptic: 'प्राप्तकर्ता न्यूरॉन (पोस्ट-सिनैप्टिक)',
      cleft: 'सिनैप्टिक गैप (दरार)',
      vesicles: 'रासायनिक पुटिकाएं (वेसिकल्स)',
      neurotransmitters: 'न्यूरोट्रांसमीटर (सेरोटोनिन/डोपामिन/गाबा)',
      receptors: 'रिसेप्टर केंद्र (ग्राही)',
      reuptake: 'पुनर्ग्रहण चैनल (री-अपटेक पंप)',
      signal: 'विद्युत संकेत (इम्पल्स)',
      binding: 'रासायनिक जुड़ाव व संकेत सक्रियण',
      reducedMotionNotice: 'सिस्टम सेटिंग्स के अनुसार गति सीमित की गई है। स्थिर आरेख प्रदर्शित है।',
    },
    gu: {
      title: 'મગજના કોષો કેવી રીતે સંવાદ કરે છે (સિનૅપ્ટિક સંદેશાવ્યવહાર)',
      caption:
        'મગજના ન્યુરોન્સ સિરોટોનિન, ડોપામાઇન અને ગાબા જેવા રાસાયણિક દૂતો દ્વારા સંદેશાઓ મોકલે છે. દવાઓ અને યોગ્ય ઉપચાર આ રાસાયણિક સંતુલનને પુનઃસ્થાપિત કરવામાં મદદ કરે છે.',
      play: 'એનિમેશન ચલાવો',
      pause: 'એનિમેશન થોભાવો',
      reset: 'રીસેટ કરો',
      presynaptic: 'મોકલનાર ન્યુરોન (પ્રી-સિનૅપ્ટિક)',
      postsynaptic: 'મેળવનાર ન્યુરોન (પોસ્ટ-સિનૅપ્ટિક)',
      cleft: 'સિનૅપ્ટિક જગ્યા',
      vesicles: 'રાસાયણિક કોથળીઓ',
      neurotransmitters: 'ન્યુરોટ્રાન્સમીટર (સિરોટોનિન/ડોપામાઇન/ગાબા)',
      receptors: 'ગ્રાહક કેન્દ્રો (રિસેપ્ટર્સ)',
      reuptake: 'રી-અપટેક પંપ',
      signal: 'વીજળીક સિગ્નલ',
      binding: 'રાસાયણિક જોડાણ અને સક્રિયતા',
      reducedMotionNotice: 'સિસ્ટમ સેટિંગ્સ મુજબ એનિમેશન ઘટાડેલ છે. સ્થિર ડાયાગ્રામ દર્શાવેલ છે.',
    },
  }[currentLang];

  const animateActive = isPlaying && !prefersReducedMotion;

  return (
    <div
      className={`rounded-2xl border border-teal-200/80 bg-gradient-to-b from-teal-50/60 to-stone-50 p-4 sm:p-5 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-teal-600 animate-pulse" />
          <h4 className="text-xs sm:text-sm font-bold text-teal-950 tracking-wide">
            {t.title}
          </h4>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? t.pause : t.play}
            className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300 bg-white px-3 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-50 transition cursor-pointer min-h-[36px]"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-teal-700" />
                <span>{t.pause}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-teal-700" />
                <span>{t.play}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {prefersReducedMotion && (
        <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1.5 text-xs text-amber-800 border border-amber-200">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>{t.reducedMotionNotice}</span>
        </div>
      )}

      {/* Interactive Animated SVG Stage */}
      <div className="relative my-4 aspect-[2.4/1] w-full overflow-hidden rounded-xl border border-teal-100 bg-stone-900 shadow-inner">
        <svg
          viewBox="0 0 600 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={t.title}
        >
          <defs>
            <linearGradient id="axonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#115e59" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
            <linearGradient id="postGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#134e4a" />
            </linearGradient>
            <radialGradient id="molGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>
          </defs>

          {/* Background grid lines */}
          <line x1="0" y1="125" x2="600" y2="125" stroke="#334155" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />

          {/* 1. Presynaptic Terminal (Top Bulb) */}
          <path
            d="M 230 0 L 230 45 C 230 85 180 105 180 115 C 180 120 420 120 420 115 C 420 105 370 85 370 45 L 370 0 Z"
            fill="url(#axonGrad)"
            stroke="#2dd4bf"
            strokeWidth="1.5"
          />

          {/* Action potential electrical impulse arrow */}
          <line x1="300" y1="10" x2="300" y2="45" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
          <polygon points="300,55 294,43 306,43" fill="#fef08a" />
          <text x="312" y="32" fill="#fef08a" fontSize="10" fontWeight="600" fontFamily="sans-serif">
            {t.signal}
          </text>

          {/* Reuptake transporter pumps on presynaptic membrane */}
          <rect x="200" y="112" width="18" height="6" rx="2" fill="#38bdf8" />
          <rect x="382" y="112" width="18" height="6" rx="2" fill="#38bdf8" />

          {/* Synaptic Vesicles inside presynaptic bulb */}
          <g>
            <circle cx="260" cy="75" r="16" stroke="#99f6e4" strokeWidth="1.5" fill="#134e4a" />
            <circle cx="256" cy="72" r="3" fill="#fde047" />
            <circle cx="264" cy="73" r="3" fill="#fde047" />
            <circle cx="260" cy="79" r="3" fill="#fde047" />

            <circle cx="340" cy="75" r="16" stroke="#99f6e4" strokeWidth="1.5" fill="#134e4a" />
            <circle cx="336" cy="72" r="3" fill="#fde047" />
            <circle cx="344" cy="73" r="3" fill="#fde047" />
            <circle cx="340" cy="79" r="3" fill="#fde047" />

            <circle cx="300" cy="90" r="15" stroke="#99f6e4" strokeWidth="1.5" fill="#134e4a" />
            <circle cx="296" cy="88" r="3" fill="#fde047" />
            <circle cx="304" cy="89" r="3" fill="#fde047" />
            <circle cx="300" cy="95" r="3" fill="#fde047" />
          </g>

          {/* 2. Synaptic Cleft Area (Middle Gap: Y ~ 120 to 160) */}
          <rect x="150" y="121" width="300" height="38" fill="#0f172a" opacity="0.6" />
          <text x="70" y="142" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="sans-serif">
            ← {t.cleft} →
          </text>

          {/* Animated Neurotransmitter Molecules Crossing the Cleft */}
          {animateActive ? (
            <>
              {/* Molecule 1 */}
              <motion.circle
                cx={250}
                r={4.5}
                fill="url(#molGlow)"
                initial={{ cy: 115, opacity: 0 }}
                animate={{
                  cy: [115, 135, 158],
                  opacity: [0, 1, 0.9],
                  scale: [0.8, 1.2, 1],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Molecule 2 */}
              <motion.circle
                cx={290}
                r={4.5}
                fill="url(#molGlow)"
                initial={{ cy: 115, opacity: 0 }}
                animate={{
                  cy: [115, 132, 158],
                  opacity: [0, 1, 0.9],
                  scale: [0.8, 1.2, 1],
                }}
                transition={{ duration: 2.6, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Molecule 3 */}
              <motion.circle
                cx={320}
                r={4.5}
                fill="url(#molGlow)"
                initial={{ cy: 115, opacity: 0 }}
                animate={{
                  cy: [115, 137, 158],
                  opacity: [0, 1, 0.9],
                  scale: [0.8, 1.2, 1],
                }}
                transition={{ duration: 2.3, delay: 1.0, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Molecule 4 */}
              <motion.circle
                cx={360}
                r={4.5}
                fill="url(#molGlow)"
                initial={{ cy: 115, opacity: 0 }}
                animate={{
                  cy: [115, 134, 158],
                  opacity: [0, 1, 0.9],
                  scale: [0.8, 1.2, 1],
                }}
                transition={{ duration: 2.5, delay: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Molecule 5 (Reuptake movement upward) */}
              <motion.circle
                cx={209}
                r={4}
                fill="url(#molGlow)"
                initial={{ cy: 145, opacity: 0.8 }}
                animate={{
                  cy: [145, 125, 110],
                  opacity: [0.9, 0.7, 0],
                }}
                transition={{ duration: 2.8, delay: 0.7, repeat: Infinity, ease: 'easeOut' }}
              />
            </>
          ) : (
            /* Static fallback representation */
            <g>
              <circle cx="250" cy="138" r="4.5" fill="url(#molGlow)" />
              <circle cx="290" cy="142" r="4.5" fill="url(#molGlow)" />
              <circle cx="320" cy="136" r="4.5" fill="url(#molGlow)" />
              <circle cx="360" cy="140" r="4.5" fill="url(#molGlow)" />
              <circle cx="209" cy="128" r="4" fill="url(#molGlow)" opacity="0.8" />
            </g>
          )}

          {/* 3. Postsynaptic Membrane & Receptors (Bottom: Y ~ 160 to 250) */}
          <path
            d="M 100 160 L 500 160 L 500 250 L 100 250 Z"
            fill="url(#postGrad)"
            stroke="#14b8a6"
            strokeWidth="1.5"
          />

          {/* Receptors Cups embedded in postsynaptic membrane */}
          {[220, 250, 290, 320, 360].map((rx, idx) => (
            <g key={rx}>
              {/* Cup Receptor */}
              <path
                d={`M ${rx - 9} 160 C ${rx - 9} 170 ${rx + 9} 170 ${rx + 9} 160 Z`}
                fill="#f59e0b"
                stroke="#fde047"
                strokeWidth="1.2"
              />
              {/* Activation channel line descending into receiving cell */}
              <line x1={rx} y1="170" x2={rx} y2="195" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.6" />
            </g>
          ))}

          {/* Postsynaptic activated signal waves */}
          <path d="M 210 205 Q 300 190 390 205" stroke="#5eead4" strokeWidth="2" strokeDasharray="4 4" fill="none" opacity="0.7" />
          <path d="M 180 220 Q 300 200 420 220" stroke="#5eead4" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.5" />

          {/* Annotations & Labels */}
          <text x="300" y="235" fill="#f0fdfa" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
            {t.postsynaptic} • {t.binding}
          </text>
          <text x="300" y="15" fill="#f0fdfa" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
            {t.presynaptic}
          </text>
        </svg>
      </div>

      {/* Legend & Trilingual Educational Caption */}
      <div className="grid sm:grid-cols-3 gap-2 text-[11px] font-medium text-stone-700 bg-white/80 p-2.5 rounded-xl border border-teal-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
          <span>{t.neurotransmitters}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-600 shrink-0" />
          <span>{t.receptors}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-sky-400 shrink-0" />
          <span>{t.reuptake}</span>
        </div>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
        {t.caption}
      </p>
    </div>
  );
};
