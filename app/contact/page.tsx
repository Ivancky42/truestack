import type { Metadata } from "next";
import Image from "next/image";
import { defaultOgImage } from "@/lib/seo-defaults";
import { Hero } from "@/components/sections/hero";
import { ContactCards } from "@/components/sections/contact-cards";
import { ContactPageBackground } from "@/components/sections/contact-page-background";
import { ContactSchema } from "@/components/seo/contact-schema";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free consultation with Truestack — KPKT licensing, compliance, or lending software. Free and no obligation. We'll map your next steps.",
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
      "Book a free consultation with Truestack — KPKT licensing, compliance, or lending software. Free and no obligation.",
    url: "/contact",
    type: "website",
    locale: "en_MY",
    siteName: "Truestack",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Consultation - Truestack",
    description:
      "Book a free consultation with Truestack — KPKT licensing, compliance, or lending software. Free and no obligation.",
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
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <ContactCards />
            <div className="relative aspect-3/4 overflow-hidden rounded-3xl border shadow-sm">
              <Image
                src="/photos/contact-desk-call.jpg"
                alt="A man at his desk in a warm office, checking an enquiry on his phone"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

