import { formatPriceHT, formatPriceTTC } from "@/lib/shop";

type PriceBlockProps = {
  priceHT: number;
  priceTTC?: number;
  leadTime?: string;
  compact?: boolean;
  showTtc?: boolean;
};

export function PriceBlock({
  priceHT,
  priceTTC,
  leadTime,
  compact = false,
  showTtc = true,
}: PriceBlockProps) {
  return (
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      <div className="flex items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">
            Prix professionnel
          </p>
          <p className={compact ? "text-[0.92rem] font-semibold leading-5 text-[var(--color-midnight)]" : "text-[1.7rem] font-semibold text-[var(--color-midnight)]"}>
            {formatPriceHT(priceHT)}
          </p>
        </div>

        {leadTime ? (
          <div className="text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">
              Delai
            </p>
            <p className="mt-1 text-[0.7rem] font-medium text-[var(--color-midnight)]">
              {leadTime}
            </p>
          </div>
        ) : null}
      </div>

      {showTtc ? (
        <p className="text-[0.72rem] leading-5 text-[var(--color-slate)]">
          {formatPriceTTC(priceTTC ?? Math.round(priceHT * 1.18))}
        </p>
      ) : null}
    </div>
  );
}
