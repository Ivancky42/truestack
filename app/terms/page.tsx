import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, KeyRound, MonitorPlay, Scale } from "lucide-react";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { LegalContactCard } from "@/components/legal/legal-contact";
import { LegalDocument, LegalSection } from "@/components/legal/legal-document";
import { LegalFaq } from "@/components/legal/legal-faq";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalCallout, LegalCard, LegalList } from "@/components/legal/legal-ui";
import { FaqSchema } from "@/components/seo/faq-schema";
import { LegalSchema } from "@/components/seo/legal-schema";
import { termsFaq } from "@/lib/legal-faq";
import { termsToc } from "@/lib/legal";
import {
  defaultOgImage,
  defaultTwitterCard,
  legalName,
  orgRegistrationNumber,
  siteName,
} from "@/lib/seo-defaults";

const title = "Terms of Use";
const description =
  "Terms of use for truestack.my, the developer portal and demonstration environments operated by Truestack Technologies Sdn. Bhd. in Malaysia.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["terms of use", "Truestack", "terms and conditions"],
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${title} - Truestack`,
    description,
    url: "/terms",
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

export default function TermsOfUsePage() {
  return (
    <>
      <LegalSchema path="/terms" name={title} description={description} />
      <FaqSchema items={termsFaq} />

      <LegalHero
        eyebrow="Legal"
        title="The rules for using this site."
        titleMuted="And our related Truestack systems."
        lede="These terms apply when you use truestack.my and the related demonstration and developer systems we operate. Paid products are licensed under a separate customer agreement."
        currentPath="/terms"
      />

      <LegalDocument toc={termsToc}>
        <LegalSection id="acceptance" title="1. Acceptance of terms">
          <p>
            By accessing and using this website (truestack.my) or related
            systems we operate, you accept and agree to be bound by these Terms
            of Use. If you do not agree, please do not use those systems.
          </p>
        </LegalSection>

        <LegalSection id="about" title="2. About Truestack">
          <p>
            {legalName} (Registration No. {orgRegistrationNumber}) provides
            KPKT compliance services and fintech software for licensed money
            lenders in Malaysia — including TrueKredit™, TrueSyariah™,
            TrueIdentity™, and TrueSSM™.
          </p>
          <LegalCallout icon={AlertTriangle} tone="caution">
            This website is for <strong>informational purposes only</strong> and
            does not constitute an offer or solicitation for services.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="scope" title="3. What these terms cover">
          <p>These terms cover:</p>
          <LegalList
            items={[
              "The marketing site at truestack.my",
              "The developer portal at developers.truestack.my",
              "Demonstration environments at demo.truestack.my and demo-admin.truestack.my",
              "Related informational or evaluation access we provide without a signed customer agreement",
            ]}
          />
          <p>
            Use of TrueKredit™, TrueSyariah™, TrueIdentity™, or other paid
            products in production is governed by the customer agreement for
            that service — not these website terms alone.
          </p>
        </LegalSection>

        <LegalSection id="use" title="4. Acceptable use">
          <p>
            You agree to use these systems only for lawful purposes and in a
            way that:
          </p>
          <LegalList
            items={[
              "Does not infringe the rights of others",
              "Does not restrict or inhibit anyone else's use of the website",
              "Does not attempt to gain unauthorised access to any part of the systems",
              "Does not transmit any harmful code or malware",
              "Does not scrape, overload, or disrupt the services",
              "Does not use demonstration or developer access to process live borrower data without our written agreement",
            ]}
          />
        </LegalSection>

        <LegalSection id="demo" title="5. Demos and developer access">
          <div className="grid gap-4">
            <LegalCard
              icon={MonitorPlay}
              title="Demonstration environments"
            >
              demo.truestack.my and demo-admin.truestack.my are for evaluation
              only. They may be reset, carry no production uptime commitment,
              and must not be used as a live lending system.
            </LegalCard>
            <LegalCard icon={KeyRound} title="Developer portal">
              Access to developers.truestack.my and related credentials is for
              authorised customers and partners. Keep keys confidential. Do not
              attempt to disrupt or misuse the services.
            </LegalCard>
          </div>
        </LegalSection>

        <LegalSection id="ip" title="6. Intellectual property">
          <p>
            All content on this website, including but not limited to text,
            graphics, logos, images, and software, is the property of Truestack
            or its content suppliers and is protected by Malaysian and
            international copyright laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative
            works from any content on this website without our prior written
            consent. Product names including TrueKredit™, TrueSyariah™,
            TrueIdentity™, and TrueSSM™ are trademarks of Truestack.
          </p>
        </LegalSection>

        <LegalSection id="accuracy" title="7. Information accuracy">
          <p>
            While we strive to provide accurate and up-to-date information, we
            make no representations or warranties about the completeness,
            accuracy, reliability, or suitability of the information on this
            website.
          </p>
          <p>
            Information about our services, including pricing, is subject to
            change without notice. Please{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              contact us
            </Link>{" "}
            for the most current information.
          </p>
        </LegalSection>

        <LegalSection id="advice" title="8. No professional advice">
          <p>
            The content on this website is for general informational purposes
            only and does not constitute professional advice. For specific
            advice regarding KPKT compliance, legal matters, or financial
            decisions, consult appropriate professionals.
          </p>
        </LegalSection>

        <LegalSection id="links" title="9. Third-party links">
          <p>
            This website may contain links to third-party websites. These links
            are provided for your convenience only. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of any third-party websites.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="10. Limitation of liability">
          <p>
            To the fullest extent permitted by law, Truestack shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or relating to your use of this
            website or related demonstration and developer systems.
          </p>
          <p>
            Our total liability for any claims arising from your use of this
            website shall not exceed the amount you paid to us, if any, for
            accessing the website.
          </p>
        </LegalSection>

        <LegalSection id="indemnity" title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless Truestack, its officers,
            directors, employees, and agents from any claims, damages, losses,
            or expenses arising from your use of this website or violation of
            these Terms of Use.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="12. Modifications">
          <p>
            We reserve the right to modify these Terms of Use at any time.
            Changes will be effective upon posting to this website. Your
            continued use after any changes constitutes acceptance of the new
            terms.
          </p>
        </LegalSection>

        <LegalSection id="law" title="13. Governing law">
          <LegalCallout icon={Scale}>
            These Terms of Use shall be governed by and construed in accordance
            with the <strong>laws of Malaysia</strong>. Any disputes arising
            from these terms shall be subject to the exclusive jurisdiction of
            the courts of Malaysia.
          </LegalCallout>
        </LegalSection>

        <LegalSection id="contact" title="14. Contact us">
          <p>
            If you have questions about these Terms of Use, contact us. Also
            see our{" "}
            <Link href="/privacy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/pdpa" className="font-medium text-primary hover:underline">
              PDPA Notice
            </Link>
            .
          </p>
          <LegalContactCard />
        </LegalSection>

        <LegalFaq items={termsFaq} />
      </LegalDocument>

      <ConsultationCta
        heading="Need these terms in a customer agreement?"
        body="Website terms are not a product licence. If you are evaluating TrueKredit™ or TrueIdentity™, book a free consultation and we will point you to the right next step."
        secondary={{ href: "/privacy", label: "Privacy Policy" }}
      />
    </>
  );
}
