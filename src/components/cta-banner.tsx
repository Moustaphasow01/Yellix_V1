import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

type CtaBannerProps = {
  title: string;
  description?: string;
  ctaLabel: string;
  href?: string;
  eyebrow?: string;
  compact?: boolean;
  pills?: string[];
};

export function CtaBanner({
  title,
  description,
  ctaLabel,
  href = "/contact",
  eyebrow = "Parlons de votre projet",
  compact = false,
  pills,
}: CtaBannerProps) {
  return (
    <Reveal>
      <section
        className={
          compact
            ? "relative overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,#08131f_0%,#0b1623_100%)] px-5 py-7 text-white shadow-[0_22px_56px_rgba(8,19,31,0.18)] md:px-8 md:py-8"
            : "relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,#08131f_0%,#0b1623_100%)] px-6 py-8 text-white shadow-[0_26px_70px_rgba(8,19,31,0.2)] md:px-10 md:py-10"
        }
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,191,165,0.45),transparent)]" />
        <div
          className={
            compact
              ? "relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
              : "relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
          }
        >
          <div className={compact ? "space-y-3" : "space-y-4"}>
            {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
            <h2 className="text-[clamp(2rem,3vw,3rem)] leading-tight text-white">{title}</h2>
            {description ? (
              <p
                className={
                  compact
                    ? "max-w-2xl text-[0.98rem] leading-7 text-white/72"
                    : "max-w-2xl text-base leading-8 text-white/72"
                }
              >
                {description}
              </p>
            ) : null}
            {pills?.length ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex rounded-full border border-white/12 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/64"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="flex items-center lg:justify-end">
            <ButtonLink href={href} variant="primary" className="shrink-0">
              {ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
