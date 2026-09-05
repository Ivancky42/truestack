"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
	const t = useTranslations("WorkChrome");
	const tCommon = useTranslations("Common");

	return (
		<section
			data-nav-theme="dark"
			className="relative -mt-18 overflow-hidden border-b border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 pt-[calc(3.5rem+4.5rem)] pb-14 text-white md:pt-[calc(5rem+4.5rem)] md:pb-20 lg:pt-[calc(6rem+4.5rem)] lg:pb-24"
		>
			<AboutHeroBackdrop />
			<div className="relative hero-shell px-6 text-center">
				<motion.div
					className="mx-auto max-w-3xl"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Badge
						variant="outline"
						className="mb-5 gap-1.5 border-primary/30 bg-primary/10 px-3 py-1 text-primary"
					>
						<Briefcase className="h-3.5 w-3.5" />
						{t("hero.eyebrow")}
					</Badge>

					<h1 className="type-h1 text-slate-50">
						{t.rich("hero.title", {
							accent: (chunks) => (
								<span className="bg-linear-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
									{chunks}
								</span>
							),
						})}
					</h1>

					<p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
						{t("hero.lede")}
					</p>

					<div className="mt-6 flex flex-wrap justify-center gap-2">
						{[
							{ icon: FileCheck, key: "kpkt" as const },
							{ icon: Shield, key: "enterprise" as const },
							{ icon: Database, key: "aws" as const },
						].map((pill) => (
							<span
								key={pill.key}
								className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-400 backdrop-blur-sm"
							>
								<pill.icon className="h-3.5 w-3.5 text-primary" />
								{t(`hero.pills.${pill.key}`)}
							</span>
						))}
					</div>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button asChild size="lg" className="gap-2">
							<CtaLink href="#success-stories">
								{t("hero.viewStories")}
								<ArrowRight className="h-4 w-4" />
							</CtaLink>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800/80 hover:text-slate-50"
						>
							<Link href="/contact">{tCommon("bookConsultation")}</Link>
						</Button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export function WorkPageContent() {
	const t = useTranslations("WorkChrome");

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
							text={t("grid.eyebrow")}
							className="justify-center"
						/>
						<h2
							id="success-stories-heading"
							className="type-h2"
						>
							{t("grid.title")}
						</h2>
						<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
							{t("grid.lede")}
						</p>
					</div>
					<WorkCaseStudyGrid />
				</div>
			</section>

			<ConsultationCta
				heading={t("cta.heading")}
				body={t("cta.body")}
				secondary={{
					href: "/services/digital-license",
					label: t("cta.secondary"),
				}}
			/>
		</>
	);
}
