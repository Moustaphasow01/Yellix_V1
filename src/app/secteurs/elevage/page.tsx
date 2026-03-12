import { SectorDetailPage } from "@/components/sector-detail-page";
import { sectors } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const sector = sectors.find((item) => item.slug === "elevage");

export const metadata = createMetadata({
  title: "Élevage",
  description:
    "Accompagnement technique pour les activités d’élevage: audit, maintenance, support et conseil pour la continuité opérationnelle.",
  path: "/secteurs/elevage",
});

export default function LivestockPage() {
  if (!sector) {
    return null;
  }

  return <SectorDetailPage sector={sector} />;
}
