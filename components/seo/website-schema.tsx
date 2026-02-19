const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

/**
 * JSON-LD WebSite schema for sitelinks search box and better site understanding.
 * Helps Google show sitelinks and understand site structure.
 * Validate at: https://validator.schema.org/
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Truestack",
    url: baseUrl,
    description:
      "KPKT account management, digital license conversion, and custom fintech software development for licensed money lenders in Malaysia.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-MY",
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
