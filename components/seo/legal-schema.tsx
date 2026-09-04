import { getLocale } from "next-intl/server";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import {
  LEGAL_DATE_MODIFIED,
  type LegalPolicyHref,
} from "@/lib/legal";
import { siteName, siteUrl } from "@/lib/seo-defaults";

type LegalSchemaProps = {
  path: LegalPolicyHref;
  name: string;
  description: string;
};

export async function LegalSchema({ path, name, description }: LegalSchemaProps) {
  const locale = resolveAppLocale(await getLocale());
  const url = `${siteUrl}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name,
    description,
    url,
    dateModified: LEGAL_DATE_MODIFIED,
    inLanguage: inLanguage[locale],
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: siteName, path: "/" },
          { name, path },
        ]}
      />
    </>
  );
}
