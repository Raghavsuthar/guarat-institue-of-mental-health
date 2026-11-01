import React, { useEffect } from 'react';
import { HeartHandshake, HeartCrack } from 'lucide-react';
import { Language } from '../types';
import { caregiversData } from '../data/caregivers';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { SupportNetworkIllustration } from '../components/visuals';

interface CaregiversViewProps {
  currentLang: Language;
}

export const CaregiversView: React.FC<CaregiversViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Family & Caregiver Support in Psychiatric Recovery' : currentLang === 'hi' ? 'परिवार व देखभालकर्ता मार्गदर्शन' : 'પરિવાર અને સંભાળ રાખનાર માટે માર્ગદર્શન',
      description: currentLang === 'en'
        ? 'Practical communication guidance for families: what to say, preventing high expressed emotion, and avoiding caregiver burnout.'
        : currentLang === 'hi'
        ? 'मरीज के परिजनों के लिए जरूरी सलाह: क्या कहें, क्या न कहें और अपनी मानसिक सेहत कैसे बचाएं।'
        : 'દર્દીના પરિવારજનો માટે જરૂરી વ્યવહારુ સલાહ અને માર્ગદર્શન.',
      path: 'caregivers',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Family Support & Communication' : currentLang === 'hi' ? 'परिवार व देखभालकर्ताओं के लिए' : 'પરિવાર અને સંભાળ રાખનાર માટે'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.caregivers}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Families in India play the most vital role in psychiatric recovery. Learn scientific communication skills, how to minimize high emotional tension at home, and how to protect your own mental well-being against burnout.'
            : currentLang === 'hi'
            ? 'भारतीय परिवारों की भूमिका मरीज के ठीक होने में सबसे महत्वपूर्ण होती है। घर में तानों और तनाव को कम करने, सही संवाद साधने और अपनी सेहत की रक्षा करने के वैज्ञानिक तरीके।'
            : 'દર્દીને સાજા કરવામાં પરિવારની ભૂમિકા સૌથી મોટી હોય છે. ઘરમાં ક્લેશ ઘટાડવા અને સંભાળ રાખનારની પોતાની તંદુરસ્તી જાળવવાના વ્યવહારુ ઉપાયો.'}
        </p>
      </div>

      {/* Visual Support Ecosystem Banner */}
      <div className="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-2xs">
        <SupportNetworkIllustration
          className="w-full h-40 sm:h-52"
          ariaLabel="Clinical diagram of concentric support circles: psychiatric care, psychotherapy, family, and community"
        />
        <div className="p-3.5 sm:p-4 bg-stone-50/90 border-t border-stone-200 text-xs text-stone-700">
          <p className="font-medium leading-relaxed">
            {currentLang === 'en'
              ? 'The Collaborative Caregiver Ecosystem: Sustained recovery succeeds when psychiatric treatment, psychotherapeutic insight, compassionate family support, and community acceptance reinforce one another without blame.'
              : currentLang === 'hi'
              ? 'सहयोगात्मक देखभाल तंत्र: स्थायी सुधार तभी संभव होता है जब मनोचिकित्सकीय उपचार, काउंसलिंग, परिवार का सहानुभूतिपूर्ण साथ और सामाजिक स्वीकार्यता बिना किसी दोषारोपण के एक-दूसरे को मजबूत करते हैं।'
              : 'સહિયારી સારસંભાળ વ્યવસ્થા: કાયમી રિકવરી ત્યારે જ શક્ય બને છે જ્યારે તબીબી સારવાર, કાઉન્સેલિંગ, પરિવારનો પ્રેમપૂર્ણ સહયોગ અને સામાજિક સ્વીકૃતિ કોઈ પણ દોષારોપણ વિના એકબીજાને ટેકો આપે.'}
          </p>
        </div>
      </div>

      {/* Guides List */}
      <div className="space-y-6">
        {caregiversData.map((guide) => (
          <div
            key={guide.id}
            className="p-6 sm:p-8 rounded-xl border border-stone-200 bg-white space-y-6"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {guide.category.toUpperCase()} GUIDE
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] mt-1">
                {guide.title[currentLang]}
              </h2>
              <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                {guide.summary[currentLang]}
              </p>
            </div>

            {/* Core Action Points */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Key Caregiver Guidelines
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {guide.keyPoints[currentLang].map((pt, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#115e59] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Say vs What to Avoid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              {/* Say */}
              <div className="p-4 rounded-lg bg-[#f0fdfa] border border-[#ccfbf1] space-y-2">
                <span className="flex items-center gap-2 text-sm font-bold text-[#115e59]">
                  <HeartHandshake className="w-5 h-5 shrink-0" aria-hidden="true" />
                  {currentLang === 'en' ? 'Helpful Words That Heal' : currentLang === 'hi' ? 'सहायक शब्द जो सुकून दें' : 'સહાયક શબ્દો જે રાહત આપે'}
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                  {guide.whatToSay[currentLang].map((phrase, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#115e59] font-bold">•</span>
                      <span>{phrase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Avoid */}
              <div className="p-4 rounded-lg bg-[#fef2f2] border border-[#fecaca] space-y-2">
                <span className="flex items-center gap-2 text-sm font-bold text-[#991b1b]">
                  <HeartCrack className="w-5 h-5 shrink-0" aria-hidden="true" />
                  {currentLang === 'en' ? 'Phrases That Inadvertently Harm' : currentLang === 'hi' ? 'अनजाने में चोट पहुंचाने वाले वाक्य' : 'અજાણતાં દુઃખ પહોંચાડતાં વાક્યો'}
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                  {guide.whatToAvoid[currentLang].map((phrase, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#991b1b] font-bold">•</span>
                      <span>{phrase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

