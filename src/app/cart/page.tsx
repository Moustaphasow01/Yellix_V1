import { CartPageContent } from "@/components/shop/cart-page-content";
import { ShopSecondaryNavigation } from "@/components/shop/shop-secondary-navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Panier",
  description:
    "Panier professionnel Yellix Shop pour preparer une commande, un achat direct ou une demande de devis.",
  path: "/cart",
});

export default function CartPage() {
  return (
    <>
      <section className="bg-[var(--color-midnight)] pb-8 pt-24 text-white md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
        <div className="container-shell space-y-4">
          <span className="section-label">Panier</span>
          <h1 className="text-[clamp(2rem,4vw,3.4rem)] leading-[0.96] text-white">
            Valider vos references
          </h1>
          <p className="max-w-[42rem] text-[0.94rem] leading-7 text-white/70">
            Verifiez les quantites, comparez achat direct et devis, puis finalisez une commande sobre et lisible.
          </p>
        </div>
      </section>

      <ShopSecondaryNavigation />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell">
          <CartPageContent />
        </div>
      </section>
    </>
  );
}
