import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ExternalLink, Filter, Sparkles, HelpCircle } from 'lucide-react';
import { Language, ActiveTab } from '../types';
import { glossaryData } from '../data/glossary';
import { PageFeedback } from '../components/PageFeedback';
import { CategoryIllustration } from '../components/visuals/CategoryIllustrations';
import { mapGlossaryToCategory } from '../utils/illustrationMapping';

interface GlossaryViewProps {
  currentLang: Language;
  onNavigateTab: (tab: ActiveTab) => void;
  onSelectCondition?: (id: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  currentLang,
  onNavigateTab,
  onSelectCondition,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const alphabet = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredTerms = useMemo(() => {
    return glossaryData.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.term.en.toLowerCase().includes(q) ||
        item.term.hi.toLowerCase().includes(q) ||
        item.term.gu.toLowerCase().includes(q) ||
        item.definition[currentLang].toLowerCase().includes(q) ||
        (item.pronunciationOrAlt && item.pronunciationOrAlt[currentLang]?.toLowerCase().includes(q));

      const firstChar = item.term.en.trim().charAt(0).toUpperCase();
      const matchesLetter = selectedLetter === 'ALL' || firstChar === selectedLetter;

      const matchesCat =
        selectedCategory === 'all' || item.relatedType === selectedCategory;

      return matchesSearch && matchesLetter && matchesCat;
    });
  }, [searchQuery, selectedLetter, selectedCategory, currentLang]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2.5 text-[#115e59] mb-2">
          <BookOpen className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {currentLang === 'en'
              ? 'Psychiatric Terminology & Vocabulary'
              : currentLang === 'hi'
              ? 'मनोरोग शब्दावली व परिभाषाएं'
              : 'મનોચિકિત્સા પારિભાષિક શબ્દકોશ'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1c2430] tracking-tight">
          {currentLang === 'en'
            ? 'A–Z Mental Health & Psychiatry Glossary'
            : currentLang === 'hi'
            ? 'मानसिक स्वास्थ्य और मनोरोग शब्दावली (A से Z)'
            : 'માનસિક સ્વાસ્થ્ય અને મનોચિકિત્સા શબ્દાવલિ'}
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          {currentLang === 'en'
            ? 'Medical and psychiatric jargon translated into clear, empathetic, trilingual language. Every term includes its clinical meaning, everyday context, and related topics.'
            : currentLang === 'hi'
            ? 'कठिन चिकित्सीय और मनोरोग शब्दों का सरल, संवेदनशील और स्पष्ट विवरण। हर शब्द के साथ उसका नैदानिक संदर्भ और संबंधित विषय दिए गए हैं।'
            : 'તબીબી અને માનસિક પરિભાષાઓની સરળ, સ્નેહપૂર્ણ અને ત્રિભાષી સમજૂતી.'}
        </p>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              currentLang === 'en'
                ? 'Search terms, symptoms, clinical definitions...'
                : currentLang === 'hi'
                ? 'शब्द, लक्षण या परिभाषा खोजें...'
                : 'શબ્દ, લક્ષણો કે વ્યાખ્યા શોધો...'
            }
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#115e59] transition"
          />
        </div>

        <div className="flex items-center gap-1.5 shrink-0 bg-stone-50 border border-stone-200 p-1 rounded-lg">
          <Filter className="w-4 h-4 text-stone-500 ml-2 mr-1" />
          {[
            { id: 'all', label: currentLang === 'en' ? 'All' : 'सभी' },
            { id: 'condition', label: currentLang === 'en' ? 'Conditions' : 'बीमारियां' },
            { id: 'medication', label: currentLang === 'en' ? 'Medications' : 'दवाएं' },
            { id: 'treatment', label: currentLang === 'en' ? 'Therapy' : 'चिकित्सा' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer min-h-[36px] ${
                selectedCategory === cat.id
                  ? 'bg-[#115e59] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Alphabet Quick Jump Bar */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-stone-200 scrollbar-thin">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`min-w-[32px] h-8 px-2 rounded text-xs font-bold transition cursor-pointer shrink-0 ${
              selectedLetter === letter
                ? 'bg-[#115e59] text-white'
                : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Terms Counter */}
      <div className="text-xs font-medium text-stone-500">
        {currentLang === 'en'
          ? `Showing ${filteredTerms.length} terms`
          : currentLang === 'hi'
          ? `${filteredTerms.length} शब्द प्रदर्शित`
          : `${filteredTerms.length} શબ્દો દર્શાવવામાં આવ્યા`}
      </div>

      {/* Terms Grid */}
      {filteredTerms.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-stone-200">
          <HelpCircle className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-stone-800">
            {currentLang === 'en' ? 'No matching terms found' : 'कोई शब्द नहीं मिला'}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {currentLang === 'en'
              ? 'Try adjusting your search query or selecting "ALL" letters.'
              : 'कृपया अपनी खोज को बदलें या "ALL" चुनें।'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((term) => {
            const visualCat = mapGlossaryToCategory(term);
            return (
              <div
                key={term.id}
                className="p-5 rounded-xl bg-white border border-stone-200 hover:border-stone-300 transition shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {visualCat && (
                        <div className="w-12 h-9 sm:w-14 sm:h-10 rounded-md overflow-hidden border border-stone-200/80 shrink-0 bg-stone-50 mt-0.5">
                          <CategoryIllustration
                            category={visualCat}
                            className="w-full h-full object-cover"
                            ariaLabel={term.term.en}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-[#1c2430]">
                          {term.term[currentLang]}
                        </h3>
                        {currentLang !== 'en' && (
                          <p className="text-xs text-stone-500 font-medium">
                            {term.term.en}
                          </p>
                        )}
                      </div>
                    </div>
                    {term.relatedType && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-[#115e59] border border-teal-200 shrink-0">
                        {term.relatedType}
                      </span>
                    )}
                  </div>

                {term.pronunciationOrAlt && (
                  <div className="p-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-700 italic flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span>{term.pronunciationOrAlt[currentLang]}</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {term.definition[currentLang]}
                </p>

                {term.clinicalContext && (
                  <div className="pt-2 border-t border-stone-100 text-xs text-stone-600">
                    <span className="font-semibold text-stone-800">
                      {currentLang === 'en' ? 'Clinical Context: ' : currentLang === 'hi' ? 'नैदानिक संदर्भ: ' : 'ક્લિનિકલ સંદર્ભ: '}
                    </span>
                    {term.clinicalContext[currentLang]}
                  </div>
                )}
              </div>

              {/* Related link button */}
              {term.relatedType && term.relatedId && term.relatedType !== 'medication' && (
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (term.relatedType === 'condition') {
                        if (onSelectCondition) {
                          onSelectCondition(term.relatedId!);
                        } else {
                          onNavigateTab('conditions');
                        }
                      } else if (term.relatedType === 'treatment') {
                        onNavigateTab('treatments');
                      }
                    }}
                    className="text-xs font-semibold text-[#115e59] hover:text-[#0f4f4b] flex items-center gap-1 cursor-pointer min-h-[36px]"
                  >
                    <span>
                      {currentLang === 'en'
                        ? `Explore related ${term.relatedType}`
                        : currentLang === 'hi'
                        ? `संबंधित ${term.relatedType} देखें`
                        : `સંબંધિત વિષય જુઓ`}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  {term.reviewStatus && (
                    <span className="text-[10px] text-stone-400 font-mono">
                      Reviewed: {term.reviewStatus.lastReviewed}
                    </span>
                  )}
                </div>
              )}
              </div>
            );
          })}
        </div>
      )}

      {/* Page Feedback */}
      <div className="pt-6 border-t border-stone-200">
        <PageFeedback pageId="glossary" currentLang={currentLang} />
      </div>
    </div>
  );
};
