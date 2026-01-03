import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  FileCheck,
  CalendarCheck,
  Shield,
  ArrowUpCircle,
  Zap,
  CheckCircle2,
  X,
  Clock,
  AlertCircle,
  FileText,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "KPKT Account Management",
  description:
    "KPKT compliance and account management services. License renewals, annual submissions, and regulatory coordination for licensed money lenders in Malaysia. Up to 50% faster approvals.",
  openGraph: {
    title: "KPKT Account Management | Truestack",
    description:
      "License renewals, annual submissions, and regulatory coordination. Up to 50% faster approvals for licensed money lenders in Malaysia.",
    images: ["/truestack-favicon.png"],
  },
};

const painPoints = [
  {
    icon: AlertCircle,
    title: "Heavy Compliance Requirements",
    description: "KPKT regulations require frequent submissions and strict adherence to reporting standards.",
  },
  {
    icon: Clock,
    title: "Time-Consuming Coordination",
    description: "Coordinating with CoSec, SSM, and regulators takes valuable time away from your core business.",
  },
  {
    icon: FileText,
    title: "Complex Renewals",
    description: "License and permit renewals must be processed on time, every time — or risk penalties.",
  },
  {
    icon: Users,
    title: "Administrative Burden",
    description: "Director changes, shareholder updates, and company modifications require careful handling.",
  },
];

const servicesIncluded = [
  {
    icon: Building2,
    title: "Company Updates",
    description: "Director changes, shareholder updates, and all essential company modifications handled seamlessly.",
  },
  {
    icon: FileCheck,
    title: "License Renewals",
    description: "KPKT license and advertisement permit renewals processed on time, every time.",
  },
  {
    icon: CalendarCheck,
    title: "Annual Submissions",
    description: "B and B1 loan transaction submissions prepared and filed accurately to meet regulatory deadlines.",
  },
  {
    icon: Shield,
    title: "PDPA Licensing",
    description: "Personal Data Protection Act license applications and renewals managed with full compliance.",
  },
  {
    icon: ArrowUpCircle,
    title: "Enterprise Upgrade",
    description: "Smooth transition to Sdn. Bhd. status with complete documentation and regulatory coordination.",
  },
  {
    icon: Zap,
    title: "Express Handling",
    description: "Urgent requests prioritized and expedited when you need fast turnaround times.",
  },
];

interface PricingRow {
  item: string;
  noSubscription: string | boolean | null;
  monthly: string | boolean | null;
  annual: string | boolean | null;
  isHighlight?: boolean;
}

const pricingData: { headers: string[]; rows: PricingRow[] } = {
  headers: ["Item", "No Subscription", "Monthly", "Annual"],
  rows: [
    {
      item: "Subscription Fee",
      noSubscription: "—",
      monthly: "RM 100 / month",
      annual: "RM 1,000 / year",
    },
    {
      item: "Per Request Fee",
      noSubscription: "RM 1,000",
      monthly: "RM 500",
      annual: "RM 500",
    },
    {
      item: "Priority Handling",
      noSubscription: null,
      monthly: true,
      annual: true,
    },
    {
      item: "Annual B & B1 Submission",
      noSubscription: "—",
      monthly: "—",
      annual: "Included (once per year)",
    },
    {
      item: "Annual Savings (10 requests)",
      noSubscription: "—",
      monthly: "Save RM 3,800",
      annual: "Save RM 4,500",
      isHighlight: true,
    },
    {
      item: "Best For",
      noSubscription: "Occasional / one-off needs",
      monthly: "Regular operators",
      annual: "Active & growing operators",
    },
  ],
};

export default function AccountManagementPage() {
  return (
    <>
      <Hero
        title="KPKT Account Management, Simplified"
        subtitle="We handle regulatory and administrative work so you can focus on growth and serving your customers."
        primaryCta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "View Pricing", href: "#pricing" }}
        variant="kpkt"
      />

      {/* Pain Points */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Navigate Compliance Without the Hassle"
            subtitle="Running a licensed money lending business means dealing with heavy regulatory requirements. Let us handle it."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point) => (
              <Card key={point.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                    <point.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="mb-2 font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="border-t bg-kpkt/5 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">Our Solution</Badge>
            <h2 className="mb-4 text-2xl font-bold">Your Single, Trusted Partner</h2>
            <p className="text-lg text-muted-foreground">
              A dedicated KPKT account management service that handles end-to-end regulatory work. 
              We streamline every compliance touchpoint, saving you time and reducing operational stress 
              so you can focus on what matters most: <span className="font-semibold text-foreground">growing your lending business.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Speed Advantage */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Content */}
            <div>
              <Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">Our Advantage</Badge>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Up to <span className="text-kpkt">50% Faster</span> Approvals
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Our deep experience with KPKT processes and established relationships with regulators
                mean your applications move faster through the system.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
                    <Zap className="h-4 w-4 text-kpkt" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Years of Experience</h4>
                    <p className="text-sm text-muted-foreground">We know exactly what regulators need, reducing back-and-forth and delays.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
                    <Users className="h-4 w-4 text-kpkt" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Established Network</h4>
                    <p className="text-sm text-muted-foreground">Direct relationships with key stakeholders expedite the approval process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
                    <FileCheck className="h-4 w-4 text-kpkt" />
                  </div>
                  <div>
                    <h4 className="font-semibold">First-Time Right</h4>
                    <p className="text-sm text-muted-foreground">Accurate documentation from day one means no rejection or resubmission delays.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Comparison */}
            <div className="relative">
              <Card className="overflow-hidden">
                <div className="-mx-px -mt-px rounded-t-xl border-b bg-muted/50 px-6 py-4">
                  <h3 className="text-center text-lg font-semibold">Average Approval Timeline</h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {/* DIY Bar */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-muted-foreground">DIY / Traditional</span>
                        <span className="font-semibold">4–6 weeks</span>
                      </div>
                      <div className="relative h-10 w-full overflow-hidden rounded-lg bg-muted">
                        <div 
                          className="absolute inset-y-0 left-0 flex items-center justify-end rounded-lg bg-muted-foreground/30 pr-3"
                          style={{ width: '100%' }}
                        >
                          <Clock className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Truestack Bar */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-kpkt">With Truestack</span>
                        <span className="font-bold text-kpkt">2–3 weeks</span>
                      </div>
                      <div className="relative h-10 w-full overflow-hidden rounded-lg bg-muted">
                        <div 
                          className="absolute inset-y-0 left-0 flex items-center justify-end rounded-lg bg-gradient-to-r from-kpkt to-kpkt/80 pr-3"
                          style={{ width: '50%' }}
                        >
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Savings Highlight */}
                    <div className="rounded-xl border-2 border-dashed border-kpkt/30 bg-kpkt/5 p-4 text-center">
                      <div className="mb-1 text-3xl font-bold text-kpkt">~50%</div>
                      <div className="text-sm font-medium text-muted-foreground">Faster than industry average</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Covered */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Comprehensive Services Covered"
            subtitle="Everything you need to stay compliant, handled by our experienced team."
            centered
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesIncluded.map((service) => (
              <Card key={service.title} className="transition-all hover:shadow-md hover:border-kpkt/50">
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt/10">
                    <service.icon className="h-5 w-5 text-kpkt" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-4 rounded-xl border bg-gradient-to-r from-kpkt/5 to-transparent p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
                <CheckCircle2 className="h-6 w-6 text-kpkt" />
              </div>
              <div>
                <p className="font-medium text-foreground">Full CoSec & SSM Coordination</p>
                <p className="text-sm text-muted-foreground">All document coordination handled seamlessly to keep everything running smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-20 border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Simple, Transparent Pricing"
            subtitle="Flexible options designed for your business needs. Pay only for what you use, with no hidden fees."
            centered
          />
          
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="px-6 py-4 text-left font-semibold align-bottom">Item</th>
                      <th className="px-6 py-4 text-center font-semibold align-bottom">
                        No Subscription
                      </th>
                      <th className="px-6 py-4 text-center font-semibold align-bottom">
                        Monthly
                      </th>
                      <th className="px-6 py-4 text-center font-semibold align-bottom">
                        <Badge variant="default" className="mb-2 bg-kpkt hover:bg-kpkt/90">Recommended</Badge>
                        <div>Annual</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingData.rows.map((row) => (
                      <tr 
                        key={row.item} 
                        className={`border-b last:border-0 ${row.isHighlight ? 'bg-kpkt/5' : ''}`}
                      >
                        <td className="px-6 py-4 font-medium">{row.item}</td>
                        <td className="px-6 py-4 text-center">
                          {row.noSubscription === null ? (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          ) : row.noSubscription === true ? (
                            <CheckCircle2 className="mx-auto h-5 w-5 text-kpkt" />
                          ) : (
                            <span className={row.isHighlight ? 'text-muted-foreground' : ''}>{row.noSubscription}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.monthly === null ? (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          ) : row.monthly === true ? (
                            <CheckCircle2 className="mx-auto h-5 w-5 text-kpkt" />
                          ) : (
                            <span className={row.isHighlight ? 'text-muted-foreground' : ''}>{row.monthly}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.annual === null ? (
                            <X className="mx-auto h-5 w-5 text-muted-foreground" />
                          ) : row.annual === true ? (
                            <CheckCircle2 className="mx-auto h-5 w-5 text-kpkt" />
                          ) : (
                            <span className={row.isHighlight ? 'font-semibold text-kpkt' : 'font-medium'}>{row.annual}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Notes */}
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-kpkt" />
                No long-term lock-in. Switch between subscription tiers or on-demand as your business evolves.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-kpkt" />
                Annual subscribers save 50% on per-request fees compared to no subscription.
              </p>
              <p className="flex items-center gap-2 font-medium text-foreground">
                <Zap className="h-4 w-4 text-kpkt" />
                Digital KPKT License conversion is a separate service. <Link href="/services/digital-license" className="text-kpkt underline-offset-4 hover:underline">Learn more →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Let Us Handle Compliance</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Focus on growing your lending business while we manage the regulatory complexity. Our team is ready to support your compliance needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-kpkt hover:bg-kpkt/90">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
