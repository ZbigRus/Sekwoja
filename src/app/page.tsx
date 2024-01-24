import Advantages from "@/components/home/advantages";
import Banner from "@/components/home/banner";
import Blog from "@/components/home/blog";
import Contact from "@/components/home/contact/contact";
import Furniture from "@/components/home/furniture/furniture";
import Hero from "@/components/home/hero/hero";
import Kitchen from "@/components/home/kitchen";
import Opinions from "@/components/home/opinions";
import Partners from "@/components/home/partners";
import Products from "@/components/home/products";
import Sofa from "@/components/home/sofa";
import { getRecentPosts } from "@/lib/blog/actions";

export default async function Home() {
  const { data } = await getRecentPosts();
  return (
    <div className="flex flex-col">
      <Hero />
      <Products />
      <Banner />
      <Opinions />
      <Kitchen />
      <Advantages />
      <Blog posts={data?.posts?.nodes || []} />
      <Sofa />
      <Furniture />
      <Partners />
      <Contact />
    </div>
  );
}
