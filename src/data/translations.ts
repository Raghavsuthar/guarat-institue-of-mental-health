import { LocalizedString, Language } from '../types';

export const siteMetadata = {
  doctorName: 'Gujarat Institute of Mental Health',
  tagline: {
    en: 'Understanding the Mind. Understanding Mental Health.',
    hi: 'मन को समझें। मानसिक स्वास्थ्य को समझें।',
    gu: 'મનને સમજો. માનસિક સ્વાસ્થ્યને સમજો.',
  } as LocalizedString,
  subTagline: {
    en: 'Reliable, evidence-based psychiatric education for patients, families, and the public.',
    hi: 'मरीजों, परिवारों और आम जनता के लिए प्रमाण-आधारित मनोरोग शिक्षा।',
    gu: 'દર્દીઓ, પરિવારો અને સામાન્ય જનતા માટે પુરાવા-આધારિત મનોચિકિત્સા શિક્ષણ.',
  } as LocalizedString,
  corePhilosophy: {
    en: 'EDUCATE — DO NOT DIAGNOSE',
    hi: 'शिक्षा दें — निदान (डायग्नोसिस) न करें',
    gu: 'શિક્ષિત કરો — નિદાન ન કરો',
  } as LocalizedString,
};

export const disclaimerText: Record<'en' | 'hi' | 'gu', string> = {
  en: 'This website provides general educational information about mental health and psychiatric conditions. It is not a substitute for professional medical evaluation, diagnosis or treatment. Information on this website should not be used to start, stop or change medication. If you are experiencing a medical or psychiatric emergency, seek immediate help from local emergency services or the nearest emergency department.',
  hi: 'यह वेबसाइट मानसिक स्वास्थ्य और मनोरोग संबंधी स्थितियों के बारे में केवल सामान्य शैक्षिक जानकारी प्रदान करती है। यह किसी पेशेवर चिकित्सक या मनोचिकित्सक द्वारा मूल्यांकन, निदान (डायग्नोसिस) या उपचार का विकल्प नहीं है। इस वेबसाइट की जानकारी का उपयोग किसी भी दवा को शुरू करने, बंद करने या बदलने के लिए कभी न करें। यदि आप किसी आपातकालीन संकट का सामना कर रहे हैं, तो तुरंत नजदीकी अस्पताल के आपातकालीन विभाग या हेल्पलाइन से संपर्क करें।',
  gu: 'આ વેબસાઇટ માનસિક સ્વાસ્થ્ય અને મનોરોગ સંબંધી સ્થિતિઓ વિશે માત્ર સામાન્ય શૈક્ષણિક માહિતી પૂરી પાડે છે. તે કોઈ વ્યાવસાયિક તબીબી મૂલ્યાંકન, નિદાન (ડાયગ્નોસિસ) અથવા સારવારનો વિકલ્પ નથી. આ વેબસાઇટ પરની માહિતીનો ઉપયોગ ક્યારેય કોઈપણ દવા શરૂ કરવા, બંધ કરવા અથવા બદલવા માટે કરશો નહીં. જો તમે કટોકટી કે ગંભીર સ્થિતિમાં હોવ, તો તાત્કાલિક નજીકના ઇમરજન્સી વિભાગ અથવા હેલ્પલાઇનનો સંપર્ક કરો.',
};

export const medicationMandatoryWarning: LocalizedString = {
  en: 'Never start, stop, or change psychiatric medication without discussing it with your treating healthcare professional. Psychiatric medications must always be taken under direct medical supervision.',
  hi: 'अपने मनोचिकित्सक से परामर्श किए बिना कभी भी कोई मनोरोग संबंधी दवा शुरू, बंद या खुराक में बदलाव न करें। दवाएं हमेशा डॉक्टर की प्रत्यक्ष निगरानी में ही ली जानी चाहिए।',
  gu: 'તમારા મનોચિકિત્સક સાથે ચર્ચા કર્યા વિના ક્યારેય કોઈપણ દવા શરૂ, બંધ અથવા ડોઝમાં ફેરફાર કરશો નહીં. દવાઓ હંમેશા ડૉક્ટરની સીધી દેખરેખ હેઠળ લેવી જોઈએ.',
};

export const translations: Record<
  Language,
  {
    doctorName: string;
    nav: {
      home: string;
      conditions: string;
      childPsychiatry: string;
      womensMentalHealth: string;
      addiction: string;
      medications: string;
      treatments: string;
      myths: string;
      caregivers: string;
      symptoms: string;
      interactive: string;
      emergency: string;
      articles: string;
      resources: string;
      outreach: string;
      faqs: string;
      accessibility: string;
      about: string;
    };
    disclaimer: {
      title: string;
      text: string;
      banner: string;
    };
    emergency: {
      bannerTitle: string;
      bannerSubtitle: string;
    };
    common: {
      searchPlaceholder: string;
      emergencyBanner: string;
      emergencyBtn: string;
      lastReviewed: string;
      faqs: string;
      myths: string;
      viewMore: string;
      close: string;
      references: string;
    };
    home: {
      heroTagline: string;
      heroTitle: string;
      heroDescription: string;
      exploreConditions: string;
      corePhilosophy: string;
      corePhilosophyDesc: string;
    };
    conditions: {
      title: string;
      overview: string;
      symptoms: string;
      causes: string;
      diagnosis: string;
      treatment: string;
      recovery: string;
      urgentSigns: string;
      impact: string;
      neurobiology: string;
      treatments: string;
      whenToSeekHelp: string;
    };
    childPsychiatry: {
      title: string;
      subtitle: string;
      audienceNoticeTitle: string;
      audienceNoticeText: string;
      typicalVsRedFlagsTitle: string;
      commonSignsTitle: string;
      assessmentTitle: string;
      treatmentTitle: string;
      schoolHomeImpactTitle: string;
      parentGuidanceTitle: string;
      vignettesTitle: string;
      mythsTitle: string;
      faqsTitle: string;
      referencesTitle: string;
      whenToSeekHelpTitle: string;
    };
    addiction: {
      title: string;
      overdose: string;
      withdrawal: string;
      treatment: string;
    };
    medications: {
      title: string;
      indications: string;
      mechanism: string;
      sideEffects: string;
      precautions: string;
      warning: string;
    };
    search: {
      title: string;
      placeholder: string;
      noResults: string;
    };
  }
> = {
  en: {
    doctorName: 'Gujarat Institute of Mental Health',
    nav: {
      home: 'Home',
      conditions: 'Conditions',
      childPsychiatry: 'Child & Adolescent',
      womensMentalHealth: "Women's Mental Health",
      addiction: 'Addiction & De-Addiction',
      medications: 'Medication Info',
      treatments: 'Therapies & Treatment',
      myths: 'Myths vs. Facts',
      caregivers: 'For Families & Caregivers',
      symptoms: 'Understanding Symptoms',
      interactive: 'Educational Screeners',
      emergency: 'Emergency Helplines',
      articles: 'Articles & Guides',
      resources: 'India Helplines & Resources',
      outreach: 'Clinic & Outreach Materials',
      faqs: 'FAQs',
      accessibility: 'Accessibility',
      about: 'About Gujarat Institute of Mental Health',
    },
    disclaimer: {
      title: 'Medical Educational Disclaimer',
      text: disclaimerText.en,
      banner: disclaimerText.en,
    },
    emergency: {
      bannerTitle: 'Emergency Crisis Support (India)',
      bannerSubtitle: 'Tele-MANAS 14416 | Emergency 112 (24x7 Toll-Free)',
    },
    common: {
      searchPlaceholder: 'Search conditions, symptoms, medications...',
      emergencyBanner: 'Emergency Crisis Support (India): Tele-MANAS 14416 | Emergency 112 (24x7, Free)',
      emergencyBtn: 'Crisis Helplines',
      lastReviewed: 'Last reviewed',
      faqs: 'Frequently Asked Questions',
      myths: 'Myths vs. Facts',
      viewMore: 'Read Full Guide',
      close: 'Close',
      references: 'Scientific References & Clinical Guidelines',
    },
    home: {
      heroTagline: 'Evidence-Based Public Psychiatry Portal',
      heroTitle: 'Understanding Mental Health With Clarity and Dignity',
      heroDescription: 'A clinical and scientific educational resource designed by Gujarat Institute of Mental Health to provide reliable, stigma-free psychiatric knowledge in English, Hindi, and Gujarati.',
      exploreConditions: 'Explore Conditions Library',
      corePhilosophy: 'CORE CLINICAL PRINCIPLE: EDUCATE — DO NOT DIAGNOSE',
      corePhilosophyDesc: 'Mental health symptoms are complex and personal. This portal provides transparent, scientific education to empower conversations with licensed physicians. It does not provide personalized diagnosis or replace in-person psychiatric care.',
    },
    conditions: {
      title: 'Psychiatric Conditions',
      overview: 'Clinical Overview',
      symptoms: 'Common Clinical Symptoms',
      causes: 'Etiology & Causes',
      diagnosis: 'Diagnostic Evaluation',
      treatment: 'Multidisciplinary Treatment',
      recovery: 'Prognosis & Recovery',
      urgentSigns: 'Urgent Red Flags',
      impact: 'Functional & Cognitive Impact',
      neurobiology: 'Neurobiology & Causes',
      treatments: 'Multidisciplinary Treatment',
      whenToSeekHelp: 'When to Consult a Psychiatrist',
    },
    childPsychiatry: {
      title: 'Child & Adolescent Mental Health',
      subtitle: 'Clinical and developmental guidance for parents, caregivers, educators, and school counselors.',
      audienceNoticeTitle: 'Clinical Guidance for Parents, Caregivers & Teachers',
      audienceNoticeText: 'This section is written specifically for parents, caregivers, teachers, and school counselors to recognize patterns, differentiate expected developmental variations from clinical distress, and understand when and how to seek an in-person evaluation with a qualified child and adolescent psychiatrist. It is not intended for self-diagnosis or labeling a child.',
      typicalVsRedFlagsTitle: 'Normal Development vs. When to Seek Evaluation',
      commonSignsTitle: 'Observable Behavioral & Emotional Signs',
      assessmentTitle: 'Comprehensive Child Psychiatric Evaluation',
      treatmentTitle: 'Multidisciplinary Treatment & Support',
      schoolHomeImpactTitle: 'Impact at School & Home Routines',
      parentGuidanceTitle: 'Supportive Parent & Caregiver Strategies',
      vignettesTitle: 'Observational Case Vignettes',
      mythsTitle: 'Myths vs. Clinical Facts',
      faqsTitle: 'Frequently Asked Questions',
      referencesTitle: 'Clinical Guidelines & Evidence Base',
      whenToSeekHelpTitle: 'When to Consult a Child Psychiatrist',
    },
    addiction: {
      title: 'De-Addiction Medicine',
      overdose: 'Acute Overdose Warning & Emergency Protocol',
      withdrawal: 'Withdrawal Symptoms & Medical Risks',
      treatment: 'Evidence-Based De-Addiction Approach',
    },
    medications: {
      title: 'Psychiatric Medications',
      indications: 'Clinical Indications',
      mechanism: 'Mechanism of Action in Plain Language',
      sideEffects: 'Anticipated Side Effects',
      precautions: 'Important Precautions & Regular Monitoring',
      warning: medicationMandatoryWarning.en,
    },
    search: {
      title: 'Global Search',
      placeholder: 'Search psychiatric conditions, medications, symptoms, helplines...',
      noResults: 'No matching educational topics found.',
    },
  },
  hi: {
    doctorName: '',
    nav: {
      home: 'होम',
      conditions: 'मानसिक विकार',
      childPsychiatry: 'बाल व किशोर मानसिक स्वास्थ्य',
      womensMentalHealth: 'महिला मानसिक स्वास्थ्य',
      addiction: 'नशा व व्यसन मुक्ति',
      medications: 'दवाओं की जानकारी',
      treatments: 'उपचार व थेरेपी',
      myths: 'भ्रांतियां और तथ्य',
      caregivers: 'परिवार व देखभालकर्ता',
      symptoms: 'लक्षणों की समझ',
      interactive: 'आत्म-अवलोकन टूल',
      emergency: 'आपातकालीन हेल्पलाइन',
      articles: 'लेख व मार्गदर्शिका',
      resources: 'राष्ट्रीय संसाधन व हेल्पलाइन',
      outreach: 'क्लीनिक व प्रचार सामग्री',
      faqs: 'अक्सर पूछे जाने वाले सवाल',
      accessibility: 'सुगमता (Accessibility)',
      about: ' के बारे में',
    },
    disclaimer: {
      title: 'चिकित्सीय शैक्षणिक अस्वीकरण (Disclaimer)',
      text: disclaimerText.hi,
      banner: disclaimerText.hi,
    },
    emergency: {
      bannerTitle: 'आपातकालीन संकट सहायता (भारत)',
      bannerSubtitle: 'टेली-मानस 14416 | आपातकाल 112 (24x7 निःशुल्क)',
    },
    common: {
      searchPlaceholder: 'बीमारियां, लक्षण, दवाएं या विषय खोजें...',
      emergencyBanner: 'मानसिक संकट सहायता (भारत): टेली-मानस 14416 | आपातकाल 112 (24x7 निःशुल्क)',
      emergencyBtn: 'हेल्पलाइन नंबर',
      lastReviewed: 'अंतिम समीक्षा',
      faqs: 'अक्सर पूछे जाने वाले सवाल',
      myths: 'भ्रांतियां बनाम सच',
      viewMore: 'पूरी मार्गदर्शिका पढ़ें',
      close: 'बंद करें',
      references: 'वैज्ञानिक संदर्भ एवं दिशानिर्देश',
    },
    home: {
      heroTagline: 'प्रमाण-आधारित जन मनोरोग शिक्षा पोर्टल',
      heroTitle: 'मानसिक स्वास्थ्य की वैज्ञानिक समझ और सम्मान',
      heroDescription: ' द्वारा निर्मित एक निष्पक्ष शैक्षिक मंच, जो अंग्रेजी, हिन्दी और गुजराती में प्रामाणिक, कलंक-मुक्त मानसिक स्वास्थ्य ज्ञान उपलब्ध कराता है।',
      exploreConditions: 'मानसिक स्थितियां देखें',
      corePhilosophy: 'मूल सिद्धांत: शिक्षा दें — निदान (डायग्नोसिस) न करें',
      corePhilosophyDesc: 'यह पोर्टल जागरूकता और शिक्षा के लिए है। यह किसी भी प्रकार का व्यक्तिगत चिकित्सीय परामर्श या डायग्नोसिस प्रदान नहीं करता।',
    },
    conditions: {
      title: 'मानसिक स्वास्थ्य स्थितियां',
      overview: 'चिकित्सीय अवलोकन (Overview)',
      symptoms: 'प्रमुख लक्षण',
      causes: 'कारण एवं न्यूरोबायोलॉजी',
      diagnosis: 'डायग्नोस्टिक मूल्यांकन',
      treatment: 'वैज्ञानिक उपचार पद्धतियां',
      recovery: 'पुनर्प्राप्ति एवं रोकथाम',
      urgentSigns: 'आपातकालीन खतरे के संकेत',
      impact: 'दैनिक जीवन व कार्यप्रणाली पर प्रभाव',
      neurobiology: 'जैविक कारण व न्यूरोबायोलॉजी',
      treatments: 'वैज्ञानिक उपचार पद्धतियां',
      whenToSeekHelp: 'डॉक्टर से कब मिलें',
    },
    childPsychiatry: {
      title: 'बाल एवं किशोर मानसिक स्वास्थ्य',
      subtitle: 'माता-पिता, अभिभावकों, शिक्षकों और स्कूल काउंसलर्स के लिए प्रमाण-आधारित विकासात्मक व मनोरोग मार्गदर्शिका।',
      audienceNoticeTitle: 'माता-पिता, शिक्षकों व देखभालकर्ताओं के लिए आवश्यक सूचना',
      audienceNoticeText: 'यह अनुभाग विशेष रूप से माता-पिता, शिक्षकों और देखभालकर्ताओं के लिए तैयार किया गया है ताकि वे बच्चों में व्यवहार संबंधी बदलावों को समझ सकें, सामान्य विकास और वास्तविक मानसिक संकट में अंतर जान सकें, और समझें कि कब बाल मनोचिकित्सक से परामर्श लेना चाहिए। यह बच्चों पर कोई लेबल लगाने या डॉक्टर के व्यक्तिगत मूल्यांकन का विकल्प नहीं है।',
      typicalVsRedFlagsTitle: 'सामान्य विकास बनाम कब विशेषज्ञ सलाह लें',
      commonSignsTitle: 'प्रमुख अवलोकन योग्य संकेत',
      assessmentTitle: 'व्यापक मनोरोग व विकासात्मक मूल्यांकन',
      treatmentTitle: 'बहु-विषयी उपचार एवं सहायता',
      schoolHomeImpactTitle: 'स्कूल व घरेलू जीवन पर प्रभाव',
      parentGuidanceTitle: 'माता-पिता व शिक्षकों के लिए व्यावहारिक सुझाव',
      vignettesTitle: 'अवलोकन आधारित वास्तविक परिस्थितियां (केस उदाहरण)',
      mythsTitle: 'भ्रांतियां बनाम चिकित्सीय सच',
      faqsTitle: 'अक्सर पूछे जाने वाले सवाल',
      referencesTitle: 'वैज्ञानिक संदर्भ एवं दिशानिर्देश',
      whenToSeekHelpTitle: 'डॉक्टर से कब परामर्श करें',
    },
    addiction: {
      title: 'नशा मुक्ति चिकित्सा',
      overdose: 'ओवरडोज चेतावनी व आपातकालीन प्रोटोकॉल',
      withdrawal: 'विड्रॉल लक्षण व चिकित्सीय जोखिम',
      treatment: 'वैज्ञानिक नशा मुक्ति उपचार',
    },
    medications: {
      title: 'मनोरोग की दवाएं',
      indications: 'उपयोग (Indications)',
      mechanism: 'दवा कैसे कार्य करती है',
      sideEffects: 'संभावित दुष्प्रभाव',
      precautions: 'सावधानियां एवं डॉक्टर की निगरानी',
      warning: medicationMandatoryWarning.hi,
    },
    search: {
      title: 'समग्र खोज (Search)',
      placeholder: 'बीमारियां, दवाएं, लक्षण, हेल्पलाइन खोजें...',
      noResults: 'कोई परिणाम नहीं मिला।',
    },
  },
  gu: {
    doctorName: '',
    nav: {
      home: 'હોમ',
      conditions: 'માનસિક સ્થિતિઓ',
      childPsychiatry: 'બાળ અને કિશોર માનસિક સ્વાસ્થ્ય',
      womensMentalHealth: 'મહિલા માનસિક સ્વાસ્થ્ય',
      addiction: 'વ્યસન મુક્તિ',
      medications: 'દવાઓની માહિતી',
      treatments: 'સારવાર અને થેરાપી',
      myths: 'માન્યતાઓ અને તથ્યો',
      caregivers: 'પરિવાર માટે માર્ગદર્શન',
      symptoms: 'લક્ષણોની સમજ',
      interactive: 'આત્મ-મૂલ્યાંકન',
      emergency: 'ઇમરજન્સી સહાય',
      articles: 'લેખો અને માર્ગદર્શિકા',
      resources: 'હેલ્પલાઇન અને કેન્દ્રો',
      outreach: 'ક્લિનિક પ્રચાર સાહિત્ય',
      faqs: 'સામાન્ય પ્રશ્નો (FAQs)',
      accessibility: 'સુગમતા (Accessibility)',
      about: ' વિશે',
    },
    disclaimer: {
      title: 'તબીબી શૈક્ષણિક ડિસ્ક્લેમર',
      text: disclaimerText.gu,
      banner: disclaimerText.gu,
    },
    emergency: {
      bannerTitle: 'ઇમરજન્સી સંકટ સહાય (ભારત)',
      bannerSubtitle: 'ટેલી-માનસ 14416 | ઇમરજન્સી 112 (24x7 વિનામૂલ્યે)',
    },
    common: {
      searchPlaceholder: 'બીમારીઓ, લક્ષણો, દવાઓ શોધો...',
      emergencyBanner: 'માનસિક સંકટ સહાય (ભારત): ટેલી-માનસ 14416 | ઇમરજન્સી 112 (24x7 વિનામૂલ્યે)',
      emergencyBtn: 'ઇમરજન્સી હેલ્પલાઇન',
      lastReviewed: 'છેલ્લી સમીક્ષા',
      faqs: 'સામાન્ય પ્રશ્નો',
      myths: 'માન્યતાઓ સામે સત્ય',
      viewMore: 'વિગતવાર વાંચો',
      close: 'બંધ કરો',
      references: 'વૈજ્ઞાનિક સંદર્ભો અને માર્ગદર્શિકા',
    },
    home: {
      heroTagline: 'પુરાવા-આધારિત જાહેર મનોચિકિત્સા શિક્ષણ',
      heroTitle: 'માનસિક સ્વાસ્થ્યને સમજો ગૌરવ અને સ્પષ્ટતા સાથે',
      heroDescription: ' દ્વારા તૈયાર કરાયેલ આ પ્લેટફોર્મ અંગ્રેજી, હિન્દી અને ગુજરાતીમાં પુરાવા-આધારિત જ્ઞાન પૂરું પાડે છે.',
      exploreConditions: 'સ્થિતિઓનું પુસ્તકાલય',
      corePhilosophy: 'મૂળ સિદ્ધાંત: શિક્ષિત કરો — નિદાન ન કરો',
      corePhilosophyDesc: 'આ વેબસાઇટ માત્ર જાહેર શિક્ષણ અને જાગૃતિ માટે છે. તે કોઈ અંગત તબીબી નિદાન કે પ્રિસ્ક્રિપ્શન આપતી નથી.',
    },
    conditions: {
      title: 'માનસિક વિકૃતિઓ',
      overview: 'ક્લિનિકલ ઝાંખી (Overview)',
      symptoms: 'મુખ્ય લક્ષણો',
      causes: 'કારણો અને જૈવિક પ્રક્રિયા',
      diagnosis: 'ડાયગ્નોસ્ટિક મૂલ્યાંકન',
      treatment: 'વૈજ્ઞાનિક સારવાર પદ્ધતિઓ',
      recovery: 'રિકવરી અને ભવિષ્યની સંભાળ',
      urgentSigns: 'તાત્કાલિક જોખમી સંકેતો',
      impact: 'દૈનિક જીવન પર અસર',
      neurobiology: 'જૈવિક કારણો અને મગજની રચના',
      treatments: 'વૈજ્ઞાનિક સારવાર',
      whenToSeekHelp: 'ડૉક્ટરની સલાહ ક્યારે લેવી',
    },
    childPsychiatry: {
      title: 'બાળ અને કિશોર માનસિક સ્વાસ્થ્ય',
      subtitle: 'માતા-પિતા, વાલીઓ, શિક્ષકો અને સ્કૂલ કાઉન્સેલર્સ માટે પુરાવા-આધારિત વિકાસલક્ષી અને મનોચિકિત્સા માર્ગદર્શન.',
      audienceNoticeTitle: 'માતા-પિતા, શિક્ષકો અને વાલીઓ માટે ખાસ સૂચના',
      audienceNoticeText: 'આ વિભાગ ખાસ કરીને માતા-પિતા, શિક્ષકો અને પરિવારજનો માટે તૈયાર કરાયો છે જેથી તેઓ બાળકના વર્તનમાં ફેરફારોને સમજી શકે, સામાન્ય વિકાસ અને તબીબી મુશ્કેલી વચ્ચેનો ભેદ પારખી શકે, અને ક્યારે બાળ મનોચિકિત્સક પાસે જવું તે જાણી શકે. આ બાળકો પર લેબલ લગાવવા કે જાતે નિદાન કરવા માટે નથી.',
      typicalVsRedFlagsTitle: 'સામાન્ય વિકાસ વિરુદ્ધ ક્યારે તપાસ કરાવવી',
      commonSignsTitle: 'ધ્યાનમાં આવતા મુખ્ય સંકેતો',
      assessmentTitle: 'સર્વગ્રાહી તબીબી અને વિકાસલક્ષી તપાસ',
      treatmentTitle: 'બહુ-શાખાકીય સારવાર અને સહાય',
      schoolHomeImpactTitle: 'શાળા અને ઘરના જીવન પર અસર',
      parentGuidanceTitle: 'માતા-પિતા અને શિક્ષકો માટે વ્યવહારુ માર્ગદર્શન',
      vignettesTitle: 'અવલોકન આધારિત કેસ ઉદાહરણો',
      mythsTitle: 'માન્યતાઓ સામે તબીબી સત્ય',
      faqsTitle: 'વારંવાર પૂછાતા પ્રશ્નો',
      referencesTitle: 'વૈજ્ઞાનિક સંદર્ભો અને માર્ગદર્શિકા',
      whenToSeekHelpTitle: 'ડૉક્ટરની સલાહ ક્યારે લેવી',
    },
    addiction: {
      title: 'વ્યસન મુક્તિ માર્ગદર્શન',
      overdose: 'ઓવરડોઝ ચેતવણી અને તાત્કાલિક સારવાર',
      withdrawal: 'વિડ્રોઅલ લક્ષણો અને જોખમો',
      treatment: 'વૈજ્ઞાનિક વ્યસન મુક્તિ',
    },
    medications: {
      title: 'મનોરોગની દવાઓ',
      indications: 'ઉપયોગ',
      mechanism: 'દવા કેવી રીતે કામ કરે છે',
      sideEffects: 'શક્ય આડઅસરો',
      precautions: 'સાવચેતી અને નિયમિત તપાસ',
      warning: medicationMandatoryWarning.gu,
    },
    search: {
      title: 'શોધો (Search)',
      placeholder: 'વિષયો, દવાઓ, લક્ષણો, હેલ્પલાઇન શોધો...',
      noResults: 'કોઈ પરિણામ મળ્યા નથી.',
    },
  },
};


