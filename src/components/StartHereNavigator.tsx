import React, { useState } from 'react';
import { Compass, Sparkles, HeartHandshake, BookOpen, AlertOctagon, ArrowRight, RotateCcw } from 'lucide-react';
import { Language, ActiveTab } from '../types';

interface StartHereNavigatorProps {
  currentLang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
  onOpenCrisis: () => void;
  onOpenScreener: () => void;
}

type NavigatorChoice = 'self_distress' | 'worried_about_someone' | 'learning' | 'crisis';

export const StartHereNavigator: React.FC<StartHereNavigatorProps> = ({
  currentLang,
  onNavigateTab,
  onOpenCrisis,
  onOpenScreener,
}) => {
  const [selectedPath, setSelectedPath] = useState<NavigatorChoice | null>(null);

  const paths = [
    {
      id: 'self_distress',
      title: {
        en: 'I feel overwhelmed, sad, or deeply anxious',
        hi: 'मैं बहुत उदास, बेचैन या घबराहट महसूस कर रहा हूँ',
        gu: 'હું ખૂબ ઉદાસ, બેચેન કે ચિંતિત અનુભવી રહ્યો છું',
      },
      subtitle: {
        en: 'Self-reflection tools, understanding symptoms, and next steps',
        hi: 'लक्षणों की समझ, आत्म-अवलोकन और अगला कदम',
        gu: 'લક્ષણોની સમજ અને આત્મ-મૂલ્યાંકન',
      },
      icon: Compass,
      color: 'text-teal-700 bg-teal-50 border-teal-200',
    },
    {
      id: 'worried_about_someone',
      title: {
        en: "I am worried about a family member or friend's behavior",
        hi: 'मुझे अपने परिवार के किसी सदस्य या मित्र की चिंता है',
        gu: 'મને મારા પરિવારના સભ્ય કે મિત્રની ચિંતા છે',
      },
      subtitle: {
        en: 'Caregiver guide: what to say, what to avoid, and safe boundaries',
        hi: 'देखभालकर्ता मार्गदर्शिका: क्या कहें, क्या न कहें और सीमाएं',
        gu: 'પરિવાર માટે માર્ગદર્શન: શું કહેવું અને શું ન કહેવું',
      },
      icon: HeartHandshake,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      id: 'learning',
      title: {
        en: 'I want to study conditions, therapies, or debunk common myths',
        hi: 'मैं बीमारियों, उपचारों और भ्रांतियों के बारे में पढ़ना चाहता हूँ',
        gu: 'હું માનસિક બીમારીઓ, સારવાર અને તથ્યો જાણવા માગું છું',
      },
      subtitle: {
        en: 'Explore conditions library, psychotherapy modalities, and facts',
        hi: 'सभी 20+ मानसिक स्थितियां, साइकोथेरेपी और वैज्ञानिक सच',
        gu: 'વિગતવાર લાઇબ્રેરી, સાયકોથેરાપી અને સત્ય',
      },
      icon: BookOpen,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    },
    {
      id: 'crisis',
      title: {
        en: 'Someone is in immediate psychiatric danger or crisis',
        hi: 'कोई व्यक्ति गंभीर मानसिक संकट या खतरे में है',
        gu: 'કોઈ વ્યક્તિ ગંભીર માનસિક કટોકટી કે જોખમમાં છે',
      },
      subtitle: {
        en: '24x7 Emergency helplines (Tele-MANAS 14416 / 112)',
        hi: '24x7 राष्ट्रीय हेल्पलाइन (टेली-मानस 14416 / 112)',
        gu: '૨૪x૭ ઇમરજન્સી હેલ્પલાઇન (ટેલી-માનસ ૧૪૪૧૬ / ૧૧૨)',
      },
      icon: AlertOctagon,
      color: 'text-red-700 bg-red-50 border-red-200',
    },
  ] as const;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-8 space-y-6">
      <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[#115e59]">
            <Sparkles className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-[#1c2430]">
              {currentLang === 'en'
                ? 'Where Do I Begin? (Interactive Pathway)'
                : currentLang === 'hi'
                ? 'शुरुआत कहाँ से करें? (मार्गदर्शक)'
                : 'ક્યાંથી શરૂઆત કરવી? (માર્ગદર્શક)'}
            </h3>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            {currentLang === 'en'
              ? 'Select what best describes your current situation to see recommended evidence-based starting points.'
              : currentLang === 'hi'
              ? 'अपनी स्थिति के अनुसार विकल्प चुनें ताकि हम आपको सबसे उपयोगी जानकारी तक पहुँचा सकें।'
              : 'તમારી પરિસ્થિતિ અનુસાર વિકલ્પ પસંદ કરો જેથી યોગ્ય માર્ગદર્શન મળી શકે.'}
          </p>
        </div>

        {selectedPath && (
          <button
            onClick={() => setSelectedPath(null)}
            className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 shrink-0 p-1.5 rounded hover:bg-stone-100 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Start Over' : 'पुनः चुनें'}</span>
          </button>
        )}
      </div>

      {/* Step 1: Choice Grid */}
      {!selectedPath ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPath(p.id as NavigatorChoice)}
                className="text-left p-4 rounded-xl border border-stone-200 hover:border-stone-400 hover:bg-stone-50/80 transition-all duration-200 cursor-pointer group flex items-start gap-3.5 min-h-[64px]"
              >
                <div className={`p-2.5 rounded-lg shrink-0 ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#1c2430] group-hover:text-[#115e59] transition">
                    {p.title[currentLang]}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-relaxed">
                    {p.subtitle[currentLang]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        /* Step 2: Tailored Guidance View */
        <div className="space-y-4 animate-fadeIn">
          {selectedPath === 'self_distress' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-teal-950 text-xs sm:text-sm leading-relaxed">
                <p className="font-semibold text-teal-900 mb-1">
                  {currentLang === 'en'
                    ? 'Recommended First Steps When Feeling Overwhelmed:'
                    : 'जब मन भारी या बेचैन हो तो क्या करें:'}
                </p>
                <p>
                  {currentLang === 'en'
                    ? 'Remember: emotional distress is not personal failure. Start with quiet self-reflection, check if your symptoms have lasted over 2 weeks, and consider having an open conversation with a registered psychiatrist.'
                    : 'याद रखें: यह आपकी कोई गलती नहीं है। यदि लक्षण 2 सप्ताह से अधिक समय से हैं, तो किसी योग्य मनोचिकित्सक से परामर्श अवश्य लें।'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <button
                  onClick={onOpenScreener}
                  className="p-3.5 rounded-xl border border-teal-200 bg-white hover:bg-teal-50 transition cursor-pointer text-left flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-[#115e59]">1. Educational Reflection</span>
                  <span className="text-[11px] text-stone-600 mt-1">
                    {currentLang === 'en' ? 'Reflect with PHQ-9 or GAD-7 screening tools' : 'PHQ-9 या GAD-7 से लक्षणों का अवलोकन करें'}
                  </span>
                  <span className="text-[11px] font-semibold text-[#115e59] mt-2 flex items-center gap-1">
                    Open Tool <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

                <button
                  onClick={() => onNavigateTab('symptoms')}
                  className="p-3.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition cursor-pointer text-left flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-stone-900">2. Understand Symptoms</span>
                  <span className="text-[11px] text-stone-600 mt-1">
                    {currentLang === 'en' ? 'Learn what causes brain fog, insomnia, panic' : 'अनिद्रा, घबराहट व उदासी के कारणों को जानें'}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-700 mt-2 flex items-center gap-1">
                    View Symptoms <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

                <button
                  onClick={() => onNavigateTab('treatments')}
                  className="p-3.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 transition cursor-pointer text-left flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-stone-900">3. Therapies & Support</span>
                  <span className="text-[11px] text-stone-600 mt-1">
                    {currentLang === 'en' ? 'Learn what happens in CBT and consultations' : 'CBT और थेरेपी कैसे काम करती है समझें'}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-700 mt-2 flex items-center gap-1">
                    View Therapies <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {selectedPath === 'worried_about_someone' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
                <p className="font-semibold text-amber-900 mb-1">
                  {currentLang === 'en' ? 'Supporting a Loved One with Compassion:' : 'परिवार के किसी सदस्य की देखभाल करते समय:'}
                </p>
                <p>
                  {currentLang === 'en'
                    ? 'Avoid arguing, lecturing, or minimizing their pain ("just cheer up"). Instead, listen non-judgmentally and offer to accompany them to a medical appointment.'
                    : 'उन्हें दोष न दें ("तुम्हारा वहम है")। इसके बजाय शांति से सुनें और डॉक्टर के पास साथ चलने का प्रस्ताव रखें।'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => onNavigateTab('caregivers')}
                  className="px-4 py-2.5 rounded-xl bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition cursor-pointer flex items-center gap-2"
                >
                  <span>{currentLang === 'en' ? 'Read Caregiver Guides (What to Say / Avoid)' : 'देखभालकर्ता मार्गदर्शिका पढ़ें'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigateTab('myths')}
                  className="px-4 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 text-xs font-medium transition cursor-pointer"
                >
                  {currentLang === 'en' ? 'Debunk Family Misconceptions' : 'पारिवारिक भ्रांतियां व सच'}
                </button>
              </div>
            </div>
          )}

          {selectedPath === 'learning' && (
            <div className="space-y-3">
              <p className="text-xs text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Access our structured library covering 23+ conditions, 10 substance guides, evidence-based psychotherapies, and clinical facts.'
                  : 'हमारी 23+ मानसिक स्थितियां, नशा मुक्ति और थेरेपी की पूरी लाइब्रेरी देखें।'}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => onNavigateTab('conditions')}
                  className="px-4 py-2 rounded-lg bg-[#115e59] text-white text-xs font-semibold hover:bg-[#0f4f4b] transition cursor-pointer"
                >
                  {currentLang === 'en' ? 'Conditions Library' : 'मानसिक स्थितियां'}
                </button>
                <button
                  onClick={() => onNavigateTab('addiction')}
                  className="px-4 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs font-medium hover:bg-stone-50 transition cursor-pointer"
                >
                  {currentLang === 'en' ? 'Addiction & Recovery' : 'नशा मुक्ति'}
                </button>
                <button
                  onClick={() => onNavigateTab('treatments')}
                  className="px-4 py-2 rounded-lg border border-stone-300 bg-white text-stone-800 text-xs font-medium hover:bg-stone-50 transition cursor-pointer"
                >
                  {currentLang === 'en' ? 'Psychotherapies (CBT, ERP, etc.)' : 'थेरेपी गाइड'}
                </button>
              </div>
            </div>
          )}

          {selectedPath === 'crisis' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-950 text-xs sm:text-sm leading-relaxed">
                <p className="font-bold text-red-900 mb-1">
                  {currentLang === 'en' ? 'Immediate Action Required:' : 'तत्काल सहायता आवश्यक:'}
                </p>
                <p>
                  {currentLang === 'en'
                    ? 'If you or someone else is in acute physical danger, experiencing suicidal crisis, or severe panic, contact the 24x7 national toll-free helpline right now:'
                    : 'यदि किसी की जान को खतरा है या कोई गंभीर संकट में है, तो तुरंत 24x7 राष्ट्रीय हेल्पलाइन पर कॉल करें:'}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:14416"
                    className="px-4 py-2 rounded-lg bg-[#991b1b] text-white font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    Call Tele-MANAS (14416)
                  </a>
                  <a
                    href="tel:112"
                    className="px-4 py-2 rounded-lg bg-stone-900 text-white font-bold text-xs inline-flex items-center gap-1.5"
                  >
                    Call Emergency 112
                  </a>
                  <button
                    onClick={onOpenCrisis}
                    className="px-3 py-2 rounded-lg border border-red-300 bg-white text-red-900 font-semibold text-xs hover:bg-red-50"
                  >
                    Open Crisis Protocol
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
