import CalendarIcon from "@/assets/icons/calendar";
import Button from "./button";
import PhoneIcon from "@/assets/icons/phone";
import Image from "next/image";
import { logo } from "@/assets/images";
import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white border-[#E2E2E2] border-b-[1px] flex items-center justify-between px-[8vw] md:px-[4vw] 2xl:px-[16vw] h-[64px] md:h-[72px] -ml-4">
      <Link href="/">
        <Image width={96} height={48} src={logo} alt="Sekwoja Logo" />
      </Link>
      <Nav />
      <div className="items-center gap-2 hidden md:flex">
        <Button className="fill-secondary" variant="secondary">
          <PhoneIcon /> Zamów rozmowę
        </Button>
        <Button className="fill-secondary">
          <CalendarIcon /> Zamów pomiar
        </Button>
      </div>
    </header>
  );
}
