import { Language } from '../types';

export type AssessmentCategory = 'recognized' | 'adapted' | 'pending-review';

const recognizedTools = new Set(['phq9', 'gad7', 'asrs', 'dast10', 'scoff']);
const pendingReviewTools = new Set(['isi']);

export function getAssessmentCategory(toolId: string): AssessmentCategory {
  if (recognizedTools.has(toolId)) return 'recognized';
  if (pendingReviewTools.has(toolId)) return 'pending-review';
  return 'adapted';
}

export function getResultPresentation(toolId: string, score = 0) {
  const showClinicalInterpretation = getAssessmentCategory(toolId) === 'recognized';
  let band: string | undefined;

  if (toolId === 'phq9') {
    if (score >= 20) band = 'severe';
    else if (score >= 15) band = 'moderately-severe';
  }
  if (toolId === 'dast10') {
    if (score >= 9) band = 'severe';
    else if (score >= 6) band = 'substantial';
  }

  return {
    showScore: showClinicalInterpretation,
    showInterpretation: showClinicalInterpretation,
    ...(band ? { band } : {}),
  };
}

const wordingOverrides: Record<string, Partial<Record<number, Record<Language, string>>>> = {
  phq9: {
    5: {
      en: 'Poor appetite or overeating',
      hi: 'भूख कम लगना या जरूरत से ज्यादा खाना',
      gu: 'ભૂખ ઓછી લાગવી કે જરૂર કરતાં વધુ ખાવું',
    },
  },
  gad7: {
    4: {
      en: 'Trouble relaxing',
      hi: 'आराम महसूस करने में कठिनाई होना',
      gu: 'આરામ કરવામાં મુશ્કેલી થવી',
    },
  },
};

export function getQuestionText(
  toolId: string,
  questionId: number,
  language: Language,
  fallback = '',
): string {
  return wordingOverrides[toolId]?.[questionId]?.[language] ?? fallback;
}
