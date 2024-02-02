import Contact from "@/components/home/contact/contact";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Nav from "@/components/materials/nav";

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
