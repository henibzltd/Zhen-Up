"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CalendlyEmbed } from "@/components/booking/calendly-embed";
import { useBooking } from "@/components/booking/booking-context";
import {
  bookingSchema,
  CHALLENGE_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  type BookingInput,
} from "@/lib/booking-schema";
import { CALENDLY_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const EMPATHY_COPY: Record<string, string> = {
  leads:
    "That's one of the most common growth bottlenecks we see — and it's very fixable. Let's understand what's happening with your pipeline right now.",
  "wasted-spend":
    "Frustrating, especially when you know ads should be working for you. We'll dig into exactly where that budget is going.",
  "outdated-site":
    "Your website is often the first impression — and quietly one of the biggest sources of lost conversions. Let's take a look.",
  "no-time":
    "You started your business to run it, not to become a full-time marketer. That's exactly what we're here for.",
  other: "Thanks for sharing — we'd love to hear more about what's on your mind.",
};

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const TOTAL_STEPS = 5;

const emptyForm: BookingInput = {
  challenge: "",
  challengeDetail: "",
  service: "",
  timeline: "",
  name: "",
  business: "",
  email: "",
  phone: "",
  website: "",
};

export function BookingFlow() {
  const { close, setIsScheduling } = useBooking();
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<BookingInput>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    setIsScheduling(step === 5 && status === "success" && Boolean(CALENDLY_URL));
  }, [step, status, setIsScheduling]);

  const update = <K extends keyof BookingInput>(key: K, value: BookingInput[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const progress = useMemo(() => (Math.min(step, TOTAL_STEPS) / TOTAL_STEPS) * 100, [step]);

  const goNext = () => setStep((s) => (Math.min(s + 1, 5) as Step));
  const goBack = () => setStep((s) => (Math.max(s - 1, 0) as Step));

  async function handleSubmit() {
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof BookingInput, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof BookingInput;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      if (fieldErrors.name || fieldErrors.email || fieldErrors.phone) {
        setStep(4);
      }
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setStep(5);
    } catch {
      setStatus("error");
    }
  }

  if (step === 5) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex w-full flex-col items-center"
            >
              {CALENDLY_URL ? (
                <>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Got it, {form.name.split(" ")[0] || "there"} — pick a time that works.
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-soft">
                    Choose a slot below and you&apos;re all set — no back-and-forth emails.
                  </p>
                  <div className="mt-4 w-full">
                    <CalendlyEmbed
                      url={CALENDLY_URL}
                      name={form.name}
                      email={form.email}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-brand">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    You&apos;re on the calendar.
                  </h3>
                  <p className="mt-3 max-w-sm text-ink-soft">
                    Thanks, {form.name.split(" ")[0] || "there"}. We&apos;ve got your details
                    and someone from our team will reach out within one business day to lock
                    in a time that works for you.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Done
                  </button>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-display text-2xl font-bold text-ink">
                Something went wrong.
              </h3>
              <p className="mt-3 max-w-sm text-ink-soft">
                We couldn&apos;t submit your details just now. Please try again, or email us
                directly and we&apos;ll take it from there.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Try again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-brand"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* honeypot: real users never see/fill this */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => update("website", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        {step === 0 && (
          <StepShell key="0">
            <Prompt eyebrow="Let's start here">
              What&apos;s slowing your growth down right now?
            </Prompt>
            <div className="mt-6 flex flex-col gap-3">
              {CHALLENGE_OPTIONS.map((opt) => (
                <OptionButton
                  key={opt.value}
                  selected={form.challenge === opt.value}
                  onClick={() => {
                    update("challenge", opt.value);
                    goNext();
                  }}
                >
                  <span className="text-lg">{opt.emoji}</span>
                  <span>{opt.label}</span>
                </OptionButton>
              ))}
            </div>
          </StepShell>
        )}

        {step === 1 && (
          <StepShell key="1">
            <Prompt eyebrow="We hear you">
              {EMPATHY_COPY[form.challenge] ?? EMPATHY_COPY.other}
            </Prompt>
            <label className="mt-6 block text-sm font-medium text-ink-soft">
              Anything specific you want us to know? (optional)
            </label>
            <textarea
              value={form.challengeDetail}
              onChange={(e) => update("challengeDetail", e.target.value)}
              rows={4}
              maxLength={600}
              placeholder="e.g. We get inquiries but they never convert to booked calls..."
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 p-4 text-ink placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            <NavRow onBack={goBack} onNext={goNext} />
          </StepShell>
        )}

        {step === 2 && (
          <StepShell key="2">
            <Prompt eyebrow="Good to know">Which sounds like the right fit?</Prompt>
            <div className="mt-6 flex flex-col gap-3">
              {SERVICE_OPTIONS.map((opt) => (
                <OptionButton
                  key={opt.value}
                  selected={form.service === opt.value}
                  onClick={() => {
                    update("service", opt.value);
                    goNext();
                  }}
                >
                  <span>{opt.label}</span>
                </OptionButton>
              ))}
            </div>
            <NavRow onBack={goBack} />
          </StepShell>
        )}

        {step === 3 && (
          <StepShell key="3">
            <Prompt eyebrow="Almost there">How soon are you hoping to move?</Prompt>
            <div className="mt-6 flex flex-col gap-3">
              {TIMELINE_OPTIONS.map((opt) => (
                <OptionButton
                  key={opt.value}
                  selected={form.timeline === opt.value}
                  onClick={() => {
                    update("timeline", opt.value);
                    goNext();
                  }}
                >
                  <span>{opt.label}</span>
                </OptionButton>
              ))}
            </div>
            <NavRow onBack={goBack} />
          </StepShell>
        )}

        {step === 4 && (
          <StepShell key="4">
            <Prompt eyebrow="Last step">Where should we send the details?</Prompt>
            <div className="mt-6 flex flex-col gap-4">
              <Field
                label="Full name"
                value={form.name}
                onChange={(v) => update("name", v)}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Business name (optional)"
                value={form.business ?? ""}
                onChange={(v) => update("business", v)}
                error={errors.business}
                autoComplete="organization"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                autoComplete="email"
              />
              <Field
                label="Phone (optional)"
                type="tel"
                value={form.phone ?? ""}
                onChange={(v) => update("phone", v)}
                error={errors.phone}
                autoComplete="tel"
              />
            </div>
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={goBack}
                className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "submitting"}
                className="inline-flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Booking...
                  </>
                ) : (
                  "Book my consultation"
                )}
              </button>
            </div>
          </StepShell>
        )}
      </AnimatePresence>
    </div>
  );
}

function StepShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Prompt({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </span>
      <h3 className="mt-2 font-display text-2xl font-bold leading-snug text-ink sm:text-[1.75rem]">
        {children}
      </h3>
    </div>
  );
}

function OptionButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-[15px] font-medium text-ink transition-all hover:-translate-y-0.5 hover:border-brand hover:bg-brand-light/40",
        selected ? "border-brand bg-brand-light/50" : "border-slate-200",
      )}
    >
      {children}
    </button>
  );
}

function NavRow({ onBack, onNext }: { onBack: () => void; onNext?: () => void }) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        type="button"
        onClick={onBack}
        className="text-sm font-semibold text-ink-soft transition-colors hover:text-ink"
      >
        Back
      </button>
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Continue
        </button>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">{label}</span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full rounded-xl border p-3.5 text-ink placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/20",
          error ? "border-red-400" : "border-slate-200 focus:border-brand",
        )}
      />
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
