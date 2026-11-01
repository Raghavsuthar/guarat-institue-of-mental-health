import React, { useState, useMemo, useEffect } from 'react';
import { Search, Check, ArrowRight, Sparkles, X } from 'lucide-react';
import { Language, Condition, ConditionCategory } from '../types';

type ConditionCardSummary = Pick<Condition, 'id' | 'slug' | 'category' | 'conditionIcon' | 'name' | 'medicalTerms' | 'commonSymptoms' | 'overview' | 'evidenceHighlights'> & { searchText: string };
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { CategoryIllustration, ConditionIcon } from '../components/visuals';
import { CategoryBadge } from '../components/CategoryBadge';
import { getCategoryTheme } from '../data/categoryThemes';

interface ConditionsViewProps {
  currentLang: Language;
  onSelectCondition: (item: Pick<Condition, 'slug'>) => void;
}

export const ConditionsView: React.FC<ConditionsViewProps> = ({
  currentLang,
  onSelectCondition,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [conditionCards, setConditionCards] = useState<ConditionCardSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    let cancelled = false;
    fetch('/data/conditions-index.json', { headers: { Accept: 'application/json' } })
      .then((response) => {
        if (!response.ok) throw new Error('Condition index request failed');
        return response.json() as Promise<ConditionCardSummary[]>;
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Condition index has an invalid shape');
        if (!cancelled) setConditionCards(data);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Psychiatric Conditions Educational Library' : currentLang === 'hi' ? 'मानसिक विकार शैक्षणिक लाइब्रेरी' : 'માનસિક વિકારો વિશે શૈક્ષણિક માહિતી',
      description: currentLang === 'en'
        ? 'Clinical overviews of depression, anxiety, bipolar disorder, OCD, schizophrenia, PTSD, and geriatric psychiatry in English, Hindi, and Gujarati.'
        : currentLang === 'hi'
        ? 'डिप्रेशन, एंग्जायटी, ओसीडी, सिज़ोफ्रेनिया और बाइपोलर डिसऑर्डर पर वैज्ञानिक जानकारी।'
        : 'ડિપ્રેશન, ચિંતા, બાયપોલર, ઓસીડી અને સિઝોફ્રેનિયા વિશે વિગતવાર તબીબી સમજ.',
      path: 'conditions',
      lang: currentLang,
    });
  }, [currentLang]);

  const categories = [
    { id: 'all', label: currentLang === 'en' ? 'All conditions' : currentLang === 'hi' ? 'सभी विषय' : 'બધા વિષયો' },
    { id: 'mood', label: currentLang === 'en' ? 'Mood disorders' : currentLang === 'hi' ? 'मूड विकार' : 'મૂડના વિકારો' },
    { id: 'anxiety', label: currentLang === 'en' ? 'Anxiety & panic' : currentLang === 'hi' ? 'चिंता व घबराहट' : 'ચિંતા અને ગભરાટ' },
    { id: 'ocd', label: currentLang === 'en' ? 'OCD & related' : currentLang === 'hi' ? 'OCD व संबंधित विकार' : 'OCD અને સંબંધિત વિકારો' },
    { id: 'psychotic', label: currentLang === 'en' ? 'Psychosis' : currentLang === 'hi' ? 'मनोविकृति' : 'મનોવિકૃતિ' },
    { id: 'trauma', label: currentLang === 'en' ? 'Trauma & PTSD' : currentLang === 'hi' ? 'आघात व PTSD' : 'આઘાત અને PTSD' },
    { id: 'geriatric', label: currentLang === 'en' ? 'Older adults' : currentLang === 'hi' ? 'बुजुर्गों का मानसिक स्वास्थ्य' : 'વૃદ્ધ વયના લોકો' },
    { id: 'eating', label: currentLang === 'en' ? 'Eating disorders' : currentLang === 'hi' ? 'खान-पान संबंधी विकार' : 'આહાર સંબંધિત વિકારો' },
    { id: 'neurodevelopmental', label: currentLang === 'en' ? 'Neurodevelopmental' : currentLang === 'hi' ? 'न्यूरोडेवलपमेंटल विकार' : 'ન્યુરોડેવલપમેન્ટલ વિકારો' },
    { id: 'sleep', label: currentLang === 'en' ? 'Sleep' : currentLang === 'hi' ? 'नींद संबंधी समस्याएँ' : 'ઊંઘ સંબંધિત સમસ્યાઓ' },
    { id: 'somatic', label: currentLang === 'en' ? 'Somatic symptoms' : currentLang === 'hi' ? 'शारीरिक लक्षण संबंधी विकार' : 'શારીરિક લક્ષણ સંબંધિત વિકારો' },
    { id: 'personality', label: currentLang === 'en' ? 'Personality' : currentLang === 'hi' ? 'व्यक्तित्व संबंधी विकार' : 'વ્યક્તિત્વ સંબંધિત વિકારો' },
    { id: 'perinatal', label: currentLang === 'en' ? 'Pregnancy & after birth' : currentLang === 'hi' ? 'गर्भावस्था व प्रसव के बाद' : 'ગર્ભાવસ્થા અને પ્રસૂતિ પછી' },
  ];

  const filteredConditions = useMemo(() => {
    return conditionCards.filter((c) => {
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const symptoms = Object.values(c.commonSymptoms || {}).flat().join(' ');
      const text = `${c.name.en} ${c.name.hi} ${c.name.gu} ${c.medicalTerms.en} ${c.medicalTerms.hi} ${c.medicalTerms.gu} ${c.searchText} ${symptoms}`.toLowerCase();
      return matchesCategory && text.includes(q);
    });
  }, [conditionCards, selectedCategory, searchQuery]);

  return (
    <div className="aurora-page space-y-8 pb-12">
      {/* Header section */}
      <div className="aurora-page-heading space-y-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-teal-50 text-[#0d5d56] border border-teal-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#115e59]" aria-hidden="true" />
            {currentLang === 'en' ? 'Clinical Educational Library' : currentLang === 'hi' ? 'नैदानिक शैक्षणिक लाइब्रेरी' : 'શૈક્ષણિક માર્ગદર્શિકા'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.conditions}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Evidence-based psychiatric educational guides describing symptoms, causes, neurobiology, assessment methods, and multidisciplinary treatment approaches.'
            : currentLang === 'hi'
            ? 'मानसिक विकारों के लक्षण, जैविक कारण, मनोचिकित्सकीय जांच और वैज्ञानिक उपचार पद्धतियों का विस्तृत शैक्षणिक विवरण।'
            : 'માનસિક વિકૃતિઓના લક્ષણો, જૈવિક કારણો, તબીબી તપાસ અને વૈજ્ઞાનિક સારવાર પદ્ધતિઓની વિગતવાર શૈક્ષણિક માહિતી.'}
        </p>
      </div>

      {isLoading && <p className="text-sm text-stone-600" role="status">{currentLang === 'en' ? 'Loading condition guides…' : currentLang === 'hi' ? 'विषय लोड हो रहे हैं…' : 'વિષયોની માહિતી લોડ થઈ રહી છે…'}</p>}
      {loadError && <p className="text-sm text-rose-700 rounded-xl border border-rose-200 bg-rose-50 p-4" role="alert">{currentLang === 'en' ? 'The condition library could not load. Please refresh the page to try again.' : currentLang === 'hi' ? 'विषय लाइब्रेरी लोड नहीं हो सकी। फिर से प्रयास करने के लिए पेज रीफ़्रेश करें।' : 'વિષયોની લાઇબ્રેરી લોડ થઈ શકી નથી. ફરી પ્રયાસ કરવા પેજ રિફ્રેશ કરો.'}</p>}

      {/* Dynamic Category Visual Education Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-white">
        <CategoryIllustration
          category={selectedCategory === 'all' ? 'mood' : (selectedCategory as ConditionCategory)}
          className="w-full h-36 sm:h-44"
          ariaLabel={
            currentLang === 'en'
              ? `Educational clinical illustration representing ${selectedCategory === 'all' ? 'mental health and emotional balance' : selectedCategory}`
              : currentLang === 'hi'
              ? 'मानसिक स्वास्थ्य और भावनात्मक संतुलन का शैक्षिक चित्रण'
              : 'માનસિક સ્વાસ્થ્ય અને ભાવનાત્મક સંતુલનનું શૈક્ષણિક ચિત્ર'
          }
        />
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3">
        {/* Category filter pills - accessible min 44px */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Category filters">
          {categories.map((cat) => {
            const categoryCount = cat.id === 'all'
              ? conditionCards.length
              : conditionCards.filter((condition) => condition.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={selectedCategory === cat.id}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer min-h-[44px] flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#115e59] text-white'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  aria-label={`${categoryCount} conditions`}
                  className={`inline-flex min-w-5 h-5 px-1 items-center justify-center rounded-full text-[10px] font-bold tabular-nums ${
                    selectedCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-stone-600 border border-stone-200'
                  }`}
                >
                  {categoryCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search across names, medical terms, overviews, and common symptoms in all three languages */}
        <div className="relative w-full max-w-xl">
          <label htmlFor="condition-search" className="sr-only">
            {currentLang === 'en' ? 'Search mental health conditions' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य विषय खोजें' : 'માનસિક સ્વાસ્થ્યના વિષયો શોધો'}
          </label>
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          <input
            id="condition-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLang === 'en' ? 'Search by condition, symptom, or medical term…' : currentLang === 'hi' ? 'बीमारी, लक्षण या चिकित्सा शब्द खोजें…' : 'બીમારી, લક્ષણ અથવા તબીબી શબ્દ શોધો…'}
            autoComplete="off"
            className="w-full pl-10 pr-12 py-3 rounded-xl border border-stone-300 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:border-teal-700 min-h-[48px]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label={currentLang === 'en' ? 'Clear search' : currentLang === 'hi' ? 'खोज हटाएँ' : 'શોધ સાફ કરો'}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-lg text-stone-500 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
        <p className="text-xs sm:text-sm text-stone-600" aria-live="polite" role="status">
          {currentLang === 'en'
            ? `Showing ${filteredConditions.length} of ${conditionCards.length} conditions`
            : currentLang === 'hi'
            ? `${conditionCards.length} में से ${filteredConditions.length} विषय दिखाए जा रहे हैं`
            : `${conditionCards.length} માંથી ${filteredConditions.length} વિષયો બતાવાઈ રહ્યા છે`}
        </p>
      </div>

      {/* Conditions Grid */}
      {isLoading || loadError ? null : filteredConditions.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-xl border border-stone-200 text-stone-600">
          <p className="font-semibold text-stone-800">{t.search.noResults}</p>
          <p className="text-xs mt-1">{currentLang === 'en' ? 'Try a different word, clear the search, or choose another category.' : currentLang === 'hi' ? 'कोई दूसरा शब्द खोजें, खोज हटाएँ या दूसरी श्रेणी चुनें।' : 'બીજો શબ્દ શોધો, શોધ સાફ કરો અથવા બીજી શ્રેણી પસંદ કરો.'}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredConditions.map((cond, index) => {
            const isSpotlight = index === 0;
            const theme = getCategoryTheme(cond.category);

            if (isSpotlight) {
              return (
                <div
                  key={cond.id}
                  onClick={() => onSelectCondition(cond)}
                  role="button"
                  tabIndex={0}
                  aria-label={currentLang === 'en' ? `Open guide: ${cond.name.en}` : currentLang === 'hi' ? `मार्गदर्शिका खोलें: ${cond.name.hi}` : `માર્ગદર્શિકા ખોલો: ${cond.name.gu}`}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      onSelectCondition(cond);
                    }
                  }}
                  style={{ borderTopColor: theme.hex.accent, borderTopWidth: '4px' }}
                  className="interactive-card col-span-1 md:col-span-2 p-6 sm:p-7 rounded-2xl border border-teal-200/80 bg-gradient-to-br from-white via-teal-50/20 to-stone-50/70 hover:border-teal-600 transition-all cursor-pointer shadow-xs hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                      <div className="space-y-2.5 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-800 text-white shadow-2xs">
                            <Sparkles className="w-3 h-3 text-teal-200" />
                            <span>
                              {currentLang === 'en'
                                ? 'Clinical Spotlight'
                                : currentLang === 'hi'
                                ? 'प्रमुख क्लिनिकल मार्गदर्शिका'
                                : 'મુખ્ય ક્લિનિકલ માર્ગદર્શન'}
                            </span>
                          </span>
                          <CategoryBadge category={cond.category} currentLang={currentLang} size="sm" />
                          <span className="font-mono text-xs text-stone-500">
                            {cond.medicalTerms[currentLang]}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 pt-0.5">
                          <div className="w-11 h-11 rounded-xl border border-stone-200 bg-white p-2 shrink-0 flex items-center justify-center shadow-2xs">
                            <ConditionIcon
                              conditionIcon={cond.conditionIcon}
                              conditionId={cond.id}
                              className="w-full h-full"
                              ariaLabel={cond.name[currentLang]}
                            />
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold text-[#1c2430] group-hover:text-[#0f766e] transition-colors">
                            {cond.name[currentLang]}
                          </h2>
                        </div>

                        <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
                          {cond.overview[currentLang]}
                        </p>

                        {/* Surfaced Evidence Highlight */}
                        {cond.evidenceHighlights && cond.evidenceHighlights[0] && (
                          <div className="mt-3 p-3.5 rounded-xl bg-teal-50/80 border border-teal-200/70 text-xs text-teal-950 flex items-start gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                            <div className="space-y-0.5 flex-1">
                              <span className="font-bold text-teal-900 uppercase tracking-wide text-[10.5px] block">
                                {currentLang === 'hi'
                                  ? 'वैज्ञानिक शोध प्रमाण (Evidence Highlight)'
                                  : currentLang === 'gu'
                                  ? 'મુખ્ય સંશોધન તારણ (Evidence Highlight)'
                                  : 'Evidence Highlight'}
                              </span>
                              <p className="text-stone-800 leading-relaxed font-medium">
                                {cond.evidenceHighlights[0].fact[currentLang]}
                              </p>
                              {cond.evidenceHighlights[0].citationRef && (
                                <span className="text-[10px] text-stone-500 font-mono block pt-0.5">
                                  Ref: {cond.evidenceHighlights[0].citationRef}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Larger Spotlight Category Illustration */}
                      <div className="w-full sm:w-64 md:w-72 h-40 sm:h-44 shrink-0 rounded-xl overflow-hidden border border-stone-200/90 bg-white shadow-2xs self-center lg:self-start">
                        <CategoryIllustration
                          category={cond.category}
                          className="w-full h-full object-cover"
                          ariaLabel={`Clinical illustration representing ${cond.name[currentLang]}`}
                        />
                      </div>
                    </div>

                    {/* Common Symptoms preview across 3 columns on spotlight */}
                    <div className="pt-3 border-t border-stone-100">
                      <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 block mb-2">
                        {t.conditions.symptoms}:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {(cond.commonSymptoms[currentLang] || cond.commonSymptoms.en || []).slice(0, 3).map((symp, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-stone-700 bg-stone-50/80 p-2.5 rounded-lg border border-stone-100">
                            <Check className="w-3.5 h-3.5 text-[#0f766e] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{symp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-stone-200/80 flex items-center justify-between text-xs font-bold text-[#0f766e] group-hover:text-[#0d5c56] min-h-[44px]">
                    <span>{currentLang === 'en' ? 'Open In-Depth Clinical Guide' : currentLang === 'hi' ? 'संपूर्ण क्लिनिकल मार्गदर्शिका पढ़ें' : 'વિગતવાર ક્લિનિકલ માર્ગદર્શન વાંચો'}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={cond.id}
                onClick={() => onSelectCondition(cond)}
                role="button"
                tabIndex={0}
                aria-label={currentLang === 'en' ? `Open guide: ${cond.name.en}` : currentLang === 'hi' ? `मार्गदर्शिका खोलें: ${cond.name.hi}` : `માર્ગદર્શિકા ખોલો: ${cond.name.gu}`}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectCondition(cond);
                  }
                }}
                style={{ borderTopColor: theme.hex.accent, borderTopWidth: '3px' }}
                className="p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 transition cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <CategoryBadge category={cond.category} currentLang={currentLang} size="sm" />
                        <span className="font-mono text-[11px] text-stone-500">
                          {cond.medicalTerms[currentLang]}
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 pt-0.5">
                        <div className="w-9 h-9 rounded-lg border border-stone-200/90 bg-stone-50 p-1.5 shrink-0 flex items-center justify-center group-hover:bg-teal-50/60 group-hover:border-teal-200 transition-colors shadow-2xs">
                          <ConditionIcon
                            conditionIcon={cond.conditionIcon}
                            conditionId={cond.id}
                            className="w-full h-full"
                            ariaLabel={cond.name[currentLang]}
                          />
                        </div>
                        <h2 className="text-base sm:text-lg font-semibold text-[#1c2430] group-hover:text-[#0f766e] transition-colors leading-snug">
                          {cond.name[currentLang]}
                        </h2>
                      </div>
                    </div>
                    {/* Small category illustration accent */}
                    <div className="w-14 h-11 sm:w-16 sm:h-12 shrink-0 rounded-lg overflow-hidden border border-stone-200/80 bg-stone-50">
                      <CategoryIllustration
                        category={cond.category}
                        className="w-full h-full object-cover"
                        ariaLabel=""
                      />
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {cond.overview[currentLang]}
                  </p>

                  {/* Common Symptoms preview */}
                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-2">
                    <span className="text-xs font-semibold text-stone-700 block">
                      {t.conditions.symptoms}:
                    </span>
                    <div className="space-y-1.5">
                      {(cond.commonSymptoms[currentLang] || cond.commonSymptoms.en || []).slice(0, 3).map((symp, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#115e59] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{symp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59] min-h-[44px]">
                  <span>{currentLang === 'en' ? 'Open Clinical Guide' : currentLang === 'hi' ? 'पूरी मार्गदर्शिका पढ़ें' : 'સંપૂર્ણ માહિતી વાંચો'}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

