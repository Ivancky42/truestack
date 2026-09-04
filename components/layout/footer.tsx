import { getTranslations } from "next-intl/server";
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

/** Same grouping as the Solutions menu in `header.tsx`. Labels come from messages. */
const solutionsColumns = [
  {
    key: "services",
    links: [
      { href: "/services/digital-license", key: "digitalLicense" },
      { href: "/services/digital-license#shariah", key: "shariahLicense" },
      { href: "/services/account-management", key: "accountManagement" },
      { href: "/services/software-development", key: "softwareDevelopment" },
    ],
  },
  {
    key: "platforms",
    links: [
      { href: "/truekredit", key: "truekredit" },
      { href: "/truesyariah", key: "truesyariah" },
      { href: "/services/p2p-software-development", key: "truep2p" },
    ],
  },
  {
    key: "apis",
    links: [
      { href: "/trueidentity", key: "trueidentity" },
      { href: "/truessm", key: "truessm" },
      { href: "/contact?subject=Payments", key: "payments" },
      {
        href: "https://developers.truestack.my",
        key: "developers",
        external: true,
      },
    ],
  },
] as const;

const footerLinks = {
  company: [
    { href: "/about", key: "about" },
    { href: "/work", key: "work" },
    { href: "/insights", key: "insights" },
    { href: "/careers", key: "careers" },
    { href: "/contact", key: "contact" },
  ],
  legal: [
    { href: "/cybersecurity", key: "cybersecurity" },
    { href: "/pdpa", key: "pdpa" },
    { href: "/privacy", key: "privacy" },
    { href: "/terms", key: "terms" },
  ],
} as const;

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
          <li key={link.href}>
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

export async function Footer() {
  const t = await getTranslations("Footer");
  const contactClassName =
    "inline-flex items-center gap-2 type-ui text-muted-foreground transition-colors hover:text-primary";

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <nav aria-label={t("navLabel")}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {solutionsColumns.map((column) => (
              <LinkColumn
                key={column.key}
                heading={t(`columns.${column.key}`)}
                links={column.links.map((link) => ({
                  href: link.href,
                  label: t(`solutions.${link.key}`),
                  external: "external" in link ? link.external : undefined,
                }))}
              />
            ))}
            <LinkColumn
              heading={t("columns.company")}
              links={footerLinks.company.map((link) => ({
                href: link.href,
                label: t(`company.${link.key}`),
              }))}
            />
            <LinkColumn
              heading={t("columns.legal")}
              links={footerLinks.legal.map((link) => ({
                href: link.href,
                label: t(`legal.${link.key}`),
              }))}
            />
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
                {t("tagline")}
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
                  <span>{t("linkedin")}</span>
                </a>
              </div>
              <Button asChild size="lg" className="mt-6 gap-2">
                <Link href="/contact">
                  <MessageSquare className="h-4 w-4" />
                  {t("bookConsultation")}
                </Link>
              </Button>
            </div>

            <div className="space-y-2 lg:pt-1">
              <p className="type-ui font-medium text-foreground">
                {legalName.toUpperCase()}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("registration", { number: orgRegistrationNumber })}
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
              {t("copyright", { year: new Date().getFullYear() })}
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
