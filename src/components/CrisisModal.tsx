import React from 'react';
import { Phone, AlertTriangle, X, ShieldAlert, CheckCircle2, XCircle, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { officialHelplines, crisisWarningSigns, whatToDoInCrisis, whatNotToDoInCrisis } from '../data/emergency';
import { translations } from '../data/translations';

interface CrisisModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const CrisisModal: React.FC<CrisisModalProps> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;
  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border-2 border-rose-500 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Urgent Emergency Banner Header */}
        <div className="bg-rose-900 text-white p-3.5 sm:p-5 flex items-start justify-between shrink-0">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-rose-800 text-rose-200 border border-rose-700 shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-rose-800 text-rose-200 border border-rose-700">
                {currentLang === 'en' ? 'Immediate Emergency Support' : currentLang === 'hi' ? 'तत्काल आपातकालीन सहायता' : 'તાત્કાલિક ઇમરજન્સી સહાય'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                {currentLang === 'en'
                  ? 'Are You or a Loved One in Crisis?'
                  : currentLang === 'hi'
                  ? 'क्या आप या आपका कोई प्रियजन संकट में हैं?'
                  : 'શું તમે કે તમારા કોઈ સ્વજન કટોકટીમાં છો?'}
              </h2>
              <p className="text-xs sm:text-sm text-rose-200 mt-1 max-w-xl leading-relaxed">
                {currentLang === 'en'
                  ? 'Free, confidential, 24x7 government-verified crisis counseling is available across India right now. You are not alone.'
                  : currentLang === 'hi'
                  ? 'पूरे भारत में 24x7 निःशुल्क और गोपनीय सरकारी सहायता उपलब्ध है। आप अकेले नहीं हैं, तुरंत बात करें।'
                  : 'સમગ્ર ભારતમાં ૨૪x૭ વિનામૂલ્યે અને ગોપનીય સરકારી સહાય ઉપલબ્ધ છે. તમે એકલા નથી.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close crisis modal"
            className="p-1.5 rounded-lg text-rose-200 hover:text-white hover:bg-rose-800 transition cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div
          className="p-4 sm:p-6 flex-1 min-h-0 overflow-y-auto space-y-5 sm:space-y-6 overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Official Helplines Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {currentLang === 'en' ? 'Verified Official Indian Helplines (24x7)' : currentLang === 'hi' ? 'सत्यापित आधिकारिक भारतीय हेल्पलाइन (24x7)' : 'અધિકૃત ભારતીય હેલ્પલાઇન (૨૪x૭)'}
            </h3>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {officialHelplines.map((line, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                        {line.cost[currentLang]}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {line.availableHours[currentLang]}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm mt-2">
                      {line.name[currentLang]}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {line.description[currentLang]}
                    </p>
                    <p className="text-[11px] text-teal-800 font-medium mt-1">
                      {line.languages[currentLang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold">Toll-Free Dial</span>
                      <p className="text-base font-extrabold text-slate-900">{line.number}</p>
                    </div>
                    <a
                      href={`tel:${line.number.split('/')[0].trim()}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{currentLang === 'en' ? 'Call Now' : currentLang === 'hi' ? 'कॉल करें' : 'કૉલ કરો'}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Immediate Action Protocol */}
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-bold text-rose-950 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <span>
                {currentLang === 'en'
                  ? 'Immediate Steps If Someone Is in Danger of Self-Harm'
                  : currentLang === 'hi'
                  ? 'यदि किसी की जान को खतरा है तो तत्काल उठाए जाने वाले कदम'
                  : 'જો કોઈ વ્યક્તિને જોખમ હોય તો તાત્કાલિક કરવાના ઉપાયો'}
              </span>
            </h4>

            <div className="mt-3 grid sm:grid-cols-2 gap-4">
              {/* Do's */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {currentLang === 'en' ? 'What You SHOULD Do' : currentLang === 'hi' ? 'क्या करें' : 'શું કરવું'}
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {whatToDoInCrisis.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{item[currentLang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wide flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  {currentLang === 'en' ? 'What You MUST AVOID' : currentLang === 'hi' ? 'क्या न करें' : 'શું ન કરવું'}
                </span>
                <ul className="space-y-2 text-xs text-slate-700">
                  {whatNotToDoInCrisis.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{item[currentLang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hospital Casualty Notice */}
          <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800 mb-1">
              {currentLang === 'en'
                ? 'Nearest Emergency Medical Care:'
                : currentLang === 'hi'
                ? 'नजदीकी अस्पताल आपातकालीन कक्ष:'
                : 'નજીકની હોસ્પિટલનો ઇમરજન્સી વિભાગ:'}
            </p>
            {currentLang === 'en'
              ? 'If an overdose has been taken or severe injury has occurred, immediately take the person to the Casualty / Emergency Department of the nearest hospital or call 112 for ambulance transport. Do not wait.'
              : currentLang === 'hi'
              ? 'यदि किसी ने दवा की अधिक मात्रा या जहर खा लिया है, तो बिना समय गंवाए नजदीकी सरकारी या निजी अस्पताल के इमरजेंसी विभाग (Casualty) में ले जाएं या 112 पर एम्बुलेंस बुलाएं।'
              : 'જો કોઈ દવા કે ઝેરી પદાર્થ પીધો હોય, તો સમય ગુમાવ્યા વિના નજીકની હોસ્પિટલના ઇમરજન્સી વિભાગમાં દર્દીને લઈ જાઓ અથવા ૧૧૨ પર ફોન કરો.'}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-[11px] text-slate-500">
            {currentLang === 'en'
              ? 'Source: Ministry of Health and Family Welfare (MoHFW) / NIMHANS'
              : currentLang === 'hi'
              ? 'स्रोत: स्वास्थ्य एवं परिवार कल्याण मंत्रालय / NIMHANS'
              : 'સ્ત્રોત: કેન્દ્રીય આરોગ્ય મંત્રાલય / NIMHANS'}
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition cursor-pointer"
          >
            {currentLang === 'en' ? 'Close' : currentLang === 'hi' ? 'बंद करें' : 'બંધ કરો'}
          </button>
        </div>
      </div>
    </div>
  );
};
