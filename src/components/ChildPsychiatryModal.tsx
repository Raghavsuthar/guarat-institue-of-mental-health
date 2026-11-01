import React, { useState } from 'react';
import { X, AlertCircle, Shield, BookOpen, HeartHandshake, FileText, ChevronDown, ChevronUp, Scale, School, HelpCircle, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { ChildAdolescentTopic, Language, ShareCardData } from '../types';
import { translations } from '../data/translations';
import { SocialShareBar } from './SocialShareBar';
import { AudioReadAloud } from './AudioReadAloud';
import { NeurodevelopmentalIllustration } from './visuals';

interface ChildPsychiatryModalProps {
  topic: ChildAdolescentTopic | null;
  onClose: () => void;
  currentLang: Language;
  onOpenCrisis: () => void;
}

export const ChildPsychiatryModal: React.FC<ChildPsychiatryModalProps> = ({
  topic,
  onClose,
  currentLang,
  onOpenCrisis,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'development' | 'treatment' | 'guidance' | 'evidence'>('overview');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!topic) return null;
  const t = translations[currentLang];

  const cardData: ShareCardData = {
    type: 'condition',
    kind: 'condition',
    title: topic.name[currentLang],
    category: 'CHILD & ADOLESCENT MENTAL HEALTH',
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
    path: `child-psychiatry/${topic.slug || topic.id}`,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop" role="dialog" aria-modal="true" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-3.5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                {currentLang === 'en' ? 'Child & Adolescent Psychiatry' : currentLang === 'hi' ? 'बाल एवं किशोर मनोचिकित्सा' : 'બાળ અને કિશોર મનોચિકિત્સા'}
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
        <div className="w-full border-b border-stone-200 bg-emerald-50/40 shrink-0 hidden landscape:hidden sm:landscape:block sm:block">
          <NeurodevelopmentalIllustration className="w-full h-24 sm:h-32" />
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
            <span>{currentLang === 'en' ? 'Overview & Warning Signs' : currentLang === 'hi' ? 'परिचय एवं लक्षण' : 'પરિચય અને લક્ષણો'}</span>
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'development'}
            onClick={() => setActiveTab('development')}
            className={`py-3 px-3.5 border-b-2 transition cursor-pointer whitespace-nowrap min-h-[44px] flex items-center gap-1.5 ${
              activeTab === 'development'
                ? 'border-[#0f766e] text-[#0f766e] bg-white'
                : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Typical vs. Red Flags' : currentLang === 'hi' ? 'सामान्य व्यवहार बनाम चेतावनी' : 'સામાન્ય વર્તન vs ચેતવણી'}</span>
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
            <span>{currentLang === 'en' ? 'Treatment & School Support' : currentLang === 'hi' ? 'इलाज एवं स्कूल सहयोग' : 'સારવાર અને શાળા સહાય'}</span>
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
            <span>{currentLang === 'en' ? 'Parent Guidance & Vignettes' : currentLang === 'hi' ? 'अभिभावक मार्गदर्शन व केस स्टडी' : 'વાલી માર્ગદર્શન અને ઉદાહરણો'}</span>
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
            <span>{currentLang === 'en' ? 'Myths, FAQs & Evidence' : currentLang === 'hi' ? 'भ्रांतियां, सवाल व साक्ष्य' : 'માન્યતાઓ અને પ્રશ્નોત્તરી'}</span>
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
              path={`child-psychiatry/${topic.slug || topic.id}`}
              cardData={cardData}
              currentLang={currentLang}
              variant="compact"
            />
          </div>

          {/* TAB 1: OVERVIEW & WARNING SIGNS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Tagline & Overview Box */}
              <div className="p-4 sm:p-5 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
                <p className="text-emerald-950 font-medium text-sm sm:text-base leading-relaxed">
                  {topic.tagline[currentLang]}
                </p>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed pt-2 border-t border-emerald-200/60">
                  {topic.overview[currentLang]}
                </p>
              </div>

              {/* Warning Signs by Category */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-[#1c2430] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>
                    {currentLang === 'en' ? 'Observable Behavioral, Emotional & Academic Signs' : currentLang === 'hi' ? 'व्यवहार, भावना एवं पढ़ाई में दिखने वाले संकेत' : 'વર્તણૂક, લાગણી અને અભ્યાસના સંકેતો'}
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {topic.commonSigns.map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-white space-y-2.5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-900 border-b border-stone-100 pb-1.5">
                        {cat.category[currentLang]}
                      </h4>
                      <ul className="space-y-2 text-xs text-stone-700">
                        {cat.signs[currentLang].map((sign, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-emerald-700 font-bold shrink-0 mt-0.5">•</span>
                            <span className="leading-relaxed">{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* School and Home Impact */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2">
                <h3 className="text-sm font-semibold text-[#1c2430] flex items-center gap-2">
                  <School className="w-4 h-4 text-stone-600" />
                  <span>{currentLang === 'en' ? 'Impact on School, Learning & Family Life' : currentLang === 'hi' ? 'स्कूल, पढ़ाई और पारिवारिक जीवन पर प्रभाव' : 'શાળા, અભ્યાસ અને પારિવારિક જીવન પર અસર'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.schoolAndHomeImpact[currentLang]}
                </p>
              </div>

              {/* When to Seek Help Banner */}
              <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                <h3 className="text-sm font-semibold text-amber-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>{currentLang === 'en' ? 'When to Seek Professional Evaluation' : currentLang === 'hi' ? 'विशेषज्ञ मूल्यांकन कब आवश्यक है?' : 'નિષ્ણાતની સલાહ ક્યારે લેવી?'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {topic.whenToSeekHelp[currentLang]}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={onOpenCrisis}
                    className="px-3 py-1.5 bg-amber-800 text-white rounded text-xs font-semibold hover:bg-amber-900 transition min-h-[44px] flex items-center"
                  >
                    {currentLang === 'en' ? 'View National Child & Crisis Helplines' : currentLang === 'hi' ? 'राष्ट्रीय बाल व हेल्पलाइन देखें' : 'રાષ્ટ્રીય બાળ હેલ્પલાઇન જુઓ'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TYPICAL DEVELOPMENT VS RED FLAGS */}
          {activeTab === 'development' && (
            <div className="space-y-6">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                <h3 className="text-sm font-semibold text-[#1c2430]">
                  {currentLang === 'en'
                    ? 'Understanding Developmental Differences: Normal Childhood vs. Clinical Concern'
                    : currentLang === 'hi'
                    ? 'विकासात्मक अंतर समझें: सामान्य बचपन का व्यवहार बनाम चिकित्सीय चिंता'
                    : 'વિકાસના તબક્કા સમજો: સામાન્ય બાળપણ vs ક્લિનિકલ ચિંતા'}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Childhood behaviors naturally fluctuate. The goal of child psychiatry is never to pathologize vibrant, curious, or spirited children, but to provide clarity when distress and functional impairment persist.'
                    : currentLang === 'hi'
                    ? 'बच्चों के व्यवहार में उतार-चढ़ाव स्वाभाविक है। इसका उद्देश्य सामान्य शरारतों को बीमारी बताना नहीं है, बल्कि तब मदद देना है जब बच्चे की पढ़ाई, दोस्ती या खुशी में गंभीर रुकावट आ रही हो।'
                    : 'બાળકોના વર્તનમાં ફેરફારો સ્વાભાવિક છે. સામાન્ય મસ્તીને રોગ ન ગણવો, પણ જ્યારે મુશ્કેલી લાંબી ચાલે ત્યારે નિષ્ણાતની સલાહ લેવી.'}
                </p>
              </div>

              {/* Age Range Comparison Cards */}
              <div className="space-y-4">
                {topic.typicalDevelopmentVsRedFlags.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-xs">
                    <div className="bg-stone-100/80 px-4 py-2.5 border-b border-stone-200">
                      <span className="font-semibold text-xs text-[#1c2430]">
                        {item.ageRange[currentLang]}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 text-xs">
                      {/* Typical */}
                      <div className="p-4 space-y-1.5 bg-emerald-50/20">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-semibold text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                          <span>{currentLang === 'en' ? 'Typical / Expected Development' : currentLang === 'hi' ? 'सामान्य / अपेक्षित व्यवहार' : 'સામાન્ય વર્તન'}</span>
                        </div>
                        <p className="text-stone-700 leading-relaxed">
                          {item.typicalDevelopment[currentLang]}
                        </p>
                      </div>

                      {/* Red Flags */}
                      <div className="p-4 space-y-1.5 bg-amber-50/30">
                        <div className="flex items-center gap-1.5 text-amber-900 font-semibold text-xs">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                          <span>{currentLang === 'en' ? 'Clinical Concern / Red Flags' : currentLang === 'hi' ? 'चेतावनी संकेत / चिकित्सीय चिंता' : 'ક્લિનિકલ ચિંતા / ચેતવણી'}</span>
                        </div>
                        <p className="text-stone-800 leading-relaxed font-medium">
                          {item.redFlagsClinicalConcern[currentLang]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Assessment Overview */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-white space-y-2">
                <h3 className="text-sm font-semibold text-[#1c2430] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>{currentLang === 'en' ? 'How Comprehensive Assessment is Conducted' : currentLang === 'hi' ? 'व्यापक मूल्यांकन प्रक्रिया' : 'તપાસ પ્રક્રિયા'}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.assessmentOverview[currentLang]}
                </p>
              </div>

              {/* Biological and Environmental Causes */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-2">
                <h3 className="text-sm font-semibold text-[#1c2430]">
                  {currentLang === 'en' ? 'Etiology & Risk Factors' : currentLang === 'hi' ? 'कारण एवं जोखिम कारक' : 'કારણો અને જોખમી પરિબળો'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.causesAndRiskFactors[currentLang]}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: TREATMENT & SCHOOL SUPPORT */}
          {activeTab === 'treatment' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-xl">
                <h3 className="text-sm font-semibold text-emerald-950">
                  {currentLang === 'en'
                    ? 'The 4-Pillar Multimodal Pediatric Care Framework'
                    : currentLang === 'hi'
                    ? 'बाल मनोचिकित्सा के चार प्रमुख स्तंभ'
                    : 'બાળ સારવારના ચાર મુખ્ય સ્તંભ'}
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Effective child and adolescent care never relies on a single isolated intervention. Long-term success is built upon family empowerment, behavioral skill training, school partnerships, and cautious medical stewardship.'
                    : currentLang === 'hi'
                    ? 'बच्चों का इलाज कभी किसी एक तरीके पर निर्भर नहीं होता; यह परिवार के सहयोग, व्यवहार सुधार, स्कूल में सहायता और आवश्यकतानुसार डॉक्टरी सलाह का संगम है।'
                    : 'બાળ સારવાર માત્ર એક પદ્ધતિ પર નિર્ભર નથી; પરિવાર, શાળા અને ડૉક્ટરના સંયુક્ત પ્રયાસોથી પરિણામ મળે છે.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pillar 1: Parent Training */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-bold">1</span>
                    <span>{currentLang === 'en' ? 'Parent Guidance & Behavioral Training' : currentLang === 'hi' ? 'अभिभावक प्रशिक्षण व व्यवहार सुधार' : 'વાલી માર્ગદર્શન અને તાલીમ'}</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.parentTrainingAndBehavioral[currentLang]}
                  </p>
                </div>

                {/* Pillar 2: Psychotherapy */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-bold">2</span>
                    <span>{currentLang === 'en' ? 'Child Psychotherapy & Skills Training' : currentLang === 'hi' ? 'बाल साइकोथेरेपी व कौशल विकास' : 'બાળ સાયકોથેરાપી'}</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.psychotherapy[currentLang]}
                  </p>
                </div>

                {/* Pillar 3: School Support */}
                <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs uppercase tracking-wider">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[11px] font-bold">3</span>
                    <span>{currentLang === 'en' ? 'School Accommodations & Academic Rights' : currentLang === 'hi' ? 'स्कूल में छूट व शैक्षणिक अधिकार' : 'શાળા સહાય અને અધિકારો'}</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {topic.treatmentApproach.schoolSupportAndAccommodations[currentLang]}
                  </p>
                </div>
              </div>

              {/* Institutional Rights in India */}
              <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                  {currentLang === 'en' ? 'Indian Educational Rights & Concessions (RPwD Act 2016)' : currentLang === 'hi' ? 'भारतीय दिव्यांगता अधिकार (RPwD Act 2016)' : 'ભારતીય શિક્ષણ અધિકારો'}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Under the Rights of Persons with Disabilities (RPwD) Act 2016 and CBSE/State Board examination guidelines, children with certified conditions like Autism Spectrum Disorder, Specific Learning Disabilities (Dyslexia), and Intellectual Disabilities are legally entitled to accommodations including extra examination time (20 minutes per hour), scribes/readers, calculators for dyscalculia, exemption from 2nd/3rd languages, and modified question papers.'
                    : currentLang === 'hi'
                    ? 'दिव्यांगजन अधिकार अधिनियम 2016 (RPwD Act) और सीबीएसई बोर्ड के नियमों के तहत ऑटिज्म, डिस्लेक्सिया (सीखने की अक्षमता) वाले छात्रों को बोर्ड परीक्षाओं में अतिरिक्त समय (20 मिनट प्रति घंटा), लेखक (स्क्राइब), कैलकुलेटर, और द्वितीय भाषा से छूट जैसी कानूनी सुविधाएं प्राप्त हैं।'
                    : 'RPwD એકટ 2016 અને બોર્ડના નિયમો હેઠળ ઓટિઝમ કે ડિસ્લેક્સિયા ધરાવતા બાળકોને પરીક્ષામાં વધારાનો સમય (પ્રતિ કલાકે ૨૦ મિનિટ), રાઇટર અને ભાષામાંથી મુક્તિ જેવી સુવિધાઓ મળવાપાત્ર છે.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: PARENT GUIDANCE & VIGNETTES */}
          {activeTab === 'guidance' && (
            <div className="space-y-6">
              {/* Practical Guidance for Parents */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#1c2430] flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-700" />
                  <span>
                    {currentLang === 'en' ? 'Evidence-Based Strategies for Parents & Caregivers' : currentLang === 'hi' ? 'माता-पिता के लिए व्यावहारिक एवं प्रमाणिक रणनीतियां' : 'વાલીઓ માટે વ્યવહારુ માર્ગદર્શન'}
                  </span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {topic.parentCaregiverGuidance.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg border border-stone-200 bg-white space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-800 text-[10px] flex items-center justify-center font-bold">{idx + 1}</span>
                        <span>{currentLang === 'en' ? 'Practical Step' : currentLang === 'hi' ? 'व्यावहारिक कदम' : 'મહત્વનું પગલું'}</span>
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
                  {currentLang === 'en' ? 'Clinical Vignettes & Recovery Journeys' : currentLang === 'hi' ? 'केस स्टडी एवं सुधार की यात्राएं' : 'ઉદાહરણો અને સુધારાની વાર્તાઓ'}
                </h3>
                <div className="space-y-3">
                  {topic.illustrativeExamples.map((ex, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-stone-200 bg-stone-50/80 space-y-2">
                      <div className="text-xs font-semibold text-emerald-900 uppercase tracking-wider">
                        {currentLang === 'en' ? `Observational Case ${idx + 1}` : currentLang === 'hi' ? `केस स्टडी ${idx + 1}` : `ઉદાહરણ ${idx + 1}`}
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
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    <span>
                      {currentLang === 'en' ? 'Clinical Prevalence & Research Highlights' : currentLang === 'hi' ? 'शोध, आंकड़े एवं प्रमाण' : 'સંશોધન અને આંકડાઓ'}
                    </span>
                  </h3>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                    EVIDENCE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {topic.evidenceHighlights.map((ev, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-emerald-200/80 bg-gradient-to-br from-white to-emerald-50/20 shadow-2xs space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-emerald-800 font-mono tracking-tight">
                          {ev.statistic}
                        </div>
                        <p className="text-xs text-stone-700 font-medium leading-relaxed">
                          {ev.context[currentLang]}
                        </p>
                      </div>
                      <div className="text-[10.5px] text-stone-500 font-medium pt-2 border-t border-emerald-100 flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-emerald-600 shrink-0" />
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
                              <span>{currentLang === 'en' ? 'Cultural Myth' : currentLang === 'hi' ? 'प्रचलित भ्रांति' : 'પ્રચલિત માન્યતા'}</span>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-stone-900 italic leading-relaxed">
                              "{mf.myth[currentLang].replace(/^Myth:\s*/i, '')}"
                            </p>
                          </div>
                          <span className="text-[10px] font-semibold text-rose-700 bg-rose-100/60 self-start px-2 py-0.5 rounded">
                            {currentLang === 'en' ? 'Medical Misconception' : currentLang === 'hi' ? 'चिकित्सीय रूप से गलत' : 'તબીબી રીતે અસત્ય'}
                          </span>
                        </div>

                        {/* Fact */}
                        <div className="p-4 bg-emerald-50/40 space-y-2 flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{currentLang === 'en' ? 'Pediatric Fact' : currentLang === 'hi' ? 'वैज्ञानिक बाल-चिकित्सीय तथ्य' : 'તબીબી હકીકત'}</span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                              {mf.fact[currentLang].replace(/^Fact:\s*/i, '')}
                            </p>
                          </div>
                          <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100/70 self-start px-2 py-0.5 rounded">
                            {currentLang === 'en' ? 'Evidence-Based' : currentLang === 'hi' ? 'प्रमाणित तथ्य' : 'પુરાવા આધારિત'}
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
                  <ul className="space-y-1 text-stone-500">
                    {topic.references.map((ref, idx) => (
                      <li key={idx}>
                        • {ref.title} — <span className="italic">{ref.source}</span> ({ref.year})
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
