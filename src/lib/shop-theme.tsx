import {
  Boxes,
  Package2,
  RadioTower,
  Shield,
  Sprout,
  SunMedium,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ShopCategory, ShopCategorySlug } from "@/data/shop";

type ShopTheme = {
  accent: string;
  soft: string;
  stage: string;
  border: string;
  icon: LucideIcon;
};

const shopThemeMap: Record<ShopCategorySlug, ShopTheme> = {
  telecommunications: {
    accent: "#2F6BFF",
    soft: "rgba(47,107,255,0.14)",
    border: "rgba(47,107,255,0.2)",
    stage:
      "radial-gradient(circle at 16% 18%, rgba(47,107,255,0.24), transparent 24%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(135deg, rgba(8,19,31,0.98), rgba(10,24,42,0.94))",
    icon: RadioTower,
  },
  energie: {
    accent: "#F5A623",
    soft: "rgba(245,166,35,0.14)",
    border: "rgba(245,166,35,0.2)",
    stage:
      "radial-gradient(circle at 18% 18%, rgba(245,166,35,0.22), transparent 24%), radial-gradient(circle at 84% 14%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(135deg, rgba(11,20,30,0.98), rgba(22,28,38,0.94))",
    icon: SunMedium,
  },
  agriculture: {
    accent: "#2E8B57",
    soft: "rgba(46,139,87,0.14)",
    border: "rgba(46,139,87,0.2)",
    stage:
      "radial-gradient(circle at 18% 18%, rgba(46,139,87,0.22), transparent 24%), radial-gradient(circle at 84% 14%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(135deg, rgba(9,22,24,0.98), rgba(14,28,28,0.94))",
    icon: Sprout,
  },
  elevage: {
    accent: "#7C9A3D",
    soft: "rgba(124,154,61,0.14)",
    border: "rgba(124,154,61,0.2)",
    stage:
      "radial-gradient(circle at 18% 18%, rgba(124,154,61,0.22), transparent 24%), radial-gradient(circle at 84% 14%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(135deg, rgba(12,20,22,0.98), rgba(19,26,28,0.94))",
    icon: Shield,
  },
  "maintenance-terrain": {
    accent: "#00BFA5",
    soft: "rgba(0,191,165,0.14)",
    border: "rgba(0,191,165,0.2)",
    stage:
      "radial-gradient(circle at 18% 18%, rgba(0,191,165,0.22), transparent 24%), radial-gradient(circle at 84% 14%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(135deg, rgba(8,18,24,0.98), rgba(10,28,34,0.94))",
    icon: Wrench,
  },
  "kits-pro": {
    accent: "#0F172A",
    soft: "rgba(15,23,42,0.12)",
    border: "rgba(15,23,42,0.18)",
    stage:
      "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.12), transparent 24%), radial-gradient(circle at 84% 14%, rgba(0,191,165,0.1), transparent 22%), linear-gradient(135deg, rgba(11,17,27,0.98), rgba(14,20,31,0.94))",
    icon: Package2,
  },
  "pieces-consommables": {
    accent: "#475569",
    soft: "rgba(71,85,105,0.14)",
    border: "rgba(71,85,105,0.18)",
    stage:
      "radial-gradient(circle at 18% 18%, rgba(71,85,105,0.18), transparent 24%), radial-gradient(circle at 84% 14%, rgba(255,255,255,0.08), transparent 22%), linear-gradient(135deg, rgba(10,17,26,0.98), rgba(15,22,32,0.94))",
    icon: Boxes,
  },
};

export function getShopCategoryTheme(category: ShopCategory | ShopCategorySlug) {
  return shopThemeMap[typeof category === "string" ? category : category.slug];
}
