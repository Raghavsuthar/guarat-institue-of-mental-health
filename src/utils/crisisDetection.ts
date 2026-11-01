const CRISIS_TERMS = [
  'suicide',
  'kill myself',
  'end my life',
  'want to die',
  'i want to die',
  'thinking of suicide',
  'harm myself',
  'self harm',
  'overdose',
  'hanging',
  'poison',
  'poison myself',
  'मरना चाहता',
  'मरना चाहती',
  'मर जाना चाहता',
  'मर जाना चाहती',
  'मरना',
  'जीना नहीं',
  'जीने का मन नहीं',
  'आत्महत्या',
  'खुदकुशी',
  'जान देना',
  'खुद को मार',
  'મરી જવું',
  'મરી જવા માંગું',
  'જીવ આપવો',
  'જીવ દેવું',
  'જીવવું નથી',
  'આત્મહત્યા',
  'khudkushi',
  'aatmahatya',
  'marna chahta',
  'marna chahti',
  'mar jana chahta',
  'mar jana chahti',
  'mujhe marna hai',
  'jeena nahi chahta',
  'jeena nahi chahti',
  'zindagi khatam',
  'khud ko maar',
  'jeev aapvo',
  'jiv devu',
  'jivvu nathi',
  'marvu che',
  'potane mari nakhvu',
] as const;

/**
 * Conservative crisis-language detection for routing to human support.
 * This is a safety escalation heuristic, not a clinical assessment.
 */
export function isCrisisQuery(query: string): boolean {
  const normalized = query.toLocaleLowerCase().replace(/\s+/g, ' ').trim();
  return CRISIS_TERMS.some((term) => normalized.includes(term));
}
