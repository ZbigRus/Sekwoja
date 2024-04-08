"use client";

import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider6,
  slider7,
  slider8,
  slider9,
} from "@/assets/images/hero/hero";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";

const IMAGES = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider6,
  slider7,
  slider8,
  slider9,
];

export default function ImageSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setTimeout(
      () =>
        setCurrentImage((prev) => (prev >= IMAGES.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, [currentImage]);

  return (
    <Fragment>
      <div className="lg:absolute lg:inset-0 lg:w-full lg:h-full grid grid-cols-1 lg:grid-cols-2 flex-1">
        <div className="bg-background-dark hidden lg:block"></div>
        <div className="w-full h-full relative">
          <Image
            className="object-cover"
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            loading="eager"
            src={IMAGES[currentImage]}
            priority
            alt="Room photo"
          />
        </div>
        {/* <div className="bg-[#151308]/50 absolute inset-0 w-full h-full z-10"></div> */}
      </div>
      {children}
      <div className="absolute right-[8vw] bottom-4 lg:relative lg:right-0 flex flex-col gap-3 justify-self-end z-10">
        {Array.from(Array(IMAGES.length)).map((_item, i) => (
          <button
            onClick={() => setCurrentImage(i)}
            className={`rounded-full h-3 w-3 ${
              currentImage === i ? "bg-primary" : "bg-white"
            }`}
            key={i}
          />
        ))}
      </div>
    </Fragment>
  );
}
