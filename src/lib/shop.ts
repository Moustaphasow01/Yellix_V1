import {
  shopBrands,
  shopCategories,
  shopKits,
  shopProducts,
  type ShopBrand,
  type ShopCategory,
  type ShopCategorySlug,
  type ShopKit,
  type ShopProduct,
  type ShopProductBadge,
  type ShopStockStatus,
} from "@/data/shop";

export type ShopSortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "availability";

export type ShopFiltersState = {
  category?: ShopCategorySlug | "all";
  sector?: ShopProduct["sector"] | "all";
  subcategory?: string | "all";
  brand?: string | "all";
  stock?: ShopStockStatus | "all";
  productType?: ShopProduct["productType"] | "all";
  installation?: ShopProduct["installation"] | "all";
  power?: ShopProduct["power"] | "all";
  usage?: string | "all";
  compatibility?: string | "all";
  quoteOnly?: "all" | "yes";
  priceBand?: "all" | "under100" | "100to300" | "300to1000" | "over1000";
  badge?: ShopProductBadge | "all";
  query?: string;
};

export type ShopAvailableFilters = {
  brands: ShopBrand[];
  categories: ShopCategory[];
  installations: ShopProduct["installation"][];
  powers: ShopProduct["power"][];
  productTypes: ShopProduct["productType"][];
  stockStatuses: ShopStockStatus[];
  sectors: ShopProduct["sector"][];
  subcategories: string[];
  usages: string[];
  compatibilities: string[];
};

export function formatPriceCFA(amount: number) {
  return `${new Intl.NumberFormat("fr-FR").format(amount)} FCFA`;
}

export function formatPriceHT(amount: number) {
  return `${formatPriceCFA(amount)} HT`;
}

export function formatPriceTTC(amount: number) {
  return `${formatPriceCFA(amount)} TTC`;
}

export function getShopCategoryBySlug(slug: string) {
  return shopCategories.find((category) => category.slug === slug);
}

export function getShopBrandBySlug(slug: string) {
  return shopBrands.find((brand) => brand.slug === slug);
}

export function getShopProductBySlug(slug: string) {
  return shopProducts.find((product) => product.slug === slug);
}

export function getShopKitBySlug(slug: string) {
  return shopKits.find((kit) => kit.slug === slug);
}

export function getProductsByCategory(categorySlug: ShopCategorySlug) {
  return shopProducts.filter((product) => product.categorySlug === categorySlug);
}

export function getFeaturedProducts(limit = 8) {
  return shopProducts.filter((product) => product.featured).slice(0, limit);
}

export function getNewestProducts(limit = 8) {
  return shopProducts.filter((product) => product.badges.includes("new")).slice(0, limit);
}

export function getFeaturedKits(limit = 4) {
  return shopKits.slice(0, limit);
}

export function getProductsForSector(sector: ShopProduct["sector"], limit = 4) {
  return shopProducts.filter((product) => product.sector === sector).slice(0, limit);
}

export function getCategoryCount(categorySlug: ShopCategorySlug) {
  return getProductsByCategory(categorySlug).length;
}

export function getAccessoryProducts(product: ShopProduct) {
  return shopProducts.filter((candidate) => product.accessorySlugs.includes(candidate.slug));
}

export function getRelatedProducts(product: ShopProduct) {
  return shopProducts.filter((candidate) => product.relatedSlugs.includes(candidate.slug));
}

export function getProductsFromKit(kit: ShopKit) {
  return shopProducts.filter((product) => kit.includedProductSlugs.includes(product.slug));
}

export function getProductBadgeLabel(badge: ShopProductBadge) {
  if (badge === "best_seller") return "Best seller";
  if (badge === "new") return "Nouveau";
  if (badge === "quote") return "Sur devis";
  if (badge === "kit") return "Kit";
  if (badge === "bundle") return "Bundle";
  return "Selection";
}

export function getStockLabel(stockStatus: ShopStockStatus) {
  if (stockStatus === "in_stock") return "Disponible";
  if (stockStatus === "low_stock") return "Stock faible";
  if (stockStatus === "quote_only") return "Sur devis";
  if (stockStatus === "preorder") return "Approvisionnement";
  return "Hors stock";
}

export function getProductTypeLabel(productType: ShopProduct["productType"]) {
  if (productType === "unit") return "Unitaire";
  if (productType === "kit") return "Kit";
  if (productType === "bundle") return "Bundle";
  return "Consommable";
}

export function getInstallationLabel(installation: ShopProduct["installation"]) {
  if (installation === "interieur") return "Interieur";
  if (installation === "exterieur") return "Exterieur";
  return "Mixte";
}

export function getPowerLabel(power: ShopProduct["power"]) {
  if (power === "AC") return "AC";
  if (power === "DC") return "DC";
  if (power === "Solaire") return "Solaire";
  if (power === "Batterie") return "Batterie";
  return "Mixte";
}

export function getFilteredProducts(
  products: ShopProduct[],
  filters: ShopFiltersState,
  sortBy: ShopSortOption = "featured",
) {
  const query = filters.query?.trim().toLowerCase() ?? "";

  const filtered = products.filter((product) => {
    const matchesQuery =
      query.length === 0
        ? true
        : [
            product.name,
            product.sku,
            product.shortDescription,
            product.fullDescription,
            product.subcategory,
            product.brandSlug,
            ...product.compatibilities,
            ...product.usage,
            ...product.specs.map((item) => `${item.label} ${item.value}`),
          ]
            .join(" ")
            .toLowerCase()
            .includes(query);

    const matchesCategory =
      !filters.category || filters.category === "all"
        ? true
        : product.categorySlug === filters.category;
    const matchesSector =
      !filters.sector || filters.sector === "all" ? true : product.sector === filters.sector;
    const matchesSubcategory =
      !filters.subcategory || filters.subcategory === "all"
        ? true
        : product.subcategory === filters.subcategory;
    const matchesBrand =
      !filters.brand || filters.brand === "all" ? true : product.brandSlug === filters.brand;
    const matchesStock =
      !filters.stock || filters.stock === "all" ? true : product.stockStatus === filters.stock;
    const matchesProductType =
      !filters.productType || filters.productType === "all"
        ? true
        : product.productType === filters.productType;
    const matchesInstallation =
      !filters.installation || filters.installation === "all"
        ? true
        : product.installation === filters.installation;
    const matchesPower =
      !filters.power || filters.power === "all" ? true : product.power === filters.power;
    const matchesUsage =
      !filters.usage || filters.usage === "all"
        ? true
        : product.usage.includes(filters.usage);
    const matchesCompatibility =
      !filters.compatibility || filters.compatibility === "all"
        ? true
        : product.compatibilities.includes(filters.compatibility);
    const matchesQuoteOnly = filters.quoteOnly === "yes" ? product.quoteOnly : true;
    const matchesBadge =
      !filters.badge || filters.badge === "all"
        ? true
        : product.badges.includes(filters.badge);

    let matchesPrice = true;
    if (filters.priceBand === "under100") {
      matchesPrice = product.priceHT < 100000;
    } else if (filters.priceBand === "100to300") {
      matchesPrice = product.priceHT >= 100000 && product.priceHT <= 300000;
    } else if (filters.priceBand === "300to1000") {
      matchesPrice = product.priceHT > 300000 && product.priceHT <= 1000000;
    } else if (filters.priceBand === "over1000") {
      matchesPrice = product.priceHT > 1000000;
    }

    return (
      matchesQuery &&
      matchesCategory &&
      matchesSector &&
      matchesSubcategory &&
      matchesBrand &&
      matchesStock &&
      matchesProductType &&
      matchesInstallation &&
      matchesPower &&
      matchesUsage &&
      matchesCompatibility &&
      matchesQuoteOnly &&
      matchesBadge &&
      matchesPrice
    );
  });

  return filtered.sort((left, right) => {
    if (sortBy === "price-asc") return left.priceHT - right.priceHT;
    if (sortBy === "price-desc") return right.priceHT - left.priceHT;
    if (sortBy === "newest") {
      return Number(right.badges.includes("new")) - Number(left.badges.includes("new"));
    }
    if (sortBy === "availability") {
      const stockRank = {
        in_stock: 0,
        low_stock: 1,
        preorder: 2,
        quote_only: 3,
        out_of_stock: 4,
      } satisfies Record<ShopStockStatus, number>;

      return stockRank[left.stockStatus] - stockRank[right.stockStatus];
    }

    return Number(right.featured) - Number(left.featured);
  });
}

export function getAvailableFilters(products: ShopProduct[]) {
  const unique = <T,>(values: T[]) => Array.from(new Set(values));

  return {
    brands: unique(products.map((product) => product.brandSlug))
      .map((slug) => getShopBrandBySlug(slug))
      .filter(Boolean) as ShopBrand[],
    categories: unique(products.map((product) => product.categorySlug))
      .map((slug) => getShopCategoryBySlug(slug))
      .filter(Boolean) as ShopCategory[],
    installations: unique(products.map((product) => product.installation)),
    powers: unique(products.map((product) => product.power)),
    productTypes: unique(products.map((product) => product.productType)),
    stockStatuses: unique(products.map((product) => product.stockStatus)),
    sectors: unique(products.map((product) => product.sector)),
    subcategories: unique(products.map((product) => product.subcategory)),
    usages: unique(products.flatMap((product) => product.usage)),
    compatibilities: unique(products.flatMap((product) => product.compatibilities)),
  } satisfies ShopAvailableFilters;
}
