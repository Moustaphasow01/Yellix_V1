"use client";

import { useState } from "react";
import { buttonStyles } from "@/components/button-link";
import { cn } from "@/lib/cn";
import { contactDetails, sectors, services } from "@/data/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  sector: "",
  service: "",
  message: "",
};

const fieldShell =
  "w-full rounded-[18px] border px-4 py-3.5 text-[0.95rem] text-[var(--color-midnight)] transition duration-200 placeholder:text-[rgba(8,19,31,0.36)] focus:outline-none";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string | null>(null);

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Le nom est requis.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "L’adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "L’adresse email semble invalide.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Le message est requis.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("Le formulaire contient encore des champs à corriger.");
      return;
    }

    const subject = [
      "Prise de contact Yellix",
      form.company.trim() ? `- ${form.company.trim()}` : "",
    ]
      .join(" ")
      .trim();

    const body = [
      `Nom : ${form.name}`,
      `Entreprise : ${form.company || "Non renseignée"}`,
      `Email : ${form.email}`,
      `Téléphone : ${form.phone || "Non renseigné"}`,
      `Secteur concerné : ${form.sector || "Non renseigné"}`,
      `Service recherché : ${form.service || "Non renseigné"}`,
      "",
      "Message :",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(
      "Votre message a été préparé dans votre messagerie pour envoi.",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <section className="space-y-5">
        <div className="flex flex-col gap-2 border-b border-[var(--color-border)] pb-4 md:flex-row md:items-end md:justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Vos coordonnées
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Champs requis *
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
              Nom *
            </span>
            <input
              name="name"
              value={form.name}
              onChange={handleFieldChange}
              className={cn(
                fieldShell,
                errors.name
                  ? "border-red-200 bg-[rgba(254,242,242,0.92)] focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  : "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
              )}
              autoComplete="name"
              placeholder="Nom complet"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <span className="text-sm text-red-600">{errors.name}</span> : null}
          </label>

          <label className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
              Entreprise
            </span>
            <input
              name="company"
              value={form.company}
              onChange={handleFieldChange}
              className={cn(
                fieldShell,
                "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
              )}
              autoComplete="organization"
              placeholder="Société ou structure"
            />
          </label>

          <label className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
              Email *
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleFieldChange}
              className={cn(
                fieldShell,
                errors.email
                  ? "border-red-200 bg-[rgba(254,242,242,0.92)] focus:border-red-300 focus:ring-4 focus:ring-red-100"
                  : "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
              )}
              autoComplete="email"
              placeholder="email@entreprise.com"
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <span className="text-sm text-red-600">{errors.email}</span> : null}
          </label>

          <label className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
              Téléphone
            </span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleFieldChange}
              className={cn(
                fieldShell,
                "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
              )}
              autoComplete="tel"
              placeholder="+221 XX XXX XX XX"
            />
          </label>
        </div>
      </section>

      <section className="space-y-5">
        <div className="space-y-1 border-b border-[var(--color-border)] pb-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
            Votre besoin
          </p>
          <p className="text-[0.9rem] leading-6 text-[var(--color-slate)]">
            Situez le contexte et la nature de votre demande.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
              Secteur concerné
            </span>
            <select
              name="sector"
              value={form.sector}
              onChange={handleFieldChange}
              className={cn(
                fieldShell,
                "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
              )}
            >
              <option value="">Sélectionner un secteur</option>
              {sectors.map((sector) => (
                <option key={sector.slug} value={sector.title}>
                  {sector.title}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
              Service recherché
            </span>
            <select
              name="service"
              value={form.service}
              onChange={handleFieldChange}
              className={cn(
                fieldShell,
                "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
              )}
            >
              <option value="">Sélectionner un service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Message *
          </span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleFieldChange}
            className={cn(
              fieldShell,
              "min-h-44 resize-y",
              errors.message
                ? "border-red-200 bg-[rgba(254,242,242,0.92)] focus:border-red-300 focus:ring-4 focus:ring-red-100"
                : "border-[var(--color-border)] bg-[var(--color-ivory)] focus:border-[rgba(0,191,165,0.28)] focus:bg-white focus:ring-4 focus:ring-[rgba(0,191,165,0.08)]",
            )}
            placeholder="Décrivez brièvement le besoin, le site concerné, les contraintes ou le calendrier envisagé."
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <span className="text-sm text-red-600">{errors.message}</span> : null}
        </label>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className={cn(buttonStyles("primary"), "w-full sm:w-auto")}>
          Préparer la demande
        </button>

        <p aria-live="polite" className="min-h-6 text-sm text-[var(--color-slate)] sm:text-right">
          {status}
        </p>
      </div>
    </form>
  );
}
