"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-8px_rgba(0,191,99,0.65)] hover:bg-brand-dark",
  dark: "bg-ink text-white shadow-[0_8px_24px_-8px_rgba(15,23,42,0.5)] hover:bg-slate-800",
  outline:
    "border-2 border-ink/15 bg-white text-ink hover:border-brand hover:text-brand",
  ghost: "text-ink hover:text-brand",
} as const;

const sizeStyles = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
} as const;

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export function ButtonLink({
  href,
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
