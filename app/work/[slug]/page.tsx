import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultOgImage } from "@/lib/seo-defaults";
import {
	getWorkCaseStudy,
	getWorkCaseStudySlugs,
} from "@/lib/work-case-studies";
import { WorkCaseStudyDetailContent } from "@/components/sections/work-case-study-detail";
import { WorkCaseStudySchema } from "@/components/seo/work-case-study-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return getWorkCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const study = getWorkCaseStudy(slug);
	if (!study) {
		return {};
	}

	const path = `/work/${study.slug}`;

	return {
		title: study.seo.title,
		description: study.seo.description,
		keywords: study.seo.keywords,
		alternates: { canonical: path },
		openGraph: {
			title: study.seo.title,
			description: study.seo.description,
			url: path,
			type: "article",
			locale: "en_MY",
			siteName: "Truestack",
			images: [defaultOgImage],
		},
		twitter: {
			card: "summary_large_image",
			title: study.seo.title,
			description: study.seo.description,
			images: [defaultOgImage.url],
		},
	};
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
	const { slug } = await params;
	const study = getWorkCaseStudy(slug);
	if (!study) {
		notFound();
	}

	return (
		<>
			<WorkCaseStudySchema study={study} />
			<FaqSchema items={study.faq} />
			<BreadcrumbSchema
				items={[
					{ name: "Home", path: "/" },
					{ name: "Work", path: "/work" },
					{ name: study.client, path: `/work/${study.slug}` },
				]}
			/>
			<WorkCaseStudyDetailContent study={study} />
		</>
	);
}
