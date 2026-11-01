import React, { useState } from 'react';
import { Waves, AlertCircle, Clock, Eye, Sparkles, PhoneCall } from 'lucide-react';
import { Language } from '../../types';
import { UrgeSurfingTimer } from './UrgeSurfingTimer';
import { HALTCheckIn } from './HALTCheckIn';
import { DelayDistractDecide } from './DelayDistractDecide';
import { SensoryGrounding54321 } from './SensoryGrounding54321';

export type CravingToolId = 'surge' | 'halt' | '5ds' | 'grounding';

interface CravingToolkitProps {
  currentLang: Language;
  className?: string;
  initialTool?: CravingToolId;
  onOpenCrisis?: () => void;
  onNavigateResources?: () => void;
}

export const CravingToolkit: React.FC<CravingToolkitProps> = ({
  currentLang,
  className = '',
  initialTool = 'surge',
  onOpenCrisis,
  onNavigateResources,
}) => {
  const [activeTool, setActiveTool] = useState<CravingToolId>(initialTool);

  const t = {
    en: {
      heading: 'Craving De-Escalation Toolkit',
      subheading:
        'Evidence-based somatic and cognitive tools to ride through acute urges, break the automatic dopamine loop, and anchor your prefrontal cortex in safety.',
      toolSurge: 'Urge Surfing',
      toolHalt: 'H.A.L.T. Check-In',
      tool5Ds: '5 D\'s Delay Protocol',
      toolGrounding: '5-4-3-2-1 Grounding',
      disclaimer:
        'All exercises are non-instructional, self-regulatory somatic tools. If experiencing severe withdrawal symptoms (delirium, seizures, chest pain) or overdose, seek emergency medical care immediately.',
    },
    hi: {
      heading: 'तलब नियंत्रण व शांति टूलकिट (Craving De-Escalation)',
      subheading:
        'तीव्र तलब और मानसिक खिंचाव को शांत करने के वैज्ञानिक तरीके। ये अभ्यास मस्तिष्क के आदत चक्र को तोड़कर सोचने-समझने की क्षमता को तुरंत वापस लाते हैं।',
      toolSurge: 'अर्च सर्फिंग (लहर पर नियंत्रण)',
      toolHalt: 'HALT आत्म-परीक्षण',
      tool5Ds: '5 D विलंब तकनीक',
      toolGrounding: '5-4-3-2-1 संवेदी स्थिरता',
      disclaimer:
        'यह केवल शैक्षणिक व आत्म-नियंत्रण उपकरण है। यदि गंभीर विथड्रॉल लक्षण (दौरे, अत्यधिक कंपन, छाती में दर्द) हों, तो तुरंत आपातकालीन चिकित्सा सहायता लें।',
    },
    gu: {
      heading: 'તલપ નિયંત્રણ ટૂલકિટ (Craving De-Escalation)',
      subheading:
        'વૈજ્ઞાનિક રીતે સાબિત થયેલી પદ્ધતિઓ દ્વારા અચાનક ઉપડતી તલપ પર કાબૂ મેળવો અને મગજને શાંતિ તથા સ્થિરતા આપો.',
      toolSurge: 'અર્જ સર્ફિંગ (મોજાં પર કાબૂ)',
      toolHalt: 'HALT સેલ્ફ-ચેક',
      tool5Ds: '5 D પદ્ધતિ',
      toolGrounding: '5-4-3-2-1 સેન્સરી ગ્રાઉન્ડિંગ',
      disclaimer:
        'આ માત્ર મનોવૈજ્ઞાનિક શાંતિ માટેનું માર્ગદર્શન છે. અતિશય ગંભીર તકલીફમાં તાત્કાલિક હોસ્પિટલનો સંપર્ક કરો.',
    },
  }[currentLang];

  const tools = [
    {
      id: 'surge' as CravingToolId,
      name: t.toolSurge,
      icon: Waves,
      desc: '15-min wave extinction',
    },
    {
      id: 'halt' as CravingToolId,
      name: t.toolHalt,
      icon: AlertCircle,
      desc: 'Hungry • Angry • Lonely • Tired',
    },
    {
      id: '5ds' as CravingToolId,
      name: t.tool5Ds,
      icon: Clock,
      desc: 'Delay • Breathe • Distract',
    },
    {
      id: 'grounding' as CravingToolId,
      name: t.toolGrounding,
      icon: Eye,
      desc: '5 senses present anchoring',
    },
  ];

  return (
    <div className={`space-y-4 ${className}`} id="craving-de-escalation-toolkit">
      {/* Toolkit Header & Navigation */}
      <div className="rounded-2xl border border-teal-200/90 bg-gradient-to-r from-teal-900 via-teal-950 to-stone-900 p-5 sm:p-6 text-white shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-teal-800/80">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-800/60 text-teal-200 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-teal-300" />
              <span>Real-Time Somatic First Aid</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {t.heading}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:14416"
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Tele-MANAS: 14416</span>
            </a>
          </div>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-3xl">
          {t.subheading}
        </p>

        {/* Tool Switcher Tabs */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {tools.map((tool) => {
            const isActive = activeTool === tool.id;
            const Icon = tool.icon;

            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                type="button"
                className={`p-3 rounded-xl text-left transition border cursor-pointer ${
                  isActive
                    ? 'bg-white text-stone-900 border-white shadow-md'
                    : 'bg-teal-950/60 text-teal-100 border-teal-800/60 hover:bg-teal-900/60 hover:border-teal-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-teal-700' : 'text-teal-400'}`} />
                  <span className="font-bold text-xs sm:text-sm truncate">
                    {tool.name}
                  </span>
                </div>
                <p className={`mt-1 text-[11px] truncate ${isActive ? 'text-stone-500' : 'text-teal-300/80'}`}>
                  {tool.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Active Tool */}
      <div className="transition-opacity duration-200">
        {activeTool === 'surge' && (
          <UrgeSurfingTimer
            currentLang={currentLang}
            onOpenCrisis={onOpenCrisis}
            onNavigateResources={onNavigateResources}
          />
        )}

        {activeTool === 'halt' && (
          <HALTCheckIn
            currentLang={currentLang}
            onOpenCrisis={onOpenCrisis}
            onNavigateResources={onNavigateResources}
          />
        )}

        {activeTool === '5ds' && (
          <DelayDistractDecide
            currentLang={currentLang}
            onOpenCrisis={onOpenCrisis}
            onNavigateResources={onNavigateResources}
          />
        )}

        {activeTool === 'grounding' && (
          <SensoryGrounding54321
            currentLang={currentLang}
            onOpenCrisis={onOpenCrisis}
            onNavigateResources={onNavigateResources}
          />
        )}
      </div>

      {/* Clinical Disclaimer */}
      <p className="text-[11px] text-stone-500 leading-relaxed text-center px-4">
        {t.disclaimer}
      </p>
    </div>
  );
};
