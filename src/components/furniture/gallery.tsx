import Image from "next/image";
import Button from "../ui/button";
import CalendarIcon from "@/assets/icons/calendar";
import Slider from "./slider";
import Link from "next/link";

export default function Gallery({
  media,
  title,
}: { media: Media[] } & Pick<Section, "title">) {
  return (
    <section
      id="gallery"
      className="sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in]"
    >
      <div className="flex items-center gap-4 justify-between px-[8vw] sm:px-0 mb-4">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none after:block after:h-[3px] after:bg-secondary after:w-full after:max-w-[60%] after:ml-auto after:mr-[5%]">
          Nasze realizacje
        </h2>
        <Link href="/kontakt">
          <Button className="fill-secondary mb-2 hidden sm:flex">
            <CalendarIcon /> Zamów pomiar
          </Button>
        </Link>
      </div>
      {media.length > 0 && (
        <div className="flex flex-col lg:grid grid-cols-[3fr_1fr_3fr] gap-4">
          <div
            className={`relative h-72 lg:h-[30rem] col-span-3 sm:rounded overflow-hidden`}
          >
            <Image
              className="object-contain sm:rounded relative z-20"
              fill
              sizes="100vw"
              src={media[0].sourceUrl}
              alt={media[0].altText}
              loading="eager"
            />
            <div
              style={{ backgroundImage: `url('${media[0].sourceUrl}')` }}
              className="bg-cover absolute inset-0 w-full h-full transition-opacity blur-sm sm:rounded bg-center"
            ></div>
            <div className="absolute inset-0 z-10 w-full h-full bg-black/60"></div>
          </div>
          {media.length > 1 && (
            <div
              className={`relative h-72 lg:h-[20rem] sm:rounded overflow-hidden`}
            >
              <Image
                className="object-contain sm:rounded relative z-20"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={media[1].sourceUrl}
                alt={media[1].altText}
              />
              <div
                style={{ backgroundImage: `url('${media[1].sourceUrl}')` }}
                className="bg-cover absolute inset-0 w-full h-full transition-opacity blur-sm sm:rounded bg-center"
              ></div>
              <div className="absolute inset-0 z-10 w-full h-full bg-black/60"></div>
            </div>
          )}
          {media.length > 2 && (
            <div
              className={`relative h-72 lg:h-[20rem] col-span-2 sm:rounded overflow-hidden`}
            >
              <Image
                className="object-contain sm:rounded relative z-20"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={media[2].sourceUrl}
                alt={media[2].altText}
              />
              <div
                style={{ backgroundImage: `url('${media[2].sourceUrl}')` }}
                className="bg-cover absolute inset-0 w-full h-full transition-opacity blur-sm sm:rounded bg-center"
              ></div>
              <div className="absolute inset-0 z-10 w-full h-full bg-black/60"></div>
            </div>
          )}
          {media.length > 3 && (
            <div
              className={`relative h-72 lg:h-[20rem] col-span-2 sm:rounded overflow-hidden`}
            >
              <Image
                className="object-contain sm:rounded relative z-20"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={media[3].sourceUrl}
                alt={media[3].altText}
              />
              <div
                style={{ backgroundImage: `url('${media[3].sourceUrl}')` }}
                className="bg-cover absolute inset-0 w-full h-full transition-opacity blur-sm sm:rounded bg-center"
              ></div>
              <div className="absolute inset-0 z-10 w-full h-full bg-black/60"></div>
            </div>
          )}
          {media.length > 4 && <Slider media={media} title={title} />}
        </div>
      )}
    </section>
  );
}
