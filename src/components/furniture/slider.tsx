"use client";

import ArrowRightIcon from "@/assets/icons/arrow-right";
import CameraIcon from "@/assets/icons/camera";
import XIcon from "@/assets/icons/x";
import Image from "next/image";
import { Fragment, useLayoutEffect, useState } from "react";

export default function Slider({
  title,
  media,
}: { media: Media[] } & Pick<Section, "title">) {
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    setIndex(0);
  }, [isActive]);

  return (
    <Fragment>
      <div className={`relative h-72 lg:h-[20rem] overflow-hidden sm:rounded`}>
        <Image
          className="object-cover sm:rounded"
          fill
          sizes="50vw"
          src={media[4].sourceUrl}
          alt={media[4].altText}
        />
        <button
          onClick={() => setIsActive(true)}
          className="bg-[#111B16]/65 hover:bg-[#111B16]/85 transition-colors absolute inset-0 flex items-center justify-center w-full text-white text-sm font-medium fill-primary gap-2"
        >
          <CameraIcon />
          Przeglądaj wszystkie zdjęcia
        </button>
      </div>
      <div
        className={`fixed w-screen h-screen inset-0 z-50 flex flex-col justify-center items-center ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative z-10">
          <div className="px-[8vw] sm:px-[16vw] flex flex-col gap-2 mb-8">
            <button
              onClick={() => setIsActive(false)}
              className="border-[#8E8E8E] border-[1px] rounded-md px-5 py-2.5 flex items-center gap-2 text-white text-sm font-medium fill-primary w-max mb-6"
            >
              <XIcon />
              Zamknij galerię
            </button>
            <span className="text-white/80 font-medium">
              Przeglądasz wszystke zdjęcia
            </span>
            <h2 className="font-medium text-2xl xl:text-3xl text-white">
              {title}
            </h2>
          </div>
          <div className="w-screen sm:px-[16vw] relative flex items-center">
            <div
              style={{
                transform: `translateX(calc(${index} * 68vw * -1 - ${index} * 16px))`,
              }}
              className="items-center w-max gap-4 transition-transform sm:flex hidden"
            >
              {media.map((item, i) => (
                <ImageRef {...item} isActive={index === i} key={`media:${i}`} />
              ))}
            </div>
            <div
              style={{
                transform: `translateX(calc(${index} * 100vw * -1 - ${index} * 16px))`,
              }}
              className="flex items-center w-max gap-4 transition-transform sm:hidden"
            >
              {media.map((item, i) => (
                <ImageRef {...item} isActive={index === i} key={`media:${i}`} />
              ))}
            </div>
            {index > 0 && (
              <button
                onClick={() => setIndex((prev) => prev - 1)}
                className="rounded-full bg-white shadow stroke-font absolute sm:left-[12vw] left-4 h-12 w-12 flex items-center justify-center"
              >
                <div className="-rotate-180">
                  <ArrowRightIcon />
                </div>
              </button>
            )}
            {index < media.length - 1 && (
              <button
                onClick={() => setIndex((prev) => prev + 1)}
                className="rounded-full bg-white shadow stroke-font absolute right-4 sm:right-[12vw] h-12 w-12 flex items-center justify-center"
              >
                <ArrowRightIcon />
              </button>
            )}
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-[#1C1C1C]/95"></div>
      </div>
    </Fragment>
  );
}

const ImageRef = ({
  sourceUrl,
  altText,
  isActive,
}: Media & { isActive: boolean }) => (
  <div
    className={`relative h-[45vh] sm:h-[65vh] w-screen overflow-hidden sm:w-[68vw] transition-transform ${
      isActive ? "scale-100" : "scale-90"
    }`}
  >
    <Image
      className="object-contain object-center relative z-20"
      fill
      sizes="(max-width: 640px) 100vw, 68vw"
      src={sourceUrl}
      alt={altText}
    />
    <div
      style={{ backgroundImage: `url('${sourceUrl}')` }}
      className="bg-cover absolute inset-0 w-full h-full transition-opacity blur-sm sm:rounded"
    ></div>
    <div className="absolute bg-font/85 inset-0 w-full h-full transition-opacity z-10"></div>
    <div
      className={`absolute bg-[#111B16]/55 z-20 inset-0 w-full h-full transition-opacity ${
        isActive ? "opacity-0" : "opacity-100"
      }`}
    ></div>
  </div>
);
