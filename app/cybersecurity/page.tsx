import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  Database,
  Eye,
  FileCheck,
  Fingerprint,
  Lock,
  MonitorPlay,
  Shield,
} from "lucide-react";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { LegalContactCard } from "@/components/legal/legal-contact";
import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { LegalFaq } from "@/components/legal/legal-faq";
import { LegalHero } from "@/components/legal/legal-hero";
import {
  CoveredSystems,
  LegalCallout,
  LegalCard,
  LegalList,
} from "@/components/legal/legal-ui";
import { FaqSchema } from "@/components/seo/faq-schema";
import { LegalSchema } from "@/components/seo/legal-schema";
import { cybersecurityFaq } from "@/lib/legal-faq";
import { cybersecurityToc } from "@/lib/legal";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";

const title = "Cybersecurity Policy";
const description =
  "How Truestack protects TrueKredit™, TrueIdentity™ and related systems on Malaysia-hosted infrastructure, with access controls and incident response.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cybersecurity policy",
    "Truestack security",
    "TrueIdentity security",
    "TrueKredit security",
    "Malaysia data residency",
  ],
  alternates: { canonical: "/cybersecurity" },
  openGraph: {
    title: `${title} - Truestack`,
    description,
    url: "/cybersecurity",
    siteName,
    images: [defaultOgImage],
  },
  twitter: {
    card: defaultTwitterCard,
    title: `${title} - Truestack`,
    description,
    images: [defaultOgImage.url],
  },
};

const principles = [
  {
    title: "Malaysia-hosted infrastructure",
    description:
      "We design platforms around Malaysian data residency. Production systems run in the AWS Malaysia region where applicable. TrueKredit™ keeps each lender's data on their own cloud — never mixed with other lenders.",
    icon: Database,
  },
  {
    title: "Protected access",
    description:
      "Administrative and operational access is restricted through role-based permissions and controlled access to sensitive systems and data.",
    icon: Lock,
  },
  {
    title: "Secure applications",
    description:
      "Customer-facing systems such as TrueIdentity™ and TrueKredit™ are built with protected storage and controls intended to reduce unauthorised access.",
    icon: Shield,
  },
  {
    title: "Monitoring and traceability",
    description:
      "We maintain monitoring, alerting, and audit trails to support operational visibility, investigations, and compliance readiness.",
    icon: Eye,
  },
];

const protectedServices = [
  {
    title: "TrueIdentity™ e-KYC",
    description:
      "Identity verification may involve document capture, OCR extraction, selfie and liveness checks, biometric matching, fraud screening, and verification outcomes.",
    icon: Fingerprint,
  },
  {
    title: "TrueKredit™ and TrueSyariah™",
    description:
      "Lending environments may contain borrower profiles, loan or financing records, repayment histories, compliance outputs, and audit-ready documentation.",
    icon: FileCheck,
  },
  {
    title: "Demonstration environments",
    description:
      "demo.truestack.my and demo-admin.truestack.my are isolated evaluation systems. They are not production loan books and may be reset.",
    icon: MonitorPlay,
  },
];

export default function CybersecurityPolicyPage() {
  return (
    <>
      <LegalSchema path="/cybersecurity" name={title} description={description} />
      <FaqSchema items={cybersecurityFaq} />

      <LegalHero
        eyebrow="Legal"
        title="How we protect your systems."
        titleMuted="And the data that lives on them."
        lede="A public overview of how Truestack designs, operates, and protects the systems used to deliver lending software, KPKT compliance services, and e-KYC in Malaysia."
        currentPath="/cybersecurity"
      />

      <LegalDocument toc={cybersecurityToc}>
        <LegalSection id="purpose" title="1. Purpose and scope">
          <p>
            This Cybersecurity Policy explains how Truestack Technologies Sdn. Bhd.
            approaches security across its website, fintech platforms, and related
            service interfaces.
          </p>
          <p>
            It applies to the public hosts listed below and to the products we
            operate on them — including TrueKredit™, TrueSyariah™, TrueIdentity™,
            TrueSSM™, and KPKT compliance services. Extra contractual or
            regulatory controls may apply to a specific customer deployment.
          </p>
          <LegalCallout icon={Shield}>
            This page is a high-level statement for customers, partners, and
            users — not a substitute for a customer security schedule or
            penetration-test report.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="systems" title="2. Systems we cover">
          <p>These Truestack hosts fall under this policy:</p>
          <CoveredSystems />
        </LegalSection>

        <LegalSection id="principles" title="3. Security principles">
          <div className="grid gap-4">
            {principles.map((principle) => (
              <LegalCard
                key={principle.title}
                icon={principle.icon}
                title={principle.title}
              >
                {principle.description}
              </LegalCard>
            ))}
          </div>
        </LegalSection>

        <LegalSection id="controls" title="4. Controls we apply">
          <p>Depending on the service and deployment model, controls may include:</p>
          <LegalList
            items={[
              "Encryption in transit and protected storage for sensitive records",
              "Role-based access control for administrative and operational users",
              "Centralised logging and audit trails for important platform actions",
              "Monitoring and alerting to support detection and response",
              "Redundant or resilient infrastructure for continuity objectives",
            ]}
          />
          <LegalCallout icon={AlertTriangle} tone="caution">
            Some Truestack systems support sensitive financial, identity, or
            biometric workflows. Those environments are subject to stricter
            access, monitoring, and handling expectations.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="services" title="5. Service-specific considerations">
          <div className="grid gap-4">
            {protectedServices.map((service) => (
              <LegalCard key={service.title} icon={service.icon} title={service.title}>
                {service.description}
              </LegalCard>
            ))}
          </div>
          <p>
            The developer portal at{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              developers.truestack.my
            </code>{" "}
            may issue credentials for TrueIdentity™ and related checks. Treat
            those credentials as secrets. Do not commit them to source control
            or share them outside your organisation.
          </p>
        </LegalSection>

        <LegalSection id="incidents" title="6. Incident detection and response">
          <p>
            We aim to detect, assess, contain, and recover from security events
            using monitoring, audit logs, and operational escalation.
          </p>
          <LegalList
            items={[
              "Investigate suspicious activity or anomalous system behaviour",
              "Contain affected services or access paths when necessary",
              "Restore operations and review preventive improvements",
              "Notify relevant customers or authorities when required by law, contract, or regulatory obligation",
            ]}
          />
        </LegalSection>

        <LegalSection id="responsibilities" title="7. Your responsibilities">
          <p>
            Security is a shared responsibility. Customers, partners, and
            authorised users should help protect Truestack systems by:
          </p>
          <LegalList
            items={[
              "Safeguarding login credentials and restricting account sharing",
              "Applying least-privilege access within their organisations",
              "Reporting suspected misuse, vulnerabilities, or incidents promptly",
              "Using supported devices, networks, and browsers when accessing services",
              "Keeping demonstration and developer credentials out of production systems",
            ]}
          />
        </LegalSection>

        <LegalSection id="review" title="8. Policy review">
          <p>
            We may update this policy to reflect changes in our services,
            infrastructure, regulatory obligations, or security practices.
            Updates are published on this page with a revised effective date.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="9. Contact">
          <p>
            To report a security concern, include the affected host or product
            and enough detail for us to investigate. Do not send live personal
            data or exploit code. Related notices:{" "}
            <Link href="/pdpa" className="font-medium text-primary hover:underline">
              PDPA Notice
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <LegalContactCard />
        </LegalSection>

        <LegalFaq items={cybersecurityFaq} />
      </LegalDocument>

      <ConsultationCta
        heading="Questions about how we protect your data?"
        body="Tell us about your KPKT licence, lending platform, or security review. We'll walk through how Truestack hosts and isolates your systems — free, no obligation."
        extraLinks={[
          { href: "/pdpa", label: "PDPA Notice" },
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/trueidentity", label: "TrueIdentity™" },
        ]}
      />
    </>
  );
}
