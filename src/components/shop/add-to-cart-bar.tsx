import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { buttonStyles } from "@/components/button-link";
import { QuantitySelector } from "@/components/shop/quantity-selector";
import { formatPriceHT } from "@/lib/shop";
import { cn } from "@/lib/cn";

type AddToCartBarProps = {
  priceHT: number;
  quantity: number;
  onQuantityChange: (value: number) => void;
  onAddToCart: () => void;
  quoteHref: string;
  disabled?: boolean;
};

export function AddToCartBar({
  priceHT,
  quantity,
  onQuantityChange,
  onAddToCart,
  quoteHref,
  disabled = false,
}: AddToCartBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[rgba(247,249,252,0.96)] px-4 py-3 shadow-[0_-18px_40px_rgba(8,19,31,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex w-full max-w-[32rem] items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Prix HT
          </p>
          <p className="text-[0.98rem] font-semibold text-[var(--color-midnight)]">
            {formatPriceHT(priceHT)}
          </p>
        </div>
        <QuantitySelector value={quantity} onChange={onQuantityChange} />
        <button
          type="button"
          onClick={onAddToCart}
          disabled={disabled}
          className={cn(
            buttonStyles("primary"),
            "min-h-[3rem] px-4 text-[0.82rem]",
            disabled && "pointer-events-none opacity-50",
          )}
        >
          <ShoppingCart className="h-4 w-4" />
          Ajouter
        </button>
        <Link href={quoteHref} className={cn(buttonStyles("ghost"), "min-h-[3rem] px-4 text-[0.82rem]")}>
          Devis
        </Link>
      </div>
    </div>
  );
}
