import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Énergie",
  description:
    "Accompagnement technique pour les projets énergétiques: audit, ingénierie, déploiement, maintenance, exploitation et support.",
  path: "/secteurs/energie",
});

export default function EnergyPage() {
  redirect("/");
}
