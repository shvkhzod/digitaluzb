import type { CourseType, Topic } from "../courseTypes";
  /**
   * Topics for Programming 101 course
   */

const aboutComputers: Topic = {
    title: "Kompyuter Haqida",
    url: "kompyuter-haqida",
    author: 'Shakhzod Sharifov',
    intro: `
    Keling, bundan buyon siz ko'p ishlatadigan raqamli vositani yaxshiroq tushinib olaylik.
    `,
    content: [{
      image: 'founKdation1'
    },
      {
        subheading: "Kompyuter o'zi nima?",
        paragraph: `
        Kompyuter - bu ma'lumot yoki ma'lumotlarni boshqaradigan elektron qurilma. U ma'lumotlarni saqlash, olish va qayta ishlash qobiliyatiga ega.
        `
      },
      {
        tip: `
        Dunyoning eng birinchi kompyuteri "ENIAC", Ikkinchi Jahon Urushi davrida 1945 yilda ishlab chiqarilgan bo'lib, uning o'lchami 30 tonnadan ortiq edi.
          `
      },
      {
        subheading: 'Hardware ( Apparat )',
        paragraph: `
        Kompyuteringizning ichki tarafi, va siz teginishingiz mumkin bo'lgan, jismoniy shaklga ega bo'lgan kompyuterning har qanday qismi
        `
      },
      {
        subheading: "Software ( Dastur )",
        paragraph: `
        Kompyuter yoki elektron qurilmada ishlaydigan dasturlar va ilovalar. Ular orqali hardware ( apparat )ga buyruq berish mumkin. Masalan, o'yinlar, veb brauzerlar va boshqa dasturlar. 
       `      },
        {
        subheading: "Kompyuterlarning turlari",
        paragraph: `
        Kompyuterlar keng tarzda bo'lishi mumkin. Masalan, personal kompyuterlar, laptoplar, planshetlar, smartfonlar va boshqa ko'plab elektron qurilmalar - bularning hammasi kompyuterlarning turlari.
        `},
    ]
  }  


const hardware: Topic = {
    title: "Kompyuterning ichki qurilmalari",
    url: "kompyuterning-ichki-qurilmalari",
    author: 'Shakhzod Sharifov',
    intro: `
      Ko'p odam kompyuterning ichki tarafini tushunish qiyin deb o'ylaydi. Lekin bu unchalik qiyin emas
   `,
    content: [{
      image: 'foundation2',
    },
        {
            subheading: "Motherboard",
            paragraph: `
            Motherboard kompyuterning eng asosiy elektron
             platasidir. Bu protsessorni, xotirani, qattiq disk va
              optik disklar uchun ulagichlarni, video va audioni boshqarish uchun kengaytirish kartalarini va kompyuteringiz portlariga (masalan, USB portlari) ulanishlarni saqlaydigan yupqa plastinka. Motherboard kompyuterning har bir qismiga bevosita yoki bilvosita ulanadi.
            `
        },
        {
            subheading: "CPU",
            paragraph: `
            Protsessor yoki CPU, motherboard korpusi ichida joylashgan. Uni ba'zan kompyuterning miyasi deb atashadi va uning vazifasi buyruqlarni bajarishdir. Tugmachani bosganingizda, sichqonchani bosganingizda yoki dasturni ishga tushirganingizda, siz protsessorga ko'rsatmalar yuborasiz.
            `
        },
        {
            paragraph: `
            CPU odatda keramik kvadrat va uning ichida silikon chip joylashgan. Chip odatda bitta tirnoq o'lchamiga ega. CPU motherboard rozetkasiga mos keladi, u issiqlik qabul qiluvchi vosita bilan qoplangan, protsessordan issiqlikni yutuvchi ob'ekt.
            `,          
              },{
                tip: "Protsessor qanchalik kichkina bo'lsa , u shunchalik tez ishlaydi."
              },
            {
            subheading: "RAM",
            paragraph: `
            RAM yoki operativ xotira - bu sizning tizimingizning qisqa muddatli xotirasi. Qachonki kompyuteringiz hisob-kitoblarni amalga oshirsa, u kerakli ma'lumotlarni vaqtincha operativ xotirada saqlaydi.
            Ushbu qisqa muddatli xotira kompyuter o'chirilganida yo'qoladi.`
            },{
              paragraph: `
              Qanchalik ko'p RAM bo'lsa, kompyuteringiz bir vaqtning o'zida shunchalik ko'p narsalarni qila oladi. Agar sizda yetarlicha operativ xotira bo'lmasa, bir nechta dastur ochilganda kompyuteringiz sustligini sezishingiz mumkin. Shu sababli, ko'p odamlar ish faoliyatini yaxshilash uchun o'z kompyuterlariga qo'shimcha RAM qo'shadilar.
              `
            },
            {
              subheading: 'Qattiq Disk',
              paragraph: `
              Qattiq disk - bu sizning dasturiy ta'minotingiz, hujjatlaringiz va boshqa fayllaringiz saqlanadigan joy. Qattiq disk ma'lumotni uzoq muddatga saqlaydi, ya'ni kompyuterni o'chirsangiz yoki uni elektr tarmog'idan uzsangiz ham ma'lumotlar saqlanib qoladi.
              `
            },
            {
              paragraph: `
              Dasturni ishga tushirganingizda yoki faylni ochganingizda, kompyuter qattiq diskdagi ma'lumotlarning bir qismini operativ xotiraga ko'chiradi. Faylni saqlaganingizda, ma'lumotlar qattiq diskka qayta ko'chiriladi. Qattiq disk qanchalik tez bo'lsa, kompyuteringiz shunchalik tez ishga tushadi va dasturlarni yuklaydi.
              `
            },
            {
              subheading: 'Video Karta',
              paragraph: `
              Video karta monitorda ko'radigan narsalaringiz uchun javobgar. Aksariyat kompyuterlarda  motherboarda alohida o'rnatilgan GPU (grafik ishlov berish bloki) mavjud. Agar siz intensiv grafik o'yinlarni o'ynashni yoqtirsangiz, yanada yaxshi ishlash uchun kengaytirish slotlaridan biriga kuckliroq video kartani qo'shishingiz mumkin.
              `
            },
    ]
}

const operationSystem: Topic = {
  title: "Operatsion Sistema",
  url: "operatsion-sistema",
  author: 'Shakhzod Sharifov',
  intro: `
  Kompyuterda ishlovchi eng muhim dastur operatsion tizim hisoblanadi. U kompyuter xotirasi, jarayonlari va barcha dasturiy vositalarni boshqaradi. Shuningdek, kompyuter tili bilmagan holda ham kompyuter bilan aloqa kurish imkoniyatini beradi. Operatsion tizimsiz kompyuterni ishlatib bo'lmaydi. 
  `,
  content: [{
    image: 'foundation3',
  },
    {
      subheading: `Operatsion Sistemaning Vazifasi`,
      paragraph: `
      Ko'pincha bir vaqtning o'zida bir nechta turli xil kompyuter dasturlari ishlaydi va ularning barchasi kompyuteringizning markaziy protsessoriga (CPU) va xotirani ishlatishi kerak. Operatsion tizim bularning barchasini har bir dastur kerakli narsani olishiga ishonch hosil qiladi.
      `
    },
    {
      subheading: `Operatsion Sistemalar Turlari`,
      paragraph:`
        Hozirgi kunda yangi kompyuterlarda Operatsion tizimlar oldindan o'rnatilgan bo'ladi. Eng mashhuur operatsion tizimlar Windows, MacOS va Linux.  
      `,
    },
    {
      subheading: `Microsoft Windows`,
      paragraph: `
      Microsoft Windows operatsion tizimini 1980-yillarning o'rtalarida yaratilgan. Windows ko'pgina yangi shaxsiy kompyuterlarda oldindan yuklangan holda keladi, bu esa uni dunyodagi eng mashhur operatsion tizimlardan biriga aylantirgan.
      `
    },
    {
      subheading: `MacOS`,
      paragraph: `
      macOS (ilgari OS X deb ataladi) - bu Apple tomonidan yaratilgan operatsion tizim. U barcha Macintosh kompyuterlarida yoki Mac kompyuterlarida oldindan yuklangan holda keladi. Statistikaga qaraganda macOS foydalanuvchilari global operatsion tizimlarning 16.6% tashkil qiladi - bu Windows foydalanuvchilari foizidan (72.09%) ancha past. Buning sabablaridan biri Apple kompyuterlarining qimmatroq bo'lishidir. Biroq, ko'pchilik Windows-dan ko'ra macOS-ning ko'rinishini afzal ko'radi.
      `
    },
    {
      subheading: `Linux`,
      paragraph: `
      Linux operatsion tizimi ochiq manba. Bu tizimni istalgan kishi o'zgartirishi mumkin. Linux operatsion tizimi ko'pgina serverlarda ishlatiladi. Va bu operatsion tizimi bepul`
    },
]
  
}

  /**
   * Programming 101 course
   */
  export const programming101: CourseType = {
    name: "Kompyuter Asoslari",
    url: "kompyuter-asoslari",
    category: "programming",
    topics: [aboutComputers, hardware, operationSystem],}

