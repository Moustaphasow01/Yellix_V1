"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/data/site";
import { cn } from "@/lib/cn";
import { useShop } from "@/components/shop/shop-provider";

type SiteHeaderProps = {
  items: NavigationItem[];
};

function isActive(pathname: string, href: string, activeHash: string) {
  if (href.startsWith("/#")) {
    return pathname === "/" && activeHash === href.slice(1);
  }

  if (href === "/") {
    return pathname === href && activeHash.length === 0;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ items }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const { cartCount, favoritesCount } = useShop();

  const utilityLinks = [
    {
      href: "/shop#catalogue",
      label: "Rechercher dans le shop",
      icon: Search,
      count: undefined,
      active: pathname.startsWith("/shop"),
    },
    {
      href: "/account#favoris",
      label: "Favoris",
      icon: Heart,
      count: favoritesCount,
      active: pathname.startsWith("/account") && activeHash === "#favoris",
    },
    {
      href: "/account",
      label: "Compte",
      icon: UserRound,
      count: undefined,
      active: pathname.startsWith("/account") && activeHash !== "#favoris",
    },
    {
      href: "/cart",
      label: "Panier",
      icon: ShoppingCart,
      count: cartCount,
      active: pathname.startsWith("/cart") || pathname.startsWith("/checkout"),
    },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    const onHashChange = () => setActiveHash(window.location.hash);

    onScroll();
    onHashChange();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition duration-300",
          isScrolled
            ? "border-b border-white/8 bg-[rgba(8,19,31,0.92)] shadow-[0_8px_24px_rgba(3,8,16,0.18)] backdrop-blur-xl"
            : "border-b border-white/8 bg-[rgba(8,19,31,0.92)] shadow-[0_8px_24px_rgba(3,8,16,0.12)] backdrop-blur-xl",
        )}
      >
        <div className="container-shell flex h-[4rem] items-center justify-between gap-5 md:h-[4.2rem] md:gap-7">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-[1.15rem] border border-white/12 bg-white/[0.07] text-[0.92rem] font-semibold">
              Y
            </span>
            <span className="text-[1.02rem] font-semibold tracking-[-0.03em]">Yellix Group</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[0.94rem] font-medium transition duration-200",
                  isActive(pathname, item.href, activeHash)
                    ? "border border-white/10 bg-white/[0.055] text-white"
                    : "text-[rgba(247,249,252,0.82)] hover:bg-white/[0.045] hover:text-[rgba(247,249,252,0.98)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {utilityLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    "relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-200",
                    item.active
                      ? "border-white/18 bg-white/[0.16] text-white shadow-[0_6px_18px_rgba(8,19,31,0.2)]"
                      : "border-white/14 bg-white/[0.11] text-white hover:border-white/22 hover:bg-white/[0.18]",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.count && item.count > 0 ? (
                    <span className="absolute -right-1 -top-1 inline-flex min-w-[1.1rem] items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[10px] font-semibold text-[var(--color-midnight)]">
                      {item.count}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.07] text-white lg:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(8,19,31,0.96)] px-6 pb-8 pt-28 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25 }}
              className="mx-auto flex h-full max-w-xl flex-col rounded-[32px] border border-white/10 bg-white/5 p-6"
            >
              <div className="space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block rounded-[22px] px-4 py-4 text-base font-medium transition duration-200",
                      isActive(pathname, item.href, activeHash)
                        ? "bg-white/10 text-white"
                        : "text-white/72 hover:bg-white/7 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {utilityLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "relative flex h-12 items-center justify-center rounded-[18px] border border-white/14 bg-white/[0.11] text-white transition duration-200 hover:border-white/22 hover:bg-white/[0.18]",
                        item.active && "border-white/18 bg-white/[0.16] text-white",
                      )}
                      aria-label={item.label}
                    >
                      <Icon className="h-4 w-4" />
                      {item.count && item.count > 0 ? (
                        <span className="absolute right-2 top-2 inline-flex min-w-[1rem] items-center justify-center rounded-full bg-[var(--color-accent)] px-1 text-[9px] font-semibold text-[var(--color-midnight)]">
                          {item.count}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto space-y-4 rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.04)] p-5">
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
                  Yellix Group
                </p>
                <p className="text-sm leading-7 text-white/70">
                  Shop, devis et parcours corporate reunis dans une meme experience sobre et
                  technique.
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
