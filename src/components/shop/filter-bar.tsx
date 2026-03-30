"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import type {
  ShopAvailableFilters,
  ShopFiltersState,
  ShopSortOption,
} from "@/lib/shop";
import { buttonStyles } from "@/components/button-link";
import { FilterControls } from "@/components/shop/filter-controls";
import { SortBar } from "@/components/shop/sort-bar";
import { cn } from "@/lib/cn";

type FilterBarProps = {
  filters: ShopFiltersState;
  available: ShopAvailableFilters;
  sortBy: ShopSortOption;
  query: string;
  count: number;
  activeFiltersCount: number;
  viewMode: "grid" | "list";
  onQueryChange: (value: string) => void;
  onSortChange: (value: ShopSortOption) => void;
  onViewChange: (value: "grid" | "list") => void;
  onFiltersChange: (patch: Partial<ShopFiltersState>) => void;
  onReset: () => void;
  showCategoryFilter?: boolean;
};

export function FilterBar({
  filters,
  available,
  sortBy,
  query,
  count,
  activeFiltersCount,
  viewMode,
  onQueryChange,
  onSortChange,
  onViewChange,
  onFiltersChange,
  onReset,
  showCategoryFilter = true,
}: FilterBarProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-4 shadow-[0_18px_48px_rgba(8,19,31,0.06)] md:p-[1.125rem]">
      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
        <label className="flex min-h-[3rem] items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-3.5">
          <Search className="h-4 w-4 text-[var(--color-slate)]" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Rechercher une reference, une marque ou un usage..."
            className="h-full w-full bg-transparent text-[0.88rem] text-[var(--color-midnight)] placeholder:text-[var(--color-slate)] focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/quote"
            className={cn(buttonStyles("ghost"), "min-h-[3rem] px-4 text-[0.8rem]")}
          >
            Demander un devis
          </Link>
        </div>
      </div>

      <div className="mt-3">
        <SortBar
          count={count}
          sortBy={sortBy}
          onSortChange={onSortChange}
          onOpenFilters={() => setIsFiltersOpen((current) => !current)}
          activeFiltersCount={activeFiltersCount}
          viewMode={viewMode}
          onViewChange={onViewChange}
        />
      </div>

      <AnimatePresence initial={false}>
        {isFiltersOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] p-4">
              <FilterControls
                filters={filters}
                available={available}
                onChange={onFiltersChange}
                onReset={onReset}
                showCategoryFilter={showCategoryFilter}
                showHeader={false}
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
