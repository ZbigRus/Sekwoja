import { MATERIALS_CATEGORIES } from '@/const/materials';
import CategoryRef from '../home/category';

export default function Nav() {
  return (
    <section className="flex flex-col gap-4 sm:px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in]">
      <h2 className="font-medium text-2xl xl:text-3xl px-[8vw] sm:px-0">
        Odkryj bogactwo wyjątkowych materiałów
      </h2>
      <p className="text-[#1C1C1C]/80 text-sm px-[8vw] sm:px-0">
        Eksploruj idealne rozwiązania meblowe z naszymi wysokiej jakości
        materiałami.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-8">
        {MATERIALS_CATEGORIES.map((category, i) => (
          <CategoryRef index={i} {...category} key={category.title} />
        ))}
      </div>
    </section>
  );
}
