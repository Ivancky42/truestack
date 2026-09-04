import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { WorkPageContent } from "@/components/sections/work-page-content";
import { WorkSchema } from "@/components/seo/work-schema";
import { WORK_PAGE_PATH } from "@/lib/work-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale: raw } = await params;
	const locale = resolveAppLocale(raw);
	setRequestLocale(locale);
	const t = await getTranslations({ locale, namespace: "WorkStudies" });
	const title = t("meta.title");
	const description = t("meta.description");
	const ogTitle = t("meta.ogTitle");
	const ogDescription = t("meta.ogDescription");
	const keywords = t.raw("meta.keywords") as string[];

	return localizePageMetadata(
		{
			title: { absolute: title },
			description,
			keywords,
			alternates: { canonical: WORK_PAGE_PATH },
			openGraph: {
				title: ogTitle,
				description: ogDescription,
				url: WORK_PAGE_PATH,
				type: "website",
				locale: "en_MY",
				siteName,
				images: [defaultOgImage],
			},
			twitter: {
				card: defaultTwitterCard,
				title: ogTitle,
				description: ogDescription,
				images: [defaultOgImage.url],
			},
		},
		WORK_PAGE_PATH,
		locale,
	);
}

export default async function WorkPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<WorkSchema />
			<PageMessages namespaces={["WorkChrome", "WorkStudies"]}>
				<WorkPageContent />
			</PageMessages>
		</>
	);
}
