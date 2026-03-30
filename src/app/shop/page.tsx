import { ShopProductListing } from "@/components/shop/shop-product-listing";
import { createMetadata } from "@/lib/metadata";
import { shopProducts } from "@/data/shop";

export const metadata = createMetadata({
  title: "Yellix Shop",
  description:
    "Equipements professionnels pour le terrain, l'exploitation et la continuite des operations.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <>
      <section className="pb-10 pt-14 md:pb-12 md:pt-18 lg:pb-14 lg:pt-20">
        <div className="container-shell">
          <ShopProductListing
            products={shopProducts}
            showCategoryFilter
          />
        </div>
      </section>
    </>
  );
}
