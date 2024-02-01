import CheckIcon from "@/assets/icons/check";
import TriangleIcon from "@/assets/icons/triangle";
import { DESIGN_ADVANTAGES } from "@/const/designing";
import Slider from "./slider";

export default function Advantages({ media }: { media: Media[] }) {
  return (
    <section className="sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] flex flex-col lg:grid grid-cols-[25vw_1fr_25vw] gap-16 2xl:gap-32 lg:items-center bg-[#F7F3E5]/75 relative">
      <div className="col-span-2 flex flex-col gap-4 relative z-10">
        {DESIGN_ADVANTAGES.slice(0, 4).map((adv) => (
          <AdvantageRef {...adv} key={adv.title} />
        ))}
      </div>
      <Slider media={media.slice(media.length - 4, media.length - 2) || []} />
      <div className="order-last sm:order-none">
        <Slider media={media.slice(media.length - 2, media.length) || []} />
      </div>
      <div className="col-span-2 flex flex-col gap-4 relative z-10">
        {DESIGN_ADVANTAGES.slice(4, 6).map((adv) => (
          <AdvantageRef {...adv} key={adv.title} />
        ))}
      </div>
      <div className="absolute left-0 bottom-0 w-full max-w-[90vw]">
        <TriangleIcon />
      </div>
    </section>
  );
}

const AdvantageRef = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-white rounded-md border-[1px] border-[#F1F7F4] py-10 px-8 flex flex-col items-start gap-4">
    <div className="grid grid-cols-[max-content_1fr] gap-4">
      <CheckIcon />
      <h3 className="text-xl font-medium leading-none">{title}</h3>
    </div>

    <p className="text-[#0C1611]/80 text-sm font-medium">{desc}</p>
  </div>
);
