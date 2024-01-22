import ArrowRightIcon from "@/assets/icons/arrow-right";
import { CATEGORIES } from "@/const/products";
import Link from "next/link";

export default function Products() {
  return (
    <section className="flex flex-col gap-4 sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in]">
      <h2 className="font-medium text-2xl xl:text-3xl px-[8vw] sm:px-0">
        Odkryj kolekcje cieszące oko
      </h2>
      <p className="text-[#1C1C1C]/80 text-sm px-[8vw] sm:px-0">
        Przeglądaj nasze kategorie mebli, aby znaleźć idealne rozwiązanie
        dopasowane do Twojego gustu i potrzeb.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-8">
        {CATEGORIES.map((category, i) => (
          <CategoryRef index={i} {...category} key={category.title} />
        ))}
      </div>
    </section>
  );
}

function CategoryRef({ index, title, icon }: Category & { index: number }) {
  const Icon = () => icon;
  return (
    <Link
      href="/"
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
