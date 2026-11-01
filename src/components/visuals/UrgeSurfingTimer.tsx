import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, RotateCcw, Waves, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../../types';

interface UrgeSurfingTimerProps {
  currentLang: Language;
  className?: string;
  onOpenCrisis?: () => void;
  onNavigateResources?: () => void;
}

type WavePhase = 'rising' | 'peak' | 'falling' | 'calm';

export const UrgeSurfingTimer: React.FC<UrgeSurfingTimerProps> = ({
  currentLang,
  className = '',
  onOpenCrisis,
  onNavigateResources,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [durationMinutes, setDurationMinutes] = useState<3 | 15>(3);
  const [secondsRemaining, setSecondsRemaining] = useState(3 * 60);
  const [isActive, setIsActive] = useState(false);

  const totalSeconds = durationMinutes * 60;
  const elapsedSeconds = totalSeconds - secondsRemaining;
  const progressRatio = Math.min(1, Math.max(0, elapsedSeconds / totalSeconds));

  // Determine wave phase
  let phase: WavePhase = 'rising';
  if (progressRatio >= 0.95) {
    phase = 'calm';
  } else if (progressRatio >= 0.65) {
    phase = 'falling';
  } else if (progressRatio >= 0.35) {
    phase = 'peak';
  } else {
    phase = 'rising';
  }

  const t = {
    en: {
      title: 'Urge Surfing: Riding the Craving Wave',
      subtitle:
        'A craving is not a command. Like an ocean wave, cravings naturally rise, peak, and subside within 15–20 minutes if you do not fight or feed them.',
      mode3m: '3-Min Practice Wave',
      mode15m: '15-Min Real-Time Wave',
      start: 'Start Surfing',
      pause: 'Pause Wave',
      reset: 'Reset',
      phaseRising: 'The Rise: Notice the urge building. Observe where you feel it in your body without judgment.',
      phasePeak: 'The Peak: Maximum intensity. Breathe slowly into the sensation. You do not need to fight it; just balance on it.',
      phaseFalling: 'The Fall: The neurochemical spike is receding. Feel your muscles releasing tension.',
      phaseCalm: 'Calm Water: The wave has passed. Acknowledge your brain\'s neuroplastic victory.',
      breathingCue: 'Slow, steady belly breathing • Inhale 4s • Exhale 6s',
      whyWorksTitle: 'The Neuroscience of Urge Surfing (Dr. Alan Marlatt)',
      whyWorksText:
        'Every craving is fueled by a temporary spike in dopamine and conditioned stress signals. Resisting with white-knuckle willpower increases tension, while acting on the urge reinforces the neural loop. Observing the sensation mindfully without acting allows the neurotransmitter wave to peak and extinguish naturally—gradually weakening the craving pathway in your brain.',
      supportPrompt: 'Riding a craving is easier with support than alone.',
      reachOutBtn: 'Helpline & Support Directory',
      callTeleManas: 'Tele-MANAS: 14416 (24x7 Free)',
      reducedMotionTitle: 'Urge Surfing Steps (Accessible Mode)',
      step1: '1. Scan your body: Notice where the craving sits (chest tightness, dry mouth, stomach flutter).',
      step2: '2. Focus on physical sensation rather than thoughts of the substance.',
      step3: '3. Breathe gently: Lengthen your exhales to activate your parasympathetic calming nerve.',
      step4: '4. Remember: The urge is temporary. It will peak and drop within minutes.',
    },
    hi: {
      title: 'अर्च सर्फिंग: तलब की लहर पर संतुलन (Urge Surfing)',
      subtitle:
        'तलब कोई आदेश नहीं है। समुद्र की लहर की तरह, यदि आप इससे लड़ें नहीं तो यह 15–20 मिनट में अपने आप उठती है, चरम पर पहुंचती है और फिर शांत हो जाती है।',
      mode3m: '3 मिनट का अभ्यास',
      mode15m: '15 मिनट की वास्तविक लहर',
      start: 'लहर पर चलें (शुरू करें)',
      pause: 'रोकें',
      reset: 'रीसेट',
      phaseRising: 'लहर का उठना: तलब बढ़ रही है। शरीर में इसकी बेचैनी को बिना घबराए सिर्फ महसूस करें।',
      phasePeak: 'शिखर (चरम सीमा): सबसे तेज खिंचाव। लंबी सांस लें। इससे लड़ें नहीं, बस सांसों के साथ बने रहें।',
      phaseFalling: 'लहर का उतरना: मस्तिष्क का खिंचाव धीरे-धीरे कम हो रहा है। मांसपेशियों को ढीला छोड़ें।',
      phaseCalm: 'शांत जल: लहर गुजर चुकी है। आपने बिना नशा किए अपने मस्तिष्क को मजबूत बनाया है।',
      breathingCue: 'धीमी और गहरी सांस लें • 4 सेकंड सांस अंदर • 6 सेकंड सांस बाहर',
      whyWorksTitle: 'अर्च सर्फिंग का वैज्ञानिक आधार',
      whyWorksText:
        'तलब मस्तिष्क में डोपामाइन और तनाव रसायनों का एक अस्थायी उछाल है। जबरन रोकने से तनाव बढ़ता है, और नशा करने से लत और पक्की होती है। जब आप एक दृष्टा बनकर तलब को सिर्फ महसूस करते हैं और उस पर कोई प्रतिक्रिया नहीं करते, तो यह रासायनिक उभार अपने आप शांत हो जाता है।',
      supportPrompt: 'अकेले जूझने के बजाय किसी अपने या हेल्पलाइन से बात करना हमेशा मददगार होता है।',
      reachOutBtn: 'सहायता व हेल्पलाइन डायरेक्टरी',
      callTeleManas: 'टेली-मानस: 14416 (मुफ्त 24x7)',
      reducedMotionTitle: 'अर्च सर्फिंग के मुख्य चरण (स्थिर मोड)',
      step1: '1. शरीर पर ध्यान दें: देखें तलब कहां महसूस हो रही है (छाती में भारीपन, गला सूखना या पेट में बेचैनी)।',
      step2: '2. विचार के बजाय शारीरिक संवेदना को महसूस करें।',
      step3: '3. लंबी सांस बाहर छोड़ें ताकि शरीर की घबराहट शांत हो।',
      step4: '4. याद रखें: तलब हमेशा के लिए नहीं है, यह कुछ ही मिनटों में उतर जाएगी।',
    },
    gu: {
      title: 'અર્જ સર્ફિંગ: તલપના મોજાં પર સવારી (Urge Surfing)',
      subtitle:
        'તલપ એ કોઈ કમાન્ડ નથી. દરિયાના મોજાંની જેમ તલપ પણ ૧૫-૨૦ મિનિટમાં કુદરતી રીતે ચડે છે, ટોચ પર પહોંચે છે અને આપોઆપ શાંત થઈ જાય છે.',
      mode3m: '૩ મિનિટ અભ્યાસ',
      mode15m: '૧૫ મિનિટ વાસ્તવિક મોજું',
      start: 'શરૂ કરો',
      pause: 'થોભાવો',
      reset: 'રીસેટ',
      phaseRising: 'મોજું ચડવું: તલપ ધીમે ધીમે વધી રહી છે. શરીરના જે ભાગમાં અજંપો થાય તેને શાંતિથી નિહાળો.',
      phasePeak: 'ટોચની તીવ્રતા: આ ક્ષણે સૌથી વધુ ખેંચાણ થાય છે. ઊંડા શ્વાસ લો અને મોજાં પર સંતુલન જાળવો.',
      phaseFalling: 'મોજું ઓસરવું: મગજનું રાસાયણિક ખેંચાણ ઓછું થઈ રહ્યું છે. સ્નાયુઓને હળવા થવા દો.',
      phaseCalm: 'શાંત દરિયો: તલપનું મોજું પસાર થઈ ગયું છે. તમે નશો કર્યા વગર મગજ પર વિજય મેળવ્યો છે.',
      breathingCue: 'ધીમા અને ઊંડા શ્વાસ • ૪ સેકન્ડ શ્વાસ અંદર • ૬ સેકન્ડ શ્વાસ બહાર',
      whyWorksTitle: 'અર્જ સર્ફિંગ પાછળનું વૈજ્ઞાનિક રહસ્ય',
      whyWorksText:
        'તલપ એ મગજના ડોપામાઇનનો ક્ષણિક ઉછાળો છે. તેની સામે જબરદસ્તી લડવા કરતાં તટસ્થ બનીને તેને પસાર થવા દેવાથી મગજ ધીમે ધીમે તલપની ગુલામીમાંથી મુક્ત બને છે.',
      supportPrompt: 'એકલા લડવા કરતાં કોઈ આધાર કે હેલ્પલાઇન સાથે વાત કરવી વધુ સરળ રહે છે.',
      reachOutBtn: 'હેલ્પલાઇન અને સહાય કેન્દ્ર',
      callTeleManas: 'ટેલી-માનસ: 14416 (૨૪ કલાક મફત)',
      reducedMotionTitle: 'અર્જ સર્ફિંગના સરળ પગલાં (સ્થિર મોડ)',
      step1: '૧. શરીરમાં અનુભવ કરો કે તલપ ક્યાં અનુભવાય છે (છાતી, ગળું કે પેટ).',
      step2: '૨. નશાના વિચાર કરવાને બદલે શારીરિક સંવેદનાને જોતા રહો.',
      step3: '૩. શ્વાસ ધીમેથી બહાર કાઢો જેથી હૃદયના ધબકારા શાંત થાય.',
      step4: '૪. યાદ રાખો: આ તલપ કાયમી નથી, થોડી જ મિનિટોમાં ઓસરી જશે.',
    },
  }[currentLang];

  // Timer tick
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const handleModeChange = (mins: 3 | 15) => {
    setIsActive(false);
    setDurationMinutes(mins);
    setSecondsRemaining(mins * 60);
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsRemaining(durationMinutes * 60);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getPhaseDescription = () => {
    switch (phase) {
      case 'rising':
        return t.phaseRising;
      case 'peak':
        return t.phasePeak;
      case 'falling':
        return t.phaseFalling;
      case 'calm':
        return t.phaseCalm;
    }
  };

  // Wave curve calculation points
  const waveWidth = 380;
  const waveHeight = 120;
  const currentX = 20 + progressRatio * (waveWidth - 40);

  // Bell-shaped / Gaussian wave curve for craving intensity
  const getCurveY = (xRatio: number) => {
    // Peak at xRatio = 0.5
    const exponent = -Math.pow((xRatio - 0.45) / 0.22, 2);
    const normalizedIntensity = Math.exp(exponent);
    return waveHeight - 20 - normalizedIntensity * 80;
  };

  const currentY = getCurveY(progressRatio);

  return (
    <div
      className={`rounded-2xl border border-teal-200/90 bg-gradient-to-b from-teal-50/80 via-white to-stone-50 p-5 sm:p-6 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Header */}
      <div className="space-y-1.5 pb-3 border-b border-teal-100">
        <div className="flex items-center gap-2 text-teal-800 font-semibold text-xs uppercase tracking-wider">
          <Waves className="w-4 h-4 text-teal-600" />
          <span>Craving De-Escalation Toolkit</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight">
          {t.title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Mode Switcher */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-lg border border-stone-200 bg-stone-100/80 p-1 text-xs">
          <button
            onClick={() => handleModeChange(3)}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              durationMinutes === 3
                ? 'bg-white text-teal-800 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.mode3m}
          </button>
          <button
            onClick={() => handleModeChange(15)}
            className={`px-3 py-1.5 rounded-md font-medium transition ${
              durationMinutes === 15
                ? 'bg-white text-teal-800 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t.mode15m}
          </button>
        </div>

        {/* Digital Time & Phase Badge */}
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              phase === 'rising'
                ? 'bg-amber-100 text-amber-900'
                : phase === 'peak'
                ? 'bg-rose-100 text-rose-900'
                : phase === 'falling'
                ? 'bg-teal-100 text-teal-900'
                : 'bg-emerald-100 text-emerald-900'
            }`}
          >
            {phase}
          </span>
          <span className="font-mono text-lg sm:text-xl font-bold text-stone-800">
            {formatTime(secondsRemaining)}
          </span>
        </div>
      </div>

      {/* Interactive Wave Stage */}
      {!prefersReducedMotion ? (
        <div className="mt-4 rounded-xl border border-teal-100 bg-white p-4 shadow-xs overflow-hidden">
          <div className="relative w-full max-w-md mx-auto aspect-[16/7]">
            <svg
              viewBox={`0 0 ${waveWidth} ${waveHeight}`}
              className="w-full h-full overflow-visible"
              role="img"
              aria-label="Interactive Craving Wave Curve"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="45%" stopColor="#f43f5e" />
                  <stop offset="70%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="waveFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f0fdfa" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Water base line */}
              <line
                x1="20"
                y1={waveHeight - 15}
                x2={waveWidth - 20}
                y2={waveHeight - 15}
                stroke="#e2e8f0"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Wave bell curve path */}
              <path
                d={`M 20 ${waveHeight - 15}
                    C 80 ${waveHeight - 15}, 110 ${waveHeight - 35}, 150 ${waveHeight - 85}
                    C 170 ${waveHeight - 105}, 190 ${waveHeight - 105}, 210 ${waveHeight - 85}
                    C 250 ${waveHeight - 35}, 280 ${waveHeight - 15}, 360 ${waveHeight - 15}`}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Shaded Area under wave */}
              <path
                d={`M 20 ${waveHeight - 15}
                    C 80 ${waveHeight - 15}, 110 ${waveHeight - 35}, 150 ${waveHeight - 85}
                    C 170 ${waveHeight - 105}, 190 ${waveHeight - 105}, 210 ${waveHeight - 85}
                    C 250 ${waveHeight - 35}, 280 ${waveHeight - 15}, 360 ${waveHeight - 15}
                    L 360 ${waveHeight - 10} L 20 ${waveHeight - 10} Z`}
                fill="url(#waveFill)"
              />

              {/* Milestone Labels */}
              <text x="35" y={waveHeight - 2} fill="#64748b" fontSize="9" fontWeight="600">
                Trigger (0 min)
              </text>
              <text x="180" y="16" fill="#be123c" fontSize="9" fontWeight="700" textAnchor="middle">
                Peak Crest (5-8 min)
              </text>
              <text x="345" y={waveHeight - 2} fill="#0f766e" fontSize="9" fontWeight="600" textAnchor="end">
                Extinction (15 min)
              </text>

              {/* Surfer / Surfing Indicator Marker */}
              <motion.g
                animate={{ x: currentX, y: currentY }}
                transition={{ type: 'tween', ease: 'linear', duration: 0.8 }}
              >
                {/* Glow ring */}
                <circle cx="0" cy="0" r="12" fill="#0d9488" fillOpacity="0.2" />
                {/* Core dot */}
                <circle cx="0" cy="0" r="7" fill="#0f766e" stroke="#ffffff" strokeWidth="2" />
                {/* Pulsing ripple when active */}
                {isActive && (
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="16"
                    stroke="#0f766e"
                    strokeWidth="1.5"
                    fill="none"
                    animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
                  />
                )}
              </motion.g>
            </svg>
          </div>

          {/* Dynamic Phase Guidance Box */}
          <div className="mt-3 p-3 rounded-lg bg-teal-50/70 border border-teal-100 text-xs text-teal-950 font-medium leading-relaxed flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <p>{getPhaseDescription()}</p>
              <p className="mt-1 text-[11px] text-teal-700 font-semibold">{t.breathingCue}</p>
            </div>
          </div>
        </div>
      ) : (
        /* Reduced Motion Accessible Guide */
        <div className="mt-4 p-4 rounded-xl border border-stone-200 bg-white space-y-2 text-xs sm:text-sm text-stone-700">
          <h4 className="font-semibold text-stone-900">{t.reducedMotionTitle}</h4>
          <p>{t.step1}</p>
          <p>{t.step2}</p>
          <p>{t.step3}</p>
          <p>{t.step4}</p>
          <p className="font-semibold text-teal-800 pt-2 border-t border-stone-100">
            {getPhaseDescription()}
          </p>
        </div>
      )}

      {/* Timer Controls */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className="px-5 py-2.5 rounded-lg bg-[#115e59] hover:bg-[#0f766e] text-white font-semibold text-xs sm:text-sm transition flex items-center gap-2 shadow-xs min-h-[44px]"
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isActive ? t.pause : t.start}</span>
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-700 font-medium text-xs sm:text-sm transition flex items-center gap-1.5 min-h-[44px]"
        >
          <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Neuroscience Explanation (Why this works) */}
      <div className="mt-5 pt-4 border-t border-teal-100 text-xs text-stone-700 space-y-1.5">
        <div className="flex items-center gap-1.5 font-semibold text-teal-900">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
          <span>{t.whyWorksTitle}</span>
        </div>
        <p className="text-stone-600 leading-relaxed">{t.whyWorksText}</p>
      </div>

      {/* Reach Out / Crisis Link */}
      <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-stone-800 font-medium">
          <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{t.supportPrompt}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="tel:14416"
            className="px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-900 text-white font-semibold transition"
          >
            {t.callTeleManas}
          </a>
          {onNavigateResources && (
            <button
              onClick={onNavigateResources}
              className="px-3 py-1.5 rounded-md border border-stone-300 hover:bg-white text-stone-800 font-medium transition"
            >
              {t.reachOutBtn}
            </button>
          )}
          {onOpenCrisis && (
            <button
              onClick={onOpenCrisis}
              className="px-3 py-1.5 rounded-md bg-rose-700 hover:bg-rose-800 text-white font-semibold transition"
            >
              Crisis Help
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
