import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  AlertTriangle,
  PhoneCall,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';
import { Language } from '../types';
import { faqsData } from '../data/faqs';
import { glossaryData } from '../data/glossary';
import { recordEvent } from '../utils/analytics';
import { isCrisisQuery } from '../utils/crisisDetection';

interface EducationalQAAssistantProps {
  currentLang: Language;
  onOpenCrisis: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  isCrisis?: boolean;
  timestamp: Date;
}

export const EducationalQAAssistant: React.FC<EducationalQAAssistantProps> = ({
  currentLang,
  onOpenCrisis,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const t = {
    en: {
      buttonLabel: 'Ask Educational Question',
      panelTitle: 'Gujarat Institute of Mental Health — Education Assistant',
      disclaimer: 'This is an educational tool, not a doctor. It cannot diagnose or treat you.',
      placeholder: 'Ask about mental health conditions, therapy types, myths...',
      send: 'Send',
      emptyState: 'Ask any psychiatric education question. For example: "What is CBT?", "Difference between anxiety and panic", or "How do SSRIs work biologically?"',
      emergencyNotice: 'If in acute distress, call Tele-MANAS 14416 (24x7 toll-free) or tap Crisis Help below.',
      crisisButton: '24x7 Crisis Helplines',
      rateLimitWarning: 'Please wait a moment before sending another query.',
    },
    hi: {
      buttonLabel: 'शैक्षिक प्रश्न पूछें',
      panelTitle: ' — शैक्षिक सहायक',
      disclaimer: 'यह केवल एक शैक्षिक साधन है, डॉक्टर नहीं। यह निदान या उपचार नहीं कर सकता।',
      placeholder: 'मानसिक स्वास्थ्य, थेरेपी या भ्रांतियों के बारे में पूछें...',
      send: 'भेजें',
      emptyState: 'कोई भी शैक्षिक प्रश्न पूछें। जैसे: "CBT क्या है?", "चिंता और पैनिक में क्या अंतर है?", या "अवसाद के जैविक कारण কি हैं?"',
      emergencyNotice: 'यदि आप गंभीर संकट में हैं, तो 14416 (टेली-मानस) पर कॉल करें या नीचे आपातकालीन सहायता देखें।',
      crisisButton: '24x7 संकट हेल्पलाइन',
      rateLimitWarning: 'कृपया अगला प्रश्न पूछने से पहले थोड़ा इंतजार करें।',
    },
    gu: {
      buttonLabel: 'શૈક્ષણિક પ્રશ્ન પૂછો',
      panelTitle: ' — શૈક્ષણિક સહાયક',
      disclaimer: 'આ માત્ર શૈક્ષણિક સાધન છે, ડૉક્ટર નથી. તે નિદાન કે સારવાર કરી શકતું નથી.',
      placeholder: 'માનસિક સ્થિતિઓ, થેરાપી કે વહેમ વિશે પૂછો...',
      send: 'મોકલો',
      emptyState: 'કોઈપણ શૈક્ષણિક પ્રશ્ન પૂછો. જેમ કે: "CBT શું છે?", "ચિંતા અને પેનિક વચ્ચેનો તફાવત", અથવા "ડિપ્રેશનનું વૈજ્ઞાનિક કારણ શું છે?"',
      emergencyNotice: 'જો તમે સંકટમાં હોવ, તો 14416 (ટેલી-માનસ) પર કોલ કરો અથવા નીચે આપાતકાલીન સહાય જુઓ.',
      crisisButton: '24x7 કટોકટી હેલ્પલાઇન',
      rateLimitWarning: 'કૃપા કરીને ફરીથી પૂછતા પહેલા થોડી રાહ જુઓ.',
    },
  }[currentLang];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputQuery.trim();
    if (!query || isTyping) return;

    setInputQuery('');
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    recordEvent('qa_assistant', 'query', currentLang);

    // 1. MANDATORY CLIENT CRISIS SHORT-CIRCUIT
    if (isCrisisQuery(query)) {
      setIsTyping(false);
      const crisisMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text:
          currentLang === 'hi'
            ? 'यदि आप या आपका कोई परिचित संकट में है, तो कृपया तुरंत सहायता लें। भारत सरकार की निःशुल्क हेल्पलाइन टेली-मानस 14416 (24x7) पर अभी कॉल करें।'
            : currentLang === 'gu'
            ? 'જો તમે અથવા કોઈ નજીકની વ્યક્તિ સંકટમાં હોય, તો કૃપા કરીને તરત જ સહાય લો. ભારત સરકારની મફત હેલ્પલાઇન ટેલી-માનસ 14416 (24x7) પર કૉલ કરો.'
            : 'If you or someone you know is in acute distress or having thoughts of self-harm, please reach out immediately. Free, confidential support is available 24/7 on Tele-MANAS: 14416 (toll-free) or emergency services at 112.',
        isCrisis: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, crisisMsg]);
      return;
    }

    // 2. Query API Endpoint
    setIsTyping(true);
    try {
      const res = await fetch('/api/qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, lang: currentLang }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.crisis) {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 2).toString(),
              sender: 'assistant',
              text: data.message,
              isCrisis: true,
              timestamp: new Date(),
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 2).toString(),
              sender: 'assistant',
              text: data.answer,
              timestamp: new Date(),
            },
          ]);
        }
      } else {
        throw new Error('API query failed');
      }
    } catch {
      // Fallback: Smart local education match from FAQs & Glossary
      const qLower = query.toLowerCase();
      let matchedAnswer = '';

      // Check FAQs
      const matchedFaq = faqsData.find(
        (f) =>
          f.question[currentLang].toLowerCase().includes(qLower) ||
          f.answer[currentLang].toLowerCase().includes(qLower)
      );

      if (matchedFaq) {
        matchedAnswer = `${matchedFaq.question[currentLang]}\n\n${matchedFaq.answer[currentLang]}`;
      } else {
        // Check Glossary
        const matchedTerm = glossaryData.find(
          (g) =>
            g.term[currentLang].toLowerCase().includes(qLower) ||
            g.definition[currentLang].toLowerCase().includes(qLower)
        );

        if (matchedTerm) {
          matchedAnswer = `**${matchedTerm.term[currentLang]}**\n\n${matchedTerm.definition[currentLang]}`;
        }
      }

      if (!matchedAnswer) {
        matchedAnswer =
          currentLang === 'hi'
            ? 'यह पोर्टल एक सार्वजनिक मनोचिकित्सा शिक्षा संसाधन है। किसी भी व्यक्तिगत स्वास्थ्य समस्या के लिए कृपया पंजीकृत मनोचिकित्सक से परामर्श लें।'
            : currentLang === 'gu'
            ? 'આ પોર્ટલ જાહેર મનોચિકિત્સા શિક્ષણ સંસાધન છે. વ્યક્તિગત સ્વાસ્થ્ય સમસ્યા માટે કૃપા કરીને યોગ્ય મનોચિકિત્સકની મુલાકાત લો.'
            : 'This platform provides factual psychiatric education compiled by Gujarat Institute of Mental Health. For individual diagnosis and treatment, please consult a qualified psychiatrist or medical doctor.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 3).toString(),
          sender: 'assistant',
          text: matchedAnswer,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Action Pill / Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-teal-700 via-teal-800 to-indigo-850 hover:from-teal-600 hover:to-indigo-800 text-white rounded-full shadow-lg shadow-teal-950/25 hover:shadow-xl hover:shadow-indigo-900/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 cursor-pointer border border-teal-400/40 text-xs sm:text-sm font-semibold min-h-[44px]"
          aria-label={t.buttonLabel}
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse drop-shadow-xs" />
          <span className="tracking-tight">{t.buttonLabel}</span>
        </button>
      )}

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div
          className="fixed bottom-2 right-2 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-16px)] sm:w-[420px] max-h-[96dvh] sm:max-h-[94dvh] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="qa-assistant-title"
        >
          {/* Header */}
          <div className="bg-teal-900 text-white px-4 py-2.5 sm:py-3 flex items-center justify-between shrink-0 border-b border-teal-800">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-teal-800 text-amber-300">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h3 id="qa-assistant-title" className="text-xs sm:text-sm font-bold leading-tight">
                  {t.panelTitle}
                </h3>
                <span className="text-[10px] text-teal-200 font-medium">Verified Psychiatric Education</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close educational assistant"
              className="p-1.5 rounded-lg text-teal-200 hover:text-white hover:bg-teal-800 transition cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Persistent Mandatory Medical Disclaimer */}
          <div className="bg-amber-50/90 border-b border-amber-200 px-3.5 py-1.5 sm:py-2 flex items-start gap-2 text-[11px] text-amber-900 shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-tight font-medium">{t.disclaimer}</p>
          </div>

          {/* Conversation Body */}
          <div
            className="flex-1 p-3 sm:p-4 min-h-0 overflow-y-auto space-y-3.5 bg-stone-50/50 overscroll-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {messages.length === 0 ? (
              <div className="py-6 px-3 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto border border-teal-100">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed max-w-xs mx-auto">
                  {t.emptyState}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenCrisis}
                    className="inline-flex items-center gap-1.5 text-xs text-red-600 font-semibold hover:underline"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>{t.crisisButton}</span>
                  </button>
                </div>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-teal-700 text-white rounded-br-xs'
                        : msg.isCrisis
                        ? 'bg-red-50 text-red-900 border border-red-200 rounded-bl-xs'
                        : 'bg-white text-stone-800 border border-stone-200 rounded-bl-xs shadow-2xs'
                    }`}
                  >
                    {msg.isCrisis && (
                      <div className="flex items-center gap-1.5 font-bold text-red-700 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Immediate Crisis Support:</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.isCrisis && (
                      <div className="mt-3 pt-2 border-t border-red-200/80 flex flex-wrap gap-2">
                        <a
                          href="tel:14416"
                          className="px-2.5 py-1.5 rounded-md bg-red-600 text-white font-bold text-[11px] inline-flex items-center gap-1"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>Call Tele-MANAS: 14416</span>
                        </a>
                        <button
                          onClick={onOpenCrisis}
                          className="px-2.5 py-1.5 rounded-md bg-white border border-red-300 text-red-700 font-semibold text-[11px]"
                        >
                          View Emergency Resources
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 rounded-2xl rounded-bl-xs px-3.5 py-2 text-xs text-stone-500 flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-teal-600" />
                  <span>Consulting medical education guidelines...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={t.placeholder}
              maxLength={280}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              aria-label={t.send}
              className="p-2 bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white rounded-xl transition cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Micro Footer Notice */}
          <div className="bg-stone-50 px-3 py-1.5 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
            <span>No personal data stored</span>
            <span>Tele-MANAS: 14416 (24x7)</span>
          </div>
        </div>
      )}
    </>
  );
};


