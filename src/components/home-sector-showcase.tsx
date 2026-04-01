"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { iconMap } from "@/lib/icon-map";
import { sectors, services } from "@/data/site";

type SectorCardMeta = Record<string, { summary: string; tags: string[] }>;

const sectorCardMeta: SectorCardMeta = {
  telecommunications: {
    summary:
      "Disponibilité réseau, interventions terrain et maintien en condition opérationnelle.",
    tags: ["Réseaux", "Maintenance", "Support"],
  },
  energie: {
    summary:
      "Sécurité d'exploitation, continuité des installations et fiabilité des équipements critiques.",
    tags: ["Sécurité", "Continuité", "Fiabilité"],
  },
  agriculture: {
    summary:
      "Performance des équipements, continuité opérationnelle et adaptation au terrain.",
    tags: ["Équipements", "Continuité", "Terrain"],
  },
  elevage: {
    summary:
      "Maintenance des installations, continuité d'exploitation et support technique des sites.",
    tags: ["Installations", "Continuité", "Support"],
  },
};

export function HomeSectorShowcase() {
  return (
    <section id="experience" className="py-0">
      <div className="w-full bg-[var(--color-panel-soft)] px-4 pt-4 pb-2 md:px-6 md:pt-5 md:pb-3 lg:px-7 lg:pt-5 lg:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white shadow-[0_16px_40px_rgba(8,19,31,0.05)]"
        >
          <div className="grid lg:grid-cols-[25rem_minmax(0,1fr)]">
            <div className="border-b border-[var(--color-border)] px-5 py-4 md:px-6 md:py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-6">
              <Reveal>
                <div className="w-full space-y-3">
                  <span className="section-label">Nos services</span>
                  <div className="grid gap-1.5 pt-1">
                    {services.map((service) => {
                      const Icon = iconMap[service.icon];

                      return (
                        <motion.div
                          key={service.slug}
                          className="group flex items-center gap-2 border-b border-[var(--color-border)] pb-1.5 last:border-b-0 last:pb-0"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[9px] border border-[var(--color-border)] bg-[var(--color-ivory)] text-[var(--color-accent)] transition duration-200 group-hover:rotate-6">
                            <Icon className="h-2.5 w-2.5" />
                          </span>
                          <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[var(--color-midnight)]">
                            {service.title}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="bg-[linear-gradient(180deg,rgba(245,247,250,0.55)_0%,rgba(255,255,255,1)_100%)] p-4 md:p-5 lg:p-5">
              <div className="mb-4 flex items-center gap-4">
                <span className="section-label">Où nous intervenons</span>
                <span className="h-px flex-1 bg-[var(--color-border)]" />
              </div>
              <div className="grid gap-2.5 lg:grid-cols-2">
                {sectors.map((sector, index) => {
                  const Icon = iconMap[sector.icon];
                  const cardMeta = sectorCardMeta[sector.slug] ?? {
                    summary: sector.description,
                    tags: sector.focus.slice(0, 3),
                  };

                  return (
                    <Reveal key={sector.slug} delay={index * 0.04} className="h-full">
                      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                        <div className="group relative flex h-full min-h-[14rem] cursor-default flex-col overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-white p-4 shadow-[0_10px_24px_rgba(8,19,31,0.04)] transition duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[0_16px_36px_rgba(8,19,31,0.07)] md:min-h-[14.5rem] md:p-4">
                          <span
                            className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{ backgroundColor: sector.accent }}
                          />
                          <span
                            className="absolute bottom-5 left-0 top-5 hidden w-[2px] opacity-0 transition duration-300 group-hover:opacity-100 lg:block"
                            style={{ backgroundColor: sector.accent }}
                          />

                          <div className="flex items-start gap-4">
                            <span
                              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[14px] border transition duration-300 group-hover:scale-[1.05] group-hover:rotate-3"
                              style={{
                                color: sector.accent,
                                borderColor: `${sector.accent}26`,
                                backgroundColor: `${sector.accent}12`,
                              }}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </span>

                            <div className="min-w-0 space-y-1">
                              <h3 className="text-[1.04rem] font-semibold leading-[1.08] text-[var(--color-midnight)] md:text-[1.08rem]">
                                {sector.title}
                              </h3>
                              <p className="max-w-[30rem] text-[0.8rem] leading-5 text-[var(--color-slate)]">
                                {cardMeta.summary}
                              </p>
                            </div>
                          </div>

                          <div className="mt-3.5 border-t border-[var(--color-border)] pt-2.5">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                              Enjeux cles
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {cardMeta.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-ivory)] px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-[0.08em] text-[var(--color-midnight)]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <span className="mt-3.5 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.03em] text-[var(--color-midnight)] transition duration-200 group-hover:translate-x-1">
                              Découvrir le secteur
                              <ArrowUpRight className="h-3 w-3 transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
