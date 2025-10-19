import Image from 'next/image';
import Link from 'next/link';
import {
  kitchenLeftCenter,
  kitchenRightBottom,
  kitchenRightTop,
} from '@/assets/images/kitchen/kitchen';
import Button from '../ui/button';

export default function Kitchen() {
  return (
    <section className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none">
          Odkryj kolekcje{' '}
          <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%] after:ml-auto">
            <span>kuchni klasycznej</span>
          </div>{' '}
          zdobionej elementami LOFT
        </h2>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Nasza najnowsza kolekcja kuchni to połączenie elegancji klasycznych
          wzorów z industrialnymi akcentami LOFT. Jasne kolory i proste formy
          mebli tworzą harmonijną kompozycję, która nie tylko przyciąga uwagę,
          ale także przyczynia się do uczucia ładu i porządku w Twoim wnętrzu.
        </p>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Dzięki starannemu wykonaniu i dbałości o każdy detal, nasze kuchnie
          klasyczne z elementami LOFT stanowią idealne połączenie stylu i
          funkcjonalności. Wybierając nasze meble, inwestujesz w jakość i
          trwałość, które przetrwają przez lata.
        </p>
        <Link href="/meble/kuchenne">
          <Button asChild className="mt-4 w-max" variant="secondary">
            Pokaż więcej zdjęć
          </Button>
        </Link>
      </div>
      <div className="grid sm:grid-rows-[3rem_2in_2in_1rem] grid-rows-[3rem_1.5in_1.5in_1rem] grid-cols-[1fr_3rem_2fr] gap-4">
        <div className="relative col-[2/4] row-[1/3] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover h-full w-full"
            src={kitchenRightTop}
            alt="Kitchen Picture"
          />
        </div>
        <div className="relative col-[1/3] row-[2/4] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover h-full w-full"
            src={kitchenLeftCenter}
            alt="Kitchen Picture"
          />
        </div>
        <div className="relative col-[3/4] row-[3/5] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover h-full w-full"
            src={kitchenRightBottom}
            alt="Kitchen Picture"
          />
        </div>
      </div>
    </section>
  );
}
