import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, Activity, ShieldCheck, Info } from 'lucide-react';
import { Language } from '../../types';

interface StressResponseDiagramProps {
  currentLang: Language;
  className?: string;
}

export const StressResponseDiagram: React.FC<StressResponseDiagramProps> = ({
  currentLang,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [activeBranch, setActiveBranch] = useState<'sympathetic' | 'parasympathetic'>('sympathetic');

  const t = {
    en: {
      title: 'The Autonomic Nervous System & The Body’s Stress Response',
      caption:
        'The body maintains balance through two complementary autonomic branches: the Sympathetic "Accelerator" (Fight-or-Flight) responds to perceived threats, while the Parasympathetic "Brake" (Rest-and-Digest via the Vagus Nerve) calms the heart and restores biological homeostasis.',
      play: 'Play Animation',
      pause: 'Pause Animation',
      sympatheticTitle: 'Sympathetic Nervous System (The Alarm / Fight-or-Flight)',
      parasympatheticTitle: 'Parasympathetic Nervous System (The Calming Brake / Rest-and-Digest)',
      sympatheticPoints: [
        'Amygdala detects perceived danger and triggers adrenaline & cortisol',
        'Heart rate and blood pressure increase to pump oxygen to muscles',
        'Respiration quickens; pupils dilate; digestion slows temporarily',
        'Adaptive for acute survival, but exhausting when triggered continuously by chronic anxiety',
      ],
      parasympatheticPoints: [
        'Prefrontal cortex assesses safety and engages the Vagus Nerve',
        'Heart rate slows down and blood pressure stabilizes',
        'Muscle tension releases; smooth, deep diaphragmatic breathing restores',
        'Digestion and cellular repair resume, returning the body to calm baseline',
      ],
      reducedMotionNotice: 'Motion reduced based on system settings. You can switch between system branches below.',
    },
    hi: {
      title: 'स्वायत्त तंत्रिका तंत्र और शरीर की तनाव प्रतिक्रिया (स्ट्रेस रिस्पॉन्स)',
      caption:
        'हमारा शरीर दो प्रणालियों द्वारा नियंत्रित होता है: सिम्पैथेटिक तंत्र (फाइट-या-फ्लाइट) खतरे में शरीर को तैयार करता है, जबकि पैरासिम्पैथेटिक तंत्र (वेगस नर्व) सांसों को धीमा कर शरीर को वापस शांत अवस्था में लाता है।',
      play: 'एनीमेशन चलाएं',
      pause: 'रोकें',
      sympatheticTitle: 'सिम्पैथेटिक प्रणाली (अलार्म / फाइट-या-फ्लाइट)',
      parasympatheticTitle: 'पैरासिम्पैथेटिक प्रणाली (शांति व संतुलन / रेस्ट-एंड-डाइजेस्ट)',
      sympatheticPoints: [
        'मस्तिष्क का एमिग्डाला खतरे को भांपकर एड्रेनालाईन व कोर्टिसोल स्रावित करता है',
        'दिल की धड़कन और रक्तचाप तुरंत बढ़ जाते हैं',
        'सांसें तेज होती हैं और मांसपेशियां तनावग्रस्त हो जाती हैं',
        'यह तात्कालिक खतरे से बचने के लिए आवश्यक है, परंतु लगातार रहने पर चिंता पैदा करता है',
      ],
      parasympatheticPoints: [
        'मस्तिष्क का फ्रंटल लोब सुरक्षा महसूस कर वेगस तंत्रिका को सक्रिय करता है',
        'दिल की धड़कन धीमी और रक्तचाप सामान्य हो जाता है',
        'मांसपेशियों का तनाव कम होता है और गहरी सांसें बहाल होती हैं',
        'पाचन और शारीरिक मरम्मत पुनः सामान्य गति से चलने लगती हैं',
      ],
      reducedMotionNotice: 'सिस्टम सेटिंग्स अनुसार एनीमेशन सीमित है। दोनों शाखाओं की जानकारी नीचे देखें।',
    },
    gu: {
      title: 'ઑટોનોમિક નર્વસ સિસ્ટમ અને તણાવ પ્રતિક્રિયા',
      caption:
        'શરીર બે શાખાઓ દ્વારા સંતુલન જાળવે છે: સિમ્પેથેટિક સિસ્ટમ (લડવું કે ભાગવું) તણાવ સામે સજ્જ કરે છે, જ્યારે પેરાસિમ્પેથેટિક સિસ્ટમ (વેગસ નર્વ) ધબકારા ધીમા કરીને મનને શાંત કરે છે.',
      play: 'એનિમેશન ચલાવો',
      pause: 'થોભાવો',
      sympatheticTitle: 'સિમ્પેથેટિક શાખા (સતર્કતા / ફાઇટ-ઓર-ફ્લાઇટ)',
      parasympatheticTitle: 'પેરાસિમ્પેથેટિક શાખા (શાંતિ / રેસ્ટ-એન્ડ-ડાયજેસ્ટ)',
      sympatheticPoints: [
        'મગજ ભય અનુભવીને એડ્રેનાલિન હોર્મોન મુક્ત કરે છે',
        'હૃદયના ધબકારા અને લોહીનું દબાણ ઝડપથી વધે છે',
        'શ્વાસ ટૂંકા થાય છે અને સ્નાયુઓ તણાય છે',
        'લાંબા સમય સુધી આ સ્થિતિ રહેવાથી ચિંતા અને થાક વધે છે',
      ],
      parasympatheticPoints: [
        'મન સુરક્ષા અનુભવીને વેગસ નર્વને સક્રિય કરે છે',
        'હૃદયના ધબકારા ધીમા પડી લોહીનું દબાણ સામાન્ય બને છે',
        'સ્નાયુઓ હળવા થાય છે અને ઊંડો શ્વાસ શક્ય બને છે',
        'પાચનક્રિયા અને શરીરનું સંતુલન ફરી સામાન્ય થાય છે',
      ],
      reducedMotionNotice: 'મોશન મર્યાદિત છે. બંને સિસ્ટમ વિશે જાણવા માટે નીચે ક્લિક કરો.',
    },
  }[currentLang];

  const animateActive = isPlaying && !prefersReducedMotion;

  return (
    <div
      className={`rounded-2xl border border-teal-200/90 bg-gradient-to-b from-teal-50/50 to-stone-50 p-4 sm:p-5 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-teal-700 shrink-0" />
          <h4 className="text-xs sm:text-sm font-bold text-teal-950 tracking-wide">
            {t.title}
          </h4>
        </div>
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? t.pause : t.play}
          className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300 bg-white px-3 py-1.5 text-xs font-semibold text-teal-800 hover:bg-teal-50 transition cursor-pointer min-h-[36px]"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-teal-700" />
              <span>{t.pause}</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-teal-700" />
              <span>{t.play}</span>
            </>
          )}
        </button>
      </div>

      {prefersReducedMotion && (
        <div className="mt-2.5 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-1.5 text-xs text-amber-800 border border-amber-200">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>{t.reducedMotionNotice}</span>
        </div>
      )}

      {/* Animated Graphic Stage: Balance Scale & Biological Flow */}
      <div className="relative my-4 aspect-[2.2/1] w-full overflow-hidden rounded-xl border border-teal-100 bg-stone-900 shadow-inner flex items-center justify-center">
        <svg
          viewBox="0 0 600 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={t.title}
        >
          <defs>
            <linearGradient id="sympGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="paraGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Central Ground Pivot & Fulcrum */}
          <path d="M 285 200 L 300 130 L 315 200 Z" fill="#334155" />
          <circle cx="300" cy="130" r="7" fill="#64748b" />
          <circle cx="300" cy="130" r="3" fill="#f8fafc" />

          {/* Balance Scale Beam */}
          <line x1="120" y1="130" x2="480" y2="130" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />

          {/* LEFT SIDE: Sympathetic System (Alert/Alarm) */}
          <g>
            <line x1="150" y1="130" x2="150" y2="165" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="150" cy="170" rx="35" ry="12" fill="url(#sympGrad)" />
            <text x="150" y="196" fill="#fca5a5" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
              Sympathetic (Alert)
            </text>

            {/* Acute Pulse Waveform */}
            {animateActive ? (
              <motion.path
                d="M 80 85 L 110 85 L 125 55 L 140 105 L 155 70 L 170 95 L 185 85 L 210 85"
                stroke="#ef4444"
                strokeWidth="2.5"
                fill="none"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <path
                d="M 80 85 L 110 85 L 125 55 L 140 105 L 155 70 L 170 95 L 185 85 L 210 85"
                stroke="#ef4444"
                strokeWidth="2.5"
                fill="none"
                opacity="0.8"
              />
            )}
            <text x="145" y="42" fill="#f87171" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
              Rapid Heart Rate & Adrenaline
            </text>
          </g>

          {/* RIGHT SIDE: Parasympathetic System (Calm Brake) */}
          <g>
            <line x1="450" y1="130" x2="450" y2="165" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="450" cy="170" rx="35" ry="12" fill="url(#paraGrad)" />
            <text x="450" y="196" fill="#86efac" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
              Parasympathetic (Vagus Brake)
            </text>

            {/* Calming Smooth Sinusoidal Waveform */}
            {animateActive ? (
              <motion.path
                d="M 380 85 Q 405 60 430 85 T 480 85 T 530 85"
                stroke="#10b981"
                strokeWidth="2.5"
                fill="none"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <path
                d="M 380 85 Q 405 60 430 85 T 480 85 T 530 85"
                stroke="#10b981"
                strokeWidth="2.5"
                fill="none"
                opacity="0.8"
              />
            )}
            <text x="455" y="42" fill="#34d399" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
              Vagal Tone & Deep Rest
            </text>
          </g>

          {/* Dynamic Central Equilibrium Indicator Arrow */}
          <g>
            {animateActive ? (
              <motion.polygon
                points="300,105 294,118 306,118"
                fill="#fde047"
                animate={{ x: [-12, 12, -12] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <polygon points="300,105 294,118 306,118" fill="#fde047" />
            )}
            <text x="300" y="95" fill="#fde047" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
              Dynamic Equilibrium
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Branch Switcher Tabs */}
      <div className="grid grid-cols-2 gap-2 my-3">
        <button
          type="button"
          onClick={() => setActiveBranch('sympathetic')}
          className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer min-h-[44px] flex items-center justify-center text-center ${
            activeBranch === 'sympathetic'
              ? 'bg-rose-50 border-rose-300 text-rose-900 shadow-xs'
              : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
          }`}
        >
          {t.sympatheticTitle.split('(')[0]}
        </button>
        <button
          type="button"
          onClick={() => setActiveBranch('parasympathetic')}
          className={`px-3 py-2 rounded-xl text-xs font-bold border transition cursor-pointer min-h-[44px] flex items-center justify-center text-center ${
            activeBranch === 'parasympathetic'
              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 shadow-xs'
              : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
          }`}
        >
          {t.parasympatheticTitle.split('(')[0]}
        </button>
      </div>

      {/* Detail Explanations */}
      <div
        className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 leading-relaxed ${
          activeBranch === 'sympathetic'
            ? 'bg-rose-50/60 border-rose-200 text-rose-950'
            : 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
        }`}
      >
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck
            className={`w-4 h-4 ${
              activeBranch === 'sympathetic' ? 'text-rose-700' : 'text-emerald-700'
            }`}
          />
          <span>
            {activeBranch === 'sympathetic' ? t.sympatheticTitle : t.parasympatheticTitle}
          </span>
        </div>
        <ul className="space-y-1.5 list-disc list-inside">
          {(activeBranch === 'sympathetic' ? t.sympatheticPoints : t.parasympatheticPoints).map(
            (pt, idx) => (
              <li key={idx} className="leading-relaxed">
                {pt}
              </li>
            )
          )}
        </ul>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
        {t.caption}
      </p>
    </div>
  );
};
