"use client";

import { LINKS } from "@/const/general";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  activeClassName?: string;
};

export default function Breadcrumbs({ activeClassName }: Props) {
  const pathname = usePathname();
  const pageTitle = LINKS.find((item) => pathname.startsWith(item.href))?.title;
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <Link href="/">Strona główna</Link>
      <span> - </span>
      <span className="text-secondary">{pageTitle}</span>
    </div>
  );
}
