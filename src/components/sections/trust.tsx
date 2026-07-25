"use client";

import { motion } from "framer-motion";
import { FileBarChart, HandHeart, ShieldCheck, Unlock } from "lucide-react";
import { Container } from "@/components/ui/container";

const COMMITMENTS = [
  {
    icon: FileBarChart,
    title: "Plain-English monthly reporting",
    body: "No dashboards full of vanity metrics. You'll always know exactly what's working and what we're changing next.",
  },
  {
    icon: Unlock,
    title: "No long-term lock-in contracts",
    body: "We earn your business every month with results — not with a contract that traps you if things aren't working.",
  },
  {
    icon: HandHeart,
    title: "Direct access to your team",
    body: "You'll talk to the people actually running your campaigns and building your site — not a rotating cast of account managers.",
  },
  {
    icon: ShieldCheck,
    title: "Security and speed, by default",
    body: "Every site we build and maintain ships with modern security practices and performance baked in from day one.",
  },
] as const;

export function Trust() {
  return (
    <section id="results" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            How we work with you
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built on transparency, not hype.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            We&apos;re a newer name in the space, and we know trust is earned.
            Here&apos;s exactly what you can expect from day one.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand/40 hover:bg-white/[0.07]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
