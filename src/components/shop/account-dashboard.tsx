"use client";

import { useState } from "react";
import {
  FileText,
  Heart,
  Home,
  PackageSearch,
  RefreshCw,
  UserRound,
} from "lucide-react";
import {
  shopAccountAddresses,
  shopAccountOrders,
  shopAccountQuotes,
  shopProducts,
} from "@/data/shop";
import { EmptyState } from "@/components/shop/empty-state";
import { ProductCard } from "@/components/shop/product-card";
import { useShop } from "@/components/shop/shop-provider";
import { formatPriceCFA } from "@/lib/shop";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "profil", label: "Profil", icon: UserRound },
  { id: "commandes", label: "Commandes", icon: PackageSearch },
  { id: "devis", label: "Devis", icon: FileText },
  { id: "favoris", label: "Favoris", icon: Heart },
  { id: "adresses", label: "Adresses", icon: Home },
] as const;

function statusClass(status: string) {
  if (status === "Livree" || status === "Envoye") {
    return "border-[#00BFA533] bg-[#00BFA512] text-[#007E6D]";
  }

  if (status === "En preparation" || status === "En cours") {
    return "border-[#2F6BFF33] bg-[#2F6BFF12] text-[#2F6BFF]";
  }

  return "border-[rgba(8,19,31,0.14)] bg-[rgba(8,19,31,0.04)] text-[var(--color-midnight)]";
}

export function AccountDashboard() {
  const { favorites } = useShop();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>(() => {
    if (typeof window !== "undefined" && window.location.hash === "#favoris") {
      return "favoris";
    }

    return "profil";
  });
  const favoriteProducts = shopProducts.filter((product) => favorites.includes(product.slug));

  return (
    <div className="grid gap-6 xl:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="rounded-[28px] border border-[var(--color-border)] bg-white p-4 shadow-[0_16px_40px_rgba(8,19,31,0.05)] xl:sticky xl:top-[8.9rem] xl:h-fit">
        <nav className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-[18px] px-4 py-3 text-left text-[0.88rem] font-medium transition duration-200",
                  activeTab === tab.id
                    ? "bg-[var(--color-midnight)] text-white"
                    : "bg-[var(--color-panel-soft)] text-[var(--color-midnight)] hover:bg-white",
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="space-y-5">
        {activeTab === "profil" ? (
          <section className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Contact principal
                </p>
                <h2 className="mt-3 text-[1.2rem] text-[var(--color-midnight)]">Moustapha Sow</h2>
                <p className="mt-2 text-[0.86rem] leading-6 text-[var(--color-slate)]">
                  Responsable approvisionnement et coordination technique.
                </p>
              </article>
              <article className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Entreprise
                </p>
                <h2 className="mt-3 text-[1.2rem] text-[var(--color-midnight)]">Yellix Group</h2>
                <p className="mt-2 text-[0.86rem] leading-6 text-[var(--color-slate)]">
                  Compte B2B, commandes multisites et parcours devis/achat hybride.
                </p>
              </article>
            </div>

            <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    Reapprovisionnement rapide
                  </p>
                  <h2 className="mt-2 text-[1.15rem] text-[var(--color-midnight)]">
                    Rejouer un panier type ou une commande recurrente
                  </h2>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-panel-soft)] text-[var(--color-midnight)]"
                  aria-label="Reapprovisionnement rapide"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {activeTab === "commandes" ? (
          <div className="grid gap-4">
            {shopAccountOrders.map((order) => (
              <article
                key={order.id}
                className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                      {order.reference}
                    </p>
                    <h2 className="mt-2 text-[1.1rem] text-[var(--color-midnight)]">
                      Commande du {order.date}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn("rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]", statusClass(order.status))}>
                      {order.status}
                    </span>
                    <span className="text-[0.92rem] font-semibold text-[var(--color-midnight)]">
                      {formatPriceCFA(order.totalHT)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "devis" ? (
          <div className="grid gap-4">
            {shopAccountQuotes.map((quote) => (
              <article
                key={quote.id}
                className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                      {quote.reference}
                    </p>
                    <h2 className="mt-2 text-[1.1rem] text-[var(--color-midnight)]">
                      Devis du {quote.date}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn("rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]", statusClass(quote.status))}>
                      {quote.status}
                    </span>
                    <span className="text-[0.92rem] font-semibold text-[var(--color-midnight)]">
                      {formatPriceCFA(quote.amountHT)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "favoris" ? (
          <section id="favoris" className="space-y-5">
            {favoriteProducts.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
                {favoriteProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="Aucun favori enregistre"
                description="Les produits sauvegardes pour relecture, devis ou reapprovisionnement apparaitront ici."
              />
            )}
          </section>
        ) : null}

        {activeTab === "adresses" ? (
          <div className="grid gap-4 md:grid-cols-2">
            {shopAccountAddresses.map((address) => (
              <article
                key={address.id}
                className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  {address.label}
                </p>
                <h2 className="mt-3 text-[1.1rem] text-[var(--color-midnight)]">{address.contact}</h2>
                <p className="mt-2 text-[0.86rem] leading-6 text-[var(--color-slate)]">{address.city}</p>
                <p className="mt-1 text-[0.82rem] leading-6 text-[var(--color-slate)]">{address.detail}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
