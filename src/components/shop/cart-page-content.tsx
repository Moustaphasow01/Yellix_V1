"use client";

import Link from "next/link";
import { ArrowRight, Building2, TicketPercent } from "lucide-react";
import { useState } from "react";
import { buttonStyles } from "@/components/button-link";
import { CartItem } from "@/components/shop/cart-item";
import { CheckoutSummary } from "@/components/shop/checkout-summary";
import { EmptyState } from "@/components/shop/empty-state";
import { QuoteCTA } from "@/components/shop/quote-cta";
import { useShop } from "@/components/shop/shop-provider";
import { cn } from "@/lib/cn";

export function CartPageContent() {
  const { detailedCart, subtotalHT, subtotalTTC, clearCart } = useShop();
  const [promoCode, setPromoCode] = useState("");

  if (detailedCart.length === 0) {
    return (
      <EmptyState
        title="Votre panier est vide"
        description="Ajoutez des references, des kits ou des accessoires depuis le shop pour preparer une commande ou un devis."
        action={
          <Link href="/shop#catalogue" className={cn(buttonStyles("primary"), "px-5")}>
            Explorer le catalogue
          </Link>
        }
      />
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
      <div className="space-y-5">
        {detailedCart.map((line) => (
          <CartItem
            key={`${line.product.slug}-${line.variant?.id ?? "base"}`}
            line={line}
          />
        ))}

        <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_36px_rgba(8,19,31,0.05)]">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="space-y-2">
              <label
                htmlFor="promo"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]"
              >
                Code promo mock
              </label>
              <div className="flex gap-3">
                <label className="flex min-h-[3.2rem] flex-1 items-center gap-3 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4">
                  <TicketPercent className="h-4 w-4 text-[var(--color-slate)]" />
                  <input
                    id="promo"
                    value={promoCode}
                    onChange={(event) => setPromoCode(event.target.value)}
                    className="h-full w-full bg-transparent text-[0.92rem] text-[var(--color-midnight)] placeholder:text-[var(--color-slate)] focus:outline-none"
                    placeholder="Code partenaire ou remise"
                  />
                </label>
                <button type="button" className={cn(buttonStyles("ghost"), "px-5")}>
                  Appliquer
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="text-[0.82rem] font-semibold text-[var(--color-midnight)] underline decoration-[rgba(8,19,31,0.18)] underline-offset-4"
            >
              Vider le panier
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] p-5">
          <div className="flex gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[14px] bg-white text-[var(--color-accent)]">
              <Building2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.96rem] font-semibold text-[var(--color-midnight)]">
                Commande en volume ?
              </p>
              <p className="mt-1 text-[0.84rem] leading-6 text-[var(--color-slate)]">
                Basculer ce panier en demande de devis permet de cadrer un lot, une installation ou un besoin multisite.
              </p>
            </div>
          </div>
        </div>

        <QuoteCTA
          compact
          title="Besoin d&apos;un chiffrage structure ?"
          description="Transformez ce panier en demande de devis pour les volumes, l'installation ou les besoins techniques particuliers."
          href="/quote?from=cart"
        />
      </div>

      <div className="space-y-4">
        <div className="xl:sticky xl:top-[8.9rem] xl:space-y-4">
          <CheckoutSummary
            lines={detailedCart}
            subtotalHT={subtotalHT}
            subtotalTTC={subtotalTTC}
            title="Panier professionnel"
          />

          <div className="grid gap-3 rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_36px_rgba(8,19,31,0.05)]">
            <Link href="/checkout" className={cn(buttonStyles("primary"), "w-full px-5")}>
              Finaliser la commande
              <ArrowRight className="h-[15px] w-[15px]" />
            </Link>
            <Link href="/quote?from=cart" className={cn(buttonStyles("ghost"), "w-full px-5")}>
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
