"use client";

import Link from "next/link";
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { buttonStyles } from "@/components/button-link";
import { CheckoutSummary } from "@/components/shop/checkout-summary";
import { EmptyState } from "@/components/shop/empty-state";
import { useShop } from "@/components/shop/shop-provider";
import { cn } from "@/lib/cn";

const checkoutSteps = [
  "Informations client",
  "Entreprise",
  "Adresse",
  "Livraison",
  "Paiement",
  "Recapitulatif",
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-[1.15rem] text-[var(--color-midnight)]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function CheckoutPageContent() {
  const { detailedCart, subtotalHT, subtotalTTC } = useShop();
  const [submitted, setSubmitted] = useState(false);

  if (detailedCart.length === 0) {
    return (
      <EmptyState
        title="Aucune commande a finaliser"
        description="Votre checkout est pret, mais il faut d'abord ajouter des produits au panier."
        action={
          <Link href="/shop#catalogue" className={cn(buttonStyles("primary"), "px-5")}>
            Retour au shop
          </Link>
        }
      />
    );
  }

  if (submitted) {
    return (
      <div className="rounded-[30px] border border-[var(--color-border)] bg-white px-6 py-10 text-center shadow-[0_18px_46px_rgba(8,19,31,0.06)]">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
          <CircleCheckBig className="h-6 w-6" />
        </span>
        <h1 className="mt-4 text-[1.7rem] text-[var(--color-midnight)]">Commande simulee</h1>
        <p className="mx-auto mt-3 max-w-[36rem] text-[0.92rem] leading-7 text-[var(--color-slate)]">
          Cette etape reste front-only. L&apos;interface est structuree pour accueillir ensuite un vrai paiement, une logique panier persistante et une validation back-office.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid gap-2 md:grid-cols-3 xl:grid-cols-6">
          {checkoutSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-[18px] border border-[var(--color-border)] bg-white px-3 py-3 text-center shadow-[0_10px_28px_rgba(8,19,31,0.04)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
                Etape {index + 1}
              </p>
              <p className="mt-1 text-[0.78rem] font-medium text-[var(--color-midnight)]">{step}</p>
            </div>
          ))}
        </div>

        <SectionCard eyebrow="1. Client" title="Coordonnees de contact">
          <div className="grid gap-4 md:grid-cols-2">
            <input required className="shop-input" placeholder="Nom complet" />
            <input required type="email" className="shop-input" placeholder="Email professionnel" />
            <input className="shop-input" placeholder="Telephone" />
            <input className="shop-input" placeholder="Fonction" />
          </div>
        </SectionCard>

        <SectionCard eyebrow="2. Entreprise" title="Informations societes">
          <div className="grid gap-4 md:grid-cols-2">
            <input required className="shop-input" placeholder="Societe" />
            <input className="shop-input" placeholder="NINEA / identifiant fiscal" />
            <input className="shop-input" placeholder="Secteur d'activite" />
            <label className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.86rem] font-medium text-[var(--color-midnight)]">
              <input type="checkbox" className="h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]" />
              Facture entreprise requise
            </label>
          </div>
        </SectionCard>

        <SectionCard eyebrow="3. Adresse" title="Livraison et reception">
          <div className="grid gap-4 md:grid-cols-2">
            <input required className="shop-input" placeholder="Adresse" />
            <input required className="shop-input" placeholder="Ville" />
            <input className="shop-input" placeholder="Region" />
            <input className="shop-input" placeholder="Pays" defaultValue="Senegal" />
          </div>
        </SectionCard>

        <SectionCard eyebrow="4. Livraison" title="Mode de livraison">
          <div className="grid gap-3">
            {[
              "Livraison standard sur rendez-vous",
              "Retrait base technique",
              "Coordination livraison multi-sites",
            ].map((option, index) => (
              <label
                key={option}
                className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.86rem] font-medium text-[var(--color-midnight)]"
              >
                <input
                  type="radio"
                  name="delivery"
                  defaultChecked={index === 0}
                  className="h-4 w-4 border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
                />
                {option}
              </label>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="5. Paiement" title="Mode de reglement">
          <div className="grid gap-3">
            {[
              "Virement bancaire entreprise",
              "Paiement carte (mock)",
              "Mobile Money entreprise (mock)",
            ].map((option, index) => (
              <label
                key={option}
                className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.86rem] font-medium text-[var(--color-midnight)]"
              >
                <input
                  type="radio"
                  name="payment"
                  defaultChecked={index === 0}
                  className="h-4 w-4 border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
                />
                {option}
              </label>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="6. Mentions" title="Commentaires et validation">
          <div className="space-y-4">
            <textarea
              className="shop-input min-h-[8rem] resize-y"
              placeholder="Informations utiles pour la preparation, le chantier, la facturation ou la livraison."
            />
            <label className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.86rem] font-medium text-[var(--color-midnight)]">
              <input type="checkbox" required className="h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]" />
              Je confirme cette demande de commande V1 en environnement de demonstration.
            </label>
            <button type="submit" className={cn(buttonStyles("primary"), "px-6")}>
              Finaliser la commande
            </button>
          </div>
        </SectionCard>
      </form>

      <div className="xl:sticky xl:top-[8.9rem]">
        <CheckoutSummary
          lines={detailedCart}
          subtotalHT={subtotalHT}
          subtotalTTC={subtotalTTC}
          title="Validation commande"
        />
      </div>
    </div>
  );
}
