'use client';

import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import { slider1, slider2, slider3 } from '@/assets/images/hero/hero';

const IMAGES = [slider1, slider2, slider3];

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
      5000,
    );
    return () => {
      timer.current && window.clearTimeout(timer.current);
    };
  }, [currentImage]);

  return (
    <Fragment>
      {children}
      <div className="w-full h-full relative lg:order-first min-h-[50vh] lg:min-h-0">
        <Image
          className="object-cover"
          fill
          sizes="100vw"
          src={IMAGES[currentImage]}
          alt="Room photo"
        />
        <div className="flex items-center gap-3 absolute right-[15%] bottom-8 z-10">
          {Array.from(Array(IMAGES.length)).map((_item, i) => (
            <button
              type="button"
              onClick={() => setCurrentImage(i)}
              className={`rounded-full h-3 w-3 ${
                currentImage === i ? 'bg-primary' : 'bg-white'
              }`}
              key={i}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
