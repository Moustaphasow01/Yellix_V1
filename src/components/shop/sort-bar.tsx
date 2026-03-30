import { ArrowUpDown, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import type { ShopSortOption } from "@/lib/shop";
import { cn } from "@/lib/cn";

type SortBarProps = {
  count: number;
  sortBy: ShopSortOption;
  onSortChange: (value: ShopSortOption) => void;
  onOpenFilters: () => void;
  activeFiltersCount: number;
  viewMode: "grid" | "list";
  onViewChange: (value: "grid" | "list") => void;
};

const sortOptions: Array<{ value: ShopSortOption; label: string }> = [
  { value: "featured", label: "Pertinence" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix decroissant" },
  { value: "newest", label: "Nouveautes" },
  { value: "availability", label: "Disponibilite" },
];

export function SortBar({
  count,
  sortBy,
  onSortChange,
  onOpenFilters,
  activeFiltersCount,
  viewMode,
  onViewChange,
}: SortBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-[24px] border border-[var(--color-border)] bg-white px-4 py-3 shadow-[0_12px_32px_rgba(8,19,31,0.04)] md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
          Catalogue
        </p>
        <p className="text-[0.84rem] text-[var(--color-midnight)]">
          {count} produit{count > 1 ? "s" : ""} visible{count > 1 ? "s" : ""}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-panel-soft)] p-1">
          <button
            type="button"
            onClick={() => onViewChange("grid")}
            className={cn(
              "inline-flex min-h-[2.4rem] items-center gap-2 rounded-full px-3 text-[0.78rem] font-semibold transition",
              viewMode === "grid"
                ? "bg-white text-[var(--color-midnight)] shadow-[0_8px_20px_rgba(8,19,31,0.08)]"
                : "text-[var(--color-slate)] hover:text-[var(--color-midnight)]",
            )}
          >
            <LayoutGrid className="h-4 w-4" />
            Grille
          </button>
          <button
            type="button"
            onClick={() => onViewChange("list")}
            className={cn(
              "inline-flex min-h-[2.4rem] items-center gap-2 rounded-full px-3 text-[0.78rem] font-semibold transition",
              viewMode === "list"
                ? "bg-white text-[var(--color-midnight)] shadow-[0_8px_20px_rgba(8,19,31,0.08)]"
                : "text-[var(--color-slate)] hover:text-[var(--color-midnight)]",
            )}
          >
            <List className="h-4 w-4" />
            Liste
          </button>
        </div>

        <button
          type="button"
          onClick={onOpenFilters}
          className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 text-[0.8rem] font-semibold text-[var(--color-midnight)]"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
          {activeFiltersCount > 0 ? (
            <span className="rounded-full bg-[var(--color-midnight)] px-2 py-0.5 text-[10px] text-white">
              {activeFiltersCount}
            </span>
          ) : null}
        </button>

        <label className="flex min-h-[2.9rem] items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4">
          <ArrowUpDown className="h-4 w-4 text-[var(--color-slate)]" />
          <span className="sr-only">Trier les produits</span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value as ShopSortOption)}
            className="bg-transparent pr-2 text-[0.84rem] font-medium text-[var(--color-midnight)] focus:outline-none"
            aria-label="Trier les produits"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
