import { designing } from "@/assets/images";
import Advantages from "@/components/designing/advantages";
import Content from "@/components/furniture/content";
import Desc from "@/components/furniture/desc";
import Gallery from "@/components/furniture/gallery";
import Banner from "@/components/home/banner";
import Contact from "@/components/home/contact/contact";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Skeleton from "@/components/ui/skeleton";
import { getImages } from "@/lib/[type]/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projektowanie | Sekwoja - Meble na wymiar",
  description:
    "Przy projektowaniu mającej powstać dla Państwa zabudowy korzystamy z najnowszych narzędzi programistycznych, umożliwiających wierną wizualizacją i aranżację tworzonych mebli. Obecnie wykorzystujemy narzędzia takie jest program CAD Kuchnie firmy CAD Projekt oraz PRO100.",
  openGraph: {
    title: "Projektowanie | Sekwoja - Meble na wymiar",
    description:
      "Przy projektowaniu mającej powstać dla Państwa zabudowy korzystamy z najnowszych narzędzi programistycznych, umożliwiających wierną wizualizacją i aranżację tworzonych mebli. Obecnie wykorzystujemy narzędzia takie jest program CAD Kuchnie firmy CAD Projekt oraz PRO100.",
  },
};

export default async function Page() {
  const { data: promo } = await getImages("voucher");
  const { data, error } = await getImages(
    undefined,
    promo.mediaItems.nodes?.map((item: any) => item.id) || []
  );
  return (
    <div>
      <Skeleton
        title="Projektowanie"
        content={
          <Content
            paragraphs={[
              "Przy projektowaniu mającej powstać dla Państwa zabudowy korzystamy z najnowszych narzędzi programistycznych, umożliwiających wierną wizualizacją i aranżację tworzonych mebli.",
              "Obecnie wykorzystujemy narzędzia takie jest program CAD Kuchnie firmy CAD Projekt oraz PRO100.",
            ]}
          />
        }
        media={[designing.src]}
      />
      <Advantages media={data.mediaItems.nodes || []} />
      <Banner />
      <Desc
        title="Twój styl, nasze rozwiązania"
        content={
          <Content
            paragraphs={[
              "Wbudowane bazy mebli i sprzętu AGD wielu znanych producentów, pozwalają na wierne odwzorowanie mającej powstać dla Państwa zabudowy, dzięki czemu już w fazie projektu klient może odbyć wirtualny spacer po swojej przyszłej kuchni lub innym projektowanym pomieszczeniu.",
              "Istnieje możliwość tworzenia własnych – nietypowych elementów zabudowy, dzięki którym możemy z powodzeniem zaprojektować również takie pomieszczenia jak biuro, salon, łazienka, sklep, itp.",
            ]}
          />
        }
        media={data.mediaItems.nodes || []}
      />
      {!error && (
        <Gallery title="Galeria" media={data.mediaItems.nodes || []} />
      )}
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
