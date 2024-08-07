import Contact from "@/components/home/contact/contact";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Desc from "@/components/materials/desc";
import Hero from "@/components/materials/hero";
import Nav from "@/components/materials/nav";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { MATERIALS_CATEGORIES } from "@/const/materials";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = { params: { type: string } };

export function generateMetadata({ params }: Props): Metadata {
  const props = MATERIALS_CATEGORIES.find(
    (item) => item.link === `/materialy/${params.type}`
  );
  if (!props) return {};
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
    title: `${props.title} | Sekwoja - Meble na wymiar`,
    openGraph: {
      title: `${props.title} | Sekwoja - Meble na wymiar`,
    },
  };
}

export default async function Page({ params }: Props) {
  const props = MATERIALS_CATEGORIES.find(
    (item) => item.link === `/materialy/${params.type}`
  );
  if (!props) return redirect("/materialy");
  const { hero, desc } = props;
  return (
    <div className="relative">
      <div className="absolute left-[8vw] md:left-[4vw] 2xl:left-[16vw] top-8">
        <Breadcrumbs
          className="text-white/80"
          activeClassName="font-medium text-white"
        />
      </div>
      <Hero {...hero} type={params.type} />
      <Desc {...desc} />
      <Nav />
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
