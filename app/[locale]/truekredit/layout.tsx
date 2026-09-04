import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { TrueKreditSchema } from "@/components/seo/truekredit-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { siteName } from "@/lib/seo-defaults";
import {
	TRUEKREDIT_KEYWORDS,
	TRUEKREDIT_OG_IMAGE_PATH,
	TRUEKREDIT_PAGE_PATH,
} from "@/lib/truekredit-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const appLocale = resolveAppLocale(locale);
	const t = await getTranslations({
		locale: appLocale,
		namespace: "TrueKredit",
	});

	const pageMetadata: Metadata = {
		title: { absolute: t("meta.title") },
		description: t("meta.description"),
		keywords: [...TRUEKREDIT_KEYWORDS],
		alternates: { canonical: TRUEKREDIT_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: TRUEKREDIT_PAGE_PATH,
			type: "website",
			locale: "en_MY",
			siteName,
			images: [
				{
					url: TRUEKREDIT_OG_IMAGE_PATH,
					width: 1536,
					height: 1024,
					alt: t("meta.ogImageAlt"),
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			images: [TRUEKREDIT_OG_IMAGE_PATH],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};

	return localizePageMetadata(
		pageMetadata,
		TRUEKREDIT_PAGE_PATH,
		appLocale,
	);
}

export default async function TrueKreditLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const appLocale = resolveAppLocale(locale);
	setRequestLocale(appLocale);
	const t = await getTranslations({
		locale: appLocale,
		namespace: "TrueKredit",
	});
	return (
		<>
			<TrueKreditSchema />
			<FaqSchema
				items={
					t.raw("faq.items") as {
						question: string;
						answer: string;
					}[]
				}
			/>
			{children}
		</>
	);
}
