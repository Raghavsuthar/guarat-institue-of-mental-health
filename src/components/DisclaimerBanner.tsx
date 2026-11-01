import React from 'react';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DisclaimerBannerProps {
  currentLang: Language;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ currentLang }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const t = translations[currentLang];

  return (
    <aside aria-label="Medical Disclaimer" className="bg-[#fcfbf9] border-b border-stone-200 text-stone-700">
      <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-stone-500 shrink-0 mt-1" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-xs text-stone-900 uppercase tracking-wide">
                  {t.disclaimer.title}:
                </span>
                <span className="text-xs text-stone-600">
                  {currentLang === 'en'
                    ? 'Educational Resource — Not Medical Advice or Diagnosis'
                    : currentLang === 'hi'
                    ? 'शैक्षणिक संसाधन — यह मेडिकल सलाह या जांच नहीं है'
                    : 'શૈક્ષણિક સાધન — આ કોઈ તબીબી સલાહ કે નિદાન નથી'}
                </span>
              </div>
              {!collapsed && (
                <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
                  {t.disclaimer?.banner || t.disclaimer?.text || ''}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-stone-500 hover:text-stone-800 p-2 rounded hover:bg-stone-100 transition shrink-0 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={collapsed ? 'Expand disclaimer' : 'Collapse disclaimer'}
          >
            {collapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </aside>
  );
};

