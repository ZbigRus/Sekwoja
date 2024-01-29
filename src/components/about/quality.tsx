import Image from "next/image";
import Button from "../ui/button";
import {
  kitchenLeftCenter,
  kitchenRightBottom,
  kitchenRightTop,
} from "@/assets/images/kitchen/kitchen";
import Link from "next/link";

export default function Quality() {
  return (
    <section className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none">
          Jakość, Styl, Szybka Obsługa - Meble,
          <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%] after:ml-auto">
            <span>spełniające</span>
          </div>{" "}
          Twoje oczekiwania
        </h2>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          Korzystając z wieloletniego doświadczenia staramy się sprostać
          wszelkim oczekiwaniom naszych klientów. Proponujemy rozwiązania
          konstrukcyjne łączące funkcjonalność oraz niepowtarzalną estetykę.
        </p>
        <p className="text-sm text-[#0C1611]/80 font-medium">
          W zakresie wykonywanych przez nas usług, a także doboru materiałów,
          powstające u nas meble gwarantują wysoką jakość wykonania, a wszystko
          to dzięki wyspecjalizowanej kadrze i posiadanej bazie maszynowej.
          Naszym klientom gwarantujemy profesjonalną, niezwykle szybką, rzetelną
          i godną najwyższego zaufania obsługę w zakresie doradztwa, pomiaru,
          projektu, transportu, montażu i serwisu.
        </p>
        <Link href="/realizacje">
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
