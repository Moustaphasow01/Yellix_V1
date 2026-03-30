import { cn } from "@/lib/cn";

type ShopSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  compact?: boolean;
};

export function ShopSectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
  compact = false,
}: ShopSectionHeaderProps) {
  return (
    <div
      className={cn(
        compact ? "space-y-3" : "space-y-4",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <span className="section-label">{eyebrow}</span>
      ) : null}
      <div className={cn(compact ? "space-y-2" : "space-y-3")}>
        <h2
          className={cn(
            compact
              ? "max-w-4xl text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.02]"
              : "max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[1.02]",
            theme === "light" && "text-white",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[42rem] text-[0.95rem] leading-7 text-[var(--color-slate)]",
              align === "center" && "mx-auto",
              theme === "light" && "text-white/68",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
