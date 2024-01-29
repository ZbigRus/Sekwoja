"use client";

import { LINKS } from "@/const/general";
import { CATEGORIES } from "@/const/products";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type Props = {
  className?: string;
  activeClassName?: string;
};

export default function Breadcrumbs({
  className,
  activeClassName = "text-secondary",
}: Props) {
  const pathname = usePathname();
  const pagesArr = pathname.split("/").filter((item) => item);
  const [, subpage] = pagesArr;
  const pageTitle = LINKS.find((item) => pathname.startsWith(item.href))?.title;
  const subpageTitle = CATEGORIES.find((item) =>
    pathname.endsWith(item.link)
  )?.title;
  return (
    <div className={`flex items-center gap-2 text-sm font-medium ${className}`}>
      <Link href="/">Strona główna</Link>
      <span> - </span>
      <span className={subpage ? "" : activeClassName}>{pageTitle}</span>
      {subpage && (
        <Fragment>
          <span> - </span>
          <span className={activeClassName}>{subpageTitle}</span>
        </Fragment>
      )}
    </div>
  );
}
