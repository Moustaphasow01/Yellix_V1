import { cn } from "@/lib/cn";
import { getProductBadgeLabel } from "@/lib/shop";
import type { ShopProductBadge } from "@/data/shop";

const badgeClasses: Record<ShopProductBadge, string> = {
  best_seller: "border-[#00BFA533] bg-[#00BFA512] text-[#00BFA5]",
  new: "border-[#2F6BFF33] bg-[#2F6BFF12] text-[#2F6BFF]",
  quote: "border-[rgba(8,19,31,0.14)] bg-[rgba(8,19,31,0.04)] text-[var(--color-midnight)]",
  featured: "border-[#08131f1f] bg-[#08131f12] text-[var(--color-midnight)]",
  kit: "border-[#F5A62333] bg-[#F5A62312] text-[#A96E00]",
  bundle: "border-[#7C9A3D33] bg-[#7C9A3D12] text-[#627B29]",
};

export function ProductBadge({ badge }: { badge: ShopProductBadge }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em]",
        badgeClasses[badge],
      )}
    >
      {getProductBadgeLabel(badge)}
    </span>
  );
}
