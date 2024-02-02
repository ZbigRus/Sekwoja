import { agd, logo, maxKuchnieLogo } from "@/assets/images";
import Image from "next/image";

export default function AGD() {
  return (
    <section
      className="bg-[#111B16] h-[4in] md:h-[6in] px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-[0.6in] lg:py-[1in] flex items-center justify-center bg-no-repeat bg-center bg-cover relative mb-8 lg:mb-0"
      style={{ backgroundImage: `url('${agd.src}')` }}
    >
      <div className="flex flex-col gap-6 items-center text-white">
        <h2 className="flex items-center gap-[1ch] uppercase font-medium text-xl xl:text-2xl">
          <strong className="bg-secondary p-2 rounded font-medium">
            5 lat gwarancji
          </strong>{" "}
          na AGD!
        </h2>
        <p className="xl:text-lg font-medium text-center max-w-[4in] xl:max-w-[5in]">
          Zyskaj 5 lat gwarancji na sprzęt AGD przy zakupie produktów marki Max
          Kuchnie
        </p>
      </div>
      <div className="absolute flex items-center gap-4 rounded-md bg-white translate-y-1/2 px-6 py-3 shadow-xl bottom-0">
        <Image width={72} height={72} src={logo} alt="Sekwoja Logo" />
        <span className="block text-[#A6A39A] font-bold text-xl">X</span>
        <Image
          className="ml-2"
          width={72}
          height={72}
          src={maxKuchnieLogo}
          alt="Max Kuchnie Logo"
        />
      </div>
    </section>
  );
}
