import { CATEGORIES } from '@/const/products';
import CategoryRef from './category';

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
