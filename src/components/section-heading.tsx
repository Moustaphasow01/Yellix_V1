import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
  compact = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        compact ? "space-y-3" : "space-y-5",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? <span className="section-label">{eyebrow}</span> : null}
      <div className={cn(compact ? "space-y-2" : "space-y-4")}>
        <h2
          className={cn(
            compact ? "max-w-4xl text-[clamp(1.8rem,3.3vw,3rem)] leading-[1.03]" : "section-title max-w-4xl",
            theme === "light" && "text-white",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "section-copy",
            align === "center" && "mx-auto",
            theme === "light" && "text-white/72",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
