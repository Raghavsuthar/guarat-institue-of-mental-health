import React, { useEffect } from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { doctorProfile } from '../data/about';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { DoctorPhotoSlot } from '../components/DoctorPhotoSlot';
import { GrowthPathIllustration } from '../components/visuals';

interface AboutViewProps {
  currentLang: Language;
}

export const AboutView: React.FC<AboutViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'About Gujarat Institute of Mental Health · Psychiatry Education' : currentLang === 'hi' ? 'गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ के बारे में · मनोचिकित्सा शिक्षा' : 'ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ વિશે · મનોચિકિત્સા શિક્ષણ',
      description: currentLang === 'en'
        ? 'Public mental health education in English, Hindi, and Gujarati by Gujarat Institute of Mental Health.'
        : currentLang === 'hi'
        ? 'गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ द्वारा हिंदी, गुजराती तथा अंग्रेज़ी में मानसिक स्वास्थ्य शिक्षा।'
        : 'ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ દ્વારા ગુજરાતી, હિન્દી તથા અંગ્રેજીમાં માનસિક સ્વાસ્થ્ય શિક્ષણ.',
      path: 'about',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'Profile & Educational Scope' : currentLang === 'hi' ? 'परिचय और शैक्षिक उद्देश्य' : 'પરિચય અને શૈક્ષણિક હેતુ'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.about}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Meet Gujarat Institute of Mental Health and learn about the educational purpose and transparency of this multilingual public mental-health resource.'
            : currentLang === 'hi'
            ? 'गुजरात इंस्टीट्यूट ऑफ मेंटल हेल्थ और इस बहुभाषी सार्वजनिक मानसिक स्वास्थ्य शिक्षा संसाधन के उद्देश्य के बारे में जानें।'
            : 'ગુજરાત ઇન્સ્ટિટ્યૂટ ઓફ મેન્ટલ હેલ્થ અને આ બહુભાષી જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ સંસાધનના હેતુ વિશે જાણો.'}
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 flex flex-col md:flex-row items-start gap-6">
        <DoctorPhotoSlot
          currentLang={currentLang}
          doctorName={doctorProfile.name}
          qualifications={doctorProfile.qualifications}
        />

        <div className="space-y-4 flex-1">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1c2430]">
                {doctorProfile.name}
              </h2>
              {doctorProfile.qualifications && (
                <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-xs font-semibold">
                  {doctorProfile.qualifications}
                </span>
              )}
            </div>
            <p className="text-sm font-semibold text-[#115e59] mt-1">
              {doctorProfile.title[currentLang]}
            </p>
            <p className="text-xs text-stone-500 font-mono mt-0.5">
              {doctorProfile.registrationDetails[currentLang]}
            </p>
          </div>

          {doctorProfile.languagesSpoken.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
              <span className="font-semibold text-stone-900">Languages:</span>
              {doctorProfile.languagesSpoken.map((lang, idx) => (
                <span key={idx} className="px-2 py-0.5 bg-stone-100 rounded text-stone-700">
                  {lang}
                </span>
              ))}
            </div>
          )}

          {doctorProfile.specialInterests.length > 0 && (
            <div className="pt-3 border-t border-stone-100 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Areas of Interest
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {doctorProfile.specialInterests.map((interest, i) => (
                  <div key={i} className="p-3 rounded-lg bg-stone-50 border border-stone-200 flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-800">
                    <Award className="w-4 h-4 text-[#115e59] shrink-0" />
                    <span>{interest[currentLang]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Philosophy of Care with Growth Path Illustration */}
      <div className="rounded-xl bg-[#f0fdfa] border border-[#ccfbf1] overflow-hidden shadow-2xs">
        <GrowthPathIllustration
          className="w-full h-36 sm:h-44"
          ariaLabel="Stepping stones toward a peaceful dawn horizon, representing collaborative clinical progress"
        />
        <div className="p-6 sm:p-8 space-y-3 border-t border-[#ccfbf1]/80">
          <h2 className="text-base sm:text-lg font-semibold text-[#115e59]">
            {currentLang === 'en' ? 'Public Education Approach' : currentLang === 'hi' ? 'जन-शिक्षा का दृष्टिकोण' : 'જાહેર શિક્ષણનો અભિગમ'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
            {doctorProfile.practicePhilosophy[currentLang]}
          </p>
        </div>
      </div>

      {/* Educational scope and transparency */}
      <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-stone-600" />
          <h2 className="text-base sm:text-lg font-semibold text-[#1c2430]">
            {currentLang === 'en' ? 'Educational Scope & Transparency' : currentLang === 'hi' ? 'शैक्षिक दायरा और पारदर्शिता' : 'શૈક્ષણિક હેતુ અને પારદર્શિતા'}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
          {doctorProfile.ethicalCommitment[currentLang]}
        </p>

        <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <strong className="text-stone-900">Educational Notice:</strong> {doctorProfile.consultationNotice[currentLang]}
        </div>

        <div className="pt-3 border-t border-stone-100 grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-600">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
            <span>{currentLang === 'hi' ? 'यह संसाधन निदान नहीं करता' : currentLang === 'gu' ? 'આ સંસાધન નિદાન કરતું નથી' : 'Education only; no diagnosis'}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
            <span>{currentLang === 'hi' ? 'स्रोत और समीक्षा जानकारी जहाँ उपलब्ध हो' : currentLang === 'gu' ? 'જ્યાં ઉપલબ્ધ હોય ત્યાં સ્ત્રોત અને સમીક્ષા માહિતી' : 'Sources and review details where available'}</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#115e59] shrink-0 mt-0.5" />
            <span>{currentLang === 'hi' ? 'व्यक्तिगत देखभाल के लिए योग्य चिकित्सक से संपर्क करें' : currentLang === 'gu' ? 'વ્યક્તિગત સંભાળ માટે યોગ્ય તબીબી વ્યાવસાયિકનો સંપર્ક કરો' : 'Consult a qualified clinician for individual care'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};



