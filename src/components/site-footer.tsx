import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/data/site";

export function SiteFooter() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#08131f_0%,#07111b_100%)] pt-14 pb-8 text-white md:pt-16 md:pb-10">
      <div className="tech-grid-dark absolute inset-0 opacity-[0.06]" />
      <div className="absolute left-[-3rem] top-0 h-44 w-44 rounded-full bg-[rgba(0,191,165,0.07)] blur-[110px]" />
      <div className="absolute right-[-2rem] bottom-[-2rem] h-52 w-52 rounded-full bg-[rgba(255,255,255,0.05)] blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,191,165,0.4),transparent)]" />

      <div className="container-shell relative z-10">
        <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-7 shadow-[0_26px_80px_rgba(3,8,16,0.28)] backdrop-blur-sm md:px-8 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/12 bg-white/[0.06] text-lg font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                  Y
                </span>
                <div className="space-y-1">
                  <p className="text-[1.55rem] font-semibold tracking-[-0.04em] text-white">
                    Yellix Group
                  </p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/42">
                    Sénégal
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/42">
                Contact
              </p>

              <div className="grid items-start gap-2.5 md:grid-cols-2 xl:grid-cols-3">
                <Link
                  href={`mailto:${contactDetails.email}`}
                  className="group flex items-start gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 transition duration-200 hover:border-white/22 hover:bg-white/[0.08]"
                >
                  <span className="inline-flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[12px] bg-white/10 text-[var(--color-accent)]">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Email
                    </span>
                    <span className="mt-0.5 block break-all text-[0.88rem] font-medium leading-6 text-white/84">
                      {contactDetails.email}
                    </span>
                  </span>
                </Link>

                <Link
                  href={phoneHref}
                  className="group flex items-start gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 transition duration-200 hover:border-white/22 hover:bg-white/[0.08]"
                >
                  <span className="inline-flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[12px] bg-white/10 text-[var(--color-accent)]">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Téléphone
                    </span>
                    <span className="mt-0.5 block text-[0.88rem] font-medium leading-6 text-white/84">
                      {contactDetails.phone}
                    </span>
                  </span>
                </Link>

                <div className="flex items-start gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5">
                  <span className="inline-flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-[12px] bg-white/10 text-[var(--color-accent)]">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Adresse
                    </span>
                    <span className="mt-0.5 block text-[0.88rem] leading-6 text-white/70">
                      Dakar, Sénégal
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
