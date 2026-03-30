import type { DetailedCartLine } from "@/components/shop/shop-provider";
import { formatPriceCFA } from "@/lib/shop";

type CheckoutSummaryProps = {
  lines: DetailedCartLine[];
  subtotalHT: number;
  subtotalTTC: number;
  shippingHT?: number;
  title?: string;
};

export function CheckoutSummary({
  lines,
  subtotalHT,
  subtotalTTC,
  shippingHT = 45000,
  title = "Recapitulatif",
}: CheckoutSummaryProps) {
  const grandTotalHT = subtotalHT + shippingHT;
  const grandTotalTTC = subtotalTTC + Math.round(shippingHT * 1.18);

  return (
    <aside className="rounded-[30px] border border-[var(--color-border)] bg-white p-5 shadow-[0_18px_46px_rgba(8,19,31,0.06)]">
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
          Commande
        </p>
        <h2 className="text-[1.22rem] text-[var(--color-midnight)]">{title}</h2>
      </div>

      <div className="mt-5 space-y-3">
        {lines.map((line) => (
          <div key={`${line.product.slug}-${line.variant?.id ?? "base"}`} className="flex items-start justify-between gap-4 text-[0.84rem]">
            <div>
              <p className="font-medium text-[var(--color-midnight)]">{line.product.name}</p>
              <p className="text-[var(--color-slate)]">Qté {line.quantity}</p>
            </div>
            <p className="font-medium text-[var(--color-midnight)]">
              {formatPriceCFA(line.subtotalHT)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-3 border-t border-[var(--color-border)] pt-4 text-[0.86rem]">
        <div className="flex items-center justify-between text-[var(--color-slate)]">
          <span>Sous-total HT</span>
          <span>{formatPriceCFA(subtotalHT)}</span>
        </div>
        <div className="flex items-center justify-between text-[var(--color-slate)]">
          <span>Livraison estimee HT</span>
          <span>{formatPriceCFA(shippingHT)}</span>
        </div>
        <div className="flex items-center justify-between font-semibold text-[var(--color-midnight)]">
          <span>Total estime HT</span>
          <span>{formatPriceCFA(grandTotalHT)}</span>
        </div>
        <div className="flex items-center justify-between text-[var(--color-slate)]">
          <span>Total estime TTC</span>
          <span>{formatPriceCFA(grandTotalTTC)}</span>
        </div>
      </div>
    </aside>
  );
}
