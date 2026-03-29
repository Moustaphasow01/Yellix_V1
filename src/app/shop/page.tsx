import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Yellix Shop",
  description: "Yellix Shop est actuellement en cours de construction.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <section className="bg-[var(--color-panel-soft)] pt-28 pb-12 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16">
      <div className="container-shell">
        <div className="mx-auto max-w-[860px] rounded-[30px] border border-[var(--color-border)] bg-white px-6 py-10 text-center shadow-[0_20px_56px_rgba(8,19,31,0.07)] md:px-8 md:py-12">
          <span className="section-label">Yellix Shop</span>
          <h1 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-[var(--color-midnight)]">
            En construction
          </h1>
          <p className="mx-auto mt-4 max-w-[34rem] text-[0.98rem] leading-8 text-[var(--color-slate)]">
            Cette page sera bientot disponible.
          </p>
        </div>
      </div>
    </section>
  );
}
