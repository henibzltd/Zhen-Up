import { z } from "zod";

export const CHALLENGE_OPTIONS = [
  { value: "leads", label: "Not enough leads coming in", emoji: "📉" },
  { value: "wasted-spend", label: "Ad spend isn't turning into sales", emoji: "💸" },
  { value: "outdated-site", label: "Our website feels outdated or slow", emoji: "🖥️" },
  { value: "no-time", label: "No time to manage marketing ourselves", emoji: "⏳" },
  { value: "other", label: "Something else entirely", emoji: "💬" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "paid-social", label: "Paid Social Media Ads" },
  { value: "website", label: "Website Development & Maintenance" },
  { value: "both", label: "Both — I need the full picture" },
  { value: "not-sure", label: "Not sure yet — advise me" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "this-month", label: "Sometime this month" },
  { value: "exploring", label: "Just exploring options" },
] as const;

export const bookingSchema = z.object({
  challenge: z.enum(
    CHALLENGE_OPTIONS.map((o) => o.value) as [string, ...string[]],
  ),
  challengeDetail: z
    .string()
    .trim()
    .max(600, "Keep it under 600 characters.")
    .optional()
    .or(z.literal("")),
  service: z.enum(SERVICE_OPTIONS.map((o) => o.value) as [string, ...string[]]),
  timeline: z.enum(TIMELINE_OPTIONS.map((o) => o.value) as [string, ...string[]]),
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type BookingInput = z.infer<typeof bookingSchema>;
