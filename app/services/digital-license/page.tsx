import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import {
	DIGITAL_LICENSE_METADATA,
	DIGITAL_LICENSE_PAGE_PATH,
} from "@/lib/digital-license-seo";
import { DigitalLicenseSchema } from "@/components/seo/digital-license-schema";
import { DigitalLicensePageContent } from "@/components/sections/digital-license-page-content";

export const metadata: Metadata = {
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
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
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

export default function DigitalLicensePage() {
	return (
		<>
			<DigitalLicenseSchema />
			<DigitalLicensePageContent />
		</>
	);
}
