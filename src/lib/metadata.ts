import type { Metadata } from "next";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
}: MetadataInput): Metadata {
  const canonical = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const fullTitle = `${title} | Yellix`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: "Yellix",
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
