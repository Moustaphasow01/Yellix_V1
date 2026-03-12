import type { MetadataRoute } from "next";
import { sectors, siteNavigation } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yellix.com";

  const staticRoutes = siteNavigation.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  })) as MetadataRoute.Sitemap;

  const sectorRoutes = sectors.map((sector) => ({
    url: `${siteUrl}/secteurs/${sector.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.64,
  })) as MetadataRoute.Sitemap;

  return [...staticRoutes, ...sectorRoutes];
}
