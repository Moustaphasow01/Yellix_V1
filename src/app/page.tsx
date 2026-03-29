import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { Check } from "lucide-react";
import Image from "next/image";
import { createMetadata } from "@/lib/metadata";
import { iconMap } from "@/lib/icon-map";
import { heroCapabilities, servicePillars, whyYellix } from "@/data/site";
import { HomeSectorShowcase } from "@/components/home-sector-showcase";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Yellix Group intervient en audit, déploiement et maintenance sur des opérations techniques dans les télécommunications, l'énergie, l'agriculture et l'élevage.",
});

export default function Home() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-midnight)] pb-12 pt-16 text-white md:pb-[72px] md:pt-[96px] lg:pb-[88px] lg:pt-[120px]">
        <div className="tech-grid-dark absolute inset-0 opacity-25" />
        <div className="absolute -top-8 left-0 h-72 w-72 rounded-full bg-[rgba(0,191,165,0.05)] blur-[110px] md:-top-10 md:h-[22rem] md:w-[22rem]" />
        <Image
          src="/images/antenna.webp"
          alt="Infrastructure télécom avec antennes et équipements réseau"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_40%] opacity-100 brightness-95 contrast-120 saturate-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,31,0.82)_0%,rgba(8,19,31,0.74)_26%,rgba(8,19,31,0.56)_56%,rgba(8,19,31,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.06),transparent_22%)]" />
        <div className="container-shell relative z-10 grid gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.82fr)_minmax(21rem,0.88fr)] lg:items-start lg:gap-6">
          <Reveal className="space-y-8 lg:pr-2">
            <div className="max-w-[48rem] space-y-5 md:space-y-6">
              <span className="section-label">Depuis 1999</span>
              <h1 className="max-w-[13ch] text-[clamp(39px,4.2vw,64px)] leading-[0.95] text-white">
                <span className="block">L&apos;ingénierie</span>
                <span className="block">au service de la performance</span>
              </h1>
              <p className="max-w-[39rem] text-[0.96rem] leading-7 text-white/72 md:text-[1rem]">
                Yellix Group intervient auprès des acteurs publics, privés et institutionnels pour
                auditer, déployer et maintenir des opérations techniques dans les
                télécommunications, l&apos;énergie, l&apos;agriculture et l&apos;élevage.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="w-full max-w-[22.5rem] rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,15,25,0.92),rgba(9,19,30,0.82))] p-4 shadow-[0_24px_60px_rgba(3,8,16,0.3)] lg:-translate-y-1">
              <div className="flex items-center gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
                  Capacités clés
                </p>
                <span className="h-px flex-1 bg-white/12" />
              </div>

              <div className="mt-3 rounded-[14px] border border-white/10 bg-[rgba(255,255,255,0.02)] px-3 py-1.5">
                <ul>
                  {heroCapabilities.map((item, index) => (
                    <li
                      key={item.title}
                      className={`flex gap-2.5 py-3 ${
                        index < heroCapabilities.length - 1 ? "border-b border-white/10" : ""
                      }`}
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] text-[var(--color-accent)]">
                        <Check className="h-3 w-3" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-[0.88rem] font-semibold leading-5 text-white">
                          {item.title}
                        </p>
                        <p className="max-w-md text-[12px] leading-5 text-white/62">
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

      <HomeSectorShowcase />

      <section id="services" className="bg-[var(--color-panel-soft)] px-4 pt-3 pb-5 md:px-6 md:pt-4 md:pb-7 lg:px-7 lg:pt-4 lg:pb-8">
        <div className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
          <div className="flex flex-col gap-4 border-b border-[var(--color-border)] px-5 py-4 md:px-6 md:py-5 lg:flex-row lg:items-end lg:justify-between lg:px-7 lg:py-6">
            <Reveal>
              <div className="w-full max-w-none space-y-3">
                <span className="section-label">Comment nous intervenons</span>
                <p className="max-w-[56ch] text-[0.84rem] leading-5 text-[var(--color-slate)] lg:whitespace-nowrap">
                  Chaque mission est structurée autour de trois séquences qui cadrent le besoin,
                  pilotent l&apos;exécution et installent la continuité dans la durée.
                </p>
              </div>
            </Reveal>

          </div>

          <div className="grid lg:grid-cols-3">
            {servicePillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <article
                  className={`px-5 py-5 md:px-6 md:py-6 lg:px-7 lg:py-7 ${
                    index < servicePillars.length - 1
                      ? "border-b border-[var(--color-border)] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-[1.28rem] leading-[1.06] text-[var(--color-midnight)] md:text-[1.38rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 max-w-[24rem] text-[0.86rem] leading-5 text-[var(--color-slate)]">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-panel-soft)] px-4 pt-2 pb-3 md:px-6 md:pt-3 md:pb-4 lg:px-7 lg:pt-4 lg:pb-5">
        <div className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_18px_44px_rgba(8,19,31,0.06)]">
          <div className="grid lg:grid-cols-[minmax(16rem,0.77fr)_minmax(0,1.23fr)]">
            <div className="relative min-h-[21rem] bg-[var(--color-midnight)]">
              <Image
                src="/images/panneaux-photovoltaiques.jpg"
                alt="Panneaux photovoltaïques"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[62%_38%] opacity-92 contrast-110 saturate-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,31,0.16)_0%,rgba(8,19,31,0.32)_100%)]" />
            </div>

            <div className="px-5 py-6 md:px-6 md:py-7 lg:px-7 lg:py-8">
              <Reveal>
                <div className="max-w-[38rem]">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="section-label">Pourquoi Yellix</span>
                    <span className="h-px flex-1 bg-[var(--color-border)]" />
                  </div>
                  <h2 className="max-w-[16ch] text-[clamp(1.85rem,3vw,2.8rem)] leading-[1.02] text-[var(--color-midnight)]">
                    Un cadre d&apos;exécution conçu pour la continuité
                  </h2>
                  <p className="mt-3 max-w-[40rem] text-[0.88rem] leading-6 text-[var(--color-slate)]">
                    Yellix structure ses interventions autour d&apos;une lecture technique des
                    besoins, d&apos;une coordination d&apos;exécution précise et d&apos;un suivi orienté
                    disponibilité.
                  </p>
                </div>
              </Reveal>

              <div className="mt-5 space-y-2.5">
                {whyYellix.map((item, index) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <Reveal key={item.title} delay={index * 0.05}>
                      <div className="flex gap-4 rounded-[18px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.72)] px-4 py-3.5">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[13px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <div className="space-y-1">
                          <h3 className="text-[0.98rem] font-semibold leading-5 text-[var(--color-midnight)]">
                            {item.title}
                          </h3>
                          <p className="max-w-[32rem] text-[0.84rem] leading-5 text-[var(--color-slate)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-12 md:pt-3 md:pb-14 lg:pt-4 lg:pb-16">
        <div className="container-shell">
          <Reveal>
            <section className="relative mx-auto w-full max-w-[780px] overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(135deg,#07111d_0%,#0b1825_58%,#0b1c27_100%)] px-5 py-6 text-white shadow-[0_22px_52px_rgba(8,19,31,0.16)] md:px-7 md:py-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(0,191,165,0.16),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.08),transparent_22%)]" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,191,165,0.52),transparent)]" />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div className="max-w-[38rem] space-y-2">
                  <h2 className="whitespace-nowrap text-[clamp(1.55rem,2.6vw,2.9rem)] leading-[0.97] tracking-[-0.04em] text-white">
                    Parlons de votre besoin
                  </h2>
                </div>

                <div className="flex lg:shrink-0 lg:self-center">
                  <ButtonLink
                    href="/contact#formulaire-contact"
                    variant="primary"
                    className="min-h-[3.35rem] px-6 text-[0.92rem]"
                  >
                    Demander un échange
                  </ButtonLink>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </>
  );
}
