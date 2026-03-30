import { FileText } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductAccordion } from "@/components/shop/product-accordion";
import { ProductCard } from "@/components/shop/product-card";
import { ProductGallery } from "@/components/shop/product-gallery";
import { ProductPurchasePanel } from "@/components/shop/product-purchase-panel";
import { ProductSpecs } from "@/components/shop/product-specs";
import { QuoteCTA } from "@/components/shop/quote-cta";
import { ShopBreadcrumbs } from "@/components/shop/breadcrumbs";
import { ShopSecondaryNavigation } from "@/components/shop/shop-secondary-navigation";
import { shopProducts } from "@/data/shop";
import { contactDetails } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import {
  getAccessoryProducts,
  getRelatedProducts,
  getShopCategoryBySlug,
  getShopKitBySlug,
  getShopProductBySlug,
} from "@/lib/shop";

export function generateStaticParams() {
  return shopProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);

  if (!product) {
    return createMetadata({
      title: "Produit introuvable",
      description: "Produit shop introuvable.",
      path: "/shop",
    });
  }

  return createMetadata({
    title: `${product.name} | Shop`,
    description: product.shortDescription,
    path: `/shop/product/${product.slug}`,
  });
}

export default async function ShopProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getShopProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getShopCategoryBySlug(product.categorySlug);
  const accessories = getAccessoryProducts(product).slice(0, 3);
  const relatedProducts = getRelatedProducts(product).slice(0, 3);
  const linkedKit = getShopKitBySlug(product.slug);
  const kitProducts = linkedKit
    ? shopProducts.filter((candidate) => linkedKit.includedProductSlugs.includes(candidate.slug))
    : [];

  const accordionItems = [
    {
      id: "description",
      title: "Description",
      content: (
        <p className="text-[0.88rem] leading-7 text-[var(--color-slate)]">
          {product.fullDescription}
        </p>
      ),
    },
    {
      id: "specs",
      title: "Caracteristiques techniques",
      content: <ProductSpecs specs={product.specs} />,
    },
    {
      id: "compatibility",
      title: "Usages et compatibilites",
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Usages recommandes
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.usage.map((usage) => (
                <span
                  key={usage}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-3 py-1 text-[0.76rem] font-medium text-[var(--color-midnight)]"
                >
                  {usage}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
              Compatibilites
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.compatibilities.map((compatibility) => (
                <span
                  key={compatibility}
                  className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[0.76rem] font-medium text-[var(--color-midnight)]"
                >
                  {compatibility}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "docs",
      title: "Documents, livraison et garantie",
      content: (
        <div className="space-y-4">
          <div className="grid gap-3">
            {product.documents.map((document) => (
              <a
                key={document.id}
                href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`Document ${product.name}`)}`}
                className="flex items-center justify-between rounded-[18px] border border-[var(--color-border)] bg-[var(--color-panel-soft)] px-4 py-3"
              >
                <div>
                  <p className="text-[0.88rem] font-semibold text-[var(--color-midnight)]">
                    {document.title}
                  </p>
                  <p className="text-[0.76rem] text-[var(--color-slate)]">
                    {document.type} • {document.size}
                  </p>
                </div>
                <span className="text-[0.78rem] font-semibold text-[var(--color-midnight)]">
                  Obtenir
                </span>
              </a>
            ))}
          </div>
          <div className="rounded-[20px] border border-[var(--color-border)] bg-white px-4 py-4">
            <p className="text-[0.86rem] leading-6 text-[var(--color-slate)]">
              Livraison estimee: <span className="font-semibold text-[var(--color-midnight)]">{product.leadTime}</span>
              . Garantie: <span className="font-semibold text-[var(--color-midnight)]">{product.warranty}</span>.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="bg-[var(--color-midnight)] pb-8 pt-24 text-white md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
        <div className="container-shell space-y-5">
          <ShopBreadcrumbs
            items={[
              { label: "Shop", href: "/shop" },
              category ? { label: category.name, href: `/shop/category/${category.slug}` } : undefined,
              { label: product.name },
            ].filter(Boolean) as Array<{ label: string; href?: string }>}
          />

          <div className="space-y-3">
            <span className="section-label">{category?.name ?? "Produit"}</span>
            <p className="max-w-[44rem] text-[0.94rem] leading-7 text-white/70">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <ShopSecondaryNavigation />

      <section className="py-8 md:py-10 lg:py-12">
        <div className="container-shell grid gap-6 xl:grid-cols-[minmax(0,1.06fr)_minmax(22rem,0.72fr)]">
          <div className="space-y-6">
            <ProductGallery product={product} />

            <div className="grid gap-3 md:grid-cols-2 lg:hidden">
              <div className="rounded-[24px] border border-[var(--color-border)] bg-white px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  SKU
                </p>
                <p className="mt-2 text-[0.92rem] text-[var(--color-midnight)]">{product.sku}</p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-border)] bg-white px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Garantie
                </p>
                <p className="mt-2 text-[0.92rem] text-[var(--color-midnight)]">{product.warranty}</p>
              </div>
            </div>
          </div>

          <ProductPurchasePanel product={product} />
        </div>
      </section>

      <section className="bg-[var(--color-panel-soft)] py-10 md:py-12 lg:py-14">
        <div className="container-shell space-y-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                Description
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] text-[var(--color-midnight)]">
                Lecture produit et usages recommandes
              </h2>
              <p className="text-[0.92rem] leading-7 text-[var(--color-slate)]">
                {product.fullDescription}
              </p>
            </div>

            <div className="grid gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Usages recommandes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.usage.map((usage) => (
                    <span
                      key={usage}
                      className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[0.76rem] font-medium text-[var(--color-midnight)]"
                    >
                      {usage}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Compatibilites
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.compatibilities.map((compatibility) => (
                    <span
                      key={compatibility}
                      className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-[0.76rem] font-medium text-[var(--color-midnight)]"
                    >
                      {compatibility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid lg:gap-10">
            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                Caracteristiques techniques
              </p>
              <ProductSpecs specs={product.specs} />
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="space-y-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Documents techniques
                </p>
                <div className="grid gap-3">
                  {product.documents.map((document) => (
                    <a
                      key={document.id}
                      href={`mailto:${contactDetails.email}?subject=${encodeURIComponent(`Document ${product.name}`)}`}
                      className="flex items-center justify-between rounded-[20px] border border-[var(--color-border)] bg-white px-4 py-4"
                    >
                      <div>
                        <p className="text-[0.9rem] font-semibold text-[var(--color-midnight)]">
                          {document.title}
                        </p>
                        <p className="text-[0.8rem] text-[var(--color-slate)]">
                          {document.type} • {document.size}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-midnight)]">
                        <FileText className="h-4 w-4" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[26px] border border-[var(--color-border)] bg-white p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                  Livraison & garantie
                </p>
                <div className="mt-4 space-y-3 text-[0.88rem] leading-7 text-[var(--color-slate)]">
                  <p>
                    Livraison estimee: <span className="font-semibold text-[var(--color-midnight)]">{product.leadTime}</span>
                  </p>
                  <p>
                    Garantie constructeur: <span className="font-semibold text-[var(--color-midnight)]">{product.warranty}</span>
                  </p>
                  <p>
                    Installation et maintenance disponibles sur demande selon le site, la criticite et le perimetre d&apos;exploitation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <ProductAccordion items={accordionItems} />
          </div>

          {linkedKit ? (
            <div className="space-y-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                Contenu du kit
              </p>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {kitProducts.map((kitProduct) => (
                  <ProductCard key={kitProduct.slug} product={kitProduct} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {accessories.length > 0 ? (
        <section className="py-10 md:py-12 lg:py-14">
          <div className="container-shell space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                Accessoires compatibles
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] text-[var(--color-midnight)]">
                Pour completer l&apos;installation
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {accessories.map((accessory) => (
                <ProductCard key={accessory.slug} product={accessory} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedProducts.length > 0 ? (
        <section className="bg-[var(--color-panel-soft)] py-10 md:py-12 lg:py-14">
          <div className="container-shell space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
                Produits similaires
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] text-[var(--color-midnight)]">
                References associees
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-24 pt-6 md:pb-14 lg:pb-16 lg:pt-8">
        <div className="container-shell">
          <QuoteCTA
            compact
            title="Besoin d&apos;une configuration plus large ?"
            description="Passer en devis permet de cadrer un lot, une installation, une commande en volume ou un besoin multisite."
            href={`/quote?product=${product.slug}`}
          />
        </div>
      </section>
    </>
  );
}
