import { LocalizedString } from '../types';

export interface FAQCategoryItem {
  id: string;
  category: 'general' | 'addiction' | 'therapy' | 'legal';
  question: LocalizedString;
  answer: LocalizedString;
  keyPoints?: {
    en: string[];
    hi: string[];
    gu: string[];
  };
}

export const faqsData: FAQCategoryItem[] = [
  // 1. General Psychiatry
  {
    id: 'psychiatrist-vs-psychologist',
    category: 'general',
    question: {
      en: 'What is the difference between a Psychiatrist and a Clinical Psychologist in India?',
      hi: 'भारत में एक मनोचिकित्सक (Psychiatrist) और क्लीनिकल साइकोलॉजिस्ट में क्या अंतर है?',
      gu: 'ભારતમાં મનોચિકિત્સક (Psychiatrist) અને ક્લિનિકલ સાયકોલોજિસ્ટ વચ્ચે શું તફાવત છે?',
    },
    answer: {
      en: 'A Psychiatrist is a medical doctor who completed an MBBS followed by post-graduate specialization (MD or DNB in Psychiatry). As medical doctors registered with the National Medical Commission (NMC), they can order laboratory tests, diagnose medical and psychiatric conditions, and prescribe medications. A Clinical Psychologist holds specialized postgraduate degrees in psychology (M.Phil or Psy.D recognized by the Rehabilitation Council of India - RCI) and provides structured psychotherapy, psychological counseling, and formal psychometric evaluations without prescribing medications.',
      hi: 'मनोचिकित्सक (Psychiatrist) एक मेडिकल डॉक्टर (MBBS और MD/DNB मनोरोग) होते हैं जो NMC में पंजीकृत होते हैं। वे शारीरिक जांच कर सकते हैं, बीमारियां डायग्नोस करते हैं और दवाएं लिख सकते हैं। क्लीनिकल साइकोलॉजिस्ट (RCI पंजीकृत) मनोवैज्ञानिक काउंसलिंग और थेरेपी (जैसे CBT) प्रदान करते हैं, पर दवाएं नहीं लिखते। सर्वोत्तम परिणामों के लिए दोनों मिलकर कार्य करते हैं।',
      gu: 'મનોચિકિત્સક (Psychiatrist) એક મેડિકલ ડૉક્ટર (MBBS અને MD સાયકિયાટ્રી) હોય છે જે તબીબી તપાસ કરી શકે છે અને દવાઓ લખી શકે છે. જ્યારે ક્લિનિકલ સાયકોલોજિસ્ટ કાઉન્સિલિંગ અને સાયકોથેરાપી આપે છે પરંતુ દવાઓ લખતા નથી. બંને એકબીજાના પૂરક બનીને દર્દીની સારવાર કરે છે.',
    },
  },
  {
    id: 'first-visit-expectations',
    category: 'general',
    question: {
      en: 'What actually happens during a first psychiatric consultation?',
      hi: 'पहली बार मनोचिकित्सक के पास जाने पर क्या होता है?',
      gu: 'પ્રથમ વખત મનોચિકિત્સકની મુલાકાત વખતે શું થાય છે?',
    },
    answer: {
      en: 'A standard first consultation is a confidential, empathetic medical interview lasting 30 to 60 minutes. The psychiatrist will listen to your symptoms, review sleep and appetite, explore personal history and stressful life events, check for underlying medical conditions (such as thyroid or vitamin deficiencies), and discuss treatment goals collaboratively. No physical restraints, injections, or invasive procedures are performed during a routine clinic consultation.',
      hi: 'पहली मुलाकात में डॉक्टर शांति से 30-45 मिनट आपकी पूरी बात सुनते हैं। वे आपकी नींद, खान-पान, तनाव और पारिवारिक इतिहास को समझते हैं। कोई दर्दनाक जांच या जबरन भर्ती नहीं की जाती। यह पूरी तरह गोपनीय बातचीत होती है जिसमें आपके साथ मिलकर इलाज की योजना बनाई जाती है।',
      gu: 'પહેલી મુલાકાતમાં ડૉક્ટર ૩૦ થી ૪૫ મિનિટ સુધી તમારી સમસ્યાઓ, ઊંઘ, ખોરાક અને તણાવ વિશે વિગતવાર અને સહાનુભૂતિપૂર્વક સાંભળે છે. આ સંપૂર્ણ ગોપનીય હોય છે અને તમારી સંમતિથી સારવારનું આયોજન થાય છે.',
    },
  },

  // 2. Addiction & Recovery
  {
    id: 'addiction-disease-model',
    category: 'addiction',
    question: {
      en: 'Is substance addiction a moral weakness, lack of willpower, or a medical disease?',
      hi: 'क्या नशे की लत कोई चारित्रिक कमजोरी है या यह एक मेडिकल बीमारी है?',
      gu: 'શું વ્યસન એ ચારિત્ર્યની કમજોરી છે કે એક તબીબી બીમારી?',
    },
    answer: {
      en: 'The World Health Organization (WHO) and American Society of Addiction Medicine classify substance use disorder as a chronic, relapsing neurobiological medical disease. Repeated substance exposure physically alters the brain dopamine reward circuitry, prefrontal decision-making cortex, and stress response systems. Willpower alone cannot instantly overcome neurochemical dysregulation; medical detoxification, evidence-based medication-assisted treatment (MAT), and psychological therapy are essential.',
      hi: 'विश्व स्वास्थ्य संगठन (WHO) के अनुसार नशा कोई पाप या चरित्र की कमजोरी नहीं, बल्कि मस्तिष्क की एक क्रॉनिक न्यूरोबायोलॉजिकल बीमारी है। बार-बार नशा करने से दिमाग के डोपामिन सर्किट और निर्णय लेने वाले हिस्से में जैविक बदलाव आ जाते हैं। इसके लिए केवल डांटने के बजाय मेडिकल डिटॉक्स और उचित मनोचिकित्सीय इलाज की आवश्यकता होती है।',
      gu: 'વિશ્વ આરોગ્ય સંસ્થા (WHO) મુજબ વ્યસન એ કોઈ પાપ કે નબળા મનની નિશાની નથી, પરંતુ મગજના રસાયણો અને ન્યુરોબાયોલોજીની એક ગંભીર બીમારી છે. તેને ઠપકો આપવાના બદલે યોગ્ય મેડિકલ સારવાર અને માનસિક સમર્થનની જરૂર હોય છે.',
    },
  },
  {
    id: 'quitting-cold-turkey-danger',
    category: 'addiction',
    question: {
      en: 'Can someone safely quit heavy alcohol or sedative use at home "cold turkey"?',
      hi: 'क्या अत्यधिक शराब या नींद की गोलियां अचानक घर पर ही बिना डॉक्टर के बंद की जा सकती हैं?',
      gu: 'શું ભારે દારૂ કે ઊંઘની દવાઓ અચાનક જાતે જ ઘરમાં બંધ કરી શકાય?',
    },
    answer: {
      en: 'NO. Abrupt cessation of heavy alcohol, benzodiazepines, or barbiturates without medical supervision is life-threatening. Severe withdrawal can trigger grand mal seizures, extreme hypertension, and Delirium Tremens (hallucinations, acute disorientation, cardiac arrest risk) with a mortality rate up to 5-15% without medical intervention. Inpatient or outpatient medical detoxification with cross-tolerant tapering agents is mandatory.',
      hi: 'बिल्कुल नहीं! नियमित रूप से भारी मात्रा में शराब पीने वाले यदि अचानक शराब बंद कर दें, तो उन्हें गंभीर मिर्गी के दौरे (seizures) और डेलीरियम ट्रेमेंस (Delirium Tremens - भयानक भ्रम, अत्यधिक बीपी, और मौत का खतरा) हो सकता है। सुरक्षित नशा मुक्ति के लिए अस्पताल में डॉक्टर की देखरेख में डिटॉक्सिफिकेशन आवश्यक है।',
      gu: 'બિલકુલ નહીં! નિયમિત દારૂ પીતી વ્યક્તિ જો અચાનક દારૂ બંધ કરે તો ખેંચ (આંચકી) આવવી, ભયાનક વહેમ થવા અને જીવનું જોખમ થઈ શકે છે. તેથી હંમેશા હોસ્પિટલમાં ડૉક્ટરની સલાહ મુજબ સલામત રીતે દવાઓ દ્વારા ડિટોક્સ કરાવવું જોઈએ.',
    },
  },

  // 4. Therapy & Confidentiality
  {
    id: 'confidentiality-rules-india',
    category: 'therapy',
    question: {
      en: 'Is everything I tell my psychiatrist or psychologist kept completely confidential?',
      hi: 'क्या मनोचिकित्सक से कही गई हर बात पूरी तरह गुप्त और गोपनीय रखी जाती है?',
      gu: 'શું મનોચિકિત્સક સાથે કરેલી તમામ વાતો સંપૂર્ણપણે ગોપનીય રાખવામાં આવે છે?',
    },
    answer: {
      en: 'Yes. Under the Mental Healthcare Act 2017 and NMC Code of Medical Ethics, all communications between a patient and psychiatrist are strictly confidential legal medical records. Information cannot be disclosed to employers, relatives, or third parties without the patient\'s explicit written informed consent. The only narrow legal exceptions are situations involving imminent threat of severe physical harm to oneself (active suicide attempt) or others, or under a direct formal court order.',
      hi: 'हाँ, पूरी तरह से। भारतीय कानून (मेंटल हेल्थकेयर एक्ट 2017) और मेडिकल एथिक्स के तहत डॉक्टर आपकी कोई भी बात आपके परिवार, कंपनी या किसी तीसरे व्यक्ति को आपकी अनुमति के बिना नहीं बता सकते। केवल एक ही स्थिति में परिवार को सूचित किया जाता है जब मरीज की जान को खुद से (आत्महत्या) या किसी अन्य को गंभीर शारीरिक खतरे की तत्काल आशंका हो।',
      gu: 'હા, ૧૦૦% ગોપનીય હોય છે. ભારતીય કાયદા (મેન્ટલ હેલ્થકેર એક્ટ ૨૦૧૭) મુજબ તમારી કોઈપણ માહિતી તમારી મંજૂરી વિના કોઈને આપવામાં આવતી નથી. માત્ર જ્યારે દર્દીના જીવનું તાત્કાલિક જોખમ હોય ત્યારે જ પરિવારને જાણ કરવામાં આવે છે.',
    },
  },
  {
    id: 'cbt-vs-talking-to-friend',
    category: 'therapy',
    question: {
      en: 'How is Cognitive Behavioral Therapy (CBT) different from just venting or talking to a good friend?',
      hi: 'मनोवैज्ञानिक थेरेपी (जैसे CBT) किसी अच्छे दोस्त से दिल की बात कहने से कैसे अलग है?',
      gu: 'સાયકોથેરાપી (જેમ કે CBT) કોઈ અંગત મિત્ર સાથે વાત કરવા કરતાં કેવી રીતે અલગ છે?',
    },
    answer: {
      en: 'While talking to a trusted friend provides warm emotional comfort, structured psychotherapy like CBT is a clinically validated, skill-building protocol. A trained therapist objectively identifies subconscious cognitive distortions (like catastrophizing, black-and-white thinking, and emotional reasoning), teaches physiological autonomic regulation, exposes habitual avoidance traps, and equips you with lifelong cognitive tools to reshape how the brain processes distress.',
      hi: 'दोस्त से बात करने से मन हल्का जरूर होता है, लेकिन थेरेपी (CBT) एक वैज्ञानिक तकनीक है। इसमें ट्रेंड थेरेपिस्ट आपके सोचने के नकारात्मक पैटर्न (जैसे हमेशा बुरा सोचना, खुद को दोष देना) को पहचानते हैं और दिमाग को स्वस्थ तरीके से सोचने व घबराहट को नियंत्रित करने का व्यावहारिक प्रशिक्षण देते हैं।',
      gu: 'મિત્ર સાથે વાત કરવાથી હળવાશ અનુભવાય છે, પરંતુ CBT એ વૈજ્ઞાનિક સારવાર પદ્ધતિ છે. જેમાં મનમાં ચાલતા નકારાત્મક વિચારોને ઓળખીને મગજને તણાવ સામે લડવા માટે વ્યવસ્થિત તાલીમ આપવામાં આવે છે.',
    },
  },

  // 5. Legal & Patient Rights in India
  {
    id: 'mental-healthcare-act-2017',
    category: 'legal',
    question: {
      en: 'What rights do patients have under India’s Mental Healthcare Act 2017?',
      hi: 'भारत के मानसिक स्वास्थ्य देखभाल अधिनियम 2017 (Mental Healthcare Act) के तहत मरीजों के क्या अधिकार हैं?',
      gu: 'ભારતના માનસિક સ્વાસ્થ્ય સંભાળ કાયદા ૨૦૧૭ હેઠળ દર્દીઓને કયા કાનૂની અધિકારો મળેલા છે?',
    },
    answer: {
      en: 'The landmark Mental Healthcare Act (MHCA) 2017 guarantees every person the legal right to access government-funded mental healthcare, protects against cruel, inhuman, or degrading treatment (such as tying, chaining, or unanesthetized electroconvulsive therapy, which are strictly illegal), establishes the right to confidentiality, decriminated suicide attempts under Section 115, and legally empowers patients to appoint a Nominated Representative and write Advance Directives regarding their future care.',
      hi: 'मेंटल हेल्थकेयर एक्ट 2017 भारत में मरीजों को कई ऐतिहासिक अधिकार देता है: (1) किसी भी मरीज को जंजीरों से बांधना, पीटना या बिना एनेस्थीसिया के ईसीटी देना गैरकानूनी और दंडनीय अपराध है; (2) आत्महत्या के प्रयास को अपराध की श्रेणी से बाहर कर दिया गया है; (3) मरीज को गरिमा, गोपनीयता और सरकारी मानसिक इलाज का कानूनी अधिकार है; (4) मरीज अपना कानूनी प्रतिनिधि (Nominated Representative) चुन सकता है।',
      gu: 'મેન્ટલ હેલ્થકેર એક્ટ ૨૦૧૭ હેઠળ દરેક નાગરિકને માનસિક સારવારનો કાનૂની અધિકાર છે. દર્દીને બાંધવો, સાંકળે બાંધવો કે ક્રૂર વર્તન કરવું સજાપાત્ર ગુનો છે. આત્મહત્યાના પ્રયાસને ગુનાની શ્રેણીમાંથી મુક્ત કરાયો છે અને દર્દીની ગોપનીયતા તથા માન-સન્માનનું રક્ષણ કરાયું છે.',
    },
  },
  {
    id: 'insurance-coverage-mental-health',
    category: 'legal',
    question: {
      en: 'Does health insurance in India cover hospitalization and treatment for psychiatric disorders?',
      hi: 'क्या भारत में स्वास्थ्य बीमा (Health Insurance) मनोरोगों के अस्पताल में भर्ती और इलाज को कवर करता है?',
      gu: 'શું ભારતમાં હેલ્થ ઈન્સ્યોરન્સ માનસિક બીમારીઓની સારવાર અને હોસ્પિટલના ખર્ચને કવર કરે છે?',
    },
    answer: {
      en: 'YES. In accordance with Section 21(4) of the Mental Healthcare Act 2017 and mandatory directives issued by the Insurance Regulatory and Development Authority of India (IRDAI), every insurer must provide health insurance coverage for the treatment of mental illness on the same basis as is available for the treatment of physical illness. Insurers are legally prohibited from discriminating against psychiatric hospitalizations.',
      hi: 'हाँ, बिल्कुल! भारतीय बीमा विनियामक (IRDAI) और मेंटल हेल्थकेयर एक्ट 2017 की धारा 21(4) के अनुसार, सभी बीमा कंपनियों के लिए मानसिक बीमारियों के अस्पताल भर्ती और इलाज को ठीक उसी तरह कवर करना अनिवार्य है जैसे शारीरिक बीमारियों (जैसे हृदय रोग या हड्डी टूटना) को कवर किया जाता है।',
      gu: 'હા, ચોક્કસ! IRDAI અને કાયદા મુજબ દરેક વીમા કંપની માટે માનસિક બીમારીઓના હોસ્પિટલ દાખલ થવાના ખર્ચને શારીરિક બીમારીઓની જેમ જ ક્લેઈમ આપવો કાયદેસર રીતે ફરજિયાત છે.',
    },
  },
];
