'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  title,
  href,
  className = '',
}: NavLink & { className?: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-sm font-medium py-2 md:py-0 after:block after:w-full after:bg-secondary after:transition-all after:h-[2px] ${className} ${
        pathname.startsWith(href)
          ? 'after:max-w-[60%]'
          : 'after:max-w-[0%] hover:after:max-w-[60%]'
      }`}
    >
      {title}
    </Link>
  );
}
