import { SectorDetailPage } from "@/components/sector-detail-page";
import { sectors } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const sector = sectors.find((item) => item.slug === "agriculture");

export const metadata = createMetadata({
  title: "Agriculture",
  description:
    "Solutions techniques et opérationnelles pour l’agriculture: ingénierie, maintenance, support et conseil.",
  path: "/secteurs/agriculture",
});

export default function AgriculturePage() {
  if (!sector) {
    return null;
  }

  return <SectorDetailPage sector={sector} />;
}
