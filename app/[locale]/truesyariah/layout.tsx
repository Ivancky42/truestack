import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TrueSyariahSchema } from "@/components/seo/truesyariah-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { truesyariahFaq } from "@/lib/truesyariah-faq";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { siteName } from "@/lib/seo-defaults";
import {
	TRUESYARIAH_METADATA,
	TRUESYARIAH_PAGE_PATH,
} from "@/lib/truesyariah-seo";

const pageMetadata: Metadata = {
	title: { absolute: TRUESYARIAH_METADATA.title },
	description: TRUESYARIAH_METADATA.description,
	keywords: [...TRUESYARIAH_METADATA.keywords],
	alternates: { canonical: TRUESYARIAH_PAGE_PATH },
	openGraph: {
		title: TRUESYARIAH_METADATA.openGraphTitle,
		description: TRUESYARIAH_METADATA.openGraphDescription,
		url: TRUESYARIAH_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [
			{
				url: TRUESYARIAH_METADATA.ogImagePath,
				width: 1536,
				height: 1024,
				alt: TRUESYARIAH_METADATA.ogImageAlt,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: TRUESYARIAH_METADATA.openGraphTitle,
		description: TRUESYARIAH_METADATA.openGraphDescription,
		images: [TRUESYARIAH_METADATA.ogImagePath],
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(
		pageMetadata,
		TRUESYARIAH_PAGE_PATH,
		resolveAppLocale(locale),
	);
}

export default async function TrueSyariahLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<TrueSyariahSchema />
			<FaqSchema items={truesyariahFaq} />
			<div className="ts-page hero-under-nav bg-ts-parchment text-ts-ink">
				{children}
			</div>
		</>
	);
}
