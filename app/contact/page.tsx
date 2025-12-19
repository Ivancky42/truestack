import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Truestack. Tell us about your fintech project and we'll get back to you.",
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
                Have a fintech project in mind? We'd love to hear about it.
                Send us a message and we'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:hello@truestack.io"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      hello@truestack.io
                    </a>
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

