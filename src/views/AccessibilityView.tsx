import React from 'react';
import { Eye, Type, Globe, ShieldCheck, Heart, Keyboard } from 'lucide-react';
import { Language } from '../types';
import { PageFeedback } from '../components/PageFeedback';

interface AccessibilityViewProps {
  currentLang: Language;
}

export const AccessibilityView: React.FC<AccessibilityViewProps> = ({ currentLang }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2.5 text-[#115e59] mb-2">
          <Eye className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-wider">
            {currentLang === 'en' ? 'Accessibility & Inclusivity' : currentLang === 'hi' ? 'सुगमता एवं समावेशिता' : 'સુગમતા અને સમાવેશીતા'}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1c2430] tracking-tight">
          {currentLang === 'en'
            ? 'Commitment to Accessible Psychiatric Education'
            : currentLang === 'hi'
            ? 'सुलभ और समावेशी मनोरोग शिक्षा के प्रति हमारी प्रतिबद्धता'
            : 'સુગમ અને સૌ માટે ઉપલબ્ધ માનસિક શિક્ષણ'}
        </h1>
        <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
          {currentLang === 'en'
            ? 'Mental health education belongs to everyone. This website is intentionally engineered to be accessible, calm, readable, and respectful across ages, devices, and abilities.'
            : currentLang === 'hi'
            ? 'मानसिक स्वास्थ्य की जानकारी सभी के लिए सुलभ होनी चाहिए। इस पोर्टल को विशेष रूप से सरल, शांत, और दृष्टिबाधित व बुजुर्ग पाठकों के अनुकूल बनाया गया है।'
            : 'આ પોર્ટલ ખાસ કરીને વડીલો અને તમામ નાગરિકો માટે સરળ અને વાંચવામાં અનુકૂળ રહે તે રીતે તૈયાર કરાયું છે.'}
        </p>
      </div>

      {/* Feature Blocks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contrast & Sensory Comfort */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-teal-50 text-[#115e59] flex items-center justify-center border border-teal-200">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2430]">
            {currentLang === 'en' ? 'High Contrast & Sensory Safety' : 'उच्च कंट्रास्ट व नेत्र सुरक्षा'}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {currentLang === 'en'
              ? 'We use a calm cool-mineral background (#f6f8f7) and dark slate text (#1c2430) exceeding WCAG AA contrast (minimum 7:1 ratio). There are no flashing lights, auto-playing audio, or chaotic animations that could trigger sensory overload or migraine episodes.'
              : 'वेबसाइट पर आंखों को चुभने वाले रंग या फ्लैशिंग लाइट्स नहीं हैं। शांत रंगों का उपयोग किया गया है ताकि तनाव या माइग्रेन न बढ़े।'}
          </p>
        </div>

        {/* Font & Scaling */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200">
            <Type className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2430]">
            {currentLang === 'en' ? 'Comfortable Typography & Sizing' : 'स्पष्ट और बड़ा टेक्स्ट'}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {currentLang === 'en'
              ? 'Minimum body font size is 16px with comfortable line spacing (1.6x). The design natively supports 200% browser zoom (Ctrl/Cmd +) without breaking layout, horizontal scrolling, or hiding critical medical helpline notices.'
              : 'फॉन्ट का आकार बड़ा और पढ़ने में आरामदायक है। आप ब्राउज़र ज़ूम (Ctrl +) का उपयोग करके आसानी से टेक्स्ट बड़ा कर सकते हैं।'}
          </p>
        </div>

        {/* Keyboard Navigation */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center border border-blue-200">
            <Keyboard className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2430]">
            {currentLang === 'en' ? 'Full Keyboard Accessibility' : 'कीबोर्ड द्वारा आसान नेविगेशन'}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {currentLang === 'en'
              ? 'Every modal, tab, and search bar is fully operable via keyboard: use Tab / Shift+Tab to move, Enter / Space to activate, and Escape (ESC) to dismiss modals instantly. Press Ctrl+K (or Cmd+K) anywhere to open global search.'
              : 'माउस के बिना केवल कीबोर्ड (Tab और Enter) से पूरी वेबसाइट चलाई जा सकती है। ESC दबाकर किसी भी विंडो को तुरंत बंद किया जा सकता है।'}
          </p>
        </div>

        {/* Trilingual Equity */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-200">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#1c2430]">
            {currentLang === 'en' ? 'Equitable Trilingual Translations' : 'समान त्रिभाषी अनुवाद'}
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            {currentLang === 'en'
              ? 'All psychiatric clinical terms, medication explanations, and crisis guides are translated with culturally sensitive medical terminology into English, Hindi, and Gujarati so non-English speakers receive identical quality of care information.'
              : 'अंग्रेजी, हिन्दी और गुजराती तीनों भाषाओं में समान रूप से सभी जानकारियां उपलब्ध हैं ताकि भाषा किसी के इलाज में बाधा न बने।'}
          </p>
        </div>
      </div>

      {/* Screen Reader & Mobile Tap Targets */}
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
        <h3 className="text-sm font-bold text-[#1c2430] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#115e59]" />
          <span>{currentLang === 'en' ? 'Elderly & Mobile Touch Standards' : 'बुजुर्गों और मोबाइल उपयोगकर्ताओं के लिए सुविधा'}</span>
        </h3>
        <p className="text-xs text-stone-600 leading-relaxed">
          {currentLang === 'en'
            ? 'All interactive buttons, helpline triggers, and menu links enforce a minimum 44px to 48px physical tap target height to accommodate tremors, arthritis, or small mobile touchscreens. Floating emergency assistance is fixed in the bottom-left corner with persistent contrast.'
            : 'सभी बटन 44px से अधिक बड़े हैं ताकि बुजुर्ग या कांपते हाथों वाले मरीज भी बिना किसी परेशानी के आसानी से टैप कर सकें।'}
        </p>
      </div>

      {/* Page Feedback */}
      <PageFeedback pageId="accessibility" currentLang={currentLang} />
    </div>
  );
};
