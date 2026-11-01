import React, { useState } from 'react';
import { Play, Shield } from 'lucide-react';
import { Language } from '../types';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  currentLang: Language;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, currentLang }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) return null;

  const labels = {
    en: {
      play: 'Play Educational Video',
      privacyNotice: 'Privacy-enhanced mode (youtube-nocookie.com)',
    },
    hi: {
      play: 'शैक्षिक वीडियो देखें',
      privacyNotice: 'गोपनीयता-संवर्धित मोड (youtube-nocookie.com)',
    },
    gu: {
      play: 'શૈક્ષણિક વિડિઓ જુઓ',
      privacyNotice: 'પ્રાઇવસી સુરક્ષિત મોડ (youtube-nocookie.com)',
    },
  }[currentLang];

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-stone-200 shadow-md bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-stone-200 shadow-sm bg-stone-900 group">
      {/* Fallback thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
        loading="lazy"
      />

      {/* Play Overlay */}
      <button
        onClick={() => setIsPlaying(true)}
        aria-label={`${labels.play}: ${title}`}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/50 transition cursor-pointer"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-600 group-hover:bg-teal-700 text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition">
          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
        </div>
        <span className="mt-3 text-xs sm:text-sm font-semibold text-white bg-black/60 px-3 py-1 rounded-full">
          {labels.play}
        </span>
      </button>

      {/* Privacy Badge */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] text-stone-300 bg-black/70 px-2 py-0.5 rounded">
        <Shield className="w-3 h-3 text-teal-400" />
        <span>{labels.privacyNotice}</span>
      </div>
    </div>
  );
};
