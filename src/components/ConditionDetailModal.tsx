import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, CheckCircle2, ShieldAlert, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Sparkles, Quote, XCircle } from 'lucide-react';
import { Condition, Language, ShareCardData } from '../types';
import { translations } from '../data/translations';
import { SocialShareBar } from './SocialShareBar';
import { YouTubeEmbed } from './YouTubeEmbed';
import { AudioReadAloud } from './AudioReadAloud';
import {
  CategoryIllustration,
  ConditionIcon,
  NeuralCircuitryIllustration,
  GrowthPathIllustration,
  SupportNetworkIllustration,
  StressResponseDiagram,
  BreathingPacer,
  ConditionHeroVisual,
} from './visuals';
import { CategoryBadge } from './CategoryBadge';
import { getCategoryTheme } from '../data/categoryThemes';
import { conditionEvidenceGuides } from '../data/conditionEvidenceGuides';

interface ConditionDetailModalProps {
  condition: Condition | null;
  onClose: () => void;
  currentLang: Language;
  onOpenCrisis?: () => void;
}

export const ConditionDetailModal: React.FC<ConditionDetailModalProps> = ({
  condition,
  onClose,
  currentLang,
  onOpenCrisis,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'causes' | 'treatment' | 'recovery' | 'faqs'>('overview');
  const [activeExampleIndex, setActiveExampleIndex] = useState<number>(0);

  if (!condition) return null;
  const t = translations[currentLang];

  const examples = (condition.illustrativeExamples && condition.illustrativeExamples.length > 0)
    ? condition.illustrativeExamples
    : condition.illustrativeExample
    ? [condition.illustrativeExample]
    : [];
  const selectedExampleIndex = activeExampleIndex % Math.max(1, examples.length);
  const currentVignette = examples[selectedExampleIndex] || examples[0];

  const cardData: ShareCardData = {
    type: 'condition',
    kind: 'condition',
    title: condition.name[currentLang],
    category: condition.category.toUpperCase(),
    keyPoints: [
      condition.dailyLifeImpact[currentLang],
      condition.treatment.psychoeducation[currentLang],
      condition.recoveryOutlook[currentLang],
    ],
    points: [
      condition.dailyLifeImpact[currentLang],
      condition.treatment.psychoeducation[currentLang],
      condition.recoveryOutlook[currentLang],
    ],
    path: `conditions/${condition.slug}`,
  };

  const theme = getCategoryTheme(condition.category);
  const evidenceGuide = conditionEvidenceGuides[condition.id];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop" role="dialog" aria-modal="true" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div
        style={{ borderTopColor: theme.hex.accent, borderTopWidth: '4px' }}
        className="aurora-detail-shell w-full max-w-4xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]"
      >
        {/* Modal Header */}
        <div className="bg-white border-b border-stone-200 p-3.5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-stone-200/90 bg-stone-50/80 p-2 shrink-0 flex items-center justify-center shadow-2xs">
              <ConditionIcon
                conditionIcon={condition.conditionIcon}
                conditionId={condition.id}
                className="w-full h-full"
                ariaLabel={condition.name[currentLang]}
              />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5 sm:mb-2">
                <CategoryBadge category={condition.category} currentLang={currentLang} size="sm" />
                <span className="text-xs text-stone-500 font-mono">
                  {condition.medicalTerms[currentLang]}
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
                {condition.name[currentLang]}
              </h2>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5 sm:mt-1">
                {t.common.lastReviewed}: {condition.lastReviewed} • {t.doctorName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Educational Illustration Top Banner - hidden or compact on short landscape viewports */}
        <div className="w-full border-b border-stone-200 bg-stone-50 shrink-0 hidden sm:block">
          <CategoryIllustration
            category={condition.category}
            className="w-full h-24 sm:h-36 md:h-40"
            ariaLabel={`Educational clinical illustration for ${condition.name[currentLang]}`}
          />
        </div>

        {/* Navigation Tabs within Modal */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'overview'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.overview} & {t.conditions.symptoms}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'causes'}
            onClick={() => setActiveTab('causes')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'causes'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.causes} & {t.conditions.diagnosis}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'treatment'}
            onClick={() => setActiveTab('treatment')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'treatment'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.treatment}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'recovery'}
            onClick={() => setActiveTab('recovery')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'recovery'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.conditions.recovery} & {t.conditions.urgentSigns}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'faqs'}
            onClick={() => setActiveTab('faqs')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'faqs'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.common.faqs} & {t.common.myths}
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div
          className="p-4 sm:p-6 flex-1 min-h-0 overflow-y-auto space-y-6 text-stone-700 leading-relaxed text-sm overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Audio Read-Aloud & Fast Sharing */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <AudioReadAloud
              text={`${condition.name[currentLang]}. ${condition.overview[currentLang]}`}
              currentLang={currentLang}
              title={condition.name[currentLang]}
            />
            <SocialShareBar
              title={condition.name[currentLang]}
              subtitle={condition.overview[currentLang]}
              path={`conditions/${condition.slug}`}
              currentLang={currentLang}
              variant="compact"
            />
          </div>

          {(condition.youtubeVideoId || condition.educationalVideoUrl) && (
            <section className="my-3 space-y-2" aria-label={currentLang === 'hi' ? 'शैक्षिक वीडियो' : currentLang === 'gu' ? 'શૈક્ષણિક વિડિઓ' : 'Educational video'}>
              <h3 className="text-sm font-semibold text-[#1c2430]">
                {currentLang === 'hi' ? 'अनुशंसित शैक्षिक वीडियो' : currentLang === 'gu' ? 'ભલામણ કરેલ શૈક્ષણિક વિડિઓ' : 'Recommended educational video'}
              </h3>
              {condition.youtubeVideoId && (
                <YouTubeEmbed
                  videoId={condition.youtubeVideoId}
                  title={condition.educationalVideoTitle?.[currentLang] || condition.name[currentLang]}
                  currentLang={currentLang}
                />
              )}
              {!condition.youtubeVideoId && condition.educationalVideoUrl && (
                <a href={condition.educationalVideoUrl} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-teal-200 bg-teal-50 p-4 text-teal-900 hover:bg-teal-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
                  <span className="font-semibold">{condition.educationalVideoTitle?.[currentLang] || condition.name[currentLang]}</span>
                  <span className="mt-1 block text-sm">{currentLang === 'hi' ? 'आधिकारिक वीडियो पेज खोलें ↗' : currentLang === 'gu' ? 'સત્તાવાર વિડિઓ પેજ ખોલો ↗' : 'Open official video page ↗'}</span>
                </a>
              )}
              {condition.educationalVideoSource && <p className="text-xs text-stone-500">{currentLang === 'hi' ? 'स्रोत' : currentLang === 'gu' ? 'સ્રોત' : 'Source'}: {condition.educationalVideoSource}</p>}
            </section>
          )}

          {/* TAB 1: OVERVIEW & SYMPTOMS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Condition-specific interactive visual */}
          <ConditionHeroVisual conditionId={condition.id} currentLang={currentLang} />

          {/* Category Educational Illustration */}
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs">
                <CategoryIllustration
                  category={condition.category}
                  className="w-full h-36 sm:h-48"
                  ariaLabel={
                    currentLang === 'en'
                      ? `Educational clinical illustration representing ${condition.name[currentLang]}`
                      : `${condition.name[currentLang]} का शैक्षणिक चिकित्सीय चित्रण`
                  }
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.overview}
                </h3>
                <p className="bg-stone-50 p-4 sm:p-5 rounded-lg border border-stone-200 text-stone-800 leading-relaxed text-sm sm:text-base">
                  {condition.overview[currentLang]}
                </p>
              </div>

              {/* Infographic Style: "Evidence at a Glance" */}
              {condition.evidenceHighlights && condition.evidenceHighlights.length > 0 && (
                <div className="rounded-2xl border-2 border-sky-200/90 bg-gradient-to-br from-sky-50/60 via-white to-sky-50/30 p-5 sm:p-6 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-sky-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-950 flex items-center gap-2">
                      <span className="p-1 rounded-md bg-sky-600 text-white">
                        <Sparkles className="w-3.5 h-3.5" />
                      </span>
                      {currentLang === 'hi'
                        ? 'वैज्ञानिक साक्ष्य एवं आंकड़े (Evidence at a Glance)'
                        : currentLang === 'gu'
                        ? 'વૈજ્ઞાનિક પુરાવા અને આંકડા (Evidence at a Glance)'
                        : 'Scientific Evidence at a Glance'}
                    </span>
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full">
                      {currentLang === 'hi'
                        ? 'प्रमाणित शोध'
                        : currentLang === 'gu'
                        ? 'પ્રમાણિત સંશોધન'
                        : 'Peer-Reviewed Clinical Data'}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {condition.evidenceHighlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-sky-200/80 bg-white shadow-2xs flex flex-col justify-between gap-3 relative overflow-hidden group hover:border-sky-400 transition"
                      >
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                            Key Clinical Finding {idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-stone-900 leading-relaxed font-semibold">
                            {item.fact[currentLang]}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 pt-2 border-t border-sky-100 text-[11px] text-stone-500">
                          <BookOpen className="w-3 h-3 text-sky-600 shrink-0" />
                          <span className="font-semibold text-sky-950">Source:</span>
                          <span className="font-mono text-[10px] text-stone-600 truncate max-w-[200px]" title={item.citationRef}>
                            {item.citationRef}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {evidenceGuide && (
                <section
                  aria-labelledby={`condition-evidence-${condition.id}`}
                  className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/70 via-white to-stone-50 p-5 sm:p-6 space-y-4"
                >
                  <div className="flex items-start gap-3 border-b border-teal-100 pb-3">
                    <span className="rounded-lg bg-teal-800 p-2 text-white">
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 id={`condition-evidence-${condition.id}`} className="text-base sm:text-lg font-bold text-[#1c2430]">
                        {evidenceGuide.title[currentLang]}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-stone-700">
                        {evidenceGuide.introduction[currentLang]}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {evidenceGuide.findings.map((finding, idx) => (
                      <article key={idx} className="rounded-xl border border-stone-200 bg-white p-4 space-y-2">
                        <p className="text-sm font-semibold leading-relaxed text-stone-900">
                          {finding.text[currentLang]}
                        </p>
                        <p className="border-l-2 border-amber-400 pl-3 text-xs sm:text-sm leading-relaxed text-stone-600">
                          <strong>
                            {currentLang === 'hi' ? 'ध्यान दें: ' : currentLang === 'gu' ? 'ધ્યાનમાં રાખો: ' : 'Important context: '}
                          </strong>
                          {finding.limitation[currentLang]}
                        </p>
                      </article>
                    ))}
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-stone-600">
                      {currentLang === 'hi' ? 'विश्वसनीय स्रोत और आगे पढ़ें' : currentLang === 'gu' ? 'વિશ્વસનીય સ્ત્રોતો અને વધુ વાંચન' : 'Trusted sources & further reading'}
                    </h4>
                    <ul className="space-y-2">
                      {evidenceGuide.sources.map((source) => (
                        <li key={source.url} className="rounded-lg border border-stone-200 bg-white p-3">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm text-teal-800 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
                          >
                            {source.title}
                            <span className="ml-1 text-xs font-normal text-stone-500">({source.organization})</span>
                          </a>
                          <p className="mt-1 text-xs text-stone-600">
                            {currentLang === 'hi' ? 'बाहरी स्रोत • नई विंडो में खुलेगा' : currentLang === 'gu' ? 'બાહ્ય સ્ત્રોત • નવી વિન્ડોમાં ખુલશે' : 'External source • opens in a new tab'}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="border-t border-teal-100 pt-3 text-xs leading-relaxed text-stone-600">
                    {evidenceGuide.reviewedNote[currentLang]}
                  </p>
                </section>
              )}

              {/* Visual Section Divider */}
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200/80" />
                </div>
                <div className="relative bg-white px-3 text-[10px] font-semibold tracking-widest uppercase text-stone-400">
                  CLINICAL CASE STUDY
                </div>
              </div>

              {/* Editorial Style: Illustrative Case Vignette Switcher */}
              {examples.length > 0 && (
                <div className="rounded-2xl border border-stone-300/80 bg-[#fdfcf9] p-5 sm:p-6 shadow-xs relative overflow-hidden">
                  {/* Decorative faint background quote watermark */}
                  <Quote className="absolute right-4 bottom-4 w-28 h-28 text-stone-200/40 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-200/70">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-teal-800 text-white">
                          <Quote className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-900 block">
                            {currentLang === 'hi'
                              ? 'नैदानिक प्रसंग एवं केस विवरण'
                              : currentLang === 'gu'
                              ? 'તબીબી દ્રષ્ટાંતરૂપ કેસ વિવરણ'
                              : 'Clinical Vignette & Case Archetype'}
                          </span>
                          <span className="text-[11px] text-stone-500 font-medium">
                            {currentLang === 'hi'
                              ? 'विविध लक्षण प्रस्तुतियां'
                              : currentLang === 'gu'
                              ? 'વિવિધ લક્ષણોની રજૂઆત'
                              : 'Varied Clinical Presentations in Practice'}
                          </span>
                        </div>
                      </div>

                      {/* Switcher Controls */}
                      {examples.length > 1 && (
                        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
                          <button
                            type="button"
                            onClick={() => setActiveExampleIndex((prev) => (prev > 0 ? prev - 1 : examples.length - 1))}
                            className="p-1 rounded text-stone-700 hover:bg-white transition cursor-pointer"
                            aria-label="Previous example"
                            title="Previous example"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <div className="flex items-center gap-1">
                            {examples.map((_, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveExampleIndex(idx)}
                                className={`px-2 py-0.5 rounded text-xs font-bold transition cursor-pointer ${
                                  selectedExampleIndex === idx
                                    ? 'bg-teal-800 text-white shadow-xs'
                                    : 'text-stone-600 hover:bg-white/80'
                                }`}
                              >
                                {currentLang === 'hi'
                                  ? `केस ${idx + 1}`
                                  : currentLang === 'gu'
                                  ? `કેસ ${idx + 1}`
                                  : `Case ${idx + 1}`}
                              </button>
                            ))}
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveExampleIndex((prev) => (prev < examples.length - 1 ? prev + 1 : 0))}
                            className="p-1 rounded text-stone-700 hover:bg-white transition cursor-pointer"
                            aria-label="Next example"
                            title="Next example"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
                      <p className="text-stone-800 text-sm sm:text-base leading-relaxed italic">
                        "{currentVignette[currentLang] || currentVignette.en}"
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500 font-medium">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                        <span>
                          {currentLang === 'hi'
                            ? 'यह एक काल्पनिक, चिकित्सीय समझ के लिए बनाया गया केस प्रसंग है।'
                            : currentLang === 'gu'
                            ? 'આ તબીબી સમજૂતી માટે રચાયેલ એક કાલ્પનિક કેસ છે.'
                            : 'Fictional composite presentation for educational purposes • All identities protected.'}
                        </span>
                      </span>
                      {examples.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setActiveExampleIndex((prev) => (prev + 1) % examples.length)}
                          className="text-teal-800 hover:text-teal-950 underline font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <span>
                            {currentLang === 'hi'
                              ? 'अगला केस देखें'
                              : currentLang === 'gu'
                              ? 'બીજો કેસ જુઓ'
                              : 'Show another clinical case'}
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Section Divider */}
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200/80" />
                </div>
                <div className="relative bg-white px-3 text-[10px] font-semibold tracking-widest uppercase text-stone-400">
                  SYMPTOMS & IMPACT
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.symptoms}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {condition.commonSymptoms[currentLang].map((symptom, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.impact}
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed bg-stone-50/50 p-4 rounded-lg border border-stone-200">
                  {condition.dailyLifeImpact[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CAUSES & DIAGNOSIS */}
          {activeTab === 'causes' && (
            <div className="space-y-6">
              {/* Causes & Biological Substrate side-by-side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div className="p-4 sm:p-5 rounded-lg border border-stone-200 bg-stone-50 space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-700">
                    {t.conditions.causes} (Bio-Psycho-Social Model)
                  </h3>
                  <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">
                    {condition.causes[currentLang]}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                    {currentLang === 'en'
                      ? 'Neural Circuitry & Neurobiology'
                      : currentLang === 'hi'
                      ? 'न्यूरल सर्किटरी और न्यूरोबायोलॉजी'
                      : 'ન્યુરલ સર્કિટરી અને ન્યુરોબાયોલોજી'}
                  </span>
                  <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                    <NeuralCircuitryIllustration
                      className="w-full h-36 sm:h-44"
                      ariaLabel={
                        currentLang === 'en'
                          ? 'Scientific diagram showing neural pathways and neurotransmitter activity involved in psychiatric conditions'
                          : 'मानसिक स्वास्थ्य से जुड़े न्यूरल पाथवे और न्यूरोट्रांसमीटर का वैज्ञानिक आरेख'
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  Risk Factors
                </h3>
                <ul className="space-y-2">
                  {condition.riskFactors[currentLang].map((rf, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2 shrink-0" />
                      <span>{rf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-4 sm:p-5 rounded-lg border border-stone-200 space-y-3">
                <h4 className="text-sm font-semibold text-[#1c2430]">
                  How a Psychiatrist Diagnoses (Clinical Evaluation)
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {condition.psychiatricAssessment[currentLang]}
                </p>
                {condition.diagnosisExplanation && (
                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-2.5 border-t border-stone-200">
                    <strong className="text-stone-800 font-semibold block mb-1">Diagnostic Framework & Assessment Process:</strong>
                    <span>{condition.diagnosisExplanation[currentLang]}</span>
                  </div>
                )}
                <div className="text-xs text-stone-600 border-t border-stone-200 pt-2.5">
                  <strong className="text-stone-800 font-semibold">Differential Considerations:</strong>{' '}
                  <span>{condition.differentialConsiderations[currentLang]}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT PLAN */}
          {activeTab === 'treatment' && (
            <div className="space-y-5">
              <h3 className="text-base font-semibold text-[#1c2430]">
                {t.conditions.treatment}
              </h3>

              <div className="grid gap-3.5">
                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Psychotherapy & Psychological Interventions
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {condition.treatment.psychotherapy[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Lifestyle, Sleep & Psychoeducation
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {condition.treatment.lifestyleSupport[currentLang]}
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-stone-200 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                        Family & Social Support System
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {condition.treatment.familySocialInterventions[currentLang]}
                      </p>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-stone-100 bg-stone-50">
                      <SupportNetworkIllustration
                        className="w-full h-28 sm:h-32"
                        ariaLabel={
                          currentLang === 'en'
                            ? 'Illustration of collaborative care and community support system'
                            : 'पारिवारिक और सामाजिक सहायता प्रणाली का चित्रण'
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700">
                <strong className="text-stone-900">Treatment Goals:</strong> {condition.treatmentGoals[currentLang]}
              </div>

              {(condition.category === 'anxiety' || condition.category === 'trauma') && (
                <div className="space-y-4 pt-2 border-t border-stone-100">
                  <StressResponseDiagram currentLang={currentLang} />
                  <BreathingPacer currentLang={currentLang} />
                </div>
              )}
            </div>
          )}

          {/* TAB 4: RECOVERY & WARNING SIGNS */}
          {activeTab === 'recovery' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.conditions.recovery}
                </h3>
                <p className="bg-[#f0fdfa] p-4 rounded-lg border border-[#ccfbf1] text-stone-800 text-sm leading-relaxed">
                  {condition.recoveryOutlook[currentLang]}
                </p>
              </div>

              {/* Holistic Recovery & Support Network Visuals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {currentLang === 'en' ? 'Recovery Trajectory' : currentLang === 'hi' ? 'सुधार और पुनर्प्राप्ति मार्ग' : 'સુધાર અને પુનઃપ્રાપ્તિ પથ'}
                  </span>
                  <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                    <GrowthPathIllustration className="w-full h-32 sm:h-36" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    {currentLang === 'en' ? 'Social & Family Network' : currentLang === 'hi' ? 'पारिवारिक एवं सामाजिक सहयोग' : 'પારિવારિક અને સામાજિક ટેકો'}
                  </span>
                  <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                    <SupportNetworkIllustration className="w-full h-32 sm:h-36" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  Relapse Prevention & Early Detection
                </h3>
                <p className="text-stone-700 text-sm leading-relaxed">
                  {condition.relapsePrevention[currentLang]}
                </p>
              </div>

              <div className="p-4 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
                <div className="flex items-center gap-2 text-[#991b1b] font-semibold text-sm mb-1.5">
                  <ShieldAlert className="w-4 h-4 text-[#991b1b] shrink-0" />
                  <span>{t.conditions.urgentSigns}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {condition.urgentWarningSigns[currentLang]}
                </p>
                <div className="mt-3 pt-2 border-t border-[#fecaca] flex items-center gap-2 text-xs font-semibold text-[#991b1b]">
                  <span>Immediate Crisis Help:</span>
                  <a href="tel:14416" className="underline font-bold">
                    Tele-MANAS: 14416
                  </a>
                  <span>|</span>
                  <a href="tel:112" className="underline font-bold">
                    Emergency: 112
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQS & MYTHS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              {condition.mythsVsFacts.length > 0 && (
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-stone-200">
                    <h3 className="text-base font-bold text-[#1c2430]">
                      {t.common.myths}
                    </h3>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {currentLang === 'hi' ? 'तथ्य बनाम भ्रांतियां' : currentLang === 'gu' ? 'હકીકત વિરુદ્ધ ભ્રમ' : 'Comparative Evidence Analysis'}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {condition.mythsVsFacts.map((mf, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-xs"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
                          {/* Cultural Myth Block */}
                          <div className="p-4 sm:p-5 bg-rose-50/40 flex flex-col justify-between gap-3">
                            <div className="space-y-2">
                              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
                                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                                <span>
                                  {currentLang === 'hi'
                                    ? 'प्रचलित भ्रांति / मिथक (Myth)'
                                    : currentLang === 'gu'
                                    ? 'પ્રચલિત ભ્રમ / અંધશ્રદ્ધા (Myth)'
                                    : 'Common Cultural Myth'}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm font-semibold text-stone-900 italic leading-relaxed">
                                "{mf.myth[currentLang]}"
                              </p>
                            </div>
                            <span className="text-[10.5px] font-semibold text-rose-700 bg-rose-100/60 self-start px-2 py-0.5 rounded">
                              {currentLang === 'hi' ? 'चिकित्सीय रूप से असत्य' : currentLang === 'gu' ? 'તબીબી રીતે અસત્ય' : 'Medically Inaccurate'}
                            </span>
                          </div>

                          {/* Verified Medical Fact Block */}
                          <div className="p-4 sm:p-5 bg-emerald-50/40 flex flex-col justify-between gap-3">
                            <div className="space-y-2">
                              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                <span>
                                  {currentLang === 'hi'
                                    ? 'वैज्ञानिक सच्चाई एवं प्रमाण (Fact)'
                                    : currentLang === 'gu'
                                    ? 'વૈજ્ઞાનિક વાસ્તવિકતા અને પુરાવા (Fact)'
                                    : 'Clinical Reality & Evidence'}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                                {mf.fact[currentLang]}
                              </p>
                            </div>
                            <span className="text-[10.5px] font-semibold text-emerald-800 bg-emerald-100/70 self-start px-2 py-0.5 rounded">
                              {currentLang === 'hi' ? 'प्रमाणित चिकित्सकीय दृष्टिकोण' : currentLang === 'gu' ? 'તબીબી દ્રષ્ટિકોણ' : 'Evidence-Based Fact'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section Divider */}
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200/80" />
                </div>
                <div className="relative bg-white px-3 text-[10px] font-semibold tracking-widest uppercase text-stone-400">
                  FREQUENTLY ASKED QUESTIONS
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-3">
                  {t.common.faqs}
                </h3>
                <div className="space-y-2">
                  {condition.faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-lg border border-stone-200 bg-white overflow-hidden transition"
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-[#1c2430] font-semibold text-xs sm:text-sm hover:bg-stone-50 transition cursor-pointer min-h-[44px]"
                        >
                          <span>{faq.question[currentLang]}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 text-xs sm:text-sm text-stone-600 border-t border-stone-100 pt-2 leading-relaxed bg-stone-50">
                            {faq.answer[currentLang]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {condition.references.length > 0 && (
                <div className="pt-4 border-t border-stone-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    {t.common?.references || 'Scientific References'}
                  </h4>
                  <ul className="space-y-1 text-xs text-stone-500 font-mono">
                    {condition.references.map((ref, i) => (
                      <li key={i}>• {ref.citation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Related Educational Topics */}
          {condition.relatedContent && (
            ((condition.relatedContent.conditionSlugs && condition.relatedContent.conditionSlugs.length > 0) ||
            (condition.relatedContent.treatmentIds && condition.relatedContent.treatmentIds.length > 0)) && (
              <div className="p-4 bg-teal-50/50 border border-teal-100 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  {currentLang === 'en' ? 'Related Clinical Topics' : currentLang === 'hi' ? 'संबंधित विषय' : 'સંબંધિત વિષયો'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {condition.relatedContent.conditionSlugs?.map((slug, idx) => (
                    <span
                      key={`c-${idx}`}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-white border border-teal-200 text-teal-900 font-medium capitalize"
                    >
                      <ArrowRight className="w-3 h-3 text-teal-600" />
                      <span>{slug.replace(/-/g, ' ')}</span>
                    </span>
                  ))}
                  {condition.relatedContent.treatmentIds?.map((tId, idx) => (
                    <span
                      key={`t-${idx}`}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-white border border-emerald-200 text-emerald-900 font-medium uppercase"
                    >
                      <ArrowRight className="w-3 h-3 text-emerald-600" />
                      <span>{tId}</span>
                    </span>
                  ))}
                </div>
              </div>
            )
          )}

          {/* Social Share Bar with Image Card Generation */}
          <SocialShareBar
            title={condition.name[currentLang]}
            subtitle={condition.overview[currentLang]}
            path={`conditions/${condition.slug}`}
            currentLang={currentLang}
            cardData={cardData}
          />

          {/* Contextual Medical Disclaimer */}
          <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700 leading-relaxed">
            <span>
              {t.disclaimer?.banner || t.disclaimer?.text || ''}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            {condition.name[currentLang]} • {t.doctorName}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition cursor-pointer min-h-[44px]"
          >
            {currentLang === 'en' ? 'Close Guide' : currentLang === 'hi' ? 'मार्गदर्शिका बंद करें' : 'માર્ગદર્શિકા બંધ કરો'}
          </button>
        </div>
      </div>
    </div>
  );
};

