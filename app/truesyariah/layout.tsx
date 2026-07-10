import type { Metadata } from "next";
import { TrueSyariahSchema } from "@/components/seo/truesyariah-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { truesyariahFaq } from "@/lib/truesyariah-faq";
import {
	TRUESYARIAH_METADATA,
	TRUESYARIAH_PAGE_PATH,
} from "@/lib/truesyariah-seo";

export const metadata: Metadata = {
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
		siteName: "Truestack",
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

export default function TrueSyariahLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TrueSyariahSchema />
			<FaqSchema items={truesyariahFaq} />
			{children}
		</>
	);
}
