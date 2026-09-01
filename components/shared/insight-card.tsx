import Image from "next/image";
import Link from "next/link";
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
	const image = insightImageUrl(post.mainImage, { width: 800, height: 500 });
	const published = formatInsightDate(post.publishedAt);

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
						className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${insightCategoryChip(post.category)}`}
					>
						{post.category}
					</span>
					<span className="text-xs text-muted-foreground">
						{post.estimatedReadingMinutes} min read
					</span>
				</div>

				<h3 className="mt-3 font-display text-lg font-medium tracking-tight md:text-xl">
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
						Read the insight
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
