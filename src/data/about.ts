import { LocalizedString } from '../types';

export interface DoctorProfile {
  name: string;
  qualifications: string;
  title: LocalizedString;
  registrationDetails: LocalizedString;
  languagesSpoken: string[];
  specialInterests: LocalizedString[];
  practicePhilosophy: LocalizedString;
  consultationNotice: LocalizedString;
  ethicalCommitment: LocalizedString;
}

export const doctorProfile: DoctorProfile = {
  name: 'Gujarat Institute of Mental Health',
  qualifications: '',
  title: {
    en: 'Public Mental Health Education · Gujarat',
    hi: 'जन मानसिक स्वास्थ्य शिक्षा · गुजरात',
    gu: 'જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ · ગુજરાત',
  },
  registrationDetails: {
    en: 'Public education portal. No individual consultations are offered.',
    hi: 'जन-शिक्षा पोर्टल। कोई व्यक्तिगत परामर्श प्रदान नहीं किया जाता।',
    gu: 'જાહેર શિક્ષણ પોર્ટલ। કોઈ વ્યક્તિગત સલાહ આપવામાં આવતી નથી.',
  },
  languagesSpoken: [],
  specialInterests: [],
  practicePhilosophy: {
    en: 'This project focuses on compassionate, evidence-informed public education and clear explanations of mental health. Every person deserves dignity, clarity, and respect when seeking support.',
    hi: 'यह परियोजना मानसिक स्वास्थ्य के बारे में सहानुभूतिपूर्ण, प्रमाण-आधारित जन-शिक्षा और स्पष्ट जानकारी पर केंद्रित है। सहायता लेने वाले हर व्यक्ति को गरिमा और सम्मान मिलना चाहिए।',
    gu: 'આ પ્રોજેક્ટ માનસિક સ્વાસ્થ્ય અંગે સહાનુભૂતિપૂર્ણ, પુરાવા-આધારિત જાહેર શિક્ષણ પર કેન્દ્રિત છે. સહાય મેળવતા દરેક વ્યક્તિને ગૌરવ અને સન્માન મળવું જોઈએ.',
  },
  consultationNotice: {
    en: 'This portal is dedicated exclusively to public psychiatric education and mental health literacy in India. It does not provide personalized medical diagnoses, treatment plans, or online prescriptions. For medical care, please consult a registered medical professional in person.',
    hi: 'यह वेबसाइट केवल सार्वजनिक मानसिक स्वास्थ्य शिक्षा और जागरूकता के लिए है। यह किसी व्यक्तिगत बीमारी का निदान या ऑनलाइन नुस्खा प्रदान नहीं करती है। व्यक्तिगत इलाज के लिए कृपया अपने नजदीकी पंजीकृत डॉक्टर से व्यक्तिगत रूप से मिलें।',
    gu: 'આ વેબસાઇટ ફક્ત જાહેર માનસિક સ્વાસ્થ્ય શિક્ષણ અને જાગૃતિ માટે બનાવવામાં આવી છે. આના દ્વારા કોઈ અંગત નિદાન કે સારવાર આપવામાં આવતી નથી. વ્યક્તિગત સારવાર માટે નજીકના ડૉક્ટરનો રૂબરૂ સંપર્ક કરો.',
  },
  ethicalCommitment: {
    en: 'This website provides general education, not individual diagnosis or treatment. Source links and review information are shown where available; content should not replace care from a qualified clinician.',
    hi: 'यह वेबसाइट सामान्य शिक्षा देती है, व्यक्तिगत निदान या उपचार नहीं। जहाँ उपलब्ध हों, वहाँ स्रोत लिंक और समीक्षा जानकारी दी जाती है; यह योग्य चिकित्सक की देखभाल का विकल्प नहीं है।',
    gu: 'આ વેબસાઇટ સામાન્ય શિક્ષણ આપે છે, વ્યક્તિગત નિદાન કે સારવાર નહીં. જ્યાં ઉપલબ્ધ હોય ત્યાં સ્ત્રોત લિંક્સ અને સમીક્ષા માહિતી આપવામાં આવે છે; આ યોગ્ય તબીબી સંભાળનો વિકલ્પ નથી.',
  },
};

