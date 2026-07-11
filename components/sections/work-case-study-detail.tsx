"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	ArrowRight,
	ArrowUpRight,
	HelpCircle,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/shared/section-badge";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { AboutHeroBackdrop } from "@/components/sections/about-hero-backdrop";
import type { WorkCaseStudyDetail } from "@/lib/work-case-studies";
import { getRelatedWorkCaseStudies } from "@/lib/work-case-studies";

const PRODUCT_LINK_RE = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

function LinkedCopy({ text }: { text: string }) {
	const parts: ReactNode[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;
	const re = new RegExp(PRODUCT_LINK_RE.source, "g");

	while ((match = re.exec(text)) !== null) {
		if (match.index > lastIndex) {
			parts.push(text.slice(lastIndex, match.index));
		}
		const href = match[2];
		const label = match[1];
		const isExternal = href.startsWith("http");
		parts.push(
			isExternal ? (
				<a
					key={`${href}-${match.index}`}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
				>
					{label}
				</a>
			) : (
				<Link
					key={`${href}-${match.index}`}
					href={href}
					className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
				>
					{label}
				</Link>
			),
		);
		lastIndex = match.index + match[0].length;
	}

	if (lastIndex < text.length) {
		parts.push(text.slice(lastIndex));
	}

	return <>{parts.length > 0 ? parts : text}</>;
}

function Gallery({
	images,
}: {
	images: WorkCaseStudyDetail["galleries"][number];
}) {
	const cols =
		images.length === 1
			? "grid-cols-1"
			: images.length === 2
				? "sm:grid-cols-2"
				: "sm:grid-cols-2 lg:grid-cols-3";

	return (
		<div className={`grid gap-4 ${cols} md:gap-5`}>
			{images.map((image, index) => (
				<motion.figure
					key={image.src}
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.24) }}
					className="overflow-hidden rounded-2xl border bg-card shadow-sm"
				>
					<div className="relative aspect-16/10 bg-muted/40">
						<Image
							src={image.src}
							alt={image.alt}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover object-top"
						/>
					</div>
					{image.caption ? (
						<figcaption className="border-t px-4 py-3 text-sm text-muted-foreground">
							{image.caption}
						</figcaption>
					) : null}
				</motion.figure>
			))}
		</div>
	);
}

export function WorkCaseStudyDetailContent({
	study,
}: {
	study: WorkCaseStudyDetail;
}) {
	const related = getRelatedWorkCaseStudies(study.slug);

	return (
		<>
			<section
				data-nav-theme="dark"
				className="relative overflow-hidden border-b border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-14 text-white md:py-20 lg:py-24"
			>
				<AboutHeroBackdrop />
				<div className="relative mx-auto max-w-6xl px-6">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.55 }}
						className="max-w-3xl"
					>
						<nav
							aria-label="Breadcrumb"
							className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400"
						>
							<Link href="/" className="transition-colors hover:text-slate-200">
								Home
							</Link>
							<span aria-hidden className="text-slate-600">
								›
							</span>
							<Link
								href="/work"
								className="transition-colors hover:text-slate-200"
							>
								Work
							</Link>
							<span aria-hidden className="text-slate-600">
								›
							</span>
							<span className="text-slate-200">{study.client}</span>
						</nav>

						<div className="mb-5 flex flex-wrap gap-2">
							{study.tags.map((tag) => (
								<span
									key={tag}
									className="rounded-md border border-slate-700/80 bg-slate-900/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300"
								>
									{tag}
								</span>
							))}
						</div>

						<p className="mb-3 font-display text-lg font-medium tracking-tight text-slate-200 md:text-xl">
							{study.client}
						</p>

						<h1 className="font-display text-3xl font-medium tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
							{study.headline}
						</h1>

						<p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
							{study.lead}
						</p>

						<div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-800 pt-6 sm:max-w-lg">
							{study.stats.map((stat) => (
								<div key={stat.label}>
									<div className="font-display text-lg font-medium tracking-tight text-slate-50 sm:text-xl">
										{stat.value}
									</div>
									<div className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-500">
										{stat.label}
									</div>
								</div>
							))}
						</div>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							<Button asChild size="lg" className="gap-2">
								<Link href="/contact?subject=Work">
									Book a Free Consultation
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="gap-2 border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800/80 hover:text-slate-50"
							>
								<a
									href={study.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit live site
									<ArrowUpRight className="h-4 w-4" />
								</a>
							</Button>
							<Button
								asChild
								variant="ghost"
								size="lg"
								className="gap-2 text-slate-300 hover:bg-slate-800/60 hover:text-slate-50"
							>
								<Link href={study.productPage.href}>
									{study.productPage.label}
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
			</section>

			<div className="border-b bg-background">
				<div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
					<Link
						href="/work"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						<ArrowLeft className="h-4 w-4" />
						All work
					</Link>
					<div className="flex h-8 items-center">
						<Image
							src={study.logo}
							alt={study.client}
							width={120}
							height={32}
							className="max-h-8 w-auto object-contain object-right"
							style={{ width: "auto" }}
						/>
					</div>
				</div>
			</div>

			<section className="border-t bg-muted/30 py-10 md:py-12">
				<div className="mx-auto max-w-6xl px-6">
					<Link
						href={study.productPage.href}
						className="group flex flex-col gap-3 rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
					>
						<div className="min-w-0">
							<p className="text-xs font-semibold uppercase tracking-widest text-primary">
								Built on
							</p>
							<p className="mt-1 font-display text-xl font-medium tracking-tight md:text-2xl">
								{study.productPage.label}
							</p>
							<p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
								{study.productPage.blurb}
							</p>
						</div>
						<span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
							View product
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
						</span>
					</Link>
				</div>
			</section>

			{study.sections.map((section, sectionIndex) => (
				<section
					key={section.number}
					className={
						sectionIndex % 2 === 0
							? "border-t bg-background py-16 md:py-20"
							: "border-t bg-muted/30 py-16 md:py-20"
					}
				>
					<div className="mx-auto max-w-6xl px-6">
						<motion.div
							className="mx-auto max-w-3xl"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
								{section.number}
							</p>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								{section.title}
							</h2>
							<div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
								{section.paragraphs.map((paragraph) => (
									<p key={paragraph.slice(0, 48)}>
										<LinkedCopy text={paragraph} />
									</p>
								))}
							</div>
						</motion.div>

						{study.galleries[sectionIndex] ? (
							<div className="mt-10 md:mt-12">
								<Gallery images={study.galleries[sectionIndex]} />
							</div>
						) : null}
					</div>
				</section>
			))}

			<section
				id="faq"
				aria-labelledby="work-case-study-faq-heading"
				className="border-t bg-muted/30 py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mx-auto mb-10 max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<SectionBadge
							icon={HelpCircle}
							text="FAQ"
							className="justify-center"
						/>
						<h2
							id="work-case-study-faq-heading"
							className="font-display text-3xl font-medium tracking-tight md:text-4xl"
						>
							Frequently asked questions
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
						className="mx-auto max-w-3xl"
					>
						<Accordion type="single" collapsible className="w-full">
							{study.faq.map((faq, index) => (
								<AccordionItem key={faq.question} value={`item-${index}`}>
									<AccordionTrigger className="py-5 text-left text-base font-medium md:text-lg">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-base leading-relaxed text-muted-foreground md:text-lg">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>
				</div>
			</section>

			{related.length > 0 ? (
				<section className="border-t bg-background py-16 md:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
									More work
								</p>
								<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
									Related case studies
								</h2>
							</div>
							<Button asChild variant="outline" className="gap-2 self-start">
								<Link href="/work">
									View all work
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							{related.map((item, index) => (
								<motion.div
									key={item.slug}
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-40px" }}
									transition={{
										duration: 0.4,
										delay: Math.min(index * 0.06, 0.18),
									}}
								>
									<Link
										href={`/work/${item.slug}`}
										className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
									>
										<div className="flex items-center justify-between gap-3 border-b bg-muted/20 px-5 py-4">
											<div className="flex h-8 w-28 items-center">
												<Image
													src={item.logo}
													alt={item.client}
													width={112}
													height={32}
													className="max-h-8 w-auto object-contain object-left"
													style={{ width: "auto" }}
												/>
											</div>
											<ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
										</div>
										<div className="flex flex-1 flex-col p-5">
											<div className="mb-3 flex flex-wrap gap-1.5">
												{item.tags.slice(0, 2).map((tag) => (
													<Badge
														key={tag}
														variant="secondary"
														className="font-normal text-[10px] text-muted-foreground"
													>
														{tag}
													</Badge>
												))}
											</div>
											<h3 className="font-display text-xl font-medium tracking-tight">
												{item.headline}
											</h3>
											<p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
												{item.lead}
											</p>
										</div>
									</Link>
								</motion.div>
							))}
						</div>
					</div>
				</section>
			) : null}

			<ConsultationCta
				heading="Want a build like this?"
				body="Tell us what you are launching — digital lending, a marketplace, or a regulated platform. We will map the path from brief to go-live."
				primary={{
					href: "/contact?subject=Work",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: study.productPage.href,
					label: study.productPage.label,
				}}
				extraLinks={[
					{ href: "/work", label: "Browse more work" },
					{ href: "/truekredit", label: "TrueKredit™" },
					{
						href: "/services/p2p-software-development",
						label: "TrueP2P™",
					},
					{
						href: "/services/software-development",
						label: "Custom software",
					},
				]}
			/>
		</>
	);
}
