import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import Image from "next/image";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { Hero } from "@/components/sections/hero";
import { ContactCards } from "@/components/sections/contact-cards";
import { ContactPageBackground } from "@/components/sections/contact-page-background";
import { ContactSchema } from "@/components/seo/contact-schema";

const pageMetadata: Metadata = {
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
    siteName,
    images: [defaultOgImage],
  },
  twitter: {
    card: defaultTwitterCard,
    title: "Book a Free Consultation - Truestack",
    description:
      "Book a free consultation with Truestack — KPKT licensing, compliance, or lending software. Free and no obligation.",
    images: [defaultOgImage.url],
  },
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(pageMetadata, "/contact", resolveAppLocale(locale));
}

export default async function ContactPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
  return (
    <div className="hero-under-nav relative isolate overflow-hidden">
      <ContactPageBackground />
      <ContactSchema />
      <Hero
        title="Book Your Free Consultation"
        subtitle="Tell us about your project. We'll map out your software development build, compliance needs, or KPKT licensing—free, no obligation."
        compact
        showBackground={false}
        underNav={false}
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

