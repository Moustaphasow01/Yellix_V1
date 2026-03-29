import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Télécommunications",
  description:
    "Solutions techniques pour les infrastructures télécoms: audit, ingénierie, déploiement, maintenance et support.",
  path: "/secteurs/telecommunications",
});

export default function TelecommunicationsPage() {
  redirect("/");
}
