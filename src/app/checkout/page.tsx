import { CheckoutPageContent } from "@/components/shop/checkout-page-content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Checkout",
  description:
    "Validation de commande Yellix Shop avec logique B2B, informations entreprise et recapitulatif.",
  path: "/checkout",
});

export default function CheckoutPage() {
  return (
    <>
      <section className="bg-[var(--color-midnight)] pb-8 pt-24 text-white md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
        <div className="container-shell space-y-4">
          <span className="section-label">Checkout</span>
          <h1 className="text-[clamp(2rem,4vw,3.4rem)] leading-[0.96] text-white">
            Finaliser la commande
          </h1>
          <p className="max-w-[42rem] text-[0.94rem] leading-7 text-white/70">
            Un parcours de validation pense pour les achats professionnels, les informations entreprise et la conversion sans friction.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell">
          <CheckoutPageContent />
        </div>
      </section>
    </>
  );
}
