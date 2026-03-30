"use client";

import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import type { ShopProduct } from "@/data/shop";
import { buttonStyles } from "@/components/button-link";
import { PriceBlock } from "@/components/shop/price-block";
import { ProductVisual } from "@/components/shop/product-visual";
import { StockBadge } from "@/components/shop/stock-badge";
import { useShop } from "@/components/shop/shop-provider";
import { cn } from "@/lib/cn";
import { getShopBrandBySlug } from "@/lib/shop";

type ProductCardProps = {
  product: ShopProduct;
  variant?: "grid" | "list";
};

export function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const brand = getShopBrandBySlug(product.brandSlug);
  const canAddToCart = !product.quoteOnly && product.stockStatus !== "out_of_stock";
  const isList = variant === "list";

  return (
    <article
      className={cn(
        "shop-card group overflow-hidden rounded-[22px]",
        isList ? "grid h-full gap-0 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]" : "flex h-full flex-col",
      )}
    >
      <div className="relative">
        <ProductVisual product={product} ratio={isList ? "list" : "card"} />
        <button
          type="button"
          onClick={() => toggleFavorite(product.slug)}
          aria-label={isFavorite(product.slug) ? "Retirer des favoris" : "Ajouter aux favoris"}
          className={cn(
            "absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-midnight)] shadow-[0_8px_18px_rgba(8,19,31,0.08)] transition duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-panel-soft)]",
            isFavorite(product.slug) && "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-midnight)]",
          )}
        >
          <Heart className={cn("h-3 w-3", isFavorite(product.slug) && "fill-current")} />
        </button>
      </div>

      {isList ? (
        <div className="flex flex-col justify-between px-4 py-4 md:px-5">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-0.5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
                  {brand?.name ?? product.brandSlug}
                </p>
                <p className="text-[0.7rem] text-[var(--color-slate)]">{product.leadTime}</p>
              </div>
              <StockBadge status={product.stockStatus} />
            </div>

            <div className="space-y-1">
              <Link
                href={`/shop/product/${product.slug}`}
                className="line-clamp-2 block text-[0.98rem] font-semibold leading-6 text-[var(--color-midnight)] transition duration-200 hover:text-[var(--color-accent)]"
              >
                {product.name}
              </Link>
              <p className="line-clamp-3 text-[0.82rem] leading-6 text-[var(--color-slate)]">
                {product.shortDescription}
              </p>
            </div>

            <div className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] p-3 text-[0.76rem] text-[var(--color-midnight)]">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Usage
                </p>
                <p className="mt-1 line-clamp-2 leading-5">
                  {product.usage.slice(0, 2).join(" • ")}
                </p>
              </div>
            </div>

            <div className="pt-1">
              <PriceBlock priceHT={product.priceHT} compact showTtc={false} />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {canAddToCart ? (
              <button
                type="button"
                onClick={() => addToCart(product.slug, 1, product.variants[0]?.id)}
                className={cn(
                  buttonStyles("primary"),
                  "min-h-[2.5rem] w-full px-4 text-[0.76rem]",
                )}
              >
                <ShoppingCart className="h-3.5 w-3.5" />
                Ajouter au panier
              </button>
            ) : (
              <Link
                href={`/quote?product=${product.slug}`}
                className={cn(
                  buttonStyles("primary"),
                  "min-h-[2.5rem] w-full px-4 text-[0.76rem]",
                )}
              >
                Demander un devis
              </Link>
            )}
            <Link
              href={`/shop/product/${product.slug}`}
              className={cn(
                buttonStyles("ghost"),
                "min-h-[2.5rem] w-full px-4 text-[0.76rem]",
              )}
            >
              Voir la fiche
            </Link>
          </div>
        </div>
      ) : (
        <div className={cn("flex flex-1 flex-col px-3 py-3")}>
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-0.5">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
                {brand?.name ?? product.brandSlug}
              </p>
            </div>
            <StockBadge status={product.stockStatus} />
          </div>

          <div className="mt-1.5 space-y-1">
            <Link
              href={`/shop/product/${product.slug}`}
              className="line-clamp-2 block text-[0.84rem] font-semibold leading-5 text-[var(--color-midnight)] transition duration-200 hover:text-[var(--color-accent)]"
            >
              {product.name}
            </Link>
          </div>

          <div className="mt-auto pt-3">
            <PriceBlock priceHT={product.priceHT} compact showTtc={false} />
          </div>

          <div className="mt-3 flex items-center gap-2">
            {canAddToCart ? (
              <button
                type="button"
                onClick={() => addToCart(product.slug, 1, product.variants[0]?.id)}
                className={cn(buttonStyles("primary"), "min-h-[2.2rem] flex-1 px-3 text-[0.72rem]")}
              >
                <ShoppingCart className="h-3 w-3" />
                Ajouter
              </button>
            ) : (
              <Link
                href={`/quote?product=${product.slug}`}
                className={cn(buttonStyles("ghost"), "min-h-[2.2rem] flex-1 px-3 text-[0.72rem]")}
              >
                Demander un devis
              </Link>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
