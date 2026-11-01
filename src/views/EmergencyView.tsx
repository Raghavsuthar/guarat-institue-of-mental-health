import React, { useEffect } from 'react';
import { Phone, ShieldAlert, Building2 } from 'lucide-react';
import { Language } from '../types';
import { officialHelplines, crisisWarningSigns, whatToDoInCrisis, whatNotToDoInCrisis } from '../data/emergency';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';

interface EmergencyViewProps {
  currentLang: Language;
}

export const EmergencyView: React.FC<EmergencyViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Emergency Psychiatric Crisis Helplines (India)' : currentLang === 'hi' ? 'आपातकालीन मानसिक संकट हेल्पलाइन (भारत)' : 'ઇમરજન્સી માનસિક સંકટ સહાય (ભારત)',
      description: currentLang === 'en'
        ? '24x7 toll-free crisis support in India: Tele-MANAS (14416), ERSS (112), NIMHANS, and immediate overdose protocols.'
        : currentLang === 'hi'
        ? 'भारत की 24 घंटे निःशुल्क संकटकालीन हेल्पलाइन: टेली-मानस (14416), 112 और निमहंस।'
        : 'ભારતની ૨૪ કલાક વિનામૂલ્યે ઇમરજન્સી હેલ્પલાઇન: ટેલી-માનસ (૧૪૪૧૬), ૧૧૨ અને નિમહાન્સ.',
      path: 'emergency',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header with High-Visibility Crisis Notice */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#fef2f2] border border-[#fecaca] text-[#991b1b] text-xs font-semibold">
          <ShieldAlert className="w-4 h-4 text-[#991b1b]" />
          <span>{currentLang === 'en' ? 'Emergency Crisis Assistance (India)' : currentLang === 'hi' ? 'आपातकालीन संकट सहायता (भारत)' : 'ઇમરજન્સી સહાય (ભારત)'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.emergency}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'If you or someone you know is in acute distress, experiencing thoughts of self-harm, severe agitation, delirium, or an overdose, help is available immediately. These official government and non-profit helplines are toll-free, confidential, and available 24 hours a day.'
            : currentLang === 'hi'
            ? 'यदि आप या कोई परिजन अत्यधिक मानसिक संकट, आत्महत्या के विचारों या नशीले पदार्थों के ओवरडोज से जूझ रहे हैं, तो तुरंत सहायता उपलब्ध है। ये सभी नंबर 24 घंटे निःशुल्क और गोपनीय हैं।'
            : 'જો તમે કે તમારા સ્વજન ગંભીર માનસિક સંકટ કે આત્મહત્યાના વિચારો અનુભવી રહ્યા હોવ, તો તાત્કાલિક સહાય ઉપલબ્ધ છે. આ તમામ સેવાઓ ચોવીસે કલાક વિનામૂલ્યે ઉપલબ્ધ છે.'}
        </p>
      </div>

      {/* Primary Helplines Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {officialHelplines.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border transition ${
              idx === 0
                ? 'bg-white border-[#fecaca] shadow-xs'
                : 'bg-white border-stone-200'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  {item.availableHours[currentLang]}
                </span>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1c2430] mt-1">
                  {item.name[currentLang]}
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  {item.operatedBy}
                </p>
              </div>

              <a
                href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                className="p-3 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white transition shrink-0 flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px]"
                title={`Call ${item.number}`}
                aria-label={`Call ${item.name[currentLang]} at ${item.number}`}
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100">
              <a
                href={`tel:${item.number.replace(/[^0-9]/g, '')}`}
                className="text-2xl font-bold text-[#991b1b] hover:underline tracking-tight font-mono block"
              >
                {item.number}
              </a>
              <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
                {item.description[currentLang]}
              </p>
              <div className="mt-3 text-xs text-stone-500 space-y-0.5">
                <div><strong className="text-stone-700">Languages:</strong> {item.languages[currentLang]}</div>
                <div><strong className="text-stone-700">Cost:</strong> {item.cost[currentLang]} • Verified: {item.verifiedDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Immediate DOs and DON'Ts in a Psychiatric Crisis */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* DOs */}
        <div className="p-6 bg-[#f0fdfa] border border-[#ccfbf1] rounded-xl space-y-3">
          <h2 className="text-[#115e59] font-semibold text-base">
            {currentLang === 'en' ? 'DO in a Mental Health Crisis:' : currentLang === 'hi' ? 'क्या करें (What to Do):' : 'શું કરવું:'}
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-800 leading-relaxed">
            {whatToDoInCrisis.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#115e59] font-bold mt-0.5">•</span>
                <span>{item[currentLang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DON'Ts */}
        <div className="p-6 bg-[#fef2f2] border border-[#fecaca] rounded-xl space-y-3">
          <h2 className="text-[#991b1b] font-semibold text-base">
            {currentLang === 'en' ? 'DO NOT in a Mental Health Crisis:' : currentLang === 'hi' ? 'क्या न करें (What to Avoid):' : 'શું ન કરવું:'}
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-800 leading-relaxed">
            {whatNotToDoInCrisis.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#991b1b] font-bold mt-0.5">•</span>
                <span>{item[currentLang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Acute Crisis Warning Signs */}
      <div className="p-6 sm:p-8 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
        <h2 className="text-base font-semibold text-[#1c2430]">
          {currentLang === 'en' ? 'Critical Warning Signs Requiring Immediate Medical Intervention:' : currentLang === 'hi' ? 'खतरे के गंभीर संकेत जिन पर तुरंत ध्यान देना जरूरी है:' : 'તાત્કાલિક સારવારની જરૂર દર્શાવતા ગંભીર સંકેતો:'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {crisisWarningSigns.map((sign, idx) => (
            <div key={idx} className="p-3.5 bg-white rounded-lg border border-stone-200 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#991b1b] mt-2 shrink-0" />
              <span>{sign[currentLang]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What Happens in a Hospital Emergency Department */}
      <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 space-y-3">
        <div className="flex items-center gap-2.5">
          <Building2 className="w-5 h-5 text-stone-600" />
          <h2 className="text-base sm:text-lg font-semibold text-[#1c2430]">
            {currentLang === 'en'
              ? 'What to Expect in a Hospital Emergency Department (Casualty)'
              : currentLang === 'hi'
              ? 'अस्पताल के आपातकालीन कक्ष (कैजुअल्टी) में क्या होता है?'
              : 'હોસ્પિટલના ઇમરજન્સી વિભાગમાં શું પ્રક્રિયા થાય છે?'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {currentLang === 'en'
            ? 'When you arrive at a hospital casualty department for a psychiatric emergency in India: (1) Immediate Triage: The medical officer evaluates airway, breathing, blood pressure, blood sugar, and vitals; (2) Medical Exclusion: Blood tests and ECG are performed to rule out medical intoxications or organ failure; (3) Psychiatric Assessment: The on-call psychiatrist conducts a rapid crisis interview to determine immediate safety and safety planning; (4) Supportive Observation: The person is kept in a quiet, safe environment until acute agitation or distress subsides.'
            : currentLang === 'hi'
            ? 'अस्पताल पहुंचने पर सबसे पहले ब्लड प्रेशर, शुगर व ईसीजी की जांच की जाती है ताकि शारीरिक कारणों की पहचान हो सके। इसके बाद ऑन-कॉल मनोचिकित्सक मरीज की स्थिति का मूल्यांकन कर तत्काल दवा या निगरानी का निर्णय लेते हैं।'
            : 'હોસ્પિટલમાં સૌથી પહેલા બીપી, શુગર અને જરૂરી રિપોર્ટ કરીને શારીરિક તપાસ થાય છે. ત્યારબાદ મનોચિકિત્સક દર્દીની સ્થિતિનું મૂલ્યાંકન કરે છે.'}
        </p>
      </div>
    </div>
  );
};

