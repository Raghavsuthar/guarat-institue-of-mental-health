import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Wind, Info } from 'lucide-react';
import { Language } from '../types';

interface BreathingExerciseProps {
  currentLang: Language;
}

type BreathingTechnique = 'box' | '478';

export const BreathingExercise: React.FC<BreathingExerciseProps> = ({ currentLang }) => {
  const [technique, setTechnique] = useState<BreathingTechnique>('box');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2'>('inhale');
  const [secondsLeft, setSecondsLeft] = useState<number>(4);
  const [cycleCount, setCycleCount] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Technique timing configurations
  const timings = {
    box: {
      inhale: 4,
      hold1: 4,
      exhale: 4,
      hold2: 4,
    },
    '478': {
      inhale: 4,
      hold1: 7,
      exhale: 8,
      hold2: 0, // No second hold in 4-7-8
    },
  };

  const currentTiming = timings[technique];

  // Reset helper
  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setSecondsLeft(currentTiming.inhale);
    setCycleCount(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Switch technique
  const switchTechnique = (t: BreathingTechnique) => {
    setTechnique(t);
    setIsActive(false);
    setPhase('inhale');
    setSecondsLeft(timings[t].inhale);
    setCycleCount(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Timer loop
  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Transition to next phase
        if (phase === 'inhale') {
          setPhase('hold1');
          return currentTiming.hold1;
        } else if (phase === 'hold1') {
          setPhase('exhale');
          return currentTiming.exhale;
        } else if (phase === 'exhale') {
          if (technique === 'box') {
            setPhase('hold2');
            return currentTiming.hold2;
          } else {
            // 4-7-8 ends here and loops to inhale
            setCycleCount((c) => c + 1);
            setPhase('inhale');
            return currentTiming.inhale;
          }
        } else {
          // hold2 (box)
          setCycleCount((c) => c + 1);
          setPhase('inhale');
          return currentTiming.inhale;
        }
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, phase, technique, currentTiming]);

  // Phase text
  const phaseLabels = {
    inhale: {
      en: 'Inhale Slowly (Nose)',
      hi: 'नाक से धीमी गहरी सांस लें',
      gu: 'નાકથી ધીમેથી ઊંડો શ્વાસ લો',
    },
    hold1: {
      en: 'Hold Breath Gently',
      hi: 'सांस को आराम से रोकें',
      gu: 'શ્વાસને હળવેથી રોકી રાખો',
    },
    exhale: {
      en: 'Exhale Smoothly (Mouth)',
      hi: 'मुंह से धीरे-धीरे सांस छोड़ें',
      gu: 'મોંથી ધીમે ધીમે શ્વાસ બહાર કાઢો',
    },
    hold2: {
      en: 'Pause & Rest Empty',
      hi: 'शांत रहकर कुछ पल रुकें',
      gu: 'શ્વાસ છોડ્યા પછી થોડો સમય શાંત રહો',
    },
  };

  // Calculate circle scale percentage for visual breathing
  let scaleClass = 'scale-100';
  if (isActive) {
    if (phase === 'inhale') scaleClass = 'scale-125 transition-transform duration-[4000ms] ease-out';
    else if (phase === 'hold1') scaleClass = 'scale-125 transition-none';
    else if (phase === 'exhale') {
      const dur = technique === '478' ? 'duration-[8000ms]' : 'duration-[4000ms]';
      scaleClass = `scale-90 transition-transform ${dur} ease-in-out`;
    } else scaleClass = 'scale-90 transition-none';
  }

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-8 space-y-6">
      {/* Title & Mode Selection */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[#115e59]">
            <Wind className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-[#1c2430]">
              {currentLang === 'en'
                ? 'Physiological Paced Breathing Guide'
                : currentLang === 'hi'
                ? 'वैज्ञानिक प्राणायाम / गहरी सांस का अभ्यास'
                : 'વૈજ્ઞાનિક ઊંડા શ્વાસ લેવાની કસરત'}
            </h3>
          </div>
          <p className="text-xs text-stone-500 mt-0.5">
            {currentLang === 'en'
              ? 'Stimulates the vagus nerve and activates parasympathetic calming within 3-5 minutes.'
              : currentLang === 'hi'
              ? 'वेगस नर्व को सक्रिय कर तुरंत घबराहट और दिल की धड़कन को सामान्य करने में मदद करता है।'
              : 'વેગસ નર્વને સક્રિય કરી ધબકારા અને અજંપાને ઝડપથી સામાન્ય કરે છે.'}
          </p>
        </div>

        {/* Technique Buttons */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => switchTechnique('box')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition cursor-pointer ${
              technique === 'box'
                ? 'bg-white text-[#115e59] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Box (4-4-4-4)
          </button>
          <button
            onClick={() => switchTechnique('478')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition cursor-pointer ${
              technique === '478'
                ? 'bg-white text-[#115e59] shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            4-7-8 Relaxation
          </button>
        </div>
      </div>

      {/* Main Breathing Stage Canvas */}
      <div className="py-8 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
          {/* Outer Pulsing Aura Ring */}
          <div
            className={`absolute inset-0 rounded-full bg-teal-100/50 border border-teal-200 transform ${scaleClass}`}
          />

          {/* Middle Gentle Ring */}
          <div
            className={`absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-teal-50 border border-[#115e59]/20 transform ${scaleClass}`}
          />

          {/* Inner Central Target */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-mono font-bold text-[#115e59]">
              {secondsLeft}s
            </span>
            <span className="text-xs sm:text-sm font-semibold text-stone-800 mt-1 max-w-[130px] leading-tight text-center">
              {phaseLabels[phase][currentLang]}
            </span>
            {cycleCount > 0 && (
              <span className="text-[10px] text-stone-500 mt-1.5 font-medium">
                {currentLang === 'en'
                  ? `Completed: ${cycleCount}`
                  : currentLang === 'hi'
                  ? `पूर्ण चक्र: ${cycleCount}`
                  : `પૂર્ણ ચક્ર: ${cycleCount}`}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setIsActive((prev) => !prev)}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition cursor-pointer flex items-center gap-2 min-h-[44px] shadow-sm ${
            isActive
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-[#115e59] hover:bg-[#0f4f4b] text-white'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Pause' : currentLang === 'hi' ? 'रोकें' : 'થોભો'}</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>{currentLang === 'en' ? 'Start Breathing' : currentLang === 'hi' ? 'शुरू करें' : 'શરૂ કરો'}</span>
            </>
          )}
        </button>

        <button
          onClick={handleReset}
          className="p-2.5 rounded-full border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600 transition cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          title={currentLang === 'en' ? 'Reset' : 'रीसेट'}
          aria-label="Reset timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Educational Note */}
      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-stone-800">
            {technique === 'box'
              ? currentLang === 'en'
                ? 'Box Breathing (Samavritti Pranayama)'
                : 'बॉक्स ब्रीदिंग (समवृत्ति प्राणायाम)'
              : currentLang === 'en'
              ? '4-7-8 Parasympathetic Breathing'
              : '4-7-8 तंत्रिका शांत करने की विधि'}
          </p>
          <p className="leading-relaxed">
            {technique === 'box'
              ? currentLang === 'en'
                ? 'Equal four-part breathing lowers cortisol, restores executive focus, and slows rapid pulse rate during acute situational panic.'
                : currentLang === 'hi'
                ? 'चारों चरणों में बराबर 4 सेकंड का समय कॉर्टिसोल कम करता है और तेज दिल की धड़कन को नियंत्रित करता है।'
                : '૪ સેકન્ડનો સમાન શ્વાસ તણાવના હોર્મોન્સ ઘટાડે છે અને ચિંતામાં મન શાંત કરે છે.'
              : currentLang === 'en'
                ? 'Extending the exhalation (8 seconds) directly forces the heart rate to decelerate through the pulmonary vagal reflex, ideal for pre-sleep calming.'
                : currentLang === 'hi'
                ? 'लंबी सांस छोड़ना (8 सेकंड) शरीर को सोने और आराम करने का गहरा संदेश देता है।'
                : 'લાંબા સમય સુધી શ્વાસ બહાર કાઢવો (૮ સેકન્ડ) ઊંઘ માટે ખૂબ જ ફાયદાકારક છે.'}
          </p>
        </div>
      </div>
    </div>
  );
};
