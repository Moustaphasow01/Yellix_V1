"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type ProductAccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function ProductAccordion({ items }: { items: ProductAccordionItem[] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[1rem] font-semibold text-[var(--color-midnight)]">
                {item.title}
              </span>
              <ChevronDown
                className={cn("h-4 w-4 text-[var(--color-slate)] transition duration-200", isOpen && "rotate-180")}
              />
            </button>
            {isOpen ? <div className="border-t border-[var(--color-border)] px-4 py-4">{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
