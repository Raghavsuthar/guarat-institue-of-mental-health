import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen, Clock, ArrowLeft, Tag, Share2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language, HealthArticle } from '../types';
import { articlesData } from '../data/articles';
import { translations } from '../data/translations';
import { updatePageSEO, buildMedicalWebPageSchema } from '../utils/seo';
import { AudioReadAloud } from '../components/AudioReadAloud';
import { SocialShareBar } from '../components/SocialShareBar';
import { CategoryIllustration } from '../components/visuals/CategoryIllustrations';
import { mapArticleToCategory } from '../utils/illustrationMapping';

interface ArticlesViewProps {
  currentLang: Language;
  selectedSlug?: string;
  onSelectArticle?: (slug: string) => void;
  onBack?: () => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({
  currentLang,
  selectedSlug,
  onSelectArticle,
  onBack,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[currentLang];

  const currentArticle = useMemo(() => {
    if (!selectedSlug) return null;
    return articlesData.find((a) => a.slug === selectedSlug || a.id === selectedSlug) || null;
  }, [selectedSlug]);

  // Handle SEO
  useEffect(() => {
    if (currentArticle) {
      const title = currentArticle.title[currentLang] || currentArticle.title.en;
      const desc = currentArticle.summary[currentLang] || currentArticle.summary.en;
      updatePageSEO({
        title,
        description: desc,
        path: `articles/${currentArticle.slug}`,
        lang: currentLang,
        ogType: 'article',
        jsonLd: buildMedicalWebPageSchema({
          title,
          description: desc,
          path: `articles/${currentArticle.slug}`,
          lang: currentLang,
          medicalType: 'MedicalTherapy',
          subjectName: title,
        }),
      });
    } else {
      updatePageSEO({
        title: currentLang === 'en' ? 'Psychiatry Articles & Guides' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य लेख व मार्गदर्शिका' : 'માનસિક સ્વાસ્થ્ય લેખો અને માર્ગદર્શિકા',
        description: currentLang === 'en'
          ? 'Evidence-based articles and long-form medical perspectives on stress, burnout, insomnia, and psychiatric care in India.'
          : currentLang === 'hi'
          ? 'तनाव, बर्नआउट, अनिद्रा और मानसिक स्वास्थ्य पर प्रामाणिक चिकित्सा लेख।'
          : 'તણાવ, થાક, અનિદ્રા અને માનસિક સુખાકારી પર તબીબી માર્ગદર્શિકા.',
        path: 'articles',
        lang: currentLang,
      });
    }
  }, [currentArticle, currentLang]);

  const labels = {
    en: {
      tag: 'Clinical Perspectives & Educational Guides',
      title: 'Psychiatry & Wellness Articles',
      subtitle: 'In-depth, peer-reviewed educational articles on stress, neurobiology, and evidence-based mental healthcare by Gujarat Institute of Mental Health.',
      back: 'Back to all articles',
      minRead: 'min read',
      reviewedBy: 'Reviewed by Gujarat Institute of Mental Health.',
      allCategories: 'All Topics',
      searchPlaceholder: 'Search articles by topic, keyword...',
      noResults: 'No articles found matching your search.',
      shareArticle: 'Share this article:',
    },
    hi: {
      tag: 'चिकित्सीय दृष्टिकोण एवं शैक्षिक मार्गदर्शिका',
      title: 'मानसिक स्वास्थ्य एवं तंदुरुस्ती लेख',
      subtitle: 'गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ द्वारा तनाव, बर्नआउट और मनोचिकित्सा पर प्रामाणिक और विस्तृत लेख।',
      back: 'सभी लेखों पर वापस जाएं',
      minRead: 'मिनट पढ़ने का समय',
      reviewedBy: 'समीक्षित: गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ',
      allCategories: 'सभी विषय',
      searchPlaceholder: 'शीर्षक या कीवर्ड से खोजें...',
      noResults: 'आपके खोज अनुसार कोई लेख नहीं मिला।',
      shareArticle: 'इस लेख को साझा करें:',
    },
    gu: {
      tag: 'તબીબી માર્ગદર્શિકા અને શિક્ષણ',
      title: 'માનસિક સ્વાસ્થ્ય લેખો',
      subtitle: 'ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ દ્વારા તણાવ, બર્નઆઉટ અને માનસિક આરોગ્ય પર વિસ્તૃત લેખો.',
      back: 'બધા લેખો પર પાછા જાઓ',
      minRead: 'મિનિટ વાંચન',
      reviewedBy: 'તબીબી ચકાસણી: ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ',
      allCategories: 'બધા વિષયો',
      searchPlaceholder: 'લેખ શોધો...',
      noResults: 'કોઈ લેખ મળ્યો નથી.',
      shareArticle: 'આ લેખ શેર કરો:',
    },
  }[currentLang];

  const categories = useMemo(() => {
    const cats = new Set(articlesData.map((a) => a.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => {
      const matchesCat = activeCategory === 'all' || art.category === activeCategory;
      const title = (art.title[currentLang] || art.title.en).toLowerCase();
      const summary = (art.summary[currentLang] || art.summary.en).toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || title.includes(query) || summary.includes(query);
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery, currentLang]);

  // SINGLE ARTICLE DETAIL VIEW
  if (currentArticle) {
    const title = currentArticle.title[currentLang] || currentArticle.title.en;
    const subtitle = currentArticle.subtitle[currentLang] || currentArticle.subtitle.en;
    const summary = currentArticle.summary[currentLang] || currentArticle.summary.en;
    const content = currentArticle.content[currentLang] || currentArticle.content.en;
    const shareSubtitle = summary || subtitle;

    const articleCardData = {
      type: 'article' as const,
      kind: 'article',
      title,
      subtitle: subtitle || 'Gujarat Institute of Mental Health',
      category: currentArticle.category.toUpperCase(),
      keyPoints: [
        summary,
        currentLang === 'hi'
          ? 'गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ द्वारा प्रामाणिक शैक्षणिक लेख'
          : currentLang === 'gu'
          ? 'ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ દ્વારા શૈક્ષણિક લેખ'
          : 'Clinical Educational Guide by Gujarat Institute of Mental Health',
      ],
      points: [
        summary,
        currentLang === 'hi'
          ? 'गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ द्वारा प्रामाणिक शैक्षणिक लेख'
          : currentLang === 'gu'
          ? 'ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ દ્વારા શૈક્ષણિક લેખ'
          : 'Clinical Educational Guide by Gujarat Institute of Mental Health',
      ],
      path: `articles/${currentArticle.slug}`,
    };

    return (
      <article className="space-y-6 max-w-3xl mx-auto pb-16">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f766e] hover:text-[#115e59] transition cursor-pointer min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{labels.back}</span>
        </button>

        {/* Article Header */}
        <header className="space-y-4 border-b border-stone-200 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#0f766e] text-xs font-bold uppercase tracking-wider">
              {currentArticle.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-stone-500 font-medium">
              <Clock className="w-3.5 h-3.5" />
              {currentArticle.readingTimeMinutes} {labels.minRead}
            </span>
          </div>

          {/* Featured Article Hero Illustration */}
          <div className="h-44 sm:h-60 w-full rounded-xl overflow-hidden border border-stone-200/80 bg-stone-50">
            <CategoryIllustration
              category={mapArticleToCategory(currentArticle)}
              className="w-full h-full object-cover"
              ariaLabel={title}
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1c2430] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {subtitle}
          </p>

          {/* Action Header: Audio Read-Aloud & Social Sharing */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <AudioReadAloud
              text={`${title}. ${summary}. ${content}`}
              currentLang={currentLang}
              title={title}
            />

            <SocialShareBar
              title={title}
              path={`articles/${currentArticle.slug}`}
              currentLang={currentLang}
              subtitle={shareSubtitle}
              variant="compact"
            />
          </div>
        </header>

        {/* Summary Executive Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-teal-50/60 border border-teal-200 text-stone-800 text-sm leading-relaxed">
          <span className="text-xs font-bold text-[#0f766e] uppercase tracking-wide block mb-1">
            Clinical Summary
          </span>
          <p>{summary}</p>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed text-sm sm:text-base space-y-4">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-bold text-[#1c2430] mt-6 mb-3 border-b border-stone-200 pb-1" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-base sm:text-lg font-bold text-[#1c2430] mt-5 mb-2" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="text-sm sm:text-base font-semibold text-[#0f766e] mt-4 mb-1" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-stone-700 leading-relaxed mb-3" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside space-y-1 text-stone-700 pl-1 mb-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside space-y-1 text-stone-700 pl-1 mb-4" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="leading-relaxed" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="font-semibold text-stone-900" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {currentArticle.tags?.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-stone-200">
            <Tag className="w-3.5 h-3.5 text-stone-400" />
            {currentArticle.tags.map((tg) => (
              <span
                key={tg}
                className="px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-600 text-xs font-medium"
              >
                #{tg}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Social Share */}
        <SocialShareBar
          title={title}
          path={`articles/${currentArticle.slug}`}
          currentLang={currentLang}
          subtitle={shareSubtitle}
          cardData={articleCardData}
        />

        {/* Medical Review Stamp */}
        <footer className="p-4 rounded-xl bg-stone-100/80 border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-900">{labels.reviewedBy}</p>
            <p className="mt-0.5 text-stone-600">
              Last reviewed: {currentArticle.reviewStatus?.lastReviewed || '2026-08'}. This article provides public health education and does not constitute individual clinical advice.
            </p>
          </div>
        </footer>
      </article>
    );
  }

  // ARTICLES LIST VIEW
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

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1" role="group" aria-label="Article categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition cursor-pointer min-h-[44px] flex items-center capitalize ${
                activeCategory === cat
                  ? 'bg-[#0f766e] text-white'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat === 'all' ? labels.allCategories : cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="sm:w-64 shrink-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={labels.searchPlaceholder}
            className="w-full px-3 py-2 rounded-lg border border-stone-200 bg-white text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-teal-500 min-h-[44px]"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-sm">
          {labels.noResults}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredArticles.map((art) => {
            const title = art.title[currentLang] || art.title.en;
            const subtitle = art.subtitle[currentLang] || art.subtitle.en;
            const summary = art.summary[currentLang] || art.summary.en;

            return (
              <div
                key={art.id}
                onClick={() => onSelectArticle?.(art.slug)}
                className="group p-5 rounded-xl border border-stone-200 bg-white hover:border-teal-300 hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Article Thumbnail Illustration */}
                  <div className="h-32 sm:h-36 w-full rounded-lg overflow-hidden border border-stone-200/80 bg-stone-50 group-hover:border-teal-200 transition-colors">
                    <CategoryIllustration
                      category={mapArticleToCategory(art)}
                      className="w-full h-full object-cover"
                      ariaLabel={title}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-[#0f766e] border border-teal-200">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-stone-500">
                      <Clock className="w-3 h-3" />
                      {art.readingTimeMinutes} {labels.minRead}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-stone-900 group-hover:text-[#0f766e] transition-colors leading-snug">
                    {title}
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#0f766e] group-hover:underline">
                    Read article →
                  </span>

                  {art.tags?.length > 0 && (
                    <span className="text-stone-400 text-[11px]">
                      #{art.tags[0]}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};


