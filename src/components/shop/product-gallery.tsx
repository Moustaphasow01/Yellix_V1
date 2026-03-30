"use client";

import { useState } from "react";
import type { ShopProduct } from "@/data/shop";
import { ProductVisual } from "@/components/shop/product-visual";
import { cn } from "@/lib/cn";

export function ProductGallery({ product }: { product: ShopProduct }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-3">
      <ProductVisual product={product} ratio="gallery" />

      <div className="grid grid-cols-3 gap-3">
        {product.images.slice(0, 3).map((image, index) => (
          <button
            key={`${product.slug}-${image}-${index}`}
            type="button"
          onClick={() => setActiveIndex(index)}
            className={cn(
              "overflow-hidden rounded-[20px] border p-0.5 transition duration-200",
              activeIndex === index
                ? "border-[var(--color-accent)] shadow-[0_0_0_3px_rgba(0,191,165,0.12)]"
                : "border-[var(--color-border)] hover:border-[var(--color-border-strong)]",
            )}
            aria-label={`Voir la vue ${index + 1} du produit`}
          >
            <ProductVisual product={product} ratio="thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
}
