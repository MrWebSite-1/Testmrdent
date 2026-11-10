/* ===== SOZLAMALAR: mijozga qarab faqat shu yerni o'zgartiring ===== */
const CONFIG={
brand:"Mister Dent",
phone:"+998 95 170 66 69",
logo:"images/logo.jpg",
address:"Toshkent, Yunusobod tumani, Tuzel-2, 12B-uy",
hours:"Yozilish: Telegram yoki Instagram Direct orqali",
telegram:"misterdent",
heroTitle:"Vinir, sirkoniy, implant va breketlar — bir klinikada",
heroText:"Estetika va funksiya uyg‘unligi. Tajribasi 17 yildan oshgan shifokorlar, shablon bo‘yicha implantatsiya va VNChS gnatologiya.",
menu:[["Xizmatlar","#services"],["Mutaxassislar","#doctors"],["Narxlar","#price"],["Ishlarimiz","#clients"],["Aloqa","#contact"]],
services:[
{k:"konsultatsiya",t:"Konsultatsiya va ko‘rik",d:"Tashxis va davolash rejasi",ic:"search",items:["Shifokor ko‘rigi","3D rentgen tasvir","Bir martalik to‘plam"],
 intro:"Reja asosidagi qabul: shifokor tish va milk holatini tekshiradi, uy gigienasini baholaydi va davolash hamda parvarish bo‘yicha tavsiya beradi.",who:"Hamma uchun, og‘riq bo‘lmasa ham yiliga 1–2 marta. Tish og‘riganda, sezgirlik, milk qonashi yoki og‘rig‘i, tishlar qimirlashi va jarohatda rejadan tashqari kelish kerak.",
 prices:[["Konsultatsiya va ko‘rik","120 000 so‘m"],["3D ko‘rik (rentgen tasvir)","150 000 so‘m"],["Bir martalik to‘plam","150 000 so‘m"]]},
{k:"terapiya",t:"Terapevtik davolash",d:"Karies, pulpit, plomba",ic:"tooth",items:["Pulpit va periodontit davolash","Kanal ishlovi","Plombalash"],
 intro:"Tishni saqlab qolishga qaratilgan davolash: pulpit va periodontit, ildiz kanallari bilan ishlash, zamonaviy materiallardan plomba qo‘yish va tish emalini tiklash.",who:"Tish og‘rig‘i, teshik, sovuq-issiqqa sezgirlik, tishning singan yoki yemirilgan joyi bo‘lganda.",
 prices:[["Pulpit, periodontit davolash: frontal tishlar","115 000 so‘m"],["Pulpit, periodontit davolash: premolyarlar","150 000 so‘m"],["Pulpit, periodontit davolash: molyarlar","195 000 so‘m"],["Kanalni vaqtincha plombalash (kalsiyli pasta)","100 000 so‘m"],["Kanalni qayta ochish: bir ildizli tish","115 000 so‘m"],["Kanalni qayta ochish: ikki ildizli tish","180 000 so‘m"],["Kanalni qayta ochish: uch ildizli tish","245 000 so‘m"],["Kanalni dori bilan ishlash: bir ildizli tish","45 000 so‘m"],["Kanalni dori bilan ishlash: ikki ildizli tish","60 000 so‘m"],["Kanaldan shtiftni olib tashlash","90 000 so‘m"],["Yorug‘likda qotadigan plomba (ESTELITE, Yaponiya)","255 000 so‘m"],["Yorug‘likda qotadigan plomba (HERCULITE, Germaniya)","255 000 so‘m"],["Kichik nuqson va gipoplaziya","155 000 so‘m"],["O‘rta nuqson","185 000 so‘m"],["Katta nuqson","200 000 so‘m"],["Vaqtincha plomba","20 000 so‘m"],["Ftorlak bilan qoplash (giperesteziya)","50 000 so‘m"]]},
{k:"ortopediya",t:"Ortopedik davolash",d:"Koronkalar va protezlar",ic:"crown",items:["Metallokeramika va sirkoniy","Yechiladigan protezlar","Vkladkalar"],
 intro:"Yo‘qolgan yoki shikastlangan tishlarni tiklash: koronkalar, vkladkalar, vinirlar hamda yechiladigan va yechilmaydigan protezlar. Tishsizlik vaqt o‘tishi bilan chaynash va ko‘rinishni buzadi, shuning uchun tiklash muhim.",who:"Tish yo‘qolganda, katta nuqson yoki plomba saqlay olmaydigan holatda.",
 prices:[["Shtamplangan koronkani olib tashlash","40 000 so‘m"],["Metallokeramik koronkani olib tashlash","60 000 so‘m"],["Butun quyma koronkani olib tashlash","100 000 so‘m"],["Vaqtinchalik plastmassa koronka","80 000 so‘m"],["Metall vkladkalar","320 000 so‘m"],["Butun quyma koronka","420 000 so‘m"],["Metallokeramika (standart, Xitoy massasi)","520 000 so‘m"],["Metallokeramika (eksklyuziv, nemis massasi)","750 000 so‘m"],["Sirkoniy oksidi koronka (HT-PLUS ST)","920 000 so‘m"],["Sirkoniy oksidi koronka (3D-PRO ST)","1 400 000 so‘m"],["Butunlay keramik koronka","2 500 000 so‘m"],["Vinirlar","2 500 000 so‘m"],["Plastinkali mikro-protez (1–2 tish)","480 000 so‘m"],["Plastinkali protez (3D)","1 400 000 so‘m"],["Bugel protez","4 800 000 so‘m"]]},
{k:"implant",t:"Jarrohlik va implantlar",d:"Tish olish va implantatsiya",ic:"implant",items:["Oddiy tish olish","Aql tishini olish","Implant (OSSTEM, Neo Biotech)"],
 intro:"Tish olish, murakkab holatlar uchun jarrohlik va yo‘qolgan tish o‘rniga implant qo‘yish. Implantning ishlab chiqaruvchi tomonidan beriladigan kafolati bor.",who:"Tish saqlab bo‘lmaydigan darajada shikastlanganda, aql tishi yallig‘langanda yoki tish yo‘qolganda.",
 prices:[["Oddiy tish olish","120 000 so‘m"],["Yarim retinirlangan, distopik va aql tishlarini olish","250 000 so‘m"],["Sakkizinchi tish kapyushonini olib tashlash operatsiyasi","63 000 so‘m"],["Periostit davolash","70 000 so‘m"],["Implant, Janubiy Koreya (Neo Biotech)","2 850 000 so‘m"],["Implant OSSTEM (Neo Biotech)","3 500 000 so‘m"]]},
{k:"parodontologiya",t:"Parodontologiya",d:"Milk va tish atrofi to‘qimalari",ic:"drop",items:["Skayler bilan tozalash","Milk cho‘ntagi kyuretaji","Dori bilan ishlov"],
 intro:"Tish atrofi to‘qimalarini davolash. Bunday kasalliklar uzoq vaqt sezilmaydi, lekin o‘z vaqtida davolanmasa tishlar qimirlab, yo‘qolishiga olib keladi.",who:"Milk qonaganda, og‘iz hidi, tish toshi va tishlar qimirlaganda.",
 prices:[["Skayler bilan professional tozalash va qum bilan jilolash","400 000 so‘m"],["Parodontal cho‘ntak kyuretaji (1 tish sohasi)","200 000 so‘m"],["Linkomitsin","100 000 so‘m"],["Askorbin kislotasi","100 000 so‘m"],["Milk cho‘ntaklariga dori bilan ishlov (1 qabulda)","150 000 so‘m"]]},
{k:"oqartirish",t:"Estetik stomatologiya",d:"Tabassumni yorqinlashtirish",ic:"spark",items:["Professional oqartirish","1 seans, barcha tishlar"],
 intro:"Professional oqartirish: oldindan ko‘rik, milkni himoyalash, yorug‘lik yoki lazer bilan faollashtiriladigan tarkib. Tishlar bir necha ton och bo‘ladi.",who:"Tishlar rangi sarg‘aygan yoki to‘q tusga kirgan bo‘lsa.",
 prices:[["Tishlarni oqartirish (1 seans, tishlar soniga bog‘liq emas)","1 500 000 so‘m"]]},
{k:"ogriqsizlantirish",t:"Og‘riqsizlantirish",d:"Og‘riqsiz davolash",ic:"syringe",items:["Lidokain 2%","Artikainli karpula anesteziyasi"],
 intro:"Davolash hajmiga qarab mos og‘riqsizlantirish turi tanlanadi. Anestetik og‘riq impulslarining o‘tishini to‘sadi.",who:"Har qanday davolashda, ayniqsa jarrohlik va kanal ishlovida.",
 prices:[["Anesteziya 2,0 ml, lidokain 2%","8 000 so‘m"],["Artikainli karpula anesteziyasi","15 000 so‘m"]]},
{k:"boshqa",t:"Boshqa xizmatlar",d:"Protez ta’miri va boshqalar",ic:"plus",items:["Milk retraksiyasi","Koronkani sementlash","Protez ta’miri"],
 intro:"Qo‘shimcha protsedura: yechiladigan protezlarni ta’mirlash va qayta moslash, koronkalarni sementlash, milk retraksiyasi.",who:"Protez sinsa, bo‘shab qolsa yoki koronka tushib ketganda.",
 prices:[["Milk retraksiyasi (1 birlik)","10 000 so‘m"],["Koronkani sementlash: sink-fosfat sementga","20 000 so‘m"],["Koronkani sementlash: shisha-ionomer sementga","40 000 so‘m"],["Plastmassa protezni ta’mirlash","65 000 so‘m"],["Plastmassa protezni qayta moslash","150 000 so‘m"]]}],
doctors:[
{n:"Ergashev Botir Mamurjonovich",r:"Klinika direktori",e:"15+ yil",img:"images/doctor-ergashev-botir-mamurjonovich.webp",book:false,b:"Mister Dent klinikasi rahbari.\nDavolash sifati, zamonaviy uskunalar va bemorlar uchun qulay xizmat uchun mas‘ul."},
{n:"Irisov Sardor Nigmatovich",r:"Terapevt stomatolog",e:"8 yil",img:"images/doctor-irisov-sardor-nigmatovich.webp",b:"Yo‘nalish: kariesni davolash, plombalash, kanal ishlovi va tishni saqlab qolish."},
{n:"Mustafayeva Kamila Furqatovna",r:"Ortoped stomatolog",e:"10 yil",img:"images/doctor-mustafayeva-kamila-furqatovna.webp",b:"Yo‘nalish: koronkalar, protezlash va yo‘qolgan tishlarni tiklash."},
{n:"Ergasheva Shahnoza Nigmatovna",r:"Jarroh stomatolog",e:"9 yil",img:"images/doctor-ergasheva-shahnoza-nigmatovna.webp",b:"Yo‘nalish: tish olish va jarrohlik amaliyotlari, implantatsiyaga tayyorgarlik."},
{n:"Hamshira",r:"Tibbiy hamshira",e:"5+ yil",img:"images/doctor-hamshira.webp",book:false,b:"Shifokorga davolash jarayonida yordam beradi va bemorning qulay qabulini ta‘minlaydi."}],
tabs:[
{name:"Estetika",plans:[{t:"Vinirlar",tag:"Narx",price:"3 500 000 so‘m",img:"images/xizmat-vinirlar.jpg",stages:[],who:"Tabiiy ko‘rinishli, oq va go‘zal tabassum uchun keramik qoplamalar.",pay:""},{t:"Oksid zirkoniy koronkalar",tag:"Narx",price:"1 800 000 so‘m",img:"images/xizmat-oksid-zirkoniy-koronkalar.jpg",stages:[],who:"Mustahkam va estetik zirkoniy koronkalar.",pay:""},{t:"Metalokeramik koronka",tag:"Narx",price:"1 100 000 so‘m",img:"images/xizmat-metalokeramik-koronka.jpg",stages:[],who:"Ishonchli va uzoq muddatli metalokeramik koronkalar.",pay:""},{t:"Oqartirish",tag:"Narx",price:"1 500 000 so‘m",img:"images/xizmat-oqartirish.jpg",stages:[],who:"Tabassumni bir necha tonga yorqinlashtirish.",pay:""}]},
{name:"Tiklash va protez",plans:[{t:"Koronkali tiklash (shtift)",tag:"Narx",price:"600 000 so‘m",img:"images/xizmat-koronkali-tiklash-shtift.jpg",stages:[],who:"Kuchli zararlangan tishni shtift yordamida qayta tiklash.",pay:""},{t:"Bugel protez",tag:"Narx",price:"8 000 000 so‘m",img:"images/xizmat-bugel-protez.jpg",stages:[],who:"Bir nechta tish o‘rnini to‘ldiruvchi mustahkam protez.",pay:""},{t:"To‘liq yechiladigan protez",tag:"Narx",price:"5 850 000 so‘m",img:"images/xizmat-toliq-yechiladigan-protez.jpg",stages:[],who:"Bir nechta yoki barcha tishlar yo‘qolganda qulay yechiladigan protez.",pay:""},{t:"Plombalash",tag:"Narx",price:"300 000 so‘m",img:"images/xizmat-plombalash.jpg",stages:[],who:"Tish kariesini davolash va tishni tiklash.",pay:""},{t:"Implantatsiya",tag:"Narx",price:"3 500 000 so‘m",img:"images/xizmat-implantatsiya.jpg",stages:[],who:"Yo‘qolgan tish o‘rniga tabiiy ko‘rinishli implant.",pay:""},{t:"Oddiy tish olish",tag:"Narx",price:"450 000 so‘m",img:"images/xizmat-oddiy-tish-olish.jpg",stages:[],who:"Muammoli tishni tez va og‘riqsiz olish.",pay:""}]},
{name:"Ortodontiya va diagnostika",plans:[{t:"Breketlar",tag:"Narx",price:"4 500 000 so‘m",img:"images/xizmat-breketlar.jpg",stages:[],who:"Tishlarni to‘g‘rilash va tabassumni uyg‘unlashtirish.",pay:""},{t:"Splint terapiya",tag:"Narx",price:"5 500 000 so‘m",img:"images/xizmat-splint-terapiya.jpg",stages:[],who:"Tishlarni himoya qiluvchi va jag‘ zo‘riqishini kamaytiruvchi splint.",pay:""},{t:"Aksiografiya",tag:"Narx",price:"2 400 000 so‘m",img:"images/xizmat-aksiografiya.jpg",stages:[],who:"Jag‘ harakatini aniq o‘lchash va tishlamni tekshirish.",pay:""},{t:"Skanerlash",tag:"Narx",price:"200 000 so‘m",img:"images/xizmat-skanerlash.jpg",stages:[],who:"Raqamli 3D skanerlash, aniq va qulay tekshiruv.",pay:""},{t:"Konsultatsiya va rentgen",tag:"Narx",price:"200 000 so‘m",img:"images/xizmat-konsultatsiya-va-rentgen.jpg",stages:[],who:"Shifokor ko‘rigi va rentgen orqali to‘liq tekshiruv.",pay:""},{t:"Air Flow tozalash",tag:"Narx",price:"800 000 so‘m",img:"images/xizmat-air-flow-tozalash.jpg",stages:[],who:"Tishlarni chuqur va xavfsiz tozalash, tabassumni yorqinlashtirish.",pay:""},{t:"Reminerallashtiruvchi terapiya",tag:"Narx",price:"1 800 000 so‘m",img:"images/xizmat-reminerallashtiruvchi-terapiya.jpg",stages:[],who:"Tish emalini mustahkamlovchi va himoya qiluvchi davolash.",pay:""}]}],
cases:[
{tag:"Breketlar",t:"Tishlov tekislandi",d:"Gavjum joylashgan tishlar va noto‘g‘ri tishlov tuzatildi. Davolash davomida har oy nazorat ko‘rigidan o‘tildi.",meta:["14 oy","Metall breketlar"],before:"",after:""},
{tag:"Elaynerlar",t:"Ko‘rinmas davolash",d:"Tishlar orasidagi bo‘shliqlar yopildi. Bemor kundalik hayotini o‘zgartirmasdan davolandi.",meta:["10 oy","Elaynerlar"],before:"",after:""},
{tag:"Vinirlar",t:"Tabassum yangilandi",d:"Rangi va shakli o‘zgargan old tishlar keramik vinirlar bilan tiklandi.",meta:["2 tashrif","Keramik vinir"],before:"",after:""},
{tag:"Implantatsiya",t:"Yo‘qolgan tish tiklandi",d:"Bitta tish implant va sirkoniy koronka yordamida qayta tiklandi.",meta:["3 oy","Implant + sirkoniy"],before:"",after:""},
{tag:"Gnatologiya",t:"Jag‘dagi zo‘riqish kamaydi",d:"Gnatologik tekshiruvdan keyin splint tayyorlandi va jag‘ bo‘g‘imidagi noqulaylik kamaydi.",meta:["Splint","Nazorat ko‘riklari bilan"],before:"",after:""}],
articles:[
["Breketlar yoki elaynerlar","Tishlovni to‘g‘rilash uchun nimani tanlash kerak: ikki usulning farqi, afzalliklari, narx va muddat bo‘yicha tushuntirish.",`<p class="lead">Breketlar va shaffof elaynerlar bir xil vazifani bajaradi: tishlarni rejalashtirilgan holatga asta-sekin siljitadi. Lekin ularning ishlash usuli har xil. Breketlar tishlarga doimiy mahkamlanadi, elaynerlarni esa bemor o‘zi yechib, belgilangan jadval bo‘yicha almashtiradi.</p>
<p>Elaynerlar har doim zamonaviyroq va yaxshiroq, breketlar esa faqat murakkab holatlar uchun, deb bo‘lmaydi. Tanlov tashxisga, tishlarni qanday siljitish kerakligiga, milk va suyak to‘qimasi holatiga, turmush tarziga hamda bemorning tavsiyalarga amal qilishga tayyorligiga bog‘liq.</p>
<p class="note"><b>Qisqacha:</b> elaynerlarni odatda ko‘zga tashlanmagani va ovqatlanish hamda tish tozalash vaqtida yechib qo‘yish mumkinligi uchun tanlashadi. Breketlar tizim doimiy ishlagani va tishlar harakatini keng nazorat qilish imkoniyati uchun qadrlanadi. Mos variantni faqat ortodontik diagnostikadan keyin aniqlash mumkin.</p>

<h3>Breketlar qanday ishlaydi</h3>
<p>Breket-tizim tishlarga mahkamlanadigan kichik zamoklardan va ortodontik yoydan iborat. Yoy nazorat qilinadigan kuch hosil qiladi va shu kuch ta’sirida tishlar asta-sekin siljiydi. Rejaga qarab shifokor elastiklar, prujinalar, kengaytiruvchi apparatlar, ortodontik mini-vintlar va boshqa qo‘shimcha elementlardan foydalanishi mumkin.</p>
<p>Breketlar metall, keramik va boshqa turlarda bo‘ladi. Ular tashqi ko‘rinishi va ba’zi konstruktiv xususiyatlari bilan farq qiladi, lekin muhim narsani o‘zgartirmaydi: natijani diagnostika, davolash rejasi, ortodontning ishi va bemorning tavsiyalarga amal qilishi belgilaydi.</p>
<p>Breketlar doimiy mahkamlangani uchun bemor ularni o‘zi yecha olmaydi. Bu davolanishning kundalik intizomga bog‘liqligini kamaytiradi, lekin gigiyenaga ko‘proq e’tibor va ovqatlanishda ba’zi cheklovlarni talab qiladi.</p>

<h3>Elaynerlar qanday ishlaydi</h3>
<p>Elaynerlar — individual tayyorlangan shaffof kappalar ketma-ketligi. Har bir kappa tishlar siljishining ma’lum bosqichi uchun hisoblangan. Bemor ularni ortodont belgilagan jadval bo‘yicha almashtiradi.</p>
<p>Tishlarga kerakli kuchni berish uchun attachmentlar o‘rnatilishi mumkin. Bu tish rangidagi materialdan qilingan kichik elementlar. Ayrim hollarda elastiklar va boshqa qo‘shimcha moslamalar ham qo‘llanadi. Shuning uchun elaynerlar har doim ham butunlay ko‘rinmas bo‘lavermaydi.</p>
<p>Samaradorlikning asosiy sharti — rejimga rioya qilish. Elaynerlar faqat tishlarda turgandagina ishlaydi. Odatda ularni sutkasiga taxminan 20–22 soat yoki ortodont tayinlaganidek taqib yurish kerak, faqat ovqatlanish va gigiyena vaqtida yechiladi.</p>

<h3>Breketlar va elaynerlar: taqqoslash</h3>
<p>Jadval umumiy farqlarni ko‘rsatadi. U orqali davolash usulini o‘zingiz tanlay olmaysiz, chunki tashqi o‘xshash ikki holat ham tishlarning turli siljishini va turli mexanikani talab qilishi mumkin.</p>
<div class="tbl"><table>
<thead><tr><th></th><th>Breketlar</th><th>Elaynerlar</th></tr></thead>
<tbody>
<tr><th>Ishlash usuli</th><td>Tishlarga doimiy mahkamlanadi</td><td>Yechiladigan shaffof kappalar</td></tr>
<tr><th>Ko‘rinishi</th><td>Metall, keramik va boshqa turlari bor, seziladi</td><td>Kamroq seziladi, lekin attachment va elastiklar ko‘rinishi mumkin</td></tr>
<tr><th>Bemor intizomi</th><td>Kamroq bog‘liq: o‘zi yechilmaydi</td><td>Yuqori: kuniga taxminan 20–22 soat taqish kerak</td></tr>
<tr><th>Ovqatlanish</th><td>Qattiq va yopishqoq mahsulotlarda ehtiyotkorlik kerak</td><td>Ovqat oldidan yechiladi, odatiy ratsion saqlanadi</td></tr>
<tr><th>Gigiyena</th><td>Zamoklar atrofi va yoy ostini sinchiklab tozalash kerak</td><td>Tishlarga yetish osonroq, lekin kappalar ham har kuni tozalanadi</td></tr>
<tr><th>Murakkab holatlar</th><td>Keng imkoniyatlar, qo‘shimcha apparatlar va mini-vintlar</td><td>Ko‘p vazifalarni hal qiladi, ayniqsa tajribali ortodont qo‘lida</td></tr>
</tbody></table></div>

<h3>Shifokor qachon breketlarni tavsiya qilishi mumkin</h3>
<p>Breketlar quyidagi hollarda afzal bo‘lishi mumkin:</p>
<ul>
<li>tishlarni yoki ularning ildizlarini murakkab siljitish kerak bo‘lsa;</li>
<li>tishlov (prikus) buzilishi yaqqol ifodalangan bo‘lsa;</li>
<li>ortodontik ko‘rsatma bilan ayrim tishlarni olib tashlash rejalashtirilgan bo‘lsa;</li>
<li>qo‘shimcha apparatlar yoki mini-vintlar kerak bo‘lsa;</li>
<li>bemor kappalarni sutkaning katta qismida taqib yura olishiga shubha qilsa;</li>
<li>tizim doimiy ishlashi va uni yechib yoki yo‘qotib qo‘yib bo‘lmasligi muhim bo‘lsa.</li>
</ul>
<p>Bu har bir murakkab holat albatta faqat breketlar bilan davolanadi, degani emas. Zamonaviy elaynerlar ko‘p vazifani hal qilishga imkon beradi, ayniqsa tajribali ortodont qo‘lida. Biroq ba’zan breketlar shifokorga qulayroq nazorat beradi, ba’zan esa uyg‘unlashtirilgan usullar qo‘llanadi.</p>

<h3>Shifokor qachon elaynerlarni tavsiya qilishi mumkin</h3>
<p>Elaynerlar quyidagi hollarda qulay variant bo‘lishi mumkin:</p>
<ul>
<li>bemor uchun davolanishning kam seziladigan bo‘lishi muhim bo‘lsa;</li>
<li>tizimni ovqatlanish, nutq so‘zlash yoki muhim uchrashuvlar vaqtida yechish kerak bo‘lsa;</li>
<li>inson taqish rejimiga rioya qilishga tayyor bo‘lsa;</li>
<li>bemor tishlarni yoy va zamoklarsiz, odatdagidek tozalashni xohlasa;</li>
<li>klinik vazifani kappalar yordamida oldindan aytib bo‘ladigan darajada hal qilish mumkin bo‘lsa;</li>
<li>bemor attachmentlar o‘rnatish, elastiklardan foydalanish yoki qo‘shimcha tuzatish kerak bo‘lishi mumkinligini tushunsa.</li>
</ul>
<p>Elaynerlarni faqat chiroyliroq ko‘rinadi, deb tanlash, tishlov va milk holati baholanmasdan, noto‘g‘ri kutishlarga olib kelishi mumkin.</p>

<h3>Kundalik hayotda nima qulayroq</h3>
<h4>Ovqatlanish</h4>
<p>Breketlar bilan davolanganda qattiq va yopishqoq mahsulotlarga ehtiyotkor bo‘lish kerak: ular zamokni ko‘chirib yuborishi yoki yoyni shikastlashi mumkin. Qattiq mahsulotlarni ko‘pincha mayda bo‘laklarga kesib yeyish tavsiya etiladi.</p>
<p>Elaynerlar ovqatdan oldin yechiladi, shuning uchun odatiy ratsion odatda saqlanadi. Lekin ovqatdan keyin kappalarni qaytarishdan oldin tishlarni tozalash yoki hech bo‘lmasa og‘izni chayish kerak. Elaynerlar ostidagi shirin va nordon ichimliklar emal uchun noqulay sharoit yaratishi mumkin.</p>
<h4>Gigiyena</h4>
<p>Breketlar bilan zamoklar atrofini va yoy ostini diqqat bilan tozalash zarur. Ortodont yoki gigiyenist cho‘tka, yorshik, bir tutamli cho‘tka va boshqa vositalarni tanlab beradi.</p>
<p>Elaynerlar tish yuzasiga yetishni osonlashtiradi, chunki tozalash vaqtida yechiladi. Shu bilan birga kappalarning o‘zi ham kundalik parvarishni talab qiladi. Iflos elaynerlarni yaxshi tozalanmagan tishlarga kiyish mumkin emas.</p>
<h4>Qulaylik</h4>
<p>Breketlar o‘rnatilgan va faollashtirilgan keyin tishlarga bosim va zamok yoki yoy tufayli shilliq qavatning vaqtincha tirnalishi bo‘lishi mumkin. Odatda bemor tizimga asta-sekin ko‘nikadi.</p>
<p>Yangi juft elaynerga o‘tgandan keyin ham bosim sezilishi mumkin. Kappa qirralari yoki attachmentlar ba’zan odatiy bo‘lmagan sezgi beradi. Qaysi usul bo‘lishidan qat’i nazar, tishlarni siljitishni butunlay noqulayliksiz deb va’da qilib bo‘lmaydi.</p>

<h3>Qaysi biri tezroq: breketlarmi yoki elaynerlarmi</h3>
<p>Universal javob yo‘q. Davolash muddati tishlar va jag‘larning boshlang‘ich holatiga, siljishlarning murakkabligiga, to‘qimalar holatiga, tanlangan mexanikaga va tavsiyalarga amal qilishga bog‘liq.</p>
<p>Bir holatda elaynerlar va breketlar taqqoslasa bo‘ladigan muddat beradi. Boshqasida breketlar oqilonaroq vosita bo‘ladi. Agar bemor kappalarni belgilangan vaqtdan kam taqsa, tishlar rejaga muvofiq siljimasligi mumkin va davolash qo‘shimcha tuzatishni talab qiladi.</p>
<p>Shuning uchun to‘liq diagnostikadan oldin davolashni ma’lum oylarda tugatish haqida va’da berish noto‘g‘ri.</p>

<h3>Qaysi biri qimmatroq</h3>
<p>Faqat breketlarni o‘rnatish narxini elaynerlar to‘plami narxi bilan solishtirish to‘g‘ri emas. To‘liq byudjetga quyidagilar kirishi mumkin:</p>
<ul>
<li>ortodont konsultatsiyasi;</li>
<li>kompyuter tomografiyasi va boshqa tasvirlar;</li>
<li>tishlarni skanerlash va foto protokol;</li>
<li>ortodontiyadan oldin professional gigiyena va tishlarni davolash;</li>
<li>breketlarni o‘rnatish yoki elaynerlar to‘plamini tayyorlash;</li>
<li>muntazam nazorat tashriflari;</li>
<li>qo‘shimcha apparatlar, elastiklar yoki mini-vintlar;</li>
<li>tuzatuvchi elayner to‘plamlari;</li>
<li>breketlarni yechish;</li>
<li>retayner va retension kappalar;</li>
<li>faol bosqichdan keyingi kuzatuv.</li>
</ul>
<p>Yakuniy narx faqat usulga emas, reja murakkabligiga ham bog‘liq. Konsultatsiyada taklif qilingan summaga qaysi bosqichlar kirishini, qaysilari alohida to‘lanishini aniqlab oling.</p>

<h3>Tanlashdan oldin nega diagnostika kerak</h3>
<p>Tabassum fotosuratiga qarab tish ildizlari holatini, suyak to‘qimasini, bo‘g‘imlarni va jag‘lar nisbatini baholab bo‘lmaydi.</p>
<p>Davolashdan oldin ortodontga quyidagilar kerak bo‘lishi mumkin:</p>
<ul>
<li>tishlar va milklarni ko‘rik;</li>
<li>kompyuter tomografiyasi yoki boshqa rentgenologik tekshiruvlar;</li>
<li>tish qatorlarini raqamli skanerlash;</li>
<li>foto protokol;</li>
<li>tishlov va jag‘lar holatini tahlil qilish;</li>
<li>zarur bo‘lsa, boshqa stomatologlar konsultatsiyasi.</li>
</ul>
<p>Shundan keyin shifokor tashxis qo‘yadi, davolash maqsadlarini belgilaydi va ikkala usul bilan taqqoslasa bo‘ladigan natijaga erishish mumkinmi yoki biri afzalmi, tushuntiradi.</p>

<h3>Breket yoki elaynerdan keyin nima bo‘ladi</h3>
<p>Tishlarning faol siljishi — oxirgi bosqich emas. Davolash tugagach, erishilgan holatni saqlab qolish kerak. Buning uchun olinmaydigan retaynerlar, yechiladigan retension kappalar yoki ularning uyg‘unligi qo‘llanadi.</p>
<p>Retensiyasiz tishlar breket yoki elayner ishlatilganidan qat’i nazar, qisman siljib ketishi mumkin. Retension apparatlarni taqish muddati va rejimini ortodont belgilaydi.</p>

<h3>Ko‘p so‘raladigan savollar</h3>
<details><summary>Avval elaynerlarni sinab ko‘rib, keyin breketlarga o‘tsa bo‘ladimi?</summary><p>Ba’zan davolash rejasi haqiqatan o‘zgartiriladi yoki uyg‘unlashtirilgan usul qo‘llanadi. Lekin klinik asossiz, «sinab ko‘rish uchun» usul bilan boshlash oqilona emas. Imkoniyatlar, cheklovlar va zaxira rejani ortodont bilan oldindan muhokama qilgan ma’qul.</p></details>
<details><summary>Elaynerlar butunlay ko‘rinmasmi?</summary><p>Ular metall breketlarga qaraganda ancha kam seziladi, lekin har doim ham ko‘rinmas emas. Tishlarda attachmentlar va elastiklar bo‘lishi mumkin, kappaning o‘zi esa yaqin muloqotda ba’zan sezilib qoladi.</p></details>
<details><summary>Breketlar emalni buzadimi?</summary><p>Breketlarning o‘zi kariesga sabab bo‘lmaydi, lekin zamoklar atrofida karashlar to‘planishi mumkin. Gigiyena yetarli bo‘lmasa va shirin yoki nordon mahsulotlar tez-tez iste’mol qilinsa, muammo xavfi ortadi. Shifokor tavsiyasiga ko‘ra uy parvarishi va professional gigiyena muhim.</p></details>
<details><summary>Elaynerlar bilan butunlay masofadan davolansa bo‘ladimi?</summary><p>Raqamli texnologiyalar ayrim tashriflar sonini kamaytirishi mumkin, lekin xavfsiz ortodontik davolash diagnostika va shifokor nazoratini talab qiladi. Kuzatuv shakli individual belgilanadi.</p></details>
<details><summary>Kattalar uchun nima yaxshiroq?</summary><p>Yoshning o‘zi tanlovni belgilamaydi. Tishlar va milklar holati, tashxis, davolash maqsadlari, turmush tarzi va tavsiyalarga amal qilishga tayyorlik muhim. Ko‘rsatma bo‘lsa, kattalar ham breketlar, ham elaynerlar bilan davolana oladi.</p></details>

<h3>Xulosa</h3>
<p>Elaynerlar qulay, kam seziladi va ovqatlanish hamda tish tozalash vaqtida yechiladi, lekin yuqori intizomni talab qiladi. Breketlar doimiy ishlaydi va keng doiradagi ortodontik vazifalarni hal qilishga imkon beradi, biroq ko‘proq seziladi va gigiyenani murakkablashtiradi.</p>
<p>Eng yaxshi usul — zamonaviyroq ko‘ringani yoki qimmatroq turgani emas, balki individual davolash rejasini xavfsiz va oldindan aytib bo‘ladigan tarzda bajarishga imkon beradigani.</p>
<p>__BRAND__da breketlar va elaynerlar o‘rtasidagi tanlov konsultatsiya va ortodontik diagnostikadan boshlanadi. Tekshiruvdan keyin shifokor mavjud variantlarni, cheklovlarni, bosqichlarni, taxminiy muddatlarni va xarajatning to‘liq tarkibini tushuntiradi.</p>
`],
["Straumann yoki Osstem: implantlar qanday farq qiladi va tizimni qanday tanlash kerak","Tizimlar o‘rtasidagi farq reklama va’dalarisiz tushuntirilgan. Yakuniy tanlovni shifokor ko‘rik va kompyuter tomografiyasidan keyin amalga oshiradi.",`<p class="lead">Implant — tish ildizi o‘rniga jag‘ suyagiga o‘rnatiladigan tayanch. Ko‘pchilik bemorlar Straumann yoki Osstem haqida so‘raydi. Qisqacha javob: ikkala tizim ham zamonaviy implantologiyada qo‘llaniladi, lekin turli narx segmentlarida va turli mahsulot liniyalariga ega. Faqat brend nomiga qarab tanlash noto‘g‘ri.</p>
<p>Natijaga implant modeligina emas, balki suyak va milk holati, tishning joylashuvi, tishlash, umumiy sog‘liq, o‘rnatish aniqligi, kelajakdagi toj shakli va operatsiyadan keyingi tavsiyalarga rioya qilish ham ta’sir qiladi. Shuning uchun to‘g‘ri savol: “qaysi brend eng yaxshi?” emas, balki “qaysi tizim mening holatim va kelajakdagi tishim uchun mos?”</p>
<h3>Davolash bosqichlari</h3>
<ul><li>jarroh-stomatolog konsultatsiyasi va kompyuter tomografiyasi;</li><li>tojning kelajakdagi joylashuvini rejalashtirish;</li><li>og‘iz bo‘shlig‘ini tayyorlash;</li><li>implantni o‘rnatish;</li><li>suyak bilan birikish (osteointegratsiya) davri;</li><li>milk konturini shakllantirish;</li><li>tojni tayyorlash va mahkamlash;</li><li>nazorat ko‘riklari va professional gigiena.</li></ul>
<p>Implantning narxi davolash umumiy qiymatining faqat bir qismi.</p>
<h3>Straumann</h3>
<p>Shveytsariyalik ishlab chiqaruvchi. Brendning bir nechta liniyalari bor, shuning uchun xususiyatlar aniq model, material va sirtga bog‘liq. Titandan tayyorlangan implantlar, titan va sirkoniy qotishmasi Roxolid, SLA va gidrofil SLActive sirtlari, turli shakl va diametrlar mavjud.</p>
<p>Ishlab chiqaruvchi ma’lumotiga ko‘ra, Roxolid taxminan 85% titan va 15% sirkoniydan iborat bo‘lib, oddiy titanga nisbatan mexanik mustahkamligi yuqori. Bu ingichka implantlarni qo‘llash imkoniyatini kengaytiradi. Biroq tor implant yoki suyak plastikasiz davolash mumkinligini shifokor anatomiya, yuklama va xavflarni baholab hal qiladi. SLActive sirti dastlabki osteointegratsiyani tezlashtirishga mo‘ljallangan, ammo bu hamma uchun darhol doimiy toj yoki qisqa muddat degani emas.</p>
<h3>Osstem</h3>
<p>Janubiy Koreyalik ishlab chiqaruvchi. Keng tarqalgan liniyasi — TS tizimi. Masalan, TS III SA konussimon shakl, qum purkash va kislota bilan ishlangan SA sirt, ichki ulanish, turli diametr va uzunliklar hamda turli turdagi suyakda dastlabki mustahkamlikka mo‘ljallangan dizaynga ega. Boshqa sirt va konstruksiyalar ham bor, shuning uchun aniq model nomisiz taqqoslash to‘liq bo‘lmaydi.</p>
<h3>Qanday tanlanadi</h3>
<p>Straumann odatda murakkab anatomiya, suyak kengligi cheklangan holatlar, keng komponentlar tanlovi yoki premium segmentni tanlagan bemorlar uchun ko‘riladi. Osstem esa standart holatlarda, bitta yoki bir nechta tishni tiklashda, byudjet va imkoniyatlar muvozanatini izlayotganlarga mos kelishi mumkin.</p>
<p>Arzonroq narx o‘z-o‘zidan yomon natija degani emas, lekin tejash diagnostika, original komponentlar, shifokor malakasi yoki toj sifati hisobiga bo‘lmasligi kerak.</p>
<h3>Brenddan muhimroq omillar</h3>
<ul><li><b>Diagnostika.</b> Kompyuter tomografiyasi orqali suyak balandligi va kengligi, nerv hamda bo‘shliqlar joylashuvi, qo‘shni tishlar va yallig‘lanish o‘choqlari baholanadi.</li><li><b>Kelajakdagi toj rejasi.</b> Implant faqat suyak bor joyga emas, funksional va estetik toj yasash imkonini beradigan joyga o‘rnatilishi kerak.</li><li><b>Shifokor tajribasi.</b> Aniq tizim protokoli, burg‘ulash, dastlabki mustahkamlikni nazorat qilish va joylashtirish aniqligi natijaga brend nomi kabi ta’sir qiladi.</li><li><b>Original komponentlar.</b> Implant, abutment va boshqa qismlar qaysi ekanini oldindan aniqlang. O‘lcham mos kelishi ularning original yoki ishlab chiqaruvchi tomonidan tasdiqlangani degani emas.</li><li><b>Sog‘liq va parvarish.</b> Chekish, gigiena yetishmasligi, milk yallig‘lanishi, nazoratsiz surunkali kasalliklar va nazorat tashriflarini o‘tkazib yuborish prognozni yomonlashtirishi mumkin.</li></ul>
<h3>Konsultatsiyada shifokordan so‘rang</h3>
<ol><li>Aniq qaysi implant modeli taklif qilinmoqda va nega?</li><li>U mening suyagim va o‘rnatish joyimga mosmi?</li><li>Suyak yoki milk plastikasi kerakmi?</li><li>Vaqtinchalik va doimiy toj qachon o‘rnatiladi?</li><li>Rejaga qaysi komponentlar kiradi va ular originalmi?</li><li>Yakuniy narxga nimalar kiradi?</li><li>O‘rnatishdan keyin qanday nazorat tashriflari va parvarish qoidalari kerak?</li></ol>
<p>Yakuniy tanlov shifokor bilan birgalikda amalga oshiriladi. __BRAND__ da tizimni tanlash konsultatsiya, kompyuter tomografiyasi va to‘liq davolash rejasidan boshlanadi.</p>`],
["Vinirlar: kimga mos keladi, kimga boshqa variant yaxshiroq","Vinirlar tabassumni sezilarli o‘zgartiradi, lekin hamma uchun mos emas va ko‘pincha emalga qaytarib bo‘lmaydigan ishlov berishni talab qiladi.",`<p class="lead">Vinirlar ko‘pincha go‘zal tabassum uchun universal yechim sifatida qabul qilinadi. Amalda esa bu hamma uchun emas, balki ma’lum holatlarga mos keladigan estetik tiklash usuli. Ba’zi bemorlar uchun vinirlar tabassum sohasini tez va chiroyli yangilaydi, boshqalar uchun esa oqartirish, ortodontik davolash, kompozit tiklash yoki toj ko‘proq to‘g‘ri bo‘lishi mumkin.</p>
<h3>Vinir nima?</h3>
<p>Vinirlar tishlarning old yuzasiga mahkamlanadigan yupqa qoplamalar. Ular asosan shakl, rang va umumiy ko‘rinishni yaxshilash uchun ishlatiladi. Odatda o‘rnatish uchun emalning oz qismi tayyorlanadi, shuning uchun davolash qaytarilmas hisoblanadi. Shu sababli qaror internetdagi fotosuratga emas, stomatologning to‘liq tekshiruviga asoslanishi kerak.</p>
<h3>Kimga vinirlar mos keladi?</h3>
<p>Asosiy maqsad estetik bo‘lsa va tishlar hamda milk umuman sog‘lom bo‘lsa, vinirlar yaxshi yechim bo‘lishi mumkin. Odatda quyidagi holatlarda ko‘rib chiqiladi:</p>
<ul><li>tishlar rangi o‘zgargan va oddiy oqartirish natija bermaydi;</li><li>old tishlarda singan joylar, yoriqlar yoki notekis chekkalar bor;</li><li>tishlar shakli yoki hajmi ideal emas;</li><li>tishlar orasida kichik bo‘shliqlar bor;</li><li>tabassumni yanada uyg‘un va simmetrik qilish istagi bor;</li><li>tishlarni ko‘chirmasdan tuzatish mumkin bo‘lgan o‘rtacha estetik nuqsonlar bor.</li></ul>
<h3>Kimga mos kelmasligi mumkin?</h3>
<p><b>Karies yoki milk kasalliklari bo‘lsa.</b> Davolanmagan kariesli yoki faol yallig‘lanishli tishga vinir qo‘yib bo‘lmaydi. Avval muammo bartaraf etilishi kerak, aks holda estetik tiklash vaziyatni yanada murakkablashtirishi mumkin.</p>
<p><b>Bruksizm bo‘lsa.</b> Tish qisish yoki g‘ijirlatish, ayniqsa uyquda, vinirlarga katta yuklama beradi va sinish hamda erta eskirish xavfini oshiradi.</p>
<p><b>Tishlash muammolari yoki kuchli tiqilish bo‘lsa.</b> Vinirlar kichik notekisliklarni vizual tuzatadi, lekin ortodontik davolashning o‘rnini bosmaydi. Tishlar ancha notekis yoki tishlash buzilgan bo‘lsa, ko‘pincha elayner yoki breketlar to‘g‘riroq yechim bo‘ladi.</p>
<p><b>Tish kuchli shikastlangan bo‘lsa.</b> Katta plomba, kariesdan yoki kanal davolashdan keyin zaiflashgan tish uchun yupqa qoplama emas, balki butunlay qoplaydigan mustahkamroq konstruksiya — toj kerak bo‘lishi mumkin.</p>
<p><b>Muammo faqat rangda bo‘lsa.</b> Shakl yoqsa, emal sog‘lom bo‘lsa va faqat tabassumni yorqinroq qilish kerak bo‘lsa, shifokor avval professional oqartirishni taklif qilishi mumkin.</p>
<h3>Qachon boshqa variant yaxshiroq?</h3>
<p>Agar faqat rang yoqmasa, odatda oqartirish mantiqiy. Kichik singan yoki eskirgan chekka yoki mahalliy shakl tuzatish kerak bo‘lsa, kompozit tiklash mos kelishi mumkin. Muammo tishlash yoki joylashuvda bo‘lsa, breketlar yoki elaynerlarni ko‘rib chiqing. Tish kuchli zaiflashgan yoki katta plombali bo‘lsa, ko‘pincha toj ishonchliroq.</p>
<h3>Vinir o‘rnatishdan oldin bilish kerak bo‘lganlar</h3>
<p>Vinirlar tayyorgarliksiz ishlaydigan “sehrli qoplama” emas. Odatda tishlash, emal holati, milk va eski tiklashlar baholanadi. Davolash ko‘pincha qaytarilmas bo‘ladi. Shuningdek, vinirlarga yaxshi uy parvarishi va muntazam ko‘riklar kerak.</p>
<p>Vinirlar shakl, rang va tabassum uyg‘unligini yaxshilamoqchi bo‘lgan, tishlari va milki sog‘lom, muammosi asosan estetik bo‘lgan bemorlarga mos keladi. Karies, milk yallig‘lanishi, tishlash buzilishi, tishning kuchli shikastlanishi yoki bruksizm bo‘lsa, avval boshqa davolash variantlarini ko‘rib chiqish yaxshiroq.</p>
<p>__BRAND__ da konsultatsiya orqali sizga eng mos variantni aniqlab olishingiz mumkin.</p>`]
],
artImgs:["images/art-1.webp","images/art-2.webp","images/art-3.webp"],
artAlts:["Breketlar va shaffof elaynerlar","Tish implantlari","Keramik vinirlar va tabassum"]
};
