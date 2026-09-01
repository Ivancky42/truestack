import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	defaultOgImage,
	defaultTwitterCard,
	siteName,
} from "@/lib/seo-defaults";
import { InsightPostContent } from "@/components/sections/insight-post-content";
import { InsightPostSchema } from "@/components/seo/insight-post-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { insightImageUrl } from "@/components/shared/insight-card";
import { getInsightPost, getInsightPostSlugs } from "@/lib/insights/data";

type PageProps = {
	params: Promise<{ slug: string }>;
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

/** Transient CMS failures must not inherit the root `index: true` robots. */
const OUTAGE_METADATA: Metadata = {
	title: "This insight is not available right now",
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

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	let post;
	try {
		post = await getInsightPost(slug);
	} catch {
		return OUTAGE_METADATA;
	}

	if (!post) {
		notFound();
	}

	const path = `/insights/${post.slug}`;
	const title = post.seoTitle?.trim() || post.title;
	const description = post.seoDescription?.trim() || post.excerpt;
	const socialImage = insightImageUrl(post.mainImage, {
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
		alternates: { canonical: path },
		openGraph: {
			title,
			description,
			url: path,
			type: "article",
			locale: "en_MY",
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
	const { slug } = await params;
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
					{name: "Home", path: "/"},
					{name: "Insights", path: "/insights"},
					{name: post.title, path: `/insights/${post.slug}`},
				]}
			/>
			<InsightPostContent post={post} />
		</>
	);
}
