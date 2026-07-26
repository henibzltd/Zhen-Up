import Image from "next/image";
import { cn } from "@/lib/utils";
import logoIcon from "../../../public/brand/logo-icon.png";
import submarkLight from "../../../public/brand/submark.png";
import submarkDark from "../../../public/brand/submark-on-dark.png";

export function Logo({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src={logoIcon} alt="" priority className="h-7 w-auto select-none" />
      <Image
        src={variant === "dark" ? submarkDark : submarkLight}
        alt="ZhenUp Digital"
        priority
        className="h-10 w-auto select-none"
      />
    </span>
  );
}
