import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Download, XCircle, CheckCircle2, MoveRight } from 'lucide-react';
import { Language, MythFact, ShareCardData } from '../types';
import { mythsData } from '../data/myths';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { downloadMythCard } from '../utils/mythCardCanvas';
import { AudioReadAloud } from '../components/AudioReadAloud';
import { SocialShareBar } from '../components/SocialShareBar';
import { CategoryIllustration } from '../components/visuals/CategoryIllustrations';
import { mapMythToCategory } from '../utils/illustrationMapping';

interface MythsViewProps {
  currentLang: Language;
}

export const MythsView: React.FC<MythsViewProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Mental Health Myths vs Facts' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य भ्रांतियां बनाम सच' : 'માનસિક સ્વાસ્થ્ય અંધશ્રદ્ધા વિરુદ્ધ સત્ય',
      description: currentLang === 'en'
        ? 'Medical reality versus pervasive cultural myths regarding depression, schizophrenia, ECT, therapy, and addiction.'
        : currentLang === 'hi'
        ? 'मानसिक रोगों, ईसीटी, थेरेपी और नशे की लत से जुड़ी भ्रांतियों का प्रामाणिक वैज्ञानिक सच।'
        : 'ડિપ્રેશન, થેરાપી અને વ્યસન વિશેની ખોટી માન્યતાઓ સામે તબીબી અને વૈજ્ઞાનિક હકીકતો.',
      path: 'myths',
      lang: currentLang,
    });
  }, [currentLang]);

  const categories = [
    { id: 'all', label: currentLang === 'en' ? 'All Myths' : currentLang === 'hi' ? 'सभी भ्रांतियां' : 'બધી માન્યતાઓ' },
    { id: 'general', label: currentLang === 'en' ? 'Stigma & Weakness' : currentLang === 'hi' ? 'मानसिक कमजोरी' : 'મનની નબળાઈ' },
    { id: 'addiction', label: currentLang === 'en' ? 'Addiction & Willpower' : currentLang === 'hi' ? 'नशा व इच्छाशक्ति' : 'વ્યસન' },
    { id: 'therapy', label: currentLang === 'en' ? 'Psychotherapy' : currentLang === 'hi' ? 'थेरेपी' : 'થેરાપી' },
    { id: 'children', label: currentLang === 'en' ? 'Child Psychiatry' : currentLang === 'hi' ? 'बच्चों का स्वास्थ्य' : 'બાળકોનું સ્વાસ્થ્ય' },
  ];

  const filteredMyths = mythsData.filter(
    (m) => (m.category as string) !== 'medications' && (selectedCategory === 'all' || m.category === selectedCategory)
  );

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Public Stigma Eradication' : currentLang === 'hi' ? 'सामाजिक भ्रांतियों का निवारण' : 'ગેરમાન્યતાઓનું નિવારણ'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.myths}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Stigma and misinformation prevent millions of people in India from seeking timely medical care for psychiatric conditions. Here are the 10 most common myths analyzed with medical facts.'
            : currentLang === 'hi'
            ? 'गलतफहमियां और सामाजिक झिझक लाखों लोगों को समय पर डॉक्टर के पास जाने से रोकती हैं। यहां 10 मुख्य भ्रांतियों का वैज्ञानिक सच प्रस्तुत है।'
            : 'ગેરમાન્યતાઓ અને સામાજિક સંકોચ લાખો લોકોને સારવાર લેતા રોકે છે. અહીં ૧૦ મુખ્ય અંધશ્રદ્ધાઓ સામે સાચું તબીબી સત્ય રજૂ કરેલ છે.'}
        </p>
      </div>

      {/* Category Pills - accessible min-h 44px */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Myth categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer min-h-[44px] flex items-center ${
              selectedCategory === cat.id
                ? 'bg-[#115e59] text-white'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Myths Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {filteredMyths.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-stone-200 bg-white"
            >
              <div className="space-y-4">
                {/* Header Tag with Illustration Accent */}
                <div className="flex items-center justify-between gap-3 pb-2 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                      {item.category}
                    </span>
                  </div>
                  <div className="w-16 h-10 rounded-lg overflow-hidden border border-stone-200/80 shrink-0 bg-stone-50">
                    <CategoryIllustration
                      category={mapMythToCategory(item)}
                      className="w-full h-full object-cover"
                      ariaLabel={item.category}
                    />
                  </div>
                </div>

                {/* Myth → Fact side-by-side */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-3 items-center">
                  {/* The Myth */}
                  <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <span className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0" aria-hidden="true">
                      <XCircle className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block">
                        {currentLang === 'en' ? 'Common Misconception' : currentLang === 'hi' ? 'आम भ्रांति' : 'સામાન્ય ગેરમાન્યતા'}
                      </span>
                      <span className="text-base font-semibold text-[#1c2430] mt-1 block">
                        "{item.myth[currentLang]}"
                      </span>
                    </span>
                  </div>

                  <span className="hidden lg:flex items-center justify-center text-slate-300" aria-hidden="true">
                    <MoveRight className="w-6 h-6" />
                  </span>

                  {/* The Medical Fact */}
                  <div className="p-4 rounded-lg bg-[#f0fdfa] border border-[#ccfbf1] shadow-xs flex items-start gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#0d9488] text-white flex items-center justify-center shrink-0" aria-hidden="true">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#115e59] block">
                        {currentLang === 'en' ? 'Clinical Reality' : currentLang === 'hi' ? 'चिकित्सीय सच' : 'તબીબી સત્ય'}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-stone-900 mt-1 block">
                        {item.fact[currentLang]}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Scientific Explanation */}
                <div className="pt-1">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="text-xs font-semibold text-[#115e59] hover:underline transition flex items-center gap-1.5 cursor-pointer min-h-[44px]"
                  >
                    <span>{isExpanded ? 'Hide Detailed Scientific Explanation' : 'Read Detailed Scientific Explanation'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 p-4 bg-stone-50 rounded-lg border border-stone-200 text-sm text-stone-700 leading-relaxed">
                      {item.explanation[currentLang]}
                    </div>
                  )}
                </div>

                {/* Card Awareness & Share Utilities */}
                <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <AudioReadAloud
                      text={`${item.myth[currentLang]}. ${item.fact[currentLang]}. ${item.explanation[currentLang]}`}
                      currentLang={currentLang}
                      title={currentLang === 'en' ? 'Myth vs Fact' : currentLang === 'hi' ? 'भ्रम और सत्य' : 'વહેમ અને સત્ય'}
                    />

                    <button
                      onClick={() => downloadMythCard(item, currentLang)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-200 transition cursor-pointer min-h-[32px]"
                      title="Download shareable social card image"
                    >
                      <Download className="w-3.5 h-3.5 text-stone-600" />
                      <span>{currentLang === 'en' ? 'Save Card (PNG)' : currentLang === 'hi' ? 'कार्ड डाउनलोड' : 'કાર્ડ ડાઉનલોડ'}</span>
                    </button>
                  </div>

                  <SocialShareBar
                    title={`Myth vs Fact: "${item.myth[currentLang]}"`}
                    path="myths"
                    currentLang={currentLang}
                    subtitle={item.fact[currentLang]}
                    variant="compact"
                    cardData={{
                      type: 'myth',
                      kind: 'myth',
                      title: 'MYTH VS FACT',
                      category: item.category,
                      mythText: item.myth[currentLang],
                      factText: item.fact[currentLang],
                      explanation: item.explanation[currentLang],
                      keyPoints: [
                        `"${item.myth[currentLang]}"`,
                        item.fact[currentLang],
                        item.explanation[currentLang],
                      ],
                      points: [
                        `"${item.myth[currentLang]}"`,
                        item.fact[currentLang],
                        item.explanation[currentLang],
                      ],
                      path: 'myths',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

