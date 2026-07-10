import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { WorkPageContent } from "@/components/sections/work-page-content";
import { WorkSchema } from "@/components/seo/work-schema";
import {
	WORK_METADATA,
	WORK_PAGE_PATH,
} from "@/lib/work-seo";

export const metadata: Metadata = {
	title: { absolute: WORK_METADATA.title },
	description: WORK_METADATA.description,
	keywords: [...WORK_METADATA.keywords],
	alternates: { canonical: WORK_PAGE_PATH },
	openGraph: {
		title: WORK_METADATA.openGraphTitle,
		description: WORK_METADATA.openGraphDescription,
		url: WORK_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: WORK_METADATA.openGraphTitle,
		description: WORK_METADATA.openGraphDescription,
		images: [defaultOgImage.url],
	},
};

export default function WorkPage() {
	return (
		<>
			<WorkSchema />
			<WorkPageContent />
		</>
	);
}
