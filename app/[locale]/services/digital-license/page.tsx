import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import {
	DIGITAL_LICENSE_METADATA,
	DIGITAL_LICENSE_PAGE_PATH,
} from "@/lib/digital-license-seo";
import { DigitalLicenseSchema } from "@/components/seo/digital-license-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { digitalLicenseFaq } from "@/lib/digital-license-faq";
import { DigitalLicensePageContent } from "@/components/sections/digital-license-page-content";

const pageMetadata: Metadata = {
	title: { absolute: DIGITAL_LICENSE_METADATA.title },
	description: DIGITAL_LICENSE_METADATA.description,
	keywords: [...DIGITAL_LICENSE_METADATA.keywords],
	alternates: { canonical: DIGITAL_LICENSE_PAGE_PATH },
	openGraph: {
		title: DIGITAL_LICENSE_METADATA.openGraphTitle,
		description: DIGITAL_LICENSE_METADATA.openGraphDescription,
		url: DIGITAL_LICENSE_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: DIGITAL_LICENSE_METADATA.openGraphTitle,
		description: DIGITAL_LICENSE_METADATA.openGraphDescription,
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
	return localizePageMetadata(pageMetadata, DIGITAL_LICENSE_PAGE_PATH, resolveAppLocale(locale));
}

export default async function DigitalLicensePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<DigitalLicenseSchema />
			<FaqSchema items={digitalLicenseFaq} />
			<BreadcrumbSchema
				items={[
					{ name: "Home", path: "/" },
					{ name: "KPKT Digital Licence", path: DIGITAL_LICENSE_PAGE_PATH },
				]}
			/>
			<DigitalLicensePageContent />
		</>
	);
}
