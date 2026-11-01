import React, { useState, useMemo } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Scale, Brain, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { faqsData, FAQCategoryItem } from '../data/faqs';
import { PageFeedback } from '../components/PageFeedback';
import { CategoryIllustration } from '../components/visuals/CategoryIllustrations';
import { mapFAQToCategory } from '../utils/illustrationMapping';

interface FAQViewProps {
  currentLang: Language;
}

export const FAQView: React.FC<FAQViewProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | FAQCategoryItem['category']>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'psychiatrist-vs-psychologist': true, // Keep first open by default
  });

  const categories = [
    { id: 'all', label: { en: 'All Questions', hi: 'सभी प्रश्न', gu: 'બધા પ્રશ્નો' } },
    { id: 'general', label: { en: 'General Psychiatry', hi: 'सामान्य मनोरोग', gu: 'સામાન્ય મનોરોગ' }, icon: Brain },
    { id: 'addiction', label: { en: 'Addiction & Recovery', hi: 'नशा व सुधार', gu: 'વ્યસન અને સુધારો' }, icon: ShieldCheck },
    { id: 'therapy', label: { en: 'Therapy & Privacy', hi: 'थेरेपी व गोपनीयता', gu: 'થેરાપી અને ગોપનીયતા' }, icon: HeartHandshake },
    { id: 'legal', label: { en: 'Rights & Law in India', hi: 'अधिकार व कानून', gu: 'અધિકાર અને કાયદો' }, icon: Scale },
  ] as const;

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return faqsData.filter((item) => {
      if ((item.category as string) === 'medications') return false;
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchCat) return false;
      if (!q) return true;

      const qText = `${item.question.en} ${item.question.hi} ${item.question.gu} ${item.answer.en} ${item.answer.hi} ${item.answer.gu}`.toLowerCase();
      return qText.includes(q);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2.5 text-[#115e59] mb-2">
          <HelpCircle className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {currentLang === 'en' ? 'Frequently Asked Questions' : currentLang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'વારંવાર પૂછાતા પ્રશ્નો'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1c2430] tracking-tight">
          {currentLang === 'en'
            ? 'Answers to Common Concerns About Mental Healthcare'
            : currentLang === 'hi'
            ? 'मानसिक स्वास्थ्य और उपचार से जुड़े प्रमुख सवालों के जवाब'
            : 'માનસિક સ્વાસ્થ્ય અને સારવાર સંબંધિત સામાન્ય પ્રશ્નોના જવાબો'}
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          {currentLang === 'en'
            ? 'Clear, honest, evidence-based answers explaining psychiatric consultations, medications, patient rights under Indian law, and psychotherapy.'
            : currentLang === 'hi'
            ? 'मनोचिकित्सा, दवाओं की सुरक्षा, भारत में मरीजों के कानूनी अधिकार और थेरेपी से जुड़ी स्पष्ट एवं प्रमाण-आधारित जानकारी।'
            : 'મનોચિકિત્સા, દવાઓની સુરક્ષા, ભારતીય કાયદા હેઠળ દર્દીના અધિકારો અને સાયકોથેરાપી વિશે તથ્યપૂર્ણ માહિતી.'}
        </p>

        {/* Search bar inside FAQ */}
        <div className="mt-5 relative max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currentLang === 'en'
                ? 'Search questions (e.g. addiction, CBT, rights)...'
                : currentLang === 'hi'
                ? 'सवाल खोजें (जैसे दवाएं, अधिकार, थेरेपी)...'
                : 'પ્રશ્નો શોધો (જેમ કે દવાઓ, અધિકારો, થેરાપી)...'
            }
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-stone-300 bg-white text-sm text-[#1c2430] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#115e59]/30 focus:border-[#115e59] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 pb-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition cursor-pointer min-h-[36px] flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#115e59] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat.label[currentLang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQs List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center bg-stone-50 rounded-xl border border-stone-200 p-6">
            <p className="text-stone-700 font-semibold text-sm">
              {currentLang === 'en' ? 'No matching questions found.' : currentLang === 'hi' ? 'कोई सवाल नहीं मिला।' : 'કોઈ મેળ ખાતા પ્રશ્નો મળ્યા નથી.'}
            </p>
            <p className="text-xs text-stone-500 mt-1">
              {currentLang === 'en' ? 'Try searching with different keywords or selecting "All Questions".' : currentLang === 'hi' ? 'अन्य शब्द खोजें या "सभी प्रश्न" चुनें।' : 'બીજા શબ્દો વડે શોધો અથવા "બધા પ્રશ્નો" પસંદ કરો.'}
            </p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-stone-50 transition cursor-pointer min-h-[52px]"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1c2430] leading-snug">
                    {faq.question[currentLang]}
                  </span>
                  <span className="shrink-0 text-stone-400 mt-0.5">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#115e59]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-100 pt-3 bg-[#f6f8f7]/50">
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <div className="flex-1">
                        <p>{faq.answer[currentLang]}</p>
                      </div>
                      <div className="w-full sm:w-36 h-20 sm:h-24 rounded-lg overflow-hidden border border-stone-200/80 shrink-0 bg-white">
                        <CategoryIllustration
                          category={mapFAQToCategory(faq)}
                          className="w-full h-full object-cover"
                          ariaLabel={faq.category}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Helpful notice */}
      <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 leading-relaxed">
        <p className="font-semibold mb-1">
          {currentLang === 'en' ? 'Have a question not listed here?' : currentLang === 'hi' ? 'क्या आपका कोई सवाल यहाँ शामिल नहीं है?' : 'શું તમારો કોઈ પ્રશ્ન અહીં નથી?'}
        </p>
        <p>
          {currentLang === 'en'
            ? 'Bring your written questions to your psychiatric consultation. Open communication between you and your healthcare professional is the cornerstone of safe, personalized recovery.'
            : currentLang === 'hi'
            ? 'अपने सवालों को एक पर्ची पर लिखकर अपने डॉक्टर के पास ले जाएं। डॉक्टर से खुलकर चर्चा करना ही सुरक्षित और सफल उपचार की कुंजी है।'
            : 'તમારા પ્રશ્નો કાગળ પર નોંધીને ડૉક્ટર સાથે ખુલ્લા મને ચર્ચા કરો. વિશ્વાસપૂર્વકની વાતચીત એ જ સાજા થવાનો મુખ્ય માર્ગ છે.'}
        </p>
      </div>

      {/* Page Feedback */}
      <PageFeedback pageId="faqs" currentLang={currentLang} />
    </div>
  );
};
