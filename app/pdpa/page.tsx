import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Fingerprint,
  Database,
  FileCheck,
  Lock,
  Mail,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "PDPA Notice",
  description:
    "PDPA Notice for Truestack services, including TrueIdentity e-KYC. Learn how personal data is collected and processed under Malaysian law.",
  keywords: [
    "PDPA Malaysia",
    "PDPA notice",
    "TrueIdentity KYC",
    "personal data protection",
    "Truestack",
  ],
  alternates: { canonical: "/pdpa" },
  openGraph: {
    title: "PDPA Notice - Truestack",
    description:
      "Malaysia PDPA notice covering Truestack services and TrueIdentity e-KYC data processing.",
  },
};

const coveredServices = [
  {
    title: "TrueIdentity e-KYC",
    description:
      "Identity verification workflows including MyKad OCR, selfie capture, liveness checks, biometric matching, fraud screening, and verification results.",
    icon: Fingerprint,
  },
  {
    title: "TrueKredit",
    description:
      "Borrower onboarding and loan lifecycle records, including customer profiles, repayment records, compliance documents, and audit trails.",
    icon: Database,
  },
  {
    title: "KPKT Compliance Services",
    description:
      "Account management and licensing support, including operational and compliance submissions required by Malaysian regulators.",
    icon: FileCheck,
  },
];

const coveredDomains = [
  "truestack.my",
  "admin.truestack.my",
  "kredit.truestack.my",
  "kredit-api.truestack.my",
  "core.truestack.my",
  "api.truestack.my",
];

export default function PdpaPage() {
  return (
    <>
      <section className="border-b bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">PDPA Notice</h1>
          <p className="text-lg text-muted-foreground">
            Notice and choice statement under Malaysia&apos;s Personal Data Protection
            Act 2010 (PDPA), including our KYC verification interface.
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
              <h2 className="mb-4 text-2xl font-semibold">1. Scope of this Notice</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This PDPA Notice explains how Truestack collects, uses, stores, and
                  discloses personal data in connection with services delivered through{" "}
                  <strong>truestack.my</strong> and related service interfaces,
                  including identity verification journeys.
                </p>
                <div>
                  <p className="mb-2">This notice applies to the following domains and systems:</p>
                  <ul className="space-y-2">
                    {coveredDomains.map((domain) => (
                      <li key={domain} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <code className="rounded bg-muted px-1.5 py-0.5 text-sm">{domain}</code>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">
                      We process data in accordance with the{" "}
                      <strong>Personal Data Protection Act 2010 (Act 709)</strong> and
                      applicable Malaysian regulatory requirements.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">2. Services Covered</h2>
              <div className="grid gap-4 sm:grid-cols-1">
                {coveredServices.map((service) => (
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
              <h2 className="mb-4 text-2xl font-semibold">3. Personal Data We Process</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Depending on the service flow, we may process:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Identity data (name, IC/passport number, date of birth, contact details)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    KYC media and extracted fields (document image, OCR fields, selfie image)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Verification and risk outputs (liveness results, face-match scores, pass/fail)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    System and audit records (timestamps, device/browser metadata, activity logs)
                  </li>
                </ul>
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-foreground">
                      KYC workflows may involve <strong>sensitive personal data</strong>{" "}
                      under PDPA (for example, biometric data used for identity verification).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">4. Why We Process Data</h2>
              <p className="mb-3 text-muted-foreground">We process personal data to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Perform identity verification and anti-fraud checks
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Deliver requested services and platform features
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Support compliance and audit requirements for regulated businesses
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Maintain service security, integrity, and incident response
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">5. Disclosure and Transfers</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We may disclose personal data to:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Customers who requested the KYC/verification check
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Service providers supporting hosting, infrastructure, and security operations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Regulators or authorities where required by Malaysian law
                  </li>
                </ul>
                <p>
                  We do not sell personal data. Any cross-border transfer, where applicable,
                  is managed in line with PDPA requirements and equivalent safeguards.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">
                6. Third-Party Processors and Data Shared
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Where required to deliver our services, we may share limited personal data
                  with trusted third-party processors under contractual and security controls.
                </p>
                <Card>
                  <CardContent className="space-y-4 pt-4">
                    <div>
                      <p className="font-medium text-foreground">
                        Innov8tif (
                        <a
                          href="https://innov8tif.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          innov8tif.com
                        </a>
                        ) - e-KYC processing provider
                      </p>
                      <p className="mt-1 text-sm">
                        For KYC verification, data shared may include identity fields,
                        document images, OCR-extracted data, selfie/liveness media, and
                        verification metadata required to return a KYC outcome.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        MSC Trustgate (
                        <a
                          href="https://www.msctrustgate.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          msctrustgate.com
                        </a>
                        ) - digital signing/certificate services provider
                      </p>
                      <p className="mt-1 text-sm">
                        For digital signing workflows, data shared may include signer
                        identity/contact details, documents and signing package data,
                        signature/certificate records, and signing audit metadata.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        CTOS (
                        <a
                          href="https://ctoscredit.com.my"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          ctoscredit.com.my
                        </a>
                        ) - credit report processing provider
                      </p>
                      <p className="mt-1 text-sm">
                        For credit assessment workflows, data shared may include identity
                        details and identifiers required to retrieve and process credit
                        report results, plus related request/response metadata.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <p>
                  We share only data that is necessary for the requested service and do not
                  authorise third-party processors to use personal data for unrelated purposes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">7. Security and Retention</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p>
                    We implement technical and organisational controls including access control,
                    encryption in transit, and protected storage to reduce unauthorised access risk.
                  </p>
                </div>
                <p>
                  Data is retained only as long as necessary for service delivery, legal/regulatory
                  obligations, dispute handling, and audit evidence.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">8. Your Rights Under PDPA</h2>
              <p className="mb-3 text-muted-foreground">
                Subject to applicable legal limitations, you may request to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Access personal data we hold about you
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Correct inaccurate, incomplete, or outdated data
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Withdraw consent or limit certain processing activities
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">
                9. KYC Interface Consent Notice
              </h2>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="space-y-3 pt-4 text-sm text-foreground">
                  <p>
                    When you proceed with the KYC interface on{" "}
                    <code className="rounded bg-muted px-1.5 py-0.5 text-sm">core.truestack.my</code>,
                    you acknowledge that personal data (including sensitive data required for
                    identity verification) may be collected and processed for verification,
                    fraud prevention, and compliance.
                  </p>
                  <p>
                    KYC data submitted through{" "}
                    <code className="rounded bg-muted px-1.5 py-0.5 text-sm">core.truestack.my</code>{" "}
                    is processed by backend services on{" "}
                    <code className="rounded bg-muted px-1.5 py-0.5 text-sm">api.truestack.my</code>.
                  </p>
                  <p>
                    You also acknowledge that verification outcomes may be shared with the
                    business that requested your verification.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">10. Contact</h2>
              <p className="mb-4 text-muted-foreground">
                For PDPA data requests or questions about this notice, contact:
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
