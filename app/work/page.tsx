import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Shield,
  Server,
  Database,
  FileCheck,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and projects. See the fintech platforms we've built and the KPKT operators we've helped go digital.",
  keywords: [
    "Truestack case studies",
    "fintech projects Malaysia",
    "KPKT digital license",
    "CreditXpress",
    "money lending platform",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work - Truestack",
    description:
      "Case studies and projects. See the fintech platforms we've built and the KPKT operators we've helped go digital.",
  },
};

const projects = [
  {
    title: "CreditXpress",
    href: "https://creditxpress.com.my",
    logo: "/logos/creditxpress.svg",
    description:
      "A fully digital, KPKT-licensed money lending platform built through our Digital License Conversion service. From application to deployment, we helped CreditXpress transform into a nationwide digital lender.",
    features: [
      "Digital KPKT license approved",
      "Web application + Flutter mobile app",
      "On-premise digital signing server",
      "Malaysia data residency (AWS)",
      "Complete audit trail system",
      "Serving customers nationwide",
    ],
    tags: ["Digital License Conversion", "Web + Mobile App", "KPKT Licensed"],
    status: "Live",
    serviceType: "digital-license",
    highlights: [
      {
        icon: FileCheck,
        label: "Digital License",
      },
      {
        icon: Server,
        label: "Web + Mobile App",
      },
      {
        icon: Database,
        label: "AWS Malaysia",
      },
    ],
  },
  {
    title: "Kredit.my",
    href: "https://kredit.my",
    logo: "/logos/kredit.png",
    description:
      "A fully digital lending platform licensed under KPKT Malaysia. Built to meet regulatory requirements from both SC Malaysia and KPKT Malaysia, with web and mobile apps, complete audit trails, and compliance features.",
    features: [
      "KPKT Malaysia licensed platform",
      "SC Malaysia regulatory compliance",
      "Web application + Flutter mobile app",
      "On-premise digital signing server",
      "Malaysia data residency (AWS)",
      "Complete audit trail system",
    ],
    tags: ["Custom Software", "KPKT Licensed", "SC Compliant"],
    status: "Live",
    serviceType: "software-development",
    highlights: [
      {
        icon: Code2,
        label: "Custom Platform",
      },
      {
        icon: Shield,
        label: "KPKT & SC Licensed",
      },
      {
        icon: Database,
        label: "AWS Malaysia",
      },
    ],
  },
  {
    title: "CashSouk",
    href: "https://cashsouk.com",
    logo: "/logos/cashsouk_logo.png",
    description:
      "P2P lending platform connecting borrowers with investors. Modern fintech infrastructure built for scale with full compliance features and Malaysia data residency.",
    features: [
      "P2P lending marketplace",
      "Investor and borrower portals",
      "Malaysia data residency (AWS)",
      "Comprehensive audit trails",
      "Multi-product support",
      "Real-time transaction processing",
    ],
    tags: ["Custom Software", "P2P Lending", "SC Licensed"],
    status: "Coming Soon",
    serviceType: "software-development",
    highlights: [
      {
        icon: Code2,
        label: "P2P Platform",
      },
      {
        icon: Database,
        label: "AWS Malaysia",
      },
    ],
  },
];

export default function WorkPage() {
  return (
    <>
      <Hero
        title="Our Work"
        subtitle="See how we've helped KPKT operators go digital and built custom fintech platforms from the ground up."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Case Studies"
            subtitle="Real platforms we've built and operators we've helped transform — all with Malaysia data residency and full regulatory compliance."
            centered
          />

          <div className="space-y-12">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      {project.logo ? (
                        <div className="flex h-14 w-36 items-center justify-center">
                          <Image
                            src={project.logo}
                            alt={project.title}
                            width={144}
                            height={56}
                            className="max-h-14 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-xl font-bold text-primary-foreground">
                          {project.title.charAt(0)}
                        </div>
                      )}
                      {!project.logo && (
                        <div>
                          <CardTitle className="text-2xl">
                            {project.title}
                          </CardTitle>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge
                              variant={
                                project.status === "Live" ? "default" : "secondary"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      )}
                      {project.logo && (
                        <Badge
                          variant={
                            project.status === "Live" ? "default" : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      {/* Highlight badges */}
                      <div className="hidden flex-wrap gap-2 lg:flex">
                        {project.highlights?.map((highlight) => (
                          <div
                            key={highlight.label}
                            className="flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-xs font-medium"
                          >
                            <highlight.icon className="h-3.5 w-3.5 text-primary" />
                            {highlight.label}
                          </div>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="gap-2">
                        <Link
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-6 text-lg text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 font-semibold">Key Features</h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="How We Can Help You"
            subtitle="Whether you need help with compliance, want to go digital, or are building a new platform — we have a solution."
            centered
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <Card className="text-center transition-all hover:shadow-md hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Account Management</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  License renewals, annual submissions, and compliance coordination.
                </p>
                <Button asChild variant="ghost" className="gap-2">
                  <Link href="/services/account-management">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center transition-all hover:shadow-md hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <FileCheck className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Digital License</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Transform to a fully digital KPKT-licensed platform in 6 months.
                </p>
                <Button asChild variant="ghost" className="gap-2">
                  <Link href="/services/digital-license">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center transition-all hover:shadow-md hover:border-primary/50">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Code2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Custom Software</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Full-stack fintech development for P2P and digital lending.
                </p>
                <Button asChild variant="ghost" className="gap-2">
                  <Link href="/services/software-development">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
