import Link from "next/link";
import { Mail } from "lucide-react";
import { BookCtaButton } from "@/components/booking/book-cta-button";
import { Logo } from "@/components/icons/logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/social";
import { Container } from "@/components/ui/container";
import { CONTACT_EMAIL, NAV_LINKS, SOCIAL_LINKS } from "@/lib/site";

const socialIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-ink text-slate-300">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Performance marketing for businesses that are done guessing. We run the ads
              and build the websites — you watch the leads come in.
            </p>
            <div className="mt-6">
              <BookCtaButton variant="outline" size="md">
                Book a Consultation
              </BookCtaButton>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {year} ZhenUp Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
