import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Eye,
  Hand,
  Volume2,
  Flower2,
  Coffee,
  Check,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import { Language } from '../../types';

interface SensoryGrounding54321Props {
  currentLang: Language;
  className?: string;
  onOpenCrisis?: () => void;
  onNavigateResources?: () => void;
}

export const SensoryGrounding54321: React.FC<SensoryGrounding54321Props> = ({
  currentLang,
  className = '',
  onOpenCrisis,
  onNavigateResources,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [currentSenseIndex, setCurrentSenseIndex] = useState<number>(0);
  const [checkedCounts, setCheckedCounts] = useState<number[]>([0, 0, 0, 0, 0]);

  const t = {
    en: {
      title: '5-4-3-2-1 Sensory Grounding for Acute Cravings',
      subtitle:
        'When an urge traps you in mental tunnel vision, systematically anchor your nervous system into physical reality through your five senses.',
      sense5Title: '5 Things You Can SEE',
      sense5Prompt: 'Look around your room. Notice 5 distinct visual details: a specific color, a shadow, a pattern on the wall, or light on an object.',
      sense4Title: '4 Things You Can TOUCH / FEEL',
      sense4Prompt: 'Notice 4 physical sensations: your feet pressing against the floor, fabric on your arms, temperature of the air, or the texture of a desk.',
      sense3Title: '3 Things You Can HEAR',
      sense3Prompt: 'Close your eyes for a moment. Listen for 3 subtle sounds: a fan humming, distant street traffic, bird calls, or your own breath.',
      sense2Title: '2 Things You Can SMELL',
      sense2Prompt: 'Inhale gently through your nose. Notice 2 scents: fresh air, soap on your hands, coffee aroma, or clothing fabric.',
      sense1Title: '1 Thing You Can TASTE',
      sense1Prompt: 'Notice 1 taste in your mouth: lingering toothpaste, water, coffee, or simply notice the neutral sensation of your tongue against your teeth.',
      tapToVerify: 'Tap to register an item:',
      nextSense: 'Next Sense',
      prevSense: 'Previous Sense',
      resetAll: 'Reset Grounding',
      allDoneTitle: 'Grounding Completed: You Are Present in This Moment',
      allDoneDesc: 'Take one slow, deep belly breath. You have shifted your brain out of the craving tunnel and returned to the safety of the present moment.',
      whyWorksTitle: 'Neurobiology of Sensory Grounding',
      whyWorksText:
        'Acute cravings trigger hyperactive loops between the amygdala (emotional distress) and ventral striatum (habitual reward-seeking), creating intense psychological tunnel vision. Processing real-time sensory inputs forces the parietal and sensory cortices to consume brain bandwidth, pulling neurological energy away from the craving loop and downregulating autonomic arousal.',
      supportPrompt: 'Need compassionate support to ride through this moment?',
      teleManas: 'Tele-MANAS: 14416 (24x7)',
      resourcesBtn: 'Crisis Resources',
    },
    hi: {
      title: '5-4-3-2-1 संवेदी स्थिरता तकनीक (Sensory Grounding)',
      subtitle:
        'जब तीव्र तलब दिमाग को जकड़ ले, तो अपनी पांचों इंद्रियों के माध्यम से मन को तुरंत वास्तविक दुनिया में वापस लाएं।',
      sense5Title: '5 चीजें जिन्हें आप देख सकते हैं (SEE)',
      sense5Prompt: 'अपने आस-पास देखें और 5 अलग-अलग चीजें पहचानें: दीवार का रंग, कोई परछाई, प्रकाश, या कोई वस्तु।',
      sense4Title: '4 चीजें जिन्हें आप छू/महसूस कर सकते हैं (TOUCH)',
      sense4Prompt: '4 शारीरिक संवेदनाओं पर ध्यान दें: जमीन पर टिके पैर, कपड़ों का स्पर्श, हवा का तापमान या मेज की बनावट।',
      sense3Title: '3 आवाजें जिन्हें आप सुन सकते हैं (HEAR)',
      sense3Prompt: 'ध्यान से सुनें और 3 आवाजें पकड़ें: पंखे की आवाज, बाहर से आती गाड़ियों की आवाज, या अपनी ही सांस।',
      sense2Title: '2 गंध जिन्हें आप सूंघ सकते हैं (SMELL)',
      sense2Prompt: 'नाक से धीरे-धीरे सांस लें। 2 गंधों को महसूस करें: साबुन की खुशबू, चाय/कॉफी की महक या कमरे की ताजा हवा।',
      sense1Title: '1 स्वाद जिसे आप चख सकते हैं (TASTE)',
      sense1Prompt: 'मुंह के स्वाद पर ध्यान दें: पानी का स्वाद, टूथपेस्ट का अहसास या तालू से छूती जीभ का अहसास।',
      tapToVerify: 'पहचानी गई वस्तु पर टैप करें:',
      nextSense: 'अगली इंद्रिय',
      prevSense: 'पिछली इंद्रिय',
      resetAll: 'रीसेट',
      allDoneTitle: 'ग्राउंडिंग पूरी हुई: आप इस पल में सुरक्षित हैं',
      allDoneDesc: 'एक लंबी, गहरी सांस लें। आपने अपने दिमाग को तलब के भंवर से निकालकर वर्तमान की स्थिरता में स्थापित कर लिया है।',
      whyWorksTitle: 'ग्राउंडिंग का वैज्ञानिक आधार',
      whyWorksText:
        'तलब के समय मस्तिष्क केवल नशे के विचार में उलझ जाता है। जब आप अपनी पांचों इंद्रियों को बाहरी दुनिया पर केंद्रित करते हैं, तो दिमाग का ध्यान तुरंत नशे के चक्र से हट जाता है और घबराहट शांत होती है।',
      supportPrompt: 'अकेले संघर्ष न करें, सहायता उपलब्ध है:',
      teleManas: 'टेली-मानस: 14416 (24x7)',
      resourcesBtn: 'हेल्पलाइन',
    },
    gu: {
      title: '5-4-3-2-1 સેન્સરી ગ્રાઉન્ડિંગ પદ્ધતિ (Sensory Grounding)',
      subtitle:
        'જ્યારે તલપ મગજ પર હાવી થઈ જાય ત્યારે તમારી પાંચેય ઇન્દ્રિયોનો ઉપયોગ કરીને મનને તાત્કાલિક સ્થિર કરો.',
      sense5Title: '૫ વસ્તુઓ જે તમે જોઈ શકો છો (SEE)',
      sense5Prompt: 'આજુબાજુ નજર ફેરવો અને ૫ ચોક્કસ વસ્તુઓ જુઓ: કોઈ રંગ, પડછાયો કે વસ્તુની બનાવટ.',
      sense4Title: '૪ વસ્તુઓ જે તમે સ્પર્શી/અનુભવી શકો છો (TOUCH)',
      sense4Prompt: '૪ સંવેદનાઓ પર ધ્યાન આપો: જમીન પર રહેલા પગ, કપડાંનો સ્પર્શ કે પંખાની હવા.',
      sense3Title: '૩ અવાજો જે તમે સાંભળી શકો છો (HEAR)',
      sense3Prompt: 'ધ્યાનથી સાંભળો: પંખાનો અવાજ, બહાર વાહનોનો અવાજ કે તમારા પોતાના શ્વાસનો અવાજ.',
      sense2Title: '૨ ગંધ જે તમે પારખી શકો છો (SMELL)',
      sense2Prompt: 'હળવેથી શ્વાસ લો અને ૨ ગંધ અનુભવો: સાબુ, ચા કે તાજી હવાની ગંધ.',
      sense1Title: '૧ સ્વાદ જે તમે અનુભવી શકો છો (TASTE)',
      sense1Prompt: 'મોંમાં રહેલા સ્વાદનો અનુભવ કરો: પાણી કે જીભની સામાન્ય સંવેદના.',
      tapToVerify: 'નોંધવા માટે ટેપ કરો:',
      nextSense: 'આગળની ઇન્દ્રિય',
      prevSense: 'પાછળની ઇન્દ્રિય',
      resetAll: 'ફરીથી શરૂ કરો',
      allDoneTitle: 'ગ્રાઉન્ડિંગ પૂર્ણ: તમે વર્તમાનમાં સુરક્ષિત છો',
      allDoneDesc: 'એક ઊંડો શ્વાસ લો. તમે મગજને તલપના વમળમાંથી બહાર લાવીને સ્થિરતા મેળવી લીધી છે.',
      whyWorksTitle: 'ગ્રાઉન્ડિંગનું વિજ્ઞાન',
      whyWorksText:
        'તલપ વખતે મગજ એક જ વિચારમાં કેદ થઈ જાય છે. પાંચેય ઇન્દ્રિયોને સક્રિય કરવાથી મગજનું ધ્યાન તલપમાંથી હટીને વર્તમાનમાં સ્થિર થાય છે.',
      supportPrompt: 'સહાય માટે સંપર્ક કરો:',
      teleManas: 'ટેલી-માનસ: 14416 (૨૪ કલાક)',
      resourcesBtn: 'સહાય કેન્દ્રો',
    },
  }[currentLang];

  const senses = [
    {
      targetCount: 5,
      title: t.sense5Title,
      prompt: t.sense5Prompt,
      icon: Eye,
      color: 'text-sky-700',
      border: 'border-sky-200',
      bg: 'bg-sky-50/70',
      btnColor: 'bg-sky-600 hover:bg-sky-700',
    },
    {
      targetCount: 4,
      title: t.sense4Title,
      prompt: t.sense4Prompt,
      icon: Hand,
      color: 'text-amber-700',
      border: 'border-amber-200',
      bg: 'bg-amber-50/70',
      btnColor: 'bg-amber-600 hover:bg-amber-700',
    },
    {
      targetCount: 3,
      title: t.sense3Title,
      prompt: t.sense3Prompt,
      icon: Volume2,
      color: 'text-teal-700',
      border: 'border-teal-200',
      bg: 'bg-teal-50/70',
      btnColor: 'bg-teal-600 hover:bg-teal-700',
    },
    {
      targetCount: 2,
      title: t.sense2Title,
      prompt: t.sense2Prompt,
      icon: Flower2,
      color: 'text-rose-700',
      border: 'border-rose-200',
      bg: 'bg-rose-50/70',
      btnColor: 'bg-rose-600 hover:bg-rose-700',
    },
    {
      targetCount: 1,
      title: t.sense1Title,
      prompt: t.sense1Prompt,
      icon: Coffee,
      color: 'text-indigo-700',
      border: 'border-indigo-200',
      bg: 'bg-indigo-50/70',
      btnColor: 'bg-indigo-600 hover:bg-indigo-700',
    },
  ];

  const currentSense = senses[currentSenseIndex];
  const currentCount = checkedCounts[currentSenseIndex];
  const Icon = currentSense.icon;
  const isSenseComplete = currentCount >= currentSense.targetCount;
  const allSensesDone = checkedCounts.every((cnt, idx) => cnt >= senses[idx].targetCount);

  const incrementCount = () => {
    if (currentCount < currentSense.targetCount) {
      setCheckedCounts((prev) => {
        const copy = [...prev];
        copy[currentSenseIndex] = copy[currentSenseIndex] + 1;
        return copy;
      });
    }
  };

  const handleReset = () => {
    setCurrentSenseIndex(0);
    setCheckedCounts([0, 0, 0, 0, 0]);
  };

  return (
    <div
      className={`rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Header */}
      <div className="space-y-1.5 pb-3 border-b border-stone-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs uppercase tracking-wider">
            <Eye className="w-4 h-4 text-teal-600" />
            <span>Sensory Grounding Matrix</span>
          </div>
          <button
            onClick={handleReset}
            className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 transition"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.resetAll}</span>
          </button>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
          {t.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Sense Switcher Pills */}
      <div className="mt-4 flex items-center justify-between gap-1.5 overflow-x-auto pb-1">
        {senses.map((s, idx) => {
          const isCurrent = currentSenseIndex === idx;
          const isDone = checkedCounts[idx] >= s.targetCount;
          const SenseIcon = s.icon;

          return (
            <button
              key={s.targetCount}
              onClick={() => setCurrentSenseIndex(idx)}
              type="button"
              className={`flex-1 min-w-[50px] sm:min-w-[65px] p-2 rounded-xl text-center transition flex flex-col items-center gap-1 border ${
                isCurrent
                  ? 'border-teal-600 bg-teal-50/90 shadow-xs'
                  : isDone
                  ? 'border-emerald-300 bg-emerald-50/60 text-emerald-800'
                  : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-500'
              }`}
            >
              <div className="flex items-center gap-1">
                <span className="font-bold text-xs">{s.targetCount}</span>
                <SenseIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-semibold text-stone-600">
                {checkedCounts[idx]}/{s.targetCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Sense Card */}
      <div className={`mt-4 rounded-xl border ${currentSense.border} ${currentSense.bg} p-4 sm:p-5 space-y-4`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-xs">
              <Icon className={`w-5 h-5 ${currentSense.color}`} />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                Step {5 - currentSense.targetCount + 1} of 5
              </span>
              <h4 className="font-bold text-sm sm:text-base text-stone-900">
                {currentSense.title}
              </h4>
            </div>
          </div>

          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-800">
            {currentCount} / {currentSense.targetCount} Checked
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
          {currentSense.prompt}
        </p>

        {/* Interactive Tap-to-Verify buttons */}
        <div className="space-y-2 pt-2 border-t border-stone-200/70">
          <span className="text-xs font-semibold text-stone-600 block">
            {t.tapToVerify}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {Array.from({ length: currentSense.targetCount }).map((_, i) => {
              const isChecked = i < currentCount;
              return (
                <button
                  key={i}
                  onClick={incrementCount}
                  disabled={isChecked}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 min-h-[40px] ${
                    isChecked
                      ? 'bg-emerald-600 text-white shadow-2xs cursor-default'
                      : 'bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 shadow-2xs active:scale-95'
                  }`}
                >
                  <Check className={`w-3.5 h-3.5 ${isChecked ? 'text-white' : 'text-stone-400'}`} />
                  <span>Item #{i + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Next / Prev Controls */}
        <div className="mt-3 pt-3 border-t border-stone-200/70 flex items-center justify-between">
          <button
            onClick={() => setCurrentSenseIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentSenseIndex === 0}
            className="px-3 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 disabled:opacity-40 text-xs font-medium text-stone-700 transition"
          >
            {t.prevSense}
          </button>

          <button
            onClick={() => setCurrentSenseIndex((prev) => Math.min(senses.length - 1, prev + 1))}
            disabled={currentSenseIndex === senses.length - 1}
            className="px-4 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-xs font-semibold text-white transition flex items-center gap-1"
          >
            <span>{t.nextSense}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Completion Banner */}
      {allSensesDone && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
          <h4 className="font-bold text-xs sm:text-sm text-emerald-900 flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-700" />
            <span>{t.allDoneTitle}</span>
          </h4>
          <p className="text-xs text-emerald-800 leading-relaxed font-medium">
            {t.allDoneDesc}
          </p>
        </div>
      )}

      {/* Neuroscience Explanation */}
      <div className="mt-5 pt-4 border-t border-stone-100 text-xs text-stone-700 space-y-1.5">
        <div className="flex items-center gap-1.5 font-semibold text-stone-900">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
          <span>{t.whyWorksTitle}</span>
        </div>
        <p className="text-stone-600 leading-relaxed">{t.whyWorksText}</p>
      </div>

      {/* Reach Out / Crisis Link */}
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
