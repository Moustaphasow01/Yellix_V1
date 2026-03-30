import Link from "next/link";
import type { ShopBrand } from "@/data/shop";

export function BrandGrid({ brands }: { brands: ShopBrand[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {brands.map((brand) => (
        <Link
          key={brand.slug}
          href={`/shop#catalogue`}
          className="shop-card rounded-[24px] px-5 py-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            {brand.origin}
          </p>
          <h3 className="mt-3 text-[1.12rem] text-[var(--color-midnight)]">{brand.name}</h3>
          <p className="mt-2 text-[0.84rem] leading-6 text-[var(--color-slate)]">{brand.focus}</p>
        </Link>
      ))}
    </div>
  );
}
