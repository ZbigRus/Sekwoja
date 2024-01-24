import Partners from "@/components/home/partners";
import Products from "@/components/home/products";
import Contact from "../kontakt/page";
import Opinions from "@/components/home/opinions";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Products />
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
