import ArrowRightIcon from "@/assets/icons/arrow-right";
import CalendarIcon from "@/assets/icons/calendar";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { Suspense } from "react";
import PostLoader from "./blog/post-loader";

export default function Blog({
  posts,
  suggestion,
  hideButton,
}: {
  posts: Post[];
  hideButton?: boolean;
  suggestion?: boolean;
}) {
  if (posts.length === 0) return;
  return (
    <section
      className={`flex flex-col gap-4 px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] ${
        suggestion ? "bg-light" : "bg-white"
      }`}
    >
      <h2 className="font-medium text-2xl xl:text-3xl">
        {suggestion
          ? "Przeglądaj nasze pozostałe wpisy"
          : "Blog - inspiracje i praktyczne porady"}
      </h2>
      <p className="text-[#1C1C1C]/80 text-sm ">
        Skarbnica pomysłów na wyjątkowe wnętrza i długotrwałe meble
      </p>
      <Suspense fallback={<PostLoader />}>
        <div className="flex flex-col md:grid grid-cols-3 mt-8 gap-8">
          {posts.map((item) => (
            <PostRef {...item} suggestion={suggestion} key={item.uri} />
          ))}
        </div>
      </Suspense>
      {!hideButton && (
        <Link href="/blog">
          <Button
            asChild
            className="mt-4 w-max stroke-secondary"
            variant="secondary"
          >
            Pokaż wszystkie wpisy
            <ArrowRightIcon />
          </Button>
        </Link>
      )}
    </section>
  );
}

function PostRef({
  title,
  uri,
  date,
  featuredImage,
  suggestion,
}: Post & { suggestion?: boolean }) {
  return (
    <div
      className={`${
        suggestion ? "bg-white" : "bg-light"
      } rounded-xl overflow-hidden grid grid-rows-[2in_1fr]`}
    >
      <div className="w-full h-full relative">
        {featuredImage && (
          <Image
            fill
            sizes="33vw"
            className="object-cover"
            src={featuredImage.node.sourceUrl}
            alt=""
          />
        )}
      </div>
      <div className="px-8 py-10 flex flex-col gap-4">
        <div className="flex items-center gap-2 fill-secondary">
          <CalendarIcon />
          <span className="text-sm opacity-80">
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-xl">{title}</h3>
        <p className="opacity-80 text-sm mb-2">
          Lorem ipsum dolor sit amet consectetur. Nam gravida lacinia nisl eu
          nulla pretium maecenas eget pulvinar.
        </p>
        <Link
          href={`/blog${uri}`}
          className="stroke-secondary flex items-center gap-2 text-sm mt-auto"
        >
          Czytaj całość
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
