import React, { useState } from 'react';
import { Download, Share, PlusSquare, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';

interface PWAInstallButtonProps {
  currentLang: Language;
  variant?: 'button' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ currentLang, variant = 'button' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('pwa_banner_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  if (isInstalled) return null;
  if (!isInstallable && !isIOS) return null;

  const labels = {
    en: {
      install: 'Install App',
      installIos: 'Install on iOS',
      offlineReady: 'Install for fast, offline medical access on your device.',
      iosTitle: 'Install on iPhone / iPad',
      iosStep1: 'Tap the Share button in Safari navigation bar (the square with an arrow).',
      iosStep2: 'Scroll down and tap "Add to Home Screen".',
      iosStep3: 'Tap "Add" at the top right to install.',
      close: 'Close',
    },
    hi: {
      install: 'ऐप इंस्टॉल करें',
      installIos: 'iOS पर इंस्टॉल करें',
      offlineReady: 'बिना इंटरनेट के भी त्वरित पहुंच के लिए अपने फोन पर ऐप इंस्टॉल करें।',
      iosTitle: 'iPhone / iPad पर इंस्टॉल करें',
      iosStep1: 'Safari ब्राउज़र में नीचे शेयर (Share) आइकन पर टैप करें।',
      iosStep2: 'नीचे स्क्रॉल करके "Add to Home Screen" चुनें।',
      iosStep3: 'ऊपर दाईं ओर "Add" पर टैप करें।',
      close: 'बंद करें',
    },
    gu: {
      install: 'એપ ઇન્સ્ટોલ કરો',
      installIos: 'iOS પર ઇન્સ્ટોલ કરો',
      offlineReady: 'ઓફલાઇન અને ઝડપી ઉપયોગ માટે તમારા ફોન પર એપ ડાઉનલોડ કરો.',
      iosTitle: 'iPhone / iPad પર ઇન્સ્ટોલ કરો',
      iosStep1: 'Safari બ્રાઉઝરમાં નીચે આપેલા Share આઇકન પર ટેપ કરો.',
      iosStep2: 'નીચે સ્ક્રોલ કરીને "Add to Home Screen" પસંદ કરો.',
      iosStep3: 'ઉપર જમણી બાજુએ "Add" પર ટેપ કરો.',
      close: 'બંધ કરો',
    },
  }[currentLang];

  const handleDismissBanner = () => {
    setBannerDismissed(true);
    try {
      sessionStorage.setItem('pwa_banner_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  // Banner variant for home/bottom notice
  if (variant === 'banner') {
    if (bannerDismissed) return null;
    return (
      <div className="my-6 p-4 rounded-xl border border-teal-200 bg-teal-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#0f766e] text-white shrink-0">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#0f766e]">
              {labels.install}
            </h4>
            <p className="text-xs text-stone-600 mt-0.5">
              {labels.offlineReady}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          {isInstallable && (
            <button
              onClick={install}
              className="px-3.5 py-1.5 rounded-lg bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-semibold shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              {labels.install}
            </button>
          )}

          {isIOS && (
            <button
              onClick={() => setShowIOSGuide(true)}
              className="px-3.5 py-1.5 rounded-lg bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-semibold shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Share className="w-3.5 h-3.5" />
              {labels.installIos}
            </button>
          )}

          <button
            onClick={handleDismissBanner}
            className="p-1.5 text-stone-500 hover:text-stone-700 transition cursor-pointer rounded-md"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* iOS Modal */}
        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-2 sm:p-4 overflow-y-auto overscroll-contain backdrop-blur-xs modal-scroll-backdrop" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div
              className="w-full max-w-sm rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-stone-200 my-2 sm:my-6 max-h-[96dvh] sm:max-h-[94dvh] overflow-y-auto overscroll-contain"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
                  <PlusSquare className="w-5 h-5 text-[#0f766e]" />
                  {labels.iosTitle}
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded text-stone-500 hover:text-stone-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <ol className="space-y-2.5 text-xs text-stone-700 list-decimal list-inside leading-relaxed">
                <li>{labels.iosStep1}</li>
                <li>{labels.iosStep2}</li>
                <li>{labels.iosStep3}</li>
              </ol>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-lg bg-stone-100 hover:bg-stone-200 py-2.5 text-xs font-semibold text-stone-800 transition cursor-pointer"
              >
                {labels.close}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Header button variant (compact)
  return (
    <>
      {isInstallable && (
        <button
          onClick={install}
          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-teal-50 hover:bg-teal-100 text-[#0f766e] text-xs font-semibold border border-teal-200 transition cursor-pointer min-h-[44px]"
          title={labels.install}
          aria-label={labels.install}
        >
          <Download className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">{labels.install}</span>
        </button>
      )}

      {isIOS && (
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold border border-stone-200 transition cursor-pointer min-h-[44px]"
          title={labels.installIos}
          aria-label={labels.installIos}
        >
          <Share className="w-3.5 h-3.5" />
          <span className="hidden xl:inline">App</span>
        </button>
      )}

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-2 sm:p-4 overflow-y-auto overscroll-contain backdrop-blur-xs modal-scroll-backdrop" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-4 sm:p-6 shadow-2xl border border-stone-200 my-2 sm:my-6 max-h-[96dvh] sm:max-h-[94dvh] overflow-y-auto overscroll-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
                <PlusSquare className="w-5 h-5 text-[#0f766e]" />
                {labels.iosTitle}
              </h3>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded text-stone-500 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ol className="space-y-2.5 text-xs text-stone-700 list-decimal list-inside leading-relaxed">
              <li>{labels.iosStep1}</li>
              <li>{labels.iosStep2}</li>
              <li>{labels.iosStep3}</li>
            </ol>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-lg bg-stone-100 hover:bg-stone-200 py-2.5 text-xs font-semibold text-stone-800 transition cursor-pointer"
            >
              {labels.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
