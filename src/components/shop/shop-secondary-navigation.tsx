"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { shopSecondaryNavigation } from "@/data/shop";
import { cn } from "@/lib/cn";

function isSecondaryActive(pathname: string, href: string) {
  if (href.startsWith("/shop#")) {
    return pathname === "/shop";
  }

  if (href === "/shop") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function ShopSecondaryNavigation() {
  const pathname = usePathname();

  return (
    <div className="sticky top-[4rem] z-40 border-b border-[var(--color-border)] bg-[rgba(247,249,252,0.88)] backdrop-blur-xl">
      <div className="container-shell overflow-x-auto py-3 shop-scrollbar">
        <nav className="flex min-w-max items-center gap-2">
          {shopSecondaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shop-chip whitespace-nowrap",
                isSecondaryActive(pathname, item.href) && "shop-chip-active",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
