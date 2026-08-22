import {
  legalName,
  orgAddress,
  orgEmail,
  orgLinkedInUrl,
  orgLogo,
  orgPhoneE164,
  orgRegistrationNumber,
  siteName,
  siteNameShort,
  siteUrl,
} from "@/lib/seo-defaults";

const baseUrl = siteUrl;

/**
 * Extra profile URLs (comma- or newline-separated), merged with LinkedIn.
 * Use for Wikidata, Crunchbase, etc. once they exist:
 * NEXT_PUBLIC_ORG_SAME_AS=https://www.wikidata.org/wiki/Q…
 */
function extraSameAs(): string[] {
  const raw = process.env.NEXT_PUBLIC_ORG_SAME_AS;
  if (!raw?.trim()) return [];
  return raw
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function orgSameAs(): string[] {
  return [...new Set([orgLinkedInUrl, ...extraSameAs()])];
}

/**
 * JSON-LD Organization schema for Google Knowledge Graph / Knowledge Panel.
 * Validate at: https://validator.schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data/organization
 */
export function OrganizationSchema() {
  const logoUrl = `${baseUrl}${orgLogo.url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteName,
    legalName,
    alternateName: [siteNameShort, "True Stack"],
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      contentUrl: logoUrl,
      width: orgLogo.width,
      height: orgLogo.height,
      caption: siteName,
    },
    image: logoUrl,
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia — including TrueKredit™ for conventional KPKT lending, TrueSyariah™ for Shariah-compliant digital financing, and TrueP2P™ for Securities Commission Malaysia peer-to-peer platform engineering.",
    foundingDate: "2020",
    email: orgEmail,
    telephone: orgPhoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: orgAddress.streetAddress,
      addressLocality: orgAddress.addressLocality,
      addressRegion: orgAddress.addressRegion,
      postalCode: orgAddress.postalCode,
      addressCountry: orgAddress.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      name: "Free consultation",
      email: orgEmail,
      telephone: orgPhoneE164,
      contactType: "sales",
      url: `${baseUrl}/contact`,
      areaServed: "MY",
      availableLanguage: "English",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "SSM Company Registration Number",
      value: orgRegistrationNumber,
    },
    sameAs: orgSameAs(),
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
