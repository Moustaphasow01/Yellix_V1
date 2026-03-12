"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Metric } from "@/data/site";

type StatsBandProps = {
  items: Metric[];
};

function AnimatedMetric({ item }: { item: Metric }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(item.value ?? 0);

  useEffect(() => {
    if (!item.value || !isInView || reducedMotion) {
      return;
    }

    const controls = animate(0, item.value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [isInView, item.value, reducedMotion]);

  return (
    <div
      ref={ref}
      className="h-full px-5 py-5 md:px-6 md:py-6"
    >
      <p className="text-[2rem] font-semibold tracking-[-0.05em] text-[var(--color-midnight)] md:text-[2.35rem]">
        {item.display ?? `${item.prefix ?? ""}${count}${item.suffix ?? ""}`}
      </p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
        {item.label}
      </p>
      <p className="mt-2.5 max-w-[17rem] text-[0.9rem] leading-6 text-[var(--color-slate)]">
        {item.detail}
      </p>
    </div>
  );
}

export function StatsBand({ items }: StatsBandProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-white shadow-[0_18px_50px_rgba(8,19,31,0.06)] lg:grid lg:grid-cols-4"
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`${
            index < items.length - 1
              ? "border-b border-[var(--color-border)] lg:border-b-0 lg:border-r"
              : ""
          }`}
        >
          <AnimatedMetric item={item} />
        </div>
      ))}
    </motion.div>
  );
}
