import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import { resolveAppLocale } from "@/lib/i18n/config";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import {
	getRelatedWorkCaseStudyStructures,
	getWorkCaseStudySlugs,
	getWorkCaseStudyStructure,
	isWorkCaseStudySlug,
	mergeWorkCaseStudy,
	type WorkCaseStudyCopy,
	type WorkCaseStudySlug,
} from "@/lib/work-case-studies";

function studyCopy(
	t: Awaited<ReturnType<typeof getTranslations>>,
	slug: WorkCaseStudySlug,
): WorkCaseStudyCopy {
	const details = t.raw("details" as never) as Record<
		WorkCaseStudySlug,
		WorkCaseStudyCopy
	>;
	return details[slug];
}
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
	setRequestLocale(locale);
	if (!isWorkCaseStudySlug(slug)) {
		return {};
	}
	const structure = getWorkCaseStudyStructure(slug);
	if (!structure) {
		return {};
	}
	const t = await getTranslations({ locale, namespace: "WorkStudies" });
	const copy = studyCopy(t, structure.slug);
	const path = `/work/${structure.slug}`;

	return localizePageMetadata(
		{
			title: { absolute: copy.seo.title },
			description: copy.seo.description,
			keywords: copy.seo.keywords,
			openGraph: {
				title: copy.seo.title,
				description: copy.seo.description,
				url: path,
				type: "article",
				siteName,
				images: [defaultOgImage],
			},
			twitter: {
				card: defaultTwitterCard,
				title: copy.seo.title,
				description: copy.seo.description,
				images: [defaultOgImage.url],
			},
		},
		path,
		locale,
	);
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
	const { locale, slug } = await params;
	const resolved = resolveAppLocale(locale);
	setRequestLocale(resolved);
	const t = await getTranslations("WorkChrome");
	const tStudies = await getTranslations("WorkStudies");
	const tCommon = await getTranslations("Common");
	if (!isWorkCaseStudySlug(slug)) {
		notFound();
	}
	const structure = getWorkCaseStudyStructure(slug);
	if (!structure) {
		notFound();
	}

	const study = mergeWorkCaseStudy(structure, studyCopy(tStudies, structure.slug));
	const related = getRelatedWorkCaseStudyStructures(slug).map((item) =>
		mergeWorkCaseStudy(item, studyCopy(tStudies, item.slug)),
	);

	return (
		<>
			<WorkCaseStudySchema study={study} />
			<FaqSchema items={study.faq} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{ name: t("nav"), path: "/work" },
					{ name: study.client, path: `/work/${study.slug}` },
				]}
			/>
			<PageMessages namespaces={["WorkChrome", "WorkStudies"]}>
				<WorkCaseStudyDetailContent study={study} related={related} />
			</PageMessages>
		</>
	);
}
