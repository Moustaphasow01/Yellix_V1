import { CtaBanner } from "@/components/cta-banner";
import { IconBadge } from "@/components/icon-badge";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps, services } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Découvrez les 7 services Yellix: audit, ingénierie, déploiement, maintenance, exploitation, support et conseil.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sept services pour cadrer, déployer et maintenir"
        description="Une offre conçue pour couvrir la chaîne d’intervention, de l’analyse initiale au suivi dans la durée."
        highlights={[
          { label: "Services", value: "7 expertises" },
          { label: "Couverture", value: "4 secteurs" },
          { label: "Logique", value: "Étude à support" },
        ]}
      />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell space-y-6">
          <SectionHeading
            compact
            eyebrow="Offre"
            title="Sept expertises complémentaires"
            description="Des briques mobilisables seules ou combinées, selon le niveau de cadrage, de déploiement ou de suivi attendu."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.03}>
              <article className="group relative h-full overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,191,165,0.18)] hover:shadow-[0_20px_48px_rgba(8,19,31,0.08)] md:p-6">
                <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(0,191,165,0.8),rgba(47,107,255,0.45))]" />

                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={service.icon} className="h-10 w-10 rounded-[16px]" iconClassName="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  <h2 className="text-[1.55rem] leading-[1.08]">{service.title}</h2>
                  <p className="text-[0.92rem] leading-6 text-[var(--color-slate)]">{service.summary}</p>
                </div>

                <div className="mt-4 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    Apport
                  </p>
                  <p className="mt-1.5 text-[0.92rem] font-medium leading-6 text-[var(--color-midnight)]">
                    {service.value}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {service.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[11px] text-[var(--color-slate)]"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-panel-soft)] py-10 md:py-12 lg:py-14">
        <div className="container-shell space-y-6">
          <SectionHeading
            compact
            eyebrow="Méthode d’intervention"
            title="Une séquence d’intervention en cinq étapes"
            description="Une méthode simple pour cadrer la réponse, piloter l’exécution et inscrire le suivi dans la durée."
          />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="pb-10 md:pb-12 lg:pb-14">
        <div className="container-shell">
          <CtaBanner
            compact
            title="Besoin d’assembler plusieurs expertises ?"
            description="Yellix peut composer une réponse sur mesure à partir de plusieurs expertises."
            ctaLabel="Nous contacter"
          />
        </div>
      </section>
    </>
  );
}
