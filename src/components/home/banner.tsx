import Image from 'next/image';
import Link from 'next/link';
import CalendarIcon from '@/assets/icons/calendar';
import { slider1 } from '@/assets/images/hero/hero';
import Button from '../ui/button';

export default function Banner() {
  return (
    <section className="px-4 sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw] flex flex-col lg:flex-row items-center lg:flex-wrap gap-x-8 gap-y-4 justify-center min-h-[2.2in] lg:min-h-[1.8in] relative">
      <h2 className="font-medium text-2xl xl:text-3xl text-white text-center lg:text-left">
        Skontaktuj się z naszym specjalistą
      </h2>
      <Link href="/kontakt">
        <Button asChild className="fill-secondary">
          <CalendarIcon /> Zamów pomiar
        </Button>
      </Link>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          className="object-cover"
          fill
          sizes="100vw"
          src={slider1}
          alt="Room photo"
        />
      </div>
      <div className="bg-[#171612]/65 h-full w-full absolute inset-0 -z-10"></div>
    </section>
  );
}
