"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AboutHeroBackdrop } from "@/components/sections/about-hero-backdrop";
import { CtaLink } from "@/components/shared/cta-link";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { WorkCaseStudyGrid } from "@/components/sections/work-case-study-grid";
import { SectionBadge } from "@/components/shared/section-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	ArrowRight,
	Briefcase,
	Database,
	FileCheck,
	Shield,
} from "lucide-react";

function WorkHero() {
	return (
		<section
			data-nav-theme="dark"
			className="relative -mt-18 overflow-hidden border-b border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 pt-[calc(3.5rem+4.5rem)] pb-14 text-white md:pt-[calc(5rem+4.5rem)] md:pb-20 lg:pt-[calc(6rem+4.5rem)] lg:pb-24"
		>
			<AboutHeroBackdrop />
			<div className="relative mx-auto max-w-3xl px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Badge
						variant="outline"
						className="mb-5 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
					>
						<Briefcase className="h-3.5 w-3.5" />
						Our work
					</Badge>

					<h1 className="type-h1 text-slate-50">
						See what{" "}
						<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
							live
						</span>{" "}
						looks like.
					</h1>

					<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
						Real platforms we&apos;ve taken from idea to go-live —
						so you can see the outcome before you commit.
					</p>

					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{[
							{ icon: FileCheck, label: "KPKT digital conversion" },
							{ icon: Shield, label: "Enterprise lending" },
							{ icon: Database, label: "AWS Malaysia" },
						].map((pill) => (
							<span
								key={pill.label}
								className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm"
							>
								<pill.icon className="h-3.5 w-3.5 text-primary" />
								{pill.label}
							</span>
						))}
					</div>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button asChild size="lg" className="gap-2">
							<CtaLink href="#success-stories">
								View success stories
								<ArrowRight className="h-4 w-4" />
							</CtaLink>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800/80 hover:text-slate-50"
						>
							<Link href="/contact">Book a Free Consultation</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export function WorkPageContent() {
	return (
		<>
			<WorkHero />

			<section
				id="success-stories"
				aria-labelledby="success-stories-heading"
				className="scroll-mt-24 border-t bg-muted/10 py-16 md:py-24"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
						<SectionBadge
							icon={Briefcase}
							text="Selected work"
							className="justify-center"
						/>
						<h2
							id="success-stories-heading"
							className="type-h2"
						>
							Success stories
						</h2>
						<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
							Featured case studies and live platforms — from
							digital KPKT conversions to ecommerce and enterprise
							lending cores.
						</p>
					</div>
					<WorkCaseStudyGrid />
				</div>
			</section>

			<ConsultationCta
				heading="Ready for your story to be next?"
				body="Whether you are going digital, replatforming, or starting fresh — book a free consultation and we will map the path from where you are to go-live."
				secondary={{
					href: "/services/digital-license",
					label: "Explore Digital License",
				}}
			/>
		</>
	);
}
