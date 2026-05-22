import type { Metadata } from "next";
import { TrueKreditSchema } from "@/components/seo/truekredit-schema";
import {
	TRUEKREDIT_METADATA,
	TRUEKREDIT_PAGE_PATH,
} from "@/lib/truekredit-seo";

export const metadata: Metadata = {
	title: { absolute: TRUEKREDIT_METADATA.title },
	description: TRUEKREDIT_METADATA.description,
	keywords: [...TRUEKREDIT_METADATA.keywords],
	alternates: { canonical: TRUEKREDIT_PAGE_PATH },
	openGraph: {
		title: TRUEKREDIT_METADATA.openGraphTitle,
		description: TRUEKREDIT_METADATA.openGraphDescription,
		url: TRUEKREDIT_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [
			{
				url: TRUEKREDIT_METADATA.ogImagePath,
				width: 1536,
				height: 1024,
				alt: TRUEKREDIT_METADATA.ogImageAlt,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: TRUEKREDIT_METADATA.openGraphTitle,
		description: TRUEKREDIT_METADATA.openGraphDescription,
		images: [TRUEKREDIT_METADATA.ogImagePath],
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

export default function TrueKreditLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TrueKreditSchema />
			{children}
		</>
	);
}
