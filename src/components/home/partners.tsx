import { PARTNERS } from "@/assets/images/partners/partners";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="flex flex-col gap-12 px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] text-center border-y-[1px] border-[#0C1611]/15">
      <h2 className="font-medium text-2xl xl:text-3xl">Nasi partnerzy</h2>
      <div className="flex items-center justify-center xl:justify-between gap-8 flex-wrap">
        {PARTNERS.map((item) => (
          <Image
            title={item.title}
            src={item.image}
            alt={item.title}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
}
