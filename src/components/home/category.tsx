import ArrowRightIcon from "@/assets/icons/arrow-right";
import Link from "next/link";

export default function CategoryRef({
  index,
  title,
  link,
  icon,
}: Category & { index: number }) {
  const Icon = () => icon;
  return (
    <Link
      href={link}
      className={`bg-white [&:nth-child(4n-3)]:bg-[#F7F8F8] [&:nth-child(4n)]:bg-[#F7F8F8] ${
        index > 3
          ? "lg:even:bg-[#F7F8F8] lg:odd:!bg-white"
          : "lg:odd:bg-[#F7F8F8] lg:even:!bg-white"
      } border-collapse border-[1px] border-[#F7F8F8] py-10 px-[8vw] sm:px-8 flex flex-col gap-5 group`}
    >
      <Icon />
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-lg xl:text-xl group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <div className="group-hover:translate-x-1 -translate-x-1 transition-transform stroke-black mt-2">
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}
