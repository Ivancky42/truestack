import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { Link } from "@/i18n/navigation";
import {
  AlertTriangle,
  Building2,
  Database,
  FileCheck,
  Fingerprint,
  Lock,
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
import { identityApiHost } from "@/lib/legal";
import { pdpaFaq } from "@/lib/legal-faq";
import { pdpaToc } from "@/lib/legal";
import {
  defaultOgImage,
  defaultTwitterCard,
  legalName,
  siteName,
} from "@/lib/seo-defaults";

const title = "PDPA Notice";
const description =
  "Notice under Malaysia's PDPA 2010 on how Truestack processes personal data for TrueIdentity™ e-KYC, lending platforms, and KPKT compliance services.";

const pageMetadata: Metadata = {
  title,
  description,
  keywords: [
    "PDPA Malaysia",
    "PDPA notice",
    "TrueIdentity KYC",
    "personal data protection",
    "Truestack",
  ],
  alternates: { canonical: "/pdpa" },
  openGraph: {
    title: `${title} - Truestack`,
    description,
    url: "/pdpa",
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(pageMetadata, "/pdpa", resolveAppLocale(locale), "english-only");
}

const coveredServices = [
  {
    title: "TrueIdentity™ e-KYC",
    description:
      "Identity verification including MyKad OCR, selfie capture, liveness checks, biometric matching, fraud screening, and verification results.",
    icon: Fingerprint,
  },
  {
    title: "TrueKredit™ and TrueSyariah™",
    description:
      "Borrower or customer onboarding and lifecycle records — profiles, repayment or instalment history, compliance documents, and audit trails.",
    icon: Database,
  },
  {
    title: "KPKT compliance services",
    description:
      "Account management and licensing support, including operational and compliance submissions required by Malaysian regulators.",
    icon: FileCheck,
  },
];

export default async function PdpaPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
  const t = await getTranslations("LegalChrome");
  return (
    <>
      <LegalSchema path="/pdpa" name={t("pages.pdpa")} description={description} />
      <FaqSchema items={pdpaFaq} />

      <PageMessages namespaces={["LegalChrome"]}>
      <LegalHero
        eyebrow={t("eyebrow")}
        title={t("pdpa.title")}
        titleMuted={t("pdpa.titleMuted")}
        lede={t("pdpa.lede")}
        currentPath="/pdpa"
      />

      <LegalDocument toc={pdpaToc}>
        <LegalSection id="scope" title="1. Scope of this notice">
          <p>
            This PDPA Notice explains how {legalName} collects, uses, stores, and
            discloses personal data in connection with services delivered through
            truestack.my and related systems.
          </p>
          <p>This notice applies to the following hosts:</p>
          <CoveredSystems />
          <LegalCallout icon={Shield}>
            We process data in accordance with the{" "}
            <strong>Personal Data Protection Act 2010 (Act 709)</strong>, as
            amended, and applicable Malaysian regulatory requirements.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="services" title="2. Services covered">
          <div className="grid gap-4">
            {coveredServices.map((service) => (
              <LegalCard key={service.title} icon={service.icon} title={service.title}>
                {service.description}
              </LegalCard>
            ))}
          </div>
        </LegalSection>

        <LegalSection id="data" title="3. Personal data we process">
          <p>Depending on the service flow, we may process:</p>
          <LegalList
            items={[
              "Identity data (name, IC or passport number, date of birth, contact details)",
              "KYC media and extracted fields (document image, OCR fields, selfie image)",
              "Verification and risk outputs (liveness results, face-match scores, pass or fail)",
              "System and audit records (timestamps, device or browser metadata, activity logs)",
            ]}
          />
          <LegalCallout icon={AlertTriangle} tone="caution">
            KYC workflows may involve <strong>sensitive personal data</strong>{" "}
            under the PDPA — for example, biometric data used for identity
            verification.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="purposes" title="4. Why we process data">
          <p>We process personal data to:</p>
          <LegalList
            items={[
              "Perform identity verification and anti-fraud checks",
              "Deliver requested services and platform features",
              "Support compliance and audit requirements for regulated businesses",
              "Maintain service security, integrity, and incident response",
              "Respond to enquiries, consultations, and job applications on this site",
            ]}
          />
        </LegalSection>

        <LegalSection id="roles" title="5. Controller and processor">
          <div className="grid gap-4">
            <LegalCard icon={Building2} title="When Truestack is the controller">
              We are the data controller for personal data you submit on
              truestack.my — for example a consultation enquiry, careers
              application, or similar form on our marketing site.
            </LegalCard>
            <LegalCard icon={Fingerprint} title="When Truestack is the processor">
              For TrueIdentity™ verification run at a lender&apos;s or
              customer&apos;s request, that business is usually the controller.
              We process the data on their instructions to return a verification
              outcome.
            </LegalCard>
          </div>
        </LegalSection>

        <LegalSection id="disclosure" title="6. Disclosure and transfers">
          <p>We may disclose personal data to:</p>
          <LegalList
            items={[
              "Customers who requested the KYC or verification check",
              "Service providers supporting hosting, infrastructure, and security operations",
              "Regulators or authorities where required by Malaysian law",
            ]}
          />
          <p>
            We do not sell personal data. Any cross-border transfer, where
            applicable, is managed in line with PDPA requirements and equivalent
            safeguards.
          </p>
        </LegalSection>

        <LegalSection id="processors" title="7. Third-party processors">
          <p>
            Where required to deliver our services, we may share limited personal
            data with trusted third-party processors under contractual and
            security controls.
          </p>
          <div className="grid gap-4">
            <LegalCard icon={Fingerprint} title="Innov8tif — e-KYC processing">
              For KYC verification, data shared may include identity fields,
              document images, OCR-extracted data, selfie or liveness media, and
              verification metadata required to return a KYC outcome.{" "}
              <a
                href="https://innov8tif.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                innov8tif.com
              </a>
            </LegalCard>
            <LegalCard icon={FileCheck} title="MSC Trustgate — digital signing">
              For digital signing workflows, data shared may include signer
              identity or contact details, documents and signing package data,
              signature or certificate records, and signing audit metadata.{" "}
              <a
                href="https://www.msctrustgate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                msctrustgate.com
              </a>
            </LegalCard>
            <LegalCard icon={Database} title="CTOS — credit reports">
              For credit assessment workflows, data shared may include identity
              details and identifiers required to retrieve and process credit
              report results, plus related request and response metadata.{" "}
              <a
                href="https://ctoscredit.com.my"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                ctoscredit.com.my
              </a>
            </LegalCard>
          </div>
          <p>
            We share only data that is necessary for the requested service and
            do not authorise processors to use personal data for unrelated
            purposes.
          </p>
        </LegalSection>

        <LegalSection id="security" title="8. Security and retention">
          <div className="flex items-start gap-3">
            <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p>
              We implement technical and organisational controls including access
              control, encryption in transit, and protected storage to reduce
              unauthorised access risk. See our{" "}
              <Link href="/cybersecurity" className="font-medium text-primary hover:underline">
                Cybersecurity Policy
              </Link>{" "}
              for a public overview.
            </p>
          </div>
          <p>
            Data is retained only as long as necessary for service delivery,
            legal or regulatory obligations, dispute handling, and audit
            evidence.
          </p>
        </LegalSection>

        <LegalSection id="rights" title="9. Your rights under the PDPA">
          <p>Subject to applicable legal limitations, you may request to:</p>
          <LegalList
            items={[
              "Access personal data we hold about you",
              "Correct inaccurate, incomplete, or outdated data",
              "Withdraw consent or limit certain processing activities",
              "Request data portability where that right applies under the PDPA as amended",
            ]}
          />
          <p>
            If your data was collected for a lender&apos;s KYC or loan file, we
            may need to refer the request to that business as the controller.
          </p>
        </LegalSection>

        <LegalSection id="kyc" title="10. KYC interface consent notice">
          <LegalCallout icon={Fingerprint}>
            <div className="space-y-3">
              <p>
                When you proceed with a TrueIdentity™ verification interface we
                operate, you acknowledge that personal data — including
                sensitive data required for identity verification — may be
                collected and processed for verification, fraud prevention, and
                compliance.
              </p>
              <p>
                KYC data submitted through a TrueIdentity verification journey
                is processed by backend services on{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
                  {identityApiHost}
                </code>
                .
              </p>
              <p>
                You also acknowledge that verification outcomes may be shared
                with the business that requested your verification.
              </p>
            </div>
          </LegalCallout>
        </LegalSection>

        <LegalSection id="contact" title="11. Contact">
          <p>
            For PDPA data requests or questions about this notice, contact us
            using the details below. Related pages:{" "}
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cybersecurity" className="font-medium text-primary hover:underline">
              Cybersecurity Policy
            </Link>
            .
          </p>
          <LegalContactCard />
        </LegalSection>

        <LegalFaq items={pdpaFaq} />
      </LegalDocument>

      <ConsultationCta
        heading={t("pdpa.cta.heading")}
        body={t("pdpa.cta.body")}
        secondary={{ href: "/privacy", label: t("pdpa.cta.secondary") }}
      />
      </PageMessages>
    </>
  );
}
