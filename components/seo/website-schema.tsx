import {
  siteName,
  siteNameAlternates,
  siteUrl,
} from "@/lib/seo-defaults";

/**
 * JSON-LD WebSite schema for Google sitename, sitelinks, and site identity.
 * Must live on the homepage. Validate at: https://validator.schema.org/
 * @see https://developers.google.com/search/docs/appearance/site-names
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: [...siteNameAlternates],
    url: siteUrl,
    description:
      "KPKT account management (pembaharuan lesen PPW / KK, permit iklan), online money lending licence / e-Lending, and money lender software Malaysia for licensed money lenders.",
    publisher: {
      "@id": `${siteUrl}/#organization`,
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
