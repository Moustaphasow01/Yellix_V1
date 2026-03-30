"use client";

import Link from "next/link";
import { Building2, Headset, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";
import type { ShopProduct } from "@/data/shop";
import { buttonStyles } from "@/components/button-link";
import { AddToCartBar } from "@/components/shop/add-to-cart-bar";
import { PriceBlock } from "@/components/shop/price-block";
import { QuantitySelector } from "@/components/shop/quantity-selector";
import { StockBadge } from "@/components/shop/stock-badge";
import { useShop } from "@/components/shop/shop-provider";
import { cn } from "@/lib/cn";
import { getShopBrandBySlug } from "@/lib/shop";

export function ProductPurchasePanel({ product }: { product: ShopProduct }) {
  const { addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const brand = getShopBrandBySlug(product.brandSlug);
  const activeVariant =
    product.variants.find((variant) => variant.id === variantId) ?? product.variants[0];
  const displayPriceHT = activeVariant?.priceHT ?? product.priceHT;
  const displayPriceTTC = activeVariant?.priceTTC ?? product.priceTTC;
  const displayStock = activeVariant?.stockStatus ?? product.stockStatus;
  const canAddToCart = !product.quoteOnly && displayStock !== "out_of_stock";
  const quoteHref = `/quote?product=${product.slug}`;

  function handleAddToCart() {
    if (!canAddToCart) return;
    addToCart(product.slug, quantity, activeVariant?.id);
  }

  return (
    <>
      <aside className="rounded-[30px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_46px_rgba(8,19,31,0.06)] lg:sticky lg:top-[8.9rem]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              {brand?.name ?? product.brandSlug}
            </p>
            <h1 className="mt-2 text-[clamp(1.8rem,3vw,2.6rem)] leading-[1] text-[var(--color-midnight)]">
              {product.name}
            </h1>
            <p className="mt-3 text-[0.86rem] leading-6 text-[var(--color-slate)]">
              Reference {activeVariant?.sku ?? product.sku}
            </p>
          </div>
          <StockBadge status={displayStock} />
        </div>

        <div className="mt-5">
          <PriceBlock
            priceHT={displayPriceHT}
            priceTTC={displayPriceTTC}
            leadTime={product.leadTime}
          />
        </div>

        <div className="mt-5 grid gap-4">
          {product.variants.length > 0 ? (
            <div className="space-y-2">
              <label
                htmlFor="product-variant"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]"
              >
                Variante
              </label>
              <select
                id="product-variant"
                value={activeVariant?.id ?? ""}
                onChange={(event) => setVariantId(event.target.value)}
                className="shop-select"
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.label}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Quantite
            </p>
            <QuantitySelector value={quantity} onChange={setQuantity} />
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!canAddToCart}
            className={cn(
              buttonStyles("primary"),
              "min-h-[3.2rem] w-full justify-center px-5",
              !canAddToCart && "pointer-events-none opacity-50",
            )}
          >
            <ShoppingCart className="h-4 w-4" />
            Ajouter au panier
          </button>
          <Link href={quoteHref} className={cn(buttonStyles("ghost"), "min-h-[3.2rem] w-full px-5")}>
            Demander un devis
          </Link>
          <Link href="/contact" className={cn(buttonStyles("ghost"), "min-h-[3rem] w-full px-5")}>
            Besoin d&apos;un conseil technique ?
          </Link>
        </div>

        <div className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-5">
          <div className="flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] bg-[var(--color-panel-soft)] text-[var(--color-accent)]">
              <Building2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.88rem] font-semibold text-[var(--color-midnight)]">
                Facturation professionnelle
              </p>
              <p className="text-[0.8rem] leading-6 text-[var(--color-slate)]">
                Commandes unitaires, lots et besoins multi-sites.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] bg-[var(--color-panel-soft)] text-[var(--color-accent)]">
              <Truck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.88rem] font-semibold text-[var(--color-midnight)]">
                Livraison estimee
              </p>
              <p className="text-[0.8rem] leading-6 text-[var(--color-slate)]">
                {product.leadTime} selon disponibilite et configuration.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] bg-[var(--color-panel-soft)] text-[var(--color-accent)]">
              <Headset className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.88rem] font-semibold text-[var(--color-midnight)]">
                Support technique
              </p>
              <p className="text-[0.8rem] leading-6 text-[var(--color-slate)]">
                Installation et maintenance disponibles sur demande.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.82rem] leading-6 text-[var(--color-slate)]">
          Commande en volume ? Nous pouvons preparer un devis structure, une alternative kit ou un lot compatible.
        </p>
      </aside>

      <AddToCartBar
        priceHT={displayPriceHT}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        quoteHref={quoteHref}
        disabled={!canAddToCart}
      />
    </>
  );
}
