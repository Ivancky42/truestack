"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Check,
	ChevronRight,
	Layers,
	Plug,
	ShieldCheck,
	Smartphone,
	X,
} from "lucide-react";
import { SoftwareDevelopmentHero } from "@/components/sections/software-development-hero";
import { SoftwareDevelopmentFaq } from "@/components/sections/software-development-faq";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { SectionBadge } from "@/components/shared/section-badge";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { pickProofStudies } from "@/lib/case-studies-data";
import { Button } from "@/components/ui/button";
import LogoCloud1 from "@/components/logo-cloud-1";

const buildAreas = [
	{ key: "webMobile", icon: Smartphone },
	{ key: "platforms", icon: Layers },
	{ key: "integrations", icon: Plug },
	{ key: "secure", icon: ShieldCheck },
] as const;

const journeySteps = [
	{ step: "1" },
	{ step: "2", highlight: true },
	{ step: "3" },
	{ step: "4" },
] as const;

const USUAL_KEYS = ["generic", "hands", "domain"] as const;
const WITH_KEYS = ["operate", "milestones", "oneTeam"] as const;
const TRUST_KEYS = ["foundations", "infra", "support"] as const;

export function SoftwareDevelopmentPageContent() {
	const t = useTranslations("SoftwareDevelopment");
	const tCommon = useTranslations("Common");

	return (
		<>
			<SoftwareDevelopmentHero />

			{/* Story */}
			<section id="story" className="border-t bg-background py-14 md:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							{t("story.eyebrow")}
						</p>
						<h2 className="type-h2">
							{t.rich("story.title", {
								muted: (chunks) => (
									<span className="text-muted-foreground">
										{chunks}
									</span>
								),
							})}
						</h2>
						<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
							{t("story.body")}
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-500/30">
								<X className="h-3.5 w-3.5" />
								{t("story.usualBadge")}
							</span>
							<h3 className="mt-5 type-card-title">
								{t("story.usualTitle")}
							</h3>
							<ul className="mt-6 space-y-3.5">
								{USUAL_KEYS.map((key) => (
									<li
										key={key}
										className="rounded-xl border border-white/10 bg-white/5 p-3.5"
									>
										<p className="text-sm font-semibold text-white">
											{t(`story.usual.${key}.title`)}
										</p>
										<p className="mt-0.5 text-sm leading-snug text-slate-400">
											{t(`story.usual.${key}.desc`)}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/8 via-background to-violet-500/5 p-6 shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
								<Check className="h-3.5 w-3.5" />
								{t("story.withBadge")}
							</span>
							<h3 className="mt-5 type-card-title">
								{t("story.withTitle")}
							</h3>
							<p className="mt-3 text-sm text-muted-foreground md:text-[15px]">
								{t("story.withBody")}
							</p>
							<ul className="mt-6 space-y-3.5">
								{WITH_KEYS.map((key) => (
									<li
										key={key}
										className="rounded-xl border border-primary/15 bg-background/80 p-3.5 shadow-sm"
									>
										<p className="text-sm font-semibold text-foreground">
											{t(`story.with.${key}.title`)}
										</p>
										<p className="mt-0.5 text-sm leading-snug text-muted-foreground">
											{t(`story.with.${key}.desc`)}
										</p>
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Human outcome — one team from idea to live */}
			<section className="border-t bg-muted/30 py-14 md:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<p className="mb-3 type-eyebrow text-primary">
								{t("howWeBuild.eyebrow")}
							</p>
							<h2 className="type-h2">
								{t("howWeBuild.title")}
							</h2>
							<p className="mt-4 max-w-xl type-lede text-muted-foreground">
								{t("howWeBuild.body")}
							</p>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/software-dev-pairing.jpg"
								alt={t("howWeBuild.photoAlt")}
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							<div
								className="absolute inset-0 bg-primary/10 mix-blend-multiply"
								aria-hidden
							/>
						</div>
					</motion.div>
				</div>
			</section>

			{/* What we build */}
			<section
				id="what-we-build"
				className="scroll-mt-20 border-t bg-background py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							{t("build.eyebrow")}
						</p>
						<h2 className="type-h2">
							{t("build.title")}
						</h2>
						<p className="mx-auto mt-4 max-w-2xl type-lede text-muted-foreground">
							{t("build.body")}
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-5 sm:grid-cols-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						{buildAreas.map((item) => (
							<div
								key={item.key}
								className="rounded-2xl border bg-card p-6 shadow-sm"
							>
								<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
									<item.icon className="h-5 w-5 text-primary" />
								</div>
								<h3 className="type-card-title">
									{t(`build.items.${item.key}.title`)}
								</h3>
								<p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
									{t(`build.items.${item.key}.desc`)}
								</p>
							</div>
						))}
					</motion.div>

					<p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
						{t("build.footer")}
					</p>
				</div>
			</section>

			{/* How we work */}
			<section
				id="how-we-work"
				className="scroll-mt-20 border-t bg-muted/30 py-14 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<p className="mb-3 type-eyebrow text-primary">
								{t("howWeWork.eyebrow")}
							</p>
							<h2 className="type-h2">
								{t("howWeWork.title")}
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								{t("howWeWork.body")}
							</p>
							<div className="relative mt-6 aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
								<Image
									src="/photos/software-dev-discovery.jpg"
									alt={t("howWeWork.photoAlt")}
									fill
									sizes="(max-width: 1024px) 100vw, 45vw"
									className="object-cover"
								/>
								<div
									className="absolute inset-0 bg-primary/10 mix-blend-multiply"
									aria-hidden
								/>
							</div>
							<div className="mt-6 flex flex-wrap gap-3">
								<Button asChild size="lg" className="gap-2">
									<Link href="/contact?subject=Custom%20Software">
										{t("howWeWork.startCta")}
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="gap-2"
								>
									<Link href="/work">
										{t("howWeWork.workCta")}
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>

						<ol className="space-y-2.5">
							{journeySteps.map((s) => (
								<li
									key={s.step}
									className={`flex gap-4 rounded-xl border bg-card p-4 ${
										"highlight" in s && s.highlight
											? "border-primary/35 bg-primary/5"
											: ""
									}`}
								>
									<div
										className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
											"highlight" in s && s.highlight
												? "bg-primary text-primary-foreground"
												: "bg-muted text-foreground"
										}`}
									>
										{s.step}
									</div>
									<div>
										<p
											className={`font-medium ${
												"highlight" in s && s.highlight
													? "text-primary"
													: ""
											}`}
										>
											{t(`howWeWork.steps.${s.step}.title`)}
										</p>
										<p className="mt-0.5 text-sm text-muted-foreground">
											{t(`howWeWork.steps.${s.step}.desc`)}
										</p>
									</div>
								</li>
							))}
						</ol>
					</motion.div>
				</div>
			</section>

			{/* Trust */}
			<section
				id="trust"
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-14 text-white md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<SectionBadge
								icon={ShieldCheck}
								text={t("trust.badge")}
								className="[&>svg]:text-primary [&>span]:text-primary"
							/>
							<h2 className="type-h2">
								{t("trust.title")}
							</h2>
							<p className="mt-4 text-lg text-slate-400">
								{t("trust.body")}
							</p>
						</motion.div>

						<motion.ul
							className="space-y-3"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.08 }}
						>
							{TRUST_KEYS.map((key) => (
								<li
									key={key}
									className="rounded-xl border border-slate-800 bg-slate-900/50 p-4"
								>
									<p className="font-medium text-white">
										{t(`trust.items.${key}.title`)}
									</p>
									<p className="mt-1 text-sm text-slate-400">
										{t(`trust.items.${key}.desc`)}
									</p>
								</li>
							))}
						</motion.ul>
					</div>
				</div>
			</section>

			{/* Proof */}
			<SuccessStoriesProof
				id="proof"
				studies={pickProofStudies({
					product: "CustomSoftware",
					limit: 6,
				})}
				title={t("proof.title")}
				subtitle={t("proof.subtitle")}
				columns={3}
			/>

			<div className="border-t bg-muted/30 pb-14 md:pb-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<LogoCloud1 className="py-0" />
				</div>
			</div>

			<p className="mx-auto max-w-2xl px-6 pb-2 text-center text-sm text-muted-foreground">
				{t("crossLinks.lead")}{" "}
				<Link
					href="/truekredit"
					className="font-medium text-primary hover:underline"
				>
					TrueKredit™
				</Link>
				{" · "}
				<Link
					href="/truesyariah"
					className="font-medium text-primary hover:underline"
				>
					TrueSyariah™
				</Link>
				{" · "}
				<Link
					href="/services/p2p-software-development"
					className="font-medium text-primary hover:underline"
				>
					TrueP2P™
				</Link>
				{" · "}
				<Link
					href="/services/digital-license"
					className="font-medium text-primary hover:underline"
				>
					Digital KPKT Licence
				</Link>
			</p>

			<SoftwareDevelopmentFaq />

			<ConsultationCta
				heading={t("cta.heading")}
				body={t("cta.body")}
				primary={{
					href: "/contact?subject=Custom%20Software",
					label: tCommon("bookConsultation"),
				}}
				secondary={{
					href: "/work",
					label: t("cta.secondary"),
				}}
			/>
		</>
	);
}
