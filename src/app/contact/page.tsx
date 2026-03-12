import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { contactDetails } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez Yellix pour vos besoins techniques, opérationnels et stratégiques dans les télécommunications, l’énergie, l’agriculture et l’élevage.",
  path: "/contact",
});

const contactCards = [
  {
    title: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    title: "Téléphone",
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s+/g, "")}`,
  },
  {
    title: "Adresse",
    value: contactDetails.address,
  },
  {
    title: "Zone d’intervention",
    value: contactDetails.zone,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Échangeons sur votre besoin"
        description="Un premier cadrage suffit pour orienter la réponse technique, opérationnelle et sectorielle la plus adaptée."
        highlights={[
          { label: "Email", value: contactDetails.email },
          { label: "Téléphone", value: contactDetails.phone },
        ]}
      />

      <section className="py-10 md:py-12 lg:py-14">
        <div className="container-shell grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
          <Reveal>
            <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(8,19,31,0.06)] md:p-7">
              <SectionHeading
                compact
                eyebrow="Coordonnées"
                title="Des informations simples pour un premier échange"
                description="Choisissez le canal le plus direct ou utilisez le formulaire pour préparer votre demande."
              />

              <div className="mt-6 space-y-4">
                {contactCards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`pb-4 ${
                      index < contactCards.length - 1 ? "border-b border-[var(--color-border)]" : ""
                    }`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
                      {card.title}
                    </p>
                    <div className="mt-1.5 text-[0.98rem] leading-7 text-[var(--color-midnight)]">
                      {card.href ? (
                        <Link href={card.href} className="transition hover:text-[var(--color-accent)]">
                          {card.value}
                        </Link>
                      ) : (
                        card.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_18px_50px_rgba(8,19,31,0.06)] md:p-7">
              <div className="mb-6 space-y-3">
                <span className="section-label">Formulaire</span>
                <h2 className="text-[1.9rem]">Obtenir un premier échange qualifié</h2>
                <p className="max-w-[38rem] text-[0.95rem] leading-7 text-[var(--color-slate)]">
                  Une base simple, prête à être connectée ensuite à un CRM ou à un service email.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
