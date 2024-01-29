import Desc from "@/components/furniture/desc";
import Skeleton from "@/components/ui/skeleton";
import { CATEGORIES } from "@/const/products";
import { redirect } from "next/navigation";

export default function Page({ params }: { params: { type: string } }) {
  const props = CATEGORIES.find((item) => item.link === `/${params.type}`);
  if (!props) return redirect("/meble");
  const { hero, desc } = props;
  const { title, content } = hero;
  return (
    <div>
      <Skeleton title={title} content={content} />
      <Desc {...desc} />
    </div>
  );
}
