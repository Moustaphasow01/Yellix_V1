import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { experienceBenefits, experienceBlocks } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Expérience",
  description:
    "22+ ans d’expérience cumulée dans les secteurs stratégiques: une profondeur métier qui remplace la logique projets/réalisations.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Expérience"
        title="22 ans cumulés au service des secteurs stratégiques"
        description="Une profondeur métier mobilisable pour cadrer, déployer et accompagner des interventions sur des environnements exigeants."
        highlights={[
          { label: "Secteurs", value: "4 domaines" },
          { label: "Présence", value: "Multi-sites" },
          { label: "Approche", value: "Terrain et méthode" },
        ]}
      />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <Reveal className="lg:max-w-[30rem]">
            <SectionHeading
              compact
              eyebrow="Assise métier"
              title="Une profondeur mobilisable sur plusieurs environnements"
              description="Cette expérience sert à lire plus vite les contraintes, calibrer les interventions et tenir une exécution plus sûre."
            />
          </Reveal>

          <div className="grid gap-3.5 md:grid-cols-2">
            {experienceBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.04}>
                <article className="h-full rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    {block.title}
                  </p>
                  <p className="mt-3 text-[0.92rem] leading-6 text-[var(--color-slate)]">
                    {block.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-panel-soft)] py-10 md:py-12 lg:py-14">
        <div className="container-shell overflow-hidden rounded-[32px] bg-[var(--color-midnight)] px-6 py-7 text-white shadow-[0_24px_64px_rgba(8,19,31,0.18)] md:px-8 md:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8">
            <Reveal>
              <div className="space-y-3">
                <span className="section-label">Ce que cette expérience permet</span>
                <h2 className="text-[clamp(1.9rem,3.8vw,3.1rem)] leading-[1.02] text-white">
                  Une lecture terrain plus rapide et une exécution plus sûre
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {experienceBenefits.map((benefit, index) => (
                <Reveal key={benefit} delay={index * 0.04}>
                  <article className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-[0.92rem] leading-6 text-white/72">
                    {benefit}
                  </article>
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
            title="Capitalisons sur une expérience réellement exploitable"
            description="Yellix accompagne vos besoins avec une approche sectorielle crédible, opérationnelle et durable."
            ctaLabel="Parlons de votre projet"
          />
        </div>
      </section>
    </>
  );
}
