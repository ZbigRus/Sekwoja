import Partners from "@/components/home/partners";
import Products from "@/components/home/products";
import Contact from "../kontakt/page";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Products />
      <Partners />
      <Contact />
    </div>
  );
}
