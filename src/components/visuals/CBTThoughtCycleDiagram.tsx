import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, Sparkles, CheckCircle2, Info } from 'lucide-react';
import { Language } from '../../types';

interface CBTThoughtCycleDiagramProps {
  currentLang: Language;
  className?: string;
}

export const CBTThoughtCycleDiagram: React.FC<CBTThoughtCycleDiagramProps> = ({
  currentLang,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [selectedNode, setSelectedNode] = useState<number>(0);

  const t = {
    en: {
      title: 'The CBT Cognitive Cycle (Thoughts, Feelings & Behaviors)',
      caption:
        'Cognitive Behavioral Therapy (CBT) demonstrates that our thoughts, emotions, physical sensations, and actions continuously reinforce one another. Evidence-based therapy empowers you to identify cognitive distortions and modify behavioral responses, interrupting the distressing cycle.',
      play: 'Play Loop',
      pause: 'Pause Loop',
      interventionTitle: 'Where Clinical Therapy Intervenes:',
      interventionThought:
        '1. Cognitive Restructuring: Examining evidence for automatic catastrophic thoughts, identifying cognitive traps, and adopting realistic, balanced perspectives.',
      interventionBehavior:
        '2. Behavioral Activation & Exposure: Resuming meaningful daily values, gradual exposure to avoided situations, and testing anxious assumptions in real life.',
      nodes: [
        {
          title: '1. Trigger / Event',
          subtitle: 'A challenging life situation, stressor, physical sensation, or interpersonal event.',
          example: 'E.g., An upcoming evaluation or a sudden rapid heartbeat.',
        },
        {
          title: '2. Automatic Thoughts',
          subtitle: 'Instant interpretations, core beliefs, or cognitive distortions that flash through the mind.',
          example: 'E.g., "I will fail completely" or "Something terrible is about to happen."',
        },
        {
          title: '3. Emotional Feelings',
          subtitle: 'Emotional states arising directly from how the situation is interpreted.',
          example: 'E.g., Severe anxiety, dread, guilt, sadness, or frustration.',
        },
        {
          title: '4. Physical Sensations',
          subtitle: 'Body stress response triggered by perceived danger.',
          example: 'E.g., Muscle tightness, shallow breathing, racing pulse, sweating.',
        },
        {
          title: '5. Behavioral Action',
          subtitle: 'What we do in response (which often accidentally maintains the cycle).',
          example: 'E.g., Avoidance, withdrawal, reassurance seeking, or procrastination.',
        },
      ],
      breakTheCycle: 'CBT Intervention Point',
      reducedMotionNotice: 'Motion reduced based on system settings. You can click any step to explore.',
    },
    hi: {
      title: 'सीबीटी विचार चक्र (विचार, भावनाएं और व्यवहार का संबंध)',
      caption:
        'संज्ञानात्मक व्यवहार थेरेपी (CBT) यह दर्शाती है कि हमारे विचार, भावनाएं, शारीरिक संवेदनाएं और व्यवहार एक-दूसरे को प्रभावित करते हैं। थेरेपी नकारात्मक विचारों की पहचान कर और व्यवहार में बदलाव लाकर इस चक्र को तोड़ती है।',
      play: 'चक्र चलाएं',
      pause: 'रोकें',
      interventionTitle: 'थेरेपी इस चक्र को कहां बदलती है:',
      interventionThought:
        '1. वैचारिक पुनर्संरचना (Cognitive Restructuring): नकारात्मक सोच के सबूतों की निष्पक्ष जांच करना और यथार्थवादी नजरिया अपनाना।',
      interventionBehavior:
        '2. व्यावहारिक प्रयोग व एक्सपोज़र: डर के कारण छोड़ी गई गतिविधियों को धीरे-धीरे पुनः शुरू करना और आत्मविश्वास हासिल करना।',
      nodes: [
        {
          title: '1. ट्रिगर / परिस्थिति',
          subtitle: 'कोई बाहरी तनावपूर्ण घटना, शारीरिक लक्षण या चुनौतीपूर्ण स्थिति।',
          example: 'उदाहरण: साक्षात्कार का दिन या अचानक दिल की धड़कन तेज होना।',
        },
        {
          title: '2. स्वचालित विचार',
          subtitle: 'स्थिति के प्रति मस्तिष्क में तुरंत आने वाले नकारात्मक अनुमान या भय।',
          example: 'उदाहरण: "मुझसे नहीं होगा" या "कुछ बहुत बुरा होने वाला है।"',
        },
        {
          title: '3. भावनात्मक प्रतिक्रिया',
          subtitle: 'विचारों से उत्पन्न होने वाली तीव्र भावनाएं।',
          example: 'उदाहरण: अत्यधिक चिंता, घबराहट, अपराधबोध या उदासी।',
        },
        {
          title: '4. शारीरिक संवेदनाएं',
          subtitle: 'तनाव हार्मोन के कारण शरीर में होने वाले शारीरिक बदलाव।',
          example: 'उदाहरण: मांसपेशियों में तनाव, सांस फूलना, दिल की तेज धड़कन।',
        },
        {
          title: '5. व्यावहारिक प्रतिक्रिया',
          subtitle: 'चिंता से बचने के लिए उठाया गया कदम (जो अक्सर चक्र को बनाए रखता है)।',
          example: 'उदाहरण: काम टालना, कमरे में बंद रहना या स्थिति से भागना।',
        },
      ],
      breakTheCycle: 'थेरेपी द्वारा चक्र तोड़ने का बिंदु',
      reducedMotionNotice: 'सिस्टम सेटिंग्स अनुसार एनीमेशन सीमित है। किसी भी चरण पर क्लिक करके समझें।',
    },
    gu: {
      title: 'સીબીટી વિચાર ચક્ર (વિચારો, લાગણીઓ અને વર્તન)',
      caption:
        'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) દર્શાવે છે કે આપણા વિચારો, લાગણીઓ અને વર્તન એકબીજાને મજબૂત કરે છે. પુરાવા આધારિત ઉપચાર અયોગ્ય વિચારોને સુધારીને અને વર્તણૂક બદલીને આ દુષ્ચક્રને તોડે છે.',
      play: 'ચક્ર ચલાવો',
      pause: 'થોભાવો',
      interventionTitle: 'થેરાપી આ ચક્રને કેવી રીતે તોડે છે:',
      interventionThought:
        '1. વિચારોનું પુનઃમૂલ્યાંકન: નકારાત્મક ધારણાઓ પાછળના તથ્યો તપાસવા અને સંતુલિત દ્રષ્ટિકોણ કેળવવો.',
      interventionBehavior:
        '2. વર્તણૂકમાં ફેરફાર: ડરને કારણે બંધ કરેલી પ્રવૃત્તિઓ ધીમે ધીમે શરૂ કરવી અને આત્મવિશ્વાસ વધારવો.',
      nodes: [
        {
          title: '1. પરિસ્થિતિ / ટ્રિગર',
          subtitle: 'કોઈ તણાવપૂર્ણ ઘટના અથવા શારીરિક લક્ષણ.',
          example: 'દા.ત., મીટિંગમાં બોલવું અથવા અચાનક ગભરાટ થવો.',
        },
        {
          title: '2. આપોઆપ આવતા વિચારો',
          subtitle: 'મગજમાં તરત ઉદ્ભવતા નકારાત્મક અનુમાનો.',
          example: 'દા.ત., "હું ભૂલ કરી બેસીશ અને મારી મજાક ઉડશે."',
        },
        {
          title: '3. લાગણીઓ',
          subtitle: 'વિચારોને લીધે પેદા થતી તીવ્ર ચિંતા કે ઉદાસી.',
          example: 'દા.ત., ગભરાટ, ડર, હતાશા.',
        },
        {
          title: '4. શારીરિક લક્ષણો',
          subtitle: 'તણાવને લીધે શરીરમાં થતી પ્રતિક્રિયાઓ.',
          example: 'દા.ત., ધબકારા વધવા, પરસેવો થવો, શ્વાસ ટૂંકો થવો.',
        },
        {
          title: '5. વર્તન / પ્રતિક્રિયા',
          subtitle: 'બચાવ માટે લેવાયેલ પગલું જે મુશ્કેલી ચાલુ રાખે છે.',
          example: 'દા.ત., પરિસ્થિતિથી દૂર ભાગવું કે કામ મુલતવી રાખવું.',
        },
      ],
      breakTheCycle: 'ચક્ર તોડવાનું બિંદુ',
      reducedMotionNotice: 'મોશન ઘટાડેલ છે. વિગતો જોવા માટે કોઈપણ પગલા પર ક્લિક કરો.',
    },
  }[currentLang];

  const animateActive = isPlaying && !prefersReducedMotion;

  // Node positions in circular layout
  const nodeCoords = [
    { x: 300, y: 35 },   // 0: Trigger
    { x: 470, y: 115 },  // 1: Thoughts
    { x: 410, y: 245 },  // 2: Feelings
    { x: 190, y: 245 },  // 3: Physical Sensations
    { x: 130, y: 115 },  // 4: Behaviors
  ];

  return (
    <div
      className={`rounded-2xl border border-teal-200/80 bg-gradient-to-b from-teal-50/50 to-stone-50 p-4 sm:p-5 text-stone-900 shadow-sm ${className}`}
      role="region"
      aria-label={t.title}
    >
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-teal-100 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-700 shrink-0" />
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

      {/* Main Visual Cycle Container */}
      <div className="relative my-4 aspect-[1.9/1] sm:aspect-[2.1/1] w-full overflow-hidden rounded-xl border border-teal-100 bg-stone-900 shadow-inner flex items-center justify-center p-2">
        <svg
          viewBox="0 0 600 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={t.title}
        >
          <defs>
            <linearGradient id="cbtRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <filter id="cbtGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Central Loop Ring */}
          <ellipse
            cx="300"
            cy="150"
            rx="160"
            ry="105"
            stroke="url(#cbtRingGrad)"
            strokeWidth="3"
            strokeDasharray="6 8"
            fill="none"
            opacity="0.6"
          />

          {/* Flowing animated pulse traveling along the loop */}
          {animateActive && (
            <motion.ellipse
              cx="300"
              cy="150"
              rx="160"
              ry="105"
              stroke="#5eead4"
              strokeWidth="4"
              strokeDasharray="20 300"
              fill="none"
              animate={{ strokeDashoffset: [0, -320] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {/* Connecting Directional Arrows between nodes */}
          <path d="M 335 48 Q 420 60 450 95" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
          <polygon points="455,102 445,93 452,90" fill="#2dd4bf" />

          <path d="M 470 145 Q 465 200 425 225" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
          <polygon points="418,230 425,220 430,226" fill="#2dd4bf" />

          <path d="M 375 250 L 225 250" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
          <polygon points="215,250 227,244 227,256" fill="#2dd4bf" />

          <path d="M 175 225 Q 135 200 130 145" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
          <polygon points="128,136 135,145 125,147" fill="#2dd4bf" />

          <path d="M 150 95 Q 180 60 265 48" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
          <polygon points="275,47 263,42 265,54" fill="#2dd4bf" />

          {/* Central CBT Breakthrough Hub */}
          <g>
            <circle cx="300" cy="150" r="42" fill="#134e4a" stroke="#2dd4bf" strokeWidth="1.5" />
            <circle cx="300" cy="150" r="32" fill="#115e59" />
            <text x="300" y="146" fill="#ccfbf1" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
              CBT
            </text>
            <text x="300" y="160" fill="#5eead4" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
              Breakthrough
            </text>
          </g>

          {/* Nodes Rendering with Interactive Selection */}
          {t.nodes.map((node, i) => {
            const coord = nodeCoords[i];
            const isSelected = selectedNode === i;

            return (
              <g
                key={i}
                onClick={() => setSelectedNode(i)}
                className="cursor-pointer transition hover:opacity-95"
                role="button"
                tabIndex={0}
                aria-label={node.title}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedNode(i);
                  }
                }}
              >
                {/* Outer halo */}
                <circle
                  cx={coord.x}
                  cy={coord.y}
                  r={isSelected ? 26 : 22}
                  fill={isSelected ? '#0d9488' : '#1e293b'}
                  stroke={isSelected ? '#fde047' : '#14b8a6'}
                  strokeWidth={isSelected ? 3 : 1.5}
                  filter={isSelected ? 'url(#cbtGlow)' : undefined}
                />
                {/* Inner Number */}
                <text
                  x={coord.x}
                  y={coord.y + 4}
                  fill="#ffffff"
                  fontSize="12"
                  fontWeight="800"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                >
                  {i + 1}
                </text>

                {/* Node Title text in SVG */}
                <text
                  x={coord.x}
                  y={coord.y + (coord.y < 150 ? -30 : 38)}
                  fill={isSelected ? '#fef08a' : '#e2e8f0'}
                  fontSize="10"
                  fontWeight="700"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                >
                  {node.title.split('.')[1]?.trim() || node.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Step Explanation Card */}
      <div className="rounded-xl border border-teal-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
            {t.nodes[selectedNode].title}
          </span>
          <span className="text-[11px] text-stone-500 font-medium">
            Step {selectedNode + 1} of {t.nodes.length}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-stone-800 font-medium">
          {t.nodes[selectedNode].subtitle}
        </p>
        <p className="mt-1 text-xs text-stone-600 italic">
          {t.nodes[selectedNode].example}
        </p>
      </div>

      {/* Where Therapy Intervenes Box */}
      <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3.5 sm:p-4 text-xs sm:text-sm text-emerald-950 space-y-2">
        <div className="flex items-center gap-1.5 font-bold text-emerald-900">
          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{t.interventionTitle}</span>
        </div>
        <p className="text-emerald-900/90 leading-relaxed font-sans">
          {t.interventionThought}
        </p>
        <p className="text-emerald-900/90 leading-relaxed font-sans">
          {t.interventionBehavior}
        </p>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
        {t.caption}
      </p>
    </div>
  );
};
