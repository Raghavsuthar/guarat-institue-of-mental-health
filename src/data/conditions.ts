import { Condition } from '../types';
import { newConditionsData } from './newConditions';
import { newConditionsBatch2 } from './newConditionsBatch2';
import { newConditionsBatch3 } from './newConditionsBatch3';
import { newConditionsBatch4 } from './newConditionsBatch4';

const baseConditionsData: Condition[] = [
  {
    id: 'depression',
    youtubeVideoId: 'lQhpetkwWnM',
    slug: 'major-depressive-disorder',
    category: 'mood',
    conditionIcon: 'depression',
    name: {
      en: 'Major Depressive Disorder (Depression)',
      hi: 'मेजर डिप्रेसिव डिसऑर्डर (अवसाद / डिप्रेशन)',
      gu: 'મેજર ડિપ્રેશન (ડિપ્રેશન / ગંભીર ઉદાસીનતા)',
    },
    medicalTerms: {
      en: 'Clinical Depression, Unipolar Depression',
      hi: 'क्लिनिकल डिप्रेशन (Clinical Depression), यूनीपोलर डिप्रेशन',
      gu: 'ક્લિનિકલ ડિપ્રેશન (Clinical Depression)',
    },
    overview: {
      en: 'Major Depressive Disorder (MDD, ICD-11: 6A70, DSM-5-TR) is a serious, debilitating, yet highly treatable medical illness characterized by persistent low mood, pervasive anhedonia (loss of interest or pleasure), neurovegetative symptoms (profound alterations in sleep, appetite, energy, and psychomotor speed), and distorted negative cognitions of worthlessness and hopelessness lasting for at least two weeks. Far from ordinary sadness, grief, or a temporary emotional slump, clinical depression is a systemic neurobiological disorder involving disrupted neural circuits in the prefrontal cortex and limbic system, monoaminergic neurotransmitter dysregulation, chronic neuroinflammation, and stress-axis overdrive.',
      hi: 'मेजर डिप्रेसिव डिसऑर्डर (अवसाद / डिप्रेशन) एक गंभीर, कमजोर कर देने वाली, लेकिन पूरी तरह से उपचार योग्य चिकित्सा बीमारी है। इसमें कम से कम दो सप्ताह या उससे अधिक समय तक लगातार गहरा उदासी भरा मूड, हर काम में रुचि और आनंद का खत्म हो जाना (Anhedonia), अत्यधिक शारीरिक व मानसिक थकान, नींद और भूख में भारी बदलाव, और स्वयं को बेकार या अपराधी समझने जैसे नकारात्मक विचार बने रहते हैं। यह कोई सामान्य उदासी, शोक या इच्छाशक्ति की कमी नहीं है; बल्कि मस्तिष्क के न्यूरोट्रांसमीटर, तंत्रिका नेटवर्क और तनाव प्रणाली से जुड़ी एक वास्तविक शारीरिक और मानसिक बीमारी है।',
      gu: 'મેજર ડિપ્રેશન (ગંભીર ઉદાસીનતા / ડિપ્રેશન) એ એક ગંભીર છતાં સંપૂર્ણપણે સારવાર યોગ્ય તબીબી બીમારી છે. જેમાં સતત ઓછામાં ઓછા બે અઠવાડિયા સુધી ગંભીર ઉદાસી, ખાલીપો, કોઈ પણ પ્રવૃત્તિમાં રસ કે આનંદ ન આવવો (Anhedonia), અતિશય શારીરિક થાક, ઊંઘ અને ભૂખમાં મોટો ફેરફાર તેમજ પોતે નકામા કે અપરાધી હોવાના વિચારો આવ્યા કરે છે. આ કોઈ સામાન્ય દુઃખ, ક્ષણિક ઉદાસી કે નબળું મનોબળ નથી; પરંતુ મગજના રસાયણો અને જ્ઞાનતંતુઓના જોડાણમાં ખલેલ પહોંચવાને કારણે થતી વાસ્તવિક જૈવિક બીમારી છે.',
    },
    illustrativeExamples: [
      {
        en: 'Priya, a 34-year-old software architect and mother of two in Surat, experienced a gradual descent into profound darkness over three months following a major work deadline. Once full of vitality, enthusiastic about coding, and actively engaged in evening playtime with her young children, she found herself completely drained of energy. Waking up in the morning felt like lifting hundreds of pounds of lead; basic self-care tasks like showering and brushing her teeth demanded monumental willpower. Food tasted bland, and she unintentionally lost five kilograms. At her office, she stared blankly at lines of code for hours without comprehending them, missed critical client presentations, and felt agonizing guilt. Every night she woke up bolt upright at 3:00 AM with cold panic, bombarded by intrusive thoughts: "I am failing as a mother, I am failing at my job, and my family would be better off without me." Her family advised her to "stay strong, meditate, and think positive," which only deepened her despair and loneliness. Recognizing her silent suffering, her husband brought her to a psychiatrist. A clinical assessment and blood tests ruled out hypothyroidism, confirming a severe Major Depressive Episode. Priya was prescribed an SSRI antidepressant alongside Cognitive Behavioral Therapy (CBT) to restructure automatic negative thoughts and guide gradual behavioral reactivation. Within six weeks, her sleep stabilized and the heavy mental fog dissipated. By month three, Priya had completely regained her professional clarity, joyful connection with her children, and zest for life.',
        hi: 'सूरत में रहने वाली 34 वर्षीय सॉफ्टवेयर इंजीनियर और दो बच्चों की मां, प्रिया, एक बड़े प्रोजेक्ट के बाद धीरे-धीरे गंभीर अवसाद के अंधेरे में घिरती चली गई। जो प्रिया पहले ऊर्जा से भरपूर रहती थी, ऑफिस में कोडिंग पसंद करती थी और शाम को बच्चों के साथ खेलती थी, उसकी ऊर्जा पूरी तरह समाप्त हो गई। सुबह बिस्तर से उठना सैकड़ों किलो का बोझ उठाने जैसा लगता था; नहाना और तैयार होना भी एक पहाड़ जैसा काम लगने लगा। खाने का स्वाद खत्म हो गया और बिना किसी डाइटिंग के उसका 5 किलो वजन कम हो गया। ऑफिस में वह स्क्रीन के सामने घंटों बैठी रहती लेकिन कुछ समझ नहीं आता था। हर रात 3:00 बजे उसकी नींद खुल जाती और घबराहट के साथ मन में लगातार विचार आते: "मैं एक बुरी मां हूं, मेरा करियर खत्म हो गया है और सब पर एक बोझ बन चुकी हूं।" रिश्तेदारों ने कहा "सकारात्मक सोचो और मंदिर जाओ," जिससे उसका अपराधबोध और बढ़ गया। उसकी गंभीर हालत देखकर पति उसे मनोचिकित्सक के पास ले गए। जांच में थायरॉयड सामान्य निकला और डिप्रेशन का निदान हुआ। डॉक्टर ने आधुनिक एंटीडिप्रेसेंट दवा और कॉग्निटिव बिहेवियरल थेरेपी (CBT) शुरू की। लगभग 6 हफ्तों में प्रिया की नींद सुधर गई, सुबह का भारीपन खत्म हुआ और तीन महीने में वह अपने काम और बच्चों के साथ अपनी पुरानी खुशहाल जिंदगी में लौट आई।',
        gu: 'સુરતમાં રહેતી ૩૪ વર્ષીય સોફ્ટવેર એન્જિનિયર અને બે બાળકોની માતા પ્રિયા એક મહત્વના પ્રોજેક્ટ પછી ધીમે ધીમે ઊંડા ડિપ્રેશનમાં સરી પડી. જે પ્રિયા હંમેશા ખુશમિજાજ રહેતી, ઉત્સાહથી નોકરી કરતી અને સાંજે બાળકો સાથે રમતી, તેની બધી શક્તિ સાવ હણાઈ ગઈ. સવારે પથારીમાંથી ઊભા થવું લોઢાના વજન ઊંચકવા જેવું લાગતું; નહાવું કે તૈયાર થવું પણ પહાડ જેવું કામ લાગવા માંડ્યું. ખોરાકમાંથી સ્વાદ જતો રહ્યો અને દોઢ મહિનામાં પાંચ કિલો વજન ઘટી ગયું. ઑફિસમાં તે કલાકો સુધી કમ્પ્યુટર સ્ક્રીન સામે જોતી રહેતી પણ કામ નહોતું થઈ શકતું. દરરોજ રાત્રે ૩ વાગ્યે ગભરાટ સાથે તેની ઊંઘ ઊડી જતી અને મનમાં સતત વિચારો આવતા: "હું ખરાબ માતા છું, મારું જીવન નકામું છે અને પરિવાર પર હું મોટો બોજ બની ગઈ છું." સગાંઓએ કહ્યું કે "હિંમત રાખ, હકારાત્મક વિચાર," જેનાથી તેનો અપરાધભાવ વધી ગયો. તેના પતિ તેને તાત્કાલિક મનોચિકિત્સક પાસે લઈ ગયા. લેબ તપાસ બાદ ગંભીર ડિપ્રેશનનું નિદાન થયું. ડૉક્ટરે યોગ્ય એન્ટીડિપ્રેશન દવા અને CBT કાઉન્સેલિંગ શરૂ કર્યું. દોઢ મહિનામાં તેની ઊંઘ નિયમિત થઈ, મગજનો ભારે બોજ દૂર થયો અને ત્રણ મહિનામાં પ્રિયા સંપૂર્ણ સ્વસ્થ થઈ પોતાની કારકિર્દી અને પરિવારમાં ફરી હસતી-રમતી થઈ ગઈ.',
      },
      {
        en: 'Ramesh, a 58-year-old government administrative clerk in Jaipur, presented not with overt tearfulness or sorrow, but with relentless physical exhaustion, chronic non-specific epigastric distress, and debilitating diffuse muscle tension. Over six months, he visited multiple gastroenterologists and cardiologists, undergoing endoscopies, cardiac stress tests, and imaging that all returned entirely normal. At home, Ramesh withdrew from his evening chai gatherings with neighbors, felt a pervasive sense of heaviness in his limbs, and woke at 4:00 AM every morning unable to resume sleep. He believed he was simply aging prematurely or suffering from an elusive occult physical ailment. When his family physician observed his psychomotor slowing and flat emotional affect, he gently explained that untreated neurochemical depression frequently manifests as physical pain and vegetative depletion in Indian clinical settings. Ramesh was referred to a consultation-liaison psychiatrist who formulated moderate unipolar depression with prominent somatic features. Started on an SNRI (Duloxetine) alongside behavioral activation focused on gentle morning walks and gradual re-engagement in social routines, Ramesh observed his chronic body aches easing within four weeks, followed by restorative sleep and renewed interest in his household responsibilities.',
        hi: 'जयपुर के 58 वर्षीय सरकारी लेखा लिपिक रमेश बाबू को उदासी या रोने के बजाय लगातार असहनीय शारीरिक थकान, पेट में अजीब भारीपन और पूरे शरीर की मांसपेशियों में अकड़न की शिकायत थी। छह महीनों में उन्होंने कई पेट रोग विशेषज्ञों और हृदय रोग विशेषज्ञों को दिखाया, एंडोस्कोपी और कई टेस्ट कराए, लेकिन सभी रिपोर्ट सामान्य आईं। घर पर रमेश जी ने शाम को पड़ोसियों के साथ चाय पीना बंद कर दिया, उनके हाथ-पैर भारी रहने लगे और रोज सुबह 4 बजे नींद टूट जाती थी। उन्हें लगता था कि वे बस बूढ़े हो रहे हैं या उन्हें कोई लाइलाज शारीरिक रोग है। जब उनके फैमिली डॉक्टर ने उनके चेहरे के भावहीनपन और धीमी चाल को देखा, तो उन्होंने समझाया कि डिप्रेशन अक्सर शारीरिक दर्द और कमजोरी के रूप में सामने आता है। मनोचिकित्सक ने सोमैटिक डिप्रेशन का निदान किया और SNRI दवा तथा सुबह की सैर एवं सक्रियता की थेरेपी शुरू की। चार हफ्तों में रमेश जी के शरीर का दर्द खत्म हुआ, रात की नींद लौटी और वे फिर से ऊर्जावान महसूस करने लगे।',
        gu: 'જયપુરના ૫૮ વર્ષીય સરકારી કર્મચારી રમેશભાઈને કોઈ સ્પષ્ટ રડવું કે ઉદાસી નહોતી, પરંતુ સતત અસહ્ય શારીરિક થાક, પેટમાં અસ્વસ્થતા અને આખા શરીરમાં સ્નાયુઓનો દુખાવો રહેતો હતો. છ મહિનામાં તેમણે અસંખ્ય ગેસ્ટ્રોએન્ટેરોલોજિસ્ટ અને કાર્ડિયોલોજિસ્ટની મુલાકાત લીધી, એન્ડોસ્કોપી અને કાર્ડિયાક ટેસ્ટ કરાવ્યા જે સંપૂર્ણ નોર્મલ આવ્યા. ઘરે રમેશભાઈએ સાંજે મિત્રો સાથે બેસવાનું બંધ કરી દીધું, હાથ-પગમાં અતિશય ભારેપણું લાગતું અને દરરોજ વહેલી સવારે ૪ વાગ્યે ઊંઘ ઊડી જતી. તેમને લાગતું હતું કે તેમને કોઈ ગંભીર શારીરિક બીમારી છે. ફેમિલી ડૉક્ટરે તેમના સુસ્ત હલનચલન અને ચહેરા પરના શૂન્યાવકાશને ઓળખીને સમજાવ્યું કે ડિપ્રેશન ઘણીવાર શારીરિક પીડા અને થાક સ્વરૂપે પ્રગટ થાય છે. મનોચિકિત્સકે તપાસ બાદ SNRI દવા અને વ્યવહારિક સક્રિયતા (Behavioral Activation) શરૂ કરી. ચાર અઠવાડિયામાં તેમનો શારીરિક દુખાવો ઓછો થયો, શાંત ઊંઘ પાછી આવી અને તેઓ ફરીથી આનંદપૂર્વક રોજિંદા જીવનમાં જોડાયા.',
      },
      {
        en: 'Aarav, a 20-year-old computer science undergraduate in Pune, surprised his family when his academic performance plummeted and his normally cooperative demeanor turned intensely irritable and hostile. Rather than appearing sad, Aarav slammed doors, yelled at minor requests from his parents, and spent entire days sequestered in his darkened room scrolling aimlessly on his phone. He lost interest in university hackathons, stopped attending classes, and reported feeling completely hollow, apathetic, and emotionally numb. When confronted about missing exams, he felt an agonizing internal sense of worthlessness, believing he was an irredeemable disappointment to his family. A university student counselor recognized that adolescent and young adult depression often manifests as irritable dysphoria, loss of hedonic drive, and academic withdrawal rather than classical adult melancholia. With Aarav\'s consent, the counselor facilitated an outpatient psychiatric evaluation. Aarav was initiated on an SSRI (Sertraline) paired with youth-focused cognitive behavioral psychotherapy to rebuild self-esteem, challenge catastrophic perfectionism, and establish structured daily routines. Within eight weeks, Aarav\'s volatile irritability subsided, his academic motivation returned, and he successfully passed his semester exams while reconnecting warmly with his college peers.',
        hi: 'पुणे के 20 वर्षीय कंप्यूटर साइंस के छात्र आरव के व्यवहार में अचानक तब बदलाव आया जब उसके परीक्षा परिणाम गिरने लगे और उसका स्वभाव बेहद चिड़चिड़ा और गुस्सैल हो गया। उदास दिखने के बजाय, आरव बात-बात पर दरवाजे पटकने लगा, माता-पिता पर चिल्लाने लगा और अंधेरे कमरे में अकेले बैठकर फोन स्क्रॉल करने लगा। कोडिंग प्रतियोगिताओं में उसकी रुचि खत्म हो गई, कॉलेज जाना बंद हो गया और उसने बताया कि वह अंदर से पूरी तरह खाली और सुन्न महसूस करता है। कॉलेज काउंसलर ने पहचाना कि युवाओं में डिप्रेशन अक्सर रोने के बजाय चिड़चिड़ेपन, अत्यधिक गुस्से और पढ़ाई से दूरी के रूप में सामने आता है। काउंसलर की मदद से आरव को मनोचिकित्सक के पास ले जाया गया। डॉक्टर ने SSRI दवा और कॉग्निटिव बिहेवियरल थेरेपी शुरू की, जिससे आरव के मन से असफलता का डर दूर हुआ और दिनचर्या सुधरी। दो महीने के भीतर उसका गुस्सा शांत हुआ, पढ़ाई में मन लगने लगा और उसने अपनी सेमेस्टर परीक्षा अच्छे अंकों से पास की।',
        gu: 'પુણેના ૨૦ વર્ષીય કમ્પ્યુટર સાયન્સના વિદ્યાર્થી આરવના વર્તનમાં અચાનક મોટો પલટો આવ્યો જ્યારે તેના અભ્યાસમાં પરિણામો બગડ્યા અને તેનો સ્વભાવ અત્યંત ચીડિયો અને ગુસ્સાવાળો બની ગયો. ઉદાસ દેખાવાને બદલે આરવ નાની નાની વાતોમાં દરવાજા પછાડતો, માતા-પિતા પર બૂમો પાડતો અને અંધારા ઓરડામાં એકલો પડી રહીને ફોન જોયા કરતો. તેણે કોલેજ જવાનું અને મિત્રો સાથે હળવા-મળવાનું સાવ બંધ કરી દીધું અને જણાવ્યું કે તે અંદરથી સાવ ખાલીપો અનુભવે છે. કોલેજના કાઉન્સેલરે ઓળખી કાઢ્યું કે યુવાનોમાં ડિપ્રેશન ઘણીવાર રડવાને બદલે ચીડિયાપણું, અતિશય ક્રોધ અને શૈક્ષણિક પછડાટના રૂપમાં બહાર આવે છે. મનોચિકિત્સક દ્વારા મૂલ્યાંકન પછી યોગ્ય દવા (SSRI) અને CBT થેરાપી શરૂ કરવામાં આવી. આઠ અઠવાડિયામાં આરવનો ગુસ્સો શાંત થયો, અભ્યાસમાં એકાગ્રતા પાછી આવી અને તેણે સફળતાપૂર્વક પોતાની સેમેસ્ટર પરીક્ષાઓ પાસ કરી.',
      },
    ],
    commonSymptoms: {
      en: [
        'Persistent sad, empty, or irritable mood lasting for at least 2 weeks',
        'Marked loss of interest or pleasure in activities once enjoyed (anhedonia)',
        'Significant changes in appetite or weight (unintentional loss or gain)',
        'Insomnia (difficulty sleeping) or hypersomnia (excessive sleeping)',
        'Fatigue, exhaustion, or low energy nearly every day',
        'Feelings of worthlessness or excessive, inappropriate guilt',
        'Difficulty thinking, concentrating, or making everyday decisions',
        'Recurrent thoughts of death or suicidal ideas',
      ],
      hi: [
        'लगातार 2 सप्ताह या उससे अधिक समय तक उदासी, खालीपन या चिड़चिड़ापन रहना',
        'पसंदीदा गतिविधियों और शौक में रुचि पूरी तरह खत्म हो जाना (Anhedonia)',
        'भूख या वजन में अचानक अनपेक्षित कमी या बढ़ोतरी',
        'नींद न आना (Insomnia) या अत्यधिक नींद आना',
        'हर समय अत्यधिक थकान और ऊर्जा की कमी महसूस होना',
        'स्वयं को दोषी या बेकार महसूस करना',
        'एकाग्रता में कमी और निर्णय लेने में कठिनाई',
        'मृत्यु के विचार या जीवन समाप्त करने की इच्छा आना',
      ],
      gu: [
        'સતત 2 અઠવાડિયા કે તેથી વધુ સમય સુધી ઉદાસી, ખાલીપો અથવા ચીડિયાપણું રહેવું',
        'પહેલાં ગમતી પ્રવૃત્તિઓમાં રસ સાવ ઘટી જવો (Anhedonia)',
        'ભૂખ અથવા વજનમાં અનપેક્ષિત મોટો ફેરફાર',
        'ઊંઘ ન આવવી અથવા જરૂર કરતાં વધારે ઊંઘ આવવી',
        'શરીરમાં સતત થાક અને નબળાઈ અનુભવવી',
        'પોતાને નકામા ગણવા અથવા કારણ વિના અપરાધભાવ અનુભવવો',
        'ધ્યાન કેન્દ્રિત કરવામાં કે રોજિંદા નિર્ણયો લેવામાં મુશ્કેલી',
        'મૃત્યુના વિચારો અથવા જીવન ટૂંકાવવાની ઈચ્છા થવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Depression profoundly impairs occupational performance, academic functioning, intimate partnerships, parenting capacities, and basic self-care. Severe psychomotor fatigue makes simple daily tasks—such as cooking, personal hygiene, and household management—feel like insurmountable hurdles. In the workplace, impaired executive functioning, indecisiveness, and memory deficits cause severe presenteeism and absenteeism, while emotional withdrawal strains marital and social bonds.',
      hi: 'डिप्रेशन के कारण कार्यक्षमता, पढ़ाई, पारिवारिक रिश्ते, बच्चों की परवरिश, व्यक्तिगत स्वच्छता और सामाजिक जीवन गंभीर रूप से बाधित हो जाते हैं। अत्यधिक मानसिक व शारीरिक थकान के कारण खाना बनाना, नहाना, या छोटे-छोटे फैसले लेना भी नामुमकिन लगने लगता है। कार्यस्थल पर एकाग्रता और याददाश्त कमजोर होने से काम में गलतियां होती हैं और रिश्ते भावनात्मक अलगाव के कारण टूटने की कगार पर पहुंच जाते हैं।',
      gu: 'ડિપ્રેશનથી નોકરી, વ્યવસાય, શિક્ષણ, દાંપત્યજીવન અને બાળકોના ઉછેર પર અત્યંત વિપરીત અસર પડે છે. ગંભીર થાકને કારણે નહાવું, જમવું કે ઘરના સામાન્ય કામો પણ અસહ્ય બોજારૂપ લાગે છે. કાર્યક્ષમતા અને યાદશક્તિ ઘટવાથી નોકરીમાં ભૂલો થાય છે, અને એકલતામાં પુરાઈ રહેવાથી પરિવાર અને સમાજના સંબંધોમાં અંતર આવી જાય છે.',
    },
    causes: {
      en: 'Depression is a multifactorial disorder resulting from complex interactions between neurobiological vulnerability and psychosocial stressors. Biological drivers include altered monoaminergic neurotransmission (serotonin, norepinephrine, dopamine), dysregulation of the hypothalamic-pituitary-adrenal (HPA) axis leading to elevated cortisol, reduced neuroplasticity and brain-derived neurotrophic factor (BDNF), chronic low-grade systemic inflammation, and polygenic inheritance (heritability ~35-40%). Psychosocial triggers include chronic severe stress, adverse childhood experiences (ACEs), relational bereavement, systemic socio-economic hardships, and maladaptive cognitive schemas (learned helplessness and cognitive distortions).',
      hi: 'डिप्रेशन कई जैविक और सामाजिक कारणों के आपसी तालमेल से पैदा होता है। जैविक रूप से, मस्तिष्क में सेरोटोनिन, डोपामाइन और नॉरपेनेफ्रिन जैसे रसायनों का असंतुलन, तनाव हार्मोन (कॉर्टिसोल) का अत्यधिक स्तर, न्यूरोप्लास्टिसिटी में कमी और आनुवंशिक प्रभाव (35-40% आनुवंशिक संभावना) मुख्य हैं। मनोवैज्ञानिक व सामाजिक कारणों में बचपन के आघात, किसी प्रियजन की मृत्यु, लंबे समय तक चलने वाला पारिवारिक या आर्थिक तनाव, और निराशावादी सोच के पैटर्न प्रमुख भूमिका निभाते हैं।',
      gu: 'ડિપ્રેશન એ જૈવિક અને સામાજિક પરિબળોના જટિલ સંયોજનથી થાય છે. જૈવિક કારણોમાં મગજના મહત્વપૂર્ણ ન્યુરોટ્રાન્સમીટર (સેરોટોનિન, ડોપામાઈન), તણાવ હોર્મોન (કોર્ટિસોલ) નું ઊંચું પ્રમાણ અને ૩૫-૪૦% વારસાગત અસરો મુખ્ય છે. સામાજિક અને માનસિક કારણોમાં બાળપણનો આઘાત, સ્વજનનો વિયોગ, લાંબા ગાળાનો આર્થિક કે કૌટુંબિક તણાવ અને નકારાત્મક વિચારસરણી આ બીમારીને ઉત્તેજિત કરે છે.',
    },
    riskFactors: {
      en: [
        'First-degree family history of major depressive disorder, bipolar disorder, or suicide',
        'Severe acute life stressors, recent bereavement, divorce, or financial collapse',
        'History of childhood emotional, physical, or sexual abuse, or neglect (ACEs)',
        'Chronic painful or disabling medical illnesses (hypothyroidism, diabetes, stroke, chronic pain syndromes)',
        'Harmful substance use (alcohol, sedatives, stimulants) or prescription drug interactions',
        'Severe social isolation, lack of a trusted confidant, or marginalization',
      ],
      hi: [
        'परिवार में माता-पिता या भाई-बहन को डिप्रेशन, बायपोलर डिसऑर्डर या आत्महत्या का इतिहास',
        'गंभीर जीवन तनाव, तलाक, किसी प्रियजन की मृत्यु या भारी आर्थिक नुकसान',
        'बचपन में शारीरिक, भावनात्मक या यौन शोषण या उपेक्षा का शिकार होना',
        'पुरानी शारीरिक बीमारियां (थायरॉयड, मधुमेह, कैंसर, स्ट्रोक, पुराना दर्द)',
        'शराब या नशीले पदार्थों का सेवन',
        'गंभीर सामाजिक अकेलापन और भरोसेमंद मित्रों का अभाव',
      ],
      gu: [
        'પરિવારમાં કોઈને ડિપ્રેશન, બાયપોલર ડિસઓર્ડર કે આત્મહત્યાનો ઇતિહાસ હોવો',
        'અતિશય માનસિક આઘાત, સ્વજનનું અવસાન, છૂટાછેડા કે આર્થિક પતન',
        'બાળપણમાં કોઈપણ પ્રકારનો દુરુપયોગ કે ઉપેક્ષા સહન કરવી પડી હોય',
        'લાંબા સમયની શારીરિક બીમારીઓ (થાઇરોઇડ, ડાયાબિટીસ, સ્ટ્રોક કે અસહ્ય દુખાવો)',
        'દારૂ કે નશીલા દ્રવ્યોનું સેવન કરવું',
        'સામાજિક એકલતા અને સહાનુભૂતિપૂર્વક સાંભળનાર સ્વજનોનો અભાવ',
      ],
    },
    psychiatricAssessment: {
      en: 'A comprehensive psychiatric evaluation conducted by a qualified psychiatrist. The assessment entails a thorough longitudinal clinical interview exploring symptom onset, course, severity, previous depressive episodes, and treatment response; screening for past hypomanic or manic symptoms to distinguish from bipolar depression; systematic suicide risk screening using validated instruments (such as the C-SSRS); substance use history; medical review; and diagnostic laboratory testing (complete blood count, thyroid function panel [TSH, Free T4], serum vitamin B12, vitamin D3, electrolytes, and liver/renal function) to rule out organic medical contributors.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत क्लिनिकल जांच की जाती है। इसमें बीमारी के शुरुआत और इतिहास, पूर्व में हुए अवसाद के एपिसोड्स, और बायपोलर डिसऑर्डर को अलग करने के लिए पूर्व में अत्यधिक खुशी या उन्माद (Mania/Hypomania) के लक्षणों की जांच की जाती है। आत्महत्या के जोखिम का वैज्ञानिक पैमानों (C-SSRS) से विस्तृत आकलन किया जाता है। साथ ही थायरॉयड (TSH), विटामिन B12, विटामिन D3, सीबीसी और लिवर-किडनी फंक्शन टेस्ट कराकर अन्य शारीरिक बीमारियों की संभावना को पूरी तरह जांचा जाता है।',
      gu: 'લાયકાત ધરાવતા મનોચિકિત્સક દ્વારા સંપૂર્ણ તપાસ કરવામાં આવે છે. લક્ષણોની શરૂઆત, ભૂતકાળમાં ડિપ્રેશનના હુમલા અને બાયપોલર ડિપ્રેશન નથી તેની ખાતરી કરવા માટે ઉન્માદ (મેનિયા) ના લક્ષણોની તપાસ થાય છે. આત્મહત્યાના જોખમનું ઊંડાણપૂર્વક પરીક્ષણ કરવામાં આવે છે. શરીરના અન્ય રોગો નકારી કાઢવા માટે થાઇરોઇડ (TSH), વિટામિન B12, વિટામિન D3 અને સીબીસી જેવા મહત્વપૂર્ણ લોહીના રિપોર્ટ કરવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, Major Depressive Disorder requires at least 5 of 9 symptoms present during the same 2-week period, representing a noticeable change from previous functioning, where at least one of the symptoms is either (1) depressed mood most of the day, nearly every day, or (2) markedly diminished interest or pleasure in all or almost all activities (anhedonia). Additional symptoms include significant unintended weight loss or gain; insomnia or hypersomnia; psychomotor agitation or retardation; fatigue or loss of energy; feelings of worthlessness or excessive/inappropriate guilt; diminished concentration or indecisiveness; and recurrent thoughts of death or suicidal ideation. Symptoms must cause clinically significant distress or functional impairment and must not be attributable to physiological effects of a substance or medical condition. In ICD-11, it is coded under Single Episode Depressive Disorder (6A70) or Recurrent Depressive Disorder (6A71).',
      hi: 'DSM-5-TR के अनुसार मेजर डिप्रेशन के निदान के लिए कम से कम लगातार 2 सप्ताह तक 9 में से कम से कम 5 लक्षणों का मौजूद होना अनिवार्य है, जिसमें से कम से कम एक लक्षण (1) उदास मन या (2) काम और रुचियों में आनंद की पूरी कमी (Anhedonia) होना आवश्यक है। अन्य लक्षणों में भूख/वजन में बदलाव, अनिद्रा या अत्यधिक नींद, शारीरिक बेचैनी या सुस्ती, अत्यधिक थकान, अपराधबोध या बेकार होने का अहसास, एकाग्रता की कमी, और मरने या आत्महत्या के विचार शामिल हैं। इन लक्षणों से दैनिक कामकाज में गंभीर रुकावट आनी चाहिए और यह किसी शारीरिक बीमारी (जैसे थायरॉयड) या नशे के कारण नहीं होना चाहिए। ICD-11 में इसका कोड 6A70 या 6A71 है।',
      gu: 'DSM-5-TR મુજબ ડિપ્રેશનના સચોટ નિદાન માટે સતત ૨ અઠવાડિયા સુધી ૯ માંથી ઓછામાં ઓછા ૫ લક્ષણો હોવા જરૂરી છે, જેમાં (૧) દિવસના મોટાભાગના સમયમાં ઉદાસી અથવા (૨) તમામ પ્રવૃત્તિઓમાં રસ અને આનંદનો સંપૂર્ણ અભાવ (Anhedonia) આ બેમાંથી એક મુખ્ય લક્ષણ હોવું અનિવાર્ય છે. અન્ય લક્ષણોમાં ભૂખ/વજનમાં મોટો ફેરફાર, અનિદ્રા કે વધુ પડતી ઊંઘ, શારીરિક સુસ્તી કે બેચેની, અતિશય થાક, અપરાધભાવ, નિર્ણય લેવામાં મુશ્કેલી અને મૃત્યુના વિચારો સામેલ છે. આ લક્ષણોથી રોજિંદા જીવનમાં ગંભીર ખલેલ પહોંચવી જોઈએ અને તે કોઈ શારીરિક રોગ કે નશાને કારણે ન હોવા જોઈએ. ICD-11 માં આનો કોડ 6A70 અથવા 6A71 છે.',
    },
    differentialConsiderations: {
      en: 'Crucial clinical differentials include: Bipolar Disorder (Type I or Type II; crucial to rule out past hypomania to prevent antidepressant-induced manic switching); Persistent Depressive Disorder (Dysthymia; chronic milder depressive symptoms lasting ≥2 years); Adjustment Disorder with Depressed Mood (identifiable psychosocial stressor with resolving course); Hypothyroidism, Cushing\'s disease, or adrenal insufficiency; Severe Vitamin B12, Folate, or Iron-deficiency anemia; Autoimmune encephalopathies and Systemic Lupus Erythematosus (SLE); Medication-induced mood disorders (corticosteroids, beta-blockers, interferon); and Early Cognitive Impairment / Pseudodementia of depression in older adults.',
      hi: 'इसे बायपोलर डिसऑर्डर (जिसमें पहले कभी हाइपोमेनिया/मेनिया हुआ हो); डिस्टीमिया (लंबे समय तक रहने वाला हल्का अवसाद); एडजस्टमेंट डिसऑर्डर (किसी तनावपूर्ण घटना के बाद होने वाली अस्थायी उदासी); थायरॉयड रोग (Hypothyroidism); विटामिन B12 व खून की गंभीर कमी; कुछ दवाओं के साइड इफेक्ट्स (जैसे स्टेरॉयड); और बुजुर्गों में डिमेंशिया से अलग पहचानना अत्यंत आवश्यक है।',
      gu: 'આને બાયપોલર ડિસઓર્ડર (જેમાં અગાઉ ક્યારેય ઉન્માદના લક્ષણો આવ્યા હોય); ડિસ્થીમિયા (બે કે તેથી વધુ વર્ષો સુધી ચાલતું હળવું ડિપ્રેશન); એડજસ્ટમેન્ટ ડિસઓર્ડર; થાઇરોઇડની બીમારી; વિટામિન B12 કે લોહીની ગંભીર ઊણપ; અમુક દવાઓની આડઅસરો (દા.ત. સ્ટેરોઇડ્સ); અને વૃદ્ધોમાં ડિમેન્શિયાથી અલગ તારવવું ખૂબ જરૂરી છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Helping the person and their family understand depression as a real medical disorder, reducing guilt and stigma.',
        hi: 'रोगी और परिवार को यह समझाना कि डिप्रेशन एक वास्तविक चिकित्सा स्थिति है, न कि कोई कमजोरी या आलस्य।',
        gu: 'દર્દી અને પરિવારને સમજાવવું કે આ એક સાચી તબીબી બીમારી છે, કોઈ નબળાઈ કે આળસ નથી.',
      },
      lifestyleSupport: {
        en: 'Structured daily routine, graded physical activity (walking), sleep hygiene, and balanced nutrition.',
        hi: 'दैनिक दिनचर्या बनाना, नियमित पैदल चलना, पर्याप्त नींद और संतुलित आहार।',
        gu: 'રોજિંદી નિયમિત દિનચર્યા, હળવી કસરત કે ચાલવું, પૂરતી ઊંઘ અને પૌષ્ટિક આહાર.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioural Therapy (CBT), Interpersonal Therapy (IPT), and Behavioural Activation.',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT), इंटरपर्सनल थेरेपी (IPT) और बिहेवियरल एक्टिवेशन।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) અને વાતચીત આધારિત સાયકોથેરાપી.',
      },
      medications: {
        en: 'Antidepressants (such as SSRIs or SNRIs) may be prescribed by a psychiatrist when symptoms are moderate to severe. Medications take 2 to 4 weeks to show noticeable effects.',
        hi: 'मध्यम से गंभीर डिप्रेशन में मनोचिकित्सक एंटीडिप्रेसेंट दवाएं (जैसे SSRIs) लिख सकते हैं। इनका असर दिखने में 2 से 4 सप्ताह का समय लग सकता है।',
        gu: 'મધ્યમથી ગંભીર સ્થિતિમાં મનોચિકિત્સક યોગ્ય દવાઓ સૂચવી શકે છે. આ દવાની અસર દેખાતા 2 થી 4 અઠવાડિયા લાગે છે.',
      },
      familySocialInterventions: {
        en: 'Caregiver guidance, supportive listening without lecturing, and gradual encouragement of social reconnection.',
        hi: 'परिवार का भावनात्मक सहयोग, बिना ताने मारे धैर्यपूर्वक सुनना और सामाजिक जुड़ाव बनाए रखना।',
        gu: 'પરિવારનો સાથ, કોઈ પણ ટોણા માર્યા વિના સહાનુભૂતિપૂર્વક સાંભળવું અને સામાજિક ટેકો આપવો.',
      },
    },
    treatmentGoals: {
      en: 'Symptom reduction, restoration of daily social and occupational functioning, prevention of future relapses, and improved quality of life.',
      hi: 'लक्षणों को पूरी तरह ठीक करना, दैनिक व कामकाजी जीवन को सामान्य बनाना और भविष्य में बीमारी को दोबारा लौटने से रोकना।',
      gu: 'લક્ષણોમાં રાહત, રોજિંદા કામકાજમાં પુનઃ સક્રિય થવું અને બીમારી ફરીથી ન ઉથલો મારે તેની તકેદારી રાખવી.',
    },
    recoveryOutlook: {
      en: 'Major Depressive Disorder has an exceptionally favorable long-term prognosis when addressed with modern evidence-based psychiatric and psychological care. Over 70% to 80% of individuals achieve substantial clinical response or full symptom remission with first-line treatments, including second-generation antidepressants (such as SSRIs or SNRIs) and structured psychotherapies like Cognitive Behavioral Therapy (CBT) and Interpersonal Psychotherapy (IPT). For more complex or treatment-resistant presentations, contemporary psychiatry offers powerful evidence-based multimodal strategies—including medication augmentation (mood stabilizers, atypical antipsychotics), repetitive Transcranial Magnetic Stimulation (rTMS), and modern Electroconvulsive Therapy (ECT). With sustained maintenance therapy, proactive relapse prevention plans, and healthy lifestyle scaffolding, individuals consistently regain full emotional vitality, executive clarity, and rich vocational and family functioning.',
      hi: 'मेजर डिप्रेसिव डिसऑर्डर का भविष्य आधुनिक मनोचिकित्सा और मनोवैज्ञानिक उपचारों के साथ अत्यंत आशाजनक और अनुकूल है। पहली पंक्ति के उपचारों—जैसे आधुनिक एंटीडिप्रेसेंट दवाएं (SSRIs/SNRIs) और कॉग्निटिव बिहेवियरल थेरेपी (CBT)—से 70% से 80% मरीज पूरी तरह ठीक होकर अपने सामान्य जीवन में लौट आते हैं। गंभीर या जटिल मामलों में भी आधुनिक चिकित्सा पद्धतियां (जैसे दवा संयोजन, rTMS और सुरक्षित आधुनिक ECT) असाधारण परिणाम देती हैं। डॉक्टर की सलाह के अनुसार दवा का पूरा कोर्स लेने, नियमित दिनचर्या बनाए रखने और तनाव प्रबंधन सीखने से व्यक्ति अपने काम, परिवार और समाज में पहले की तरह पूरी ऊर्जा और खुशी के साथ सक्रिय हो जाता है।',
      gu: 'આધુનિક મનોચિકિત્સા અને વૈજ્ઞાનિક સારવાર પદ્ધતિઓની મદદથી ડિપ્રેશનનું પરિણામ અત્યંત ઉત્સાહજનક અને સફળ રહે છે. યોગ્ય દવાઓ (SSRIs/SNRIs) અને વાતચીત આધારિત થેરાપી (CBT) થી ૭૦% થી ૮૦% દર્દીઓ સંપૂર્ણ સ્વસ્થ થઈ પોતાના સામાન્ય જીવનમાં પરત ફરે છે. જટિલ કે જૂના કેસોમાં પણ દવાઓનું યોગ્ય સંયોજન, rTMS જેવી આધુનિક ન્યુરોસ્ટીમ્યુલેશન પદ્ધતિઓ ખૂબ જ અસરકારક સાબિત થાય છે. ડૉક્ટરના માર્ગદર્શન મુજબ નિયમિત દવા લેવાથી, પૂરતી ઊંઘ અને તણાવમુક્ત જીવનશૈલી અપનાવવાથી દર્દી પોતાની કારકિર્દી અને પરિવારમાં સંપૂર્ણ ખુશી અને આત્મવિશ્વાસ સાથે પુનઃ સક્રિય થઈ શકે છે.',
    },
    relapsePrevention: {
      en: 'Completing the full prescribed course of medication (do not stop when feeling better), continuing self-care routines, monitoring early warning signs, and maintaining regular psychiatric follow-up.',
      hi: 'दवा का कोर्स पूरा करना (अच्छा लगने पर भी अचानक बंद न करना), नियमित नींद रखना और तनाव प्रबंधन की तकनीकें अपनाना।',
      gu: 'દવાઓનો કોર્સ પૂરો કરવો (સારું લાગવા છતાં અચાનક બંધ ન કરવી), પૂરતી ઊંઘ અને ડૉક્ટરની નિયમિત મુલાકાત રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Expressions of wanting to die, giving away possessions, sudden unexplained calm after severe depression, severe self-harm, or complete refusal of food and water.',
      hi: 'आत्महत्या या मरने की बातें करना, अपनी चीजें दूसरों को सौंपना, अचानक शांत हो जाना, या खाना-पीना पूरी तरह छोड़ देना।',
      gu: 'આત્મહત્યાના વિચારો વ્યક્ત કરવા, પોતાની ચીજવસ્તુઓ વહેંચી દેવી, અથવા ખાવા-પીવાનું સાવ બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Depression is just sadness that you can snap out of if you have strong willpower.',
          hi: 'डिप्रेशन सिर्फ एक सामान्य उदासी है जिसे इंसान अपनी इच्छाशक्ति से ठीक कर सकता है।',
          gu: 'ડિપ્રેશન એ માત્ર ક્ષણિક ઉદાસી છે જે મનોબળથી તરત જ મટાડી શકાય છે.',
        },
        fact: {
          en: 'Depression is a medical condition involving brain circuitry and biology. One cannot simply "snap out of it" any more than one could with diabetes.',
          hi: 'डिप्रेशन एक वास्तविक न्यूरोबायोलॉजिकल चिकित्सा स्थिति है। इच्छाशक्ति से डायबिटीज या फ्रैक्चर ठीक नहीं होता, वैसे ही डिप्रेशन के लिए भी उपचार आवश्यक है।',
          gu: 'ડિપ્રેશન મગજના રસાયણો અને બાયોલોજી સાથે જોડાયેલી બીમારી છે. ડાયાબિટીસની જેમ જ તેના માટે યોગ્ય તબીબી સારવાર જરૂરી છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Will taking antidepressant medication change my personality or make me permanently dependent?',
          hi: 'क्या एंटीडिप्रेसेंट दवाओं की लत लग जाती है या ये मेरा व्यक्तित्व बदल देंगी?',
          gu: 'શું ડિપ્રેશનની દવાઓની આદત પડી જાય છે કે તે મારું વ્યક્તિત્વ બદલી નાખશે?',
        },
        answer: {
          en: 'Standard antidepressants (like SSRIs) are not addictive and do not cause cravings or tolerance. Under a psychiatrist\'s guidance, they are tapered safely when appropriate.',
          hi: 'एंटीडिप्रेसेंट दवाएं नशीली नहीं होती हैं और इनकी कोई शारीरिक लत नहीं लगती। मनोचिकित्सक की देखरेख में इन्हें धीरे-धीरे सुरक्षित तरीके से कम करके बंद किया जाता है।',
          gu: 'ડિપ્રેશનની માન્ય દવાઓ (SSRIs) બિલકુલ નશાકારક નથી હોતી અને તેની કોઈ લત લાગતી નથી. ડૉક્ટરના માર્ગદર્શન હેઠળ યોગ્ય સમયે તેને ધીમે ધીમે બંધ કરી શકાય છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'The National Mental Health Survey of India (NMHS 2015-16) identified a lifetime prevalence of depressive disorders of 5.25% among Indian adults, with nearly 1 in 20 individuals actively experiencing depressive morbidity.',
          hi: 'राष्ट्रीय मानसिक स्वास्थ्य सर्वेक्षण (NMHS 2015-16) के अनुसार भारत में 5.25% वयस्कों ने अपने जीवनकाल में डिप्रेशन का अनुभव किया है, और लगभग 20 में से 1 व्यक्ति सक्रिय रूप से अवसाद से जूझ रहा है।',
          gu: 'રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય સર્વેક્ષણ (NMHS 2015-16) મુજબ ભારતના ૫.૨૫% પુખ્ત વયના લોકોએ તેમના જીવનકાળમાં ડિપ્રેશનનો સામનો કર્યો છે, અને ૨૦માંથી લગભગ ૧ વ્યક્તિ સક્રિય ડિપ્રેશન અનુભવે છે.',
        },
        citationRef: 'National Mental Health Survey of India (NMHS 2015-16)',
      },
      {
        fact: {
          en: 'Large-scale meta-analyses demonstrate that combining structured psychotherapy (such as CBT or Behavioral Activation) with second-generation antidepressants achieves significantly higher rates of sustained remission than either treatment alone.',
          hi: 'व्यापक शोध अध्ययनों से सिद्ध हुआ है कि संरचित मनोचिकित्सा (जैसे सीबीटी) और आधुनिक दवाओं का संयुक्त उपचार अकेले किसी एक उपचार की तुलना में काफी बेहतर और स्थायी सुधार प्रदान करता है।',
          gu: 'વ્યાપક વૈજ્ઞાનિક વિશ્લેષણો દર્શાવે છે કે યોગ્ય સાયકોથેરાપી (જેમ કે CBT) અને આધુનિક દવાઓ બંને સાથે લેવાથી માત્ર એક સારવાર કરતાં રોગ સંપૂર્ણ મટવાની શક્યતા ઘણી વધારે રહે છે.',
        },
        citationRef: 'Lancet Psychiatry Meta-Analysis',
      },
      {
        fact: {
          en: 'Structural neuroimaging and molecular studies document reversible reductions in hippocampal volume and brain-derived neurotrophic factor (BDNF) levels during acute depressive episodes, which normalize with effective long-term treatment.',
          hi: 'मस्तिष्क के न्यूरोइमेजिंग अध्ययनों से पता चलता है कि अवसाद के दौरान हिप्पोकैम्पस का आकार और न्यूरोप्लास्टिक कारक (BDNF) कम हो जाते हैं, जो सफल उपचार के बाद पुनः सामान्य हो जाते हैं।',
          gu: 'મગજના ન્યુરોઇમેજિંગ અભ્યાસો સાબિત કરે છે કે ડિપ્રેશન દરમિયાન મગજના હિપ્પોકેમ્પસ અને ચેતા-સંરક્ષક પરિબળો (BDNF) માં ઘટાડો થાય છે, જે યોગ્ય સારવારથી ફરીથી સામાન્ય થઈ જાય છે.',
        },
        citationRef: 'APA DSM-5-TR',
      },
      {
        fact: {
          en: 'The Indian Psychiatric Society guidelines recommend continuing antidepressant maintenance therapy for 6 to 9 months after full remission of a first depressive episode to prevent relapse.',
          hi: 'इंडियन साइकियाट्रिक सोसाइटी के दिशा-निर्देशों के अनुसार डिप्रेशन पूरी तरह ठीक होने के बाद भी बीमारी को दोबारा लौटने से रोकने के लिए 6 से 9 महीने तक दवा जारी रखनी चाहिए।',
          gu: 'ઇન્ડિયન સાયકિયાટ્રિક સોસાયટીની માર્ગદર્શિકા મુજબ ડિપ્રેશન સાજુ થઈ ગયા પછી પણ રોગ ફરી ન થાય તે માટે ૬ થી ૯ મહિના સુધી નિયમિત દવા ચાલુ રાખવી જરૂરી છે.',
        },
        citationRef: 'Indian Psychiatric Society (IPS) Guidelines',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'National Institute of Mental Health and Neurosciences (NIMHANS). National Mental Health Survey of India, 2015-16: Prevalence, Patterns and Outcomes. Bengaluru: NIMHANS, 2016.',
        source: 'National Mental Health Survey of India (NMHS 2015-16)',
        year: '2016',
      },
      {
        citation: 'Indian Psychiatric Society. Clinical Practice Guidelines for Management of Depressive Disorders in Adults. Indian J Psychiatry. 2017;59(Suppl 1):S34-S50.',
        source: 'Indian Psychiatric Society (IPS) Guidelines',
        year: '2017',
      },
      {
        citation: 'Cuijpers P, Noma H, Karyotaki E, et al. A network meta-analysis of the effects of psychotherapies, pharmacotherapies and their combination in adult depression. World Psychiatry. 2020;19(1):92-107.',
        source: 'Lancet Psychiatry Meta-Analysis',
        year: '2020',
      },
      {
        citation: 'Kennedy SH, Lam RW, McIntyre RS, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) 2016 Clinical Guidelines for the Management of Adults with Major Depressive Disorder. Can J Psychiatry. 2016;61(9):540-560.',
        source: 'CANMAT Guidelines',
        year: '2016',
      },
      {
        citation: 'World Health Organization. Comprehensive Mental Health Action Plan 2013-2030. Geneva: WHO, 2021.',
        source: 'World Health Organization',
        year: '2021',
      },
    ],
    educationalVideoTitle: { en: "Mental Health Minute: Depression", hi: "Mental Health Minute: Depression", gu: "Mental Health Minute: Depression" },
    educationalVideoSource: 'National Institute of Mental Health (NIMH)',
    lastReviewed: '2026-09',
    relatedIds: ['cbt', 'behavioral-activation', 'ipt', 'antidepressants', 'anxiety-gad', 'bipolar'],
    relatedContent: {
      conditionSlugs: ['persistent-depressive-disorder-dysthymia', 'generalized-anxiety-disorder', 'bipolar-disorder'],
      medicationIds: ['antidepressants', 'mood-stabilizers', 'medications-for-substance-use-disorders'],
      treatmentIds: [
        'cbt',
        'behavioral-activation',
        'interpersonal-therapy',
        'act',
        'dbt',
        'supportive',
        'motivational-interviewing',
        'ect',
        'rtms',
      ],
    },
  },
  {
    id: 'bipolar',
    youtubeVideoId: 'GX2RB_LmLUE',
    slug: 'bipolar-disorder',
    category: 'mood',
    conditionIcon: 'bipolar',
    name: {
      en: 'Bipolar Disorder',
      hi: 'बायपोलर डिसऑर्डर (Bipolar Disorder)',
      gu: 'બાયપોલર ડિસઓર્ડર (Bipolar Disorder)',
    },
    medicalTerms: {
      en: 'Bipolar I, Bipolar II, Manic-Depressive Illness',
      hi: 'बायपोलर I, बायपोलर II, मैनिक-डिप्रेसिव इलनेस',
      gu: 'બાયપોલર I, બાયપોલર II (મેનિક-ડિપ્રેસિવ)',
    },
    overview: {
      en: 'Bipolar and Related Disorders (ICD-11: 6A60–6A6Z, DSM-5-TR) are chronic, recurrent neurobiological mood conditions characterized by cyclical, profound shifts in mood, energy, psychomotor activity, and cognition. Individuals alternate between poles of pathological excitation and grandiosity (mania in Bipolar I, hypomania in Bipolar II) and poles of crushing sadness, lethargy, and hopelessness (bipolar depression), separated by periods of baseline stability (euthymia). Far from ordinary emotional moodiness or sudden temperamental irritability, bipolar disorder is an organic brain disorder rooted in circadian pacemaker dysfunction, neurotransmitter receptor instability, and altered frontolimbic neural networks.',
      hi: 'बायपोलर डिसऑर्डर (Bipolar and Related Disorders) एक गंभीर, बार-बार होने वाली न्यूरोबायोलॉजिकल मानसिक बीमारी है जिसमें व्यक्ति के मूड, ऊर्जा, सोचने की गति और दैनिक गतिविधियों में भारी और असामान्य उतार-चढ़ाव आते हैं। इसमें एक तरफ अत्यधिक तेजी, बेतहाशा ऊर्जा, कम नींद और खुद को सर्वशक्तिमान समझने का उन्माद (Mania या Hypomania) आता है, तो दूसरी तरफ गहरा अवसाद (Depression), लाचारी और भारी थकान का दौर आता है। यह कोई सामान्य गुस्सा या मूड बदलना नहीं है; बल्कि मस्तिष्क की जैविक घड़ी (Circadian rhythm), रसायनों और तंत्रिका तंत्र के संतुलन में गंभीर गड़बड़ी से होने वाली वास्तविक बीमारी है।',
      gu: 'બાયપોલર ડિસઓર્ડર એ મગજની જૈવિક રચના સાથે જોડાયેલી એક ગંભીર અને લાંબા ગાળાની બીમારી છે, જેમાં વ્યક્તિના મૂડ, માનસિક ઊર્જા, વર્તન અને વિચારવાની ક્ષમતામાં આત્યંતિક ચડાવ-ઉતાર આવે છે. દર્દી ક્યારેક અતિશય ઉત્સાહ, અતિ ઊર્જા, આંધળી હિંમત અને બેફામ વર્તનની સ્થિતિ (મેનિયા અથવા હાઇપોમેનિયા) માં પહોંચી જાય છે, તો ક્યારેક ઊંડી નિરાશા, લાચારી અને કમજોરીના ગંભીર ડિપ્રેશનના તબક્કામાં સરી પડે છે. આ કોઈ સામાન્ય સ્વભાવ કે ક્ષણિક ગુસ્સો નથી; પરંતુ મગજના રસાયણો અને જૈવિક ઘડિયાળની અનિયમિતતાથી થતી વાસ્તવિક બીમારી છે.',
    },
    illustrativeExamples: [
      {
        en: 'Rohan, a 28-year-old financial analyst in Vadodara, experienced two severe depressive episodes in his early twenties marked by social withdrawal, crushing exhaustion, and apathy, which responded poorly to standard antidepressant monotherapy. At age 28, following consecutive nights of sleepless cramming for an international financial certification, an abrupt shift occurred. Rohan began sleeping only two hours per night yet awoke surging with electric, unstoppable vitality. He spoke at a torrential pace, interrupting colleagues, dominating boardroom meetings, and scribbling frantic multi-billion-rupee business models across whiteboards. Convinced he had intuitively discovered a secret algorithmic formula to predict global stock markets, he believed he was destined to launch a global hedge fund within weeks. Operating on zero perceived risk, Rohan maxed out four credit cards in three days—purchasing two high-end luxury wristwatches, designer electronics, and transferring his family\'s life savings into volatile cryptocurrency tokens. When his anxious parents urged him to rest, he exploded in fierce anger, accusing them of "jealously sabotaging my genius." Recognizing acute manic psychosis, his parents brought him to a psychiatric hospital. The psychiatrist diagnosed Bipolar I Disorder with manic psychosis and initiated immediate medical stabilization with an atypical antipsychotic and Lithium carbonate. Within two weeks, his racing thoughts normalized, sleep stabilized at eight hours, and his grandiose delusions resolved. With subsequent outpatient care combining therapeutic Lithium monitoring, Interpersonal and Social Rhythm Therapy (strictly keeping identical bedtimes and wake times), and family counseling, Rohan has remained fully stable for over four years, excelling as a senior portfolio manager.',
        hi: 'वडोदरा में रहने वाले 28 वर्षीय वित्तीय विश्लेषक रोहन को 22 और 24 साल की उम्र में दो बार गंभीर अवसाद का सामना करना पड़ा था, जिसमें वह महीनों तक बिस्तर में पड़ा रहता था और एंटीडिप्रेसेंट दवाओं से उसे खास फायदा नहीं हुआ था। 28 साल की उम्र में, एक अंतरराष्ट्रीय परीक्षा की तैयारी के दौरान कई रातों तक लगातार जागने के बाद उसमें अचानक एक चौंकाने वाला बदलाव आया। रोहन रात में केवल दो घंटे सोता था, फिर भी सुबह बिजली जैसी अटूट ऊर्जा के साथ उठता था। वह बहुत तेजी से बोलता था, ऑफिस की मीटिंग्स में सबको टोकता था और सफेद बोर्ड पर अरबों रुपयों के बिजनेस मॉडल बनाने लगा। उसे दृढ़ विश्वास हो गया कि उसने शेयर बाजार का एक ऐसा गुप्त फॉर्मूला ढूंढ लिया है जिससे वह दुनिया का सबसे अमीर इंसान बन जाएगा। खुद को अजेय समझकर रोहन ने तीन दिनों में चार क्रेडिट कार्ड खाली कर दिए—महंगी घड़ियां खरीदीं, गैजेट्स लिए और परिवार की बचत को जोखिम भरे क्रिप्टो में लगा दिया। जब परेशान माता-पिता ने उसे सोने की सलाह दी, तो वह गुस्से से चीखने लगा कि "तुम मेरी सफलता से जलते हो।" माता-पिता तुरंत उसे मनोचिकित्सक के पास ले गए। डॉक्टर ने बायपोलर I डिसऑर्डर (तीव्र मेनिया) का निदान किया और मूड स्टेबलाइजर (लिथियम) तथा एंटीसाइकोटिक दवा शुरू की। दो हफ्तों में रोहन के विचारों की रफ्तार थमी, नींद सुधरी और उसका भ्रम खत्म हुआ। आज रोहन नियमित दवा और सोने-जागने का पक्का समय रखकर पिछले चार साल से पूरी तरह स्वस्थ है और एक शीर्ष पद पर काम कर रहा है।',
        gu: 'વડોદરામાં રહેતા ૨૮ વર્ષીય ફાઇનાન્સિયલ એનાલિસ્ટ રોહનને અગાઉ બાવીસ અને ચોવીસ વર્ષની ઉંમરે ગંભીર ડિપ્રેશનના બે હુમલા આવ્યા હતા, જેમાં સાદી દવાઓથી પૂરો ફાયદો નહોતો થયો. ૨૮ વર્ષની ઉંમરે એક મોટી પરીક્ષાની તૈયારીમાં સતત ત્રણ રાત ઉજાગરા કર્યા પછી તેનામાં અચાનક નાટકીય ફેરફાર આવ્યો. રોહન રાત્રે માત્ર બે જ કલાક સૂતો છતાં સવારે અદભુત ઊર્જા સાથે જાગતો. તે ખૂબ ઝડપથી અને અટક્યા વગર બોલતો, ઑફિસમાં સહકર્મચારીઓ સાથે દલીલો કરતો અને કાગળ પર અબજો રૂપિયાની કંપનીઓ સ્થાપવાની વાતો કરતો. તેને ખાતરી થઈ ગઈ હતી કે તેને શેરબજારનું એવું જાદુઈ રહસ્ય મળી ગયું છે જેનાથી તે થોડા જ દિવસોમાં અબજોપતિ બની જશે. કોઈ પણ ભય વિના તેણે ત્રણ દિવસમાં ચાર ક્રેડિટ કાર્ડ વાપરી નાખ્યા—મોંઘી ઘડિયાળો લીધી અને પરિવારની જમાપૂંજી જોખમી શેરોમાં રોકી દીધી. જ્યારે માતા-પિતાએ તેને આરામ કરવા કહ્યું, ત્યારે તે ઉશ્કેરાઈને બૂમો પાડવા લાગ્યો કે "તમે લોકો મારી પ્રગતિ રોકવા માંગો છો." તેની ગંભીર સ્થિતિ જોઈ પરિવારજનો તેને તાત્કાલિક મનોચિકિત્સક પાસે લઈ ગયા. ડૉક્ટરે બાયપોલર I ડિસઓર્ડર (મેનિયા) નું સચોટ નિદાન કર્યું અને મૂડ સ્ટેબિલાઇઝર (લિથિયમ) તથા જરૂરી દવાઓ શરૂ કરી. બે અઠવાડિયામાં તેની ઊંઘ સામાન્ય થઈ, મગજના વિચારોની દોડધામ શાંત થઈ અને ખોટી ખુમારી ઊતરી ગઈ. આજે રોહન નિયમિત દવા અને ઊંઘની ચોક્કસ દિનચર્યા જાળવીને છેલ્લા ચાર વર્ષથી સંપૂર્ણ સ્વસ્થ છે અને સફળ કારકિર્દી ભોગવી રહ્યો છે.',
      },
      {
        en: 'Meera, a 36-year-old senior architect in Bengaluru, lived on an agonizing emotional rollercoaster for nearly a decade. Periods of dazzling creativity and superhuman efficiency would arrive where she required only four hours of sleep, designed four projects simultaneously, felt magnetic self-confidence, and socialized exuberantly. These hypomanic phases were lauded by her colleagues as bursts of pure brilliance. Inevitably, however, each surge was followed by a crushing, prolonged collapse into vegetative depression lasting five to six months. During these troughs, Meera suffered from severe psychomotor retardation, hypersomnia (sleeping 14 hours daily), leaden heaviness in her limbs, and an overwhelming conviction that her career was a sham. Multiple doctors diagnosed her with recurrent major depressive disorder and prescribed standard SSRIs, which repeatedly triggered rapid cycling, intense irritability, and brief agitated hypomania. Finally, a mood disorders specialist carefully mapped her longitudinal history and identified Bipolar II Disorder. The psychiatrist discontinued the SSRI monotherapy and carefully titrated Lamotrigine alongside psychoeducation on circadian stability. With her mood stabilized without dampening her authentic creativity, Meera learned to track subtle early warning signs of mood elevation and has remained depression-free for over three years.',
        hi: 'बेंगलुरु की 36 वर्षीय वरिष्ठ वास्तुकार (आर्किटेक्ट) मीरा लगभग एक दशक से एक दर्दनाक भावनात्मक झूले पर जी रही थीं। कभी-कभी उनमें अद्भुत रचनात्मकता और ऊर्जा का दौर आता था, जिसमें वे केवल चार घंटे सोती थीं, एक साथ कई प्रोजेक्ट डिजाइन कर लेती थीं और आत्मविश्वास से भरपूर रहती थीं। इन चरणों (हाइपोमेनिया) को सहकर्मी उनकी प्रतिभा समझते थे। लेकिन इसके तुरंत बाद वे 5-6 महीने के लिए गहरे अवसाद में डूब जाती थीं, जिसमें वे दिन में 14 घंटे सोती थीं, बिस्तर से उठना दूभर हो जाता था और लगता था कि उनका पूरा करियर बर्बाद हो गया है। कई डॉक्टरों ने इसे सामान्य डिप्रेशन मानकर एंटीडिप्रेसेंट दिए, जिससे उनकी बेचैनी और चिड़चिड़ापन बढ़ गया। आखिरकार एक अनुभवी मनोचिकित्सक ने उनके पूरे इतिहास की जांच करके बायपोलर II डिसऑर्डर का निदान किया। डॉक्टर ने साधारण एंटीडिप्रेसेंट बंद करके लैमोट्रिजिन (Lamotrigine) दवा शुरू की। दवा और नियमित जीवनशैली से मीरा का मूड स्थिर हुआ और वे पिछले तीन सालों से बिना किसी अवसाद या अति-उत्साह के उत्कृष्ट काम कर रही हैं।',
        gu: 'બેંગલુરુની ૩૬ વર્ષીય સિનિયર આર્કિટેક્ટ મીરા લગભગ એક દાયકાથી લાગણીઓના હિંચકા પર ઝૂલી રહી હતી. ક્યારેક તેનામાં અદભુત સર્જનાત્મકતા અને સ્ફૂર્તિનો તબક્કો આવતો જેમાં તે માત્ર ચાર કલાક સૂતી, એકસાથે અનેક ડિઝાઇન પૂરી કરતી અને ભારે ઉત્સાહમાં રહેતી. આ તબક્કાને (હાઇપોમેનિયા) સહકર્મચારીઓ તેની પ્રતિભા માનતા. પરંતુ આ ઉત્સાહ પછી તરત જ તે પાંચ-છ મહિના સુધી ઊંડા ડિપ્રેશનમાં સરી પડતી, જેમાં તે આખો દિવસ ૧૪ કલાક પડી રહેતી, પથારીમાંથી ઊઠવાની તાકાત ન રહેતી અને આત્મવિશ્વાસ સાવ હણાઈ જતો. અગાઉ ડૉક્ટરો તેને સામાન્ય ડિપ્રેશન ગણીને દવા આપતા, જેનાથી તેનો મૂડ વધુ ઝડપથી બદલાતો. છેવટે મનોચિકિત્સકે તેના વર્ષોના ઈતિહાસનો ઊંડાણપૂર્વક અભ્યાસ કરીને બાયપોલર II ડિસઓર્ડરનું સચોટ નિદાન કર્યું. ડૉક્ટરે સામાન્ય દવાઓ બદલીને મૂડ સ્ટેબિલાઇઝર (લેમોટ્રિજીન) શરૂ કર્યું. આ સારવારથી મીરાનો મૂડ સ્થિર થયો અને તે છેલ્લા ત્રણ વર્ષથી કોઈ પણ ગંભીર ઉતાર-ચઢાવ વિના ઉત્કૃષ્ટ કાર્ય કરી રહી છે.',
      },
      {
        en: 'Devendra, a 52-year-old textile merchant in Surat, presented to the clinic during Diwali season not with euphoria, but with severe, agitated dysphoria and sleeplessness. For ten days, he had been sleeping less than three hours per night while pacing his terrace relentlessly, his mind bombarded by rapid, chaotic racing thoughts accompanied by intense anxiety, dread, and sudden explosive rages over minor household sounds. He felt both desperately exhausted and physically incapable of sitting still, complaining: "My brain is on fire, running at 200 miles per hour, but everything feels terrifying and dark." His family was bewildered because he appeared simultaneously hyper-energized and deeply miserable. An evaluation by a psychiatrist confirmed a Bipolar I Mixed Episode (co-occurring manic and depressive symptoms). The psychiatrist initiated treatment with an atypical antipsychotic (Olanzapine) combined with Divalproex sodium to rapidly calm the psychomotor agitation and racing cognitions, while educating the family on how festival sleep disruption can precipitate severe mixed episodes. Within three weeks, Devendra\'s sleep normalized, his inner agitation resolved, and his calm, thoughtful baseline temperament was restored.',
        hi: 'सूरत के 52 वर्षीय कपड़ा व्यापारी देवेंद्र दिवाली के समय अत्यधिक बेचैनी, अनिद्रा और गंभीर घबराहट की हालत में क्लिनिक पहुंचे। दस दिनों से वे रात में तीन घंटे से भी कम सो पा रहे थे, छत पर रात-रात भर चक्कर काटते थे और उनके दिमाग में अनगिनत विचार एक साथ टकरा रहे थे। लेकिन वे खुश नहीं थे; बल्कि अत्यधिक डरे हुए, दुखी और छोटी-छोटी बातों पर भयंकर गुस्से में थे। वे कहते थे: "मेरा दिमाग 200 की स्पीड से दौड़ रहा है, लेकिन अंदर सब कुछ बहुत भयानक और अंधेरा लग रहा है।" मनोचिकित्सक ने इसे बायपोलर मिक्स्ड एपिसोड (Bipolar Mixed Episode - जिसमें मेनिया और डिप्रेशन के लक्षण एक साथ होते हैं) के रूप में पहचाना। डॉक्टर ने डिवलप्रोएक्स और आधुनिक एंटीसाइकोटिक दवा शुरू की तथा परिवार को समझाया कि त्योहारों में नींद की कमी इस स्थिति को भड़का सकती है। तीन हफ्तों में देवेंद्र की नींद सामान्य हुई, अंदरूनी बेचैनी शांत हुई और वे स्वस्थ होकर अपने व्यवसाय में लौट आए।',
        gu: 'સુરતના ૫૨ વર્ષીય કાપડના વેપારી દેવેન્દ્રભાઈ દિવાળીના તહેવારોમાં અતિશય બેચેની, અનિદ્રા અને ભારે ગભરાટની સ્થિતિમાં ક્લિનિક પહોંચ્યા. દસ દિવસથી તેઓ રાત્રે ત્રણ કલાક પણ સૂઈ શકતા નહોતા, આખી રાત અગાસી પર આંટા મારતા હતા અને મગજમાં વિચારોનું ભયાનક તોફાન ચાલતું હતું. પરંતુ તેઓ ખુશ નહોતા; અતિશય ગભરાયેલા, દુઃખી અને વાત-વાતમાં પ્રચંડ ગુસ્સો કરતા હતા. તેઓ કહેતા: "મારું મગજ ૨૦૦ ની ઝડપે દોડે છે પણ અંદરથી બધું સાવ કાળું અને ડરામણું લાગે છે." મનોચિકિત્સકે આને બાયપોલર મિક્સ્ડ એપિસોડ (Bipolar Mixed Episode - જેમાં મેનિયા અને ડિપ્રેશનના લક્ષણો એકસાથે હોય છે) તરીકે ઓળખાવ્યો. ડૉક્ટરે મૂડ સ્ટેબિલાઇઝર અને દવાઓ શરૂ કરી તેમજ પરિવારને ઊંઘનું મહત્વ સમજાવ્યું. ત્રણ અઠવાડિયામાં દેવેન્દ્રભાઈની ઊંઘ સામાન્ય થઈ, આંતરિક અશાંતિ દૂર થઈ અને તેઓ સાજા થઈ પોતાના વેપારમાં પાછા વળ્યા.',
      },
    ],
    commonSymptoms: {
      en: [
        'Manic Phase: Abnormally elevated, expansive, or irritable mood',
        'Decreased need for sleep (e.g., feeling rested after only 2-3 hours)',
        'Rapid, pressured speech; racing thoughts and jumping between ideas',
        'Inflated self-esteem or grandiosity (unrealistic beliefs in one\'s abilities)',
        'Impulsive or risky behaviors (extravagant spending, reckless driving)',
        'Depressive Phase: Extreme low energy, loss of interest, severe sadness',
      ],
      hi: [
        'मैनिक अवस्था (Mania): असामान्य रूप से अत्यधिक ऊर्जा, उत्तेजना या अत्यधिक चिड़चिड़ापन',
        'नींद की जरूरत बहुत कम होना (2-3 घंटे सोकर भी तरोताजा महसूस करना)',
        'बहुत तेज और लगातार बोलना; विचारों का तेजी से दौड़ना',
        'खुद को बहुत असाधारण या सर्वशक्तिमान समझना (Grandiosity)',
        'लापरवाह और जोखिम भरे काम करना (फिजूलखर्ची, खतरनाक ड्राइविंग)',
        'डिप्रेसिव अवस्था: अत्यधिक उदासी, निराशा और ऊर्जा का अभाव',
      ],
      gu: [
        'મેનિયા તબક્કો: અતિશય ઊર્જા, જરૂર કરતાં વધારે ઉત્સાહ કે અત્યંત ગુસ્સો',
        'ઊંઘની જરૂરિયાત ખૂબ ઘટી જવી (માત્ર 2-3 કલાક સૂઈને પણ તાજગી અનુભવવી)',
        'ખૂબ ઝડપથી બોલવું અને મગજમાં વિચારોની દોડધામ ચાલવી',
        'પોતાને અતિશય મહાન કે ચમત્કારી સમજવા (Grandiosity)',
        'જોખમી અને અવિચારી નિર્ણયો લેવા (ખૂબ પૈસા ઉડાવવા, બેપરવાહ ડ્રાઇવિંગ)',
        'ડિપ્રેશન તબક્કો: ઊંડી નિરાશા, ભારે થાક અને લાચારી',
      ],
    },
    dailyLifeImpact: {
      en: 'The dual phases of bipolar disorder pose extreme disruptions to vocational, personal, and domestic spheres. During acute mania, unbridled disinhibition, catastrophic financial splurges, sexual indiscretions, and combative irritability can dissolve marriages, incur crushing legal/debt burdens, and derail established careers in days. Conversely, depressive phases induce protracted disability, severe cognitive fog, pervasive isolation, and profound suicide risk. Between episodes, the dread of impending relapses and stigma can impede interpersonal confidence.',
      hi: 'बायपोलर डिसऑर्डर के दोनों पहलू व्यक्ति के जीवन को तहस-नहस कर सकते हैं। मैनिक अवस्था में व्यक्ति द्वारा की गई अंधाधुंध फिजूलखर्ची, जोखिम भरे फैसले, अत्यधिक गुस्सा और लापरवाह व्यवहार कुछ ही दिनों में बने-बनाए करियर, वैवाहिक रिश्तों और परिवार की जमापूंजी को बर्बाद कर सकते हैं। वहीं डिप्रेशन के दौर में व्यक्ति हफ्तों तक बिस्तर से नहीं उठ पाता, नौकरी छूटने का खतरा पैदा हो जाता है और आत्महत्या का जोखिम बहुत अधिक बढ़ जाता है। दौरों के बीच में भी मरीज को हमेशा नया दौरा आने का डर सताता रहता है।',
      gu: 'બાયપોલર ડિસઓર્ડરના બંને તબક્કા વ્યક્તિના અંગત, પારિવારિક અને વ્યાવસાયિક જીવન માટે અત્યંત વિનાશક સાબિત થઈ શકે છે. મેનિયાના તબક્કામાં અવિચારી નિર્ણયો, મોટા આર્થિક નુકસાન, અતિશય ગુસ્સો અને જોખમી વર્તનને કારણે વર્ષોની મહેનતથી બનેલી કારકિર્દી અને લગ્નજીવન થોડા દિવસોમાં પડી ભાંગે છે. બીજી તરફ, ડિપ્રેશનના તબક્કામાં દર્દી સાવ લાચાર થઈ જાય છે, નોકરી જતી રહે છે અને આત્મહત્યાનું જોખમ વધી જાય છે. સાજા થયા પછી પણ ભવિષ્યમાં ફરી હુમલો આવવાની ચિંતા રહે છે.',
    },
    causes: {
      en: 'Bipolar disorder possesses one of the highest heritability rates in psychiatric medicine (estimated at 70% to 85%), driven by complex polygenic vulnerability. Significant biological factors include abnormalities in intracellular signal transduction (G-protein and inositol signaling), dysregulation of voltage-gated calcium channels (such as CACNA1C), mitochondrial metabolic dysfunction, and hypersensitive dopamine/serotonin systems. The central circadian pacemaker (suprachiasmatic nucleus) is acutely fragile; circadian disruption—most notably severe sleep deprivation, transmeridian jet lag, or shift work—serves as the primary environmental catalyst precipitating acute mood shifts.',
      hi: 'बायपोलर डिसऑर्डर 70% से 85% मामलों में आनुवंशिक कारणों से होता है, जो इसे सबसे अधिक जैविक बीमारियों में से एक बनाता है। मस्तिष्क में कोशिकाओं के आंतरिक सिग्नलिंग सिस्टम (कैल्शियम चैनल्स), माइटोकॉन्ड्रिया की कार्यप्रणाली, और डोपामाइन व सेरोटोनिन रिसेप्टर्स की अत्यधिक संवेदनशीलता इसके मुख्य कारण हैं। इसके अलावा, मस्तिष्क की प्राकृतिक जैविक घड़ी (Circadian rhythm) बहुत नाजुक होती है; नींद में भारी कमी, रात की शिफ्ट में काम, या अत्यधिक मानसिक तनाव इसके नए दौरों को तेजी से भड़का देते हैं।',
      gu: 'બાયપોલર ડિસઓર્ડર ૭૦% થી ૮૫% કિસ્સાઓમાં વારસાગત અને જૈવિક કારણોથી થાય છે. મગજના જ્ઞાનતંતુઓમાં કેલ્શિયમ ચેનલ્સ, ડોપામાઈન અને સેરોટોનિન રસાયણોની અસંતુલિત પ્રક્રિયા આ માટે જવાબદાર છે. આ ઉપરાંત, શરીરની કુદરતી જૈવિક ઘડિયાળ (Circadian rhythm) ની સંવેદનશીલતાને કારણે રાત્રિના ઉજાગરા, ઊંઘની ભારે અનિયમિતતા કે અતિશય માનસિક આઘાત આ બીમારીના હુમલાને અચાનક ઉત્તેજિત કરે છે.',
    },
    riskFactors: {
      en: [
        'First-degree relative (parent or sibling) diagnosed with Bipolar I, Bipolar II, or Schizoaffective disorder',
        'Acute or chronic disruption of circadian rhythms (severe sleep loss, night shift rotations, transmeridian travel)',
        'Use or abuse of stimulant drugs (amphetamines, cocaine, methylphenidate), cannabis, or heavy alcohol',
        'Unsupervised initiation of antidepressant monotherapy in genetically vulnerable individuals without mood stabilizers',
        'Severe emotional distress, physical illness, bereavement, or postpartum hormonal shifts',
      ],
      hi: [
        'परिवार में किसी को बायपोलर डिसऑर्डर, गंभीर अवसाद या सिजोअफेक्टिव डिसऑर्डर होना',
        'नींद के चक्र में भारी गड़बड़ी, कई रातों का लगातार जागना या नाइट शिफ्ट में काम',
        'उत्तेजक नशीले पदार्थों (गांजा, कोकीन, शराब) का सेवन',
        'मूड स्टेबलाइजर के बिना केवल एंटीडिप्रेसेंट दवाओं का अनियंत्रित सेवन (जिससे तेजी या मेनिया भड़क सकता है)',
        'प्रसव के बाद हार्मोनल बदलाव (Postpartum period) या अत्यधिक मानसिक तनाव',
      ],
      gu: [
        'પરિવારમાં માતા-પિતા કે ભાઈ-બહેનને બાયપોલર ડિસઓર્ડર હોવો',
        'ઊંઘના સમયમાં સતત અનિયમિતતા, રાત્રિ ઉજાગરા કે શિફ્ટ ડ્યુટી',
        'કોઈપણ પ્રકારનો નશો (દારૂ, ગાંજો, ઉત્તેજક દવાઓ) કરવો',
        'મૂડ સ્ટેબિલાઇઝર વિના માત્ર એન્ટીડિપ્રેશન દવાઓ લેવી (જેનાથી અતિશય તેજી આવી શકે છે)',
        'ડિલિવરી પછીના હોર્મોનલ ફેરફારો અથવા અતિશય માનસિક આઘાત',
      ],
    },
    psychiatricAssessment: {
      en: 'A meticulous longitudinal diagnostic evaluation conducted by a qualified psychiatrist. Crucial steps include comprehensive collateral history obtained from close family members, partners, or caregivers (as individuals in hypomanic states frequently lack illness awareness and perceive symptoms as enjoyable productivity); longitudinal timeline construction detailing age at first depression, polarity of past episodes, response to past antidepressants, and history of rapid mood switches; systematic screening for suicidal ideation and impulsivity; screening for comorbid substance misuse and ADHD; and medical baseline workup including thyroid function (TSH, free T4), complete metabolic profile, complete blood count, and baseline renal and cardiac status prior to initiating mood stabilizers.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत और गहन मूल्यांकन किया जाता है। मरीज के साथ-साथ उसके करीबी परिजनों से बातचीत बहुत जरूरी होती है, क्योंकि हाइपोमेनिया या तेजी के समय मरीज खुद को बीमार नहीं बल्कि बहुत खुश और ऊर्जावान महसूस करता है। डॉक्टर बचपन से लेकर अब तक के सभी डिप्रेशन और तेजी के दौरों की समय-सारिणी (Timeline) बनाते हैं। आत्महत्या के जोखिम, नशे की लत और एडीएचडी की जांच की जाती है। साथ ही थायरॉयड, किडनी और लिवर की विस्तृत जांच की जाती है ताकि सुरक्षित दवाएं (जैसे लिथियम या वालप्रोएट) शुरू की जा सकें।',
      gu: 'લાયકાત ધરાવતા મનોચિકિત્સક દ્વારા દર્દી અને તેના પરિવારજનો સાથે ઊંડાણપૂર્વક ચર્ચા કરવામાં આવે છે. તેજી (હાઇપોમેનિયા) ના સમયે દર્દી પોતાની જાતને બીમાર માનતો નથી, તેથી કુટુંબીજનો પાસેથી માહિતી મેળવવી અત્યંત મહત્વપૂર્ણ છે. ભૂતકાળના તમામ ડિપ્રેશન અને ઉત્સાહના હુમલાઓની સમયરેખા બનાવવામાં આવે છે. આત્મહત્યાના જોખમ અને નશાની આદતોની ચકાસણી થાય છે. તેમજ દવાઓ (લિથિયમ કે વાલપ્રોએટ) શરૂ કરતાં પહેલાં કિડની, થાઇરોઇડ અને લીવરના જરૂરી લેબ રિપોર્ટ કરવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, Bipolar I Disorder requires at least one lifetime manic episode—defined as a distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased goal-directed activity or energy, lasting at least 1 week and present most of the day, nearly every day (or any duration if hospitalization is necessary). During this period, 3 or more symptoms (4 if mood is only irritable) must be present to a significant degree: inflated self-esteem or grandiosity; decreased need for sleep (e.g., feels rested after 3 hours); more talkative than usual or pressured speech; flight of ideas or racing thoughts; distractibility; increased goal-directed activity or psychomotor agitation; and excessive involvement in activities that have a high potential for painful consequences (e.g., unrestrained buying sprees, sexual indiscretions, or foolish business investments). Bipolar II Disorder requires at least one lifetime hypomanic episode (lasting ≥4 consecutive days without psychotic features or marked functional impairment) AND at least one major depressive episode, without any past full manic episodes. In ICD-11, these are categorized under 6A60 (Bipolar type I) and 6A61 (Bipolar type II).',
      hi: 'DSM-5-TR के अनुसार, बायपोलर I डिसऑर्डर के निदान के लिए जीवन में कम से कम एक बार मैनिक एपिसोड (Mania) का होना अनिवार्य है। मैनिक एपिसोड का अर्थ है कम से कम 1 सप्ताह तक (या अस्पताल में भर्ती होने की स्थिति में किसी भी अवधि के लिए) असामान्य रूप से अत्यधिक उत्साह, उत्तेजना, चिड़चिड़ापन और अत्यधिक ऊर्जा का बना रहना। इस दौरान कम से कम 3 लक्षण (यदि केवल चिड़चिड़ापन हो तो 4 लक्षण) होने चाहिए: (1) खुद को बहुत महान या सर्वशक्तिमान समझना; (2) नींद की जरूरत बहुत घट जाना (2-3 घंटे सोकर भी तरोताजा रहना); (3) बहुत तेज और लगातार बोलना; (4) विचारों का दिमाग में तेजी से दौड़ना; (5) ध्यान भटकना; (6) लगातार बेचैनी या अत्यधिक सक्रियता; (7) जोखिम भरे काम करना (अंधाधुंध पैसे उड़ाना, खतरनाक ड्राइविंग, बेतुके निवेश)। बायपोलर II के लिए जीवन में कम से कम एक बार हाइपोमेनिक एपिसोड (कम से कम 4 दिन तक चलने वाली हल्की तेजी) और कम से कम एक मेजर डिप्रेशन का एपिसोड होना जरूरी है। ICD-11 में इसका कोड 6A60 और 6A61 है।',
      gu: 'DSM-5-TR મુજબ બાયપોલર I ડિસઓર્ડરના સાચા નિદાન માટે જીવનમાં ઓછામાં ઓછો એક સંપૂર્ણ મેનિક એપિસોડ (મેનિયા) હોવો જરૂરી છે. મેનિયા એટલે સતત ઓછામાં ઓછા ૧ અઠવાડિયા સુધી (અથવા દર્દીને દાખલ કરવો પડે તેટલી તીવ્રતા હોય તો) અસામાન્ય ઉત્સાહ, અતિશય ઊર્જા કે અત્યંત ક્રોધ રહેવો. આ સમય દરમિયાન નીચેનામાંથી ઓછામાં ઓછા ૩ લક્ષણો (જો ફક્ત ગુસ્સો હોય તો ૪) હોવા અનિવાર્ય છે: (૧) પોતાને અતિશય મહાન સમજવા (Grandiosity); (૨) ઊંઘની જરૂરિયાત સાવ ઘટી જવી; (૩) સતત અને ઝડપથી બોલવું; (૪) મગજમાં વિચારોની અતિશય દોડધામ; (૫) એકાગ્રતા ન રહેવી; (૬) અતિશય બેચેની કે સતત પ્રવૃત્તિશીલતા; (૭) ભારે આર્થિક કે સામાજિક નુકસાન કરે તેવા અવિચારી નિર્ણયો લેવા. બાયપોલર II માટે ઓછામાં ઓછા ૪ દિવસનો હળવો તેજીનો તબક્કો (હાઇપોમેનિયા) અને એક ગંભીર ડિપ્રેશનનો તબક્કો હોવો જરૂરી છે. ICD-11 માં આનો કોડ 6A60 અને 6A61 છે.',
    },
    differentialConsiderations: {
      en: 'Critical clinical differentials include: Unipolar Major Depressive Disorder (crucial because antidepressant monotherapy without mood stabilizers carries significant risk of precipitating acute mania, rapid cycling, or mixed states); Attention-Deficit/Hyperactivity Disorder (ADHD; lifelong baseline trait of inattention and hyperactivity versus episodic cyclical shifts characteristic of bipolar disorder); Borderline Personality Disorder (rapid, intra-day affective lability triggered by interpersonal rejection vs. sustained multi-day/week episodic mood episodes); Schizoaffective Disorder and Schizophrenia; Substance/Medication-Induced Bipolar Disorder (stimulants, corticosteroids, sympathomimetics); Hyperthyroidism; and Systemic Lupus Erythematosus (SLE) cerebritis.',
      hi: 'इसे साधारण यूनिपोलर डिप्रेशन (क्योंकि बिना मूड स्टेबलाइजर के केवल डिप्रेशन की दवा देने से मेनिया भड़क सकता है); एडीएचडी (ADHD - जो बचपन से लगातार रहने वाला स्वभाव है, जबकि बायपोलर में दौरों के रूप में बदलाव आता है); बॉर्डरलाइन पर्सनालिटी डिसऑर्डर (जिसमें दिन में कई बार मूड बदलता है, जबकि बायपोलर में यह हफ्तों तक स्थिर रहता है); सिजोअफेक्टिव डिसऑर्डर; नशीले पदार्थों या स्टेरॉयड दवाओं के दुष्प्रभाव; और थायरॉयड की अधिकता (Hyperthyroidism) से अलग समझना अत्यंत आवश्यक है।',
      gu: 'આને સામાન્ય ડિપ્રેશન (કારણ કે માત્ર ડિપ્રેશનની દવા આપવાથી દર્દીમાં મેનિયા ઉભરી આવવાનું જોખમ રહે છે); ADHD (જે બાળપણથી ચાલતો સતત સ્વભાવ છે, જ્યારે બાયપોલરમાં સમયાંતરે હુમલા આવે છે); બોર્ડરલાઇન પર્સનાલિટી ડિસઓર્ડર (જેમાં દિવસમાં અનેક વાર મૂડ બદલાય છે જ્યારે બાયપોલરમાં અઠવાડિયા સુધી તેજી કે મંદી રહે છે); સિઝોઅફેક્ટિવ ડિસઓર્ડર; નશા કે સ્ટેરોઇડ્સની આડઅસર; અને થાઇરોઇડની બીમારીથી અલગ તારવવું ખૂબ જરૂરી છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating patient and family about early warning signs of mood shifts and the paramount importance of regular sleep.',
        hi: 'मरीज और परिवार को बीमारी के शुरुआती लक्षणों की पहचान करना और नियमित नींद का महत्व सिखाना।',
        gu: 'દર્દી અને પરિવારને લક્ષણોની શરૂઆતી ઓળખ અને નિયમિત ઊંઘનું મહત્વ સમજાવવું.',
      },
      lifestyleSupport: {
        en: 'Strict circadian rhythm management (regular sleep and wake times), avoidance of alcohol and caffeine, stress management.',
        hi: 'सोने और जागने का पक्का समय तय रखना, नशा और कैफीन से बचना।',
        gu: 'ઊંઘવાનો અને જાગવાનો સમય એકસરખો રાખવો, આલ્કોહોલ કે વધુ પડતી ચા-કોફીથી દૂર રહેવું.',
      },
      psychotherapy: {
        en: 'Social Rhythm Therapy, Family-Focused Therapy, and Cognitive Behavioural Therapy alongside medication.',
        hi: 'सोशल रिदम थेरेपी, फैमिली-फोक्स्ड थेरेपी और कॉग्निटिव बिहेवियरल थेरेपी।',
        gu: 'ફેમિલી-ફોકસ્ડ થેરાપી અને કાઉન્સેલિંગ દવાઓની સાથે ખૂબ મદદરૂપ બને છે.',
      },
      medications: {
        en: 'Mood stabilizers (such as lithium or divalproex) and atypical antipsychotics as prescribed by a psychiatrist. Regular blood monitoring is required for certain mood stabilizers.',
        hi: 'मूड स्टेबलाइजर्स (जैसे लिथियम या सोडियम वालप्रोएट) और एंटीसाइकोटिक्स। कुछ दवाओं के लिए नियमित ब्लड टेस्ट जरूरी होते हैं।',
        gu: 'મૂડ સ્ટેબિલાઇઝર દવાઓ (જેમ કે લિથિયમ) અને અન્ય દવાઓ. કેટલીક દવાઓ માટે નિયમિત બ્લડ ટેસ્ટ જરૂરી હોય છે.',
      },
      familySocialInterventions: {
        en: 'Safety plans for manic episodes, managing financial access during periods of high risk, and caregiver support networks.',
        hi: 'मैनिक दौरों के दौरान सुरक्षा योजना बनाना, आर्थिक लेन-देन पर ध्यान रखना और परिवार को भावनात्मक संबल देना।',
        gu: 'મેનિયા દરમિયાન સુરક્ષાનું આયોજન, નાણાકીય નિર્ણયો પર દેખરેખ અને પરિવારને સહયોગ.',
      },
    },
    treatmentGoals: {
      en: 'Mood stabilization, preventing new manic or depressive episodes, preserving cognitive functioning, and enabling a fulfilling lifestyle.',
      hi: 'मूड को स्थिर रखना, नए दौरों को रोकना और सामान्य जीवनशैली बनाए रखना।',
      gu: 'મૂડને સ્થિર રાખવો, નવા હુમલા અટકાવવા અને સામાન્ય સ્વસ્થ જીવન જીવવું.',
    },
    recoveryOutlook: {
      en: 'With modern, evidence-based psychiatric management, the long-term prognosis for bipolar disorder is very strong. Long-term maintenance pharmacotherapy utilizing mood stabilizers (such as Lithium, Divalproex, or Lamotrigine) and atypical antipsychotics dramatically decreases the frequency, severity, and chronicity of both manic and depressive episodes. When pharmacological adherence is paired with Interpersonal and Social Rhythm Therapy (IPSRT), strict sleep scheduling, substance avoidance, and family support networks, individuals with bipolar disorder regularly achieve decades of sustained euthymia (stable mood), maintaining fulfilling careers, deep family bonds, and creative success.',
      hi: 'आधुनिक मनोचिकित्सा और दवाओं के नियमित उपयोग से बायपोलर डिसऑर्डर से पीड़ित व्यक्ति का भविष्य बहुत ही उज्ज्वल और सुरक्षित होता है। मूड स्टेबलाइजर्स (जैसे लिथियम, वालप्रोएट) और आधुनिक एंटीसाइकोटिक दवाओं के नियमित सेवन से नए दौरों की संभावना और गंभीरता में भारी कमी आती है। दवाओं के साथ-साथ सोने-जागने का सख्त नियम, नशे से पूर्ण परहेज और परिवार के सहयोग से मरीज दशकों तक पूरी तरह स्थिर, खुशहाल और उत्पादक जीवन जीते हैं और करियर व निजी जीवन में शीर्ष सफलता प्राप्त करते हैं।',
      gu: 'આધુનિક મનોચિકિત્સા અને યોગ્ય દવાઓની મદદથી બાયપોલર ડિસઓર્ડર ધરાવતા વ્યક્તિઓનું ભવિષ્ય અત્યંત ઉજ્જવળ અને સુરક્ષિત બની શકે છે. મૂડ સ્ટેબિલાઇઝર (જેમ કે લિથિયમ, વાલપ્રોએટ) અને આધુનિક દવાઓના નિયમિત સેવનથી મેનિયા કે ડિપ્રેશનના હુમલા આવવાની શક્યતા નહિવત્ થઈ જાય છે. નિયમિત દિનચર્યા, ઊંઘનું પાલન, નશાથી સંપૂર્ણ મુક્તિ અને પરિવારના પ્રેમભર્યા સાથથી દર્દીઓ દાયકાઓ સુધી સંપૂર્ણ સામાન્ય, ખુશહાલ અને સફળ જીવન વિતાવે છે.',
    },
    relapsePrevention: {
      en: 'Never abruptly stopping mood stabilizers, preserving nighttime sleep, and seeking early psychiatric consultation at the first sign of mood change.',
      hi: 'दवाएं कभी बीच में न छोड़ना, रात की नींद से समझौता न करना और बदलाव दिखते ही डॉक्टर से मिलना।',
      gu: 'દવાઓ ક્યારેય અચાનક બંધ ન કરવી, ઊંઘ બરાબર લેવી અને ફેરફાર દેખાય કે તરત ડૉક્ટરનો સંપર્ક કરવો.',
    },
    urgentWarningSigns: {
      en: 'Severe insomnia combined with escalating agitation, delusional beliefs, recklessness, or suicidal intent.',
      hi: 'कई दिनों तक बिल्कुल न सोना, अत्यधिक उत्तेजना, असामान्य वहम या खुद को नुकसान पहुंचाने के विचार।',
      gu: 'સતત ઊંઘ ન આવવી, અતિશય આક્રમકતા, વિચિત્ર વહેમો અથવા આત્મહત્યાના વિચારો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Bipolar disorder is just mood swings that change within minutes throughout the day.',
          hi: 'बायपोलर डिसऑर्डर का मतलब है दिन में हर मिनट में मूड बदलना।',
          gu: 'બાયપોલર એટલે દિવસમાં દર થોડી મિનિટે બદલાતો મૂડ.',
        },
        fact: {
          en: 'True bipolar episodes typically last weeks or months at a time, not rapid moment-to-moment emotional reactions.',
          hi: 'बायपोलर में मूड के दौर आमतौर पर कई हफ्तों या महीनों तक लगातार बने रहते हैं, यह मिनटों का बदलाव नहीं होता।',
          gu: 'સાચા બાયપોલર એપિસોડ્સ અઠવાડિયા કે મહિનાઓ સુધી ચાલે છે, તે ક્ષણિક ગુસ્સો કે ચિડચિડાટ નથી.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can a person with bipolar disorder work and have a family?',
          hi: 'क्या बायपोलर डिसऑर्डर वाला व्यक्ति नौकरी कर सकता है और परिवार संभाल सकता है?',
          gu: 'શું બાયપોલર ડિસઓર્ડર ધરાવતી વ્યક્તિ નોકરી અને પારિવારિક જીવન જીવી શકે?',
        },
        answer: {
          en: 'Yes. With proper ongoing medical management, mood stabilization, and healthy sleep habits, many people thrive in their careers and family lives.',
          hi: 'हाँ, बिल्कुल। सही उपचार और नियमित दवाओं के साथ व्यक्ति अपनी नौकरी, पढ़ाई और पारिवारिक जिम्मेदारियां बखूबी निभा सकता है।',
          gu: 'હા, ચોક્કસ. નિયમિત સારવાર અને સ્વસ્થ જીવનશૈલી સાથે વ્યક્તિ પોતાની કારકિર્દી અને પરિવાર ખૂબ સારી રીતે સંભાળી શકે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Twin and family pedigree studies document an exceptionally high heritability of approximately 70% to 85% in bipolar disorder, making it one of the most genetically determined conditions in medicine.',
          hi: 'जुड़वां बच्चों और पारिवारिक अध्ययनों से सिद्ध हुआ है कि बायपोलर डिसऑर्डर में आनुवंशिकता 70% से 85% तक होती है, जिससे यह चिकित्सा विज्ञान की सर्वाधिक आनुवंशिक बीमारियों में से एक है।',
          gu: 'જોડિયા બાળકો અને પારિવારિક અભ્યાસો સાબિત કરે છે કે બાયપોલર ડિસઓર્ડરમાં વારસાગતતા ૭૦% થી ૮૫% જેટલી ઊંચી હોય છે, જે તેને તબીબી વિજ્ઞાનની સૌથી વધુ આનુવંશિક બીમારીઓમાંની એક બનાવે છે.',
        },
        citationRef: 'APA DSM-5-TR',
      },
      {
        fact: {
          en: 'The National Mental Health Survey of India (NMHS 2015-16) documented that individuals with bipolar disorder experience prolonged treatment diagnostic delays averaging several years from initial symptom onset to appropriate mood-stabilizer initiation.',
          hi: 'राष्ट्रीय मानसिक स्वास्थ्य सर्वेक्षण (NMHS 2015-16) के अनुसार भारत में बायपोलर के मरीजों को सही पहचान और उचित मूड-स्टेबलाइजर दवा मिलने में औसतन कई वर्षों की देरी का सामना करना पड़ता है।',
          gu: 'રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય સર્વેક્ષણ (NMHS 2015-16) નોંધે છે કે ભારતમાં બાયપોલરના દર્દીઓને સાચું નિદાન અને યોગ્ય મૂડ-સ્ટેબિલાઇઝર સારવાર મળવામાં સરેરાશ ઘણા વર્ષોનો વિલંબ થાય છે.',
        },
        citationRef: 'National Mental Health Survey of India (NMHS 2015-16)',
      },
      {
        fact: {
          en: 'Long-term maintenance therapy with Lithium significantly decreases the frequency and severity of both manic and depressive recurrences, reducing relapse risk by more than 50% and demonstrating unique anti-suicide properties.',
          hi: 'लिथियम से दीर्घकालिक उपचार मेनिया और डिप्रेशन दोनों के दोबारा लौटने के जोखिम को 50% से अधिक कम करता है और आत्महत्या के जोखिम को प्रभावी रूप से रोकता है।',
          gu: 'લિથિયમ સાથેની લાંબા ગાળાની સારવાર મેનિયા અને ડિપ્રેશન બંનેના ઉથલાનું જોખમ ૫૦% કરતાં વધુ ઘટાડે છે અને આત્મહત્યાના જોખમને વિશેષ રૂપે અટકાવે છે.',
        },
        citationRef: 'CANMAT and ISBD Guidelines 2018',
      },
      {
        fact: {
          en: 'The Indian Psychiatric Society guidelines emphasize that antidepressant monotherapy without a concurrent mood stabilizer is strictly contraindicated due to substantial risks of triggering mania or rapid mood cycling.',
          hi: 'इंडियन साइकियाट्रिक सोसाइटी के अनुसार मूड स्टेबलाइजर के बिना केवल एंटीडिप्रेसेंट दवा देना प्रतिबंधित है, क्योंकि इससे मेनिया भड़कने या मूड में तेजी से उतार-चढ़ाव आने का गंभीर जोखिम रहता है।',
          gu: 'ઇન્ડિયન સાયકિયાટ્રિક સોસાયટી જણાવે છે કે મૂડ સ્ટેબિલાઇઝર વગર માત્ર એન્ટીડિપ્રેશન દવા આપવી જોખમી છે, કારણ કે તેનાથી અતિ-ઉત્સાહ (મેનિયા) ભડકવાનું જોખમ રહે છે.',
        },
        citationRef: 'Indian Psychiatric Society (IPS) Guidelines',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'National Institute of Mental Health and Neurosciences (NIMHANS). National Mental Health Survey of India, 2015-16. Bengaluru: NIMHANS, 2016.',
        source: 'National Mental Health Survey of India (NMHS 2015-16)',
        year: '2016',
      },
      {
        citation: 'Indian Psychiatric Society. Clinical Practice Guidelines for Management of Bipolar Disorder in Adults. Indian J Psychiatry. 2017;59(Suppl 1):S51-S66.',
        source: 'Indian Psychiatric Society (IPS) Guidelines',
        year: '2017',
      },
      {
        citation: 'Yatham LN, Kennedy SH, Parikh SV, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018;20(2):97-170.',
        source: 'CANMAT and ISBD Guidelines 2018',
        year: '2018',
      },
      {
        citation: 'Goodwin GM, Haddad PM, Ferrier IN, et al. Evidence-based guidelines for treating bipolar disorder: Revised third edition recommendations from the British Association for Psychopharmacology (BAP). J Psychopharmacol. 2016;30(6):495-553.',
        source: 'British Association for Psychopharmacology (BAP)',
        year: '2016',
      },
      {
        citation: 'Taylor D, Barnes TR, Young AH. The Maudsley Prescribing Guidelines in Psychiatry, 14th Edition. Oxford: Wiley-Blackwell, 2021.',
        source: 'Maudsley Guidelines',
        year: '2021',
      },
    ],
    educationalVideoTitle: { en: "What is Bipolar Disorder?", hi: "What is Bipolar Disorder?", gu: "What is Bipolar Disorder?" },
    educationalVideoSource: 'National Alliance on Mental Illness (NAMI)',
    lastReviewed: '2026-09',
    relatedIds: ['mood-stabilizers', 'antipsychotics', 'family-psychoeducation', 'depression', 'schizophrenia'],
    relatedContent: {
      conditionSlugs: ['major-depressive-disorder', 'schizophrenia', 'attention-deficit-hyperactivity-disorder-adhd'],
      medicationIds: ['mood-stabilizers', 'antipsychotics', 'medications-for-substance-use-disorders'],
      treatmentIds: ['cbt', 'family-therapy', 'interpersonal-therapy', 'motivational-interviewing', 'ect'],
    },
  },
  {
    id: 'anxiety-gad',
    youtubeVideoId: 'UjPRVKS4OBg',
    slug: 'generalized-anxiety-disorder',
    category: 'anxiety',
    conditionIcon: 'anxiety-gad',
    name: {
      en: 'Generalized Anxiety Disorder (GAD)',
      hi: 'सामान्यीकृत चिंता विकार (GAD)',
      gu: 'સામાન્યકૃત ચિંતા વિકાર (GAD - વધુ પડતી ચિંતા)',
    },
    medicalTerms: {
      en: 'GAD, Chronic Anxiety Neurosis',
      hi: 'जनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD)',
      gu: 'જનરલાઇઝ્ડ એન્ઝાયટી ડિસઓર્ડર (GAD)',
    },
    overview: {
      en: 'Generalized Anxiety Disorder (GAD; ICD-11: 6B00, DSM-5-TR) is a chronic, prevalent neurobiological anxiety condition defined by persistent, pervasive, and disproportionate worry and apprehensive expectation across a broad spectrum of everyday life situations—including family safety, financial stability, health, occupational performance, and minor daily logistics. Individuals find this anticipatory dread virtually uncontrollable and endure chronic somatic hyperarousal, including persistent muscle tension, autonomic restlessness, executive fatigue, and sleep disturbance. Far from ordinary situation-specific stress, GAD represents an unrelenting "threat surveillance mode" wherein the brain perpetually treats remote, benign possibilities as imminent catastrophic crises.',
      hi: 'सामान्यीकृत चिंता विकार (Generalized Anxiety Disorder - GAD) एक गंभीर और लंबे समय तक चलने वाला मानसिक विकार है, जिसमें व्यक्ति किसी एक विशिष्ट बात के बजाय रोजमर्रा की लगभग हर सामान्य परिस्थिति (जैसे परिवार का स्वास्थ्य, आर्थिक स्थिति, नौकरी, बच्चों की सुरक्षा या छोटी-मोटी घरेलू योजनाएं) को लेकर लगातार अत्यधिक, अवास्तविक और अनियंत्रित चिंता में डूबा रहता है। व्यक्ति चाहकर भी इन विचारों को रोक नहीं पाता और उसका शरीर हर समय खतरे की स्थिति (Fight-or-Flight mode) में रहता है। इसके कारण मांसपेशियों में लगातार अकड़न, बेचैनी, अत्यधिक थकान, चिड़चिड़ापन और नींद न आने की गंभीर समस्या पैदा हो जाती है। यह कोई सामान्य घबराहट नहीं, बल्कि मस्तिष्क के चिंता नियंत्रण तंत्र की वास्तविक बीमारी है।',
      gu: 'સામાન્યકૃત ચિંતા વિકાર (Generalized Anxiety Disorder - GAD) એ એક લાંબા ગાળાની અને અત્યંત વ્યાપક મનોવૈજ્ઞાનિક બીમારી છે, જેમાં વ્યક્તિ રોજબરોજની લગભગ તમામ સામાન્ય બાબતો (જેમ કે પરિવારનું સ્વાસ્થ્ય, નોકરી, પૈસા, બાળકોનું ભવિષ્ય કે ઘરની નાની-મોટી યોજનાઓ) અંગે સતત, અતિશય અને નિયંત્રણ બહારની ચિંતામાં ડૂબેલી રહે છે. દર્દી ઈચ્છવા છતાં પોતાના મગજના આ નકારાત્મક વિચારોને અટકાવી શકતો નથી. શરીર સતત તણાવ અને ભયની સ્થિતિમાં રહેવાને કારણે સ્નાયુઓમાં દુખાવો કે જકડાઈ જવું, ગભરામણ, થાક અને ઊંઘ ન આવવાની તકલીફ થાય છે. આ કોઈ સામાન્ય ચિંતા કે વહેમ નથી; પરંતુ મગજની ચેતાપ્રણાલીની અતિસંવેદનશીલતાથી થતી બીમારી છે.',
    },
    illustrativeExamples: [
      {
        en: 'Meera, a 34-year-old high school biology teacher and mother in Surat, lived in a state of unrelenting internal dread for over eighteen months. Every mundane daily circumstance transformed in her mind into an imminent catastrophe. If her husband\'s evening commute was delayed by twenty minutes, she was consumed by vivid panic that he had died in a highway crash, frantically dialing regional emergency rooms. If her nine-year-old son sneezed or developed a mild cough, she spent sleepless nights scouring medical journals for pediatric malignancies. In her teaching role, despite outstanding reviews, she spent hours every night re-checking student exam scores four or five times, paralyzed by irrational convictions that a clerical mistake would destroy her professional standing. Physically, Meera was utterly depleted: her trapezius, jaw, and neck muscles were locked in chronic, agonizing knots; she suffered daily tension headaches and spastic colon symptoms; and as soon as her head touched the pillow, an uncontrollable internal torrent of "what-if" catastrophic scenarios kept her tossing and turning until dawn. Over twelve months, she underwent three normal ECGs, two brain MRIs, and exhaustive endocrine tests, convinced she had an undiagnosed cardiac or neurological disorder. Finally, her physician recognized that her somatic agony represented severe Generalized Anxiety Disorder and referred her to a psychiatrist. Following comprehensive psychiatric evaluation, Meera was prescribed an SSRI (Escitalopram) to rebalance serotonergic and amygdala neural tone, paired with 14 sessions of structured Cognitive Behavioral Therapy (CBT). In CBT, she learned to evaluate cognitive distortions, practiced planned "worry scheduling", and mastered progressive muscle relaxation. Within ten weeks, her physical muscle guarding resolved, restorative sleep returned, and she was able to dismiss catastrophic what-if thoughts with calm objectivity.',
        hi: 'सूरत की 34 वर्षीय हाई स्कूल शिक्षिका और एक बच्चे की मां, मीरा पिछले डेढ़ साल से एक भयानक और अनियंत्रित चिंता के साए में जी रही थी। हर छोटी-मोटी बात उसके दिमाग में एक बड़े खतरे का रूप ले लेती थी। यदि उसके पति को ऑफिस से घर लौटने में 20 मिनट की भी देर हो जाती, तो वह कांपने लगती थी और उसे लगता था कि उनका सड़क हादसा हो गया है, जिसके चलते वह घबराकर अस्पतालों में फोन करने लगती थी। यदि उसके 9 साल के बेटे को हल्की सी छींक भी आ जाती, तो वह इंटरनेट पर दुर्लभ और जानलेवा बीमारियों की खोज में रातें बिता देती थी। स्कूल में बेहतरीन शिक्षिका होने के बावजूद, वह डर के मारे रात-रात भर बच्चों के रिजल्ट तीन-चार बार चेक करती थी कि कहीं कोई गलती होने से उसकी नौकरी न चली जाए। शारीरिक रूप से मीरा पूरी तरह टूट चुकी थी—उसकी गर्दन, कंधों और जबड़े की मांसपेशियां हमेशा अकड़ी रहती थीं, सिर में लगातार दर्द रहता था और रात को बिस्तर पर जाते ही दिमाग में "अगर ऐसा हो गया तो क्या होगा?" के भयानक विचारों का तूफान शुरू हो जाता था, जिससे वह बमुश्किल दो-तीन घंटे सो पाती थी। एक साल में उसने दिल के तीन ईसीजी, दो ब्रेन एमआरआई और कई ब्लड टेस्ट करवाए क्योंकि उसे लगता था कि उसे कोई गंभीर शारीरिक बीमारी है। आखिरकार एक डॉक्टर ने उसकी समस्या को समझा और उसे मनोचिकित्सक के पास भेजा। डॉक्टर ने जनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD) का निदान किया और SSRI दवा (एस्सिटालोप्राम) तथा कॉग्निटिव बिहेवियरल थेरेपी (CBT) शुरू की। थेरेपी में मीरा ने नकारात्मक विचारों को तर्क से परखना और गहरी सांस लेने के व्यायाम सीखे। दो महीने के भीतर उसकी मांसपेशियों का दर्द खत्म हुआ, रात को सुकून भरी नींद आने लगी और वह डर की कैद से निकलकर एक शांत और खुशहाल जीवन जीने लगी।',
        gu: 'સુરતની ૩૪ વર્ષીય હાઇસ્કૂલ શિક્ષિકા અને એક બાળકની માતા મીરા છેલ્લા દોઢ વર્ષથી અતિશય અને સતત ચિંતાના ભયંકર બોજ હેઠળ જીવી રહી હતી. રોજિંદી નાની નાની બાબતો તેના મગજમાં મોટો ઉત્પાત મચાવતી હતી. જો તેના પતિને ઑફિસેથી આવવામાં માત્ર વીસ મિનિટ મોડું થાય, તો તેના ધબકારા વધી જતા અને તેને પાકી ખાતરી થઈ જતી કે પતિનો કોઈ ગંભીર અકસ્માત થઈ ગયો છે. જો તેના નવ વર્ષના દીકરાને સામાન્ય ખાંસી આવે, તો તે આખી રાત ઇન્ટરનેટ પર જીવલેણ બીમારીઓ વિશે વાંચીને ગભરાયા કરતી. શાળામાં એક ઉત્કૃષ્ટ શિક્ષિકા હોવા છતાં, કોઈ ભૂલ થઈ જશે અને નોકરી છૂટી જશે તેવા અવાસ્તવિક ડરથી તે રાત્રે પરીક્ષાના પેપરો ત્રણ-ત્રણ વાર તપાસતી રહેતી. શારીરિક રીતે મીરા સાવ થાકી ગઈ હતી—તેના ગળા અને ખભાના સ્નાયુઓ સતત પથ્થર જેવા જકડાયેલા રહેતા, માથામાં સતત દુખાવો રહેતો અને રાત્રે પથારીમાં પડતાં જ મગજમાં "જો આમ થશે તો શું થશે?" ના વિચારોની દોડધામ શરૂ થઈ જતી, જેથી તે આખી રાત પડખાં જ ઘસતી. એક વર્ષમાં તેણે હૃદયના ત્રણ ECG, મગજનો MRI અને અસંખ્ય રિપોર્ટ કરાવ્યા કારણ કે તેને લાગતું હતું કે તેને હૃદયરોગ છે. છેવટે એક ડૉક્ટરે તેને મનોચિકિત્સક પાસે મોકલી. મનોચિકિત્સકે જી.એ.ડી. (GAD) નું નિદાન કર્યું અને યોગ્ય દવા (SSRI) સાથે કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) શરૂ કરી. કાઉન્સેલિંગમાં મીરાએ ખોટા ભયને ઓળખવાનું અને સ્નાયુઓને રિલેક્સ રાખવાનું શીખ્યું. બે મહિનામાં તેના શરીરનો તણાવ દૂર થયો, શાંત ઊંઘ પાછી આવી અને તે ફરીથી હસતા મુખે પોતાની નોકરી અને પરિવાર સંભાળવા લાગી.',
      },
      {
        en: 'Rajesh, a 46-year-old small business accountant in Ahmedabad, lived with an internal background hum of relentless worry about financial solvency, tax filings, and family security. Even when business revenues were solid and savings adequate, Rajesh lay awake nightly mentally auditing spreadsheets and anticipating catastrophic bankruptcy. The chronic anxiety manifested physically as irritable bowel flare-ups, recurrent tension headaches, and severe clenching of his jaw (bruxism). He was perpetually irritable with his teenage children and unable to relax during family holidays. When a medical gastroenterology workup yielded negative findings for ulcer disease, his doctor suggested addressing his underlying autonomic arousal. A psychiatric assessment identified moderate GAD. Initiated on an SNRI (Duloxetine) and guided through CBT that incorporated structured "worry postponement" techniques and progressive muscle relaxation, Rajesh noted that within six weeks his abdominal cramping had resolved and he was able to enjoy evening dinners without persistent dread.',
        hi: 'अहमदाबाद के 46 वर्षीय एकाउंटेंट राजेश को व्यवसाय की आर्थिक स्थिति, टैक्स और भविष्य की सुरक्षा को लेकर हमेशा एक अनजाना डर लगा रहता था। आमदनी अच्छी होने और पर्याप्त बचत होने के बावजूद वे रात-रात भर पैसों का हिसाब जोड़ते रहते थे और किसी कल्पित कंगाली के डर से बेचैन रहते थे। इस निरंतर चिंता के कारण उनके पेट में अक्सर दर्द व ऐंठन (IBS), सिरदर्द और सोते समय दांत पीसने की आदत हो गई थी। वे बच्चों पर बेवजह चिल्ला पड़ते थे और छुट्टियों में भी तनावमुक्त नहीं हो पाते थे। पेट के सभी टेस्ट सामान्य आने पर डॉक्टर ने उन्हें मनोचिकित्सक के पास भेजा। डॉक्टर ने GAD का निदान कर SNRI दवा और सीबीटी थेरेपी शुरू की। थेरेपी में राजेश ने चिंता के समय को सीमित करना और मांसपेशियों को ढीला छोड़ना सीखा। छह हफ्तों के भीतर उनके पेट की ऐंठन खत्म हो गई और वे निश्चिंत होकर परिवार के साथ समय बिताने लगे।',
        gu: 'અમદાવાદના ૪૬ વર્ષીય એકાઉન્ટન્ટ રાજેશભાઈને હંમેશા નાણાકીય નુકસાન, ટેક્સ અને ભવિષ્યની સુરક્ષા અંગે અવિરત ચિંતા સતાવ્યા કરતી હતી. વેપાર સારો ચાલતો હોવા છતાં અને બેંકમાં પૂરતી બચત હોવા છતાં તેઓ રાત્રે જાગીને હિસાબો ગણ્યા કરતા અને દેવું થઈ જશે તેવા ખોટા ભયમાં રહેતા. આ લાંબા ગાળાની ચિંતાથી તેમના પેટમાં સતત ગરબડ રહેતી (IBS), માથું ભારે રહેતું અને ઊંઘમાં દાંત કચકચાવતા હતા. તેઓ પરિવાર સાથે ફરવા ગયા હોય તો પણ હળવાશ નહોતા અનુભવી શકતા. પેટના તમામ મેડિકલ રિપોર્ટ નોર્મલ આવ્યા પછી ફેમિલી ડૉક્ટરે તેમને મનોચિકિત્સક પાસે મોકલ્યા. ડૉક્ટરે GAD નું નિદાન કરી SNRI દવા અને CBT કાઉન્સેલિંગ શરૂ કર્યું. છ અઠવાડિયામાં તેમના પેટનો દુખાવો મટી ગયો, શાંતિથી ઊંઘવા લાગ્યા અને પરિવાર સાથે હસી-ખુશીથી રહેવા માંડ્યા.',
      },
      {
        en: 'Divya, a 23-year-old postgraduate biotechnology student in New Delhi, experienced crippling anxiety that escalated dramatically during laboratory examinations. Despite earning high marks, Divya constantly compared herself unfavorably to classmates and lived in mortal terror that an accidental pipetting mistake would ruin her research project and result in academic expulsion. Her anxiety manifested with persistent nausea, trembling hands, restless legs, and severe sleep-onset insomnia where she replayed imaginary academic failures. When her physical shaking began interfering with laboratory titrations, she visited the university health center. A clinical psychologist and psychiatrist diagnosed GAD with perfectionistic performance anxiety. Divya was prescribed a low-dose SSRI and completed a protocol of Acceptance and Commitment Therapy (ACT) focused on psychological flexibility, mindfulness, and defusing from catastrophic self-doubt. Within two months, Divya regained steady fine-motor control in the lab, mastered healthy study-rest boundaries, and pursued her dissertation with calm confidence.',
        hi: 'नई दिल्ली की 23 वर्षीय बायोटेक्नोलॉजी की छात्रा दिव्या को लैब परीक्षाओं और थीसिस को लेकर अत्यधिक और अनियंत्रित चिंता रहती थी। हमेशा अच्छे अंक लाने के बावजूद वह खुद की तुलना दूसरों से करके हीन भावना महसूस करती थी और उसे हर समय डर रहता था कि एक छोटी सी गलती से उसका पूरा करियर खत्म हो जाएगा। इस चिंता के कारण उसके हाथ कांपते थे, जी मिचलाता था और रात में घंटों नींद नहीं आती थी। लैब में काम करते समय हाथ कांपने से जब उसके प्रैक्टिकल प्रभावित होने लगे, तो उसने यूनिवर्सिटी हेल्थ सेंटर में दिखाया। डॉक्टरों ने GAD और परफेक्शनिज्म जनित एंग्जायटी की पहचान की। कम खुराक वाली SSRI दवा और माइंडफुलनेस-आधारित थेरेपी से दो महीने में दिव्या के हाथों का कांपना बंद हुआ, आत्मविश्वास लौटा और उसने बिना किसी डर के अपनी डिग्री पूरी की।',
        gu: 'નવી દિલ્હીની ૨૩ વર્ષીય બાયોટેકનોલોજીની વિદ્યાર્થીની દિવ્યા લેબ પ્રેક્ટિકલ અને થીસીસને લઈને અતિશય ચિંતાથી પીડાતી હતી. સારા માર્ક્સ લાવવા છતાં તે સતત પોતાની જાતને બીજા કરતા ઉતરતી માનતી અને તેને ભય રહેતો કે એક નાની ભૂલથી તેનો સમગ્ર અભ્યાસ બગડી જશે. આ સતત ચિંતાને કારણે તેના હાથ ધ્રૂજતા, ઉબકા આવતા અને રાત્રે અનિદ્રા રહેતી. લેબમાં કેમિકલ્સનું કામ કરતી વખતે હાથ ધ્રૂજવાને કારણે જ્યારે તકલીફ વધી, ત્યારે તેણે હેલ્થ સેન્ટરમાં તપાસ કરાવી. મનોચિકિત્સકે GAD નું નિદાન કરી હળવી દવા અને માઇન્ડફુલનેસ થેરાપી શરૂ કરાવી. બે મહિનામાં દિવ્યાના હાથની ધ્રુજારી બંધ થઈ, મગજનો ગભરાટ શમ્યો અને તેણે પૂર્ણ આત્મવિશ્વાસ સાથે પોતાનો સંશોધન પ્રોજેક્ટ સફળતાપૂર્વક પૂર્ણ કર્યો.',
      },
    ],
    commonSymptoms: {
      en: [
        'Persistent, uncontrollable worry nearly every day',
        'Restlessness, feeling keyed up or on edge',
        'Muscle tension, aches, or soreness (especially neck and shoulders)',
        'Difficulty concentrating or mind going blank',
        'Fatigue and irritability',
        'Sleep difficulties (trouble falling asleep due to racing worries)',
        'Physical symptoms: trembling, sweating, palpitations, stomach upset',
      ],
      hi: [
        'हर छोटी-बड़ी बात पर लगातार अनियंत्रित चिंता बने रहना',
        'बेचैनी और हमेशा तनाव में (on edge) महसूस करना',
        'मांसपेशियों में खिंचाव या दर्द (विशेषकर गर्दन और कंधों में)',
        'एकाग्रता में कमी या दिमाग सुन्न हो जाना',
        'जल्दी थकान और चिड़चिड़ापन होना',
        'चिंताओं के कारण रात में नींद आने में परेशानी होना',
        'शारीरिक लक्षण: दिल की धड़कन तेज होना, पसीना आना, पेट में मरोड़',
      ],
      gu: [
        'રોજિંદી નાની-મોટી બાબતો અંગે સતત બેચેની અને ચિંતા',
        'શરીરમાં સતત અજંપો અને તણાવ રહેવો',
        'સ્નાયુઓમાં દુખાવો કે જકડાઈ જવું (ખાસ કરીને ગરદન અને ખભામાં)',
        'ધ્યાન ન લાગવું અથવા મગજ બહેર મારી જવું',
        'ઝડપથી થાકી જવું અને સ્વભાવ ચીડિયો થઈ જવો',
        'ચિંતાઓના કારણે રાત્રે ઊંઘ ન આવવી',
        'શારીરિક લક્ષણો: ધબકારા વધવા, પરસેવો વળવો, પેટમાં ગરબડ',
      ],
    },
    dailyLifeImpact: {
      en: 'GAD insidiously erodes professional productivity, domestic serenity, and cognitive functioning. The overwhelming cognitive overhead of constant threat appraisal creates executive exhaustion, chronic procrastination, and severe decision paralysis over routine choices. Somatically, sustained sympathetic fight-or-flight overdrive leads to incapacitating tension headaches, myofascial chronic pain, gastrointestinal disturbances (such as irritable bowel syndrome), and insomnia. Interpersonally, persistent reassurance-seeking frequently strains marital and family relationships, while repetitive unrevealing emergency consultations generate high healthcare expenditures.',
      hi: 'जनरलाइज्ड एंग्जायटी डिसऑर्डर व्यक्ति के काम, पारिवारिक शांति और सोचने की क्षमता को बुरी तरह प्रभावित करता है। हर समय खतरे का अंदेशा रहने से दिमाग बुरी तरह थक जाता है, जिसके कारण छोटी-छोटी बातें तय करने में भी भारी असमंजस (Decision paralysis) होता है और काम में देरी होने लगती है। शारीरिक स्तर पर, लगातार तनाव के कारण सिरदर्द, मांसपेशियों में असहनीय दर्द, पाचन में गड़बड़ी (IBS) और नींद का अभाव बना रहता है। मरीज बार-बार अपने परिवार वालों से तसल्ली मांगता रहता है ("सब ठीक तो हो जाएगा ना?"), जिससे पारिवारिक रिश्तों में खिंचाव आ जाता है, और बार-बार गैर-जरूरी मेडिकल जांच कराने से भारी आर्थिक खर्च होता है।',
      gu: 'આ બીમારી વ્યક્તિની કાર્યક્ષમતા, ઘરની શાંતિ અને માનસિક સુખાકારીને ધીમે ધીમે કોરી ખાય છે. સતત ચિંતા અને ભયના કારણે મગજ એટલું થાકી જાય છે કે નાના નાના નિર્ણયો લેવામાં પણ ભારે મુશ્કેલી પડે છે અને કામકાજમાં વિલંબ થાય છે. શારીરિક રીતે, સતત તણાવના કારણે માથાનો સખત દુખાવો, ગરદન-પીઠના સ્નાયુઓમાં કળતર, પેટની ગરબડ (IBS) અને અનિદ્રાની સમસ્યા રહે છે. દર્દી પરિવારજનો પાસેથી વારંવાર ખાતરી માંગ્યા કરે છે કે "બધું બરાબર છે ને?", જેનાથી સંબંધોમાં તણાવ ઊભો થાય છે, અને વારંવાર તબીબી તપાસો પાછળ મોટો આર્થિક ખર્ચ થાય છે.',
    },
    causes: {
      en: 'The etiology of GAD reflects an intricate convergence of polygenic vulnerability (heritability estimated between 30% and 40%), hyperreactive neural circuitry, and cognitive vulnerabilities. Neurobiologically, functional neuroimaging demonstrates hyper-reactivity in the basolateral amygdala and anterior insula paired with compromised top-down inhibitory connectivity from the dorsolateral prefrontal cortex and anterior cingulate cortex. Neurochemical abnormalities include blunted gamma-aminobutyric acid (GABA-A) receptor sensitivity, reduced serotonergic tone, and noradrenergic hyper-responsiveness. Cognitively, individuals exhibit high intolerance of uncertainty, attentional bias toward ambiguous environmental cues, and maladaptive metacognitive beliefs (believing worry serves as a magical shield against tragedy).',
      hi: 'जनरलाइज्ड एंग्जायटी डिसऑर्डर के कारणों में लगभग 30% से 40% आनुवंशिक प्रभाव होता है, जो मस्तिष्क की खास कार्यप्रणाली से जुड़ा है। न्यूरोइमेजिंग अध्ययनों से पता चलता है कि मस्तिष्क का भय केंद्र (Amygdala) अत्यधिक संवेदनशील हो जाता है और तर्क करने वाला प्रीफ्रंटल कॉर्टेक्स इसे ठीक से शांत नहीं कर पाता। मस्तिष्क के रसायनों—विशेष रूप से GABA (जो दिमाग को शांत करता है) और सेरोटोनिन—के संतुलन में कमी आ जाती है। इसके अलावा, अनिश्चितता को बिल्कुल सहन न कर पाना, हर स्थिति में अनहोनी की आशंका देखना और यह गलत विश्वास कि "चिंता करने से कोई अनहोनी टल जाएगी", इस बीमारी के मुख्य कारण हैं।',
      gu: 'GAD થવા પાછળ ૩૦% થી ૪૦% જેટલો હિસ્સો વારસાગત અને જૈવિક પરિબળોનો હોય છે. મગજનો ભય પારખતો ભાગ (Amygdala) જરૂર કરતાં વધારે સક્રિય થઈ જાય છે અને મગજનો નિયંત્રણ કરતો ભાગ તેને શાંત પાડી શકતો નથી. મગજના શાંતિ આપતા રસાયણો જેવા કે ગાબા (GABA) અને સેરોટોનિનની કાર્યક્ષમતા ઘટી જાય છે. આ ઉપરાંત, જીવનમાં સહેજ પણ અનિશ્ચિતતા સહન ન થવી, દરેક વાતમાં ખરાબ પરિણામની જ કલ્પના કરવી અને એવી ખોટી માન્યતા કે "ચિંતા કરવાથી બધું સલામત રહેશે", આ રોગને વધુ વકરાવે છે.',
    },
    riskFactors: {
      en: [
        'First-degree biological relative with Generalized Anxiety Disorder, panic disorder, or major depression',
        'History of chronic childhood adversity, emotional neglect, or severe early developmental stressors',
        'Personality traits of high behavioral inhibition and neuroticism (innate threat sensitivity)',
        'Excessive consumption of central nervous system stimulants (caffeine, energy drinks, nicotine)',
        'Chronic physical health conditions, chronic pain syndromes, or autoimmune disorders',
      ],
      hi: [
        'परिवार में माता-पिता या भाई-बहन को चिंता विकार, पैनिक डिसऑर्डर या डिप्रेशन होना',
        'बचपन में अत्यधिक तनाव, असुरक्षित माहौल या भावनात्मक उपेक्षा का शिकार होना',
        'जन्मजात संवेदनशील स्वभाव और छोटी-छोटी बातों पर अत्यधिक घबराने की प्रवृत्ति',
        'अत्यधिक चाय, कॉफी, एनर्जी ड्रिंक्स या तंबाकू का सेवन करना',
        'लंबे समय से चली आ रही शारीरिक बीमारियां या पुराना दर्द',
      ],
      gu: [
        'પરિવારમાં કોઈને વધુ પડતી ચિંતા, પેનિક એટેક કે ડિપ્રેશનની તકલીફ હોવી',
        'બાળપણમાં સતત અસુરક્ષા, આઘાત કે પારિવારિક કંકાસનો અનુભવ',
        'સ્વભાવગત રીતે અતિસંવેદનશીલ હોવું અને નાની વાતોમાં ગભરાઈ જવાની વૃત્તિ',
        'વધુ પડતી ચા, કૉફી, એનર્જી ડ્રિંક્સ કે તમાકુ-સિગારેટનું સેવન',
        'લાંબા સમયની શારીરિક બીમારીઓ કે ક્રોનિક પેઇન (જૂનો દુખાવો)',
      ],
    },
    psychiatricAssessment: {
      en: 'A thorough clinical diagnostic evaluation conducted by a qualified psychiatrist. The evaluation entails a comprehensive psychiatric clinical interview charting the scope, chronicity, and uncontrollability of excessive worry across multiple spheres for at least 6 months; standardized clinical rating utilizing tools such as the GAD-7 scale; detailed somatic inventory assessing muscle hypertonicity, sleep architecture disruption, and autonomic hyperactivity; screening for common psychiatric comorbidities (notably Major Depressive Disorder, panic attacks, social anxiety, and sedative/alcohol self-medication); and laboratory testing including thyroid function tests (TSH, free T4), complete blood counts, metabolic panels, and an ECG to rule out physical etiologies.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत और चरणबद्ध चिकित्सकीय परीक्षण किया जाता है। डॉक्टर मरीज से कम से कम 6 महीने से चली आ रही चिंताओं की प्रकृति, गंभीरता और उनके अनियंत्रित होने के बारे में विस्तार से चर्चा करते हैं। GAD-7 जैसे प्रमाणित पैमानों का उपयोग करके चिंता की तीव्रता मापी जाती है। मांसपेशियों के तनाव, नींद के चक्र और शरीर के अन्य लक्षणों का आकलन किया जाता है। डिप्रेशन, पैनिक अटैक या शराब द्वारा खुद को शांत करने की आदतों की जांच होती है। साथ ही थायरॉयड, सीबीसी और ईसीजी जैसे जरूरी टेस्ट किए जाते हैं ताकि शारीरिक कारणों को खारिज किया जा सके।',
      gu: 'લાયકાત ધરાવતા મનોચિકિત્સક દ્વારા સંપૂર્ણ ક્લિનિકલ તપાસ કરવામાં આવે છે. ડૉક્ટર છેલ્લા ૬ મહિનાથી ચાલી રહેલી ચિંતાઓની સમયરેખા, તેની તીવ્રતા અને દર્દી તેના પર કાબૂ રાખી શકે છે કે કેમ તેની વિગતવાર તપાસ કરે છે. GAD-7 જેવા પ્રમાણિત સ્કેલ દ્વારા બીમારીની ગંભીરતા નક્કી થાય છે. સ્નાયુઓનો તણાવ, ઊંઘનું પ્રમાણ અને અન્ય શારીરિક લક્ષણો નોંધવામાં આવે છે. ડિપ્રેશન કે પેનિક એટેક જેવી અન્ય સહ-બીમારીઓની તપાસ થાય છે. તેમજ થાઇરોઇડ અને ECG જેવા ટેસ્ટ કરીને ચકાસવામાં આવે છે કે કોઈ શારીરિક બીમારી તો નથી ને.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, Generalized Anxiety Disorder requires excessive anxiety and worry (apprehensive expectation), occurring more days than not for at least 6 months, about a number of events or activities (such as work or school performance). The individual finds it difficult to control the worry. The anxiety and worry are associated with at least 3 of the following 6 symptoms (with at least some symptoms present for more days than not for the past 6 months): (1) restlessness or feeling keyed up or on edge; (2) being easily fatigued; (3) difficulty concentrating or mind going blank; (4) irritability; (5) muscle tension; (6) sleep disturbance (difficulty falling or staying asleep, or restless, unsatisfying sleep). The anxiety, worry, or physical symptoms cause clinically significant distress or impairment in social, occupational, or other important areas of functioning, and are not attributable to the physiological effects of a substance or another medical condition. In ICD-11, this condition is codified under 6B00.',
      hi: 'DSM-5-TR के अनुसार, GAD के सही निदान के लिए कम से कम 6 महीने तक ज्यादातर दिनों में कई सामान्य विषयों (जैसे काम, पढ़ाई, स्वास्थ्य) पर अत्यधिक और अवास्तविक चिंता का होना जरूरी है। व्यक्ति के लिए इस चिंता को नियंत्रित करना बहुत कठिन होता है। इसके साथ ही नीचे दिए गए 6 में से कम से कम 3 लक्षणों का मौजूद होना अनिवार्य है: (1) बेचैनी या हमेशा खिंचाव/तनाव में महसूस करना; (2) बहुत जल्दी थकान होना; (3) ध्यान केंद्रित करने में कठिनाई या दिमाग का सुन्न हो जाना; (4) चिड़चिड़ापन; (5) मांसपेशियों में खिंचाव या दर्द; (6) नींद में गड़बड़ी (देर से नींद आना, बार-बार नींद टूटना या बेचैन नींद)। यह स्थिति व्यक्ति के सामाजिक, कामकाजी और व्यक्तिगत जीवन को बाधित करती है और किसी शारीरिक बीमारी या नशे के कारण नहीं होती। ICD-11 में इसे 6B00 के अंतर्गत वर्गीकृत किया गया है।',
      gu: 'DSM-5-TR ના માપદંડો મુજબ, GAD ના સાચા નિદાન માટે વ્યક્તિમાં ઓછામાં ઓછા ૬ મહિના સુધી મોટાભાગના દિવસોમાં વિવિધ સામાન્ય બાબતો પર અતિશય અને અવાસ્તવિક ચિંતા હોવી અનિવાર્ય છે. આ ચિંતા પર કાબૂ રાખવો દર્દી માટે અશક્ય બને છે. તેની સાથે નીચે દર્શાવેલા ૬ માંથી ઓછામાં ઓછા ૩ લક્ષણો હાજર હોવા જોઈએ: (૧) સતત બેચેની કે શરીરમાં ખેંચાણનો અનુભવ; (૨) ખૂબ ઝડપથી થાકી જવું; (૩) એકાગ્રતા ન જળવાવી કે મગજ બહેર મારી જવું; (૪) સ્વભાવમાં ચીડિયાપણું; (૫) સ્નાયુઓમાં દુખાવો કે જકડાઈ જવું; (૬) ઊંઘની સમસ્યા (ઊંઘ આવવામાં મુશ્કેલી કે અશાંત ઊંઘ). આ લક્ષણો દર્દીના કામકાજ, સામાજિક સંબંધો અને વ્યક્તિગત સુખાકારીમાં ગંભીર બાધા પહોંચાડતા હોવા જોઈએ. ICD-11 માં આનો કોડ 6B00 છે.',
    },
    differentialConsiderations: {
      en: 'Essential clinical differentials include: Panic Disorder (characterized by discrete, acute paroxysms of catastrophic terror with peak within minutes, rather than the chronic, steady-state rumination of GAD); Social Anxiety Disorder (anxiety restricted to social evaluation and public performance); Obsessive-Compulsive Disorder (intrusive, ego-dystonic obsessions linked to compulsive neutralizing rituals vs. broad ego-syntonic real-life worries in GAD); Major Depressive Disorder (ruminations centered on past failure, worthlessness, and guilt rather than future anticipatory threat); Adult ADHD (chronic distractibility without pervasive autonomic dread); Hyperthyroidism; Pheochromocytoma; Cardiac arrhythmias; and excessive caffeine or sympathomimetic intake.',
      hi: 'इसे पैनिक डिसऑर्डर (जिसमें अचानक तीव्र घबराहट का 10-20 मिनट का दौरा पड़ता है, जबकि GAD में लगातार पूरे दिन चिंता बनी रहती है); सोशल एंग्जायटी डिसऑर्डर (जिसमें चिंता केवल लोगों के सामने बोलने या मिलने तक सीमित होती है); ओसीडी (OCD - जिसमें अजीब अनचाहे विचार और बार-बार हाथ धोने जैसी क्रियाएं होती हैं); डिप्रेशन (जिसमें चिंता के बजाय पुरानी गलतियों पर पछतावा और उदासी होती है); थायरॉयड की बीमारी (Hyperthyroidism); अत्यधिक चाय-कॉफी का सेवन; और दिल की धड़कन की गड़बड़ी (Arrhythmias) से अलग पहचानना जरूरी होता है।',
      gu: 'આને પેનિક ડિસઓર્ડર (જેમાં અચાનક થોડીવાર માટે તીવ્ર ગભરામણનો હુમલો આવે છે, જ્યારે GAD માં આખો દિવસ સતત ચિંતા રહે છે); સોશિયલ એન્ઝાયટી (જેમાં માત્ર લોકોની વચ્ચે જતાં ડર લાગે છે); OCD (જેમાં મનમાં અનિચ્છનીય વિચારો અને વારંવાર એકનું એક કામ કરવાની આદત હોય છે); ડિપ્રેશન (જેમાં ભૂતકાળના પસ્તાવા અને નિરાશા વધુ હોય છે); થાઇરોઇડની અતિસક્રિયતા; વધુ પડતું કેફીન; અને હૃદયના ધબકારાની અનિયમિતતાથી અલગ તારવવું અત્યંત મહત્વપૂર્ણ છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Explaining the fight-or-flight response, bodily sensations of anxiety, and distinguishing helpful worry from chronic debilitating anxiety.',
        hi: 'चिंता के समय शरीर में होने वाली प्रतिक्रियाओं (जैसे धड़कन बढ़ना) को समझाना ताकि डर कम हो सके।',
        gu: 'શરીરમાં ચિંતા વખતે થતી શારીરિક પ્રતિક્રિયાઓ (ધબકારા વધવા વગેરે) વિશે વૈજ્ઞાનિક સમજ આપવી.',
      },
      lifestyleSupport: {
        en: 'Gradual reduction of caffeine and nicotine, daily aerobic walking, relaxation exercises (deep diaphragmatic breathing, Jacobson progressive muscle relaxation).',
        hi: 'कैफीन और तंबाकू छोड़ना, रोज 30 मिनट तेज टहलना, गहरी सांस लेने के व्यायाम और प्राणायाम।',
        gu: 'ચા-કોફી ઓછી કરવી, રોજ ચાલવું, ઊંડા શ્વાસ લેવાની કસરતો અને રિલેક્સેશન ટેકનિક્સ.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioural Therapy (CBT) is highly effective, targeting worry beliefs, catastrophic interpretations, and avoidance behaviors.',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT), जो नकारात्मक विचारों और अत्यधिक आशंकाओं को संतुलित करने में मदद करती है।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) જે નકારાત્મક ચિંતાઓને યોગ્ય રીતે નિયંત્રિત કરવાનું શીખવે છે.',
      },
      medications: {
        en: 'SSRIs or SNRIs are first-line medications prescribed by a psychiatrist. Short-term medications may be used cautiously during the initial titration under strict supervision.',
        hi: 'मनोचिकित्सक द्वारा सुझाई गई प्रथम श्रेणी की दवाएं (जैसे SSRIs)। दवाएं हमेशा डॉक्टर की सलाह से ही लेनी चाहिए।',
        gu: 'મનોચિકિત્સક દ્વારા સૂચવાયેલી SSRI જેવી દવાઓ. આ દવાઓ નિયમિત અને ડૉક્ટરના કહ્યા મુજબ જ લેવી.',
      },
      familySocialInterventions: {
        en: 'Helping family avoid excessive reassurance-seeking loops while remaining emotionally supportive.',
        hi: 'परिवार को यह समझाना कि बार-बार "कुछ नहीं होगा" कहकर तसल्ली देने के बजाय मरीज को आत्मनिर्भर बनने में मदद करें।',
        gu: 'પરિવારને સમજાવવું કે દર્દીને વારંવાર ખાતરી આપવાના બદલે તેને હિંમતપૂર્વક સ્થિતિનો સામનો કરવા પ્રોત્સાહિત કરે.',
      },
    },
    treatmentGoals: {
      en: 'Substantial reduction of worry frequency, elimination of physical muscle tension, sound sleep, and fearless engagement in daily life.',
      hi: 'चिंताओं में कमी, मांसपेशियों के तनाव से राहत, अच्छी नींद और सामान्य आत्मविश्वास वापस पाना।',
      gu: 'ચિંતાઓમાં નોંધપાત્ર ઘટાડો, સ્નાયુઓના તણાવમાંથી મુક્તિ અને શાંત ઊંઘ મેળવવી.',
    },
    recoveryOutlook: {
      en: 'The recovery outlook for Generalized Anxiety Disorder is exceptionally positive when addressed with modern evidence-based psychiatric care. Combining first-line pharmacotherapies (such as modern SSRIs like Escitalopram or Sertraline, or SNRIs like Venlafaxine or Duloxetine) with manualized Cognitive Behavioral Therapy (CBT) achieves meaningful clinical response or complete symptomatic remission in over 70% to 80% of individuals. Over the course of treatment, patients routinely experience profound relief from chronic muscle guarding, restoration of deep restorative sleep, elimination of catastrophic thought spirals, and a complete rejuvenation of vocational vitality and domestic joy.',
      hi: 'आधुनिक मनोचिकित्सा और मनोवैज्ञानिक उपचारों के साथ जनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD) का भविष्य अत्यंत आशाजनक और सकारात्मक है। पहली पंक्ति की आधुनिक दवाओं (जैसे SSRIs या SNRIs) और कॉग्निटिव बिहेवियरल थेरेपी (CBT) के संयुक्त प्रयोग से 70% से 80% से अधिक मरीज पूरी तरह स्वस्थ हो जाते हैं। उपचार के दौरान मांसपेशियों का पुराना दर्द खत्म हो जाता है, गहरी और सुकून भरी नींद लौटने लगती है, अनियंत्रित नकारात्मक विचारों का चक्र टूट जाता है और व्यक्ति अपने परिवार व काम में पहले से अधिक आत्मविश्वास और आनंद के साथ सक्रिय हो जाता है।',
      gu: 'આધુનિક મનોચિકિત્સા અને વૈજ્ઞાનિક કાઉન્સેલિંગની મદદથી જી.એ.ડી. (GAD) નું પરિણામ અત્યંત ઉત્સાહજનક અને સફળ રહે છે. યોગ્ય દવાઓ (SSRIs અથવા SNRIs) અને કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) ના સંયોજનથી ૭૦% થી ૮૦% દર્દીઓ સંપૂર્ણ સાજા થઈ જાય છે. સારવાર દરમિયાન સ્નાયુઓનો જૂનો દુખાવો અને જકડાઈ ગયેલું શરીર હળવુંફૂલ થઈ જાય છે, રાત્રે ગાઢ અને તાજગીભરી ઊંઘ પાછી ફરે છે, નકારાત્મક ચિંતાઓનો અંત આવે છે અને વ્યક્તિ પોતાની નોકરી અને પરિવારમાં સંપૂર્ણ ખુશી અને શાંતિ સાથે સામાન્ય જીવન જીવવા લાગે છે.',
    },
    relapsePrevention: {
      en: 'Maintaining stress management routines, continuing cognitive reframing techniques, and avoiding stimulant overuse.',
      hi: 'तनाव प्रबंधन की तकनीकों का नियमित अभ्यास और कैफीन या नशे से परहेज।',
      gu: 'રિલેક્સેશન કસરતો ચાલુ રાખવી અને તણાવ વધે ત્યારે તરત સાવચેતી રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Development of severe depressive symptoms, suicidal thoughts, or unmanageable panic episodes.',
      hi: 'गंभीर अवसाद की शुरुआत, खुद को नुकसान पहुंचाने के विचार या लगातार पैनिक अटैक आना।',
      gu: 'ગંભીર ઉદાસીનતા, પોતાને નુકસાન પહોંચાડવાના વિચારો અથવા વારંવાર પેનિક એટેક આવવા.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Anxiety is just overreacting; a strong person should be able to control their nerves without help.',
          hi: 'चिंता सिर्फ नखरे या कमजोरी है, समझदार इंसान को इसे खुद ही संभाल लेना चाहिए।',
          gu: 'ચિંતા એ માત્ર નબળા મનની નિશાની છે, માણસે જાતે જ નિયંત્રિત કરી લેવું જોઈએ.',
        },
        fact: {
          en: 'Anxiety disorders involve measurable neurocircuitry dysregulation. Seeking evidence-based treatment is a sign of proactive health management, not weakness.',
          hi: 'एंग्जायटी डिसऑर्डर मस्तिष्क के जैविक तंत्र से जुड़ी वास्तविक बीमारी है। डॉक्टर की मदद लेना बुद्धिमानी है, कमजोरी नहीं।',
          gu: 'એન્ઝાયટી ડિસઓર્ડર એ મગજની જૈવિક વ્યવસ્થા સાથે જોડાયેલી સાચી બીમારી છે. મદદ માંગવી એ સમજદારી છે, નબળાઈ નથી.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Why do I have physical symptoms like chest tightness and upset stomach if it is an anxiety disorder?',
          hi: 'अगर यह सिर्फ चिंता है, तो मुझे सीने में जकड़न और पेट खराब होने जैसे शारीरिक लक्षण क्यों होते हैं?',
          gu: 'જો આ માત્ર ચિંતા છે, તો મને છાતીમાં દબાણ અને પેટમાં ગરબડ જેવા શારીરિક લક્ષણો કેમ થાય છે?',
        },
        answer: {
          en: 'The autonomic nervous system connects the brain to the heart, gut, and muscles. When the brain senses threat, it releases stress hormones that cause rapid heartbeat, shallow breathing, and altered gut motility.',
          hi: 'मस्तिष्क और शरीर तंत्रिका तंत्र द्वारा आपस में जुड़े हैं। चिंता होने पर एड्रेनालाईन जैसे हार्मोन निकलते हैं, जो दिल की धड़कन तेज करते हैं और पेट व मांसपेशियों को प्रभावित करते हैं।',
          gu: 'મગજ અને શરીર એકબીજા સાથે ચેતાતંત્રથી જોડાયેલા છે. ચિંતા થાય ત્યારે શરીરમાં હોર્મોન્સ છૂટે છે, જેનાથી ધબકારા વધે છે અને પેટમાં ગરબડ થાય છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'The National Mental Health Survey of India (NMHS 2015-16) documented that common mental disorders including anxiety affect 3.5% of the population, with high somatic manifestation rates in primary care.',
          hi: 'राष्ट्रीय मानसिक स्वास्थ्य सर्वेक्षण (NMHS 2015-16) के अनुसार भारत में 3.5% वयस्क चिंता विकारों से प्रभावित हैं, और अधिकांश मरीज सबसे पहले शारीरिक दर्द और थकान के लक्षणों के साथ डॉक्टरों के पास पहुंचते हैं।',
          gu: 'રાષ્ટ્રીય માનસિક સ્વાસ્થ્ય સર્વેક્ષણ (NMHS 2015-16) દર્શાવે છે કે ૩.૫% પુખ્ત વયના લોકો ચિંતા વિકારોથી પીડાય છે, અને મોટાભાગના દર્દીઓ મુખ્યત્વે શારીરિક દુખાવા અને થાકના લક્ષણો સાથે ડૉક્ટર પાસે પહોંચે છે.',
        },
        citationRef: 'National Mental Health Survey of India (NMHS 2015-16)',
      },
      {
        fact: {
          en: 'NICE Clinical Guidelines establish that first-line pharmacotherapies (SSRIs and SNRIs) and structured Cognitive Behavioral Therapy yield comparable, robust therapeutic response rates in moderate-to-severe GAD.',
          hi: 'एनआईसीई (NICE) क्लिनिकल गाइडलाइन्स प्रमाणित करती हैं कि प्रथम पंक्ति की दवाएं (SSRI और SNRI) और संज्ञानात्मक व्यवहार थेरेपी (CBT) दोनों ही गंभीर चिंता विकार में समान रूप से अत्यंत प्रभावी हैं।',
          gu: 'NICE ક્લિનિકલ ગાઇડલાઇન્સ જણાવે છે કે આધુનિક દવાઓ (SSRIs/SNRIs) અને સંરચિત CBT થેરાપી બંને સામાન્યકૃત ચિંતામાં અત્યંત અસરકારક અને ટકાઉ પરિણામો આપે છે.',
        },
        citationRef: 'NICE Guidelines (UK)',
      },
      {
        fact: {
          en: 'Randomized controlled trials demonstrate that CBT targeting intolerance of uncertainty produces lasting reductions in worry, maintaining clinical gains at 12- to 24-month longitudinal follow-ups.',
          hi: 'क्लिनिकल अध्ययनों से सिद्ध हुआ है कि अनिश्चितता को सहन करने की क्षमता बढ़ाने वाली सीबीटी (CBT) चिंता को स्थायी रूप से कम करती है और 1 से 2 साल बाद भी इसके सकारात्मक प्रभाव बने रहते हैं।',
          gu: 'સંશોધન દર્શાવે છે કે અનિશ્ચિતતાનો સામનો કરવાની CBT થેરાપી ચિંતામાં કાયમી ઘટાડો કરે છે અને સારવાર પૂરી થયા પછી પણ ૧ થી ૨ વર્ષ સુધી તેના ઉત્તમ પરિણામો જળવાઈ રહે છે.',
        },
        citationRef: 'WFSBP Clinical Guidelines',
      },
      {
        fact: {
          en: 'The Indian Psychiatric Society guidelines emphasize that long-term benzodiazepine monotherapy should be avoided due to the risks of dependence, tolerance, and worsening of cognitive vigilance.',
          hi: 'इंडियन साइकियाट्रिक सोसाइटी के अनुसार बेंजोडायजेपाइन (नींद व घबराहट की गोलियों) का लंबे समय तक सेवन नहीं करना चाहिए क्योंकि इससे आदत पड़ने और निर्भरता का गंभीर जोखिम रहता है।',
          gu: 'ઇન્ડિયન સાયકિયાટ્રિક સોસાયટી જણાવે છે કે ઊંઘ અને ગભરાટની સામાન્ય ગોળીઓ (Benzodiazepines) લાંબા સમય સુધી ન લેવી જોઈએ કારણ કે તેની શારીરિક લત લાગવાનું જોખમ રહે છે.',
        },
        citationRef: 'Indian Psychiatric Society (IPS) Guidelines',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'National Institute for Health and Care Excellence. Generalised anxiety disorder and panic disorder in adults: management (Clinical Guideline CG113). London: NICE, 2019.',
        source: 'NICE Guidelines (UK)',
        year: '2019',
      },
      {
        citation: 'Bandelow B, Allgulander C, Baldwin DS, et al. World Federation of Societies of Biological Psychiatry (WFSBP) guidelines for the pharmacological treatment of anxiety disorders, obsessive-compulsive disorder and posttraumatic stress disorder in primary care. Int J Psychiatry Clin Pract. 2012;16(2):77-84.',
        source: 'WFSBP Clinical Guidelines',
        year: '2012',
      },
      {
        citation: 'National Institute of Mental Health and Neurosciences (NIMHANS). National Mental Health Survey of India, 2015-16. Bengaluru: NIMHANS, 2016.',
        source: 'National Mental Health Survey of India (NMHS 2015-16)',
        year: '2016',
      },
      {
        citation: 'Indian Psychiatric Society. Clinical Practice Guidelines for Management of Anxiety and Stress-Related Disorders. Indian J Psychiatry. 2017;59(Suppl 1):S67-S82.',
        source: 'Indian Psychiatric Society (IPS) Guidelines',
        year: '2017',
      },
      {
        citation: 'Cuijpers P, Cristea IA, Karyotaki E, Reijnders M, Huibers MJ. How effective are cognitive behavior therapies for anxiety disorders? A meta-analytic review. Clin Psychol Rev. 2016;43:82-90.',
        source: 'Clinical Psychology Review Meta-Analysis',
        year: '2016',
      },
    ],
    educationalVideoTitle: { en: "Mental Health Minute: Anxiety Disorders in Adults", hi: "Mental Health Minute: Anxiety Disorders in Adults", gu: "Mental Health Minute: Anxiety Disorders in Adults" },
    educationalVideoSource: 'National Institute of Mental Health (NIMH)',
    lastReviewed: '2026-09',
    relatedIds: ['cbt', 'act', 'antidepressants', 'anxiolytics', 'panic-disorder', 'depression'],
    relatedContent: {
      conditionSlugs: ['panic-disorder', 'social-anxiety-disorder', 'major-depressive-disorder'],
      medicationIds: ['antidepressants', 'anxiolytics-hypnotics', 'medications-for-substance-use-disorders'],
      treatmentIds: ['cbt', 'act', 'motivational-interviewing'],
    },
  },
  {
    id: 'panic-disorder',
    slug: 'panic-disorder',
    category: 'anxiety',
    conditionIcon: 'panic-disorder',
    name: {
      en: 'Panic Disorder & Panic Attacks',
      hi: 'पैनिक डिसऑर्डर और पैनिक अटैक (Panic Disorder)',
      gu: 'પેનિક ડિસઓર્ડર અને પેનિક એટેક (Panic Attacks)',
    },
    medicalTerms: {
      en: 'Panic Disorder, Episodic Paroxysmal Anxiety',
      hi: 'पैनिक अटैक, एक्यूट एंग्जायटी अटैक',
      gu: 'પેનિક એટેક (તીવ્ર ગભરાટનો હુમલો)',
    },
    overview: {
      en: 'Panic Disorder (ICD-11: 6B01, DSM-5-TR) is an acute, recurrent neurobiological anxiety condition characterized by unexpected, paroxysmal surges of catastrophic panic and physiological terror that erupt without warning and surge to peak intensity within minutes. Accompanied by intense autonomic sensations—violent cardiac palpitations, chest tightness, suffocation dyspnea, paresthesias, vertigo, and depersonalization—attacks are dominated by terrifying existential cognitions of imminent death ("I am having a massive heart attack"), loss of sanity ("I am going crazy"), or complete loss of control. Crucially, Panic Disorder is defined not only by the attacks themselves, but by persistent anticipatory anxiety ("fear of the fear") and maladaptive avoidance of places or somatic sensations, which frequently consolidates into Agoraphobia.',
      hi: 'पैनिक डिसऑर्डर (Panic Disorder) एक तीव्र और बार-बार होने वाला न्यूरोबायोलॉजिकल विकार है, जिसमें अचानक बिना किसी स्पष्ट चेतावनी के भयानक डर, घबराहट और शारीरिक बेचैनी का प्रचंड दौरा (Panic Attack) पड़ता है जो 10 मिनट के भीतर अपने चरम पर पहुंच जाता है। इस दौरान दिल की बेतहाशा तेज धड़कन, सीने में तेज दर्द या जकड़न, सांस घुटने का अहसास, हाथ-पैरों में सुन्नपन, चक्कर और सुध-बुध खोने का अहसास होता है। मरीज को लगता है कि उसे दिल का दौरा पड़ गया है, वह पागल हो रहा है या उसकी तुरंत मौत होने वाली है। इस बीमारी में केवल दौरे ही नहीं, बल्कि हर समय इस बात का खौफ लगा रहता है कि "कहीं दोबारा ऐसा न हो जाए" (Anticipatory anxiety), जिसके डर से व्यक्ति घर से बाहर निकलने या अकेले रहने से कतराने लगता है (Agoraphobia)।',
      gu: 'પેનિક ડિસઓર્ડર (Panic Disorder) એ અચાનક અને વારંવાર આવતી તીવ્ર ગભરાટની બીમારી છે, જેમાં કોઈ પણ ચેતવણી વગર અત્યંત ભયંકર ડર અને શારીરિક ઉત્પાતનો હુમલો (Panic Attack) આવે છે જે થોડી જ મિનિટોમાં તેની ચરમસીમાએ પહોંચી જાય છે. આ હુમલા દરમિયાન હૃદયના ધબકારા અતિશય વધી જવા, છાતીમાં ભયંકર દબાણ કે દુખાવો, શ્વાસ રુંધાવો, હાથ-પગમાં ઝણઝણાટી, ચક્કર આવવા અને બેભાન થઈ જવા જેવો અનુભવ થાય છે. દર્દીને પાકી ખાતરી થઈ જાય છે કે તેને હાર્ટ એટેક આવ્યો છે અથવા તેનો જીવ જતો રહેશે. આ રોગમાં હુમલા ઉપરાંત, દર્દીના મનમાં ૨૪ કલાક એવો સતત ડર બેસી જાય છે કે "ફરીથી આવો હુમલો આવશે તો મારું શું થશે?", જેના કારણે તે એકલા બહાર નીકળવાનું કે ભીડવાળી જગ્યાએ જવાનું સાવ બંધ કરી દે છે (Agoraphobia).',
    },
    illustrativeExamples: [
      {
        en: 'Vikram, a 29-year-old software architect in Ahmedabad, was driving his car across a crowded six-lane flyover during evening rush hour when he was struck without warning by a terrifying biological storm. His heart suddenly hammered against his ribs at 165 beats per minute; an icy pressure clamped across his chest; his throat constricted as if throttled; and numbness and tingling paralyzed his hands and face. Convinced he was undergoing an immediate fatal myocardial infarction, Vikram slammed on the brakes, leaned desperately on his horn, and collapsed over the steering wheel. Traffic police called an ambulance that rushed him with sirens blaring to a premier cardiac emergency department. His 12-lead ECG, troponin cardiac enzymes, echocardiogram, and blood gases were all completely pristine. The emergency physician discharged him with reassurance. Over the following six weeks, however, the paroxysms escalated. Vikram suffered seven more unprovoked, explosive attacks—at his desk during a quiet team meeting, in a grocery store checkout line, and in the shower. He developed crippling anticipatory terror, checking his pulse every ten minutes on his smartwatch and strictly avoiding stairs, exercise, and tea out of fear that any elevated heart rate would kill him. He refused to drive, avoided elevators, and could not cross flyovers, becoming completely homebound. Recognizing Panic Disorder with secondary Agoraphobia, a cardiologist referred Vikram to a psychiatrist. Following comprehensive psychiatric evaluation, Vikram was prescribed an SSRI (Sertraline) to dampen his hyperactive brainstem autonomic centers, paired with weekly Cognitive Behavioral Therapy (CBT) incorporating interoceptive exposure. In CBT, the therapist guided Vikram through intentional hyperventilation and aerobic exertion in the clinic, systematically retraining his brain to recognize that elevated pulse and mild dizziness are harmless physiological states rather than life-threatening crises. Within eight weeks, his panic attacks completely ceased. Vikram resumed driving across flyovers, uninstalled his pulse-monitoring apps, and returned to full professional and personal vitality.',
        hi: 'अहमदाबाद के 29 वर्षीय सॉफ्टवेयर इंजीनियर विक्रम शाम के समय शहर के व्यस्त फ्लाईओवर पर अपनी कार चला रहे थे, तभी अचानक बिना किसी चेतावनी के उनके शरीर में एक भयानक तूफान उठ खड़ा हुआ। उनका दिल 165 की रफ्तार से सीने में धड़कने लगा, सीने में भयानक जकड़न महसूस हुई, गला इस तरह घुटने लगा मानो किसी ने दबा दिया हो, और हाथ-मुंह सुन्न पड़ गए। विक्रम को पक्का यकीन हो गया कि उन्हें मैसिव हार्ट अटैक आ गया है और वे वहीं मर जाएंगे। घबराकर उन्होंने बीच सड़क पर ब्रेक लगाया और स्टीयरिंग पर गिर पड़े। ट्रैफिक पुलिस ने एंबुलेंस बुलाकर उन्हें तुरंत एक बड़े हृदय रोग अस्पताल की इमरजेंसी में पहुंचाया। अस्पताल में ईसीजी, इको और ट्रोपोनिन टेस्ट पूरी तरह सामान्य आए। डॉक्टर ने उन्हें घर भेज दिया। लेकिन अगले छह हफ्तों में यह नरक कई गुना बढ़ गया। विक्रम को ऐसे सात और भयानक दौरे पड़े—एक बार शांत ऑफिस में, एक बार सुपरमार्केट में और एक बार नहाते समय। उनके मन में 24 घंटे अगले दौरे का खौफ बैठ गया। वे हर दस मिनट में अपनी स्मार्टवॉच पर दिल की धड़कन नापते रहते थे। सीढ़ियां चढ़ना, चाय पीना और व्यायाम करना उन्होंने पूरी तरह छोड़ दिया कि कहीं धड़कन बढ़ने से उनकी जान न चली जाए। उन्होंने गाड़ी चलाना, लिफ्ट में बैठना और बाहर निकलना बंद कर दिया और घर में कैद हो गए। आखिरकार एक हृदय रोग विशेषज्ञ ने समझा कि यह पैनिक डिसऑर्डर और एगोराफोबिया है और उन्हें मनोचिकित्सक के पास भेजा। डॉक्टर ने SSRI दवा (सर्ट्रालाइन) और इंटरसेप्टिव एक्सपोज़र वाली कॉग्निटिव बिहेवियरल थेरेपी (CBT) शुरू की। थेरेपी में विक्रम को जानबूझकर तेज सांस लेकर और घूमकर यह महसूस कराया गया कि तेज धड़कन होना कोई बीमारी नहीं बल्कि शरीर की सामान्य प्रतिक्रिया है। दो महीने के भीतर उनके पैनिक अटैक पूरी तरह बंद हो गए। विक्रम ने दोबारा गाड़ी चलाना शुरू किया, स्मार्टवॉच से दिल की धड़कन नापना बंद कर दिया और अपनी पुरानी सामान्य जिंदगी में लौट आए।',
        gu: 'અમદાવાદના ૨૯ વર્ષીય સોફ્ટવેર એન્જિનિયર વિક્રમ સાંજના સમયે વ્યસ્ત ઓવરબ્રિજ પરથી કાર ચલાવીને ઘરે જઈ રહ્યા હતા ત્યારે અચાનક કોઈ પણ કારણ વિના તેમના શરીરમાં એક ભયાનક તોફાન ઊમટ્યું. તેમની છાતીમાં હૃદય ૧૬૫ ની ઝડપે ધમધમવા લાગ્યું, છાતીમાં પથ્થર જેવો ભાર લાગ્યો, ગળું રુંધાવા લાગ્યું અને હાથ-મોંમાં ઝણઝણાટી થઈને અંગો સુન્ન પડી ગયા. વિક્રમને પાકી ખાતરી થઈ ગઈ કે તેને જીવલેણ હાર્ટ એટેક આવી ગયો છે અને હવે તેની છેલ્લી ઘડીઓ છે. ગભરાઈને તેણે ચાલુ રસ્તે બ્રેક મારી અને સ્ટીયરીંગ પર ઢળી પડ્યો. ટ્રાફિક પોલીસે તાત્કાલિક એમ્બ્યુલન્સ બોલાવી તેને હાર્ટ હોસ્પિટલના ICU માં પહોંચાડ્યો. ત્યાં બધા જ રિપોર્ટ—ECG, ઇકો અને લોહીની તપાસ—સંપૂર્ણપણે નોર્મલ આવ્યા. ડૉક્ટરે તેને સાંત્વના આપી ઘરે મોકલ્યો. પરંતુ ત્યારપછીના દોઢ મહિનામાં સ્થિતિ વધુ વણસી. વિક્રમને આવા વધુ સાત હુમલા આવ્યા—એક વાર શાંતિથી ઓફિસમાં બેઠા હતા ત્યારે, એક વાર મોલમાં અને એક વાર સ્નાન કરતી વખતે. તેના મનમાં ૨૪ કલાક ભયંકર ડર પેસી ગયો. તે દર દસ મિનિટે સ્માર્ટવોચમાં હાર્ટ રેટ ચેક કરતો. દાદરા ચડવાનું, ચા પીવાનું અને ઝડપથી ચાલવાનું તેણે સાવ બંધ કરી દીધું કે રખેને ધબકારા વધશે તો હાર્ટ એટેક આવી જશે. તેણે કાર ચલાવવી, લિફ્ટ વાપરવી અને ઘરની બહાર નીકળવું બંધ કરી દીધું. છેવટે એક હૃદયરોગ નિષ્ણાતે આ પેનિક ડિસઓર્ડર હોવાનું ઓળખી તેને મનોચિકિત્સક પાસે મોકલ્યો. મનોચિકિત્સકે SSRI દવા (સેર્ટ્રાલાઇન) અને કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) શરૂ કરી. થેરાપીમાં વિક્રમને ક્લિનિકમાં ઊંડા શ્વાસ લેવડાવીને અને કસરત કરાવીને મગજને શીખવવામાં આવ્યું કે સામાન્ય ધબકારા વધવાથી હાર્ટ એટેક આવતો નથી. આઠ અઠવાડિયામાં તેના પેનિક એટેક સાવ બંધ થઈ ગયા. વિક્રમે ફરીથી ઓવરબ્રિજ પર ગાડી ચલાવવાનું શરૂ કર્યું, સ્માર્ટવોચમાં ધબકારા માપવાનું છોડી દીધું અને ફરીથી આત્મવિશ્વાસથી ભરપૂર જીવન જીવવા લાગ્યો.',
      },
      {
        en: 'Ananya, a 22-year-old law student in Mumbai, experienced nocturnal panic attacks that woke her bolt upright from deep non-REM sleep at 2:30 AM gasping for breath with violent palpitations, cold sweats, and overwhelming existential terror. Unlike nightmares, these episodes involved no dream imagery; she would simply awaken already engulfed in severe autonomic surge, convinced she was suffocating or losing her mind. Terrified of falling asleep, Ananya delayed bedtime until 5:00 AM, relying on caffeine during the day which exacerbated daytime jitters. A neurologist confirmed normal EEG and sleep parameters before referring her to a psychiatrist. Diagnosed with nocturnal panic disorder, Ananya began CBT focused on hyperventilation control and slow diaphragmatic breathing alongside a low-dose SSRI. Within five weeks, her nocturnal awakenings subsided completely, allowing restorative sleep.',
        hi: 'मुंबई की 22 वर्षीय लॉ की छात्रा अनन्या को रात में गहरी नींद से अचानक भयानक घबराहट और दम घुटने के अहसास के साथ जागने के दौरे (Nocturnal Panic Attacks) पड़ते थे। रात के 2:30 बजे अचानक उसका दिल बेकाबू होकर धड़कने लगता था, पसीना छूट जाता था और लगता था कि वह सांस नहीं ले पाएगी या पागल हो जाएगी। किसी बुरे सपने के बिना ही होने वाले इन हमलों के डर से अनन्या ने रात को सोना ही टालना शुरू कर दिया। न्यूरोलॉजिस्ट ने जांच सामान्य आने पर उसे मनोचिकित्सक के पास भेजा। डॉक्टर ने नॉक्टर्नल पैनिक डिसऑर्डर का निदान किया और गहरी सांस लेने की तकनीक (Diaphragmatic Breathing) तथा SSRI दवा शुरू की। पांच हफ्तों के भीतर रात में घबराकर उठने के दौरे पूरी तरह बंद हो गए और वह सुकून से सोने लगी।',
        gu: 'મુંબઈની ૨૨ વર્ષીય કાયદાની વિદ્યાર્થીની અનન્યા રાત્રે ઊંડી ઊંઘમાંથી અચાનક ભયંકર ગભરાટ અને શ્વાસ રુંધાવાના હુમલા (Nocturnal Panic Attacks) સાથે જાગી જતી હતી. રાત્રે અઢી વાગ્યે છાતીમાં ધબકારા અતિશય વધી જતા, ઠંડો પરસેવો વળી જતો અને લાગતું કે શ્વાસ બંધ થઈ જશે. કોઈ ખરાબ સ્વપ્ન જોયા વગર જ અચાનક આવા હુમલા આવતા હોવાથી અનન્યા રાત્રે ઊંઘતા પણ ડરવા લાગી. ન્યુરોલોજિસ્ટની તમામ તપાસ સામાન્ય આવ્યા બાદ તેને મનોચિકિત્સક પાસે મોકલવામાં આવી. ડૉક્ટરે યોગ્ય દવા અને શ્વાસોચ્છવાસની યોગ્ય પદ્ધતિઓ (Diaphragmatic breathing) શીખવી. પાંચ અઠવાડિયામાં રાત્રિના પેનિક હુમલા સંપૂર્ણપણે બંધ થઈ ગયા અને તે શાંતિથી ઊંઘતી થઈ ગઈ.',
      },
      {
        en: 'Sanjay, a 48-year-old bank branch manager in Rajkot, developed sudden, overwhelming panic episodes while standing in busy bank banking halls or addressing staff meetings. During an attack, intense heat rushed to his face, his vision developed tunnel narrowing, and profound dizziness made him feel he would collapse publicly on the floor. To conceal his perceived weakness, Sanjay started delegating all public speaking and rushing out of meetings to lock himself in his private washroom. Avoidance behavior soon spread to malls, weddings, and family gatherings. A psychiatric consultation confirmed Panic Disorder with agoraphobic avoidance. Through structured CBT featuring graduated in-person exposure hierarchies (standing in queues and speaking before groups while accepting mild autonomic symptoms) along with Escitalopram, Sanjay regained complete comfort and resumed full leadership of his branch within ten weeks.',
        hi: 'राजकोट के 48 वर्षीय बैंक शाखा प्रबंधक संजय को बैंक में भीड़ के बीच या मीटिंग्स में अचानक तेज घबराहट, चक्कर और पसीने के तीव्र दौरे पड़ने लगे। उन्हें लगता था कि वे सबके सामने जमीन पर गिर पड़ेंगे और उनकी बदनामी होगी। इस डर से उन्होंने मीटिंग्स छोड़ना, शादियों में जाना और मॉल जाना बंद कर दिया। मनोचिकित्सक ने पैनिक डिसऑर्डर और एगोराफोबिया की पहचान की। सीबीटी थेरेपी में चरणबद्ध तरीके से भीड़ में खड़े होने और लक्षणों को सामान्य मानने का अभ्यास कराया गया, साथ में एस्सिटालोप्राम दवा दी गई। ढाई महीने में संजय का डर पूरी तरह खत्म हुआ और वे दोबारा आत्मविश्वास के साथ अपनी शाखा का संचालन करने लगे।',
        gu: 'રાજકોટના ૪૮ વર્ષીય બેંક મેનેજર સંજયભાઈને બેંકની ભીડમાં કે મીટિંગ દરમિયાન અચાનક ચક્કર આવવા, મોં પર ગરમી વ્યાપી જવી અને બેભાન થઈ જવાનો તીવ્ર ડર લાગવા માંડ્યો. લોકો સામે પડી જવાની શરમથી તેમણે મીટિંગ્સ સંબોધવાનું છોડી દીધું અને લગ્નો કે મોલમાં જવાનું પણ ટાળવા લાગ્યા. મનોચિકિત્સકે પેનિક ડિસઓર્ડરનું નિદાન કર્યું. CBT થેરાપી દ્વારા ધીમે ધીમે ભીડવાળી જગ્યાઓમાં ઊભા રહેવાની પ્રેક્ટિસ અને સાચી સમજ આપવામાં આવી, તેમજ નિયમિત દવા શરૂ કરાઈ. દસ અઠવાડિયામાં સંજયભાઈનો ગભરાટ સાવ નાબૂદ થયો અને તેઓ ફરીથી આત્મવિશ્વાસથી બેંકનું સુકાન સંભાળવા લાગ્યા.',
      },
    ],
    commonSymptoms: {
      en: [
        'Sudden intense pounding heart, racing pulse (palpitations)',
        'Sweating, trembling, or shaking',
        'Shortness of breath or sensations of smothering/choking',
        'Chest pain, discomfort, or tightness',
        'Nausea, abdominal distress, or dizziness',
        'Chills or heat sensations; numbness or tingling (paresthesias)',
        'Feelings of unreality (derealization) or being detached from oneself (depersonalization)',
        'Fear of losing control, "going crazy," or imminent death',
        'Persistent anticipatory fear of future attacks',
      ],
      hi: [
        'अचानक दिल की धड़कन अत्यधिक तेज होना (Palpitations)',
        'सांस लेने में भारी कठिनाई या दम घुटने का अहसास होना',
        'सीने में तेज जकड़न या दर्द (जिससे दिल के दौरे का भ्रम होता है)',
        'हाथ-पैरों में कंपकंपी और पसीना आना',
        'चक्कर आना, सिर घूमना या बेहोश होने जैसा लगना',
        'हाथों या होठों में झनझनाहट या सुन्नपन (Tingling)',
        'ऐसा लगना कि अपनी सुध-बुध खो रहे हैं या मृत्यु निकट है',
        'अगले दौरे का लगातार गहरा डर बने रहना (Anticipatory Anxiety)',
      ],
      gu: [
        'અચાનક ધબકારા ખૂબ વધી જવા (છાતીમાં ધડકન સંભળાવી)',
        'શ્વાસ લેવામાં તકલીફ અથવા ગૂંગળામણ થવી',
        'છાતીમાં દુખાવો કે ભારે દબાણ (હાર્ટ એટેક જેવો ભાસ)',
        'ધ્રુજારી આવવી અને પરસેવે રેબઝેબ થઈ જવું',
        'ચક્કર આવવા અથવા બેભાન થઈ જવાનો ડર લાગવો',
        'હાથ-પગ સુન્ન થઈ જવા કે કીડીઓ ચડતી હોય તેવું લાગવું',
        'પોતાનો કાબૂ ગુમાવી દેવાનો અથવા મરી જવાનો તીવ્ર ભય',
        'ફરીથી આવો હુમલો આવશે તેનો સતત ડર રહેવો',
      ],
    },
    dailyLifeImpact: {
      en: 'The secondary fallout from Panic Disorder is exceptionally debilitating. The constant, agonizing anticipatory terror induces pervasive agoraphobic avoidance—confining individuals to their homes, prohibiting solo travel, and making driving, public transit, or crowded markets impossible without a designated safety person. Sufferers repeatedly exhaust medical emergency services with repetitive negative cardiac, pulmonary, and neurological workups, creating financial strain, medical disillusionment, and occupational disability.',
      hi: 'पैनिक डिसऑर्डर का प्रभाव व्यक्ति के पूरे जीवन को पंगु बना देता है। हर समय अगले दौरे का डर रहने के कारण व्यक्ति घर में कैद होकर रह जाता है। वह अकेले यात्रा करने, गाड़ी चलाने, लिफ्ट में जाने या भीड़भाड़ वाले बाजारों में जाने से पूरी तरह डरने लगता है (Agoraphobia)। मरीज बार-बार अस्पतालों के इमरजेंसी वार्ड के चक्कर लगाता है, बार-बार ईसीजी और एमआरआई जैसे महंगे टेस्ट करवाता है जिससे भारी आर्थिक नुकसान होता है, नौकरी छूटने का खतरा बन जाता है और परिवार में अत्यधिक तनाव फैल जाता है।',
      gu: 'પેનિક ડિસઓર્ડર વ્યક્તિના જીવનને સંપૂર્ણપણે લાચાર બનાવી દે છે. સતત નવા હુમલાના ડરના કારણે વ્યક્તિ ઘરમાં કેદ થઈ જાય છે. તે એકલા મુસાફરી કરવાનું, વાહન ચલાવવાનું, લિફ્ટ વાપરવાનું કે બજારમાં જવાનું સાવ બંધ કરી દે છે. વારંવાર હોસ્પિટલોના ઈમરજન્સી વિભાગમાં દોડાદોડી કરવી પડે છે, વારંવાર મોંઘી તપાસો (ECG, MRI) કરાવવી પડે છે જેનાથી ભારે આર્થિક નુકસાન થાય છે અને પરિવારજનો પણ માનસિક રીતે થાકી જાય છે.',
    },
    causes: {
      en: 'The neurobiological pathophysiology of panic disorder centers upon a hypersensitive brainstem respiratory and autonomic alarm network—frequently termed the "false suffocation alarm" system—involving the dorsal raphe, locus coeruleus, parabrachial nucleus, and central amygdala. Genetic heritability is estimated at approximately 40% to 45%. Hyperventilation induces acute respiratory alkalosis, systemic vasoconstriction, and hypocalcemia, triggering true physical numbness and dizzying sensations. Cognitively, the core maintaining pathology is the catastrophic misinterpretation of normal somatic fluctuations (such as exercise-induced sinus tachycardia or postural orthostatic shifts) as impending death, stroke, or psychosis.',
      hi: 'पैनिक डिसऑर्डर के न्यूरोबायोलॉजिकल कारणों में मस्तिष्क के तने (Brainstem) और अमिग्डाला (Amygdala) में स्थित "फॉल्स सफोकेशन अलार्म" का अत्यधिक संवेदनशील होना मुख्य है। यह लगभग 40% से 45% तक आनुवंशिक होता है। तेज-तेज सांस लेने (Hyperventilation) के कारण रक्त में कार्बन डाइऑक्साइड का स्तर गिर जाता है, जिससे हाथ-पैरों में झनझनाहट और चक्कर आने लगते हैं। इसके साथ ही, शरीर में होने वाले सामान्य बदलावों (जैसे सीढ़ियां चढ़ने से धड़कन बढ़ना) को दिमाग तुरंत मौत या हार्ट अटैक का संकेत मान लेता है, जिससे पैनिक अटैक भड़क उठता है।',
      gu: 'પેનિક ડિસઓર્ડરના મુખ્ય જૈવિક કારણોમાં મગજના શ્વસન અને ભય કેન્દ્રનું અતિસંવેદનશીલ હોવું છે, જેને "ખોટો ગૂંગળામણનો એલાર્મ" (False Suffocation Alarm) કહેવાય છે. આ બીમારી આશરે ૪૦% થી ૪૫% કિસ્સાઓમાં વારસાગત હોય છે. ઝડપથી શ્વાસ લેવાને લીધે લોહીમાં ફેરફારો થાય છે જેનાથી હાથ-પગમાં સાચી ઝણઝણાટી અને ચક્કર આવે છે. મગજ શરીરના સામાન્ય ફેરફારો (જેમ કે દોડવાથી ધબકારા વધવા) ને જીવલેણ હાર્ટ એટેક માની લે છે, જેનાથી ભયનો મોટો વંટોળ ઊભો થાય છે.',
    },
    riskFactors: {
      en: [
        'First-degree relative diagnosed with panic disorder, agoraphobia, or major anxiety disorders',
        'Acute exposure to severe environmental stressors, bereavement, interpersonal trauma, or physical illness',
        'Excessive intake of central stimulants, including high-dose caffeine, energy drinks, nicotine, or cannabis',
        'Developmental history of childhood separation anxiety disorder or physical/sexual abuse',
        'High innate anxiety sensitivity (the tendency to view somatic anxiety sensations as dangerous)',
      ],
      hi: [
        'परिवार में किसी को पैनिक डिसऑर्डर, एगोराफोबिया या गंभीर चिंता की बीमारी होना',
        'जीवन में कोई गंभीर मानसिक आघात, किसी प्रियजन की मृत्यु या गंभीर बीमारी का अनुभव',
        'अत्यधिक कैफीन, एनर्जी ड्रिंक्स, तंबाकू या गांजे (Cannabis) का सेवन',
        'बचपन में माता-पिता से अलग होने का अत्यधिक डर (Separation anxiety) या आघात',
        'शारीरिक लक्षणों के प्रति जन्मजात अत्यधिक संवेदनशीलता',
      ],
      gu: [
        'પરિવારમાં કોઈને પેનિક એટેક, અતિશય ગભરાટ કે ચિંતાની બીમારીનો ઇતિહાસ',
        'તાજેતરમાં બનેલી કોઈ ગંભીર આઘાતજનક ઘટના કે સ્વજનનું અવસાન',
        'વધુ પડતી કૉફી, એનર્જી ડ્રિંક્સ, તમાકુ કે ગાંજાનું સેવન',
        'બાળપણમાં માતા-પિતાથી વિખૂટા પડવાનો તીવ્ર ડર રહ્યો હોય',
        'શરીરના સામાન્ય લક્ષણો પ્રત્યે સ્વભાવગત અતિસંવેદનશીલતા',
      ],
    },
    psychiatricAssessment: {
      en: 'A rigorous clinical diagnostic workup initiated by definitive physical rule-out of acute medical emergencies. An experienced psychiatrist performs a comprehensive psychiatric interview documenting attack chronology, latency to peak intensity (typically under 10 minutes), frequency, and specific symptom composition; systematically evaluates anticipatory dread and agoraphobic avoidance patterns; screens for comorbid major depressive disorder, generalized anxiety disorder, and sedative/alcohol self-medication; and reviews medical investigations (including resting 12-lead ECG, cardiac enzymes, Holter monitoring, pulmonary function, thyroid panel, and electrolyte/toxicology screening) to verify physical safety before commencing cognitive desensitization.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत और गहन मूल्यांकन किया जाता है, जिसकी शुरुआत शारीरिक जांचों से होती है ताकि किसी भी चिकित्सीय आपातकाल को खारिज किया जा सके। डॉक्टर मरीज से दौरों की शुरुआत, चरम पर पहुंचने का समय (आमतौर पर 10 मिनट से कम), आवृत्ति और लक्षणों के बारे में विस्तार से पूछते हैं। अगले दौरों के डर (Anticipatory anxiety) और बाहर न निकलने की समस्या (Agoraphobia) का सटीक मूल्यांकन किया जाता है। साथ ही डिप्रेशन और शराब द्वारा खुद को शांत करने की आदतों की जांच की जाती है, और ईसीजी, थायरॉयड तथा ब्लड टेस्ट की रिपोर्ट देखकर मरीज को आश्वस्त किया जाता है कि उसका दिल पूरी तरह सुरक्षित है।',
      gu: 'લાયકાત ધરાવતા મનોચિકિત્સક દ્વારા સંપૂર્ણ તપાસ કરવામાં આવે છે, જેમાં સૌપ્રથમ શારીરિક તપાસ દ્વારા ખાતરી કરવામાં આવે છે કે કોઈ ગંભીર હૃદયરોગ કે અન્ય બીમારી નથી. ડૉક્ટર હુમલાની શરૂઆત, તે કેટલા સમયમાં ચરમસીમાએ પહોંચે છે (મોટે ભાગે ૧૦ મિનિટમાં), તેની આવૃત્તિ અને શારીરિક લક્ષણોની વિગતવાર નોંધ લે છે. ભવિષ્યના હુમલાના ડર અને એકલા બહાર જવાની બીમારી (Agoraphobia) નું મૂલ્યાંકન થાય છે. ડિપ્રેશન કે નશાની આદતની તપાસ થાય છે, અને ECG તથા લેબ રિપોર્ટ તપાસીને દર્દીને વૈજ્ઞાનિક રીતે સાબિત કરી આપવામાં આવે છે કે તેનું શરીર સંપૂર્ણ સુરક્ષિત છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, Panic Disorder requires recurrent unexpected panic attacks. A panic attack is an abrupt surge of intense fear or intense discomfort that reaches a peak within minutes, and during which time 4 (or more) of the following 13 symptoms occur: (1) palpitations, pounding heart, or accelerated heart rate; (2) sweating; (3) trembling or shaking; (4) sensations of shortness of breath or smothering; (5) feelings of choking; (6) chest pain or discomfort; (7) nausea or abdominal distress; (8) feeling dizzy, unsteady, light-headed, or faint; (9) chills or heat sensations; (10) paresthesias (numbness or tingling sensations); (11) derealization (feelings of unreality) or depersonalization (being detached from oneself); (12) fear of losing control or "going crazy"; (13) fear of dying. In addition, at least one of the attacks must be followed by 1 month (or more) of one or both of the following: (a) persistent concern or worry about additional panic attacks or their consequences (e.g., losing control, having a heart attack, "going crazy"); (b) a significant maladaptive change in behavior related to the attacks (e.g., behaviors designed to avoid having panic attacks, such as avoidance of exercise or unfamiliar situations). In ICD-11, this condition is codified under 6B01.',
      hi: 'DSM-5-TR के अनुसार, पैनिक डिसऑर्डर के सही निदान के लिए बार-बार अप्रत्याशित पैनिक अटैक का होना अनिवार्य है। पैनिक अटैक का अर्थ है अचानक तीव्र भय या बेचैनी का उभार जो कुछ ही मिनटों में चरम पर पहुंच जाता है, और जिस दौरान नीचे दिए गए 13 में से कम से कम 4 लक्षण होते हैं: (1) दिल की धड़कन तेज होना या धड़कना; (2) पसीना आना; (3) कांपना; (4) सांस फूलना या दम घुटना; (5) गले में रुकावट; (6) सीने में दर्द या बेचैनी; (7) मतली या पेट खराब; (8) चक्कर आना, अस्थिरता या बेहोशी जैसा लगना; (9) ठंड या गर्मी लगना; (10) हाथ-पैरों में सुन्नपन या झनझनाहट; (11) अवास्तविकता या खुद से अलग होने का अहसास; (12) पागल होने या नियंत्रण खोने का डर; (13) मरने का डर। इसके अलावा, कम से कम एक महीने तक अगले दौरे का डर बना रहना चाहिए या दौरे से बचने के लिए सामान्य गतिविधियों को छोड़ना (जैसे व्यायाम या बाहर जाना बंद कर देना) होना चाहिए। ICD-11 में इसका कोड 6B01 है।',
      gu: 'DSM-5-TR મુજબ, પેનિક ડિસઓર્ડરના સાચા નિદાન માટે વારંવાર અચાનક પેનિક એટેક આવવા જરૂરી છે. પેનિક એટેક એટલે અચાનક શરૂ થતો તીવ્ર ભય જે થોડી જ મિનિટોમાં ચરમસીમાએ પહોંચે છે અને આ સમય દરમિયાન નીચે દર્શાવેલા ૧૩ માંથી ઓછામાં ઓછા ૪ લક્ષણો હાજર હોય છે: (૧) ધબકારા વધવા; (૨) પરસેવો વળવો; (૩) ધ્રુજારી; (૪) શ્વાસ લેવામાં તકલીફ કે ગૂંગળામણ; (૫) ગળામાં ડૂમો ભરાવો; (૬) છાતીમાં દુખાવો કે ભાર; (૭) ઉબકા કે પેટમાં ગડબડ; (૮) ચક્કર આવવા કે અશક્તિ; (૯) ઠંડી કે ગરમી લાગવી; (૧૦) હાથ-પગમાં ખાલી ચડવી કે ઝણઝણાટી; (૧૧) આજુબાજુનું બધું અવાસ્તવિક લાગવું; (૧૨) પાગલ થઈ જવાનો કે કાબૂ ગુમાવવાનો ડર; (૧૩) મરી જવાનો ડર. ઉપરાંત, ઓછામાં ઓછા ૧ મહિના સુધી ફરી હુમલો આવવાનો સતત ભય રહેવો જોઈએ અથવા હુમલાથી બચવા માટે દર્દીએ જીવનશૈલીમાં ખોટા ફેરફારો કરેલા હોવા જોઈએ (જેમ કે બહાર જવાનું બંધ કરવું). ICD-11 માં આનો કોડ 6B01 છે.',
    },
    differentialConsiderations: {
      en: 'Essential clinical differentials include: Paroxysmal Supraventricular Tachycardia (PSVT), atrial fibrillation, and ventricular arrhythmias; Acute Coronary Syndrome (angina, acute myocardial infarction); Pulmonary Embolism, tension pneumothorax, and Acute Asthma; Hyperthyroidism and thyrotoxic storm; Pheochromocytoma; Severe hypoglycemia; Vestibular neuritis and benign paroxysmal positional vertigo (BPPV); Substance/Medication-Induced Panic (caffeine toxicity, cocaine, amphetamines, cannabis-induced panic); and Generalized Anxiety Disorder.',
      hi: 'इसे दिल की धड़कन की वास्तविक बीमारियों (PSVT, Arrhythmia); दिल के दौरे (Myocardial Infarction); फेफड़ों में खून के थक्के (Pulmonary Embolism) या अस्थमा; थायरॉयड की अत्यधिक सक्रियता (Hyperthyroidism); फियोक्रोमोसाइटोमा (Pheochromocytoma); लो ब्लड शुगर; नशीले पदार्थों या अत्यधिक कैफीन के दुष्प्रभाव; और जनरलाइज्ड एंग्जायटी डिसऑर्डर (GAD) से अलग पहचानना आवश्यक है।',
      gu: 'આને હૃદયના ધબકારાની સાચી બીમારીઓ (PSVT, એરિથમિયા); સાચો હાર્ટ એટેક; અસ્થમા કે ફેફસાંની બીમારી; થાઇરોઇડની અતિસક્રિયતા; લોહીમાં શર્કરાનું ઘટી જવું; કેફીન કે નશાની આડઅસર; અને સામાન્યકૃત ચિંતા વિકાર (GAD) થી અલગ તારવવું ખૂબ મહત્વનું છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Crucial reassurance: panic attacks are physically harmless and self-limiting (they cannot cause a heart attack or suffocation).',
        hi: 'यह समझना सबसे जरूरी है कि पैनिक अटैक से कभी मौत या दिल का दौरा नहीं पड़ता; यह कुछ मिनटों में अपने आप शांत हो जाता है।',
        gu: 'સૌથી મહત્વની સમજ: પેનિક એટેકથી ક્યારેય હાર્ટ એટેક આવતો નથી કે જીવ જતો નથી; તે થોડી મિનિટોમાં આપમેળે શમી જાય છે.',
      },
      lifestyleSupport: {
        en: 'Strict elimination of excess caffeine and nicotine, regular slow breathing techniques (4-7-8 breathing), gentle exercise.',
        hi: 'कैफीन व तंबाकू पूरी तरह बंद करना, धीमी और गहरी सांस लेने का अभ्यास करना।',
        gu: 'ચા-કોફી અને તમાકુ બંધ કરવા અને ધીમા ઊંડા શ્વાસ લેવાની પદ્ધતિ શીખવી.',
      },
      psychotherapy: {
        en: 'CBT with interoceptive exposure (gradually exposing the patient to safe physical sensations like fast breathing to extinguish panic alarms).',
        hi: 'कॉग्निटिव बिहेवियरल थेरेपी (CBT), जिसमें शरीर के लक्षणों से डरना बंद करने का विशेष वैज्ञानिक अभ्यास कराया जाता है।',
        gu: 'કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) જેમાં શારીરિક સંવેદનાઓથી ન ડરવાની વિશેષ તાલીમ આપવામાં આવે છે.',
      },
      medications: {
        en: 'SSRIs are the gold-standard preventive maintenance medication. Short-term rescue medications may be used very selectively under strict psychiatric guidance.',
        hi: 'नियमित बचाव के लिए मनोचिकित्सक SSRIs जैसी दवाएं देते हैं जो मस्तिष्क के अलार्म को शांत करती हैं।',
        gu: 'લાંબા ગાળાના રક્ષણ માટે મનોચિકિત્સક યોગ્ય SSRI દવાઓ સૂચવે છે જે મગજના ખોટા એલાર્મને શાંત કરે છે.',
      },
      familySocialInterventions: {
        en: 'Educating family members not to rush the patient to emergency rooms repeatedly once cardiac safety is established, and how to remain calmly present.',
        hi: 'परिवार को सिखाया जाता है कि दौरा पड़ने पर घबराएं नहीं, शांत रहें और मरीज को धीरे-धीरे सांस लेने में मदद करें।',
        gu: 'પરિવારજનોને શીખવવામાં આવે છે કે હુમલા વખતે પોતે ગભરાયા વિના શાંત રહીને દર્દીને ધીમા શ્વાસ લેવામાં સાથ આપે.',
      },
    },
    treatmentGoals: {
      en: 'Complete cessation or drastic reduction of panic attacks, elimination of fear of bodily sensations, and full return to unconstrained daily activities.',
      hi: 'पैनिक अटैक को पूरी तरह रोकना, शारीरिक लक्षणों का डर खत्म करना और निडर होकर कहीं भी आना-जाना।',
      gu: 'પેનિક એટેક બંધ કરવા, શરીરના સામાન્ય લક્ષણોનો ડર દૂર કરવો અને સામાન્ય જિંદગી જીવવી.',
    },
    recoveryOutlook: {
      en: 'The long-term prognosis for Panic Disorder is among the most favorable in all of clinical psychiatry when patients access structured evidence-based care. Combining first-line pharmacotherapies (such as modern SSRIs like Sertraline, Paroxetine, or Escitalopram) with manualized Cognitive Behavioral Therapy incorporating interoceptive exposure yields complete panic freedom or profound clinical remission in 80% to 90% of individuals. Even severe secondary agoraphobia is highly treatable through graduated in vivo behavioral exposure hierarchies, empowering individuals to reclaim complete autonomy, resume long-distance travel, and enjoy vibrant, unrestricted lives.',
      hi: 'जब मरीज को सही और आधुनिक मनोचिकित्सीय उपचार मिलता है, तो पैनिक डिसऑर्डर का भविष्य बेहद उत्कृष्ट और उत्साहवर्धक होता है। पहली पंक्ति की आधुनिक दवाओं (जैसे SSRIs) और इंटरसेप्टिव एक्सपोज़र वाली विशेष कॉग्निटिव बिहेवियरल थेरेपी (CBT) के संयोजन से 80% से 90% से अधिक मरीज पैनिक अटैक से पूरी तरह मुक्त हो जाते हैं। यहां तक कि पुरानी से पुरानी बाहर न निकल पाने की समस्या (Agoraphobia) भी चरणबद्ध बिहेवियरल थेरेपी से पूरी तरह ठीक हो जाती है, जिससे व्यक्ति फिर से अकेले यात्रा करने, काम पर जाने और पूर्णतः निडर जीवन जीने में सक्षम हो जाता है।',
      gu: 'જ્યારે દર્દીને યોગ્ય વૈજ્ઞાનિક મનોચિકિત્સા અને કાઉન્સેલિંગ મળે ત્યારે પેનિક ડિસઓર્ડર સંપૂર્ણપણે મટી શકે તેવી બીમારી છે. યોગ્ય દવાઓ (જેમ કે SSRIs) અને ખાસ પ્રકારની કોગ્નિટિવ બિહેવિયરલ થેરાપી (CBT) ના સંયોજનથી ૮૦% થી ૯૦% દર્દીઓ પેનિક એટેકમાંથી સંપૂર્ણ મુક્ત થઈ જાય છે. બહાર જવાનો જૂનો અને ઊંડો ડર (Agoraphobia) પણ ક્રમબદ્ધ એક્સપોઝર થેરાપી દ્વારા નાબૂદ થઈ જાય છે, જેથી દર્દી ફરીથી એકલા મુસાફરી કરી શકે છે, નોકરી-ધંધામાં સક્રિય બને છે અને ભયમુક્ત સામાન્ય જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Continuing slow breathing exercises, avoiding catastrophic self-talk when heartbeat naturally rises during exertion.',
      hi: 'व्यायाम के दौरान धड़कन बढ़ने पर घबराने के बजाय उसे सामान्य मानना, और तनाव कम रखना।',
      gu: 'કસરત વખતે સામાન્ય ધબકારા વધે ત્યારે ડરવું નહીં અને રિલેક્સેશન ટેકનિક્સ ચાલુ રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Severe acute chest pain with genuine cardiac risk factors, fainting, or intense suicidal despair.',
      hi: 'हृदय रोग के ज्ञात जोखिम के साथ अचानक नया छाती का दर्द, बेहोशी आना, या अत्यधिक निराशा।',
      gu: 'હૃદયરોગના જૂના ઇતિહાસ સાથે છાતીમાં તીવ્ર દુખાવો, બેભાન થવું કે આત્મહત્યાના વિચારો.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'A panic attack can cause a fatal heart attack or cause you to stop breathing.',
          hi: 'पैनिक अटैक से इंसान को हार्ट अटैक आ सकता है या उसकी सांस रुक सकती है।',
          gu: 'પેનિક એટેકથી હાર્ટ એટેક આવી શકે છે કે શ્વાસ બંધ થઈને મોત થઈ શકે છે.',
        },
        fact: {
          en: 'A panic attack cannot cause a heart attack or asphyxiation. It is the body\'s natural protective surge functioning at the wrong time.',
          hi: 'पैनिक अटैक से कभी दिल का दौरा नहीं पड़ता। यह शरीर की प्राकृतिक सुरक्षा प्रणाली का केवल एक "गलत अलार्म" है।',
          gu: 'પેનિક એટેકથી ક્યારેય હાર્ટ એટેક આવતો નથી. તે શરીરની કુદરતી સુરક્ષા વ્યવસ્થાનો માત્ર એક "ખોટો એલાર્મ" છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What should I do right in the middle of a panic attack?',
          hi: 'पैनिक अटैक आने के ठीक उसी समय मुझे क्या करना चाहिए?',
          gu: 'પેનિક એટેક આવી રહ્યો હોય ત્યારે તત્કાલ શું કરવું જોઈએ?',
        },
        answer: {
          en: 'Sit comfortably. Remind yourself: "This is a panic attack, it is uncomfortable but not dangerous, and it will peak and pass within minutes." Breathe slowly through your nose and out gently through pursed lips.',
          hi: 'शांति से बैठ जाएं। खुद को याद दिलाएं: "यह सिर्फ एक पैनिक अटैक है, यह खतरनाक नहीं है और कुछ ही मिनटों में बीत जाएगा।" नाक से धीरे-धीरे सांस लें और मुंह से धीरे-धीरे छोड़ें।',
          gu: 'શાંતિથી બેસી જાઓ. મનમાં યાદ કરો: "આ માત્ર પેનિક એટેક છે, તે અગવડભર્યો છે પણ જોખમી નથી, થોડીવારમાં શાંત થઈ જશે." ધીમેથી નાકથી શ્વાસ લો અને મોંથી ધીમેથી બહાર કાઢો.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Clinical trials and Cochrane meta-analyses establish that combining CBT with first-line SSRIs yields remission or marked clinical symptom reduction in 75% to 85% of individuals with panic disorder.',
          hi: 'क्लिनिकल अध्ययनों और कोचरन समीक्षाओं के अनुसार सीबीटी (CBT) और आधुनिक SSRI दवाओं का संयोजन 75% से 85% पैनिक डिसऑर्डर के मरीजों को दौरों से पूर्ण राहत दिलाता है।',
          gu: 'ક્લિનિકલ સંશોધનો અને કોકરેન વિશ્લેષણ દર્શાવે છે કે CBT કાઉન્સેલિંગ અને આધુનિક SSRI દવાઓનું સંયોજન ૭૫% થી ૮૫% પેનિક ડિસઓર્ડરના દર્દીઓને હુમલાઓમાંથી સંપૂર્ણ મુક્તિ અપાવે છે.',
        },
        citationRef: 'The Lancet Meta-Analysis',
      },
      {
        fact: {
          en: 'Hospital registry studies indicate that up to 25% of acute emergency room visits for unexplained non-cardiac chest pain represent undiagnosed panic disorder.',
          hi: 'इमरजेंसी वार्ड के अध्ययनों से पता चलता है कि सीने में दर्द की शिकायत लेकर आने वाले लगभग 25% मरीज जिनमें दिल की बीमारी नहीं होती, वे वास्तव में अनजाने पैनिक अटैक से पीड़ित होते हैं।',
          gu: 'હોસ્પિટલ ઇમરજન્સીના અભ્યાસો દર્શાવે છે કે છાતીમાં દુખાવાની ફરિયાદ સાથે આવતા અને હાર્ટ રિપોર્ટ નોર્મલ આવતા લગભગ ૨૫% દર્દીઓ અજાણતાં પેનિક એટેકથી પીડાતા હોય છે.',
        },
        citationRef: 'APA Practice Guidelines',
      },
      {
        fact: {
          en: 'Controlled trials confirm that CBT with interoceptive exposure yields significantly lower relapse rates over two-year follow-up compared to pharmacotherapy discontinuation alone.',
          hi: 'अनुसंधानों से स्पष्ट है कि इंटरसेप्टिव एक्सपोज़र वाली सीबीटी थेरेपी लेने वाले मरीजों में दो साल बाद भी दौरे दोबारा लौटने की संभावना केवल दवा बंद करने वालों की तुलना में बहुत कम होती है।',
          gu: 'સંશોધનો ખાતરી આપે છે કે ઇન્ટરોસેપ્ટિવ એક્સપોઝર ધરાવતી CBT થેરાપી મેળવનારા દર્દીઓમાં બે વર્ષ પછી પણ ફરીથી હુમલા થવાનું જોખમ માત્ર દવા બંધ કરનારા કરતાં ઘણું ઓછું રહે છે.',
        },
        citationRef: 'NICE Guidelines (UK)',
      },
      {
        fact: {
          en: 'Autonomic monitoring confirms that despite catastrophic sensations of imminent asphyxiation or myocardial collapse, cardiovascular parameters during panic attacks remain strictly within safe homeostatic thresholds.',
          hi: 'चिकित्सीय परीक्षणों से सिद्ध है कि दौरे के समय दिल का दौरा पड़ने या दम घुटने का भयानक अहसास होने के बावजूद शरीर के मुख्य अंग और हृदय सुरक्षित सीमाओं में ही काम करते हैं।',
          gu: 'તબીબી તપાસ દર્શાવે છે કે પેનિક હુમલા વખતે હાર્ટ એટેક કે શ્વાસ રુંધાવાનો ભયંકર અહેસાસ થતો હોવા છતાં, શરીરના અંગો અને હૃદય સંપૂર્ણપણે સલામત પરિમાણોમાં જ કામ કરે છે.',
        },
        citationRef: 'APA DSM-5-TR',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Panic Disorder. Am J Psychiatry. 2009;166(Suppl 2):1-90.',
        source: 'APA Practice Guidelines',
        year: '2009',
      },
      {
        citation: 'Craske MG, Stein MB. Anxiety. Lancet. 2016;388(10063):3048-3059.',
        source: 'The Lancet Meta-Analysis',
        year: '2016',
      },
      {
        citation: 'National Institute for Health and Care Excellence. Generalised anxiety disorder and panic disorder in adults: management (CG113). London: NICE, 2019.',
        source: 'NICE Guidelines (UK)',
        year: '2019',
      },
      {
        citation: 'Indian Psychiatric Society. Clinical Practice Guidelines for Management of Panic Disorder. Indian J Psychiatry. 2017;59(Suppl 1):S83-S94.',
        source: 'Indian Psychiatric Society (IPS) Guidelines',
        year: '2017',
      },
      {
        citation: 'Barlow DH, Gorman JM, Shear MK, Woods SW. Cognitive-behavioral therapy, imipramine, or their combination for panic disorder: A randomized controlled trial. JAMA. 2000;283(19):2529-2536.',
        source: 'JAMA Randomized Controlled Trial',
        year: '2000',
      },
    ],
    lastReviewed: '2026-09',
    // TODO(video): Panic sensations demystified, the hyperventilation loop, and somatic grounding
    youtubeVideoId: undefined,
    relatedIds: ['cbt', 'erp', 'anxiolytics', 'antidepressants', 'anxiety-gad'],
    relatedContent: {
      conditionSlugs: ['generalized-anxiety-disorder', 'illness-anxiety-disorder', 'social-anxiety-disorder'],
      medicationIds: ['antidepressants', 'anxiolytics-hypnotics'],
      treatmentIds: ['cbt', 'erp'],
    },
  },
  {
    id: 'ocd',
    slug: 'obsessive-compulsive-disorder',
    category: 'ocd',
    conditionIcon: 'ocd',
    name: {
      en: 'Obsessive-Compulsive Disorder (OCD)',
      hi: 'ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD)',
      gu: 'ઓબ્સેસિવ-કમ્પલ્સિવ ડિસઓર્ડર (OCD - વહેમ અને વારંવાર કરવાની ટેવ)',
    },
    medicalTerms: {
      en: 'OCD, Anankastic Neurosis',
      hi: 'ओसीडी (OCD), विचार-बाध्यता विकार',
      gu: 'ઓસીડી (OCD)',
    },
    overview: {
      en: 'Obsessive-Compulsive Disorder (OCD; ICD-11: 6B20, DSM-5-TR) is a severe, chronic, and frequently incapacitating neuropsychiatric disorder characterized by the presence of persistent, intrusive, and distressing thoughts, urges, or mental imagery (obsessions) that violate a person\'s core values, and repetitive, rigid behavioral or covert mental rituals (compulsions) executed to neutralize or temporarily dissipate the excruciating visceral anxiety, disgust, or catastrophic terror triggered by the obsessions. Crucially, OCD is marked by egodystonic intrusion: individuals typically recognize on an intellectual level that their obsessive fears are excessive, irrational, or logically ungrounded, yet the neurobiological urge to perform rituals feels overwhelmingly irresistible. Left untreated, OCD establishes a vicious neurocircuit loop where ritualistic execution provides brief, negative reinforcement, rapidly strengthening the obsession and progressively colonizing the sufferer\'s daily life.',
      hi: 'ऑब्सेसिव-कंपल्सिव डिसऑर्डर (OCD) एक गंभीर, पुराना और जीवन को पंगु बना देने वाला न्यूरोसाइकियाट्रिक विकार है। इसमें व्यक्ति के मन में लगातार अवांछित, परेशान करने वाले और डरावने विचार, छवियां या शंकाएं (Obsessions) आती रहती हैं, जो उसकी इच्छा के विरुद्ध होती हैं। इन विचारों से पैदा होने वाली भारी घबराहट, अपराधबोध या बेचैनी को शांत करने के लिए व्यक्ति बार-बार कुछ खास शारीरिक या मानसिक क्रियाएं (Compulsions - जैसे बार-बार हाथ धोना, ताले जांचना, गिनती गिनना या मन में मंत्र दोहराना) करने को विवश हो जाता है। मरीज बौद्धिक रूप से जानता है कि उसका डर तर्कहीन और बेबुनियाद है, फिर भी उसका दिमाग उसे यह चेतावनी देता है कि अगर उसने यह क्रिया नहीं की तो कोई बड़ा अनर्थ हो जाएगा। क्रिया करने से कुछ पलों की राहत मिलती है, लेकिन यह चक्र दिमाग में बीमारी को और अधिक गहरा कर देता है।',
      gu: 'ઓબ્સેસિવ-કમ્પલ્સિવ ડિસઓર્ડર (OCD) એ મગજના ચોક્કસ ન્યુરોન નેટવર્ક સાથે જોડાયેલી અત્યંત પીડાકારક અને ગંભીર માનસિક બીમારી છે. આમાં વ્યક્તિના મગજમાં તેની અનિચ્છા છતાં વારંવાર ન જોઈતા, ભયાનક કે વહેમી વિચારો, શંકાઓ કે છબીઓ (Obsessions) સતત ઘૂમરાયા કરે છે. આ અસહ્ય ચિંતા, ગભરાટ કે ગંદકીની લાગણીમાંથી છૂટકારો મેળવવા માટે વ્યક્તિ વારંવાર એકના એક કામો કે ધાર્મિક ક્રિયાઓ (Compulsions - જેમ કે વારંવાર હાથ ધોવા, કલાકો સુધી નહાવું, ગેસ-તાળાં વારંવાર તપાસવા, મનમાં ગણતરીઓ કરવી) કરવા મજબૂર બને છે. દર્દી પોતે જાણે છે કે તેનો આ વહેમ નકામો અને ખોટો છે, છતાં પણ મગજનો ભય એટલો શક્તિશાળી હોય છે કે તે આ કામ કર્યા વગર રહી શકતો નથી. આ ક્રિયા કરવાથી ક્ષણિક શાંતિ મળે છે પરંતુ લાંબા ગાળે આ બીમારી વધતી જાય છે.',
    },
    illustrativeExamples: [
      {
        en: 'Priya, a 28-year-old high school chemistry teacher in Surat, had always been conscientious, but following the birth of her daughter, intrusive thoughts regarding chemical contamination began to seize her consciousness. Walking through her home, sudden intrusive mental imagery would strike her that invisible caustic pesticides, heavy metals, or toxic cleaning agents from grocery packaging had coated her skin and would be transferred to her baby\'s eyes, causing permanent blindness or death. Paralyzed by unbearable dread and moral guilt, Priya began washing her hands with antibacterial soap each time she crossed a threshold or touched a door handle. Within five months, what began as thirty seconds of washing degenerated into rigid, agonizing multi-hour rituals. Each wash required lathering her forearms up to the elbows exactly seven times in uninterrupted sequential order. If she lost count or experienced an intrusive thought mid-wash, she was compelled to start the entire ritual from scratch. She began using boiling water, diluted bleach, and stiff scrubbing brushes until her hands were raw, cracked, bleeding, and weeping with secondary bacterial eczema. To avoid triggering contamination alarms, Priya established strict "biohazard quarantine zones" in her home: groceries were quarantined in the garage for days; family members had to strip their clothing at the front door and shower before entering; and Priya spent four to five hours each evening sterilizing kitchen countertops. Exhausted, unable to touch or hold her own infant daughter without sobbing in terror, and taking medical leave from teaching, Priya\'s family brought her to a psychiatrist. Following comprehensive psychiatric evaluation, Priya was diagnosed with severe OCD with good insight (Y-BOCS score: 32/40). She was initiated on high-dose SSRI therapy (Fluvoxamine, titrated up to 250 mg daily) to modulate hyperactive serotonergic and cortico-striatal circuits, paired with Exposure and Response Prevention (ERP) psychotherapy conducted with an experienced clinical psychologist. In ERP, Priya constructed a fear hierarchy, starting by touching a "contaminated" grocery bag and resisting the urge to wash her hands, sitting with the peak anxiety until her autonomic nervous system naturally habituated and down-regulated. Over twelve weeks of intensive ERP and medical management, Priya\'s Y-BOCS score plummeted to 8/40. Her skin fully healed, her home quarantine rules were dismantled, and she happily held her daughter without fear, resuming her classroom teaching with restored confidence and peace of mind.',
        hi: 'सूरत की 28 वर्षीय हाई स्कूल केमिस्ट्री शिक्षिका प्रिया हमेशा से बहुत जिम्मेदार थीं, लेकिन अपनी बेटी के जन्म के बाद उनके मन में केमिकल संदूषण (Contamination) के भयानक विचार आने लगे। घर में घूमते हुए अचानक उनके दिमाग में यह विचार कौंधता कि बाजार के सामान से कोई खतरनाक कीटनाशक या एसिड उनके हाथों पर लग गया है और अगर उन्होंने अपनी बच्ची को छुआ, तो वह अंधी हो जाएगी या उसकी जान चली जाएगी। इस असहनीय अपराधबोध और डर से बचने के लिए प्रिया ने हर दरवाजे के हैंडल को छूने के बाद हाथ धोना शुरू किया। पांच महीनों के भीतर यह आदत एक भयानक नरक में बदल गई। वह अपनी कोहनियों तक हाथ लगातार सात बार गिनती गिनते हुए धोती थीं। अगर बीच में गिनती भूल जातीं या मन में कोई नकारात्मक विचार आ जाता, तो उन्हें पूरी प्रक्रिया शून्य से दोबारा शुरू करनी पड़ती थी। धीरे-धीरे उन्होंने खौलते पानी, डिटर्जेंट और सख्त ब्रश से हाथ रगड़ना शुरू कर दिया, जिससे उनके हाथों की त्वचा छिल गई, खून रिसने लगा और गहरा संक्रमण हो गया। प्रिया ने घर में कड़े नियम बना दिए: बाजार से आया सामान हफ्तों बाहर रखा रहता, पति को घर में घुसते ही कपड़े बदलकर नहाना पड़ता और वे खुद रोज रात को चार-चार घंटे रसोई के फर्श को पोंछती रहती थीं। जब वे अपनी ही बच्ची को गोद में लेने से डरने लगीं और स्कूल से छुट्टी लेनी पड़ी, तब परिवार उन्हें मनोचिकित्सक के पास ले गया। जांच में पता चला कि प्रिया गंभीर ओसीडी (Y-BOCS स्कोर: 32/40) से पीड़ित हैं। डॉक्टर ने उच्च खुराक वाली SSRI दवा (फ्लुवोक्सामाइन) शुरू की और क्लिनिकल साइकोलॉजिस्ट के साथ एक्सपोज़र एंड रिस्पॉन्स प्रिवेंशन (ERP) थेरेपी कराई। ईआरपी में प्रिया को जानबूझकर बाजार के पैकेट को छूने को कहा गया और हाथ धोने से रोका गया, जिससे उनके दिमाग ने सीखा कि बिना हाथ धोए भी कोई अनर्थ नहीं होता। तीन महीने के भीतर उनका ओसीडी स्कोर घटकर सिर्फ 8 रह गया, उनके हाथों के घाव भर गए, घर के कड़े नियम खत्म हो गए और वे अपनी नन्ही बेटी को बिना किसी डर के प्यार से गले लगाने और दोबारा पढ़ाने में सक्षम हो गईं।',
        gu: 'સુરતની ૨૮ વર્ષીય કેમિસ્ટ્રી શિક્ષિકા પ્રિયા હંમેશાં ચીવટવાળી હતી, પરંતુ પુત્રીના જન્મ પછી તેના મગજમાં ઝેરી કેમિકલ્સ અને જંતુઓનો ભયંકર વહેમ પેસી ગયો. ઘરમાં ચાલતી વખતે તેને અચાનક વિચાર આવતો કે બહારથી લાવેલી શાકભાજી કે દૂધની થેલી પર કોઈ ઝેરી જંતુનાશક લાગેલું છે અને જો તે બાળકીને અડશે તો બાળકી અંધ થઈ જશે કે મરી જશે. આ અસહ્ય પાપબોધ અને ડરમાંથી બચવા તેણે દરવાજો અડ્યા પછી હાથ ધોવાનું શરૂ કર્યું. પાંચ મહિનામાં આ બીમારી એટલી વધી ગઈ કે તેનો આખો દિવસ હાથ ધોવામાં જતો રહ્યો. તે કોણી સુધી સાત વાર ક્રમબદ્ધ સાબુ ઘસીને હાથ ધોતી. જો વચ્ચે કોઈ અશુદ્ધ વિચાર આવી જાય કે ગણતરી ચૂકી જવાય, તો તેણે ફરીથી સાત વાર હાથ ધોવા પડતા. છેવટે તેણે ઉકળતા ગરમ પાણી અને ડિટર્જન્ટથી હાથ ઘસવાનું શરૂ કર્યું, જેથી તેના હાથની ચામડી છોલાઈ ગઈ, લોહી નીકળવા માંડ્યું અને ગંભીર ચેપ લાગી ગયો. પ્રિયાએ ઘરમાં કડક નિયમો બનાવી દીધા: બહારનો સામાન દિવસો સુધી બહાર રખાતો, પતિએ ઘરમાં પ્રવેશતા જ કપડાં કાઢીને નહાવું પડતું અને પોતે રાત્રે ચાર-ચાર કલાક રસોડું સાફ કરતી. જ્યારે તે પોતાની જ દીકરીને તેડતા ડરવા લાગી અને સ્કૂલે જવાનું બંધ થઈ ગયું, ત્યારે પરિવાર તેને મનોચિકિત્સક પાસે લાવ્યો. તપાસમાં તેને ગંભીર OCD (Y-BOCS સ્કોર: 32/40) હોવાનું જણાયું. મનોચિકિત્સકે યોગ્ય SSRI દવા (ફ્લુવોક્સામાઇન) અને એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP) થેરાપી શરૂ કરાવી. ERP થેરાપીમાં પ્રિયાને બહારની વસ્તુઓ અડાવીને હાથ ધોયા વગર બેસી રહેવાની વૈજ્ઞાનિક તાલીમ આપવામાં આવી, જેથી તેના મગજને સમજાયું કે હાથ ન ધોવાથી પણ કોઈ અનિષ્ટ થતું નથી. બાર અઠવાડિયામાં તેનો સ્કોર ઘટીને માત્ર ૮ થઈ ગયો, તેના હાથ સાજા થઈ ગયા, ઘરના વહેમી નિયમો બંધ થયા અને તે પોતાની દીકરીને નિર્ભય બનીને વહાલ કરવા લાગી અને ફરીથી આત્મવિશ્વાસ સાથે સ્કૂલમાં ભણાવવા લાગી.',
      },
      {
        en: 'Aarav, a 19-year-old engineering student in Vadodara, suffered from excruciating taboo intrusive thoughts involving sacrilegious blasphemy in temples and uncontrollable horrific images of causing accidental harm to family members. Because these thoughts violated his moral conscience, Aarav believed having the thought was morally equivalent to carrying it out (thought-action fusion). To neutralize the tormenting dread, he developed covert mental compulsions: chanting mental purification mantras in exact multiples of four, mentally "undoing" negative thoughts with good images, and spending up to five hours daily locked in silent mental loops. His academic performance plummeted. Convinced by an online psychoeducation forum to seek clinical help, Aarav consulted an OCD specialist at a medical university. Diagnosed with OCD characterized by predominant mental rituals, Aarav commenced high-dose Sertraline alongside specialized ERP targeting mental neutralizing rituals (learning to acknowledge intrusive thoughts without repeating prayer formulas). Within ten weeks, the intrusive distress subsided by 70%, liberating his cognitive focus for his studies.',
        hi: 'वडोदरा के 19 वर्षीय इंजीनियरिंग छात्र आरव के मन में मंदिर जाने या पूजा करने पर अवांछित ईशनिंदा और धार्मिक अपमान के भयानक विचार आते थे, जिससे उसे भारी अपराधबोध और पाप का डर सताता था। इस डर को मिटाने के लिए वह मन ही मन चार के गुणकों में मंत्र दोहराने, विचारों को "काटने" के लिए मानसिक चित्र बनाने और घंटों सिर पकड़कर बैठने जैसे मानसिक रिवाजों (Mental Compulsions) में उलझा रहता था। पढ़ाई पूरी तरह ठप हो गई। मनोचिकित्सक ने ओसीडी की पहचान कर उच्च खुराक वाली सर्ट्रालाइन और मानसिक रिवाजों को रोकने वाली ERP थेरेपी शुरू की। ढाई महीने में आरव के अनचाहे विचारों का खौफ 70% तक कम हो गया और वह फिर से अपनी इंजीनियरिंग की पढ़ाई में मन लगाने लगा।',
        gu: 'વડોદરાના ૧૯ વર્ષીય એન્જિનિયરિંગ વિદ્યાર્થી આરવના મનમાં મંદિરે જતી વખતે કે પૂજા કરતી વખતે અચાનક અનિચ્છનીય ધાર્મિક વિરોધી અને અપવિત્ર વિચારો આવતા હતા, જેનાથી તે ભારે પાપબોધ અને ભય અનુભવતો હતો. આ પાપમાંથી બચવા તે મનમાં ને મનમાં ચોક્કસ મંત્રો ચાર-ચાર વાર ગણ્યા કરતો અને ખરાબ વિચારોને સારા વિચારોથી બદલવાના કલાકો સુધી માનસિક પ્રયાસો કરતો. તેનાથી તેનો અભ્યાસ બગડી ગયો. મનોચિકિત્સકે આ માનસિક OCD હોવાનું પારખી યોગ્ય દવા અને ERP કાઉન્સેલિંગ આપ્યું. અઢી મહિનામાં આરવના મગજનો આ વહેમી ભાર હળવો થયો અને તે ફરીથી સામાન્ય બનીને ભણવા લાગ્યો.',
      },
      {
        en: 'Bhavik, a 35-year-old bank operations supervisor in Bharuch, suffered from debilitating pathological doubt and checking compulsions. Leaving home each morning was an agonizing ordeal: he checked door deadbolts, gas cylinder knobs, electrical switchboards, and water taps up to forty times, filming them on his phone for photographic proof. Even after driving away, overwhelming doubt that he had left a stove burner on forced him to turn his car around three to four times, resulting in chronic lateness. At work, he spent hours re-verifying signed transaction slips, terrified that an oversight would cause financial devastation. A comprehensive psychiatric evaluation confirmed severe OCD. Initiated on Escitalopram (gradually titrated to 30 mg daily under close monitoring) and structured ERP where he practiced locking his door once and driving directly to work without turning back, Bhavik systematically dismantled his checking compulsions over twelve weeks, saving three hours every single day.',
        hi: 'भरूच के 35 वर्षीय बैंक कर्मचारी भाविक को तालों, गैस सिलेंडर और बिजली के स्विच बार-बार जांचने की गंभीर बीमारी थी। सुबह घर से निकलते समय वे दरवाजों के ताले और गैस का चूल्हा 40-40 बार चेक करते थे और सबूत के लिए मोबाइल से फोटो और वीडियो बनाते थे। गाड़ी में बैठकर आधा रास्ता तय करने के बाद भी मन में शंका होने पर गाड़ी मोड़कर वापस घर आते थे। ऑफिस में भी वे फाइलों को बार-बार चेक करने में घंटों बर्बाद करते थे। मनोचिकित्सक ने ओसीडी का निदान कर उच्च खुराक वाली एस्सिटालोप्राम और सीबीटी/ईआरपी थेरेपी शुरू की। थेरेपी में भाविक को सिर्फ एक बार ताला लगाकर बिना मुड़े ऑफिस जाने का अभ्यास कराया गया। तीन महीने में उनके चेकिंग के लक्षण 80% घट गए और वे रोज के तीन घंटे बचाने में सफल रहे।',
        gu: 'ભરૂચના ૩૫ વર્ષીય બેંક સુપરવાઇઝર ભાવિકભાઈને દરવાજાના તાળાં, ગેસનો ચૂલો અને લાઈટની સ્વીચો વારંવાર તપાસવાનો ભયંકર વહેમ હતો. સવારે ઑફિસ નીકળતી વખતે તેઓ તાળું ૪૦ વાર ખેંચીને જોતા અને સાબિતી માટે મોબાઈલમાં વિડીયો ઉતારતા. કારમાં થોડે દૂર ગયા પછી પણ મનમાં શંકા થતાં કાર પાછી વાળીને ઘરે તપાસવા આવતા. બેંકમાં પણ તેઓ હિસાબના કાગળો વારંવાર તપાસવામાં કલાકો વેડફતા. મનોચિકિત્સકે આ ગંભીર OCD ઓળખી દવા અને ERP થેરાપી શરૂ કરી. જેમાં તેમને એક જ વાર તાળું મારીને પાછળ જોયા વગર સીધા ઑફિસ જવાની વૈજ્ઞાનિક પ્રેક્ટિસ કરાવાઈ. ત્રણ મહિનામાં તેમનો વહેમ દૂર થયો અને રોજનો ત્રણ કલાકનો કિંમતી સમય બચી ગયો.',
      },
    ],
    commonSymptoms: {
      en: [
        'Obsessions: Fear of contamination, dirt, or germs',
        'Fears of causing harm to loved ones or oneself accidentally',
        'Intrusive forbidden or taboo aggressive, sexual, or blasphemous thoughts',
        'Need for symmetrical arrangement, precision, or perfection',
        'Compulsions: Excessive hand washing, cleaning, or showering',
        'Repeatedly checking locks, stoves, switches, or appliances',
        'Mental rituals (counting numbers, repeating specific phrases silently)',
        'Excessive reassurance-seeking from family members',
      ],
      hi: [
        'ऑब्सेशन्स: गंदगी, कीटाणुओं या बीमारी का अत्यधिक डर',
        'अनजाने में किसी अपने को नुकसान पहुंचाने का गहरा अनचाहा डर',
        'अवांछित आक्रामक, यौन या धार्मिक ईशनिंदा के विचार आना (जिससे अपराधबोध हो)',
        'चीजों को बिल्कुल सीध में या सटीक क्रम में रखने की जिद',
        'कंपल्शन्स: बार-बार हाथ धोना, नहाना या सफाई करते रहना',
        'ताले, गैस सिलेंडर, बिजली के स्विच बार-बार जाकर जांचना',
        'मन ही मन गिनती गिनना या खास शब्दों को दोहराना',
        'परिवार वालों से बार-बार यह पूछना कि "सब ठीक है न?"',
      ],
      gu: [
        'ઓબ્સેશન્સ: ગંદકી, કીટાણુઓ કે ચેપ લાગવાનો સતત અતિશય ડર',
        'પોતાના હાથે કોઈને નુકસાન થઈ જશે તેવો વણજોઇતો ડર',
        'મનમાં અનિચ્છનીય ધાર્મિક, અશ્લીલ કે હિંસક વિચારો આવીને પરેશાન કરવા',
        'વસ્તુઓ એકદમ સરખી લાઈનમાં કે ચોક્કસ ક્રમમાં ગોઠવવાનો આગ્રહ',
        'કમ્પલ્શન્સ: વારંવાર હાથ ધોવા, કલાકો સુધી નહાવું કે સફાઈ કરવી',
        'તાળાં, ગેસ, સ્વીચ વારંવાર જઈને ચેક કરવા',
        'મનમાં મંત્રો કે ગણતરીઓ વારંવાર બોલવી',
        'પરિવારના સભ્યો પાસે વારંવાર ખાતરી માંગવી',
      ],
    },
    dailyLifeImpact: {
      en: 'The functional devastation of OCD is profound. Compulsions consume multiple hours each day, generating severe chronic tardiness, absenteeism, and vocational collapse. Physical health often deteriorates drastically, with dermatological ulcerations, dermatitis, and systemic infections from chemical scrubbing, or nutritional depletion from food contamination rituals. Family members are routinely held hostage by accommodation demands—forced to adhere to rigid cleansing protocols or deliver endless reassuring statements—leading to severe relational strain, financial exhaustion, and profound caregiver burnout.',
      hi: 'ओसीडी का प्रभाव व्यक्ति और उसके पूरे परिवार के जीवन को तहस-नहस कर देता है। बार-बार हाथ धोने, नहाने और जांचने में रोज 4 से 8 घंटे बर्बाद हो जाते हैं, जिससे नौकरी छूटना और पढ़ाई बर्बाद होना आम है। कठोर साबुनों और कैमिकल्स से हाथ धोने के कारण त्वचा पर गहरे घाव और संक्रमण हो जाते हैं। मरीज के कहने पर पूरे परिवार को भी इन अजीबोगरीब नियमों का पालन करना पड़ता है और बार-बार तसल्ली देनी पड़ती है, जिससे घर में हर समय झगड़े, तनाव और मानसिक थकावट का माहौल बना रहता है।',
      gu: 'OCD વ્યક્તિ અને તેના સમગ્ર પરિવારના જીવનને વેરવિખેર કરી નાખે છે. દિવસના કલાકો સફાઈ અને ચેકિંગમાં વેડફાઈ જવાથી નોકરી છૂટી જવી કે અભ્યાસ બગડવો સામાન્ય છે. કેમિકલ્સ અને સાબુના સતત ઉપયોગથી હાથની ચામડી ખવાઈ જાય છે અને લોહી નીકળવા લાગે છે. પરિવારજનોએ પણ દર્દીના કહ્યા પ્રમાણે ચાલવું પડે છે અને વારંવાર ખાતરી આપવી પડે છે, જેનાથી ઘરમાં સતત ઝઘડા, તણાવ અને હતાશાનું વાતાવરણ રહે છે.',
    },
    causes: {
      en: 'OCD is a distinct neurocircuit disorder rooted in structural and functional abnormalities within the Cortico-Striato-Thalamo-Cortical (CSTC) loops (involving the orbitofrontal cortex, anterior cingulate cortex, caudate nucleus, and thalamus), leading to impaired cognitive flexibility and failure of behavioral inhibition. Neurochemical dysregulation involves serotonergic, glutamatergic, and dopaminergic neurotransmission. Genetic heritability is substantial, estimated between 45% and 50% in family and twin studies. Pediatric Autoimmune Neuropsychiatric Disorders Associated with Streptococcal Infections (PANDAS) and PANS represent distinct post-infectious autoimmune variants in pediatric cohorts.',
      hi: 'ओसीडी का मूल कारण मस्तिष्क के विशेष न्यूरोलॉजिकल नेटवर्क—कॉर्टिको-स्ट्रायटो-थैलेमो-कॉर्टिकल (CSTC) लूप—की खराबी है। इसमें दिमाग का ऑर्बिटोफ्रॉन्टल कॉर्टेक्स (जो खतरे की पहचान करता है) और कॉडेट न्यूक्लियस (जो विचारों को फिल्टर करता है) आपस में सही तालमेल नहीं बना पाते, जिससे खतरे का झूठा सिग्नल लगातार गूंजता रहता है। सेरोटोनिन और ग्लूटामेट न्यूरोट्रांसमीटर का असंतुलन इसमें प्रमुख भूमिका निभाता है। यह बीमारी 45% से 50% तक आनुवंशिक होती है। बच्चों में स्ट्रेप्टोकोकल गले के संक्रमण के बाद अचानक ओसीडी होना (PANDAS) भी एक ऑटोइम्यून कारण हो सकता है।',
      gu: 'OCD એ મગજના વિશિષ્ટ ન્યુરલ સર્કિટ (CSTC લૂપ) ની જૈવિક ખામી છે, જેમાં મગજનો આગળનો ભાગ (ઓર્બિટોફ્રન્ટલ કોર્ટેક્સ) અને ફિલ્ટર કેન્દ્ર યોગ્ય રીતે કામ ન કરવાથી ખોટા ભયના સિગ્નલ વારંવાર મોકલ્યા કરે છે. મગજના સેરોટોનિન અને ગ્લુટામેટ જેવા રસાયણોની અનિયમિતતા આ માટે જવાબદાર છે. આશરે ૪૫% થી ૫૦% કેસોમાં આ બીમારી વારસાગત હોય છે. બાળકોમાં ગળાના બેક્ટેરિયલ ઇન્ફેક્શન (PANDAS) પછી પણ અચાનક OCD ના ગંભીર લક્ષણો શરૂ થઈ શકે છે.',
    },
    riskFactors: {
      en: [
        'First-degree biological relative diagnosed with OCD, Tourette syndrome, or chronic motor/vocal tics',
        'Perfectionistic personality traits, high neuroticism, cognitive rigidity, and exaggerated sense of personal responsibility',
        'Acute psychological trauma, significant life transitions (e.g., pregnancy, postpartum period, bereavement)',
        'Pediatric streptococcal infections triggering post-infectious autoimmune basal ganglia inflammation (PANDAS/PANS)',
      ],
      hi: [
        'परिवार में किसी को ओसीडी, टिक्स (Tics) या टूरेट सिंड्रोम की समस्या होना',
        'अत्यधिक पूर्णतावादी (Perfectionist) स्वभाव, जिद्दीपन और खुद को हर बात के लिए जिम्मेदार मानने की प्रवृत्ति',
        'बचपन में गंभीर मानसिक या शारीरिक आघात, गर्भावस्था या बच्चे का जन्म (Postpartum)',
        'बचपन में गले का गंभीर स्ट्रेप्टोकोकल बैक्टीरियल संक्रमण (PANDAS)',
      ],
      gu: [
        'પરિવારમાં કોઈને OCD, ટિક્સ (Tics) કે ટુરેટ સિન્ડ્રોમની તકલીફ હોવી',
        'અતિશય પરફેક્શનિસ્ટ સ્વભાવ અને દરેક વાત માટે પોતાની જાતને જવાબદાર ગણવાની ટેવ',
        'ગંભીર માનસિક આઘાત, ગર્ભાવસ્થા કે ડિલિવરી પછીનો સમયગાળો',
        'બાળપણમાં ગળાનું ગંભીર બેક્ટેરિયલ ઇન્ફેક્શન (PANDAS)',
      ],
    },
    psychiatricAssessment: {
      en: 'A comprehensive psychiatric interview designed to systematically catalogue all overt behavioral compulsions (washing, checking, ordering, repeating) and covert mental rituals (mental reviewing, counting, praying, neutralization thoughts); distinguish clinical obsessions from psychotic delusions, depressive ruminations, and generalized worries; assess the degree of insight (good/fair insight, poor insight, or absent insight/delusional beliefs); quantify baseline symptom severity via the Yale-Brown Obsessive Compulsive Scale (Y-BOCS); and screen for comorbid major depressive disorder, tic disorders (Tourette syndrome), trichotillomania, and excoriation disorder.',
      hi: 'मनोचिकित्सक द्वारा विस्तृत नैदानिक मूल्यांकन किया जाता है, जिसमें मरीज के सभी प्रकार के शारीरिक कर्मकांडों (हाथ धोना, जांचना, सजाना) और मानसिक क्रियाओं (मन में गिनती गिनना, दोहराना, विचारों को काटना) की पूरी सूची बनाई जाती है। यह सुनिश्चित किया जाता है कि ये विचार डिप्रेशन के नकारात्मक विचार या भ्रम (Delusions) तो नहीं हैं। बीमारी के प्रति मरीज की समझ (Insight) को परखा जाता है। येल-ब्राउन ओसीडी स्केल (Y-BOCS) के माध्यम से गंभीरता को 0 से 40 के पैमाने पर मापा जाता है, और साथ ही डिप्रेशन तथा टिक्स (Tics) की जांच की जाती है।',
      gu: 'મનોચિકિત્સક દ્વારા વિગતવાર તપાસ કરવામાં આવે છે, જેમાં દર્દીની તમામ શારીરિક ક્રિયાઓ (હાથ ધોવા, ચેક કરવું) અને માનસિક ક્રિયાઓ (મનમાં ગણતરી કરવી, પ્રાર્થનાઓનું રટણ) ની યાદી બનાવાય છે. આ વિચારો સાચા વહેમ છે કે સાયકોસિસનો ભ્રમ છે તેનો તફાવત નક્કી કરાય છે. દર્દીને પોતાની બીમારીનું કેટલું ભાન છે (Insight) તે તપાસાય છે. વિશ્વપ્રસિદ્ધ યેલ-બ્રાઉન સ્કેલ (Y-BOCS) દ્વારા OCD ની તીવ્રતા માપવામાં આવે છે અને સાથે ડિપ્રેશન કે ટિક્સની હાજરી તપાસવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, diagnosis of Obsessive-Compulsive Disorder requires the presence of obsessions, compulsions, or both: (1) Obsessions are defined by recurrent and persistent thoughts, urges, or images that are experienced as intrusive and unwanted, causing marked anxiety or distress, and which the individual attempts to ignore, suppress, or neutralize with some other thought or action (by performing a compulsion); (2) Compulsions are defined by repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the individual feels driven to perform in response to an obsession or according to rules that must be applied rigidly, aimed at preventing or reducing anxiety or preventing a dreaded event, though not realistically connected to the event or clearly excessive. Crucially, the obsessions or compulsions must be time-consuming (e.g., take more than 1 hour per day) or cause clinically significant distress or impairment in social, occupational, or other important areas of functioning. The clinician must specify insight level: with good or fair insight, with poor insight, or with absent insight/delusional beliefs, as well as any history of a tic-related disorder. In ICD-11, this condition is codified under 6B20.',
      hi: 'DSM-5-TR के अनुसार, ओसीडी के निदान के लिए ऑब्सेशन्स (अनचाहे विचार), कंपल्शन्स (बाध्यकारी क्रियाएं) या दोनों का होना आवश्यक है: (1) ऑब्सेशन्स: बार-बार आने वाले अनचाहे और परेशान करने वाले विचार, छवियां या इच्छाएं जो अत्यधिक घबराहट या संकट पैदा करती हैं, और जिन्हें व्यक्ति दबाने या किसी दूसरी क्रिया (कंपल्शन) द्वारा शांत करने की कोशिश करता है; (2) कंपल्शन्स: दोहराए जाने वाले शारीरिक व्यवहार (जैसे हाथ धोना, सजाना, ताले जांचना) या मानसिक कार्य (जैसे प्रार्थना करना, गिनती गिनना, चुपचाप शब्दों को दोहराना) जिन्हें करने के लिए व्यक्ति खुद को मजबूर पाता है ताकि चिंता कम हो सके या किसी अनहोनी को टाला जा सके, भले ही उनका उस घटना से कोई वास्तविक संबंध न हो। सबसे महत्वपूर्ण बात यह है कि ये विचार या क्रियाएं दिन में कम से कम 1 घंटे से अधिक का समय लेती हों, या व्यक्ति के सामाजिक, पारिवारिक और कार्यक्षेत्र में भारी बाधा उत्पन्न करती हों। डॉक्टर को मरीज की अंतर्दृष्टि (Insight) और टिक्स की मौजूदगी को भी दर्ज करना होता है। ICD-11 में इसका कोड 6B20 है।',
      gu: 'DSM-5-TR મુજબ, OCD ના નિદાન માટે ઓબ્સેશન્સ (ન જોઈતા વિચારો), કમ્પલ્શન્સ (વારંવાર કરવાની ક્રિયાઓ) અથવા બંનેનું હોવું જરૂરી છે: (૧) ઓબ્સેશન્સ: મગજમાં વારંવાર આવતા પરેશાન કરનારા અનિચ્છનીય વિચારો, શંકાઓ કે છબીઓ જે અતિશય ગભરાટ કે તણાવ પેદા કરે છે, અને જેને વ્યક્તિ દબાવવા કે કોઈ અન્ય ક્રિયા કરીને શાંત કરવા મથે છે; (૨) કમ્પલ્શન્સ: વારંવાર કરવામાં આવતી શારીરિક ક્રિયાઓ (જેમ કે હાથ ધોવા, ગોઠવવું, તાળાં તપાસવા) અથવા માનસિક ક્રિયાઓ (જેમ કે મનમાં ગણતરી કરવી, શબ્દોનું રટણ કરવું) જે કરવા દર્દી મજબૂર અનુભવે છે જેથી ચિંતા ઘટે કે કોઈ અશુભ ઘટના ટળે, જોકે આ ક્રિયાઓ તદ્દન અવાસ્તવિક કે અતિશયોક્તિભરી હોય છે. આ વિચારો કે ક્રિયાઓ દિવસનો ઓછામાં ઓછો ૧ કલાકથી વધુ સમય બગાડતી હોવી જોઈએ અથવા વ્યક્તિના સામાજિક, કૌટુંબિક કે વ્યાવસાયિક જીવનમાં ગંભીર નુકસાન પહોંચાડતી હોવી જોઈએ. આ ઉપરાંત દર્દીમાં સમજણની કક્ષા (Insight) અને ટિક્સની હાજરી નોંધવામાં આવે છે. ICD-11 માં આનો કોડ 6B20 છે.',
    },
    differentialConsiderations: {
      en: 'Crucial clinical differentials include: Generalized Anxiety Disorder (excessive real-life everyday worries vs. bizarre/egodystonic obsessions); Major Depressive Disorder (depressive ruminations lack active neutralizing compulsions); Illness Anxiety Disorder and Somatic Symptom Disorder; Body Dysmorphic Disorder; Hoarding Disorder; Schizophrenia and Psychotic Disorders (differentiating poor insight obsessions from true primary delusions); Autism Spectrum Disorder (stereotyped motor mannerisms and circumscribed interests vs. anxiety-neutralizing compulsions); and Tourette Syndrome / Chronic Motor Tic Disorders.',
      hi: 'इसे जनरलाइज्ड एंग्जायटी डिसऑर्डर (जिसमें रोजमर्रा की वास्तविक चिंताएं होती हैं); मेजर डिप्रेशन (जिसमें उदासी भरे विचार होते हैं पर उन्हें शांत करने के लिए क्रियाएं नहीं की जातीं); इलनेस एंग्जायटी डिसऑर्डर (बीमारी का डर); बॉडी डिस्मॉर्फिक डिसऑर्डर; जमाखोरी की आदत (Hoarding); साइकोसिस और सिज़ोफ्रेनिया (सच्चे वहम बनाम ओसीडी); ऑटिज्म (रूढ़िवादी आदतें); और टूरेट सिंड्रोम (शारीरिक टिक्स) से अलग पहचानना आवश्यक है।',
      gu: 'આને સામાન્યકૃત ચિંતા (GAD - જેમાં રોજિંદી ચિંતાઓ હોય છે); ડિપ્રેશનના નકારાત્મક વિચારો; બીમારીનો વહેમ (Hypochondriasis); શરીરની ખામીનો વહેમ (BDD); કચરો ભેગો કરવાની ટેવ (Hoarding); સાયકોસિસ કે સ્કિઝોફ્રેનિયાના ભ્રમ; ઓટિઝમની આદતો; અને ટુરેટ સિન્ડ્રોમ (Tics) થી અલગ તારવવું અનિવાર્ય છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Explaining that intrusive thoughts happen to almost everyone; the problem in OCD is the brain falsely labeling them as dangerous emergencies.',
        hi: 'यह समझना कि अनचाहे विचार हर किसी के मन में आते हैं; ओसीडी में मस्तिष्क उन्हें गलती से गंभीर खतरा मान लेता है।',
        gu: 'સમજવું કે નકામા વિચારો દરેકને આવે છે; પરંતુ OCD માં મગજ તેને અતિશય ગંભીર માનીને ડરાવે છે.',
      },
      lifestyleSupport: {
        en: 'Stress management, maintaining consistent daily routines, and not structuring daily living around rituals.',
        hi: 'तनाव कम करना, दिनचर्या को अनुशासित रखना और घर के माहौल को ओसीडी के अनुकूल न ढालना।',
        gu: 'તણાવ ઘટાડવો, યોગ્ય દિનચર્યા રાખવી અને ઘરના નિયમોને વહેમ પ્રમાણે ન બદલવા.',
      },
      psychotherapy: {
        en: 'Exposure and Response Prevention (ERP) is the gold-standard psychotherapy. The person deliberately faces the fear without performing the compulsion until anxiety subsides naturally.',
        hi: 'एक्सपोजर एंड रिस्पॉन्स प्रिवेंशन (ERP), जो ओसीडी की सबसे प्रभावी मनोवैज्ञानिक थेरेपी है। इसमें मरीज को डर का सामना कराया जाता है बिना हाथ धोए या जांच किए।',
        gu: 'એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP) થેરાપી, જેમાં દર્દીને હાથ ધોયા વગર કે ચેક કર્યા વગર ડર સહન કરવાની પ્રેક્ટિસ કરાવાય છે.',
      },
      medications: {
        en: 'High-dose SSRIs (e.g., fluoxetine, sertraline, fluvoxamine) or clomipramine under strict psychiatric supervision. Typically requires 8 to 12 weeks to show maximum benefit.',
        hi: 'मनोचिकित्सक द्वारा निर्धारित SSRIs दवाएं। ओसीडी में दवाओं की खुराक डिप्रेशन से अधिक हो सकती है और असर दिखने में 8 से 12 सप्ताह लग सकते हैं।',
        gu: 'મનોચિકિત્સક દ્વારા સૂચવાયેલી વિશિષ્ટ SSRI દવાઓ. આ દવાઓની સંપૂર્ણ અસર દેખાવામાં 8 થી 12 અઠવાડિયાનો સમય લાગે છે.',
      },
      familySocialInterventions: {
        en: 'Training family to cease participating in compulsions (e.g., stopping answering repetitive reassurance questions).',
        hi: 'परिवार को यह सिखाना कि वे मरीज के कहने पर ताले न जांचें और न ही बार-बार तसल्ली दें, क्योंकि इससे ओसीडी बढ़ता है।',
        gu: 'પરિવારને શીખવવું કે દર્દીના કહ્યા પ્રમાણે વારંવાર સફાઈ કે ચેકિંગમાં ભાગ ન લેવો, કારણ કે તેનાથી બીમારી વધે છે.',
      },
    },
    treatmentGoals: {
      en: 'Marked reduction in compulsion time, ability to tolerate intrusive thoughts without performing rituals, and reclamation of daily functioning.',
      hi: 'बार-बार हाथ धोने या जांचने के समय में भारी कमी, अनचाहे विचारों को नजरअंदाज करने की क्षमता और सामान्य जीवन।',
      gu: 'વારંવાર તપાસવા કે હાથ ધોવાના સમયમાં મોટો ઘટાડો અને વહેમો વચ્ચે પણ શાંતિથી જીવવાની ક્ષમતા.',
    },
    recoveryOutlook: {
      en: 'The recovery outlook for Obsessive-Compulsive Disorder has been profoundly transformed by contemporary evidence-based interventions. While OCD was historically deemed treatment-resistant, the robust clinical combination of manualized Exposure and Response Prevention (ERP) psychotherapy and optimized high-dose serotonergic pharmacotherapy (SSRIs such as Fluvoxamine, Sertraline, Fluoxetine, or Clomipramine) achieves clinically meaningful, durable symptom reduction and functional restoration in 65% to 75% of patients. In treatment-refractory cases, augmentation with second-generation antipsychotics, glutamatergic agents, or targeted neuromodulation (Deep TMS, Deep Brain Stimulation) offers substantial additional relief. Patients routinely regain the ability to work, sustain loving interpersonal relationships, and live liberated from time-consuming rituals.',
      hi: 'आधुनिक और वैज्ञानिक उपचारों के आगमन से ओसीडी का भविष्य बहुत आशाजनक हो गया है। हालांकि पहले इसे एक लाइलाज बीमारी माना जाता था, लेकिन आज पहली पंक्ति की विशेष दवाओं (जैसे उच्च खुराक वाली SSRIs) और एक्सपोज़र एंड रिस्पॉन्स प्रिवेंशन (ERP) थेरेपी के संयुक्त प्रयोग से 65% से 75% से अधिक मरीजों में अभूतपूर्व और स्थायी सुधार होता है। जिन मरीजों में सामान्य दवाओं से लाभ नहीं होता, उनमें आधुनिक दवाओं के संयोजन या डीप टीएमएस (Deep TMS) जैसी तकनीकों से उल्लेखनीय राहत मिलती है। मरीज अपने घंटों बर्बाद करने वाले कर्मकांडों से मुक्त होकर एक सामान्य, सुखी और आत्मनिर्भर जीवन में लौट आते हैं।',
      gu: 'આધુનિક વૈજ્ઞાનિક પદ્ધતિઓથી OCD નું પરિણામ અત્યંત આશાસ્પદ અને સંતોષકારક રહે છે. ભૂતકાળમાં આને અસાધ્ય માનવામાં આવતી હતી, પરંતુ આજે યોગ્ય માત્રાની દવાઓ (SSRIs) અને ખાસ એક્સપોઝર એન્ડ રિસ્પોન્સ પ્રિવેન્શન (ERP) થેરાપીના સંયોજનથી ૬૫% થી ૭૫% દર્દીઓમાં જબરદસ્ત સુધારો જોવા મળે છે. જટિલ કેસોમાં અદ્યતન દવાઓ અને ન્યુરોમોડ્યુલેશન ટેકનિક્સ (Deep TMS) દ્વારા પણ નોંધપાત્ર રાહત મેળવી શકાય છે. દર્દીઓ કલાકો બગાડતા વહેમો અને વારંવાર કરવાના કામોમાંથી કાયમ માટે મુક્ત થઈને ફરીથી સામાન્ય, સુખી અને ગૌરવપૂર્ણ જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Continuing daily ERP maintenance practice and never resuming avoidance or "just this once" rituals.',
      hi: 'ERP तकनीकों का अभ्यास जारी रखना और "बस इस एक बार धो लेता हूँ" जैसी गलती से बचना।',
      gu: 'દવાઓ ચાલુ રાખવી અને "ચાલ આજે એક વાર હાથ ધોઈ લઉં" એવી છૂટછાટ ન આપવી.',
    },
    urgentWarningSigns: {
      en: 'Severe depression secondary to OCD exhaustion, skin infections from extreme chemical washing, or severe nutritional compromise.',
      hi: 'ओसीडी की थकान से गहरा डिप्रेशन, हाथ धोने के लिए फिनाइल या एसिड जैसे रसायनों का खतरनाक इस्तेमाल, या भोजन छोड़ देना।',
      gu: 'થાકથી ભારે ડિપ્રેશન, હાથ ધોવા માટે જોખમી કેમિકલ્સ વાપરવા અથવા ખાવા-પીવાનું બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'OCD is just being very neat, tidy, and clean.',
          hi: 'ओसीडी का मतलब सिर्फ चीजों को साफ-सुथरा और व्यवस्थित रखना है।',
          gu: 'OCD એટલે માત્ર બધી વસ્તુઓ ચોખ્ખી અને વ્યવસ્થિત રાખવાની સારી ટેવ.',
        },
        fact: {
          en: 'OCD is not a quirky personality trait. It is a tormenting medical illness driven by intense anxiety and exhausting unwanted thoughts.',
          hi: 'ओसीडी कोई शौक या खूबी नहीं है। यह एक अत्यंत पीड़ादायक मानसिक बीमारी है जिसमें व्यक्ति अपने ही अनचाहे विचारों से लाचार महसूस करता है।',
          gu: 'OCD કોઈ શોખ નથી. તે મનને અત્યંત પીડા આપતી ગંભીર બીમારી છે જેમાં વ્યક્તિ અસહાય બની જાય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'If I have bad intrusive thoughts about hurting someone, does it mean I am an evil person or that I will act on them?',
          hi: 'अगर मेरे मन में किसी को चोट पहुंचाने या गलत काम करने के गंदे विचार आते हैं, तो क्या मैं एक बुरा इंसान हूँ?',
          gu: 'જો મારા મનમાં કોઈને નુકસાન પહોંચાડવાના કે ખરાબ વિચારો આવે, તો શું હું ખરાબ માણસ છું?',
        },
        answer: {
          en: 'No. The fact that these thoughts cause you immense distress and disgust proves they are "ego-dystonic" — the exact opposite of your true values. People with OCD do not act on their intrusive obsessions.',
          hi: 'बिल्कुल नहीं! ये विचार आपको परेशान इसलिए करते हैं क्योंकि ये आपके संस्कारों के बिल्कुल विपरीत हैं। ओसीडी के मरीज इन विचारों पर कभी अमल नहीं करते।',
          gu: 'બિલકુલ નહીં! આ વિચારો તમને એટલા માટે ડરાવે છે કારણ કે તમે સારા માણસ છો અને આવા વિચારો નથી ઈચ્છતા. OCD ના દર્દીઓ આવા વિચારો પર ક્યારેય અમલ કરતા નથી.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Systematic reviews and Cochrane meta-analyses confirm that Exposure and Response Prevention (ERP) psychotherapy produces clinical response rates of 65% to 75% in patients with OCD.',
          hi: 'कोचरन समीक्षाओं और अध्ययनों से सिद्ध है कि एक्सपोज़र एंड रिस्पॉन्स प्रिवेंशन (ERP) थेरेपी से 65% से 75% ओसीडी के मरीजों को अपने लक्षणों से उल्लेखनीय राहत मिलती है।',
          gu: 'કોકરેન વિશ્લેષણ અને સંશોધનો પુષ્ટિ કરે છે કે ERP થેરાપી ૬૫% થી ૭૫% OCD ના દર્દીઓમાં લક્ષણો ઘટાડવામાં અત્યંત સફળ રહે છે.',
        },
        citationRef: 'NICE Guidelines (UK)',
      },
      {
        fact: {
          en: 'Psychiatric practice guidelines show OCD generally requires higher doses of SSRIs than major depressive disorder, with therapeutic benefits typically emerging over 8 to 12 weeks of sustained treatment.',
          hi: 'मनोचिकित्सा दिशानिर्देशों के अनुसार ओसीडी में सामान्य डिप्रेशन की तुलना में दवाओं (SSRIs) की अधिक खुराक की आवश्यकता होती है, जिसका पूर्ण प्रभाव दिखने में 8 से 12 सप्ताह का समय लगता है।',
          gu: 'મનોચિકિત્સા માર્ગદર્શિકા જણાવે છે કે ડિપ્રેશનની સરખામણીએ OCD માં દવાની માત્રા વધુ રાખવી પડે છે અને પૂરેપૂરો ફાયદો જોવા માટે ૮ થી ૧૨ અઠવાડિયાનો સમય લાગે છે.',
        },
        citationRef: 'APA Practice Guidelines',
      },
      {
        fact: {
          en: 'Structural and functional neuroimaging consistently demonstrates hyperactivity in cortico-striato-thalamo-cortical (CSTC) loops in individuals with OCD, which normalizes following successful treatment.',
          hi: 'मस्तिष्क के न्यूरोइमेजिंग स्कैन स्पष्ट दिखाते हैं कि ओसीडी में दिमाग के खास सर्किट (CSTC लूप्स) अत्यधिक सक्रिय होते हैं, जो सही इलाज और थेरेपी के बाद सामान्य हो जाते हैं।',
          gu: 'મગજના સ્કેન સાબિત કરે છે કે OCD માં મગજના ચોક્કસ સર્કિટ (CSTC લૂપ્સ) અસામાન્ય રીતે વધુ સક્રિય હોય છે, જે યોગ્ય દવા અને કાઉન્સેલિંગ પછી સામાન્ય થઈ જાય છે.',
        },
        citationRef: 'Nature Reviews Disease Primers',
      },
      {
        fact: {
          en: 'Clinical registries from NIMHANS document that patients in India often experience an average delay of 4 to 6 years before receiving an accurate OCD diagnosis and evidence-based care.',
          hi: 'निम्हांस (NIMHANS) के अध्ययनों के अनुसार भारत में ओसीडी के मरीजों को सही पहचान और वैज्ञानिक इलाज मिलने में औसतन 4 से 6 साल की देरी हो जाती है, क्योंकि लोग इसे सिर्फ स्वभाव या धार्मिक वहम मान लेते हैं।',
          gu: 'નિમ્હાન્સ (NIMHANS) ના સંશોધનો દર્શાવે છે કે ભારતમાં OCD ના દર્દીઓને સાચું નિદાન અને સારવાર મળવામાં સરેરાશ ૪ થી ૬ વર્ષનો વિલંબ થાય છે, કારણ કે લોકો તેને માત્ર વહેમ કે ધાર્મિક ભાવના ગણી લે છે.',
        },
        citationRef: 'Indian Psychiatric Society (IPS) Guidelines',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Obsessive-Compulsive Disorder. Am J Psychiatry. 2007;164(Suppl 7):1-56.',
        source: 'APA Practice Guidelines',
        year: '2007',
      },
      {
        citation: 'National Institute for Health and Care Excellence. Obsessive-compulsive disorder and body dysmorphic disorder: treatment (Clinical Guideline CG31). London: NICE, 2005.',
        source: 'NICE Guidelines (UK)',
        year: '2005',
      },
      {
        citation: 'Reddy YCJ, Sundar AS, Narayanaswamy JC, Math SB. Clinical practice guidelines for obsessive-compulsive disorder. Indian J Psychiatry. 2017;59(Suppl 1):S74-S90.',
        source: 'Indian Psychiatric Society (IPS) Guidelines',
        year: '2017',
      },
      {
        citation: 'Stein DJ, Costa DLC, Lochner C, et al. Obsessive-compulsive disorder. Nat Rev Dis Primers. 2019;5(1):52.',
        source: 'Nature Reviews Disease Primers',
        year: '2019',
      },
      {
        citation: 'Foa EB, Liebowitz MR, Kozak MJ, et al. Randomized, placebo-controlled trial of exposure and response prevention, clomipramine, and their combination for obsessive-compulsive disorder. Am J Psychiatry. 2005;162(1):151-161.',
        source: 'American Journal of Psychiatry Trial',
        year: '2005',
      },
    ],
    educationalVideoTitle: { en: "What is ERP like for Contamination OCD?", hi: "What is ERP like for Contamination OCD?", gu: "What is ERP like for Contamination OCD?" },
    educationalVideoSource: 'Anxiety and Depression Association of America / International OCD Foundation',
    lastReviewed: '2026-09',
    // TODO(video): OCD cycle explained and how Exposure & Response Prevention (ERP) rewires fear circuits
    youtubeVideoId: 'EJcIwcIBMPw',
    relatedIds: ['erp', 'cbt', 'antidepressants', 'anxiety-gad'],
    relatedContent: {
      conditionSlugs: ['illness-anxiety-disorder', 'generalized-anxiety-disorder', 'major-depressive-disorder'],
      medicationIds: ['antidepressants', 'antipsychotics'],
      treatmentIds: ['erp', 'cbt', 'rtms'],
    },
  },
  {
    id: 'schizophrenia',
    youtubeVideoId: 'WS1TXT3cGyw',
    slug: 'schizophrenia',
    category: 'psychotic',
    conditionIcon: 'schizophrenia',
    name: {
      en: 'Schizophrenia & Psychotic Disorders',
      hi: 'सिज़ोफ्रेनिया और साइकोटिक विकार (Schizophrenia)',
      gu: 'સિઝોફ્રેનિયા અને સાયકોટિક ડિસઓર્ડર (Schizophrenia)',
    },
    medicalTerms: {
      en: 'Schizophrenia, Psychosis, Thought Disorder',
      hi: 'सिज़ोफ्रेनिया (Schizophrenia), मनोविदलता',
      gu: 'સિઝોફ્રેનિયા (Schizophrenia)',
    },
    overview: {
      en: 'Schizophrenia (ICD-11: 6A20, DSM-5-TR) is a severe, multifaceted neurodevelopmental and psychiatric disorder characterized by profound disruptions in reality testing, cognition, emotional processing, and social volition. Its clinical architecture encompasses three core domains: "positive symptoms" (aberrant neural activations causing auditory, visual, or somatic hallucinations, bizarre or persecutory delusions, and disorganized conceptual thinking); "negative symptoms" (avolition, severe anhedonia, alogia, affective flattening, and social withdrawal reflecting deficits in dopamine transmission in prefrontal cortices); and "cognitive deficits" (impairments in executive functioning, working memory, attention, and cognitive processing speed). Contrary to widespread media stigmatization, schizophrenia is not a "split personality" or an untreatable moral affliction; it is an established neurodevelopmental disorder of synaptic pruning and circuit connectivity that responds robustly to modern biopsychosocial psychiatry.',
      hi: 'सिज़ोफ्रेनिया (Schizophrenia) मस्तिष्क के विकास और कार्यप्रणाली से जुड़ी एक गंभीर, जटिल और उपचार योग्य मानसिक बीमारी है। यह व्यक्ति के वास्तविकता को समझने, सोचने, भावनाओं को महसूस करने और व्यवहार करने के तरीके को गहराई से बदल देती है। इसके लक्षणों को तीन मुख्य श्रेणियों में बांटा जाता है: "सकारात्मक लक्षण" (जैसे कानों में ऐसी आवाजें सुनाई देना जो दूसरों को नहीं सुनाई देतीं, बेबुनियाद शक या वहम कि कोई उनके खिलाफ साजिश कर रहा है, और बहकी-बहकी बातें करना); "नकारात्मक लक्षण" (उदासीनता, किसी काम में मन न लगना, भावनाएं व्यक्त न कर पाना, बोलना कम कर देना और समाज से पूरी तरह कट जाना); तथा "संज्ञानात्मक समस्याएं" (याददाश्त, ध्यान और निर्णय लेने की क्षमता में कमी)। सिज़ोफ्रेनिया कोई "स्प्लिट पर्सनालिटी" या भूत-प्रेत का साया नहीं है, बल्कि मस्तिष्क में डोपामाइन और अन्य न्यूरोकेमिकल्स के असंतुलन से होने वाली एक वास्तविक शारीरिक-मानसिक बीमारी है जिसका वैज्ञानिक इलाज संभव है।',
      gu: 'સિઝોફ્રેનિયા (Schizophrenia) એ મગજના વિકાસ અને ન્યુરોકેમિકલ્સ સાથે જોડાયેલી એક ગંભીર છતાં યોગ્ય સારવારથી નિયંત્રિત થઈ શકે તેવી માનસિક બીમારી છે. આ બીમારી દર્દીની વાસ્તવિકતા સમજવાની, વિચારવાની, લાગણીઓ વ્યક્ત કરવાની અને સામાજિક વ્યવહાર કરવાની ક્ષમતાને ખોરવી નાખે છે. આના લક્ષણો મુખ્ય ત્રણ ભાગમાં વહેંચાયેલા છે: "પોઝિટિવ લક્ષણો" (જેમ કે કોઈ ન હોવા છતાં કાનમાં અવાજો સંભળાવવા [Hallucinations], અવાસ્તવિક શંકાઓ કે વહેમ થવા [Delusions - જેમ કે લોકો મારી વિરુદ્ધ ષડયંત્ર રચે છે કે કેમેરાથી નજર રાખે છે], અને અસંબદ્ધ વાતો કરવી); "નેગેટિવ લક્ષણો" (લાગણીઓનો અભાવ, વાતચીત બંધ કરી દેવી, કોઈ કામમાં ઉત્સાહ ન રહેવો અને સામાજિક રીતે સાવ એકલા પડી જવું); તથા "કોગ્નિટિવ લક્ષણો" (યાદશક્તિ અને નિર્ણયશક્તિ નબળી પડવી). સિઝોફ્રેનિયા એ કોઈ વળગાડ, જાદુટોણો કે "સ્પ્લિટ પર્સનાલિટી" નથી, પરંતુ મગજના રસાયણોની ખામીથી થતી બીમારી છે.',
    },
    illustrativeExamples: [
      {
        en: 'Rahul, a 22-year-old mechanical engineering student in Vadodara, had always been a diligent, introverted scholar. During his final semester, his roommates noticed disturbing personality changes: Rahul stopped attending lectures, shuttered his hostel windows with black cardboard, and abandoned bathing and personal grooming. Over several weeks, he accused his friends of installing covert optical transmitters inside the ceiling fan to broadcast his private thoughts to hostile intelligence agencies. Soon, tormenting auditory hallucinations emerged: Rahul heard two distinct, malevolent male voices whispering continuously inside his ears, narrating his actions with cruel mockery ("He is picking up the notebook; he is a failure; he does not deserve to breathe"). Convinced his hostel mess food was contaminated with radioactive poison, Rahul refused all meals, dropped 11 kilograms, and taped his door shut with duct tape. When his frantic parents brought him home, Rahul accused them of being cloned impostors (Capgras phenomenon) and spoke only in disjointed, incoherent word salads ("The satellite antenna is blue-shifting the ceiling wires"). Recognizing an acute first-episode psychosis, his parents brought him to an inpatient psychiatric department. Comprehensive clinical evaluation—including 3T brain MRI, CSF autoimmune encephalitis antibody testing, EEG, and urine toxicology—confirmed the clinical diagnosis of First-Episode Schizophrenia while ruling out organic causes. Rahul was gently initiated on a second-generation atypical antipsychotic (Risperidone, titrated carefully to 4 mg daily). Within three weeks, the hostile auditory voices faded into faint background murmurs, and his persecutory delusions lost their rigid emotional grip. In parallel, Rahul received Cognitive Behavioral Therapy for Psychosis (CBTp) and Social Skills Training, while his family engaged in structured psychoeducation on reducing "Expressed Emotion." Six months post-discharge, Rahul\'s hallucinations and paranoia had fully resolved. Transitioned to a convenient monthly long-acting injectable antipsychotic (Paliperidone palmitate) to guarantee seamless medication adherence, Rahul resumed his university studies, graduated with academic honors, and secured a position as a junior mechanical design engineer.',
        hi: 'वडोदरा के 22 वर्षीय मैकेनिकल इंजीनियरिंग के छात्र राहुल हमेशा से एक शांत और होनहार विद्यार्थी थे। अपने अंतिम सेमेस्टर के दौरान उनके व्यवहार में अचानक अजीब बदलाव आने लगे: उन्होंने कॉलेज जाना बंद कर दिया, अपने हॉस्टल के कमरे की खिड़कियों पर काले अखबार चिपका दिए और नहाना-धोना छोड़ दिया। कुछ हफ्तों बाद उन्होंने अपने रूममेट्स पर आरोप लगाया कि उन्होंने छत के पंखे में गुप्त कैमरे और चिप लगा दी है जो उनके विचारों को चुराकर विदेशी एजेंसियों को भेज रहे हैं। जल्द ही राहुल को कानों में भयानक आवाजें सुनाई देने लगीं: दो अनजान पुरुष आवाजें उनके हर काम पर भद्दे ताने कसती थीं ("यह किताब उठा रहा है, यह किसी काम का नहीं है, इसे जिंदा रहने का हक नहीं है")। राहुल को पक्का यकीन हो गया कि मेस के खाने में धीमा जहर मिलाया गया है, इसलिए उन्होंने खाना छोड़ दिया, उनका वजन 11 किलो गिर गया और उन्होंने कमरे का दरवाजा अंदर से बंद कर लिया। जब माता-पिता हॉस्टल पहुंचे, तो राहुल ने उन पर चिल्लाते हुए कहा कि वे उनके असली माता-पिता नहीं बल्कि उनके जैसे दिखने वाले नकली बहरूपिए हैं। परिवार उन्हें तुरंत एक प्रमुख मानसिक रोग अस्पताल ले गया। डॉक्टर ने एमआरआई, ईईजी और ब्लड टेस्ट करके दिमाग में संक्रमण की संभावना को खारिज किया और प्रथम-प्रकरण सिज़ोफ्रेनिया (First-Episode Schizophrenia) का निदान किया। राहुल को आधुनिक एंटीसाइकोटिक दवा (रिस्पेरिडोन) दी गई। तीन हफ्तों के भीतर कानों में गूंजने वाली आवाजें बहुत धीमी पड़ गईं और उनका शक शांत होने लगा। साथ ही सीबीटी थेरेपी और परिवार की काउंसलिंग की गई। राहुल को रोज दवा खाने की भूल से बचाने के लिए महीने में एक बार लगने वाले इंजेक्शन (Long-acting injectable) पर शिफ्ट किया गया। छह महीने बाद राहुल पूरी तरह स्वस्थ हो गए, अपनी डिग्री पूरी की और आज एक ऑटोमोबाइल कंपनी में सम्मानजनक नौकरी कर रहे हैं।',
        gu: 'વડોદરાના ૨૨ વર્ષીય મિકેનિકલ એન્જિનિયરિંગના તેજસ્વી વિદ્યાર્થી રાહુલના સ્વભાવમાં અચાનક વિચિત્ર ફેરફારો થવા લાગ્યા. તેણે કોલેજ જવાનું બંધ કર્યું, હોસ્ટેલના રૂમની બારીઓ કાળા પૂંઠાથી બંધ કરી દીધી અને સ્નાન કરવાનું પણ છોડી દીધું. તેણે રૂમમેટ પર આરોપ મૂક્યો કે તેઓએ પંખામાં છૂપા કેમેરા ગોઠવ્યા છે જે તેના મગજના વિચારો ચોરી રહ્યા છે. થોડા દિવસોમાં તેને કાનમાં અજાણ્યા પુરુષોના અવાજો સંભળાવા લાગ્યા, જે તેના પર કટાક્ષ કરતા અને અપમાન કરતા ("જો આ પાણી પીવે છે, આ સાવ નકામો છે, આને જીવવાનો અધિકાર નથી"). રાહુલને વહેમ થઈ ગયો કે મેસના ખોરાકમાં ઝેર છે, તેથી તેણે ખાવા-પીવાનું સાવ છોડી દીધું અને તેનું વજન ૧૧ કિલો ઘટી ગયું. જ્યારે તેના માતા-પિતા તેને ઘરે લાવ્યા ત્યારે રાહુલે કહ્યું કે આ મારા અસલી મા-બાપ નથી પણ તેમના જેવા દેખાતા નકલી માણસો છે. ગભરાયેલા પરિવારે તેને મનોચિકિત્સક પાસે દાખલ કર્યો. મનોચિકિત્સકે MRI, EEG અને જરૂરી લોહીની તપાસ કરીને મગજમાં અન્ય કોઈ શારીરિક બીમારી ન હોવાની ખાતરી કરી અને સિઝોફ્રેનિયાનું સચોટ નિદાન કર્યું. તેને આધુનિક એન્ટિસાયકોટિક દવા (રિસ્પેરીડોન) શરૂ કરવામાં આવી. ત્રણ અઠવાડિયામાં કાનમાં આવતા અવાજો બંધ થઈ ગયા અને તેનો વહેમ ઓગળી ગયો. ત્યારબાદ સાયકોથેરાપી અને પરિવારને તાલીમ આપવામાં આવી. રાહુલ દવા લેવાનું ભૂલી ન જાય તે માટે તેને દર મહિને અપાતા ઇન્જેક્શન (Long-acting injection) પર મૂકવામાં આવ્યો. છ મહિનામાં રાહુલ સંપૂર્ણ સાજો થઈ ગયો, તેણે એન્જિનિયરિંગની પરીક્ષા પ્રથમ વર્ગમાં પાસ કરી અને આજે તે એક મોટી કંપનીમાં એન્જિનિયર તરીકે સફળતાપૂર્વક કામ કરી રહ્યો છે.',
      },
      {
        en: 'Meera, a 31-year-old former primary school teacher in Rajkot, developed an insidious onset of negative symptoms: she grew increasingly withdrawn, rarely spoke (alogia), and exhibited flattened facial affect. Within months, severe persecutory delusions took root: Meera believed municipal tap water lines had been deliberately laced with surveillance toxins by corrupt local officials. She refused to drink water or prepare meals for her children, boiling only bottled mineral water in secrecy. Her family, recognizing acute psychotic distress, accompanied her to a regional psychiatry center. Initiated on Aripiprazole alongside supportive family psychoeducation and social skills rehabilitation, Meera experienced full resolution of her persecutory fears within eight weeks, gradually rekindling warm relationships with her family and resuming teaching activities.',
        hi: 'राजकोट की 31 वर्षीय पूर्व प्राथमिक शिक्षिका मीरा में धीरे-धीरे बीमारी के नकारात्मक लक्षण उभरे: उन्होंने बातचीत बंद कर दी, चेहरे के भाव शून्य हो गए और वे कमरे में सिमट गईं। इसके बाद गंभीर शक शुरू हुआ: उन्हें पक्का यकीन हो गया कि मोहल्ले के पानी की पाइपलाइन में जहरीले रसायन मिलाए गए हैं। उन्होंने नल का पानी पीना और खाना बनाना बंद कर दिया। परिवार उन्हें मनोचिकित्सक के पास ले गया। एरिपिप्राजोल (Aripiprazole) दवा और परिवार की काउंसलिंग के बाद मीरा का वहम 8 हफ्तों में पूरी तरह खत्म हो गया और वे फिर से परिवार के साथ खुशी-खुशी रहने लगीं तथा स्कूल में पढ़ाने लगीं।',
        gu: 'રાજકોટની ૩૧ વર્ષીય ભૂતપૂર્વ પ્રાથમિક શિક્ષિકા મીરાબેનમાં ધીમે ધીમે નકારાત્મક લક્ષણો જોવા મળ્યા: તેમણે વાતચીત બંધ કરી દીધી, મોઢાના હાવભાવ શૂન્ય થઈ ગયા અને સામાજિક રીતે સાવ અલગ પડી ગયા. ત્યારપછી તીવ્ર વહેમ શરૂ થયો: તેમને દ્રઢ શંકા થઈ ગઈ કે નળના પાણીમાં ઝેરી કેમિકલ્સ ભેળવી દેવાયા છે. તેમણે ઘરમાં રાંધવાનું અને પાણી પીવાનું બંધ કરી દીધું. પરિવારે મનોચિકિત્સક પાસે સારવાર કરાવી. એરિપિપ્રાઝોલ દવા અને કાઉન્સેલિંગની મદદથી આઠ અઠવાડિયામાં તેમનો વહેમ સમૂળગો દૂર થયો અને તેઓ ફરીથી પરિવાર સાથે હળીમળીને સામાન્ય જીવન જીવવા લાગ્યા.',
      },
      {
        en: 'Dinesh, a 46-year-old textile merchant in Surat, had lived with schizophrenia for over a decade, suffering repeated acute relapses whenever he prematurely stopped his medications. During his latest relapse, he developed prominent somatic hallucinations of insects crawling under his skin alongside disorganized thought patterns (derailment) and persistent voices narrating his steps. Having shown incomplete response to two prior first-line atypical antipsychotics, Dinesh\'s consultant psychiatrist recommended Clozapine therapy with strict hematological monitoring (ANC tracking). Dinesh achieved substantial remission within ten weeks: the tactile and auditory hallucinations ceased entirely, his logical thinking returned, and he successfully returned to managing his textile business under consistent medical follow-up.',
        hi: 'सूरत के 46 वर्षीय कपड़ा व्यापारी दिनेश पिछले दस वर्षों से सिज़ोफ्रेनिया से जूझ रहे थे और दवा बंद करते ही बीमारी बार-बार लौट आती थी। इस बार उन्हें त्वचा के नीचे कीड़े रेंगने जैसा भयानक अहसास (Somatic hallucinations) होने लगा, बातें पूरी तरह असंगत हो गईं और कानों में लगातार आवाजें आने लगीं। दो पुरानी दवाओं से पूरा आराम न मिलने पर डॉक्टर ने नियमित ब्लड टेस्ट की निगरानी में क्लोज़ापाइन (Clozapine) शुरू की। ढाई महीने में दिनेश के सभी लक्षण शांत हो गए, कानों की आवाजें बंद हो गईं और वे दोबारा अपनी दुकान संभालने में पूरी तरह सक्षम हो गए।',
        gu: 'સુરતના ૪૬ વર્ષીય કાપડના વેપારી દિનેશભાઈ છેલ્લા દસ વર્ષથી સિઝોફ્રેનિયાથી પીડાતા હતા અને દવા બંધ કરવાથી બીમારી વારંવાર ઉથલો મારતી હતી. આ વખતે તેમને ચામડી નીચે જીવડાં ફરતા હોવાનો સતત ભ્રમ થવા લાગ્યો, બોલવામાં અસંબદ્ધતા આવી ગઈ અને કાનમાં સતત અવાજો સંભળાતા હતા. બે સામાન્ય દવાઓ નિષ્ફળ ગયા પછી મનોચિકિત્સકે નિયમિત બ્લડ ટેસ્ટ સાથે ક્લોઝાપાઇન (Clozapine) દવા શરૂ કરી. દસ અઠવાડિયામાં દિનેશભાઈના તમામ ભ્રમ અને અવાજો બંધ થઈ ગયા અને તેઓ સફળતાપૂર્વક પોતાની દુકાન ચલાવવા સક્ષમ બન્યા.',
      },
    ],
    commonSymptoms: {
      en: [
        'Auditory Hallucinations (hearing voices talking when no one is there)',
        'Delusions (firmly held false beliefs not shared by culture, e.g., feeling spied on or plotted against)',
        'Disorganized speech (jumping randomly between unrelated topics, incoherent speech)',
        'Disorganized or unusual motor behavior',
        'Negative symptoms: reduced emotional expression, apathy, lack of initiative',
        'Social withdrawal and neglect of basic hygiene',
        'Impaired cognitive functioning (working memory, processing speed)',
      ],
      hi: [
        'मतिभ्रम (Hallucinations): ऐसी आवाजें सुनाई देना जो दूसरों को नहीं सुनाई देतीं',
        'वहम या भ्रम (Delusions): ऐसे दृढ़ विश्वास जो सच नहीं हैं (जैसे शक होना कि कोई उनके खिलाफ साजिश कर रहा है या कैमरे से नजर रख रहा है)',
        'असंगत बातचीत: बातों में कोई सिर-पैर न होना, एक बात से दूसरी बेतुकी बात पर कूदना',
        'असामान्य व्यवहार या अजीब मुद्राएं बनाना',
        'नकारात्मक लक्षण: भावनाओं की कमी, बातचीत बंद कर देना, अकेले रहना',
        'व्यक्तिगत स्वच्छता और नहाने-धोने की पूरी तरह उपेक्षा करना',
        'सोचने-समझने और याद रखने की क्षमता में गिरावट आना',
      ],
      gu: [
        'આભાસ (Hallucinations): કોઈ ન હોવા છતાં કાનમાં અવાજો સંભળાવવા',
        'તીવ્ર વહેમ (Delusions): અવાસ્તવિક શંકાઓ (જેમ કે કોઈ મારી પાછળ પડ્યું છે, કેમેરાથી નજર રખાય છે કે જાદુટોણો કર્યો છે)',
        'અસંબદ્ધ બોલવું: વાતોમાં કોઈ તાલમેલ ન હોવો, એક વાતમાંથી અચાનક બીજી વાતમાં જવું',
        'વિચિત્ર વર્તન કે અયોગ્ય હાવભાવ',
        'નકારાત્મક લક્ષણો: લાગણીઓ બિલકુલ ન દર્શાવવી, સામાજિક રીતે સાવ અલગ થઈ જવું',
        'પોતાની સ્વચ્છતા કે કપડાંની બિલકુલ કાળજી ન રાખવી',
        'યાદશક્તિ અને નિર્ણયશક્તિ નબળી પડવી',
      ],
    },
    dailyLifeImpact: {
      en: 'Untreated schizophrenia is profoundly disabling. The intrusion of hallucinations and paranoid terror shatters interpersonal trust, leading to severe social isolation, school dropout, and vocational devastation. Due to negative symptoms and cognitive blunting, individuals frequently lose the capacity for independent self-care, neglecting nutrition, medication, and personal hygiene. Family systems endure catastrophic caregiver strain, navigating emotional exhaustion, financial hardship, and severe social ostracism fueled by cultural misconceptions and superstition.',
      hi: 'यदि समय पर इलाज न कराया जाए तो सिज़ोफ्रेनिया व्यक्ति के पूरे जीवन को तहस-नहस कर देता है। आवाजें सुनाई देने और अत्यधिक शक के कारण व्यक्ति समाज और दोस्तों से पूरी तरह कट जाता है, नौकरी और पढ़ाई छूट जाती है। बीमारी के नकारात्मक लक्षणों के कारण व्यक्ति अपने नहाने-धोने, साफ-सफाई और भोजन की भी सुध नहीं रख पाता। परिवार पर इसका अत्यंत भारी भावनात्मक और आर्थिक बोझ पड़ता है। समाज में फैली भ्रांतियों और अंधविश्वास के कारण परिवार को भारी सामाजिक कलंक और उपेक्षा का सामना करना पड़ता है।',
      gu: 'જો સિઝોફ્રેનિયાની સારવાર ન કરવામાં આવે તો વ્યક્તિનું જીવન અસ્તવ્યસ્ત થઈ જાય છે. કાનમાં આવતા અવાજો અને તીવ્ર વહેમના કારણે વ્યક્તિ મિત્રો અને સગાંવહાલાંથી દૂર થઈ જાય છે, નોકરી કે ભણતર છૂટી જાય છે. નકારાત્મક લક્ષણોના લીધે દર્દી સ્નાન કરવું કે સ્વચ્છ કપડાં પહેરવા જેવી સામાન્ય કાળજી પણ રાખી શકતો નથી. પરિવારજનો પર દર્દીની સંભાળનો મોટો બોજ આવે છે અને સમાજના અંધશ્રદ્ધાભર્યા વલણને કારણે ભારે માનસિક યાતના ભોગવવી પડે છે.',
    },
    causes: {
      en: 'Schizophrenia arises from a complex polygenic etiology interacting with neurodevelopmental and environmental vulnerabilities. Genome-wide association studies (GWAS) have identified over 250 risk loci, heavily implicated in synaptic pruning (such as the Complement Component 4 [C4] gene locus), glutamate NMDA receptor hypofunction, and voltage-gated calcium channels. Environmental risks include maternal prenatal influenza/viral infections, obstetric complications causing perinatal cerebral hypoxia, urban upbringing, and adolescent cannabis abuse (which increases psychotic conversion risk 3- to 5-fold in genetically predisposed individuals). Neurobiologically, aberrant dopamine transmission—specifically hyperdopaminergia in the mesolimbic pathway causing positive symptoms and hypodopaminergia in the mesocortical pathway causing negative and cognitive symptoms—forms the core pharmacological target.',
      hi: 'सिज़ोफ्रेनिया का कारण मस्तिष्क के विकास और आनुवंशिक जटिलताओं का मिश्रण है। जीनोम अध्ययनों में 250 से अधिक जीन पाए गए हैं जो मस्तिष्क के न्यूरोनल कनेक्शन (Synaptic pruning) और ग्लूटामेट रिसेप्टर्स को प्रभावित करते हैं। पर्यावरणीय कारणों में गर्भावस्था के दौरान मां को गंभीर वायरल संक्रमण, जन्म के समय बच्चे के दिमाग में ऑक्सीजन की कमी (Perinatal hypoxia), और किशोरावस्था में गांजा या चरस (Cannabis) का सेवन शामिल हैं—गांजा आनुवंशिक रूप से संवेदनशील युवाओं में इस बीमारी के खतरे को 3 से 5 गुना बढ़ा देता है। मस्तिष्क के मेसोलिम्बिक मार्ग में डोपामाइन की अत्यधिक सक्रियता से आवाजें और वहम होते हैं, जबकि प्रीफ्रंटल कॉर्टेक्स में डोपामाइन की कमी से नकारात्मक लक्षण उत्पन्न होते हैं।',
      gu: 'સિઝોફ્રેનિયા પાછળ જનીની (Genetic) અને મગજના વિકાસના અનેક પરિબળો ભાગ ભજવે છે. સંશોધનોમાં ૨૫૦ થી વધુ જનીનો ઓળખાયા છે જે મગજના ન્યુરોન્સ વચ્ચેના જોડાણને અસર કરે છે. પર્યાવરણીય જોખમોમાં ગર્ભાવસ્થા દરમિયાન માતાને થયેલ ગંભીર વાયરલ ઇન્ફેક્શન, બાળકના જન્મ સમયે મગજમાં ઓક્સિજનની ખામી અને કિશોરાવસ્થામાં ગાંજા કે ચરસનું સેવન મુખ્ય છે—ગાંજો પીવાથી આ બીમારી થવાનું જોખમ ૩ થી ૫ ગણું વધી જાય છે. મગજના અમુક ભાગોમાં ડોપામાઇન રસાયણનું પ્રમાણ ખૂબ વધી જવાથી અવાજો અને વહેમ થાય છે, જ્યારે આગળના ભાગમાં રસાયણ ઘટવાથી ઉત્સાહ અને લાગણીઓ ઘટી જાય છે.',
    },
    riskFactors: {
      en: [
        'First-degree relative (parent or sibling) diagnosed with schizophrenia or schizoaffective disorder (conferring a ~10-fold increased risk)',
        'Adolescent or early adult consumption of high-potency cannabis, synthetic cannabinoids, or psychostimulants',
        'Perinatal obstetric complications, including placental insufficiency, severe maternal preeclampsia, and neonatal hypoxia',
        'Maternal severe gestational malnutrition or maternal prenatal infections during second trimester',
        'Advanced paternal age at the time of conception (associated with increased de novo germline mutations)',
      ],
      hi: [
        'माता-पिता या भाई-बहन में से किसी को सिज़ोफ्रेनिया या गंभीर साइकोटिक बीमारी होना (जोखिम 10 गुना तक बढ़ जाता है)',
        'किशोरावस्था में गांजे, भांग या सिंथेटिक नशों का सेवन',
        'जन्म के समय जटिलताएं, जैसे गर्भनाल फंसना या बच्चे के रोने में देरी से मस्तिष्क को ऑक्सीजन न मिलना',
        'गर्भावस्था के दौरान मां को गंभीर कुपोषण या संक्रमण होना',
        'पिता की अधिक उम्र (जिससे शुक्राणुओं में नए आनुवंशिक उत्परिवर्तन का खतरा बढ़ता है)',
      ],
      gu: [
        'પરિવારમાં માતા-પિતા કે ભાઈ-બહેનને સિઝોફ્રેનિયા હોવો (બીમારીનું જોખમ ૧૦ ગણું વધી જાય છે)',
        'યુવાવસ્થામાં ગાંજો, ચરસ કે અન્ય નશીલા પદાર્થોનું સેવન',
        'જન્મ સમયે બાળકના મગજમાં ઓક્સિજનની ઉણપ થવી',
        'સગર્ભાવસ્થા દરમિયાન માતાને ગંભીર ચેપ કે કુપોષણ થવું',
        'બાળકના જન્મ સમયે પિતાની ખૂબ મોટી ઉંમર હોવી',
      ],
    },
    psychiatricAssessment: {
      en: 'A meticulous clinical psychiatric and neurological workup. The clinician maps the timeline of prodromal changes (insidious decline in social functioning, attentional drift, bizarre ideas) leading to the acute psychotic outbreak; evaluates positive symptoms, negative deficits, disorganized speech, and motor abnormalities (including catatonia); and conducts objective scoring using standardized instruments like the Positive and Negative Syndrome Scale (PANSS) or the Brief Psychiatric Rating Scale (BPRS). Essential medical testing includes a contrast brain MRI (to rule out frontal or temporal lobe tumors, demyelinating disease, or hydrocephalus), sleep-deprived EEG (ruling out temporal lobe epilepsy), comprehensive blood panels (metabolic, liver, renal, thyroid, HIV, syphilis, B12/folate), autoantibody screening (anti-NMDAR autoimmune encephalitis), and urine drug screens.',
      hi: 'मनोचिकित्सक द्वारा बेहद सतर्कतापूर्ण और विस्तृत मूल्यांकन किया जाता है। डॉक्टर बीमारी की शुरुआत से पहले के बदलावों (जैसे पढ़ाई में अचानक गिरावट, अकेलापन, अजीब बातें) और वर्तमान दौरों की समय-सीमा का विश्लेषण करते हैं। मतिभ्रम (आवाजें), भ्रम (वहम), अव्यवस्थित बातचीत और कैटाटोनिया (शरीर का अकड़ जाना) की गंभीरता को PANSS स्केल पर मापा जाता है। इसके साथ ही शारीरिक कारणों को पूरी तरह खारिज करने के लिए ब्रेन एमआरआई (MRI), मिर्गी जांचने के लिए ईईजी (EEG), ऑटोइम्यून एन्सेफलाइटिस के एंटीबॉडी टेस्ट, थायरॉयड, विटामिन बी12 और यूरिन ड्रग स्क्रीनिंग जैसे परीक्षण किए जाते हैं।',
      gu: 'મનોચિકિત્સક દ્વારા અત્યંત ચોકસાઈપૂર્વક તપાસ કરવામાં આવે છે. ડૉક્ટર બીમારીની શરૂઆત પહેલાં થયેલા ફેરફારો (અભ્યાસમાં અચાનક ઘટાડો, વિચિત્ર વિચારો) અને હાલના સાયકોટિક લક્ષણોની વિગતવાર નોંધ લે છે. કાનમાં આવતા અવાજો, વહેમ, બોલવાની ક્ષમતા અને શરીરની જકડાઈ જવાની સ્થિતિ (Catatonia) નું વૈજ્ઞાનિક PANSS સ્કેલ પર મૂલ્યાંકન થાય છે. મગજનો સોજો, ગાંઠ કે વાઈ નકારી કાઢવા માટે મગજનો MRI, EEG, ઓટોઈમ્યુન એન્સેફાલાઇટિસની ખાસ તપાસ, વિટામિન B12 અને થાઇરોઇડની લેબ તપાસ કરવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, diagnosis of Schizophrenia requires two (or more) of the following, each present for a significant portion of time during a 1-month period (or less if successfully treated), and at least one of these must be (1), (2), or (3): (1) Delusions; (2) Hallucinations; (3) Disorganized speech (e.g., frequent derailment or incoherence); (4) Grossly disorganized or catatonic behavior; (5) Negative symptoms (i.e., diminished emotional expression or avolition). Furthermore, continuous signs of the disturbance must persist for at least 6 months. This 6-month period must include at least 1 month of symptoms that meet active-phase criteria, and may include periods of prodromal or residual symptoms. Throughout significant intervals since onset, level of functioning in one or more major areas (work, interpersonal relations, self-care) is markedly below the level achieved prior to onset. Schizoaffective disorder and depressive or bipolar disorder with psychotic features must be systematically ruled out. In ICD-11, this condition is codified under 6A20.',
      hi: 'DSM-5-TR के अनुसार, सिज़ोफ्रेनिया के निदान के लिए कम से कम दो (या अधिक) मुख्य लक्षणों का 1 महीने (या इलाज से कम समय) के दौरान सक्रिय रूप से उपस्थित होना आवश्यक है, जिनमें से कम से कम एक लक्षण (1), (2) या (3) में से होना अनिवार्य है: (1) भ्रम/वहम (Delusions); (2) मतिभ्रम/आवाजें सुनाई देना (Hallucinations); (3) असंगत बातचीत (Disorganized speech); (4) अत्यधिक अव्यवस्थित या कैटाटोनिक व्यवहार; (5) नकारात्मक लक्षण (जैसे भावनाओं की कमी या इच्छाशक्ति का अभाव)। इसके अतिरिक्त, बीमारी के कुल लक्षण (प्रारंभिक, सक्रिय और अवशिष्ट चरण मिलाकर) कम से कम 6 महीने तक निरंतर बने रहने चाहिए। बीमारी शुरू होने के बाद से काम, व्यक्तिगत संबंधों या आत्म-देखभाल के स्तर में भारी गिरावट आनी चाहिए। साथ ही साइकोटिक डिप्रेशन और बायपोलर डिसऑर्डर को पूरी तरह खारिज किया जाना चाहिए। ICD-11 में इसका कोड 6A20 है।',
      gu: 'DSM-5-TR મુજબ, સિઝોફ્રેનિયાના નિદાન માટે ૧ મહિનાના સક્રિય સમયગાળા દરમિયાન નીચેનામાંથી ઓછામાં ઓછા ૨ (અથવા વધુ) લક્ષણો હાજર હોવા જોઈએ, જેમાં (૧), (૨) કે (૩) માંથી એક લક્ષણ હોવું ફરજિયાત છે: (૧) તીવ્ર વહેમ કે ભ્રમ (Delusions); (૨) આભાસ કે અવાજો સંભળાવવા (Hallucinations); (૩) અસંબદ્ધ વાતો કરવી (Disorganized speech); (૪) વિચિત્ર કે જકડાઈ જનારું વર્તન (Catatonic behavior); (૫) નકારાત્મક લક્ષણો (લાગણીઓ કે ઉત્સાહનો અભાવ). વધુમાં, આ બીમારીના એકંદર ચિહ્નો ઓછામાં ઓછા ૬ મહિના સુધી સતત રહેલા હોવા જોઈએ (જેમાં ઓછામાં ઓછો ૧ મહિનો સક્રિય હુમલો સામેલ હોય). બીમારીના કારણે નોકરી, અભ્યાસ, સંબંધો કે અંગત સ્વચ્છતામાં મોટો ઘટાડો થયેલો હોવો જોઈએ. સાયકોટિક ડિપ્રેશન અને બાયપોલર ડિસઓર્ડરને તપાસ દ્વારા બાકાત રાખવા જરૂરી છે. ICD-11 માં આનો કોડ 6A20 છે.',
    },
    differentialConsiderations: {
      en: 'Essential clinical differentials include: Bipolar I Disorder with psychotic features; Major Depressive Disorder with psychotic features; Schizoaffective Disorder; Brief Psychotic Disorder; Delusional Disorder; Substance/Medication-Induced Psychotic Disorder (e.g., methamphetamine, cocaine, synthetic cannabinoids, high-potency cannabis, phencyclidine); Autoimmune Encephalitis (anti-NMDA receptor encephalitis); Neurosyphilis; Wilson\'s disease; Acute intermittent porphyria; Temporal Lobe Epilepsy; and Frontotemporal or Early-Onset Dementia.',
      hi: 'इसे बायपोलर डिसऑर्डर में होने वाले मैनिया और साइकोसिस; गंभीर डिप्रेशन में होने वाले वहम; सिज़ोअफेक्टिव डिसऑर्डर; नशीले पदार्थों (गांजा, कोकीन, एम्फ़ैटेमिन) के कारण होने वाले साइकोसिस; ऑटोइम्यून एन्सेफलाइटिस (दिमागी सूजन); विल्सन रोग; टेम्पोरल लोब मिर्गी; और कम उम्र में होने वाले डिमेंशिया से अलग पहचानना अत्यंत आवश्यक है।',
      gu: 'આને બાયપોલર ડિસઓર્ડરના મેનિયા સાથેના સાયકોસિસ; ડિપ્રેશન સાથેના સાયકોસિસ; સિઝોઅફેક્ટિવ ડિસઓર્ડર; નશા (ગાંજો, ચરસ, ડ્રગ્સ) ના કારણે થયેલા સાયકોસિસ; ઓટોઈમ્યુન એન્સેફાલાઇટિસ (મગજનો સોજો); વાઈ (Epilepsy); અને અલ્ઝાઈમર કે ડિમેન્શિયાથી અલગ તારવવું અનિવાર્ય છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating family that symptoms are biological brain phenomena, not bad behavior, spirit possession, black magic, or laziness.',
        hi: 'परिवार को यह समझाना कि यह कोई भूत-प्रेत, जादू-टोना या ऊपरी साया नहीं है, बल्कि मस्तिष्क की एक वास्तविक जैविक बीमारी है।',
        gu: 'પરિવારને વૈજ્ઞાનિક સમજ આપવી કે આ કોઈ ભૂત-પ્રેત, વળગાડ કે મેલીવિદ્યા નથી, પરંતુ મગજની જૈવિક બીમારી છે.',
      },
      lifestyleSupport: {
        en: 'Structured daily routine, supported housing, avoidance of cannabis and all illicit substances, regular sleep hours.',
        hi: 'नियमित दिनचर्या, किसी भी प्रकार के नशे (विशेषकर गांजे) से पूर्ण परहेज और शांत पारिवारिक माहौल।',
        gu: 'રોજિંદી સામાન્ય દિનચર્યા, ગાંજા કે કોઈપણ નશાથી સંપૂર્ણ દૂર રહેવું અને શાંત વાતાવરણ.',
      },
      psychotherapy: {
        en: 'Cognitive Behavioural Therapy for Psychosis (CBTp), Social Skills Training, and Cognitive Remediation.',
        hi: 'सीधी समझ और सामाजिक कौशल की थेरेपी (Social Skills Training) तथा संज्ञानात्मक सुधार।',
        gu: 'સોશિયલ સ્કિલ્સ ટ્રેનિંગ અને કાઉન્સેલિંગ જે દર્દીને સમાજમાં હળવા-મળવામાં મદદ કરે છે.',
      },
      medications: {
        en: 'Antipsychotics are the essential foundation of treatment, balancing dopamine transmission. Long-acting injectable formulations are available for patients struggling with daily oral pills.',
        hi: 'एंटीसाइकोटिक दवाएं (Antipsychotics) उपचार की मुख्य रीढ़ हैं। जो मरीज रोज गोली नहीं खा पाते, उनके लिए लंबे समय तक असर करने वाले मासिक इंजेक्शन (Depot injections) भी उपलब्ध हैं।',
        gu: 'એન્ટિસાયકોટિક દવાઓ આ સારવારનો મુખ્ય પાયો છે. જે દર્દીઓ રોજ ગોળી ન લઈ શકતા હોય તેમના માટે મહિનામાં એક વાર અપાતા ઇન્જેક્શન પણ ઉપલબ્ધ હોય છે.',
      },
      familySocialInterventions: {
        en: 'Family Intervention Therapy to reduce High Expressed Emotion (criticism, hostility, over-involvement) which drastically cuts relapse rates.',
        hi: 'पारिवारिक थेरेपी: परिवार को सिखाना कि मरीज पर चिल्लाएं नहीं, ताने न मारें और ज्यादा बहस न करें। इससे बीमारी का दोबारा लौटना रुकता है।',
        gu: 'પરિવારને તાલીમ કે દર્દી પર ગુસ્સો ન કરવો, ટોણા ન મારવા અને શાંતિથી તેની સંભાળ રાખવી.',
      },
    },
    treatmentGoals: {
      en: 'Remission of hallucinations and delusions, prevention of hospitalization, preservation of cognitive skills, and independent community living.',
      hi: 'आवाजों और वहमों को पूरी तरह शांत करना, अस्पताल में भर्ती होने से बचाना और मरीज को आत्मनिर्भर बनाना।',
      gu: 'અવાજો અને વહેમ બંધ કરવા, હોસ્પિટલમાં દાખલ થવું ન પડે અને દર્દી પોતાનું કામ જાતે કરી શકે.',
    },
    recoveryOutlook: {
      en: 'The longitudinal outlook for Schizophrenia has dramatically advanced with early specialized intervention and contemporary psychopharmacology. When intervention occurs during the critical first episode of psychosis (minimizing the Duration of Untreated Psychosis or DUP), trajectory improves substantially: approximately one-third of individuals achieve sustained clinical remission, work or study productively, and live independently; another third experience significant functional recovery with periodic residual vulnerabilities requiring ongoing community and psychosocial support; and the remaining third require more comprehensive, structured psychiatric care. The widespread availability of second-generation atypical antipsychotics with favorable neurocognitive profiles, coupled with monthly or quarterly long-acting injectable (LAI) formulations, eliminates unintentional adherence failures, preventing cumulative neurodegenerative excitotoxicity and enabling patients to lead dignified, fulfilling lives.',
      hi: 'शुरुआती निदान और आधुनिक उपचार के आगमन से सिज़ोफ्रेनिया का दीर्घकालिक परिदृश्य पूरी तरह बदल चुका है। यदि बीमारी की शुरुआत (First Episode Psychosis) में ही बिना देरी किए सही इलाज शुरू हो जाए (DUP को कम करके), तो परिणाम बहुत आशाजनक होते हैं: लगभग एक-तिहाई मरीज पूरी तरह स्वस्थ होकर सामान्य पढ़ाई, नौकरी और पारिवारिक जीवन जीते हैं; अन्य एक-तिहाई मरीजों में काफी हद तक सुधार होता है और वे दवाओं व परिवार के सहयोग से आत्मनिर्भर जीवन व्यतीत करते हैं; जबकि शेष एक-तिहाई को निरंतर चिकित्सकीय देखरेख की आवश्यकता होती है। आधुनिक दवाओं और महीने या तीन महीने में एक बार लगने वाले इंजेक्शनों (Long-Acting Injectables) ने रोज दवा भूलने की समस्या को हल कर दिया है, जिससे बीमारी का दोबारा लौटना लगभग रुक जाता है और मरीज समाज में सम्मानजनक जीवन जी पाते हैं।',
      gu: 'વહેલા નિદાન અને આધુનિક સારવાર પદ્ધતિઓના કારણે સિઝોફ્રેનિયાના પરિણામોમાં ક્રાંતિકારી સુધારો થયો છે. જ્યારે પ્રથમ હુમલા વખતે જ સમય બગાડ્યા વિના (Duration of Untreated Psychosis ઘટાડીને) સાયકિયાટ્રિક સારવાર શરૂ કરવામાં આવે છે, ત્યારે પરિણામો અત્યંત ઉત્સાહજનક રહે છે: લગભગ એક તૃતીયાંશ દર્દીઓ સંપૂર્ણ સાજા થઈને પોતાની નોકરી, અભ્યાસ અને લગ્નજીવન સામાન્ય રીતે જીવે છે; અન્ય એક તૃતીયાંશ દર્દીઓમાં નોંધપાત્ર સુધારો થાય છે અને તેઓ કુટુંબના ટેકાથી સ્વતંત્ર જીવન જીવે છે; જ્યારે બાકીના એક તૃતીયાંશ દર્દીઓને સતત સારસંભાળની જરૂર પડે છે. આધુનિક એન્ટિસાયકોટિક દવાઓ અને દર મહિને કે ત્રણ મહિને અપાતા ડેપો ઇન્જેક્શન (LAI) ના લીધે દર્દીઓ વારંવાર બીમાર પડતા અટકે છે અને સમાજમાં ગૌરવભેર જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Strict continuity of maintenance antipsychotic medications; never stopping medicines abruptly, avoiding all substances, and maintaining low-stress environments.',
      hi: 'दवा कभी बंद न करना (ठीक होने के बाद भी डॉक्टर के कहे अनुसार लंबे समय तक दवा जरूरी होती है) और किसी भी प्रकार के नशे से दूर रहना।',
      gu: 'દવાઓ ક્યારેય પોતાની મેળે બંધ ન કરવી (સારું થઈ ગયા પછી પણ લાંબો સમય દવા જરૂરી છે) અને નશાથી દૂર રહેવું.',
    },
    urgentWarningSigns: {
      en: 'Command auditory hallucinations instructing harm, severe paranoia preventing eating or drinking, acute catatonia, or severe agitation.',
      hi: 'कानों में ऐसी आवाजें आना जो किसी को नुकसान पहुंचाने का आदेश दें, जहर के डर से खाना-पीना छोड़ देना, या अत्यधिक आक्रामकता।',
      gu: 'કાનમાં કોઈને નુકસાન પહોંચાડવાના આદેશ સંભળાવવા, ઝેર આપવાના વહેમથી અન્ન-જળ ત્યજી દેવા અથવા હિંસક બનવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Schizophrenia means having a "split personality" or multiple personalities.',
          hi: 'सिज़ोफ्रेनिया का मतलब "स्प्लिट पर्सनालिटी" या एक शरीर में कई आत्माएं/व्यक्तित्व होना है।',
          gu: 'સિઝોફ્રેનિયા એટલે "સ્પ્લિટ પર્સનાલિટી" કે એક જ શરીરમાં બે અલગ અલગ માણસો હોવા.',
        },
        fact: {
          en: 'Schizophrenia is not multiple personality disorder. The word refers to a fragmentation of thought processes and disconnection from reality.',
          hi: 'सिज़ोफ्रेनिया कोई मल्टीपल पर्सनालिटी नहीं है। यह मस्तिष्क की एक बीमारी है जिसमें विचारों और वास्तविकता का तारतम्य टूट जाता है।',
          gu: 'સિઝોફ્રેનિયા એ મલ્ટીપલ પર્સનાલિટી નથી. તે વાસ્તવિકતા અને વિચારો વચ્ચેનો સંપર્ક તૂટી જવાની મગજની બીમારી છે.',
        },
      },
      {
        myth: {
          en: 'People with schizophrenia are inherently violent and dangerous.',
          hi: 'सिज़ोफ्रेनिया के सभी मरीज खतरनाक और हिंसक होते हैं।',
          gu: 'સિઝોફ્રેનિયા ધરાવતા તમામ લોકો હિંસક અને જોખમી હોય છે.',
        },
        fact: {
          en: 'The vast majority of individuals with schizophrenia are not violent. They are far more likely to be victims of violence, stigma, and exploitation.',
          hi: 'अधिकांश मरीज बिल्कुल भी हिंसक नहीं होते। वास्तव में, वे खुद समाज के भेदभाव और शोषण का शिकार होते हैं।',
          gu: 'મોટાભાગના દર્દીઓ હિંસક હોતા નથી. હકીકતમાં તેઓ પોતે સમાજના ભેદભાવ અને અન્યાયનો ભોગ બનતા હોય છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Why do psychiatric medicines need to be continued even after the voices and hallucinations have stopped?',
          hi: 'जब आवाजें आना और शक होना बंद हो जाए, तो क्या दवा तुरंत बंद कर सकते हैं?',
          gu: 'જ્યારે અવાજો સંભળાવવાના બંધ થઈ જાય અને વહેમ મટી જાય, ત્યારે શું દવા બંધ કરી શકાય?',
        },
        answer: {
          en: 'No. Antipsychotics work by keeping neurotransmitters balanced. Abruptly stopping medicine almost inevitably leads to a severe relapse within months. Long-term maintenance protects brain health.',
          hi: 'बिल्कुल नहीं! दवाएं मस्तिष्क के रसायनों को संतुलित रखती हैं। दवा अचानक बंद करने से कुछ ही महीनों में बीमारी और अधिक गंभीर रूप में वापस आ सकती है।',
          gu: 'ના, બિલકુલ નહીં! દવાઓ મગજના રસાયણોને કંટ્રોલમાં રાખે છે. અચાનક દવા બંધ કરવાથી થોડા જ મહિનામાં બીમારી ફરીથી ગંભીર સ્વરૂપે પાછી આવી શકે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Large multicenter studies demonstrate that continuous maintenance antipsychotic pharmacotherapy reduces one-year relapse rates from approximately 70-80% to under 20-25%.',
          hi: 'बड़े चिकित्सा अध्ययनों से सिद्ध है कि नियमित दवा (एंटीसाइकोटिक्स) जारी रखने से एक साल के भीतर बीमारी दोबारा लौटने का जोखिम 70-80% से घटकर 25% से भी कम रह जाता है।',
          gu: 'મોટા ક્લિનિકલ સંશોધનો દર્શાવે છે કે નિયમિત દવા ચાલુ રાખવાથી એક વર્ષમાં બીમારી ફરીથી ઉથલો મારવાનું જોખમ ૭૦-૮૦% થી ઘટીને ૨૫% થી પણ ઓછું થઈ જાય છે.',
        },
        citationRef: 'The Lancet Systematic Review',
      },
      {
        fact: {
          en: 'Randomized clinical trials confirm Clozapine produces significant therapeutic improvement in 40% to 60% of patients with treatment-resistant schizophrenia who did not respond to standard antipsychotics.',
          hi: 'क्लिनिकल ट्रायल्स से प्रमाणित है कि जब अन्य दवाएं बेअसर हो जाती हैं, तब क्लोज़ापाइन (Clozapine) दवा 40% से 60% गंभीर मरीजों में भी उल्लेखनीय सुधार लाती है।',
          gu: 'ક્લિનિકલ પરીક્ષણો સાબિત કરે છે કે જ્યારે સામાન્ય દવાઓ કામ ન કરે ત્યારે ક્લોઝાપાઇન (Clozapine) દવા ૪૦% થી ૬૦% જટિલ દર્દીઓમાં પણ અદભુત સુધારો લાવે છે.',
        },
        citationRef: 'APA Practice Guidelines',
      },
      {
        fact: {
          en: 'Systematic reviews confirm that minimizing the Duration of Untreated Psychosis (DUP) through early intervention significantly improves long-term vocational, cognitive, and clinical outcomes.',
          hi: 'अनुसंधानों से स्पष्ट है कि लक्षण शुरू होते ही जितनी जल्दी इलाज शुरू किया जाए (DUP कम हो), मरीज के सामान्य जीवन, नौकरी और सोचने-समझने की क्षमता में उतना ही बेहतर सुधार होता है।',
          gu: 'સંશોધનો ખાતરી આપે છે કે લક્ષણો શરૂ થતાં જ જેટલી વહેલી સારવાર શરૂ કરવામાં આવે, દર્દીનું સામાજિક જીવન, નોકરી અને માનસિક ક્ષમતા એટલી જ ઝડપથી પુનઃસ્થાપિત થાય છે.',
        },
        citationRef: 'Archives of General Psychiatry',
      },
      {
        fact: {
          en: 'Clinical trials demonstrate that structured family psychoeducation aimed at reducing high Expressed Emotion lowers psychotic relapse rates by more than 50% compared to routine outpatient care alone.',
          hi: 'अध्ययन दर्शाते हैं कि परिवार को बीमारी की सही जानकारी (सांत्वना, बिना आलोचना के सहयोग) देने से मरीज के दोबारा बीमार पड़ने की संभावना 50% से अधिक घट जाती है।',
          gu: 'અભ્યાસો દર્શાવે છે કે પરિવારને સાયકોએજ્યુકેશન આપીને ઘરમાં શાંત અને સ્નેહપૂર્ણ વાતાવરણ રાખવાથી દર્દીને ફરીથી બીમારી થવાનું જોખમ ૫૦% થી પણ વધુ ઘટી જાય છે.',
        },
        citationRef: 'Indian Psychiatric Society (IPS) Guidelines',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'Keepers GA, Fochtmann LJ, Anzia JM, et al. The American Psychiatric Association Practice Guideline for the Treatment of Patients With Schizophrenia. Am J Psychiatry. 2020;177(9):868-872.',
        source: 'APA Practice Guidelines',
        year: '2020',
      },
      {
        citation: 'Leucht S, Tardy M, Komossa K, et al. Antipsychotic drugs versus placebo for relapse prevention in schizophrenia: a systematic review and meta-analysis. Lancet. 2012;379(9831):2063-2071.',
        source: 'The Lancet Systematic Review',
        year: '2012',
      },
      {
        citation: 'Indian Psychiatric Society. Clinical Practice Guidelines for the Management of Schizophrenia. Indian J Psychiatry. 2017;59(Suppl 1):S19-S33.',
        source: 'Indian Psychiatric Society (IPS) Guidelines',
        year: '2017',
      },
      {
        citation: 'Howes OD, McCutcheon R, Agid O, et al. Treatment-Resistant Schizophrenia: Treatment Response and Resistance in Psychosis (TRRIP) Working Group Consensus Guidelines. Am J Psychiatry. 2017;174(3):216-229.',
        source: 'TRRIP Consensus Guidelines',
        year: '2017',
      },
      {
        citation: 'Marshall M, Lewis S, Lockwood A, et al. Association between duration of untreated psychosis and outcome in cohorts of first-episode patients: a systematic review. Arch Gen Psychiatry. 2005;62(9):975-983.',
        source: 'Archives of General Psychiatry',
        year: '2005',
      },
    ],
    educationalVideoTitle: { en: "What is Schizophrenia?", hi: "What is Schizophrenia?", gu: "What is Schizophrenia?" },
    educationalVideoSource: 'National Alliance on Mental Illness (NAMI)',
    lastReviewed: '2026-09',
    relatedIds: ['antipsychotics', 'family-psychoeducation', 'sst', 'bipolar'],
    relatedContent: {
      conditionSlugs: ['bipolar-disorder', 'major-depressive-disorder'],
      medicationIds: ['antipsychotics', 'mood-stabilizers'],
      treatmentIds: ['family-therapy', 'supportive', 'ect'],
    },
  },
  {
    id: 'ptsd',
    slug: 'post-traumatic-stress-disorder',
    category: 'trauma',
    conditionIcon: 'ptsd',
    name: {
      en: 'Post-Traumatic Stress Disorder (PTSD)',
      hi: 'पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (PTSD)',
      gu: 'પોસ્ટ-ટ્રોમેટિક સ્ટ્રેસ ડિસઓર્ડર (PTSD - આઘાતજનક તણાવ)',
    },
    medicalTerms: {
      en: 'PTSD, Traumatic Neurosis',
      hi: 'पीटीएसडी (PTSD), आघातजन्य तनाव विकार',
      gu: 'પીટીએસડી (PTSD)',
    },
    overview: {
      en: 'Post-Traumatic Stress Disorder (PTSD; ICD-11: 6B40, DSM-5-TR) is a severe, debilitating trauma- and stressor-related condition triggered by exposure to actual or threatened death, serious physical injury, sexual violation, or catastrophic interpersonal trauma—either through direct personal experience, witnessing the event occur to others, learning that the traumatic event occurred to a close family member or close friend, or experiencing repeated or extreme exposure to aversive details of traumatic events. Pathophysiologically, PTSD represents a profound neurobiological failure of fear extinction and neural integration: the emotional memory trace remains unintegrated within hippocampal contextual frameworks and relentlessly hyper-stimulates the amygdala while evading prefrontal cortical inhibition. The disorder manifests across four distinct clinical symptom clusters: intrusive re-experiencing (dissociative flashbacks, vivid intrusive memories, night terrors), active cognitive and behavioral avoidance of trauma-related stimuli, persistent negative alterations in cognitions and mood (catastrophic guilt, self-blame, pervasive emotional blunting), and marked alterations in neurovegetative arousal and reactivity (hypervigilance, exaggerated startle, insomnia, irritability).',
      hi: 'पोस्ट-ट्रॉमैटिक स्ट्रेस डिसऑर्डर (PTSD) एक गंभीर और अक्षम करने वाला मानसिक विकार है जो किसी भयानक, जानलेवा या दर्दनाक हादसे (जैसे गंभीर सड़क दुर्घटना, प्राकृतिक आपदा, यौन हिंसा, शारीरिक हमला, युद्ध या अचानक किसी प्रियजन की हिंसक मृत्यु) का प्रत्यक्ष अनुभव करने या उसे देखने के बाद विकसित होता है। न्यूरोबायोलॉजिकल दृष्टि से, इस विकार में मस्तिष्क की सुरक्षा प्रणाली और यादों का केंद्र (Hippocampus और Amygdala) आघात की घटना को ठीक से संसाधित नहीं कर पाते, जिससे मस्तिष्क को लगता है कि वह भयानक खतरा अभी भी टला नहीं है। इसके लक्षणों को चार मुख्य श्रेणियों में बांटा गया है: आघात की कड़वी यादों का बार-बार उभरना (फ्लैशबैक और भयानक सपने); हादसे से जुड़ी जगहों, लोगों और बातचीत से पूरी तरह दूर भागना (Avoidance); विचारों और मनोदशा में गहरा नकारात्मक बदलाव (अत्यधिक अपराधबोध, भावनात्मक सुन्नता, दुनिया को खतरनाक समझना); और तंत्रिका तंत्र की अत्यधिक उत्तेजना (चौंकना, हर समय खतरे की आशंका में रहना, अनिद्रा और तेज गुस्सा)।',
      gu: 'પોસ્ટ-ટ્રોમેટિક સ્ટ્રેસ ડિસઓર્ડર (PTSD) એ એક ગંભીર અને માનસિક રીતે તોડી પાડતો આઘાતજનક ડિસઓર્ડર છે, જે કોઈ જીવલેણ અકસ્માત, કુદરતી આપત્તિ, શારીરિક કે જાતીય હિંસા અથવા સ્વજનના આકસ્મિક મૃત્યુ જેવા અતિ ભયાનક આઘાતનો સામનો કર્યા પછી કે નજરે જોયા પછી ઉત્પન્ન થાય છે. મગજ વિજ્ઞાન અનુસાર, મગજનું ડર કેન્દ્ર (Amygdala) અને યાદશક્તિનું કેન્દ્ર આ આઘાતજનક સ્મૃતિને ભૂતકાળની સામાન્ય યાદ તરીકે સંગ્રહિત કરી શકતા નથી, પરિણામે મગજને સતત એવું જ લાગે છે કે તે ભયાનક ખતરો હજુ પણ સામે જ ઊભો છે. આના લક્ષણો ચાર ભાગમાં જોવા મળે છે: આઘાતની કડવી યાદો અને બિહામણા સપનાઓ વારંવાર આવવા (Flashbacks); તે ઘટના સાથે સંકળાયેલી તમામ બાબતો, સ્થળો કે વાતોથી દૂર ભાગવું (Avoidance); વિચારો અને લાગણીઓમાં નકારાત્મકતા (ઊંડો અપરાધભાવ, લાગણીશૂન્યતા); અને મનની સતત અતિ-સતર્કતા (નાના અવાજથી પણ ડરીને ચમકી જવું, સતત ભય અને અનિદ્રા).',
    },
    illustrativeExamples: [
      {
        en: 'Ananya, a 29-year-old architectural draftsperson from Surat, survived a catastrophic multi-vehicle highway collision on the national expressway. A speeding cargo truck crushed the rear compartment of her car, claiming the life of her maternal aunt beside her, while Ananya remained trapped beneath crumpled steel wreckage for four agonizing hours before emergency rescue crews cut her free with hydraulic shears. Although her orthopedic fractures gradually healed over three months, Ananya remained paralyzed by psychological terror. The sudden blast of a vehicle horn, screeching tires, or heavy monsoon rain immediately triggered visceral dissociative flashbacks: her pupils would dilate, her heart would race to 150 beats per minute, and she would dive under her office workstation in uncontrollable terror, convinced jagged steel beams were caving in upon her again. Nightly, she woke drenched in cold sweat from recurring nightmares replaying the pungent smell of gasoline, crushing pressure, and her aunt\'s desperate cries. Ananya developed rigid avoidance behaviors: she completely refused to travel in any motorized car, bus, or auto-rickshaw, forcing her father to walk beside her for miles or causing her to miss work, which eventually resulted in a disciplinary leave notice. She harbored overwhelming survivor guilt ("I survived while she died because I traded seats before departure"), severed all contact with her extended family, and felt emotionally deadened, unable to smile or feel affection toward her fiancé. Recognizing her unravelling state, her family brought Ananya to a specialist psychiatric and trauma clinic. The psychiatrist conducted a comprehensive trauma evaluation using the Clinician-Administered PTSD Scale (CAPS-5), establishing the formal diagnosis of Severe PTSD. Ananya was initiated on Sertraline (titrated to 100 mg daily) to calm her persistent adrenergic autonomic surge, coupled with low-dose Prazosin at bedtime to specifically abolish her trauma-related nightmares by blocking central alpha-1 adrenergic receptors. Concurrently, she engaged in Eye Movement Desensitization and Reprocessing (EMDR) and Trauma-Focused Cognitive Behavioral Therapy (TF-CBT). Over twenty weeks of targeted trauma processing, Ananya successfully uncoupled the traumatic collision memory from its acute physiological panic trigger. Her night terrors ceased, survivor guilt dissolved into healthy grief, and she regained the ability to ride in automobiles and returned to full-time architectural design work.',
        hi: 'सूरत की 29 वर्षीय आर्किटेक्चरल ड्राफ्ट्सपर्सन अनन्या राष्ट्रीय राजमार्ग पर एक भीषण सड़क हादसे में बाल-बाल बची थीं। एक तेज रफ्तार ट्रक ने उनकी कार को पीछे से कुचल दिया था, जिसमें उनके बगल में बैठी उनकी मौसी की मौके पर ही मौत हो गई, जबकि अनन्या चार दर्दनाक घंटों तक कार के मुड़े हुए लोहे के मलबे में फंसी रहीं जब तक कि बचाव दल ने कटर से काटकर उन्हें बाहर नहीं निकाला। हालांकि उनकी हड्डियों के फ्रैक्चर तीन महीनों में ठीक हो गए, लेकिन अनन्या का मन उस खौफनाक हादसे में ही फंसा रह गया। सड़क पर किसी गाड़ी का तेज हॉर्न बजना, टायरों के घिसने की आवाज या बारिश का शोर सुनते ही उन्हें भयानक फ्लैशबैक होने लगते: उनकी धड़कन 150 पार कर जाती और वे घबराकर दफ्तर की मेज के नीचे छिप जातीं, ऐसा लगता मानो कार का मलबा फिर से उनके ऊपर गिर रहा है। हर रात उन्हें भयानक सपने आते जिसमें पेट्रोल की गंध और मौसी की चीखें गूंजतीं, और वे पसीने से लथपथ होकर चीखते हुए उठतीं। अनन्या ने गाड़ियों में बैठना पूरी तरह बंद कर दिया; वे कार, ऑटो या बस में कदम भी नहीं रख पाती थीं। वे खुद को मौसी की मौत का जिम्मेदार मानकर गहरे अपराधबोध (Survivor guilt) में डूब गईं। उन्होंने अपने मंगेतर से बात करना बंद कर दिया और भावनाओं से पूरी तरह सुन्न हो गईं। जब स्थिति असहनीय हो गई, तो परिवार उन्हें मनोचिकित्सक के पास ले गया। डॉक्टर ने CAPS-5 स्केल पर जांच कर गंभीर PTSD का निदान किया। अनन्या को घबराहट कम करने के लिए सर्ट्रालीन और बुरे सपनों को रोकने के लिए प्राज़ोसिन (Prazosin) दवा दी गई। साथ ही आधुनिक ईएमडीआर (EMDR) और ट्रॉमा-फोक्स्ड सीबीटी थेरेपी शुरू की गई। 20 हफ्तों की विशेष थेरेपी के बाद हादसे की यादों का दर्द शांत हो गया, उनके बुरे सपने बंद हो गए और उन्होंने दोबारा गाड़ियों में सफर करना शुरू किया तथा अपने आर्किटेक्चर के काम पर पूरी तरह लौट आईं।',
        gu: 'સુરતની ૨૯ વર્ષીય આર્કિટેક્ચરલ ડ્રાફ્ટ્સપર્સન અનન્યા નેશનલ હાઈવે પર એક ભયાનક અકસ્માતમાં માંડ-માંડ બચી હતી. એક પૂરપાટ ઝડપે આવતા ટ્રકે તેમની કારને કચડી નાખી હતી, જેમાં તેની બાજુમાં બેઠેલી માસીનું ઘટનાસ્થળે જ કરુણ મોત થયું હતું, જ્યારે અનન્યા ચાર કલાક સુધી કારના પતરાં વચ્ચે કચડાઈને કણસતી રહી હતી. જોકે ત્રણ મહિનામાં તેના હાડકાં તો સાજાં થઈ ગયાં, પરંતુ માનસિક રીતે તે એ જ ભયાનક કારમાં કેદ રહી ગઈ. રસ્તા પર જોરથી વાગતો હોર્ન, બ્રેકનો અવાજ કે વરસાદનો અવાજ સાંભળતાં જ તેને તીવ્ર ફ્લેશબેક આવવા લાગતા: હૃદયના ધબકારા ૧૫૦ થઈ જતા અને તે ઓફિસમાં ટેબલ નીચે સંતાઈ જતી, તેને લાગતું કે ગાડી ફરીથી તેની પર તૂટી પડી છે. દરરોજ રાત્રે પેટ્રોલની ગંધ અને માસીની ચીસો સાથેના બિહામણા સપનાઓ આવતાં અને તે પરસેવે રેબઝેબ થઈને જાગી જતી. અનન્યાએ કોઈપણ વાહનમાં બેસવાનું સાવ બંધ કરી દીધું, માસીના મોત માટે પોતાની જાતને દોષી માનીને ઊંડા અપરાધભાવમાં ડૂબી ગઈ અને મંગેતર સાથે વાત કરવાનું બંધ કરીને લાગણીહીન બની ગઈ. પરિવારે તેની ગંભીર હાલત જોઈને મનોચિકિત્સકનો સંપર્ક કર્યો. ડૉક્ટરે ઊંડાણપૂર્વક તપાસ કરીને PTSD નું સચોટ નિદાન કર્યું. તેને ચિંતા ઘટાડવા માટે સર્ટ્રાલીન અને ખરાબ સપનાઓ અટકાવવા માટે પ્રાઝોસિન દવા આપવામાં આવી, સાથે ખાસ EMDR અને ટ્રોમા-સીબીટી થેરાપી શરૂ કરવામાં આવી. ૨૦ અઠવાડિયાની વિશેષ સારવારથી આઘાતજનક યાદોનો ડર દૂર થયો, ખરાબ સપના બંધ થયા અને તે ફરીથી વાહનમાં મુસાફરી કરતી થઈ તથા પોતાની આર્કિટેક્ટ તરીકેની કારકિર્દીમાં સફળતાપૂર્વક પાછી ફરી.',
      },
      {
        en: 'Rajesh, a 42-year-old production supervisor at an industrial chemical unit in Ankleshwar, survived an acute pressure vessel rupture that triggered a deafening explosion and flash fire across the plant floor. Though he evacuated without life-threatening thermal burns, Rajesh developed severe, unrelenting post-traumatic symptoms: high-decibel industrial machinery sounds or sudden clanging noises instantly induced disorienting panic, dizziness, and intense palpitations. He suffered night terrors where he felt suffocated by toxic black smoke, frequently waking with chest tightness. Unable to step near factory machinery without debilitating autonomic tremors, he faced acute loss of livelihood. A psychiatric evaluation diagnosed moderate-to-severe PTSD. Treated with Paroxetine and structured Prolonged Exposure (PE) therapy featuring systematic in-vivo and imaginal exposure alongside autonomic grounding techniques, Rajesh achieved significant desensitization over fourteen weeks, mastered his startle reflex, and successfully resumed plant supervisory duties with restored confidence.',
        hi: 'अंकलेश्वर के एक औद्योगिक रसायन संयंत्र में 42 वर्षीय प्रोडक्शन सुपरवाइजर राजेश एक अचानक हुए बॉयलर विस्फोट और आग की घटना में बाल-बाल बचे थे। हालांकि वे गंभीर रूप से जले बिना बाहर निकल आए, लेकिन हादसे के बाद वे गहरे मानसिक आघात में चले गए: कारखाने की मशीनों की तेज आवाज या किसी धातु के गिरने की खनक सुनते ही उन्हें चक्कर आने लगते, दिल तेजी से धड़कने लगता और पसीना छूट जाता। हर रात उन्हें धुएं में घुटने के डरावने सपने आते। वे किसी भी मशीनरी के पास जाने से कांपने लगते थे जिससे उनकी नौकरी खतरे में पड़ गई। मनोचिकित्सक ने उन्हें मध्यम-से-गंभीर PTSD पाया। पैरोक्सेटीन दवा और प्रोलॉन्गड एक्सपोजर (PE) थेरेपी की मदद से 14 हफ्तों में उनका डर पूरी तरह खत्म हुआ, चौंकने की आदत ठीक हुई और वे आत्मविश्वास के साथ अपनी फैक्ट्री में काम पर लौट आए।',
        gu: 'અંકલેશ્વરના એક કેમિકલ પ્લાન્ટમાં ૪૨ વર્ષીય પ્રોડક્શન સુપરવાઇઝર રાજેશભાઈ અચાનક બોઈલર ફાટવાના અને આગ લાગવાના ભયાનક અકસ્માતમાંથી માંડ બચ્યા હતા. જોકે તેઓ દાઝ્યા વિના બહાર નીકળી શક્યા, પરંતુ આ ઘટના પછી તેમને ગંભીર આઘાત લાગ્યો: ફેક્ટરીના મશીનોનો મોટો અવાજ કે કોઈ પતરું પછડાવાનો અવાજ સાંભળતાં જ તેમને ચક્કર આવી જતા, છાતીમાં ધબકારા વધી જતા અને પરસેવો છૂટી જતો. રાત્રે ધુમાડામાં ગૂંગળાતા હોવાના બિહામણા સપના આવતા. તેઓ કોઈપણ મશીનની નજીક જઈ શકતા ન હતા જેથી તેમની આજીવિકા જોખમાઈ ગઈ. મનોચિકિત્સકે તપાસ કરી PTSD નું નિદાન કર્યું. પેરોક્સેટિન દવા અને પ્રોલોન્ગ્ડ એક્સપોઝર થેરાપી દ્વારા ૧૪ અઠવાડિયામાં તેમનો ભય દૂર થયો અને તેઓ સંપૂર્ણ આત્મવિશ્વાસ સાથે પ્લાન્ટમાં પોતાની ફરજ પર પાછા ફર્યા.',
      },
      {
        en: 'Bhavna, a 35-year-old bank branch officer in Ahmedabad, survived a catastrophic flash flood that inundated her residential society\'s ground floor, trapping several neighbors and destroying family heirlooms. Following the disaster, Bhavna developed persistent emotional detachment, severe insomnia, and profound fear of rainstorms. Whenever heavy monsoonal clouds gathered, Bhavna experienced visceral chills, severe nausea, and rushed upstairs in terror, unable to concentrate on her financial ledger work. She withdrew from her children, consumed by intrusive memories of rising brown floodwaters. Through targeted Trauma-Focused CBT (TF-CBT) and cognitive restructuring paired with short-term pharmacotherapy, Bhavna learned effective distress tolerance, uncoupled the weather cues from panic, reconnected emotionally with her family, and resumed her banking duties with steady resilience.',
        hi: 'अहमदाबाद की 35 वर्षीय बैंक अधिकारी भावना एक भीषण मानसूनी बाढ़ में बाल-बाल बची थीं, जिसमें उनके घर का निचला हिस्सा जलमग्न हो गया था और कई पड़ोसी घंटों फंसे रहे थे। इस हादसे के बाद भावना में गहरा भावनात्मक अलगाव, गंभीर अनिद्रा और बादलों व बारिश का अत्यधिक डर बैठ गया। जब भी तेज बारिश होती या बादल घिरते, भावना का दिल बैठ जाता, उल्टी जैसा महसूस होता और वे घबराकर ऊपर की मंजिल पर भागतीं। वे अपने बच्चों से भी कट गई थीं। ट्रॉमा-फोक्स्ड सीबीटी (TF-CBT) और उचित काउंसलिंग के माध्यम से भावना ने बारिश के डर पर काबू पाया, अपनी भावनाओं को फिर से व्यक्त करना सीखा और बैंक के अपने काम पर सफलतापूर्वक लौट आईं।',
        gu: 'અમદાવાદના ૩૫ વર્ષીય બેંક અધિકારી ભાવનાબેન એક વિનાશક પૂરની હોનારતમાંથી માંડ બચ્યા હતા, જેમાં તેમની સોસાયટીનો ગ્રાઉન્ડ ફ્લોર ડૂબી ગયો હતો અને પડોશીઓ લાચાર થઈ ગયા હતા. આ કુદરતી આપત્તિ પછી ભાવનાબેનમાં ભારે એકલતા, અનિદ્રા અને વરસાદનો અતિશય ભય ઘર કરી ગયો હતો. ચોમાસામાં વાદળો ઘેરાય કે વરસાદના છાંટા પડે કે તરત જ તેમનું હૃદય જોરથી ધડકવા લાગતું, ઊબકા આવતા અને તેઓ ડરીને ઉપરના માળે ભાગી જતા. તેઓ બાળકો સાથે પણ વાત કરી શકતા ન હતા. ટ્રોમા-ફોક્સ્ડ સીબીટી (TF-CBT) થેરાપી અને યોગ્ય સારવાર દ્વારા ભાવનાબેને વરસાદના ભય પર વિજય મેળવ્યો, પરિવાર સાથે હસીખુશીથી રહેવા લાગ્યા અને બેંકમાં પોતાની જવાબદારીઓ ફરી સંભાળી લીધી.',
      },
    ],
    commonSymptoms: {
      en: [
        'Intrusive memories, recurrent distressing nightmares of the event',
        'Dissociative flashbacks (feeling or acting as if the traumatic event were recurring)',
        'Intense psychological and physiological distress when exposed to trauma reminders',
        'Persistent avoidance of memories, thoughts, feelings, places, or people associated with the event',
        'Persistent negative emotional state (fear, horror, anger, guilt, shame)',
        'Feelings of detachment or estrangement from others; emotional numbness',
        'Hypervigilance (constantly scanning the environment for threats)',
        'Exaggerated startle response, irritability, and insomnia',
      ],
      hi: [
        'घटना की भयावह यादें और बुरे सपने बार-बार आना (Flashbacks)',
        'ऐसा महसूस होना मानो वह भयानक घटना अभी दोबारा घट रही हो',
        'हादसे से जुड़ी जगहों, लोगों या बातों से पूरी तरह दूर भागना (Avoidance)',
        'हमेशा चौंकना, डरना और हर समय किसी खतरे की आशंका में रहना (Hypervigilance)',
        'भावनात्मक रूप से सुन्न हो जाना, अपनों से कटाव महसूस होना',
        'गहरा अपराधबोध या खुद को हादसे का जिम्मेदार मानना',
        'रात को नींद न आना और अचानक तेज गुस्सा आना',
      ],
      gu: [
        'ઘટનાની ભયાનક યાદો અને રાત્રે ખરાબ સપના વારંવાર આવવા (Flashbacks)',
        'એવું લાગવું કે તે ખરાબ ઘટના અત્યારે ફરીથી બની રહી છે',
        'તે ઘટના સાથે જોડાયેલા સ્થળો, લોકો કે વાતોથી દૂર ભાગવું',
        'સતત ડરેલા રહેવું અને સામાન્ય અવાજથી પણ ચમકી જવું (Hypervigilance)',
        'લાગણીહીન થઈ જવું, સ્વજનોથી અલિપ્ત થઈ જવું',
        'અપરાધભાવ કે ઊંડો અફસોસ રહેવો',
        'ઊંઘ ન આવવી અને અતિશય ચીડિયાપણું રહેવું',
      ],
    },
    dailyLifeImpact: {
      en: 'Chronic PTSD causes devastating functional and occupational impairments. The pervasive dread of sensory reminders leads to extensive avoidance, confining individuals to their homes, destroying mobility (such as absolute refusal to operate or ride in vehicles following motor accidents), and leading to career abandonment. Emotionally, pervasive numbness and anhedonia alienate spouses, children, and friends, frequently triggering marital dissolution. Hypervigilance and sleep deprivation result in chronic exhaustion, while a significant percentage of sufferers turn to alcohol, prescription benzodiazepines, or opioids in desperate, counterproductive attempts to chemically dampen hyperarousal and suppress nightmares.',
      hi: 'यदि समय पर उपचार न मिले तो PTSD व्यक्ति के सामाजिक और पेशेवर जीवन को पूरी तरह तबाह कर देता है। हादसे से जुड़ी चीजों के डर से व्यक्ति घर में कैद हो जाता है, यात्रा करना या गाड़ी चलाना छोड़ देता है, जिससे नौकरी और आजीविका छिन जाती है। भावनात्मक सुन्नता और अकेलेपन के कारण वैवाहिक रिश्ते टूट जाते हैं और पारिवारिक दूरियां बढ़ जाती हैं। निरंतर भय, नींद की कमी और चौंकने की आदत से शरीर और दिमाग थक कर चूर हो जाता है। दुर्भाग्यवश, कई लोग इस भयानक मानसिक पीड़ा और बुरे सपनों से राहत पाने के लिए शराब या नशीली दवाओं का सहारा लेने लगते हैं, जिससे एक नई गंभीर बीमारी जन्म ले लेती है।',
      gu: 'લાંબા ગાળાનો PTSD વ્યક્તિના સામાજિક અને વ્યવસાયિક જીવનને ભારે નુકસાન પહોંચાડે છે. અકસ્માત કે આઘાતના ડરથી વ્યક્તિ ઘરમાં પુરાઈ રહે છે, મુસાફરી કે વાહન ચલાવવાનું છોડી દે છે, જેના કારણે નોકરી કે ધંધો છૂટી જાય છે. લાગણીહીનતા અને હતાશાને લીધે જીવનસાથી અને પરિવાર સાથેના સંબંધોમાં તિરાડ પડે છે. સતત ભય અને અધૂરી ઊંઘના લીધે દર્દી શારીરિક અને માનસિક રીતે સાવ થાકી જાય છે. ઘણા કિસ્સાઓમાં આ અસહ્ય માનસિક ત્રાસ અને ખરાબ સપનાઓથી બચવા લોકો દારૂ કે ઊંઘની ગોળીઓનું વ્યસન કરી બેસે છે, જે પરિસ્થિતિને વધુ વણસાવે છે.',
    },
    causes: {
      en: 'Neurobiologically, PTSD involves dysfunctional fear-processing neurocircuitry. Neuroimaging demonstrates excessive, uncalibrated hyperactivity of the amygdala and dorsal anterior cingulate cortex (dACC), paired with deficient inhibitory control and structural volume reduction in the ventromedial prefrontal cortex (vmPFC) and hippocampus. Consequently, contextual memory tagging fails: the brain treats the memory of the past trauma as an active, immediate life threat happening in real-time. Sustained autonomic dysregulation is maintained by chronically elevated central norepinephrine levels and paradoxically dysregulated, sensitized hypothalamic-pituitary-adrenal (HPA) axis glucocorticoid receptor signaling.',
      hi: 'न्यूरोबायोलॉजिकल दृष्टि से PTSD मस्तिष्क के डर-संसाधन नेटवर्क (Fear Circuitry) की विकृति है। आधुनिक न्यूरोइमेजिंग से पता चलता है कि मस्तिष्क का डर केंद्र (Amygdala और dACC) अत्यधिक और अनियंत्रित रूप से सक्रिय हो जाता है, जबकि प्रीफ्रंटल कॉर्टेक्स (vmPFC) और हिप्पोकैम्पस की नियंत्रण क्षमता कमजोर पड़ जाती है। नतीजतन, मस्तिष्क इस बात का फर्क नहीं कर पाता कि खतरा बीत चुका है; वह पुरानी याद को अभी घटित हो रहा वर्तमान खतरा मान लेता है। इसके साथ ही, नॉरपेनेफ्रिन (Norepinephrine) जैसे तनाव पैदा करने वाले रसायनों का स्तर लगातार अत्यधिक बढ़ा रहता है और शरीर की तनाव प्रणाली (HPA axis) लगातार खतरे के मोड में अटकी रहती है।',
      gu: 'ન્યુરોબાયોલોજી મુજબ, PTSD એ મગજના ભય નિયંત્રણ પરિપથ (Fear Circuitry) ની ગંભીર ખામી છે. બ્રેઇન સ્કેન દર્શાવે છે કે મગજનું ડર કેન્દ્ર (Amygdala) અતિશય ઉત્તેજિત રહે છે, જ્યારે મગજનો તાર્કિક આગળનો ભાગ (Prefrontal cortex) અને યાદશક્તિ કેન્દ્ર (Hippocampus) તેના પર કાબૂ રાખી શકતા નથી. પરિણામે, મગજ એ સમજી શકતું નથી કે ભૂતકાળનો અકસ્માત હવે પૂરો થઈ ગયો છે અને તે જૂની સ્મૃતિને અત્યારે સામે ઊભેલા જોખમ તરીકે માનીને સતત ગભરાટ પેદા કરે છે. આ સાથે શરીરમાં નોરેડ્રેનાલિન જેવા સ્ટ્રેસ હોર્મોન્સનું પ્રમાણ સતત ઊંચું રહે છે.',
    },
    riskFactors: {
      en: [
        'Objective severity, high perceived threat to life, physical injury, or duration of the traumatic exposure',
        'Pre-existing psychiatric vulnerability (history of depression, anxiety disorders, or adverse childhood experiences/abuse)',
        'Immediate post-trauma factors, including lack of compassionate social support or secondary ongoing life stressors',
        'Genetic susceptibility involving polymorphisms in FKBP5, serotonin transporter (5-HTTLPR), and BDNF genes',
        'Female biological sex (demonstrating roughly 2-fold increased incidence of PTSD following equivalent trauma exposure)',
      ],
      hi: [
        'हादसे की भयावहता, जान जाने का अत्यधिक खतरा, गंभीर शारीरिक चोट लगना या लंबे समय तक प्रताड़ना सहना',
        'पहले से डिप्रेशन, घबराहट या बचपन में शारीरिक/भावनात्मक शोषण का इतिहास होना',
        'हादसे के बाद परिवार, दोस्तों या समाज से भावनात्मक और व्यावहारिक सहारे की कमी',
        'तनाव से निपटने वाले जीनों (FKBP5, BDNF) में आनुवंशिक संवेदनशीलता',
        'महिलाओं में जैविक और हार्मोनल संवेदनशीलता के कारण यह विकार पुरुषों की तुलना में लगभग दोगुना देखा जाता है',
      ],
      gu: [
        'આઘાતજનક ઘટનાની તીવ્રતા, જીવનું મોટું જોખમ, ગંભીર શારીરિક ઈજા કે લાંબા સમય સુધી ચાલેલો અત્યાચાર',
        'પહેલાંથી ડિપ્રેશન, ચિંતા કે બાળપણમાં ખરાબ શોષણનો ઇતિહાસ હોવો',
        'ઘટના પછી પરિવાર કે સગાં-સંબંધીઓ તરફથી હૂંફાળા ટેકાનો અભાવ',
        'તણાવ સહન કરવાના જનીનોમાં આનુવંશિક ખામી હોવી',
        'મહિલાઓમાં હોર્મોનલ અને જૈવિક પરિબળોને કારણે પુરુષો કરતાં બમણું જોખમ જોવા મળે છે',
      ],
    },
    psychiatricAssessment: {
      en: 'A sensitive, comprehensive, non-retraumatizing clinical evaluation. The psychiatrist conducts structured diagnostic interviews utilizing gold-standard validated measures, notably the Clinician-Administered PTSD Scale for DSM-5 (CAPS-5) and the PTSD Checklist for DSM-5 (PCL-5). Assessment rigorously screens for co-occurring Major Depressive Disorder (present in up to 50% of PTSD patients), substance use disorders (frequently secondary to self-medication), panic disorder, and suicide risk (which is significantly elevated). Careful medical and neurological evaluation excludes physical head trauma/concussion sequelae, chronic pain syndromes, traumatic brain injury (TBI), and endocrine dysfunctions that may mimic or exacerbate autonomic hyperarousal.',
      hi: 'मनोचिकित्सक द्वारा बेहद संवेदनशील और गैर-आघातकारी (Non-retraumatizing) मूल्यांकन किया जाता है, ताकि मरीज को दोबारा उस भयानक दर्द से न गुजरना पड़े। इसके लिए विश्वस्तरीय CAPS-5 और PCL-5 जैसे वैज्ञानिक स्केल्स का उपयोग करके लक्षणों की तीव्रता मापी जाती है। लगभग 50% मामलों में गंभीर डिप्रेशन, अनिद्रा, शराब/नशे की लत और आत्महत्या के विचारों का खतरा भी साथ जुड़ा होता है, जिनकी पूरी सतर्कता से जांच की जाती है। इसके साथ ही, सिर की चोट (TBI), न्यूरोलॉजिकल समस्याएं और थायरॉयड की जांच की जाती है ताकि किसी अन्य शारीरिक बीमारी की संभावना को खारिज किया जा सके।',
      gu: 'મનોચિકિત્સક દ્વારા અત્યંત સંવેદનશીલતાથી દર્દીને ફરી દુઃખી કર્યા વિના વિગતવાર તપાસ કરવામાં આવે છે. આ માટે આંતરરાષ્ટ્રીય સ્તરે માન્ય CAPS-5 અને PCL-5 જેવા વૈજ્ઞાનિક માપદંડોનો ઉપયોગ થાય છે. આશરે ૫૦% દર્દીઓમાં સાથે ગંભીર ડિપ્રેશન, દારૂ/નશાની ટેવ અને આત્મહત્યાના વિચારોનું મોટું જોખમ રહેલું હોય છે, જેની ખાસ તપાસ થાય છે. આ ઉપરાંત અકસ્માતમાં માથામાં થયેલી અંદરની ઈજા (Traumatic Brain Injury) કે હોર્મોનલ ખામીઓને લેબ અને ન્યુરોલોજીકલ તપાસ દ્વારા નકારી કાઢવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, diagnosis requires: Criterion A: Exposure to actual or threatened death, serious injury, or sexual violence through direct experience, witnessing, learning of occurrence to a close family member/friend, or repeated/extreme exposure to aversive details. Criterion B: Presence of one (or more) Intrusion symptoms (recurrent distressing memories, traumatic nightmares, dissociative reactions/flashbacks, or intense psychological/physiological distress to cues). Criterion C: Persistent Avoidance of trauma-related stimuli (avoidance of internal distressing memories/thoughts/feelings, or avoidance of external reminders like people, places, conversations, activities, objects, or situations). Criterion D: Negative alterations in cognitions and mood (two or more: inability to remember important aspects of trauma, persistent exaggerated negative beliefs about oneself or the world, distorted blame of self or others, persistent negative emotional state, markedly diminished interest in significant activities, feelings of detachment/estrangement, or persistent inability to experience positive emotions). Criterion E: Marked alterations in arousal and reactivity (two or more: irritable behavior/angry outbursts, reckless or self-destructive behavior, hypervigilance, exaggerated startle response, concentration difficulties, sleep disturbance). Criteria B, C, D, and E must persist for more than 1 month, cause clinically significant distress or functional impairment, and not be attributable to physiological effects of a substance or medical condition. In ICD-11, this condition is codified under 6B40.',
      hi: 'DSM-5-TR के अनुसार PTSD के औपचारिक निदान के लिए निम्नलिखित मानदंडों का पूरा होना अनिवार्य है: मानदंड A: प्रत्यक्ष रूप से, गवाह बनकर या किसी करीबी के साथ हुई वास्तविक या जानलेवा घटना, गंभीर चोट या यौन हिंसा का सामना होना। मानदंड B: कम से कम 1 घुसपैठिया लक्षण (Intrusive symptom - जैसे दर्दनाक यादें, बुरे सपने, फ्लैशबैक या घटना की याद दिलाने वाली चीजों पर भयानक घबराहट)। मानदंड C: कम से कम 1 बचाव लक्षण (Avoidance - घटना से जुड़े विचारों, भावनाओं, जगहों या लोगों से लगातार दूर भागना)। मानदंड D: विचारों और मनोदशा में कम से कम 2 नकारात्मक बदलाव (जैसे घटना की मुख्य बातें भूल जाना, खुद को या दुनिया को पूरी तरह बुरा मानना, खुद को दोषी ठहराना, लगातार भय/शर्म महसूस होना, अपनों से अलगाव, या खुश न हो पाना)। मानदंड E: उत्तेजना और प्रतिक्रिया में कम से कम 2 बदलाव (जैसे गुस्सा, बिना सोचे-समझे जोखिम उठाना, अत्यधिक सतर्कता/Hypervigilance, जोर से चौंकना, एकाग्रता में कमी और अनिद्रा)। ये सभी लक्षण कम से कम 1 महीने से अधिक समय तक लगातार बने रहने चाहिए और जीवन को अस्त-व्यस्त कर रहे हों। ICD-11 में इसका कोड 6B40 है।',
      gu: 'DSM-5-TR મુજબ PTSD ના સત્તાવાર નિદાન માટે નીચેના માપદંડો પૂર્ણ થવા જરૂરી છે: માપદંડ A: વાસ્તવિક કે જીવલેણ અકસ્માત, ગંભીર શારીરિક ઈજા કે જાતીય હિંસાનો પ્રત્યક્ષ સામનો કરવો, નજરે જોવો કે નજીકના સ્વજન સાથે આવું બન્યું હોવાની જાણ થવી. માપદંડ B: ઓછામાં ઓછું ૧ ઇન્ટ્રુઝિવ લક્ષણ (આઘાતજનક યાદો વારંવાર આવવી, ખરાબ સપના, ફ્લેશબેક કે ઘટનાની યાદ અપાવતી ચીજોથી ગભરાટ). માપદંડ C: ઓછામાં ઓછું ૧ અવોઇડન્સ લક્ષણ (ઘટના સાથે જોડાયેલા વિચારો, લાગણીઓ, સ્થળો કે વ્યક્તિઓથી સતત દૂર ભાગવું). માપદંડ D: વિચારો અને મૂડમાં ઓછામાં ઓછા ૨ નકારાત્મક ફેરફારો (ઘટનાની મહત્વની બાબતો યાદ ન રહેવી, પોતાના કે દુનિયા વિશે અત્યંત ખરાબ ધારણા બાંધવી, જાતને દોષ આપવો, અપરાધભાવ, લાગણીહીનતા કે અલિપ્તતા). માપદંડ E: અતિ-સતર્કતામાં ઓછામાં ઓછા ૨ ફેરફારો (અતિશય ગુસ્સો, જોખમી વર્તન, સતત ડરેલા રહેવું, સામાન્ય અવાજથી પણ ચમકી જવું, એકાગ્રતાનો અભાવ અને ઊંઘ ન આવવી). આ તમામ લક્ષણો ઘટનાના ૧ મહિનાથી વધુ સમય સુધી સતત રહેલા હોવા જોઈએ અને દૈનિક જીવનને ગંભીર રીતે પ્રભાવિત કરતા હોવા જોઈએ. ICD-11 માં આનો કોડ 6B40 છે.',
    },
    differentialConsiderations: {
      en: 'Essential differentials include: Acute Stress Disorder (ASD - symptoms manifesting and resolving between 3 days and 1 month post-trauma); Major Depressive Disorder; Generalized Anxiety Disorder; Panic Disorder; Obsessive-Compulsive Disorder; Borderline Personality Disorder; Complex PTSD (CPTSD - characterized by severe disturbances in affect regulation, persistent negative self-concept, and enduring relational difficulties typically stemming from prolonged childhood abuse); Traumatic Brain Injury (TBI); and Substance/Medication-Induced Disorders.',
      hi: 'इसे एक्यूट स्ट्रेस डिसऑर्डर (ASD - जो हादसे के 3 दिन से 1 महीने के भीतर होता है); डिप्रेशन; घबराहट के विकार (GAD/पैनिक); बॉर्डरलाइन पर्सनालिटी डिसऑर्डर; कॉम्प्लेक्स पीटीएसडी (Complex PTSD - जो बचपन में लगातार हुए अत्याचारों से होता है); सिर की अंदरूनी चोट (TBI); और नशे की लत से अलग पहचानना आवश्यक है।',
      gu: 'આને એક્યુટ સ્ટ્રેસ ડિસઓર્ડર (ASD - જે ઘટના પછી ૩ દિવસથી ૧ મહિના સુધી રહે છે); ડિપ્રેશન; પેનિક કે એન્ઝાયટી ડિસઓર્ડર; બોર્ડરલાઇન પર્સનાલિટી ડિસઓર્ડર; કોમ્પ્લેક્સ PTSD (CPTSD - જે બાળપણના સતત શોષણથી થાય છે); માથાની અંદરની ઈજા (TBI); અને નશાજન્ય સમસ્યાઓથી અલગ ઓળખવું જરૂરી છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Normalizing symptoms as the brain\'s protective response stuck in overdrive, instilling hope for recovery.',
        hi: 'रोगी को यह समझाना कि उसका शरीर खतरे की पुरानी यादों से खुद को बचाने की कोशिश कर रहा है और यह ठीक हो सकता है।',
        gu: 'દર્દીને સમજાવવું કે આ મગજની સામાન્ય સુરક્ષા પ્રણાલીની ભૂલભરેલી પ્રતિક્રિયા છે અને તે સંપૂર્ણ મટી શકે છે.',
      },
      lifestyleSupport: {
        en: 'Grounding techniques (5-4-3-2-1 sensory exercises), breathing retraining, structured routines, avoiding alcohol.',
        hi: 'ग्राउंडिंग तकनीकें (आंखें खोलकर वर्तमान की 5 चीजें देखना), गहरी सांस लेना और शराब से पूर्ण दूरी।',
        gu: 'ગ્રાઉન્ડિંગ કસરતો (વર્તમાનમાં ધ્યાન કેન્દ્રિત કરવું), ઊંડા શ્વાસ અને નશાથી અંતર.',
      },
      psychotherapy: {
        en: 'Trauma-Focused Cognitive Behavioural Therapy (TF-CBT) and Eye Movement Desensitization and Reprocessing (EMDR).',
        hi: 'ट्रॉमा-फोक्स्ड सीबीटी (TF-CBT) और ईएमडीआर (EMDR), जो आघात की कड़वी यादों के दर्द को कम करती हैं।',
        gu: 'ટ્રોમા-ફોકસ્ડ CBT અને EMDR થેરાપી જે જૂની કડવી યાદોની પીડાને કાયમ માટે શાંત કરવામાં મદદ કરે છે.',
      },
      medications: {
        en: 'SSRIs or SNRIs may be prescribed by a psychiatrist to alleviate chronic hyperarousal, depression, and anxiety.',
        hi: 'मनोचिकित्सक द्वारा सुझाई गई दवाएं (जैसे SSRIs) जो अत्यधिक घबराहट, चिड़चिड़ेपन और बुरे सपनों को कम करती हैं।',
        gu: 'મનોચિકિત્સક દ્વારા સૂચવાયેલી SSRI દવાઓ જે અતિશય ગભરાટ અને ખરાબ સપનાઓને કાબૂમાં લાવે છે.',
      },
      familySocialInterventions: {
        en: 'Guiding family members on how to avoid triggering trauma reminders and providing a secure, patient home environment.',
        hi: 'परिवार को सिखाना कि मरीज को बार-बार उस घटना को याद करने के लिए मजबूर न करें और धैर्यपूर्वक साथ दें।',
        gu: 'પરિવારને માર્ગદર્શન કે દર્દીને જૂની ઘટના વારંવાર યાદ ન કરાવવી અને શાંત હૂંફાળું વાતાવરણ પૂરું પાડવું.',
      },
    },
    treatmentGoals: {
      en: 'Processing traumatic memories so they no longer trigger acute terror, ending hypervigilance, and restoring connection to loved ones.',
      hi: 'हादसे की यादों के डर को खत्म करना, सामान्य नींद पाना और अपनों के साथ खुशहाल जीवन में लौटना।',
      gu: 'જૂની યાદોનો ડર દૂર કરવો, શાંત ઊંઘ મેળવવી અને પરિવાર સાથે સામાન્ય સંબંધો પુનઃસ્થાપિત કરવા.',
    },
    recoveryOutlook: {
      en: 'The recovery trajectory for Post-Traumatic Stress Disorder is highly encouraging with modern, evidence-based trauma psychiatry. Between 60% and 75% of patients completing manualized trauma-focused psychotherapies (such as Eye Movement Desensitization and Reprocessing [EMDR], Cognitive Processing Therapy [CPT], or Prolonged Exposure [PE]), in combination with first-line psychiatric pharmacotherapy (SSRIs/SNRIs and bedtime Prazosin for autonomic nightmare dampening), experience clinically significant, enduring symptom remission and no longer meet diagnostic criteria for PTSD. Neuroimaging studies confirm that successful trauma therapy re-establishes healthy prefrontal cortical inhibition over the amygdala and normalizes hippocampal functional connectivity. Individuals not only reclaim safety, restore restorative sleep, and reconnect with loved ones, but often experience profound "post-traumatic growth"—forging deepened psychological resilience, existential clarity, and renewed purpose.',
      hi: 'आधुनिक और वैज्ञानिक मनोचिकित्सा के माध्यम से PTSD का इलाज अत्यंत प्रभावी और उत्साहवर्धक है। पहली पंक्ति की दवाओं (जैसे सर्ट्रालीन और बुरे सपनों के लिए प्राज़ोसिन) तथा विशेष ट्रॉमा थेरेपी (जैसे EMDR और सीबीटी) के संयोजन से 60% से 75% मरीज पूरी तरह ठीक हो जाते हैं और सामान्य जीवन में लौट आते हैं। आधुनिक न्यूरोइमेजिंग से यह सिद्ध हो चुका है कि सही थेरेपी से मस्तिष्क का डर केंद्र (Amygdala) शांत हो जाता है और दिमाग का तार्किक हिस्सा दोबारा नियंत्रण पा लेता है। मरीज न केवल भयानक यादों और बुरे सपनों से मुक्त होते हैं, बल्कि अक्सर "पोस्ट-ट्रॉमैटिक ग्रोथ" (Post-traumatic growth) का अनुभव करते हैं—अर्थात वे जीवन में पहले से अधिक मानसिक रूप से मजबूत, जागरूक और संवेदनशील बनकर उभरते हैं।',
      gu: 'આધુનિક વૈજ્ઞાનિક સાયકિયાટ્રિક સારવારથી PTSD નું પરિણામ અત્યંત આશાસ્પદ અને ઉત્સાહજનક રહે છે. યોગ્ય દવાઓ (જેમ કે SSRIs અને ખરાબ સપના માટે પ્રાઝોસિન) તથા વિશિષ્ટ ટ્રોમા થેરાપી (જેમ કે EMDR અને ટ્રોમા-સીબીટી) ના સમન્વયથી ૬૦% થી ૭૫% દર્દીઓ સંપૂર્ણ સાજા થઈ જાય છે અને તેમનામાંથી PTSD ના તમામ લક્ષણો નાબૂદ થાય છે. બ્રેઇન સ્કેનિંગ સંશોધનો દર્શાવે છે કે યોગ્ય સારવારથી મગજનું અતિ-સક્રિય ડર કેન્દ્ર શાંત પડી જાય છે અને મગજનો તાર્કિક ભાગ ફરીથી કાબૂ મેળવે છે. દર્દીઓ માત્ર ભયાનક યાદો અને અનિદ્રામાંથી મુક્ત જ નથી થતા, પરંતુ "પોસ્ટ-ટ્રોમેટિક ગ્રોથ" અનુભવીને પહેલાં કરતાં પણ વધુ માનસિક રીતે મજબૂત, પરિપક્વ અને સંકલ્પબદ્ધ બને છે.',
    },
    relapsePrevention: {
      en: 'Anticipating anniversary reactions (dates of the event) and applying learned coping mechanisms proactively.',
      hi: 'हादसे की तारीख या बरसी के समय तनाव बढ़ने पर पहले से सीखे गए उपायों को अपनाना।',
      gu: 'ઘટનાની તારીખ કે યાદ અપાવે તેવા પ્રસંગો વખતે અગાઉથી સાવચેત રહીને શાંતિ રાખવી.',
    },
    urgentWarningSigns: {
      en: 'Severe dissociation leading to unsafe behavior, intense suicidal urges driven by guilt or trauma memories.',
      hi: 'अत्यधिक निराशा, खुद को नुकसान पहुंचाने के विचार या वास्तविकता से पूरी तरह संपर्क टूट जाना।',
      gu: 'અતિશય હતાશા, આત્મહત્યાના વિચારો અથવા વાસ્તવિકતાનું સાવ ભાન ભૂલી જવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Only soldiers in war zones get PTSD; ordinary civilians cannot get it.',
          hi: 'PTSD केवल युद्ध लड़ने वाले सैनिकों को होता है, आम नागरिकों को नहीं।',
          gu: 'PTSD માત્ર યુદ્ધમાં લડતા સૈનિકોને જ થાય છે, સામાન્ય લોકોને નહીં.',
        },
        fact: {
          en: 'Anyone can develop PTSD after road accidents, physical assaults, natural disasters, medical crises, or domestic violence.',
          hi: 'सड़क दुर्घटना, गंभीर बीमारी, प्राकृतिक आपदा या किसी भी बड़े आघात के बाद किसी भी आम नागरिक को PTSD हो सकता है।',
          gu: 'કોઈપણ સામાન્ય વ્યક્તિને ગંભીર અકસ્માત, હોનારત, હિંસા કે મોટી બીમારી પછી PTSD થઈ શકે છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Will talking about the trauma in therapy make me feel worse?',
          hi: 'क्या थेरेपी में उस भयानक हादसे के बारे में बात करने से मेरी तकलीफ और बढ़ जाएगी?',
          gu: 'શું થેરાપીમાં તે ખરાબ ઘટના વિશે વાત કરવાથી મારી તકલીફ વધી જશે?',
        },
        answer: {
          en: 'Trauma therapy is conducted in a structured, gradual, and supportive way. The therapist ensures you have strong grounding skills before any trauma processing begins.',
          hi: 'थेरेपिस्ट बहुत धीरे-धीरे और सुरक्षित तरीके से काम करते हैं। वे पहले आपको मन शांत रखने की तकनीकें सिखाते हैं ताकि आप सुरक्षित महसूस करें।',
          gu: 'થેરાપિસ્ટ ખૂબ જ ધીમે ધીમે અને સુરક્ષિત રીતે આગળ વધે છે. પહેલાં તમને મન શાંત રાખવાની ટેકનિક્સ શીખવવામાં આવે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Cochrane and NICE systematic reviews establish Trauma-Focused CBT (TF-CBT) and Eye Movement Desensitization and Reprocessing (EMDR) as first-line gold-standard treatments, producing substantial effect sizes in symptom reduction.',
          hi: 'कोक्रेन और NICE दिशानिर्देशों के अनुसार, ट्रॉमा-फोक्स्ड सीबीटी (TF-CBT) और ईएमडीआर (EMDR) थेरेपी PTSD के सबसे प्रभावी प्रथम-पंक्ति उपचार हैं जो लक्षणों में भारी कमी लाते हैं।',
          gu: 'કોક્રેન અને NICE માર્ગદર્શિકા મુજબ, ટ્રોમા-ફોક્સ્ડ સીબીટી (TF-CBT) અને EMDR થેરાપી PTSD માટે સર્વશ્રેષ્ઠ વૈજ્ઞાનિક સારવાર છે જે આઘાતના લક્ષણો ઝડપથી ઘટાડે છે.',
        },
        citationRef: 'NICE Clinical Guidelines NG116',
      },
      {
        fact: {
          en: 'Multicenter randomized controlled trials show selective serotonin reuptake inhibitors (such as sertraline and paroxetine) achieve meaningful remission across all core PTSD symptom clusters compared to placebo.',
          hi: 'क्लिनिकल अध्ययनों से सिद्ध है कि सर्ट्रालीन और पैरोक्सेटीन जैसी दवाएं घबराहट, चौंकने की आदत और भयानक यादों के दौरों को नियंत्रित करने में महत्वपूर्ण रूप से प्रभावी हैं।',
          gu: 'ક્લિનિકલ સંશોધનો સાબિત કરે છે કે સર્ટ્રાલીન અને પેરોક્સેટિન જેવી દવાઓ દર્દીની સતત ચિંતા, ભય અને આઘાતની કડવી યાદોના હુમલાને કાબૂમાં લેવા માટે ખૂબ અસરકારક છે.',
        },
        citationRef: 'British Journal of Psychiatry Meta-Analysis',
      },
      {
        fact: {
          en: 'Clinical evidence supports the use of centrally acting alpha-1 adrenergic receptor antagonists (such as Prazosin) to reduce trauma-related nightmares and sleep fragmentation by dampening excessive sympathetic arousal.',
          hi: 'चिकित्सा प्रमाण दर्शाते हैं कि प्राज़ोसिन (Prazosin) जैसी दवाएं मस्तिष्क में तनाव वाले रसायनों को शांत करके PTSD से जुड़े भयानक सपनों और नींद की समस्या को काफी कम करती हैं।',
          gu: 'તબીબી પુરાવા દર્શાવે છે કે પ્રાઝોસિન જેવી દવાઓ મગજના અતિ-ઉત્તેજિત રસાયણોને શાંત કરીને બિહામણા સપનાઓ અને અનિદ્રાની સમસ્યાને અસરકારક રીતે ઘટાડે છે.',
        },
        citationRef: 'New England Journal of Medicine Trial',
      },
      {
        fact: {
          en: 'Systematic reviews show that structured psychological interventions delivered early after severe trauma prevent symptom chronification and secondary depressive or substance use complications.',
          hi: 'समीक्षाओं से पुष्टि होती है कि आघात के बाद जितनी जल्दी सही मनोवैज्ञानिक सहायता मिलती है, बीमारी के पुराने होने और अवसाद के खतरे को उतना ही बेहतर रोका जा सकता है।',
          gu: 'સંશોધનો પુષ્ટિ કરે છે કે આઘાતજનક ઘટના પછી શક્ય તેટલી વહેલી યોગ્ય માનસિક સારવાર મળવાથી બીમારી ક્રોનિક થતી અટકે છે અને ડિપ્રેશનનું જોખમ ટળે છે.',
        },
        citationRef: 'WHO Guidelines on Conditions Related to Stress',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'National Institute for Health and Care Excellence (NICE). Post-traumatic stress disorder: NICE guideline [NG116]. London: NICE, 2018.',
        source: 'NICE Guidelines',
        year: '2018',
      },
      {
        citation: 'World Health Organization. Guidelines for the Management of Conditions Specifically Related to Stress. Geneva: WHO, 2013.',
        source: 'WHO Guidelines',
        year: '2013',
      },
      {
        citation: 'Bisson JI, Roberts NP, Andrew M, Cooper R, Lewis C. Psychological therapies for chronic post-traumatic stress disorder (PTSD) in adults. Cochrane Database of Systematic Reviews. 2013;(12):CD003388.',
        source: 'Cochrane Database of Systematic Reviews',
        year: '2013',
      },
      {
        citation: 'Hoskins M, Pearce J, Bethell A, et al. Pharmacotherapy for post-traumatic stress disorder: systematic review and meta-analysis. Br J Psychiatry. 2015;206(2):93-100.',
        source: 'British Journal of Psychiatry Meta-Analysis',
        year: '2015',
      },
      {
        citation: 'Raskind MA, Peskind ER, Chow B, et al. Trial of Prazosin for Post-Traumatic Stress Disorder in Military Veterans. N Engl J Med. 2018;378(6):507-517.',
        source: 'New England Journal of Medicine Trial',
        year: '2018',
      },
    ],
    lastReviewed: '2026-09',
    // TODO(video): PTSD trauma loop, amygdala hyperarousal, and trauma-focused therapies (EMDR / PE)
    youtubeVideoId: undefined,
    relatedIds: ['pe-ptsd', 'emdr', 'cbt', 'antidepressants', 'anxiety-gad'],
    relatedContent: {
      conditionSlugs: ['major-depressive-disorder', 'generalized-anxiety-disorder', 'panic-disorder'],
      medicationIds: ['antidepressants'],
      treatmentIds: ['cbt', 'supportive'],
    },
  },
  {
    id: 'geriatric-dementia-delirium',
    slug: 'geriatric-psychiatry-dementia-delirium',
    category: 'geriatric',
    conditionIcon: 'geriatric-dementia-delirium',
    name: {
      en: 'Geriatric Psychiatry: Dementia, Delirium & Late-Life Depression',
      hi: 'वृद्धावस्था मनोरोग: डिमेंशिया, प्रलाप (Delirium) और बुढ़ापे का अवसाद',
      gu: 'વૃદ્ધાવસ્થા મનોરોગ: ડિમેન્શિયા (યાદશક્તિની ખામી), ડેલીરિયમ અને ડિપ્રેશન',
    },
    medicalTerms: {
      en: 'Dementia, Delirium, Late-Life Depression (The 3 Ds)',
      hi: 'डिमेंशिया (मनोभ्रंश), डेलिरियम (Delirium), वृद्धावस्था अवसाद',
      gu: 'ડિમેન્શિયા (Dementia), ડેલીરિયમ (Delirium), ડિપ્રેશન',
    },
    overview: {
      en: 'Geriatric mental health demands specialized clinical differentiation across the classical "Three Ds" of late life: Dementia, Delirium, and Late-Life Depression. Dementia (Major Neurocognitive Disorder; DSM-5-TR, ICD-11: 6D80) represents an insidious, progressive, and neurodegenerative deterioration of cognitive faculties—encompassing episodic memory, executive problem-solving, praxis, language, and spatial orientation—exceeding normal age-related senescence and causing loss of functional independence in Instrumental and Basic Activities of Daily Living (ADLs). In contrast, Delirium is an acute, fluctuating neurocognitive disturbance characterized by attentional disruption, disorganized thinking, and altered level of arousal; it is a life-threatening medical emergency precipitated by acute somatic illness (such as occult sepsis, electrolyte collapse, or drug toxicity). Late-Life Depression represents an affective syndrome frequently presenting with psychomotor retardation, somatic preoccupations, and subjective cognitive deficits ("depressive pseudodementia") that require accurate identification because, unlike neurodegenerative dementias, late-life depression is fully reversible with targeted treatment.',
      hi: 'वृद्धावस्था मानसिक स्वास्थ्य में तीन प्रमुख विकारों ("3 Ds") के बीच का सूक्ष्म अंतर समझना जीवन रक्षक होता है: डिमेंशिया (Dementia), डेलिरियम (Delirium), और बुढ़ापे का अवसाद (Late-Life Depression)। डिमेंशिया (मनोभ्रंश) मस्तिष्क की कोशिकाओं का एक धीमा, स्थायी और लगातार बढ़ने वाला रोग है, जिसमें याददाश्त, सोचने-समझने, निर्णय लेने और भाषा की क्षमताएं धीरे-धीरे खत्म हो जाती हैं और बुजुर्ग अपने रोजमर्रा के कामों (जैसे दवा लेना, पैसे संभालना, कपड़े पहनना) के लिए दूसरों पर निर्भर हो जाते हैं। इसके विपरीत, डेलिरियम (प्रलाप) कुछ ही घंटों या दिनों में अचानक होने वाला गंभीर मानसिक भटकाव है; यह एक जानलेवा मेडिकल इमरजेंसी है जो शरीर में किसी गंभीर संक्रमण (जैसे यूरिन इन्फेक्शन), सोडियम की कमी या दवा की प्रतिक्रिया से होती है। वहीं बुढ़ापे का अवसाद (डिप्रेशन) अक्सर शारीरिक दर्द, चुप्पी और भूलने की बीमारी जैसे रूप में सामने आता है, जिसे "स्यूडोडिमेंशिया" कहा जाता है और यह सही इलाज से पूरी तरह ठीक हो सकता है।',
      gu: 'વૃદ્ધાવસ્થાના માનસિક સ્વાસ્થ્યમાં "3 Ds" - ડિમેન્શિયા (Dementia), ડેલીરિયમ (Delirium), અને વૃદ્ધાવસ્થાનું ડિપ્રેશન (Depression) વચ્ચેનો ભેદ સમજવો અત્યંત મહત્વપૂર્ણ છે. ડિમેન્શિયા એ મગજની નસો ધીમે ધીમે ક્ષીણ થવાને કારણે થતો રોગ છે, જેમાં તાજેતરની યાદશક્તિ, તાર્કિક વિચારસરણી, પૈસાનો હિસાબ અને દિશાની સમજ વર્ષો સુધી ધીમે ધીમે ઓછી થતી જાય છે અને વડીલ પરનિર્ભર બની જાય છે. તેનાથી વિપરીત, ડેલીરિયમ એ અચાનક થોડા કલાકો કે દિવસોમાં થતો ગંભીર માનસિક ગૂંચવાડો છે; આ એક કટોકટીભરી મેડિકલ ઇમરજન્સી છે જે શરીરમાં પેશાબના ગંભીર ચેપ (UTI), લોહીમાં સોડિયમ ઘટી જવું કે દવાઓની આડઅસરને કારણે મગજ પર સોજો આવવાથી થાય છે. જ્યારે વૃદ્ધાવસ્થાનું ડિપ્રેશન એ સારવારથી સંપૂર્ણ મટી શકે તેવી બીમારી છે, જેમાં વડીલ ભૂલકણા બની ગયા હોય તેવો આભાસ થાય છે.',
    },
    illustrativeExamples: [
      {
        en: 'Mohanlal, a 74-year-old retired school headmaster from Rajkot, had shown subtle, insidious memory changes over the preceding two years: he frequently misplaced his reading glasses, repeatedly asked his daughter-in-law what day of the week it was, and struggled to audit his bank passbook, an activity he had performed flawlessly for forty years. However, he remained cheerful, conversant, and walked to the neighbourhood temple every morning. The clinical crisis unfolded abruptly following a mild, uncomplaining urinary tract infection: over forty-eight hours, Mohanlal deteriorated into severe acute confusion and agitation. At 2:00 AM, he suddenly awoke terrified, screaming that hostile thieves with ropes were climbing onto the bedroom balcony to steal his pension documents. Failing to recognize his son, he accused him of being a dangerous intruder, violently ripped at the window curtains, and threw ceramic glasses across the bedroom. By morning, his alertness fluctuated dramatically—he was alternately stuporous and slurring disjointed syllables, and then abruptly hyper-aroused and combative. His panicked family rushed Mohanlal to the emergency department, fearing an acute ischemic stroke or end-stage insanity. The geriatric psychiatrist conducted an urgent bedside evaluation using the Confusion Assessment Method (CAM), identifying acute Delirium superimposed on an underlying, previously unformulated Mild Dementia (suspected Alzheimer\'s disease). Urgent laboratory diagnostics revealed severe acute pyuria (E. coli UTI) and critical hyponatremia (serum sodium 124 mEq/L), exacerbated by an over-the-counter anticholinergic antihistamine he had taken for nasal congestion. The medical team initiated gentle intravenous hydration, normalized his sodium balance, and administered targeted broad-spectrum intravenous antibiotics, with micro-dose Haloperidol (0.5 mg) temporarily utilized at bedtime to ensure safety. Within five days, the delirium resolved completely: Mohanlal\'s hallucinations vanished, and his warm, oriented baseline temperament returned. Following discharge, formal neurocognitive testing (MoCA score 21/30) and a brain MRI demonstrating bilateral hippocampal volume loss confirmed early-stage Alzheimer\'s Dementia. Managed with a cholinesterase inhibitor (Donepezil 5 mg nightly) alongside caregiver environmental adaptation (routine daylight schedules, contrasting bathroom grab-bars, memory orientation boards), Mohanlal resumed safe temple visits and enjoyed dignified, stable companionship with his grandchildren without recurrence of acute delirium.',
        hi: 'राजकोट के 74 वर्षीय सेवानिवृत्त हेडमास्टर मोहनलाल जी में पिछले दो वर्षों से याददाश्त की हल्की गिरावट देखी जा रही थी: वे अपना चश्मा रखकर भूल जाते थे, दिन में तीन-चार बार तारीख पूछते थे और 40 साल से अपनी बैंक पासबुक का हिसाब खुद रखने वाले मोहनलाल जी को जोड़-घटाव में परेशानी होने लगी थी। फिर भी वे खुश रहते थे और रोज मंदिर जाते थे। लेकिन अचानक एक दिन एक साधारण यूरिनरी ट्रैक्ट इन्फेक्शन (पेशाब के संक्रमण) के बाद स्थिति गंभीर हो गई: मात्र 48 घंटों में मोहनलाल जी अत्यधिक भ्रमित और आक्रामक हो गए। रात को 2 बजे वे चिल्लाते हुए उठे कि खिड़की से चोर उनकी पेंशन की फाइल चुराने आ रहे हैं। उन्होंने अपने बेटे को पहचानने से इनकार कर दिया और उसे अजनबी समझकर कमरे का शीशा तोड़ दिया। सुबह होते-होते वे कभी अर्ध-बेहोशी में चले जाते और कभी अत्यधिक उग्र हो जाते। घबराया हुआ परिवार उन्हें इमरजेंसी ले गया, उन्हें लगा कि लकवा (ब्रेन स्ट्रोक) मार गया है या वे हमेशा के लिए पागल हो गए हैं। अस्पताल के मनोचिकित्सक ने तुरंत जांच की और पाया कि यह डिमेंशिया पर डेलिरियम (Delirium) का गंभीर हमला था। खून की जांच में पता चला कि पेशाब में गंभीर इन्फेक्शन था, खून में सोडियम का स्तर गिरकर 124 हो गया था और जुकाम के लिए ली गई एक एंटीहिस्टामिनिक गोली ने दिमाग पर बुरा असर डाला था। डॉक्टरों ने तुरंत एंटीबायोटिक ड्रिप शुरू की और नमक की कमी पूरी की। पांच दिनों में डेलिरियम पूरी तरह ठीक हो गया, मोहनलाल जी के सारे वहम शांत हो गए और वे अपने पुराने शांत स्वभाव में लौट आए। इसके बाद एमआरआई स्कैन में शुरुआती अल्जाइमर का पता चला, जिसके लिए उन्हें डोनेपेज़िल (Donepezil) दवा शुरू की गई और घर में सुरक्षा के उपाय किए गए। आज वे बिना किसी भ्रम के अपने परिवार के साथ एक शांत और सुरक्षित जीवन जी रहे हैं।',
        gu: 'રાજકોટના ૭૪ વર્ષીય નિવૃત્ત આચાર્ય મોહનલાલભાઈમાં છેલ્લા બે વર્ષથી યાદશક્તિમાં થોડો ઘટાડો દેખાતો હતો: તેઓ ચશ્મા મૂકીને ભૂલી જતા, વારંવાર વાર-તારીખ પૂછતા અને ૪૦ વર્ષ સુધી સાચવેલી બેંક પાસબુકના હિસાબમાં ભૂલો કરતા. છતાં તેઓ ખુશમિજાજ હતા અને રોજ મંદિરે જતા. પરંતુ પેશાબમાં થયેલા એક સામાન્ય ઈન્ફેક્શન પછી અચાનક ૪૮ કલાકમાં તેમની હાલત અત્યંત ગંભીર બની ગઈ. રાત્રે ૨ વાગ્યે તેઓ ભયભીત થઈને બૂમો પાડવા લાગ્યા કે બાલ્કનીમાંથી ચોર મારી પેન્શનની ફાઈલ ચોરવા આવ્યા છે. તેમણે પોતાના સગા દીકરાને પણ ઓળખવાની ના પાડી દીધી અને તેના પર કાચનો ગ્લાસ ફેંક્યો. સવાર સુધીમાં તેઓ ક્યારેક સાવ બેભાન જેવા થઈ જતા તો ક્યારેક અતિશય હિંસક બની જતા. ગભરાયેલો પરિવાર તેમને તાત્કાલિક હોસ્પિટલ લઈ ગયો. સાયકિયાટ્રિસ્ટે તપાસ કરીને જણાવ્યું કે આ ડિમેન્શિયાની જૂની બીમારી પર અચાનક આવેલો ડેલીરિયમ (Delirium) નો હુમલો છે. લેબ રિપોર્ટમાં પેશાબમાં મોટો ચેપ અને લોહીમાં સોડિયમ ઘટીને ૧૨૪ થઈ ગયું હોવાનું બહાર આવ્યું, સાથે શરદી માટે લીધેલી એક સામાન્ય ગોળીની વિપરીત અસર થઈ હતી. હોસ્પિટલમાં IV એન્ટિબાયોટિક્સ અને સોડિયમ સુધારવાની સારવાર આપવામાં આવી. પાંચ દિવસમાં ડેલીરિયમ સંપૂર્ણ મટી ગયું, બધા વહેમ શાંત થઈ ગયા અને મોહનલાલભાઈ પોતાના મૂળ શાંત સ્વભાવમાં પાછા આવી ગયા. ત્યારબાદ MRI દ્વારા શરૂઆતના તબક્કાના અલ્ઝાઈમર ડિમેન્શિયાનું નિદાન કરીને યાદશક્તિ જાળવવાની દવા (Donepezil) શરૂ કરવામાં આવી. આજે તેઓ ઘરના હૂંફાળા વાતાવરણમાં પોતાના પૌત્રો સાથે સલામત અને સન્માનભેર જીવન જીવી રહ્યા છે.',
      },
      {
        en: 'Shantaben, a 78-year-old grandmother in Bhavnagar, developed progressive executive difficulties and apathy following minor subcortical lacunar strokes. She forgot culinary recipes she had cooked for fifty years and frequently wandered out into the apartment corridor at dusk, deeply confused about where she was (sundowning syndrome). A comprehensive geriatric assessment diagnosed Vascular Dementia. The multidisciplinary team instituted strict vascular risk management (antihypertensives, statins), daytime bright light therapy, and clear environmental labeling throughout the home. Caregivers were educated on non-confrontational validation, leading to marked stabilization of evening restlessness and preservation of Shantaben\'s daily functioning.',
        hi: 'भावनगर की 78 वर्षीय शांताबेन में मस्तिष्क के छोटे-छोटे साइलेंट स्ट्रोक के बाद भूलने की बीमारी और उदासीनता बढ़ने लगी। वे पचास साल पुरानी अपनी पसंदीदा रेसिपी भूलने लगीं और शाम ढलते ही बेचैन होकर घर से बाहर निकल जाती थीं (Sundowning)। डॉक्टरों ने वैस्कुलर डिमेंशिया (Vascular Dementia) का निदान किया। ब्लड प्रेशर और कोलेस्ट्रॉल नियंत्रण, दिन में धूप में बैठने और घर में संकेत बोर्ड लगाने जैसे उपायों से उनकी शाम की घबराहट शांत हुई और परिवार ने बिना टकराव के उनकी देखभाल करना सीखा।',
        gu: 'ભાવનગરના ૭૮ વર્ષીય શાંતાબેનમાં મગજના નાના સાયલન્ટ લકવાના હુમલા પછી યાદશક્તિ અને નિર્ણયો લેવામાં નબળાઈ આવી ગઈ. તેઓ વર્ષો જૂની રસોઈની રીતો ભૂલી જવા લાગ્યા અને સાંજ પડતાં જ ગૂંચવાઈને ઘરની બહાર નીકળી જતા (Sundowning). તપાસ બાદ વાસ્ક્યુલર ડિમેન્શિયાનું નિદાન થયું. બ્લડ પ્રેશર નિયંત્રણ, ઘરમાં પૂરતો પ્રકાશ અને સંભાળ રાખવાની સરળ પદ્ધતિઓથી તેમની સાંજની બેચેની શાંત થઈ ગઈ અને તેઓ પરિવાર સાથે સુરક્ષિત રીતે રહેવા લાગ્યા.',
      },
      {
        en: 'Kantibhai, a 71-year-old retired postal clerk in Vadodara, presented with profound psychomotor slowing, persistent vague bodily pain, and severe complaints of memory failure, lamenting that he had "lost his intellect." Comprehensive cognitive testing and brain MRI demonstrated intact hippocampus and executive abilities, identifying late-life depression presenting as "depressive pseudodementia." Initiated on low-dose Escitalopram alongside gentle behavioral activation and social connection at the senior citizen centre, Kantibhai\'s cognitive complaints resolved completely over ten weeks, restoring his sharp memory and cheerful involvement in gardening.',
        hi: 'वडोदरा के 71 वर्षीय सेवानिवृत्त पोस्टल क्लर्क कांतिभाई अत्यधिक सुस्ती, शरीर में अनसुलझे दर्द और याददाश्त खत्म होने की गंभीर शिकायत लेकर आए। उन्हें लगता था कि वे पागल हो रहे हैं। लेकिन विस्तृत जांच और एमआरआई में दिमाग स्वस्थ मिला और पाया गया कि यह बुढ़ापे का अवसाद था जो भूलने की बीमारी जैसा लग रहा था (स्यूडोडिमेंशिया)। एस्सिटालोप्राम दवा और हल्की दिनचर्या शुरू करने के ढाई महीने के भीतर कांतिभाई की याददाश्त और ऊर्जा पूरी तरह लौट आई और वे फिर से बागवानी में रम गए।',
        gu: 'વડોદરાના ૭૧ વર્ષીય નિવૃત્ત ટપાલ ક્લાર્ક કાંતિભાઈ ભારે સુસ્તી, શરીરમાં સતત દુખાવા અને યાદશક્તિ સાવ જતી રહી હોવાની ફરિયાદ સાથે આવ્યા. તેમને વહેમ હતો કે તેમને ડિમેન્શિયા થઈ ગયો છે. પરંતુ વિગતવાર ટેસ્ટ અને MRI માં મગજ સામાન્ય જણાયું અને વૃદ્ધાવસ્થાનું ડિપ્રેશન (સ્યુડોડિમેન્શિયા) હોવાનું બહાર આવ્યું. એસિટોલોપ્રામ દવા અને નિયમિત હળવી પ્રવૃત્તિઓથી અઢી મહિનામાં તેમની યાદશક્તિ પૂર્વવત થઈ ગઈ અને તેઓ ફરીથી બાગકામમાં આનંદ માણવા લાગ્યા.',
      },
    ],
    commonSymptoms: {
      en: [
        'Dementia: Gradual, progressive memory loss (forgetting recent events first, repeating questions)',
        'Difficulty with familiar tasks (handling money, taking medicines, cooking)',
        'Disorientation to time and place, getting lost in familiar surroundings',
        'Behavioral and Psychological Symptoms of Dementia (BPSD): agitation, wandering, suspiciousness',
        'Delirium: Sudden onset (hours/days) of fluctuating confusion, inattention, altered consciousness',
        'Depression in older adults: somatic complaints, memory complaints ("pseudodementia"), apathy rather than overt sadness',
      ],
      hi: [
        'डिमेंशिया (Dementia): हाल की बातें भूलना, एक ही सवाल बार-बार पूछना, रास्ते भूल जाना',
        'रोजमर्रा के कामों में कठिनाई: पैसे गिनना, दवाएं लेना या खाना बनाने में भूल करना',
        'व्यवहार में बदलाव: चिड़चिड़ापन, शक करना (जैसे चोरी का शक), रात को भटकना',
        'डेलिरियम (Delirium): अचानक कुछ घंटों या दिनों में अत्यधिक भ्रमित हो जाना, पहचान न पाना, बेहोशी जैसी स्थिति (यह मेडिकल इमरजेंसी है)',
        'बुजुर्गों में डिप्रेशन: शरीर में दर्द या कमजोरी की शिकायतें, उदासी के बजाय एकांतप्रियता और याददाश्त कमजोर लगने का भ्रम',
      ],
      gu: [
        'ડિમેન્શિયા: તાજેતરની વાતો ભૂલી જવી, એકનો એક સવાલ વારંવાર પૂછવો, પરિચિત રસ્તાઓ ભૂલી જવા',
        'રોજિંદા કામમાં તકલીફ: પૈસાની ગણતરીમાં ભૂલ, દવાઓ લેવાનું ભૂલી જવું',
        'વર્તનમાં ફેરફાર: વહેમ કરવો (જેમ કે વસ્તુઓ ચોરાઈ ગઈ છે), રાત્રે ભટકવું',
        'ડેલીરિયમ: અચાનક થોડા કલાકોમાં ભારે ગૂંચવાડો, ઓળખી ન શકવું (આ તાત્કાલિક મેડિકલ ઇમરજન્સી છે)',
        'વડીલોમાં ડિપ્રેશન: ઉદાસી કરતા શરીરમાં દુખાવાની વધુ ફરિયાદો, એકલવાયા થઈ જવું',
      ],
    },
    dailyLifeImpact: {
      en: 'Late-life neurocognitive and mood syndromes erode autonomy and imperil physical safety. Progressive amnesia and executive dysfunction lead to critical hazards—leaving gas burners ignited, missing vital cardiac or diabetic medications, wandering into traffic, or succumbing to financial fraud. Behavioral and Psychological Symptoms of Dementia (BPSD), such as nighttime sundowning, agitation, wandering, and paranoid accusations against loved ones, inflict catastrophic physical and emotional burnout on family caregivers. In acute delirium, sudden confusion leads to catastrophic falls, hip fractures, and elevated hospital mortality if medical triggers are unrecognized.',
      hi: 'बुजुर्गों में याददाश्त और मानसिक समस्याएं उनकी स्वतंत्रता को छीन लेती हैं और उनकी सुरक्षा को गंभीर खतरे में डाल देती हैं। जरूरी दवाएं भूल जाना, गैस खुली छोड़ देना, सड़क पर रास्ता भूल जाना या धोखेबाजों का शिकार हो जाना बहुत आम खतरे हैं। शाम ढलते ही बेचैनी बढ़ जाना (Sundowning), रात में घर से बाहर निकल जाना और परिवार के सदस्यों पर चोरी का शक करने जैसे व्यवहार देखभाल करने वाले परिजनों को शारीरिक और मानसिक रूप से तोड़ कर रख देते हैं। डेलिरियम की स्थिति में अचानक गिरने, कूल्हे की हड्डी टूटने और अस्पताल में मृत्यु का गंभीर खतरा बढ़ जाता है।',
      gu: 'વૃદ્ધાવસ્થાની આ માનસિક સમસ્યાઓ વડીલની સ્વાયત્તતા છીનવી લે છે અને શારીરિક સલામતી જોખમમાં મૂકે છે. ગેસ સળગતો રહી જવો, હૃદય કે ડાયાબિટીસની અગત્યની દવાઓ લેવાની ભૂલી જવી, રસ્તાઓ ભૂલી જવા કે નાણાકીય છેતરપિંડીનો ભોગ બનવું જેવા ગંભીર જોખમો રહે છે. સાંજ પડતાં જ અજંપો વધવો (Sundowning), રાત્રે ઘરમાંથી નીકળી જવું અને ઘરના માણસો પર ચોરી કે નુકસાનના વહેમ કરવા જેવી બાબતો સંભાળ રાખનાર પરિવારજનોને થકવી નાખે છે. ડેલીરિયમમાં અચાનક ચક્કર આવીને પડી જવું અને ફ્રેક્ચર થવાનું જોખમ ખૂબ વધી જાય છે.',
    },
    causes: {
      en: 'Dementia is driven by progressive neurodegenerative proteinopathies—extracellular beta-amyloid plaques and hyperphosphorylated tau neurofibrillary tangles in Alzheimer\'s disease; alpha-synuclein inclusions in Lewy Body Dementia; or cumulative microvascular ischemic infarcts in Vascular Dementia. Delirium arises from acute metabolic, systemic, or pharmacological insults that disrupt central cholinergic and dopaminergic homeostasis across vulnerable, aging neural circuits—frequent precipitants include urinary tract infections, pneumonia, hyponatremia, urinary retention, fecal impaction, and anticholinergic, sedative, or opioid polypharmacy. Late-life depression is linked to subcortical ischemic vascular white matter lesions ("vascular depression") and severe psychosocial bereavement.',
      hi: 'डिमेंशिया का मुख्य कारण मस्तिष्क में असामान्य प्रोटीनों का जमाव है—जैसे अल्जाइमर में बीटा-एमिलॉयड और टाउ (Tau) प्रोटीन का जमाव, या वैस्कुलर डिमेंशिया में मस्तिष्क की सूक्ष्म रक्त वाहिकाओं में रुकावट। इसके विपरीत, डेलिरियम शरीर की किसी तीव्र बीमारी से दिमाग में होने वाली रासायनिक हलचल है—जैसे यूरिन इन्फेक्शन (UTI), निमोनिया, खून में सोडियम/पोटेशियम का असंतुलन, कब्ज, पेशाब का रुकना, या कई प्रकार की दवाओं (Polypharmacy) की पारस्परिक क्रिया। बुढ़ापे के डिप्रेशन में दिमाग की सूक्ष्म नसों का कमजोर होना (Vascular depression) और जीवनसाथी के निधन जैसी घटनाएं मुख्य कारण होती हैं।',
      gu: 'ડિમેન્શિયાનું મુખ્ય કારણ મગજના કોષોમાં અસામાન્ય પ્રોટીન જમા થવું છે—જેમ કે અલ્ઝાઈમરમાં બીટા-એમાયલોઇડ પ્રોટીન, અથવા વાસ્ક્યુલર ડિમેન્શિયામાં મગજની લોહીની નસોમાં નાના બ્લોકેજ થવા. બીજી બાજુ, ડેલીરિયમ એ શારીરિક બીમારીના લીધે મગજના રસાયણોમાં અચાનક થતી મોટી ઉથલપાથલ છે—જેમ કે પેશાબમાં ગંભીર ચેપ, ન્યુમોનિયા, શરીરમાં સોડિયમની અછત, પેશાબ રોકાઈ જવો, કે ઘણી બધી દવાઓ એકસાથે લેવાથી થતી વિપરીત અસર. વૃદ્ધાવસ્થાના ડિપ્રેશનમાં મગજની નબળી પડતી નસો અને એકલતા જવાબદાર હોય છે.',
    },
    riskFactors: {
      en: [
        'Advanced chronological age (exponentially increasing incidence past age 65)',
        'Cardiovascular and cerebrovascular risk factors (hypertension, diabetes mellitus, hyperlipidemia, previous stroke/TIA)',
        'Polypharmacy, particularly regimens involving medications with high central anticholinergic or sedative burden',
        'Sensory deprivation (uncorrected bilateral hearing loss or visual impairment)',
        'Apolipoprotein E epsilon 4 (APOE-ε4) genetic carrier status conferring heightened risk for Alzheimer\'s pathology',
      ],
      hi: [
        'बढ़ती उम्र (65 वर्ष के बाद खतरा तेजी से बढ़ता है)',
        'ब्लड प्रेशर, अनियंत्रित डायबिटीज, कोलेस्ट्रॉल या पूर्व में हुआ हल्का ब्रेन स्ट्रोक',
        'एक साथ 5 से अधिक दवाएं चलना (Polypharmacy), विशेषकर नींद या एलर्जी की तेज दवाएं',
        'कम सुनना या कम दिखना जिसका चश्मे या हियरिंग एड से इलाज न कराया गया हो',
        'आनुवंशिक संवेदनशीलता (APOE-ε4 जीन का होना)',
      ],
      gu: [
        '૬૫ વર્ષથી વધુ ઉંમર (ઉંમર વધવાની સાથે આનું જોખમ વધે છે)',
        'હાઈ બ્લડ પ્રેશર, ડાયાબિટીસ, કોલેસ્ટ્રોલ કે લકવાનો અગાઉનો હુમલો',
        'ઘણી બધી દવાઓ એકસાથે લેવી, ખાસ કરીને ઊંઘની કે શરદીની જૂની દવાઓ',
        'ઓછું સંભળાવું કે ઓછું દેખાવું જેની યોગ્ય સારવાર ન કરાવી હોય',
        'પરિવારમાં અલ્ઝાઈમરનો આનુવંશિક ઇતિહાસ હોવો',
      ],
    },
    psychiatricAssessment: {
      en: 'A meticulous multidimensional geriatric evaluation. The clinician employs standardized cognitive bedside instruments, primarily the Montreal Cognitive Assessment (MoCA), Mini-Mental State Examination (MMSE), and the Confusion Assessment Method (CAM) to rigorously confirm or exclude acute Delirium. Formal mood assessment is conducted using the Geriatric Depression Scale (GDS-15) to detect depressive pseudodementia. Diagnostic investigations include comprehensive metabolic panels, serum electrolytes, renal and hepatic profiles, thyroid function (TSH), vitamin B12 and folate levels, urinalysis with culture, and contrast-enhanced brain MRI (to quantify medial temporal/hippocampal atrophy, ischemic leukoaraiosis, normal pressure hydrocephalus, or chronic subdural hematomas). A complete medication reconciliation is executed to identify and eliminate high-anticholinergic-burden drugs.',
      hi: 'मनोचिकित्सक द्वारा एक विस्तृत और बहुआयामी जांच की जाती है। सबसे पहले MoCA और MMSE जैसे वैज्ञानिक परीक्षणों से याददाश्त और बुद्धि का स्तर मापा जाता है, तथा CAM विधि से डेलिरियम की आपातकालीन स्थिति की पुष्टि की जाती है। अवसाद जांचने के लिए GDS-15 स्केल का उपयोग किया जाता है ताकि "स्यूडोडिमेंशिया" को पकड़ा जा सके। प्रयोगशाला जांचों में रक्त सीरम इलेक्ट्रोलाइट्स (सोडियम, पोटेशियम), किडनी और लिवर फंक्शन, थायरॉयड (TSH), विटामिन B12, और यूरिन कल्चर कराया जाता है। मस्तिष्क का एमआरआई (MRI) स्कैन करके हिप्पोकैम्पस का सिकुड़ना, रक्तस्राव या अंदरूनी पानी भरने (Hydrocephalus) की जांच की जाती है। साथ ही मरीज की सभी पुरानी दवाओं की समीक्षा करके हानिकारक दवाओं को बंद किया जाता है।',
      gu: 'મનોચિકિત્સક દ્વારા અત્યંત બારીકાઈથી વડીલની સંપૂર્ણ તપાસ થાય છે. MoCA અને MMSE ટેસ્ટ વડે યાદશક્તિનું સ્તર મપાય છે અને CAM પદ્ધતિથી ડેલીરિયમ છે કે નહીં તે તાત્કાલિક નક્કી કરાય છે. ડિપ્રેશન ચકાસવા Geriatric Depression Scale (GDS-15) નો ઉપયોગ થાય છે. લેબોરેટરી તપાસમાં લોહીમાં સોડિયમ/પોટેશિયમ, કિડની-લિવર રિપોર્ટ, વિટામિન B12, થાઇરોઇડ અને પેશાબનું કલ્ચર કરવામાં આવે છે. મગજનો MRI સ્કેન કરીને મગજની નસો સંકોચાઈ ગઈ છે કે અંદર કોઈ ગાંઠ/રક્તસ્ત્રાવ છે તે તપાસાય છે. દર્દીની તમામ ચાલુ દવાઓનું લિસ્ટ ચકાસીને મગજને નુકસાન કરતી દવાઓ બંધ કરવામાં આવે છે.',
    },
    diagnosisExplanation: {
      en: 'Under DSM-5-TR, Major Neurocognitive Disorder (Dementia) requires evidence of significant cognitive decline from a previous level of performance in one or more cognitive domains (complex attention, executive function, learning and memory, language, perceptual-motor, or social cognition) based on clinical concern and standardized neuropsychological testing; these cognitive deficits interfere with independence in everyday activities (at minimum requiring assistance with complex instrumental activities of daily living such as paying bills or managing medications); the deficits do not occur exclusively in the context of a delirium and are not better explained by another mental disorder. In contrast, Delirium is diagnosed when there is a disturbance in attention (reduced ability to direct, focus, sustain, and shift attention) and awareness, developing over a short period of time (usually hours to a few days) and fluctuating in severity throughout the day, representing an acute direct physiological consequence of another medical condition or substance intoxication/withdrawal. In ICD-11, these are classified under 6D80 (Dementias) and 6D70 (Delirium).',
      hi: 'DSM-5-TR के अनुसार मेजर न्यूरोकॉग्निटिव डिसऑर्डर (डिमेंशिया) के निदान के लिए जरूरी है कि व्यक्ति की पिछली क्षमताओं की तुलना में कम से कम एक मानसिक क्षेत्र (याददाश्त, ध्यान, भाषा, निर्णय क्षमता या सामाजिक व्यवहार) में महत्वपूर्ण गिरावट आई हो। यह गिरावट इतनी अधिक होनी चाहिए कि वह व्यक्ति के दैनिक जीवन के कार्यों (जैसे दवाएं लेना, पैसे का हिसाब रखना, या कपड़े पहनना) में बाधा डाले और व्यक्ति को दूसरों की मदद की आवश्यकता पड़े। यह केवल डेलिरियम के दौरान नहीं होना चाहिए। इसके विपरीत, डेलिरियम का निदान तब किया जाता है जब ध्यान केंद्रित करने और वातावरण के प्रति जागरूकता में अचानक (कुछ घंटों या दिनों में) तीव्र गिरावट आए, दिनभर में स्थिति में भारी उतार-चढ़ाव हो, और यह किसी शारीरिक बीमारी या दवा की प्रतिक्रिया का प्रत्यक्ष परिणाम हो। ICD-11 में इनके कोड 6D80 (डिमेंशिया) और 6D70 (डेलिरियम) हैं।',
      gu: 'DSM-5-TR મુજબ મેજર ન્યુરોકોગ્નિટિવ ડિસઓર્ડર (ડિમેન્શિયા) ના નિદાન માટે વ્યક્તિની અગાઉની ક્ષમતાઓની તુલનામાં યાદશક્તિ, ધ્યાન, ભાષા કે વ્યવહારિક નિર્ણયોમાં મોટો ઘટાડો થયેલો હોવો જોઈએ. આ ક્ષતિ એટલી ગંભીર હોવી જોઈએ કે વડીલ પોતાના રોજિંદા વ્યવહારિક કામો (જેમ કે હિસાબ કરવો, દવાઓ સાચવવી કે બહાર જવું) માટે બીજા પર નિર્ભર થઈ જાય. આ લક્ષણો માત્ર ડેલીરિયમ વખતે જ ન હોવા જોઈએ. જ્યારે ડેલીરિયમનું નિદાન ત્યારે થાય છે જ્યારે અચાનક થોડા કલાકો કે દિવસોમાં ધ્યાન કેન્દ્રિત કરવાની શક્તિ ખોરવાઈ જાય, દિવસ દરમિયાન વર્તનમાં ઝડપી ફેરફારો થાય અને તે કોઈ શારીરિક ચેપ, સોડિયમની ખામી કે દવાઓની આડઅસરને કારણે ઉદ્ભવ્યું હોય. ICD-11 માં આના કોડ 6D80 અને 6D70 છે.',
    },
    differentialConsiderations: {
      en: 'Critical differentials across the geriatric spectrum: Delirium (acute, fluctuating medical emergency); Alzheimer\'s Disease; Vascular Dementia; Dementia with Lewy Bodies (characterized by spontaneous visual hallucinations, REM sleep behavior disorder, and parkinsonism with severe neuroleptic sensitivity); Frontotemporal Dementia (prominent early behavioral/personality disinhibition or primary progressive aphasia); Late-Life Major Depressive Disorder with Pseudodementia; Normal Pressure Hydrocephalus (triad of gait ataxia, urinary incontinence, and dementia); Chronic Subdural Hematoma; Severe Hypothyroidism; and Vitamin B12 deficiency myeloneuropathy.',
      hi: 'इसे डेलिरियम (आपातकालीन शारीरिक स्थिति); अल्जाइमर रोग; वैस्कुलर डिमेंशिया; लेवी बॉडी डिमेंशिया (जिसमें स्पष्ट दृश्य मतिभ्रम और पार्किंसन जैसे लक्षण होते हैं); फ्रंटोटेंपोरल डिमेंशिया (जिसमें सामाजिक व्यवहार और व्यक्तित्व में बड़ा बदलाव आता है); बुढ़ापे का गंभीर डिप्रेशन (स्यूडोडिमेंशिया); नॉर्मल प्रेशर हाइड्रोसिफ़लस (चलने में लड़खड़ाहट, पेशाब न रुकना और भूलना); सिर में अंदरूनी पुराना रक्तस्राव (Subdural hematoma); और विटामिन B12 की गंभीर कमी से अलग पहचानना आवश्यक है।',
      gu: 'આને ડેલીરિયમ (ઇમરજન્સી શારીરિક સમસ્યા); અલ્ઝાઈમર રોગ; વાસ્ક્યુલર ડિમેન્શિયા; લેવી બોડી ડિમેન્શિયા (જેમાં આભાસ થવા અને પાર્કિન્સન જેવા ધ્રુજારીના લક્ષણો હોય છે); ફ્રન્ટોટેમ્પોરલ ડિમેન્શિયા (સ્વભાવ અને સામાજિક વર્તનમાં મોટો ફેરફાર); વૃદ્ધાવસ્થાનું ડિપ્રેશન (સ્યુડોડિમેન્શિયા); નોર્મલ પ્રેશર હાઈડ્રોસેફાલસ (ચાલવામાં તકલીફ અને પેશાબ છૂટી જવો); માથામાં જૂનો રક્તસ્ત્રાવ; અને વિટામિન B12 ની ઊણપથી અલગ તારવવું જરૂરી છે.',
    },
    treatment: {
      psychoeducation: {
        en: 'Educating families that memory loss and forgetfulness are not the patient\'s fault, and teaching non-confrontational communication strategies.',
        hi: 'परिवार को यह समझाना कि बुजुर्ग जानबूझकर नहीं भूल रहे हैं, उनसे बहस न करें और प्यार व धैर्य से पेश आएं।',
        gu: 'પરિવારને સમજાવવું કે વડીલ જાણીજોઈને ભૂલતા નથી, તેમની સાથે જીભાજોડી ન કરવી અને પ્રેમથી સાચવવા.',
      },
      lifestyleSupport: {
        en: 'Consistent daily schedules, safe home environment (nightlights, grab bars, removing rugs), memory aids (calendars, clocks).',
        hi: 'घर में पर्याप्त रोशनी रखना, फिसलने से बचाना, बाथरूम में रेलिंग लगवाना और दिनचर्या को शांत व सरल रखना।',
        gu: 'ઘરમાં સારી લાઈટ રાખવી, બાથરૂમમાં ટેકાના હેન્ડલ લગાવવા અને સરળ શાંત દિનચર્યા રાખવી.',
      },
      psychotherapy: {
        en: 'Reminiscence therapy, gentle validation therapy, and supportive cognitive stimulation.',
        hi: 'रेमिनिसेंस थेरेपी (पुरानी सुखद यादों पर बात करना) और संगीत या हल्की बातचीत।',
        gu: 'જૂની સારી યાદો તાજી કરાવવી, હળવું સંગીત અને પ્રેમાળ વાર્તાલાપ.',
      },
      medications: {
        en: 'Cognitive enhancers (cholinesterase inhibitors, memantine) may slow cognitive decline in Alzheimer\'s. Low-dose medications for severe agitation only when non-pharmacological methods fail.',
        hi: 'अल्जाइमर के लिए याददाश्त धीमी करने वाली दवाएं (जैसे Donapezil)। बेचैनी के लिए दवाएं बहुत सावधानी से और कम मात्रा में दी जाती हैं।',
        gu: 'અલ્ઝાઈમરમાં યાદશક્તિ જાળવી રાખવાની દવાઓ. અતિશય અજંપા માટે ખૂબ ઓછી માત્રામાં સાવચેતીપૂર્વક દવાઓ.',
      },
      familySocialInterventions: {
        en: 'Caregiver respite care, caregiver support groups, and planning long-term care needs.',
        hi: 'देखभाल करने वालों को खुद के आराम के लिए समय निकालना और परिवार में जिम्मेदारियों का बंटवारा करना।',
        gu: 'સંભાળ રાખનાર વ્યક્તિએ પણ પોતાના આરામનું ધ્યાન રાખવું અને કામ વહેંચી લેવું.',
      },
    },
    treatmentGoals: {
      en: 'Preserving quality of life, maximizing remaining cognitive functioning, ensuring physical safety, and preventing caregiver burnout.',
      hi: 'बुजुर्ग के जीवन की गुणवत्ता बनाए रखना, उनकी सुरक्षा सुनिश्चित करना और परिवार को तनाव से बचाना।',
      gu: 'વડીલનું જીવન શાંતિપૂર્ણ રહે, તેમની સલામતી જળવાય અને પરિવારજનો થાકી ન જાય.',
    },
    recoveryOutlook: {
      en: 'The clinical prognosis across late-life neurocognitive and affective disorders depends fundamentally on rapid diagnostic differentiation. Delirium is an acutely treatable, highly reversible neuropsychiatric emergency; prompt resolution of underlying medical triggers (such as occult urinary sepsis, pulmonary infections, or electrolyte imbalances) restores pre-morbid cognitive baseline in 80% to 90% of cases, provided sustained hypoxic or septic damage is avoided. Late-Life Depression likewise demonstrates an excellent recovery trajectory, with up to 70% of elderly patients achieving full clinical remission through geriatric-tailored pharmacotherapy (SSRIs/SNRIs) and supportive behavioral activation, reversing subjective "pseudodementia" completely. While neurodegenerative dementias (such as Alzheimer\'s Disease) remain progressive conditions without a biological cure, comprehensive multidimensional care—encompassing cholinesterase inhibitors (Donepezil, Rivastigmine), NMDA receptor antagonists (Memantine), strict vascular risk control, cognitive stimulation, and structured caregiver psychoeducation—meaningfully slows the rate of functional decline, dramatically mitigates behavioral crises, prevents premature institutionalization, and preserves individual dignity and quality of life for many years.',
      hi: 'वृद्धावस्था की मानसिक और संज्ञानात्मक समस्याओं का भविष्य सही और समय पर किए गए सटीक निदान पर निर्भर करता है। डेलिरियम (Delirium) एक आपातकालीन लेकिन पूरी तरह ठीक होने वाली स्थिति है; यदि अंतर्निहित शारीरिक कारणों (जैसे यूरिन इन्फेक्शन, निमोनिया या सोडियम की कमी) का समय पर इलाज कर दिया जाए, तो 80% से 90% बुजुर्ग कुछ ही दिनों में पूरी तरह ठीक होकर अपने पुराने मानसिक स्तर पर लौट आते हैं। इसी प्रकार, बुढ़ापे का अवसाद (डिप्रेशन) भी सही दवाओं (SSRIs) और पारिवारिक सहयोग से 70% मामलों में पूरी तरह ठीक हो जाता है, जिससे याददाश्त की कमजोरी ("स्यूडोडिमेंशिया") भी गायब हो जाती है। यद्यपि अल्जाइमर जैसे डिमेंशिया रोग लगातार बढ़ने वाले होते हैं और इनका कोई पूर्ण निवारक इलाज नहीं है, फिर भी आधुनिक दवाओं (जैसे डोनेपेज़िल, मेमेंटाइन), रक्तचाप-शुगर के कड़े नियंत्रण, मस्तिष्क को सक्रिय रखने वाली गतिविधियों और परिजनों को सही प्रशिक्षण देने से बीमारी के बढ़ने की गति काफी धीमी हो जाती है। इससे बुजुर्ग लंबे समय तक सम्मानजनक, शांत और परिवार के बीच जुड़ाव भरा जीवन जी पाते हैं।',
      gu: 'વૃદ્ધાવસ્થાના ન્યુરોકોગ્નિટિવ અને માનસિક રોગોનું પરિણામ સમયસર અને સચોટ નિદાન પર આધારિત છે. ડેલીરિયમ (Delirium) એ અચાનક થતી પરંતુ યોગ્ય સારવારથી સંપૂર્ણ સાજી થતી સ્થિતિ છે; જો પેશાબના ચેપ કે સોડિયમની ખામી જેવા મૂળ શારીરિક કારણોનું તાત્કાલિક નિદાન થાય, તો ૮૦% થી ૯૦% દર્દીઓ થોડા જ દિવસોમાં સંપૂર્ણપણે સામાન્ય થઈ જાય છે. તેવી જ રીતે, વૃદ્ધાવસ્થાનું ડિપ્રેશન પણ યોગ્ય દવાઓ અને હૂંફાળા પારિવારિક વાતાવરણથી ૭૦% થી વધુ કિસ્સાઓમાં સાજું થઈ જાય છે, જેથી માનસિક નબળાઈ (સ્યુડોડિમેન્શિયા) પણ ગાયબ થઈ જાય છે. જોકે અલ્ઝાઈમર જેવા ડિમેન્શિયાના રોગો કાયમી ધોરણે ધીમે ધીમે વધે છે અને તેનો સંપૂર્ણ ઈલાજ હજી ઉપલબ્ધ નથી, છતાં આધુનિક દવાઓ (Donepezil, Memantine), બીપી-ડાયાબિટીસનું કડક નિયંત્રણ અને સંભાળ રાખનાર પરિવારને યોગ્ય તાલીમ આપવાથી યાદશક્તિ ઘટવાની ગતિ ઘણી ધીમી પાડી શકાય છે, જેનાથી વડીલ વર્ષો સુધી સન્માનભેર અને પરિવારની વચ્ચે શાંતિપૂર્ણ જીવન જીવી શકે છે.',
    },
    relapsePrevention: {
      en: 'Regular hydration, monitoring for subtle infections, prompt treatment of physical illness, and frequent review of medications.',
      hi: 'पर्याप्त पानी पिलाना, पेशाब में संक्रमण पर तुरंत ध्यान देना और समय-समय पर डॉक्टर को दिखाना।',
      gu: 'પૂરતું પાણી પીવડાવવું, પેશાબના ઈન્ફેક્શનનું તાત્કાલિક નિદાન અને નિયમિત ચેકઅપ.',
    },
    urgentWarningSigns: {
      en: 'Sudden change in alertness or confusion over hours, fever with delirium, refusal to eat or drink, or sudden weakness.',
      hi: 'अचानक कुछ ही घंटों में अत्यधिक भ्रम या बेहोशी जैसी स्थिति, तेज बुखार के साथ प्रलाप (Delirium), या अचानक कमजोरी।',
      gu: 'અચાનક થોડા કલાકોમાં ભારે ગૂંચવાડો, તાવ સાથે બકબક કરવી કે અન્ન-જળ સાવ બંધ કરી દેવું.',
    },
    mythsVsFacts: [
      {
        myth: {
          en: 'Severe memory loss and confusion are just a normal part of getting old that nothing can be done about.',
          hi: 'गंभीर याददाश्त जाना और भ्रमित होना बुढ़ापे की सामान्य बात है और इसका कुछ नहीं हो सकता।',
          gu: 'ભારે ભૂલકણાપણું અને વહેમ એ તો ઘડપણની સામાન્ય વાત છે, તેમાં કશું ન થઈ શકે.',
        },
        fact: {
          en: 'Severe cognitive impairment is not normal aging; it is a symptom of a medical illness requiring prompt evaluation and support.',
          hi: 'गंभीर याददाश्त जाना सामान्य बुढ़ापा नहीं है; यह एक बीमारी का संकेत है जिसकी तुरंत जांच और सही देखभाल आवश्यक है।',
          gu: 'ગંભીર ભૂલકણાપણું એ સામાન્ય ઘડપણ નથી; તે એક બીમારીનું લક્ષણ છે જેની યોગ્ય તપાસ અને સારવાર જરૂરી છે.',
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'What is the immediate difference between Delirium and Dementia?',
          hi: 'डेलिरियम (Delirium) और डिमेंशिया (Dementia) में मुख्य अंतर क्या है?',
          gu: 'ડેલીરિયમ અને ડિમેન્શિયા વચ્ચે મુખ્ય તફાવત શું છે?',
        },
        answer: {
          en: 'Delirium starts suddenly over hours or days, fluctuates wildly, and is usually caused by an acute physical illness (like a urine infection or salt imbalance) — it is an urgent medical emergency. Dementia develops very slowly over months and years.',
          hi: 'डेलिरियम अचानक कुछ ही घंटों या दिनों में आता है और किसी शारीरिक बीमारी (जैसे यूरिन इन्फेक्शन या नमक की कमी) के कारण होता है। यह इमरजेंसी है। डिमेंशिया कई सालों में धीरे-धीरे बढ़ता है।',
          gu: 'ડેલીરિયમ અચાનક થોડા કલાકો કે દિવસોમાં થાય છે અને શારીરિક બીમારીથી થાય છે, જે ઇમરજન્સી છે. ડિમેન્શિયા વર્ષો સુધી ધીમે ધીમે વધે છે.',
        },
      },
    ],
    evidenceHighlights: [
      {
        fact: {
          en: 'Systematic clinical reviews demonstrate acute delirium is reversible in up to 80–90% of cases when underlying physical precipitants (infections, metabolic disturbances, offending drugs) are identified and corrected promptly.',
          hi: 'चिकित्सीय अध्ययनों से सिद्ध है कि यदि समय पर शारीरिक कारणों (जैसे यूरिन इन्फेक्शन या नमक की कमी) का इलाज किया जाए, तो 80 से 90% मामलों में डेलिरियम पूरी तरह ठीक हो जाता है।',
          gu: 'તબીબી સંશોધનો દર્શાવે છે કે સમયસર શારીરિક કારણો (ચેપ અથવા સોડિયમની ખામી) શોધીને સારવાર કરવાથી ૮૦ થી ૯૦% કિસ્સાઓમાં ડેલીરિયમ સંપૂર્ણપણે મટી શકે છે.',
        },
        citationRef: 'Lancet Review on Delirium in Elderly',
      },
      {
        fact: {
          en: 'Cochrane systematic reviews confirm acetylcholinesterase inhibitors (Donepezil, Rivastigmine) produce statistically significant stabilization of cognitive faculties and activities of daily living in mild to moderate Alzheimer\'s dementia.',
          hi: 'कोक्रेन समीक्षाओं से प्रमाणित है कि डोनेपेज़िल और रिवास्टिग्मीन जैसी दवाएं शुरुआती अल्जाइमर डिमेंशिया में याददाश्त और रोजमर्रा के कार्यों को स्थिर बनाए रखने में महत्वपूर्ण भूमिका निभाती हैं।',
          gu: 'કોક્રેન રિવ્યૂ પુષ્ટિ કરે છે કે ડોનેપેઝિલ અને રિવાસ્ટિગ્મિન જેવી દવાઓ શરૂઆતના અલ્ઝાઇમર ડિમેન્શિયામાં યાદશક્તિ જાળવવામાં અને પરનિર્ભરતા ઘટાડવામાં મદદ કરે છે.',
        },
        citationRef: 'Cochrane Database Systematic Reviews',
      },
      {
        fact: {
          en: 'Clinical trials show late-life depression presenting with subjective memory loss ("depressive pseudodementia") achieves high cognitive recovery rates with targeted geriatric antidepressant regimens and behavioral activation.',
          hi: 'क्लिनिकल अध्ययनों के अनुसार, बुढ़ापे के अवसाद के कारण होने वाली भूलने की बीमारी (स्यूडोडिमेंशिया) सही एंटीडिप्रेसेंट दवाओं और सक्रिय दिनचर्या से पूरी तरह ठीक हो जाती है।',
          gu: 'ક્લિનિકલ ટ્રાયલ્સ દર્શાવે છે કે વૃદ્ધાવસ્થાના ડિપ્રેશનને લીધે થતી યાદશક્તિની ક્ષતિ યોગ્ય સારવાર અને પ્રવૃત્તિઓથી સંપૂર્ણ રીતે પાછી મેળવી શકાય છે.',
        },
        citationRef: 'Lancet Late-Life Depression Review',
      },
      {
        fact: {
          en: 'Multicomponent non-pharmacological interventions (reorientation, early mobilization, hydration, and sleep-wake cycle normalization) reduce hospital delirium incidence by over 30–40%.',
          hi: 'अध्ययनों से प्रमाणित है कि गैर-दवा उपाय (जैसे समय की याद दिलाना, पानी की पूर्ति, दिन की धूप और रात की शांत नींद) अस्पतालों में डेलिरियम के खतरे को 30 से 40% तक कम कर देते हैं।',
          gu: 'સંશોધનો સાબિત કરે છે કે બિન-દવા ઉપાયો (સમય-સ્થળનું ધ્યાન દોરવું, પૂરતું પ્રવાહી, દિવસનો તડકો અને શાંત ઊંઘ) હોસ્પિટલમાં ડેલીરિયમનું જોખમ ૩૦ થી ૪૦% ઘટાડે છે.',
        },
        citationRef: 'NICE Guideline NG97',
      },
    ],
    references: [
      {
        citation: 'American Psychiatric Association. Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). Washington, DC: APA, 2022.',
        source: 'APA DSM-5-TR',
        year: '2022',
      },
      {
        citation: 'National Institute for Health and Care Excellence (NICE). Dementia: assessment, management and support: NICE guideline [NG97]. London: NICE, 2018.',
        source: 'NICE Guidelines',
        year: '2018',
      },
      {
        citation: 'Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922.',
        source: 'Lancet Review on Delirium in Elderly',
        year: '2014',
      },
      {
        citation: 'Birks JS, Harvey RJ. Donepezil for dementia due to Alzheimer\'s disease. Cochrane Database Syst Rev. 2018;(6):CD001190.',
        source: 'Cochrane Database Systematic Reviews',
        year: '2018',
      },
      {
        citation: 'Alexopoulos GS. Late-life depression. Lancet. 2005;365(9475):1961-1970.',
        source: 'Lancet Late-Life Depression Review',
        year: '2005',
      },
      {
        citation: 'World Health Organization. Guidelines on Risk Reduction of Cognitive Decline and Dementia. Geneva: WHO, 2019.',
        source: 'World Health Organization',
        year: '2019',
      },
    ],
    lastReviewed: '2026-09',
    // TODO(video): Geriatric mental health: Delirium vs Dementia distinction and late-life depression
    youtubeVideoId: undefined,
    relatedIds: ['depression', 'family-psychoeducation', 'antipsychotics'],
    relatedContent: {
      conditionSlugs: ['major-depressive-disorder', 'persistent-depressive-disorder-dysthymia'],
      medicationIds: ['antipsychotics', 'antidepressants'],
      treatmentIds: ['supportive', 'behavioral-activation', 'ect'],
    },
  },
];

export const conditionsData: Condition[] = [
  ...baseConditionsData,
  ...newConditionsData,
  ...newConditionsBatch2,
  ...newConditionsBatch3,
  ...newConditionsBatch4,
];
