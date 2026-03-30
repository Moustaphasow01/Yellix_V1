import {
  FileCheck2,
  Headset,
  Layers3,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

type ReassuranceItem = {
  title: string;
  description: string;
};

type ReassuranceStripProps = {
  items: ReassuranceItem[];
  theme?: "light" | "dark";
};

const reassuranceIcons: LucideIcon[] = [
  ShieldCheck,
  Headset,
  FileCheck2,
  Layers3,
  Wrench,
  ShieldCheck,
];

export function ReassuranceStrip({
  items,
  theme = "light",
}: ReassuranceStripProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const Icon = reassuranceIcons[index % reassuranceIcons.length];

        return (
          <article
            key={item.title}
            className={cn(
              "rounded-[24px] border px-4 py-4",
              theme === "light"
                ? "border-[var(--color-border)] bg-white"
                : "border-white/10 bg-white/[0.04]",
            )}
          >
            <span
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-[14px]",
                theme === "light"
                  ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  : "bg-white/[0.06] text-[var(--color-accent)]",
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className={cn("mt-4 text-[1rem] leading-6", theme === "dark" && "text-white")}>
              {item.title}
            </h3>
            <p
              className={cn(
                "mt-2 text-[0.84rem] leading-6",
                theme === "light" ? "text-[var(--color-slate)]" : "text-white/68",
              )}
            >
              {item.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
