"use client";

import { Trash2 } from "lucide-react";
import type { DetailedCartLine } from "@/components/shop/shop-provider";
import { PriceBlock } from "@/components/shop/price-block";
import { ProductVisual } from "@/components/shop/product-visual";
import { QuantitySelector } from "@/components/shop/quantity-selector";
import { useShop } from "@/components/shop/shop-provider";
import { getShopBrandBySlug } from "@/lib/shop";

export function CartItem({ line }: { line: DetailedCartLine }) {
  const { updateQuantity, removeFromCart } = useShop();
  const brand = getShopBrandBySlug(line.product.brandSlug);

  return (
    <article className="rounded-[28px] border border-[var(--color-border)] bg-white p-4 shadow-[0_16px_36px_rgba(8,19,31,0.05)]">
      <div className="grid gap-4 md:grid-cols-[10rem_minmax(0,1fr)]">
        <ProductVisual product={line.product} ratio="thumbnail" />

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              {brand?.name ?? line.product.brandSlug}
            </p>
            <h2 className="text-[1rem] leading-6 text-[var(--color-midnight)]">{line.product.name}</h2>
            <p className="text-[0.82rem] leading-6 text-[var(--color-slate)]">{line.product.sku}</p>
            {line.variant ? (
              <p className="text-[0.82rem] leading-6 text-[var(--color-slate)]">
                Variante: {line.variant.label}
              </p>
            ) : null}
          </div>

          <div className="space-y-4 md:text-right">
            <PriceBlock priceHT={line.subtotalHT} priceTTC={line.subtotalTTC} compact />
            <div className="flex items-center gap-3 md:justify-end">
              <QuantitySelector
                value={line.quantity}
                onChange={(value) =>
                  updateQuantity(line.product.slug, value, line.variant?.id)
                }
              />
              <button
                type="button"
                onClick={() => removeFromCart(line.product.slug, line.variant?.id)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-slate)] transition duration-200 hover:border-[#ef444433] hover:text-[#b91c1c]"
                aria-label={`Supprimer ${line.product.name} du panier`}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
