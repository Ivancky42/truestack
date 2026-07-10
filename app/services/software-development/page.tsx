import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { SoftwareDevelopmentSchema } from "@/components/seo/software-development-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { SoftwareDevelopmentPageContent } from "@/components/sections/software-development-page-content";
import { softwareDevelopmentFaq } from "@/lib/software-development-faq";
import {
	SOFTWARE_DEVELOPMENT_METADATA,
	SOFTWARE_DEVELOPMENT_PAGE_PATH,
} from "@/lib/software-development-seo";

export const metadata: Metadata = {
	title: { absolute: SOFTWARE_DEVELOPMENT_METADATA.title },
	description: SOFTWARE_DEVELOPMENT_METADATA.description,
	keywords: [...SOFTWARE_DEVELOPMENT_METADATA.keywords],
	alternates: { canonical: SOFTWARE_DEVELOPMENT_PAGE_PATH },
	openGraph: {
		title: SOFTWARE_DEVELOPMENT_METADATA.openGraphTitle,
		description: SOFTWARE_DEVELOPMENT_METADATA.openGraphDescription,
		url: SOFTWARE_DEVELOPMENT_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: SOFTWARE_DEVELOPMENT_METADATA.openGraphTitle,
		description: SOFTWARE_DEVELOPMENT_METADATA.openGraphDescription,
		images: [defaultOgImage.url],
	},
};

export default function SoftwareDevelopmentPage() {
	return (
		<>
			<SoftwareDevelopmentSchema />
			<FaqSchema items={softwareDevelopmentFaq} />
			<BreadcrumbSchema
				items={[
					{ name: "Home", path: "/" },
					{
						name: "Custom Software Development",
						path: SOFTWARE_DEVELOPMENT_PAGE_PATH,
					},
				]}
			/>
			<SoftwareDevelopmentPageContent />
		</>
	);
}
