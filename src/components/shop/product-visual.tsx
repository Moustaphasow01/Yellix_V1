import Image from "next/image";
import type { ShopProduct } from "@/data/shop";

type ProductVisualProps = {
  product: ShopProduct;
  ratio?: "card" | "gallery" | "thumbnail" | "list";
};

export function ProductVisual({
  product,
  ratio = "card",
}: ProductVisualProps) {
  const sizeClasses =
    ratio === "gallery"
      ? "h-[22rem] rounded-[30px]"
      : ratio === "list"
        ? "h-full min-h-[16rem] rounded-[22px]"
      : ratio === "thumbnail"
        ? "h-[4.5rem] rounded-[18px]"
        : "h-[10.5rem] rounded-[22px]";
  const imageMaxSizeClasses =
    ratio === "gallery"
      ? "max-h-[88%] max-w-[88%]"
      : ratio === "list"
        ? "max-h-[90%] max-w-[90%]"
        : ratio === "thumbnail"
          ? "max-h-[78%] max-w-[78%]"
          : "max-h-[84%] max-w-[84%]";
  const imageSrc = product.images[0] ?? `/shop/products/${product.slug}.jpg`;

  return (
    <div
      className={`relative overflow-hidden border border-[var(--color-border)]/70 bg-white ${sizeClasses}`}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-white">
        <Image
          src={imageSrc}
          alt={product.name}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 22rem"
          className={`h-auto w-auto object-contain object-center ${imageMaxSizeClasses}`}
          priority={product.featured}
        />
      </div>
    </div>
  );
}
