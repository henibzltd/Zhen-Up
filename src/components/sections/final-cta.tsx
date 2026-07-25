"use client";

import { motion } from "framer-motion";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand to-brand-dark px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink/10 blur-3xl"
          />
          <h2 className="relative text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s talk about what&apos;s really holding your growth back.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/90">
            No pressure, no sales script — just a real conversation about your
            business and whether we&apos;re the right fit to help.
          </p>
          <div className="relative mt-9 flex justify-center">
            <BookCtaButton variant="dark" size="lg">
              Book a Free Consultation
            </BookCtaButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
