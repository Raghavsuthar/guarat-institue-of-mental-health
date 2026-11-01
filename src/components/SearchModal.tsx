import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, AlertCircle, Activity, HelpCircle, HeartPulse, ArrowRight } from 'lucide-react';
import { Language, Condition, SubstanceInfo, TherapyModality, MythFact, SymptomEducation, ChildAdolescentTopic, WomensMentalHealthTopic } from '../types';
import { conditionsData } from '../data/conditions';
import { substancesData } from '../data/substances';
import { treatmentsData } from '../data/treatments';
import { mythsData } from '../data/myths';
import { symptomsData } from '../data/symptoms';
import { childAdolescentTopics } from '../data/childAdolescent';
import { womensMentalHealthTopics } from '../data/womensMentalHealth';
import { translations } from '../data/translations';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectCondition: (item: Condition) => void;
  onSelectSubstance: (item: SubstanceInfo) => void;
  onSelectMedication?: (item: any) => void;
  onSelectChildTopic?: (item: ChildAdolescentTopic) => void;
  onSelectWomensTopic?: (item: WomensMentalHealthTopic) => void;
  onSelectTherapy?: (item: TherapyModality) => void;
  onSelectSymptom?: (item: SymptomEducation) => void;
  onNavigateTab?: (tab: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectCondition,
  onSelectSubstance,
  onSelectMedication,
  onSelectChildTopic,
  onSelectWomensTopic,
  onSelectTherapy,
  onSelectSymptom,
  onNavigateTab: _onNavigateTab,
}) => {
  const [query, setQuery] = useState('');
  const t = translations[currentLang];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matched: Array<{
      id: string;
      type: 'condition' | 'substance' | 'therapy' | 'myth' | 'symptom' | 'childPsychiatry' | 'womensMentalHealth';
      title: string;
      snippet: string;
      rawItem: any;
    }> = [];

    // Search Conditions
    conditionsData.forEach((c) => {
      const title = c.name[currentLang] || c.name.en;
      const terms = c.medicalTerms[currentLang] || '';
      const overviewText = c.overview?.[currentLang] || c.overview?.en || '';
      const text = `${c.name.en} ${c.name.hi} ${c.name.gu} ${c.medicalTerms.en} ${c.medicalTerms.hi} ${c.medicalTerms.gu} ${overviewText}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `c-${c.id}`,
          type: 'condition',
          title: `${title} (${terms})`,
          snippet: overviewText.slice(0, 140) + '...',
          rawItem: c,
        });
      }
    });

    // Search Substances
    substancesData.forEach((s) => {
      const title = s.name[currentLang] || s.name.en;
      const terms = s.medicalTerms[currentLang] || '';
      const whatIsItText = s.whatIsIt?.[currentLang] || s.whatIsIt?.en || '';
      const text = `${s.name.en} ${s.name.hi} ${s.name.gu} ${s.medicalTerms.en} ${s.medicalTerms.hi} ${s.medicalTerms.gu} ${whatIsItText}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `s-${s.id}`,
          type: 'substance',
          title: `${title} (${terms})`,
          snippet: whatIsItText.slice(0, 140) + '...',
          rawItem: s,
        });
      }
    });

    // Search Therapies
    treatmentsData.forEach((th) => {
      const title = th.name[currentLang] || th.name.en;
      const summaryText = th.plainSummary?.[currentLang] || th.plainSummary?.en || '';
      const text = `${th.name.en} ${th.name.hi} ${th.name.gu} ${th.shortName} ${summaryText}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `th-${th.id}`,
          type: 'therapy',
          title: `${title} (${th.shortName})`,
          snippet: summaryText.slice(0, 140) + '...',
          rawItem: th,
        });
      }
    });

    // Search Symptoms
    symptomsData.forEach((sym) => {
      const title = sym.symptomName[currentLang] || sym.symptomName.en;
      const descText = sym.plainDescription?.[currentLang] || sym.plainDescription?.en || '';
      const text = `${sym.symptomName.en} ${sym.symptomName.hi} ${sym.symptomName.gu} ${descText}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `sym-${sym.id}`,
          type: 'symptom',
          title: title,
          snippet: descText.slice(0, 140) + '...',
          rawItem: sym,
        });
      }
    });

    // Search Child & Adolescent Psychiatry Topics
    childAdolescentTopics.forEach((ct) => {
      const title = ct.name[currentLang] || ct.name.en;
      const terms = ct.medicalTerms[currentLang] || '';
      const overviewText = ct.overview?.[currentLang] || ct.overview?.en || '';
      const taglineText = ct.tagline?.[currentLang] || ct.tagline?.en || '';
      const text = `${ct.name.en} ${ct.name.hi} ${ct.name.gu} ${ct.medicalTerms.en} ${ct.medicalTerms.hi} ${ct.medicalTerms.gu} ${overviewText} ${taglineText}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `child-${ct.id}`,
          type: 'childPsychiatry',
          title: `${title} (${terms})`,
          snippet: overviewText.slice(0, 140) + '...',
          rawItem: ct,
        });
      }
    });

    // Search Women's Mental Health Topics
    womensMentalHealthTopics.forEach((wt) => {
      const title = wt.name[currentLang] || wt.name.en;
      const terms = wt.medicalTerms[currentLang] || '';
      const overviewText = wt.overview?.[currentLang] || wt.overview?.en || '';
      const taglineText = wt.tagline?.[currentLang] || wt.tagline?.en || '';
      const text = `${wt.name.en} ${wt.name.hi} ${wt.name.gu} ${wt.medicalTerms.en} ${wt.medicalTerms.hi} ${wt.medicalTerms.gu} ${overviewText} ${taglineText}`.toLowerCase();
      if (text.includes(q)) {
        matched.push({
          id: `women-${wt.id}`,
          type: 'womensMentalHealth',
          title: `${title} (${terms})`,
          snippet: overviewText.slice(0, 140) + '...',
          rawItem: wt,
        });
      }
    });

    return matched;
  }, [query, currentLang]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4 pt-2 sm:pt-6 md:pt-12 overflow-y-auto overscroll-contain modal-scroll-backdrop" role="dialog" aria-modal="true" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-2 sm:my-4 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Search Header */}
        <div className="p-3 sm:p-4 border-b border-stone-200 flex items-center gap-2 sm:gap-3 shrink-0">
          <Search className="w-5 h-5 text-stone-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.search.placeholder}
            autoFocus
            className="w-full text-base outline-none text-[#1c2430] placeholder-stone-400 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="p-2 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="px-3 py-1.5 text-xs font-semibold rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 transition cursor-pointer min-h-[44px] flex items-center"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div
          className="flex-1 min-h-0 max-h-[75vh] sm:max-h-[60vh] overflow-y-auto p-3 space-y-2 divide-y divide-stone-100 overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {!query && (
            <div className="py-8 text-center text-stone-500 text-sm">
              <p className="font-medium text-stone-700">
                {currentLang === 'en'
                  ? 'Search across conditions, addiction, therapies & symptoms'
                  : currentLang === 'hi'
                  ? 'बीमारियों, नशा मुक्ति, थेरेपी और लक्षणों को खोजें'
                  : 'બીમારીઓ, વ્યસન મુક્તિ, થેરાપી અને લક્ષણો શોધો'}
              </p>
              <p className="text-xs text-stone-400 mt-1">
                {currentLang === 'en'
                  ? 'Example: "Depression", "CBT", "Alcohol", "Sleep", "Anxiety"'
                  : currentLang === 'hi'
                  ? 'उदाहरण: "डिप्रेशन", "चिंता", "शराब", "नींद", "CBT"'
                  : 'ઉદાહરણ: "ડિપ્રેશન", "ચિંતા", "દારૂ", "ઊંઘ", "CBT"'}
              </p>
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-10 text-center text-stone-500">
              <AlertCircle className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="font-semibold text-stone-800">{t.search.noResults}</p>
              <p className="text-xs text-stone-500 mt-1">
                {currentLang === 'en'
                  ? 'Try searching with English, Hindi, or Gujarati terms'
                  : currentLang === 'hi'
                  ? 'अंग्रेजी, हिन्दी या गुजराती शब्दों में खोजें'
                  : 'અંગ્રેજી, હિન્દી કે ગુજરાતી શબ્દો વડે શોધો'}
              </p>
            </div>
          )}

          {results.map((res) => {
            let typeLabel = 'Topic';

            if (res.type === 'condition') {
              typeLabel = t.nav.conditions;
            } else if (res.type === 'substance') {
              typeLabel = t.nav.addiction;
            } else if (res.type === 'therapy') {
              typeLabel = t.nav.treatments;
            } else if (res.type === 'symptom') {
              typeLabel = t.nav.symptoms;
            } else if (res.type === 'childPsychiatry') {
              typeLabel = currentLang === 'en' ? 'Child Psychiatry' : currentLang === 'hi' ? 'बाल मनोचिकित्सा' : 'બાળ મનોચિકિત્સા';
            } else if (res.type === 'womensMentalHealth') {
              typeLabel = t.nav.womensMentalHealth;
            }

            return (
              <div
                key={res.id}
                onClick={() => {
                  if (res.type === 'condition') onSelectCondition(res.rawItem);
                  if (res.type === 'substance') onSelectSubstance(res.rawItem);
                  if (res.type === 'therapy' && onSelectTherapy) onSelectTherapy(res.rawItem);
                  if (res.type === 'symptom' && onSelectSymptom) onSelectSymptom(res.rawItem);
                  if (res.type === 'childPsychiatry' && onSelectChildTopic) onSelectChildTopic(res.rawItem);
                  if (res.type === 'womensMentalHealth' && onSelectWomensTopic) onSelectWomensTopic(res.rawItem);
                  onClose();
                }}
                className="pt-2.5 pb-2.5 px-3 hover:bg-stone-50 rounded-lg transition cursor-pointer group flex items-start justify-between gap-3 min-h-[44px]"
              >
                <div className="flex items-start gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded border border-stone-200 bg-stone-100 text-stone-700">
                        {typeLabel}
                      </span>
                      <h4 className="text-sm font-semibold text-[#1c2430] group-hover:text-[#115e59] transition">
                        {res.title}
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                      {res.snippet}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#115e59] shrink-0 mt-1.5 transition" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
