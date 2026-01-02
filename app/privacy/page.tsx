import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Truestack. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            How we collect, use, and protect your personal information
          </p>
          <Badge variant="secondary" className="mt-4">
            Last updated: January 2026
          </Badge>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Truestack (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or engage with our services.
                </p>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <Shield className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm text-foreground">
                      We comply with the <strong>Personal Data Protection Act 2010 (PDPA)</strong> of Malaysia 
                      and other applicable data protection laws.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-medium">Information You Provide</h3>
                  <p className="mb-3 text-muted-foreground">
                    We may collect information that you voluntarily provide to us, including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Name and contact information (email address, phone number)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Company name and job title
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Information provided through our contact forms
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Any other information you choose to provide
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-medium">Automatically Collected Information</h3>
                  <p className="mb-3 text-muted-foreground">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Browser type and version
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Operating system
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      IP address
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Pages visited and time spent on pages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      Referring website addresses
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="mb-3 text-muted-foreground">We use the information we collect to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Respond to your inquiries and provide customer support
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Send you information about our services that may interest you
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Improve our website and services
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Analyze website usage and trends
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Comply with legal obligations
                </li>
              </ul>
            </div>

            {/* Disclosure */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">4. Disclosure of Your Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We may share your information with:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Service providers who assist in our operations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Professional advisors (lawyers, accountants)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    Regulatory authorities when required by law
                  </li>
                </ul>
                <Card className="border-green-500/20 bg-green-500/5">
                  <CardContent className="pt-4">
                    <p className="text-sm font-medium text-foreground">
                      We do not sell, trade, or rent your personal information to third parties 
                      for marketing purposes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect 
                your personal information against unauthorized access, alteration, disclosure, 
                or destruction. However, no method of transmission over the Internet is 
                100% secure.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">6. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill 
                the purposes for which it was collected, or as required by applicable laws 
                and regulations.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">7. Your Rights</h2>
              <p className="mb-4 text-muted-foreground">Under the PDPA, you have the right to:</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-medium">Access</p>
                    <p className="text-sm text-muted-foreground">
                      Access your personal data held by us
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-medium">Correction</p>
                    <p className="text-sm text-muted-foreground">
                      Request correction of inaccurate data
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-medium">Withdraw Consent</p>
                    <p className="text-sm text-muted-foreground">
                      Withdraw consent for data processing
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4">
                    <p className="font-medium">Deletion</p>
                    <p className="text-sm text-muted-foreground">
                      Request deletion (subject to legal requirements)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">8. Cookies</h2>
              <p className="text-muted-foreground">
                Our website may use cookies and similar tracking technologies to enhance 
                your browsing experience. You can set your browser to refuse cookies, but 
                this may limit your ability to use some features of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">9. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices of these external sites. We encourage you to review 
                their privacy policies.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">11. Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about this Privacy Policy or wish to exercise 
                your rights, please contact us:
              </p>
              <Card>
                <CardContent className="flex items-center gap-4 pt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Truestack</p>
                    <Link 
                      href="mailto:hello@truestack.my" 
                      className="text-primary hover:underline"
                    >
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
