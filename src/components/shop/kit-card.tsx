import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ShopKit } from "@/data/shop";
import { formatPriceHT } from "@/lib/shop";

type KitCardProps = {
  kit: ShopKit;
  includedCount: number;
};

export function KitCard({ kit, includedCount }: KitCardProps) {
  return (
    <Link
      href={`/shop/product/${kit.slug}`}
      className="shop-card group flex h-full flex-col rounded-[28px] px-5 py-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-midnight)]">
          {kit.badge}
        </span>
        <span className="text-[0.8rem] font-semibold text-[var(--color-accent)]">
          {formatPriceHT(kit.priceHT)}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-[1.2rem] leading-[1.06] text-[var(--color-midnight)]">{kit.name}</h3>
        <p className="text-[0.84rem] leading-6 text-[var(--color-slate)]">{kit.subtitle}</p>
      </div>

      <p className="mt-4 text-[0.84rem] leading-6 text-[var(--color-slate)]">{kit.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[0.72rem] font-medium text-[var(--color-midnight)]">
          {includedCount} references
        </span>
        {kit.outcomes.map((outcome) => (
          <span
            key={outcome}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-3 py-1 text-[0.72rem] font-medium text-[var(--color-midnight)]"
          >
            {outcome}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-[var(--color-midnight)] transition duration-200 group-hover:translate-x-1">
        Voir le pack
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
