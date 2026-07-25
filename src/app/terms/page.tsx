import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${SITE_NAME} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-ink-soft">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Use of this website</h2>
          <p className="mt-3">
            This website is provided by {SITE_NAME} to share information about our
            services and to allow prospective clients to request a consultation. By
            using this site, you agree not to misuse it, attempt to disrupt its
            operation, or submit false or malicious information through our forms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">No guarantee of results</h2>
          <p className="mt-3">
            Marketing and advertising outcomes depend on many factors outside our
            control, including market conditions and platform policies. Nothing on
            this site constitutes a guarantee of specific results. Service-specific
            terms are agreed separately once you engage {SITE_NAME}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Intellectual property</h2>
          <p className="mt-3">
            All content on this site, including copy, design, and branding, is the
            property of {SITE_NAME} and may not be reproduced without permission.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Changes to these terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the site
            after changes are posted constitutes acceptance of the updated terms.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-ink">Contact us</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
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
