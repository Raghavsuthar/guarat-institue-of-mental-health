import React, { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Language, SymptomEducation } from '../types';
import { symptomsData } from '../data/symptoms';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { CategoryIllustration } from '../components/visuals/CategoryIllustrations';
import { mapSymptomToCategory } from '../utils/illustrationMapping';

interface SymptomsViewProps {
  currentLang: Language;
}

export const SymptomsView: React.FC<SymptomsViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Understanding Psychiatric Symptoms' : currentLang === 'hi' ? 'मानसिक लक्षणों की समझ' : 'માનસિક લક્ષણોની વૈજ્ઞાનિક સમજ',
      description: currentLang === 'en'
        ? 'Educational guide to insomnia, panic, intrusive thoughts, fatigue, and when to seek a medical evaluation.'
        : currentLang === 'hi'
        ? 'अनिद्रा, घबराहट, नकारात्मक विचारों और थकान की चिकित्सीय समझ।'
        : 'અનિદ્રા, ચિંતા અને થાક જેવા લક્ષણોની તબીબી સમજ.',
      path: 'symptoms',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Symptom Literacy' : currentLang === 'hi' ? 'लक्षणों की समझ' : 'લક્ષણોની સમજ'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.symptoms}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'A single psychiatric symptom does not automatically equal a specific illness. Symptoms frequently cross diagnostic boundaries and can also arise from thyroid disorders, nutritional deficiencies, or life stress.'
            : currentLang === 'hi'
            ? 'किसी एक लक्षण का मतलब कोई निश्चित बीमारी नहीं होता। थायरॉयड, खून की कमी या अत्यधिक तनाव से भी ऐसे लक्षण हो सकते हैं। लक्षणों का निष्पक्ष विश्लेषण समझें।'
            : 'કોઈ એક લક્ષણનો અર્થ ચોક્કસ બીમારી નથી હોતો. શારીરિક કારણોથી પણ આવા ફેરફાર થઈ શકે છે.'}
        </p>
      </div>

      {/* Mandatory Non-Diagnostic Rule Banner */}
      <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm text-stone-800 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
        <div>
          <strong className="text-stone-900">{t.disclaimer.title}:</strong>{' '}
          {currentLang === 'en'
            ? 'A symptom can occur in multiple conditions and can also occur due to medical, medication-related, or substance-related causes. Do not self-diagnose based on a symptom checklist.'
            : currentLang === 'hi'
            ? 'एक लक्षण कई अलग-अलग बीमारियों या शारीरिक कारणों (जैसे थायरॉयड) से भी हो सकता है। केवल लक्षणों को देखकर खुद की बीमारी तय न करें।'
            : 'એક લક્ષણ અનેક કારણોથી હોઈ શકે છે. જાતે નિદાન કરવાને બદલે ડૉક્ટરની સલાહ લો.'}
        </div>
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {symptomsData.map((sym) => (
          <div
            key={sym.id}
            className="p-6 rounded-xl border border-stone-200 bg-white space-y-4"
          >
            {/* Visual Accent */}
            <div className="h-28 sm:h-32 w-full rounded-lg overflow-hidden border border-stone-200/80 bg-stone-50">
              <CategoryIllustration
                category={mapSymptomToCategory(sym.id)}
                className="w-full h-full object-cover"
                ariaLabel={sym.symptomName[currentLang]}
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                SYMPTOM EDUCATION
              </span>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430] mt-1">
                {sym.symptomName[currentLang]}
              </h2>
              <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                {sym.plainDescription[currentLang]}
              </p>
            </div>

            {/* Possible Causes */}
            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm">
              <strong className="text-[#1c2430] block mb-1">Possible Clinical & Medical Causes:</strong>
              <p className="text-stone-700 leading-relaxed">{sym.possibleCauses[currentLang]}</p>
            </div>

            {/* When to Consult & Self-Care */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <strong className="text-[#1c2430]">When to Seek Medical Evaluation:</strong>{' '}
                <span className="text-stone-700">{sym.whenToConsult[currentLang]}</span>
              </div>
              <div>
                <strong className="text-[#1c2430]">Healthy Self-Care Routine:</strong>{' '}
                <span className="text-stone-700">{sym.selfCareSupport[currentLang]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

