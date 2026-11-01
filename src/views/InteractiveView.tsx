import React, { useEffect } from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { screenersData } from '../data/assessments';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';

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
      title: currentLang === 'en' ? 'Educational Mental Health Screeners (PHQ-9 & GAD-7)' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य आत्म-अवलोकन टूल (PHQ-9 व GAD-7)' : 'આત્મ-મૂલ્યાંકન પ્રશ્નાવલિ (PHQ-9 અને GAD-7)',
      description: currentLang === 'en'
        ? 'Validated depression and anxiety questionnaires (PHQ-9 and GAD-7) for self-reflection and preparing for a doctor consultation.'
        : currentLang === 'hi'
        ? 'डिप्रेशन और चिंता के लक्षणों को समझने के लिए प्रमाणित प्रश्नावली।'
        : 'ડિપ્રેશન અને ચિંતાના લક્ષણોની સમજ માટે પ્રશ્નાવલિ.',
      path: 'interactive',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Validated Reflection Instruments' : currentLang === 'hi' ? 'प्रमाणित आत्म-मूल्यांकन' : 'સ્વ-મૂલ્યાંકન સાધનો'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.interactive}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Standardized psychological self-report instruments (PHQ-9 for depressive symptoms and GAD-7 for generalized anxiety). These tools are provided strictly for education and structured reflection to help you prepare for clinical discussions with a doctor.'
            : currentLang === 'hi'
            ? 'डिप्रेशन के लक्षणों के लिए PHQ-9 और चिंता के लिए GAD-7। यह टूल केवल आत्म-अवलोकन के लिए है ताकि आप समझ सकें कि डॉक्टर से अपने मन की स्थिति कैसे साझा करें।'
            : 'ડિપ્રેશન માટે PHQ-9 અને ચિંતા માટે GAD-7. આ ટૂલ માત્ર તમારા લક્ષણો સમજવા અને ડૉક્ટર સમક્ષ રજૂ કરવા માટે છે.'}
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
                  {tool.questions.length} Standardized Questions
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430]">
                {tool.name[currentLang]}
              </h2>

              <p className="text-sm text-stone-600 leading-relaxed">
                {tool.purpose[currentLang]}
              </p>

              <div className="pt-2 border-t border-stone-100 text-xs text-stone-500">
                <strong>Frequency Scale:</strong> 0 (Not at all) to 3 (Nearly every day)
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

