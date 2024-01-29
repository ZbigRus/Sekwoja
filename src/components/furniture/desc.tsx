import { brushPattern } from "@/assets/images";

export default function Desc({ title, content, media }: Section) {
  return (
    <section
      className="px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1.6in] flex flex-col lg:grid grid-cols-2 gap-16 2xl:gap-32 lg:items-center bg-background-dark"
      style={{
        backgroundImage: `url(${brushPattern.src})`,
      }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-medium text-2xl xl:text-3xl mb-4 select-none after:block after:h-[3px] after:bg-primary after:w-full after:max-w-[60%] after:ml-auto after:mr-[5%] w-max text-white">
          {title}
        </h2>
        {content}
      </div>
      <div className="grid gap-4"></div>
    </section>
  );
}
