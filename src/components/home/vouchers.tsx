import Image from 'next/image';
import Link from 'next/link';
import PinIcon from '@/assets/icons/pin';

export default function Vouchers({ media }: { media: Media[] }) {
  if (media.length === 0) return;
  return (
    <section className="flex flex-col gap-8 sm:px-[8vw] md:px-[4vw] py-[0.6in] lg:py-[1in] items-center">
      <h2 className="text-xl text-center font-medium">
        Unikalne oferty przygotowane dla Ciebie
      </h2>
      <div className="bg-light border-[#E2E2E2] border-dashed border-[1px] px-[8vw] sm:px-14 flex flex-col py-10 gap-x-16 gap-y-8 md:flex-row flex-wrap xl:grid grid-cols-2 md:justify-center sm:rounded-xl w-full xl:w-max relative">
        <figure className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-md shadow relative !w-full !max-w-full xl:w-max mb-3">
            <Image
              width={512}
              height={512}
              src={media[0].sourceUrl}
              alt={media[0].altText}
            />
          </div>
          <figcaption
            /* biome-ignore lint/security/noDangerouslySetInnerHtml: Data comes from WordPress */
            dangerouslySetInnerHTML={{ __html: media[0].caption }}
            className="text-lg font-medium"
          ></figcaption>
          <Link
            className="bg-white stroke-[#E2E2E2] px-5 py-2.5 font-medium w-max rounded-md text-sm"
            href="/regulaminy-promocji.pdf"
            download="regulaminy-promocji"
          >
            Pokaż regulamin
          </Link>
        </figure>
        {media.length > 1 && (
          <figure className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-md shadow relative !w-full !max-w-full xl:w-max mb-3">
              <Image
                width={512}
                height={512}
                src={media[1].sourceUrl}
                alt={media[1].altText}
              />
            </div>
            <figcaption
              /* biome-ignore lint/security/noDangerouslySetInnerHtml: Data comes from WordPress */
              dangerouslySetInnerHTML={{ __html: media[1].caption }}
              className="text-lg font-medium"
            ></figcaption>
            <Link
              className="bg-white stroke-[#E2E2E2] px-5 py-2.5 font-medium w-max rounded-md text-sm"
              href="/regulaminy-promocji.pdf"
              download="regulaminy-promocji"
            >
              Pokaż regulamin
            </Link>
          </figure>
        )}
        <div className="absolute w-16 -left-4 -top-4">
          <PinIcon />
        </div>
        <div className="absolute w-16 -right-4 -top-4">
          <div className="scale-x-[-1]">
            <PinIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
