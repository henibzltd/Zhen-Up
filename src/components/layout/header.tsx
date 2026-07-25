"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Logo } from "@/components/icons/logo";
import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-slate-100 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="ZhenUp Digital home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookCtaButton size="md">Book a Consultation</BookCtaButton>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-slate-100 bg-white md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-semibold text-ink transition-colors hover:bg-brand-light/50 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2">
                <BookCtaButton className="w-full" size="md">
                  Book a Consultation
                </BookCtaButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
