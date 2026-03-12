import { SectorDetailPage } from "@/components/sector-detail-page";
import { sectors } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const sector = sectors.find((item) => item.slug === "telecommunications");

export const metadata = createMetadata({
  title: "Télécommunications",
  description:
    "Solutions techniques pour les infrastructures télécoms: audit, ingénierie, déploiement, maintenance et support.",
  path: "/secteurs/telecommunications",
});

export default function TelecommunicationsPage() {
  if (!sector) {
    return null;
  }

  return <SectorDetailPage sector={sector} />;
}
