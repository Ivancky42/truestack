import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

/** Same grouping and labels as the Solutions menu in `header.tsx`. */
const solutionsColumns = [
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
  {
    heading: "Services",
    links: [
      { href: "/services/digital-license", label: "KPKT Digital License" },
      { href: "/services/account-management", label: "KPKT Account Management" },
      { href: "/services/software-development", label: "Custom Software Development" },
    ],
  },
] as const;

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
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
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-base font-semibold">{heading}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
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
                alt="Truestack"
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
              href="mailto:hello@truestack.my"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary group"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="text-[15px]">hello@truestack.my</span>
            </a>
            <a
              href="https://www.linkedin.com/company/truestack-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Truestack Technologies on LinkedIn"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden />
              <span className="text-[15px] font-medium">LinkedIn</span>
            </a>
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
                TRUESTACK TECHNOLOGIES SDN. BHD.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Registration No. 202501058714 (1660120-X)
              </p>
              <address className="text-sm not-italic text-muted-foreground/70 leading-relaxed">
                Lot C-13-3, KL Trillion<br />
                No 338 Jalan Tun Razak<br />
                50400 Kuala Lumpur
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
            © {new Date().getFullYear()} Truestack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
