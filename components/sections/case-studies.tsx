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
} from "lucide-react";
import { motion } from "framer-motion";
import {
	type CaseStudy,
	caseStudies,
} from "@/lib/case-studies-data";
import { cn } from "@/lib/utils";

// Re-export the type so existing imports of `CaseStudy` from this module
// keep working. The `caseStudies` data lives in `lib/case-studies-data` so
// it can be safely imported by Server Components too (a "use client" file
// turns its exports into client references when imported from RSC).
export type { CaseStudy };

function CaseStudyCard({
	study,
	featured = false,
	dark = false,
}: {
	study: CaseStudy;
	featured?: boolean;
	dark?: boolean;
}) {
	const isComingSoon = study.isComingSoon;
	const isExternal = study.href.startsWith("http");

	return (
		<Link
			href={study.href}
			{...(isExternal
				? { target: "_blank", rel: "noopener noreferrer" }
				: {})}
			data-carousel-item
			className={
				featured
					? "group mx-auto block w-full max-w-3xl"
					: "group block w-[340px] shrink-0 snap-start sm:w-[440px] md:w-[500px] lg:w-[540px]"
			}
		>
			<div
				className={cn(
					"relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all hover:shadow-lg",
					dark
						? "border-white/90 bg-white text-slate-900 shadow-lg shadow-black/20 hover:border-primary hover:shadow-xl hover:shadow-primary/20"
						: "bg-linear-to-b from-muted/30 to-background hover:border-primary/40",
				)}
			>
				{/* Header with logo */}
				<div
					className={cn(
						"flex items-center justify-between border-b px-8 py-5",
						dark ? "border-slate-100 bg-white" : "bg-muted/20",
					)}
				>
					<div className="flex h-12 w-36 items-center">
						<Image
							src={study.logo}
							alt={study.title}
							width={144}
							height={48}
							className="max-h-12 w-auto object-contain"
							style={{ width: "auto" }}
						/>
					</div>
					{isComingSoon ? (
						<Badge variant="secondary">Coming Soon</Badge>
					) : (
						<span
							className={cn(
								"flex h-9 w-9 items-center justify-center rounded-full transition-colors",
								dark
									? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
									: "text-muted-foreground group-hover:text-primary",
							)}
						>
							<ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
						</span>
					)}
				</div>

				{/* Content */}
				<div className="flex flex-1 flex-col p-8">
					<p
						className={cn(
							"mb-4 text-base",
							dark ? "text-slate-600" : "text-muted-foreground",
						)}
					>
						{study.description}
					</p>

					{study.tags.length > 0 ? (
						<div className="mb-6 flex flex-wrap gap-2">
							{study.tags.map((tag) => (
								<Badge
									key={tag}
									variant="secondary"
									className={cn(
										"font-normal",
										dark
											? "border-transparent bg-primary/10 text-primary"
											: "text-muted-foreground",
									)}
								>
									{tag}
								</Badge>
							))}
						</div>
					) : null}

					{/* Stats */}
					{study.stats && (
						<div className="mt-auto grid grid-cols-2 gap-4">
							{study.stats.map((stat) => (
								<div
									key={stat.label}
									className={cn(
										"rounded-lg p-3 text-center",
										dark
											? "bg-primary/8"
											: "bg-muted/30",
									)}
								>
									<div
										className={cn(
											"text-xl font-semibold",
											dark
												? "text-primary"
												: "text-foreground",
										)}
									>
										{stat.value}
									</div>
									<div
										className={cn(
											"text-xs",
											dark
												? "text-slate-500"
												: "text-muted-foreground",
										)}
									>
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
function SuccessStoriesAndMoreCard({ dark = false }: { dark?: boolean }) {
	return (
		<div
			data-carousel-item
			className="block w-[340px] shrink-0 snap-start sm:w-[440px] md:w-[500px] lg:w-[540px]"
			aria-label="Your story could appear here next"
		>
			<div
				className={cn(
					"relative flex h-full min-h-88 flex-col overflow-hidden rounded-2xl border border-dashed md:min-h-96",
					dark
						? "border-primary/40 bg-white text-slate-900"
						: "border-muted-foreground/25 bg-muted/10",
				)}
			>
				<div
					className={cn(
						"flex items-center justify-center border-b border-dashed px-8 py-5",
						dark
							? "border-slate-100 bg-white"
							: "border-muted-foreground/20 bg-muted/10",
					)}
				>
					<div
						className={cn(
							"flex h-12 items-center gap-3",
							dark ? "text-primary/40" : "text-muted-foreground",
						)}
					>
						<Ellipsis
							strokeWidth={1.75}
							className="size-12 shrink-0 sm:size-14"
							aria-hidden
						/>
					</div>
				</div>
				<div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
					<h3 className="font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
						And More
					</h3>
					<p className="mx-auto mt-4 max-w-sm text-base text-slate-600">
						<span className="font-medium text-slate-900">
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
	/**
	 * When true, render a single centered, wider featured card instead of the
	 * horizontal carousel. Uses the first study from `studies`. Skips the
	 * prev/next controls and the trailing "And More" card.
	 */
	featured?: boolean;
	/** Dark slate theme (homepage). */
	variant?: "light" | "dark";
}

export function CaseStudies({
	studies = caseStudies,
	title = "Success Stories",
	subtitle = "See how we've helped Malaysian Fintech operators go digital and scale their businesses.",
	className,
	showAndMoreCard = false,
	featured = false,
	variant = "light",
}: CaseStudiesProps = {}) {
	const dark = variant === "dark";
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

	const featuredStudy = featured ? studies[0] : null;

	return (
		<section
			data-nav-theme={dark ? "dark" : undefined}
			className={cn(
				dark
					? "relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-24 text-white md:py-28 lg:py-32"
					: "border-t py-20",
				className,
			)}
		>
			{dark ? (
				<div className="pointer-events-none absolute inset-0" aria-hidden>
					<div className="absolute -top-32 right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
					<div className="absolute -bottom-32 left-[-10%] h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-3xl" />
					<svg
						className="absolute inset-0 h-full w-full opacity-[0.04]"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<pattern
								id="success-stories-grid"
								width="56"
								height="56"
								patternUnits="userSpaceOnUse"
							>
								<path
									d="M 56 0 L 0 0 0 56"
									fill="none"
									stroke="white"
									strokeWidth="1"
								/>
							</pattern>
						</defs>
						<rect
							width="100%"
							height="100%"
							fill="url(#success-stories-grid)"
						/>
					</svg>
				</div>
			) : null}

			{/* Section-style centered header. Title is centered; the prev/next
          buttons live at the bottom-right of the same header block on md+. */}
			<motion.div
				className={cn(
					"relative mx-auto mb-10 max-w-6xl px-5 sm:px-6 lg:px-8",
					dark && "z-10",
				)}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5 }}
			>
				<div className="mx-auto max-w-3xl text-center">
					<h2
						className={cn(
							"font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl",
							dark && "text-white",
						)}
					>
						{title}
					</h2>
					<p
						className={cn(
							"mx-auto mt-4 max-w-2xl text-base md:text-lg",
							dark ? "text-slate-400" : "text-muted-foreground",
						)}
					>
						{subtitle}
					</p>
				</div>

				{/* Prev/Next pinned to the right side (md+) — only for the carousel layout */}
				{!featured && (
					<div className="absolute bottom-0 right-5 hidden gap-2 sm:right-6 md:flex lg:right-8">
						<button
							type="button"
							onClick={() => scrollByPage(-1)}
							disabled={!canPrev}
							className={cn(
								"flex h-10 w-10 items-center justify-center rounded-full border transition-all disabled:cursor-not-allowed disabled:opacity-30",
								dark
									? "border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500/40 hover:text-blue-400"
									: "bg-background text-foreground hover:border-primary/40 hover:text-primary",
							)}
							aria-label="Previous"
						>
							<ChevronLeft className="h-4 w-4" />
						</button>
						<button
							type="button"
							onClick={() => scrollByPage(1)}
							disabled={!canNext}
							className={cn(
								"flex h-10 w-10 items-center justify-center rounded-full border transition-all disabled:cursor-not-allowed disabled:opacity-30",
								dark
									? "border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500/40 hover:text-blue-400"
									: "bg-background text-foreground hover:border-primary/40 hover:text-primary",
							)}
							aria-label="Next"
						>
							<ChevronRight className="h-4 w-4" />
						</button>
					</div>
				)}
			</motion.div>

			{featuredStudy ? (
				<motion.div
					className={cn(
						"mx-auto max-w-6xl px-5 sm:px-6 lg:px-8",
						dark && "relative z-10",
					)}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<CaseStudyCard
						study={featuredStudy}
						featured
						dark={dark}
					/>
				</motion.div>
			) : (
				/* Full-bleed scroller. scroll-pl ensures snap respects the left padding
            so the first card stays inset (doesn't snap back to the edge after
            interaction). pr keeps matching breathing room after the last card. */
				<div
					ref={scrollerRef}
					className={cn(
						"flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-6 pl-5 pr-5 scroll-pl-5 sm:gap-5 sm:pl-6 sm:pr-6 sm:scroll-pl-6 lg:pl-8 lg:pr-8 lg:scroll-pl-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						dark && "relative z-10",
					)}
				>
					{studies.map((study) => (
						<CaseStudyCard
							key={study.title}
							study={study}
							dark={dark}
						/>
					))}
					{showAndMoreCard ? (
						<SuccessStoriesAndMoreCard dark={dark} />
					) : null}
				</div>
			)}
		</section>
	);
}
