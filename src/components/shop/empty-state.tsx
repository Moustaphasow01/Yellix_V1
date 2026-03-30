import { PackageSearch } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-[var(--color-border-strong)] bg-white px-6 py-10 text-center shadow-[0_12px_32px_rgba(8,19,31,0.04)]">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--color-panel-soft)] text-[var(--color-accent)]">
        <PackageSearch className="h-5 w-5" />
      </span>
      <h2 className="mt-4 text-[1.25rem] text-[var(--color-midnight)]">{title}</h2>
      <p className="mx-auto mt-2 max-w-[34rem] text-[0.9rem] leading-7 text-[var(--color-slate)]">
        {description}
      </p>
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}
