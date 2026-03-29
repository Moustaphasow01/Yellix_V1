import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import type { Sector } from "@/data/site";
import { iconMap } from "@/lib/icon-map";
import { assetPath } from "@/lib/asset-path";

type SectorDetailPageProps = {
  sector: Sector;
};

const sectorVisuals: Record<
  string,
  {
    label: string;
    image?: string;
    alt?: string;
    imagePosition?: string;
  }
> = {
  telecommunications: {
    label: "Infrastructures réseau",
    image: assetPath("/images/antenna.webp"),
    alt: "Infrastructure télécom avec antennes et équipements réseau",
    imagePosition: "object-[18%_40%]",
  },
  energie: {
    label: "Installations énergétiques",
    image: assetPath("/images/panneaux-photovoltaiques.jpg"),
    alt: "Panneaux photovoltaïques dans un environnement technique",
    imagePosition: "object-[62%_38%]",
  },
  agriculture: {
    label: "Opérations agricoles",
  },
  elevage: {
    label: "Continuité d'exploitation",
  },
};

export function SectorDetailPage({ sector }: SectorDetailPageProps) {
  const Icon = iconMap[sector.icon];
  const visual = sectorVisuals[sector.slug];
  const summaryCards = [
    { label: "Priorités terrain", value: `${sector.focus.length}` },
    { label: "Contraintes identifiées", value: `${sector.challenges.length}` },
    { label: "Interventions mobilisables", value: `${sector.interventions.length}` },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-midnight)] pb-14 pt-24 text-white md:pb-16 md:pt-28 lg:pb-20 lg:pt-32">
        <div className="tech-grid-dark absolute inset-0 opacity-[0.16]" />
        <div
          className="absolute left-[-4rem] top-[-2rem] h-72 w-72 rounded-full blur-[120px]"
          style={{ backgroundColor: `${sector.accent}24` }}
        />
        <div className="absolute right-[-2rem] top-10 h-56 w-56 rounded-full bg-[rgba(255,255,255,0.04)] blur-[120px]" />

        <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.98fr)] lg:items-center lg:gap-8">
          <Reveal className="space-y-6">
            <div className="space-y-4">
              <span
                className="inline-flex rounded-full border px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{
                  borderColor: `${sector.accent}38`,
                  backgroundColor: `${sector.accent}12`,
                  color: "#ffffff",
                }}
              >
                {sector.title}
              </span>

              <div className="space-y-4">
                <h1 className="max-w-[12ch] text-[clamp(2.4rem,4.5vw,4.4rem)] leading-[0.92] text-white">
                  {sector.heroTitle}
                </h1>
                <p className="max-w-[41rem] text-[0.98rem] leading-8 text-white/72 md:text-[1.02rem]">
                  {sector.detailedHero}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {summaryCards.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-[1.1rem] font-semibold leading-none text-white">{item.value}</p>
                  <p className="mt-2 text-[0.76rem] leading-5 text-white/58">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:justify-self-end">
            <div className="relative min-h-[26rem] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,15,25,0.96),rgba(9,19,30,0.9))] shadow-[0_28px_80px_rgba(3,8,16,0.3)]">
              {visual?.image ? (
                <Image
                  src={visual.image}
                  alt={visual.alt ?? sector.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className={`object-cover ${visual.imagePosition ?? "object-center"} opacity-88 contrast-110 saturate-110`}
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 22% 22%, ${sector.accent}44, transparent 28%), radial-gradient(circle at 78% 18%, rgba(255,255,255,0.1), transparent 22%), linear-gradient(180deg, rgba(7,15,25,0.92), rgba(8,19,31,0.98))`,
                  }}
                />
              )}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,31,0.04)_0%,rgba(8,19,31,0.28)_44%,rgba(8,19,31,0.86)_100%)]" />

              <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                    {visual?.label ?? sector.title}
                  </span>
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.06] text-white shadow-[0_16px_36px_rgba(0,0,0,0.18)]"
                    style={{ color: sector.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <h2 className="text-[clamp(1.7rem,2.8vw,2.6rem)] leading-[0.98] text-white">
                      {sector.title}
                    </h2>
                    <p className="max-w-[34rem] text-[0.94rem] leading-7 text-white/72">
                      {sector.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {sector.focus.map((item) => (
                      <span
                        key={item}
                        className="inline-flex rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-panel-soft)] py-10 md:py-12 lg:py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-8">
          <Reveal>
            <div className="rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(8,19,31,0.06)] md:p-7">
              <span
                className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ backgroundColor: `${sector.accent}12`, color: sector.accent }}
              >
                Priorités du secteur
              </span>

              <div className="mt-5 space-y-3">
                <h2 className="text-[clamp(1.8rem,3vw,2.65rem)] leading-[1.02] text-[var(--color-midnight)]">
                  Ce qui structure les décisions et l&apos;exécution
                </h2>
                <p className="max-w-[34rem] text-[0.96rem] leading-7 text-[var(--color-slate)]">
                  Les environnements {sector.title.toLowerCase()} exigent une lecture précise des
                  contraintes, des priorités opérationnelles et des points de vigilance terrain.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {sector.focus.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-4"
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] text-[0.84rem] font-semibold"
                        style={{
                          backgroundColor: `${sector.accent}12`,
                          color: sector.accent,
                        }}
                      >
                        0{index + 1}
                      </span>
                      <div className="space-y-1">
                        <p className="text-[0.98rem] font-semibold leading-6 text-[var(--color-midnight)]">
                          {item}
                        </p>
                        <p className="text-[0.86rem] leading-6 text-[var(--color-slate)]">
                          Une priorité à intégrer dans le cadrage technique, opérationnel et dans
                          le rythme d&apos;intervention.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(8,19,31,0.06)] md:p-7">
              <div className="space-y-3 border-b border-[var(--color-border)] pb-5">
                <span className="section-label">Contraintes d&apos;exploitation</span>
                <h2 className="text-[clamp(1.8rem,3vw,2.65rem)] leading-[1.02] text-[var(--color-midnight)]">
                  Les points d&apos;attention à anticiper
                </h2>
              </div>

              <div className="mt-5 grid gap-3">
                {sector.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-[22px] border border-[var(--color-border)] bg-[linear-gradient(180deg,#f7f9fc_0%,#eef3f8_100%)] px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: sector.accent }}
                      />
                      <p className="text-[0.92rem] leading-6 text-[var(--color-midnight)]">
                        {challenge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell">
          <Reveal>
            <div className="rounded-[32px] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_56px_rgba(8,19,31,0.06)] md:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
                <div className="space-y-4">
                  <span className="section-label">Cadre d&apos;intervention</span>
                  <h2 className="max-w-[14ch] text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.02] text-[var(--color-midnight)]">
                    Des interventions mobilisables selon le besoin
                  </h2>
                  <p className="max-w-[34rem] text-[0.96rem] leading-7 text-[var(--color-slate)]">
                    Chaque mission peut mobiliser plusieurs niveaux d&apos;intervention, selon le
                    contexte site, le degré d&apos;urgence et les objectifs d&apos;exploitation.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {sector.relatedServices.map((service) => (
                      <span
                        key={service}
                        className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-ivory)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-slate)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {sector.interventions.map((intervention, index) => (
                    <div
                      key={intervention}
                      className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-4"
                    >
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: sector.accent }}
                      >
                        0{index + 1}
                      </p>
                      <p className="mt-2.5 text-[0.92rem] leading-6 text-[var(--color-midnight)]">
                        {intervention}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-10 md:pb-12 lg:pb-14">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(135deg,#07111d_0%,#0b1825_58%,#0b1c27_100%)] px-6 py-6 text-white shadow-[0_24px_60px_rgba(8,19,31,0.18)] md:px-7 md:py-7">
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  background: `radial-gradient(circle at 16% 24%, ${sector.accent}28, transparent 24%), radial-gradient(circle at 86% 12%, rgba(255,255,255,0.08), transparent 20%)`,
                }}
              />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-[42rem] space-y-3">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/68">
                    Prise de contact
                  </span>
                  <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] leading-[1] text-white">
                    {sector.ctaLabel}
                  </h2>
                  <p className="max-w-[34rem] text-[0.95rem] leading-7 text-white/70">
                    Présentez votre contexte, vos contraintes et le site concerné pour engager un
                    premier échange qualifié.
                  </p>
                </div>

                <div className="flex lg:shrink-0">
                  <ButtonLink href="/contact#formulaire-contact" variant="primary" className="px-6">
                    Demander un échange
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
