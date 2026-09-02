import Image from "next/image";
import Link from "next/link";
import {
	ArrowLeft,
	ArrowRight,
	CalendarDays,
	Clock,
	HelpCircle,
	RefreshCw,
	UserRound,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { PortableTextBody } from "@/components/shared/portable-text";
import {
	formatInsightDate,
	insightCategoryChip,
	insightImageAlt,
	insightImageUrl,
} from "@/components/shared/insight-card";
import { SectionBadge } from "@/components/shared/section-badge";
import type { InsightCategory, InsightPost } from "@/lib/insights/types";

type CtaAccent = "brand" | "truekredit" | "truesyariah" | "kpkt";

/**
 * Each category hands the reader to the team that owns it — the CTA band accent
 * and contact subject follow the product line the article belongs to.
 */
const CATEGORY_CTA: Partial<
	Record<InsightCategory, { accent: CtaAccent; subject: string }>
> = {
	"KPKT Licensing": { accent: "kpkt", subject: "KPKT Licensing" },
	Compliance: { accent: "kpkt", subject: "Compliance" },
	"Lending Operations": { accent: "truekredit", subject: "TrueKredit" },
	"Shariah Financing": { accent: "truesyariah", subject: "TrueSyariah" },
	"Product Updates": { accent: "brand", subject: "Truestack" },
};

function ctaForCategory(category: InsightCategory) {
	return CATEGORY_CTA[category] ?? { accent: "brand" as CtaAccent, subject: "Insights" };
}

export function InsightPostContent({ post }: { post: InsightPost }) {
	const heroImage = insightImageUrl(post.mainImage, {
		width: 1600,
		height: 900,
	});
	const published = formatInsightDate(post.publishedAt);
	const updated = formatInsightDate(post.updatedAt);
	const showUpdated = updated.length > 0 && updated !== published;
	const cta = ctaForCategory(post.category);

	return (
		<>
			<article>
				<div className="-mt-18 bg-background pb-14 pt-[calc(2.5rem+4.5rem)] md:pb-16 md:pt-[calc(3.5rem+4.5rem)]">
					<div className="mx-auto max-w-6xl px-6">
						<div className="mx-auto max-w-3xl">
							<nav
								aria-label="Breadcrumb"
								className="flex flex-wrap items-center gap-2 type-eyebrow text-muted-foreground"
							>
								<Link
									href="/"
									className="transition-colors hover:text-foreground"
								>
									Home
								</Link>
								<span aria-hidden className="text-muted-foreground/50">
									›
								</span>
								<Link
									href="/insights"
									className="transition-colors hover:text-foreground"
								>
									Insights
								</Link>
								<span aria-hidden className="text-muted-foreground/50">
									›
								</span>
								<span
									aria-current="page"
									className="normal-case tracking-normal text-foreground"
								>
									{post.title}
								</span>
							</nav>

							<div className="mt-6 flex flex-wrap items-center gap-2">
								<span
									className={`inline-flex items-center rounded-full px-2.5 py-0.5 type-micro font-medium uppercase tracking-wider ${insightCategoryChip(post.category)}`}
								>
									{post.category}
								</span>
							</div>

							<h1 className="mt-4 type-h2">
								{post.title}
							</h1>

							{post.excerpt ? (
								<p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
									{post.excerpt}
								</p>
							) : null}

							<div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-5 text-sm text-muted-foreground">
								<span className="inline-flex items-center gap-2">
									<UserRound className="h-4 w-4 text-primary" aria-hidden />
									<span className="font-medium text-foreground">
										{post.author.name}
									</span>
									{post.author.role ? (
										<span>· {post.author.role}</span>
									) : null}
								</span>
								{published ? (
									<span className="inline-flex items-center gap-2">
										<CalendarDays
											className="h-4 w-4 text-primary"
											aria-hidden
										/>
										<time dateTime={post.publishedAt}>{published}</time>
									</span>
								) : null}
								<span className="inline-flex items-center gap-2">
									<Clock className="h-4 w-4 text-primary" aria-hidden />
									{post.estimatedReadingMinutes} min read
								</span>
								{showUpdated ? (
									<span className="inline-flex items-center gap-2">
										<RefreshCw
											className="h-4 w-4 text-primary"
											aria-hidden
										/>
										Updated{" "}
										<time dateTime={post.updatedAt}>{updated}</time>
									</span>
								) : null}
							</div>

							{heroImage ? (
								<div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl border bg-muted/40 shadow-sm">
									<Image
										src={heroImage}
										alt={insightImageAlt(post.mainImage, post.title)}
										fill
										sizes="(max-width: 768px) 100vw, 768px"
										className="object-cover"
										priority
									/>
								</div>
							) : null}

							<div className="mt-10">
								<PortableTextBody value={post.body} />
							</div>

							<div className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
								{post.tags.length > 0 ? (
									<ul
										aria-label="Topics"
										className="flex flex-wrap gap-1.5"
									>
										{post.tags.map((tag) => (
											<li key={tag}>
												<Badge
													variant="secondary"
													className="font-normal text-[11px] text-muted-foreground"
												>
													{tag}
												</Badge>
											</li>
										))}
									</ul>
								) : (
									<span />
								)}
								<Link
									href="/insights"
									className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
								>
									<ArrowLeft className="h-4 w-4" aria-hidden />
									All insights
								</Link>
							</div>
						</div>
					</div>
				</div>
			</article>

			{post.faq.length > 0 ? (
				<section
					id="faq"
					aria-labelledby="insight-faq-heading"
					className="border-t bg-muted/30 py-14 md:py-20"
				>
					<div className="mx-auto max-w-6xl px-6">
						<div className="mx-auto mb-10 max-w-3xl text-center">
							<SectionBadge
								icon={HelpCircle}
								text="FAQ"
								className="justify-center"
							/>
							<h2
								id="insight-faq-heading"
								className="type-h2"
							>
								Frequently asked questions
							</h2>
						</div>

						<div className="mx-auto max-w-3xl">
							<Accordion type="single" collapsible className="w-full">
								{post.faq.map((item, index) => (
									<AccordionItem
										key={item.question}
										value={`item-${index}`}
									>
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
			) : null}

			{post.relatedProducts.length > 0 ? (
				<section className="border-t bg-background py-16 md:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="mx-auto max-w-3xl text-center">
							<p className="mb-3 type-eyebrow text-primary">
								Where this applies
							</p>
							<h2 className="type-h2">
								Put this into practice.
							</h2>
						</div>

						<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
							{post.relatedProducts.map((product) => (
								<Link
									key={product.href}
									href={product.href}
									className="group flex h-full flex-col rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:p-6"
								>
									<h3 className="type-card-title">
										{product.title}
									</h3>
									<p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
										{product.description}
									</p>
									<span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
										Explore {product.title}
										<ArrowRight
											className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
											aria-hidden
										/>
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>
			) : null}

			<ConsultationCta
				accent={cta.accent}
				heading="Talk it through with someone who does this daily."
				body="Book a free consultation. Tell us your licence type and where you are stuck — we will tell you what applies to you and what does not."
				primary={{
					href: `/contact?subject=${encodeURIComponent(cta.subject)}`,
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: post.relatedProducts[0]?.href ?? "/services/digital-license",
					label: post.relatedProducts[0]?.title ?? "KPKT digital licence",
				}}
				extraLinks={[
					{ href: "/insights", label: "More insights" },
					{ href: "/truekredit", label: "TrueKredit™" },
					{ href: "/truesyariah", label: "TrueSyariah™" },
					{
						href: "/services/account-management",
						label: "KPKT account management",
					},
				]}
			/>
		</>
	);
}
