import React, { useState, useEffect, useMemo, useRef, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Phone, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Language,
  ActiveTab,
  Condition,
  SubstanceInfo,
  ChildAdolescentTopic,
  WomensMentalHealthTopic,
} from './types';
import { Header } from './components/Header';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';

// Views - Lazy load heavy views for code splitting (named exports mapped to default)
const HomeView = lazy(() => import('./views/HomeView').then(m => ({ default: m.HomeView })));
const ConditionsView = lazy(() => import('./views/ConditionsView').then(m => ({ default: m.ConditionsView })));
const ChildPsychiatryView = lazy(() => import('./views/ChildPsychiatryView').then(m => ({ default: m.ChildPsychiatryView })));
const WomensMentalHealthView = lazy(() => import('./views/WomensMentalHealthView').then(m => ({ default: m.WomensMentalHealthView })));
const AddictionView = lazy(() => import('./views/AddictionView').then(m => ({ default: m.AddictionView })));
const TreatmentsView = lazy(() => import('./views/TreatmentsView').then(m => ({ default: m.TreatmentsView })));
const MythsView = lazy(() => import('./views/MythsView').then(m => ({ default: m.MythsView })));
const SymptomsView = lazy(() => import('./views/SymptomsView').then(m => ({ default: m.SymptomsView })));
const CaregiversView = lazy(() => import('./views/CaregiversView').then(m => ({ default: m.CaregiversView })));
const InteractiveView = lazy(() => import('./views/InteractiveView').then(m => ({ default: m.InteractiveView })));
const EmergencyView = lazy(() => import('./views/EmergencyView').then(m => ({ default: m.EmergencyView })));
const ArticlesView = lazy(() => import('./views/ArticlesView').then(m => ({ default: m.ArticlesView })));
const ResourcesView = lazy(() => import('./views/ResourcesView').then(m => ({ default: m.ResourcesView })));
const OutreachView = lazy(() => import('./views/OutreachView').then(m => ({ default: m.OutreachView })));
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const PrivacyTermsView = lazy(() => import('./views/PrivacyTermsView').then(m => ({ default: m.PrivacyTermsView })));
const AdminAnalyticsView = lazy(() => import('./views/AdminAnalyticsView').then(m => ({ default: m.AdminAnalyticsView })));
const SearchModal = lazy(() => import('./components/SearchModal').then((m) => ({ default: m.SearchModal })));
const CrisisModal = lazy(() => import('./components/CrisisModal').then((m) => ({ default: m.CrisisModal })));
const ScreenerModal = lazy(() => import('./components/ScreenerModal').then((m) => ({ default: m.ScreenerModal })));
const ConditionDetailModal = lazy(() => import('./components/ConditionDetailModal').then((m) => ({ default: m.ConditionDetailModal })));
const SubstanceDetailModal = lazy(() => import('./components/SubstanceDetailModal').then((m) => ({ default: m.SubstanceDetailModal })));
const ChildPsychiatryModal = lazy(() => import('./components/ChildPsychiatryModal').then((m) => ({ default: m.ChildPsychiatryModal })));
const WomensMentalHealthModal = lazy(() => import('./components/WomensMentalHealthModal').then((m) => ({ default: m.WomensMentalHealthModal })));
import { EducationalQAAssistant } from './components/EducationalQAAssistant';

// Data for deep linking lookups
import { recordPageView } from './utils/analytics';

const VALID_LANGS: Language[] = ['en', 'hi', 'gu'];

// Skeleton loader for lazy-loaded views
function PageSkeleton() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]" role="status" aria-label="Loading page">
      <div className="text-center space-y-3">
        <div className="w-10 h-10 border-3 border-teal-500/30 border-t-teal-500 rounded-full animate-spin mx-auto" />
        <p className="text-sm text-slate-500">Loading…</p>
      </div>
    </div>
  );
}

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem('_lang');
    if (saved === 'hi' || saved === 'gu' || saved === 'en') return saved;
  } catch {
    // ignore
  }
  return 'en';
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current language from URL (e.g. /en/..., /hi/..., /gu/...)
  const pathParts = location.pathname.split('/').filter(Boolean);
  const urlLang = pathParts[0] as Language | undefined;
  const currentLang: Language = VALID_LANGS.includes(urlLang as Language)
    ? (urlLang as Language)
    : getInitialLanguage();

  // Save detected lang to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('_lang', currentLang);
    } catch {
      // ignore
    }
  }, [currentLang]);

  // Record aggregate, privacy-first page view
  useEffect(() => {
    recordPageView(location.pathname, currentLang);
  }, [location.pathname, currentLang]);

  // Determine active tab from URL path
  const activeTab: ActiveTab = useMemo(() => {
    const section = pathParts[1] || 'home';
    if (section === 'conditions') return 'conditions';
    if (section === 'child-psychiatry') return 'child-psychiatry';
    if (section === 'womens-mental-health') return 'womens-mental-health';
    if (section === 'addiction' || section === 'substances') return 'addiction';
    if (section === 'medications') return 'treatments';
    if (section === 'treatments') return 'treatments';
    if (section === 'symptoms') return 'symptoms';
    if (section === 'myths') return 'myths';
    if (section === 'caregivers') return 'caregivers';
    if (section === 'interactive') return 'interactive';
    if (section === 'emergency') return 'emergency';
    if (section === 'articles') return 'articles';
    if (section === 'resources') return 'resources';
    if (section === 'outreach') return 'outreach';
    if (section === 'about') return 'about';
    return 'home';
  }, [pathParts]);

  // Modal states
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCrisisOpen, setIsCrisisOpen] = useState(false);
  const [isScreenerOpen, setIsScreenerOpen] = useState(false);
  const [selectedScreenerId, setSelectedScreenerId] = useState('phq9');
  const handleOpenScreener = (toolId = 'phq9') => {
    setSelectedScreenerId(toolId);
    setIsScreenerOpen(true);
  };

  // Toast state for #floating-emergency-icon when already on emergency route
  const [showEmergencyToast, setShowEmergencyToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if user is currently on the emergency route
  const isEmergencyRoute = useMemo(() => {
    const normalized = location.pathname.toLowerCase();
    return (
      activeTab === 'emergency' ||
      pathParts[1] === 'emergency' ||
      normalized.endsWith('/emergency') ||
      normalized.includes('/emergency/')
    );
  }, [activeTab, pathParts, location.pathname]);

  // Clean up toast timer on unmount or route change
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isEmergencyRoute) {
      setShowEmergencyToast(false);
    }
  }, [isEmergencyRoute]);

  const handleFloatingEmergencyClick = () => {
    if (isEmergencyRoute) {
      // User is already in the emergency route:
      // Disable modal open action, scroll page to top, and show toast notification
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowEmergencyToast(true);

      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      toastTimeoutRef.current = setTimeout(() => {
        setShowEmergencyToast(false);
      }, 4000);
      return;
    }

    setIsCrisisOpen(true);
  };

  // Deep linking modal items derived from route params
  const conditionSlug = pathParts[1] === 'conditions' && pathParts[2] ? pathParts[2] : null;
  const childTopicSlug = pathParts[1] === 'child-psychiatry' && pathParts[2] ? pathParts[2] : null;
  const womensTopicSlug = pathParts[1] === 'womens-mental-health' && pathParts[2] ? pathParts[2] : null;
  const substanceSlug = pathParts[1] === 'substances' && pathParts[2] ? pathParts[2] : null;

  // Defer content collections until a URL actually needs a detail record.
  const [deepLinkedCondition, setDeepLinkedCondition] = useState<Condition | null>(null);
  const [deepLinkedChildTopic, setDeepLinkedChildTopic] = useState<ChildAdolescentTopic | null>(null);
  const [deepLinkedWomensTopic, setDeepLinkedWomensTopic] = useState<WomensMentalHealthTopic | null>(null);
  const [deepLinkedSubstance, setDeepLinkedSubstance] = useState<SubstanceInfo | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!conditionSlug) { setDeepLinkedCondition(null); return; }
    import('./data/conditions').then(({ conditionsData }) => {
      if (!cancelled) setDeepLinkedCondition(conditionsData.find((item) => item.slug === conditionSlug || item.id === conditionSlug) || null);
    }).catch(() => { if (!cancelled) setDeepLinkedCondition(null); });
    return () => { cancelled = true; };
  }, [conditionSlug]);

  useEffect(() => {
    let cancelled = false;
    if (!childTopicSlug) { setDeepLinkedChildTopic(null); return; }
    import('./data/childAdolescent').then(({ childAdolescentTopics }) => {
      if (!cancelled) setDeepLinkedChildTopic(childAdolescentTopics.find((item) => item.slug === childTopicSlug || item.id === childTopicSlug) || null);
    }).catch(() => { if (!cancelled) setDeepLinkedChildTopic(null); });
    return () => { cancelled = true; };
  }, [childTopicSlug]);

  useEffect(() => {
    let cancelled = false;
    if (!womensTopicSlug) { setDeepLinkedWomensTopic(null); return; }
    import('./data/womensMentalHealth').then(({ womensMentalHealthTopics }) => {
      if (!cancelled) setDeepLinkedWomensTopic(womensMentalHealthTopics.find((item) => item.slug === womensTopicSlug || item.id === womensTopicSlug) || null);
    }).catch(() => { if (!cancelled) setDeepLinkedWomensTopic(null); });
    return () => { cancelled = true; };
  }, [womensTopicSlug]);

  useEffect(() => {
    let cancelled = false;
    if (!substanceSlug) { setDeepLinkedSubstance(null); return; }
    import('./data/substances').then(({ substancesData }) => {
      if (!cancelled) setDeepLinkedSubstance(substancesData.find((item) => item.slug === substanceSlug || item.id === substanceSlug) || null);
    }).catch(() => { if (!cancelled) setDeepLinkedSubstance(null); });
    return () => { cancelled = true; };
  }, [substanceSlug]);

  // Language switcher: replaces the current /:lang prefix while maintaining remaining path
  const handleLanguageChange = (newLang: Language) => {
    try {
      localStorage.setItem('_lang', newLang);
    } catch {
      // ignore
    }

    if (VALID_LANGS.includes(urlLang as Language)) {
      const restOfPath = pathParts.slice(1).join('/');
      const newPath = `/${newLang}${restOfPath ? `/${restOfPath}` : ''}`;
      navigate(newPath);
    } else {
      navigate(`/${newLang}`);
    }
  };

  // Tab navigation
  const handleTabChange = (tab: ActiveTab) => {
    if (tab === 'home') {
      navigate(`/${currentLang}`);
    } else if ((tab as string) === 'medications') {
      navigate(`/${currentLang}/treatments`);
    } else {
      navigate(`/${currentLang}/${tab}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full flex flex-col bg-[#FAF9F5] text-slate-900 selection:bg-teal-200 selection:text-teal-950 radial-mesh-glow overflow-x-hidden relative">
      {/* Offline Status Warning when disconnected */}
      <OfflineIndicator currentLang={currentLang} />

      {/* Top Persistent Medical Disclaimer Banner */}
      <DisclaimerBanner currentLang={currentLang} />

      {/* Main Header & Navigation */}
      <Header
        currentLang={currentLang}
        activeTab={activeTab}
        onLanguageChange={handleLanguageChange}
        onTabChange={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCrisis={() => setIsCrisisOpen(true)}
      />

      {/* Main Body Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
          {/* Root redirect to language prefix */}
          <Route path="/" element={<Navigate to={`/${getInitialLanguage()}`} replace />} />

          {/* Language Root Routes */}
          <Route
            path="/:lang"
            element={
              <HomeView
                currentLang={currentLang}
                onTabChange={handleTabChange}
                onSelectCondition={(cond) => navigate(`/${currentLang}/conditions/${cond.slug}`)}
                onSelectSubstance={(sub) => navigate(`/${currentLang}/substances/${sub.slug || sub.id}`)}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
                onOpenScreener={handleOpenScreener}
              />
            }
          />

          {/* Conditions & Deep-linked Condition */}
          <Route
            path="/:lang/conditions"
            element={
              <ConditionsView
                currentLang={currentLang}
                onSelectCondition={(cond) => navigate(`/${currentLang}/conditions/${cond.slug}`)}
              />
            }
          />
          <Route
            path="/:lang/conditions/:slug"
            element={
              <ConditionsView
                currentLang={currentLang}
                onSelectCondition={(cond) => navigate(`/${currentLang}/conditions/${cond.slug}`)}
              />
            }
          />

          {/* Child & Adolescent Mental Health */}
          <Route
            path="/:lang/child-psychiatry"
            element={
              <ChildPsychiatryView
                currentLang={currentLang}
                onSelectTopic={(topic) => navigate(`/${currentLang}/child-psychiatry/${topic.slug || topic.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />
          <Route
            path="/:lang/child-psychiatry/:slug"
            element={
              <ChildPsychiatryView
                currentLang={currentLang}
                onSelectTopic={(topic) => navigate(`/${currentLang}/child-psychiatry/${topic.slug || topic.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />

          {/* Women's Mental Health & Deep-linked topic */}
          <Route
            path="/:lang/womens-mental-health"
            element={
              <WomensMentalHealthView
                currentLang={currentLang}
                onSelectTopic={(topic) => navigate(`/${currentLang}/womens-mental-health/${topic.slug || topic.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />
          <Route
            path="/:lang/womens-mental-health/:slug"
            element={
              <WomensMentalHealthView
                currentLang={currentLang}
                onSelectTopic={(topic) => navigate(`/${currentLang}/womens-mental-health/${topic.slug || topic.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />

          {/* Addiction & Deep-linked Substance */}
          <Route
            path="/:lang/addiction"
            element={
              <AddictionView
                currentLang={currentLang}
                onSelectSubstance={(sub) => navigate(`/${currentLang}/substances/${sub.slug || sub.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
                onNavigateResources={() => handleTabChange('resources')}
              />
            }
          />
          <Route
            path="/:lang/substances/:slug"
            element={
              <AddictionView
                currentLang={currentLang}
                onSelectSubstance={(sub) => navigate(`/${currentLang}/substances/${sub.slug || sub.id}`)}
                onOpenCrisis={() => setIsCrisisOpen(true)}
                onNavigateResources={() => handleTabChange('resources')}
              />
            }
          />

          {/* Medications - Redirect to Treatments */}
          <Route
            path="/:lang/medications"
            element={<Navigate to={`/${currentLang}/treatments`} replace />}
          />
          <Route
            path="/:lang/medications/:id"
            element={<Navigate to={`/${currentLang}/treatments`} replace />}
          />

          {/* Treatments */}
          <Route path="/:lang/treatments" element={<TreatmentsView currentLang={currentLang} />} />

          {/* Symptoms */}
          <Route path="/:lang/symptoms" element={<SymptomsView currentLang={currentLang} />} />

          {/* Myths */}
          <Route path="/:lang/myths" element={<MythsView currentLang={currentLang} />} />

          {/* Caregivers */}
          <Route path="/:lang/caregivers" element={<CaregiversView currentLang={currentLang} />} />

          {/* Interactive Screeners */}
          <Route
            path="/:lang/interactive"
            element={
              <InteractiveView
                currentLang={currentLang}
                onOpenScreener={handleOpenScreener}
                onOpenCrisis={() => setIsCrisisOpen(true)}
              />
            }
          />

          {/* Articles & Deep-linked Article */}
          <Route path="/:lang/articles" element={<ArticlesView currentLang={currentLang} />} />
          <Route path="/:lang/articles/:slug" element={<ArticlesView currentLang={currentLang} />} />

          {/* Resources & Helplines */}
          <Route path="/:lang/resources" element={<ResourcesView currentLang={currentLang} />} />

          {/* Outreach & Printable Flyers */}
          <Route path="/:lang/outreach" element={<OutreachView currentLang={currentLang} />} />

          {/* Emergency Helplines */}
          <Route path="/:lang/emergency" element={<EmergencyView currentLang={currentLang} />} />

          {/* Privacy notice and terms */}
          <Route path="/:lang/privacy" element={<PrivacyTermsView currentLang={currentLang} page="privacy" />} />
          <Route path="/:lang/terms" element={<PrivacyTermsView currentLang={currentLang} page="terms" />} />

          {/* About Gujarat Institute of Mental Health */}
          <Route path="/:lang/about" element={<AboutView currentLang={currentLang} />} />

          {/* Owner Analytics Portal (Password-protected, noindex) */}
          <Route path="/:lang/admin" element={<AdminAnalyticsView currentLang={currentLang} />} />
          <Route path="/admin" element={<Navigate to={`/${currentLang}/admin`} replace />} />

          {/* Fallback for un-prefixed or broken routes */}
          <Route path="*" element={<Navigate to={`/${getInitialLanguage()}`} replace />} />
        </Routes>
        </Suspense>
      </main>

      {/* Global dialogs load only when needed to keep their code out of the initial route chunk. */}
      <Suspense fallback={null}>
        {isSearchOpen && <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          currentLang={currentLang}
          onSelectCondition={(item) => navigate(`/${currentLang}/conditions/${item.slug}`)}
          onSelectSubstance={(item) => navigate(`/${currentLang}/substances/${item.slug || item.id}`)}
          onSelectChildTopic={(topic) => navigate(`/${currentLang}/child-psychiatry/${topic.slug || topic.id}`)}
          onSelectWomensTopic={(topic) => navigate(`/${currentLang}/womens-mental-health/${topic.slug || topic.id}`)}
          onNavigateTab={(tab) => handleTabChange(tab)}
        />}

        {isCrisisOpen && <CrisisModal
          isOpen={isCrisisOpen}
          onClose={() => setIsCrisisOpen(false)}
          currentLang={currentLang}
        />}

        {isScreenerOpen && <ScreenerModal
          isOpen={isScreenerOpen}
          onClose={() => setIsScreenerOpen(false)}
          currentLang={currentLang}
          initialToolId={selectedScreenerId}
          onOpenCrisis={() => {
            setIsScreenerOpen(false);
            setIsCrisisOpen(true);
          }}
        />}

        {deepLinkedCondition && <ConditionDetailModal
          condition={deepLinkedCondition}
          onClose={() => navigate(`/${currentLang}/conditions`)}
          currentLang={currentLang}
          onOpenCrisis={() => {
            navigate(`/${currentLang}/conditions`);
            setIsCrisisOpen(true);
          }}
        />}

        {deepLinkedChildTopic && <ChildPsychiatryModal
          topic={deepLinkedChildTopic}
          onClose={() => navigate(`/${currentLang}/child-psychiatry`)}
          currentLang={currentLang}
          onOpenCrisis={() => {
            navigate(`/${currentLang}/child-psychiatry`);
            setIsCrisisOpen(true);
          }}
        />}

        {deepLinkedWomensTopic && <WomensMentalHealthModal
          topic={deepLinkedWomensTopic}
          onClose={() => navigate(`/${currentLang}/womens-mental-health`)}
          currentLang={currentLang}
          onOpenCrisis={() => {
            navigate(`/${currentLang}/womens-mental-health`);
            setIsCrisisOpen(true);
          }}
        />}

        {deepLinkedSubstance && <SubstanceDetailModal
          substance={deepLinkedSubstance}
          onClose={() => navigate(`/${currentLang}/addiction`)}
          currentLang={currentLang}
        />}
      </Suspense>
      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onTabChange={handleTabChange}
        onOpenCrisis={() => setIsCrisisOpen(true)}
      />

      {/* Toast Notification when clicking emergency icon while already in Emergency route */}
      <AnimatePresence>
        {showEmergencyToast && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="status"
            aria-live="polite"
            className="fixed bottom-20 left-5 z-50 max-w-xs sm:max-w-sm bg-stone-900/95 backdrop-blur-xs text-white p-3.5 rounded-xl shadow-xl border border-stone-700/80 flex items-start gap-3"
          >
            <div className="p-1.5 rounded-lg bg-red-900/70 text-red-300 shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0 pr-1">
              <p className="text-xs font-semibold text-stone-100">
                {currentLang === 'en'
                  ? 'You are already in the Emergency Crisis Support section'
                  : currentLang === 'hi'
                  ? 'आप पहले से ही आपातकालीन संकट सहायता अनुभाग में हैं'
                  : 'તમે પહેલેથી જ ઇમરજન્સી સંકટ સહાય વિભાગમાં છો'}
              </p>
              <p className="text-[11px] text-stone-300 mt-0.5 leading-snug">
                {currentLang === 'en'
                  ? 'Scrolled to top. 24x7 toll-free crisis numbers and protocols are listed directly on this page.'
                  : currentLang === 'hi'
                  ? 'पृष्ठ ऊपर स्क्रॉल किया गया है। 24x7 टोल-फ्री संकट नंबर व दिशा-निर्देश सीधे इस पृष्ठ पर उपलब्ध हैं।'
                  : 'પેજ ઉપર સ્ક્રોલ કર્યું છે. ૨૪x૭ વિનામૂલ્યે હેલ્પલાઇન નંબરો અને પ્રોટોકોલ સીધા આ પેજ પર ઉપલબ્ધ છે.'}
              </p>
            </div>
            <button
              onClick={() => setShowEmergencyToast(false)}
              className="text-stone-400 hover:text-white p-1 rounded-md transition-colors shrink-0 cursor-pointer"
              aria-label={
                currentLang === 'en' ? 'Close notification' : currentLang === 'hi' ? 'सूचना बंद करें' : 'સૂચના બંધ કરો'
              }
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Emergency Icon (Left Lower Corner) */}
      <button
        id="floating-emergency-icon"
        onClick={handleFloatingEmergencyClick}
        aria-label={
          currentLang === 'en'
            ? 'Emergency 14416 — Crisis Support (Tele-MANAS 14416 / 112)'
            : currentLang === 'hi'
            ? 'आपातकालीन 14416 — संकट सहायता (टेली-मानस 14416 / 112)'
            : 'ઇમરજન્સી ૧૪૪૧૬ — સંકટ સહાય (ટેલી-માનસ ૧૪૪૧૬ / ૧૧૨)'
        }
        title={
          isEmergencyRoute
            ? currentLang === 'en'
              ? 'Already on Emergency Support (Scroll to top)'
              : currentLang === 'hi'
              ? 'पहले से आपातकालीन सहायता पर (ऊपर स्क्रॉल करें)'
              : 'પહેલેથી ઇમરજન્સી સહાય પર (ઉપર સ્ક્રોલ કરો)'
            : currentLang === 'en'
            ? 'Emergency Crisis Support (Tele-MANAS 14416 / 112)'
            : currentLang === 'hi'
            ? 'आपातकालीन संकट सहायता (टेली-मानस 14416 / 112)'
            : 'ઇમરજન્સી સંકટ સહાય (ટેલી-માનસ ૧૪૪૧૬ / ૧૧૨)'
        }
        className="fixed bottom-5 left-5 z-40 group flex items-center gap-2.5 bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-rose-950/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-rose-300 cursor-pointer min-h-[48px] min-w-[48px] border border-rose-400/40"
      >
        <span className="relative flex items-center justify-center">
          <Phone className="w-5 h-5 text-white animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300 shadow-xs"></span>
          </span>
        </span>
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          {currentLang === 'en' ? 'Emergency 14416' : currentLang === 'hi' ? 'आपातकालीन 14416' : 'ઇમરજન્સી ૧૪૪૧૬'}
        </span>
      </button>

      {/* Educational Q&A Assistant (Strictly bounded, crisis short-circuiting) */}
      <EducationalQAAssistant
        currentLang={currentLang}
        onOpenCrisis={() => setIsCrisisOpen(true)}
      />
    </div>
  );
}


