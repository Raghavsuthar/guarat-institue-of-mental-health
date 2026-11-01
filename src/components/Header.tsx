import React from 'react';
import { Search, Menu, X, BadgeCheck } from 'lucide-react';
import { Language, ActiveTab } from '../types';
import { translations, siteMetadata } from '../data/translations';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenSearch: () => void;
  onOpenCrisis?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const t = translations[currentLang];

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'conditions', label: t.nav.conditions },
    { id: 'child-psychiatry', label: t.nav.childPsychiatry },
    { id: 'womens-mental-health', label: t.nav.womensMentalHealth },
    { id: 'addiction', label: t.nav.addiction },
    { id: 'treatments', label: t.nav.treatments },
    { id: 'symptoms', label: t.nav.symptoms },
    { id: 'myths', label: t.nav.myths },
    { id: 'caregivers', label: t.nav.caregivers },
    { id: 'interactive', label: t.nav.interactive },
    { id: 'articles', label: t.nav.articles },
    { id: 'resources', label: t.nav.resources },
    { id: 'emergency', label: t.nav.emergency },
    { id: 'outreach', label: t.nav.outreach },
    { id: 'about', label: t.nav.about },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="aurora-header sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 shadow-xs">
      {/* Crisis triage strip */}
      <div className="aurora-crisis-strip w-full bg-[#ffdad6] px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs font-semibold text-[#93000a]">
          <span className="inline-flex items-center gap-1.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ba1a1a]" />
            </span>
            {currentLang === 'en'
              ? 'In crisis or having thoughts of self-harm?'
              : currentLang === 'hi'
                ? 'संकट में हैं या खुद को नुकसान के विचार आ रहे हैं?'
                : 'સંકટમાં છો કે પોતાને નુકસાનના વિચારો આવે છે?'}
          </span>
          <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              {currentLang === 'en' ? 'Tele-MANAS (24/7 Toll-Free):' : currentLang === 'hi' ? 'टेली-मानस (24/7 निःशुल्क):' : 'ટેલી-માનસ (24/7 વિનામૂલ્યે):'}
              <a href="tel:14416" className="ml-1.5 bg-[#ba1a1a] text-white px-2.5 py-0.5 rounded-full font-bold hover:bg-[#93000a] transition-colors">
                14416
              </a>
            </span>
            <span>
              {currentLang === 'en' ? 'Emergency:' : currentLang === 'hi' ? 'आपातकाल:' : 'ઇમરજન્સી:'}
              <a href="tel:112" className="ml-1 font-bold underline hover:text-[#ba1a1a] transition-colors">
                112
              </a>
            </span>
            <a href="tel:18005990019" className="hidden sm:inline font-bold underline hover:text-[#ba1a1a] transition-colors">
              Kiran: 1800-599-0019
            </a>
          </span>
        </div>
      </div>
      {/* Visual Identity Fine Top Accent: Radiant Emerald to Surya Gold to Twilight Iris */}
      <div className="h-[3.5px] w-full bg-gradient-to-r from-[#245b4a] via-[#d6a85f] to-[#8aa995] shadow-xs" aria-hidden="true" />

      {/* Main Brand & Controls Header */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none cursor-pointer py-0.5 sm:py-1 group"
        >
          <div className="flex items-center gap-2.5">
            <img
              src="/mindcare-logo.svg"
              alt="MindCare — Gujarat Institute of Mental Health"
              className="h-10 w-auto sm:h-12 shrink-0"
              width={96}
              height={24}
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-teal-700 transition-colors leading-tight">
                {t.doctorName}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-600 font-normal leading-tight">
                {siteMetadata.tagline[currentLang]}
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-teal-50/90 text-teal-800 font-semibold border border-teal-200/80 shadow-2xs tracking-wide whitespace-nowrap">
              <BadgeCheck className="w-3.5 h-3.5 text-teal-600" />
              {currentLang === 'en' ? 'Public Mental Health Education' : currentLang === 'hi' ? 'जन मानसिक स्वास्थ्य शिक्षा' : 'જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ'}
            </span>
          </div>
        </button>

        {/* Action Controls: Search, PWA Install, Language Switcher, Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Button: 44px tap target */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 active:scale-[0.97] text-sm border border-slate-200 hover:border-teal-400/60 transition cursor-pointer min-h-[44px] shadow-2xs"
            title={t.search.placeholder}
            aria-label={`${currentLang === 'en' ? 'Search topics' : currentLang === 'hi' ? 'खोजें...' : 'શોધો...'} — ${t.search.placeholder}`}
          >
            <Search className="w-4 h-4 text-teal-600" />
            <span className="hidden sm:inline text-xs text-slate-700 font-medium">
              {currentLang === 'en' ? 'Search topics' : currentLang === 'hi' ? 'खोजें...' : 'શોધો...'}
            </span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-slate-500 rounded border border-slate-200 shadow-2xs">
              /
            </kbd>
          </button>

          {/* PWA Install Button */}
          <PWAInstallButton currentLang={currentLang} variant="button" />

          {/* Language Switcher: 44px min tap targets */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-full border border-slate-200" role="group" aria-label="Language selection">
            <button
              onClick={() => onLanguageChange('en')}
              aria-pressed={currentLang === 'en'}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                currentLang === 'en'
                  ? 'bg-[#0f766e] text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 active:scale-[0.97]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              aria-pressed={currentLang === 'hi'}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                currentLang === 'hi'
                  ? 'bg-[#0f766e] text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 active:scale-[0.97]'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => onLanguageChange('gu')}
              aria-pressed={currentLang === 'gu'}
              className={`px-3 py-2 text-xs font-semibold rounded-md transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                currentLang === 'gu'
                  ? 'bg-[#0f766e] text-white shadow-xs font-bold'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 active:scale-[0.97]'
              }`}
            >
              ગુજરાતી
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-primary-navigation"
            className="lg:hidden p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shadow-2xs"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Bar: Horizontal, clear radiant text */}
      <nav className="hidden lg:block border-t border-slate-200/80 bg-slate-50/75 backdrop-blur-xs px-4" aria-label="Primary Navigation">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto py-1 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3.5 py-2 rounded-md transition-all whitespace-nowrap cursor-pointer min-h-[44px] flex items-center text-xs sm:text-sm ${
                  isActive
                    ? 'text-teal-900 font-bold bg-white shadow-xs border-b-2 border-[#0d9488]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 active:scale-[0.97]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer Menu: Large tap targets with full scrollability in landscape and portrait */}
      {mobileMenuOpen && (
        <div
          id="mobile-primary-navigation"
          className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200 px-4 py-2 sm:py-3 space-y-1 max-h-[calc(100dvh-3.5rem)] sm:max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain shadow-xl"
          style={{ WebkitOverflowScrolling: 'touch' }}
          role="menu"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full text-left px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition cursor-pointer min-h-[44px] sm:min-h-[48px] flex items-center ${
                  isActive
                    ? 'bg-teal-50/90 text-teal-800 font-bold border-l-4 border-[#0d9488] shadow-2xs'
                    : 'text-slate-800 hover:bg-slate-100/80 active:scale-[0.97]'
                }`}
                role="menuitem"
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};


