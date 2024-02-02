import { brushPattern } from "@/assets/images";
import Image from "next/image";

export default function Hero({ title, content, media }: Section) {
  return (
    <section
      className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] pt-[1in] pb-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center bg-background-dark"
      style={{
        backgroundImage: `url(${brushPattern.src})`,
      }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none text-white">
          {title}
        </h2>
        {content}
      </div>
      {media.length > 0 && (
        <div
          className={`grid sm:grid-rows-[2.5in_6rem_4rem] grid-rows-[1.5in_6rem_4rem] ${
            media.length > 1
              ? "gap-4 grid-cols-[3rem_12rem_1fr]"
              : "grid-cols-[1fr] sm:grid-rows-[3in] grid-rows-[2in]"
          } w-full relative z-10`}
        >
          <div
            className={`relative ${
              media.length > 1 ? "col-[2/4] row-[1/3]" : ""
            } rounded-md overflow-hidden`}
          >
            <Image
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover h-full w-full"
              src={media[0]}
              alt={title}
            />
          </div>
          {media.length > 1 && (
            <div className="relative col-[1/3] row-[2/4] rounded-md overflow-hidden">
              <Image
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover h-full w-full"
                src={media[1]}
                alt={title}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
