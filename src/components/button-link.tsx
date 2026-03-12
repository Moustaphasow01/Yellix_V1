import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-midnight)] shadow-[0_20px_48px_rgba(0,191,165,0.22)] hover:-translate-y-0.5 hover:bg-[#18ccb5]",
  secondary:
    "border border-white/14 bg-white/[0.045] text-white hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/[0.075]",
  ghost:
    "border border-[var(--color-border-strong)] bg-white text-[var(--color-midnight)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-midnight)]",
};

export function buttonStyles(variant: ButtonVariant = "primary", fullWidth = false) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
    variantClasses[variant],
    fullWidth && "w-full",
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonStyles(variant), "group", className)}>
      {children}
      <ArrowRight className="h-[15px] w-[15px] transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
