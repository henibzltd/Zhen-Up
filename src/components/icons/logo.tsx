import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <path
        d="M30 24 V60 A20 20 0 0 0 70 60 V44"
        stroke="var(--brand)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 50 L84 18 M84 18 L84 34 M84 18 L68 18"
        stroke="var(--brand)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-ink">
          Zhen<span className="text-brand">Up</span>
        </span>
        <span className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-ink-soft">
          Digital
        </span>
      </span>
    </span>
  );
}
