import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";

type CtaBannerProps = {
  title: string;
  description: string;
  ctaLabel: string;
  href?: string;
  eyebrow?: string;
  compact?: boolean;
};

export function CtaBanner({
  title,
  description,
  ctaLabel,
  href = "/contact",
  eyebrow = "Parlons de votre projet",
  compact = false,
}: CtaBannerProps) {
  return (
    <Reveal>
      <section
        className={
          compact
            ? "rounded-[32px] bg-[var(--color-midnight)] px-5 py-7 text-white shadow-[0_24px_64px_rgba(8,19,31,0.18)] md:px-8 md:py-8"
            : "rounded-[36px] bg-[var(--color-midnight)] px-6 py-8 text-white shadow-[0_28px_80px_rgba(8,19,31,0.2)] md:px-10 md:py-10"
        }
      >
        <div className={compact ? "grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end" : "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"}>
          <div className={compact ? "space-y-3" : "space-y-4"}>
            {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
            <h2 className="text-[clamp(2rem,3vw,3rem)] leading-tight text-white">{title}</h2>
            <p className={compact ? "max-w-2xl text-[0.98rem] leading-7 text-white/72" : "max-w-2xl text-base leading-8 text-white/72"}>
              {description}
            </p>
          </div>
          <ButtonLink href={href} variant="primary">
            {ctaLabel}
          </ButtonLink>
        </div>
      </section>
    </Reveal>
  );
}
