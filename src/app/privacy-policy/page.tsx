import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-ink-soft">Last updated: {new Date().getFullYear()}</p>

      <div className="prose-custom mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Information we collect</h2>
          <p className="mt-3">
            When you submit our consultation form, we collect the information you
            provide directly: your name, business name, email address, phone number,
            and any details you share about your business goals. We do not collect
            payment information through this website.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">How we use your information</h2>
          <p className="mt-3">
            We use the information you submit solely to respond to your consultation
            request, schedule a call, and provide the services you inquire about. We
            do not sell your personal information to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Data security</h2>
          <p className="mt-3">
            Submissions are transmitted over an encrypted (HTTPS) connection and
            validated server-side before processing. Access to stored lead
            information is limited to authorized team members.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Cookies & analytics</h2>
          <p className="mt-3">
            This site may use privacy-respecting analytics to understand aggregate
            traffic patterns and improve performance. No personally identifying
            advertising cookies are set without your consent where required by law.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Your rights</h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of your personal
            information at any time by contacting us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Contact us</h2>
          <p className="mt-3">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
