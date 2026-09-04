import { getLocale } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
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
export async function WebSiteSchema() {
  const locale = resolveAppLocale(await getLocale());
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: [...siteNameAlternates],
    url: siteUrl,
    description:
      "KPKT digital licence conversion, account management, and TrueKredit™ loan management software for licensed money lenders in Malaysia.",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: inLanguage[locale],
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
