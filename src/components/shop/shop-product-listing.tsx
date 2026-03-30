"use client";

import { useDeferredValue, useState } from "react";
import type { ShopCategorySlug, ShopProduct } from "@/data/shop";
import { buttonStyles } from "@/components/button-link";
import { EmptyState } from "@/components/shop/empty-state";
import { FilterBar } from "@/components/shop/filter-bar";
import { ProductCard } from "@/components/shop/product-card";
import {
  getAvailableFilters,
  getFilteredProducts,
  type ShopFiltersState,
  type ShopSortOption,
} from "@/lib/shop";
import { cn } from "@/lib/cn";

type ShopProductListingProps = {
  products: ShopProduct[];
  initialCategory?: ShopCategorySlug;
  showCategoryFilter?: boolean;
};

export function ShopProductListing({
  products,
  initialCategory,
  showCategoryFilter = true,
}: ShopProductListingProps) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<ShopSortOption>("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(9);
  const [filters, setFilters] = useState<ShopFiltersState>({
    category: initialCategory ?? "all",
    sector: "all",
    subcategory: "all",
    brand: "all",
    stock: "all",
    productType: "all",
    installation: "all",
    power: "all",
    usage: "all",
    compatibility: "all",
    quoteOnly: "all",
    priceBand: "all",
  });
  const deferredQuery = useDeferredValue(query);
  const available = getAvailableFilters(products);
  const filteredProducts = getFilteredProducts(
    products,
    {
      ...filters,
      category: showCategoryFilter ? filters.category : initialCategory,
      query: deferredQuery,
    },
    sortBy,
  );

  function updateFilters(patch: Partial<ShopFiltersState>) {
    setVisibleCount(9);
    setFilters((currentFilters) => ({
      ...currentFilters,
      ...patch,
    }));
  }

  function resetFilters() {
    setVisibleCount(9);
    setFilters({
      category: initialCategory ?? "all",
      sector: "all",
      subcategory: "all",
      brand: "all",
      stock: "all",
      productType: "all",
      installation: "all",
      power: "all",
      usage: "all",
      compatibility: "all",
      quoteOnly: "all",
      priceBand: "all",
    });
    setQuery("");
    setSortBy("featured");
  }

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const activeFiltersCount =
    Object.values(filters).filter((value) => value && value !== "all").length +
    Number(query.trim().length > 0);

  return (
    <section id="catalogue" className="space-y-6">
      <FilterBar
        filters={filters}
        available={available}
        sortBy={sortBy}
        query={query}
        count={filteredProducts.length}
        activeFiltersCount={activeFiltersCount}
        viewMode={viewMode}
        onQueryChange={(value) => {
          setVisibleCount(9);
          setQuery(value);
        }}
        onSortChange={(value) => {
          setVisibleCount(9);
          setSortBy(value);
        }}
        onViewChange={setViewMode}
        onFiltersChange={updateFilters}
        onReset={resetFilters}
        showCategoryFilter={showCategoryFilter}
      />

      <div className="space-y-4">
        {visibleProducts.length === 0 ? (
          <EmptyState
            title="Aucun produit ne correspond a votre recherche"
            description="Essayez un autre mot-cle, retirez un filtre ou utilisez la demande de devis pour un besoin plus specifique."
            action={
              <button
                type="button"
                onClick={resetFilters}
                className={cn(buttonStyles("ghost"), "px-5")}
              >
                Reinitialiser les filtres
              </button>
            }
          />
        ) : (
          <>
            <div
              className={cn(
                "gap-3",
                viewMode === "list"
                  ? "grid grid-cols-1"
                  : "grid sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5",
              )}
            >
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} variant={viewMode} />
              ))}
            </div>

            {filteredProducts.length > visibleCount ? (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((currentCount) => currentCount + 6)}
                  className={cn(buttonStyles("ghost"), "px-5")}
                >
                  Charger plus
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
