import Image from 'next/image';
import Link from 'next/link';
import TriangleIcon from '@/assets/icons/triangle';
import { s2img1 } from '@/assets/images/about';
import { slider1 } from '@/assets/images/hero/hero';
import Button from '../ui/button';

export default function LearnMore() {
  return (
    <section className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center bg-[#F7F3E5]/75 relative">
      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none max-w-[5in]">
          Poznaj nas bliżej
        </h2>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Realizujemy zamówienia na terenie całej Polski, a także w wielu
          krajach europejskich, co umożliwia nam posiadana baza transportowa.
        </p>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Przeszkoleni fachowcy z najwyższą starannością troszczą o się
          powstające u nas meble przez cały proces produkcyjny, na montażu u
          klienta kończąc.
        </p>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Wykonując meble bazujemy na wszelkich dostępnych na rynku meblarskim
          materiałach. Posiadamy bogatą kolorystykę płyt i blatów (w tym
          drewnianych i kamiennych), a także szeroką gamę akcesoriów meblowych.
          W naszej ofercie znajdziecie Państwo również sprzęt AGD i RTV
          wolnostojący i do zabudowy renomowanych firm krajowych i
          zagranicznych, a także stoły i akcesoria bilardowe.
        </p>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Zapraszamy wszystkich Państwa do odwiedzenia siedziby naszej firmy i
          do zapoznania się z pełnym wachlarzem oferowanych usług.
        </p>
        <Link href="/projektowanie#gallery">
          <Button className="mt-4 w-max" variant="secondary">
            Zobacz nasze realizacje
          </Button>
        </Link>
      </div>
      <div className="grid sm:grid-rows-[2.5in_6rem_4rem] grid-rows-[1.5in_6rem_4rem] grid-cols-[3rem_12rem_1fr] gap-4 w-full relative z-10">
        <div className="relative col-[2/4] row-[1/3] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover h-full w-full"
            src={s2img1}
            alt="Children room furniture picture"
          />
        </div>
        <div className="relative col-[1/3] row-[2/4] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 50vw"
            className="object-cover h-full w-full"
            src={slider1}
            alt="Children room furniture picture"
          />
        </div>
      </div>
      <div className="absolute -left-8 lg:top-0 bottom-0 w-full max-w-[90vw] lg:max-w-[45vw]">
        <TriangleIcon />
      </div>
    </section>
  );
}
