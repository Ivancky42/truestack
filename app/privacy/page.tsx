import type { Metadata } from "next";
import Link from "next/link";
import {
  Cookie,
  Eye,
  FilePenLine,
  Shield,
  Trash2,
  UserRound,
} from "lucide-react";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { LegalContactCard } from "@/components/legal/legal-contact";
import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { LegalFaq } from "@/components/legal/legal-faq";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalCallout, LegalCard, LegalList } from "@/components/legal/legal-ui";
import { FaqSchema } from "@/components/seo/faq-schema";
import { LegalSchema } from "@/components/seo/legal-schema";
import { privacyFaq } from "@/lib/legal-faq";
import { privacyToc } from "@/lib/legal";
import {
  defaultOgImage,
  defaultTwitterCard,
  legalName,
  siteName,
} from "@/lib/seo-defaults";

const title = "Privacy Policy";
const description =
  "How Truestack Technologies collects, uses and protects personal information on truestack.my and related platforms, in line with Malaysia's PDPA.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["privacy policy", "Truestack", "data protection", "PDPA Malaysia"],
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${title} - Truestack`,
    description,
    url: "/privacy",
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

const rights = [
  {
    title: "Access",
    description: "Ask for a copy of the personal data we hold about you.",
    icon: Eye,
  },
  {
    title: "Correction",
    description: "Request correction of inaccurate or outdated data.",
    icon: FilePenLine,
  },
  {
    title: "Withdraw consent",
    description: "Withdraw consent for processing that relies on it.",
    icon: UserRound,
  },
  {
    title: "Deletion",
    description: "Request deletion, subject to legal and audit requirements.",
    icon: Trash2,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalSchema path="/privacy" name={title} description={description} />
      <FaqSchema items={privacyFaq} />

      <LegalHero
        eyebrow="Legal"
        title="How we handle your information."
        titleMuted="And what you can ask us to do with it."
        lede="This policy explains how Truestack collects, uses, discloses, and safeguards personal information when you visit our website or use related systems we operate."
        currentPath="/privacy"
      />

      <LegalDocument toc={privacyToc}>
        <LegalSection id="introduction" title="1. Introduction">
          <p>
            {legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
            is committed to protecting your privacy. This Privacy Policy covers
            truestack.my and related hosts we operate — including the developer
            portal and demonstration environments.
          </p>
          <LegalCallout icon={Shield}>
            We comply with the <strong>Personal Data Protection Act 2010 (PDPA)</strong>{" "}
            of Malaysia and other applicable data protection laws. For the
            Malaysia-specific notice — including TrueIdentity™ e-KYC — see our{" "}
            <Link href="/pdpa" className="font-medium text-primary hover:underline">
              PDPA Notice
            </Link>
            .
          </LegalCallout>
        </LegalSection>

        <LegalSection id="collect" title="2. Information we collect">
          <div>
            <h3 className="mb-3 type-subhead text-foreground">
              Information you provide
            </h3>
            <p className="mb-3">
              We may collect information you voluntarily provide, including:
            </p>
            <LegalList
              items={[
                "Name and contact information (email address, phone number)",
                "Company name and job title",
                "Information submitted through contact, consultation, or careers forms",
                "Any other information you choose to provide",
              ]}
            />
          </div>
          <div>
            <h3 className="mb-3 type-subhead text-foreground">
              Automatically collected information
            </h3>
            <p className="mb-3">When you visit our website, we may collect:</p>
            <LegalList
              items={[
                "Browser type and version",
                "Operating system",
                "IP address",
                "Pages visited and time spent on pages",
                "Referring website addresses",
              ]}
            />
          </div>
        </LegalSection>

        <LegalSection id="use" title="3. How we use your information">
          <p>We use the information we collect to:</p>
          <LegalList
            items={[
              "Respond to your enquiries and provide customer support",
              "Send you information about our services that may interest you",
              "Improve our website and services",
              "Understand website usage and trends",
              "Comply with legal obligations",
            ]}
          />
        </LegalSection>

        <LegalSection id="disclosure" title="4. Disclosure of your information">
          <p>We may share your information with:</p>
          <LegalList
            items={[
              "Service providers who assist in our operations",
              "Professional advisors (lawyers, accountants)",
              "Regulatory authorities when required by law",
            ]}
          />
          <LegalCallout icon={Shield}>
            We do not sell, trade, or rent your personal information to third
            parties for marketing purposes.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="security" title="5. Data security">
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access,
            alteration, disclosure, or destruction. No method of transmission
            over the internet is completely secure. A public overview is in our{" "}
            <Link href="/cybersecurity" className="font-medium text-primary hover:underline">
              Cybersecurity Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection id="retention" title="6. Data retention">
          <p>
            We retain your personal information only for as long as necessary to
            fulfil the purposes for which it was collected, or as required by
            applicable laws and regulations.
          </p>
        </LegalSection>

        <LegalSection id="rights" title="7. Your rights">
          <p>Under the PDPA, you have the right to:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {rights.map((right) => (
              <LegalCard key={right.title} icon={right.icon} title={right.title}>
                {right.description}
              </LegalCard>
            ))}
          </div>
        </LegalSection>

        <LegalSection id="cookies" title="8. Cookies">
          <p>
            We use cookies and similar technologies that are needed for the
            website to function — for example to keep a page session working.
            We do not currently use advertising cookies or third-party marketing
            pixels on truestack.my.
          </p>
          <LegalCallout icon={Cookie}>
            You can set your browser to refuse cookies. Essential cookies may
            still be required for the site to load. If we add analytics or
            marketing cookies later, we will update this section.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="links" title="9. Third-party links">
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites. We encourage
            you to review their privacy policies.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="10. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. We will post
            the revised policy on this page and update the &quot;Last
            updated&quot; date.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="11. Contact us">
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            your rights, contact us. For TrueIdentity™ and other regulated
            processing, see the{" "}
            <Link href="/pdpa" className="font-medium text-primary hover:underline">
              PDPA Notice
            </Link>
            .
          </p>
          <LegalContactCard />
        </LegalSection>

        <LegalFaq items={privacyFaq} />
      </LegalDocument>

      <ConsultationCta
        heading="Questions about your data?"
        body="If you want this policy explained for a customer agreement or an e-KYC rollout, book a free consultation. No obligation."
        extraLinks={[
          { href: "/pdpa", label: "PDPA Notice" },
          { href: "/cybersecurity", label: "Cybersecurity Policy" },
          { href: "/terms", label: "Terms of Use" },
        ]}
      />
    </>
  );
}
