import { Reveal } from "@/components/reveal";

type HeroHighlight = {
  label: string;
  value: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: HeroHighlight[];
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights = [],
  children,
}: PageHeroProps) {
  const showPanel = Boolean(children) || highlights.length > 0;

  return (
    <section className="relative overflow-hidden bg-[var(--color-midnight)] pb-14 pt-28 text-white md:pb-16 md:pt-28 lg:pb-[4.5rem] lg:pt-32">
      <div className="tech-grid-dark absolute inset-0 opacity-20" />
      <div className="absolute -left-8 top-0 h-64 w-64 rounded-full bg-[rgba(0,191,165,0.08)] blur-[110px]" />
      <div
        className={`container-shell relative z-10 grid gap-8 md:gap-10 ${
          showPanel ? "lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-end lg:gap-8" : ""
        }`}
      >
        <Reveal className="space-y-5">
          <span className="section-label">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="max-w-[12ch] text-[clamp(2.35rem,4.4vw,4.2rem)] leading-[0.94] text-white">
              {title}
            </h1>
            <p className="max-w-[38rem] text-[0.98rem] leading-7 text-white/72 md:text-[1.03rem]">
              {description}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className={showPanel ? "lg:justify-self-end" : "hidden"}>
          {children ?? (
            <div className="dark-panel premium-outline w-full max-w-[24rem] rounded-[28px] p-5 md:p-6">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
                Repères
              </p>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-3.5"
                  >
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-[0.98rem] font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
