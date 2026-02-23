import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactCards } from "@/components/sections/contact-cards";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Truestack. Tell us about your project and we'll get back to you.",
  keywords: [
    "contact Truestack",
    "fintech consulting Malaysia",
    "KPKT services inquiry",
    "money lender software quote",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact - Truestack",
    description:
      "Get in touch with Truestack. Tell us about your project and we'll get back to you.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Build Something Together"
        subtitle="Tell us about your project. We'll get back to you with a plan."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Get in Touch
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Have a project in mind? We&apos;d love to hear about it.
            Reach out via email or WhatsApp and we&apos;ll respond as soon as
            possible.
          </p>

          <ContactCards />
        </div>
      </section>
    </>
  );
}

