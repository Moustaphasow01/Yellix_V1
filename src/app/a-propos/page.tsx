import { CtaBanner } from "@/components/cta-banner";
import { IconBadge } from "@/components/icon-badge";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsBand } from "@/components/stats-band";
import { keyMetrics, values } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Découvrez la mission, la vision et les valeurs de Yellix, entreprise multisectorielle engagée dans l’accompagnement technique et opérationnel.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une structure technique pensée pour l’exécution"
        description="Yellix Group intervient sur des environnements stratégiques avec une approche sobre, structurée et opérationnelle."
        highlights={[
          { label: "Secteurs", value: "4 environnements" },
          { label: "Services", value: "9 expertises" },
          { label: "Ancrage", value: "Sénégal" },
        ]}
      />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <Reveal>
            <div className="max-w-[32rem] space-y-4">
              <span className="section-label">Positionnement</span>
              <h2 className="section-title">Une structure multisectorielle orientée mise en oeuvre</h2>
              <p className="section-copy">
                Nous intervenons là où la compréhension technique, la coordination opérationnelle
                et la continuité d’activité doivent rester alignées.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-1">
            {[
              {
                label: "Positionnement",
                text: "Une lecture multisectorielle au service d’interventions cadrées.",
              },
              {
                label: "Mission",
                text: "Structurer, déployer et maintenir des réponses techniques utiles au terrain.",
              },
              {
                label: "Vision",
                text: "Installer des solutions fiables, lisibles et durables dans le temps.",
              },
            ].map((item, index) => (
              <Reveal key={item.label} delay={index * 0.04}>
                <article className="rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)] md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[0.96rem] leading-7 text-[var(--color-midnight)]">
                    {item.text}
                  </p>
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
            eyebrow="Valeurs"
            title="Le socle de fonctionnement Yellix"
            description="Un cadre de travail lisible pour maintenir exigence, stabilité et proximité terrain."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.04}>
                <article className="h-full rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_16px_40px_rgba(8,19,31,0.05)]">
                  <IconBadge icon={value.icon} className="h-10 w-10 rounded-[16px]" iconClassName="h-4 w-4" />
                  <h3 className="mt-4 text-[1.3rem]">{value.title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell space-y-6">
          <SectionHeading
            compact
            eyebrow="Repères"
            title="Une assise multisectorielle claire"
            description="Quelques éléments pour situer l’étendue d’intervention de Yellix Group."
          />
          <StatsBand items={keyMetrics} />
        </div>
      </section>

      <section className="pb-10 md:pb-12 lg:pb-14">
        <div className="container-shell">
          <CtaBanner
            compact
            title="Construisons un cadre d’intervention simple et efficace"
            description="Yellix accompagne vos besoins techniques avec une logique claire et opérationnelle."
            ctaLabel="Nous contacter"
          />
        </div>
      </section>
    </>
  );
}
