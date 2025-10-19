'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import FacebookIcon from '@/assets/icons/fb';
import InstagramIcon from '@/assets/icons/ig';
import { LINKS } from '@/const/general';
import NavLink from './nav-link';

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);
  }, [pathname]);

  return (
    <div className="flex items-center">
      <div className="flex items-center px-3 md:hidden border-l-[1px] border-[#E2E2E2]">
        <Link
          href="https://www.instagram.com/sekwoja_mebeldesign/"
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
      <button
        type="button"
        onClick={() => setIsActive((prev) => !prev)}
        className="flex flex-col gap-1.5 justify-center relative md:hidden"
      >
        <div
          className={`w-7 bg-secondary h-[3px] rounded ${
            isActive ? 'opacity-0' : 'opacity-100'
          } transition-opacity`}
        />
        <div
          className={`w-7 bg-secondary h-[3px] rounded ${
            isActive ? 'opacity-0' : 'opacity-100'
          } transition-opacity`}
        />
        <div
          className={`w-5 self-end bg-secondary h-[3px] rounded ${
            isActive ? 'opacity-0' : 'opacity-100'
          } transition-opacity`}
        />
        <div
          className={`absolute w-7 bg-secondary h-[3px] rounded transition-transform origin-center ${
            isActive ? '-rotate-45' : 'rotate-0'
          }`}
        />
        <div
          className={`absolute w-7 bg-secondary h-[3px] rounded transition-transform origin-center ${
            isActive ? 'rotate-45' : 'rotate-0'
          }`}
        />
      </button>
      <nav
        className={`absolute md:relative shadow md:shadow-none flex-col md:flex-row flex items-center md:gap-[2vw] 2xl:gap-[2vw] bg-white right-0 left-0 top-full md:top-0 pb-4 md:pb-0 transition-opacity ${
          isActive ? 'opacity-100' : ' opacity-0 pointer-events-none'
        } md:opacity-100 md:pointer-events-auto`}
      >
        {LINKS.map((link) => (
          <NavLink {...link} key={link.title} />
        ))}
      </nav>
    </div>
  );
}
