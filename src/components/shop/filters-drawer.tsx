"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ShopAvailableFilters, ShopFiltersState } from "@/lib/shop";
import { FilterControls } from "@/components/shop/filter-controls";

type FiltersDrawerProps = {
  open: boolean;
  onClose: () => void;
  filters: ShopFiltersState;
  available: ShopAvailableFilters;
  onChange: (patch: Partial<ShopFiltersState>) => void;
  onReset: () => void;
  showCategoryFilter?: boolean;
};

export function FiltersDrawer({
  open,
  onClose,
  filters,
  available,
  onChange,
  onReset,
  showCategoryFilter = true,
}: FiltersDrawerProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-[rgba(8,19,31,0.45)] lg:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-full max-w-[24rem] flex-col bg-[var(--color-panel-soft)]"
          >
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
              <div>
                <p className="text-[0.95rem] font-semibold text-[var(--color-midnight)]">Filtres</p>
                <p className="text-[0.8rem] text-[var(--color-slate)]">Version mobile du catalogue</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer les filtres"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-midnight)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              <FilterControls
                filters={filters}
                available={available}
                onChange={onChange}
                onReset={onReset}
                showCategoryFilter={showCategoryFilter}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
