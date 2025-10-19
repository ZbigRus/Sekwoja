import Image from 'next/image';
import Link from 'next/link';
import TriangleIcon from '@/assets/icons/triangle';
import { sofaBig, sofaSmall } from '@/assets/images/sofa/sofa';
import Button from '../ui/button';

export default function Sofa() {
  return (
    <section className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center bg-[#F7F3E5]/75 relative">
      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none max-w-[5in]">
          Odkryj naszą kolekcję{' '}
          <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%]">
            <span> wbudowanych mebli</span>
          </div>{' '}
          pokojowych
        </h2>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Nasza najnowsza kolekcja wbudowanych mebli pokojowych to połączenie
          świeżości nowoczesnego designu z urokiem retro. Wykorzystanie ciepłych
          odcieni i wyrafinowanych kształtów mebli tworzy spójną kompozycję,
          która nie tylko przyciąga uwagę, ale także przyczynia się do
          stworzenia przytulnego i stylowego wnętrza.
        </p>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Dzięki starannemu wykonaniu i zastosowaniu wysokiej jakości
          materiałów, nasze meble nie tylko prezentują się doskonale, ale
          również gwarantują niezrównany komfort użytkowania. Stanowią one
          idealne rozwiązanie dla tych, którzy cenią elegancję i wygodę w
          jednym. Odkryj, jak nasza kolekcja wbudowanych mebli pokojowych może
          urozmaicić i ulepszyć Twoją przestrzeń.
        </p>
        <Link href="/meble/pokojowe">
          <Button asChild className="mt-4 w-max" variant="secondary">
            Pokaż więcej zdjęć
          </Button>
        </Link>
      </div>
      <div className="grid sm:grid-rows-[3in_4rem_4rem] grid-rows-[1.5in_4rem_4rem] grid-cols-[3rem_9rem_1fr] gap-4 w-full relative z-10">
        <div className="relative col-[2/4] row-[1/3] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover h-full w-full"
            src={sofaBig}
            alt="Children room furniture picture"
          />
        </div>
        <div className="relative col-[1/3] row-[2/4] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 50vw"
            className="object-cover h-full w-full"
            src={sofaSmall}
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
