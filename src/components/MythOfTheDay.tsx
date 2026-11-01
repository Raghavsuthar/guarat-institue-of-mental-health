import React, { useState } from 'react';
import { Sparkles, Download, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { Language, MythFact } from '../types';
import { mythsData } from '../data/myths';
import { downloadMythCard } from '../utils/mythCardCanvas';
import { BASE_URL } from '../utils/seo';
import { CategoryIllustration } from './visuals/CategoryIllustrations';
import { mapMythToCategory } from '../utils/illustrationMapping';

interface MythOfTheDayProps {
  currentLang: Language;
  onNavigateToMyths?: () => void;
}

export const MythOfTheDay: React.FC<MythOfTheDayProps> = ({ currentLang, onNavigateToMyths }) => {
  const [downloading, setDownloading] = useState(false);

  // Deterministically select today's myth based on calendar day
  const todayMyth: MythFact = React.useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return mythsData[dayOfYear % mythsData.length];
  }, []);

  const labels = {
    en: {
      badge: 'Myth of the Day',
      mythHeader: 'Common Misconception',
      factHeader: 'Evidence-Based Reality',
      download: 'Download Social Card',
      downloading: 'Preparing Card...',
      shareWhatsApp: 'Share to WhatsApp Status',
      viewAll: 'Explore all mental health myths',
      waText: `*Myth of the Day:*\n❌ Myth: "${todayMyth.myth[currentLang] || todayMyth.myth.en}"\n✅ Fact: ${todayMyth.fact[currentLang] || todayMyth.fact.en}\n\nEvidence-based psychiatry education by Gujarat Institute of Mental Health:\n${BASE_URL}/${currentLang}/myths`,
    },
    hi: {
      badge: 'आज का भ्रम और सत्य',
      mythHeader: 'प्रचलित गलत धारणा',
      factHeader: 'वैज्ञानिक वास्तविकता',
      download: 'कार्ड डाउनलोड करें',
      downloading: 'कार्ड तैयार हो रहा है...',
      shareWhatsApp: 'व्हाट्सएप स्टेटस पर शेयर करें',
      viewAll: 'सभी मानसिक स्वास्थ्य भ्रांतियां देखें',
      waText: `*आज का भ्रम और सत्य:*\n❌ भ्रम: "${todayMyth.myth[currentLang] || todayMyth.myth.en}"\n✅ सच: ${todayMyth.fact[currentLang] || todayMyth.fact.en}\n\nGujarat Institute of Mental Health:\n${BASE_URL}/${currentLang}/myths`,
    },
    gu: {
      badge: 'આજનો વહેમ અને સત્ય',
      mythHeader: 'પ્રચલિત ગેરમાન્યતા',
      factHeader: 'વૈજ્ઞાનિક વાસ્તવિકતા',
      download: 'કાર્ડ ડાઉનલોડ કરો',
      downloading: 'કાર્ડ તૈયાર થઈ રહ્યું છે...',
      shareWhatsApp: 'વોટ્સએપ સ્ટેટસ પર શેર કરો',
      viewAll: 'બધી માનસિક ગેરમાન્યતાઓ જુઓ',
      waText: `*આજનો વહેમ અને સત્ય:*\n❌ વહેમ: "${todayMyth.myth[currentLang] || todayMyth.myth.en}"\n✅ સત્ય: ${todayMyth.fact[currentLang] || todayMyth.fact.en}\n\nGujarat Institute of Mental Health:\n${BASE_URL}/${currentLang}/myths`,
    },
  }[currentLang];

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      downloadMythCard(todayMyth, currentLang);
      setDownloading(false);
    }, 150);
  };

  const handleWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(labels.waText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-teal-900/5 via-stone-50 to-stone-100/90 border border-teal-200/80 p-5 sm:p-7 shadow-xs">
      {/* Top Header Badge & Visual Accent */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-[#0f766e] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{labels.badge}</span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-stone-100 text-stone-600 border border-stone-200 uppercase tracking-wide">
            {todayMyth.category}
          </span>
        </div>

        {onNavigateToMyths && (
          <button
            onClick={onNavigateToMyths}
            className="text-xs font-semibold text-[#0f766e] hover:text-[#115e59] flex items-center gap-1 cursor-pointer"
          >
            <span>{labels.viewAll}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Decorative Category Illustration Accent Bar */}
      <div className="h-20 sm:h-24 w-full rounded-xl overflow-hidden border border-stone-200/80 mb-3 bg-white">
        <CategoryIllustration
          category={mapMythToCategory(todayMyth)}
          className="w-full h-full object-cover"
          ariaLabel={labels.badge}
        />
      </div>

      {/* Myth vs Fact split cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        {/* Myth Box */}
        <div className="p-4 rounded-xl bg-red-50/80 border border-red-100 text-stone-800">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#991b1b] uppercase tracking-wide mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#991b1b]" />
            {labels.mythHeader}
          </div>
          <p className="text-sm sm:text-base font-semibold text-stone-900 leading-snug">
            "{todayMyth.myth[currentLang] || todayMyth.myth.en}"
          </p>
        </div>

        {/* Fact Box */}
        <div className="p-4 rounded-xl bg-teal-50/90 border border-teal-100 text-stone-800">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f766e] uppercase tracking-wide mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0f766e]" />
            {labels.factHeader}
          </div>
          <p className="text-sm sm:text-base font-semibold text-[#0f766e] leading-snug">
            {todayMyth.fact[currentLang] || todayMyth.fact.en}
          </p>
        </div>
      </div>

      {/* Explanation text */}
      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2.5">
        {todayMyth.explanation[currentLang] || todayMyth.explanation.en}
      </p>

      {/* Action Affordances */}
      <div className="flex flex-wrap items-center gap-2.5 mt-5 pt-4 border-t border-stone-200">
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-xs transition cursor-pointer min-h-[40px]"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>{labels.shareWhatsApp}</span>
        </button>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-stone-100 text-stone-700 text-xs font-semibold border border-stone-200 transition cursor-pointer min-h-[40px]"
        >
          <Download className="w-4 h-4 text-stone-600" />
          <span>{downloading ? labels.downloading : labels.download}</span>
        </button>

        <span className="text-[11px] text-stone-500 hidden sm:inline ml-auto">
          Free to download & share for community mental health literacy
        </span>
      </div>
    </div>
  );
};


