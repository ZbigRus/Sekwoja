import ArrowRightIcon from "@/assets/icons/arrow-right";
import CalendarIcon from "@/assets/icons/calendar";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return;
  return (
    <section className="flex flex-col gap-4 sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in]">
      <h2 className="font-medium text-2xl xl:text-3xl px-[8vw] sm:px-0">
        Blog - inspiracje i praktyczne porady
      </h2>
      <p className="text-[#1C1C1C]/80 text-sm px-[8vw] sm:px-0">
        Skarbnica pomysłów na wyjątkowe wnętrza i długotrwałe meble
      </p>
      <div className="grid grid-cols-3 mt-8 gap-8">
        {posts.map((item) => (
          <PostRef {...item} key={item.uri} />
        ))}
      </div>
    </section>
  );
}

function PostRef({ title, content, uri, date, featuredImage }: Post) {
  return (
    <div className="bg-light rounded-xl overflow-hidden grid grid-rows-[2in_1fr]">
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
          href={uri}
          className="stroke-secondary flex items-center gap-2 text-sm mt-auto"
        >
          Czytaj całość
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
