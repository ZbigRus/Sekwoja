import { brushPattern } from "@/assets/images";
import Button from "../../ui/button";
import ImageSlider from "./image-slider";
import Link from "next/link";

export default function Furniture() {
  return (
    <section className="bg-background-dark flex flex-col lg:grid grid-cols-[4fr_5fr]">
      <ImageSlider>
        <div
          className="py-[0.8in] lg:py-[2in] px-[8vw] md:pl-[6vw] md:pr-[8vw] 2xl:pl-[8vw] 2xl:pr-[16vw]"
          style={{
            backgroundImage: `url(${brushPattern.src})`,
          }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none text-white">
              Zaaranżujmy twoją przestrzeń razem - meble{" "}
              <div className="inline-block after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[75%] after:transition-all hover:after:max-w-[50%] after:ml-auto">
                <span>najwyższej jakości</span>
              </div>
            </h2>
            <p className="text-sm text-white/80 font-medium">
              Zapraszamy do odkrycia naszej nowej kolekcji mebli, która
              doskonale łączy funkcjonalność, elegancję i wyjątkowy design. Bez
              względu na to, czy planujesz urządzić nową przestrzeń do pracy,
              czy też szukasz mebli do salonu, nasza oferta spełni Twoje
              oczekiwania.
            </p>
            <p className="text-sm text-white/80 font-medium">
              Każdy z naszych mebli jest starannie wykonany z najwyższej jakości
              materiałów, co gwarantuje trwałość i unikalny styl. Nasze produkty
              nie tylko zapewniają komfort użytkowania, ale także dodają
              charakteru Twojemu wnętrzu. Razem możemy stworzyć aranżację, która
              nie tylko spełni, ale również przewyższy Twoje oczekiwania.
              Zaaranżujmy razem przestrzeń, która odzwierciedli Twój unikalny
              styl i potrzeby.
            </p>
            <Link href="/projektowanie">
              <Button asChild className="mt-4 w-max" variant="secondary">
                Dowiedz się więcej
              </Button>
            </Link>
          </div>
        </div>
      </ImageSlider>
    </section>
  );
}
