import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Sector } from "@/data/site";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/cn";

type SectorCardProps = {
  sector: Sector;
  compact?: boolean;
};

export function SectorCard({ sector, compact = false }: SectorCardProps) {
  const Icon = iconMap[sector.icon];

  return (
    <Link
      href={`/secteurs/${sector.slug}`}
      className={cn(
        "group relative flex h-full flex-col border border-[var(--color-border)] bg-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_18px_42px_rgba(8,19,31,0.08)]",
        compact
          ? "rounded-[18px] p-[1.125rem] shadow-[0_10px_24px_rgba(8,19,31,0.045)]"
          : "rounded-[26px] p-5 shadow-[0_16px_44px_rgba(8,19,31,0.06)] md:p-6",
      )}
    >
      <div className={cn("flex items-start", compact ? "gap-2.5" : "gap-4")}>
        <span
          className={cn(
            "inline-flex shrink-0 items-center justify-center border shadow-[0_10px_28px_rgba(8,19,31,0.06)]",
            compact ? "h-8 w-8 rounded-[12px]" : "h-10 w-10 rounded-[18px]",
          )}
          style={{
            color: sector.accent,
            borderColor: `${sector.accent}26`,
            backgroundColor: `${sector.accent}12`,
          }}
        >
          <Icon className={cn(compact ? "h-4 w-4" : "h-4.5 w-4.5")} />
        </span>
        <span
          className={cn(
            "h-px flex-1 rounded-full opacity-70",
            compact ? "mt-3.5" : "mt-5",
          )}
          style={{ backgroundColor: sector.accent }}
        />
      </div>

      <div
        className={cn(
          compact ? "mt-2.5 space-y-1.5" : "mt-4 space-y-2.5",
        )}
      >
        <h3
          className={cn(
            "leading-[1.08]",
            compact ? "text-[1.16rem] md:text-[1.22rem]" : "text-[1.45rem] md:text-[1.6rem]",
          )}
        >
          {sector.title}
        </h3>
        <p
          className={cn(
            "text-[var(--color-slate)]",
            compact
              ? "max-w-[19rem] text-[0.84rem] leading-[1.55]"
              : "max-w-[18rem] text-[0.94rem] leading-6",
          )}
        >
          {sector.description}
        </p>
      </div>

      <ul
        className={cn(
          "text-[var(--color-slate)]",
          compact ? "mt-2.5 space-y-1 text-[11.5px] leading-[1.5]" : "mt-4 space-y-2 text-[13px] leading-5",
        )}
      >
        {sector.focus.slice(0, 2).map((item) => (
          <li
            key={item}
            className="flex items-start gap-2"
          >
            <span
              className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: sector.accent }}
            />
          <span>{item}</span>
        </li>
      ))}
      </ul>

      <div className={cn("mt-auto", compact ? "pt-2.5" : "pt-4")}>
        <div
          className={cn(
            "inline-flex items-center gap-2 font-semibold text-[var(--color-midnight)]",
            compact ? "text-[12px] tracking-[0.02em]" : "text-sm",
          )}
        >
          En savoir plus
          <ArrowUpRight className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
