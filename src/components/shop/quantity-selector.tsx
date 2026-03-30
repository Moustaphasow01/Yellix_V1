"use client";

import { Minus, Plus } from "lucide-react";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-[var(--color-border-strong)] bg-white px-2 py-1.5">
      <button
        type="button"
        aria-label="Diminuer la quantite"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-midnight)] transition duration-200 hover:bg-[var(--color-panel-soft)]"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-[2.25rem] text-center text-[0.92rem] font-semibold text-[var(--color-midnight)]">
        {value}
      </span>
      <button
        type="button"
        aria-label="Augmenter la quantite"
        onClick={() => onChange(value + 1)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-midnight)] transition duration-200 hover:bg-[var(--color-panel-soft)]"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
