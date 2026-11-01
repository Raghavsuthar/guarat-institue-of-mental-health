import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Utensils,
  Flame,
  UserX,
  Moon,
  CheckCircle2,
  AlertCircle,
  HeartHandshake,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { Language } from '../../types';

interface HALTCheckInProps {
  currentLang: Language;
  className?: string;
  onOpenCrisis?: () => void;
  onNavigateResources?: () => void;
}

type HaltCategory = 'hungry' | 'angry' | 'lonely' | 'tired';

export const HALTCheckIn: React.FC<HALTCheckInProps> = ({
  currentLang,
  className = '',
  onOpenCrisis,
  onNavigateResources,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedStates, setSelectedStates] = useState<Record<HaltCategory, boolean>>({
    hungry: false,
    angry: false,
    lonely: false,
    tired: false,
  });

  const toggleCategory = (cat: HaltCategory) => {
    setSelectedStates((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const handleReset = () => {
    setSelectedStates({
      hungry: false,
      angry: false,
      lonely: false,
      tired: false,
    });
  };

  const t = {
    en: {
      title: 'H.A.L.T. Craving Vulnerability Check-In',
      subtitle:
        'Cravings are often masquerades. Before acting on an urge, pause and ask yourself: Are you Hungry, Angry, Lonely, or Tired?',
      instructions: 'Tap any state you are currently experiencing:',
      hungryTitle: 'Hungry (Low Blood Glucose)',
      hungryDesc: 'Drop in blood sugar mimics panic, causing jitteriness that the brain misinterprets as substance craving.',
      hungryAction: 'Action: Drink a glass of water and eat a protein or complex carb snack (nuts, fruit, light meal) to stabilize brain energy.',
      angryTitle: 'Angry (Emotional Arousal)',
      angryDesc: 'Frustration or resentment triggers sympathetic fight-or-flight, driving an urge to chemically numb emotional pain.',
      angryAction: 'Action: Step out of the room. Do 10 slow physiological sighs (double inhale, long exhale) or write thoughts on scrap paper.',
      lonelyTitle: 'Lonely (Social Disconnection)',
      lonelyDesc: 'Isolation activates physical pain circuits in the anterior cingulate cortex, prompting artificial dopamine-seeking.',
      lonelyAction: 'Action: Reach out to one safe person. Send a text, make a 2-minute call, or dial a compassionate listener.',
      tiredTitle: 'Tired (Executive Exhaustion)',
      tiredDesc: 'Sleep deprivation shuts down prefrontal cortex impulse control, making restraint biologically nearly impossible.',
      tiredAction: 'Action: Lie down for a 15-minute rest with eyes closed. Put down screens and allow your cortex to recharge.',
      whyWorksTitle: 'Why HALT Works (Addiction Medicine)',
      whyWorksText:
        'Addiction hijack circuits exploit physiological vulnerability. When the body lacks basic biological safety (food, emotional calm, connection, rest), the brain\'s executive inhibition weakens, amplifying craving signals. By addressing the genuine underlying physical need, craving intensity drops substantially within 10 to 15 minutes.',
      activePlanTitle: 'Your Immediate Craving De-Escalation Plan:',
      noStateSelected: 'Tap any of the cards above to see your customized de-escalation actions.',
      allClearTitle: 'Feeling None of These?',
      allClearDesc: 'If HALT triggers are quiet, this is likely a conditioned cue or habit loop. Use Urge Surfing or the 5-4-3-2-1 Sensory Grounding tool.',
      resetBtn: 'Clear Selections',
      reachOutPrompt: 'Craving feeling overwhelming? You don\'t have to white-knuckle it alone.',
      teleManas: 'Tele-MANAS: 14416 (24x7)',
      resourcesBtn: 'Crisis Resources',
    },
    hi: {
      title: 'H.A.L.T. आत्म-जांच (भूख, गुस्सा, अकेलापन, थकान)',
      subtitle:
        'अक्सर तलब किसी वास्तविक जरूरत का छलावा होती है। नशा करने की इच्छा होने पर खुद से पूछें: क्या आप भूखे हैं, गुस्से में हैं, अकेले हैं या थके हुए हैं?',
      instructions: 'जो भी आप इस समय महसूस कर रहे हैं, उस पर टैप करें:',
      hungryTitle: 'भूख (Hungry - कम ग्लूकोज)',
      hungryDesc: 'ब्लड शुगर कम होने से शरीर में कंपन और बेचैनी होती है जिसे दिमाग गलती से तलब समझ लेता है।',
      hungryAction: 'उपाय: एक गिलास पानी पिएं और कुछ पौष्टिक (फल, नट्स या हल्का भोजन) खाएं ताकि दिमाग को तुरंत ऊर्जा मिले।',
      angryTitle: 'गुस्सा (Angry - भावनात्मक तनाव)',
      angryDesc: 'क्रोध या चिड़चिड़ापन होने पर दिमाग भावनाओं को सुन्न करने के लिए नशे की मांग करता है।',
      angryAction: 'उपाय: तुरंत उस जगह से 5 मिनट के लिए हट जाएं। 10 लंबी सांसें छोड़ें या अपने गुस्से को कागज पर लिखकर फाड़ दें।',
      lonelyTitle: 'अकेलापन (Lonely - अलगाव)',
      lonelyDesc: 'अकेलापन महसूस होने पर दिमाग कृत्रिम डोपामाइन की तलाश में नशे की तीव्र तलब पैदा करता है।',
      lonelyAction: 'उपाय: किसी भरोसेमंद दोस्त, परिजन को फोन करें या किसी सपोर्ट ग्रुप / हेल्पलाइन पर बात करें।',
      tiredTitle: 'थकान (Tired - अनिद्रा व कमजोरी)',
      tiredDesc: 'नींद की कमी से दिमाग की आत्म-नियंत्रण क्षमता कमजोर हो जाती है और तलब का विरोध करना मुश्किल हो जाता है।',
      tiredAction: 'उपाय: 15-20 मिनट के लिए आंखें बंद करके लेट जाएं। फोन दूर रखें और मस्तिष्क को विश्राम दें।',
      whyWorksTitle: 'HALT तकनीक का वैज्ञानिक महत्व',
      whyWorksText:
        'लत की तलब शारीरिक और मानसिक कमजोरी का फायदा उठाती है। जब शरीर को बुनियादी आराम, भोजन या अपनापन नहीं मिलता, तो दिमाग तलब को कई गुना बढ़ा देता है। असली शारीरिक जरूरत को पूरा करते ही तलब 10-15 मिनट में शांत होने लगती है।',
      activePlanTitle: 'आपके लिए त्वरित राहत योजना:',
      noStateSelected: 'अपनी स्थिति के अनुसार ऊपर दिए गए कार्ड्स पर टैप करें।',
      allClearTitle: 'इनमें से कुछ भी महसूस नहीं हो रहा?',
      allClearDesc: 'यदि HALT सामान्य है, तो यह केवल पुरानी आदत का ट्रिगर है। अर्च सर्फिंग (Urge Surfing) या 5-4-3-2-1 ग्राउंडिंग का उपयोग करें।',
      resetBtn: 'रीसेट करें',
      reachOutPrompt: 'क्या तलब बहुत तेज है? सहायता के लिए संपर्क करें:',
      teleManas: 'टेली-मानस: 14416 (24x7)',
      resourcesBtn: 'हेल्पलाइन सूची',
    },
    gu: {
      title: 'H.A.L.T. સેલ્ફ-ચેક (ભૂખ, ગુસ્સો, એકલતા, થાક)',
      subtitle:
        'તલપ ઘણીવાર શારીરિક નબળાઈનું બહાનું હોય છે. તલપ લાગે ત્યારે વિચારો: શું તમે ભૂખ્યા, ગુસ્સામાં, એકલા કે થાકેલા છો?',
      instructions: 'તમને જે લાગતું હોય તે કાર્ડ પસંદ કરો:',
      hungryTitle: 'ભૂખ (Hungry - લો શુગર)',
      hungryDesc: 'બ્લડ શુગર ઘટવાથી શરીરમાં ધ્રુજારી થાય છે જેને મગજ ભૂલથી નશાની તલપ સમજી બેસે છે.',
      hungryAction: 'પગલું: એક ગ્લાસ પાણી પીઓ અને ડ્રાયફ્રૂટ્સ કે હળવો પૌષ્ટિક નાસ્તો લો જેથી મગજને શક્તિ મળે.',
      angryTitle: 'ગુસ્સો (Angry - માનસિક ઉચાટ)',
      angryDesc: 'ગુસ્સો કે ચીડ થતાં મગજ દર્દ ભૂલવા માટે નશા તરફ ખેંચાય છે.',
      angryAction: 'પગલું: ૫ મિનિટ માટે ત્યાંથી હટી જાઓ. ઊંડા શ્વાસ લો અને મનને શાંત કરો.',
      lonelyTitle: 'એકલતા (Lonely - સામાજિક વિમુખતા)',
      lonelyDesc: 'એકલતાના કારણે મગજમાં કૃત્રિમ ખુશી મેળવવાની તીવ્ર ઇચ્છા જાગે છે.',
      lonelyAction: 'પગલું: કોઈ વિશ્વાસુ સ્વજનને ફોન કરો કે સહાય કેન્દ્ર સાથે વાત કરો.',
      tiredTitle: 'થાક (Tired - ઊંઘનો અભાવ)',
      tiredDesc: 'થાક અને ઊંઘ વગર મગજની સહનશક્તિ સાવ ખૂટી જાય છે.',
      tiredAction: 'પગલું: ૧૫-૨૦ મિનિટ આંખો બંધ કરીને સૂઈ જાઓ અને આરામ કરો.',
      whyWorksTitle: 'HALT પદ્ધતિ કેમ અસરકારક છે?',
      whyWorksText:
        'જ્યારે શરીર ભૂખ્યું, થાકેલું કે હતાશ હોય ત્યારે મગજનું નિયંત્રણ નબળું પડે છે. ખરી શારીરિક જરૂરિયાત સંતોષાતાં જ તલપ આપમેળે ઓસરી જાય છે.',
      activePlanTitle: 'તમારી તાત્કાલિક રાહત યોજના:',
      noStateSelected: 'માર્ગદર્શન મેળવવા ઉપરના કોઈપણ કાર્ડ પર ક્લિક કરો.',
      allClearTitle: 'આમાંથી કશું જ નથી લાગતું?',
      allClearDesc: 'જો HALT સામાન્ય હોય તો આ માત્ર જૂની ટેવ છે. અર્જ સર્ફિંગ અથવા 5-4-3-2-1 ગ્રાઉન્ડિંગ કરો.',
      resetBtn: 'ફરી પસંદ કરો',
      reachOutPrompt: 'તલપ કાબૂ બહાર લાગે તો તાત્કાલિક સહાય લો:',
      teleManas: 'ટેલી-માનસ: 14416 (૨૪ કલાક)',
      resourcesBtn: 'સહાય કેન્દ્રો',
    },
  }[currentLang];

  const categories: Array<{
    id: HaltCategory;
    letter: string;
    icon: React.ElementType;
    title: string;
    desc: string;
    action: string;
    color: string;
    activeBorder: string;
    activeBg: string;
  }> = [
    {
      id: 'hungry',
      letter: 'H',
      icon: Utensils,
      title: t.hungryTitle,
      desc: t.hungryDesc,
      action: t.hungryAction,
      color: 'text-amber-700',
      activeBorder: 'border-amber-400',
      activeBg: 'bg-amber-50/90',
    },
    {
      id: 'angry',
      letter: 'A',
      icon: Flame,
      title: t.angryTitle,
      desc: t.angryDesc,
      action: t.angryAction,
      color: 'text-rose-700',
      activeBorder: 'border-rose-400',
      activeBg: 'bg-rose-50/90',
    },
    {
      id: 'lonely',
      letter: 'L',
      icon: UserX,
      title: t.lonelyTitle,
      desc: t.lonelyDesc,
      action: t.lonelyAction,
      color: 'text-sky-700',
      activeBorder: 'border-sky-400',
      activeBg: 'bg-sky-50/90',
    },
    {
      id: 'tired',
      letter: 'T',
      icon: Moon,
      title: t.tiredTitle,
      desc: t.tiredDesc,
      action: t.tiredAction,
      color: 'text-indigo-700',
      activeBorder: 'border-indigo-400',
      activeBg: 'bg-indigo-50/90',
    },
  ];

  const anySelected = Object.values(selectedStates).some(Boolean);

  return (
    <div
      className={`rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Header */}
      <div className="space-y-1.5 pb-3 border-b border-stone-100">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-stone-500 font-semibold text-xs uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Interactive Self-Audit</span>
          </div>
          {anySelected && (
            <button
              onClick={handleReset}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.resetBtn}</span>
            </button>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
          {t.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* 4 Interactive Cards */}
      <div className="mt-4 space-y-2">
        <span className="text-xs font-semibold text-stone-700 block">
          {t.instructions}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((cat) => {
            const isSelected = selectedStates[cat.id];
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                type="button"
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? `${cat.activeBorder} ${cat.activeBg} shadow-xs ring-1 ring-stone-300`
                    : 'border-stone-200 bg-stone-50/60 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2 w-full">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-stone-900 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {cat.letter}
                    </span>
                    <span className={`font-semibold text-sm ${isSelected ? cat.color : 'text-stone-900'}`}>
                      {cat.title}
                    </span>
                  </div>
                  <div className="shrink-0 mt-0.5">
                    {isSelected ? (
                      <CheckCircle2 className={`w-5 h-5 ${cat.color}`} />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-stone-300" />
                    )}
                  </div>
                </div>

                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Action Plan Section */}
      <div className="mt-5 rounded-xl border border-stone-200 bg-stone-50/70 p-4 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-teal-700" />
          <span>{t.activePlanTitle}</span>
        </h4>

        {anySelected ? (
          <div className="space-y-2.5">
            {categories
              .filter((cat) => selectedStates[cat.id])
              .map((cat) => (
                <div
                  key={cat.id}
                  className="p-3 rounded-lg bg-white border border-stone-200 text-xs text-stone-800 leading-relaxed shadow-2xs space-y-1"
                >
                  <span className={`font-bold uppercase tracking-wide text-[11px] block ${cat.color}`}>
                    {cat.title}
                  </span>
                  <p className="font-medium text-stone-900">{cat.action}</p>
                </div>
              ))}
          </div>
        ) : (
          <div className="p-3 rounded-lg bg-white border border-dashed border-stone-200 text-xs text-stone-500">
            {t.noStateSelected}
          </div>
        )}
      </div>

      {/* Neuroscience Explanation */}
      <div className="mt-5 pt-4 border-t border-stone-100 text-xs text-stone-700 space-y-1.5">
        <div className="flex items-center gap-1.5 font-semibold text-stone-900">
          <AlertCircle className="w-3.5 h-3.5 text-teal-700" />
          <span>{t.whyWorksTitle}</span>
        </div>
        <p className="text-stone-600 leading-relaxed">{t.whyWorksText}</p>
      </div>

      {/* Reach Out / Crisis Link */}
      <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-stone-800 font-medium">
          <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{t.reachOutPrompt}</span>
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
