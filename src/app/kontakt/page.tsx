import Contact from "@/components/home/contact/contact";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default function Page({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const defaultType = searchParams.type || "measurement";
  return (
    <div>
      <div className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] mt-8">
        <Breadcrumbs />
      </div>
      <Contact defaultType={defaultType} isExpanded />
    </div>
  );
}
