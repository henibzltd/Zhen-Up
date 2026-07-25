"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useBooking } from "@/components/booking/booking-context";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-8px_rgba(0,191,99,0.65)] hover:bg-brand-dark",
  dark: "bg-ink text-white shadow-[0_8px_24px_-8px_rgba(15,23,42,0.5)] hover:bg-slate-800",
  outline:
    "border-2 border-white/25 bg-transparent text-white hover:border-brand hover:text-brand",
} as const;

const sizeStyles = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
} as const;

export function BookCtaButton({
  children = "Book a Free Consultation",
  variant = "primary",
  size = "md",
  showIcon = true,
  className,
}: {
  children?: React.ReactNode;
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  showIcon?: boolean;
  className?: string;
}) {
  const { open } = useBooking();

  return (
    <motion.button
      type="button"
      onClick={open}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
      {showIcon && <ArrowRight className="h-4 w-4" />}
    </motion.button>
  );
}
