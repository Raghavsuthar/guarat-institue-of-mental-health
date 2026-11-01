import React, { useEffect } from 'react';
import {
  Brain,
  Pill,
  HeartPulse,
  AlertCircle,
  HelpCircle,
  Users,
  Phone,
  ArrowRight,
  BookOpen,
  Search,
  Activity,
  ShieldCheck,
  FileText,
  BookmarkCheck,
  Printer,
  GraduationCap,
  Heart,
  BadgeCheck,
  Globe,
  Scale,
  Languages,
  PhoneCall,
  Siren,
  HeartHandshake
} from 'lucide-react';
import { Language, ActiveTab, Condition, SubstanceInfo } from '../types';
import { translations } from '../data/translations';
import { conditionSpotlightData } from '../data/conditionSpotlight';
import { updatePageSEO } from '../utils/seo';
import { MythOfTheDay } from '../components/MythOfTheDay';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { CategoryBadge } from '../components/CategoryBadge';
import { getCategoryTheme } from '../data/categoryThemes';
import { ConditionSpotlight } from '../components/ConditionSpotlight';
import HeroGeometric from '../components/HeroGeometric';
import { AnnotatedText } from '../components/AnnotatedText';

interface HomeViewProps {
  currentLang: Language;
  onTabChange: (tab: ActiveTab) => void;
  onSelectCondition: (item: Pick<Condition, 'slug'>) => void;
  onSelectSubstance: (item: SubstanceInfo) => void;
  onOpenSearch: () => void;
  onOpenCrisis: () => void;
  onOpenScreener: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentLang,
  onTabChange,
  onSelectCondition,
  onSelectSubstance,
  onOpenSearch,
  onOpenCrisis,
  onOpenScreener,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en'
        ? 'Public Psychiatry Education Portal'
        : currentLang === 'hi'
        ? 'जन मनोरोग शिक्षा पोर्टल'
        : 'જાહેર મનોચિકિત્સા શિક્ષણ પોર્ટલ',
      description: currentLang === 'en'
        ? 'Evidence-based psychiatric education for patients and families in India. Conditions, psychotherapy, treatments, and helplines in English, Hindi, and Gujarati.'
        : currentLang === 'hi'
        ? ' द्वारा मानसिक स्वास्थ्य, विकार, साइकोथेरेपी और उपचार पर प्रमाण-आधारित निःशुल्क जानकारी।'
        : ' દ્વારા માનસિક સ્વાસ્થ્ય, મનોચિકિત્સા અને સારવાર વિશે પુરાવા-આધારિત માહિતી.',
      path: '',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      {/* Hero Section: animated shader backdrop in portal theme */}
      <HeroGeometric
        color1="#0d9488"
        color2="#fef3c7"
        speed={0.8}
        className="mindcare-home-hero rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300"
      >
        {/* Fine Top Accent Line: Nilgiri Teal to Surya Gold to Twilight Iris */}
        <div className="h-[3.5px] w-full bg-gradient-to-r from-[#0d9488] via-[#f59e0b] to-[#7c3aed]" aria-hidden="true" />

        <div className="p-6 sm:p-10 space-y-6">
          {/* Header Typography & Culturally Grounded Credential Badges */}
          <div className="space-y-3.5 max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-2 bg-white/90 backdrop-blur rounded-full pl-2 pr-4 py-1.5 border border-slate-200/80 shadow-xs">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0d9488] text-white">
                <BadgeCheck className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold text-teal-900">
                {currentLang === 'en'
                  ? 'Written & Curated by Gujarat Institute of Mental Health'
                  : currentLang === 'hi'
                    ? ' द्वारा लिखित व संकलित'
                    : ' દ્વારા લિખિત અને સંકલિત'}
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                {currentLang === 'en'
                  ? 'Psychiatry resident · Public education'
                  : currentLang === 'hi'
                    ? 'मनोचिकित्सा रेज़िडेंट · जन-जागरूकता'
                    : 'મનોચિકિત્સા રેસિડેન્ટ · જાહેર શિક્ષણ'}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                {t.home.heroTagline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-900 border border-teal-200/80 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                {currentLang === 'en' ? 'Evidence-Based Public Education' : currentLang === 'hi' ? 'प्रमाण-आधारित जन शिक्षा' : 'પુરાવા-આધારિત જાહેર શિક્ષણ'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              {t.home.heroTitle}
            </h1>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {t.home.heroDescription}
            </p>

            {/* In-hero search module */}
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200/80 shadow-xs p-2 space-y-1.5">
              <button
                onClick={onOpenSearch}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer text-left min-h-[44px]"
                aria-label={t.search.placeholder}
              >
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <span className="flex-1 text-sm text-slate-400 truncate">
                  {t.search.placeholder}
                </span>
                <span className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-xs font-bold shrink-0">
                  <span>{currentLang === 'en' ? 'Explore' : currentLang === 'hi' ? 'खोजें' : 'શોધો'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
              <div className="flex flex-wrap items-center gap-1.5 px-2 pb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {currentLang === 'en' ? 'Suggested:' : currentLang === 'hi' ? 'सुझाव:' : 'સૂચન:'}
                </span>
                {[
                  { en: 'Tele-MANAS', hi: 'टेली-मानस', gu: 'ટેલી-માનસ' },
                  { en: 'Depression', hi: 'डिप्रेशन', gu: 'ડિપ્રેશન' },
                  { en: 'Anxiety', hi: 'चिंता', gu: 'ચિંતા' },
                  { en: 'Sleep', hi: 'नींद', gu: 'ઊંઘ' },
                ].map((tag) => (
                  <button
                    key={tag.en}
                    onClick={onOpenSearch}
                    className="px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-800 text-xs font-medium transition-colors cursor-pointer min-h-[36px]"
                  >
                    {tag[currentLang]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Central Vivid Visual Moment: shader canvas is the backdrop (PortalHeroVisual removed to avoid stacking) */}

          {/* Crisis quick-dial drawer */}
          <div className="aurora-crisis-card rounded-2xl bg-[#ffdad6] p-5 sm:p-6 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5 max-w-2xl">
              <span className="w-12 h-12 rounded-xl bg-[#ba1a1a] text-white flex items-center justify-center shrink-0 shadow-sm" aria-hidden="true">
                <Siren className="w-6 h-6" />
              </span>
              <div>
                <p className="font-bold text-[#93000a] flex items-center gap-2">
                  {currentLang === 'en'
                    ? 'Need Urgent Help Right Now?'
                    : currentLang === 'hi'
                      ? 'तुरंत मदद चाहिए?'
                      : 'તાત્કાલિક મદદ જોઈએ છે?'}
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ba1a1a] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ba1a1a]" />
                  </span>
                </p>
                <p className="text-sm text-[#93000a]/90 leading-relaxed mt-1">
                  {currentLang === 'en'
                    ? 'Calling is 100% free, confidential and anonymous. Reaching out is the first courageous step toward safety.'
                    : currentLang === 'hi'
                      ? 'कॉल 100% निःशुल्क और गोपनीय है। मदद मांगना सुरक्षा की ओर पहला साहसिक कदम है।'
                      : 'કૉલ ૧૦૦% વિનામૂલ્યે અને ગુપ્ત છે. મદદ માંગવી એ સલામતી તરફનું પ્રથમ હિંમતભર્યું પગલું છે.'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full lg:w-auto lg:min-w-[420px]">
              <a
                href="tel:14416"
                className="flex items-center justify-between gap-4 bg-white hover:bg-[#93000a] hover:text-white px-4 py-2.5 rounded-xl shadow-sm text-slate-900 transition-colors group min-h-[56px]"
              >
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-white/70">
                    {currentLang === 'en' ? 'Govt 24/7 Toll-Free' : currentLang === 'hi' ? 'सरकारी 24/7 निःशुल्क' : 'સરકારી 24/7 વિનામૂલ્યે'}
                  </span>
                  <span className="font-bold text-[#ba1a1a] group-hover:text-white">
                    Tele-MANAS · 14416
                  </span>
                </span>
                <PhoneCall className="w-5 h-5 text-[#ba1a1a] group-hover:text-white shrink-0" />
              </a>
              <a
                href="tel:18005990019"
                className="flex items-center justify-between gap-4 bg-white hover:bg-[#93000a] hover:text-white px-4 py-2.5 rounded-xl shadow-sm text-slate-900 transition-colors group min-h-[56px]"
              >
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-white/70">
                    {currentLang === 'en' ? 'DEPwD Govt of India' : currentLang === 'hi' ? 'भारत सरकार (DEPwD)' : 'ભારત સરકાર (DEPwD)'}
                  </span>
                  <span className="font-bold group-hover:text-white">
                    KIRAN · 1800-599-0019
                  </span>
                </span>
                <Phone className="w-5 h-5 text-teal-700 group-hover:text-white shrink-0" />
              </a>
              <a
                href="tel:112"
                className="flex items-center justify-between gap-4 bg-white hover:bg-[#93000a] hover:text-white px-4 py-2.5 rounded-xl shadow-sm text-slate-900 transition-colors group min-h-[56px]"
              >
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-white/70">
                    {currentLang === 'en' ? 'Acute Emergency' : currentLang === 'hi' ? 'गंभीर आपातकाल' : 'ગંભીર ઇમરજન્સી'}
                  </span>
                  <span className="font-bold group-hover:text-white">
                    National SOS · 112
                  </span>
                </span>
                <Siren className="w-5 h-5 text-[#ba1a1a] group-hover:text-white shrink-0" />
              </a>
              <a
                href="tel:+919999666555"
                className="flex items-center justify-between gap-4 bg-white hover:bg-[#93000a] hover:text-white px-4 py-2.5 rounded-xl shadow-sm text-slate-900 transition-colors group min-h-[56px]"
              >
                <span className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 group-hover:text-white/70">
                    {currentLang === 'en' ? 'Crisis Counseling NGO' : currentLang === 'hi' ? 'संकट परामर्श NGO' : 'સંકટ પરામર્શ NGO'}
                  </span>
                  <span className="font-bold group-hover:text-white">
                    Vandrevala · 9999 666 555
                  </span>
                </span>
                <HeartHandshake className="w-5 h-5 text-violet-700 group-hover:text-white shrink-0" />
              </a>
            </div>
          </div>
          <button
            onClick={onOpenCrisis}
            className="text-xs font-bold text-rose-900 hover:bg-rose-100/90 border border-rose-200/70 rounded-lg px-3.5 py-2 transition-colors min-h-[44px] inline-flex items-center cursor-pointer"
          >
            {currentLang === 'en' ? 'More helplines & safety guide →' : currentLang === 'hi' ? 'अन्य हेल्पलाइन व सुरक्षा मार्गदर्शिका →' : 'વધુ હેલ્પલાઇન અને સલામતી માર્ગદર્શિકા →'}
          </button>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onTabChange('conditions')}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0d9488] to-[#0f766e] hover:from-[#0f766e] hover:to-[#042f2e] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.97]"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.home.exploreConditions}</span>
            </button>

            <button
              onClick={onOpenScreener}
              className="px-5 py-2.5 rounded-lg bg-white/95 hover:bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-300 shadow-2xs hover:shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.97]"
            >
              <Activity className="w-4 h-4 text-teal-600" />
              <span>{currentLang === 'en' ? 'Self-Reflection Tools' : currentLang === 'hi' ? 'आत्म-मूल्यांकन (PHQ-9 / GAD-7)' : 'આત્મ-મૂલ્યાંકન ટૂલ'}</span>
            </button>

            <button
              onClick={onOpenSearch}
              className="px-4 py-2.5 rounded-lg bg-white/95 hover:bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200 shadow-2xs hover:shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer min-h-[44px] active:scale-[0.97]"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>{currentLang === 'en' ? 'Search All Topics' : currentLang === 'hi' ? 'विषय खोजें' : 'બધા વિષયો શોધો'}</span>
            </button>
          </div>

          {/* Trust pillars */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 text-slate-700 text-xs font-semibold border border-slate-200/70 shadow-xs">
              <Globe className="w-4 h-4 text-teal-600" />
              {currentLang === 'en' ? '100% Free & Open Access' : currentLang === 'hi' ? '100% निःशुल्क व खुला' : '૧૦૦% વિનામૂલ્યે અને ખુલ્લું'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 text-slate-700 text-xs font-semibold border border-slate-200/70 shadow-xs">
              <Scale className="w-4 h-4 text-teal-600" />
              {currentLang === 'en' ? 'Mental Healthcare Act 2017 Compliant' : currentLang === 'hi' ? 'मानसिक स्वास्थ्य अधिनियम 2017 अनुरूप' : 'માનસિક આરોગ્ય ધારો 2017 અનુરૂપ'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 text-slate-700 text-xs font-semibold border border-slate-200/70 shadow-xs">
              <Languages className="w-4 h-4 text-teal-600" />
              {currentLang === 'en' ? 'English, हिंदी & ગુજરાતી' : currentLang === 'hi' ? 'अंग्रेजी, हिंदी व गुजराती में' : 'અંગ્રેજી, હિંદી અને ગુજરાતીમાં'}
            </span>
          </div>
        </div>
      </HeroGeometric>

      {/* Core Philosophy Banner */}
      <section className="aurora-story-panel p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-300 space-y-2">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-teal-700" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              {t.home.corePhilosophy}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.home.corePhilosophyDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Myth of the Day: Daily Shareable Destigmatization */}
      <MythOfTheDay
        currentLang={currentLang}
        onNavigateToMyths={() => onTabChange('myths')}
      />

      {/* Primary Educational Libraries Grid: Intentional, cohesive wayfinding icons */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight">
            <AnnotatedText variant="highlight" color="text-amber-300/70" delay={0.2}>
              {currentLang === 'en' ? 'Educational Libraries' : currentLang === 'hi' ? 'शैक्षणिक विषय श्रेणियां' : 'શૈક્ષણિક વિષય શ્રેણીઓ'}
            </AnnotatedText>
          </h2>
          <p className="text-sm text-stone-600">
            {currentLang === 'en'
              ? 'Evidence-based psychiatric knowledge written in accessible language.'
              : currentLang === 'hi'
              ? ' द्वारा तैयार वैज्ञानिक और प्रमाण-आधारित मानसिक स्वास्थ्य ज्ञान'
              : ' દ્વારા તૈયાર કરાયેલ વૈજ્ઞાનિક અને પુરાવા-આધારિત શિક્ષણ'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Conditions */}
          <div
            onClick={() => onTabChange('conditions')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#0d9488] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <Brain className="w-5 h-5 text-[#0d9488]" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                {t.nav.conditions}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Comprehensive guides on Depression, Bipolar, Anxiety, OCD, Schizophrenia, PTSD, and Geriatric Psychiatry.'
                  : currentLang === 'hi'
                  ? 'डिप्रेशन, बायपोलर, चिंता, ओसीडी, सिज़ोफ्रेनिया और बुजुर्गों की मानसिक समस्याओं की विस्तृत समझ।'
                  : 'ડિપ્રેશન, બાયપોલર, ચિંતા, ઓસીડી, સિઝોફ્રેનિયા અને વડીલોના માનસિક રોગોની સંપૂર્ણ માહિતી.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
              <span>{currentLang === 'en' ? 'Browse Conditions' : currentLang === 'hi' ? 'बीमारियां देखें' : 'બીમારીઓ જુઓ'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card: Child & Adolescent Mental Health */}
          <div
            onClick={() => onTabChange('child-psychiatry')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#0284c7] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 border border-sky-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <GraduationCap className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-sky-700 transition-colors">
                {t.nav.childPsychiatry}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Evidence-based guidance for parents & teachers: ADHD, Autism, Exam Anxiety, Learning, Tech Overuse & School Refusal.'
                  : currentLang === 'hi'
                  ? 'माता-पिता व शिक्षकों हेतु मार्गदर्शन: एडीएचडी, ऑटिज्म, परीक्षा तनाव, सीखने के विकार और मोबाइल की लत।'
                  : 'માતા-પિતા અને શિક્ષકો માટે માર્ગદર્શન: ADHD, ઓટિઝમ, પરીક્ષાનો ડર, સ્કૂલ જવાનો ડર અને મોબાઈલની લત.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
              <span>{currentLang === 'en' ? 'Child Psychiatry Guide' : currentLang === 'hi' ? 'बाल मनोरोग मार्गदर्शिका' : 'બાળ મનોચિકિત્સા માર્ગદર્શિકા'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card: Women's Mental Health */}
          <div
            onClick={() => onTabChange('womens-mental-health')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#db2777] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-pink-50 text-pink-700 border border-pink-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <Heart className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-pink-700 transition-colors">
                {t.nav.womensMentalHealth}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Perinatal depression, postpartum psychosis, PMDD, perimenopause, PCOS, caregiver burden, and gender-informed care.'
                  : currentLang === 'hi'
                  ? 'प्रसवोत्तर अवसाद, पीएमडीडी, रजोनिवृत्ति (मेनोपॉज), पीसीओएस और महिलाओं के विशिष्ट मानसिक स्वास्थ्य की समझ।'
                  : 'ગર્ભાવસ્થા અને પ્રસૂતિ પછીનું ડિપ્રેશન, PMDD, મેનોપોઝ, PCOS અને મહિલા માનસિક સ્વાસ્થ્ય માર્ગદર્શન.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-pink-700">
              <span>{currentLang === 'en' ? "Women's Health Guide" : currentLang === 'hi' ? 'महिला स्वास्थ्य मार्गदर्शिका' : 'મહિલા સ્વાસ્થ્ય માર્ગદર્શિકા'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 2: Addiction */}
          <div
            onClick={() => onTabChange('addiction')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#ea580c] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-800 border border-orange-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-orange-700 transition-colors">
                {t.nav.addiction}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Understanding addiction as a brain disease. Overdose first aid, alcohol, nicotine, cannabis, and opioids.'
                  : currentLang === 'hi'
                  ? 'नशा मस्तिष्क की बीमारी क्यों है? शराब, तंबाकू, गांजा व अफीम के दुष्प्रभाव, विड्रॉल व ओवरडोज सुरक्षा।'
                  : 'વ્યસન મગજનો રોગ કેમ છે? દારૂ, તમાકુ, ગાંજો અને ઓપિયોઇડ્સથી મુક્તિના તબીબી ઉપાયો.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-orange-700">
              <span>{currentLang === 'en' ? 'De-Addiction Medicine' : currentLang === 'hi' ? 'नशा मुक्ति मार्गदर्शन' : 'વ્યસન મુક્તિ માર્ગદર્શન'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 4: Treatments */}
          <div
            onClick={() => onTabChange('treatments')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#059669] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <HeartPulse className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                {t.nav.treatments}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Evidence-based psychotherapies: CBT, ERP for OCD, DBT, Supportive Counseling, and Family Therapy.'
                  : currentLang === 'hi'
                  ? 'मनोवैज्ञानिक थेरेपी: सीबीटी (CBT), ईआरपी (ERP), डीबीटी (DBT), पारिवारिक और युगल थेरेपी।'
                  : 'સાયકોથેરાપી: CBT, ERP, DBT, ફેમિલી થેરાપી અને કાઉન્સેલિંગની વૈજ્ઞાનિક પદ્ધતિઓ.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>{currentLang === 'en' ? 'Explore Therapies' : currentLang === 'hi' ? 'थेरेपी विधियां' : 'થેરાપી પદ્ધતિઓ'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 5: Myths */}
          <div
            onClick={() => onTabChange('myths')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#8b5cf6] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-800 border border-purple-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <HelpCircle className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-700 transition-colors">
                {t.nav.myths}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Debunking 10 harmful myths: willpower, medication addiction, split personality, and psychiatric stigma.'
                  : currentLang === 'hi'
                  ? '10 बड़ी भ्रांतियां बनाम सच: "कमजोरी", "दवाओं की लत", "पागलपन", और सिज़ोफ्रेनिया का सच।'
                  : '૧૦ મોટી ગેરમાન્યતાઓ સામે વૈજ્ઞાનિક સત્ય: માનસિક રોગ, નશો અને સામાજિક કલંક.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
              <span>{currentLang === 'en' ? 'Bust Mental Health Myths' : currentLang === 'hi' ? 'भ्रांतियां दूर करें' : 'માન્યતાઓ તપાસો'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 6: Caregivers */}
          <div
            onClick={() => onTabChange('caregivers')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#d97706] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-700 transition-colors">
                {t.nav.caregivers}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Practical communication guidance for families: what to say, what to avoid, preventing relapse and caregiver burnout.'
                  : currentLang === 'hi'
                  ? 'परिवारों के लिए जरूरी सलाह: क्या कहें और क्या न कहें, घर में तनाव घटाना और देखभालकर्ताओं का स्वास्थ्य।'
                  : 'પરિવાર માટે માર્ગદર્શન: શું કહેવું અને શું ન કહેવું, ક્લેશ ઘટાડવો અને વડીલોની સંભાળ.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>{currentLang === 'en' ? 'Caregiver Guidance' : currentLang === 'hi' ? 'देखभालकर्ताओं की मदद' : 'સંભાળ રાખનાર માટે'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 7: Clinical Articles */}
          <div
            onClick={() => onTabChange('articles')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#4f46e5] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-800 border border-indigo-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <FileText className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-700 transition-colors">
                {t.nav.articles}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'In-depth clinical essays on first psychiatric appointments, depression vs grief, and youth digital habits.'
                  : currentLang === 'hi'
                  ? 'मनोरोग विशेषज्ञ द्वारा लिखित विस्तृत लेख: पहली बार डॉक्टर से मिलना, डिप्रेशन बनाम उदासी, और युवाओं में तनाव।'
                  : 'પ્રથમ મુલાકાત, ડિપ્રેશન વિરુદ્ધ દુઃખ અને યુવાનોના માનસિક સ્વાસ્થ્ય પર ઊંડાણપૂર્વકના લેખો.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
              <span>{currentLang === 'en' ? 'Read Articles' : currentLang === 'hi' ? 'लेख पढ़ें' : 'લેખો વાંચો'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 8: Helplines & Resources */}
          <div
            onClick={() => onTabChange('resources')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#2563eb] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-800 border border-blue-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                {t.nav.resources}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Verified national directory: Tele-MANAS (14416), ERSS 112, NIMHANS, AIIMS, and hospital crisis services.'
                  : currentLang === 'hi'
                  ? 'प्रमाणित राष्ट्रीय हेल्पलाइन डायरेक्टरी: टेली-मानस (14416), 112, निमहंस और प्रमुख सरकारी सहायता केंद्र।'
                  : 'પ્રમાણિત રાષ્ટ્રીય હેલ્પલાઇન ડિરેક્ટરી: ટેલી-માનસ (૧૪૪૧૬), ૧૧૨ અને સરકારી હોસ્પિટલો.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
              <span>{currentLang === 'en' ? 'Directory of Helplines' : currentLang === 'hi' ? 'हेल्पलाइन देखें' : 'હેલ્પલાઇન જુઓ'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>

          {/* Card 9: Outreach Materials */}
          <div
            onClick={() => onTabChange('outreach')}
            className="aurora-card p-6 rounded-xl border border-slate-200/90 border-t-[3.5px] border-t-[#059669] bg-white/95 backdrop-blur-md shadow-2xs hover:shadow-lg hover:-translate-y-0.5 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer flex flex-col justify-between group active:scale-[0.98]"
          >
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center justify-center shadow-2xs group-hover:scale-[1.03] transition-transform duration-200 ease-out">
                <Printer className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                {t.nav.outreach}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'Printable clinic flyers and noticeboard posters with QR codes for waiting rooms and community outreach.'
                  : currentLang === 'hi'
                  ? 'क्लीनिक, अस्पतालों और कम्युनिटी सेंटर के लिए प्रिंटेबल नोटिस और क्यूआर कोड सामग्री।'
                  : 'વેઇટિંગ રૂમ અને ક્લિનિક માટે પ્રિન્ટ કરી શકાય તેવા પોસ્ટર અને ક્યૂઆર કોડ સાહિત્ય.'}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>{currentLang === 'en' ? 'Printable Posters' : currentLang === 'hi' ? 'पोस्टर व क्यूआर' : 'પોસ્ટર અને ક્યૂઆર'}</span>
              <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#0d9488] group-hover:text-white flex items-center justify-center transition-colors"><ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Self-Reflection Banner (PHQ-9 / GAD-7) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50/70 via-white to-sky-50/60 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-sm transition-shadow">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
            {currentLang === 'en' ? 'Non-Diagnostic Reflection' : currentLang === 'hi' ? 'आत्म-अवलोकन' : 'આત્મ-મૂલ્યાંકન'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {currentLang === 'en'
              ? 'Educational Symptom Reflection (PHQ-9 & GAD-7)'
              : currentLang === 'hi'
              ? 'डिप्रेशन व चिंता लक्षण आत्म-अवलोकन (PHQ-9 व GAD-7)'
              : 'ડિપ્રેશન અને ચિંતાના લક્ષણોનું આત્મ-મૂલ્યાંકન'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentLang === 'en'
              ? 'Standardized psychological questionnaires used for education and tracking. Learn what your symptoms may signify and how to discuss them with a doctor.'
              : currentLang === 'hi'
              ? 'प्रश्नावली की सहायता से समझें कि आपके लक्षण क्या संकेत दे रहे हैं और डॉक्टर से इस विषय में कैसे बात करें।'
              : 'પ્રશ્નાવલિની મદદથી સમજો કે તમારા લક્ષણો શું દર્શાવે છે અને ડૉક્ટર સાથે કેવી રીતે ચર્ચા કરવી.'}
          </p>
        </div>

        <button
          onClick={onOpenScreener}
          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0d9488] to-[#0f766e] hover:from-[#0f766e] hover:to-[#042f2e] text-white font-bold text-sm shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 shrink-0 flex items-center gap-2 cursor-pointer min-h-[44px]"
        >
          <span>{currentLang === 'en' ? 'Start Reflection Tool' : currentLang === 'hi' ? 'टूल शुरू करें' : 'ટૂલ શરૂ કરો'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Eye-catching condition spotlight */}
      <ConditionSpotlight
        currentLang={currentLang}
        conditions={conditionSpotlightData}
        onSelectCondition={onSelectCondition}
        onTabChange={onTabChange as (tab: 'conditions') => void}
      />

      {/* Install App as Offline PWA Banner */}
      <PWAInstallButton currentLang={currentLang} variant="banner" />

      {/* About Gujarat Institute of Mental Health Snippet */}
      <section className="aurora-story-panel p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start gap-6 transition-shadow">
        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-teal-200/70 shadow-xs overflow-hidden">
          <img src="/mindcare-logo.svg" alt="MindCare logo" className="w-14 h-14 object-contain" width={56} height={56} />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">{t.doctorName}</h3>
            <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-semibold border border-teal-200/70">
              {currentLang === 'en' ? 'Public Mental Health Education · Gujarat' : currentLang === 'hi' ? 'जन मानसिक स्वास्थ्य शिक्षा · गुजरात' : 'જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ · ગુજરાત'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {currentLang === 'en'
              ? 'This portal shares general mental-health education in English, Hindi, and Gujarati. It does not provide personal diagnoses, consultations, or prescriptions.'
              : currentLang === 'hi'
              ? 'यह पोर्टल अंग्रेज़ी, हिंदी और गुजराती में सामान्य मानसिक स्वास्थ्य शिक्षा प्रदान करता है। यह व्यक्तिगत निदान, परामर्श या दवा के पर्चे नहीं देता।'
              : 'આ પોર્ટલ અંગ્રેજી, હિન્દી અને ગુજરાતીમાં સામાન્ય માનસિક સ્વાસ્થ્ય શિક્ષણ આપે છે. તે વ્યક્તિગત નિદાન, પરામર્શ કે દવાનું પ્રિસ્ક્રિપ્શન આપતું નથી.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onTabChange('about')}
              className="text-xs font-semibold text-[#115e59] hover:underline cursor-pointer min-h-[44px] flex items-center"
            >
              {currentLang === 'en' ? 'Read About Mindcare and its educational scope' : currentLang === 'hi' ? 'Mindcare और इसके शैक्षिक उद्देश्य के बारे में पढ़ें' : 'Mindcare અને તેના શૈક્ષણિક હેતુ વિશે વાંચો'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};



