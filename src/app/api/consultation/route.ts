import { NextRequest, NextResponse } from "next/server";
import {
  bookingSchema,
  CHALLENGE_OPTIONS,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/booking-schema";
import { isRateLimited } from "@/lib/rate-limit";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

function labelFor(
  options: readonly { value: string; label: string }[],
  value: string,
) {
  return options.find((o) => o.value === value)?.label ?? value;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Browsers always attach a same-origin-or-not `Origin` header on POST
 * requests and never let page JS forge it, so this reliably blocks a
 * malicious site from using a visitor's browser to submit this form —
 * unlike CORS response headers, which only ever restrict what JS can
 * *read back*, not what gets sent. Non-browser clients (curl, server-to-
 * server) don't send Origin at all, so this can't be the only line of
 * defense — rate limiting, the honeypot, and Zod validation cover those.
 */
function hasValidOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  if (process.env.NODE_ENV === "development") return true;
  return origin === SITE_URL;
}

export async function POST(request: NextRequest) {
  if (!hasValidOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Forbidden origin." }, { status: 403 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Unsupported content type." }, { status: 415 });
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid submission.", issues: result.error.flatten() },
      { status: 422 },
    );
  }

  const lead = result.data;

  // Honeypot: bots that fill hidden fields are silently accepted but discarded.
  if (lead.website && lead.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    name: lead.name,
    business: lead.business || null,
    email: lead.email,
    phone: lead.phone || null,
    challenge: labelFor(CHALLENGE_OPTIONS, lead.challenge),
    challengeDetail: lead.challengeDetail || null,
    service: labelFor(SERVICE_OPTIONS, lead.service),
    timeline: labelFor(TIMELINE_OPTIONS, lead.timeline),
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
    } catch (error) {
      console.error("Failed to forward consultation lead to webhook:", error);
    }
  } else {
    console.info("New consultation request received:", payload);
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
