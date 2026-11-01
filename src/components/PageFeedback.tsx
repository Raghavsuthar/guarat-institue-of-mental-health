import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Check, MessageSquare } from 'lucide-react';
import { Language } from '../types';

interface PageFeedbackProps {
  pageId: string;
  currentLang: Language;
}

export const PageFeedback: React.FC<PageFeedbackProps> = ({ pageId, currentLang }) => {
  const storageKey = `_feedback_${pageId}`;
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [rating, setRating] = useState<'yes' | 'somewhat' | 'no' | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  const feedbackTags = [
    {
      id: 'clear',
      label: {
        en: 'Clear and easy to understand',
        hi: 'स्पष्ट और समझने में आसान',
        gu: 'સ્પષ્ટ અને સરળ ભાષા',
      },
    },
    {
      id: 'reduced_worry',
      label: {
        en: 'Helped reduce worry or stigma',
        hi: 'चिंता या डर कम करने में मदद मिली',
        gu: 'ચિંતા અને ડર દૂર કરવામાં મદદ મળી',
      },
    },
    {
      id: 'good_for_family',
      label: {
        en: 'Helpful for my family member',
        hi: 'मेरे परिवार के सदस्य के लिए उपयोगी',
        gu: 'પરિવારના સભ્ય માટે ઉપયોગી',
      },
    },
    {
      id: 'needs_more_info',
      label: {
        en: 'Needs more practical tips',
        hi: 'अधिक व्यावहारिक सुझाव चाहिए',
        gu: 'વધુ વ્યવહારુ માર્ગદર્શન જોઈએ',
      },
    },
  ];

  const handleRate = (val: 'yes' | 'somewhat' | 'no') => {
    setRating(val);
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ rating, tags: selectedTags, date: new Date().toISOString() })
      );
    } catch {
      // ignore
    }
  };

  if (submitted) {
    return (
      <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200 text-xs text-stone-600 flex items-center justify-between gap-3 my-6">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>
            {currentLang === 'en'
              ? 'Thank you for your feedback! Your input helps us continuously refine this psychiatric education resource.'
              : currentLang === 'hi'
              ? 'आपकी प्रतिक्रिया के लिए धन्यवाद! यह सामग्री को बेहतर बनाने में हमारी सहायता करती है।'
              : 'તમારા પ્રતિસાદ બદલ આભાર! આ શિક્ષણ સામગ્રીને વધુ ઉપયોગી બનાવવામાં મદદરૂપ થશે.'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-xs my-6 text-xs text-stone-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#115e59]" />
          <span className="font-semibold text-stone-800 text-sm">
            {currentLang === 'en'
              ? 'Was this educational guide helpful?'
              : currentLang === 'hi'
              ? 'क्या यह जानकारी आपके लिए उपयोगी रही?'
              : 'શું આ માહિતી તમારા માટે ઉપયોગી રહી?'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleRate('yes')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              rating === 'yes'
                ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'Yes' : currentLang === 'hi' ? 'हाँ' : 'હા'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleRate('somewhat')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              rating === 'somewhat'
                ? 'bg-amber-50 border-amber-500 text-amber-800 font-semibold'
                : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <span>{currentLang === 'en' ? 'Somewhat' : currentLang === 'hi' ? 'कुछ हद तक' : 'થોડી ઘણી'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleRate('no')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition cursor-pointer min-h-[38px] flex items-center gap-1.5 ${
              rating === 'no'
                ? 'bg-stone-200 border-stone-400 text-stone-900 font-semibold'
                : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>{currentLang === 'en' ? 'No' : currentLang === 'hi' ? 'नहीं' : 'ના'}</span>
          </button>
        </div>
      </div>

      {rating && (
        <div className="mt-4 pt-3 border-t border-stone-100 animate-fadeIn space-y-3">
          <p className="text-[11px] text-stone-500 font-medium">
            {currentLang === 'en'
              ? 'Select any statements that apply (optional):'
              : currentLang === 'hi'
              ? 'कृपया कोई उपयुक्त विकल्प चुनें (वैकल्पिक):'
              : 'કોઈપણ લાગુ પડતો વિકલ્પ પસંદ કરો (મરજિયાત):'}
          </p>
          <div className="flex flex-wrap gap-2">
            {feedbackTags.map((tag) => {
              const active = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`px-2.5 py-1 rounded-full text-xs transition cursor-pointer ${
                    active
                      ? 'bg-[#115e59] text-white'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200'
                  }`}
                >
                  {tag.label[currentLang]}
                </button>
              );
            })}
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-1.5 rounded-lg bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition cursor-pointer"
            >
              {currentLang === 'en' ? 'Submit Feedback' : currentLang === 'hi' ? 'प्रतिक्रिया भेजें' : 'પ્રતિસાદ મોકલો'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

