import { AccountDashboard } from "@/components/shop/account-dashboard";
import { ShopSecondaryNavigation } from "@/components/shop/shop-secondary-navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Compte",
  description:
    "Espace client Yellix Shop avec profil, entreprise, commandes, devis, favoris et adresses mockes.",
  path: "/account",
});

export default function AccountPage() {
  return (
    <>
      <section className="bg-[var(--color-midnight)] pb-8 pt-24 text-white md:pb-10 md:pt-28 lg:pb-12 lg:pt-32">
        <div className="container-shell space-y-4">
          <span className="section-label">Compte</span>
          <h1 className="text-[clamp(2rem,4vw,3.4rem)] leading-[0.96] text-white">
            Espace client Yellix Shop
          </h1>
          <p className="max-w-[42rem] text-[0.94rem] leading-7 text-white/70">
            Une V1 simple mais credible pour suivre commandes, devis, favoris et informations entreprise.
          </p>
        </div>
      </section>

      <ShopSecondaryNavigation />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell">
          <AccountDashboard />
        </div>
      </section>
    </>
  );
}
