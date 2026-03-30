"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { shopProducts, type ShopProduct, type ShopVariant } from "@/data/shop";

export type ShopCartLine = {
  productSlug: string;
  quantity: number;
  variantId?: string;
};

export type DetailedCartLine = ShopCartLine & {
  product: ShopProduct;
  variant?: ShopVariant;
  unitPriceHT: number;
  unitPriceTTC: number;
  subtotalHT: number;
  subtotalTTC: number;
};

type ShopContextValue = {
  cart: ShopCartLine[];
  favorites: string[];
  cartCount: number;
  favoritesCount: number;
  detailedCart: DetailedCartLine[];
  subtotalHT: number;
  subtotalTTC: number;
  addToCart: (productSlug: string, quantity?: number, variantId?: string) => void;
  updateQuantity: (productSlug: string, quantity: number, variantId?: string) => void;
  removeFromCart: (productSlug: string, variantId?: string) => void;
  clearCart: () => void;
  toggleFavorite: (productSlug: string) => void;
  isFavorite: (productSlug: string) => boolean;
};

export const SHOP_STORAGE_KEY = "yellix-shop-state";

const ShopContext = createContext<ShopContextValue | null>(null);

function getVariant(product: ShopProduct, variantId?: string) {
  return product.variants.find((variant) => variant.id === variantId) ?? product.variants[0];
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopCartLine[]>(() => {
    if (typeof window === "undefined") return [];

    const rawValue = window.localStorage.getItem(SHOP_STORAGE_KEY);
    if (!rawValue) return [];

    try {
      const parsed = JSON.parse(rawValue) as { cart?: ShopCartLine[] };
      return parsed.cart ?? [];
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    const rawValue = window.localStorage.getItem(SHOP_STORAGE_KEY);
    if (!rawValue) return [];

    try {
      const parsed = JSON.parse(rawValue) as { favorites?: string[] };
      return parsed.favorites ?? [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem(
      SHOP_STORAGE_KEY,
      JSON.stringify({
        cart,
        favorites,
      }),
    );
  }, [cart, favorites]);

  const detailedCart = useMemo(() => {
    return cart
      .map((line) => {
        const product = shopProducts.find((item) => item.slug === line.productSlug);
        if (!product) return null;

        const variant = getVariant(product, line.variantId);
        const unitPriceHT = variant?.priceHT ?? product.priceHT;
        const unitPriceTTC = variant?.priceTTC ?? product.priceTTC;

        return {
          ...line,
          product,
          variant,
          unitPriceHT,
          unitPriceTTC,
          subtotalHT: unitPriceHT * line.quantity,
          subtotalTTC: unitPriceTTC * line.quantity,
        };
      })
      .filter(Boolean) as DetailedCartLine[];
  }, [cart]);

  const subtotalHT = detailedCart.reduce((sum, line) => sum + line.subtotalHT, 0);
  const subtotalTTC = detailedCart.reduce((sum, line) => sum + line.subtotalTTC, 0);

  function addToCart(productSlug: string, quantity = 1, variantId?: string) {
    setCart((currentCart) => {
      const existingLine = currentCart.find(
        (line) => line.productSlug === productSlug && line.variantId === variantId,
      );

      if (existingLine) {
        return currentCart.map((line) =>
          line.productSlug === productSlug && line.variantId === variantId
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        );
      }

      return [...currentCart, { productSlug, quantity, variantId }];
    });
  }

  function updateQuantity(productSlug: string, quantity: number, variantId?: string) {
    if (quantity <= 0) {
      removeFromCart(productSlug, variantId);
      return;
    }

    setCart((currentCart) =>
      currentCart.map((line) =>
        line.productSlug === productSlug && line.variantId === variantId
          ? { ...line, quantity }
          : line,
      ),
    );
  }

  function removeFromCart(productSlug: string, variantId?: string) {
    setCart((currentCart) =>
      currentCart.filter(
        (line) => !(line.productSlug === productSlug && line.variantId === variantId),
      ),
    );
  }

  function clearCart() {
    setCart([]);
  }

  function toggleFavorite(productSlug: string) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productSlug)
        ? currentFavorites.filter((slug) => slug !== productSlug)
        : [...currentFavorites, productSlug],
    );
  }

  function isFavorite(productSlug: string) {
    return favorites.includes(productSlug);
  }

  const value: ShopContextValue = {
    cart,
    favorites,
    cartCount: cart.reduce((sum, line) => sum + line.quantity, 0),
    favoritesCount: favorites.length,
    detailedCart,
    subtotalHT,
    subtotalTTC,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    toggleFavorite,
    isFavorite,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);

  if (!context) {
    throw new Error("useShop must be used inside ShopProvider");
  }

  return context;
}
