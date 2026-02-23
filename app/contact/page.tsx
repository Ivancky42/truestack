import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

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

          <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            <Card className="transition-all hover:shadow-md hover:border-primary/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:hello@truestack.my"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  hello@truestack.my
                </a>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-md hover:border-primary/50">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://wa.me/60164614919?text=Hi%20Truestack%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  +60 16-461 4919
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  Click to start a chat
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

