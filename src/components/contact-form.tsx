"use client";

import { useState } from "react";
import { buttonStyles } from "@/components/button-link";
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
      "Votre message a été préparé dans votre messagerie. Cette V1 reste front-only et peut ensuite être reliée à un CRM ou un service d’email.",
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Nom
          </span>
          <input
            name="name"
            value={form.name}
            onChange={handleFieldChange}
            className="field-shell"
            autoComplete="name"
          />
          {errors.name ? <span className="text-sm text-red-600">{errors.name}</span> : null}
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Entreprise
          </span>
          <input
            name="company"
            value={form.company}
            onChange={handleFieldChange}
            className="field-shell"
            autoComplete="organization"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleFieldChange}
            className="field-shell"
            autoComplete="email"
          />
          {errors.email ? <span className="text-sm text-red-600">{errors.email}</span> : null}
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Téléphone
          </span>
          <input
            name="phone"
            value={form.phone}
            onChange={handleFieldChange}
            className="field-shell"
            autoComplete="tel"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Secteur concerné
          </span>
          <select name="sector" value={form.sector} onChange={handleFieldChange} className="field-shell">
            <option value="">Sélectionner un secteur</option>
            {sectors.map((sector) => (
              <option key={sector.slug} value={sector.title}>
                {sector.title}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
            Service recherché
          </span>
          <select name="service" value={form.service} onChange={handleFieldChange} className="field-shell">
            <option value="">Sélectionner un service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">
          Message
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleFieldChange}
          className="field-shell min-h-40 resize-y"
        />
        {errors.message ? <span className="text-sm text-red-600">{errors.message}</span> : null}
      </label>

      <div className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-ivory)] px-4 py-3.5 text-[0.9rem] leading-6 text-[var(--color-slate)]">
        Pour cette V1 sans backend, l’envoi ouvre votre messagerie avec les informations
        préremplies. La structure est prête à être branchée ensuite sur un service d’email ou un CRM.
      </div>

      <button type="submit" className={buttonStyles("primary")}>
        Envoyer la demande
      </button>

      <p aria-live="polite" className="min-h-6 text-sm text-[var(--color-slate)]">
        {status}
      </p>
    </form>
  );
}
