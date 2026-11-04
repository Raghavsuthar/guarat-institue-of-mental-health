import React, { useEffect } from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { screenersData } from '../data/assessments';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { getAssessmentCategory } from '../utils/assessmentSafety';

interface InteractiveViewProps {
  currentLang: Language;
  onOpenScreener: (toolId: string) => void;
  onOpenCrisis: () => void;
}

export const InteractiveView: React.FC<InteractiveViewProps> = ({
  currentLang,
  onOpenScreener,
  onOpenCrisis,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Mental Health Self-Reflection Tools' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य आत्म-अवलोकन टूल' : 'માનસિક સ્વ-અવલોકન સાધનો',
      description: currentLang === 'en'
        ? 'Educational questionnaires to help organize experiences before speaking with a healthcare professional. Adapted tools are not validated clinical screeners and their scores are not diagnostic.'
        : currentLang === 'hi'
        ? 'ये प्रश्नावलियाँ स्वास्थ्य विशेषज्ञ से बातचीत की तैयारी में आपके अनुभवों को व्यवस्थित करने में मदद करती हैं। अनुकूलित प्रश्नों के अंक नैदानिक कट-ऑफ नहीं हैं।'
        : 'આરોગ્ય નિષ્ણાત સાથે વાત કરતાં પહેલાં તમારા અનુભવો સમજવા માટે શૈક્ષણિક પ્રશ્નાવલીઓ. બદલાયેલા સાધનોના ગુણ નિદાન નથી.',
      path: 'interactive',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Self-Reflection Tools' : currentLang === 'hi' ? 'आत्म-अवलोकन टूल' : 'આત્મ-અવલોકન સાધનો'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.interactive}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'These questionnaires help you organize experiences and concerns before a conversation with a healthcare professional. Adapted tools are educational only and must not be interpreted using clinical cut-offs.'
            : currentLang === 'hi'
            ? 'ये प्रश्नावलियाँ स्वास्थ्य विशेषज्ञ से बातचीत की तैयारी में आपके अनुभवों को व्यवस्थित करने में मदद करती हैं। अनुकूलित प्रश्नों के अंक नैदानिक कट-ऑफ नहीं हैं।'
            : 'આ પ્રશ્નાવલીઓ આરોગ્ય નિષ્ણાત સાથે વાતચીત પહેલાં તમારા અનુભવો ગોઠવવામાં મદદ કરે છે. બદલાયેલા પ્રશ્નોના ગુણ તબીબી કટ-ઓફ નથી.'}
        </p>
      </div>

      {/* Mandatory Non-Diagnostic Clinical Notice */}
      <div className="p-5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3.5 text-stone-800">
        <ShieldAlert className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
            NON-DIAGNOSTIC CLINICAL NOTICE
          </span>
          <p className="font-semibold text-sm sm:text-base text-stone-900 leading-snug">
            {currentLang === 'en'
              ? 'This tool does not provide a medical diagnosis, nor does a high score prove the presence of a clinical disorder.'
              : currentLang === 'hi'
              ? 'यह टूल कोई मेडिकल डायग्नोसिस या बीमारी का प्रमाण नहीं है।'
              : 'આ ટૂલ કોઈ તબીબી નિદાન નથી.'}
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {currentLang === 'en'
              ? 'Scores reflect subjective emotional distress over the past 2 weeks. Comprehensive psychiatric evaluations require direct clinical interview, exploration of medical history, and exclusion of endocrine or neurological conditions.'
              : currentLang === 'hi'
              ? 'यह केवल पिछले 2 सप्ताह की मानसिक स्थिति का सारांश है। सही जांच के लिए डॉक्टर से व्यक्तिगत परामर्श जरूरी है।'
              : 'આ માત્ર છેલ્લા ૨ અઠવાડિયાની સ્થિતિ દર્શાવે છે. સાચી તપાસ માટે ડૉક્ટરને રૂબરૂ મળવું જરૂરી છે.'}
          </p>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenersData.map((tool) => (
          <div
            key={tool.id}
            className="p-6 rounded-xl border border-stone-200 bg-white flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#115e59]">
                  {tool.id}
                </span>
                <span className="text-xs text-stone-500">
                  {tool.questions.length} Questions
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430]">
                {tool.name[currentLang]}
              </h2>

              <p className="text-sm text-stone-600 leading-relaxed">
                {tool.purpose[currentLang]}
              </p>

              <p className="text-xs font-medium text-stone-500">
                {getAssessmentCategory(tool.id) === 'recognized'
                  ? (currentLang === 'en' ? 'Established instrument reference · app version not validated' : currentLang === 'hi' ? 'स्थापित टूल का संदर्भ · ऐप संस्करण मान्य नहीं' : 'સ્થાપિત સાધનનો સંદર્ભ · એપ્લિકેશનનું સંસ્કરણ માન્ય નથી')
                  : getAssessmentCategory(tool.id) === 'pending-review'
                  ? (currentLang === 'en' ? 'Educational reflection · pending item and permission review' : currentLang === 'hi' ? 'शैक्षणिक आत्म-अवलोकन · प्रश्न और अनुमति की समीक्षा बाकी' : 'શૈક્ષણિક આત્મ-અવલોકન · પ્રશ્નો અને પરવાનગીની સમીક્ષા બાકી')
                  : (currentLang === 'en' ? 'Adapted educational reflection · no validated clinical cut-off' : currentLang === 'hi' ? 'अनुकूलित शैक्षणिक आत्म-अवलोकन · मान्य नैदानिक कट-ऑफ नहीं' : 'બદલાયેલ શૈક્ષણિક આત્મ-અવલોકન · માન્ય તબીબી કટ-ઓફ નથી')}
              </p>

              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500">
                <strong>Response options:</strong> {tool.frequencyOptions.length} choices
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <button
                type="button"
                onClick={() => onOpenScreener(tool.id)}
                className="w-full py-2.5 px-4 rounded-md bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>{currentLang === 'en' ? 'Launch Reflection Tool' : currentLang === 'hi' ? 'प्रश्नावली शुरू करें' : 'પ્રશ્નાવલિ શરૂ કરો'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* How to prepare for a psychiatric consultation */}
      <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 space-y-4">
        <h3 className="text-base font-semibold text-[#1c2430]">
          {currentLang === 'en'
            ? 'How to Prepare for Your First Psychiatric Consultation in India'
            : currentLang === 'hi'
            ? 'मनोचिकित्सक से पहली मुलाकात की तैयारी कैसे करें'
            : 'મનોચિકિત્સકની પ્રથમ મુલાકાત માટેની તૈયારી'}
        </h3>
        <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-700">
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
            <strong className="text-[#1c2430] block text-sm">1. Note Your Timeline</strong>
            <p className="text-stone-600">Write down when symptoms began, whether they are continuous or episodic, and any recent life stressors.</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
            <strong className="text-[#1c2430] block text-sm">2. Bring Medical Records</strong>
            <p className="text-stone-600">Include all previous blood tests (thyroid, B12, iron), prescriptions, and past medical or surgical history.</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-1.5">
            <strong className="text-[#1c2430] block text-sm">3. Involve a Trusted Person</strong>
            <p className="text-stone-600">Bringing a family member or close friend can provide crucial collateral history and emotional comfort.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

