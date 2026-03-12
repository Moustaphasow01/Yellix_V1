import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import type { Sector } from "@/data/site";

type SectorDetailPageProps = {
  sector: Sector;
};

export function SectorDetailPage({ sector }: SectorDetailPageProps) {
  return (
    <>
      <PageHero
        eyebrow={sector.title}
        title={sector.heroTitle}
        description={sector.detailedHero}
        highlights={[
          { label: "Priorités", value: sector.challenges.length.toString() },
          { label: "Interventions", value: sector.interventions.length.toString() },
          { label: "Services liés", value: sector.relatedServices.length.toString() },
        ]}
      />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell grid gap-5 md:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(8,19,31,0.06)] md:p-7">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ backgroundColor: `${sector.accent}14`, color: sector.accent }}
              >
                Priorités du secteur
              </span>
              <h2 className="mt-5 text-[1.9rem]">Points d’attention</h2>
              <p className="mt-3 max-w-[28rem] text-[0.95rem] leading-7 text-[var(--color-slate)]">
                {sector.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {sector.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3 text-[0.92rem] leading-6 text-[var(--color-slate)]"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(8,19,31,0.06)] md:p-7">
              <div className="flex flex-col gap-4 border-b border-[var(--color-border)] pb-5 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                  <span className="section-label">Comment Yellix intervient</span>
                  <h2 className="text-[1.9rem]">Interventions structurées</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sector.relatedServices.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-ivory)] px-3 py-1.5 text-[12px] text-[var(--color-slate)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {sector.interventions.map((intervention, index) => (
                  <li
                    key={intervention}
                    className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                      0{index + 1}
                    </p>
                    <p className="mt-2.5 text-[0.92rem] leading-6 text-[var(--color-midnight)]">
                      {intervention}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <ButtonLink href="/contact" variant="ghost">
                  {sector.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-10 md:pb-12 lg:pb-14">
        <div className="container-shell">
          <CtaBanner
            title={`Un besoin dans le secteur ${sector.title.toLowerCase()} ?`}
            description="Yellix accompagne vos enjeux techniques et opérationnels avec une approche structurée, sobre et orientée résultats."
            ctaLabel={sector.ctaLabel}
          />
        </div>
      </section>
    </>
  );
}
