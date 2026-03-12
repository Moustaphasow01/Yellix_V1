import Link from "next/link";
import { contactDetails } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-midnight)] pt-12 pb-8 text-white md:pt-14 md:pb-9">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[rgba(0,191,165,0.06)] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(247,249,252,0.12),transparent)]" />

      <div className="container-shell relative z-10 flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="max-w-md space-y-4">
          <div className="flex items-center gap-3.5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-base font-semibold">
              Y
            </span>
            <div className="space-y-1">
              <p className="text-lg font-semibold tracking-[-0.03em]">Yellix Group</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                Sénégal
              </p>
            </div>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/66">
            Solutions techniques pour des environnements exigeants.
          </p>
        </div>

        <div className="space-y-4 lg:min-w-[18rem]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Contact</p>

          <div className="space-y-4 text-sm">
            <div className="space-y-1.5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/42">
                Email
              </p>
              <Link
                href={`mailto:${contactDetails.email}`}
                className="text-white/84 transition hover:text-white"
              >
                {contactDetails.email}
              </Link>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/42">
                Téléphone
              </p>
              <Link
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="text-white/84 transition hover:text-white"
              >
                {contactDetails.phone}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-shell relative z-10 flex flex-col gap-3 pt-5 text-sm text-white/48 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Yellix Group. Tous droits réservés.</p>
        <div className="h-4 w-32 md:w-40" />
      </div>
    </footer>
  );
}
