import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Mail, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Truestack website. Read our terms and conditions for using our website and services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Terms of Use</h1>
          <p className="text-lg text-muted-foreground">
            Terms and conditions for using our website
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
            {/* Acceptance */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website (truestack.my), you accept and agree 
                to be bound by these Terms of Use. If you do not agree to these terms, 
                please do not use this website.
              </p>
            </div>

            {/* About */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">2. About Truestack</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Truestack provides KPKT compliance services and fintech software development 
                  for licensed money lenders in Malaysia.
                </p>
                <Card className="border-amber-500/20 bg-amber-500/5">
                  <CardContent className="flex items-start gap-3 pt-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-foreground">
                      This website is for <strong>informational purposes only</strong> and does not 
                      constitute an offer or solicitation for services.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">3. Use of Website</h2>
              <p className="mb-3 text-muted-foreground">
                You agree to use this website only for lawful purposes and in a way that:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Does not infringe the rights of others
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Does not restrict or inhibit anyone else&apos;s use of the website
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Does not attempt to gain unauthorized access to any part of the website
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Does not transmit any harmful code or malware
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">4. Intellectual Property</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All content on this website, including but not limited to text, graphics, 
                  logos, images, and software, is the property of Truestack or its content 
                  suppliers and is protected by Malaysian and international copyright laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from 
                  any content on this website without our prior written consent.
                </p>
              </div>
            </div>

            {/* Information Accuracy */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">5. Information Accuracy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  While we strive to provide accurate and up-to-date information, we make no 
                  representations or warranties about the completeness, accuracy, reliability, 
                  or suitability of the information on this website.
                </p>
                <Card>
                  <CardContent className="pt-4">
                    <p className="text-sm">
                      Information about our services, including pricing, is subject to change 
                      without notice. Please <Link href="/contact" className="text-primary hover:underline">contact us</Link> for 
                      the most current information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* No Professional Advice */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">6. No Professional Advice</h2>
              <p className="text-muted-foreground">
                The content on this website is for general informational purposes only and 
                does not constitute professional advice. For specific advice regarding KPKT 
                compliance, legal matters, or financial decisions, please consult with 
                appropriate professionals.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">7. Third-Party Links</h2>
              <p className="text-muted-foreground">
                This website may contain links to third-party websites. These links are 
                provided for your convenience only. We have no control over and assume no 
                responsibility for the content, privacy policies, or practices of any 
                third-party websites.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">8. Limitation of Liability</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Truestack shall not be liable for 
                  any indirect, incidental, special, consequential, or punitive damages 
                  arising out of or relating to your use of this website.
                </p>
                <p>
                  Our total liability for any claims arising from your use of this website 
                  shall not exceed the amount you paid to us, if any, for accessing the website.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">9. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Truestack, its officers, directors, 
                employees, and agents from any claims, damages, losses, or expenses arising 
                from your use of this website or violation of these Terms of Use.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">10. Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Use at any time. Changes will 
                be effective immediately upon posting to this website. Your continued use of 
                the website after any changes constitutes your acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">11. Governing Law</h2>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-4">
                  <p className="text-sm">
                    These Terms of Use shall be governed by and construed in accordance with the 
                    <strong> laws of Malaysia</strong>. Any disputes arising from these terms shall be subject to 
                    the exclusive jurisdiction of the courts of Malaysia.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Severability */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">12. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms of Use is found to be unenforceable, the 
                remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-4 text-2xl font-semibold">13. Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about these Terms of Use, please contact us:
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
