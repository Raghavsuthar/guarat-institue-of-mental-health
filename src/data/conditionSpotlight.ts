import { ConditionCategory, LocalizedString } from '../types';

export interface SpotlightCondition {
  id: string;
  slug: string;
  category: ConditionCategory;
  name: LocalizedString;
  summary: LocalizedString;
}

/**
 * Small, presentation-only records for the home-page spotlight.
 * Keep this list lightweight; full clinical content is loaded by the library route.
 */
export const conditionSpotlightData: SpotlightCondition[] = [
  {
    id: 'depression',
    slug: 'major-depressive-disorder',
    category: 'mood',
    name: {
      en: 'Major Depressive Disorder (Depression)',
      hi: 'मेजर डिप्रेसिव डिसऑर्डर (अवसाद / डिप्रेशन)',
      gu: 'મેજર ડિપ્રેશન (ડિપ્રેશન / ગંભીર ઉદાસીનતા)',
    },
    summary: {
      en: 'Explore symptoms, support options and evidence-based care.',
      hi: 'लक्षणों, सहायता और प्रमाण-आधारित देखभाल के बारे में जानें।',
      gu: 'લક્ષણો, સહાય અને પુરાવા આધારિત સંભાળ વિશે જાણો.',
    },
  },
  {
    id: 'anxiety-gad',
    slug: 'generalized-anxiety-disorder',
    category: 'anxiety',
    name: {
      en: 'Generalized Anxiety Disorder (GAD)',
      hi: 'सामान्यीकृत चिंता विकार (GAD)',
      gu: 'સામાન્યકૃત ચિંતા વિકાર (GAD - વધુ પડતી ચિંતા)',
    },
    summary: {
      en: 'Learn about persistent worry, everyday impact and treatment.',
      hi: 'लगातार चिंता, दैनिक जीवन पर प्रभाव और उपचार के बारे में जानें।',
      gu: 'સતત ચિંતા, રોજિંદા જીવન પર અસર અને સારવાર વિશે જાણો.',
    },
  },
  {
    id: 'ocd',
    slug: 'obsessive-compulsive-disorder',
    category: 'ocd',
    name: {
      en: 'Obsessive-Compulsive Disorder (OCD)',
      hi: 'ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD)',
      gu: 'ઓબ્સેસિવ-કમ્પલ્સિવ ડિસઓર્ડર (OCD - વહેમ અને વારંવાર કરવાની ટેવ)',
    },
    summary: {
      en: 'Understand obsessions, compulsions and available support.',
      hi: 'जुनूनी विचारों, बाध्यकारी व्यवहार और उपलब्ध सहायता को समझें।',
      gu: 'ઓબ્સેશન, કમ્પલ્શન અને ઉપલબ્ધ સહાય વિશે જાણો.',
    },
  },
  {
    id: 'adhd',
    slug: 'attention-deficit-hyperactivity-disorder-adhd',
    category: 'neurodevelopmental',
    name: {
      en: 'Attention-Deficit / Hyperactivity Disorder (ADHD)',
      hi: 'एडीएचडी (अटेंशन-डेफिसिट / हाइपरएक्टिविटी डिसऑर्डर / ADHD)',
      gu: 'એડીએચડી (ધ્યાનનો અભાવ અને અતિસક્રિયતા / ADHD)',
    },
    summary: {
      en: 'Explore attention, activity regulation and practical supports.',
      hi: 'ध्यान, गतिविधि नियंत्रण और व्यावहारिक सहायता के बारे में जानें।',
      gu: 'ધ્યાન, પ્રવૃત્તિનું નિયંત્રણ અને વ્યવહારુ સહાય વિશે જાણો.',
    },
  },
];
