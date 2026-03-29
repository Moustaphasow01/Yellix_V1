import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Découvrez les 9 services Yellix: audit, ingénierie, déploiement, maintenance, exploitation, support, conseil et solaire.",
  path: "/services",
});

export default function ServicesPage() {
  redirect("/");
}
