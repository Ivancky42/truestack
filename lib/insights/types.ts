import type {PortableTextBlock} from "@portabletext/react";

export const INSIGHT_CATEGORIES = [
	"KPKT Licensing",
	"Lending Operations",
	"Shariah Financing",
	"Compliance",
	"Software Delivery",
	"Identity & Data",
	"Product Updates",
	"Company News",
] as const;

export type InsightCategory = (typeof INSIGHT_CATEGORIES)[number];

export type SanityImage = {
	_type: "image";
	_key?: string;
	asset?: {
		_ref?: string;
		_type?: "reference";
	};
	alt?: string;
	hotspot?: unknown;
	crop?: unknown;
};

export type PortableTextValue = Array<PortableTextBlock | SanityImage>;

export type InsightAuthor = {
	name: string;
	role?: string;
};

export type InsightFaq = {
	question: string;
	answer: string;
};

export type RelatedProduct = {
	title: string;
	href: string;
	description: string;
};

export type InsightPostSummary = {
	_id: string;
	title: string;
	slug: string;
	excerpt: string;
	category: InsightCategory;
	publishedAt: string;
	updatedAt: string;
	mainImage?: SanityImage;
	tags: string[];
	author: InsightAuthor;
	estimatedReadingMinutes: number;
};

/** Optional search title/description for one non-English locale URL. */
export type InsightLocalizedSeo = {
	title?: string;
	description?: string;
};

export type InsightPost = InsightPostSummary & {
	seoTitle?: string;
	seoDescription: string;
	/**
	 * Per-locale `<title>` / meta description for /ms, /zh and /ru post URLs.
	 * Article bodies stay English; missing values fall back to the English SEO.
	 */
	localizedSeo?: Partial<Record<"ms" | "zh" | "ru", InsightLocalizedSeo>>;
	body: PortableTextValue;
	faq: InsightFaq[];
	relatedProducts: RelatedProduct[];
};

export type InsightSitemapEntry = {
	slug: string;
	updatedAt: string;
};

export type InsightLlmsEntry = {
	title: string;
	slug: string;
	excerpt: string;
	category: InsightCategory;
};
