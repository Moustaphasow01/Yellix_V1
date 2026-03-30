import { Suspense } from "react";
import { Clock3, FileSpreadsheet, Wrench } from "lucide-react";
import { QuoteForm } from "@/components/shop/quote-form";
import { ShopSecondaryNavigation } from "@/components/shop/shop-secondary-navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Demande de devis",
  description:
    "Demandez un devis Yellix Shop pour vos besoins complexes, commandes en volume et projets avec installation ou maintenance.",
  path: "/quote",
});

const quoteBenefits = [
  {
    icon: Clock3,
    title: "Reponse rapide",
    description: "Une structure claire pour qualifier le besoin et repartir avec un cadrage utile.",
  },
  {
    icon: FileSpreadsheet,
    title: "Volumes & lots",
    description: "Prise en compte des commandes structurees, reapprovisionnements et bundles metier.",
  },
  {
    icon: Wrench,
    title: "Services associes",
    description: "Installation, maintenance et support technique peuvent etre integres a la demande.",
  },
];

export default function QuotePage() {
  return (
    <>
      <section className="bg-[var(--color-midnight)] pb-8 pt-24 text-white md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
        <div className="container-shell space-y-4">
          <span className="section-label">Devis</span>
          <h1 className="max-w-[14ch] text-[clamp(2rem,4vw,3.6rem)] leading-[0.96] text-white">
            Structurer une demande pro, sans bruit inutile
          </h1>
          <p className="max-w-[44rem] text-[0.94rem] leading-7 text-white/70">
            Le parcours devis permet de cadrer les commandes en volume, les besoins techniques plus complexes et les projets avec installation ou maintenance.
          </p>
        </div>
      </section>

      <ShopSecondaryNavigation />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell grid gap-6 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
          <div className="space-y-4">
            {quoteBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[16px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h2 className="mt-4 text-[1.15rem] text-[var(--color-midnight)]">{benefit.title}</h2>
                  <p className="mt-2 text-[0.86rem] leading-6 text-[var(--color-slate)]">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>

          <Suspense
            fallback={
              <div className="rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_46px_rgba(8,19,31,0.06)]">
                <p className="text-[0.92rem] text-[var(--color-slate)]">
                  Chargement du formulaire de devis...
                </p>
              </div>
            }
          >
            <QuoteForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
