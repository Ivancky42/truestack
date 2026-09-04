import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { buildContactJsonLd } from "@/lib/contact-seo";

export async function ContactSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations({ locale, namespace: "Contact" });
	const schema = buildContactJsonLd({
		webpageName: t("schema.name"),
		webpageDescription: t("schema.description"),
		inLanguage: inLanguage[locale],
		breadcrumbHome: t("schema.breadcrumbHome"),
		breadcrumbCurrent: t("schema.breadcrumbCurrent"),
		serviceName: t("schema.serviceName"),
		serviceType: t("schema.serviceType"),
		serviceDescription: t("schema.serviceDescription"),
		offerName: t("schema.offerName"),
		offerDescription: t("schema.offerDescription"),
	});

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
