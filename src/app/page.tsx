import { ButtonLink } from "@/components/button-link";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SectorCard } from "@/components/sector-card";
import { Check } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { iconMap } from "@/lib/icon-map";
import { heroCapabilities, sectors, servicePillars, whyYellix } from "@/data/site";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Yellix accompagne les entreprises, institutions et exploitants avec des solutions techniques et opérationnelles pour les secteurs stratégiques.",
});

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-midnight)] pb-12 pt-16 text-white md:pb-[72px] md:pt-[96px] lg:pb-[88px] lg:pt-[120px]">
        <div className="tech-grid-dark absolute inset-0 opacity-25" />
        <div className="absolute -top-8 left-0 h-96 w-96 rounded-full bg-[rgba(0,191,165,0.1)] blur-[120px] md:-top-10 md:h-[26rem] md:w-[26rem]" />
        <div className="container-shell relative z-10 grid gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.78fr)_minmax(22.75rem,0.94fr)] lg:items-start lg:gap-4 xl:gap-6">
          <Reveal className="space-y-8 lg:pr-2">
            <div className="max-w-[48rem] space-y-5 md:space-y-6">
              <span className="section-label">Depuis 1999</span>
              <h1 className="max-w-[13.25ch] text-[clamp(56px,6vw,92px)] leading-[0.9] text-white">
                <span className="block">L’ingénierie</span>
                <span className="block">au service du terrain</span>
              </h1>
              <p className="max-w-[39rem] text-[0.96rem] leading-7 text-white/72 md:text-[1rem]">
                Nous accompagnons les acteurs publics, privés et institutionnels dans quatre
                environnements d’intervention exigeants.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact" variant="primary">
                Nous contacter
              </ButtonLink>
              <ButtonLink href="#secteurs" variant="secondary">
                Découvrir nos secteurs
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="dark-panel premium-outline w-full max-w-[23rem] rounded-[24px] p-3 md:p-3.5 lg:-translate-y-1">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/46">
                  Capacités clés
                </p>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="mt-2 rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-2.5 py-1 md:px-3">
                <ul>
                  {heroCapabilities.map((item, index) => (
                    <li
                      key={item.title}
                      className={`flex gap-2 py-2.5 ${
                        index < heroCapabilities.length - 1 ? "border-b border-white/10" : ""
                      }`}
                    >
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-accent)]">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      <div className="space-y-0.5">
                        <p className="text-[0.9rem] font-semibold leading-5 text-white">
                          {item.title}
                        </p>
                        <p className="max-w-md text-[12px] leading-5 text-white/64">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="secteurs" className="py-0">
        <div className="w-full">
          <div className="relative overflow-hidden bg-[var(--color-panel-soft)] px-4 pt-5 pb-3 md:px-6 md:pt-6 md:pb-4 lg:px-7 lg:pt-7 lg:pb-4">
            <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-[rgba(0,191,165,0.04)] blur-3xl" />

            <div className="relative space-y-5 md:space-y-6">
              <SectionHeading
                compact
                title="Secteurs d’activité"
                description="Quatre domaines d’intervention, une même exigence d’exécution."
              />
              <div className="subtle-divider" />
              <div className="grid gap-3 md:grid-cols-2 md:gap-3.5">
                {sectors.map((sector, index) => (
                  <Reveal key={sector.slug} delay={index * 0.04}>
                    <SectorCard sector={sector} compact />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-panel-soft)] pt-4 pb-10 md:pt-5 md:pb-12 lg:pt-5 lg:pb-14">
        <div className="container-shell space-y-4 md:space-y-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
            <SectionHeading
              compact
              eyebrow="Services"
              title="Une chaîne d’intervention claire"
              description="Trois temps pour structurer, déployer et maintenir."
            />

            <div className="shrink-0 lg:self-end">
              <ButtonLink href="/services" variant="ghost">
                Voir tous les services
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-5 hidden h-px bg-[linear-gradient(90deg,rgba(8,19,31,0.06),rgba(0,191,165,0.34),rgba(8,19,31,0.06))] lg:block" />

            <div className="grid gap-3.5 md:gap-4 lg:grid-cols-3">
            {servicePillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <article
                  className="group relative z-10 h-full overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white/90 p-5 shadow-[0_16px_36px_rgba(8,19,31,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(0,191,165,0.22)] hover:shadow-[0_20px_48px_rgba(8,19,31,0.08)] md:p-6"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(0,191,165,0.9),rgba(47,107,255,0.52))]" />

                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(0,191,165,0.16)] bg-[var(--color-accent-soft)] text-base font-semibold text-[var(--color-midnight)] shadow-[0_10px_28px_rgba(0,191,165,0.12)]">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(0,191,165,0.28),rgba(8,19,31,0.06))]" />
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <h2 className="text-[1.72rem] leading-[1.06] md:text-[1.85rem]">
                      {pillar.title}
                    </h2>
                    <p className="max-w-sm text-sm leading-6 text-[var(--color-slate)]">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="container-shell grid gap-5 md:gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-8">
          <Reveal className="lg:max-w-[28rem]">
            <div className="space-y-5">
              <SectionHeading
                compact
                title="Ce qui nous distingue"
                description="Une structure conçue pour intervenir avec clarté, rigueur et continuité sur des environnements exigeants."
              />

              <p className="max-w-[29rem] text-[0.95rem] leading-6 text-[var(--color-slate)]">
                Notre approche combine lecture sectorielle, exécution opérationnelle et
                accompagnement dans la durée.
              </p>
            </div>
          </Reveal>

          <div>
            <ul className="grid gap-2.5 md:gap-3">
              {whyYellix.map((item, index) => {
                const Icon = iconMap[item.icon];

                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <li
                      className={`group rounded-[22px] border bg-white/78 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,191,165,0.18)] hover:shadow-[0_18px_42px_rgba(8,19,31,0.07)] ${
                        index === 0
                          ? "border-[rgba(0,191,165,0.18)] p-4 shadow-[0_16px_38px_rgba(8,19,31,0.06)] md:p-[1.125rem]"
                          : "border-[var(--color-border)] p-3.5 shadow-[0_12px_28px_rgba(8,19,31,0.035)] md:p-4"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(0,191,165,0.16)] bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-[0_10px_24px_rgba(0,191,165,0.08)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <div className="flex items-center gap-3">
                            <h3 className="text-[0.98rem] font-semibold leading-6 text-[var(--color-midnight)]">
                              {item.title}
                            </h3>
                            <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(0,191,165,0.26),rgba(8,19,31,0.03))]" />
                          </div>
                          <p className="max-w-[42rem] text-[0.9rem] leading-[1.55] text-[var(--color-slate)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-10 lg:pb-12">
        <div className="container-shell">
          <CtaBanner
            compact
            eyebrow=""
            title="Parlons de votre besoin"
            description="Nous structurons vos enjeux techniques avec une approche claire, opérationnelle et durable."
            ctaLabel="Prendre contact"
          />
        </div>
      </section>
    </>
  );
}
