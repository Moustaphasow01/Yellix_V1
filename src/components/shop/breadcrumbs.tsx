import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function ShopBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Fil d'ariane" className="flex flex-wrap items-center gap-2 text-[0.82rem] text-[var(--color-slate)]">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
          {index > 0 ? <ChevronRight className="h-3.5 w-3.5 text-[var(--color-slate)]" /> : null}
          {item.href ? (
            <Link href={item.href} className="transition duration-200 hover:text-[var(--color-midnight)]">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[var(--color-midnight)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
