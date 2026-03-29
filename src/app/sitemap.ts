import type { MetadataRoute } from "next";
import { siteNavigation } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yellix.com";

  const staticRouteHrefs = new Set(
    [...siteNavigation, { label: "Contact", href: "/contact" }].map(
      (item) => item.href.split("#")[0] || "/",
    ),
  );

  const staticRoutes = [...staticRouteHrefs].map((href) => ({
    url: `${siteUrl}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.7,
  })) as MetadataRoute.Sitemap;

  return staticRoutes;
}
