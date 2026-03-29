import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Expérience",
  description:
    "22+ ans d’expérience cumulée dans les secteurs stratégiques: une profondeur métier qui remplace la logique projets/réalisations.",
  path: "/experience",
});

export default function ExperiencePage() {
  redirect("/");
}
