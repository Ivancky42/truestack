import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { TrueIdentitySchema } from "@/components/seo/trueidentity-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import {
	TRUEIDENTITY_KEYWORDS,
	TRUEIDENTITY_PAGE_PATH,
} from "@/lib/trueidentity-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "TrueIdentity" });
	const pageMetadata: Metadata = {
		title: { absolute: t("meta.title") },
		description: t("meta.description"),
		keywords: [...TRUEIDENTITY_KEYWORDS],
		alternates: { canonical: TRUEIDENTITY_PAGE_PATH },
		openGraph: {
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			url: TRUEIDENTITY_PAGE_PATH,
			type: "website",
			locale: "en_MY",
			siteName,
			images: [{ ...defaultOgImage, alt: t("meta.ogImageAlt") }],
		},
		twitter: {
			card: defaultTwitterCard,
			title: t("meta.openGraphTitle"),
			description: t("meta.openGraphDescription"),
			images: [defaultOgImage.url],
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
		TRUEIDENTITY_PAGE_PATH,
		resolved,
	);
}

export default async function TrueIdentityLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	setRequestLocale(resolved);
	const t = await getTranslations({ locale: resolved, namespace: "TrueIdentity" });
	return (
		<>
			<TrueIdentitySchema />
			<FaqSchema
				items={t.raw("faq.items") as { question: string; answer: string }[]}
			/>
			{children}
		</>
	);
}
