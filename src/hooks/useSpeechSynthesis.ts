import { useState, useEffect, useRef, useCallback } from 'react';
import { Language } from '../types';

export function useSpeechSynthesis() {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const updateVoices = () => {
        const available = window.speechSynthesis.getVoices();
        setVoices(available);
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;

      return () => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      };
    }
  }, []);

  const getBestVoice = useCallback((lang: Language): SpeechSynthesisVoice | null => {
    if (!voices.length) return null;

    if (lang === 'hi') {
      const hiVoice = voices.find((v) => v.lang.toLowerCase().startsWith('hi'));
      if (hiVoice) return hiVoice;
    } else if (lang === 'gu') {
      const guVoice = voices.find((v) => v.lang.toLowerCase().startsWith('gu'));
      if (guVoice) return guVoice;
    } else {
      // English - prefer Indian English if available, else standard English
      const enInVoice = voices.find((v) => v.lang.toLowerCase() === 'en-in');
      if (enInVoice) return enInVoice;
      const enVoice = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
      if (enVoice) return enVoice;
    }

    return null;
  }, [voices]);

  const speak = useCallback((text: string, lang: Language) => {
    if (!isSupported) return;

    window.speechSynthesis.cancel(); // Stop any active speech

    // Clean text: strip markdown headers, bullets, asterisks for natural reading
    const cleanText = text
      .replace(/#{1,6}\s?/g, '')
      .replace(/[*_~`]/g, '')
      .replace(/\[VERIFY:[^\]]*\]/g, '')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;

    const voice = getBestVoice(lang);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = lang === 'hi' ? 'hi-IN' : lang === 'gu' ? 'gu-IN' : 'en-US';
    }

    utterance.rate = 0.92; // Slightly measured, calm educational pace
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error', e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [isSupported, getBestVoice]);

  const pause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, [isSupported]);

  return {
    isSupported,
    isPlaying,
    isPaused,
    speak,
    pause,
    resume,
    stop,
  };
}
