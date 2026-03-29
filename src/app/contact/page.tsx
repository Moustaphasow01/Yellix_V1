import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contactez Yellix pour vos besoins techniques, opérationnels et stratégiques dans les télécommunications, l’énergie, l’agriculture et l’élevage.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-[var(--color-panel-soft)] pt-28 pb-10 md:pt-32 md:pb-12 lg:pt-36 lg:pb-14">
      <div className="container-shell">
        <Reveal>
          <div
            id="formulaire-contact"
            className="mx-auto max-w-[920px] scroll-mt-28 rounded-[30px] border border-[var(--color-border)] bg-white p-6 shadow-[0_20px_56px_rgba(8,19,31,0.07)] md:p-8"
          >
            <div className="border-b border-[var(--color-border)] pb-6">
              <h1 className="text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.02] text-[var(--color-midnight)]">
                Préparer votre prise de contact
              </h1>
            </div>

            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
