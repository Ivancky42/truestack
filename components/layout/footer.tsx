import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services", label: "Full-Stack Development" },
    { href: "/services", label: "Cloud Infrastructure" },
    { href: "/services", label: "Third-Party Integrations" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">T</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Truestack</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Fintech software agency. We build digital lending platforms, payment systems, and financial applications.
            </p>
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
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Truestack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

