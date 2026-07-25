# ZhenUp Digital

Marketing site for ZhenUp Digital, a performance marketing agency offering
paid social media advertising and website development & maintenance. Built
with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 (theme defined in `src/app/globals.css`)
- **Animation:** Framer Motion
- **Validation:** Zod (shared client/server schema for the booking form)
- **Hosting target:** Vercel (or any edge/Node host that supports Next.js)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Project structure

- `src/app` — routes, layout, metadata, sitemap/robots, API route
- `src/components/sections` — homepage sections (hero, pain points, services, etc.)
- `src/components/booking` — the conversational "Book a Consultation" flow
  (context provider + modal + multi-step form), used from the header, footer,
  and CTAs throughout the page
- `src/lib` — site constants, the booking Zod schema, FAQ content, a small
  in-memory rate limiter
- `src/proxy.ts` — Next.js Proxy (formerly "middleware") that issues a
  per-request CSP nonce

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

- `NEXT_PUBLIC_SITE_URL` — canonical production URL, used in metadata,
  JSON-LD, and the sitemap.
- `LEAD_WEBHOOK_URL` — optional. If set, consultation submissions are POSTed
  here as JSON (point this at a Slack incoming webhook, a Supabase Edge
  Function, a Zapier/Make hook, or an email-sending endpoint). If unset,
  submissions are only logged server-side via `console.info`, which is fine
  for local development but **must** be wired up before real traffic hits
  the site in production.

## Security

- Strict Content-Security-Policy with a per-request nonce (`src/proxy.ts`),
  plus `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`, and HSTS (`next.config.ts`).
- The consultation API route (`src/app/api/consultation/route.ts`) validates
  input with Zod, rate-limits by IP, checks a honeypot field, and rejects
  non-JSON content types.
- No secrets are exposed to the client; `LEAD_WEBHOOK_URL` is only read
  server-side.

## Things to replace before launch

This was built without access to the agency's real brand files or an
existing backend, so a few things are intentionally placeholders:

- **Logo** (`src/components/icons/logo.tsx`) is a scalable recreation of the
  "U + arrow" mark in the brand color, not the original artwork file. Swap
  in the real logo asset when available.
- **Contact email, social links, domain** (`src/lib/site.ts`,
  `NEXT_PUBLIC_SITE_URL`) are placeholders — update with the real ones.
- **Lead delivery** — set `LEAD_WEBHOOK_URL` (or extend the API route) so
  consultation requests actually reach the team, e.g. via Supabase, Resend,
  or Slack.
- **Privacy Policy / Terms** pages contain standard boilerplate and should
  be reviewed by a lawyer before launch.
- The trust/results section deliberately avoids fabricated client
  testimonials or stats since there are no real ones yet — replace it with
  genuine case studies and testimonials once available.

## SEO / GEO notes

- Per-page metadata, Open Graph/Twitter cards, and a dynamically generated
  OG image (`src/app/opengraph-image.tsx`).
- JSON-LD: `ProfessionalService` (root layout) and `FAQPage` (homepage),
  matching the visible FAQ content for generative-engine citation.
- `src/app/sitemap.ts` and `src/app/robots.ts`, with AI answer-engine
  crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) explicitly allowed.
