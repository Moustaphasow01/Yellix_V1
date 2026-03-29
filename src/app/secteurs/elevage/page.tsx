import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Élevage",
  description:
    "Accompagnement technique pour les activités d’élevage: audit, maintenance, support et conseil pour la continuité opérationnelle.",
  path: "/secteurs/elevage",
});

export default function LivestockPage() {
  redirect("/");
}
