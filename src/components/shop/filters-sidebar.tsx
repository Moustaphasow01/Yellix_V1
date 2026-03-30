import type { ShopAvailableFilters, ShopFiltersState } from "@/lib/shop";
import { FilterControls } from "@/components/shop/filter-controls";

type FiltersSidebarProps = {
  filters: ShopFiltersState;
  available: ShopAvailableFilters;
  onChange: (patch: Partial<ShopFiltersState>) => void;
  onReset: () => void;
  showCategoryFilter?: boolean;
};

export function FiltersSidebar(props: FiltersSidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[8.9rem] rounded-[28px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_44px_rgba(8,19,31,0.05)]">
        <FilterControls {...props} />
      </div>
    </aside>
  );
}
