import BathroomIcon from '@/assets/icons/furniture/bathroom';
import BedIcon from '@/assets/icons/furniture/bed';
import BedroomIcon from '@/assets/icons/furniture/bedroom';
import KitchenIcon from '@/assets/icons/furniture/kitchen';
import LivingRoomIcon from '@/assets/icons/furniture/living-room';
import OfficeIcon from '@/assets/icons/furniture/office';
import ShopIcon from '@/assets/icons/furniture/shop';
import WardrobeIcon from '@/assets/icons/furniture/wardrobe';
import {
  bathroom,
  bedroom,
  kitchen,
  office,
  room,
  shop,
  upholstered,
  wardrobe,
} from '@/assets/images/[type]';
import Content from '@/components/furniture/content';

export const CATEGORIES: Category[] = [
  {
    title: 'Szafy',
    link: '/meble/szafy',
    icon: <WardrobeIcon />,
    hero: {
      title: 'Przeglądasz kolekcję szaf',
      content: (
        <Content
          paragraphs={[
            'Witamy Cię w fascynującym świecie mebli szafowych, gdzie praktyczność spotyka się z estetyką. W tej kolekcji skupiamy się na dostarczaniu rozwiązań, które nie tylko perfekcyjnie organizują przestrzeń, ale także dodają wyrafinowania Twojemu wnętrzu.',
            'Przeglądając kolekcję szaf, zanurzysz się w inspirującym świecie, gdzie każdy projekt jest starannie przemyślany, aby sprostać oczekiwaniom zarówno funkcjonalnym, jak i designerskim.',
          ]}
        />
      ),
      media: [wardrobe.src],
    },
    desc: {
      title: 'Kolekcja szaf',
      content: (
        <Content
          paragraphs={[
            'Nasze szafy to wyjątkowe połączenie wysokiej jakości materiałów, solidnej konstrukcji i przemyślanego designu. Bez względu na to, czy preferujesz klasyczne linie czy nowoczesną elegancję, nasza kolekcja oferuje różnorodność, która pozwoli dostosować szafę do Twoich indywidualnych potrzeb.',
            'Przekonaj się, jak funkcjonalność może iść w parze z designerskim wdziękiem, odkrywając nasze propozycje.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Sypialnie',
    link: '/meble/sypialnie',
    icon: <BedroomIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli sypialnianych',
      content: (
        <Content
          paragraphs={[
            'Zapraszamy do fascynującego świata mebli do sypialni, gdzie komfort spotyka się z designerską estetyką. Przekrocz próg naszej kolekcji, aby odkryć nie tylko doskonałe meble do snu, lecz także inspiracje do stworzenia spokojnego azylu w swojej sypialni.',
          ]}
        />
      ),
      media: [bedroom.src],
    },
    desc: {
      title: 'Meble sypialniane',
      content: (
        <Content
          paragraphs={[
            'Nasze meble do sypialni to połączenie ergonomicznego designu z najwyższą jakością wykonania. Każdy element został starannie przemyślany, aby nie tylko dostarczać wyjątkowego komfortu snu, ale także dodawać uroku wnętrzu.',
            'Przejrzyj naszą kolekcję, aby znaleźć meble, które harmonijnie wpiszą się w charakter Twojej sypialni, tworząc miejsce relaksu i spokoju.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Łóżka tapicerowane',
    link: '/meble/lozka-tapicerowane',
    icon: <BedIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli tapicerowanych',
      content: (
        <Content
          paragraphs={[
            'Przeniknij do luksusowego świata łóżek tapicerowanych, gdzie elegancja spotyka się z wygodą. Odkryj naszą kolekcję, w której każde łóżko jest nie tylko miejscem do snu, ale także ręcznie zaprojektowanym dziełem sztuki, które podkreśli styl Twojej sypialni.',
          ]}
        />
      ),
      media: [upholstered.src],
    },
    desc: {
      title: 'Łóżka tapicerowane',
      content: (
        <Content
          paragraphs={[
            'Nasze łóżka tapicerowane to połączenie finezyjnego designu z najwyższej jakości materiałami. Każdy detal został starannie dopracowany, aby dostarczyć nie tylko niezrównanego komfortu snu, ale także wnieść do sypialni szczyptę luksusu.',
            'Wybierając jedno z naszych łóżek tapicerowanych, inwestujesz nie tylko w zdrowy sen, ale również w wyjątkową estetykę swojej sypialni.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Biurowe',
    link: '/meble/biurowe',
    icon: <OfficeIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli biurowych',
      content: (
        <Content
          paragraphs={[
            'Witamy w kolekcji mebli biurowych, gdzie funkcjonalność idzie w parze z nowoczesnym stylem. Odkryj innowacyjne rozwiązania, które nie tylko zorganizują Twoją przestrzeń pracy, ale także wniosą do niej wyjątkowy design.',
          ]}
        />
      ),
      media: [office.src],
    },
    desc: {
      title: 'Meble biurowe',
      content: (
        <Content
          paragraphs={[
            'Nasze meble biurowe to więcej niż tylko sprzęt do pracy – to elementy, które podkreślą charakter Twojego biura. Projektujemy z myślą o ergonomiczności, oferując jednocześnie unikalne rozwiązania designerskie. Odkryj, jak nasze meble biurowe mogą zmienić Twoją przestrzeń roboczą w miejsce, gdzie funkcjonalność spotyka się z elegancją, inspirując do efektywnej pracy.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Kuchenne',
    link: '/meble/kuchenne',
    icon: <KitchenIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli kuchennych',
      content: (
        <Content
          paragraphs={[
            'Przeniknij do rewolucyjnego świata mebli kuchennych, gdzie praktyczność spotyka się z designerską finezją. Odkryj naszą kolekcję, w której każde mebel nie tylko ułatwia codzienne czynności, ale także wnosi do kuchni niepowtarzalny styl.',
          ]}
        />
      ),
      media: [kitchen.src],
    },
    desc: {
      title: 'Meble kuchenne',
      content: (
        <Content
          paragraphs={[
            'Nasze meble kuchenne to harmonia pomiędzy funkcjonalnością a estetyką. Każdy element jest starannie zaprojektowany, aby ułatwić codzienne gotowanie, a jednocześnie nadając kuchni niepowtarzalny charakter.',
            'Przejrzyj naszą kolekcję, aby znaleźć meble, które nie tylko sprawią, że praca w kuchni stanie się przyjemnością, ale także podkreślą unikalny charakter tego ważnego miejsca w domu.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Łazienkowe',
    link: '/meble/lazienkowe',
    icon: <BathroomIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli łazienkowych',
      content: (
        <Content
          paragraphs={[
            'Zapraszamy do eleganckiego świata mebli łazienkowych, gdzie funkcjonalność łączy się z designerskim wyrafinowaniem. Odkryj naszą kolekcję, w której każdy mebel nie tylko optymalnie wykorzystuje przestrzeń, ale także nadaje łazience wyjątkowy klimat relaksu.',
          ]}
        />
      ),
      media: [bathroom.src],
    },
    desc: {
      title: 'Meble łazienkowe',
      content: (
        <Content
          paragraphs={[
            'Nasze meble łazienkowe to połączenie nowoczesnego designu, trwałych materiałów i praktycznych rozwiązań. Każdy detal został starannie dobrany, aby dostarczyć nie tylko efektywnego przechowywania, ale także stworzyć atmosferę spokoju w łazience.',
            'Przejrzyj naszą kolekcję, aby znaleźć meble, które spełnią Twoje oczekiwania zarówno pod względem funkcjonalności, jak i estetyki.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Pokojowe',
    link: '/meble/pokojowe',
    icon: <LivingRoomIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli pokojowych',
      content: (
        <Content
          paragraphs={[
            'Przeniknij do świata wyjątkowych mebli pokojowych, gdzie każdy element odzwierciedla Twoją indywidualność. Odkryj naszą kolekcję, w której każdy mebel nie tylko spełnia praktyczne funkcje, ale także stanowi wyjątkową ozdobę Twojej przestrzeni.',
          ]}
        />
      ),
      media: [room.src],
    },
    desc: {
      title: 'Meble pokojowe',
      content: (
        <Content
          paragraphs={[
            'Mebel do pokoju to nie tylko element wyposażenia – to manifestacja Twojego stylu życia. Nasze propozycje łączą w sobie funkcjonalność z designerskim podejściem, pozwalając Ci stworzyć przestrzeń, która nie tylko spełni Twoje potrzeby codzienne, ale także odzwierciedli Twoją unikalną tożsamość.',
            'Przejrzyj naszą kolekcję, aby znaleźć meble, które dodadzą charakteru Twojemu pokojowi.',
          ]}
        />
      ),
    },
  },
  {
    title: 'Sklepowe',
    link: '/meble/sklepowe',
    icon: <ShopIcon />,
    hero: {
      title: 'Przeglądasz kolekcję mebli sklepowych',
      content: (
        <Content
          paragraphs={[
            'Witamy w świecie profesjonalnych i estetycznych mebli sklepowych, gdzie prezentacja produktów spotyka się z komfortem zakupów.',
            'Odkryj naszą kolekcję, w której każdy mebel nie tylko wyeksponuje Twoje produkty, ale także stworzy przyjazne i atrakcyjne środowisko handlowe.',
          ]}
        />
      ),
      media: [shop.src],
    },
    desc: {
      title: 'Meble sklepowe',
      content: (
        <Content
          paragraphs={[
            'Nasze meble sklepowe to nie tylko efektywne narzędzia do prezentacji produktów, ale również elementy, które tworzą przyjemną atmosferę handlową. Znajdziesz tutaj różnorodne rozwiązania, dostosowane do specyfiki różnych branż, zapewniające nie tylko funkcjonalność, ale także nowoczesny design.',
            'Odkryj, jak nasze meble sklepowe mogą wzbogacić wystrój Twojego sklepu, zachęcając klientów do udanych zakupów.',
          ]}
        />
      ),
    },
  },
];
