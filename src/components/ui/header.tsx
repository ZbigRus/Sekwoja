import CalendarIcon from "@/assets/icons/calendar";
import Button from "./button";
import PhoneIcon from "@/assets/icons/phone";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import Nav from "./nav";
import InstagramIcon from "@/assets/icons/ig";
import FacebookIcon from "@/assets/icons/fb";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white border-[#E2E2E2] border-b-[1px] flex items-center justify-between px-[8vw] md:px-[4vw] 2xl:px-[16vw] h-[64px] md:h-[72px] -ml-4">
      <Link href="/">
        <Image width={96} height={48} src={logo} alt="Sekwoja Logo" />
      </Link>
      <Nav />
      <div className="items-center gap-2 hidden md:flex pl-3 border-l-[1px] border-[#E2E2E2]">
        <div className="flex items-center mr-3">
          <Link
            href="https://www.facebook.com/sekwoja.debica"
            target="_blank"
            className="fill-font h-8 w-8 flex items-center justify-center"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/sekwoja.debica"
            target="_blank"
            className="fill-font h-8 w-8 flex items-center justify-center"
          >
            <FacebookIcon />
          </Link>
        </div>
        <Link href="/kontakt">
          <Button asChild className="fill-secondary" variant="secondary">
            <PhoneIcon /> Zamów rozmowę
          </Button>
        </Link>
        <Link href="/kontakt">
          <Button asChild className="fill-secondary">
            <CalendarIcon /> Zamów pomiar
          </Button>
        </Link>
      </div>
    </header>
  );
}
