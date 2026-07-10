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
    name: "Free consultation",
    email: "hello@truestack.my",
    contactType: "sales",
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
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia — including TrueKredit™ for conventional KPKT lending, TrueSyariah™ for Shariah-compliant digital financing, and TrueP2P™ for Securities Commission Malaysia peer-to-peer platform engineering.",
    foundingDate: "2020",
    address,
    contactPoint,
    ...(sameAs.length ? { sameAs } : {}),
    knowsAbout: [
      "KPKT license management",
      "KPKT digital licence Malaysia",
      "KPKT Syariah Digital Lending Licence",
      "Digital license conversion",
      "Fintech software development Malaysia",
      "Lending platform development Malaysia",
      "Money lender software Malaysia",
      "e-KYC verification",
      "Loan management systems",
      "TrueKredit",
      "TrueSyariah",
      "TrueP2P",
      "Islamic digital lending Malaysia",
      "Shariah lending platform Malaysia",
      "Tawarruq financing",
      "Ta'widh and Gharamah accounting",
      "P2P platform development Malaysia",
      "P2P lending platforms",
      "Securities Commission Malaysia P2P",
      "Recognised Market Operator registration",
      "Money lender compliance Malaysia",
    ],
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    makesOffer: {
      "@type": "Offer",
      name: "Free Consultation",
      description:
        "A free, no-obligation consultation on KPKT licensing, compliance, and fintech software for licensed money lenders and fintech operators in Malaysia.",
      price: "0",
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/contact`,
    },
    slogan: "KPKT Services & Fintech Software — Book a Free Consultation",
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
