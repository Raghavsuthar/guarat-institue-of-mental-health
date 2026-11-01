import React from 'react';
import { Volume2, VolumeX, Pause, Play, Square } from 'lucide-react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { Language } from '../types';

interface AudioReadAloudProps {
  text: string;
  currentLang: Language;
  title?: string;
  className?: string;
}

export const AudioReadAloud: React.FC<AudioReadAloudProps> = ({
  text,
  currentLang,
  title,
  className = '',
}) => {
  const { isSupported, isPlaying, isPaused, speak, pause, resume, stop } = useSpeechSynthesis();

  if (!isSupported) return null;

  const labels = {
    en: {
      listen: 'Listen',
      playing: 'Reading aloud...',
      paused: 'Paused',
      pause: 'Pause audio',
      resume: 'Resume audio',
      stop: 'Stop audio',
      disclaimer: 'Browser automated read-aloud for accessibility.',
    },
    hi: {
      listen: 'सुनें (ऑडियो)',
      playing: 'ऑडियो चल रहा है...',
      paused: 'रोका गया',
      pause: 'रोकें',
      resume: 'फिर से शुरू करें',
      stop: 'बंद करें',
      disclaimer: 'सुलभता के लिए स्वचालित वाचन।',
    },
    gu: {
      listen: 'સાંભળો (ઓડિયો)',
      playing: 'ઓડિયો શરૂ છે...',
      paused: 'અટકાવેલ',
      pause: 'અટકાવો',
      resume: 'ચાલુ કરો',
      stop: 'બંધ કરો',
      disclaimer: 'સરળતા ખાતર સ્વચાલિત વાચન.',
    },
  }[currentLang];

  const handleToggle = () => {
    if (isPlaying) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else {
      const fullSpeech = title ? `${title}. ${text}` : text;
      speak(fullSpeech, currentLang);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 p-1.5 px-3 rounded-lg border transition-all text-xs font-medium ${
        isPlaying
          ? 'bg-teal-50 border-teal-300 text-[#0f766e] shadow-xs'
          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
      } ${className}`}
    >
      <button
        onClick={handleToggle}
        className="flex items-center gap-1.5 cursor-pointer min-h-[32px] focus:outline-none"
        title={isPlaying ? (isPaused ? labels.resume : labels.pause) : labels.listen}
        aria-label={isPlaying ? (isPaused ? labels.resume : labels.pause) : labels.listen}
      >
        {isPlaying ? (
          isPaused ? (
            <Play className="w-4 h-4 text-[#0f766e]" />
          ) : (
            <Pause className="w-4 h-4 text-[#0f766e]" />
          )
        ) : (
          <Volume2 className="w-4 h-4 text-stone-600" />
        )}

        <span>
          {isPlaying
            ? isPaused
              ? labels.paused
              : labels.playing
            : labels.listen}
        </span>
      </button>

      {/* Animated wave bars while reading */}
      {isPlaying && !isPaused && (
        <div className="flex items-end gap-0.5 h-3 px-1" aria-hidden="true">
          <span className="w-0.5 h-2 bg-[#0f766e] animate-pulse" />
          <span className="w-0.5 h-3 bg-[#0f766e] animate-bounce" />
          <span className="w-0.5 h-1.5 bg-[#0f766e] animate-pulse" />
        </div>
      )}

      {/* Stop button when active */}
      {isPlaying && (
        <button
          onClick={stop}
          className="p-1 rounded hover:bg-teal-100 text-stone-500 hover:text-stone-800 transition cursor-pointer"
          title={labels.stop}
          aria-label={labels.stop}
        >
          <Square className="w-3.5 h-3.5 fill-current" />
        </button>
      )}
    </div>
  );
};
