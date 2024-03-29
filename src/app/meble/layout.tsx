import Partners from "@/components/home/partners";
import Products from "@/components/home/products";
import Opinions from "@/components/home/opinions";
import Contact from "@/components/home/contact/contact";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {children}
      <Products />
      <Opinions />
      <Partners />
      <Contact />
    </div>
  );
}
