import React, { useState, useEffect, useMemo } from 'react';
import { Phone, ExternalLink, ShieldCheck, CheckCircle2, Globe, Clock, MapPin, Search } from 'lucide-react';
import { Language, IndiaResource } from '../types';
import { indiaResourcesData } from '../data/resources';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { SocialShareBar } from '../components/SocialShareBar';

interface ResourcesViewProps {
  currentLang: Language;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Verified Mental Health Helplines & Resources (India)' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य हेल्पलाइन व संसाधन (भारत)' : 'માનસિક સ્વાસ્થ્ય હેલ્પલાઇન અને સહાયતા કેન્દ્રો (ભારત)',
      description: currentLang === 'en'
        ? 'National, verified Indian psychiatric and crisis helplines including Tele-MANAS (14416), ERSS 112, NIMHANS, and regional support services.'
        : currentLang === 'hi'
        ? 'भारत की प्रमुख प्रमाणित मानसिक स्वास्थ्य हेल्पलाइन जैसे टेली-मानस (14416), ERSS 112 और सरकारी सहायता केंद्र।'
        : 'ભારતની અધિકૃત માનસિક સ્વાસ્થ્ય હેલ્પલાઇન - ટેલી-માનસ (૧૪૪૧૬), ૧૧૨ અને સહાયતા કેન્દ્રો.',
      path: 'resources',
      lang: currentLang,
    });
  }, [currentLang]);

  const labels = {
    en: {
      tag: 'National Directory & Helplines',
      title: 'Mental Health Helplines & Centers (India)',
      subtitle: 'Verified government emergency numbers, hospital helplines, academic centers of excellence, and specialized psychiatric support across India.',
      searchPlaceholder: 'Search by helpline name, number, or city...',
      allCats: 'All Resources',
      helplineCat: 'Crisis Helplines',
      academicCat: 'Institutes & Hospitals',
      govtCat: 'Government Portals',
      callNow: 'Call Now',
      visitWebsite: 'Official Portal',
      coverage: 'Coverage:',
      timings: 'Availability:',
      languages: 'Languages:',
      cost: 'Cost:',
      verifiedBadge: 'Verified Clinical Service',
      noResults: 'No resources match your current filter.',
    },
    hi: {
      tag: 'राष्ट्रीय निर्देशिका एवं सहायता सेवाएं',
      title: 'मानसिक स्वास्थ्य हेल्पलाइन एवं केंद्र (भारत)',
      subtitle: 'भारत सरकार, राष्ट्रीय संस्थानों और प्रमाणित अस्पतालों द्वारा संचालित निःशुल्क हेल्पलाइन और सहायता केंद्रों की सूची।',
      searchPlaceholder: 'नाम, नंबर या राज्य से खोजें...',
      allCats: 'सभी संसाधन',
      helplineCat: 'संकटकालीन हेल्पलाइन',
      academicCat: 'अस्पताल एवं संस्थान',
      govtCat: 'सरकारी पोर्टल',
      callNow: 'कॉल करें',
      visitWebsite: 'आधिकारिक वेबसाइट',
      coverage: 'क्षेत्र:',
      timings: 'समय:',
      languages: 'भाषाएं:',
      cost: 'शुल्क:',
      verifiedBadge: 'प्रमाणित चिकित्सा सेवा',
      noResults: 'खोज के अनुसार कोई संसाधन नहीं मिला।',
    },
    gu: {
      tag: 'રાષ્ટ્રીય ડિરેક્ટરી અને હેલ્પલાઇન',
      title: 'માનસિક સ્વાસ્થ્ય હેલ્પલાઇન અને સંસાધનો (ભારત)',
      subtitle: 'ભારત સરકાર અને અગ્રણી માનસિક આરોગ્ય સંસ્થાઓ દ્વારા સંચાલિત પ્રમાણિત હેલ્પલાઇન અને હોસ્પિટલો.',
      searchPlaceholder: 'નામ, ફોન નંબર કે શહેરથી શોધો...',
      allCats: 'બધા સંસાધનો',
      helplineCat: 'કટોકટી હેલ્પલાઇન',
      academicCat: 'હોસ્પિટલો અને સંસ્થાઓ',
      govtCat: 'સરકારી પોર્ટલ',
      callNow: 'કૉલ કરો',
      visitWebsite: 'સત્તાવાર વેબસાઇટ',
      coverage: 'વિસ્તાર:',
      timings: 'સમય:',
      languages: 'ભાષાઓ:',
      cost: 'ખર્ચ:',
      verifiedBadge: 'પ્રમાણિત તબીબી સેવા',
      noResults: 'કોઈ સંસાધન મળ્યું નથી.',
    },
  }[currentLang];

  const categories = [
    { id: 'all', label: labels.allCats },
    { id: 'helpline', label: labels.helplineCat },
    { id: 'academic', label: labels.academicCat },
    { id: 'government', label: labels.govtCat },
  ];

  const filteredResources = useMemo(() => {
    return indiaResourcesData.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCat;

      const name = (item.name[currentLang] || item.name.en).toLowerCase();
      const num = (item.number || '').toLowerCase();
      const desc = (item.description[currentLang] || item.description.en).toLowerCase();
      const op = (item.operatedBy || '').toLowerCase();

      return matchesCat && (name.includes(query) || num.includes(query) || desc.includes(query) || op.includes(query));
    });
  }, [selectedCategory, searchQuery, currentLang]);

  // Clean raw phone number for tel: link (e.g. "14416 / 1800-891-4416 [VERIFY: ...]" -> "14416")
  const getCleanTel = (rawNumber: string): string => {
    const match = rawNumber.match(/\b\d{3,11}\b/);
    return match ? match[0] : '';
  };

  // Clean text from verify bracket notes
  const cleanDisplay = (text?: string): string => {
    if (!text) return '';
    return text.replace(/\[VERIFY:[^\]]*\]/g, '').trim();
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          {labels.tag}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {labels.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {labels.subtitle}
        </p>
      </div>

      {/* Emergency Quick Numbers Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-teal-500/10 border border-red-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-bold text-red-900 uppercase tracking-wide">
            Immediate Crisis? Call Right Away (Toll-Free):
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:14416"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-xs transition"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Tele-MANAS: 14416</span>
            </a>
            <a
              href="tel:112"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-black text-white text-sm font-bold shadow-xs transition"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>National ERSS: 112</span>
            </a>
          </div>
        </div>
        <span className="text-xs text-stone-600 sm:text-right max-w-xs">
          Confidential, round-the-clock psychological first aid operated by Government of India and NIMHANS.
        </span>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Resource categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer min-h-[44px] flex items-center ${
                selectedCategory === cat.id
                  ? 'bg-[#0f766e] text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="sm:w-72 shrink-0 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-stone-200 bg-white text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-teal-500 min-h-[44px]"
          />
        </div>
      </div>

      {/* Resources Cards List */}
      {filteredResources.length === 0 ? (
        <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-sm">
          {labels.noResults}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {filteredResources.map((res) => {
            const name = res.name[currentLang] || res.name.en;
            const desc = res.description[currentLang] || res.description.en;
            const coverage = res.coverage[currentLang] || res.coverage.en;
            const availability = res.availability[currentLang] || res.availability.en;
            const langs = res.languages[currentLang] || res.languages.en;
            const cost = res.cost[currentLang] || res.cost.en;
            const cleanTel = res.number ? getCleanTel(res.number) : '';
            const rawWebUrl = cleanDisplay(res.websiteUrl);

            return (
              <div
                key={res.id}
                className="p-5 sm:p-6 rounded-xl border border-stone-200 bg-white shadow-xs space-y-4"
              >
                {/* Header Title & Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-[#0f766e] border border-teal-200">
                        {res.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {labels.verifiedBadge}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#1c2430]">
                      {name}
                    </h2>
                    {res.operatedBy && (
                      <p className="text-xs text-stone-500 mt-0.5">
                        {cleanDisplay(res.operatedBy)}
                      </p>
                    )}
                  </div>

                  {/* Direct Contact Actions */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {cleanTel && (
                      <a
                        href={`tel:${cleanTel}`}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-xs transition min-h-[40px]"
                      >
                        <Phone className="w-3.5 h-3.5 fill-current" />
                        <span>{labels.callNow}: {cleanTel}</span>
                      </a>
                    )}

                    {rawWebUrl && (
                      <a
                        href={rawWebUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-200 transition min-h-[40px]"
                      >
                        <span>{labels.visitWebsite}</span>
                        <ExternalLink className="w-3 h-3 text-stone-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {desc}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-2 text-xs">
                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                    <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-bold">{labels.coverage}</span>
                      <span className="text-stone-700 font-medium">{coverage}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                    <Clock className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-bold">{labels.timings}</span>
                      <span className="text-stone-700 font-medium">{availability}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                    <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-bold">{labels.languages}</span>
                      <span className="text-stone-700 font-medium">{langs}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 p-2 rounded-lg bg-stone-50 border border-stone-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase font-bold">{labels.cost}</span>
                      <span className="text-emerald-700 font-bold">{cost}</span>
                    </div>
                  </div>
                </div>

                {/* Share Bar */}
                <SocialShareBar
                  title={`Verified Mental Health Resource: ${name}`}
                  path="resources"
                  currentLang={currentLang}
                  subtitle={cleanDisplay(res.number) ? `Phone: ${cleanDisplay(res.number)}` : undefined}
                  variant="compact"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
