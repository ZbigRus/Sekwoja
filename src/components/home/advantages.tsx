import { slider1 } from "@/assets/images/hero/hero";
import { ADVANTAGES } from "@/const/advantages";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="flex flex-col gap-4 px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] relative">
      <p className="text-primary uppercase text-sm text-center">
        dlaczego warto postawić na nas
      </p>
      <h2 className="font-medium text-2xl xl:text-3xl text-center text-white">
        Co wyróżnia Sekwoję?
      </h2>
      <div className="flex flex-col sm:grid grid-cols-2 xl:grid-cols-4 mt-8 gap-6">
        {ADVANTAGES.map((adv, i) => (
          <AdvantageRef
            {...adv}
            isDown={i === 0 || i === ADVANTAGES.length - 1}
            key={adv.title}
          />
        ))}
      </div>
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          objectFit="cover"
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

function AdvantageRef({
  isDown = false,
  title,
  icon,
}: Advantage & { isDown?: boolean }) {
  const Icon = () => icon;
  return (
    <div
      className={`bg-white rounded-md border-[1px] border-[#F1F7F4] py-10 px-8 flex flex-col items-center gap-4 ${
        isDown ? "xl:mt-8" : "h-max"
      }`}
    >
      <Icon />
      <h3 className="text-xl text-center font-medium">{title}</h3>
    </div>
  );
}
