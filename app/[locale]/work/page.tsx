import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { WorkPageContent } from "@/components/sections/work-page-content";
import { WorkSchema } from "@/components/seo/work-schema";
import {
	WORK_METADATA,
	WORK_PAGE_PATH,
} from "@/lib/work-seo";

const pageMetadata: Metadata = {
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
		siteName,
		images: [defaultOgImage],
	},
	twitter: {
		card: defaultTwitterCard,
		title: WORK_METADATA.openGraphTitle,
		description: WORK_METADATA.openGraphDescription,
		images: [defaultOgImage.url],
	},
};

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return localizePageMetadata(pageMetadata, WORK_PAGE_PATH, resolveAppLocale(locale), "english-only");
}

export default async function WorkPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	return (
		<>
			<WorkSchema />
			<PageMessages namespaces={["WorkChrome"]}>
				<WorkPageContent />
			</PageMessages>
		</>
	);
}
