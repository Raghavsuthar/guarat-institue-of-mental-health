import React, { useState, useEffect, useRef } from 'react';
import { X, Download, Share2, Image as ImageIcon, Smartphone, Square, Check, Loader2 } from 'lucide-react';
import { ShareCardData, ShareCardFormat, Language } from '../types';
import { generateShareCardCanvas, downloadShareCard } from '../utils/shareCardCanvas';
import { recordEvent } from '../utils/analytics';

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ShareCardData | null;
  currentLang: Language;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({
  isOpen,
  onClose,
  data,
  currentLang,
}) => {
  const [format, setFormat] = useState<ShareCardFormat>('square');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpen || !data) {
      setPreviewUrl(null);
      return;
    }

    setGenerating(true);
    // Render preview with requestAnimationFrame
    const frame = requestAnimationFrame(() => {
      try {
        const fullData: ShareCardData = {
          ...data,
          format,
          lang: currentLang,
        };
        const canvas = generateShareCardCanvas(fullData);
        canvasRef.current = canvas;
        setPreviewUrl(canvas.toDataURL('image/png'));
      } catch (e) {
        console.error('Failed to generate card canvas', e);
      } finally {
        setGenerating(false);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [isOpen, data, format, currentLang]);

  if (!isOpen || !data) return null;

  const labels = {
    en: {
      title: 'Generate Shareable Health Card',
      subtitle: 'Verified public education card tailored for WhatsApp Status, Instagram, and community outreach.',
      square: 'Square (1:1)',
      squareHint: 'Best for WhatsApp Chat, Status & Instagram Post',
      story: 'Story (9:16)',
      storyHint: 'Best for Instagram Story & Full Screen',
      download: 'Download High-Res Card',
      share: 'Share Image',
      copied: 'Card copied to clipboard!',
      disclaimerNote: 'All generated cards carry Gujarat Institute of Mental Health attribution and 24x7 crisis helplines.',
      close: 'Close',
    },
    hi: {
      title: 'साझा करने योग्य स्वास्थ्य कार्ड बनाएं',
      subtitle: 'व्हाट्सएप स्टेटस, इंस्टाग्राम और सामुदायिक जागरूकता के लिए सत्यापित शिक्षा कार्ड।',
      square: 'वर्ग (1:1)',
      squareHint: 'व्हाट्सएप चैट, स्टेटस और इंस्टाग्राम पोस्ट के लिए',
      story: 'स्टोरी (9:16)',
      storyHint: 'इंस्टाग्राम स्टोरी और पूर्ण स्क्रीन के लिए',
      download: 'उच्च-गुणवत्ता कार्ड डाउनलोड करें',
      share: 'तस्वीर साझा करें',
      copied: 'कार्ड कॉपी हो गया!',
      disclaimerNote: 'सभी कार्डों में  का संदर्भ और 24x7 हेल्पलाइन शामिल है।',
      close: 'बंद करें',
    },
    gu: {
      title: 'શેર કરી શકાય તેવું હેલ્થ કાર્ડ બનાવો',
      subtitle: 'વોટ્સએપ સ્ટેટસ, ઇન્સ્ટાગ્રામ અને લોકજાગૃતિ માટે પ્રમાણિત કાર્ડ.',
      square: 'ચોરસ (1:1)',
      squareHint: 'વોટ્સએપ ચેટ, સ્ટેટસ અને ઇન્સ્ટાગ્રામ પોસ્ટ માટે શ્રેષ્ઠ',
      story: 'સ્ટોરી (9:16)',
      storyHint: 'ઇન્સ્ટાગ્રામ સ્ટોરી અને ફુલ સ્ક્રીન માટે શ્રેષ્ઠ',
      download: 'કાર્ડ ડાઉનલોડ કરો',
      share: 'કાર્ડ શેર કરો',
      copied: 'કાર્ડ કોપી થઈ ગયું!',
      disclaimerNote: 'દરેક કાર્ડમાં નું નામ અને 24x7 હેલ્પલાઇન સમાવિષ્ટ છે.',
      close: 'બંધ કરો',
    },
  }[currentLang];

  const handleDownload = () => {
    if (!data) return;
    const cardType = data.type || data.kind || 'card';
    recordEvent('share_card', 'download', `${cardType}:${format}`);
    downloadShareCard({ ...data, format, lang: currentLang }, '-health-card');
  };

  const handleNativeShare = async () => {
    if (!canvasRef.current || !data) return;
    const cardType = data.type || data.kind || 'card';
    recordEvent('share_card', 'share', `${cardType}:${format}`);

    try {
      canvasRef.current.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `mental-health-${cardType}-${format}.png`, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: data.title,
            text: `${data.title} - Gujarat Institute of Mental Health`,
            files: [file],
          });
        } else {
          // fallback to download
          handleDownload();
        }
      });
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        handleDownload();
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop"
      style={{ WebkitOverflowScrolling: 'touch' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-card-title"
    >
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Header */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-teal-50 text-teal-700">
                <ImageIcon className="w-4 h-4" />
              </span>
              <h3 id="share-card-title" className="font-semibold text-stone-900 text-base sm:text-lg">
                {labels.title}
              </h3>
            </div>
            <p className="text-xs text-stone-500 mt-0.5">
              {labels.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label={labels.close}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div
          className="p-4 sm:p-5 flex-1 min-h-0 overflow-y-auto space-y-4 sm:space-y-5 overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Format selector */}
          <div>
            <span className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
              Select Aspect Ratio:
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormat('square')}
                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  format === 'square'
                    ? 'border-teal-600 bg-teal-50/70 text-teal-950 ring-1 ring-teal-600'
                    : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                }`}
              >
                <Square className={`w-5 h-5 shrink-0 mt-0.5 ${format === 'square' ? 'text-teal-700' : 'text-stone-400'}`} />
                <div>
                  <div className="font-semibold text-sm">{labels.square}</div>
                  <div className="text-xs text-stone-500 mt-0.5">{labels.squareHint}</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFormat('story')}
                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  format === 'story'
                    ? 'border-teal-600 bg-teal-50/70 text-teal-950 ring-1 ring-teal-600'
                    : 'border-stone-200 bg-white hover:bg-stone-50 text-stone-700'
                }`}
              >
                <Smartphone className={`w-5 h-5 shrink-0 mt-0.5 ${format === 'story' ? 'text-teal-700' : 'text-stone-400'}`} />
                <div>
                  <div className="font-semibold text-sm">{labels.story}</div>
                  <div className="text-xs text-stone-500 mt-0.5">{labels.storyHint}</div>
                </div>
              </button>
            </div>
          </div>

          {/* Live Canvas Preview */}
          <div className="bg-stone-100/80 rounded-xl p-4 flex flex-col items-center justify-center border border-stone-200 min-h-[300px]">
            {generating ? (
              <div className="flex flex-col items-center gap-2 py-12 text-stone-500 text-sm">
                <Loader2 className="w-6 h-6 animate-spin text-teal-600" />
                <span>Rendering high-resolution typography...</span>
              </div>
            ) : previewUrl ? (
              <div className="relative max-h-[380px] overflow-hidden rounded-lg shadow-md border border-stone-300">
                <img
                  src={previewUrl}
                  alt={data.title}
                  className="max-h-[380px] w-auto object-contain block"
                />
              </div>
            ) : null}
            <span className="text-[11px] text-stone-500 mt-2 text-center">
              {labels.disclaimerNote}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={handleDownload}
              className="w-full sm:flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm shadow-xs transition cursor-pointer min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>{labels.download}</span>
            </button>

            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <button
                onClick={handleNativeShare}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 font-semibold text-sm transition cursor-pointer min-h-[44px]"
              >
                <Share2 className="w-4 h-4 text-teal-700" />
                <span>{labels.share}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


