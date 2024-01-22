"use client";

import { LINKS } from "@/const/general";
import { Fragment, useEffect, useState } from "react";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <Fragment>
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className="flex flex-col gap-1.5 justify-center relative md:hidden"
      >
        <div
          className={`w-7 bg-secondary h-[3px] rounded ${
            isActive ? "opacity-0" : "opacity-100"
          } transition-opacity`}
        />
        <div
          className={`w-7 bg-secondary h-[3px] rounded ${
            isActive ? "opacity-0" : "opacity-100"
          } transition-opacity`}
        />
        <div
          className={`w-7 bg-secondary h-[3px] rounded ${
            isActive ? "opacity-0" : "opacity-100"
          } transition-opacity`}
        />
        <div
          className={`absolute w-7 bg-secondary h-[3px] rounded transition-transform origin-center ${
            isActive ? "-rotate-45" : "rotate-0"
          }`}
        />
        <div
          className={`absolute w-7 bg-secondary h-[3px] rounded transition-transform origin-center ${
            isActive ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
      <nav
        className={`absolute md:relative shadow md:shadow-none flex-col md:flex-row flex items-center md:gap-[2vw] 2xl:gap-[2vw] bg-white right-0 left-0 top-full md:top-0 pb-4 md:pb-0 transition-opacity ${
          isActive ? "opacity-100" : " opacity-0 pointer-events-none"
        } md:opacity-100 md:pointer-events-auto`}
      >
        {LINKS.map((link) => (
          <NavLink {...link} key={link.title} />
        ))}
      </nav>
    </Fragment>
  );
}
