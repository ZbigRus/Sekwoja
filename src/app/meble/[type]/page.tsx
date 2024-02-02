import Desc from "@/components/furniture/desc";
import Gallery from "@/components/furniture/gallery";
import Skeleton from "@/components/ui/skeleton";
import { CATEGORIES } from "@/const/products";
import { getImages } from "@/lib/[type]/actions";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { type: string } }) {
  const props = CATEGORIES.find(
    (item) => item.link === `/meble/${params.type}`
  );
  if (!props) return redirect("/meble");
  const { hero, desc } = props;
  const { data, error } = await getImages(params.type);
  if (error) return redirect("/meble");
  return (
    <div>
      <Skeleton {...hero} />
      <Gallery media={data.mediaItems.nodes || []} title={props.title} />
      <Desc {...desc} media={data.mediaItems.nodes || []} />
    </div>
  );
}
