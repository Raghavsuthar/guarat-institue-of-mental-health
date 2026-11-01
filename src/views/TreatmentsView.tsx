import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Language, TherapyModality } from '../types';
import { treatmentsData } from '../data/treatments';
import { conditionsData } from '../data/conditions';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { CategoryIllustration, CBTThoughtCycleDiagram } from '../components/visuals';
import { YouTubeEmbed } from '../components/YouTubeEmbed';

interface TreatmentsViewProps {
  currentLang: Language;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({ currentLang }) => {
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyModality | null>(treatmentsData[0]);
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Evidence-Based Psychotherapies & Treatments' : currentLang === 'hi' ? 'वैज्ञानिक साइकोथेरेपी एवं उपचार पद्धतियां' : 'વૈજ્ઞાનિક સારવાર અને થેરાપી',
      description: currentLang === 'en'
        ? 'Clinical explanations of CBT, ERP for OCD, DBT, and family therapies in psychiatry.'
        : currentLang === 'hi'
        ? 'सीबीटी (CBT), ईआरपी (ERP) और अन्य प्रमाणित मानसिक चिकित्सा पद्धतियों की समझ।'
        : 'CBT, ERP અને સાયકોથેરાપી વિશે તબીબી માર્ગદર્શન.',
      path: 'treatments',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Evidence-Based Psychotherapy' : currentLang === 'hi' ? 'वैज्ञानिक साइकोथेरेपी' : 'વૈજ્ઞાનિક સાયકોથેરાપી'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.treatments}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Evidence-based psychotherapies are structured, clinically validated interventions designed to restructure distorted cognition, extinguish conditioned fear responses, and build emotional resilience.'
            : currentLang === 'hi'
            ? 'वैज्ञानिक साइकोथेरेपी केवल बातचीत नहीं है; यह मस्तिष्क के सोचने के तरीकों को बदलने और मानसिक लचीलापन विकसित करने की प्रमाणित चिकित्सा है।'
            : 'સાયકોથેરાપી માત્ર વાતચીત નથી પરંતુ મગજના નકારાત્મક વિચારો બદલવાની અને મનોબળ મજબૂત કરવાની વૈજ્ઞાનિક સારવાર છે.'}
        </p>
      </div>

      {/* Visual Education Header Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-white">
        <CategoryIllustration
          category="treatments"
          className="w-full h-36 sm:h-44"
          ariaLabel={
            currentLang === 'en'
              ? 'Educational clinical illustration of evidence-based psychotherapy and therapeutic connection'
              : currentLang === 'hi'
              ? 'प्रमाणित साइकोथेरेपी और चिकित्सकीय संवाद का शैक्षिक चित्रण'
              : 'પુરાવા-આધારિત સાયકોથેરાપી અને ચિકિત્સા સંવાદનું શૈક્ષણિક ચિત્ર'
          }
        />
      </div>

      {/* Therapy Modalities Selector & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Modality List */}
        <div className="space-y-2.5 lg:col-span-1">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
            {currentLang === 'en' ? 'Therapeutic Modalities' : currentLang === 'hi' ? 'थेरेपी के प्रकार' : 'થેરાપીના પ્રકારો'}
          </h2>
          {treatmentsData.map((th) => {
            const isSelected = selectedTherapy?.id === th.id;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => setSelectedTherapy(th)}
                className={`w-full text-left p-4 rounded-xl border transition cursor-pointer min-h-[44px] ${
                  isSelected
                    ? 'border-[#115e59] bg-white ring-1 ring-[#115e59]'
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {th.shortName}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-[#1c2430] mt-1">
                  {th.name[currentLang]}
                </h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                  {th.plainSummary[currentLang]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Therapy In-Depth Display */}
        {selectedTherapy && (
          <div className="lg:col-span-2 p-6 sm:p-8 bg-white border border-stone-200 rounded-xl space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#115e59]">
                    {selectedTherapy.shortName}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] mt-1">
                    {selectedTherapy.name[currentLang]}
                  </h2>
                </div>
                <div className="w-16 h-12 shrink-0 rounded-lg overflow-hidden border border-teal-200/80 bg-stone-50">
                  <CategoryIllustration
                    category="treatments"
                    className="w-full h-full object-cover"
                    ariaLabel=""
                  />
                </div>
              </div>
              <p className="text-sm text-stone-700 mt-3 leading-relaxed bg-stone-50 p-4 rounded-lg border border-stone-200">
                {selectedTherapy.plainSummary[currentLang]}
              </p>
            </div>

            {/* Educational Video Embed if curated */}
            {selectedTherapy.youtubeVideoId && (
              <div className="my-2">
                <YouTubeEmbed
                  videoId={selectedTherapy.youtubeVideoId}
                  title={selectedTherapy.name[currentLang]}
                  currentLang={currentLang}
                />
              </div>
            )}

            {/* Interactive CBT Cognitive Cycle Diagram */}
            {selectedTherapy.id === 'cbt' && (
              <div className="my-2">
                <CBTThoughtCycleDiagram currentLang={currentLang} />
              </div>
            )}

            {/* How It Works */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                How It Works (Mechanism & Principles)
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedTherapy.howItWorks[currentLang]}
              </p>
            </div>

            {/* Conditions Used For */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Conditions Indicated For
              </h3>
              <p className="text-sm text-stone-800 bg-stone-50 p-3.5 rounded-lg border border-stone-200 font-medium">
                {selectedTherapy.conditionsUsedFor[currentLang]}
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                What to Expect During Sessions
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedTherapy.whatToExpect[currentLang]}
              </p>
            </div>

            {/* Common Misconceptions */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-700">
              <strong className="text-[#1c2430]">Medical Clarification:</strong> {selectedTherapy.misconceptions[currentLang]}
            </div>

            {/* Illustrative Case Vignette */}
            {selectedTherapy.illustrativeExample && (
              <div className="p-4 sm:p-5 rounded-xl bg-teal-50/40 border border-teal-100 space-y-2">
                <div className="flex items-center gap-2 text-teal-900 font-semibold text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#115e59]" />
                  <span>
                    {currentLang === 'hi'
                      ? 'काल्पनिक केस उदाहरण (थेरेपी कैसे मदद करती है)'
                      : currentLang === 'gu'
                      ? 'કાલ્પનિક કેસ ઉદાહરણ (થેરાપી કેવી રીતે મદદ કરે છે)'
                      : 'Illustrative Clinical Vignette (How Therapy Helps)'}
                  </span>
                </div>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{selectedTherapy.illustrativeExample[currentLang]}"
                </p>
                <p className="text-[11px] text-stone-500 border-t border-teal-100/60 pt-2 font-medium">
                  {currentLang === 'hi'
                    ? 'ℹ️ यह एक काल्पनिक, समझाने के उद्देश्य से बनाया गया उदाहरण है — कोई वास्तविक मरीज नहीं।'
                    : currentLang === 'gu'
                    ? 'ℹ️ આ સમજૂતી માટેનું એક કાલ્પનિક ઉદાહરણ છે — કોઈ વાસ્તવિક દર્દી નથી.'
                    : 'ℹ️ This is a fictional, illustrative clinical example — not a real patient.'}
                </p>
              </div>
            )}

            {/* Related Clinical Conditions */}
            {selectedTherapy.relatedIds && selectedTherapy.relatedIds.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {currentLang === 'en' ? 'Related Clinical Conditions' : currentLang === 'hi' ? 'संबंधित मानसिक स्वास्थ्य स्थितियां' : 'સંબંધિત માનસિક સ્વાસ્થ્ય સ્થિતિઓ'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTherapy.relatedIds.map((relId) => {
                    const matchedCondition = conditionsData.find(
                      (c) => c.id === relId || c.slug === relId
                    );
                    if (matchedCondition) {
                      return (
                        <Link
                          key={relId}
                          to={`/${currentLang}/conditions/${matchedCondition.slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-teal-200 bg-teal-50/50 hover:bg-teal-100 text-teal-900 text-xs font-medium transition cursor-pointer"
                        >
                          <span>{matchedCondition.name[currentLang]}</span>
                          <ArrowRight className="w-3 h-3 text-teal-700" />
                        </Link>
                      );
                    }
                    return (
                      <span
                        key={relId}
                        className="inline-flex items-center px-2.5 py-1 rounded-md border border-stone-200 bg-stone-50 text-stone-700 text-xs font-medium capitalize"
                      >
                        {relId.replace(/-/g, ' ')}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Clinical Evidence & References */}
            {selectedTherapy.references && selectedTherapy.references.length > 0 && (
              <div className="pt-3 border-t border-stone-100 space-y-1">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {currentLang === 'en' ? 'Clinical Evidence & Guidelines' : currentLang === 'hi' ? 'वैज्ञानिक प्रमाण एवं दिशानिर्देश' : 'વૈજ્ઞાનિક પુરાવા અને માર્ગદર્શિકા'}
                </h4>
                <ul className="space-y-1 text-xs text-stone-500 font-mono">
                  {selectedTherapy.references.map((ref, idx) => (
                    <li key={idx}>• {ref.citation}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-xs text-stone-400 font-mono pt-2 border-t border-stone-100">
              Last clinical review: {selectedTherapy.lastReviewed} • Gujarat Institute of Mental Health
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


