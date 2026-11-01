import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Clock,
  Wind,
  Droplets,
  Sparkles,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ShieldAlert,
  HeartHandshake,
} from 'lucide-react';
import { Language } from '../../types';

interface DelayDistractDecideProps {
  currentLang: Language;
  className?: string;
  onOpenCrisis?: () => void;
  onNavigateResources?: () => void;
}

export const DelayDistractDecide: React.FC<DelayDistractDecideProps> = ({
  currentLang,
  className = '',
  onOpenCrisis,
  onNavigateResources,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [delaySecondsRemaining, setDelaySecondsRemaining] = useState<number>(180); // 3 minutes default
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [selectedTimerOption, setSelectedTimerOption] = useState<3 | 5 | 10>(3);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([false, false, false, false, false]);

  const t = {
    en: {
      title: 'The 5 D\'s Craving Protocol (Delay • Breathe • Water • Distract • Decide)',
      subtitle:
        'A clinically proven cognitive interrupt protocol. When a sudden urge strikes, pause your autopilot and step through these five evidence-based actions.',
      step1Title: '1. Delay (Pause for 3–5 Minutes)',
      step1Desc:
        'Promise yourself to wait just 3 to 5 minutes before making any decision. An urge feels permanent, but acute brain spikes peak quickly. Watch the countdown below.',
      step2Title: '2. Deep Breathe (Reset Your Nervous System)',
      step2Desc:
        'Take 5 slow, deep breaths. Inhale gently for 4 seconds, and exhale slowly for 6 seconds through slightly parted lips to signal safety to your amygdala.',
      step3Title: '3. Drink Cold Water (Physical Grounding)',
      step3Desc:
        'Drink a full glass of cold water slowly, feeling the temperature in your throat and stomach. This activates the vagal nerve and interrupts oral fixation.',
      step4Title: '4. Distract Your Attention (Change Environment)',
      step4Desc:
        'Engage your hands and working memory: wash dishes, take a brisk 5-minute walk, solve a puzzle, or listen to an engaging podcast away from triggers.',
      step5Title: '5. Decide Consciously (Your True Goal)',
      step5Desc:
        'Now ask yourself: "Do I truly want to start over, or can I choose sobriety for just the next hour?" You have reclaimed executive control.',
      startTimer: 'Start Delay Countdown',
      pauseTimer: 'Pause Timer',
      resetTimer: 'Reset Timer',
      stepCompleted: 'Mark as Completed',
      nextStep: 'Next Step',
      prevStep: 'Previous Step',
      whyWorksTitle: 'Cognitive Interrupt Mechanism',
      whyWorksText:
        'Conditioned addiction triggers activate rapid, automated motor routines in the basal ganglia. The 5 D\'s introduce an artificial latency period, decoupling the urge from the habitual behavioral response. By activating the parasympathetic nervous system and engaging working memory, your prefrontal cortex regains decision-making dominance.',
      supportPrompt: 'Urge feeling too intense to manage alone?',
      teleManas: 'Tele-MANAS: 14416',
      resourcesBtn: 'Crisis Resources',
    },
    hi: {
      title: '5 D नशा-विरोधी तकनीक (Delay • Breathe • Water • Distract • Decide)',
      subtitle:
        'वैज्ञानिक रूप से सिद्ध तकनीक। जब भी तीव्र तलब उठे, तुरंत कोई कदम उठाने के बजाय इन 5 चरणों का पालन करें।',
      step1Title: '1. Delay (3–5 मिनट की देरी करें)',
      step1Desc:
        'खुद से कहें कि मैं कोई भी फैसला 3 से 5 मिनट बाद लूंगा। तलब हमेशा नहीं रहती, इसका तीव्र उबाल कुछ ही मिनटों में उतरने लगता है। नीचे दिया गया टाइमर शुरू करें।',
      step2Title: '2. Deep Breathe (गहरी और लंबी सांसें)',
      step2Desc:
        '5 बार गहरी और धीमी सांस लें। 4 सेकंड नाक से सांस लें और 6 सेकंड में मुंह से धीरे-धीरे बाहर निकालें ताकि घबराहट और दिल की धड़कन शांत हो।',
      step3Title: '3. Drink Water (ठंडा पानी पिएं)',
      step3Desc:
        'एक बड़ा गिलास ठंडा पानी धीरे-धीरे घूंट-घूंट करके पिएं। गले और पेट में पानी के ठंडक को महसूस करें। यह दिमाग के आवेग को तुरंत शांत करता है।',
      step4Title: '4. Distract (ध्यान और जगह बदलें)',
      step4Desc:
        'उस जगह से तुरंत हट जाएं। अपने हाथों को किसी काम में व्यस्त करें: चेहरा धोएं, टहलने निकलें, संगीत सुनें या किसी सकारात्मक काम में मन लगाएं।',
      step5Title: '5. Decide (होश में निर्णय लें)',
      step5Desc:
        'अब शांत दिमाग से सोचें: "क्या मैं अपनी मेहनत बर्बाद करना चाहता हूँ, या केवल अगले एक घंटे के लिए खुद को नशे से दूर रख सकता हूँ?"',
      startTimer: 'टाइमर शुरू करें',
      pauseTimer: 'रोकें',
      resetTimer: 'रीसेट',
      stepCompleted: 'पूरा किया',
      nextStep: 'अगला चरण',
      prevStep: 'पिछला चरण',
      whyWorksTitle: 'यह तकनीक कैसे काम करती है?',
      whyWorksText:
        'लत की तलब दिमाग में एक स्वचालित आदत चक्र (Habit Loop) चलाती है। कुछ मिनटों की देरी और पानी पीने से यह चक्र टूट जाता है और सोचने-समझने वाले मस्तिष्क (Prefrontal Cortex) को सही निर्णय लेने का समय मिल जाता है।',
      supportPrompt: 'क्या तलब बहुत ज्यादा है? अभी सहायता लें:',
      teleManas: 'टेली-मानस: 14416',
      resourcesBtn: 'हेल्पलाइन',
    },
    gu: {
      title: '5 D વ્યસન મુક્તિ પદ્ધતિ (Delay • Breathe • Water • Distract • Decide)',
      subtitle:
        'વૈજ્ઞાનિક રીતે સાબિત થયેલી પદ્ધતિ. અચાનક તલપ લાગે ત્યારે તરત જ વશ થવાને બદલે આ ૫ ક્રિયાઓ ક્રમશઃ કરો.',
      step1Title: '૧. Delay (૩-૫ મિનિટ થોભો)',
      step1Desc:
        'પોતાને કહો કે હું ૩ થી ૫ મિનિટ પછી જ નિર્ણય લઈશ. તલપનો ઉછાળો ક્ષણિક હોય છે, થોડી મિનિટોમાં તે આપમેળે ઓસરી જશે. નીચેનું ટાઈમર ચાલુ કરો.',
      step2Title: '૨. Deep Breathe (ઊંડા શ્વાસ લો)',
      step2Desc:
        '૫ ઊંડા અને ધીમા શ્વાસ લો. ૪ સેકન્ડ શ્વાસ અંદર લો અને ૬ સેકન્ડ સુધી ધીમેથી બહાર કાઢો જેથી નર્વસ સિસ્ટમ શાંત થાય.',
      step3Title: '૩. Drink Water (ઠંડુ પાણી પીઓ)',
      step3Desc:
        'એક મોટો ગ્લાસ ઠંડુ પાણી ધીમે ધીમે ઘૂંટડે ઘૂંટડે પીઓ. આનાથી ગળા અને પેટની નસો શાંત થાય છે અને તલપ ઓછી થાય છે.',
      step4Title: '૪. Distract (ધ્યાન બીજી પ્રવૃત્તિમાં વાળો)',
      step4Desc:
        'તે જગ્યા છોડીને ૫ મિનિટ માટે ચાલવા નીકળો, મોઢું ધોવો કે કોઈ મિત્ર સાથે વાત કરો. હાથ અને મગજને વ્યસ્ત રાખો.',
      step5Title: '૫. Decide (શાંતિથી નિર્ણય કરો)',
      step5Desc:
        'હવે વિચારો: "શું હું મારી પ્રગતિ ધૂળમાં મેળવવા માંગું છું, કે આવનારા એક કલાક માટે સ્વસ્થ રહેવા માંગું છું?"',
      startTimer: 'ટાઈમર શરૂ કરો',
      pauseTimer: 'થોભાવો',
      resetTimer: 'રીસેટ',
      stepCompleted: 'પૂર્ણ કર્યું',
      nextStep: 'આગળનું પગલું',
      prevStep: 'પાછળનું પગલું',
      whyWorksTitle: 'આ પદ્ધતિનું વિજ્ઞાન',
      whyWorksText:
        'તલપ વખતે મગજ વિચાર્યા વગર નિર્ણયો લે છે. ૩-૫ મિનિટનો વિલંબ અને ઠંડુ પાણી પીવાથી આવેગ તૂટી જાય છે અને મગજ સાચો નિર્ણય લેવા સક્ષમ બને છે.',
      supportPrompt: 'તલપ વધુ પડતી તીવ્ર હોય તો તાત્કાલિક મદદ લો:',
      teleManas: 'ટેલી-માનસ: 14416',
      resourcesBtn: 'સહાય કેન્દ્રો',
    },
  }[currentLang];

  // Steps configuration
  const steps = [
    {
      id: 0,
      title: t.step1Title,
      desc: t.step1Desc,
      icon: Clock,
      hasTimer: true,
      color: 'text-amber-700',
      bg: 'bg-amber-50/70',
      border: 'border-amber-200',
    },
    {
      id: 1,
      title: t.step2Title,
      desc: t.step2Desc,
      icon: Wind,
      hasBreathing: true,
      color: 'text-teal-700',
      bg: 'bg-teal-50/70',
      border: 'border-teal-200',
    },
    {
      id: 2,
      title: t.step3Title,
      desc: t.step3Desc,
      icon: Droplets,
      color: 'text-sky-700',
      bg: 'bg-sky-50/70',
      border: 'border-sky-200',
    },
    {
      id: 3,
      title: t.step4Title,
      desc: t.step4Desc,
      icon: Sparkles,
      color: 'text-indigo-700',
      bg: 'bg-indigo-50/70',
      border: 'border-indigo-200',
    },
    {
      id: 4,
      title: t.step5Title,
      desc: t.step5Desc,
      icon: CheckCircle,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50/70',
      border: 'border-emerald-200',
    },
  ];

  // Timer effect for Step 1
  useEffect(() => {
    if (!isTimerRunning) return;

    const interval = setInterval(() => {
      setDelaySecondsRemaining((prev) => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          // Mark step 1 as complete
          setCompletedSteps((old) => {
            const next = [...old];
            next[0] = true;
            return next;
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleTimerOption = (mins: 3 | 5 | 10) => {
    setIsTimerRunning(false);
    setSelectedTimerOption(mins);
    setDelaySecondsRemaining(mins * 60);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setDelaySecondsRemaining(selectedTimerOption * 60);
  };

  const toggleStepCompletion = (idx: number) => {
    setCompletedSteps((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <div
      className={`rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Header */}
      <div className="space-y-1.5 pb-3 border-b border-stone-100">
        <div className="flex items-center gap-2 text-indigo-800 font-semibold text-xs uppercase tracking-wider">
          <Clock className="w-4 h-4 text-indigo-600" />
          <span>Cognitive Interrupt Protocol</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
          {t.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Steps Progress Tabs */}
      <div className="mt-4 flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto pb-1">
        {steps.map((step, idx) => {
          const isCurrent = activeStep === idx;
          const isDone = completedSteps[idx];
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              type="button"
              className={`flex-1 min-w-[50px] sm:min-w-[70px] p-2 rounded-xl text-center transition flex flex-col items-center gap-1 border ${
                isCurrent
                  ? 'border-indigo-600 bg-indigo-50/80 shadow-xs'
                  : isDone
                  ? 'border-emerald-300 bg-emerald-50/60 text-emerald-800'
                  : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-500'
              }`}
            >
              <div className="flex items-center gap-1">
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-indigo-700' : isDone ? 'text-emerald-600' : 'text-stone-500'}`} />
                {isDone && <CheckCircle className="w-3 h-3 text-emerald-600" />}
              </div>
              <span className="text-[11px] font-bold">Step {idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Card */}
      <div className={`mt-4 rounded-xl border ${currentStep.border} ${currentStep.bg} p-4 sm:p-5 space-y-3`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center shadow-xs">
              <StepIcon className={`w-5 h-5 ${currentStep.color}`} />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-stone-900">
              {currentStep.title}
            </h4>
          </div>

          <button
            onClick={() => toggleStepCompletion(activeStep)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition ${
              completedSteps[activeStep]
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white border border-stone-300 text-stone-700 hover:bg-stone-50'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{completedSteps[activeStep] ? 'Completed' : t.stepCompleted}</span>
          </button>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          {currentStep.desc}
        </p>

        {/* Step 1 Timer Feature */}
        {currentStep.hasTimer && (
          <div className="mt-3 p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1 text-xs">
                <span className="text-stone-500 font-medium mr-1">Duration:</span>
                {[3, 5, 10].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => handleTimerOption(mins as 3 | 5 | 10)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                      selectedTimerOption === mins
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {mins}m
                  </button>
                ))}
              </div>

              <div className="font-mono text-2xl font-bold text-stone-900">
                {formatTime(delaySecondsRemaining)}
              </div>
            </div>

            {/* Timer Progress Bar */}
            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden border border-stone-200">
              <div
                className="bg-amber-500 h-full transition-all duration-1000 ease-linear"
                style={{
                  width: `${
                    ((selectedTimerOption * 60 - delaySecondsRemaining) /
                      (selectedTimerOption * 60)) *
                    100
                  }%`,
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition flex items-center gap-1.5 min-h-[40px]"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isTimerRunning ? t.pauseTimer : t.startTimer}</span>
              </button>
              <button
                onClick={handleResetTimer}
                className="px-3 py-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-600 text-xs font-medium transition flex items-center gap-1 min-h-[40px]"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t.resetTimer}</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2 Gentle Breathing Animation */}
        {currentStep.hasBreathing && !prefersReducedMotion && (
          <div className="mt-3 p-3 bg-white rounded-xl border border-teal-200/80 flex items-center justify-between gap-3 text-xs text-teal-900">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-4 h-4 rounded-full bg-teal-500"
                animate={{ scale: [1, 1.7, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="font-medium">4s Inhale • 6s Slow Exhale Rhythm</span>
            </div>
            <span className="text-[11px] text-teal-700 font-semibold">Vagus Nerve Calming</span>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-center justify-between">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-3 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 text-xs font-medium text-stone-700 transition"
          >
            {t.prevStep}
          </button>

          <button
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-4 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-xs font-semibold text-white transition flex items-center gap-1"
          >
            <span>{t.nextStep}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Neuroscience Explanation */}
      <div className="mt-5 pt-4 border-t border-stone-100 text-xs text-stone-700 space-y-1.5">
        <div className="flex items-center gap-1.5 font-semibold text-stone-900">
          <ShieldAlert className="w-3.5 h-3.5 text-indigo-700" />
          <span>{t.whyWorksTitle}</span>
        </div>
        <p className="text-stone-600 leading-relaxed">{t.whyWorksText}</p>
      </div>

      {/* Reach Out Banner */}
      <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-stone-800 font-medium">
          <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{t.supportPrompt}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="tel:14416"
            className="px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-900 text-white font-semibold transition"
          >
            {t.teleManas}
          </a>
          {onNavigateResources && (
            <button
              onClick={onNavigateResources}
              className="px-3 py-1.5 rounded-md border border-stone-300 hover:bg-white text-stone-800 font-medium transition"
            >
              {t.resourcesBtn}
            </button>
          )}
          {onOpenCrisis && (
            <button
              onClick={onOpenCrisis}
              className="px-3 py-1.5 rounded-md bg-rose-700 hover:bg-rose-800 text-white font-semibold transition"
            >
              Crisis Help
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
