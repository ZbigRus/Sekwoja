import { LINKS } from "@/const/general";
import NavLink from "./nav-link";
import ArrowRightIcon from "@/assets/icons/arrow-right";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import FacebookIcon from "@/assets/icons/fb";
import InstagramIcon from "@/assets/icons/ig";

export default function Footer() {
  return (
    <footer className="bg-background-dark flex-col gap-y-8 gap-x-4 sm:flex-row flex sm:items-center justify-between px-[8vw] md:px-[4vw] 2xl:px-[16vw] py-8 xl:py-0 xl:h-[7rem]">
      <Image width={96} height={48} src={logo} alt="Sekwoja Logo" />
      <nav className="flex items-center gap-x-[calc(2rem+1vw)] gap-y-2 flex-wrap">
        {LINKS.map((link) => (
          <NavLink className="text-white" {...link} key={link.title} />
        ))}
      </nav>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href="https://www.facebook.com/sekwoja.debica"
          target="_blank"
          className="h-11 w-11 fill-white rounded border-[1px] border-[#464646] grid place-content-center"
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.facebook.com/sekwoja.debica"
          target="_blank"
          className="h-11 w-11 fill-white rounded border-[1px] border-[#464646] grid place-content-center"
        >
          <FacebookIcon />
        </Link>
        <button className="transition-colors w-max rounded-md px-5 h-11 flex items-center gap-2 text-sm group border-[#464646] border-[1px] hover:border-white hover:bg-white hover:text-background-dark text-white">
          Do góry
          <div className="-rotate-90 stroke-white group-hover:stroke-black transition-colors">
            <ArrowRightIcon />
          </div>
        </button>
      </div>
    </footer>
  );
}
