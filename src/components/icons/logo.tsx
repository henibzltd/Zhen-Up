import Image from "next/image";
import { cn } from "@/lib/utils";
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
    <Image
      src={variant === "dark" ? submarkDark : submarkLight}
      alt="ZhenUp Digital"
      priority
      className={cn("h-10 w-auto select-none", className)}
    />
  );
}
