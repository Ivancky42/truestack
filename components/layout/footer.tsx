import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/account-management", label: "KPKT Account Management" },
    { href: "/services/digital-license", label: "Digital KPKT License" },
    { href: "/services/software-development", label: "Custom Software" },
  ],
  products: [
    { href: "https://core.truestack.my", label: "TrueIdentity™", external: true },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/truestack-logo-transparent.svg"
                alt="Truestack"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              KPKT compliance services and fintech software development for licensed money lenders in Malaysia.
            </p>
            <a
              href="mailto:hello@truestack.my"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary group"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              hello@truestack.my
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            {/* Company Registration */}
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground/80">
                TRUESTACK TECHNOLOGIES SDN. BHD.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Registration No. 202501058714 (1660120-X)
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground/30">·</span>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-6 text-center text-xs text-muted-foreground/60 sm:text-left">
            © {new Date().getFullYear()} Truestack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
