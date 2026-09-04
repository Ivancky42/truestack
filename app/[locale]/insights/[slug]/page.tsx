import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
	defaultOgImage,
	defaultTwitterCard,
	siteName,
} from "@/lib/seo-defaults";
import { resolveAppLocale } from "@/lib/i18n/config";
import { englishOnlyMetadata, ogLocaleFor } from "@/lib/i18n/seo";
import { InsightPostContent } from "@/components/sections/insight-post-content";
import { InsightPostSchema } from "@/components/seo/insight-post-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { imageUrl } from "@/lib/insights/client";
import { getInsightPost, getInsightPostSlugs } from "@/lib/insights/data";
import type { SanityImage } from "@/lib/insights/types";

type PageProps = {
	params: Promise<{ locale: string; slug: string }>;
};

/** Posts published after a build should still resolve on first request. */
export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
	try {
		const slugs = await getInsightPostSlugs();
		return (Array.isArray(slugs) ? slugs : [])
			.filter(
				(slug): slug is string =>
					typeof slug === "string" && slug.length > 0,
			)
			.map((slug) => ({ slug }));
	} catch {
		return [];
	}
}

function insightSocialImageUrl(
	image: SanityImage | undefined,
	size: { width: number; height: number },
) {
	if (!image?.asset?._ref) return null;
	try {
		const url = imageUrl(image)
			.width(size.width)
			.height(size.height)
			.fit("crop")
			.url();
		return url || null;
	} catch {
		return null;
	}
}

/** Transient CMS failures must not inherit the root `index: true` robots. */
function outageMetadata(title: string): Metadata {
	return {
		title,
		robots: {
			index: false,
			follow: false,
			nocache: true,
			googleBot: {
				index: false,
				follow: false,
				nocache: true,
			},
		},
	};
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale: rawLocale, slug } = await params;
	const locale = resolveAppLocale(rawLocale);
	let post;
	try {
		post = await getInsightPost(slug);
	} catch {
		const t = await getTranslations({ locale, namespace: "InsightsChrome" });
		return outageMetadata(t("error.metaTitle"));
	}

	if (!post) {
		notFound();
	}

	const path = `/insights/${post.slug}`;
	const title = post.seoTitle?.trim() || post.title;
	const description = post.seoDescription?.trim() || post.excerpt;
	const socialImage = insightSocialImageUrl(post.mainImage, {
		width: 1200,
		height: 630,
	});
	const images = socialImage
		? [
				{
					url: socialImage,
					width: 1200,
					height: 630,
					alt: post.mainImage?.alt?.trim() || post.title,
				},
			]
		: [defaultOgImage];

	return {
		title,
		description,
		keywords: post.tags,
		authors: [{ name: post.author.name }],
		...englishOnlyMetadata(path, locale),
		openGraph: {
			title,
			description,
			url: path,
			type: "article",
			locale: ogLocaleFor(locale),
			siteName,
			images,
			publishedTime: post.publishedAt,
			modifiedTime: post.updatedAt,
			authors: [post.author.name],
			tags: post.tags,
		},
		twitter: {
			card: defaultTwitterCard,
			title,
			description,
			images: [socialImage ?? defaultOgImage.url],
		},
	};
}

export default async function InsightPostPage({ params }: PageProps) {
	const { locale, slug } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("InsightsChrome");
	const tCommon = await getTranslations("Common");
	const post = await getInsightPost(slug);
	if (!post) {
		notFound();
	}

	return (
		<>
			<InsightPostSchema post={post} />
			{post.faq.length > 0 ? <FaqSchema items={post.faq} /> : null}
			<BreadcrumbSchema
				items={[
					{name: tCommon("breadcrumbHome"), path: "/"},
					{name: t("nav"), path: "/insights"},
					{name: post.title, path: `/insights/${post.slug}`},
				]}
			/>
			<InsightPostContent post={post} />
		</>
	);
}
