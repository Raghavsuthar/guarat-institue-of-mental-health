import { motion, useReducedMotion } from 'motion/react';
import { Brain, Heart, Repeat, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { SpotlightCondition } from '../data/conditionSpotlight';
import { getCategoryTheme } from '../data/categoryThemes';

interface Props {
  currentLang: Language;
  conditions: SpotlightCondition[];
  onSelectCondition: (c: Pick<SpotlightCondition, 'slug'>) => void;
  onTabChange: (tab: 'conditions') => void;
}

const SPOTLIGHT = [
  { id: 'depression', icon: Brain, gradient: 'from-amber-500/20 via-rose-500/10 to-transparent', accent: '#d97706', tag: { en: 'Mood', hi: 'मूड', gu: 'મૂડ' } },
  { id: 'anxiety-gad', icon: Heart, gradient: 'from-sky-500/20 via-teal-500/10 to-transparent', accent: '#0284c7', tag: { en: 'Anxiety', hi: 'चिंता', gu: 'ચિંતા' } },
  { id: 'ocd', icon: Repeat, gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent', accent: '#4f46e5', tag: { en: 'OCD', hi: 'OCD', gu: 'OCD' } },
  { id: 'adhd', icon: Zap, gradient: 'from-orange-500/20 via-amber-500/10 to-transparent', accent: '#ea580c', tag: { en: 'ADHD', hi: 'ADHD', gu: 'ADHD' } },
];

export function ConditionSpotlight({ currentLang, conditions, onSelectCondition, onTabChange }: Props) {
  const reduced = useReducedMotion();
  const picks = SPOTLIGHT.map((s) => ({ ...s, cond: conditions.find((c) => c.id === s.id) })).filter((s) => s.cond);
  if (picks.length === 0) return null;
  const labels = {
    en: { heading: 'Conditions People Research Most', sub: 'Evidence-based overviews written for the public', viewAll: 'View All Guides', read: 'Read Guide' },
    hi: { heading: 'सबसे अधिक खोजे जाने वाले विकार', sub: 'जनता के लिए निष्पक्ष वैज्ञानिक जानकारी', viewAll: 'सभी देखें', read: 'मार्गदर्शिका पढ़ें' },
    gu: { heading: 'સૌથી વધુ શોધાતા વિકારો', sub: 'જાહેર જનતા માટે સરળ ભાષામાં માર્ગદર્શન', viewAll: 'તમામ જુઓ', read: 'માર્ગદર્શિકા વાંચો' },
  }[currentLang];

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            {labels.heading}
          </h3>
          <p className="text-sm text-slate-600 mt-1">{labels.sub}</p>
        </div>
        <button onClick={() => onTabChange('conditions')}
          className="text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors flex items-center gap-1 cursor-pointer min-h-[44px] active:scale-[0.97]">
          <span>{labels.viewAll}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {picks.map((p, i) => {
          const theme = getCategoryTheme(p.cond!.category);
          const Icon = p.icon;
          return (
            <motion.button
              key={p.id}
              onClick={() => onSelectCondition(p.cond!)}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={reduced ? {} : { y: -4 }}
              whileTap={reduced ? {} : { scale: 0.97 }}
              className="group relative text-left overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-xl transition-shadow duration-300"
              style={{ borderTop: `3.5px solid ${theme.hex.accent}` }}
            >
              {/* animated gradient wash */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              />
              {/* floating orb */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-30"
                style={{ backgroundColor: theme.hex.accent }}
                animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
              />

              <div className="relative p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ color: theme.hex.text, backgroundColor: theme.hex.bg, border: `1px solid ${theme.hex.border}` }}>
                    {p.tag[currentLang]}
                  </span>
                  <motion.span
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: theme.hex.bg, color: theme.hex.accent }}
                    whileHover={reduced ? {} : { rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.span>
                </div>

                <h4 className="font-bold text-base text-slate-900 group-hover:text-teal-900 transition-colors leading-snug">
                  {p.cond!.name[currentLang]}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {p.cond!.summary[currentLang]}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs font-bold" style={{ color: theme.hex.text }}>
                  <span>{labels.read}</span>
                  <motion.span
                    className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-teal-600 group-hover:text-white flex items-center justify-center transition-colors"
                    whileHover={reduced ? {} : { x: 2 }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}