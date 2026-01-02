import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Presentation,
  Code2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Clock,
  ArrowUpRight,
  Server,
  TestTube,
  Award,
  Building2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital KPKT License Conversion",
  description:
    "Transform your money lending business to operate fully online. Complete digital KPKT license conversion in 6 months with custom web and mobile platforms.",
  openGraph: {
    title: "Digital KPKT License Conversion | Truestack",
    description:
      "Go digital and expand nationwide. Complete digital KPKT license conversion in 6 months with custom web and mobile platforms.",
    images: ["/truestack-favicon.png"],
  },
};

const benefits = [
  {
    icon: Globe,
    title: "Operate Nationwide",
    description: "Serve customers across all of Malaysia, not just your local area.",
  },
  {
    icon: Smartphone,
    title: "Web + Mobile Apps",
    description: "Customers can apply and manage loans from anywhere, anytime.",
  },
  {
    icon: Clock,
    title: "~6 Months to Launch",
    description: "Our proven process gets you operational faster than going it alone.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Compliant",
    description: "Built to meet all KPKT digital licensing requirements from day one.",
  },
];

const platformFeatures = [
  "Online loan application & approval",
  "eKYC identity verification",
  "On-premise digital signing",
  "Automated disbursement",
  "Admin dashboard",
  "Auto document generation (receipts, notices)",
  "Complete audit trails",
  "Malaysia data residency (AWS)",
  "Real-time reporting dashboard",
  "Customer mobile app",
];

export default function DigitalLicensePage() {
  return (
    <>
      <Hero
        title="Digital KPKT License Conversion"
        subtitle="Operate online. Expand nationwide. Go live in ~6 months."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "See Timeline", href: "#timeline" }}
        variant="kpkt"
      />

      {/* Value Proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Transform Your Lending Business"
            subtitle="Go from traditional branch-based operations to a fully digital, KPKT-licensed platform."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-kpkt/10">
                    <benefit.icon className="h-6 w-6 text-kpkt" />
                  </div>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* License Transformation - Compact Horizontal */}
          <div className="mt-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Horizontal comparison */}
                <div className="grid md:grid-cols-[1fr,auto,1fr]">
                  {/* Before */}
                  <div className="flex items-center gap-4 bg-muted/30 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Building2 className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Traditional License</p>
                      <p className="font-semibold">1 Location</p>
                      <p className="text-sm text-muted-foreground">Branch-based only</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center bg-gradient-to-r from-muted/30 to-kpkt/10 px-4 py-3 md:py-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-kpkt">
                        <Zap className="h-5 w-5 text-kpkt-foreground" />
                      </div>
                      <ArrowRight className="hidden h-5 w-5 text-kpkt md:block" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="flex items-center gap-4 bg-kpkt/10 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-kpkt">
                      <Globe className="h-7 w-7 text-kpkt-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-kpkt">Digital License</p>
                      <p className="font-semibold text-kpkt">All of Malaysia</p>
                      <p className="text-sm text-muted-foreground">Web &amp; mobile platform</p>
                    </div>
                  </div>
                </div>

                {/* Coverage comparison bar */}
                <div className="border-t bg-card px-6 py-4">
                  <p className="mb-3 text-center text-sm font-medium text-muted-foreground">Customer Reach</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs text-muted-foreground">Traditional</span>
                      <div className="h-3 w-full rounded-full bg-muted">
                        <div className="h-3 w-[8%] rounded-full bg-muted-foreground/50" />
                      </div>
                      <span className="w-16 shrink-0 text-right text-xs text-muted-foreground">Local</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs font-medium text-kpkt">Digital</span>
                      <div className="h-3 w-full rounded-full bg-muted">
                        <div className="h-3 w-full rounded-full bg-kpkt" />
                      </div>
                      <span className="w-16 shrink-0 text-right text-xs font-medium text-kpkt">Nationwide</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Don't have a license - inline callout */}
            <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-lg border bg-muted/30 px-6 py-4 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="font-medium">Don&apos;t have an existing KPKT traditional license?</p>
                <p className="text-sm text-muted-foreground">We can help you obtain or acquire one.</p>
              </div>
              <Button asChild variant="outline" size="sm" className="shrink-0">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Combined Process & Timeline */}
      <section id="timeline" className="scroll-mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Your 6-Month Journey to Digital"
            subtitle="End-to-end digital transformation, from license application to platform launch."
            centered
          />
          
          <div className="mx-auto max-w-4xl">
            {/* Timeline Items */}
            <div className="relative space-y-8">
              {/* Vertical Timeline Line - stops at top of last circle */}
              <div className="absolute left-8 top-0 hidden w-0.5 bg-gradient-to-b from-kpkt via-kpkt/50 to-kpkt md:block" style={{ height: 'calc(100% - 8rem)' }} />
              {/* Month 1: Preparation & Presentation */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    1
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="font-bold text-kpkt">1</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">Month 1</Badge>
                        <CardTitle className="text-lg">Preparation & Provisional License</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Presentation className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Complete documentation preparation and presentation to KPKT for provisional license approval. We handle all regulatory correspondence and requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Months 2-4: Infrastructure + Software Development (Parallel) */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    2–4
                  </div>
                </div>
                <Card className="flex-1 border-kpkt/30 bg-gradient-to-r from-kpkt/5 to-transparent">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="text-sm font-bold text-kpkt">2–4</span>
                      </div>
                      <div>
                        <Badge className="mb-1 bg-kpkt hover:bg-kpkt/90">Months 2–4</Badge>
                        <CardTitle className="text-lg">Infrastructure & Software Development</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Infrastructure */}
                      <div className="flex items-start gap-3">
                        <Server className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                        <div>
                          <p className="font-medium text-sm">Infrastructure Setup</p>
                          <p className="text-sm text-muted-foreground">
                            AWS Malaysia cloud hosting and on-premise digital signing server deployment.
                          </p>
                        </div>
                      </div>
                      {/* Software */}
                      <div className="flex items-start gap-3">
                        <Code2 className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                        <div>
                          <p className="font-medium text-sm">Software Development</p>
                          <p className="mb-2 text-sm text-muted-foreground">
                            Full development of your branded web platform and mobile apps. Regular demos and iterative refinement.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">Web Application</Badge>
                            <Badge variant="outline" className="text-xs">iOS App</Badge>
                            <Badge variant="outline" className="text-xs">Android App</Badge>
                            <Badge variant="outline" className="text-xs">Admin Dashboard</Badge>
                          </div>
                        </div>
                      </div>
                      {/* Parallel indicator */}
                      {/* <div className="mt-3 flex items-center gap-2 rounded-lg bg-kpkt/10 px-3 py-2 text-xs">
                        <Clock className="h-4 w-4 text-kpkt" />
                        <span className="font-medium text-kpkt">Running in parallel to maximize efficiency</span>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Month 5: UAT & Pentest */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    5
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="font-bold text-kpkt">5</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">Month 5</Badge>
                        <CardTitle className="text-lg">UAT & Penetration Testing</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <TestTube className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          User acceptance testing with your team. Third-party penetration testing to ensure security compliance. Bug fixes and final refinements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Month 6: Final Approval */}
              <div className="relative flex gap-6">
                <div className="hidden md:flex md:flex-col md:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-background bg-kpkt text-lg font-bold text-kpkt-foreground shadow-lg">
                    6
                  </div>
                </div>
                <Card className="flex-1 border-kpkt/50">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-kpkt/10 md:hidden">
                        <span className="font-bold text-kpkt">6</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">Month 6</Badge>
                        <CardTitle className="text-lg">Final Approval & Go Live</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <Award className="mt-0.5 h-5 w-5 shrink-0 text-kpkt" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Final KPKT inspection and approval. Platform launch and go-live support. Your digital lending business is now operational nationwide.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-10 rounded-xl border-2 border-dashed border-kpkt/30 bg-kpkt/5 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-kpkt">~6 Months</div>
              <div className="text-muted-foreground">From initial application to serving customers nationwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">Your Digital Platform</Badge>
              <h2 className="mb-4 text-3xl font-bold">A Complete Digital Lending Platform</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                We build a fully branded web platform and mobile app tailored to your business. 
                Everything is designed to meet KPKT digital licensing requirements while providing 
                an exceptional customer experience.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {platformFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-kpkt" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-gradient-to-br from-kpkt/20 via-kpkt/10 to-transparent p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <Globe className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Web Application</div>
                      <div className="text-sm text-muted-foreground">Responsive, modern interface</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <Smartphone className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Mobile Apps</div>
                      <div className="text-sm text-muted-foreground">iOS & Android (Flutter)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <Presentation className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Admin Dashboard</div>
                      <div className="text-sm text-muted-foreground">Full operational control</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt">
                      <ShieldCheck className="h-5 w-5 text-kpkt-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">KPKT Compliant</div>
                      <div className="text-sm text-muted-foreground">Built to regulatory standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section id="success-story" className="scroll-mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Proven Success"
            subtitle="See what we've built for operators who made the digital transition."
            centered
          />
          <Card className="mx-auto max-w-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-kpkt/10 to-transparent">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logos/creditxpress.svg"
                    alt="CreditXpress"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                  <Badge variant="default" className="bg-kpkt hover:bg-kpkt/90">Live</Badge>
                </div>
                <Button asChild variant="outline" className="gap-2">
                  <Link href="https://creditxpress.com.my" target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-6 text-lg text-muted-foreground">
                A fully digital, KPKT-licensed money lending platform serving customers across Malaysia. 
                Built, launched, and operating successfully with our end-to-end support.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  KPKT digital license approved
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Web + Flutter mobile app
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  On-premise digital signing
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Malaysia data residency (AWS)
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Complete audit trail system
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-kpkt" />
                  Serving customers nationwide
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="border-t py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-xl bg-kpkt/5 p-6 text-center">
            <h3 className="mb-2 text-lg font-semibold">Custom Pricing</h3>
            <p className="mb-4 text-muted-foreground">
              Digital KPKT license conversion is a comprehensive project tailored to your business. 
              Contact us for a detailed quote based on your specific requirements.
            </p>
            <Button asChild className="bg-kpkt hover:bg-kpkt/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Go Digital?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join operators who have successfully transitioned to digital lending. 
            We&apos;ll guide you through every step of the process.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-kpkt hover:bg-kpkt/90">
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/account-management">
                Need Account Management Instead?
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
