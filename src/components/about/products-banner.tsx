import Image from 'next/image';
import CheckIcon from '@/assets/icons/check';
import { slider1 } from '@/assets/images/hero/hero';

const PRODUCTS = [
  'Meble kuchenne nowoczesne i klasyczne',
  'Szafy wnękowe i garderoby',
  'Meble biurowe i sklepowe',
  'Meble pokojowe i sypialniane',
  'Meble łazienkowe',
  'Komody, regały',
  'Meble nietypowe według indywidualnych zamówień',
];

export default function ProductsBanner() {
  return (
    <section className="flex flex-col gap-4 px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] relative">
      <h2 className="font-medium text-2xl xl:text-3xl text-center text-white">
        Naszym klientom oferujemy
      </h2>
      <div className="flex flex-col sm:grid grid-cols-2 xl:grid-cols-4 mt-8 gap-6">
        {PRODUCTS.map((title) => (
          <ProductRef title={title} key={title} />
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          className="object-cover"
          fill
          sizes="100vw"
          src={slider1}
          alt="Room photo"
        />
      </div>
      <div className="absolute inset-0 w-full h-full -z-10 bg-[linear-gradient(180deg,#111B16_0%,rgba(17,27,22,0)_100%)]"></div>
    </section>
  );
}

const ProductRef = ({ title }: { title: string }) => (
  <div className="bg-white rounded-md border-[1px] border-[#F1F7F4] py-10 px-8 flex flex-col items-center gap-4">
    <CheckIcon />
    <h3 className="text-xl text-center font-medium">{title}</h3>
  </div>
);
