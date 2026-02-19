import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Truestack. Tell us about your fintech project and we'll get back to you.",
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
      "Get in touch with Truestack. Tell us about your fintech project and we'll get back to you.",
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
          <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
              <p className="mb-8 text-muted-foreground">
                Have a fintech project in mind? We&apos;d love to hear about it.
                Send us a message and we&apos;ll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:hello@truestack.my"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      hello@truestack.my
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <a
                      href="https://wa.me/60164614919?text=Hi%20Truestack%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      +60 16-461 4919
                    </a>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Click to start a chat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

