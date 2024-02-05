import Contact from "@/components/home/contact/contact";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Nav from "@/components/materials/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Materiały | Sekwoja - Meble na wymiar",
  openGraph: {
    title: "Materiały | Sekwoja - Meble na wymiar",
  },
};

export default function Page() {
  return (
    <div>
      <Nav />
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
