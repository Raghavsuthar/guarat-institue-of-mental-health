import { SymptomEducation } from '../types';

export const symptomsData: SymptomEducation[] = [
  {
    id: 'sadness-anhedonia',
    symptomName: {
      en: 'Persistent Sadness & Loss of Pleasure (Anhedonia)',
      hi: 'लगातार उदासी और खुशी महसूस न होना (Anhedonia)',
      gu: 'સતત ઉદાસી અને આનંદ ન અનુભવવો (Anhedonia)',
    },
    plainDescription: {
      en: 'Feeling an inescapable emotional heaviness, numbness, or total loss of interest in favorite hobbies, foods, conversations, or work that lasts for weeks.',
      hi: 'हफ्तों तक मन पर एक भारीपन या खालीपन बना रहना, और उन चीजों में भी कोई खुशी या रुचि न मिलना जो पहले बहुत पसंद थीं।',
      gu: 'અઠવાડિયાઓ સુધી મન પર ઊંડી ઉદાસી કે ખાલીપો છવાયેલો રહેવો અને મનગમતી બાબતોમાં પણ સાવ રસ ઉડી જવો.',
    },
    possibleCauses: {
      en: 'Major Depressive Disorder, Bipolar Depression, Thyroid dysfunction (Hypothyroidism), Anemia, Vitamin D/B12 deficiency, Chronic medical illness, Prolonged grief, or Medication side effects.',
      hi: 'मेजर डिप्रेशन, बायपोलर डिसऑर्डर, थायरॉयड विकार, विटामिन B12/D की कमी, खून की कमी (एनीमिया), या किसी पुरानी शारीरिक बीमारी का असर।',
      gu: 'ડિપ્રેશન, બાયપોલર, થાઇરોઇડની ખામી, એનિમિયા, વિટામિન B12/D ની ઊણપ કે શારીરિક બીમારી.',
    },
    whenToConsult: {
      en: 'When the low mood or loss of interest persists nearly every day for 2 weeks or more and interferes with your ability to work, study, eat, or relate to loved ones.',
      hi: 'जब यह उदासी लगातार 2 सप्ताह से अधिक रहे और आपके काम, पढ़ाई, खान-पान या नींद को प्रभावित करने लगे।',
      gu: 'જ્યારે આ ઉદાસી સતત ૨ અઠવાડિયાથી વધુ સમય રહે અને નોકરી, અભ્યાસ કે ઊંઘમાં ખલેલ પહોંચાડે.',
    },
    selfCareSupport: {
      en: 'Maintain gentle routines, spend 20 minutes in morning sunlight, take short walks, eat regular meals, and talk to someone you trust without isolating yourself.',
      hi: 'सुबह की धूप में 20 मिनट बैठें, हल्का टहलें, समय पर भोजन करें और खुद को कमरे में बंद न रखें।',
      gu: 'સવારના તડકામાં ૨૦ મિનિટ બેસો, હળવું ચાલો, નિયમિત પૌષ્ટિક આહાર લો અને એકલા ન રહો.',
    },
  },
  {
    id: 'excessive-worry',
    symptomName: {
      en: 'Excessive, Uncontrollable Worry & Tension',
      hi: 'अत्यधिक, बेकाबू चिंता और बेचैनी',
      gu: 'અતિશય, નિયંત્રણ બહારની ચિંતા અને તણાવ',
    },
    plainDescription: {
      en: 'Constant mental dread about health, finances, family safety, or work, accompanied by physical tension like stiff neck, churning stomach, or trouble relaxing.',
      hi: 'भविष्य, स्वास्थ्य या परिवार को लेकर लगातार अनियंत्रित आशंकाएं और शरीर में खिंचाव, गर्दन में दर्द या पेट में मरोड़ महसूस होना।',
      gu: 'સ્વાસ્થ્ય કે ભવિષ્ય અંગે સતત અજંપો રહેવો, સ્નાયુઓમાં દુખાવો અને મન શાંત ન થઈ શકવું.',
    },
    possibleCauses: {
      en: 'Generalized Anxiety Disorder, High life stress, Caffeine excess, Hyperthyroidism, Cardiac conditions, or Medication withdrawal.',
      hi: 'जनरलाइज्ड एंग्जायटी डिसऑर्डर, अत्यधिक चाय/कॉफी का सेवन, थायरॉयड की अधिकता (Hyperthyroidism), या दवाओं की प्रतिक्रिया।',
      gu: 'ચિંતાનો વિકાર (GAD), વધુ પડતી ચા-કોફી, થાઇરોઇડની સમસ્યા અથવા ભારે માનસિક તણાવ.',
    },
    whenToConsult: {
      en: 'When worry feels impossible to control, causes insomnia, impairs concentration at work, or leads to frequent doctor visits for unexplained bodily pain.',
      hi: 'जब चिंता को रोकना नामुमकिन लगे, नींद उड़ जाए, और बार-बार डॉक्टरों के पास शारीरिक जांच के लिए जाना पड़े।',
      gu: 'જ્યારે ચિંતા પર કાબૂ ન રહે, ઊંઘ ગાયબ થઈ જાય અને કામમાં ધ્યાન જ ન લાગે.',
    },
    selfCareSupport: {
      en: 'Progressive muscle relaxation, diaphragmatic deep breathing, limiting daily caffeine, and designating a specific 15-minute "worry time" rather than worrying all day.',
      hi: 'गहरी सांस लेने का अभ्यास, चाय-कॉफी कम करना, और पूरे दिन चिंता करने के बजाय दिन में 15 मिनट का समय तय करना।',
      gu: 'ઊંડા શ્વાસ લેવાની કસરત, ચા-કોફી ઘટાડવી અને દિવસભર ચિંતા કરવાના બદલે મનને હળવું રાખવું.',
    },
  },
  {
    id: 'panic-attacks',
    symptomName: {
      en: 'Sudden Panic Attacks (Palpitations & Choking Sensations)',
      hi: 'अचानक पैनिक अटैक (तेज धड़कन व दम घुटने का अहसास)',
      gu: 'અચાનક પેનિક એટેક (ધબકારા વધવા અને ગૂંગળામણ)',
    },
    plainDescription: {
      en: 'A sudden, terrifying wave of physical distress peaking in minutes: pounding heart, shaking, shortness of breath, dizziness, and intense fear of dying.',
      hi: 'कुछ ही मिनटों में अचानक दिल की धड़कन अत्यधिक तेज होना, सांस फूलना, हाथ कांपना, और ऐसा लगना मानो अभी जान जाने वाली है।',
      gu: 'થોડી જ મિનિટોમાં અચાનક ધબકારા વધી જવા, ગૂંગળામણ થવી, પરસેવો વળવો અને મરી જવાનો તીવ્ર ભય લાગવો.',
    },
    possibleCauses: {
      en: 'Panic Disorder, Phobias, Asthma or pulmonary conditions, Cardiac arrhythmias, Caffeine/stimulant toxicity, or Hypoglycemia.',
      hi: 'पैनिक डिसऑर्डर, फोबिया, दिल की धड़कन की गड़बड़ी (Arrhythmia), अस्थमा, या ब्लड शुगर अचानक गिरना।',
      gu: 'પેનિક ડિસઓર્ડર, હૃદયના ધબકારાની અનિયમિતતા, અસ્થમા કે લોહીમાં શુગર ઘટવી.',
    },
    whenToConsult: {
      en: 'If you have had one or more panic attacks, or find yourself constantly avoiding places (elevators, markets, driving) for fear of another attack.',
      hi: 'यदि आपको ऐसे दौरे पड़ रहे हैं या आप अगले दौरे के डर से अकेले बाहर जाने या भीड़ में जाने से डरने लगे हैं।',
      gu: 'જો વારંવાર આવા હુમલા આવતા હોય અથવા ફરી હુમલો આવવાના ડરથી બહાર જવાનું બંધ કરી દીધું હોય.',
    },
    selfCareSupport: {
      en: 'Sit calmly; breathe in for 4 seconds and out for 6 seconds; remind yourself: "This is adrenaline; it will pass safely in minutes."',
      hi: 'शांति से बैठें; 4 सेकंड सांस अंदर लें और 6 सेकंड में बाहर छोड़ें; खुद से कहें "यह सिर्फ एक पैनिक अटैक है, यह शांत हो जाएगा।"',
      gu: 'શાંતિથી બેસો; ધીમેથી શ્વાસ લો અને બહાર કાઢો; મનને યાદ કરાવો કે "આ થોડીવારમાં આપમેળે શાંત થઈ જશે."',
    },
  },
  {
    id: 'hallucinations-delusions',
    symptomName: {
      en: 'Hearing Voices & False Beliefs (Hallucinations & Delusions)',
      hi: 'आवाजें सुनाई देना और असामान्य वहम (Hallucinations व Delusions)',
      gu: 'કાલ્પનિક અવાજો સંભળાવવા અને તીવ્ર વહેમ (Hallucinations & Delusions)',
    },
    plainDescription: {
      en: 'Hearing sounds, whispers, or running commentaries that no one else hears; or holding unshakeable beliefs that people are plotting harm, poisoning food, or spying.',
      hi: 'ऐसी आवाजें सुनाई देना जो कमरे में किसी और को नहीं सुनाई देतीं; या पक्का विश्वास होना कि लोग उनके खिलाफ षड्यंत्र रच रहे हैं या कैमरे से नजर रख रहे हैं।',
      gu: 'કોઈ ન હોવા છતાં કાનમાં અવાજો સંભળાવવા; અથવા એવી દ્રઢ શંકા કે લોકો મારી પાછળ પડ્યા છે કે ખાવામાં ઝેર આપે છે.',
    },
    possibleCauses: {
      en: 'Schizophrenia, Bipolar Mania, Severe Psychotic Depression, Substance intoxication or withdrawal (cannabis, alcohol, stimulants), Brain infections (encephalitis), or Dementia/Delirium.',
      hi: 'सिज़ोफ्रेनिया, बायपोलर मेनिया, गांजे या शराब का दुष्प्रभाव, दिमागी संक्रमण (Encephalitis), या बुजुर्गों में डेलिरियम।',
      gu: 'સિઝોફ્રેનિયા, બાયપોલર, ગાંજો કે દારૂની આડઅસર, મગજનો ચેપ અથવા વૃદ્ધાવસ્થામાં ડેલીરિયમ.',
    },
    whenToConsult: {
      en: 'IMMEDIATELY. Psychotic symptoms are a clear medical priority requiring prompt evaluation by a psychiatrist.',
      hi: 'तुरंत मनोचिकित्सक से मिलें। यह एक गंभीर चिकित्सीय प्राथमिकता है जिसमें जरा भी देरी नहीं करनी चाहिए।',
      gu: 'તાત્કાલિક મનોચિકિત્સકને બતાવો. આમાં જરાય વિલંબ કરવો જોખમી બની શકે છે.',
    },
    selfCareSupport: {
      en: 'Do not challenge the voices aggressively; maintain a quiet, calm environment; avoid all substances; ensure family accompanies to clinic.',
      hi: 'मरीज से बहस न करें, घर का माहौल शांत रखें, किसी भी प्रकार के नशे से बचाएं और तुरंत डॉक्टर के पास ले जाएं।',
      gu: 'દર્દી સાથે દલીલ ન કરો, શાંત વાતાવરણ રાખો અને તાત્કાલિક ડૉક્ટરની મુલાકાત લો.',
    },
  },
  {
    id: 'intrusive-thoughts-rituals',
    symptomName: {
      en: 'Unwanted Intrusive Thoughts & Repetitive Rituals',
      hi: 'अनचाहे परेशान करने वाले विचार और बार-बार की जाने वाली क्रियाएं',
      gu: 'વણજોઇતા વિચારો અને વારંવાર એકનું એક કામ કરવાની ફરજ પડવી',
    },
    plainDescription: {
      en: 'Horrifying, unacceptable thoughts of germs, harm, or blasphemy that enter the mind against your will, forcing you to wash, check, count, or repeat actions to relieve the distress.',
      hi: 'मन में गंदगी, नुकसान या धार्मिक ईशनिंदा के अनचाहे घिनौने विचार आना, और बेचैनी से बचने के लिए बार-बार हाथ धोना या ताले जांचना।',
      gu: 'કીટાણુઓ કે ગંદકીના ગંદા વિચારો મગજમાં ઘૂસી જવા અને બેચેની દૂર કરવા વારંવાર હાથ ધોવા કે ચેક કરવા જવું.',
    },
    possibleCauses: {
      en: 'Obsessive-Compulsive Disorder (OCD), Postpartum OCD, Severe Stress, Tourette or Tic spectrum conditions.',
      hi: 'ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD), प्रसव के बाद का तनाव, या गंभीर चिंता।',
      gu: 'ઓસીડી (OCD), ડિલિવરી પછીનો તણાવ અથવા ગંભીર ચિંતા.',
    },
    whenToConsult: {
      en: 'When rituals take up more than 1 hour a day, cause skin damage from washing, delay leaving the home, or induce severe guilt.',
      hi: 'जब हाथ धोने या जांचने में दिन का 1 घंटा या उससे अधिक समय बर्बाद होने लगे या हाथों की चमड़ी छिल जाए।',
      gu: 'જ્યારે આ બધું કરવામાં દિવસનો ૧ કલાકથી વધુ સમય બગડે અથવા રોજિંદુ જીવન અસ્તવ્યસ્ત થઈ જાય.',
    },
    selfCareSupport: {
      en: 'Delay the ritual by 5 minutes initially; resist asking family members for reassurance; remind yourself: "This is an OCD thought, not reality."',
      hi: 'हाथ धोने से पहले 5 मिनट रुकने की कोशिश करें; परिवार से बार-बार तसल्ली न मांगें; खुद को याद दिलाएं कि यह ओसीडी का विचार है।',
      gu: 'હાથ ધોતા પહેલાં ૫ મિનિટ રાહ જુઓ; વારંવાર ઘરવાળા પાસે ખાતરી ન માગો.',
    },
  },
  {
    id: 'sleep-difficulties',
    symptomName: {
      en: 'Severe Sleep Difficulties (Insomnia or Decreased Need for Sleep)',
      hi: 'गंभीर नींद की समस्या (अनिद्रा या नींद की जरूरत खत्म होना)',
      gu: 'ગંભીર ઊંઘની તકલીફ (અનિદ્રા અથવા ઊંઘની જરૂરિયાત ન રહેવી)',
    },
    plainDescription: {
      en: 'Difficulty falling or staying asleep despite exhaustion; OR conversely, feeling completely energized and wired after only 1-2 hours of sleep (manic sign).',
      hi: 'थके होने पर भी घंटों नींद न आना; अथवा दूसरी ओर मात्र 1-2 घंटे सोकर भी अत्यधिक ऊर्जा और तेजी महसूस होना।',
      gu: 'થાકેલા હોવા છતાં ઊંઘ ન આવવી; અથવા ઊલટું માત્ર ૧-૨ કલાક ઊંઘીને પણ અતિશય ઊર્જા અનુભવવી (મેનિયાનું લક્ષણ).',
    },
    possibleCauses: {
      en: 'Insomnia Disorder, Major Depression, Generalized Anxiety, Bipolar Mania, Obstructive Sleep Apnea, Restless Legs Syndrome, Screen use, or Caffeine.',
      hi: 'अनिद्रा रोग, डिप्रेशन, चिंता, बायपोलर मेनिया, स्लीप एप्निया, या देर रात तक मोबाइल स्क्रीन देखना।',
      gu: 'અનિદ્રા, ડિપ્રેશન, ચિંતા, બાયપોલર મેનિયા અથવા મોડી રાત સુધી મોબાઈલનો ઉપયોગ.',
    },
    whenToConsult: {
      en: 'When insomnia lasts more than 3 weeks; OR immediately if someone stops sleeping for days while acting euphoric, irritable, or grandiose.',
      hi: 'जब नींद की समस्या 3 सप्ताह से अधिक रहे; या यदि कोई बिना सोए भी अत्यधिक तेजी, गुस्सा या बड़ी-बड़ी बातें कर रहा हो।',
      gu: 'જ્યારે ઊંઘની તકલીફ ૩ અઠવાડિયાથી વધુ ચાલે; અથવા કોઈ વ્યક્તિ સૂતા વિના પણ અતિશય ઉત્સાહ કે ગુસ્સો દર્શાવે.',
    },
    selfCareSupport: {
      en: 'Fixed wake-up time 7 days a week; no screens 1 hour before bed; bed reserved strictly for sleep; eliminate evening tea/coffee.',
      hi: 'रोजाना एक ही समय पर जागें; सोने से 1 घंटा पहले मोबाइल बंद कर दें; शाम को चाय-कॉफी न पिएं।',
      gu: 'રોજ સવારે એક જ સમયે ઊઠો; સૂવાના ૧ કલાક પહેલાં ફોન મૂકી દો; સાંજે ચા-કોફી ન પીવો.',
    },
  },
  {
    id: 'irritability',
    symptomName: {
      en: 'Severe Irritability & Explosive Anger Outbursts',
      hi: 'अत्यधिक चिड़चिड़ापन और गुस्से के अनियंत्रित दौरे',
      gu: 'અતિશય ચિડચિડાપણું અને ક્રોધના અચાનક વિસ્ફોટ',
    },
    plainDescription: {
      en: 'A constant feeling of being on edge, having a "short fuse", snap reactions to minor frustrations, or verbal/physical outbursts that feel disproportionate and are followed by guilt or exhaustion.',
      hi: 'छोटी-छोटी बातों पर अचानक भड़क जाना, हर समय झुंझलाहट महसूस होना, और बाद में अपने गुस्से पर गहरा पछतावा होना।',
      gu: 'નાની નાની વાતોમાં અચાનક પિત્તો ગુમાવવો, આખો દિવસ અકળામણ રહેવી અને ગુસ્સો શાંત થયા પછી ભારે પસ્તાવો થવો.',
    },
    possibleCauses: {
      en: 'Depression (particularly in men and adolescents, where it presents as irritability rather than overt weeping), Bipolar hypomania/mania, Chronic sleep deprivation, Generalized Anxiety, ADHD, PMDD, Borderline traits, or Substance withdrawal.',
      hi: 'डिप्रेशन (पुरुषों और युवाओं में डिप्रेशन अक्सर रोने के बजाय गुस्से के रूप में दिखता है), बायपोलर, नींद की कमी, एडीएचडी, पीएमडीडी, या नशा छोड़ना।',
      gu: 'ડિપ્રેશન (પુરુષોમાં ઉદાસી ઘણીવાર ગુસ્સા રૂપે દેખાય છે), બાયપોલર, ઊંઘનો અભાવ, ADHD, PMDD અથવા વ્યસનનો વિડ્રોલ.',
    },
    whenToConsult: {
      en: 'When temper outbursts damage relationships, create risk of workplace dismissal, threaten domestic violence, or leave you feeling frightened of your own emotional control.',
      hi: 'जब गुस्सा परिवार या नौकरी को नुकसान पहुंचाने लगे, या आपको लगे कि आपका अपने ऊपर कोई काबू नहीं रहा है।',
      gu: 'જ્યારે ગુસ્સાથી કૌટુંબિક કે વ્યાવસાયિક સંબંધો બગડવા લાગે અને જાત પર કાબૂ ન રહે.',
    },
    selfCareSupport: {
      en: 'The "90-second physiological pause": walk away from the trigger, slow exhalations, splash cold water on your face, and assess whether you are Hungry, Angry, Lonely, or Tired (HALT).',
      hi: 'गुस्सा आते ही जगह छोड़ दें, चेहरे पर ठंडा पानी छिड़कें, गहरी सांस लें और देखें कि कहीं आप भूखे या थके तो नहीं हैं (HALT नियम)।',
      gu: 'ગુસ્સો આવે ત્યારે તે જગ્યાએથી ખસી જવું, મોં પર ઠંડુ પાણી છાંટવું, ઊંડા શ્વાસ લેવા અને પૂરતો આરામ લેવો.',
    },
  },
  {
    id: 'suspiciousness-paranoia',
    symptomName: {
      en: 'Suspiciousness & Paranoia (Unshakeable Mistrust)',
      hi: 'गहरा अविश्वास और वहम (किसी के पीछे पड़े होने या साजिश का डर)',
      gu: 'વહેમ અને અવિશ્વાસ (કોઈ પાછળ પડ્યું છે કે ષડયંત્ર રચે છે તેવો ભય)',
    },
    plainDescription: {
      en: 'A distressing belief that strangers, neighbours, colleagues, or authorities are observing, following, plotting against, or talking about you behind your back, despite contrary evidence.',
      hi: 'यह गहरा वहम या डर होना कि लोग, पड़ोसी या सहकर्मी आपके खिलाफ कोई साजिश रच रहे हैं, आपकी बातें रिकॉर्ड कर रहे हैं या आपका मजाक बना रहे हैं।',
      gu: 'લોકો કે પડોશીઓ પોતાની વિરુદ્ધ કોઈ કાવતરું ઘડે છે, કેમેરાથી નજર રાખે છે કે પીઠ પાછળ વાતો કરે છે તેવો દ્રઢ વહેમ થવો.',
    },
    possibleCauses: {
      en: 'Schizophrenia spectrum illnesses, Delusional Disorder (persecutory type), Severe psychotic depression, Bipolar mania with psychosis, Heavy cannabis or stimulant misuse, or Dementia.',
      hi: 'सिज़ोफ्रेनिया, डेल्यूजनल डिसऑर्डर, गंभीर डिप्रेशन या मेनिया में सायकोसिस, गांजे या शराब का नशा, या डिमेंशिया।',
      gu: 'સ્કિઝોફ્રેનિયા, ડેલ્યુઝનલ ડિસઓર્ડર, સાયકોસિસ, ગાંજો કે દારૂનો અતિરેક અથવા ડિમેન્શિયા.',
    },
    whenToConsult: {
      en: 'Urgent medical evaluation is indicated as soon as beliefs begin causing social isolation, hostility toward innocent family members, or defensive behaviors like covering cameras or boarding up windows.',
      hi: 'जैसे ही यह वहम शुरू हो, तुरंत मनोचिकित्सक को दिखाएं। कभी भी मरीज से बहस न करें बल्कि डॉक्टर की मदद लें।',
      gu: 'આવા વહેમ શરૂ થતાં જ તાત્કાલિક મનોચિકિત્સકને બતાવવું. દર્દી સાથે દલીલ કરવાને બદલે ડૉક્ટરની સલાહ લેવી.',
    },
    selfCareSupport: {
      en: 'Do not confront or challenge persecutory beliefs aggressively. Provide a calm, predictable, low-stimulus domestic environment and maintain steady, non-threatening communication.',
      hi: 'मरीज से बहस न करें कि वह गलत सोच रहा है; उसके डर को समझें और प्यार से उसे अस्पताल ले जाएं।',
      gu: 'દર્દી સાથે વાદવિવાદ ન કરવો પરંતુ પ્રેમપૂર્વક તેને મનોચિકિત્સક પાસે લઈ જવો.',
    },
  },
  {
    id: 'memory-concentration-difficulties',
    symptomName: {
      en: 'Memory & Concentration Difficulties (Brain Fog & Executive Breakdown)',
      hi: 'ब्रेन फॉग, याददाश्त में कमजोरी और ध्यान का बिखरना',
      gu: 'બ્રેઇન ફોગ, યાદશક્તિની નબળાઈ અને એકાગ્રતાનો અભાવ',
    },
    plainDescription: {
      en: 'Inability to read a single page without re-reading multiple times, losing train of thought mid-sentence, forgetting routine appointments, or feeling as though thoughts are wading through thick sludge.',
      hi: 'पढ़ी हुई बात तुरंत भूल जाना, बातचीत के बीच में विषय भूल जाना, किसी काम में मन न लगा पाना और दिमाग सुन्न महसूस होना।',
      gu: 'વાંચેલું તરત ભૂલી જવું, વાત કરતાં કરતાં અટકી જવું, એકાગ્રતા સાવ તૂટી જવી અને મગજ બહેર મારી જવું.',
    },
    possibleCauses: {
      en: 'Major Depressive "Pseudodementia", High chronic anxiety, Adult ADHD, Hypothyroidism, Vitamin B12 deficiency, Long-COVID cognitive sequelae, Chronic insomnia, or Early neurodegenerative disorders (Mild Cognitive Impairment).',
      hi: 'डिप्रेशन (जिसमें याददाश्त कमजोर हो जाती है), चिंता, वयस्क एडीएचडी (ADHD), विटामिन B12 की कमी, थायरॉयड, या नींद की कमी।',
      gu: 'ડિપ્રેશન (જેનાથી યાદશક્તિ નબળી પડે છે), ચિંતા, પુખ્ત વયનું ADHD, વિટામિન B12 ની ઊણપ કે અનિદ્રા.',
    },
    whenToConsult: {
      en: 'When memory loss interferes with workplace tasks, leads to getting lost in familiar surroundings, or is accompanied by changes in personality or mood.',
      hi: 'जब भूलने की आदत नौकरी में रुकावट बने, जाने-पहचाने रास्तों पर भटकने लगें, या मूड में बदलाव आए।',
      gu: 'જ્યારે ભૂલવાની ટેવ નોકરીમાં નુકસાન કરે, જાણીતા રસ્તાઓ ભૂલી જવાય કે સ્વભાવ બદલાઈ જાય.',
    },
    selfCareSupport: {
      en: 'Break complex tasks into single 20-minute chunks (Pomodoro method), write everything down in a pocket notebook, eliminate multitasking, and get blood tested for B12 and TSH.',
      hi: 'एक समय में एक ही काम करें, जरूरी बातें डायरी में लिखें, और डॉक्टर से थायरॉयड व विटामिन B12 की जांच कराएं।',
      gu: 'એક સમયે એક જ કામ કરો, મહત્વની બાબતો નોંધી રાખો અને વિટામિન B12 તથા થાઇરોઇડની તપાસ કરાવો.',
    },
  },
  {
    id: 'dissociation',
    symptomName: {
      en: 'Dissociation (Depersonalization & Derealization)',
      hi: 'डिसोसिएशन और खुद से अलगाव (Depersonalization & Derealization)',
      gu: 'ડિસોસિએશન (પોતાના શરીર કે દુનિયાથી સાવ અજાણ્યા લાગવું)',
    },
    plainDescription: {
      en: 'A terrifying feeling of looking at oneself from the outside, feeling like a robot or an actor in a movie (depersonalization), or feeling that surrounding reality and loved ones are artificial, dream-like, or two-dimensional (derealization).',
      hi: 'ऐसा महसूस होना जैसे आप अपने शरीर से बाहर निकलकर खुद को देख रहे हैं, आप कोई रोबोट हैं, या आसपास की दुनिया और अपने लोग किसी सपने या फिल्म की तरह नकली लग रहे हैं।',
      gu: 'પોતાના જ શરીરથી અલગ થઈ ગયા હોઈએ તેવો અનુભવ, આજુબાજુની દુનિયા સાવ બનાવટી કે સપના જેવી લાગવી.',
    },
    possibleCauses: {
      en: 'Severe panic attacks, Post-Traumatic Stress Disorder (PTSD), Acute psychological trauma, Severe sleep deprivation, Cannabis intoxication/panic, or Borderline traits.',
      hi: 'पैनिक अटैक के दौरान तेज घबराहट, पीटीएसडी (पुराना सदमा), नींद की भारी कमी, या गांजे का नशा।',
      gu: 'પેનિક એટેક, ભૂતકાળનો માનસિક આઘાત (PTSD), ઊંઘનો ગંભીર અભાવ અથવા ગાંજાની આડઅસર.',
    },
    whenToConsult: {
      en: 'When episodes occur repeatedly, last for days at a time, or cause intense existential panic that you are "going crazy" or "losing your soul".',
      hi: 'जब यह एहसास बार-बार हो और आपको डर लगने लगे कि आप अपना मानसिक संतुलन खो रहे हैं।',
      gu: 'જ્યારે આવો અનુભવ વારંવાર થાય અને પાગલ થઈ જવાનો કે નિયંત્રણ ગુમાવવાનો ડર સતાવે.',
    },
    selfCareSupport: {
      en: 'Sensory grounding ("5-4-3-2-1" technique): name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste; hold an ice cube in your palm.',
      hi: 'ग्राउंडिंग तकनीक (5-4-3-2-1): 5 चीजें देखें, 4 को छुएं, 3 आवाजें सुनें; हथेली में बर्फ का टुकड़ा पकड़ें।',
      gu: 'ગ્રાઉન્ડિંગ ટેકનિક: આસપાસની ૫ વસ્તુઓ જુઓ, ૪ ને સ્પર્શ કરો, ૩ અવાજ સાંભળો; હાથમાં બરફનો ટુકડો પકડો.',
    },
  },
  {
    id: 'suicidal-thoughts',
    symptomName: {
      en: 'Thoughts of Death & Suicidal Ideation (Educational Overview)',
      hi: 'मृत्यु के विचार और आत्महत्या की भावनाएं (शैक्षणिक अवलोकन)',
      gu: 'આત્મહત્યાના વિચારો અને જીવનનો અંત લાવવાની લાગણી (શિક્ષણાત્મક માહિતી)',
    },
    plainDescription: {
      en: 'Thoughts that life is not worth living, wishes not to wake up in the morning, or recurrent thoughts of wanting to end the unbearable emotional pain. IT IS A SYMPTOM OF ILLNESS, NOT A CHARACTER DEFECT OR WEAKNESS.',
      hi: 'यह महसूस होना कि जिंदगी बोझ बन गई है, सुबह न जागने की इच्छा होना, या असहनीय मानसिक दर्द को खत्म करने के विचार आना। यह किसी बीमारी का एक इलाज योग्य लक्षण है, कोई कमजोरी या पाप नहीं!',
      gu: 'જીવન જીવવા જેવું નથી લાગવું, સવારે જાગવાની ઈચ્છા ન થવી કે અસહ્ય દર્દમાંથી મુક્તિ મેળવવાના વિચારો આવવા. આ એક બીમારીનું લક્ષણ છે, કોઈ કમજોરી નથી!',
    },
    possibleCauses: {
      en: 'Severe Major Depression, Bipolar mixed episodes, Borderline emotional crises, Severe Substance withdrawal, Schizophrenia command hallucinations, or Overwhelming acute life collapse.',
      hi: 'गंभीर डिप्रेशन, बायपोलर डिसऑर्डर, पुराना गहरा सदमा, नशे का गंभीर विड्रॉल, या जीवन में अचानक आया भारी संकट।',
      gu: 'ગંભીર ડિપ્રેશન, બાયપોલર ડિસઓર્ડર, ભારે આઘાત કે જીવનમાં આવેલી અચાનક મોટી મુશ્કેલી.',
    },
    whenToConsult: {
      en: 'IMMEDIATELY. If you or someone you know is having thoughts of suicide, call a crisis helpline right now (Tele-MANAS: 14416 or 1800-891-4416; AASRA: 91-9820466726) or visit the nearest hospital emergency department.',
      hi: 'तुरंत! यदि आपके या किसी परिचित के मन में ऐसे विचार आ रहे हैं, तो तुरंत राष्ट्रीय हेल्पलाइन 14416 या 1800-891-4416 (Tele-MANAS) पर कॉल करें या नजदीकी अस्पताल जाएं।',
      gu: 'તાત્કાલિક! જો તમને કે કોઈ સ્વજનને આવા વિચારો આવતા હોય તો તરત જ ટેલી-માનસ હેલ્પલાઇન 14416 અથવા 1800-891-4416 પર કોલ કરો અથવા નજીકની હોસ્પિટલ પહોંચો.',
    },
    selfCareSupport: {
      en: 'Safety first: do not stay alone. Tell a family member or doctor honestly: "I am having overwhelming thoughts of death and I need medical help right now." Remove all potential means of harm.',
      hi: 'अकेले न रहें। तुरंत किसी परिजन या डॉक्टर को खुलकर बताएं: "मुझे बहुत नकारात्मक विचार आ रहे हैं और मुझे अभी मदद चाहिए।"',
      gu: 'ક્યારેય એકલા ન રહો. તમારા પરિવારજન કે ડૉક્ટરને સાચેસાચું કહી દો કે મને મદદની જરૂર છે. મદદ હંમેશા ઉપલબ્ધ છે.',
    },
  },
];
