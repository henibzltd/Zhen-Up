"use client";

import { motion } from "framer-motion";
import { BarChart3, MessagesSquare, Rocket, Target } from "lucide-react";
import { Container } from "@/components/ui/container";

const STEPS = [
  {
    icon: MessagesSquare,
    title: "We listen first",
    body: "A free consultation where we learn about your business, your customers, and where things are actually breaking down.",
  },
  {
    icon: Target,
    title: "We build the plan",
    body: "A straightforward strategy for your ads and/or website, with clear goals and timelines — no jargon, no fluff.",
  },
  {
    icon: Rocket,
    title: "We launch",
    body: "Campaigns go live and websites go live, built and monitored by our team from day one.",
  },
  {
    icon: BarChart3,
    title: "We optimize, monthly",
    body: "Ongoing testing, maintenance, and a plain-English report every month so you always know what's working.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            How it works
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            A simple process, built for clarity.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-start"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-white">
                <step.icon className="h-7 w-7 text-brand" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
