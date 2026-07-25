"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, MousePointerClick, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";

const PAIN_POINTS = [
  {
    icon: Wallet,
    title: "You're spending on ads, but the phone isn't ringing",
    body: "You know you need to be visible. But budget is going out the door every month without a clear line back to actual customers.",
  },
  {
    icon: Clock,
    title: "There's no time left to 'figure out marketing'",
    body: "Between running the business and serving customers, keeping up with algorithm changes and ad platforms just isn't realistic.",
  },
  {
    icon: MousePointerClick,
    title: "Your website gets visits but no one converts",
    body: "Traffic shows up, then leaves. Somewhere between the click and the contact form, people are quietly walking away.",
  },
  {
    icon: AlertCircle,
    title: "Past agencies over-promised and under-delivered",
    body: "Vague reports, jargon-filled calls, and results that never quite matched the pitch. You're right to be skeptical.",
  },
] as const;

export function PainPoints() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand"
          >
            Sound familiar?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            You didn&apos;t start a business to become a full-time marketer.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-ink-soft"
          >
            Before we talk about solutions, we want you to know: we&apos;ve heard
            these exact frustrations from business owners just like you.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-5 rounded-3xl border border-slate-100 bg-white p-7 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <point.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{point.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-14 max-w-2xl text-balance text-center font-display text-xl font-semibold text-ink sm:text-2xl"
        >
          That&apos;s exactly where we come in —{" "}
          <span className="text-brand">and exactly why we built ZhenUp differently.</span>
        </motion.p>
      </Container>
    </section>
  );
}
