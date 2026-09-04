"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Linkedin, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  legalName,
  orgAddressLines,
  orgEmail,
  orgLinkedInUrl,
  orgRegistrationNumber,
  siteName,
} from "@/lib/seo-defaults";

/** Same grouping and labels as the Solutions menu in `header.tsx`. */
const solutionsColumns = [
  {
    heading: "Services",
    links: [
      { href: "/services/digital-license", label: "KPKT Digital Licence" },
      { href: "/services/digital-license#shariah", label: "Shariah Digital Licence" },
      { href: "/services/account-management", label: "KPKT Account Management" },
      { href: "/services/software-development", label: "Custom Software Development" },
    ],
  },
  {
    heading: "Platforms",
    links: [
      { href: "/truekredit", label: "TrueKredit™" },
      { href: "/truesyariah", label: "TrueSyariah™" },
      { href: "/services/p2p-software-development", label: "TrueP2P™" },
    ],
  },
  {
    heading: "APIs",
    links: [
      { href: "/trueidentity", label: "TrueIdentity™" },
      { href: "/truessm", label: "TrueSSM™" },
      { href: "/contact?subject=Payments", label: "Payment gateway" },
      {
        href: "https://developers.truestack.my",
        label: "Developers",
        external: true,
      },
    ],
  },
] as const;

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/insights", label: "Insights" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/cybersecurity", label: "Cybersecurity Policy" },
    { href: "/pdpa", label: "PDPA Notice" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: readonly { href: string; label: string; external?: boolean }[];
}) {
  const linkClassName =
    "type-ui text-muted-foreground transition-colors hover:text-primary";

  return (
    <div>
      <h4 className="mb-4 type-subhead">{heading}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const contactClassName =
    "inline-flex items-center gap-2 type-ui text-muted-foreground transition-colors hover:text-primary";

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <nav aria-label="Footer">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {solutionsColumns.map((column) => (
              <LinkColumn
                key={column.heading}
                heading={column.heading}
                links={column.links}
              />
            ))}
            <LinkColumn heading="Company" links={footerLinks.company} />
            <LinkColumn heading="Legal" links={footerLinks.legal} />
          </div>
        </nav>

        <div className="mt-12 border-t pt-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-md">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/truestack-logo-transparent.png"
                  alt={siteName}
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                  style={{ width: "auto" }}
                />
              </Link>
              <p className="mt-4 type-ui leading-relaxed text-muted-foreground">
                KPKT compliance services and fintech software development for
                licensed money lenders in Malaysia.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a href={`mailto:${orgEmail}`} className={contactClassName}>
                  <Mail className="h-4 w-4" aria-hidden />
                  <span>{orgEmail}</span>
                </a>
                <a
                  href={orgLinkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactClassName}
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  <span>LinkedIn</span>
                </a>
              </div>
              <Button asChild size="lg" className="mt-6 gap-2">
                <Link href="/contact">
                  <MessageSquare className="h-4 w-4" />
                  Book a Free Consultation
                </Link>
              </Button>
            </div>

            <div className="space-y-2 lg:pt-1">
              <p className="type-ui font-medium text-foreground">
                {legalName.toUpperCase()}
              </p>
              <p className="text-sm text-muted-foreground">
                Registration No. {orgRegistrationNumber}
              </p>
              <address className="text-sm not-italic leading-relaxed text-muted-foreground">
                {orgAddressLines[0]}
                <br />
                {orgAddressLines[1]}
                <br />
                {orgAddressLines[2]}
              </address>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
            <a href="https://aws.amazon.com/what-is-cloud-computing">
              {/* Official AWS embed — do not optimize or restyle the mark. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://d0.awsstatic.com/logos/powered-by-aws.png"
                alt="Powered by AWS Cloud Computing"
                className="h-9 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
