import React, { useEffect, useState } from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';
import { Language } from '../types';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

interface OfflineIndicatorProps {
  currentLang?: Language;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ currentLang = 'en' }) => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  const messages = {
    en: {
      title: 'Offline Mode Active',
      desc: 'You are currently disconnected. Previously opened medical pages remain fully accessible.',
    },
    hi: {
      title: 'ऑफलाइन मोड सक्रिय',
      desc: 'इंटरनेट कनेक्शन उपलब्ध नहीं है। पहले से खोले गए सभी मेडिकल पेज अभी भी उपलब्ध हैं।',
    },
    gu: {
      title: 'ઓફલાઇન મોડ સક્રિય',
      desc: 'ઇન્ટરનેટ બંધ છે. અગાઉ ખોલેલા તમામ પેજ સરળતાથી વાંચી શકાય છે.',
    },
  }[currentLang];

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 flex items-start gap-3 rounded-xl bg-stone-900 text-stone-100 p-3.5 shadow-2xl border border-stone-700 animate-fadeIn"
    >
      <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
        <WifiOff className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          {messages.title}
        </p>
        <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
          {messages.desc}
        </p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-stone-200 transition cursor-pointer"
        title="Check connection"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
    </div>
  );
};
