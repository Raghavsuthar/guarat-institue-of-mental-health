import React, { useState } from 'react';
import { X, ShieldAlert, RotateCcw, Phone } from 'lucide-react';
import { Language } from '../types';
import { screenersData, ScreenerTool } from '../data/assessments';
import { translations } from '../data/translations';

interface ScreenerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialToolId: string;
  onOpenCrisis: () => void;
}

export const ScreenerModal: React.FC<ScreenerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialToolId,
  onOpenCrisis,
}) => {
  const [selectedToolId, setSelectedToolId] = useState<string>(initialToolId);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;
  const t = translations[currentLang];
  const activeTool: ScreenerTool = screenersData.find((t) => t.id === selectedToolId) || screenersData[0];

  const handleAnswer = (questionId: number, val: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const answeredCount = activeTool.questions.filter((question) => typeof answers[question.id] === 'number').length;
  const totalQuestions = activeTool.questions.length;
  const isComplete = answeredCount === totalQuestions;
  const totalScore = activeTool.questions.reduce((sum, question) => sum + (answers[question.id] ?? 0), 0);
  const maxScore = totalQuestions * Math.max(0, ...activeTool.frequencyOptions.map((option) => option.value));

  // Trigger support guidance for any explicitly marked safety-sensitive question.
  const isCrisisTriggered = activeTool.questions.some(
    (question) => question.isCrisisQuestion && (answers[question.id] ?? 0) > 0
  );

  // Find interpretation safely
  const interpretation = activeTool.interpretations.find(
    (item) => totalScore >= item.minScore && totalScore <= item.maxScore
  ) || activeTool.interpretations[0];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-2 sm:p-4 overflow-y-auto overscroll-contain modal-scroll-backdrop" role="dialog" aria-modal="true" style={{ WebkitOverflowScrolling: 'touch' }}>
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg border border-stone-200 overflow-hidden my-2 sm:my-6 flex flex-col max-h-[96dvh] sm:max-h-[94dvh]">
        {/* Header */}
        <div className="bg-white border-b border-stone-200 p-3.5 sm:p-6 flex items-start justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              {currentLang === 'en' ? 'Educational Self-Reflection' : currentLang === 'hi' ? 'शैक्षणिक आत्म-अवलोकन' : 'શૈક્ષણિક આત્મ-મૂલ્યાંકન'}
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1c2430] tracking-tight mt-1">
              {activeTool.name[currentLang]}
            </h2>
            <p className="text-xs text-stone-600 mt-1 max-w-xl leading-relaxed">
              {activeTool.purpose[currentLang]}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Screener Selector Bar */}
        <div className="bg-stone-50 border-b border-stone-200 px-4 py-2.5 flex items-center justify-between gap-2 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {screenersData.map((tool) => (
              <button
                key={tool.id}
                onClick={() => {
                  setSelectedToolId(tool.id);
                  handleReset();
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer min-h-[44px] flex items-center whitespace-nowrap ${
                  selectedToolId === tool.id
                    ? 'bg-[#115e59] text-white'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {tool.id.toUpperCase()}: {tool.name[currentLang].split('(')[0].trim()}
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1.5 font-medium cursor-pointer min-h-[44px] px-2 shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>

        {/* MANDATORY NON-DIAGNOSTIC DISCLAIMER */}
        <div className="p-3.5 bg-stone-50 border-b border-stone-200 text-xs text-stone-700 flex items-start gap-2.5 shrink-0">
          <ShieldAlert className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-stone-900">{t.disclaimer.title}:</strong> {activeTool.disclaimer[currentLang]}
          </p>
        </div>

        {/* Scrollable Questions or Results */}
        <div
          className="p-4 sm:p-6 flex-1 min-h-0 overflow-y-auto space-y-5 overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {!showResults ? (
            <>
              {/* Question list */}
              <div className="space-y-4">
                {activeTool.questions.map((q, idx) => {
                  const currentVal = answers[q.id];
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-lg border transition ${
                        q.isCrisisQuestion
                          ? 'border-[#fecaca] bg-[#fef2f2]'
                          : 'border-stone-200 bg-white'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 mb-3">
                        <span className="text-xs font-semibold text-stone-400 mt-0.5">
                          #{idx + 1}
                        </span>
                        <p className="text-sm font-semibold text-[#1c2430] leading-snug">
                          {q.text[currentLang]}
                        </p>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {activeTool.frequencyOptions.map((opt) => {
                          const isSelected = currentVal === opt.value;
                          return (
                            <button
                              key={opt.value}
                              onClick={() => handleAnswer(q.id, opt.value)}
                              className={`p-2.5 rounded-md text-xs font-medium border text-center transition cursor-pointer min-h-[44px] flex items-center justify-center ${
                                isSelected
                                  ? 'bg-[#115e59] text-white border-[#115e59] font-semibold'
                                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                              }`}
                            >
                              <span>{opt.label[currentLang]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  {answeredCount} of {totalQuestions} answered
                </span>
                <button
                  disabled={!isComplete}
                  onClick={() => setShowResults(true)}
                  className={`px-5 py-2.5 rounded-md text-xs font-semibold transition cursor-pointer min-h-[44px] ${
                    isComplete
                      ? 'bg-[#115e59] hover:bg-[#0f4f4b] text-white'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  {currentLang === 'en'
                    ? 'View Educational Reflection'
                    : currentLang === 'hi'
                    ? 'शैक्षणिक परिणाम देखें'
                    : 'શૈક્ષણિક પરિણામ જુઓ'}
                </button>
              </div>
            </>
          ) : (
            /* Results View */
            <div className="space-y-6">
              {/* Crisis Alert Banner if Question 9 is endorsed */}
              {isCrisisTriggered && (
                <div className="p-5 bg-[#fef2f2] border border-[#fecaca] rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-[#991b1b] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-[#991b1b]">
                        {currentLang === 'en'
                          ? 'Immediate Crisis Support Is Here For You'
                          : currentLang === 'hi'
                          ? 'तत्काल मानसिक संकट सहायता उपलब्ध है'
                          : 'તાત્કાલિક સહાય ઉપલબ્ધ છે'}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-800 mt-1 leading-relaxed">
                        {currentLang === 'en'
                          ? 'You mentioned experiencing thoughts of death or hurting yourself. Please know that your life has tremendous value, and confidential medical support is available 24 hours a day.'
                          : currentLang === 'hi'
                          ? 'आपने खुद को चोट पहुंचाने या मृत्यु के विचारों का संकेत दिया है। आपका जीवन अत्यंत मूल्यवान है और निःशुल्क सरकारी सहायता 24 घंटे उपलब्ध है।'
                          : 'તમે પોતાને નુકસાન પહોંચાડવાના વિચારો દર્શાવ્યા છે. તમારું જીવન ખૂબ કિંમતી છે અને સહાય ચોવીસે કલાક ઉપલબ્ધ છે.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href="tel:14416"
                      className="px-4 py-2.5 rounded-md bg-[#991b1b] text-white font-bold text-xs hover:bg-[#7f1d1d] transition inline-flex items-center gap-1.5 min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Tele-MANAS (14416)</span>
                    </a>
                    <button
                      onClick={onOpenCrisis}
                      className="px-4 py-2.5 rounded-md bg-stone-800 hover:bg-stone-900 text-white font-semibold text-xs transition min-h-[44px]"
                    >
                      Open Emergency Guide
                    </button>
                  </div>
                </div>
              )}

              {/* Score Display Card */}
              <div className="p-6 bg-stone-50 border border-stone-200 rounded-lg text-center space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Total Educational Score
                </span>
                <div className="text-4xl font-semibold text-[#1c2430]">
                  {totalScore} <span className="text-lg text-stone-400 font-normal">/ {maxScore}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#ccfbf1] text-[#115e59] text-xs font-semibold">
                  {interpretation.level[currentLang]}
                </div>
              </div>

              {/* Reflection Interpretation */}
              <div className="p-5 bg-white border border-stone-200 rounded-lg space-y-3">
                <h4 className="text-sm font-semibold text-[#1c2430]">
                  {currentLang === 'en' ? 'What Your Responses Suggest:' : currentLang === 'hi' ? 'आपके उत्तर क्या दर्शाते हैं:' : 'તમારા જવાબો શું દર્શાવે છે:'}
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {interpretation.description[currentLang]}
                </p>

                <div className="pt-3 border-t border-stone-100">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
                    {currentLang === 'en' ? 'Educational Guidance:' : currentLang === 'hi' ? 'शैक्षणिक मार्गदर्शन:' : 'શૈક્ષણિક માર્ગદર્શન:'}
                  </h5>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {interpretation.recommendation[currentLang]}
                  </p>
                </div>
              </div>

              {/* Strictly Non-Diagnostic Clinical Note */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-700 leading-relaxed">
                <p className="font-semibold text-stone-900 mb-1">
                  Important Note on Medical Self-Reflection:
                </p>
                {currentLang === 'en'
                  ? 'Your responses suggest you may be experiencing symptoms commonly associated with mood or anxiety difficulties. This is NOT a diagnosis. Many medical and emotional conditions share these symptoms (including thyroid issues, anemia, stress, or grief). We encourage you to discuss these experiences with a qualified healthcare professional.'
                  : currentLang === 'hi'
                  ? 'आपके उत्तर दर्शाते हैं कि आप मूड या चिंता से जुड़े लक्षणों का अनुभव कर रहे हैं। यह कोई मेडिकल जांच या बीमारी का नाम नहीं है। कई शारीरिक कारणों (जैसे थायरॉयड या एनीमिया) से भी ऐसे लक्षण हो सकते हैं। कृपया किसी योग्य डॉक्टर से चर्चा करें।'
                  : 'તમારા જવાબો દર્શાવે છે કે તમે મૂડ કે ચિંતાના લક્ષણો અનુભવી રહ્યા છો. આ કોઈ ચોક્કસ નિદાન નથી. થાઇરોઇડ કે એનિમિયા જેવી શારીરિક બીમારીઓ પણ આવા લક્ષણો પેદા કરી શકે છે. નિષ્ણાત ડૉક્ટરની સલાહ લો.'}
              </div>

              {/* Reset / Retake */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition cursor-pointer min-h-[44px]"
                >
                  {currentLang === 'en' ? 'Retake Reflection' : currentLang === 'hi' ? 'दोबारा करें' : 'ફરીથી શરૂ કરો'}
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-md bg-[#115e59] hover:bg-[#0f4f4b] text-white text-xs font-semibold transition cursor-pointer min-h-[44px]"
                >
                  {currentLang === 'en' ? 'Finished' : currentLang === 'hi' ? 'समाप्त' : 'પૂર્ણ'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

