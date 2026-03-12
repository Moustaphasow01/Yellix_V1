import { SectorDetailPage } from "@/components/sector-detail-page";
import { sectors } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const sector = sectors.find((item) => item.slug === "energie");

export const metadata = createMetadata({
  title: "Énergie",
  description:
    "Accompagnement technique pour les projets énergétiques: audit, ingénierie, déploiement, maintenance, exploitation et support.",
  path: "/secteurs/energie",
});

export default function EnergyPage() {
  if (!sector) {
    return null;
  }

  return <SectorDetailPage sector={sector} />;
}
