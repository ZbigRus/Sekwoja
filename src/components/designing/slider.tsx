"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Slider({ media }: { media: Media[] }) {
  const [index, setIndex] = useState(0);
  const activeImage = media[index];
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setTimeout(
      () => setIndex((prev) => (prev === 0 ? 1 : 0)),
      5000
    );
    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, [index]);

  return (
    <div className="overflow-hidden h-[6in] rounded-md flex flex-col items-center relative z-10">
      <div className="h-full w-screen sm:w-[20vw]">
        <Image
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          src={activeImage.sourceUrl}
          alt={activeImage.altText}
        />
      </div>
      <div className="absolute bottom-8 flex items-center gap-2 z-10">
        {Array.from(Array(media.length)).map((_, i) => (
          <button
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? "bg-primary" : "bg-white"
            }`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
