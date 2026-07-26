import Image from "next/image";
import { cn } from "@/lib/utils";
import logoIcon from "../../../public/brand/logo-icon.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoIcon}
      alt=""
      priority
      className={cn("h-8 w-auto select-none", className)}
      aria-hidden="true"
    />
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
