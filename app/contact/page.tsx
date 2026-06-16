import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { Hero } from "@/components/sections/hero";
import { ContactCards } from "@/components/sections/contact-cards";
import { ContactSchema } from "@/components/seo/contact-schema";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free consultation with Truestack. Tell us about your KPKT licensing, compliance, or fintech software needs and we'll map out your options—free, no obligation.",
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
      "Book a free consultation with Truestack. Tell us about your KPKT licensing, compliance, or fintech software needs—free, no obligation.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation - Truestack",
    description:
      "Book a free consultation with Truestack. Tell us about your KPKT licensing, compliance, or fintech software needs—free, no obligation.",
    images: [defaultOgImage.url],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <Hero
        title="Book Your Free Consultation"
        subtitle="Tell us about your project. We'll map out your KPKT licensing, compliance, or lending build—free, no obligation."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Let&apos;s talk
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Have a project in mind? Reach out via email or WhatsApp to book your
            free consultation and we&apos;ll respond as soon as possible.
          </p>

          <ContactCards />
        </div>
      </section>
    </>
  );
}

