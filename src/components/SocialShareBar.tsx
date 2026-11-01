import React, { useState, useMemo } from 'react';
import { Share2, Check, Copy, MessageCircle, Image as ImageIcon } from 'lucide-react';
import { Language, ShareCardData } from '../types';
import { BASE_URL } from '../utils/seo';
import { ShareCardModal } from './ShareCardModal';

interface SocialShareBarProps {
  title: string;
  path: string; // e.g. "conditions/depression"
  currentLang: Language;
  subtitle?: string;
  className?: string;
  variant?: 'inline' | 'compact' | 'pill';
  cardData?: ShareCardData;
}

export const SocialShareBar: React.FC<SocialShareBarProps> = ({
  title,
  path,
  currentLang,
  subtitle,
  className = '',
  variant = 'inline',
  cardData,
}) => {
  const [copied, setCopied] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);

  // Construct absolute URL based on current route language
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const url = cleanPath ? `${BASE_URL}/${currentLang}/${cleanPath}` : `${BASE_URL}/${currentLang}`;

  // Comprehensive localized pre-filled message for WhatsApp & sharing
  const prefilledMessage = useMemo(() => {
    const cleanSub = subtitle ? subtitle.trim().replace(/\s+/g, ' ') : '';
    const briefSub = cleanSub.length > 180 ? `${cleanSub.slice(0, 177)}...` : cleanSub;

    if (currentLang === 'hi') {
      return `*${title}*\n${briefSub ? `\n${briefSub}\n` : ''}\nGujarat Institute of Mental Health द्वारा प्रामाणिक मानसिक स्वास्थ्य जानकारी:\n🔗 ${url}`;
    }
    if (currentLang === 'gu') {
      return `*${title}*\n${briefSub ? `\n${briefSub}\n` : ''}\nGujarat Institute of Mental Health દ્વારા પુરાવા-આધારિત માનસિક આરોગ્ય માર્ગદર્શિકા:\n🔗 ${url}`;
    }
    // Default English
    return `*${title}*\n${briefSub ? `\n${briefSub}\n` : ''}\nEvidence-based psychiatric education by Gujarat Institute of Mental Health:\n🔗 ${url}`;
  }, [title, subtitle, currentLang, url]);

  const labels = {
    en: {
      shareWhatsApp: 'Share on WhatsApp',
      webShare: 'Web Share',
      copyLink: 'Copy Link',
      copied: 'Link Copied!',
      shared: 'Shared / Copied!',
      shareLabel: 'Share:',
      cardButton: 'Share Card',
      cardTitle: 'Create shareable graphic card',
    },
    hi: {
      shareWhatsApp: 'व्हाट्सएप पर शेयर करें',
      webShare: 'वेब शेयर',
      copyLink: 'लिंक कॉपी करें',
      copied: 'लिंक कॉपी हो गया!',
      shared: 'शेयर संदेश कॉपी हुआ!',
      shareLabel: 'शेयर करें:',
      cardButton: 'कार्ड बनाएं',
      cardTitle: 'साझा करने योग्य कार्ड बनाएं',
    },
    gu: {
      shareWhatsApp: 'વોટ્સએપ પર શેર કરો',
      webShare: 'વેબ શેર',
      copyLink: 'લિંક કોપી કરો',
      copied: 'લિંક કોપી થઈ ગઈ!',
      shared: 'શેર સંદેશ કોપી થઈ!',
      shareLabel: 'શેર કરો:',
      cardButton: 'કાર્ડ બનાવો',
      cardTitle: 'શેર કાર્ડ બનાવો',
    },
  }[currentLang];

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(prefilledMessage)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWebShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: `${title} | Gujarat Institute of Mental Health`,
          text: subtitle || title,
          url,
        });
        return;
      } catch (err) {
        if ((err as Error).name === 'AbortError') {
          return;
        }
      }
    }

    // Fallback if navigator.share is unavailable or errors
    try {
      await navigator.clipboard.writeText(prefilledMessage);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2500);
    } catch {
      handleCopy(e);
    }
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // ignore
    });
  };

  // COMPACT VARIANT (Used in headers & next to Audio Read-Aloud)
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 flex-wrap ${className}`}>
        {/* Consistent Share on WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs shadow-xs transition cursor-pointer min-h-[36px]"
          title={labels.shareWhatsApp}
          aria-label={labels.shareWhatsApp}
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>{labels.shareWhatsApp}</span>
        </button>

        {/* Consistent Web Share Button */}
        <button
          onClick={handleWebShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium text-xs border border-stone-200 transition cursor-pointer min-h-[36px]"
          title={labels.webShare}
          aria-label={labels.webShare}
        >
          {shareFeedback ? (
            <>
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-teal-700 font-semibold">{labels.shared}</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-stone-600" />
              <span>{labels.webShare}</span>
            </>
          )}
        </button>

        {/* Copy Link Helper Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-600 text-xs border border-stone-200 transition cursor-pointer min-h-[36px]"
          title={labels.copyLink}
          aria-label={labels.copyLink}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-teal-700 font-medium">{labels.copied}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">{labels.copyLink}</span>
            </>
          )}
        </button>
      </div>
    );
  }

  // INLINE VARIANT (Full standard footer bar on detail views)
  return (
    <div className={`flex flex-wrap items-center gap-2 pt-3 pb-1 border-t border-stone-200/80 ${className}`}>
      <span className="text-xs text-stone-500 font-semibold mr-0.5">
        {labels.shareLabel}
      </span>

      {/* Primary: Share on WhatsApp */}
      <button
        onClick={handleWhatsApp}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-xs transition cursor-pointer min-h-[38px]"
        title={labels.shareWhatsApp}
        aria-label={labels.shareWhatsApp}
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>{labels.shareWhatsApp}</span>
      </button>

      {/* Primary: Web Share */}
      <button
        onClick={handleWebShare}
        className="flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold border border-stone-200 transition cursor-pointer min-h-[38px]"
        title={labels.webShare}
        aria-label={labels.webShare}
      >
        {shareFeedback ? (
          <>
            <Check className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-teal-700 font-semibold">{labels.shared}</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-stone-600" />
            <span>{labels.webShare}</span>
          </>
        )}
      </button>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium border border-stone-200 transition cursor-pointer min-h-[38px]"
        title={labels.copyLink}
        aria-label={labels.copyLink}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-teal-700 font-semibold">{labels.copied}</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-stone-500" />
            <span>{labels.copyLink}</span>
          </>
        )}
      </button>

      {/* Shareable Card Generator Trigger */}
      {cardData && (
        <button
          onClick={() => setShowCardModal(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold border border-teal-200/80 transition cursor-pointer min-h-[38px] ml-auto sm:ml-0"
          title={labels.cardTitle}
        >
          <ImageIcon className="w-3.5 h-3.5 text-teal-700" />
          <span>{labels.cardButton}</span>
        </button>
      )}

      {cardData && (
        <ShareCardModal
          isOpen={showCardModal}
          onClose={() => setShowCardModal(false)}
          data={cardData}
          currentLang={currentLang}
        />
      )}
    </div>
  );
};


