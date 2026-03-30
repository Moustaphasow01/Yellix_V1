import { cn } from "@/lib/cn";
import { getStockLabel } from "@/lib/shop";
import type { ShopStockStatus } from "@/data/shop";

const stockClasses: Record<ShopStockStatus, string> = {
  in_stock: "border-[#00BFA533] bg-[#00BFA512] text-[#007E6D]",
  low_stock: "border-[#F5A62333] bg-[#F5A62312] text-[#A96E00]",
  quote_only: "border-[rgba(8,19,31,0.14)] bg-[rgba(8,19,31,0.04)] text-[var(--color-midnight)]",
  preorder: "border-[#2F6BFF33] bg-[#2F6BFF12] text-[#2F6BFF]",
  out_of_stock: "border-[#ef444433] bg-[#ef444412] text-[#b91c1c]",
};

export function StockBadge({ status }: { status: ShopStockStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em]",
        stockClasses[status],
      )}
    >
      {getStockLabel(status)}
    </span>
  );
}
