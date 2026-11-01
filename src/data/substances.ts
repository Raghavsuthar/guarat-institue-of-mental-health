import { SubstanceInfo } from '../types';
import { newSubstancesData } from './newSubstances';
import { newSubstancesBatch2 } from './newSubstancesBatch2';

const baseSubstancesData: SubstanceInfo[] = [
  {
    id: 'alcohol',
    slug: 'alcohol-use-disorder',
    name: {
      en: 'Alcohol Use Disorder (Alcohol Addiction)',
      hi: 'अल्कोहल यूज़ डिसऑर्डर (शराब की लत / निर्भरता)',
      gu: 'દારૂનું વ્યસન (આલ્કોહોલ યુઝ ડિસઓર્ડર)',
    },
    medicalTerms: {
      en: 'Alcohol Use Disorder (AUD), Alcohol Dependence',
      hi: 'अल्कोहल डिपेंडेंस सिंड्रोम (Alcohol Dependence Syndrome)',
      gu: 'આલ્કોહોલ ડિપેન્ડન્સ (દારૂ પર નિર્ભરતા)',
    },
    whatIsIt: {
      en: 'Alcohol Use Disorder is a chronic medical condition characterized by an impaired ability to stop or control alcohol use despite adverse social, occupational, or health consequences.',
      hi: 'शराब की लत एक क्रोनिक चिकित्सीय बीमारी है जिसमें व्यक्ति स्वास्थ्य, परिवार या नौकरी पर बुरा असर पड़ने के बावजूद शराब का सेवन रोकने या नियंत्रित करने में असमर्थ हो जाता है।',
      gu: 'દારૂનું વ્યસન એક ગંભીર તબીબી બીમારી છે જેમાં સ્વાસ્થ્ય, પરિવાર કે નોકરીને નુકસાન થવા છતાં વ્યક્તિ દારૂ પીવાનું નિયંત્રિત કે બંધ કરી શકતી નથી.',
    },
    whyAddictive: {
      en: 'Alcohol enhances GABA (inhibitory neurotransmitter) and inhibits glutamate, causing initial sedation and anxiety reduction, while triggering powerful dopamine surges in the brain\'s reward pathway. Over time, neuroadaptation leads to tolerance and physical dependence.',
      hi: 'शराब मस्तिष्क के रिवॉर्ड पाथवे में डोपामाइन बढ़ाती है। समय के साथ मस्तिष्क इसका आदी हो जाता है, जिससे उसी असर के लिए अधिक मात्रा की जरूरत पड़ती है और न पीने पर बेचैनी होती है।',
      gu: 'દારૂ મગજના કેન્દ્રોમાં ડોપામાઇન વધારીને ક્ષણિક શાંતિ આપે છે. ધીમે ધીમે મગજ તેનો બંધાણી બની જાય છે અને ન પીવાથી તીવ્ર બેચેની થાય છે.',
    },
    brainBodyEffects: {
      en: 'Impairs coordination, slows reaction times, blunts judgment, causes cognitive fog, impairs liver metabolism, elevates blood pressure, and disrupts sleep architecture.',
      hi: 'मस्तिष्क की निर्णय क्षमता को कमजोर करती है, लिवर और पेट को नुकसान पहुंचाती है, ब्लड प्रेशर बढ़ाती है और नींद की गुणवत्ता खत्म कर देती है।',
      gu: 'મગજની નિર્ણયશક્તિ નબળી પાડે છે, લિવર અને પેટને નુકસાન કરે છે, બ્લડ પ્રેશર વધારે છે અને ઊંઘ ખરાબ કરે છે.',
    },
    problematicUseSigns: {
      en: [
        'Drinking more or for longer than originally intended',
        'Persistent desire or unsuccessful efforts to cut down or control drinking',
        'Spending a great deal of time obtaining, using, or recovering from alcohol',
        'Craving, or a strong urge or desire to drink',
        'Recurrent drinking resulting in a failure to fulfill work, school, or home obligations',
      ],
      hi: [
        'सोचे हुए समय या मात्रा से अधिक शराब पीना',
        'शराब कम करने या छोड़ने की बार-बार नाकाम कोशिशें',
        'दिन का अधिकांश समय शराब का प्रबंध करने या उसके असर में बिताना',
        'शराब पीने की तीव्र और असहनीय तलब (Craving) होना',
        'काम, परिवार या जिम्मेदारियों की लगातार अनदेखी करना',
      ],
      gu: [
        'નક્કી કરેલા પ્રમાણ કે સમય કરતાં વધુ પીવું',
        'દારૂ ઓછો કરવાના કે છોડવાના નિષ્ફળ પ્રયાસો',
        'દિવસનો મોટો ભાગ દારૂની વ્યવસ્થામાં કે તેના નશામાં ગાળવો',
        'દારૂ પીવાની અતિશય તીવ્ર તલપ લાગવી',
        'કામ, પરિવાર કે જવાબદારીઓની સતત અવગણના કરવી',
      ],
    },
    dependenceSigns: {
      en: [
        'Tolerance: Needing markedly increased amounts of alcohol to achieve intoxication or desired effect',
        'Withdrawal: Developing characteristic physical symptoms when alcohol levels decline in the body',
        'Drinking in the morning to relieve shaking or anxiety ("eye-opener")',
      ],
      hi: [
        'टॉलरेंस: पहले जितना नशा पाने के लिए शराब की मात्रा लगातार बढ़ानी पड़ना',
        'विथड्रॉल: शराब न मिलने पर हाथ कांपना, घबराहट, पसीना आना और बेचैनी होना',
        'सुबह उठते ही हाथ की कंपकंपी शांत करने के लिए पहली ड्रिंक की जरूरत पड़ना',
      ],
      gu: [
        'ટોલરન્સ: પહેલા જેવી અસર મેળવવા દારૂનો જથ્થો વધારવો પડવો',
        'વિથડ્રોઅલ: દારૂ ન મળે ત્યારે હાથ ધ્રૂજવા, પરસેવો અને ગભરામણ થવી',
        'સવારે ઉઠતાવેંત ધ્રૂજારી રોકવા માટે દારૂ પીવાની ફરજ પડવી',
      ],
    },
    withdrawalSymptoms: {
      en: 'Symptoms begin 6-24 hours after last drink: tremors (shaky hands), sweating, rapid pulse, insomnia, nausea, anxiety. CRITICAL SAFETY NOTE: Severe alcohol withdrawal can progress to Delirium Tremens (DTs) and seizures, which are potentially life-threatening medical emergencies that require hospital-based medical management, NOT home detox.',
      hi: 'अंतिम सेवन के 6-24 घंटे बाद लक्षण: हाथ कांपना, पसीना, दिल की तेज धड़कन, उल्टी, घबराहट। अति-महत्वपूर्ण सुरक्षा चेतावनी: गंभीर विथड्रॉल से दौरे (Seizures) या डेलीरियम ट्रेमेंस (DTs - भयानक वहम और प्रलाप) हो सकता है जो जानलेवा हो सकता है। इसे कभी भी घर पर न संभालें, तुरंत अस्पताल में भर्ती कराएं।',
      gu: 'છેલ્લી વાર પીધાના 6-24 કલાકમાં: હાથ ધ્રૂજવા, પરસેવો, ઝડપી ધબકારા, ઉલટી, બેચેની. અત્યંત મહત્વપૂર્ણ ચેતવણી: ગંભીર વિથડ્રોઅલથી ખેંચ (આંચકી) આવી શકે છે કે ડેલીરિયમ ટ્રેમેન્સ થઈ શકે છે જે જીવલેણ બની શકે છે. ક્યારેય ઘરમાં જાતે બંધ ન કરવું, તાત્કાલિક હોસ્પિટલમાં દાખલ કરવું.',
    },
    medicalComplications: {
      en: 'Alcoholic liver disease (fatty liver, hepatitis, cirrhosis), pancreatitis, cardiomyopathy, hypertension, peripheral neuropathy, Wernicke-Korsakoff syndrome, and increased risk of gastrointestinal cancers.',
      hi: 'लिवर सिरोसिस (Cirrhosis), पैंक्रियाटाइटिस, हाई ब्लड प्रेशर, नसों की कमजोरी (Neuropathy), विटामिन B1 की कमी से मस्तिष्क को भारी क्षति, और कैंसर का खतरा।',
      gu: 'લિવર સિરોસિસ, પેન્ક્રિયાસનો સોજો, બ્લડ પ્રેશર, જ્ઞાનતંતુઓની નબળાઈ, વિટામિન B1 ની ખામીથી મગજને નુકસાન અને કેન્સર.',
    },
    psychiatricComplications: {
      en: 'Alcohol-induced depressive disorder, alcohol-induced anxiety disorder, alcohol-induced psychotic disorder (hallucinosis, morbid jealousy/Othello syndrome), and severely increased suicide risk.',
      hi: 'गंभीर अवसाद (डिप्रेशन), अत्यधिक घबराहट, वहम (जैसे जीवनसाथी के चरित्र पर अकारण गहरा शक), मतिभ्रम और आत्महत्या का अत्यधिक बढ़ा हुआ खतरा।',
      gu: 'ગંભીર ડિપ્રેશન, વહેમ (ખાસ કરીને પત્ની કે પતિના ચરિત્ર પર ખોટી શંકા), કાલ્પનિક અવાજો સંભળાવવા અને આત્મહત્યાનું ઊંચું જોખમ.',
    },
    familyImpact: {
      en: 'Domestic discord, financial crisis, emotional trauma to children, domestic violence risk, and severe caregiver burden.',
      hi: 'पारिवारिक कलह, आर्थिक तंगी, बच्चों के मानसिक विकास पर गंभीर आघात और घरेलू तनाव।',
      gu: 'પારિવારિક ઝઘડા, આર્થિક તબાહી, બાળકોના મગજ પર ખરાબ અસર અને ભારે અશાંતિ.',
    },
    assessmentOverview: {
      en: 'Comprehensive psychiatric and physical assessment, including AUDIT questionnaire, liver function tests, complete blood counts, and evaluation for co-occurring depression or anxiety.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत शारीरिक और मानसिक मूल्यांकन, लिवर व खून की जांच, और डिप्रेशन या एंग्जायटी की जांच।',
      gu: 'મનોચિકિત્સક દ્વારા સંપૂર્ણ તપાસ, લિવર અને બ્લડ રિપોર્ટ્સ તથા સાથે રહેલા ડિપ્રેશન કે ચિંતાનું મૂલ્યાંકન.',
    },
    treatmentApproach: {
      en: 'Multi-phase approach: safe medical detoxification under hospital supervision, followed by long-term relapse prevention through medications, psychotherapy, and family support.',
      hi: 'चरणबद्ध उपचार: पहले अस्पताल में सुरक्षित मेडिकल डिटॉक्सिफिकेशन (दवाइयों से विथड्रॉल को सुरक्षित रूप से निकालना), फिर लंबे समय तक नशा-मुक्ति दवाएं और काउंसलिंग।',
      gu: 'તબક્કાવાર સારવાર: પ્રથમ હોસ્પિટલમાં સલામત મેડિકલ ડિટોક્સિફિકેશન (દવાઓ દ્વારા તકલીફ વિના દારૂ છોડાવવો), ત્યારબાદ લાંબા ગાળાની સારવાર.',
    },
    psychotherapyModalities: {
      en: 'Motivational Interviewing (MI), Cognitive Behavioural Therapy (CBT) for relapse prevention, and support groups (such as Alcoholics Anonymous / 12-step programs).',
      hi: 'मोटिवेशनल इंटरव्यूइंग (नशा छोड़ने की आंतरिक इच्छा जगाना), सीबीटी (तलब को नियंत्रित करना) और सपोर्ट ग्रुप्स।',
      gu: 'મોટિવેશનલ કાઉન્સેલિંગ, કોગ્નિટિવ થેરાપી (તલપ નિયંત્રિત કરવાની કળા) અને સપોર્ટ ગ્રુપ્સ.',
    },
    medicationAssistedTreatment: {
      en: 'Evidence-based anti-craving medications (such as acamprosate, naltrexone) or deterrent agents (disulfiram, strictly under medical supervision after informed consent) may be prescribed by a psychiatrist.',
      hi: 'मनोचिकित्सक द्वारा निर्धारित एंटी-क्रेविंग दवाएं (जैसे Acamprosate, Naltrexone) जो शराब की तलब को शांत करती हैं। ये दवाएं हमेशा डॉक्टर की सलाह से ही लेनी चाहिए।',
      gu: 'મનોચિકિત્સક દ્વારા અપાતી તલપ ઘટાડવાની આધુનિક દવાઓ (Acamprosate, Naltrexone) જે દારૂ પીવાની ઈચ્છા ધીમે ધીમે ઓછી કરે છે.',
    },
    detoxificationConcepts: {
      en: 'Medical detoxification uses safe, tapering doses of cross-tolerant medications (e.g., long-acting benzodiazepines under clinical supervision) along with high-dose thiamine (vitamin B1) to prevent brain damage (Wernicke\'s encephalopathy). It must be conducted by qualified medical professionals.',
      hi: 'डिटॉक्सिफिकेशन में डॉक्टर मरीज को सुरक्षित दवाएं और हाई-डोज़ विटामिन B1 (Thiamine) देते हैं ताकि मस्तिष्क सुरक्षित रहे और बिना किसी दौरे या खतरे के शराब का असर शरीर से निकल जाए।',
      gu: 'ડિટોક્સિફિકેશનમાં ડૉક્ટરો દ્વારા સુરક્ષિત દવાઓ અને વિટામિન B1 આપવામાં આવે છે જેથી મગજને નુકસાન થયા વિના કે ખેંચ આવ્યા વિના શરીર શુદ્ધ થઈ શકે.',
    },
    relapsePrevention: {
      en: 'Identifying high-risk situations (people, places, emotions), developing refusal skills, managing cravings, engaging in healthy stress relief, and maintaining regular psychiatric visits.',
      hi: 'पुरानी संगत और उन जगहों से बचना जहां शराब मिलती है, तलब आने पर ध्यान भटकाना, और नियमित रूप से डॉक्टर के संपर्क में रहना।',
      gu: 'જૂના નશેડી મિત્રોથી દૂર રહેવું, તલપ લાગે ત્યારે તરત જ ધ્યાન બીજી સારી પ્રવૃત્તિમાં વાળવું અને નિયમિત ચેકઅપ કરાવવું.',
    },
    harmReduction: {
      en: 'Never drink and drive; ensure adequate nutritional intake and hydration; seek medical help early rather than waiting for liver failure; never mix alcohol with prescription sedatives or opioids.',
      hi: 'शराब पीकर कभी गाड़ी न चलाएं; शराब के साथ नींद की गोलियां कभी न मिलाएं (यह जानलेवा है); और लिवर खराब होने से पहले ही डॉक्टर से मिलें।',
      gu: 'દારૂ પીને ક્યારેય વાહન ન ચલાવવું; દારૂ સાથે ક્યારેય ઊંઘની ગોળીઓ ન લેવી (જીવલેણ સાબિત થઈ શકે); અને સમયસર સારવાર લેવી.',
    },
    overdoseWarningSigns: {
      en: 'Severe stupor, inability to be awakened, slow or irregular breathing (less than 8 breaths per minute), pale or bluish skin, hypothermia, vomiting while unconscious. Requires immediate 112 emergency call.',
      hi: 'अत्यधिक बेहोशी, जगाने पर भी न जागना, सांस बहुत धीमी या रुक-रुक कर चलना, शरीर नीला या ठंडा पड़ना, बेहोशी में उल्टी होना। यह जानलेवा है, तुरंत 112 या एम्बुलेंस बुलाएं।',
      gu: 'ગાઢ બેભાન અવસ્થા, જગાડવા છતાં ભાનમાં ન આવવું, શ્વાસ ખૂબ ધીમો ચાલવો, શરીર ઠંડુ પડી જવું. આ જીવલેણ છે, તરત જ ૧૧૨ કે એમ્બ્યુલન્સ બોલાવો.',
    },
    emergencyAdvice: {
      en: 'Turn an unconscious person onto their side (recovery position) to prevent choking on vomit. Never leave them alone to "sleep it off." Call emergency services immediately.',
      hi: 'बेहोश व्यक्ति को एक करवट पर लिटाएं (Recovery position) ताकि उल्टी से सांस की नली बंद न हो। कभी उन्हें अकेला न छोड़ें, तुरंत अस्पताल ले जाएं।',
      gu: 'બેભાન વ્યક્તિને એક પડખે સુવડાવો જેથી ઉલટી શ્વાસનળીમાં ન જાય. તેને એકલા ન છોડો અને તત્કાલ હોસ્પિટલ પહોંચાડો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Addiction to alcohol is simply a moral failing or lack of willpower; if they truly loved their family, they would stop.',
          hi: 'शराब की लत सिर्फ चरित्र की कमजोरी या इच्छाशक्ति की कमी है; अगर वे परिवार से प्यार करते तो छोड़ देते।',
          gu: 'દારૂનું વ્યસન એ માત્ર ચારિત્ર્યની નબળાઈ છે; જો તેઓ પરિવારને પ્રેમ કરતા હોત તો તરત જ છોડી દેત.',
        },
        fact: {
          en: 'Alcohol dependence alters brain circuitry related to reward, impulse control, and stress. It is a recognized medical disorder requiring evidence-based medical and psychological treatment, not judgment.',
          hi: 'शराब की निर्भरता मस्तिष्क के तंत्रिका तंत्र में गहरा रासायनिक बदलाव कर देती है। यह एक वास्तविक बीमारी है जिसका इलाज केवल इच्छाशक्ति से नहीं, बल्कि दवाइयों और डॉक्टरों की मदद से होता है।',
          gu: 'દારૂની આદત મગજના ન્યુરોન્સમાં ફેરફાર કરી દે છે. તે એક સાચી તબીબી બીમારી છે જેનો ઉપચાર માત્ર ઉપદેશ કે શિસ્તથી નહીં પણ દવાઓ અને સારવારથી થાય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can someone with heavy alcohol dependence just quit cold turkey at home by locking themselves in a room?',
          hi: 'क्या बहुत ज्यादा शराब पीने वाला व्यक्ति घर के कमरे में खुद को बंद करके अचानक शराब छोड़ सकता है?',
          gu: 'શું વધુ દારૂ પીતી વ્યક્તિ ઘરમાં રૂમ બંધ કરીને અચાનક દારૂ પીવાનું બંધ કરી શકે?',
        },
        answer: {
          en: 'No, this can be extremely dangerous. Severe alcohol withdrawal can trigger grand mal seizures, severe cardiac arrhythmias, and life-threatening Delirium Tremens within 48 to 72 hours. Medical detoxification in a healthcare setting is essential for safety.',
          hi: 'बिल्कुल नहीं! यह अत्यंत खतरनाक और जानलेवा हो सकता है। अचानक शराब बंद करने से मिर्गी के दौरे (Seizures) या डेलीरियम हो सकता है। सुरक्षित छोड़ने के लिए हमेशा डॉक्टर की देखरेख में डिटॉक्सिफिकेशन जरूरी है।',
          gu: 'ના, આ બિલકુલ ન કરવું જોઈએ! તે અત્યંત જોખમી અને જીવલેણ બની શકે છે. અચાનક દારૂ બંધ કરવાથી આંચકી (ખેંચ) આવી શકે છે કે ડેલીરિયમ થઈ શકે છે. દવાઓ સાથે સલામત ડિટોક્સિફિકેશન અનિવાર્ય છે.',
        },
      },
    ],
    references: [
      {
        citation: 'National Institute on Alcohol Abuse and Alcoholism (NIAAA). Alcohol Use Disorder: A Comparison Between DSM-IV and DSM-5.',
        source: 'NIAAA / NIH',
      },
      {
        citation: 'NIMHANS Clinical Practice Guidelines for Substance Use Disorders. National Institute of Mental Health and Neuro Sciences, Bengaluru.',
        source: 'NIMHANS Guidelines',
      },
    ],
    youtubeVideoId: 'SZhXdVs1Mmo',
    educationalVideoTitle: { en: "Short Takes With NIAAA: Treatment Options for Alcohol Use Disorder", hi: "Short Takes With NIAAA: Treatment Options for Alcohol Use Disorder", gu: "Short Takes With NIAAA: Treatment Options for Alcohol Use Disorder" },
    educationalVideoSource: 'National Institute on Alcohol Abuse and Alcoholism (NIAAA)',
    lastReviewed: '2026-08',
  },
  {
    id: 'tobacco',
    slug: 'tobacco-nicotine-dependence',
    name: {
      en: 'Tobacco & Nicotine Dependence',
      hi: 'तंबाकू और निकोटीन निर्भरता (बीड़ी, सिगरेट, गुटखा, खैनी)',
      gu: 'તમાકુ અને નિકોટીનનું વ્યસન (બીડી, સિગારેટ, ગુટખા, માવો)',
    },
    medicalTerms: {
      en: 'Tobacco Use Disorder, Nicotine Dependence',
      hi: 'टोबैको यूज़ डिसऑर्डर (Tobacco Use Disorder)',
      gu: 'તમાકુ વ્યસન વિકાર',
    },
    whatIsIt: {
      en: 'Tobacco dependence is a chronic relapsing disorder caused by nicotine, found in smoked forms (cigarettes, bidis) and smokeless forms (gutkha, khaini, zarda, pan masala). In India, smokeless tobacco is a massive public health crisis.',
      hi: 'तंबाकू की लत निकोटीन के कारण होती है। भारत में यह बीड़ी, सिगरेट के साथ-साथ गुटखा, खैनी, जर्दा और पान मसाले के रूप में व्यापक रूप से पाई जाती है, जो अत्यंत हानिकारक है।',
      gu: 'તમાકુનું વ્યસન તેમાં રહેલા નિકોટીનને કારણે થાય છે. ભારતમાં બીડી, સિગારેટ ઉપરાંત ગુટખા, માવો, ખૈની, જર્દાનું વ્યસન ખૂબ મોટો ખતરો છે.',
    },
    whyAddictive: {
      en: 'Inhaled or absorbed nicotine crosses the blood-brain barrier within 7 to 10 seconds, binding to nicotinic acetylcholine receptors and releasing dopamine. Because nicotine levels drop rapidly, intense withdrawal cravings trigger repetitive use throughout the day.',
      hi: 'निकोटीन कुछ ही सेकंड में दिमाग में पहुंचकर डोपामाइन रिलीज करता है। इसका असर तेजी से खत्म होता है, जिससे इंसान को बार-बार तलब लगती है और वह दिनभर तंबाकू चबाने या फूंकने लगता है।',
      gu: 'નિકોટીન થોડી જ સેકન્ડમાં મગજમાં પહોંચીને ક્ષણિક સંતોષ આપે છે. તેનું સ્તર ઝડપથી ઘટતાં વારંવાર તલપ લાગે છે અને વ્યક્તિ તેનો ગુલામ બની જાય છે.',
    },
    brainBodyEffects: {
      en: 'Elevates heart rate and blood pressure, constricts blood vessels, damages oral mucosa, causes leukoplakia and submucous fibrosis, and accelerates atherosclerosis.',
      hi: 'दिल की धड़कन और बीपी बढ़ाता है, मुंह के अंदर छाले व सफेदी (Leukoplakia) और मुंह का खुलना कम होना (Oral Submucous Fibrosis) का मुख्य कारण है।',
      gu: 'ધબકારા અને બ્લડ પ્રેશર વધારે છે, મોંમાં ચાંદા અને મોં ઓછું ખૂલવાની તકલીફ (સબમ્યુકસ ફાઈબ્રોસિસ) ઊભી કરે છે.',
    },
    problematicUseSigns: {
      en: [
        'Using tobacco within 5 to 30 minutes of waking up',
        'Difficulty refraining from tobacco in places where it is prohibited',
        'Using despite recurrent mouth ulcers, cough, or heart trouble',
        'Multiple failed attempts to quit',
      ],
      hi: [
        'सुबह उठते ही 5 से 30 मिनट के भीतर तंबाकू या बीड़ी की जरूरत पड़ना (Fagerström test)',
        'मुंह में छाले, खांसी या दांत खराब होने के बावजूद इस्तेमाल जारी रखना',
        'तंबाकू छोड़ने की कोशिश करने पर अत्यधिक चिड़चिड़ापन और बेचैनी होना',
      ],
      gu: [
        'સવારે જાગતાની સાથે જ 5 થી 30 મિનિટમાં માવો કે બીડી જોઈએ જ',
        'મોંમાં ચાંદા કે દાંત ખરાબ થવા છતાં વ્યસન ચાલુ રાખવું',
        'છોડવાનો પ્રયાસ કરવા છતાં અતિશય ચીડિયાપણું અને અજંપો થવો',
      ],
    },
    dependenceSigns: {
      en: [
        'Strong physiological cravings when tobacco is not available',
        'Irritability, anxiety, restlessness, and headaches upon cessation',
        'Increasing the number of pouches or bidis over time',
      ],
      hi: [
        'तंबाकू न मिलने पर तीव्र बेचैनी, सिरदर्द, और काम में मन न लगना',
        'समय के साथ पुड़ियों या सिगरेटों की संख्या बढ़ती जाना',
      ],
      gu: [
        'તમાકુ ન મળે ત્યારે માથાનો દુખાવો, બેચેની અને કામમાં ધ્યાન ન રહેવું',
        'સમય સાથે રોજ ખાવામાં આવતી પડીકીઓની સંખ્યા વધતી જવી',
      ],
    },
    withdrawalSymptoms: {
      en: 'Peaks within 24-72 hours: intense cravings, irritability, frustration, anxiety, insomnia, increased appetite, and difficulty concentrating.',
      hi: 'छोड़ने के 24-72 घंटों में: तंबाकू की तीव्र तलब, भारी चिड़चिड़ापन, घबराहट, नींद न आना, भूख बढ़ना और बेचैनी।',
      gu: 'છોડ્યા પછીના 24-72 કલાકમાં: તીવ્ર તલપ, ગુસ્સો, ચીડિયાપણું, ઊંઘ ન આવવી અને બેચેની.',
    },
    medicalComplications: {
      en: 'Oral cavity cancer (squamous cell carcinoma), esophageal cancer, lung cancer, chronic obstructive pulmonary disease (COPD), myocardial infarction (heart attack), and stroke.',
      hi: 'मुंह का कैंसर (Oral Cancer), फेफड़ों और गले का कैंसर, दिल का दौरा (Heart Attack), सांस की गंभीर बीमारी (COPD) और स्ट्रोक।',
      gu: 'મોંનું કેન્સર, ગળા અને ફેફસાંનું કેન્સર, હાર્ટ એટેક, લકવો અને શ્વાસની ગંભીર બીમારી.',
    },
    psychiatricComplications: {
      en: 'Worsening baseline anxiety, chronic stress cycles between nicotine doses, and potential interactions with other psychiatric medications.',
      hi: 'तंबाकू वास्तव में तनाव कम नहीं करता, बल्कि दो खुराकों के बीच निकोटीन की कमी से होने वाले तनाव को बढ़ाता है।',
      gu: 'તમાકુ વાસ્તવમાં તણાવ ઘટાડતું નથી પણ તેની ગેરહાજરીથી થતા તણાવને લીધે વ્યક્તિ વધુ બેચેન બને છે.',
    },
    familyImpact: {
      en: 'Secondhand smoke harming children and spouses, economic drain from daily purchasing, and emotional crisis if cancer or heart disease strikes.',
      hi: 'परिवार के बच्चों और पत्नी को पैसिव स्मोकिंग का नुकसान, रोजाना के खर्च से आर्थिक तंगी और कैंसर होने पर पूरे परिवार पर विपत्ति।',
      gu: 'પરિવારજનોને ધુમાડાથી નુકસાન, રોજિંદો નાણાકીય બગાડ અને કેન્સર થવાના કિસ્સામાં કુટુંબની બરબાદી.',
    },
    assessmentOverview: {
      en: 'Fagerström Test for Nicotine Dependence (FTND), oral cavity examination, cardiovascular screening, and motivational readiness staging.',
      hi: 'मुंह की विस्तृत जांच, निकोटीन निर्भरता का स्कोर (FTND) और छोड़ने की मानसिक तैयारी का मूल्यांकन।',
      gu: 'મોંની ચકાસણી, વ્યસનની તીવ્રતા માપવાની પદ્ધતિ અને છોડવાની તૈયારીનું મૂલ્યાંકન.',
    },
    treatmentApproach: {
      en: 'Combination of behavioral counseling and pharmacotherapy (Nicotine Replacement Therapy or non-nicotine medications prescribed by a psychiatrist).',
      hi: 'काउंसलिंग और आधुनिक दवाओं का संयोजन: निकोटीन रिप्लेसमेंट थेरेपी (NRT - जैसे गम या पैच) तथा तलब कम करने वाली दवाएं।',
      gu: 'કાઉન્સેલિંગ અને આધુનિક સારવાર: નિકોટીન રિપ્લેસમેન્ટ થેરાપી (ગમ કે પેચ) અને તબીબી દવાઓ.',
    },
    psychotherapyModalities: {
      en: 'Motivational Interviewing, 5 A\'s model (Ask, Advise, Assess, Assist, Arrange), and CBT trigger management.',
      hi: 'मोटिवेशनल काउंसलिंग और 5-A मॉडल (पूछना, सलाह देना, आकलन करना, मदद करना, फॉलो-अप)।',
      gu: 'મોટિવેશનલ કાઉન્સેલિંગ અને તલપ નિયંત્રિત કરવાની વર્તનલક્ષી પદ્ધતિઓ.',
    },
    medicationAssistedTreatment: {
      en: 'Nicotine Replacement Therapy (gums, lozenges, transdermal patches) and oral non-nicotine prescription medications (such as bupropion or varenicline under medical supervision).',
      hi: 'निकोटीन गम्स/पैच और डॉक्टर द्वारा निर्धारित दवाएं (जैसे Bupropion या Varenicline) जो तंबाकू की तलब को दिमाग के स्तर पर शांत करती हैं।',
      gu: 'નિકોટીન ગમ કે પેચ અને મનોચિકિત્સક દ્વારા સૂચવાતી દવાઓ (Bupropion/Varenicline) જે તલપને શાંત કરે છે.',
    },
    detoxificationConcepts: {
      en: 'Nicotine withdrawal is medically benign compared to alcohol (no risk of seizures or death), but the intense psychological cravings benefit greatly from structured tapering or replacement.',
      hi: 'निकोटीन छोड़ने से कोई शारीरिक जानलेवा खतरा नहीं होता, लेकिन मानसिक तलब बहुत तीव्र होती है जिसे दवाओं से बहुत आसान बनाया जा सकता है।',
      gu: 'નિકોટીન છોડવાથી કોઈ જીવલેણ ખતરો થતો નથી, પરંતુ તલપ ખૂબ તીવ્ર હોય છે જેને દવાઓની મદદથી સરળતાથી નિયંત્રિત કરી શકાય છે.',
    },
    relapsePrevention: {
      en: 'The 4 D\'s rule during cravings: Delay (wait 5-10 minutes), Deep breathe, Drink water, Distract oneself with a new activity.',
      hi: 'तलब आने पर 4-D का नियम: Delay (5 मिनट रुकें), Deep breathe (गहरी सांस लें), Drink water (पानी पिएं), Distract (ध्यान दूसरी जगह लगाएं)।',
      gu: 'તલપ લાગે ત્યારે 4-D નો નિયમ: ડીલે (5 મિનિટ રાહ જુઓ), ડીપ બ્રીથ (ઊંડા શ્વાસ લો), ડ્રિન્ક વોટર (પાણી પીવો), ડીસ્ટ્રેક્ટ (બીજા કામમાં ધ્યાન પરોવો).',
    },
    harmReduction: {
      en: 'Complete cessation is the only safe goal. Never switch from cigarettes to gutkha or vaping assuming it is harmless. Seek regular oral cancer screenings.',
      hi: 'पूर्ण रूप से छोड़ना ही एकमात्र सुरक्षित उपाय है। सिगरेट छोड़कर गुटखा खाना कोई सुरक्षित विकल्प नहीं है। नियमित रूप से मुंह की जांच कराएं।',
      gu: 'સંપૂર્ણપણે વ્યસન છોડવું એ જ એકમાત્ર સલામત રસ્તો છે. નિયમિતપણે મોંની તપાસ કરાવતા રહો.',
    },
    overdoseWarningSigns: {
      en: 'Acute nicotine toxicity (rare from traditional forms, more common in accidental ingestion of e-liquids): nausea, vomiting, dizziness, tremors, rapid heart rate.',
      hi: 'निकोटीन की अत्यधिक विषाक्तता: उल्टी, चक्कर आना, तेज धड़कन और कंपकंपी।',
      gu: 'નિકોટીનનું ઓવરડોઝ: ઉલટી, ચક્કર આવવા, ઝડપી ધબકારા અને ધ્રુજારી.',
    },
    emergencyAdvice: {
      en: 'If child accidentally swallows gutkha, tobacco pouches, or e-liquid, seek immediate emergency medical care.',
      hi: 'यदि कोई बच्चा गलती से गुटखा या तंबाकू निगल ले, तो तुरंत अस्पताल ले जाएं।',
      gu: 'જો કોઈ બાળક ભૂલથી તમાકુ કે ગુટખા ગળી જાય, તો તાત્કાલિક હોસ્પિટલ પહોંચાડો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Chewing smokeless tobacco (gutkha, khaini) is safe and aids digestion or relieves toothaches.',
          hi: 'गुटखा या खैनी खाने से खाना पचता है या दांत का दर्द ठीक होता है, और यह सिगरेट से सुरक्षित है।',
          gu: 'ગુટખા કે માવો ખાવાથી પાચન સારું થાય છે અથવા દાંતનો દુખાવો મટે છે અને તે બીડી કરતાં સલામત છે.',
        },
        fact: {
          en: 'Smokeless tobacco contains dozens of potent carcinogens and is the number one cause of oral cancer in India. It destroys gums and teeth rather than protecting them.',
          hi: 'गुटखा और खैनी में दर्जनों जानलेवा कैंसरकारी तत्व होते हैं। यह भारत में मुंह के कैंसर का सबसे बड़ा कारण है और दांतों व मसूड़ों को पूरी तरह सड़ा देता है।',
          gu: 'માવો અને ગુટખામાં કેન્સર કરતા અનેક ઝેરી તત્વો હોય છે. તે ભારતમાં મોંના કેન્સરનું મુખ્ય કારણ છે અને દાંત-પેઢાને સડાવી દે છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'I have been chewing tobacco for 20 years. Is there any benefit to quitting now?',
          hi: 'मैं पिछले 20 सालों से तंबाकू खा रहा हूँ। क्या अब इसे छोड़ने का कोई फायदा होगा?',
          gu: 'હું ૨૦ વર્ષથી તમાકુ ખાઉં છું. શું હવે છોડવાથી કોઈ ફાયદો થશે ખરો?',
        },
        answer: {
          en: 'Yes, immense benefit! Within days, your blood pressure and heart rate improve. Over time, your risk of heart attack drops significantly, oral lesions can stabilize, and your cancer risk steadily declines compared to continuing use.',
          hi: 'हाँ, बहुत बड़ा फायदा होगा! छोड़ने के कुछ ही दिनों में दिल की सेहत और ब्लड प्रेशर सुधरता है। समय के साथ कैंसर और हार्ट अटैक का खतरा तेजी से कम होने लगता है। कभी भी देर नहीं होती!',
          gu: 'હા, ખૂબ મોટો ફાયદો થશે! છોડતાની સાથે જ બ્લડ પ્રેશર સુધરે છે. સમય સાથે કેન્સર અને હાર્ટ એટેકનું જોખમ ઘણું ઘટી જાય છે. છોડવા માટે ક્યારેય મોડું થતું નથી!',
        },
      },
    ],
    references: [
      {
        citation: 'Ministry of Health and Family Welfare, Government of India. National Tobacco Control Programme (NTCP) Guidelines.',
        source: 'MoHFW, Govt of India',
      },
      {
        citation: 'World Health Organization. WHO report on the global tobacco epidemic. Geneva: WHO, 2021.',
        source: 'World Health Organization',
        year: '2021',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'cannabis',
    slug: 'cannabis-use-disorder',
    name: {
      en: 'Cannabis Use Disorder (Ganja, Charas, Bhang)',
      hi: 'कैनबिस यूज़ डिसऑर्डर (गांजा, चरस, भांग की लत)',
      gu: 'ગાંજો, ચરસ અને ભાંગનું વ્યસન (Cannabis Use Disorder)',
    },
    medicalTerms: {
      en: 'Cannabis Use Disorder, Cannabis Dependence',
      hi: 'कैनबिस डिपेंडेंस (Cannabis Dependence)',
      gu: 'કેનાબીસ ડિપેન્ડન્સ',
    },
    whatIsIt: {
      en: 'Cannabis Use Disorder occurs when a person continues consuming cannabis preparations (ganja, charas, hashish, bhang) despite experiencing significant cognitive, psychological, and social impairment.',
      hi: 'कैनबिस डिसऑर्डर तब होता है जब व्यक्ति गांजा, चरस या भांग के सेवन पर नियंत्रण खो देता है और इसके कारण उसकी याददाश्त, पढ़ाई, नौकरी और मानसिक संतुलन बिगड़ने लगता है।',
      gu: 'જ્યારે વ્યક્તિ ગાંજો, ચરસ કે ભાંગના સેવન પરનો કાબૂ ગુમાવી દે છે અને તેના કારણે તેની યાદશક્તિ, અભ્યાસ કે માનસિક સ્વાસ્થ્ય બગડે છે ત્યારે આ સ્થિતિ બને છે.',
    },
    whyAddictive: {
      en: 'THC (tetrahydrocannabinol) binds to CB1 cannabinoid receptors in the brain, triggering unnatural dopamine release. Chronic use downregulates endogenous cannabinoid receptors, leading to tolerance and severe psychological cravings.',
      hi: 'गांजे में मौजूद THC मस्तिष्क के प्राकृतिक रिसेप्टर्स को प्रभावित करता है। नियमित उपयोग से मस्तिष्क इसका आदी हो जाता है, जिससे प्रेरणा की कमी और निर्भरता पैदा होती है।',
      gu: 'ગાંજામાં રહેલું THC મગજની સામાન્ય સિસ્ટમને ખોરવી નાખે છે. લાંબા ગાળે મગજ તેનો બંધાણી બની જાય છે અને વ્યક્તિ સામાન્ય રીતે વિચારી શકતી નથી.',
    },
    brainBodyEffects: {
      en: 'Alters sensory perception, impairs short-term memory, slows information processing, causes tachycardia, dry mouth, red conjunctiva, and chronic airway irritation.',
      hi: 'अल्पकालिक याददाश्त कमजोर करता है, ध्यान केंद्रित करने की क्षमता घटाता है, आंखों में लाली लाता है और दिल की धड़कन तेज करता है।',
      gu: 'યાદશક્તિ અને એકાગ્રતા નબળી પાડે છે, આંખો લાલ કરે છે અને ધબકારા વધારે છે.',
    },
    problematicUseSigns: {
      en: [
        'Amotivational syndrome: marked apathy, loss of ambition, neglecting goals',
        'Decline in academic or workplace performance',
        'Continuing use despite escalating suspiciousness, anxiety, or memory lapses',
      ],
      hi: [
        'अमोटिवेशनल सिंड्रोम (Amotivational syndrome): जीवन के लक्ष्यों, पढ़ाई या नौकरी में कोई उत्साह या रुचि न बचना',
        'हर समय सुस्त और आलसी बने रहना',
        'शक, वहम या घबराहट बढ़ने के बावजूद गांजा पीना जारी रखना',
      ],
      gu: [
        'જીવનમાં કોઈ લક્ષ્ય કે ઉત્સાહ ન રહેવો (એમોટિવેશનલ સિન્ડ્રોમ)',
        'અભ્યાસ કે નોકરીમાં સતત પછડાટ ખાવી',
        'શંકા કે વહેમ વધવા છતાં નશો ચાલુ રાખવો',
      ],
    },
    dependenceSigns: {
      en: [
        'Needing higher potency or more frequent smoking to feel the effect',
        'Irritability, insomnia, vivid dreams, and loss of appetite when stopping',
      ],
      hi: [
        'नशा न मिलने पर तेज चिड़चिड़ापन, भूख न लगना और रात में अजीब सपने आना',
        'गांजे के बिना सामान्य महसूस न कर पाना',
      ],
      gu: [
        'ગાંજો ન મળે ત્યારે ઊંઘ ન આવવી, ભૂખ મરી જવી અને અતિશય ચીડિયાપણું',
      ],
    },
    withdrawalSymptoms: {
      en: 'Irritability, anger, nervousness/anxiety, sleep difficulty (strange dreams), decreased appetite, restlessness, and depressed mood.',
      hi: 'छोड़ने पर: चिड़चिड़ापन, अत्यधिक गुस्सा, घबराहट, नींद न आना, बेचैनी और भूख न लगना।',
      gu: 'છોડ્યા પછી: ગુસ્સો, અજંપો, ઊંઘ ન આવવી અને ખાવાની અનિચ્છા.',
    },
    medicalComplications: {
      en: 'Chronic bronchitis, impaired cardiovascular responses during acute intoxication, cognitive deficits with prolonged heavy adolescent use.',
      hi: 'फेफड़ों की पुरानी बीमारी, दिल की तेज धड़कन और किशोरावस्था में सेवन से दिमाग के विकास पर स्थायी नकारात्मक असर।',
      gu: 'ફેફસાં અને શ્વાસની બીમારીઓ તથા નાની ઉંમરે સેવન કરવાથી મગજના વિકાસમાં કાયમી ખામી.',
    },
    psychiatricComplications: {
      en: 'Cannabis-Induced Psychotic Disorder (severe paranoia, hallucinations), precipitation of Schizophrenia in genetically vulnerable young people, and cannabis-induced panic attacks.',
      hi: 'कैनबिस-इंड्यूस्ड साइकोसिस (Cannabis Psychosis): गंभीर वहम और आवाजें सुनाई देना। युवाओं में सिज़ोफ्रेनिया जैसी गंभीर बीमारी को ट्रिगर करने का बहुत बड़ा खतरा।',
      gu: 'કેનાબીસ સાયકોસિસ: તીવ્ર વહેમ અને કાલ્પનિક અવાજો સંભળાવવા. યુવાનોમાં સિઝોફ્રેનિયા જેવી ભયાનક બીમારી શરૂ થઈ જવાનું બહુ મોટું જોખમ.',
    },
    familyImpact: {
      en: 'Loss of future career prospects for youth, emotional friction, withdrawal from family life, and legal risks.',
      hi: 'युवाओं का करियर बर्बाद होना, परिवार से पूरी तरह कट जाना और सामाजिक व कानूनी परेशानियां।',
      gu: 'યુવાનોની કારકિર્દી બરબાદ થવી, પરિવારથી સાવ અલગ થઈ જવું અને કાયદાકીય મુશ્કેલીઓ.',
    },
    assessmentOverview: {
      en: 'Psychiatric interview assessing frequency, potency, age of first use, screening for psychotic vulnerability and depressive symptoms.',
      hi: 'मनोचिकित्सक द्वारा जांच कि क्या गांजे के कारण मरीज के दिमाग में वहम या साइकोसिस के लक्षण शुरू हो गए हैं।',
      gu: 'મનોચિકિત્સક દ્વારા તપાસ કે ગાંજાના લીધે મગજમાં વહેમ કે સાયકોસિસના લક્ષણો શરૂ થયા છે કે નહીં.',
    },
    treatmentApproach: {
      en: 'Structured psychological therapies, management of sleep and anxiety during withdrawal, and family psychoeducation.',
      hi: 'मनोवैज्ञानिक थेरेपी, विथड्रॉल के दौरान नींद व घबराहट की सुरक्षित दवाएं और परिवार का सहयोग।',
      gu: 'સાયકોથેરાપી, વિથડ્રોઅલ દરમિયાન ઊંઘ અને બેચેની માટે હળવી દવાઓ અને પારિવારિક સાથ.',
    },
    psychotherapyModalities: {
      en: 'Motivational Enhancement Therapy (MET), Cognitive Behavioural Therapy (CBT), and Contingency Management.',
      hi: 'मोटिवेशनल थेरेपी और कॉग्निटिव बिहेवियरल थेरेपी (CBT)।',
      gu: 'મોટિવેશનલ થેરાપી અને કાઉન્સેલિંગ.',
    },
    medicationAssistedTreatment: {
      en: 'There is currently no FDA-approved medication specifically for cannabis dependence; psychiatric treatment targets withdrawal symptoms (insomnia, anxiety) and co-morbid mood disorders.',
      hi: 'गांजे के लिए कोई सीधी एंटी-ड्रग दवा नहीं है; मनोचिकित्सक इसके विथड्रॉल के लक्षणों (जैसे अनिद्रा, चिंता) और डिप्रेशन का इलाज करते हैं।',
      gu: 'ગાંજા માટે કોઈ સીધી દવા નથી; ડૉક્ટરો તેની આડઅસરો (ઊંઘ ન આવવી, ચિંતા) અને ડિપ્રેશનની સારવાર કરે છે.',
    },
    detoxificationConcepts: {
      en: 'Supportive medical management to ensure sleep stability and prevent panic attacks or psychotic decompensation during cessation.',
      hi: 'छोड़ने के शुरुआती दिनों में नींद और मानसिक शांति बनाए रखने के लिए डॉक्टर की देखरेख आवश्यक होती है।',
      gu: 'છોડવાના શરૂઆતી દિવસોમાં ઊંઘ અને મગજની શાંતિ માટે ડૉક્ટરની સલાહ જરૂરી છે.',
    },
    relapsePrevention: {
      en: 'Cutting off contact with drug-using peer groups, restructuring daily schedule with productive hobbies and physical exercise.',
      hi: 'नशा करने वाले दोस्तों से दूरी बनाना, खेलकूद और करियर पर ध्यान केंद्रित करना।',
      gu: 'નશાખોર મિત્રોની સોબત છોડવી, કસરત કરવી અને અભ્યાસ કે કામમાં મન પરોવવું.',
    },
    harmReduction: {
      en: 'Never drive under the influence; never use cannabis if you or your family have any history of psychosis or schizophrenia; seek help immediately if paranoia starts.',
      hi: 'नशे में कभी गाड़ी न चलाएं; अगर परिवार में किसी को सिज़ोफ्रेनिया या मानसिक बीमारी का इतिहास है तो गांजे से हमेशा दूर रहें।',
      gu: 'નશામાં વાહન ન ચલાવવું; પરિવારમાં કોઈને માનસિક બીમારી હોય તો ગાંજાથી કાયમ માટે દૂર રહેવું.',
    },
    overdoseWarningSigns: {
      en: 'Severe acute panic attacks ("greening out"), uncontrollable vomiting (Cannabinoid Hyperemesis Syndrome), extreme paranoia, and cardiac palpitations.',
      hi: 'अचानक बहुत तेज घबराहट (पैनिक अटैक), अत्यधिक उल्टियां होना, भयानक वहम होना और दिल की धड़कन बेकाबू होना।',
      gu: 'અચાનક ખૂબ જ તીવ્ર ગભરાટ (પેનિક એટેક), સતત ઉલટીઓ થવી, ભારે વહેમ થવો.',
    },
    emergencyAdvice: {
      en: 'Place person in a quiet, low-stimulation room, reassure them firmly that the terrifying symptoms are temporary from the substance, and seek medical care if agitation or chest pain occurs.',
      hi: 'व्यक्ति को शांत कमरे में रखें, उन्हें भरोसा दिलाएं कि यह गांजे का असर है जो बीत जाएगा। यदि छाती में दर्द या तेज बेचैनी हो तो तुरंत डॉक्टर के पास ले जाएं।',
      gu: 'વ્યક્તિને શાંત રૂમમાં બેસાડો, હિંમત આપો કે આ નશાની ક્ષણિક અસર છે જે શાંત થઈ જશે. તકલીફ વધે તો ડૉક્ટર પાસે લઈ જાઓ.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Cannabis is a completely natural herbal plant, so it is 100% harmless and cannot cause mental illness.',
          hi: 'गांजा एक प्राकृतिक जड़ी-बूटी है, इसलिए यह पूरी तरह सुरक्षित है और इससे कोई मानसिक बीमारी नहीं हो सकती।',
          gu: 'ગાંજો તો કુદરતી વનસ્પતિ છે, તેથી તે ૧૦૦% નિર્દોષ છે અને તેનાથી કોઈ માનસિક રોગ ન થાય.',
        },
        fact: {
          en: 'Natural does not mean safe (tobacco and opium are also plants). High-potency cannabis significantly increases the risk of triggering permanent psychotic disorders and impairs cognitive development in youth.',
          hi: 'प्राकृतिक होने का मतलब सुरक्षित होना नहीं है (अफीम और तंबाकू भी पौधे हैं)। गांजा युवाओं के दिमाग को भारी नुकसान पहुंचाता है और सिज़ोफ्रेनिया जैसी लाइलाज मानसिक बीमारियों को जन्म दे सकता है।',
          gu: 'કુદરતી હોવાનો અર્થ સલામત હોવો નથી (અફીણ અને તમાકુ પણ વનસ્પતિ છે). ગાંજો યુવાનોના મગજને કાયમી નુકસાન કરી શકે છે અને સાયકોસિસ લાવી શકે છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can smoking weed trigger permanent madness or schizophrenia in someone?',
          hi: 'क्या गांजा पीने से कोई व्यक्ति हमेशा के लिए पागल हो सकता है या उसे सिज़ोफ्रेनिया हो सकता है?',
          gu: 'શું ગાંજો પીવાથી કોઈ વ્યક્તિ કાયમ માટે ગાંડી થઈ શકે છે કે સિઝોફ્રેનિયા થઈ શકે?',
        },
        answer: {
          en: 'Yes. Robust scientific research proves that regular cannabis use, especially starting in teenage or early adult years, substantially increases the risk of developing chronic psychotic disorders like Schizophrenia in people with genetic vulnerabilities.',
          hi: 'हाँ, वैज्ञानिक अध्ययनों से सिद्ध हो चुका है कि विशेष रूप से कम उम्र में गांजा पीने से सिज़ोफ्रेनिया जैसी गंभीर मानसिक बीमारी होने का खतरा कई गुना बढ़ जाता है।',
          gu: 'હા, વૈજ્ઞાનિક સંશોધનો સાબિત કરે છે કે નાની ઉંમરે ગાંજો પીવાથી સિઝોફ્રેનિયા જેવી ગંભીર બીમારી થવાનું જોખમ ઘણું વધી જાય છે.',
        },
      },
    ],
    references: [
      {
        citation: 'Volkow ND, et al. Adverse Health Effects of Marijuana Use. N Engl J Med. 2014;370(23):2219-2227.',
        source: 'New England Journal of Medicine',
        year: '2014',
      },
      {
        citation: 'NIMHANS Guidelines on Cannabis and Mental Health in India.',
        source: 'NIMHANS Guidelines',
      },
    ],
    lastReviewed: '2026-08',
  },
  {
    id: 'opioids',
    slug: 'opioid-use-disorder',
    name: {
      en: 'Opioid Use Disorder (Heroin, Smack, Brown Sugar, Tramadol, Codeine)',
      hi: 'ओपियोइड यूज़ डिसऑर्डर (स्मैक, हेरोइन, अफीम, ट्रामाडोल, कोडीन सिरप)',
      gu: 'અફીણ, સ્મેક, હેરોઇન અને ઓપિયોઇડ્સનું વ્યસન',
    },
    medicalTerms: {
      en: 'Opioid Dependence Syndrome, OUD',
      hi: 'ओपिएट डिपेंडेंस (Opiate Dependence Syndrome)',
      gu: 'ઓપિયોઇડ ડિપેન્ડન્સ',
    },
    whatIsIt: {
      en: 'Opioid Use Disorder is a severe, life-threatening chronic brain disease characterized by the compulsive use of natural, semi-synthetic, or synthetic opioids despite catastrophic physical, mental, and social consequences.',
      hi: 'ओपियोइड की लत (जैसे अफीम, स्मैक, हेरोइन, कोडीन कफ सिरप, ट्रामाडोल) एक अत्यंत गंभीर और जानलेवा स्थिति है जिसमें व्यक्ति का जीवन पूरी तरह नशे के इर्द-गिर्द सिमट जाता है।',
      gu: 'અફીણ, સ્મેક, હેરોઇન, કે ટ્રામાડોલ/કોડીન જેવી દવાઓનું વ્યસન એક અત્યંત ગંભીર અને જીવલેણ બીમારી છે.',
    },
    whyAddictive: {
      en: 'Opioids bind directly to mu-opioid receptors in the brainstem and limbic system, completely overwhelming pain pathways and releasing enormous surges of dopamine that rewire survival priorities in the brain.',
      hi: 'ओपियोइड्स मस्तिष्क के दर्द और आनंद केंद्रों पर सीधा असर डालते हैं। यह मस्तिष्क की कार्यप्रणाली को इस कदर बदल देते हैं कि इंसान को भोजन या पानी से भी ज्यादा नशे की तलब लगने लगती है।',
      gu: 'ઓપિયોઇડ્સ મગજની કુદરતી વ્યવસ્થાને હાઇજેક કરી લે છે. વ્યક્તિને જીવવા માટે અન્ન-જળ કરતાં પણ વધુ નશો અનિવાર્ય લાગવા માંડે છે.',
    },
    brainBodyEffects: {
      en: 'Causes intense euphoria followed by drowsiness ("nodding"), pinpoint pupils (miosis), respiratory depression, severe constipation, and decreased libido.',
      hi: 'तीव्र नशा और उसके बाद अर्ध-बेहोशी जैसी नींद, पुतलियों का सिकुड़ना, सांस बहुत धीमी होना और गंभीर कब्ज।',
      gu: 'શરૂઆતમાં નશો અને પછી ઘેન, આંખની કીકીઓ સાવ ઝીણી થઈ જવી, શ્વાસ અત્યંત ધીમો થવો અને કબજિયાત.',
    },
    problematicUseSigns: {
      en: [
        'Rapid depletion of family finances or selling personal belongings',
        'Marked drop in hygiene, needle marks (if injecting), wearing long sleeves in hot weather',
        'Doctor-shopping for prescription painkillers or codeine syrups',
      ],
      hi: [
        'घर से पैसे गायब होना, गहने या सामान बेचना',
        'हाथों पर सुई के निशान छिपाने के लिए गर्मी में भी पूरी आस्तीन के कपड़े पहनना',
        'दर्द की दवाइयों या कफ सिरप के लिए कई डॉक्टरों या मेडिकल स्टोरों के चक्कर लगाना',
      ],
      gu: [
        'ઘરમાંથી પૈસા ગાયબ થવા કે ઘરવખરી વેચવી',
        'હાથ પર ઇન્જેક્શનના નિશાન છુપાવવા ગરમીમાં પણ આખી બાંયના કપડાં પહેરવા',
        'મેડિકલ સ્ટોરોમાંથી કફ સિરપ કે દર્દની ગોળીઓ મેળવવા હવાતિયાં મારવા',
      ],
    },
    dependenceSigns: {
      en: [
        'Severe physical inability to function without a dose every few hours',
        'Escalating doses due to rapid tolerance',
      ],
      hi: [
        'हर कुछ घंटों में खुराक न मिलने पर गंभीर शारीरिक बीमारी जैसी हालत हो जाना',
        'सहनशीलता (Tolerance) बढ़ने से लगातार खुराक बढ़ाते जाना',
      ],
      gu: [
        'દર થોડા કલાકે ડોઝ ન મળે તો શરીર તૂટવા લાગવું અને ઊભા ન થઈ શકવું',
      ],
    },
    withdrawalSymptoms: {
      en: 'Extremely agonizing although usually not directly fatal: severe muscle aches and bone pain, profuse sweating, runny nose, lacrimation (watery eyes), dilated pupils, goosebumps ("cold turkey"), diarrhea, severe vomiting, and intense anxiety.',
      hi: 'अत्यंत पीड़ादायक विथड्रॉल: हड्डियों और जोड़ों में भयंकर दर्द, आंख और नाक से पानी बहना, अत्यधिक पसीना, रोंगटे खड़े होना, दस्त और उल्टियां, और असहनीय बेचैनी।',
      gu: 'અત્યંત દર્દનાક વિથડ્રોઅલ: હાડકાં અને સ્નાયુઓમાં અસહ્ય કળતર, આંખ-નાકમાંથી પાણી વહેવું, પરસેવો, ઝાડા-ઉલટી અને ભયંકર બેચેની.',
    },
    medicalComplications: {
      en: 'Fatal respiratory depression (overdose), transmission of HIV and Hepatitis B & C via shared needles, bacterial endocarditis (heart valve infection), and septic thrombophlebitis.',
      hi: 'सांस रुकने से अचानक मौत (Overdose), सुई साझा करने से एचआईवी (HIV) और हेपेटाइटिस B व C का संक्रमण, और दिल के वाल्व में जानलेवा इन्फेक्शन।',
      gu: 'શ્વાસ બંધ થઈ જવાથી તત્કાલ મોત (ઓવરડોઝ), સોયથી HIV અને હિપેટાઇટિસ B તથા C નો ચેપ અને હૃદયના વાલ્વમાં સડો.',
    },
    psychiatricComplications: {
      en: 'Profound depression, suicidal ideation, personality decay, and emotional apathy.',
      hi: 'गहरा अवसाद, आत्महत्या के विचार, और संवेदनाओं का पूरी तरह खत्म हो जाना।',
      gu: 'ઊંડું ડિપ્રેશન, આત્મહત્યાના વિચારો અને લાગણીઓનું સાવ મરી જવું.',
    },
    familyImpact: {
      en: 'Complete financial ruin of the family, criminal involvement, devastating grief, and social isolation.',
      hi: 'परिवार की पूरी आर्थिक बर्बादी, चोरी या अपराध में फंसना और परिवार का बिखर जाना।',
      gu: 'કુટુંબની આર્થિક પાયમાલી, ગુનાખોરીમાં ફસાઈ જવું અને પરિવારનું વિસર્જન.',
    },
    assessmentOverview: {
      en: 'Urine drug screening, infectious disease screening (HIV, Hep B/C), assessment of vein health, and evaluation for Opioid Agonist Therapy suitability.',
      hi: 'यूरिन टेस्ट, एचआईवी और हेपेटाइटिस की जांच, और नशा मुक्ति केंद्र में दवा-आधारित उपचार (OST) की योजना।',
      gu: 'પેશાબની તપાસ, HIV અને હિપેટાઇટિસના ટેસ્ટ અને યોગ્ય તબીબી સારવારનું આયોજન.',
    },
    treatmentApproach: {
      en: 'Gold standard is Opioid Substitution Therapy / Medication-Assisted Treatment (MAT) combined with psychosocial counseling.',
      hi: 'विश्व स्तर पर सबसे सफल उपचार: ओपियोइड सब्स्टीट्यूशन थेरेपी (OST) जिसमें डॉक्टर सुरक्षित दवाइयों की निगरानी में मरीज को सामान्य जीवन में वापस लाते हैं।',
      gu: 'વિશ્વ માન્ય સૌથી સફળ સારવાર: દવાઓ આધારિત ઓપિયોઇડ સબસ્ટીટ્યુશન થેરાપી (OST) અને કાઉન્સેલિંગ.',
    },
    psychotherapyModalities: {
      en: 'Relapse Prevention CBT, Community Reinforcement Approach, and 12-step Narcotics Anonymous support.',
      hi: 'सीबीटी (CBT), परिवार का सहारा और सपोर्ट ग्रुप्स (Narcotics Anonymous)।',
      gu: 'કાઉન્સેલિંગ, જીવનશૈલી સુધારણા અને સપોર્ટ ગ્રુપ્સ.',
    },
    medicationAssistedTreatment: {
      en: 'Buprenorphine, Buprenorphine-Naloxone combination, or Naltrexone (after complete detox), strictly under certified medical supervision.',
      hi: 'ब्यूप्रेनॉर्फिन (Buprenorphine) जैसी सरकार-मान्य सुरक्षित दवाएं जो नशा करने की तलब को रोकती हैं और विथड्रॉल से बचाती हैं।',
      gu: 'બ્યુપ્રેનોર્ફિન જેવી તબીબી દવાઓ જે અફીણ કે સ્મેકની તલપ રોકીને વ્યક્તિને કામકાજ કરવા સક્ષમ બનાવે છે.',
    },
    detoxificationConcepts: {
      en: 'Inpatient medical detoxification using opioid substitution tapering and adjuvant medications for cramps, diarrhea, and insomnia, followed by transition to maintenance therapy.',
      hi: 'अस्पताल में भर्ती कराकर सुरक्षित दवाओं से हड्डियों के दर्द, दस्त और बेचैनी को शांत करते हुए सुरक्षित डिटॉक्सिफिकेशन।',
      gu: 'હોસ્પિટલમાં દાખલ કરીને દર્દ, ઝાડા અને ઊંઘની તકલીફ નિવારીને સલામત રીતે શરીર શુદ્ધ કરવું.',
    },
    relapsePrevention: {
      en: 'Strict adherence to OST maintenance medication; cutting off all drug contacts; treating underlying depression.',
      hi: 'डॉक्टर द्वारा दी गई दवा का नियमित सेवन जारी रखना और पुराने नशा करने वाले संपर्कों को पूरी तरह खत्म करना।',
      gu: 'ડૉક્ટરની દવાઓ નિયમિત ચાલુ રાખવી અને જૂના નશાખોરો સાથેનો સંપર્ક સદંતર કાપી નાખવો.',
    },
    harmReduction: {
      en: 'Never use alone; never share needles, syringes, or cotton; know that tolerance drops rapidly after detoxification so returning to prior doses causes fatal overdose.',
      hi: 'कभी अकेले नशा न करें; सुई कभी साझा न करें; याद रखें कि इलाज के बाद शरीर की सहनशीलता कम हो जाती है, ऐसे में दोबारा पुराना डोज लेने से तुरंत मौत हो सकती है।',
      gu: 'ક્યારેય એકલા નશો ન કરવો; સોય ક્યારેય શેર ન કરવી; યાદ રાખો કે સારવાર પછી જૂનો મોટો ડોઝ લેવાથી તત્કાલ મોત થઈ શકે છે.',
    },
    overdoseWarningSigns: {
      en: 'The Opioid Overdose Triad: 1. Pinpoint pupils, 2. Unconsciousness / coma, 3. Extremely slow or stopped breathing (cyanosis/blue lips and fingertips). Fatal within minutes without Naloxone.',
      hi: 'ओपियोइड ओवरडोज़ के 3 मुख्य लक्षण: 1. पुतलियां बिल्कुल सुई की नोक जैसी बारीक होना, 2. गहरी बेहोशी, 3. सांस रुकना या बहुत धीमी होना और होंठ नीले पड़ना। यह तुरंत जानलेवा है!',
      gu: 'ઓવરડોઝના ૩ લક્ષણો: ૧. આંખની કીકીઓ સોયની અણી જેવી ઝીણી થવી, ૨. ગાઢ બેભાન અવસ્થા, ૩. શ્વાસ સાવ ધીમો થવો કે બંધ થવો અને હોઠ વાદળી/ભૂરા થવા. મિનિટોમાં મોત થઈ શકે!',
    },
    emergencyAdvice: {
      en: 'Call 112 / ambulance immediately. If Naloxone is available, administer it immediately. Perform rescue breathing / CPR. Place in recovery position.',
      hi: 'तुरंत 112 या एम्बुलेंस बुलाएं। यदि नालोक्सोन (Naloxone) उपलब्ध हो तो तुरंत दें। मुंह से सांस दें (CPR)। मरीज को अकेला न छोड़ें।',
      gu: 'તરત ૧૧૨ કે એમ્બ્યુલન્સ બોલાવો. જો નાલોક્સોન ઉપલબ્ધ હોય તો તાત્કાલિક આપો. મોંથી શ્વાસ આપો (CPR).',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Using medications like Buprenorphine to treat opioid addiction is just substituting one addiction for another.',
          hi: 'ब्यूप्रेनॉर्फिन जैसी दवाओं से ओपियोइड की लत छुड़ाना सिर्फ एक नशे को दूसरे नशे से बदलना है।',
          gu: 'ઓપિયોઇડ છોડાવવા બ્યુપ્રેનોર્ફિન આપવી એટલે એક નશાની જગ્યાએ બીજો નશો આપવા જેવું છે.',
        },
        fact: {
          en: 'Medication-Assisted Treatment (MAT) is an evidence-based medical therapy. It eliminates cravings and withdrawal without producing intense euphoria, allowing the brain to heal and the individual to work and live safely.',
          hi: 'यह दवा इलाज है, नशा नहीं। यह मस्तिष्क को स्थिर रखती है, तलब खत्म करती है और इंसान को सामान्य नौकरी और पारिवारिक जीवन जीने में मदद करती है, ठीक वैसे ही जैसे मधुमेह में इंसुलिन काम करता है।',
          gu: 'આ તબીબી સારવાર છે, નશો નથી. તે તલપ મિટાવે છે જેથી વ્યક્તિ ચોરી કે ગુનાખોરી વગર સામાન્ય રોજીરોટી કમાઈ શકે છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can a person permanently recover from smack or heroin addiction?',
          hi: 'क्या स्मैक या हेरोइन के नशे से कोई व्यक्ति कभी पूरी तरह ठीक हो सकता है?',
          gu: 'શું સ્મેક કે હેરોઇનના વ્યસનમાંથી કોઈ વ્યક્તિ ક્યારેય સંપૂર્ણ સ્વસ્થ થઈ શકે?',
        },
        answer: {
          en: 'Yes. With modern psychiatric Medication-Assisted Treatment, long-term psychosocial rehabilitation, and family support, thousands of individuals achieve long-term remission and reclaim their families and careers.',
          hi: 'हाँ, बिल्कुल। आधुनिक दवाओं (OST), काउंसलिंग और परिवार के सहयोग से हजारों लोग इस दलदल से बाहर निकलकर आज बहुत सफल और खुशहाल जीवन जी रहे हैं।',
          gu: 'હા, ચોક્કસ! આધુનિક તબીબી સારવાર, કાઉન્સેલિંગ અને પરિવારના સાથથી હજારો દર્દીઓ સંપૂર્ણ સાજા થઈને સામાન્ય જિંદગી જીવી રહ્યા છે.',
        },
      },
    ],
    references: [
      {
        citation: 'World Health Organization. Guidelines for the psychosocially assisted pharmacological treatment of opioid dependence. Geneva: WHO, 2009.',
        source: 'World Health Organization',
      },
      {
        citation: 'National Institute of Mental Health and Neurosciences (NIMHANS). Clinical Practice Guidelines for Management of Opioid Use Disorders.',
        source: 'NIMHANS Guidelines',
      },
    ],
    youtubeVideoId: 'CCLbKGKsp18',
    educationalVideoTitle: { en: "What is an Opioid Use Disorder?", hi: "What is an Opioid Use Disorder?", gu: "What is an Opioid Use Disorder?" },
    educationalVideoSource: 'American Psychiatric Association',
    lastReviewed: '2026-08',
  },
];

export const substancesData: SubstanceInfo[] = [
  ...baseSubstancesData,
  ...newSubstancesData,
  ...newSubstancesBatch2,
];
