export type Language = 'en' | 'hi' | 'gu';

export interface LocalizedString {
  en: string;
  hi: string;
  gu: string;
}

export interface ReferenceItem {
  id?: string;
  citation?: string;
  title?: string;
  source?: string;
  year?: string | number;
  url?: string;
}

export interface FAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

export interface ReviewStatus {
  lastReviewed: string;
  reviewer?: string;
}

export type ConditionCategory =
  | 'mood'
  | 'anxiety'
  | 'ocd'
  | 'psychotic'
  | 'trauma'
  | 'neurodevelopmental'
  | 'sleep'
  | 'eating'
  | 'somatic'
  | 'geriatric'
  | 'personality'
  | 'perinatal';

export interface EvidenceHighlight {
  fact: LocalizedString;      // one short, specific evidence-based statement
  citationRef: string;        // matches a `source` value in this condition's references array
}

export interface Condition {
  id: string;
  slug: string;
  category: ConditionCategory;
  conditionIcon?: string; // key into per-condition icon/motif set
  name: LocalizedString;
  medicalTerms: LocalizedString;
  overview: LocalizedString;
  commonSymptoms: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  dailyLifeImpact: LocalizedString;
  causes: LocalizedString; // Bio-psycho-social
  riskFactors: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  psychiatricAssessment: LocalizedString;
  diagnosisExplanation: LocalizedString;
  differentialConsiderations: LocalizedString;
  illustrativeExample?: LocalizedString;
  illustrativeExamples: LocalizedString[]; // 3 fictional, composite, non-identifiable vignettes
  evidenceHighlights: EvidenceHighlight[]; // 3-5 concrete evidence-based facts
  treatment: {
    psychoeducation: LocalizedString;
    lifestyleSupport: LocalizedString;
    psychotherapy: LocalizedString;
    medications?: LocalizedString;
    familySocialInterventions: LocalizedString;
  };
  treatmentGoals: LocalizedString;
  recoveryOutlook: LocalizedString;
  relapsePrevention: LocalizedString;
  urgentWarningSigns: LocalizedString;
  mythsVsFacts: Array<{
    myth: LocalizedString;
    fact: LocalizedString;
  }>;
  faqs: FAQItem[];
  references: ReferenceItem[];
  lastReviewed: string;
  reviewStatus?: ReviewStatus;
  relatedIds?: string[];
  relatedContent?: {
    conditionSlugs?: string[];
    medicationIds?: string[];
    treatmentIds?: string[];
    mythIds?: string[];
    faqIds?: string[];
  };
  youtubeVideoId?: string;
  curatedVideoIds?: string[];
  educationalVideoTitle?: LocalizedString;
  educationalVideoSource?: string;
  educationalVideoUrl?: string;
}

export interface SubstanceInfo {
  id: string;
  slug: string;
  name: LocalizedString;
  medicalTerms: LocalizedString;
  whatIsIt: LocalizedString;
  whyAddictive: LocalizedString;
  brainBodyEffects: LocalizedString;
  problematicUseSigns: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  dependenceSigns: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  withdrawalSymptoms: {
    en: string | string[];
    hi: string | string[];
    gu: string | string[];
  };
  withdrawalTimeline?: LocalizedString;
  healthRisks?: LocalizedString;
  relapseTriggers?: LocalizedString;
  medicalComplications?: LocalizedString;
  psychiatricComplications?: LocalizedString;
  familyImpact?: LocalizedString;
  assessmentOverview?: LocalizedString;
  treatmentApproach: LocalizedString;
  psychotherapyModalities?: LocalizedString;
  medicationAssistedTreatment?: LocalizedString;
  detoxificationConcepts?: LocalizedString; // General, non-instructional
  relapsePrevention?: LocalizedString;
  harmReduction?: LocalizedString;
  overdoseWarningSigns?: LocalizedString;
  emergencyAdvice?: LocalizedString;
  mythsVsFacts?: Array<{
    myth: LocalizedString;
    fact: LocalizedString;
  }>;
  faqs?: FAQItem[];
  references?: ReferenceItem[];
  lastReviewed: string;
  reviewStatus?: ReviewStatus;
  relatedIds?: string[];
  youtubeVideoId?: string;
  educationalVideoTitle?: LocalizedString;
  educationalVideoSource?: string;
  educationalVideoUrl?: string;
}

export interface DevelopmentVsConcernItem {
  ageRange: LocalizedString;
  typicalDevelopment: LocalizedString;
  redFlagsClinicalConcern: LocalizedString;
}

export interface ChildAdolescentSignCategory {
  category: LocalizedString;
  signs: {
    en: string[];
    hi: string[];
    gu: string[];
  };
}

export interface ChildEvidenceHighlight {
  statistic: string;
  context: LocalizedString;
  source: string;
}

export interface ChildAdolescentTopic {
  id: string;
  slug: string;
  name: LocalizedString;
  medicalTerms: LocalizedString;
  tagline: LocalizedString;
  overview: LocalizedString;
  typicalDevelopmentVsRedFlags: DevelopmentVsConcernItem[];
  commonSigns: ChildAdolescentSignCategory[];
  whenToSeekHelp: LocalizedString;
  causesAndRiskFactors: LocalizedString;
  schoolAndHomeImpact: LocalizedString;
  assessmentOverview: LocalizedString;
  treatmentApproach: {
    parentTrainingAndBehavioral: LocalizedString;
    psychotherapy: LocalizedString;
    schoolSupportAndAccommodations: LocalizedString;
    medicationGuidance: LocalizedString;
  };
  parentCaregiverGuidance: LocalizedString[];
  illustrativeExamples: LocalizedString[];
  evidenceHighlights: ChildEvidenceHighlight[];
  mythsVsFacts: Array<{
    myth: LocalizedString;
    fact: LocalizedString;
  }>;
  faqs: FAQItem[];
  references: ReferenceItem[];
  relatedIds?: string[];
  lastReviewed: string;
  reviewStatus?: ReviewStatus | string;
}

export interface TypicalVsClinicalConcernItem {
  situationOrPhase: LocalizedString;
  typicalVariation: LocalizedString;
  clinicalConcern: LocalizedString;
}

export interface WomensSignCategory {
  category: LocalizedString;
  signs: {
    en: string[];
    hi: string[];
    gu: string[];
  };
}

export interface WomensEvidenceHighlight {
  statistic: string;
  context: LocalizedString;
  source: string;
}

export type WomensTopicCategory = 'reproductive' | 'perinatal' | 'social-roles';

export interface WomensMentalHealthTopic {
  id: string;
  slug: string;
  category: WomensTopicCategory;
  name: LocalizedString;
  medicalTerms: LocalizedString;
  tagline: LocalizedString;
  overview: LocalizedString;
  typicalVariationVsClinicalConcern: TypicalVsClinicalConcernItem[];
  commonSigns: WomensSignCategory[];
  whenToSeekHelp: LocalizedString;
  causesAndRiskFactors: LocalizedString;
  lifeStageOrContextImpact: LocalizedString;
  assessmentOverview: LocalizedString;
  treatmentApproach: {
    psychotherapy: LocalizedString;
    medicalAndPharmacological: LocalizedString;
    lifestyleAndSupportive: LocalizedString;
    workplaceAndFamilySupport: LocalizedString;
  };
  supportiveGuidance: LocalizedString[];
  illustrativeExamples: LocalizedString[];
  evidenceHighlights: WomensEvidenceHighlight[];
  mythsVsFacts: Array<{
    myth: LocalizedString;
    fact: LocalizedString;
  }>;
  faqs: FAQItem[];
  references: ReferenceItem[];
  relatedIds?: string[];
  lastReviewed: string;
  reviewStatus?: ReviewStatus | string;
}

export interface TherapyModality {
  id: string;
  name: LocalizedString;
  shortName: string;
  plainSummary: LocalizedString;
  howItWorks: LocalizedString;
  conditionsUsedFor: LocalizedString;
  whatToExpect: LocalizedString;
  misconceptions: LocalizedString;
  illustrativeExample: LocalizedString;
  references?: ReferenceItem[];
  lastReviewed: string;
  reviewStatus?: ReviewStatus;
  relatedIds?: string[];
  youtubeVideoId?: string;
  curatedVideoIds?: string[];
}

export interface MythFact {
  id: string;
  myth: LocalizedString;
  fact: LocalizedString;
  explanation: LocalizedString;
  category: 'general' | 'addiction' | 'therapy' | 'children';
}

export interface CaregiverGuide {
  id: string;
  title: LocalizedString;
  category: 'support' | 'communication' | 'boundaries' | 'selfcare' | 'crisis';
  summary: LocalizedString;
  keyPoints: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  whatToSay: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  whatToAvoid: {
    en: string[];
    hi: string[];
    gu: string[];
  };
}

export interface SymptomEducation {
  id: string;
  symptomName: LocalizedString;
  plainDescription: LocalizedString;
  possibleCauses: LocalizedString; // Emphasizing multiple conditions + physical causes
  whenToConsult: LocalizedString;
  selfCareSupport: LocalizedString;
  reviewStatus?: ReviewStatus;
  relatedIds?: string[];
}

export interface GlossaryTerm {
  id: string;
  term: LocalizedString;
  pronunciationOrAlt?: LocalizedString;
  definition: LocalizedString;
  clinicalContext?: LocalizedString;
  relatedType?: 'condition' | 'medication' | 'symptom' | 'treatment' | 'substance';
  relatedId?: string;
  reviewStatus?: ReviewStatus;
}

export interface IndiaResource {
  id: string;
  name: LocalizedString;
  category: 'helpline' | 'government' | 'academic' | 'community';
  number?: string;
  operatedBy: string;
  description: LocalizedString;
  coverage: LocalizedString;
  availability: LocalizedString;
  languages: LocalizedString;
  cost: LocalizedString;
  websiteUrl?: string;
  verificationStatus: string;
  lastReviewed: string;
}

export interface HealthArticle {
  id: string;
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  category: 'stress' | 'lifestyle' | 'rights' | 'workplace';
  summary?: LocalizedString;
  content?: LocalizedString;
  readingTimeMinutes?: number;
  tags?: string[];
  overview?: LocalizedString;
  sections?: Array<{
    heading: LocalizedString;
    content: LocalizedString;
  }>;
  practicalStrategies?: {
    en: string[];
    hi: string[];
    gu: string[];
  };
  whenToSeekHelp?: LocalizedString;
  references?: ReferenceItem[];
  lastReviewed?: string;
  reviewStatus?: ReviewStatus;
}

export interface HelplineItem {
  name: LocalizedString;
  number: string;
  availableHours: LocalizedString;
  languages: LocalizedString;
  operatedBy: string;
  verificationSource: string;
  verifiedDate: string;
  cost: LocalizedString;
  description: LocalizedString;
}

export type ActiveTab =
  | 'home'
  | 'conditions'
  | 'child-psychiatry'
  | 'womens-mental-health'
  | 'addiction'
  | 'treatments'
  | 'caregivers'
  | 'myths'
  | 'symptoms'
  | 'when-to-seek-help'
  | 'interactive'
  | 'emergency'
  | 'articles'
  | 'resources'
  | 'outreach'
  | 'glossary'
  | 'faqs'
  | 'accessibility'
  | 'about'
  | 'admin';

export type ShareCardFormat = 'square' | 'story'; // square: 1080x1080, story: 1080x1920
export type ShareCardType = 'condition' | 'myth' | 'faq' | 'glossary' | 'screener' | 'substance' | 'article' | 'child-topic' | 'womens-topic';

export interface ShareCardData {
  type?: ShareCardType;
  kind?: string;
  title: string;
  subtitle?: string;
  keyPoints?: string[];
  points?: string[];
  mythText?: string;
  factText?: string;
  explanation?: string;
  disclaimer?: string;
  lang?: Language;
  format?: ShareCardFormat;
  sourceLabel?: string;
  attribution?: string;
  category?: string;
  path?: string;
}

export interface AnalyticsPingPayload {
  path: string;
  lang: Language;
  referrerDomain?: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  eventType?: 'page_view' | 'screener_completed' | 'myth_card_shared' | 'card_shared' | 'qr_landed' | 'pwa_installed' | 'read_aloud';
  eventName?: string;
  timestamp?: number;
}

export interface DailyAnalyticsBucket {
  date: string; // YYYY-MM-DD
  views: number;
  byLang: Record<Language, number>;
  byPath: Record<string, number>;
  referrers: Record<string, number>;
  devices: Record<'mobile' | 'desktop' | 'tablet', number>;
  events: Record<string, number>;
}

export interface AggregateAnalyticsSummary {
  totalViews: number;
  byLang: Record<Language, number>;
  topPages: Array<{ path: string; count: number }>;
  topReferrers: Array<{ domain: string; count: number }>;
  deviceBreakdown: Record<'mobile' | 'desktop' | 'tablet', number>;
  events: {
    screenerCompleted: number;
    mythCardShared: number;
    cardShared: number;
    qrLanded: number;
    pwaInstalled: number;
    readAloud: number;
  };
  dailyTrend: Array<{
    date: string;
    views: number;
    events: number;
  }>;
  lastUpdated: string;
}
