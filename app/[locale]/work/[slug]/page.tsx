import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { englishOnlyMetadata, ogLocaleFor } from "@/lib/i18n/seo";
import {
	getWorkCaseStudy,
	getWorkCaseStudySlugs,
} from "@/lib/work-case-studies";
import { WorkCaseStudyDetailContent } from "@/components/sections/work-case-study-detail";
import { WorkCaseStudySchema } from "@/components/seo/work-case-study-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

type PageProps = {
	params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
	return getWorkCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale: rawLocale, slug } = await params;
	const locale = resolveAppLocale(rawLocale);
	const study = getWorkCaseStudy(slug);
	if (!study) {
		return {};
	}

	const path = `/work/${study.slug}`;

	return {
		title: study.seo.title,
		description: study.seo.description,
		keywords: study.seo.keywords,
		...englishOnlyMetadata(path, locale),
		openGraph: {
			title: study.seo.title,
			description: study.seo.description,
			url: path,
			type: "article",
			locale: ogLocaleFor(locale),
			siteName,
			images: [defaultOgImage],
		},
		twitter: {
			card: defaultTwitterCard,
			title: study.seo.title,
			description: study.seo.description,
			images: [defaultOgImage.url],
		},
	};
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
	const { locale, slug } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("WorkChrome");
	const tCommon = await getTranslations("Common");
	const study = getWorkCaseStudy(slug);
	if (!study) {
		notFound();
	}

	return (
		<>
			<WorkCaseStudySchema study={study} />
			<FaqSchema items={study.faq} inLanguage={inLanguage.en} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{ name: t("nav"), path: "/work" },
					{ name: study.client, path: `/work/${study.slug}` },
				]}
			/>
			<PageMessages namespaces={["WorkChrome"]}>
				<WorkCaseStudyDetailContent study={study} />
			</PageMessages>
		</>
	);
}
