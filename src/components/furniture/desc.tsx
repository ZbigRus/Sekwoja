import { brushPattern } from "@/assets/images";
import Image from "next/image";

type T = Omit<Section, "media">;
interface Props extends T {
  media: Media[];
}

export default function Desc({ title, content, media }: Props) {
  return (
    <section
      className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center bg-background-dark"
      style={{
        backgroundImage: `url(${brushPattern.src})`,
      }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[60%] after:ml-auto after:mr-[5%] w-max text-white">
          {title}
        </h2>
        {content}
      </div>
      {media.length > 0 && (
        <div className="grid sm:grid-rows-[2.5in_6rem_4rem] grid-rows-[1.5in_6rem_4rem] grid-cols-[3rem_12rem_1fr] gap-4 w-full relative z-10">
          <div className="relative col-[2/4] row-[1/3] rounded-md overflow-hidden">
            <Image
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover h-full w-full"
              src={media[0].sourceUrl}
              alt={media[0].altText}
            />
          </div>
          <div className="relative col-[1/3] row-[2/4] rounded-md overflow-hidden">
            <Image
              fill
              sizes="(min-width: 1024px) 40vw, 50vw"
              className="object-cover h-full w-full"
              src={media[1].sourceUrl}
              alt={media[1].altText}
            />
          </div>
        </div>
      )}
    </section>
  );
}
