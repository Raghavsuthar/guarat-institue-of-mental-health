import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, RotateCcw, Wind, Heart, Info } from 'lucide-react';
import { Language } from '../../types';

interface BreathingPacerProps {
  currentLang: Language;
  className?: string;
  defaultPattern?: 'calm' | 'box';
}

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'pause';

export const BreathingPacer: React.FC<BreathingPacerProps> = ({
  currentLang,
  className = '',
  defaultPattern = 'calm',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const [pattern, setPattern] = useState<'calm' | 'box'>(defaultPattern);
  const [phase, setPhase] = useState<BreathingPhase>('inhale');
  const [secondsRemaining, setSecondsRemaining] = useState(4);

  const t = {
    en: {
      title: 'Evidence-Based Calming Breathing Pacer',
      subtitle: 'Activate your vagus nerve and downregulate physical anxiety through paced respiration.',
      calmMode: '4-2-6 Calming Breath (Anxiety Relief)',
      boxMode: '4-4-4-4 Box Breathing (Focus & Grounding)',
      start: 'Start Calming Pacer',
      pause: 'Pause Pacer',
      reset: 'Reset',
      inhale: 'Breathe In Gently Through Nose...',
      hold: 'Gently Hold...',
      exhale: 'Slowly Exhale Through Mouth...',
      pausePhase: 'Rest & Settle...',
      reducedMotionTitle: 'Paced Respiration Instructions (Reduced Motion Mode)',
      reducedMotionStep1: '1. Inhale smoothly through your nose for 4 seconds, feeling your diaphragm expand.',
      reducedMotionStep2: '2. Hold softly for 2 to 4 seconds without straining.',
      reducedMotionStep3: '3. Exhale slowly and completely through slightly parted lips for 6 seconds.',
      reducedMotionStep4: '4. Repeat gently for 3 to 5 minutes to restore autonomic balance.',
      clinicalNote:
        'Clinical Fact: Prolonged exhalation stimulates the parasympathetic branch of the autonomic nervous system via the vagus nerve, reducing heart rate and muscle tension.',
    },
    hi: {
      title: 'वैज्ञानिक श्वास गति निर्धारक (ब्रीदिंग पेसर)',
      subtitle: 'गहरी और धीमी सांसों द्वारा वेगस नर्व को सक्रिय करें और घबराहट को शांत करें।',
      calmMode: '4-2-6 शांत श्वास (चिंता से राहत)',
      boxMode: '4-4-4-4 बॉक्स ब्रीदिंग (स्थिरता व ध्यान)',
      start: 'शुरू करें',
      pause: 'रोकें',
      reset: 'रीसेट',
      inhale: 'नाक से धीरे-धीरे सांस अंदर लें...',
      hold: 'सांस को सहजता से रोकें...',
      exhale: 'मुंह से धीरे-धीरे सांस बाहर छोड़ें...',
      pausePhase: 'आराम से विश्राम करें...',
      reducedMotionTitle: 'धीमी सांस लेने के चरण (स्थिर मोड)',
      reducedMotionStep1: '1. नाक से 4 सेकंड तक धीरे-धीरे सांस अंदर लें।',
      reducedMotionStep2: '2. बिना किसी तनाव के 2 से 4 सेकंड तक सांस रोकें।',
      reducedMotionStep3: '3. होंठों को हल्का खोलकर 6 सेकंड में पूरी सांस धीरे-धीरे बाहर छोड़ें।',
      reducedMotionStep4: '4. शरीर और मन को शांत करने के लिए इसे 3 से 5 मिनट दोहराएं।',
      clinicalNote:
        'चिकित्सीय तथ्य: सांस को लंबा बाहर छोड़ने से वेगस तंत्रिका सक्रिय होती है, जिससे दिल की धड़कन सामान्य होती है और मांसपेशियों का तनाव घटता है।',
    },
    gu: {
      title: 'વૈજ્ઞાનિક શ્વાસોચ્છવાસ નિયંત્રક (બ્રીધિંગ પેસર)',
      subtitle: 'ધીમી અને ઊંડી શ્વાસ દ્વારા નર્વસ સિસ્ટમને શાંત કરો અને ગભરાટ દૂર કરો.',
      calmMode: '4-2-6 શાંત શ્વાસ (ચિંતા મુક્તિ)',
      boxMode: '4-4-4-4 બોક્સ બ્રીધિંગ (ધ્યાન અને સ્થિરતા)',
      start: 'શરૂ કરો',
      pause: 'થોભાવો',
      reset: 'રીસેટ',
      inhale: 'નાક દ્વારા ધીમેથી શ્વાસ અંદર લો...',
      hold: 'હળવેથી શ્વાસ રોકો...',
      exhale: 'મોં દ્વારા ધીમેથી શ્વાસ બહાર કાઢો...',
      pausePhase: 'શાંતિથી વિરામ લો...',
      reducedMotionTitle: 'શ્વાસોચ્છવાસની પદ્ધતિ (સ્થિર મોડ)',
      reducedMotionStep1: '1. નાક દ્વારા 4 સેકન્ડ સુધી ધીમેથી શ્વાસ અંદર ખેંચો.',
      reducedMotionStep2: '2. તણાવ વગર 2 થી 4 સેકન્ડ શ્વાસ પકડી રાખો.',
      reducedMotionStep3: '3. 6 સેકન્ડ સુધી ધીમેથી પૂરો શ્વાસ બહાર કાઢો.',
      reducedMotionStep4: '4. માનસિક શાંતિ માટે આ 3 થી 5 મિનિટ સુધી કરો.',
      clinicalNote:
        'તબીબી હકીકત: શ્વાસને ધીમેથી બહાર કાઢવાથી હૃદયના ધબકારા નિયંત્રિત થાય છે અને સ્નાયુઓનો તણાવ હળવો થાય છે.',
    },
  }[currentLang];

  // Timing configuration based on pattern
  const timings = pattern === 'calm'
    ? { inhale: 4, hold: 2, exhale: 6, pause: 1 }
    : { inhale: 4, hold: 4, exhale: 4, pause: 4 };

  useEffect(() => {
    if (!isActive || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          // Transition to next phase
          if (phase === 'inhale') {
            setPhase('hold');
            return timings.hold;
          } else if (phase === 'hold') {
            setPhase('exhale');
            return timings.exhale;
          } else if (phase === 'exhale') {
            if (pattern === 'box') {
              setPhase('pause');
              return timings.pause;
            } else {
              setPhase('inhale');
              return timings.inhale;
            }
          } else {
            setPhase('inhale');
            return timings.inhale;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase, pattern, timings, prefersReducedMotion]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsRemaining(timings.inhale);
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale':
        return t.inhale;
      case 'hold':
        return t.hold;
      case 'exhale':
        return t.exhale;
      case 'pause':
        return t.pausePhase;
    }
  };

  return (
    <div
      className={`rounded-2xl border border-teal-200/90 bg-gradient-to-b from-teal-50/70 to-stone-50 p-4 sm:p-5 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Pacer Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-3">
        <div className="flex items-center gap-2">
          <Wind className="w-4 h-4 text-teal-700 shrink-0" />
          <h4 className="text-xs sm:text-sm font-bold text-teal-950 tracking-wide">
            {t.title}
          </h4>
        </div>

        {/* Pattern Selector */}
        <div className="flex items-center gap-1.5 rounded-lg bg-teal-100/60 p-1 text-xs">
          <button
            type="button"
            onClick={() => {
              setPattern('calm');
              handleReset();
            }}
            className={`px-2.5 py-1 rounded-md font-semibold transition cursor-pointer ${
              pattern === 'calm' ? 'bg-white text-teal-900 shadow-xs' : 'text-teal-800 hover:text-teal-950'
            }`}
          >
            4-2-6
          </button>
          <button
            type="button"
            onClick={() => {
              setPattern('box');
              handleReset();
            }}
            className={`px-2.5 py-1 rounded-md font-semibold transition cursor-pointer ${
              pattern === 'box' ? 'bg-white text-teal-900 shadow-xs' : 'text-teal-800 hover:text-teal-950'
            }`}
          >
            4-4-4
          </button>
        </div>
      </div>

      <p className="mt-2 text-xs text-stone-600">
        {pattern === 'calm' ? t.calmMode : t.boxMode}
      </p>

      {/* Reduced Motion Accessible View */}
      {prefersReducedMotion ? (
        <div className="my-4 rounded-xl border border-teal-200 bg-white p-4 space-y-2.5 text-xs sm:text-sm text-stone-800">
          <div className="flex items-center gap-2 font-bold text-teal-900">
            <Info className="w-4 h-4 text-teal-700 shrink-0" />
            <span>{t.reducedMotionTitle}</span>
          </div>
          <p>{t.reducedMotionStep1}</p>
          <p>{t.reducedMotionStep2}</p>
          <p>{t.reducedMotionStep3}</p>
          <p>{t.reducedMotionStep4}</p>
        </div>
      ) : (
        /* Interactive Animated Breathing Sphere Visual */
        <div className="relative my-4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-stone-900 to-teal-950 p-6 sm:p-8 text-white shadow-inner overflow-hidden min-h-[220px]">
          {/* Subtle Ambient Background Halo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-56 h-56 rounded-full bg-teal-400 blur-3xl" />
          </div>

          {/* Animated Respiration Circle */}
          <div className="relative flex items-center justify-center w-40 h-40">
            <motion.div
              className="absolute rounded-full bg-gradient-to-tr from-teal-600 via-teal-400 to-teal-200 shadow-lg"
              animate={
                isActive
                  ? {
                      scale:
                        phase === 'inhale'
                          ? [0.65, 1.25]
                          : phase === 'hold'
                          ? 1.25
                          : phase === 'exhale'
                          ? [1.25, 0.65]
                          : 0.65,
                      opacity: phase === 'hold' ? 0.95 : [0.75, 1],
                    }
                  : { scale: 0.85, opacity: 0.8 }
              }
              transition={{
                duration:
                  phase === 'inhale'
                    ? timings.inhale
                    : phase === 'exhale'
                    ? timings.exhale
                    : 0.5,
                ease: 'easeInOut',
              }}
              style={{ width: '110px', height: '110px' }}
            />

            {/* Inner Core Counter */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm font-mono">
                {isActive ? secondsRemaining : '4'}
              </span>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-teal-100 drop-shadow-xs">
                {isActive ? phase : 'Ready'}
              </span>
            </div>
          </div>

          {/* Live Phase Announcement for Screen Reader and Visual Clarity */}
          <div
            className="mt-4 text-center text-xs sm:text-sm font-semibold text-teal-100 min-h-[24px]"
            aria-live="polite"
          >
            {isActive ? getPhaseText() : 'Press Start to begin guided breathing'}
          </div>

          {/* Controls Bar */}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              aria-label={isActive ? t.pause : t.start}
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 px-4 py-2 text-xs font-bold text-white transition cursor-pointer min-h-[40px] shadow-sm"
            >
              {isActive ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>{t.pause}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>{t.start}</span>
                </>
              )}
            </button>

            {isActive && (
              <button
                type="button"
                onClick={handleReset}
                aria-label={t.reset}
                className="inline-flex items-center gap-1 rounded-lg border border-teal-700 bg-teal-900/60 hover:bg-teal-800 px-3 py-2 text-xs font-semibold text-teal-200 transition cursor-pointer min-h-[40px]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.reset}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Clinical Reference / Educational Banner */}
      <div className="rounded-xl border border-teal-100 bg-white/90 p-3 text-[11px] sm:text-xs text-stone-700 flex items-start gap-2">
        <Heart className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">{t.clinicalNote}</p>
      </div>
    </div>
  );
};
