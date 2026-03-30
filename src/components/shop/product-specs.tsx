import type { ShopProduct } from "@/data/shop";

export function ProductSpecs({ specs }: { specs: ShopProduct["specs"] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {specs.map((item) => (
        <div
          key={item.label}
          className="rounded-[22px] border border-[var(--color-border)] bg-white px-4 py-4"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            {item.label}
          </p>
          <p className="mt-2 text-[0.92rem] leading-6 text-[var(--color-midnight)]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
