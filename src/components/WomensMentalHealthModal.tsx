import React, { useState } from 'react';
import { X, AlertCircle, Shield, BookOpen, HeartHandshake, FileText, ChevronDown, ChevronUp, Scale, HelpCircle, CheckCircle2, Heart, ExternalLink, XCircle, Sparkles } from 'lucide-react';
import { WomensMentalHealthTopic, Language, ShareCardData } from '../types';
import { translations } from '../data/translations';
import { SocialShareBar } from './SocialShareBar';
import { AudioReadAloud } from './AudioReadAloud';
import { WomensMentalHealthIllustration } from './visuals';

interface WomensMentalHealthModalProps {
  topic: WomensMentalHealthTopic | null;
  onClose: () => void;
  currentLang: Language;
  onOpenCrisis: () => void;
}

export const WomensMentalHealthModal: React.FC<WomensMentalHealthModalProps> = ({
  topic,
  onClose,
  currentLang,
  onOpenCrisis,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'variations' | 'treatment' | 'guidance' | 'evidence'>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!topic) return null;
  const t = translations[currentLang];

  const cardData: ShareCardData = {
    type: 'condition',
    kind: 'condition',
    title: topic.name[currentLang],
    category: "WOMEN'S MENTAL HEALTH",
    keyPoints: [
      topic.tagline[currentLang],
      topic.overview[currentLang].slice(0, 160) + '...',
      topic.whenToSeekHelp[currentLang].slice(0, 160) + '...',
    ],
    points: [
      topic.tagline[currentLang],
      topic.overview[currentLang].slice(0, 160) + '...',
      topic.whenToSeekHelp[currentLang].slice(0, 160) + '...',
    ],
    path: `womens-mental-health/${topic.slug || topic.id}`,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop" role="dialog" aria-modal="true" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-3.5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                {currentLang === 'en' ? "Women's Mental Health" : currentLang === 'hi' ? 'महिला मानसिक स्वास्थ्य' : 'મહિલા માનસિક સ્વાસ્થ્ય'}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                {topic.medicalTerms[currentLang]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
              {topic.name[currentLang]}
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              {t.common.lastReviewed}: {topic.lastReviewed} • {t.doctorName}
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

        {/* Visual Header Banner - collapsed in mobile landscape to maximize reading space */}
        <div className="w-full border-b border-stone-200 bg-rose-50/40 shrink-0 hidden landscape:hidden sm:landscape:block sm:block">
          <WomensMentalHealthIllustration className="w-full h-24 sm:h-32" />
        </div>

        {/* Navigation Tabs */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 flex items-center gap-2 overflow-x-auto text-xs font-semibold shrink-0" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-[#0f766e] text-[#0f766e] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Overview & Signs' : currentLang === 'hi' ? 'परिचय एवं लक्षण' : 'પરિચય અને લક્ષણો'}</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'variations'}
            onClick={() => setActiveTab('variations')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
              activeTab === 'variations'
                ? 'border-[#0f766e] text-[#0f766e] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Typical vs. Clinical' : currentLang === 'hi' ? 'सामान्य बनाम चिकित्सकीय' : 'સામાન્ય vs તબીબી ચિંતા'}</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'treatment'}
            onClick={() => setActiveTab('treatment')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
              activeTab === 'treatment'
                ? 'border-[#0f766e] text-[#0f766e] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Treatment & Care' : currentLang === 'hi' ? 'उपचार एवं देखभाल' : 'સારવાર અને સંભાળ'}</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'guidance'}
            onClick={() => setActiveTab('guidance')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
              activeTab === 'guidance'
                ? 'border-[#0f766e] text-[#0f766e] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Support & Stories' : currentLang === 'hi' ? 'सलाह व केस स्टडी' : 'સહાય અને ઉદાહરણો'}</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'evidence'}
            onClick={() => setActiveTab('evidence')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
              activeTab === 'evidence'
                ? 'border-[#0f766e] text-[#0f766e] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Evidence, Myths & FAQs' : currentLang === 'hi' ? 'साक्ष्य, भ्रांतियां व सवाल' : 'પુરાવા અને પ્રશ્નોત્તરી'}</span>
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
              text={`${topic.name[currentLang]}. ${topic.overview[currentLang]}`}
              currentLang={currentLang}
              title={topic.name[currentLang]}
            />
            <SocialShareBar
              title={topic.name[currentLang]}
              subtitle={topic.tagline[currentLang]}
              path={`womens-mental-health/${topic.slug || topic.id}`}
              cardData={cardData}
              currentLang={currentLang}
              variant="compact"
            />
          </div>

          {/* TAB 1: OVERVIEW & SIGNS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Tagline & Overview Box */}
              <div className="p-4 sm:p-5 bg-rose-50/60 border border-rose-200 rounded-xl space-y-2">
                <p className="text-rose-950 font-medium text-sm sm:text-base leading-relaxed">
                  {topic.tagline[currentLang]}
                </p>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed pt-2 border-t border-rose-200/60">
                  {topic.overview[currentLang]}
                </p>
              </div>

              {/* Signs by Category */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-[#1c2430] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>
                    {currentLang === 'en'
                      ? 'Recognizing Clinical Signs & Symptom Patterns'
                      : currentLang === 'hi'
                      ? 'चिकित्सीय संकेत एवं लक्षणों के प्रकार'
                      : 'તબીબી સંકેતો અને લક્ષણો'}
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {topic.commonSigns.map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-white space-y-2.5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-900 border-b border-stone-100 pb-1.5">
                        {cat.category[currentLang]}
                      </h4>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {cat.signs[currentLang].map((sign, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-rose-700 font-bold shrink-0 mt-0.5">•</span>
                            <span className="leading-relaxed">{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Life Stage and Context Impact */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2">
                <h3 className="text-sm font-semibold text-[#1c2430] flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-700" />
                  <span>
                    {currentLang === 'en'
                      ? 'Life Stage & Sociocultural Impact'
                      : currentLang === 'hi'
                      ? 'जीवन-चक्र एवं सामाजिक परिवेश का प्रभाव'
                      : 'જીવન તબક્કા અને સામાજિક પરિસ્થિતિની અસર'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.lifeStageOrContextImpact[currentLang]}
                </p>
              </div>

              {/* When to Seek Help Banner */}
              <div className="p-4 sm:p-5 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <h3 className="text-sm font-semibold text-rose-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-700" />
                  <span>
                    {currentLang === 'en'
                      ? 'When to Seek Immediate Clinical Evaluation'
                      : currentLang === 'hi'
                      ? 'विशेषज्ञ से तुरंत परामर्श कब लें?'
                      : 'તાત્કાલિક ડૉક્ટરની સલાહ ક્યારે લેવી?'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                  {topic.whenToSeekHelp[currentLang]}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={onOpenCrisis}
                    className="px-3 py-1.5 bg-[#9f1239] text-white rounded text-xs font-semibold hover:bg-[#881337] transition min-h-[44px] flex items-center"
                  >
                    {currentLang === 'en'
                      ? "View Women's Support & Crisis Helplines"
                      : currentLang === 'hi'
                      ? 'महिला सुरक्षा एवं हेल्पलाइन नंबर देखें'
                      : 'મહિલા સુરક્ષા અને હેલ્પલાઇન જુઓ'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TYPICAL VARIATIONS VS CLINICAL CONCERNS */}
          {activeTab === 'variations' && (
            <div className="space-y-6">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                <h3 className="text-sm font-semibold text-[#1c2430]">
                  {currentLang === 'en'
                    ? 'Differentiating Typical Biological Fluctuations from Clinical Concerns'
                    : currentLang === 'hi'
                    ? 'सामान्य जैविक उतार-चढ़ाव बनाम चिकित्सकीय चिंता में अंतर'
                    : 'સામાન્ય શારીરિક ફેરફારો vs તબીબી ચિંતા'}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Hormonal and life transitions naturally cause bodily and emotional changes. The purpose of reproductive psychiatry is never to pathologize normal female experiences, but to provide compassionate clinical intervention when distress severely impacts functioning and wellbeing.'
                    : currentLang === 'hi'
                    ? 'हॉर्मोनल और पारिवारिक बदलावों के कारण शरीर और मन में उतार-चढ़ाव आना स्वाभाविक है। इसका उद्देश्य हर सामान्य अनुभव को बीमारी बताना नहीं, बल्कि तब उपचार देना है जब परेशानी दैनिक जीवन और स्वास्थ्य पर भारी पड़ने लगे।'
                    : 'જીવનના ફેરફારોમાં થોડા ઉતાર-ચઢાવ સામાન્ય છે. સાચી ઓળખ એ સમજવામાં છે કે ક્યારે આ તકલીફ સામાન્યથી આગળ વધીને સારવાર માંગી લે છે.'}
                </p>
              </div>

              {/* Comparison Cards */}
              <div className="space-y-4">
                {topic.typicalVariationVsClinicalConcern.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-xs">
                    <div className="bg-stone-100/80 px-4 py-2.5 border-b border-stone-200">
                      <span className="font-semibold text-xs text-[#1c2430]">
                        {item.situationOrPhase[currentLang]}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 text-xs">
                      {/* Typical */}
                      <div className="p-4 space-y-1.5 bg-emerald-50/20">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>
                            {currentLang === 'en' ? 'Typical / Expected Variation' : currentLang === 'hi' ? 'सामान्य / अपेक्षित अनुभव' : 'સામાન્ય અનુભવ'}
                          </span>
                        </div>
                        <p className="text-stone-700 leading-relaxed">
                          {item.typicalVariation[currentLang]}
                        </p>
                      </div>

                      {/* Clinical */}
                      <div className="p-4 space-y-1.5 bg-rose-50/30">
                        <div className="flex items-center gap-1.5 text-rose-900 font-semibold text-xs">
                          <AlertCircle className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                          <span>
                            {currentLang === 'en' ? 'Clinical Concern / Requires Evaluation' : currentLang === 'hi' ? 'चिकित्सकीय चिंता / डॉक्टर की सलाह जरूरी' : 'તબીબી ચિંતા / સારવાર જરૂરી'}
                          </span>
                        </div>
                        <p className="text-stone-800 leading-relaxed font-medium">
                          {item.clinicalConcern[currentLang]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Assessment Overview */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-white space-y-2">
                <h3 className="text-sm font-semibold text-[#1c2430] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0f766e]" />
                  <span>
                    {currentLang === 'en'
                      ? 'Comprehensive Assessment & Medical Workup'
                      : currentLang === 'hi'
                      ? 'सटीक जांच एवं चिकित्सकीय मूल्यांकन प्रक्रिया'
                      : 'તપાસ અને તબીબી મૂલ્યાંકન પદ્ધતિ'}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.assessmentOverview[currentLang]}
                </p>
              </div>

              {/* Biological and Environmental Causes */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-2">
                <h3 className="text-sm font-semibold text-[#1c2430]">
                  {currentLang === 'en' ? 'Biological & Psychosocial Etiology' : currentLang === 'hi' ? 'जैविक एवं सामाजिक कारण' : 'જૈવિક અને સામાજિક પરિબળો'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.causesAndRiskFactors[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT & CARE */}
          {activeTab === 'treatment' && (
            <div className="space-y-6">
              <div className="p-4 bg-rose-50/50 border border-rose-200 rounded-xl">
                <h3 className="text-sm font-semibold text-rose-950">
                  {currentLang === 'en'
                    ? 'The 4-Pillar Multimodal Care Framework for Women'
                    : currentLang === 'hi'
                    ? 'महिलाओं के उपचार के चार मुख्य आधार स्तम्भ'
                    : 'સ્ત્રી સારવારના ચાર મુખ્ય સ્તંભ'}
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Effective mental health care for women combines psychological empowerment, safe reproductive pharmacology, lifestyle adaptations, and structural family/workplace accommodations.'
                    : currentLang === 'hi'
                    ? 'महिलाओं के मानसिक उपचार में मनोवैज्ञानिक संबल, सुरक्षित दवाएं, जीवनशैली में सुधार और पारिवारिक सहयोग चारों का संतुलित समन्वय आवश्यक है।'
                    : 'મનોવૈજ્ઞાનિક કાઉન્સેલિંગ, સલામત દવાઓ અને પરિવારના સાથથી શ્રેષ્ઠ પરિણામો મળે છે.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pillar 1: Psychotherapy */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-[11px] font-bold">1</span>
                    <span>
                      {currentLang === 'en' ? 'Specialized Psychotherapy' : currentLang === 'hi' ? 'विशिष्ट साइकोथेरेपी व काउंसलिंग' : 'સાયકોથેરાપી અને કાઉન્સિલિંગ'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.psychotherapy[currentLang]}
                  </p>
                </div>

                {/* Pillar 2: Medical & Pharmacological */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-[11px] font-bold">2</span>
                    <span>
                      {currentLang === 'en' ? 'Medical & Reproductive Pharmacology' : currentLang === 'hi' ? 'दवाएं एवं हॉर्मोनल संतुलन' : 'તબીબી સારવાર અને દવાઓ'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.medicalAndPharmacological[currentLang]}
                  </p>
                </div>

                {/* Pillar 3: Lifestyle & Supportive */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-[11px] font-bold">3</span>
                    <span>
                      {currentLang === 'en' ? 'Lifestyle, Nutrition & Self-Care' : currentLang === 'hi' ? 'जीवनशैली, पोषण एवं स्वयं की देखभाल' : 'જીવનશૈલી અને પોષણ'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.lifestyleAndSupportive[currentLang]}
                  </p>
                </div>

                {/* Pillar 4: Workplace & Family Support */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-[11px] font-bold">4</span>
                    <span>
                      {currentLang === 'en' ? 'Family, Workplace & Systemic Support' : currentLang === 'hi' ? 'पारिवारिक व कार्यस्थल पर सहयोग' : 'પારિવારિક સહયોગ અને અધિકારો'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.workplaceAndFamilySupport[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SUPPORT & STORIES */}
          {activeTab === 'guidance' && (
            <div className="space-y-6">
              {/* Supportive Guidance */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#1c2430] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-rose-700" />
                  <span>
                    {currentLang === 'en'
                      ? 'Empowering Guidance for Women & Families'
                      : currentLang === 'hi'
                      ? 'महिलाओं एवं परिवारों के लिए व्यावहारिक मार्गदर्शन'
                      : 'મહિલાઓ અને પરિવારો માટે વ્યવહારુ માર્ગદર્શન'}
                  </span>
                </h3>
                <div className="space-y-2.5">
                  {topic.supportiveGuidance.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg border border-stone-200 bg-white space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-800">
                        <span className="w-4 h-4 rounded-full bg-rose-50 text-rose-800 text-[10px] flex items-center justify-center font-bold">{idx + 1}</span>
                        <span>{currentLang === 'en' ? 'Key Principle' : currentLang === 'hi' ? 'मुख्य सूत्र' : 'મુખ્ય સિદ્ધાંત'}</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {item[currentLang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Vignettes */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-semibold text-[#1c2430]">
                  {currentLang === 'en' ? 'Clinical Vignettes & Recovery Journeys' : currentLang === 'hi' ? 'केस स्टडी एवं सुधार की यात्राएं' : 'ઉદાહરણો અને સાજા થવાની વાર્તાઓ'}
                </h3>
                <div className="space-y-3">
                  {topic.illustrativeExamples.map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-stone-50/80 space-y-2">
                      <div className="text-xs font-semibold text-rose-900 uppercase tracking-wider">
                        {currentLang === 'en' ? `Clinical Vignette ${idx + 1}` : currentLang === 'hi' ? `केस स्टडी ${idx + 1}` : `ઉદાહરણ ${idx + 1}`}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                        "{ex[currentLang]}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: EVIDENCE, MYTHS & FAQS */}
          {activeTab === 'evidence' && (
            <div className="space-y-6">
              {/* Evidence & Statistics Infographic Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 pb-1 border-b border-stone-200">
                  <h3 className="text-sm font-bold text-[#1c2430] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-700" />
                    <span>
                      {currentLang === 'en' ? 'Epidemiology & Research Highlights' : currentLang === 'hi' ? 'शोध, आंकड़े एवं प्रमाण' : 'સંશોધન અને આંકડાકીય હકીકતો'}
                    </span>
                  </h3>
                  <span className="text-[11px] font-bold text-rose-800 bg-rose-100/70 px-2 py-0.5 rounded">
                    EVIDENCE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {topic.evidenceHighlights.map((ev, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-rose-200/80 bg-gradient-to-br from-white to-rose-50/20 shadow-2xs space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-rose-800 font-mono tracking-tight">
                          {ev.statistic}
                        </div>
                        <p className="text-xs text-stone-700 font-medium leading-relaxed">
                          {ev.context[currentLang]}
                        </p>
                      </div>
                      <div className="text-[10.5px] text-stone-500 font-medium pt-2 border-t border-rose-100 flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-rose-600 shrink-0" />
                        <span className="font-semibold text-stone-600">Source:</span>
                        <span className="font-mono text-stone-500 truncate">{ev.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Divider */}
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200/80" />
                </div>
                <div className="relative bg-white px-3 text-[10px] font-semibold tracking-widest uppercase text-stone-400">
                  MYTHS VS SCIENTIFIC REALITY
                </div>
              </div>

              {/* Myths vs Facts Comparative Layout */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#1c2430]">
                  {t.common.myths}
                </h3>
                <div className="space-y-3.5">
                  {topic.mythsVsFacts.map((mf, idx) => (
                    <div key={idx} className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-xs">
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
                        {/* Myth */}
                        <div className="p-4 bg-rose-50/40 space-y-2 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
                              <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                              <span>{currentLang === 'en' ? 'Cultural Stigma / Myth' : currentLang === 'hi' ? 'प्रचलित भ्रांति' : 'ખોટી માન્યતા'}</span>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-stone-900 italic leading-relaxed">
                              "{mf.myth[currentLang].replace(/^Myth:\s*/i, '')}"
                            </p>
                          </div>
                          <span className="text-[10px] font-semibold text-rose-700 bg-rose-100/60 self-start px-2 py-0.5 rounded">
                            {currentLang === 'en' ? 'Medically Unfounded' : currentLang === 'hi' ? 'चिकित्सीय रूप से गलत' : 'તબીબી રીતે અસત્ય'}
                          </span>
                        </div>

                        {/* Fact */}
                        <div className="p-4 bg-emerald-50/40 space-y-2 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{currentLang === 'en' ? 'Obstetric / Psychiatric Fact' : currentLang === 'hi' ? 'चिकित्सीय सच्चाई' : 'તબીબી હકીકત'}</span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                              {mf.fact[currentLang].replace(/^Fact:\s*/i, '')}
                            </p>
                          </div>
                          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 self-start px-2 py-0.5 rounded">
                            {currentLang === 'en' ? 'Evidence-Based' : currentLang === 'hi' ? 'वैज्ञानिक तथ्य' : 'પુરાવા આધારિત'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Divider */}
              <div className="relative py-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-stone-200/80" />
                </div>
                <div className="relative bg-white px-3 text-[10px] font-semibold tracking-widest uppercase text-stone-400">
                  FREQUENTLY ASKED QUESTIONS
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-semibold text-[#1c2430]">
                  {t.common.faqs}
                </h3>
                <div className="space-y-2">
                  {topic.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-lg border border-stone-200 overflow-hidden bg-white">
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                        className="w-full p-3.5 text-left text-xs font-semibold text-[#1c2430] flex items-center justify-between gap-3 hover:bg-stone-50 transition cursor-pointer min-h-[44px]"
                      >
                        <span>{faq.question[currentLang]}</span>
                        {openFaqIndex === idx ? (
                          <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                        )}
                      </button>
                      {openFaqIndex === idx && (
                        <div className="p-3.5 pt-0 text-xs text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/30">
                          {faq.answer[currentLang]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional References */}
              {topic.references && topic.references.length > 0 && (
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/60 space-y-2 text-xs">
                  <h4 className="font-semibold text-stone-700 uppercase tracking-wider text-[11px]">
                    {currentLang === 'en' ? 'Peer-Reviewed Clinical References' : currentLang === 'hi' ? 'चिकित्सीय संदर्भ' : 'તબીબી સંદર્ભો'}
                  </h4>
                  <ul className="space-y-1.5 text-stone-500">
                    {topic.references.map((ref, idx) => (
                      <li key={idx} className="flex items-start justify-between gap-2">
                        <span>• {ref.citation}</span>
                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0f766e] hover:underline inline-flex items-center gap-1 shrink-0 ml-2"
                          >
                            <span>Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 border-t border-stone-200 p-4 px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] text-stone-500 leading-tight max-w-xl">
            {t.disclaimer.text}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-100 transition cursor-pointer min-h-[44px]"
          >
            {t.common.close}
          </button>
        </div>
      </div>
    </div>
  );
};
