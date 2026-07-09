"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { SectionBadge } from "@/components/shared/section-badge";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type ProofStudy } from "@/lib/case-studies-data";

type SuccessStoriesProofProps = {
	studies: ProofStudy[];
	eyebrow?: string;
	title?: string;
	subtitle?: string;
	viewAllHref?: string;
	viewAllLabel?: string;
	className?: string;
	id?: string;
	/** 3-col default; use 2 for fewer items or denser layouts */
	columns?: 2 | 3 | 4;
};

export function SuccessStoriesProof({
	studies,
	eyebrow = "Selected work",
	title = "Products we've taken live.",
	subtitle = "A selection of platforms shipped with our team — from first build to go-live.",
	viewAllHref = "/work",
	viewAllLabel = "See all success stories",
	className,
	id = "success-stories",
	columns = 3,
}: SuccessStoriesProofProps) {
	const count = studies.length;
	const gridClass =
		count === 1
			? "mx-auto max-w-sm grid-cols-1"
			: count === 2
				? "mx-auto max-w-3xl grid-cols-1 sm:grid-cols-2"
				: columns === 4
					? "sm:grid-cols-2 lg:grid-cols-4"
					: columns === 2
						? "sm:grid-cols-2"
						: "sm:grid-cols-2 lg:grid-cols-3";

	return (
		<section
			id={id}
			aria-labelledby={`${id}-heading`}
			className={cn(
				"scroll-mt-20 border-t bg-muted/30 py-14 md:py-20",
				className,
			)}
		>
			<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
				<motion.div
					className="mx-auto mb-10 max-w-3xl text-center"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<SectionBadge
						icon={Briefcase}
						text={eyebrow}
						className="justify-center"
					/>
					<h2
						id={`${id}-heading`}
						className="font-display text-3xl font-medium tracking-tight md:text-4xl"
					>
						{title}
					</h2>
					{subtitle ? (
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							{subtitle}
						</p>
					) : null}
				</motion.div>

				<motion.div
					className={cn("grid gap-5", gridClass)}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					{studies.map((study) => (
						<div
							key={study.title}
							className="rounded-2xl border bg-card p-5 shadow-sm"
						>
							<div className="mb-3 flex flex-wrap items-center justify-between gap-2">
								<div className="flex h-8 items-center">
									<Image
										src={study.logo}
										alt={study.title}
										width={study.logoWidth ?? 120}
										height={40}
										className="h-8 w-auto max-w-[140px] object-contain object-left"
										style={{ width: "auto" }}
									/>
								</div>
								{study.isComingSoon ? (
									<Badge
										variant="secondary"
										className="text-[10px] sm:text-xs"
									>
										Coming Soon
									</Badge>
								) : null}
							</div>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{study.blurb}
							</p>
						</div>
					))}
				</motion.div>

				{viewAllHref ? (
					<div className="mt-8 text-center">
						<Link
							href={viewAllHref}
							className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
						>
							{viewAllLabel}
							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				) : null}
			</div>
		</section>
	);
}
