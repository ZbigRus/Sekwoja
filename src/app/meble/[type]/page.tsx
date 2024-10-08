import Desc from "@/components/furniture/desc";
import Gallery from "@/components/furniture/gallery";
import Skeleton from "@/components/ui/skeleton";
import { CATEGORIES } from "@/const/products";
import { getImages } from "@/lib/[type]/actions";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = { params: { type: string } };

export const revalidate = 3600;

export function generateMetadata({ params }: Props): Metadata {
  const props = CATEGORIES.find(
    (item) => item.link === `/meble/${params.type}`
  );
  if (!props) return {};
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
    title: `${props.title} | Sekwoja - Meble na wymiar`,
    openGraph: {
      title: `${props.title} | Sekwoja - Meble na wymiar`,
    },
  };
}

// export function generateStaticParams() {
//   return CATEGORIES.map(({ link }) => ({
//     type: link.split("/").pop(),
//   }));
// }

export default async function Page({ params }: Props) {
  const props = CATEGORIES.find(
    (item) => item.link === `/meble/${params.type}`
  );
  if (!props) redirect("/meble");
  const { hero, desc } = props;
  const { data, error } = await getImages(params.type);
  if (error) redirect("/meble");
  return (
    <div>
      <Skeleton {...hero} />
      <Gallery media={data.mediaItems.nodes || []} title={props.title} />
      <Desc {...desc} media={data.mediaItems.nodes || []} />
    </div>
  );
}
