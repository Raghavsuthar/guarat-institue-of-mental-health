import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { Battery, Zap, Activity, Shield, RotateCcw } from 'lucide-react';
import { Language } from '../../types';

interface VisualProps { currentLang: Language; }

export function DepressionVisual({ currentLang }: VisualProps) {
  const reduced = useReducedMotion();
  const [level, setLevel] = useState(18);
  const recharge = () => setLevel((v) => Math.min(100, v + 22));
  const drain = () => setLevel((v) => Math.max(5, v - 18));
  const color = level < 35 ? '#E11D48' : level < 70 ? '#F59E0B' : '#0D9488';
  const L = {
    en: { title: 'Depression — the depleted battery', low: 'Low energy, anhedonia', high: 'Recovery: energy returns', recharge: 'Add treatment + routine', drain: 'Stress / no support', hint: 'Tap "recharge" to see recovery' },
    hi: { title: 'डिप्रेशन — खाली होती बैटरी', low: 'ऊर्जा कम, रुचि खत्म', high: 'रिकवरी: ऊर्जा लौटती है', recharge: 'उपचार + दिनचर्या', drain: 'तनाव / बिना सहारा', hint: 'रिकवरी देखने के लिए "recharge" दबाएं' },
    gu: { title: 'ડિપ્રેશન — ખાલી થતી બેટરી', low: 'શક્તિ ઓછી, રસ ખતમ', high: 'રિકવરી: શક્તિ પાછી', recharge: 'સારવાર + દિનચર્યા', drain: 'તણાવ / ટેકો નહીં', hint: 'રિકવરી જોવા "recharge" દબાવો' },
  }[currentLang];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      <p className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">{L.title}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-32 rounded-2xl border-2 border-slate-300 bg-slate-100 overflow-hidden shrink-0">
          <motion.div className="absolute bottom-0 left-0 right-0" style={{ height: `${level}%`, backgroundColor: color }}
            animate={reduced ? {} : { height: `${level}%` }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} />
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">{level}%</span>
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-xs text-slate-600">{level < 35 ? L.low : L.high}</p>
          <div className="flex gap-2">
            <button onClick={recharge} className="px-3 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold min-h-[40px] active:scale-[0.97] transition-transform">{L.recharge}</button>
            <button onClick={drain} className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold min-h-[40px] active:scale-[0.97] transition-transform">{L.drain}</button>
          </div>
          <p className="text-[11px] text-slate-400">{L.hint}</p>
        </div>
      </div>
    </div>
  );
}

export function AnxietyVisual({ currentLang }: VisualProps) {
  const reduced = useReducedMotion();
  const [bpm, setBpm] = useState(118);
  const slow = () => setBpm((v) => Math.max(62, v - 14));
  const speed = Math.max(0.4, 1.6 - (bpm - 60) / 90);
  const L = {
    en: { title: 'Anxiety — the racing heart', bpm: 'Heart rate', calm: 'Calm the body', stress: 'Stress spike', hint: 'Lower the heart rate with breathing' },
    hi: { title: 'चिंता — तेज़ धड़कन', bpm: 'हृदय गति', calm: 'शरीर शांत करें', stress: 'तनाव बढ़ा', hint: 'सांस से दिल की गति घटाएं' },
    gu: { title: 'ચિંતા — ધબકારાની ગતિ', bpm: 'હૃદય ગતિ', calm: 'શરીર શાંત કરો', stress: 'તણાવ વધ્યો', hint: 'શ્વાસથી ધબકારા ધીમા કરો' },
  }[currentLang];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      <p className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">{L.title}</p>
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 160 80" className="w-40 h-20 shrink-0">
          <path d="M0 40 L30 40 L38 12 L46 68 L54 40 L80 40 L88 20 L96 60 L104 40 L160 40" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <motion.circle cx="80" cy="40" r="6" fill="#E11D48"
            animate={reduced ? {} : { scale: [1, 1.4, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: speed, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '80px 40px' }} />
        </svg>
        <div className="flex-1 space-y-2">
          <p className="text-2xl font-bold text-rose-700">{bpm} <span className="text-sm font-medium text-slate-500">{L.bpm}</span></p>
          <div className="flex gap-2">
            <button onClick={slow} className="px-3 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold min-h-[40px] active:scale-[0.97] transition-transform">{L.calm}</button>
            <button onClick={() => setBpm(132)} className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold min-h-[40px] active:scale-[0.97] transition-transform">{L.stress}</button>
          </div>
          <p className="text-[11px] text-slate-400">{L.hint}</p>
        </div>
      </div>
    </div>
  );
}

export function OCDVisual({ currentLang }: VisualProps) {
  const reduced = useReducedMotion();
  const [broken, setBroken] = useState(false);
  const L = {
    en: { title: 'OCD — the worry loop', obs: 'Obsession', anx: 'Anxiety', comp: 'Compulsion', rel: 'Relief (brief)', break: 'Break the loop (ERP)', reset: 'Reset', note: 'ERP stops the compulsion — anxiety fades on its own' },
    hi: { title: 'OCD — चिंता का चक्र', obs: 'अवांछित विचार', anx: 'चिंता', comp: 'जबरदस्ती का काम', rel: 'थोड़ी राहत', break: 'चक्र तोड़ें (ERP)', reset: 'फिर से', note: 'ERP जबरदस्ती रोकता है — चिंता अपने आप घटती है' },
    gu: { title: 'OCD — ચિંતાનું ચક્ર', obs: 'અનિચ્છનીય વિચાર', anx: 'ચિંતા', comp: 'જબરદસ્તીનું કામ', rel: 'થોડી રાહત', break: 'ચક્ર તોડો (ERP)', reset: 'ફરીથી', note: 'ERP જબરદસ્તી રોકે છે — ચિંતા આપોઆપ ઘટે છે' },
  }[currentLang];
  const nodes = [L.obs, L.anx, L.comp, L.rel];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      <p className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">{L.title}</p>
      <div className="relative h-44 flex items-center justify-center">
        <svg viewBox="0 0 260 180" className="w-full h-full">
          {nodes.map((n, i) => {
            const ang = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const x = 130 + Math.cos(ang) * 62;
            const y = 90 + Math.sin(ang) * 62;
            return (
              <g key={n}>
                <circle cx={x} cy={y} r={26} fill={broken ? '#F0FDFA' : '#FFF1F2'} stroke={broken ? '#0D9488' : '#E11D48'} strokeWidth="2" />
                <text x={x} y={y + 4} textAnchor="middle" fontSize="9" fontWeight="700" fill={broken ? '#0F766E' : '#9F1239'}>{n}</text>
              </g>
            );
          })}
          {!broken && <motion.circle cx="130" cy="90" r="4" fill="#E11D48"
            animate={reduced ? {} : { rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '130px 90px' }} />}
          {broken && <text x="130" y="94" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0D9488">✓</text>}
        </svg>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <button onClick={() => setBroken(true)} disabled={broken} className="px-3 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white text-xs font-bold min-h-[40px] active:scale-[0.97] transition-transform">{L.break}</button>
        <button onClick={() => setBroken(false)} className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold min-h-[40px] active:scale-[0.97] transition-transform">{L.reset}</button>
      </div>
      <p className="text-[11px] text-slate-400 mt-2">{L.note}</p>
    </div>
  );
}

export function ADHDVisual({ currentLang }: VisualProps) {
  const reduced = useReducedMotion();
  const [focus, setFocus] = useState(25);
  const L = {
    en: { title: 'ADHD — the attention filter', noise: 'Noise', signal: 'Signal', low: 'Easily distracted', high: 'Focused', hint: 'Slide to see how focus changes' },
    hi: { title: 'ADHD — ध्यान फ़िल्टर', noise: 'शोर', signal: 'सिग्नल', low: 'आसानी से विचलित', high: 'केंद्रित', hint: 'स्लाइड कर ध्यान बदलें' },
    gu: { title: 'ADHD — ધ્યાન ફિલ્ટર', noise: 'શોર', signal: 'સિગ્નલ', low: 'સહેલાઈથી વિચલિત', high: 'કેન્દ્રિત', hint: 'સ્લાઇડ કરી ધ્યાન બદલો' },
  }[currentLang];
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
      <p className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3">{L.title}</p>
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-500 w-12">{L.noise}</span>
        <input type="range" min={0} max={100} value={focus} onChange={(e) => setFocus(+e.target.value)} className="flex-1 accent-teal-600" />
        <span className="text-xs text-slate-500 w-12 text-right">{L.signal}</span>
      </div>
      <div className="mt-3 relative h-20 rounded-lg overflow-hidden bg-slate-100">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span key={i} className="absolute w-2 h-2 rounded-full"
            style={{ left: `${(i * 37 + 11) % 95}%`, top: `${(i * 23 + 7) % 80}%`, backgroundColor: i % 3 === 0 ? '#0D9488' : '#CBD5E1' }}
            animate={reduced ? {} : { opacity: (i % 3 === 0 ? 1 : 0.25 + focus / 200), scale: i % 3 === 0 ? 1 : 0.6 + focus / 250 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} />
        ))}
        <span className="absolute bottom-1 right-2 text-xs font-bold" style={{ color: focus > 60 ? '#0D9488' : '#64748B' }}>{focus > 60 ? L.high : L.low}</span>
      </div>
      <p className="text-[11px] text-slate-400 mt-2">{L.hint}</p>
    </div>
  );
}

export function ConditionHeroVisual({ conditionId, currentLang }: { conditionId: string; currentLang: Language }) {
  const id = (conditionId || '').toLowerCase();
  if (id === 'depression') return <DepressionVisual currentLang={currentLang} />;
  if (id === 'gad' || id === 'panic' || id === 'social_anxiety') return <AnxietyVisual currentLang={currentLang} />;
  if (id === 'ocd') return <OCDVisual currentLang={currentLang} />;
  if (id === 'adhd_adult' || id === 'adhd') return <ADHDVisual currentLang={currentLang} />;
  return null;
}