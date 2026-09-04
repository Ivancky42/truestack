"use client";

import Image from "next/image";
import { useFormatter, useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, Newspaper } from "lucide-react";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import {
	InsightCard,
	insightCategoryChip,
	insightImageAlt,
	insightImageUrl,
} from "@/components/shared/insight-card";
import { SectionBadge } from "@/components/shared/section-badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { InsightPostSummary } from "@/lib/insights/types";

/** Topics come from published posts only — the list grows as new categories appear. */
function publishedTopics(posts: InsightPostSummary[]) {
	return [...new Set(posts.map((post) => post.category))];
}

function formatFeaturedDate(
	value: string | undefined,
	locale: string,
	format: ReturnType<typeof useFormatter>,
) {
	if (!value) return "";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "";
	const options = {
		day: "numeric",
		month: "long",
		year: "numeric",
	} as const;
	if (locale === "en") {
		return new Intl.DateTimeFormat("en-GB", {
			...options,
			timeZone: "Asia/Kuala_Lumpur",
		}).format(date);
	}
	return format.dateTime(date, options);
}

function InsightsMasthead({ topics }: { topics: string[] }) {
	const t = useTranslations("InsightsChrome");

	return (
		<motion.div
			className="max-w-2xl"
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Badge
				variant="outline"
				className="mb-4 gap-1.5 border-primary/20 bg-primary/10 px-3 py-1 text-primary"
			>
				<Newspaper className="h-3.5 w-3.5" aria-hidden />
				{t("eyebrow")}
			</Badge>

			<h1 className="type-h1">
				{t.rich("title", {
					accent: (chunks) => (
						<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
							{chunks}
						</span>
					),
				})}
			</h1>

			<p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
				{t("lede")}
			</p>

			{topics.length > 0 ? (
				<ul
					aria-label={t("topicsLabel")}
					className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 type-eyebrow text-muted-foreground"
				>
					{topics.map((topic, index) => (
						<li key={topic} className="flex items-center gap-3">
							{index > 0 ? (
								<span
									className="h-1 w-1 rounded-full bg-border"
									aria-hidden
								/>
							) : null}
							{topic}
						</li>
					))}
				</ul>
			) : null}
		</motion.div>
	);
}

function FeaturedInsight({ post }: { post: InsightPostSummary }) {
	const t = useTranslations("InsightsChrome");
	const tCommon = useTranslations("Common");
	const format = useFormatter();
	const locale = useLocale();
	const image = insightImageUrl(post.mainImage, { width: 1600, height: 1200 });
	const published = formatFeaturedDate(post.publishedAt, locale, format);

	return (
		<motion.article
			className="mt-8 md:mt-12"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.12 }}
		>
			<Link
				href={`/insights/${post.slug}`}
				className="group grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10"
			>
				{image ? (
					<div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl border bg-muted/40 shadow-sm transition-colors group-hover:border-primary/30 sm:aspect-16/10 lg:col-span-7">
						<Image
							src={image}
							alt={insightImageAlt(post.mainImage, post.title)}
							fill
							sizes="(max-width: 1024px) 100vw, 58vw"
							className="object-cover"
							priority
						/>
					</div>
				) : null}

				<div className={image ? "lg:col-span-5" : "lg:col-span-9"}>
					<div className="flex flex-wrap items-center gap-2">
						<span className="type-eyebrow text-primary">
							{t("latest")}
						</span>
						<span aria-hidden className="text-muted-foreground">
							·
						</span>
						<span
							className={`inline-flex items-center rounded-full px-2.5 py-0.5 type-micro font-medium uppercase tracking-wider ${insightCategoryChip(post.category)}`}
						>
							{post.category}
						</span>
						<span className="text-xs text-muted-foreground">
							{tCommon("minRead", { minutes: post.estimatedReadingMinutes })}
						</span>
					</div>

					<h2 className="mt-4 type-h2-sm lg:text-4xl lg:leading-tight">
						{post.title}
					</h2>
					<p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
						{post.excerpt}
					</p>

					<div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
						<span className="font-medium text-foreground">
							{post.author.name}
						</span>
						{published ? (
							<>
								<span aria-hidden>·</span>
								<time dateTime={post.publishedAt}>{published}</time>
							</>
						) : null}
					</div>

					<span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
						{t("readArticle")}
						<ArrowRight
							className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
							aria-hidden
						/>
					</span>
				</div>
			</Link>
		</motion.article>
	);
}

function InsightsStatusPanel({ loadFailed }: { loadFailed: boolean }) {
	const t = useTranslations("InsightsChrome");
	const tCommon = useTranslations("Common");
	const state = loadFailed ? "unavailable" : "unpublished";

	return (
		<motion.div
			className="mt-8 rounded-3xl border bg-card p-8 shadow-sm md:mt-12 md:p-12"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.12 }}
		>
			<p className="mb-3 type-eyebrow text-primary">
				{t(`empty.${state}.eyebrow`)}
			</p>
			<h2 className="max-w-2xl type-h2-sm">
				{t(`empty.${state}.title`)}{" "}
				<span className="text-muted-foreground">{t(`empty.${state}.aside`)}</span>
			</h2>
			<p className="mt-4 max-w-2xl type-lede text-muted-foreground">
				{t(`empty.${state}.body`)}
			</p>
			<div className="mt-7 flex flex-col gap-3 sm:flex-row">
				<Button asChild size="lg" className="gap-2">
					<Link href="/contact?subject=Insights">
						{tCommon("bookConsultation")}
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Button>
				<Button asChild variant="outline" size="lg" className="gap-2">
					<Link href="/services/digital-license">
						{t("cta.secondary")}
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Button>
			</div>
		</motion.div>
	);
}

function InsightsGrid({ posts }: { posts: InsightPostSummary[] }) {
	const t = useTranslations("InsightsChrome");

	return (
		<section
			id="all"
			aria-labelledby="insights-all-heading"
			className="scroll-mt-24 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mx-auto max-w-3xl text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-primary">
						{t("grid.eyebrow")}
					</p>
					<h2
						id="insights-all-heading"
						className="type-h2"
					>
						{t("grid.title")}
					</h2>
					<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
						{t("grid.lede")}
					</p>
				</motion.div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					{posts.map((post, index) => (
						<motion.div
							key={post._id}
							className="h-full"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{
								duration: 0.4,
								delay: Math.min(index * 0.06, 0.24),
							}}
						>
							<InsightCard post={post} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function InsightsFaq({ muted }: { muted: boolean }) {
	const t = useTranslations("InsightsChrome");
	const items = t.raw("faq.items") as { question: string; answer: string }[];

	return (
		<section
			id="faq"
			aria-labelledby="insights-faq-heading"
			className={`border-t py-16 md:py-20 ${muted ? "bg-muted/30" : "bg-background"}`}
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto mb-10 max-w-3xl text-center">
					<SectionBadge
						icon={HelpCircle}
						text={t("faq.eyebrow")}
						className="justify-center"
					/>
					<h2
						id="insights-faq-heading"
						className="type-h2"
					>
						{t("faq.title")}
					</h2>
				</div>

				<div className="mx-auto max-w-3xl">
					<Accordion type="single" collapsible className="w-full">
						{items.map((item, index) => (
							<AccordionItem key={item.question} value={`item-${index}`}>
								<AccordionTrigger className="py-5 text-left text-base font-medium md:text-lg">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-base leading-relaxed text-muted-foreground md:text-lg">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}

export function InsightsPageContent({
	posts,
	loadFailed = false,
}: {
	posts: InsightPostSummary[];
	loadFailed?: boolean;
}) {
	const t = useTranslations("InsightsChrome");
	const tCommon = useTranslations("Common");
	const [featured, ...rest] = posts;

	return (
		<>
			{/* Masthead + featured story share one section so the story sits high on the page. */}
			<section className="relative -mt-18 overflow-hidden bg-background pb-14 pt-[calc(2.5rem+4.5rem)] md:pb-20 md:pt-[calc(3.5rem+4.5rem)]">
				<div
					className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-primary/5 via-transparent to-transparent"
					aria-hidden
				/>
				<div className="mx-auto max-w-6xl px-6">
					<InsightsMasthead topics={publishedTopics(posts)} />

					{featured ? (
						<FeaturedInsight post={featured} />
					) : (
						<InsightsStatusPanel loadFailed={loadFailed} />
					)}
				</div>
			</section>

			{rest.length > 0 ? <InsightsGrid posts={rest} /> : null}

			<InsightsFaq muted={rest.length === 0} />

			<ConsultationCta
				heading={t("cta.heading")}
				body={t("cta.body")}
				primary={{
					href: "/contact?subject=Insights",
					label: tCommon("bookConsultation"),
				}}
				secondary={{
					href: "/services/digital-license",
					label: t("cta.secondary"),
				}}
			/>
		</>
	);
}
