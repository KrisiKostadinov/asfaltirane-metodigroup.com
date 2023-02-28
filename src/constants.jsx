export const navItems = [
  {
    name: "Начало",
    link: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "За нас",
    link: "/za-nas",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    name: "Услуги",
    link: "#",
    locked: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    children: [
      {
        name: "Асфалтиране на улици",
        link: "/asfaltirane-na-ulitsi",
      },
      {
        name: "Асфалтиране на пътища",
        link: "/asfaltirane-na-patishta",
      },
      {
        name: "Асфалтиране на двор",
        link: "/afaltirane-na-dvor",
      },
      {
        name: "Асфалтиране на алеи",
        link: "/asfaltirane-na-alei",
      },
      {
        name: "Асфалтиране на тротоар",
        link: "/narezhdane-na-trotoar",
      },
      {
        name: "Асфалтиране на малки и големи площи",
        link: "/asfaltirane-na-malki-i-golemi-ploshti",
      },
    ],
  },
  {
    name: "Галерия",
    link: "/galeria",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
  {
    name: "Контакти",
    link: "/contacts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
];

export const menuIcon = `<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
className="w-7 h-7"
>
<path
  ="round"
  
  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
/>
</svg>`;

export const icons = {
  LeftArrowIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  ),
  RightArrowIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  ),
  CheckIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  ),
  PhoneIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  ),
  EmailIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  ),
};

import item1 from "./assets/images/asphaltings/asphalting-road.jpeg";
import item2 from "./assets/images/asphaltings/street-asphalting.jpeg";
import item3 from "./assets/images/asphaltings/yard-asphalting.jpeg";
import item4 from "./assets/images/asphaltings/sidewalk-asphalting.jpeg";
import item5 from "./assets/images/asphaltings/alley-asphalting.jpeg";
import item6 from "./assets/images/asphaltings/parking-asphalting.jpeg";
import item7 from "./assets/images/asphaltings/small-asphalting.jpeg";
import item8 from "./assets/images/asphaltings/big-asphalting.jpeg";

export const asphaltingsImages = {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
};

export const servicesItems = [
  {
    heading: "Асфалтиране на пътища",
    img: asphaltingsImages.item1,
    text: "Занимаваме се с асфалтиране в София и страната на пътища от много години. Полагаме асфалт на терени в цялата страна.",
    link: "/asfaltirane-na-patishta",
  },
  {
    heading: "Асфалтиране на улици",
    img: asphaltingsImages.item2,
    text: "Асфалтиране на улици в цялата страна. Ние сме специялизирали в построяването и изработката на пътища.",
    link: "/asfaltirane-na-ulitsi",
  },
  {
    heading: "Полагане на бордюри",
    img: asphaltingsImages.item3,
    text: "Имаме голям опит в нареждането и пренареждането на всякакви видове бордюри на тротоари, малки и големи площи.",
    link: "/narezhdane-na-trotoar",
  },
  {
    heading: "Асфалтиране на двор",
    img: asphaltingsImages.item4,
    text: "Ако имате по-голям двор и търсите фирма за асфалтиране в София, ние можем да Ви помогнем.",
    link: "/afaltirane-na-dvor",
  },
  {
    heading: "Асфалтиране на алеи",
    img: asphaltingsImages.item5,
    text: "Нашата бригада има дългогодишен опит в асфалтирането в София и страната на алеи, улици, дворове, пътища и други.",
    link: "/asfaltirane-na-alei",
  },
  {
    heading: "Асфалтиране на паркинги",
    img: asphaltingsImages.item6,
    text: "Асфалтиране в София и страната на паркове, паркинги.",
    link: "/afaltirane-na-dvor", // TODO:
  },
  {
    heading: "Полагане на малки площи",
    img: asphaltingsImages.item7,
    text: "Ние имаме опитен екип от специалисти в асфалтирането на малки площи.",
    link: "/asfaltirane-na-malki-i-golemi-ploshti",
  },
  {
    heading: "Асфалтиране на големи площи",
    img: asphaltingsImages.item8,
    text: "Нашия екип има опитни професионалистти в полагането на асфалтова настилка на големи площи.",
    link: "/asfaltirane-na-malki-i-golemi-ploshti",
  },
];

import client1 from "./assets/images/clients-reviews/client-1.png";
import client2 from "./assets/images/clients-reviews/client-2.png";

export const clientReviews = [
  {
    name: "Иван Иванов",
    img: client1,
    text: "Улицата на която живея не беше ремонтирана от много години. Много съм доволен от майсторите на фирмата свършиха добра работа само за няколко дни. Подновиха и тротоара с нови плочки и бордюри. Горещо препоръчвам!",
  },
  {
    name: "Тодор Петров",
    img: client2,
    text: "Изключително съм доволен от работата ви. Имах голям двор, който трябваше да се асфалтира. Фирма Asfaltirane metodi group свърши страхотна работа.",
  },
];

export const gallery = [
  {
    url: "https://asfaltirane-metodigroup.com/wp-content/uploads/2021/08/image.jpeg",
    alt: "/",
  },
  {
    url: "https://asfaltirane-metodigroup.com/wp-content/uploads/2021/08/asfalt.jpg",
    alt: "/",
  },
  {
    url: "https://asfaltirane-metodigroup.com/wp-content/uploads/2021/08/DSC02526.jpg",
    alt: "/",
  },
  {
    url: "https://asfaltirane-metodigroup.com/wp-content/uploads/2021/08/photo-1570388282255-bf3267e6be2b.jpeg",
    alt: "/",
  },
];

export const metaTags = {
  site_name: "Асфалтиране Методи Строй",
  site_desc: "Асфалтиране София и страната",
};

// 185.45.66.180
// Да, промените следва да бъдат извършени през контролния панел cPanel на хостинг акаунта kriskata -> Редактор На DNS Зони -> Управление -> Намирате А записа за поддомейна metodi-new-design.kriskata.com , след което променяте IP адреса, като задавате IP адреса, към който желаете да се насочи поддомейнът.
// 46.242.232.3