"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Ellipsis } from "lucide-react";
import {
	type CaseStudy,
	workCaseStudies,
} from "@/lib/case-studies-data";

function accentBorder(accent?: CaseStudy["accent"]) {
	return accent === "kpkt"
		? "border-kpkt/25 hover:border-kpkt/45"
		: "border-border/80 hover:border-primary/35";
}

function WorkCaseStudyCard({
	study,
	index,
}: {
	study: CaseStudy;
	index: number;
}) {
	const isComingSoon = study.isComingSoon;
	const isKpkt = study.accent === "kpkt";
	const isExternal = study.href.startsWith("http");

	const card = (
		<div
			className={cn(
				"relative flex h-full flex-col overflow-hidden rounded-2xl border bg-linear-to-b from-muted/30 to-background shadow-sm transition-all hover:shadow-md",
				accentBorder(study.accent),
				isKpkt && "from-kpkt/6",
			)}
		>
			<div className="flex items-center justify-between gap-2 border-b bg-muted/20 px-4 py-3.5 sm:px-5">
				<div className="flex h-9 w-28 items-center sm:h-10 sm:w-32">
					<Image
						src={study.logo}
						alt={study.title}
						width={128}
						height={40}
						className="max-h-9 w-auto object-contain object-left sm:max-h-10"
						style={{ width: "auto" }}
					/>
				</div>
				<div className="flex items-center gap-2">
					{study.featured ? (
						<Badge
							variant="secondary"
							className="text-[10px] text-primary sm:text-xs"
						>
							Featured
						</Badge>
					) : null}
					{isComingSoon ? (
						<Badge variant="secondary" className="text-[10px] sm:text-xs">
							Coming Soon
						</Badge>
					) : (
						<ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
					)}
				</div>
			</div>

			<div className="flex flex-1 flex-col p-4 sm:p-5">
				<h3 className="font-display text-lg font-medium tracking-tight">
					{study.title}
				</h3>
				<p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
					{study.description}
				</p>

				{study.tags.length > 0 ? (
					<div className="mt-3 flex flex-wrap gap-1.5">
						{study.tags.map((tag) => (
							<Badge
								key={tag}
								variant="secondary"
								className="font-normal text-[10px] text-muted-foreground sm:text-xs"
							>
								{tag}
							</Badge>
						))}
					</div>
				) : null}

				{study.stats ? (
					<div className="mt-auto grid grid-cols-2 gap-2 pt-4">
						{study.stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-lg bg-muted/30 px-2 py-2 text-center sm:px-3"
							>
								<div className="text-sm font-semibold tracking-tight sm:text-base">
									{stat.value}
								</div>
								<div className="text-[10px] text-muted-foreground">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				) : null}
			</div>
		</div>
	);

	if (isComingSoon) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-40px" }}
				transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
				className="h-full"
			>
				{card}
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
			className="h-full"
		>
			<Link
				href={study.href}
				{...(isExternal
					? { target: "_blank", rel: "noopener noreferrer" }
					: {})}
				className="group block h-full"
			>
				{card}
			</Link>
		</motion.div>
	);
}

function WorkCaseStudyMoreCard({ index }: { index: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
			className="h-full"
		>
			<div className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-dashed border-muted-foreground/25 bg-muted/10">
				<div className="flex items-center justify-center border-b border-dashed border-muted-foreground/20 bg-muted/10 px-5 py-4">
					<Ellipsis
						strokeWidth={1.75}
						className="size-10 text-muted-foreground sm:size-12"
						aria-hidden
					/>
				</div>
				<div className="flex flex-1 flex-col items-center justify-center p-5 text-center sm:p-6">
					<h3 className="font-display text-xl font-medium tracking-tight sm:text-2xl">
						And more
					</h3>
					<p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
						<span className="font-medium text-foreground">
							Your story could be here next.
						</span>{" "}
						Building or scaling a lending or fintech operation in
						Malaysia? Let&apos;s talk.
					</p>
					<Button asChild className="mt-5 gap-2" size="sm">
						<Link href="/contact">
							Start a conversation
							<ArrowRight className="h-3.5 w-3.5" />
						</Link>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

export function WorkCaseStudyGrid({
	studies = workCaseStudies,
	showMoreCard = true,
}: {
	studies?: CaseStudy[];
	showMoreCard?: boolean;
}) {
	return (
		<div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
			{studies.map((study, index) => (
				<WorkCaseStudyCard key={study.title} study={study} index={index} />
			))}
			{showMoreCard ? (
				<WorkCaseStudyMoreCard index={studies.length} />
			) : null}
		</div>
	);
}
