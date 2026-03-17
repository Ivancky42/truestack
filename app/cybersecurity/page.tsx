import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Database,
  Eye,
  FileCheck,
  Fingerprint,
  Lock,
  Mail,
  Server,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Policy",
  description:
    "Cybersecurity Policy for Truestack platforms and services, including TrueKredit and TrueIdentity.",
  keywords: [
    "cybersecurity policy",
    "Truestack security",
    "TrueIdentity security",
    "TrueKredit security",
    "Malaysia data residency",
  ],
  alternates: { canonical: "/cybersecurity" },
  openGraph: {
    title: "Cybersecurity Policy - Truestack",
    description:
      "How Truestack approaches security across its website, lending systems, and e-KYC infrastructure.",
  },
};

const coveredPlatforms = [
  "truestack.my",
  "admin.truestack.my",
  "kredit.truestack.my",
  "core.truestack.my",
  "api.truestack.my",
];

const securityPrinciples = [
  {
    title: "Malaysia-hosted infrastructure",
    description:
      "We design our platforms around Malaysian data residency requirements and infrastructure hosted in the AWS Malaysia region where applicable.",
    icon: Database,
  },
  {
    title: "Protected access",
    description:
      "Administrative and operational access is restricted through role-based permissions and controlled access to sensitive systems and data.",
    icon: Lock,
  },
  {
    title: "Secure APIs and applications",
    description:
      "Customer-facing systems such as TrueIdentity and TrueKredit are built with secure APIs, protected storage, and controls intended to reduce unauthorised access.",
    icon: Shield,
  },
  {
    title: "Monitoring and traceability",
    description:
      "We maintain system monitoring, alerting, and audit trail capabilities to support operational visibility, investigations, and compliance readiness.",
    icon: Eye,
  },
];

const protectedServices = [
  {
    title: "TrueIdentity e-KYC",
    description:
      "Identity verification workflows involve document capture, OCR extraction, selfie and liveness checks, biometric matching, fraud screening, and verification outcomes.",
    icon: Fingerprint,
  },
  {
    title: "TrueKredit loan management",
    description:
      "Loan servicing environments may contain borrower profiles, loan records, repayment histories, compliance outputs, and audit-ready documentation.",
    icon: FileCheck,
  },
  {
    title: "Compliance and signing infrastructure",
    description:
      "For regulated workflows, Truestack may operate dedicated or controlled infrastructure, including environments that support compliance or digital signing requirements.",
    icon: Server,
  },
];

export default function CybersecurityPolicyPage() {
  return (
    <>
      <section className="border-b bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Cybersecurity Policy</h1>
          <p className="text-lg text-muted-foreground">
            How Truestack approaches security across its website, fintech platforms,
            and regulated service infrastructure.
          </p>
          <Badge variant="secondary" className="mt-4">
            Last updated: March 2026
          </Badge>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">1. Purpose and Scope</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This Cybersecurity Policy provides a public overview of how Truestack
                  designs, operates, and protects systems used to deliver lending software,
                  KPKT compliance services, and e-KYC capabilities in Malaysia.
                </p>
                <p>
                  It applies to our public website and related service interfaces connected
                  to Truestack products and operations, including:
                </p>
                <ul className="space-y-2">
                  {coveredPlatforms.map((platform) => (
                    <li key={platform} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{platform}</code>
                    </li>
                  ))}
                </ul>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">
                      This page is intended as a high-level security statement for customers,
                      partners, and users. Additional contractual, technical, or regulatory
                      controls may apply to specific Truestack services.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">2. Security Principles</h2>
              <div className="grid gap-4 sm:grid-cols-1">
                {securityPrinciples.map((principle) => (
                  <Card key={principle.title}>
                    <CardContent className="pt-4">
                      <div className="mb-2 flex items-center gap-2">
                        <principle.icon className="h-5 w-5 text-primary" />
                        <p className="font-medium">{principle.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {principle.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">3. Controls We Apply</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Depending on the service and deployment model, our controls may include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Encryption in transit and protected storage for sensitive records
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Role-based access control for administrative and operational users
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Centralised logging and audit trails for important platform actions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Real-time monitoring and alerting to support detection and response
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Redundant or resilient infrastructure for service continuity objectives
                  </li>
                </ul>
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-foreground">
                      Some Truestack systems support sensitive financial, identity, or
                      biometric workflows. Those environments are subject to stricter access,
                      monitoring, and handling expectations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">4. Service-Specific Considerations</h2>
              <div className="grid gap-4 sm:grid-cols-1">
                {protectedServices.map((service) => (
                  <Card key={service.title}>
                    <CardContent className="pt-4">
                      <div className="mb-2 flex items-center gap-2">
                        <service.icon className="h-5 w-5 text-primary" />
                        <p className="font-medium">{service.title}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">5. Incident Detection and Response</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We aim to detect, assess, contain, and recover from security events in a
                  timely manner using monitoring, audit logs, and operational escalation
                  processes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Investigate suspicious activity or anomalous system behaviour
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Contain affected services or access paths when necessary
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Restore operations and review preventive improvements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Notify relevant customers or authorities when required by law, contract,
                    or regulatory obligation
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">6. User and Customer Responsibilities</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Security is a shared responsibility. Customers, partners, and authorised
                  users should also help protect Truestack systems by:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Safeguarding login credentials and restricting account sharing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Applying least-privilege access within their organisations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Reporting suspected misuse, vulnerabilities, or security incidents promptly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Using supported devices, networks, and browsers when accessing services
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">7. Policy Review</h2>
              <p className="text-muted-foreground">
                We may update this Cybersecurity Policy from time to time to reflect changes
                in our services, infrastructure, regulatory obligations, or security
                practices. Updates will be published on this page with a revised effective
                date.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">8. Contact</h2>
              <p className="mb-4 text-muted-foreground">
                To report a security concern or request more information about our security
                practices, contact:
              </p>
              <Card>
                <CardContent className="flex items-center gap-4 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Truestack</p>
                    <Link href="mailto:hello@truestack.my" className="text-primary hover:underline">
                      hello@truestack.my
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
