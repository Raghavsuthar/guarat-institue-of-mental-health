import { MythFact } from '../types';

export const mythsData: MythFact[] = [
  {
    id: 'weakness',
    category: 'general',
    myth: {
      en: 'Having a psychiatric condition means a person is mentally weak, lazy, or lacking in character.',
      hi: 'मानसिक बीमारी होना यह दर्शाता है कि व्यक्ति कमजोर इरादों वाला, आलसी या मानसिक रूप से कमजोर है।',
      gu: 'માનસિક રોગ થવો એ દર્શાવે છે કે વ્યક્તિ નબળા મનનો, આળસુ કે કાયર છે.',
    },
    fact: {
      en: 'Mental disorders are real, legitimate medical illnesses shaped by complex biological, genetic, and environmental factors.',
      hi: 'मानसिक विकार वास्तविक चिकित्सीय बीमारियां हैं जो मस्तिष्क के न्यूरोबायोलॉजी और तनाव से जुड़ी हैं, किसी की कमजोरी से नहीं।',
      gu: 'માનસિક બીમારીઓ મગજના જૈવિક ફેરફારો અને સામાજિક તણાવથી થતા વાસ્તવિક રોગો છે, કોઈ નબળાઈ નથી.',
    },
    explanation: {
      en: 'Just as diabetes is not caused by weak willpower in the pancreas, depression, bipolar disorder, and schizophrenia are not flaws of personality. They involve alterations in neural circuitry and neurotransmitters and respond to evidence-based medical treatment.',
      hi: 'जैसे डायबिटीज या ब्लड प्रेशर इच्छाशक्ति की कमी से नहीं होते, वैसे ही डिप्रेशन या अन्य मानसिक बीमारियां किसी के चरित्र की कमी नहीं हैं। इनके लिए दवा और डॉक्टर का परामर्श आवश्यक है।',
      gu: 'જેમ ડાયાબિટીસ થવો એ કોઈ ચારિત્ર્યની ખામી નથી, તેમ જ ડિપ્રેશન કે એન્ઝાયટી થવી એ કોઈ મનની નબળાઈ નથી. તે તબીબી સારવારથી સાજી થઈ શકે છે.',
    },
  },
  {
    id: 'schizo-split',
    category: 'general',
    myth: {
      en: 'People with schizophrenia have multiple personalities or a "split personality".',
      hi: 'सिज़ोफ्रेनिया के मरीजों में "दोहरा व्यक्तित्व" (Split Personality) या एक शरीर में कई आत्माएं होती हैं।',
      gu: 'સિઝોફ્રેનિયાના દર્દીઓમાં એક જ શરીરમાં બે અલગ અલગ વ્યક્તિત્વ કે વળગાડ હોય છે.',
    },
    fact: {
      en: 'Schizophrenia has nothing to do with multiple personalities; it is an illness affecting perception and thought organization.',
      hi: 'सिज़ोफ्रेनिया का दोहरे व्यक्तित्व से कोई संबंध नहीं है; यह सोच और वास्तविकता के तारतम्य टूटने का रोग है।',
      gu: 'સિઝોફ્રેનિયાને મલ્ટીપલ પર્સનાલિટી સાથે કોઈ લેવાદેવા નથી; તે વાસ્તવિકતા અને વિચારો વચ્ચેનો તાલમેલ તૂટવાની બીમારી છે.',
    },
    explanation: {
      en: 'The word "schizophrenia" historically meant "split mind," referring to the disconnection between thought, emotion, and reality. Multiple personality disorder is an entirely distinct, rare dissociative condition (Dissociative Identity Disorder).',
      hi: 'सिज़ोफ्रेनिया में व्यक्ति को कानों में आवाजें आना (Hallucinations) या गहरा वहम (Delusions) होता है। इसे सही दवाओं से पूरी तरह शांत किया जा सकता है।',
      gu: 'સિઝોફ્રેનિયામાં દર્દીને કાલ્પનિક અવાજો સંભળાય છે કે વહેમ થાય છે. તે કોઈ ભૂત-પ્રેત નથી, મગજની બીમારી છે જે દવાથી મટી શકે છે.',
    },
  },
  {
    id: 'depression-just-sadness',
    category: 'general',
    myth: {
      en: 'Depression is just normal everyday sadness; anyone can snap out of it if they go for a vacation or think positive.',
      hi: 'डिप्रेशन केवल सामान्य उदासी है; कोई भी इंसान घूमने जाकर या सकारात्मक सोचकर इसे ठीक कर सकता है।',
      gu: 'ડિપ્રેશન એટલે માત્ર સાદી ઉદાસી; ફરવા જવાથી કે પોઝિટિવ વિચારવાથી તરત મટી જાય છે.',
    },
    fact: {
      en: 'Clinical depression is a pervasive, persistent medical condition that impairs sleep, appetite, energy, and cognition.',
      hi: 'क्लिनिकल डिप्रेशन एक गंभीर बीमारी है जो व्यक्ति की नींद, भूख, ऊर्जा और सोचने की क्षमता को हफ्तों या महीनों तक पंगु बना देती है।',
      gu: 'ડિપ્રેશન એક ગંભીર તબીબી સ્થિતિ છે જે ઊંઘ, ભૂખ, શારીરિક શક્તિ અને વિચારવાની ક્ષમતાને અઠવાડિયાઓ સુધી ખોરવી નાખે છે.',
    },
    explanation: {
      en: 'Ordinary sadness passes as circumstances change or with comfort. Depression persists regardless of positive events and robs a person of the biological ability to feel pleasure (anhedonia). Professional medical care is essential.',
      hi: 'सामान्य उदासी अच्छी खबर मिलने या दोस्तों से मिलने पर दूर हो जाती है। लेकिन डिप्रेशन में व्यक्ति खुश होने की क्षमता ही खो बैठता है। इसके लिए इलाज जरूरी है।',
      gu: 'સામાન્ય ઉદાસી સંજોગો બદલાતા દૂર થઈ જાય છે. પરંતુ ડિપ્રેશનમાં મગજમાંથી આનંદ અનુભવવાની ક્ષમતા જ ગાયબ થઈ જાય છે. તેના માટે સારવાર અનિવાર્ય છે.',
    },
  },
  {
    id: 'addiction-willpower',
    category: 'addiction',
    myth: {
      en: 'Addiction is simply a moral failure or lack of discipline; addicts choose to destroy their lives.',
      hi: 'नशा केवल चरित्र की खराबी या अनुशासन की कमी है; नशेड़ी जानबूझकर अपना जीवन बर्बाद करते हैं।',
      gu: 'વ્યસન એ માત્ર ચારિત્ર્યની નબળાઈ છે; નશાખોરો જાણીજોઈને પોતાનું જીવન બરબાદ કરે છે.',
    },
    fact: {
      en: 'Addiction is a chronic, relapsing brain disorder affecting neurological circuits of reward, stress, and impulse inhibition.',
      hi: 'व्यसन मस्तिष्क के न्यूरोलॉजिकल सर्किट की एक क्रोनिक बीमारी है, जो इच्छाशक्ति को कमजोर कर देती है।',
      gu: 'વ્યસન મગજના સંવેદનશીલ ન્યુરોન્સનો એક ક્રોનિક રોગ છે, જે વ્યક્તિના આત્મનિયંત્રણને નબળું પાડી દે છે.',
    },
    explanation: {
      en: 'While the first use may be voluntary, chronic substance exposure physically rewires dopamine pathways and frontal cortical control. Individuals lose the physiological capacity to control intake without medical detoxification and structured therapy.',
      hi: 'लगातार नशा करने से दिमाग के फैसले लेने वाले हिस्से कमजोर हो जाते हैं। व्यक्ति चाहकर भी नशा नहीं रोक पाता। इसलिए उन्हें डांटने के बजाय डॉक्टर के इलाज की जरूरत होती है।',
      gu: 'સતત નશાથી મગજની નિર્ણયશક્તિ ખોરવાઈ જાય છે. વ્યક્તિ ઈચ્છવા છતાં નશો રોકી શકતી નથી. તેથી તેમને સજા આપવા કરતાં ડૉક્ટર પાસે લઈ જવા જરૂરી છે.',
    },
  },
  {
    id: 'seeing-psychiatrist-crazy',
    category: 'general',
    myth: {
      en: 'Seeing a psychiatrist means a person is "crazy" or has completely lost their mind.',
      hi: 'मनोचिकित्सक (Psychiatrist) के पास जाने का मतलब है कि इंसान "पागल" हो चुका है।',
      gu: 'મનોચિકિત્સક (Psychiatrist) પાસે જવાનો અર્થ એ છે કે માણસ "ગાંડો" થઈ ગયો છે.',
    },
    fact: {
      en: 'Psychiatrists treat a broad spectrum of common conditions including stress, insomnia, anxiety, grief, and depression.',
      hi: 'मनोचिकित्सक तनाव, अनिद्रा, चिंता, डिप्रेशन, सिरदर्द और रिश्तों के तनाव जैसी आम समस्याओं का भी इलाज करते हैं।',
      gu: 'મનોચિકિત્સક તણાવ, ઊંઘ ન આવવી, ચિંતા, ડિપ્રેશન જેવી ખૂબ સામાન્ય અને રોજિંદી સમસ્યાઓનું પણ નિદાન અને સારવાર કરે છે.',
    },
    explanation: {
      en: 'The vast majority of people visiting a psychiatrist are working professionals, students, parents, and everyday individuals seeking help for insomnia, worry, low mood, or life transitions. Seeking help is a mature step toward well-being.',
      hi: 'मनोचिकित्सक के पास आने वाले 80-90% लोग सामान्य नौकरीपेशा, छात्र और गृहणियां होती हैं जो अनिद्रा, घबराहट या तनाव का समाधान चाहती हैं। डॉक्टर से मिलना बुद्धिमानी है।',
      gu: 'મનોચિકિત્સક પાસે આવતા મોટાભાગના લોકો સામાન્ય નોકરીયાત, વિદ્યાર્થીઓ અને ગૃહિણીઓ હોય છે જે ઊંઘ કે ચિંતાની સારવાર લે છે.',
    },
  },
  {
    id: 'therapy-just-talking',
    category: 'therapy',
    myth: {
      en: 'Psychotherapy is just expensive chatting that anyone could do with a friend or family member.',
      hi: 'साइकोथेरेपी सिर्फ एक महंगी गपशप है, इससे बेहतर तो किसी दोस्त से बात कर लेना है।',
      gu: 'સાયકોથેરાપી એટલે માત્ર મોંઘી વાતો, એના કરતાં કોઈ મિત્ર સાથે વાત કરી લેવી સારી.',
    },
    fact: {
      en: 'Evidence-based psychotherapy is structured, objective, scientifically validated clinical treatment.',
      hi: 'मनोवैज्ञानिक थेरेपी एक वैज्ञानिक और व्यवस्थित चिकित्सा है जो मस्तिष्क के सोचने के तरीकों को बदलती है।',
      gu: 'સાયકોથેરાપી એક વ્યવસ્થિત અને વૈજ્ઞાનિક તબીબી પદ્ધતિ છે જે વિચારવાની રીતને સકારાત્મક બનાવે છે.',
    },
    explanation: {
      en: 'Friends offer personal opinions and emotional closeness, but a trained clinical psychologist or psychiatrist uses specialized neurocognitive techniques (like CBT, ERP, DBT) to rewire maladaptive thinking patterns without personal bias or judgment.',
      hi: 'दोस्त अपनी राय दे सकते हैं, लेकिन एक प्रशिक्षित थेरेपिस्ट निष्पक्ष रहकर वैज्ञानिक तकनीकों (जैसे CBT) से आपके अवचेतन विचारों और व्यवहार को ठीक करता है।',
      gu: 'મિત્રો પોતાની અંગત સલાહ આપે છે, જ્યારે નિષ્ણાત ડૉક્ટર વૈજ્ઞાનિક પદ્ધતિઓથી દર્દીના મનમાં ચાલતા ઊંડા ભય અને ટેવોને સુધારે છે.',
    },
  },
  {
    id: 'children-depression',
    category: 'children',
    myth: {
      en: 'Children have no responsibilities, so they cannot suffer from mental health conditions like depression or anxiety.',
      hi: 'बच्चों को कोई जिम्मेदारी या तनाव नहीं होता, इसलिए उन्हें डिप्रेशन या मानसिक बीमारी नहीं हो सकती।',
      gu: 'બાળકોને વળી શેની ચિંતા હોય? બાળકોને ક્યારેય ડિપ્રેશન કે માનસિક રોગ ન થઈ શકે.',
    },
    fact: {
      en: 'Children and adolescents can and do experience anxiety, depression, ADHD, OCD, and mood difficulties.',
      hi: 'बच्चों और किशोरों में भी चिंता, डिप्रेशन, एडीएचडी (ADHD) और व्यवहार संबंधी समस्याएं हो सकती हैं।',
      gu: 'બાળકો અને કિશોરોમાં પણ ચિંતા, ડિપ્રેશન, ADHD અને વર્તણૂકની સમસ્યાઓ જોવા મળે છે.',
    },
    explanation: {
      en: 'In children, depression often manifests differently than in adults — such as unexplained irritability, sudden drop in academic grades, frequent stomachaches or headaches, school refusal, and withdrawal from play.',
      hi: 'बच्चों में डिप्रेशन उदासी के बजाय चिड़चिड़ेपन, स्कूल जाने से डरने, पेट दर्द की शिकायतों या पढ़ाई में अचानक पिछड़ने के रूप में सामने आता है। इसे समझना जरूरी है।',
      gu: 'બાળકોમાં ડિપ્રેશન ઘણીવાર ચીડિયાપણું, શાળાએ ન જવું, પેટમાં દુખાવાની વારંવાર ફરિયાદો કે ભણવામાં ધ્યાન ન લાગવા સ્વરૂપે દેખાય છે.',
    },
  },
  {
    id: 'mentally-ill-dangerous',
    category: 'general',
    myth: {
      en: 'People with mental illness are violent, unpredictable, and dangerous to society.',
      hi: 'मानसिक बीमारी से पीड़ित सभी लोग हिंसक, खतरनाक और समाज के लिए नुकसानदेह होते हैं।',
      gu: 'માનસિક રોગ ધરાવતા તમામ લોકો હિંસક, ખતરનાક અને જોખમી હોય છે.',
    },
    fact: {
      en: 'The vast majority of individuals with psychiatric conditions are non-violent and gentle.',
      hi: 'अधिकांश मनोरोगी पूरी तरह शांत होते हैं और कभी किसी को कोई नुकसान नहीं पहुंचाते।',
      gu: 'મોટાભાગના દર્દીઓ અત્યંત શાંત અને સૌમ્ય હોય છે અને ક્યારેય કોઈને નુકસાન કરતા નથી.',
    },
    explanation: {
      en: 'Pop culture and cinema sensationalize mental illness. Clinical data consistently shows that individuals with mental illness are over 10 times more likely to be victims of violent crime, abuse, and discrimination than perpetrators.',
      hi: 'फिल्में मनोरोगियों को गलत तरीके से हिंसक दिखाती हैं। वास्तव में, वे खुद समाज में भेदभाव, उपेक्षा और शोषण के शिकार होते हैं। उन्हें डर की नहीं, सहारे की जरूरत होती है।',
      gu: 'સિનેમા અને નાટકોમાં ખોટો ભય ફેલાવાય છે. હકીકતમાં આવા દર્દીઓ પોતે સમાજના અન્યાય અને શોષણનો ભોગ બનતા હોય છે. તેમને ડરની નહીં, હૂંફની જરૂર હોય છે.',
    },
  },
  {
    id: 'ect-barbaric',
    category: 'therapy',
    myth: {
      en: 'ECT ("shock therapy") is an archaic, painful torture that damages the brain and erases all memories.',
      hi: 'ईसीटी ("शॉक थेरेपी") एक दर्दनाक और क्रूर सजा है जिससे दिमाग खराब हो जाता है और सारी याददाश्त चली जाती है।',
      gu: 'ECT ("શૉક થેરાપી") એક ક્રૂર અને પીડાદાયક સજા છે જેનાથી મગજ બગડી જાય છે અને યાદશક્તિ કાયમ માટે જતી રહે છે.',
    },
    fact: {
      en: 'Modern modified ECT is performed under full general anesthesia with muscle relaxants; it is completely painless, safe, and lifesaving.',
      hi: 'आधुनिक ईसीटी पूरी बेहोशी (Anesthesia) और मांसपेशियों को शिथिल करके दी जाती है; यह पूरी तरह दर्द-रहित, अत्यंत सुरक्षित और जीवनरक्षक है।',
      gu: 'આધુનિક ECT સંપૂર્ણ બેભાન કરીને અપાય છે; તે જરાય પીડાદાયક નથી, સંપૂર્ણપણે સુરક્ષિત છે અને ગંભીર દર્દીઓ માટે જીવનદાન સમાન છે.',
    },
    explanation: {
      en: 'In modern clinical psychiatry, modified ECT has an 80%+ response rate in severe treatment-resistant depression, acute catatonia, and suicidal crises. The patient feels zero pain and is asleep throughout. Mild temporary short-term memory blunting resolves within weeks.',
      hi: 'गंभीर डिप्रेशन और जब मरीज खाना-पीना छोड़ दे, तब ईसीटी सबसे तेज असर करने वाला वैज्ञानिक इलाज है। फिल्मों में दिखाई जाने वाली तड़प पूरी तरह काल्पनिक और झूठी है।',
      gu: 'જ્યારે કોઈ દવા કામ ન કરતી હોય કે દર્દી ખાવા-પીવાનું બંધ કરી દે, ત્યારે ECT સૌથી ઝડપી અને અકસીર સાબિત થાય છે. ફિલ્મોમાં દેખાડવામાં આવતી ક્રૂરતા સાવ ઉપજાવી કાઢેલી છે.',
    },
  },
  {
    id: 'adhd-lazy-bad-parenting',
    category: 'children',
    myth: {
      en: 'ADHD is not real; it is just an excuse for poorly disciplined children or lazy, unmotivated adults.',
      hi: 'एडीएचडी (ADHD) कोई बीमारी नहीं है; यह केवल बच्चों की बदतमीजी, खराब परवरिश या आलसी वयस्कों का बहाना है।',
      gu: 'ADHD કોઈ રોગ નથી; તે માત્ર બાળકોની તોફાની વૃત્તિ, ખરાબ ઉછેર કે આળસુ લોકોનું બહાનું છે.',
    },
    fact: {
      en: 'ADHD is a well-established, highly heritable neurodevelopmental condition involving dopamine and norepinephrine pathways in executive control networks.',
      hi: 'एडीएचडी एक वास्तविक न्यूरोडेवलपमेंटल बीमारी है, जिसमें मस्तिष्क के एकाग्रता और नियंत्रण वाले रसायनों (डोपामिन) में असंतुलन होता है।',
      gu: 'ADHD એ મગજના ધ્યાન અને એકાગ્રતા નિયંત્રિત કરતા રસાયણોમાં અસંતુલનને કારણે થતો વાસ્તવિક જૈવિક રોગ છે.',
    },
    explanation: {
      en: 'Neuroimaging clearly demonstrates structural and functional differences in the prefrontal cortex and basal ganglia of individuals with ADHD. Punishing or shaming someone with ADHD does not fix dopamine signaling; structured behavioral therapy and medications do.',
      hi: 'बच्चे या वयस्क को डांटने या शर्मिंदा करने से एडीएचडी ठीक नहीं होता। सही थेरेपी और दवाओं से उनकी कार्यक्षमता और एकाग्रता पूरी तरह सामान्य हो सकती है।',
      gu: 'બાળકને શિક્ષા કરવાથી કે ધમકાવવાથી આ રોગ મટતો નથી. સાયકોલોજિકલ થેરાપી અને યોગ્ય દવાથી દર્દી ઉત્તમ પરિણામ લાવી શકે છે.',
    },
  },
  {
    id: 'eating-disorders-vanity',
    category: 'general',
    myth: {
      en: 'Eating disorders are just vanity, shallow dieting obsessions, or seeking attention.',
      hi: 'खानपान के विकार (जैसे एनोरेक्सिया या बुलिमिया) केवल सुंदर दिखने का घमंड, डाइटिंग का शौक या दिखावा हैं।',
      gu: 'ઈટિંગ ડિસઓર્ડર (ઓછું ખાવું કે ઊલટી કરવી) એ માત્ર સુંદર દેખાવાનો શોખ, ક્રેઝી ડાઇટિંગ કે દેખાડો છે.',
    },
    fact: {
      en: 'Eating disorders are severe, potentially fatal psychiatric illnesses with complex biological and genetic etiologies.',
      hi: 'खानपान विकार गंभीर और जानलेवा मानसिक बीमारियां हैं जिनकी मृत्यु दर सभी मनोरोगों में सबसे अधिक होती है।',
      gu: 'ઈટિંગ ડિસઓર્ડર જીવલેણ માનસિક બીમારીઓ છે જેમાં મનોરોગોમાં સૌથી વધુ મૃત્યુદર જોવા મળે છે.',
    },
    explanation: {
      en: 'Anorexia and Bulimia involve severe neurobiological dysregulation of reward, satiety, and anxiety systems. Patients suffer intense cognitive terror around food. Without medical and psychiatric care, cardiac arrest, electrolyte failure, and organ damage can occur.',
      hi: 'यह कोई मर्जी से की जाने वाली डाइटिंग नहीं है; मरीज के दिमाग में खाने को लेकर गहरा खौफ बैठ जाता है। इसमें दिल का दौरा, इलेक्ट्रोलाइट्स की कमी और अंगों के खराब होने का गंभीर खतरा रहता है।',
      gu: 'આ સ્વેચ્છાએ કરેલું ડાઇટિંગ નથી; દર્દીના મનમાં વજન વધવાનો અસહ્ય ડર હોય છે. સમયસર સારવાર ન મળે તો હૃદય બંધ પડી જવાનું જોખમ રહે છે.',
    },
  },
  {
    id: 'ocd-cleanliness',
    category: 'general',
    myth: {
      en: 'OCD is just a quirk about keeping your desk tidy, color-coding notes, and liking cleanliness.',
      hi: 'ओसीडी (OCD) का मतलब सिर्फ साफ-सफाई रखना, चीजों को तरतीब से लगाना या थोड़ा परफेक्शनिस्ट होना है।',
      gu: 'OCD એટલે માત્ર ઘર ચોખ્ખું રાખવું, વ્યવસ્થિત રહેવું કે વસ્તુઓ લાઈનમાં ગોઠવવાની સારી ટેવ.',
    },
    fact: {
      en: 'OCD is a profoundly distressing, exhausting anxiety disorder driven by intrusive, terrifying obsessions and compulsive rituals.',
      hi: 'ओसीडी एक अत्यंत पीड़ादायक मानसिक बीमारी है, जिसमें डरावने और अनचाहे विचार (Obsessions) इंसान को लगातार परेशान करते हैं।',
      gu: 'OCD એ અત્યંત ત્રાસદાયક માનસિક વિકાર છે જેમાં ડરામણા અને અણગમતા વિચારો દર્દીનું જીવન નરક જેવું બનાવી દે છે.',
    },
    explanation: {
      en: 'Saying "I am so OCD" trivializes an agonizing condition. People with OCD do not enjoy their rituals (such as washing hands until bleeding or checking locks 50 times); they perform them in desperate, exhausting attempts to neutralize intense anxiety.',
      hi: 'ओसीडी से पीड़ित व्यक्ति साफ-सफाई का आनंद नहीं लेता, बल्कि वह अपने दिमाग में चल रहे भयानक डर (जैसे किसी अपने की मौत या बीमारी) को शांत करने के लिए घंटों हाथ धोता रहता है।',
      gu: 'OCD નો દર્દી સ્વચ્છતાનો આનંદ નથી માણતો; તે મગજમાં આવતા ભયાનક વહેમને શાંત કરવા કલાકો સુધી હાથ ધોઈને ચામડી પણ છોલી નાખે છે. તેને સહાનુભૂતિની જરૂર હોય છે.',
    },
  },
  {
    id: 'suicide-talking-encourages',
    category: 'general',
    myth: {
      en: 'Asking someone directly if they are having suicidal thoughts will give them the idea or push them over the edge.',
      hi: 'किसी दुखी व्यक्ति से सीधे पूछना कि क्या उसके मन में आत्महत्या के विचार आ रहे हैं, उसे आत्महत्या करने के लिए उकसा सकता है।',
      gu: 'કોઈ નિરાશ વ્યક્તિને આપઘાતના વિચારો આવે છે કે નહીં તેવું પૂછવાથી તેને આપઘાત કરવાનું પ્રોત્સાહન મળે છે.',
    },
    fact: {
      en: 'Asking directly, calmly, and non-judgmentally reduces distress, breaks isolation, and saves lives.',
      hi: 'खुले दिल और सहानुभूति से सीधे पूछने से व्यक्ति का अकेलापन टूटता है, उसे राहत मिलती है और उसकी जान बचती है।',
      gu: 'પ્રેમપૂર્વક અને સીધેસીધું પૂછવાથી દર્દીનો બોજ હળવો થાય છે, તેને મદદ મળે છે અને તેનું જીવન બચી શકે છે.',
    },
    explanation: {
      en: 'Extensive global research proves that discussing suicide openly does NOT plant the idea in someone\'s head. In fact, it communicates care, provides immense relief, and opens the door for lifesaving psychiatric intervention.',
      hi: 'वैज्ञानिक शोध साबित करते हैं कि आत्महत्या के बारे में पूछने से किसी के मन में यह विचार पैदा नहीं होता। बल्कि मरीज को लगता है कि कोई उसकी तकलीफ समझ रहा है और वह मदद स्वीकार करता है।',
      gu: 'વિશ્વભરના સંશોધનો જણાવે છે કે આપઘાત વિશે સીધું પૂછવાથી કોઈ આવું પગલું નથી ભરતું, પરંતુ દર્દીને લાગે છે કે કોઈ તેનું દર્દ સમજે છે અને તે ડૉક્ટર પાસે જવા તૈયાર થાય છે.',
    },
  },
  {
    id: 'personality-disorders-untreatable',
    category: 'therapy',
    myth: {
      en: 'People with personality disorders (like Borderline) are manipulative, untreatable, and cannot ever change.',
      hi: 'पर्सनालिटी डिसऑर्डर (जैसे बॉर्डरलाइन) के मरीज केवल नौटंकी या चालाकी करते हैं और इनका कभी कोई इलाज संभव नहीं है।',
      gu: 'પર્સનાલિટી ડિસઓર્ડરના દર્દીઓ માત્ર ઢોંગ કરે છે અને તેમનો કોઈ ઈલાજ ક્યારેય શક્ય નથી.',
    },
    fact: {
      en: 'Personality disorders respond robustly to evidence-based specialized psychotherapies like DBT, schema therapy, and MBT.',
      hi: 'पर्सनालिटी डिसऑर्डर विशेष प्रकार की मनोवैज्ञानिक थेरेपी (जैसे DBT - डायलेक्टिकल बिहेवियर थेरेपी) से पूरी तरह सुधर सकते हैं।',
      gu: 'પર્સનાલિટી ડિસઓર્ડર ખાસ થેરાપી (જેમ કે DBT) થી સંપૂર્ણપણે સુધરી શકે છે અને દર્દી સ્થિર જીવન જીવી શકે છે.',
    },
    explanation: {
      en: 'Emotional dysregulation stems from a combination of neurobiological vulnerability and early developmental trauma. Longitudinal research shows that over 85% of individuals with Borderline Personality Disorder achieve stable clinical remission with structured psychotherapy.',
      hi: 'यह कोई जानबूझकर किया गया नाटक नहीं है; यह बचपन के सदमे और भावनाओं को नियंत्रित करने की असमर्थता का परिणाम है। सही थेरेपी से 85% से अधिक मरीज पूरी तरह सामान्य जीवन जीते हैं।',
      gu: 'આ કોઈ ઈરાદાપૂર્વક કરેલો ઢોંગ નથી પણ બાળપણના આઘાતનું પરિણામ છે. યોગ્ય સાયકોથેરાપીથી ૮૫% થી વધુ દર્દીઓ એકદમ સામાન્ય અને સુખી જીવન જીવી શકે છે.',
    },
  },
];
