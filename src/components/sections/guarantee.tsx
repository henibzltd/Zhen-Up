"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Container } from "@/components/ui/container";

const GUARANTEE_POINTS = [
  {
    label: "Data-Backed ROI",
    detail: "No guesswork, just measurable performance marketing.",
  },
  {
    label: "Proportionate Accountability",
    detail: "We tie our agency success directly to your business growth.",
  },
  {
    label: "Risk-Free Onboarding",
    detail: "Seamless transition with built-in financial protection.",
  },
] as const;

export function Guarantee() {
  return (
    <section id="guarantee" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] border border-brand/40 bg-ink p-8 shadow-[0_0_60px_-20px_rgba(0,191,99,0.35)] transition-shadow duration-500 hover:border-brand/70 hover:shadow-[0_0_90px_-15px_rgba(0,191,99,0.55)] sm:p-12 lg:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/15 text-brand">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-balance font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              The Zhen Up Performance Guarantee: We Share the Risk.
            </h2>

            <p className="mt-5 text-lg font-semibold text-brand sm:text-xl">
              Most marketing agencies expect you to shoulder 100% of the
              financial risk. We don&apos;t.
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-300 sm:text-base">
              We set strict, data-driven targets for your paid social
              campaigns and web development timelines. If we fall short of
              our agreed-upon KPIs, our Pro Rata Guarantee kicks in. You only
              pay for the exact percentage of the results we deliver. If we
              hit 80% of our goal, we credit you the 20% difference. Total
              transparency, zero empty promises.
            </p>

            <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left">
              {GUARANTEE_POINTS.map((point) => (
                <li key={point.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] text-slate-300">
                    <span className="font-semibold text-white">{point.label}:</span>{" "}
                    {point.detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <BookCtaButton size="lg">Claim Your Custom Strategy</BookCtaButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
