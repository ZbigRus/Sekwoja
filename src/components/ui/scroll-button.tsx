"use client";

import ArrowRightIcon from "@/assets/icons/arrow-right";
import { MouseEvent } from "react";

export default function ScrollButton() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className="transition-colors w-max rounded-md px-5 h-11 flex items-center gap-2 text-sm group border-[#464646] border-[1px] hover:border-white hover:bg-white hover:text-background-dark text-white"
    >
      Do góry
      <div className="-rotate-90 stroke-white group-hover:stroke-black transition-colors">
        <ArrowRightIcon />
      </div>
    </button>
  );
}
