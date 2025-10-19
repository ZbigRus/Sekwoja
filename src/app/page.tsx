import Advantages from '@/components/home/advantages';
import AGD from '@/components/home/agd';
import Banner from '@/components/home/banner';
import Blog from '@/components/home/blog';
import Contact from '@/components/home/contact/contact';
import Furniture from '@/components/home/furniture/furniture';
import Hero from '@/components/home/hero/hero';
import Kitchen from '@/components/home/kitchen';
import Opinions from '@/components/home/opinions';
import Partners from '@/components/home/partners';
import Products from '@/components/home/products';
import Sofa from '@/components/home/sofa';
import Vouchers from '@/components/home/vouchers';
import { getImages } from '@/lib/[type]/actions';

export default async function Home() {
  const { data: media } = await getImages('voucher');
  return (
    <div className="flex flex-col">
      <Hero />
      <Vouchers media={media?.mediaItems?.nodes || []} />
      <Products />
      <Banner />
      <Opinions />
      <AGD />
      <Kitchen />
      <Advantages />
      <Blog limit={3} />
      <Sofa />
      <Furniture />
      <Partners />
      <Contact />
    </div>
  );
}
