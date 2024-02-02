import OfficeIcon from "@/assets/icons/furniture/office";
import RTVAGDIcon from "@/assets/icons/materials/rtv-agd";
import TableIcon from "@/assets/icons/materials/table";
import MaterialWardrobeIcon from "@/assets/icons/materials/wardrobe";
import { skeleton } from "@/assets/images";
import { bedroom, upholstered, wardrobe } from "@/assets/images/[type]";
import {
  accDescBig,
  accDescMedium,
  accDescSmall,
  accHeroBig,
  frontsDescBig,
  frontsDescMedium,
  frontsDescSmall,
  frontsHeroBig,
  frontsHeroSmall,
  platesDescBig,
  platesDescMedium,
  platesDescSmall,
  platesHeroBig,
  platesHeroSmall,
  rtvDescBig,
  rtvDescMedium,
  rtvDescSmall,
  rtvHeroBig,
  rtvHeroSmall,
} from "@/assets/images/materials";
import Content from "@/components/furniture/content";

type T = Omit<Category, "desc">;
interface MaterialCategory extends T {
  desc: Section;
}

export const MATERIALS_CATEGORIES: MaterialCategory[] = [
  {
    title: "RTV AGD",
    link: "/materialy/rtv-agd",
    icon: <RTVAGDIcon />,
    hero: {
      title: "Kompletowanie Sprzętów AGD - Klucz do Estetyki Kuchni",
      content: (
        <Content
          paragraphs={[
            "Kompletowanie sprzętów AGD to istotne wyzwanie podczas aranżacji kuchni. Nie tylko pełnią one funkcje techniczne, ale także wpływają na estetykę pomieszczenia. Nowoczesny design i dopasowana kolorystyka sprzętu AGD doskonale współgrają z meblami, nadając kuchni elegancji. Dbałość o spójność kolorów, zarówno w przypadku dużych urządzeń, jak i mniejszych, takich jak czajnik czy ekspres do kawy, tworzy harmonijną całość.",
          ]}
        />
      ),
      media: [rtvHeroBig.src, rtvHeroSmall.src],
    },
    desc: {
      title: "Odkryj Nowoczesność w Naszej Ofercie AGD i RTV",
      content: (
        <p className="text-sm leading-relaxed">
          W naszej ofercie znajdziesz różnorodne urządzenia AGD i RTV od
          renomowanych producentów. Spełniamy nawet najbardziej wyszukane
          oczekiwania, oferując kompleksowe rozwiązania dla Twojej kuchni.
          Odkryj nasze produkty, które nadadzą Twojemu wnętrzu nowoczesny i
          stylowy charakter, podkreślając jego elegancję.
        </p>
      ),
      media: [rtvDescSmall.src, rtvDescMedium.src, rtvDescBig.src],
    },
  },
  {
    title: "Płyty i blaty",
    link: "/materialy/plyty-i-blaty",
    icon: <TableIcon />,
    hero: {
      title: "Płyty Meblowe  - Jakość i szeroka paleta kolorów",
      content: (
        <Content
          paragraphs={[
            "Nasze płyty meblowe, wykonane z wysokiej jakości płyty meblowej firmy Kronopol Żary Sp. z o.o., oferują bogatą gamę kolorystyczną. Dostępne są w grubościach 10mm, 18mm i 28mm, zapewniając łatwość obróbki oraz przyjazność dla środowiska (klasa higieny E1). Idealne do produkcji mebli i dekoracyjnego wykończenia wnętrz.",
          ]}
        />
      ),
      media: [platesHeroBig.src, platesHeroSmall.src],
    },
    desc: {
      title: "Blaty Kuchenne - Estetyka i Funkcjonalność w Jednym",
      content: (
        <p className="text-sm leading-relaxed">
          Nasze blaty kuchenne, dostarczane przez renomowane firmy, takie jak
          Kronopol Żary Sp. z o.o., Pfleiderer oraz Biurostyl, oferują ponad 200
          kolorów w połysku i matowych. Dostępne w różnych długościach i
          grubościach (28mm i 38mm, nawet do 80mm na zamówienie). Odpowiednio
          odporne na temperaturę, promienie UV, parę wodną, detergenty, a także
          posiadające certyfikaty klas higieny E1, zdrowotnej i ogniowej,
          gwarantują estetykę i funkcjonalność.
        </p>
      ),
      media: [platesDescSmall.src, platesDescMedium.src, platesDescBig.src],
    },
  },
  {
    title: "Fronty",
    link: "/materialy/fronty",
    icon: <MaterialWardrobeIcon />,
    hero: {
      title: "Fronty Meblowe - Elegancja i Funkcjonalność",
      content: (
        <Content
          paragraphs={[
            "Nasze fronty meblowe idealnie uzupełniają każdą kuchnię, oferując różnorodność kolorów, wzorów oraz elementów uzupełniających. Dbamy o zgodność z najnowszymi trendami w meblarstwie, spełniając oczekiwania klientów.",
          ]}
        />
      ),
      media: [frontsHeroBig.src, frontsHeroSmall.src],
    },
    desc: {
      title: "Różnorodność Frontów Meblowych",
      content: (
        <p className="text-sm leading-relaxed">
          Odkryj nasze fronty meblowe, proste i gięte, dostępne w różnych
          materiałach, w tym foliowane MDF, lakierowane o wysokim połysku lub
          matowe, fornirowane, drewniane i aluminiowe z wypełnieniem szklanym.
          Sprawdź wzory frezowania, kolorystykę i wymiary na stronach
          producentów. Wybierz fronty, które podkreślą charakter Twojej kuchni.
        </p>
      ),
      media: [frontsDescSmall.src, frontsDescMedium.src, frontsDescBig.src],
    },
  },
  {
    title: "Akcesoria",
    link: "/materialy/akcesoria",
    icon: <OfficeIcon />,
    hero: {
      title: "Kompletne Wyposażenie - Akcesoria Meblowe",
      content: (
        <Content
          paragraphs={[
            "Zapewniamy różnorodne akcesoria meblowe, obejmujące systemy relingowe, oświetlenie meblowe, elementy do drzwi przesuwnych, uchwyty, prowadnice do szuflad, nóżki, kółka, narzędzia stolarskie, żaluzje, systemy kolumnowe, wieszaki, kleje i inne artykuły meblarskie. Znajdź kompletną gamę, by stworzyć funkcjonalne i estetyczne wnętrze.",
          ]}
        />
      ),
      media: [accHeroBig.src],
    },
    desc: {
      title: "Doskonała Funkcjonalność i Estetyka",
      content: (
        <p className="text-sm leading-relaxed">
          Znajdź u nas wszystko, co potrzebujesz do stworzenia funkcjonalnego i
          estetycznego wnętrza. Nasze akcesoria meblowe obejmują szeroką gamę
          produktów, spełniających najwyższe standardy branżowe."
        </p>
      ),
      media: [accDescSmall.src, accDescMedium.src, accDescBig.src],
    },
  },
];
