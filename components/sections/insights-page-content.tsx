"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HelpCircle, Newspaper } from "lucide-react";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import {
	InsightCard,
	formatInsightDate,
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
import { insightsFaq } from "@/lib/insights/faq";
import type { InsightPostSummary } from "@/lib/insights/types";

/** Topics come from published posts only — the list grows as new categories appear. */
function publishedTopics(posts: InsightPostSummary[]) {
	return [...new Set(posts.map((post) => post.category))];
}

function InsightsMasthead({ topics }: { topics: string[] }) {
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
				Insights
			</Badge>

			<h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
				What actually works in{" "}
				<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
					Malaysian fintech.
				</span>
			</h1>

			<p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
				What we see when licences, loan books and software meet Malaysian
				rules — the questions that come up, and the parts that cost time.
			</p>

			{topics.length > 0 ? (
				<ul
					aria-label="Topics we write about"
					className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground"
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
	const image = insightImageUrl(post.mainImage, { width: 1600, height: 1200 });
	const published = formatInsightDate(post.publishedAt);

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
						<span className="text-xs font-semibold uppercase tracking-widest text-primary">
							Latest
						</span>
						<span aria-hidden className="text-muted-foreground">
							·
						</span>
						<span
							className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${insightCategoryChip(post.category)}`}
						>
							{post.category}
						</span>
						<span className="text-xs text-muted-foreground">
							{post.estimatedReadingMinutes} min read
						</span>
					</div>

					<h2 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl lg:leading-tight">
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
						Read this article
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
	const eyebrow = loadFailed
		? "Temporarily unavailable"
		: "First articles on the way";
	const title = loadFailed
		? "These articles are not available right now."
		: "Nothing published yet.";
	const aside = loadFailed
		? "Try again in a moment."
		: "Ask us in the meantime.";
	const body = loadFailed
		? "Give it a few minutes and refresh. Or ask us the question you came for — a consultation costs nothing."
		: "The first pieces are on the way. Until they are up, ask us the question you came for — a consultation costs nothing.";

	return (
		<motion.div
			className="mt-8 rounded-3xl border bg-card p-8 shadow-sm md:mt-12 md:p-12"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.12 }}
		>
			<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
				{eyebrow}
			</p>
			<h2 className="max-w-2xl font-display text-2xl font-medium tracking-tight md:text-3xl">
				{title}{" "}
				<span className="text-muted-foreground">{aside}</span>
			</h2>
			<p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
				{body}
			</p>
			<div className="mt-7 flex flex-col gap-3 sm:flex-row">
				<Button asChild size="lg" className="gap-2">
					<Link href="/contact?subject=Insights">
						Book a Free Consultation
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Button>
				<Button asChild variant="outline" size="lg" className="gap-2">
					<Link href="/services/digital-license">
						KPKT digital licence
						<ArrowRight className="h-4 w-4" aria-hidden />
					</Link>
				</Button>
			</div>
		</motion.div>
	);
}

function InsightsGrid({ posts }: { posts: InsightPostSummary[] }) {
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
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
						More reading
					</p>
					<h2
						id="insights-all-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl"
					>
						More from the team.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						Same notes we give clients. Shorter than a call — and you
						can pass them to your team.
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
						text="FAQ"
						className="justify-center"
					/>
					<h2
						id="insights-faq-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl"
					>
						Frequently asked questions
					</h2>
				</div>

				<div className="mx-auto max-w-3xl">
					<Accordion type="single" collapsible className="w-full">
						{insightsFaq.map((item, index) => (
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
	const [featured, ...rest] = posts;

	return (
		<>
			{/* Masthead + featured story share one section so the story sits high on the page. */}
			<section className="relative overflow-hidden bg-background pb-14 pt-10 md:pb-20 md:pt-14">
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
				heading="Have a question we have not written about yet?"
				body="Tell us where you are stuck. We will walk through it in a free consultation — no obligation to buy anything."
				primary={{
					href: "/contact?subject=Insights",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "/services/digital-license",
					label: "KPKT digital licence",
				}}
				extraLinks={[
					{ href: "/truekredit", label: "TrueKredit™" },
					{ href: "/truesyariah", label: "TrueSyariah™" },
					{
						href: "/services/p2p-software-development",
						label: "TrueP2P™",
					},
					{ href: "/trueidentity", label: "TrueIdentity™" },
					{
						href: "/services/software-development",
						label: "Custom software",
					},
				]}
			/>
		</>
	);
}
