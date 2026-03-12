import { cn } from "@/lib/cn";
import { iconMap } from "@/lib/icon-map";
import type { IconName } from "@/lib/icon-map";

type IconBadgeProps = {
  icon: IconName;
  className?: string;
  iconClassName?: string;
};

export function IconBadge({ icon, className, iconClassName }: IconBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white text-[var(--color-accent)] shadow-[0_10px_30px_rgba(8,19,31,0.08)]",
        className,
      )}
    >
      <Icon className={cn("h-5 w-5", iconClassName)} />
    </span>
  );
}
