import ArrowRightIcon from "@/assets/icons/arrow-right";
import Link from "next/link";
import Button from "../ui/button";
import { Suspense } from "react";
import PostLoader from "./blog/post-loader";
import PostsList from "./blog/list";

export default function Blog({
  suggestion,
  hideButton,
}: {
  hideButton?: boolean;
  suggestion?: boolean;
}) {
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
        <PostsList />
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
