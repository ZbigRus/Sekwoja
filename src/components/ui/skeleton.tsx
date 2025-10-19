import Breadcrumbs from './breadcrumbs';

export default function Skeleton({ title, content, media }: Section) {
  return (
    <section
      className="min-h-[5in] bg-[15%_50%] px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-8 flex flex-col justify-center relative gap-8"
      style={{ backgroundImage: `url('${media[0]}')` }}
    >
      <Breadcrumbs
        className="text-white/80 absolute top-8 left-[8vw] md:left-[4vw] 2xl:left-[16vw]"
        activeClassName="text-white"
      />
      <h1 className="font-medium text-2xl xl:text-3xl text-white">{title}</h1>
      <div className="md:max-w-[40%]">{content}</div>
    </section>
  );
}
