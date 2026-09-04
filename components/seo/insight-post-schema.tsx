import { getLocale } from "next-intl/server";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { imageUrl } from "@/lib/insights/client";
import type { InsightPost, SanityImage } from "@/lib/insights/types";
import {
	defaultOgImage,
	legalName,
	orgLogo,
	siteName,
	siteUrl,
} from "@/lib/seo-defaults";

function defaultOgAbsoluteUrl() {
	return `${siteUrl}${defaultOgImage.url}`;
}

function insightImageUrl(image?: SanityImage): string | undefined {
	if (!image?.asset) return undefined;
	try {
		return imageUrl(image).width(1200).fit("max").url() || undefined;
	} catch {
		return undefined;
	}
}

/**
 * JSON-LD BlogPosting schema for /insights/[slug].
 * Validate at: https://validator.schema.org/
 */
export async function InsightPostSchema({ post }: { post: InsightPost }) {
	const locale = resolveAppLocale(await getLocale());
	const pageUrl = `${siteUrl}/insights/${post.slug}`;
	const image = insightImageUrl(post.mainImage) ?? defaultOgAbsoluteUrl();

	const author: {
		"@type": "Person";
		name: string;
		jobTitle?: string;
	} = {
		"@type": "Person",
		name: post.author.name,
	};
	if (post.author.role) {
		author.jobTitle = post.author.role;
	}

	const schema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"@id": `${pageUrl}#blogposting`,
		url: pageUrl,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": pageUrl,
		},
		headline: post.title,
		description: post.seoDescription?.trim() || post.excerpt,
		datePublished: post.publishedAt,
		dateModified: post.updatedAt,
		image,
		author,
		publisher: {
			"@type": "Organization",
			"@id": `${siteUrl}/#organization`,
			name: siteName,
			legalName,
			logo: {
				"@type": "ImageObject",
				url: `${siteUrl}${orgLogo.url}`,
				width: orgLogo.width,
				height: orgLogo.height,
			},
		},
		inLanguage: inLanguage[locale],
		isPartOf: { "@id": `${siteUrl}/insights#blog` },
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
