import { conditionsData } from '../src/data/conditions';
import { substancesData } from '../src/data/substances';
import { treatmentsData } from '../src/data/treatments';
import { symptomsData } from '../src/data/symptoms';
import { articlesData } from '../src/data/articles';
import { glossaryData } from '../src/data/glossary';
import { mythsData } from '../src/data/myths';
import { faqsData } from '../src/data/faqs';

const languages = ['en', 'hi', 'gu'] as const;
let errorCount = 0;

function assertNonEmpty(val: any, path: string) {
  if (val === undefined || val === null || (typeof val === 'string' && val.trim() === '')) {
    console.error(`❌ Missing or empty content at: ${path}`);
    errorCount++;
  }
}

function checkLocalizedString(obj: any, path: string) {
  if (!obj) {
    console.error(`❌ Missing localized object at: ${path}`);
    errorCount++;
    return;
  }
  for (const lang of languages) {
    assertNonEmpty(obj[lang], `${path}.${lang}`);
  }
}

console.log('🔍 Running Gujarat Institute of Mental Health Psychiatry Education Content Validation...');

// 1. Conditions
console.log(`Checking ${conditionsData.length} clinical conditions...`);
conditionsData.forEach((c) => {
  assertNonEmpty(c.id, `condition[${c.id}].id`);
  assertNonEmpty(c.slug, `condition[${c.id}].slug`);
  checkLocalizedString(c.name, `condition[${c.slug}].name`);
  checkLocalizedString(c.medicalTerms, `condition[${c.slug}].medicalTerms`);
  checkLocalizedString(c.overview, `condition[${c.slug}].overview`);
  checkLocalizedString(c.dailyLifeImpact, `condition[${c.slug}].dailyLifeImpact`);
  checkLocalizedString(c.causes, `condition[${c.slug}].causes`);
  checkLocalizedString(c.diagnosisExplanation, `condition[${c.slug}].diagnosisExplanation`);
  checkLocalizedString(c.treatment.psychoeducation, `condition[${c.slug}].treatment.psychoeducation`);
  checkLocalizedString(c.treatment.lifestyleSupport, `condition[${c.slug}].treatment.lifestyleSupport`);
  checkLocalizedString(c.treatment.psychotherapy, `condition[${c.slug}].treatment.psychotherapy`);
  if (c.treatment.medications) {
    checkLocalizedString(c.treatment.medications, `condition[${c.slug}].treatment.medications`);
  }
  checkLocalizedString(c.recoveryOutlook, `condition[${c.slug}].recoveryOutlook`);
});

// 2. Substances
console.log(`Checking ${substancesData.length} addiction recovery substances...`);
substancesData.forEach((s) => {
  assertNonEmpty(s.id, `substance[${s.id}].id`);
  assertNonEmpty(s.slug, `substance[${s.id}].slug`);
  checkLocalizedString(s.name, `substance[${s.slug}].name`);
  checkLocalizedString(s.whatIsIt, `substance[${s.slug}].whatIsIt`);
  checkLocalizedString(s.whyAddictive, `substance[${s.slug}].whyAddictive`);
  checkLocalizedString(s.brainBodyEffects, `substance[${s.slug}].brainBodyEffects`);
  checkLocalizedString(s.treatmentApproach, `substance[${s.slug}].treatmentApproach`);
});

// 3. Treatments
console.log(`Checking ${treatmentsData.length} psychotherapy modalities...`);
treatmentsData.forEach((t) => {
  assertNonEmpty(t.id, `treatment[${t.id}].id`);
  checkLocalizedString(t.name, `treatment[${t.id}].name`);
  checkLocalizedString(t.plainSummary, `treatment[${t.id}].plainSummary`);
  checkLocalizedString(t.howItWorks, `treatment[${t.id}].howItWorks`);
  checkLocalizedString(t.conditionsUsedFor, `treatment[${t.id}].conditionsUsedFor`);
  checkLocalizedString(t.whatToExpect, `treatment[${t.id}].whatToExpect`);
  checkLocalizedString(t.misconceptions, `treatment[${t.id}].misconceptions`);
  if (t.illustrativeExample) {
    checkLocalizedString(t.illustrativeExample, `treatment[${t.id}].illustrativeExample`);
  }
});

// 5. Symptoms
console.log(`Checking ${symptomsData.length} symptom psychoeducation guides...`);
symptomsData.forEach((sym) => {
  assertNonEmpty(sym.id, `symptom[${sym.id}].id`);
  checkLocalizedString(sym.symptomName, `symptom[${sym.id}].symptomName`);
  checkLocalizedString(sym.plainDescription, `symptom[${sym.id}].plainDescription`);
  checkLocalizedString(sym.whenToConsult, `symptom[${sym.id}].whenToConsult`);
});

// 6. Myths
console.log(`Checking ${mythsData.length} myths vs facts...`);
mythsData.forEach((m) => {
  checkLocalizedString(m.myth, `myth[${m.id}].myth`);
  checkLocalizedString(m.fact, `myth[${m.id}].fact`);
  checkLocalizedString(m.explanation, `myth[${m.id}].explanation`);
});

// 7. FAQs
console.log(`Checking ${faqsData.length} frequently asked questions...`);
faqsData.forEach((f, idx) => {
  checkLocalizedString(f.question, `faq[${idx}].question`);
  checkLocalizedString(f.answer, `faq[${idx}].answer`);
});

// 8. Glossary
console.log(`Checking ${glossaryData.length} glossary terms...`);
glossaryData.forEach((g) => {
  checkLocalizedString(g.term, `glossary[${g.id}].term`);
  checkLocalizedString(g.definition, `glossary[${g.id}].definition`);
});

if (errorCount > 0) {
  console.error(`\n❌ Content validation failed with ${errorCount} missing localized values!`);
  process.exit(1);
} else {
  console.log(`\n✅ All content is completely localized across English, Hindi, and Gujarati with zero missing fields!`);
}

