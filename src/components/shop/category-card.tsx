import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ShopCategory } from "@/data/shop";
import { getShopCategoryTheme } from "@/lib/shop-theme";

type CategoryCardProps = {
  category: ShopCategory;
  count: number;
};

export function CategoryCard({ category, count }: CategoryCardProps) {
  const theme = getShopCategoryTheme(category);
  const Icon = theme.icon;

  return (
    <Link
      href={`/shop/category/${category.slug}`}
      className="shop-card group flex h-full flex-col overflow-hidden rounded-[28px]"
    >
      <div className="relative overflow-hidden border-b border-[var(--color-border)] px-5 py-5">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${theme.soft}, rgba(255,255,255,0.95))`,
          }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border bg-white"
            style={{ borderColor: theme.border, color: theme.accent }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <span className="rounded-full border border-[var(--color-border)] bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            {count} references
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="text-[1.22rem] leading-[1.06] text-[var(--color-midnight)]">{category.name}</h3>
        <p className="mt-3 text-[0.85rem] leading-6 text-[var(--color-slate)]">
          {category.shortDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.8rem] font-semibold text-[var(--color-midnight)] transition duration-200 group-hover:translate-x-1">
          {category.ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
