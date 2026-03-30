import type { ShopFiltersState, ShopAvailableFilters } from "@/lib/shop";
import {
  getInstallationLabel,
  getPowerLabel,
  getProductTypeLabel,
  getStockLabel,
} from "@/lib/shop";

type FilterControlsProps = {
  filters: ShopFiltersState;
  available: ShopAvailableFilters;
  onChange: (patch: Partial<ShopFiltersState>) => void;
  onReset: () => void;
  showCategoryFilter?: boolean;
  showHeader?: boolean;
};

const priceOptions = [
  { value: "all", label: "Tous les budgets" },
  { value: "under100", label: "Moins de 100 000 FCFA" },
  { value: "100to300", label: "100 000 a 300 000 FCFA" },
  { value: "300to1000", label: "300 000 a 1 000 000 FCFA" },
  { value: "over1000", label: "Plus de 1 000 000 FCFA" },
] as const;

function FilterField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
        {label}
      </p>
      {children}
    </div>
  );
}

export function FilterControls({
  filters,
  available,
  onChange,
  onReset,
  showCategoryFilter = true,
  showHeader = true,
}: FilterControlsProps) {
  return (
    <div className="space-y-3">
      {showHeader ? (
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[0.9rem] font-semibold text-[var(--color-midnight)]">Filtres avancés</p>
            <p className="text-[0.78rem] leading-5 text-[var(--color-slate)]">
              Choisissez les criteres utiles.
            </p>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="text-[0.76rem] font-semibold text-[var(--color-midnight)] underline decoration-[rgba(8,19,31,0.18)] underline-offset-4"
          >
            Reinitialiser
          </button>
        </div>
      ) : null}

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {showCategoryFilter ? (
          <FilterField label="Secteur shop">
            <select
              value={filters.category ?? "all"}
              onChange={(event) =>
                onChange({
                  category: event.target.value as ShopFiltersState["category"],
                })
              }
              className="shop-select"
            >
              <option value="all">Toutes les categories</option>
              {available.categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </FilterField>
        ) : null}

        <FilterField label="Univers metier">
          <select
            value={filters.sector ?? "all"}
            onChange={(event) =>
              onChange({
                sector: event.target.value as ShopFiltersState["sector"],
              })
            }
            className="shop-select"
          >
            <option value="all">Tous les univers</option>
            {available.sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Sous-categorie">
          <select
            value={filters.subcategory ?? "all"}
            onChange={(event) =>
              onChange({
                subcategory: event.target.value,
              })
            }
            className="shop-select"
          >
            <option value="all">Toutes les sous-categories</option>
            {available.subcategories.map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Marque">
          <select
            value={filters.brand ?? "all"}
            onChange={(event) =>
              onChange({
                brand: event.target.value,
              })
            }
            className="shop-select"
          >
            <option value="all">Toutes les marques</option>
            {available.brands.map((brand) => (
              <option key={brand.slug} value={brand.slug}>
                {brand.name}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Disponibilite">
          <select
            value={filters.stock ?? "all"}
            onChange={(event) =>
              onChange({
                stock: event.target.value as ShopFiltersState["stock"],
              })
            }
            className="shop-select"
          >
            <option value="all">Tous les statuts</option>
            {available.stockStatuses.map((stock) => (
              <option key={stock} value={stock}>
                {getStockLabel(stock)}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Type de produit">
          <select
            value={filters.productType ?? "all"}
            onChange={(event) =>
              onChange({
                productType: event.target.value as ShopFiltersState["productType"],
              })
            }
            className="shop-select"
          >
            <option value="all">Tous les types</option>
            {available.productTypes.map((productType) => (
              <option key={productType} value={productType}>
                {getProductTypeLabel(productType)}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Alimentation">
          <select
            value={filters.power ?? "all"}
            onChange={(event) =>
              onChange({
                power: event.target.value as ShopFiltersState["power"],
              })
            }
            className="shop-select"
          >
            <option value="all">Toutes les alimentations</option>
            {available.powers.map((power) => (
              <option key={power} value={power}>
                {getPowerLabel(power)}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Installation">
          <select
            value={filters.installation ?? "all"}
            onChange={(event) =>
              onChange({
                installation: event.target.value as ShopFiltersState["installation"],
              })
            }
            className="shop-select"
          >
            <option value="all">Toutes les configurations</option>
            {available.installations.map((installation) => (
              <option key={installation} value={installation}>
                {getInstallationLabel(installation)}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Usage">
          <select
            value={filters.usage ?? "all"}
            onChange={(event) =>
              onChange({
                usage: event.target.value,
              })
            }
            className="shop-select"
          >
            <option value="all">Tous les usages</option>
            {available.usages.slice(0, 12).map((usage) => (
              <option key={usage} value={usage}>
                {usage}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Compatibilite">
          <select
            value={filters.compatibility ?? "all"}
            onChange={(event) =>
              onChange({
                compatibility: event.target.value,
              })
            }
            className="shop-select"
          >
            <option value="all">Toutes les compatibilites</option>
            {available.compatibilities.slice(0, 12).map((compatibility) => (
              <option key={compatibility} value={compatibility}>
                {compatibility}
              </option>
            ))}
          </select>
        </FilterField>

        <FilterField label="Prix">
          <select
            value={filters.priceBand ?? "all"}
            onChange={(event) =>
              onChange({
                priceBand: event.target.value as ShopFiltersState["priceBand"],
              })
            }
            className="shop-select"
          >
            {priceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </FilterField>

        <label className="flex items-center gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3 text-[0.84rem] font-medium text-[var(--color-midnight)]">
          <input
            type="checkbox"
            checked={filters.quoteOnly === "yes"}
            onChange={(event) =>
              onChange({
                quoteOnly: event.target.checked ? "yes" : "all",
              })
            }
            className="h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
          />
          Sur devis uniquement
        </label>
      </div>
    </div>
  );
}
