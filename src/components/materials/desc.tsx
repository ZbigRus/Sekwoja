import TriangleIcon from "@/assets/icons/triangle";
import Image from "next/image";

export default function Desc({ title, content, media }: Section) {
  console.log(media);
  return (
    <section className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center bg-[#F7F3E5]/75 relative">
      <div className="grid grid-rows-[2rem_1in_1.5in_2rem] md:grid-rows-[2rem_1.75in_2.25in_2rem] grid-cols-[1fr_4rem_1fr] gap-x-4 w-full relative z-10 order-last lg:order-first min-h-full">
        <div className="relative row-[1/3] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover h-full w-full"
            src={media[0]}
            alt={title}
          />
        </div>
        <div className="relative col-[2/4] row-[2/4] rounded-md overflow-hidden">
          <Image
            fill
            sizes="(min-width: 1024px) 40vw, 50vw"
            className="object-cover h-full w-full"
            src={media[2]}
            alt={title}
          />
        </div>
        <div className="col-[1/3] row-[3/5] p-5 bg-[#F9F6EB] rounded-md relative z-10">
          <div className="relative rounded-md overflow-hidden h-full">
            <Image
              fill
              sizes="(min-width: 1024px) 40vw, 50vw"
              className="object-cover h-full w-full"
              src={media[1]}
              alt={title}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 relative z-10">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none max-w-[5in]">
          {title}
        </h2>
        {content}
      </div>
      <div className="absolute -left-8 lg:top-0 bottom-0 w-full max-w-[90vw] lg:max-w-[45vw]">
        <TriangleIcon />
      </div>
    </section>
  );
}
