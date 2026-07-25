"use client";

import { motion } from "framer-motion";
import {
  Check,
  Code2,
  Megaphone,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Container } from "@/components/ui/container";

const SERVICES = [
  {
    id: "paid-social",
    icon: Megaphone,
    eyebrow: "Core Service 01",
    title: "Paid Social Media Ads",
    description:
      "Monthly-managed campaigns across Meta and other social platforms, built to generate qualified leads — not just likes.",
    features: [
      "Audience research & targeted campaign strategy",
      "Scroll-stopping creative built for conversions",
      "Continuous A/B testing and budget optimization",
      "Clear monthly reporting tied to leads & revenue",
    ],
  },
  {
    id: "website",
    icon: Code2,
    eyebrow: "Core Service 02",
    title: "Website Development & Maintenance",
    description:
      "A fast, secure, conversion-focused website — plus ongoing monthly maintenance so it keeps performing long after launch.",
    features: [
      "Custom design built around your customer journey",
      "Built on modern, high-performance frameworks",
      "Security patches, backups & uptime monitoring",
      "Monthly updates, edits, and speed optimization",
    ],
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50/60 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            What we do
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Two services. One goal: more paying customers.
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            No bloated menus of vague deliverables — just the two things that
            move the needle for growing businesses, done properly.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="grid gap-10 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.3)] sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <service.icon className="h-7 w-7" />
                </div>
                <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {service.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[15px] text-ink-soft">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <BookCtaButton variant="dark">
                    Talk About {service.title.split(" ")[0]}
                  </BookCtaButton>
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ServiceVisual variant={service.id} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceVisual({ variant }: { variant: "paid-social" | "website" }) {
  if (variant === "paid-social") {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-ink to-slate-800 p-7 text-white">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Target className="h-4 w-4 text-brand" /> Campaign: Spring Promo
          </span>
          <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
            Active
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Reach", value: "48.2K" },
            { label: "CTR", value: "4.6%" },
            { label: "Leads", value: "312" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
              <p className="font-display text-lg font-bold">{stat.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-2.5">
          {[70, 45, 90].map((w, idx) => (
            <div key={idx} className="h-2.5 w-full rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="h-full rounded-full bg-brand"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand/60" />
        </div>
        <div className="space-y-3 p-5">
          <div className="h-4 w-2/3 rounded-full bg-slate-100" />
          <div className="h-3 w-full rounded-full bg-slate-100" />
          <div className="h-3 w-5/6 rounded-full bg-slate-100" />
          <div className="mt-4 h-9 w-32 rounded-full bg-brand/90" />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white p-4 shadow-sm">
        <ShieldCheck className="h-5 w-5 text-brand" />
        <div>
          <p className="text-sm font-semibold text-ink">Secure & monitored</p>
          <p className="text-xs text-ink-soft">SSL, backups, uptime — handled monthly.</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-white p-4 shadow-sm">
        <Wrench className="h-5 w-5 text-brand" />
        <div>
          <p className="text-sm font-semibold text-ink">Always up to date</p>
          <p className="text-xs text-ink-soft">Content edits & fixes, done for you.</p>
        </div>
      </div>
    </div>
  );
}
