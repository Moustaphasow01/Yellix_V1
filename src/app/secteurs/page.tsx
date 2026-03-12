import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectorCard } from "@/components/sector-card";
import { sectors } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Secteurs d’activité",
  description:
    "Explorez les secteurs d’activité couverts par Yellix: télécommunications, énergie, agriculture et élevage.",
  path: "/secteurs",
});

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Secteurs d’activité"
        title="Des interventions ciblées sur quatre environnements stratégiques"
        description="Quatre secteurs, une lecture technique et une même exigence d’exécution."
        highlights={[
          { label: "Secteurs", value: "4 domaines" },
          { label: "Approche", value: "Technique et terrain" },
          { label: "Couverture", value: "Multi-sites" },
        ]}
      />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell space-y-6">
          <SectionHeading
            compact
            eyebrow="Couverture"
            title="Quatre environnements d’intervention"
            description="Chaque secteur conserve ses contraintes propres, mais la méthode reste claire, structurée et orientée continuité."
          />
          <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] p-4 shadow-[0_16px_40px_rgba(8,19,31,0.04)] md:p-6">
            <div className="grid gap-4 md:grid-cols-2">
            {sectors.map((sector, index) => (
              <Reveal key={sector.slug} delay={index * 0.05}>
                <SectorCard sector={sector} compact />
              </Reveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-12 lg:pb-14">
        <div className="container-shell">
          <CtaBanner
            compact
            title="Besoin d’un cadrage par secteur ?"
            description="Yellix adapte son intervention à chaque contexte."
            ctaLabel="Parler de votre besoin"
          />
        </div>
      </section>
    </>
  );
}
