import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { Hero } from "@/components/sections/hero";
import { ContactCards } from "@/components/sections/contact-cards";
import { ContactPageBackground } from "@/components/sections/contact-page-background";
import { ContactSchema } from "@/components/seo/contact-schema";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free consultation with Truestack. Tell us about your software development build, compliance needs, or KPKT licensing—we'll map out your options, free and no obligation.",
  keywords: [
    "free consultation Truestack",
    "free KPKT consultation Malaysia",
    "fintech consulting Malaysia",
    "KPKT services inquiry",
    "money lender software quote",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Free Consultation - Truestack",
    description:
      "Book a free consultation with Truestack. Software development builds, compliance, and KPKT licensing—we'll map out your options, free and no obligation.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation - Truestack",
    description:
      "Book a free consultation with Truestack. Software development builds, compliance, and KPKT licensing—we'll map out your options, free and no obligation.",
    images: [defaultOgImage.url],
  },
};

export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <ContactPageBackground />
      <ContactSchema />
      <Hero
        title="Book Your Free Consultation"
        subtitle="Tell us about your project. We'll map out your software development build, compliance needs, or KPKT licensing—free, no obligation."
        compact
        showBackground={false}
      />

      <section className="relative pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <ContactCards />
        </div>
      </section>
    </div>
  );
}

