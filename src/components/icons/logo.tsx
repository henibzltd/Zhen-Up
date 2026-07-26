import Image from "next/image";
import { cn } from "@/lib/utils";
import logoIcon from "../../../public/brand/logo-icon.png";
import wordmark from "../../../public/brand/wordmark.png";
import taglineLight from "../../../public/brand/tagline-light.png";
import taglineDark from "../../../public/brand/tagline-dark.png";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex flex-col gap-1", className)}>
      <span className="inline-flex items-center gap-2.5">
        <Image src={logoIcon} alt="" priority className="h-7 w-auto select-none" />
        <Image src={wordmark} alt="ZhenUp" priority className="h-7 w-auto select-none" />
      </span>
      <Image
        src={variant === "dark" ? taglineDark : taglineLight}
        alt="Digital"
        priority
        className="ml-[34px] h-3 w-auto select-none"
      />
    </span>
  );
}
