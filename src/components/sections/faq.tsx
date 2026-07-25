"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Container } from "@/components/ui/container";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Questions
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-100 rounded-3xl border border-slate-100 bg-white px-2 shadow-sm sm:px-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-3 py-4 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-3 pb-5 text-[15px] leading-relaxed text-ink-soft">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ink-soft">Still have questions specific to your business?</p>
          <div className="mt-5 flex justify-center">
            <BookCtaButton>Ask Us Directly</BookCtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
