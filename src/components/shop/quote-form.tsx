"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CircleCheckBig, Plus, Trash2 } from "lucide-react";
import { QuantitySelector } from "@/components/shop/quantity-selector";
import { shopCategories, shopProducts } from "@/data/shop";
import { SHOP_STORAGE_KEY, useShop } from "@/components/shop/shop-provider";
import { cn } from "@/lib/cn";
import { buttonStyles } from "@/components/button-link";

type SelectedQuoteLine = {
  productSlug: string;
  quantity: number;
};

const sectorOptions = [
  "Telecommunications",
  "Energie",
  "Agriculture",
  "Elevage",
  "Maintenance & terrain",
];

function getInitialQuoteLines(
  productParam: string | null,
  fromCart: boolean,
  cartProductSlugs: Array<{ productSlug: string; quantity: number }>,
) {
  if (fromCart && cartProductSlugs.length > 0) {
    return cartProductSlugs;
  }

  if (productParam) {
    return productParam
      .split(",")
      .map((slug) => slug.trim())
      .filter(Boolean)
      .map((slug) => ({ productSlug: slug, quantity: 1 }));
  }

  return [];
}

export function QuoteForm() {
  const searchParams = useSearchParams();
  const { detailedCart } = useShop();
  const [selectedLines, setSelectedLines] = useState<SelectedQuoteLine[]>(() => {
    if (typeof window === "undefined") return [];

    const params = new URLSearchParams(window.location.search);
    const productParam = params.get("product");
    const fromCart = params.get("from") === "cart";
    let cartProductSlugs: Array<{ productSlug: string; quantity: number }> = [];

    if (fromCart) {
      const rawValue = window.localStorage.getItem(SHOP_STORAGE_KEY);

      if (rawValue) {
        try {
          const parsed = JSON.parse(rawValue) as {
            cart?: Array<{ productSlug: string; quantity: number }>;
          };
          cartProductSlugs = parsed.cart ?? [];
        } catch {
          cartProductSlugs = [];
        }
      }
    }

    return getInitialQuoteLines(productParam, fromCart, cartProductSlugs);
  });
  const [selectedProductSlug, setSelectedProductSlug] = useState(shopProducts[0]?.slug ?? "");
  const [submitted, setSubmitted] = useState(false);
  const fallbackLines =
    selectedLines.length === 0 && searchParams.get("from") === "cart"
      ? detailedCart.map((line) => ({
          productSlug: line.product.slug,
          quantity: line.quantity,
        }))
      : selectedLines;

  function addProductLine() {
    if (!selectedProductSlug) return;

    setSelectedLines((currentLines) => {
      const existing = currentLines.find((line) => line.productSlug === selectedProductSlug);
      if (existing) {
        return currentLines.map((line) =>
          line.productSlug === selectedProductSlug
            ? { ...line, quantity: line.quantity + 1 }
            : line,
        );
      }

      return [...currentLines, { productSlug: selectedProductSlug, quantity: 1 }];
    });
  }

  function updateLineQuantity(productSlug: string, quantity: number) {
    setSelectedLines((currentLines) =>
      currentLines.map((line) =>
        line.productSlug === productSlug ? { ...line, quantity } : line,
      ),
    );
  }

  function removeLine(productSlug: string) {
    setSelectedLines((currentLines) =>
      currentLines.filter((line) => line.productSlug !== productSlug),
    );
  }

  if (submitted) {
    return (
      <div className="rounded-[30px] border border-[var(--color-border)] bg-white px-6 py-10 text-center shadow-[0_18px_46px_rgba(8,19,31,0.06)]">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <CircleCheckBig className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-[1.5rem] text-[var(--color-midnight)]">Demande preparee</h2>
        <p className="mx-auto mt-3 max-w-[34rem] text-[0.92rem] leading-7 text-[var(--color-slate)]">
          Cette V1 front-only simule l&apos;envoi du devis. La structure est prete a etre branchee a
          un CRM, un service email ou un backend e-commerce.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6 rounded-[30px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_46px_rgba(8,19,31,0.06)] md:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="quote-firstname" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Prenom
          </label>
          <input id="quote-firstname" required className="shop-input" placeholder="Prenom" />
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-lastname" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Nom
          </label>
          <input id="quote-lastname" required className="shop-input" placeholder="Nom" />
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-company" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Entreprise
          </label>
          <input id="quote-company" required className="shop-input" placeholder="Societe ou structure" />
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-sector" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Secteur d&apos;activite
          </label>
          <select id="quote-sector" className="shop-select" defaultValue={sectorOptions[0]}>
            {sectorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-email" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Email professionnel
          </label>
          <input id="quote-email" type="email" required className="shop-input" placeholder="nom@entreprise.com" />
        </div>
        <div className="space-y-2">
          <label htmlFor="quote-phone" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Telephone
          </label>
          <input id="quote-phone" required className="shop-input" placeholder="+221 XX XXX XX XX" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="quote-location" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Ville / pays
          </label>
          <input id="quote-location" className="shop-input" placeholder="Dakar, Senegal" />
        </div>
      </div>

      <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <label htmlFor="quote-product-select" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Ajouter une reference
            </label>
            <select
              id="quote-product-select"
              value={selectedProductSlug}
              onChange={(event) => setSelectedProductSlug(event.target.value)}
              className="shop-select"
            >
              {shopProducts.map((product) => (
                <option key={product.slug} value={product.slug}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={addProductLine}
            className={cn(buttonStyles("ghost"), "min-h-[3rem] px-5")}
          >
            <Plus className="h-4 w-4" />
            Ajouter
          </button>
        </div>

        {fallbackLines.length > 0 ? (
          <div className="mt-4 space-y-3">
            {fallbackLines.map((line) => {
              const product = shopProducts.find((item) => item.slug === line.productSlug);
              if (!product) return null;

              return (
                <div
                  key={line.productSlug}
                  className="flex flex-col gap-3 rounded-[20px] border border-[var(--color-border)] bg-white px-4 py-4 md:flex-row md:items-center md:justify-between"
                >
                  <div className="min-w-0">
                    <p className="text-[0.92rem] font-semibold text-[var(--color-midnight)]">
                      {product.name}
                    </p>
                    <p className="text-[0.8rem] text-[var(--color-slate)]">
                      {shopCategories.find((category) => category.slug === product.categorySlug)?.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <QuantitySelector
                      value={line.quantity}
                      onChange={(value) => updateLineQuantity(line.productSlug, value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeLine(line.productSlug)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-slate)] transition duration-200 hover:text-[#b91c1c]"
                      aria-label={`Retirer ${product.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-[0.84rem] leading-6 text-[var(--color-slate)]">
            Aucune reference preselectionnee. Ajoutez des produits si vous souhaitez un chiffrage plus precis.
          </p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.86rem] font-medium text-[var(--color-midnight)]">
          <input type="checkbox" className="h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]" />
          Besoin d&apos;installation
        </label>
        <label className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.86rem] font-medium text-[var(--color-midnight)]">
          <input type="checkbox" className="h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]" />
          Besoin de maintenance
        </label>
      </div>

      <div className="space-y-2">
        <label htmlFor="quote-message" className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
          Contexte et message
        </label>
        <textarea
          id="quote-message"
          className="shop-input min-h-[9rem] resize-y"
          placeholder="Precisez le perimetre, les contraintes de delai, le volume, les compatibilites attendues et le niveau d'accompagnement souhaite."
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[38rem] text-[0.84rem] leading-6 text-[var(--color-slate)]">
          Facturation professionnelle, accompagnement technique et chiffrage adaptes aux commandes unitaires, lots et besoins multisites.
        </p>
        <button type="submit" className={cn(buttonStyles("primary"), "px-6")}>
          Envoyer la demande
        </button>
      </div>
    </form>
  );
}
