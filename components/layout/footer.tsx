import Link from "next/link";
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
      { href: "/services/digital-license", label: "KPKT Digital License" },
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
    {
      href: "https://developers.truestack.my",
      label: "Developers",
      external: true,
    },
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
    "text-[15px] text-muted-foreground transition-colors hover:text-primary";

  return (
    <div>
      <h4 className="mb-4 text-base font-semibold">{heading}</h4>
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
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* Brand */}
          <div className="sm:col-span-2 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/truestack-logo-transparent.png"
                alt={siteName}
                width={140}
                height={32}
                className="h-8 w-auto"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
              KPKT compliance services and fintech software development for licensed money lenders in Malaysia.
            </p>
            <a
              href={`mailto:${orgEmail}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary group"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="text-[15px]">{orgEmail}</span>
            </a>
            <a
              href={orgLinkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Truestack Technologies on LinkedIn"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
              <span className="text-[15px] font-medium">LinkedIn</span>
            </a>
            <Button asChild size="lg" className="mt-5 w-full gap-2 sm:w-auto">
              <Link href="/contact">
                <MessageSquare className="h-4 w-4" />
                Book a Free Consultation
              </Link>
            </Button>
          </div>

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

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            {/* Company Registration & Address */}
            <div className="space-y-2">
              <p className="text-[15px] font-medium text-foreground/80">
                {legalName.toUpperCase()}
              </p>
              <p className="text-sm text-muted-foreground/70">
                Registration No. {orgRegistrationNumber}
              </p>
              <address className="text-sm not-italic text-muted-foreground/70 leading-relaxed">
                {orgAddressLines[0]}
                <br />
                {orgAddressLines[1]}
                <br />
                {orgAddressLines[2]}
              </address>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/cybersecurity"
                className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
              >
                Security
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link
                href="/pdpa"
                className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
              >
                PDPA
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link
                href="/privacy"
                className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link
                href="/terms"
                className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-center text-sm text-muted-foreground/60 sm:text-left">
            © {new Date().getFullYear()} {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
