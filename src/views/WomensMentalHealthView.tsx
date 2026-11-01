import React, { useState, useEffect, useMemo } from 'react';
import { Shield, BookOpen, AlertCircle, ArrowRight, Search, Phone, Heart, CheckCircle2, UserCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { Language, WomensMentalHealthTopic } from '../types';
import { womensMentalHealthTopics } from '../data/womensMentalHealth';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { WomensMentalHealthIllustration } from '../components/visuals';

interface WomensMentalHealthViewProps {
  currentLang: Language;
  onSelectTopic: (topic: WomensMentalHealthTopic) => void;
  onOpenCrisis: () => void;
}

export const WomensMentalHealthView: React.FC<WomensMentalHealthViewProps> = ({
  currentLang,
  onSelectTopic,
  onOpenCrisis,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'reproductive' | 'perinatal' | 'social-roles'>('all');
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en'
        ? "Women's Mental Health | Reproductive & Life Course Psychiatry Guide"
        : currentLang === 'hi'
        ? 'महिला मानसिक स्वास्थ्य | प्रजनन एवं जीवन-चक्र मनोरोग मार्गदर्शिका'
        : 'મહિલા માનસિક સ્વાસ્થ્ય | સ્ત્રી આરોગ્ય માર્ગદર્શન',
      description: currentLang === 'en'
        ? "Evidence-based psychiatry guide dedicated to women's mental health across the life course: PMDD, antenatal anxiety, postpartum psychosis, perimenopause, PCOS, infertility, and caregiver stress."
        : currentLang === 'hi'
        ? 'महिलाओं के मानसिक स्वास्थ्य पर आधारित वैज्ञानिक मार्गदर्शिका: पीएमडीडी, प्रसवपूर्व एवं प्रसवोत्तर अवसाद, पेरिमेनोपॉज, पीसीओएस, बांझपन और देखभाल का तनाव।'
        : 'સ્ત્રીઓના માનસિક સ્વાસ્થ્ય અંગે વિગતવાર માર્ગદર્શન: પીએમડીડી, ડિપ્રેશન, મેનોપોઝ, પીસીઓએસ અને પારિવારિક સંભાળનો થાક.',
      path: 'womens-mental-health',
      lang: currentLang,
    });
  }, [currentLang]);

  // Topic classification filter
  const filteredTopics = useMemo(() => {
    return womensMentalHealthTopics.filter((topic) => {
      const name = topic.name[currentLang].toLowerCase();
      const med = topic.medicalTerms[currentLang].toLowerCase();
      const tagline = topic.tagline[currentLang].toLowerCase();
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch = !query || name.includes(query) || med.includes(query) || tagline.includes(query);
      if (!matchesSearch) return false;

      if (selectedCategory === 'all') return true;
      return topic.category === selectedCategory;
    });
  }, [currentLang, searchQuery, selectedCategory]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-800 bg-rose-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? "Women's Mental Health" : currentLang === 'hi' ? 'महिला मानसिक स्वास्थ्य' : 'મહિલા માનસિક સ્વાસ્થ્ય'}
          </span>
          <span className="text-xs text-stone-500 font-medium">
            {currentLang === 'en' ? 'Reproductive & Life Course Psychiatry' : currentLang === 'hi' ? 'प्रजनन एवं जीवन-चक्र मनोरोग विज्ञान' : 'પ્રજનન અને જીવન-ચક્ર મનોચિકિત્સા'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {currentLang === 'en'
            ? "Women's Mental Health Across the Life Course"
            : currentLang === 'hi'
            ? 'महिलाओं का मानसिक स्वास्थ्य: जीवन-चक्र मार्गदर्शिका'
            : 'મહિલાઓનું માનસિક સ્વાસ્થ્ય: સમગ્ર જીવન-ચક્ર માર્ગદર્શન'}
        </h1>

        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Dedicated clinical education addressing neuroendocrine transitions, reproductive milestones, maternal wellbeing, and sociocultural determinants of mental health unique to women—from adolescence to post-menopause.'
            : currentLang === 'hi'
            ? 'महिलाओं के जीवन के विभिन्न पड़ावों—किशोरावस्था, मातृत्व, हॉर्मोनल बदलाव, पेरिमेनोपॉज और सामाजिक भूमिकाओं से जुड़े मानसिक स्वास्थ्य पर आधारित वैज्ञानिक एवं संवेदनशील मार्गदर्शिका।'
            : 'સ્ત્રીઓના જીવનના તમામ તબક્કાઓ—કિશોરાવસ્થા, ગર્ભાવસ્થા, હાર્મોનલ ફેરફારો, મેનોપોઝ અને સામાજિક જવાબદારીઓ સંબંધિત માનસિક સ્વાસ્થ્યનું અધિકૃત માર્ગદર્શન.'}
        </p>
      </div>

      {/* Visual Header Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-rose-200/70 shadow-xs bg-white">
        <WomensMentalHealthIllustration className="w-full h-36 sm:h-44" />
      </div>

      {/* AUDIENCE FRAMING & CLINICAL COMPASS BANNER */}
      <div className="p-5 sm:p-6 bg-rose-50/70 border border-rose-200 rounded-xl space-y-3">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-rose-800 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h2 className="font-semibold text-sm sm:text-base text-rose-950">
              {currentLang === 'en'
                ? "Clinical Scope: Complementing General Psychiatry with Women's Biological & Social Realities"
                : currentLang === 'hi'
                ? 'महत्वपूर्ण उद्देश्य: सामान्य मनोरोग के साथ महिलाओं की जैविक एवं सामाजिक वास्तविकताओं की समझ'
                : 'મુખ્ય ઉદ્દેશ્ય: સ્ત્રીઓની શારીરિક, જૈવિક અને સામાજિક વાસ્તવિકતાઓને સમજવી'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-3xl">
              {currentLang === 'en'
                ? "Women's mental health topics are deeply intertwined with fluctuating neurosteroids (estrogen, progesterone, allopregnanolone), reproductive events, and patriarchal sociocultural pressures. This section complements the general Conditions portal by focusing specifically on conditions where female biology, reproductive transitions, or gendered social expectations demand specialized diagnostic precision and compassionate clinical care. It is written to educate patients, families, and primary physicians—not for self-diagnosis."
                : currentLang === 'hi'
                ? 'महिलाओं का मानसिक स्वास्थ्य शरीर के हॉर्मोनल उतार-चढ़ाव (एस्ट्रोजन, प्रोजेस्टेरोन), गर्भावस्था, मातृत्व और समाज के दोहरे मापदंडों से सीधे जुड़ा होता है। यह अनुभाग सामान्य मानसिक रोगों (जैसे डिप्रेशन और एंग्जायटी) के अलावा उन विशिष्ट स्थितियों पर केंद्रित है जहां महिला शरीर और जीवन-चक्र को विशेष वैज्ञानिक समझ और सम्मान की आवश्यकता होती है। यह मरीजों, परिवारों और डॉक्टरों की समझ बढ़ाने के लिए है।'
                : 'સ્ત્રીઓનું માનસિક સ્વાસ્થ્ય હાર્મોન્સના ફેરફારો, માતૃત્વ અને સામાજિક પરિસ્થિતિઓ સાથે ગાઢ રીતે જોડાયેલું છે. આ વિભાગ સામાન્ય પરિસ્થિતિઓ ઉપરાંત સ્ત્રીઓના વિશિષ્ટ પ્રશ્નો પર વૈજ્ઞાનિક અને તબીબી પ્રકાશ પાડે છે જેથી દર્દી અને પરિવારો સાચો સહકાર આપી શકે.'}
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-rose-200/70 flex flex-wrap items-center justify-between gap-3 text-xs text-rose-950">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-700 shrink-0" />
            <span>
              {currentLang === 'en'
                ? 'Aligned with Indian Psychiatric Society & ACOG Guidelines'
                : currentLang === 'hi'
                ? 'इंडियन साइकियाट्रिक सोसाइटी एवं अंतरराष्ट्रीय मानकों पर आधारित'
                : 'ઇન્ડિયન સાયકિયાટ્રિક સોસાયટીના ધોરણો મુજબ'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-rose-700 shrink-0" />
            <span>
              {currentLang === 'en'
                ? 'Peer-reviewed reproductive psychiatry information'
                : currentLang === 'hi'
                ? 'मनोरोग विशेषज्ञों द्वारा समीक्षित'
                : 'તબીબી નિષ્ણાતો દ્વારા પ્રમાણિત'}
            </span>
          </div>
        </div>
      </div>

      {/* NATIONAL WOMEN'S CRISIS & DOMESTIC SAFETY HELPLINES */}
      <div className="p-5 sm:p-6 bg-[#fff1f2] border border-[#fecdd3] rounded-xl flex flex-col md:flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#9f1239] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-semibold text-sm sm:text-base text-[#9f1239]">
              {currentLang === 'en'
                ? "Immediate Helplines for Women: Emotional Crisis, Safety & Protection"
                : currentLang === 'hi'
                ? 'महिलाओं के लिए आपातकालीन एवं संकटकालीन सुरक्षा हेल्पलाइन'
                : 'મહિલાઓ માટે તાત્કાલિક સુરક્ષા અને હેલ્પલાઇન નંબરો'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl">
              {currentLang === 'en'
                ? 'Free, 24/7 confidential assistance for mental health crises, distress, and domestic violence. If you are concerned about privacy or device tracking, please remember to use private browsing or clear your browsing history.'
                : currentLang === 'hi'
                ? 'मानसिक तनाव, गंभीर संकट या घरेलू हिंसा की स्थिति में 24 घंटे निःशुल्क और पूरी तरह गोपनीय सहायता उपलब्ध है। यदि आपको फोन की प्राइवेसी को लेकर चिंता हो, तो प्राइवेट ब्राउजिंग का उपयोग करें या हिस्ट्री डिलीट करें।'
                : 'માનસિક તણાવ કે ઘરેલું હિંસા સામે ૨૪ કલાક મફત અને ગુપ્ત મદદ ઉપલબ્ધ છે. જો ફોનની પ્રાઇવસીની ચિંતા હોય, તો પ્રાઇવેટ બ્રાઉઝિંગ વાપરો અથવા હિસ્ટ્રી સાફ કરો.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                Women Helpline: 181 (24x7 Free)
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                NCW Helpline: 7827170170
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                Tele-MANAS: 14416 (Mental Health)
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-rose-200 text-rose-900">
                Police / Emergency: 112
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:181"
            className="px-4 py-2.5 rounded-md bg-[#9f1239] hover:bg-[#881337] text-white font-semibold text-xs transition flex items-center gap-1.5 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 181 (Women Helpline)</span>
          </a>
          <button
            onClick={onOpenCrisis}
            className="px-3.5 py-2.5 rounded-md bg-white border border-rose-300 text-rose-900 font-semibold text-xs hover:bg-rose-50 transition min-h-[44px]"
          >
            {currentLang === 'en' ? 'All Helplines' : currentLang === 'hi' ? 'सभी हेल्पलाइन' : 'તમામ હેલ્પલાઇન'}
          </button>
        </div>
      </div>

      {/* SEARCH AND CATEGORY FILTER BAR */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                currentLang === 'en'
                  ? 'Search PMDD, antenatal, menopause, PCOS, caregiver...'
                  : currentLang === 'hi'
                  ? 'पीएमडीडी, मेनोपॉज, पीसीओएस, प्रसवोत्तर या तनाव खोजें...'
                  : 'પીએમડીડી, મેનોપોઝ, પીસીઓએસ કે અન્ય વિષય શોધો...'
              }
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#0f766e] transition min-h-[44px]"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'all'
                  ? 'bg-[#0f766e] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'All 10 Topics' : currentLang === 'hi' ? 'सभी 10 विषय' : 'તમામ ૧૦ વિષયો'}
            </button>
            <button
              onClick={() => setSelectedCategory('reproductive')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'reproductive'
                  ? 'bg-[#0f766e] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Reproductive & Hormonal' : currentLang === 'hi' ? 'प्रजनन एवं हॉर्मोनल' : 'પ્રજનન અને હાર્મોનલ'}
            </button>
            <button
              onClick={() => setSelectedCategory('perinatal')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'perinatal'
                  ? 'bg-[#0f766e] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Perinatal & Maternal' : currentLang === 'hi' ? 'मातृत्व एवं प्रसव' : 'માતૃત્વ અને પ્રસુતિ'}
            </button>
            <button
              onClick={() => setSelectedCategory('social-roles')}
              className={`px-3 py-2 rounded-lg transition cursor-pointer whitespace-nowrap min-h-[40px] ${
                selectedCategory === 'social-roles'
                  ? 'bg-[#0f766e] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {currentLang === 'en' ? 'Sociocultural & Life Course' : currentLang === 'hi' ? 'सामाजिक एवं जीवन-चक्र' : 'સામાજિક અને જીવન-ચક્ર'}
            </button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-stone-500 font-medium">
          {currentLang === 'en'
            ? `Showing ${filteredTopics.length} clinical guidance topics`
            : currentLang === 'hi'
            ? `${filteredTopics.length} मार्गदर्शिका विषय प्रदर्शित`
            : `${filteredTopics.length} વિષયો દર્શાવેલ`}
        </div>
      </div>

      {/* TOPICS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTopics.map((topic, index) => {
          const isSpotlight = index === 0;

          if (isSpotlight) {
            return (
              <div
                key={topic.id}
                onClick={() => onSelectTopic(topic)}
                className="col-span-1 md:col-span-2 p-6 sm:p-7 rounded-2xl border-2 border-rose-600/30 bg-gradient-to-br from-white via-rose-50/25 to-stone-50/70 hover:border-rose-700 transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                    <div className="space-y-2.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-800 text-white shadow-2xs">
                          <Sparkles className="w-3 h-3 text-rose-200" />
                          <span>
                            {currentLang === 'en'
                              ? "Featured Women's Health Guide"
                              : currentLang === 'hi'
                              ? 'विशिष्ट महिला स्वास्थ्य मार्गदर्शिका'
                              : 'મુખ્ય મહિલા સ્વાસ્થ્ય માર્ગદર્શન'}
                          </span>
                        </span>
                        <span className="font-semibold uppercase tracking-wider text-rose-800 text-[11px] bg-rose-100/70 px-2 py-0.5 rounded">
                          {topic.category === 'reproductive'
                            ? currentLang === 'en' ? 'HORMONAL & REPRODUCTIVE' : currentLang === 'hi' ? 'हॉर्मोनल व प्रजनन' : 'હાર્મોનલ અને પ્રજનન'
                            : topic.category === 'perinatal'
                            ? currentLang === 'en' ? 'PERINATAL & MATERNAL' : currentLang === 'hi' ? 'मातृत्व एवं प्रसव' : 'માતૃત્વ અને પ્રસુતિ'
                            : currentLang === 'en' ? 'SOCIOCULTURAL & ROLES' : currentLang === 'hi' ? 'सामाजिक व जीवन भूमिकाएं' : 'સામાજિક અને પારિવારિક'}
                        </span>
                        <span className="font-mono text-xs text-stone-500">
                          {topic.medicalTerms[currentLang]}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-[#1c2430] group-hover:text-rose-900 transition-colors">
                        {topic.name[currentLang]}
                      </h2>

                      <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
                        {topic.tagline[currentLang]}
                      </p>

                      {/* Surfaced Research / Evidence Highlight */}
                      {topic.evidenceHighlights && topic.evidenceHighlights[0] && (
                        <div className="mt-3 p-3.5 rounded-xl bg-rose-50/80 border border-rose-200/80 text-xs text-rose-950 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                          <div className="px-2.5 py-1 bg-white rounded-lg border border-rose-200 font-mono font-bold text-rose-900 text-sm shrink-0 shadow-2xs">
                            {topic.evidenceHighlights[0].statistic}
                          </div>
                          <div className="space-y-0.5 flex-1">
                            <span className="font-semibold text-rose-950 block">
                              {topic.evidenceHighlights[0].context[currentLang]}
                            </span>
                            <span className="text-[10.5px] text-stone-500 block">
                              Source: {topic.evidenceHighlights[0].source}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Spotlight Visual Accent Banner */}
                    <div className="w-full sm:w-64 md:w-72 h-36 sm:h-40 shrink-0 rounded-xl overflow-hidden border border-rose-200/80 bg-white shadow-2xs self-center lg:self-start">
                      <WomensMentalHealthIllustration className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Typical Variation vs Clinical Concern Comparative Layout */}
                  {topic.typicalVariationVsClinicalConcern[0] && (
                    <div className="mt-2 pt-3 border-t border-rose-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded-xl border border-emerald-100 shadow-2xs space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>
                            {currentLang === 'en' ? 'Normal / Typical Transition:' : currentLang === 'hi' ? 'सामान्य शारीरिक/भावनात्मक उतार-चढ़ाव:' : 'સામાન્ય ઉતાર-ચઢાવ:'}
                          </span>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {topic.typicalVariationVsClinicalConcern[0].typicalVariation[currentLang]}
                        </p>
                      </div>

                      <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-200/80 shadow-2xs space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-950">
                          <span className="w-2 h-2 rounded-full bg-rose-600" />
                          <span>
                            {currentLang === 'en' ? 'Clinical Red Flag / Seek Support:' : currentLang === 'hi' ? 'चिकित्सकीय चिंता (विशेषज्ञ परामर्श आवश्यक):' : 'તબીબી ચિંતા:'}
                          </span>
                        </div>
                        <p className="text-xs text-stone-700 font-medium leading-relaxed">
                          {topic.typicalVariationVsClinicalConcern[0].clinicalConcern[currentLang]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-200/80 flex items-center justify-between text-xs font-bold text-rose-800 group-hover:text-rose-950 min-h-[44px]">
                  <span>
                    {currentLang === 'en'
                      ? 'Open Complete Educational & Clinical Guide'
                      : currentLang === 'hi'
                      ? 'संपूर्ण शैक्षणिक एवं क्लिनिकल मार्गदर्शिका पढ़ें'
                      : 'સંપૂર્ણ શૈક્ષણિક અને ક્લિનિકલ માર્ગદર્શિકા વાંચો'}
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          }

          return (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#0f766e] transition cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-sm group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-semibold uppercase tracking-wider text-rose-800 text-[11px] bg-rose-50 px-2 py-0.5 rounded">
                    {topic.category === 'reproductive'
                      ? currentLang === 'en' ? 'HORMONAL & REPRODUCTIVE' : currentLang === 'hi' ? 'हॉर्मोनल व प्रजनन' : 'હાર્મોનલ અને પ્રજનન'
                      : topic.category === 'perinatal'
                      ? currentLang === 'en' ? 'PERINATAL & MATERNAL' : currentLang === 'hi' ? 'मातृत्व एवं प्रसव' : 'માતૃત્વ અને પ્રસુતિ'
                      : currentLang === 'en' ? 'SOCIOCULTURAL & ROLES' : currentLang === 'hi' ? 'सामाजिक व जीवन भूमिकाएं' : 'સામાજિક અને પારિવારિક'}
                  </span>
                  <span className="font-mono text-[11px] text-stone-400 truncate max-w-[200px]">
                    {topic.medicalTerms[currentLang]}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430] group-hover:text-[#0f766e] transition-colors">
                  {topic.name[currentLang]}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {topic.tagline[currentLang]}
                </p>

                {/* Typical vs Clinical Concern Snapshot */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-700">
                  <div>
                    <strong className="text-emerald-900 font-semibold">
                      {currentLang === 'en' ? 'Typical / Expected:' : currentLang === 'hi' ? 'सामान्य उतार-चढ़ाव:' : 'સામાન્ય:'}
                    </strong>{' '}
                    <span className="text-stone-600">
                      {topic.typicalVariationVsClinicalConcern[0]?.typicalVariation[currentLang].slice(0, 95)}...
                    </span>
                  </div>
                  <div>
                    <strong className="text-rose-900 font-semibold">
                      {currentLang === 'en' ? 'Clinical Concern:' : currentLang === 'hi' ? 'चिकित्सकीय चिंता:' : 'તબીબી ચિંતા:'}
                    </strong>{' '}
                    <span className="text-stone-700 font-medium">
                      {topic.typicalVariationVsClinicalConcern[0]?.clinicalConcern[currentLang].slice(0, 95)}...
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0f766e] min-h-[44px]">
                <span>
                  {currentLang === 'en'
                    ? 'Open Educational & Clinical Guide'
                    : currentLang === 'hi'
                    ? 'संपूर्ण मार्गदर्शिका पढ़ें'
                    : 'સંપૂર્ણ માર્ગદર્શિકા વાંચો'}
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredTopics.length === 0 && (
        <div className="p-8 text-center bg-white rounded-xl border border-stone-200 space-y-2">
          <p className="text-sm text-stone-600">
            {currentLang === 'en'
              ? "No women's mental health topics matched your search query."
              : currentLang === 'hi'
              ? 'आपकी खोज के लिए कोई विषय नहीं मिला।'
              : 'તમારી શોધ માટે કોઈ વિષય મળ્યો નથી.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs font-semibold text-rose-800 hover:underline min-h-[44px] inline-flex items-center"
          >
            {currentLang === 'en' ? 'Clear filter and view all topics' : currentLang === 'hi' ? 'फ़िल्टर हटाएं और सभी विषय देखें' : 'ફિલ્ટર હટાવી બધા વિષયો જુઓ'}
          </button>
        </div>
      )}
    </div>
  );
};
