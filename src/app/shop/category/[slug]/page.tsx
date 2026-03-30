import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { QuoteCTA } from "@/components/shop/quote-cta";
import { ShopBreadcrumbs } from "@/components/shop/breadcrumbs";
import { ShopProductListing } from "@/components/shop/shop-product-listing";
import { ShopSecondaryNavigation } from "@/components/shop/shop-secondary-navigation";
import { shopCategories, shopProducts } from "@/data/shop";
import { createMetadata } from "@/lib/metadata";
import { getProductsByCategory, getShopCategoryBySlug } from "@/lib/shop";
import { getShopCategoryTheme } from "@/lib/shop-theme";

const visibleCategorySlugs = new Set(shopProducts.map((product) => product.categorySlug));
const visibleCategories = shopCategories.filter((category) =>
  visibleCategorySlugs.has(category.slug),
);

export function generateStaticParams() {
  return visibleCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getShopCategoryBySlug(slug);

  if (!category) {
    return createMetadata({
      title: "Categorie introuvable",
      description: "Categorie shop introuvable.",
      path: "/shop",
    });
  }

  return createMetadata({
    title: `${category.name} | Shop`,
    description: category.description,
    path: `/shop/category/${category.slug}`,
  });
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getShopCategoryBySlug(slug);

  if (!category || !visibleCategorySlugs.has(category.slug)) {
    notFound();
  }

  const theme = getShopCategoryTheme(category);
  const products = getProductsByCategory(category.slug);
  if (products.length === 0) {
    notFound();
  }
  const subcategories = Array.from(new Set(products.map((product) => product.subcategory))).slice(0, 6);
  const recommendations = products.filter((product) => product.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-midnight)] pb-8 pt-24 text-white md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
        <div className="tech-grid-dark absolute inset-0 opacity-[0.1]" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 14% 14%, ${theme.soft}, transparent 22%), radial-gradient(circle at 86% 18%, rgba(255,255,255,0.07), transparent 24%)`,
          }}
        />
        <div className="container-shell relative z-10 space-y-6">
          <ShopBreadcrumbs
            items={[
              { label: "Shop", href: "/shop" },
              { label: category.name },
            ]}
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="space-y-4">
              <span className="section-label">Categorie</span>
              <h1 className="text-[clamp(2rem,4vw,3.6rem)] leading-[0.96] text-white">
                {category.name}
              </h1>
              <p className="max-w-[44rem] text-[0.94rem] leading-7 text-white/70">
                {category.description}
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.05] px-5 py-4 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/44">
                Resultats
              </p>
              <p className="mt-2 text-[1.4rem] font-semibold text-white">
                {products.length} references
              </p>
              <Link
                href="/quote"
                className="mt-4 inline-flex items-center gap-2 text-[0.84rem] font-semibold text-white"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {subcategories.map((subcategory) => (
              <span
                key={subcategory}
                className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.76rem] font-medium text-white/82"
              >
                {subcategory}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ShopSecondaryNavigation />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell">
          <ShopProductListing
            products={products}
            initialCategory={category.slug}
            showCategoryFilter={false}
          />
        </div>
      </section>

      {recommendations.length > 0 ? (
        <section className="bg-[var(--color-panel-soft)] py-10 md:py-12 lg:py-14">
          <div className="container-shell space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                Recommandations
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.02] text-[var(--color-midnight)]">
                Une selection utile dans cet univers
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recommendations.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-12 pt-4 md:pb-14 lg:pb-16">
        <div className="container-shell">
          <QuoteCTA
            compact
            title={`Un besoin ${category.name.toLowerCase()} hors standard ?`}
            description="Yellix peut preparer un lot, un sourcing specifique ou un cadrage produit adapte a votre site."
          />
        </div>
      </section>
    </>
  );
}
