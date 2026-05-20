import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { TrueSsmSchema } from "@/components/seo/truessm-schema";
import { TRUESSM_METADATA, TRUESSM_PAGE_PATH } from "@/lib/truessm-seo";

export const metadata: Metadata = {
	title: { absolute: TRUESSM_METADATA.title },
	description: TRUESSM_METADATA.description,
	keywords: [...TRUESSM_METADATA.keywords],
	alternates: { canonical: TRUESSM_PAGE_PATH },
	openGraph: {
		title: TRUESSM_METADATA.openGraphTitle,
		description: TRUESSM_METADATA.openGraphDescription,
		url: TRUESSM_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: TRUESSM_METADATA.openGraphTitle,
		description: TRUESSM_METADATA.openGraphDescription,
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

export default function TrueSsmLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TrueSsmSchema />
			{children}
		</>
	);
}
