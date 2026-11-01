import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { Printer, QrCode, Download, ShieldCheck, Phone, Heart, Users, FileText, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { updatePageSEO, BASE_URL } from '../utils/seo';

interface OutreachViewProps {
  currentLang: Language;
}

export const OutreachView: React.FC<OutreachViewProps> = ({ currentLang }) => {
  const [selectedDestination, setSelectedDestination] = useState<'home' | 'emergency' | 'interactive' | 'myths'>('home');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const t = translations[currentLang];

  const destinationUrls = {
    home: `${BASE_URL}/${currentLang}`,
    emergency: `${BASE_URL}/${currentLang}/emergency`,
    interactive: `${BASE_URL}/${currentLang}/interactive`,
    myths: `${BASE_URL}/${currentLang}/myths`,
  };

  const activeTargetUrl = destinationUrls[selectedDestination];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Clinic & Community Outreach Materials' : currentLang === 'hi' ? 'क्लीनिक व सामुदायिक प्रचार सामग्री' : 'ક્લિનિક અને જાહેર જાગૃતિ સાહિત્ય',
      description: currentLang === 'en'
        ? 'Printable QR-code mental health educational flyers for clinics, schools, NGOs, and community noticeboards by Gujarat Institute of Mental Health.'
        : currentLang === 'hi'
        ? 'क्लीनिक, स्कूलों और गैर-सरकारी संगठनों के लिए प्रिंट करने योग्य क्यूआर कोड मानसिक स्वास्थ्य पत्रक।'
        : 'ક્લિનિક, શાળાઓ અને સેવાભાવી સંસ્થાઓ માટે પ્રિન્ટ કરી શકાય તેવું માનસિક સ્વાસ્થ્ય પત્રક.',
      path: 'outreach',
      lang: currentLang,
    });
  }, [currentLang]);

  // Generate QR code data URL whenever target URL changes
  useEffect(() => {
    QRCode.toDataURL(activeTargetUrl, {
      width: 400,
      margin: 1,
      color: {
        dark: '#0f766e',
        light: '#ffffff',
      },
    })
      .then((url) => setQrCodeUrl(url))
      .catch((err) => console.error('QR code generation error', err));
  }, [activeTargetUrl]);

  const handlePrint = () => {
    window.print();
  };

  const labels = {
    en: {
      tag: 'Public Outreach & Community Education',
      title: 'Materials for Clinics, Schools & NGOs',
      subtitle: 'Free, printable mental health awareness materials designed for physical clinic waiting rooms, university noticeboards, and community health centers.',
      chooseDestination: 'Select flyer destination URL:',
      homeOpt: 'Entire Website (Home)',
      emergencyOpt: 'Emergency & Helplines (14416 / 112)',
      interactiveOpt: 'Self-Assessments (PHQ-9, GAD-7, ASRS)',
      mythsOpt: 'Myths vs Facts Stigma Guide',
      printBtn: 'Print One-Page Flyer (A4)',
      downloadQr: 'Download QR Image',
      sharingPolicyTitle: 'Institutional Sharing & Reprint Permission',
      sharingPolicyText: 'Hospitals, medical colleges, schools, non-profits, and independent practitioners are warmly invited to print, display, and distribute these educational materials without fees. Modification of medical content or commercial monetization is strictly prohibited. Attribution to Gujarat Institute of Mental Health must remain intact.',
      flyerHeader: 'FREE PUBLIC MENTAL HEALTH EDUCATION',
      scanNotice: 'Scan with any smartphone camera to open free educational guides in English, हिन्दी, and ગુજરાતી.',
    },
    hi: {
      tag: 'सामुदायिक जन-जागरूकता व प्रसार',
      title: 'क्लीनिक, कॉलेज एवं स्वयंसेवी संस्थाओं हेतु सामग्री',
      subtitle: 'अस्पतालों, क्लीनिक प्रतीक्षालयों और शैक्षणिक संस्थानों में लगाने हेतु निःशुल्क, प्रिंट योग्य मानसिक स्वास्थ्य सूचना पत्रक।',
      chooseDestination: 'क्यूआर कोड का लक्ष्य चुनें:',
      homeOpt: 'संपूर्ण वेबसाइट (मुख्य पृष्ठ)',
      emergencyOpt: 'आपातकालीन हेल्पलाइन (14416 / 112)',
      interactiveOpt: 'स्व-मूल्यांकन टूल्स (PHQ-9, GAD-7)',
      mythsOpt: 'भ्रांतियां बनाम सच मार्गदर्शिका',
      printBtn: 'एक पेज का पत्रक प्रिंट करें (A4)',
      downloadQr: 'क्यूआर कोड डाउनलोड करें',
      sharingPolicyTitle: 'संस्थागत वितरण एवं प्रिंट अनुमति',
      sharingPolicyText: 'अस्पतालों, मेडिकल कॉलेजों, विद्यालयों और सामाजिक संस्थाओं को इस पत्रक को निःशुल्क प्रिंट करने और वितरित करने की पूर्ण अनुमति है। इसमें किसी भी व्यावसायिक उपयोग या मूल चिकित्सा सामग्री में बदलाव की अनुमति नहीं है।  का नाम व साख यथावत रहनी चाहिए।',
      flyerHeader: 'निःशुल्क मानसिक स्वास्थ्य लोक शिक्षण',
      scanNotice: 'अंग्रेजी, हिन्दी और गुजराती में निःशुल्क प्रामाणिक जानकारी हेतु अपने फोन के कैमरे से स्कैन करें।',
    },
    gu: {
      tag: 'જાહેર જાગૃતિ અને પ્રસાર સાહિત્ય',
      title: 'ક્લિનિક, શાળા-કોલેજ અને NGO માટે પ્રચાર સાહિત્ય',
      subtitle: 'હોસ્પિટલ, ક્લિનિક અને શૈક્ષણિક સંસ્થાઓમાં પ્રદર્શિત કરવા માટે મફત, પ્રિન્ટ યોગ્ય માનસિક સ્વાસ્થ્ય પત્રક.',
      chooseDestination: 'ક્યુઆર કોડનું લક્ષ્ય પસંદ કરો:',
      homeOpt: 'સંપૂર્ણ વેબસાઇટ (હોમ)',
      emergencyOpt: 'ઇમરજન્સી હેલ્પલાઇન (૧૪૪૧૬ / ૧૧૨)',
      interactiveOpt: 'સ્વ-મૂલ્યાંકન સ્ક્રિનર્સ (PHQ-9, GAD-7)',
      mythsOpt: 'અંધશ્રદ્ધા વિરુદ્ધ વૈજ્ઞાનિક સત્ય',
      printBtn: 'એક પેજનું પત્રક પ્રિન્ટ કરો (A4)',
      downloadQr: 'QR કોડ ડાઉનલોડ કરો',
      sharingPolicyTitle: 'સંસ્થાકીય વિતરણ અને પ્રિન્ટ પરવાનગી',
      sharingPolicyText: 'હોસ્પિટલો, શાળાઓ, સેવાભાવી સંસ્થાઓ અને સામાજિક કાર્યકરો આ પત્રક વિનામૂલ્યે પ્રિન્ટ કરીને લોકો સુધી પહોંચાડી શકે છે. આ સામગ્રીનો વ્યાવસાયિક ઉપયોગ કરવો સખત મનાઈ છે. નું નામ અને સૌજન્ય જાળવી રાખવું અનિવાર્ય છે.',
      flyerHeader: 'નિઃશુલ્ક માનસિક સ્વાસ્થ્ય લોક શિક્ષણ',
      scanNotice: 'અંગ્રેજી, હિન્દી અને ગુજરાતીમાં પુરાવા-આધારિત માહિતી માટે સ્માર્ટફોન કેમેરાથી સ્કેન કરો.',
    },
  }[currentLang];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Controls - Hidden during physical print */}
      <div className="space-y-2 print:hidden">
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          {labels.tag}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {labels.title}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {labels.subtitle}
        </p>
      </div>

      {/* Target Selector & Actions - Hidden during print */}
      <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 space-y-4 print:hidden">
        <div>
          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-2">
            {labels.chooseDestination}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'home', label: labels.homeOpt },
              { id: 'emergency', label: labels.emergencyOpt },
              { id: 'interactive', label: labels.interactiveOpt },
              { id: 'myths', label: labels.mythsOpt },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedDestination(opt.id as any)}
                className={`p-2.5 rounded-lg text-xs font-medium border text-left transition cursor-pointer ${
                  selectedDestination === opt.id
                    ? 'bg-teal-50 border-teal-500 text-[#0f766e] font-semibold'
                    : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-stone-100">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0f766e] hover:bg-[#115e59] text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer min-h-[44px]"
          >
            <Printer className="w-4 h-4" />
            <span>{labels.printBtn}</span>
          </button>

          {qrCodeUrl && (
            <a
              href={qrCodeUrl}
              download={`-qr-${selectedDestination}.png`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold border border-stone-200 transition cursor-pointer min-h-[44px]"
            >
              <Download className="w-4 h-4 text-stone-600" />
              <span>{labels.downloadQr}</span>
            </a>
          )}
        </div>
      </div>

      {/* PRINTABLE FLYER (Designed specifically for A4 single-page print and screen preview) */}
      <div
        id="printable-flyer"
        className="bg-white border-2 border-stone-300 print:border-none p-6 sm:p-10 rounded-2xl print:rounded-none max-w-3xl mx-auto shadow-md print:shadow-none space-y-6 text-[#1c2430]"
      >
        {/* Header letterhead */}
        <div className="border-b-2 border-teal-700 pb-5 flex items-start justify-between gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-teal-50 text-teal-800 text-[11px] font-bold tracking-wider uppercase mb-1">
              {labels.flyerHeader}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Gujarat Institute of Mental Health
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-teal-800 mt-0.5">
              Public Mental Health Education · Gujarat
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Public Mental Health Literacy Initiative · English · हिन्दी · ગુજરાતી
            </p>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs font-mono text-stone-400">Non-Commercial Outreach</span>
          </div>
        </div>

        {/* Emergency Helpline Banner on Flyer */}
        <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-700 text-white shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-red-950 uppercase tracking-wide">
                24x7 Emergency Mental Health Crisis Support (India)
              </p>
              <p className="text-sm font-extrabold text-red-900 mt-0.5">
                Tele-MANAS: <span className="text-base text-black underline">14416</span> (Toll-Free) · Police / Medical: <span className="text-base text-black underline">112</span>
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-red-800 bg-red-100 px-2.5 py-1 rounded-full whitespace-nowrap">
            Government of India
          </span>
        </div>

        {/* Central QR Code & Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center py-2">
          {/* Left QR Code Box */}
          <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 bg-stone-50 border border-stone-200 rounded-xl text-center">
            {qrCodeUrl ? (
              <img
                src={qrCodeUrl}
                alt="Mental Health Resource QR Code"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
              />
            ) : (
              <div className="w-48 h-48 flex items-center justify-center bg-stone-200 text-stone-400">
                <QrCode className="w-12 h-12" />
              </div>
            )}
            <p className="text-[11px] font-semibold text-stone-700 mt-2 leading-snug">
              {labels.scanNotice}
            </p>
            <p className="text-[10px] font-mono text-teal-800 mt-1 break-all">
              {activeTargetUrl}
            </p>
          </div>

          {/* Right Core Educational Topics */}
          <div className="sm:col-span-7 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 border-b pb-1">
              What You Will Find On This Free Platform:
            </h3>

            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Clinical Conditions:</strong> Clear explanations of Depression, Anxiety, Bipolar Disorder, Schizophrenia, OCD, and PTSD.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Addiction Science:</strong> Biological mechanisms and recovery pathways for Alcohol, Opioids, Nicotine, Cannabis, and Sedatives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Medications & Treatments:</strong> Why psychiatric medicines are prescribed, side-effect management, and psychotherapy modalities.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Interactive Screeners:</strong> Confidential self-reflection questionnaires (PHQ-9, GAD-7, ASRS Adult ADHD).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Caregiver Guidance:</strong> Practical scripts for families supporting loved ones in distress.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Disclaimer on Flyer */}
        <div className="border-t border-stone-200 pt-4 text-stone-500 text-[10px] leading-normal flex flex-col sm:flex-row items-start justify-between gap-2">
          <p className="max-w-md">
            <strong>Medical Notice:</strong> This resource provides ethical public health education only. It does not replace individualized clinical assessment, diagnosis, or prescription by a registered psychiatrist.
          </p>
          <div className="text-right sm:text-right font-medium">
            <p className="text-stone-700">gujarat-institute-of-mental-health.in</p>
            <p>© {new Date().getFullYear()} Gujarat Institute of Mental Health · Non-Commercial Public License</p>
          </div>
        </div>
      </div>

      {/* Institutional Sharing Statement - Print Hidden */}
      <div className="p-5 rounded-xl bg-teal-50/60 border border-teal-200 text-stone-800 space-y-2 print:hidden">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0f766e] uppercase tracking-wide">
          <ShieldCheck className="w-4 h-4 text-[#0f766e]" />
          <span>{labels.sharingPolicyTitle}</span>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          {labels.sharingPolicyText}
        </p>
      </div>
    </div>
  );
};


