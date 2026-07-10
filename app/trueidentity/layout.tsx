import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { TrueIdentitySchema } from "@/components/seo/trueidentity-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { trueidentityFaq } from "@/lib/trueidentity-faq";
import {
	TRUEIDENTITY_METADATA,
	TRUEIDENTITY_PAGE_PATH,
} from "@/lib/trueidentity-seo";

export const metadata: Metadata = {
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
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
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

export default function TrueIdentityLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TrueIdentitySchema />
			<FaqSchema items={trueidentityFaq} />
			{children}
		</>
	);
}
