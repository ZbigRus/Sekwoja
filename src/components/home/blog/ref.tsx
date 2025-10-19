import Image from 'next/image';
import Link from 'next/link';
import ArrowRightIcon from '@/assets/icons/arrow-right';
import CalendarIcon from '@/assets/icons/calendar';

export default function PostRef({
  title,
  uri,
  date,
  featuredImage,
  suggestion,
  excerpt,
}: Post & { suggestion?: boolean }) {
  return (
    <div
      className={`${
        suggestion ? 'bg-white' : 'bg-light'
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
        <div
          className="opacity-80 text-sm mb-2 line-clamp-3"
          /* biome-ignore lint/security/noDangerouslySetInnerHtml: Data comes from WordPress */
          dangerouslySetInnerHTML={{ __html: excerpt }}
        ></div>
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
