import { PARTNERS } from "@/assets/images/partners/partners";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="flex flex-col gap-12 px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] text-center border-y-[1px] border-[#0C1611]/15">
      <h2 className="font-medium text-2xl xl:text-3xl">Nasi partnerzy</h2>
      <div className="overflow-hidden whitespace-nowrap flex items-center">
        <div className="relative flex items-center animate-slide min-w-max">
          {PARTNERS.map((item) => (
            <Image
              className="max-w-[156px] max-h-[72px] object-contain mx-4 md:mx-8"
              title={item.title}
              src={item.image}
              alt={item.title}
              key={item.title}
            />
          ))}
        </div>
        <div className="relative flex items-center animate-slide min-w-max">
          {PARTNERS.map((item) => (
            <Image
              className="max-w-[156px] max-h-[72px] object-contain mx-4 md:mx-8"
              title={item.title}
              src={item.image}
              alt={item.title}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
