import React, { useState } from 'react';
import { X, AlertTriangle, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
import { SubstanceInfo, Language, ShareCardData } from '../types';
import { translations } from '../data/translations';
import { SocialShareBar } from './SocialShareBar';
import { AudioReadAloud } from './AudioReadAloud';
import { YouTubeEmbed } from './YouTubeEmbed';
import { NeuralCircuitryIllustration, GrowthPathIllustration } from './visuals';

interface SubstanceDetailModalProps {
  substance: SubstanceInfo | null;
  onClose: () => void;
  currentLang: Language;
}

export const SubstanceDetailModal: React.FC<SubstanceDetailModalProps> = ({
  substance,
  onClose,
  currentLang,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'neuro' | 'signs' | 'treatment' | 'overdose' | 'faqs'>('neuro');

  if (!substance) return null;
  const t = translations[currentLang];

  const cardData: ShareCardData = {
    type: 'substance',
    kind: 'substance',
    title: substance.name[currentLang],
    category: 'ADDICTION RECOVERY',
    keyPoints: [
      substance.whyAddictive[currentLang],
      substance.brainBodyEffects[currentLang],
      substance.treatmentApproach[currentLang],
    ],
    points: [
      substance.whyAddictive[currentLang],
      substance.brainBodyEffects[currentLang],
      substance.treatmentApproach[currentLang],
    ],
    path: `substances/${substance.slug || substance.id}`,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop" role="dialog" aria-modal="true" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="aurora-detail-shell w-full max-w-4xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-3.5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                DE-ADDICTION & SUBSTANCE EDUCATION
              </span>
              <span className="text-xs text-stone-400 font-mono">
                {substance.medicalTerms[currentLang]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
              {substance.name[currentLang]}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {t.common.lastReviewed}: {substance.lastReviewed} • {t.doctorName}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Header Banner */}
        <div className="w-full border-b border-stone-200 bg-stone-50 shrink-0">
          <NeuralCircuitryIllustration className="w-full h-28 sm:h-36" />
        </div>

        {/* Navigation Tabs */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'neuro'}
            onClick={() => setActiveTab('neuro')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'neuro'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {currentLang === 'en' ? 'What It Is & Neurobiology' : currentLang === 'hi' ? 'परिचय व न्यूरोबायोलॉजी' : 'પરિચય અને ન્યુરોબાયોલોજી'}
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'signs'}
            onClick={() => setActiveTab('signs')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === 'signs'
                ? 'border-[#115e59] text-[#115e59] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            {currentLang === 'en' ? 'Signs, Dependence & Withdrawal' : currentLang === 'hi' ? 'लक्षण, निर्भरता व विड्रॉल' : 'લક્ષણો, નિર્ભરતા અને વિડ્રોઅલ'}
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
            {t.addiction.treatment} & Harm Reduction
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'overdose'}
            onClick={() => setActiveTab('overdose')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center font-bold ${
              activeTab === 'overdose'
                ? 'border-[#991b1b] text-[#991b1b] bg-white'
                : 'border-transparent text-[#991b1b] hover:text-[#7f1d1d]'
            }`}
          >
            {t.addiction.overdose}
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

        {/* Scrollable Body */}
        <div
          className="p-4 sm:p-6 flex-1 min-h-0 overflow-y-auto space-y-6 text-stone-700 leading-relaxed text-sm overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Audio Read-Aloud & Fast Sharing */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-200">
            <AudioReadAloud
              text={`${substance.name[currentLang]}. ${substance.whatIsIt[currentLang]}`}
              currentLang={currentLang}
              title={substance.name[currentLang]}
            />
            <SocialShareBar
              title={substance.name[currentLang]}
              subtitle={substance.whatIsIt[currentLang]}
              path={`substances/${substance.slug || substance.id}`}
              currentLang={currentLang}
              variant="compact"
            />
          </div>

          {substance.youtubeVideoId && (
            <section className="my-3 space-y-2" aria-label={currentLang === 'hi' ? 'शैक्षिक वीडियो' : currentLang === 'gu' ? 'શૈક્ષણિક વિડિઓ' : 'Educational video'}>
              <h3 className="text-sm font-semibold text-[#1c2430]">
                {currentLang === 'hi' ? 'अनुशंसित शैक्षिक वीडियो' : currentLang === 'gu' ? 'ભલામણ કરેલ શૈક્ષણિક વિડિઓ' : 'Recommended educational video'}
              </h3>
              <YouTubeEmbed videoId={substance.youtubeVideoId} title={substance.educationalVideoTitle?.[currentLang] || substance.name[currentLang]} currentLang={currentLang} />
              {substance.educationalVideoSource && <p className="text-xs text-stone-500">{currentLang === 'hi' ? 'स्रोत' : currentLang === 'gu' ? 'સ્રોત' : 'Source'}: {substance.educationalVideoSource}</p>}
            </section>
          )}

          {/* TAB 1: NEUROBIOLOGY */}
          {activeTab === 'neuro' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'What Is It?' : currentLang === 'hi' ? 'यह क्या है?' : 'આ શું છે?'}
                </h3>
                <p className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-800">
                  {substance.whatIsIt[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Why Is It Addictive? (Neurobiology of Addiction)' : currentLang === 'hi' ? 'इसकी लत क्यों लगती है? (न्यूरोबायोलॉजी)' : 'આની આદત કેમ પડે છે? (ન્યુરોબાયોલોજી)'}
                </h3>
                <p className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-stone-800">
                  {substance.whyAddictive[currentLang]}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Short & Long-Term Brain-Body Effects' : currentLang === 'hi' ? 'दिमाग और शरीर पर प्रभाव' : 'મગજ અને શરીર પર અસર'}
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  {substance.brainBodyEffects[currentLang]}
                </p>
              </div>

              {/* Neural Substrate & Neuroadaptation Illustration */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {currentLang === 'en' ? 'Dopaminergic & Reward Pathway Circuitry' : currentLang === 'hi' ? 'डोपामाइन और रिवॉर्ड सर्किट' : 'ડોપામિન અને રિવોર્ડ સર્કિટ'}
                </span>
                <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                  <NeuralCircuitryIllustration className="w-full h-36 sm:h-44" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SIGNS & WITHDRAWAL */}
          {activeTab === 'signs' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Signs of Problematic Use' : currentLang === 'hi' ? 'समस्याग्रस्त उपयोग के संकेत' : 'સમસ્યાજનક વપરાશના સંકેતો'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {substance.problematicUseSigns[currentLang].map((sign, i) => (
                    <div key={i} className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-800">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {currentLang === 'en' ? 'Signs of Physical / Psychological Dependence' : currentLang === 'hi' ? 'शारीरिक व मानसिक निर्भरता के संकेत' : 'શારીરિક અને માનસિક નિર્ભરતા'}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {substance.dependenceSigns[currentLang].map((sign, i) => (
                    <div key={i} className="p-3 rounded-lg border border-stone-200 bg-white flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-stone-800">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg">
                <h4 className="text-sm font-semibold text-[#1c2430] mb-1">
                  {t.addiction.withdrawal}
                </h4>
                {Array.isArray(substance.withdrawalSymptoms[currentLang]) ? (
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-stone-700">
                    {(substance.withdrawalSymptoms[currentLang] as string[]).map((sym, idx) => (
                      <li key={idx}>{sym}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {substance.withdrawalSymptoms[currentLang] as string}
                  </p>
                )}
              </div>

              {(substance.medicalComplications || substance.psychiatricComplications || substance.healthRisks) && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {substance.medicalComplications && (
                    <div className="p-4 bg-white border border-stone-200 rounded-lg">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                        Medical Complications
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.medicalComplications[currentLang]}</p>
                    </div>
                  )}
                  {substance.psychiatricComplications && (
                    <div className="p-4 bg-white border border-stone-200 rounded-lg">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                        Psychiatric Complications
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.psychiatricComplications[currentLang]}</p>
                    </div>
                  )}
                  {substance.healthRisks && !substance.medicalComplications && (
                    <div className="p-4 bg-white border border-stone-200 rounded-lg sm:col-span-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                        Health Risks & Complications
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.healthRisks[currentLang]}</p>
                    </div>
                  )}
                </div>
              )}

              {(substance.assessmentOverview || substance.familyImpact) && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {substance.assessmentOverview && (
                    <div className="p-4 bg-white border border-stone-200 rounded-lg">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                        {currentLang === 'en' ? 'Clinical Assessment & Diagnostics' : currentLang === 'hi' ? 'नैदानिक परीक्षण व जांच' : 'ક્લિનિકલ મૂલ્યાંકન અને તપાસ'}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.assessmentOverview[currentLang]}</p>
                    </div>
                  )}
                  {substance.familyImpact && (
                    <div className="p-4 bg-white border border-stone-200 rounded-lg">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                        {currentLang === 'en' ? 'Impact on Family & Caregivers' : currentLang === 'hi' ? 'परिवार व परिजनों पर प्रभाव' : 'પરિવાર અને સ્વજનો પર અસર'}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">{substance.familyImpact[currentLang]}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TREATMENT & HARM REDUCTION */}
          {activeTab === 'treatment' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-[#1c2430] mb-2">
                  {t.addiction.treatment}
                </h3>
                <p className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-stone-800 text-sm leading-relaxed">
                  {substance.treatmentApproach[currentLang]}
                </p>
              </div>

              {substance.psychotherapyModalities && (
                <div className="p-4 bg-white border border-stone-200 rounded-lg">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    Psychotherapy (Motivational Interviewing & CBT)
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {substance.psychotherapyModalities[currentLang]}
                  </p>
                </div>
              )}

              {(substance.detoxificationConcepts || substance.relapsePrevention || substance.harmReduction || substance.relapseTriggers) && (
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg space-y-3">
                  {substance.detoxificationConcepts && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Understanding Detoxification Safely
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {substance.detoxificationConcepts[currentLang]}
                      </p>
                    </div>
                  )}
                  {(substance.relapsePrevention || substance.harmReduction) && (
                    <div className="pt-2 border-t border-stone-200">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Relapse Prevention & Harm Reduction
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {[substance.relapsePrevention?.[currentLang], substance.harmReduction?.[currentLang]].filter(Boolean).join(' • ')}
                      </p>
                    </div>
                  )}
                  {substance.relapseTriggers && (
                    <div className="pt-2 border-t border-stone-200">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Common Relapse Triggers
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {substance.relapseTriggers[currentLang]}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* De-addiction Recovery Trajectory Illustration */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {currentLang === 'en' ? 'Sustained Sobriety & Brain Recovery Journey' : currentLang === 'hi' ? 'दीर्घकालिक नशा मुक्ति व स्वास्थ्य सुधार' : 'નશામુક્તિ અને મગજના સુધારની યાત્રા'}
                </span>
                <div className="rounded-xl overflow-hidden border border-stone-200 bg-white">
                  <GrowthPathIllustration className="w-full h-36 sm:h-44" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OVERDOSE & EMERGENCY */}
          {activeTab === 'overdose' && (
            <div className="space-y-6">
              <div className="p-5 bg-[#fef2f2] border border-[#fecaca] rounded-lg">
                <div className="flex items-center gap-2 text-[#991b1b] font-semibold text-base mb-2">
                  <ShieldAlert className="w-5 h-5 text-[#991b1b] shrink-0" />
                  <span>{t.addiction.overdose}</span>
                </div>
                <p className="text-sm font-semibold text-stone-900 mb-3 leading-relaxed">
                  {substance.overdoseWarningSigns?.[currentLang] || (currentLang === 'en' ? 'Acute intoxication, loss of consciousness, shallow breathing, bluish lips, or sudden seizures are life-threatening medical emergencies.' : currentLang === 'hi' ? 'बेहोशी, सांस धीमी होना, होंठ नीले पड़ना या दौरे पड़ना जानलेवा आपात स्थिति है।' : 'બેભાન અવસ્થા, શ્વાસ ધીમો પડવો કે આંચકી આવવી એ જોખમી ઇમરજન્સી છે.')}
                </p>

                <div className="p-4 bg-white rounded-lg border border-[#fecaca] space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#991b1b]">
                    Immediate Life-Saving Emergency First-Aid Advice:
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-medium">
                    {substance.emergencyAdvice?.[currentLang] || (currentLang === 'en' ? 'Place the person in the recovery position on their side. Ensure clear airway. Do NOT induce vomiting or give oral fluids. Call national emergency 112 immediately.' : currentLang === 'hi' ? 'मरीज को एक करवट (Recovery Position) में लिटाएं ताकि सांस की नली खुली रहे। कुछ खिलाने या उल्टी कराने की कोशिश न करें और तुरंत 112 पर कॉल करें।' : 'દર્દીને પડખે સુવડાવો. મોં સાફ રાખો અને ૧૧૨ પર તાત્કાલિક કૉલ કરો.')}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#fecaca] flex flex-wrap items-center gap-3 text-xs font-bold">
                  <a href="tel:112" className="px-4 py-2.5 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white transition min-h-[44px] flex items-center">
                    Call 112 (National Emergency Dispatch)
                  </a>
                  <a href="tel:14416" className="px-4 py-2.5 rounded-md bg-stone-800 hover:bg-stone-900 text-white transition min-h-[44px] flex items-center">
                    Call 14416 (Tele-MANAS)
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQS & MYTHS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              {(substance.mythsVsFacts && substance.mythsVsFacts.length > 0) && (
                <div>
                  <h3 className="text-base font-semibold text-[#1c2430] mb-3">
                    {t.common.myths}
                  </h3>
                  <div className="space-y-3">
                    {substance.mythsVsFacts.map((mf, i) => (
                      <div key={i} className="p-3.5 rounded-lg border border-stone-200 bg-stone-50 space-y-1.5">
                        <div className="text-xs font-semibold text-stone-700">
                          <span className="font-semibold uppercase tracking-wider text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-stone-200 text-stone-700">
                            Myth
                          </span>
                          "{mf.myth[currentLang]}"
                        </div>
                        <div className="text-xs font-medium text-stone-800">
                          <span className="font-semibold uppercase tracking-wider text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-[#ccfbf1] text-[#115e59]">
                            Fact
                          </span>
                          {mf.fact[currentLang]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(substance.faqs && substance.faqs.length > 0) && (
                <div>
                  <h3 className="text-base font-semibold text-[#1c2430] mb-3">
                    {t.common.faqs}
                  </h3>
                  <div className="space-y-2">
                    {substance.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className="rounded-lg border border-stone-200 bg-white overflow-hidden transition">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full text-left p-3.5 flex items-center justify-between gap-3 text-[#1c2430] font-semibold text-xs sm:text-sm hover:bg-stone-50 transition cursor-pointer min-h-[44px]"
                          >
                            <span>{faq.question[currentLang]}</span>
                            {isOpen ? <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
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
              )}
            </div>
          )}

          {/* Social Share Bar with Image Card */}
          <SocialShareBar
            title={substance.name[currentLang]}
            subtitle={substance.whatIsIt[currentLang]}
            path={`substances/${substance.slug || substance.id}`}
            currentLang={currentLang}
            cardData={cardData}
          />
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            {substance.name[currentLang]} • {t.doctorName}
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

