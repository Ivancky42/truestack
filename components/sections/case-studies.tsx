"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
	ArrowUpRight,
	ChevronLeft,
	ChevronRight,
	Ellipsis,
	Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import {
	type CaseStudy,
	caseStudies,
} from "@/lib/case-studies-data";

// Re-export the type so existing imports of `CaseStudy` from this module
// keep working. The `caseStudies` data lives in `lib/case-studies-data` so
// it can be safely imported by Server Components too (a "use client" file
// turns its exports into client references when imported from RSC).
export type { CaseStudy };

function CaseStudyCard({ study }: { study: CaseStudy }) {
	const isComingSoon = study.isComingSoon;

	return (
		<Link
			href={study.href}
			target="_blank"
			rel="noopener noreferrer"
			data-carousel-item
			className="group block w-[340px] shrink-0 snap-start sm:w-[440px] md:w-[500px] lg:w-[540px]"
		>
			<div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-linear-to-b from-muted/30 to-background transition-all hover:border-primary/40 hover:shadow-lg">
				{/* Header with logo */}
				<div className="flex items-center justify-between border-b bg-muted/20 px-8 py-5">
					<div className="flex h-12 w-36 items-center">
						<Image
							src={study.logo}
							alt={study.title}
							width={144}
							height={48}
							className="max-h-12 w-auto object-contain"
						/>
					</div>
					{isComingSoon ? (
						<Badge variant="secondary">Coming Soon</Badge>
					) : (
						<ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
					)}
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col p-8">
					<p className="mb-6 flex-1 text-base text-muted-foreground">
						{study.description}
					</p>

					{/* Quote if available */}
					{study.quote && (
						<div className="mb-6 flex items-start gap-3 rounded-xl bg-primary/5 p-4">
							<Quote className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
							<p className="text-sm italic text-foreground">
								{study.quote}
							</p>
						</div>
					)}

					{/* Stats */}
					{study.stats && (
						<div className="grid grid-cols-2 gap-4">
							{study.stats.map((stat) => (
								<div
									key={stat.label}
									className="rounded-lg bg-muted/30 p-3 text-center"
								>
									<div className="text-xl font-semibold text-foreground">
										{stat.value}
									</div>
									<div className="text-xs text-muted-foreground">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}

/** Trailing carousel tile — not linked; invitation to become a featured story. */
function SuccessStoriesAndMoreCard() {
	return (
		<div
			data-carousel-item
			className="block w-[340px] shrink-0 snap-start sm:w-[440px] md:w-[500px] lg:w-[540px]"
			aria-label="Your story could appear here next"
		>
			<div className="relative flex h-full min-h-88 flex-col overflow-hidden rounded-2xl border border-dashed border-muted-foreground/25 bg-muted/10 md:min-h-96">
				<div className="flex items-center justify-center border-b border-dashed border-muted-foreground/20 bg-muted/10 px-8 py-5">
					<div className="flex h-12 items-center gap-3 text-muted-foreground">
						<Ellipsis
							strokeWidth={1.75}
							className="size-12 shrink-0 sm:size-14"
							aria-hidden
						/>
					</div>
				</div>
				<div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
					<h3 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
						And More
					</h3>
					<p className="mx-auto mt-4 max-w-sm text-base text-muted-foreground">
						<span className="font-medium text-foreground">
							Your story could be here next.
						</span>{" "}
						If you&apos;re building or scaling a lending or fintech
						operation in Malaysia, we&apos;d love to hear what
						you&apos;re working toward.
					</p>
				</div>
			</div>
		</div>
	);
}

interface CaseStudiesProps {
	/** Optional subset/ordering of case studies to display. Defaults to all. */
	studies?: CaseStudy[];
	/** Optional heading override. */
	title?: string;
	/** Optional subtitle override. */
	subtitle?: string;
	/** Optional className for the outer <section>. */
	className?: string;
	/** When true (e.g. home page carousel), renders a trailing non-clickable teaser card. */
	showAndMoreCard?: boolean;
}

export function CaseStudies({
	studies = caseStudies,
	title = "Success Stories",
	subtitle = "See how we've helped Malaysian Fintech operators go digital and scale their businesses.",
	className = "border-t py-20",
	showAndMoreCard = false,
}: CaseStudiesProps = {}) {
	const scrollerRef = useRef<HTMLDivElement>(null);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(true);

	const updateButtons = useCallback(() => {
		const el = scrollerRef.current;
		if (!el) return;
		setCanPrev(el.scrollLeft > 8);
		setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
	}, []);

	useEffect(() => {
		const el = scrollerRef.current;
		if (!el) return;
		updateButtons();
		el.addEventListener("scroll", updateButtons, { passive: true });
		window.addEventListener("resize", updateButtons);
		return () => {
			el.removeEventListener("scroll", updateButtons);
			window.removeEventListener("resize", updateButtons);
		};
	}, [updateButtons]);

	const scrollByPage = (dir: 1 | -1) => {
		const el = scrollerRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-carousel-item]");
		const cardWidth = card?.offsetWidth ?? 320;
		const gap = 16;
		el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
	};

	return (
		<section className={className}>
			{/* Section-style centered header. Title is centered; the prev/next
          buttons live at the bottom-right of the same header block on md+. */}
			<motion.div
				className="relative mx-auto mb-10 max-w-6xl px-5 sm:px-6 lg:px-8"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5 }}
			>
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						{title}
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						{subtitle}
					</p>
				</div>

				{/* Prev/Next pinned to the right side (md+) */}
				<div className="absolute bottom-0 right-5 hidden gap-2 sm:right-6 md:flex lg:right-8">
					<button
						type="button"
						onClick={() => scrollByPage(-1)}
						disabled={!canPrev}
						className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
						aria-label="Previous"
					>
						<ChevronLeft className="h-4 w-4" />
					</button>
					<button
						type="button"
						onClick={() => scrollByPage(1)}
						disabled={!canNext}
						className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
						aria-label="Next"
					>
						<ChevronRight className="h-4 w-4" />
					</button>
				</div>
			</motion.div>

			{/* Full-bleed scroller. scroll-pl ensures snap respects the left padding
          so the first card stays inset (doesn't snap back to the edge after
          interaction). pr keeps matching breathing room after the last card. */}
			<div
				ref={scrollerRef}
				className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pl-5 pr-5 scroll-pl-5 sm:gap-5 sm:pl-6 sm:pr-6 sm:scroll-pl-6 lg:pl-8 lg:pr-8 lg:scroll-pl-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				{studies.map((study) => (
					<CaseStudyCard key={study.title} study={study} />
				))}
				{showAndMoreCard ? <SuccessStoriesAndMoreCard /> : null}
			</div>
		</section>
	);
}
