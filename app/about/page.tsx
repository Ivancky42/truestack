import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { TechnologyPartners } from "@/components/sections/technology-partners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  Code2,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Truestack — a fintech software agency specializing in digital lending platforms and payment solutions.",
};

const values = [
  {
    title: "Fintech Expertise",
    description:
      "We understand the unique challenges of building financial software — from regulatory compliance to security requirements.",
    icon: Shield,
  },
  {
    title: "Modern Tech Stack",
    description:
      "We use battle-tested technologies like Next.js, Node.js, and PostgreSQL. Built for performance and maintainability.",
    icon: Code2,
  },
  {
    title: "End-to-End Delivery",
    description:
      "From initial concept to production deployment, we handle the complete software development lifecycle.",
    icon: Zap,
  },
  {
    title: "Collaborative Approach",
    description:
      "We work closely with your team, providing regular updates and adapting to feedback throughout the project.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Truestack"
        subtitle="A software agency specializing in fintech. We build the platforms that power digital lending and payments."
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl">
            <SectionHeader title="Who We Are" />
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Truestack is a software agency that specializes in building fintech
                applications. We focus on digital lending platforms, payment
                systems, and financial software for companies across the region.
              </p>
              <p>
                Our team combines deep technical expertise with an understanding of
                the regulatory and operational requirements unique to financial
                services. We've built platforms that are KPKT-compliant,
                SC Malaysia licensed, secure, and ready for scale.
              </p>
              <p>
                We work with third-party partners for specialized services like
                penetration testing, KYC verification, and digital signing —
                allowing us to deliver complete solutions while focusing on what we
                do best: building great software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Truestack */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Why Truestack"
            subtitle="What sets us apart as a fintech development partner."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <TechnologyPartners />

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to build your fintech platform?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project. We'll get back to you with a plan.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
