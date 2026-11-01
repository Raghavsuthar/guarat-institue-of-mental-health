import React from 'react';
import { ShieldCheck, Phone } from 'lucide-react';
import { Language, ActiveTab } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onTabChange: (tab: ActiveTab) => void;
  onOpenCrisis: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onTabChange,
  onOpenCrisis,
}) => {
  const t = translations[currentLang];

  return (
    <footer className="aurora-footer bg-white text-slate-700 border-t border-slate-200/80 text-sm">
      {/* Visual Identity Fine Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#0d9488] via-[#f59e0b] to-[#7c3aed]" aria-hidden="true" />

      {/* Top Crisis Reminder Bar - High alert, radiant contrast */}
      <div className="bg-gradient-to-r from-rose-50/90 via-red-50/80 to-rose-50/90 px-4 py-3.5 border-b border-rose-200/70">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-rose-600" />
            </span>
            <div>
              <p className="font-bold text-rose-950 text-sm">
                {currentLang === 'en'
                  ? 'Immediate Crisis Helpline (India)'
                  : currentLang === 'hi'
                  ? 'तत्काल मानसिक स्वास्थ्य हेल्पलाइन (भारत)'
                  : 'તાત્કાલિક માનસિક સ્વાસ્થ્ય હેલ્પલાઇન (ભારત)'}
              </p>
              <p className="text-slate-700 text-xs mt-0.5">
                Tele-MANAS: <span className="font-bold text-slate-900">14416</span> | Police & Ambulance: <span className="font-bold text-slate-900">112</span> (24x7 Toll-Free)
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCrisis}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white font-bold transition text-xs min-h-[44px] cursor-pointer flex items-center shadow-2xs"
          >
            {currentLang === 'en' ? 'Open Crisis Guide' : currentLang === 'hi' ? 'आपातकालीन मार्गदर्शिका' : 'ઇમરજન્સી માર્ગદર્શિકા'}
          </button>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-2 space-y-8">
      {/* Statutory Medical Education Notice */}
      <div className="aurora-notice bg-slate-50 p-5 sm:p-6 rounded-xl flex flex-col md:flex-row gap-4 items-start border border-slate-200/70">
        <span className="flex items-center justify-center p-2.5 bg-[#0d9488] text-white rounded-lg shrink-0" aria-hidden="true">
          <ShieldCheck className="w-6 h-6" />
        </span>
        <div className="space-y-1">
          <p className="text-sm font-bold text-teal-900">
            {currentLang === 'en'
              ? 'Statutory Medical Education Notice'
              : currentLang === 'hi'
                ? 'वैधानिक चिकित्सा शिक्षा सूचना'
                : 'વૈધાનિક તબીબી શિક્ષણ સૂચના'}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentLang === 'en'
              ? 'Educational Resource Only. MindCare is designed to demystify mental illnesses for Indian patients and caregivers. It does NOT provide individual medical diagnoses, emergency consultations, or drug prescriptions.'
              : currentLang === 'hi'
                ? 'केवल शैक्षणिक संसाधन। MindCare भारतीय मरीजों और परिजनों के लिए मानसिक बीमारियों को सरल भाषा में समझाने हेतु है। यह व्यक्तिगत निदान, आपातकालीन परामर्श या दवा का पर्चा प्रदान नहीं करता।'
                : 'માત્ર શૈક્ષણિક સંસાધન. MindCare ભારતીય દર્દીઓ અને પરિવારો માટે માનસિક બીમારીઓને સરળ ભાષામાં સમજાવવા માટે છે. તે વ્યક્તિગત નિદાન, ઇમરજન્સી પરામર્શ કે દવાનું પ્રિસ્ક્રિપ્શન આપતું નથી.'}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Doctor Profile */}
        <div className="space-y-2 md:col-span-1">
          <h3 className="text-slate-900 font-bold text-base">{t.doctorName}</h3>
          <p className="text-xs text-teal-800 font-semibold">{currentLang === 'en' ? 'Psychiatry resident · Public education' : currentLang === 'hi' ? 'मनोचिकित्सा रेज़िडेंट · जन-जागरूकता' : 'મનોચિકિત્સા રેસિડેન્ટ · જાહેર શિક્ષણ'}</p>
          <p className="text-slate-600 text-xs leading-relaxed mt-2">
            {currentLang === 'en'
              ? 'Evidence-based, ethical psychiatric public education dedicated to reducing stigma and empowering communities in India.'
              : currentLang === 'hi'
              ? 'प्रमाण-आधारित, नैतिक मानसिक स्वास्थ्य लोक शिक्षण, जिसका उद्देश्य समाज से भ्रांतियों को मिटाना और जागरूकता फैलाना है।'
              : 'પુરાવા-આધારિત, નૈતિક માનસિક શિક્ષણ, જે સમાજમાંથી અંધશ્રદ્ધા દૂર કરવા અને જાગૃતિ લાવવા માટે સમર્પિત છે.'}
          </p>
        </div>

        {/* Col 2: Education Libraries */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            {currentLang === 'en' ? 'Educational Libraries' : currentLang === 'hi' ? 'शैक्षणिक विषय' : 'શૈક્ષણિક વિષયો'}
          </h4>
          <ul className="space-y-1 text-xs text-slate-600">
            <li>
              <button
                onClick={() => onTabChange('conditions')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.conditions}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('addiction')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.addiction}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('treatments')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.treatments}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('symptoms')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.symptoms}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Resources & Tools */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            {currentLang === 'en' ? 'Resources & Articles' : currentLang === 'hi' ? 'संसाधन व लेख' : 'સાધનો અને લેખો'}
          </h4>
          <ul className="space-y-1 text-xs text-slate-600">
            <li>
              <button
                onClick={() => onTabChange('articles')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.articles}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('resources')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.resources}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('outreach')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.outreach}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('interactive')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.interactive} (PHQ-9 / GAD-7)
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('myths')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.myths}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('caregivers')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.caregivers}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('emergency')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.emergency}
              </button>
            </li>
            <li>
              <button
                onClick={() => onTabChange('about')}
                className="hover:text-teal-700 py-1 transition-colors cursor-pointer text-left font-medium"
              >
                {t.nav.about}
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Mandatory Disclaimer, Privacy & Language */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>{t.disclaimer.title}</span>
          </h4>
          <p className="text-slate-600 text-xs leading-relaxed">
            {currentLang === 'en'
              ? 'This portal is purely for educational purposes and mental health literacy in India. It does not provide individual diagnosis, prescription, or medical advice.'
              : currentLang === 'hi'
              ? 'यह पोर्टल केवल सार्वजनिक शिक्षा और जागरूकता के लिए है। यह व्यक्तिगत इलाज, निदान या ऑनलाइन प्रिस्क्रिप्शन प्रदान नहीं करता।'
              : 'આ પોર્ટલ ફક્ત જાહેર શિક્ષણ માટે છે. આ કોઈ વ્યક્તિગત નિદાન કે દવાઓનું પ્રિસ્ક્રિપ્શન આપતું નથી.'}
          </p>

          <p className="text-[11px] text-teal-900 bg-teal-50/90 p-2.5 rounded-lg border border-teal-200/80 leading-normal">
            🛡️ <strong>{currentLang === 'en' ? 'Privacy note:' : currentLang === 'hi' ? 'गोपनीयता सूचना:' : 'ગોપનીયતા નોંધ:'}</strong>{' '}
            {currentLang === 'en'
              ? 'Aggregate page-view analytics may be sent when enabled. Do not enter names, contact details, or other identifying information in the educational Q&A tool.'
              : currentLang === 'hi'
                ? 'सक्षम होने पर समेकित पेज-व्यू विश्लेषण भेजा जा सकता है। शैक्षणिक प्रश्नोत्तर टूल में नाम, संपर्क विवरण या पहचान बताने वाली जानकारी न लिखें।'
                : 'સક્ષમ હોય ત્યારે પેજ-વ્યૂના એકત્રિત આંકડા મોકલાઈ શકે છે. શૈક્ષણિક પ્રશ્નોત્તરીમાં નામ, સંપર્ક વિગતો અથવા ઓળખ દર્શાવતી માહિતી દાખલ ન કરો.'}
          </p>

          <div className="pt-2">
            <span className="text-xs text-slate-700 block mb-1 font-semibold">Select Language:</span>
            <div className="flex items-center gap-1.5" role="group" aria-label="Footer language selector">
              <button
                onClick={() => onLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
                className={`px-3 py-1.5 rounded-lg text-xs transition cursor-pointer min-h-[44px] ${
                  currentLang === 'en' ? 'bg-[#0f766e] text-white font-bold shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                aria-pressed={currentLang === 'hi'}
                className={`px-3 py-1.5 rounded-lg text-xs transition cursor-pointer min-h-[44px] ${
                  currentLang === 'hi' ? 'bg-[#0f766e] text-white font-bold shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => onLanguageChange('gu')}
                aria-pressed={currentLang === 'gu'}
                className={`px-3 py-1.5 rounded-lg text-xs transition cursor-pointer min-h-[44px] ${
                  currentLang === 'gu' ? 'bg-[#0f766e] text-white font-bold shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <nav aria-label={currentLang === 'en' ? 'Legal information' : currentLang === 'hi' ? 'कानूनी जानकारी' : 'કાનૂની માહિતી'} className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-5 gap-y-2 px-4 py-4 text-xs font-semibold text-teal-900">
        <a href={`/${currentLang}/privacy`} className="underline-offset-4 hover:underline">{currentLang === 'en' ? 'Privacy notice' : currentLang === 'hi' ? 'गोपनीयता सूचना' : 'ગોપનીયતા સૂચના'}</a>
        <a href={`/${currentLang}/terms`} className="underline-offset-4 hover:underline">{currentLang === 'en' ? 'Terms of use' : currentLang === 'hi' ? 'उपयोग की शर्तें' : 'ઉપયોગની શરતો'}</a>
      </nav>

      {/* Bottom Copyright & Compliance */}
      <div className="border-t border-slate-200/80 px-4 py-4 text-slate-500 text-xs bg-slate-50/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {t.doctorName}. Mindcare · Public mental-health education.</p>
          <p>{currentLang === 'en' ? 'Educational information; not individual medical care.' : currentLang === 'hi' ? 'शैक्षणिक जानकारी; व्यक्तिगत चिकित्सा देखभाल नहीं।' : 'શૈક્ષણિક માહિતી; વ્યક્તિગત તબીબી સંભાળ નથી.'}</p>
        </div>
      </div>
    </footer>
  );
};

