import React, { useEffect } from 'react';
import { AlertCircle, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Language, SubstanceInfo } from '../types';
import { substancesData } from '../data/substances';
import { translations } from '../data/translations';
import { updatePageSEO } from '../utils/seo';
import { NeuralCircuitryIllustration, CravingToolkit } from '../components/visuals';

interface AddictionViewProps {
  currentLang: Language;
  onSelectSubstance: (item: SubstanceInfo) => void;
  onOpenCrisis: () => void;
  onNavigateResources?: () => void;
}

export const AddictionView: React.FC<AddictionViewProps> = ({
  currentLang,
  onSelectSubstance,
  onOpenCrisis,
  onNavigateResources,
}) => {
  const t = translations[currentLang];

  useEffect(() => {
    updatePageSEO({
      title: currentLang === 'en' ? 'Addiction & De-Addiction Medicine' : currentLang === 'hi' ? 'नशा व व्यसन मुक्ति चिकित्सा' : 'વ્યસન મુક્તિ માર્ગદર્શન',
      description: currentLang === 'en'
        ? 'Medical understanding of alcohol, tobacco, cannabis, opioid, and behavioral addictions. Withdrawal risks and evidence-based treatments.'
        : currentLang === 'hi'
        ? 'शराब, तंबाकू, अफीम और अन्य नशों से मुक्ति: लक्षण, विड्रॉल और वैज्ञानिक चिकित्सा।'
        : 'દારૂ, તમાકુ અને અન્ય નશાની આદતમાંથી મુક્તિ માટે વૈજ્ઞાનિક માર્ગદર્શન.',
      path: 'addiction',
      lang: currentLang,
    });
  }, [currentLang]);

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
          {currentLang === 'en' ? 'De-Addiction Medicine' : currentLang === 'hi' ? 'नशा मुक्ति चिकित्सा' : 'વ્યસન મુક્તિ ચિકિત્સા'}
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1c2430] tracking-tight">
          {t.nav.addiction}
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-3xl leading-relaxed">
          {currentLang === 'en'
            ? 'Addiction is a chronic, relapsing brain disorder characterized by compulsive substance seeking and physical neuroadaptation. It is a treatable medical condition, not a personal weakness or moral failure.'
            : currentLang === 'hi'
            ? 'नशा कोई नैतिक पतन या चरित्र की कमजोरी नहीं है; यह मस्तिष्क के न्यूरोलॉजिकल सर्किट की एक क्रोनिक बीमारी है जिसका उचित डॉक्टरी इलाज संभव है।'
            : 'વ્યસન એ ચારિત્ર્યની નબળાઈ નથી પરંતુ મગજનો એક ગંભીર રોગ છે જે યોગ્ય તબીબી સારવારથી મટી શકે છે.'}
        </p>
      </div>

      {/* Visual Neurocircuitry Banner */}
      <div className="w-full rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs bg-white">
        <NeuralCircuitryIllustration className="w-full h-36 sm:h-44" />
      </div>

      {/* LIFE-SAVING OVERDOSE SAFETY ALERT */}
      <div className="p-5 sm:p-6 bg-[#fef2f2] border border-[#fecaca] rounded-xl flex flex-col sm:flex-row items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#991b1b] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="font-semibold text-base text-[#991b1b]">
              {currentLang === 'en'
                ? 'Suspect an Acute Overdose or Severe Withdrawal Emergency?'
                : currentLang === 'hi'
                ? 'क्या अत्यधिक नशा (ओवरडोज) या दौरे पड़ने की आपात स्थिति है?'
                : 'શું ઓવરડોઝ કે આંચકી આવવાની ઇમરજન્સી છે?'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed max-w-2xl">
              {currentLang === 'en'
                ? 'Unresponsiveness, slow breathing, bluish lips, vomiting while unconscious, or severe shaking with hallucinations are life-threatening medical emergencies. Turn the person on their side (Recovery Position) and call emergency services immediately.'
                : currentLang === 'hi'
                ? 'बेहोशी, सांस धीमी होना, होंठ नीले पड़ना, या शराब छूटने पर दौरे पड़ना जानलेवा हो सकता है। मरीज को एक करवट लिटाएं और तुरंत 112 पर एम्बुलेंस बुलाएं।'
                : 'બેભાન અવસ્થા, શ્વાસ ધીમો પડવો, હોઠ વાદળી થવા કે આંચકી આવવી એ જોખમી છે. દર્દીને પડખે સુવડાવો અને તુરંત ૧૧૨ પર કૉલ કરો.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="tel:112"
            className="px-4 py-2.5 rounded-md bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-semibold text-xs transition flex items-center gap-1.5 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 112 Dispatch</span>
          </a>
        </div>
      </div>

      {/* Craving De-Escalation Toolkit (Somatic First-Aid & Urge Management) */}
      <CravingToolkit
        currentLang={currentLang}
        onOpenCrisis={onOpenCrisis}
        onNavigateResources={onNavigateResources}
      />

      {/* Substances Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {substancesData.map((sub, index) => {
          const isSpotlight = index === 0;

          if (isSpotlight) {
            return (
              <div
                key={sub.id}
                onClick={() => onSelectSubstance(sub)}
                className="col-span-1 md:col-span-2 p-6 sm:p-7 rounded-2xl border-2 border-teal-600/30 bg-gradient-to-br from-white via-teal-50/25 to-stone-50/70 hover:border-teal-700 transition-all cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                    <div className="space-y-2.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-800 text-white shadow-2xs">
                          <Sparkles className="w-3 h-3 text-teal-200" />
                          <span>
                            {currentLang === 'en'
                              ? 'Primary Substance Profile'
                              : currentLang === 'hi'
                              ? 'प्रमुख व्यसन एवं उपचार मार्गदर्शिका'
                              : 'મુખ્ય વ્યસન મુક્તિ માર્ગદર્શન'}
                          </span>
                        </span>
                        <span className="font-semibold uppercase tracking-wider text-teal-900 text-[11px] bg-teal-100/70 px-2 py-0.5 rounded">
                          SUBSTANCE GUIDE
                        </span>
                        <span className="font-mono text-xs text-stone-500">
                          {sub.medicalTerms[currentLang]}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#1c2430] group-hover:text-teal-800 transition-colors">
                        {sub.name[currentLang]}
                      </h3>

                      <p className="text-sm text-stone-600 leading-relaxed max-w-3xl">
                        {sub.whatIsIt[currentLang]}
                      </p>

                      {/* Surfaced Neurobiology & Withdrawal Snapshot */}
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded-xl border border-stone-200/80 shadow-2xs space-y-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900 block">
                            {currentLang === 'en' ? 'Neurobiology & Addiction:' : currentLang === 'hi' ? 'न्यूरोबायोलॉजी और लत:' : 'ન્યુરોબાયોલોજી અને વ્યસન:'}
                          </span>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {sub.whyAddictive[currentLang]}
                          </p>
                        </div>

                        <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200/80 shadow-2xs space-y-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-950 block">
                            {currentLang === 'en' ? 'Withdrawal Risk & Clinical Caution:' : currentLang === 'hi' ? 'विड्रॉल का खतरा एवं चेतावनी:' : 'વિડ્રોલ જોખમ અને સાવચેતી:'}
                          </span>
                          <p className="text-xs text-stone-700 font-medium leading-relaxed">
                            {sub.withdrawalSymptoms[currentLang]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Spotlight Visual Accent Banner */}
                    <div className="w-full sm:w-64 md:w-72 h-36 sm:h-40 shrink-0 rounded-xl overflow-hidden border border-teal-200/80 bg-white shadow-2xs self-center lg:self-start">
                      <NeuralCircuitryIllustration className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-stone-200/80 flex items-center justify-between text-xs font-bold text-teal-800 group-hover:text-teal-950 min-h-[44px]">
                  <span>
                    {currentLang === 'en'
                      ? 'Open Complete Medical De-Addiction Guide'
                      : currentLang === 'hi'
                      ? 'संपूर्ण चिकित्सकीय नशा मुक्ति मार्गदर्शिका पढ़ें'
                      : 'સંપૂર્ણ તબીબી વ્યસન મુક્તિ માર્ગદર્શિકા વાંચો'}
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          }

          return (
            <div
              key={sub.id}
              onClick={() => onSelectSubstance(sub)}
              className="p-6 rounded-xl border border-stone-200 bg-white hover:border-[#115e59] transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="font-medium uppercase tracking-wider">
                    SUBSTANCE GUIDE
                  </span>
                  <span className="font-mono text-[11px]">
                    {sub.medicalTerms[currentLang]}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-[#1c2430] group-hover:text-[#115e59] transition-colors">
                  {sub.name[currentLang]}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {sub.whatIsIt[currentLang]}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-700">
                  <div>
                    <strong className="text-[#1c2430] font-semibold">Why Addictive:</strong> {sub.whyAddictive[currentLang].slice(0, 95)}...
                  </div>
                  <div>
                    <strong className="text-[#1c2430] font-semibold">Withdrawal Risk:</strong> {sub.withdrawalSymptoms[currentLang].slice(0, 95)}...
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#115e59] min-h-[44px]">
                <span>{currentLang === 'en' ? 'Open De-Addiction Guide' : currentLang === 'hi' ? 'मार्गदर्शिका पढ़ें' : 'સંપૂર્ણ માહિતી વાંચો'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Understanding the Path to Recovery */}
      <div className="p-6 rounded-xl bg-white border border-stone-200 space-y-2">
        <h2 className="font-semibold text-base text-[#1c2430]">
          {currentLang === 'en'
            ? 'The Stages of Scientific Recovery in Psychiatry'
            : currentLang === 'hi'
            ? 'मनोचिकित्सा में वैज्ञानिक नशा मुक्ति के मुख्य चरण'
            : 'વૈજ્ઞાનિક પદ્ધતિથી વ્યસન મુક્તિના મુખ્ય તબક્કા'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          {currentLang === 'en'
            ? 'Effective de-addiction involves four interconnected pillars: (1) Safe medical detoxification to prevent dangerous seizures and severe withdrawal; (2) Medication-Assisted Treatment (MAT) to reduce biological cravings; (3) Motivational Interviewing and Cognitive Behavioral Relapse Prevention to rewire lifestyle triggers; and (4) Family psychoeducation to rebuild home stability.'
            : currentLang === 'hi'
            ? 'सफल नशा मुक्ति चार चरणों पर टिकी है: (1) सुरक्षित मेडिकल डिटॉक्सिफिकेशन ताकि विड्रॉल के दौरे न पड़ें; (2) तलब (Cravings) कम करने वाली सुरक्षित दवाएं; (3) मनोवैज्ञानिक काउंसलिंग (CBT व मोटिवेशनल थेरेपी); और (4) परिवार का सहयोग।'
            : 'સફળ વ્યસન મુક્તિના ૪ પાયા: (૧) સલામત મેડિકલ ડિટોક્સિફિકેશન; (૨) તલપ ઘટાડવાની દવાઓ; (૩) સાયકોલોજિકલ કાઉન્સેલિંગ; અને (૪) પરિવારનો સહકાર.'}
        </p>
      </div>
    </div>
  );
};

