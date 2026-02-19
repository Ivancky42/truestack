const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

/**
 * JSON-LD Organization schema for Google Knowledge Graph / Knowledge Panel.
 * Helps Google understand your business and may surface in search results.
 * Validate at: https://validator.schema.org/
 *
 * When you have them, add to improve Knowledge Panel eligibility:
 * - sameAs: [LinkedIn, Twitter, Facebook URLs]
 * - telephone in contactPoint
 * - streetAddress, addressLocality, postalCode in address
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "Truestack",
    alternateName: "True Stack",
    url: baseUrl,
    logo: `${baseUrl}/truestack-logo-transparent.svg`,
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
      addressRegion: "Malaysia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@truestack.my",
      contactType: "customer service",
      url: `${baseUrl}/contact`,
      areaServed: "MY",
      availableLanguage: "English",
    },
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
