"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { InsightCard } from "@/components/shared/insight-card";
import type { InsightPostSummary } from "@/lib/insights/types";

export function HomepageInsights({ posts }: { posts: InsightPostSummary[] }) {
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
	}, [updateButtons, posts.length]);

	const scrollByPage = (dir: 1 | -1) => {
		const el = scrollerRef.current;
		if (!el) return;
		const card = el.querySelector<HTMLElement>("[data-carousel-item]");
		const cardWidth = card?.offsetWidth ?? 320;
		el.scrollBy({ left: dir * (cardWidth + 20), behavior: "smooth" });
	};

	if (posts.length === 0) return null;

	return (
		<section
			id="insights-latest"
			aria-labelledby="insights-latest-heading"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<div className="max-w-xl">
						<p className="mb-3 type-eyebrow text-primary">
							Insights
						</p>
						<h2 id="insights-latest-heading" className="type-h2">
							What we are seeing in Malaysian lending.
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							KPKT, loan books and the rules that change how you
							lend — written from the work, not the brochure.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<Link
							href="/insights"
							className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
						>
							All insights
							<ArrowRight className="h-4 w-4" />
						</Link>
						<div className="hidden gap-2 md:flex">
							<button
								type="button"
								onClick={() => scrollByPage(-1)}
								disabled={!canPrev}
								className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
								aria-label="Previous articles"
							>
								<ChevronLeft className="h-4 w-4" />
							</button>
							<button
								type="button"
								onClick={() => scrollByPage(1)}
								disabled={!canNext}
								className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-foreground transition-all hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
								aria-label="Next articles"
							>
								<ChevronRight className="h-4 w-4" />
							</button>
						</div>
					</div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5, delay: 0.08 }}
			>
				<div
					ref={scrollerRef}
					className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 pl-5 pr-5 scroll-pl-5 sm:pl-6 sm:pr-6 sm:scroll-pl-6 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pr-8 lg:scroll-pl-[max(2rem,calc((100vw-72rem)/2+2rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				>
					{posts.map((post, index) => (
						<div
							key={post._id}
							data-carousel-item
							className="w-[min(100%,20rem)] shrink-0 snap-start sm:w-85"
						>
							<InsightCard post={post} priority={index === 0} />
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
