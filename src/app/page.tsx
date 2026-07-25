import { headers } from "next/headers";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/pain-points";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";
import { FAQ_ITEMS } from "@/lib/faq-data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default async function Home() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <Trust />
      <Faq />
      <FinalCta />
    </>
  );
}
