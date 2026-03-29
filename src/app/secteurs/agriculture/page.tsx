import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Agriculture",
  description:
    "Solutions techniques et opérationnelles pour l’agriculture: ingénierie, maintenance, support et conseil.",
  path: "/secteurs/agriculture",
});

export default function AgriculturePage() {
  redirect("/");
}
