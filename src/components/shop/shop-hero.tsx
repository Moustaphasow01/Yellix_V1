import Link from "next/link";
import { ArrowRight, Boxes, FileText, ShieldCheck, Zap } from "lucide-react";
import { buttonStyles } from "@/components/button-link";
import { cn } from "@/lib/cn";

type ShopHeroHighlight = {
  label: string;
  value: string;
};

type ShopHeroProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  highlights?: ShopHeroHighlight[];
};

const highlightIcons = [Boxes, Zap, FileText, ShieldCheck];

export function ShopHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  highlights = [],
}: ShopHeroProps) {
  const hasHighlights = highlights.length > 0;

  return (
    <section className="relative overflow-hidden bg-[var(--color-midnight)] pb-8 pt-[5.5rem] text-white md:pb-10 md:pt-24 lg:pb-12 lg:pt-[6.5rem]">
      <div className="tech-grid-dark absolute inset-0 opacity-[0.12]" />
      <div className="absolute left-[-4rem] top-0 h-64 w-64 rounded-full bg-[rgba(0,191,165,0.08)] blur-[120px]" />
      <div className="absolute right-[-4rem] top-12 h-60 w-60 rounded-full bg-[rgba(47,107,255,0.08)] blur-[120px]" />

      <div className="container-shell relative z-10">
        <div
          className={cn(
            "grid gap-6",
            hasHighlights ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end" : "lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
          )}
        >
          <div className="space-y-5">
            <span className="section-label">{eyebrow}</span>
            {title ? (
              <div className="space-y-4">
                <h1 className="max-w-[15ch] text-[clamp(2.2rem,4.2vw,4.4rem)] leading-[0.94] text-white">
                  {title}
                </h1>
                {description ? (
                  <p className="max-w-[42rem] text-[0.95rem] leading-7 text-white/70 md:text-[1rem]">
                    {description}
                  </p>
                ) : null}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              <Link href={primaryHref} className={cn(buttonStyles("primary"), "px-5")}>
                {primaryLabel}
                <ArrowRight className="h-[15px] w-[15px]" />
              </Link>
              <Link href={secondaryHref} className={cn(buttonStyles("secondary"), "px-5")}>
                {secondaryLabel}
                <ArrowRight className="h-[15px] w-[15px]" />
              </Link>
            </div>
          </div>

          {hasHighlights ? (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item, index) => {
                const Icon = highlightIcons[index % highlightIcons.length];

                return (
                  <article
                    key={item.label}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 shadow-[0_18px_40px_rgba(3,8,16,0.22)] backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-[15px] border border-white/10 bg-white/[0.05] text-[var(--color-accent)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="space-y-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/44">
                          {item.label}
                        </p>
                        <p className="text-[0.98rem] font-semibold leading-6 text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
