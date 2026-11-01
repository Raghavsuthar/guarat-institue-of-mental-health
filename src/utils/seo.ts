import { Language } from '../types';

export const BASE_URL: string =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_APP_URL) ||
  'https://gujarat-institute-of-mental-health.in';

export interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "conditions/depression" or "" for home
  lang: Language;
  jsonLd?: Record<string, any>;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noIndex?: boolean;
}

function setMetaTag(attribute: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) {
      element.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export function updatePageSEO({
  title,
  description,
  path,
  lang,
  jsonLd,
  ogType = 'website',
  ogImage = `${BASE_URL}/og-image.png`,
  noIndex = false,
}: SEOProps) {
  if (typeof document === 'undefined') return;

  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const currentUrl = cleanPath ? `${BASE_URL}/${lang}/${cleanPath}` : `${BASE_URL}/${lang}`;
  const fullTitle = `${title} | Gujarat Institute of Mental Health`;

  // 1. Title & Description & Robots
  document.title = fullTitle;
  setMetaTag('name', 'description', description);
  setMetaTag('name', 'author', 'Gujarat Institute of Mental Health');
  setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

  // 2. Canonical & Hreflang Alternates
  setLinkTag('canonical', currentUrl);
  setLinkTag('alternate', cleanPath ? `${BASE_URL}/en/${cleanPath}` : `${BASE_URL}/en`, 'en');
  setLinkTag('alternate', cleanPath ? `${BASE_URL}/hi/${cleanPath}` : `${BASE_URL}/hi`, 'hi');
  setLinkTag('alternate', cleanPath ? `${BASE_URL}/gu/${cleanPath}` : `${BASE_URL}/gu`, 'gu');
  setLinkTag('alternate', cleanPath ? `${BASE_URL}/en/${cleanPath}` : `${BASE_URL}/en`, 'x-default');

  // 3. Open Graph
  setMetaTag('property', 'og:title', fullTitle);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', currentUrl);
  setMetaTag('property', 'og:type', ogType);
  setMetaTag('property', 'og:site_name', 'Gujarat Institute of Mental Health');
  setMetaTag('property', 'og:locale', lang === 'hi' ? 'hi_IN' : lang === 'gu' ? 'gu_IN' : 'en_IN');
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:image:width', '1200');
  setMetaTag('property', 'og:image:height', '630');

  // 4. Twitter Card
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', fullTitle);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', ogImage);

  // 5. HTML lang attribute
  document.documentElement.lang = lang;

  // 6. JSON-LD Structured Data
  let script = document.getElementById('page-jsonld') as HTMLScriptElement | null;
  if (jsonLd) {
    if (!script) {
      script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(jsonLd);
  } else if (script) {
    script.remove();
  }
}

/**
 * Standard Physician & Education Webpage structured data generator
 */
export function buildMedicalWebPageSchema({
  title,
  description,
  path,
  lang,
  medicalType = 'MedicalCondition',
  subjectName,
  reviewDate = '2026-08',
}: {
  title: string;
  description: string;
  path: string;
  lang: Language;
  medicalType?: 'MedicalCondition' | 'Substance' | 'MedicalTherapy' | 'MedicalSpecialty' | 'MedicalSignOrSymptom';
  subjectName?: string;
  reviewDate?: string;
}) {
  const url = `${BASE_URL}/${lang}/${path.replace(/^\/+|\/+$/g, '')}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description,
    url,
    inLanguage: lang,
    lastReviewed: reviewDate,
    author: {
      '@type': 'Organization',
      name: 'Gujarat Institute of Mental Health',
      description: 'Gujarat Institute of Mental Health is a public mental health education platform dedicated to ethical, non-stigmatizing public mental health awareness.',
    },
    reviewedBy: {
      '@type': 'Organization',
      name: 'Gujarat Institute of Mental Health',
    },
    about: {
      '@type': medicalType,
      name: subjectName || title,
    },
    educationalUse: 'Public Health Education',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'Patient, Caregiver, Community Member',
    },
  };
}

/**
 * FAQPage structured data generator
 */
export function buildFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
  lang: Language,
  path: string
) {
  const url = `${BASE_URL}/${lang}/${path.replace(/^\/+|\/+$/g, '')}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url,
    inLanguage: lang,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList structured data generator for Google Rich Results
 */
export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  lang: Language
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.path ? `${BASE_URL}/${lang}/${item.path.replace(/^\/+/, '')}` : `${BASE_URL}/${lang}`,
    })),
  };
}


