import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { buttonStyles } from "@/components/button-link";

type QuoteCTAProps = {
  title: string;
  description: string;
  href?: string;
  compact?: boolean;
};

export function QuoteCTA({
  title,
  description,
  href = "/quote",
  compact = false,
}: QuoteCTAProps) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(135deg,#08131f_0%,#0B1C27_100%)] px-5 py-6 text-white shadow-[0_22px_58px_rgba(8,19,31,0.12)] md:px-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[38rem] space-y-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/44">
            Devis & commandes volumetriques
          </p>
          <h2 className={compact ? "text-[1.55rem] leading-[1.04] text-white" : "text-[1.9rem] leading-[1.04] text-white"}>
            {title}
          </h2>
          <p className="text-[0.88rem] leading-6 text-white/68">{description}</p>
        </div>

        <Link href={href} className={cn(buttonStyles("primary"), "px-5")}>
          Demander un devis
          <ArrowRight className="h-[15px] w-[15px]" />
        </Link>
      </div>
    </section>
  );
}
