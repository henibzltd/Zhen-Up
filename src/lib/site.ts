export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zhenupdigital.com";

export const SITE_NAME = "ZhenUp Digital";

export const SITE_DESCRIPTION =
  "ZhenUp Digital is a performance marketing agency helping small and mid-sized businesses generate consistent leads through paid social advertising and high-converting website builds — with monthly reporting tied to real ROI.";

export const CONTACT_EMAIL = "hello@zhenupdigital.com";

export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
  { href: "https://www.facebook.com/", label: "Facebook" },
] as const;
