const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

/**
 * Optional env (comma- or newline-separated URLs), e.g. LinkedIn company page:
 * NEXT_PUBLIC_ORG_SAME_AS=https://www.linkedin.com/company/your-org
 *
 * NEXT_PUBLIC_ORG_PHONE — E.164 or local format as published on the site
 * NEXT_PUBLIC_ORG_STREET_ADDRESS, NEXT_PUBLIC_ORG_ADDRESS_LOCALITY, NEXT_PUBLIC_ORG_POSTAL_CODE
 */
function orgSameAs(): string[] {
  const raw = process.env.NEXT_PUBLIC_ORG_SAME_AS;
  if (!raw?.trim()) return [];
  return raw
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * JSON-LD Organization schema for Google Knowledge Graph / Knowledge Panel.
 * Validate at: https://validator.schema.org/
 */
export function OrganizationSchema() {
  const sameAs = orgSameAs();
  const street = process.env.NEXT_PUBLIC_ORG_STREET_ADDRESS?.trim();
  const locality = process.env.NEXT_PUBLIC_ORG_ADDRESS_LOCALITY?.trim();
  const postal = process.env.NEXT_PUBLIC_ORG_POSTAL_CODE?.trim();
  const phone = process.env.NEXT_PUBLIC_ORG_PHONE?.trim();

  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressCountry: "MY",
    addressRegion: "Malaysia",
  };
  if (street) address.streetAddress = street;
  if (locality) address.addressLocality = locality;
  if (postal) address.postalCode = postal;

  const contactPoint: Record<string, unknown> = {
    "@type": "ContactPoint",
    email: "hello@truestack.my",
    contactType: "customer service",
    url: `${baseUrl}/contact`,
    areaServed: "MY",
    availableLanguage: "English",
  };
  if (phone) contactPoint.telephone = phone;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Truestack",
    alternateName: "True Stack",
    url: baseUrl,
    logo: `${baseUrl}/truestack-logo-transparent.png`,
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
    foundingDate: "2020",
    address,
    contactPoint,
    ...(sameAs.length ? { sameAs } : {}),
    knowsAbout: [
      "KPKT license management",
      "Digital license conversion",
      "Fintech software development",
      "e-KYC verification",
      "Loan management systems",
      "P2P lending platforms",
      "Money lender compliance Malaysia",
    ],
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    slogan: "KPKT Services & Fintech Software for Licensed Money Lenders",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
