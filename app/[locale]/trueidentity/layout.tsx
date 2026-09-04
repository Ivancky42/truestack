import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { TrueIdentitySchema } from "@/components/seo/trueidentity-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { trueidentityFaq } from "@/lib/trueidentity-faq";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import {
	TRUEIDENTITY_METADATA,
	TRUEIDENTITY_PAGE_PATH,
} from "@/lib/trueidentity-seo";

const pageMetadata: Metadata = {
	title: { absolute: TRUEIDENTITY_METADATA.title },
	description: TRUEIDENTITY_METADATA.description,
	keywords: [...TRUEIDENTITY_METADATA.keywords],
	alternates: { canonical: TRUEIDENTITY_PAGE_PATH },
	openGraph: {
		title: TRUEIDENTITY_METADATA.openGraphTitle,
		description: TRUEIDENTITY_METADATA.openGraphDescription,
		url: TRUEIDENTITY_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: TRUEIDENTITY_METADATA.openGraphTitle,
		description: TRUEIDENTITY_METADATA.openGraphDescription,
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(
		pageMetadata,
		TRUEIDENTITY_PAGE_PATH,
		resolveAppLocale(locale),
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
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<TrueIdentitySchema />
			<FaqSchema items={trueidentityFaq} />
			{children}
		</>
	);
}
