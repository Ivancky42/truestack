"use client";

import Image from "next/image";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { imageUrl } from "@/lib/insights/client";
import type {
	InsightCategory,
	InsightPostSummary,
	SanityImage,
} from "@/lib/insights/types";

/**
 * Category chips stay inside the sanctioned accent ramps: KPKT work uses the
 * kpkt token, Shariah uses emerald, everything else uses the brand blue.
 */
const CATEGORY_CHIP: Partial<Record<InsightCategory, string>> = {
	"KPKT Licensing": "bg-kpkt/10 text-kpkt",
	Compliance: "bg-kpkt/10 text-kpkt",
	"Lending Operations": "bg-primary/10 text-primary",
	"Shariah Financing": "bg-emerald-500/10 text-emerald-700",
	"Product Updates": "bg-primary/10 text-primary",
};

export function insightCategoryChip(category: InsightCategory) {
	return CATEGORY_CHIP[category] ?? "bg-primary/10 text-primary";
}

const INSIGHT_DATE_OPTIONS = {
	day: "numeric",
	month: "long",
	year: "numeric",
} as const;

/** English source is en-GB (`1 September 2026`); next-intl locale `en` would be US-ordered. */
function formatLocalizedInsightDate(
	value: string | undefined,
	locale: string,
	format: ReturnType<typeof useFormatter>,
) {
	if (!value) return "";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "";
	if (locale === "en") {
		return new Intl.DateTimeFormat("en-GB", {
			...INSIGHT_DATE_OPTIONS,
			timeZone: "Asia/Kuala_Lumpur",
		}).format(date);
	}
	return format.dateTime(date, INSIGHT_DATE_OPTIONS);
}

const insightDateFormatter = new Intl.DateTimeFormat("en-GB", {
	day: "numeric",
	month: "long",
	year: "numeric",
	timeZone: "Asia/Kuala_Lumpur",
});

export function formatInsightDate(value: string | undefined) {
	if (!value) return "";
	const date = new Date(value);
	return Number.isNaN(date.getTime()) ? "" : insightDateFormatter.format(date);
}

/** Null when the post has no main image, so callers can fall back gracefully. */
export function insightImageUrl(
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

export function insightImageAlt(
	image: SanityImage | undefined,
	fallback: string,
) {
	const alt = image?.alt?.trim();
	return alt && alt.length > 0 ? alt : fallback;
}

export function InsightCard({
	post,
	priority = false,
}: {
	post: InsightPostSummary;
	priority?: boolean;
}) {
	const tCommon = useTranslations("Common");
	const format = useFormatter();
	const locale = useLocale();
	const image = insightImageUrl(post.mainImage, { width: 800, height: 500 });
	const published = formatLocalizedInsightDate(post.publishedAt, locale, format);

	return (
		<Link
			href={`/insights/${post.slug}`}
			className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
		>
			{image ? (
				<div className="relative aspect-16/10 w-full shrink-0 overflow-hidden bg-muted/40">
					<Image
						src={image}
						alt={insightImageAlt(post.mainImage, post.title)}
						fill
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="object-cover"
						priority={priority}
					/>
				</div>
			) : null}

			<div className="flex flex-1 flex-col p-5">
				<div className="flex flex-wrap items-center gap-2">
					<span
						className={`inline-flex items-center rounded-full px-2.5 py-0.5 type-micro font-medium uppercase tracking-wider ${insightCategoryChip(post.category)}`}
					>
						{post.category}
					</span>
					<span className="text-xs text-muted-foreground">
						{tCommon("minRead", { minutes: post.estimatedReadingMinutes })}
					</span>
				</div>

				<h3 className="mt-3 type-subhead">
					{post.title}
				</h3>
				<p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
					{post.excerpt}
				</p>

				<div className="mt-auto flex items-center justify-between gap-3 pt-4">
					{published ? (
						<time
							dateTime={post.publishedAt}
							className="text-xs text-muted-foreground"
						>
							{published}
						</time>
					) : (
						<span />
					)}
					<span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
						{tCommon("readArticle")}
						<ArrowUpRight
							className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							aria-hidden
						/>
					</span>
				</div>
			</div>
		</Link>
	);
}
