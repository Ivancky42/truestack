"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	ArrowRight,
	FileBadge,
	Headphones,
	Monitor,
	Server,
	ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DigitalLicenseHero } from "@/components/sections/digital-license-hero";
import { DigitalLicenseQualify } from "@/components/sections/digital-license-qualify";
import { DigitalLicenseFaq } from "@/components/sections/digital-license-faq";
import { DigitalLicenseTestimonial } from "@/components/sections/digital-license-testimonial";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { SuccessStoriesProof } from "@/components/sections/success-stories-proof";
import { pickProofStudiesByTitles } from "@/lib/case-studies-data";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";
import { CrossLinkStrip } from "@/components/shared/cross-link-strip";
import { DigitalLicensePaths } from "@/components/sections/digital-license-paths";
import { BorrowerPortalCollage } from "@/components/sections/truekredit-borrower-visuals";

const STORY_TODAY = ["limited", "opaque", "buildRisk"] as const;
const STORY_AFTER = ["nationwide", "journey", "pro"] as const;

const OFFER: { key: "licence" | "platform" | "golive"; icon: LucideIcon }[] = [
	{ key: "licence", icon: FileBadge },
	{ key: "platform", icon: Monitor },
	{ key: "golive", icon: Headphones },
];

const JOURNEY: {
	step: "1" | "2" | "3" | "4";
	highlight?: boolean;
}[] = [
	{ step: "1" },
	{ step: "2" },
	{ step: "3" },
	{ step: "4", highlight: true },
];

const PLATFORM_POINTS = ["channels", "signing", "cloud"] as const;

const TRUST: { key: "data" | "signing" | "audit"; icon: LucideIcon }[] = [
	{ key: "data", icon: Server },
	{ key: "signing", icon: ShieldCheck },
	{ key: "audit", icon: FileBadge },
];

const WORK_TITLES = [
	"ezdana",
	"PinjoCep",
	"Proficient Premium",
	"Andas Capital",
	"CreditXpress",
	"Fundle",
] as const;

export function DigitalLicensePageContent() {
	const t = useTranslations("DigitalLicense");
	const tCommon = useTranslations("Common");
	const proChips = t.raw("platform.chips") as string[];

	return (
		<>
			<DigitalLicenseHero />
			<DigitalLicensePaths />
			<CrossLinkStrip
				id="looking-for-the-platform"
				ariaLabel={t("crossLink.ariaLabel")}
				lead={t("crossLink.lead")}
				body={t("crossLink.body")}
				href="/truekredit"
				cta={t("crossLink.cta")}
				accent="violet"
			/>
			<DigitalLicenseQualify />

			<section id="story" className="border-t bg-background py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-9 max-w-[44em]"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="type-eyebrow mb-3 text-primary">
							{t("story.eyebrow")}
						</p>
						<h2 className="type-h2 text-foreground">
							{t("story.title")}
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							{t("story.body")}
						</p>
					</motion.div>

					<motion.div
						className="grid gap-6 lg:grid-cols-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						<div className="rounded-xl border bg-card p-[30px] shadow-sm">
							<p className="type-eyebrow mb-2.5 text-muted-foreground/70">
								{t("story.todayEyebrow")}
							</p>
							<h3 className="text-xl font-semibold text-foreground/80">
								{t("story.todayTitle")}
							</h3>
							<ul className="mt-[22px] flex flex-col gap-[18px]">
								{STORY_TODAY.map((key) => (
									<li key={key}>
										<p className="font-semibold text-foreground/80">
											{t(`story.today.${key}.title`)}
										</p>
										<p className="mt-0.5 text-[15px] text-muted-foreground">
											{t(`story.today.${key}.desc`)}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="relative overflow-hidden rounded-xl border border-primary/25 bg-primary/4 p-[30px] shadow-sm">
							<p className="type-eyebrow mb-2.5 text-primary">
								{t("story.afterEyebrow")}
							</p>
							<h3 className="text-xl font-semibold text-foreground">
								{t("story.afterTitle")}
							</h3>
							<ul className="mt-[22px] mb-6 flex flex-col gap-[18px]">
								{STORY_AFTER.map((key) => (
									<li key={key}>
										<p className="font-semibold text-foreground">
											{t(`story.after.${key}.title`)}
										</p>
										<p className="mt-0.5 text-[15px] text-muted-foreground">
											{t(`story.after.${key}.desc`)}
										</p>
									</li>
								))}
							</ul>
							<CtaLink
								href="#platform"
								className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
							>
								{t("story.explorePro")}
								<ArrowRight className="h-4 w-4" />
							</CtaLink>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="pb-16 md:pb-20">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-8 max-w-[44em]"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="type-eyebrow mb-3 text-primary">
							{t("offer.eyebrow")}
						</p>
						<h2 className="type-h2 text-foreground">
							{t("offer.title")}
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							{t("offer.body")}
						</p>
					</motion.div>

					<motion.div
						className="grid gap-5 md:grid-cols-3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						{OFFER.map((item) => (
							<div
								key={item.key}
								className="rounded-xl border bg-primary/3 p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
									<item.icon
										className="h-6 w-6 text-primary"
										aria-hidden
									/>
								</div>
								<h3 className="type-card-title text-foreground">
									{t(`offer.items.${item.key}.title`)}
								</h3>
								<p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
									{t(`offer.items.${item.key}.desc`)}
								</p>
							</div>
						))}
					</motion.div>
					<p className="mt-[22px] text-[17px] text-muted-foreground">
						{t("offer.footer")}
					</p>
				</div>
			</section>

			<section
				id="journey"
				className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
						<motion.div
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<p className="type-eyebrow mb-3 text-primary">
								{t("journey.eyebrow")}
							</p>
							<h2 className="type-h2 text-foreground">
								{t("journey.title")}
							</h2>
							<p className="mt-4 text-[17px] text-muted-foreground">
								{t("journey.body")}
							</p>
							<div className="relative mt-6 aspect-4/3 overflow-hidden rounded-[14px] border shadow-sm">
								<Image
									src="/photos/homepage-fintech-team.jpg"
									alt={t("journey.photoAlt")}
									fill
									sizes="(max-width: 1024px) 100vw, 45vw"
									className="object-cover"
								/>
							</div>
							<div className="mt-[22px] flex flex-wrap gap-3">
								<Button asChild size="lg">
									<Link href="/contact?subject=Digital%20KPKT%20Licence">
										{t("journey.talkCta")}
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<CtaLink href="#platform">
										{t("journey.seeProCta")}
									</CtaLink>
								</Button>
							</div>
						</motion.div>

						<motion.ol
							className="flex flex-col gap-3.5"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.08 }}
						>
							{JOURNEY.map((step, index) => (
								<li key={step.step} className="flex gap-[18px]">
									<div className="flex shrink-0 flex-col items-center">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary-start to-primary-end type-mono-label font-medium text-primary-foreground">
											{step.step}
										</div>
										{index < JOURNEY.length - 1 ? (
											<div
												className="mt-2 w-0.5 flex-1 bg-primary/20"
												aria-hidden
											/>
										) : null}
									</div>
									<div
										className={`flex-1 rounded-xl border bg-card p-[22px] shadow-sm ${
											step.highlight
												? "border-primary/35 shadow-primary/10"
												: ""
										}`}
									>
										<div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
											<h3 className="type-subhead text-foreground">
												{t(`journey.steps.${step.step}.title`)}
											</h3>
											<span className="type-mono-label font-medium text-primary">
												{t(`journey.steps.${step.step}.weeks`)}
											</span>
										</div>
										<p className="text-base text-muted-foreground">
											{t(`journey.steps.${step.step}.desc`)}
										</p>
									</div>
								</li>
							))}
						</motion.ol>
					</div>
				</div>
			</section>

			<section
				id="platform"
				className="scroll-mt-20 border-t bg-background py-16 md:py-20"
			>
				<div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="type-eyebrow mb-3 text-primary">
							{t("platform.eyebrow")}
						</p>
						<h2 className="type-h2 text-foreground">
							{t("platform.title")}
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("platform.body")}
						</p>
						<ul className="mt-6 mb-[26px] flex flex-col gap-[18px]">
							{PLATFORM_POINTS.map((key) => (
								<li key={key}>
									<p className="text-[17px] font-semibold text-foreground">
										{t(`platform.points.${key}.title`)}
									</p>
									<p className="mt-0.5 text-base text-muted-foreground">
										{t(`platform.points.${key}.desc`)}
									</p>
								</li>
							))}
						</ul>
						<div className="rounded-xl border bg-muted/40 px-[22px] py-5">
							<p className="type-eyebrow mb-3.5 text-muted-foreground/70">
								{t("platform.proUnlocks")}
							</p>
							<div className="mb-3.5 flex flex-wrap gap-2">
								{proChips.map((chip) => (
									<span
										key={chip}
										className="rounded-full bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary"
									>
										{chip}
									</span>
								))}
							</div>
							<p className="text-[15px] text-muted-foreground">
								{t.rich("platform.alreadyStandard", {
									compare: (chunks) => (
										<Link
											href="/truekredit#compare"
											className="font-medium text-primary hover:underline"
										>
											{chunks}
										</Link>
									),
								})}
							</p>
						</div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div
							className="pointer-events-none absolute inset-x-4 top-4 h-4/5 rounded-2xl bg-primary/15 blur-2xl"
							aria-hidden
						/>
						<div className="relative">
							<BorrowerPortalCollage className="pb-6 md:pb-8" />
						</div>
					</motion.div>
				</div>
			</section>

			<section className="pb-16 md:pb-20">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="rounded-[20px] border bg-muted/40 px-8 py-11 md:px-11"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div className="mb-[30px] max-w-[44em]">
							<p className="type-eyebrow mb-3 text-primary">
								{t("trust.eyebrow")}
							</p>
							<h2 className="type-h2-sm text-foreground">
								{t("trust.title")}
							</h2>
							<p className="mt-3.5 type-lede text-muted-foreground">
								{t("trust.body")}
							</p>
						</div>
						<div className="grid gap-5 md:grid-cols-3">
							{TRUST.map((item) => (
								<div
									key={item.key}
									className="rounded-xl border bg-card p-6"
								>
									<div className="mb-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-primary/10">
										<item.icon
											className="h-5 w-5 text-primary"
											aria-hidden
										/>
									</div>
									<h3 className="text-lg font-semibold text-foreground">
										{t(`trust.items.${item.key}.title`)}
									</h3>
									<p className="mt-1.5 text-[15px] text-muted-foreground">
										{t(`trust.items.${item.key}.desc`)}
									</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			<DigitalLicenseTestimonial />

			<SuccessStoriesProof
				id="work"
				studies={pickProofStudiesByTitles(WORK_TITLES)}
				eyebrow={t("proof.eyebrow")}
				title={t("proof.title")}
				subtitle={t("proof.subtitle")}
				viewAllLabel={t("proof.viewAll")}
				columns={3}
				align="start"
			/>

			<DigitalLicenseFaq />

			<ConsultationCta
				accent="kpkt"
				eyebrow={t("cta.eyebrow")}
				heading={t("cta.heading")}
				body={t("cta.body")}
				primary={{
					href: "/contact?subject=Digital%20KPKT%20Licence",
					label: tCommon("bookConsultation"),
				}}
				secondary={{
					href: "/truekredit",
					label: t("cta.secondary"),
				}}
			/>
		</>
	);
}
