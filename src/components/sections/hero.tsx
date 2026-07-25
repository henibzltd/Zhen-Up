"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 8%, rgba(0,191,99,0.14), transparent 60%), radial-gradient(45% 40% at 8% 92%, rgba(0,191,99,0.10), transparent 60%)",
        }}
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-light px-4 py-1.5 text-sm font-semibold text-brand-dark"
          >
            <Sparkles className="h-4 w-4" />
            Performance Marketing Agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Tired of marketing that looks busy but doesn&apos;t pay the bills?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            We get it — you&apos;ve tried the boosted posts, the freelancer who
            went quiet, the agency that only sent reports. ZhenUp Digital runs
            your paid social campaigns and builds a website that converts, so
            every dollar you spend comes back as a real client.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <BookCtaButton size="lg">Book a Free Consultation</BookCtaButton>
            <a
              href="#services"
              className="group inline-flex h-14 items-center justify-center gap-2 px-2 text-base font-semibold text-ink transition-colors hover:text-brand"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-ink-soft"
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-brand" />
              No long-term lock-in contracts
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <TrendingUp className="h-4 w-4 text-brand" />
              ROI reported monthly
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-sm font-semibold text-ink">
                Campaign Performance
              </span>
              <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark">
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <MetricCard label="New Leads" value="+142%" />
              <MetricCard label="Ad ROAS" value="3.2x" />
              <MetricCard label="Cost / Lead" value="-38%" down />
              <MetricCard label="Site Speed" value="98/100" />
            </div>

            <div className="mt-5 flex h-24 items-end gap-1.5 rounded-2xl bg-slate-50 p-4">
              {[40, 55, 48, 65, 60, 78, 72, 90, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
                  className="w-full rounded-sm bg-brand/70"
                />
              ))}
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 -top-6 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs font-medium text-ink-soft">Consultation Booked</p>
            <p className="text-sm font-bold text-ink">Local HVAC Services Co.</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg sm:block"
          >
            <p className="text-xs font-medium text-ink-soft">This Month</p>
            <p className="text-sm font-bold text-brand">47 New Leads</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function MetricCard({
  label,
  value,
  down,
}: {
  label: string;
  value: string;
  down?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-medium text-ink-soft">{label}</p>
      <p
        className={`mt-1 font-display text-xl font-bold ${
          down ? "text-brand" : "text-ink"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
