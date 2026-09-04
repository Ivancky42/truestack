import { getLocale, getTranslations } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import {
	ACCOUNT_MANAGEMENT_PAGE_PATH,
	buildAccountManagementJsonLd,
} from "@/lib/account-management-seo";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";

export async function AccountManagementSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations("AccountManagement");
	const schema = buildAccountManagementJsonLd({
		pageUrl: absoluteLocalizedUrl(ACCOUNT_MANAGEMENT_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		webpageName: t("meta.openGraphTitle"),
		description: t("meta.description"),
		inLanguage: inLanguage[locale],
		serviceName: t("schema.serviceName"),
		alternateName: t.raw("schema.alternateName") as string[],
		serviceType: t("schema.serviceType"),
		audienceType: t("schema.audienceType"),
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
