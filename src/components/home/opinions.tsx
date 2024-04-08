import StarIcon from "@/assets/icons/star";
import { OPINIONS } from "@/const/opinions";
import Link from "next/link";

export default function Opinions() {
  return (
    <section className="bg-background-dark px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] flex flex-col gap-4">
      <h2 className="font-medium text-2xl xl:text-3xl text-white">
        Co mowią o nas klienci
      </h2>
      <p className="text-white/80 text-sm">
        Opinie klientów to nasza największa rekomendacja - dowiedz się, dlaczego
        nasze meble zdobywają serca i domy
      </p>
      <div className="mt-8 flex flex-col gap-6 lg:grid grid-cols-3">
        {OPINIONS.map((opinion, i) => (
          <OpinionRef {...opinion} key={`opinion:${i}`} />
        ))}
      </div>
      <Link
        className="mt-8 w-max text-white after:block after:h-[1px] after:bg-primary after:w-full after:max-w-[25%] after:transition-all hover:after:max-w-[50%] after:ml-auto"
        href="https://www.google.com/maps/place/Sekwoja.+Meble/@50.0614937,21.4432365,17z/data=!4m18!1m9!3m8!1s0x473d0970c2a79487:0x6294c8084be3d919!2sSekwoja.+Meble!8m2!3d50.0614937!4d21.4458114!9m1!1b1!16s%2Fg%2F12q4wtgjx!3m7!1s0x473d0970c2a79487:0x6294c8084be3d919!8m2!3d50.0614937!4d21.4458114!9m1!1b1!16s%2Fg%2F12q4wtgjx?entry=ttu"
      >
        Zobacz wszystkie opinie google
      </Link>
    </section>
  );
}

function OpinionRef({ content, author, rating }: Opinion) {
  return (
    <div className="bg-secondary-dark rounded px-8 pb-10 pt-8 flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <span className="text-primary text-4xl leading-none h-[24px]">“</span>
        <blockquote className="text-white/80 leading-relaxed">
          {content}
        </blockquote>
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap mt-2">
        <span className="text-sm text-white">{author}</span>
        <div className="flex items-center gap-2">
          <StarIcon />
          <span className="text-sm text-white font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
}
