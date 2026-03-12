import { Reveal } from "@/components/reveal";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative grid gap-3.5 md:gap-4 lg:grid-cols-5">
      <div className="absolute left-[9%] right-[9%] top-8 hidden h-px bg-[linear-gradient(90deg,rgba(8,19,31,0.06),rgba(0,191,165,0.28),rgba(8,19,31,0.06))] lg:block" />
      {steps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.05}>
          <article className="relative z-10 h-full rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-[0_16px_36px_rgba(8,19,31,0.05)] md:p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,191,165,0.14)] bg-[var(--color-accent-soft)] text-sm font-semibold text-[var(--color-midnight)]">
              0{index + 1}
            </span>
            <h3 className="mt-4 text-[1.05rem] leading-tight">{step.title}</h3>
            <p className="mt-2.5 text-[0.9rem] leading-6 text-[var(--color-slate)]">
              {step.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
