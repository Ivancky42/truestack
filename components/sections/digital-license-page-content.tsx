"use client";

import Link from "next/link";
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

const STORY_TODAY = [
	{
		title: "Limited to your branch area",
		desc: "Customers outside your locality stay out of reach.",
	},
	{
		title: "The licence process feels opaque",
		desc: "What KPKT expects, and when, is hard to navigate alone.",
	},
	{
		title: "Build risk on top of compliance risk",
		desc: "The wrong platform choice can stall approval or force a rebuild.",
	},
] as const;

const STORY_AFTER = [
	{
		title: "Serve all of Malaysia",
		desc: "Borrowers apply, verify and repay on your branded web and apps.",
	},
	{
		title: "We run the licence journey with you",
		desc: "Strategy, dossier, presentation, review, and final approval support.",
	},
	{
		title: "Live on TrueKredit™ Pro",
		desc: "The same lending system KPKT-licensed operators already run on, ready for digital review.",
	},
] as const;

const OFFER: {
	icon: LucideIcon;
	title: string;
	desc: string;
}[] = [
	{
		icon: FileBadge,
		title: "The licence",
		desc: "Licensing strategy, the provisional dossier, KPKT presentation support, and accompaniment through final approval.",
	},
	{
		icon: Monitor,
		title: "The platform",
		desc: "A branded TrueKredit™ Pro deployment: web, mobile apps and signing under your control, on your own secure cloud in Malaysia.",
	},
	{
		icon: Headphones,
		title: "Go-live and after",
		desc: "Testing, review preparation, first disbursements, and ongoing KPKT compliance support once you have launched.",
	},
];

const JOURNEY: {
	step: string;
	title: string;
	desc: string;
	weeks: string;
	highlight?: boolean;
}[] = [
	{
		step: "1",
		title: "Provisional licence",
		desc: "We map your operating model, prepare the dossier, and walk into the KPKT presentation with you.",
		weeks: "Weeks 1–2",
	},
	{
		step: "2",
		title: "Build on TrueKredit™ Pro",
		desc: "Branded web and mobile apps, signing under your control, and your own secure cloud in Malaysia — set up for you.",
		weeks: "Weeks 3–8",
	},
	{
		step: "3",
		title: "Test and review pack",
		desc: "Hands-on testing with your team, an independent security review, and a complete pack ready for KPKT.",
		weeks: "Weeks 9–10",
	},
	{
		step: "4",
		title: "Approval and go-live",
		desc: "We sit with you through final inspection and stay on for your first nationwide disbursements.",
		weeks: "Weeks 11–12",
		highlight: true,
	},
];

const PLATFORM_POINTS = [
	{
		title: "Nationwide customer channels",
		desc: "Branded website plus iPhone and Android apps — applications land in one approval queue.",
	},
	{
		title: "Signing under your control",
		desc: "Legally binding signatures stay on your premises, as digital licensing requires.",
	},
	{
		title: "Your cloud, kept in Malaysia",
		desc: "Loan data stays with you and is never mixed with other lenders.",
	},
] as const;

const PRO_CHIPS = [
	"Branded customer website",
	"iPhone & Android apps",
	"Digital signing on your premises",
	"Live & video attestation",
	"Support for KPKT online licence reviews",
] as const;

const TRUST: { icon: LucideIcon; title: string; desc: string }[] = [
	{
		icon: Server,
		title: "Your data stays with you",
		desc: "Hosted on your own secure cloud in Malaysia, never mixed with other lenders.",
	},
	{
		icon: ShieldCheck,
		title: "Signing stays on your premises",
		desc: "Borrowers sign from web or phone; the signing control stays under your roof.",
	},
	{
		icon: FileBadge,
		title: "Audit trail every day",
		desc: "Who did what, and when — ready for your team and for KPKT.",
	},
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
	return (
		<>
			<DigitalLicenseHero />
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
							Why go digital
						</p>
						<h2 className="type-h2 text-foreground">
							One branch is a ceiling. A digital licence is the
							unlock.
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							A traditional licence keeps you local. An Online
							Money Lending Licence lets you serve borrowers
							nationwide — provided the licence path and the
							platform are handled properly, and in the right
							order.
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
								Today
							</p>
							<h3 className="text-xl font-semibold text-foreground/80">
								Local reach. Unclear path.
							</h3>
							<ul className="mt-[22px] flex flex-col gap-[18px]">
								{STORY_TODAY.map((item) => (
									<li key={item.title}>
										<p className="font-semibold text-foreground/80">
											{item.title}
										</p>
										<p className="mt-0.5 text-[15px] text-muted-foreground">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
						</div>

						<div className="relative overflow-hidden rounded-xl border border-primary/25 bg-primary/4 p-[30px] shadow-sm">
							<p className="type-eyebrow mb-2.5 text-primary">
								With Truestack
							</p>
							<h3 className="text-xl font-semibold text-foreground">
								Nationwide. Licensed. Live.
							</h3>
							<ul className="mt-[22px] mb-6 flex flex-col gap-[18px]">
								{STORY_AFTER.map((item) => (
									<li key={item.title}>
										<p className="font-semibold text-foreground">
											{item.title}
										</p>
										<p className="mt-0.5 text-[15px] text-muted-foreground">
											{item.desc}
										</p>
									</li>
								))}
							</ul>
							<CtaLink
								href="#platform"
								className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary hover:underline"
							>
								Explore TrueKredit™ Pro
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
							What you are buying
						</p>
						<h2 className="type-h2 text-foreground">
							Licence. Platform. Go-live.
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							Not a software handoff. A full-service path to
							nationwide digital lending, with one team
							accountable for all three parts.
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
								key={item.title}
								className="rounded-xl border bg-primary/3 p-[26px] shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
									<item.icon
										className="h-6 w-6 text-primary"
										aria-hidden
									/>
								</div>
								<h3 className="type-card-title text-foreground">
									{item.title}
								</h3>
								<p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
									{item.desc}
								</p>
							</div>
						))}
					</motion.div>
					<p className="mt-[22px] text-[17px] text-muted-foreground">
						One team. One contract. You focus on lending — we handle
						the rest.
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
								About three months
							</p>
							<h2 className="type-h2 text-foreground">
								From kickoff to nationwide lending.
							</h2>
							<p className="mt-4 text-[17px] text-muted-foreground">
								A proven playbook, every step run with you in
								the room. Timelines depend on your readiness and
								KPKT scheduling.
							</p>
							<div className="relative mt-6 aspect-4/3 overflow-hidden rounded-[14px] border shadow-sm">
								<Image
									src="/photos/homepage-fintech-team.jpg"
									alt="Truestack advisors reviewing KPKT licensing documents with a client"
									fill
									sizes="(max-width: 1024px) 100vw, 45vw"
									className="object-cover"
								/>
							</div>
							<div className="mt-[22px] flex flex-wrap gap-3">
								<Button asChild size="lg">
									<Link href="/contact?subject=Digital%20KPKT%20Licence">
										Talk to our licensing team
									</Link>
								</Button>
								<Button asChild variant="outline" size="lg">
									<CtaLink href="#platform">
										See TrueKredit™ Pro
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
												{step.title}
											</h3>
											<span className="type-mono-label font-medium text-primary">
												{step.weeks}
											</span>
										</div>
										<p className="text-base text-muted-foreground">
											{step.desc}
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
							Built on TrueKredit™ Pro
						</p>
						<h2 className="type-h2 text-foreground">
							The platform KPKT expects — already built.
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							Your digital licence runs on TrueKredit™ Pro: the
							same loan book your team works in every day, plus
							nationwide borrower channels and signing under your
							control.
						</p>
						<ul className="mt-6 mb-[26px] flex flex-col gap-[18px]">
							{PLATFORM_POINTS.map((item) => (
								<li key={item.title}>
									<p className="text-[17px] font-semibold text-foreground">
										{item.title}
									</p>
									<p className="mt-0.5 text-base text-muted-foreground">
										{item.desc}
									</p>
								</li>
							))}
						</ul>
						<div className="rounded-xl border bg-muted/40 px-[22px] py-5">
							<p className="type-eyebrow mb-3.5 text-muted-foreground/70">
								What Pro unlocks
							</p>
							<div className="mb-3.5 flex flex-wrap gap-2">
								{PRO_CHIPS.map((chip) => (
									<span
										key={chip}
										className="rounded-full bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary"
									>
										{chip}
									</span>
								))}
							</div>
							<p className="text-[15px] text-muted-foreground">
								Already on TrueKredit Standard? Upgrade to Pro
								without moving your loan book.{" "}
								<Link
									href="/truekredit#compare"
									className="font-medium text-primary hover:underline"
								>
									See the comparison
								</Link>
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
						<div className="relative overflow-hidden rounded-[14px] border bg-card shadow-lg">
							<div className="flex h-[34px] items-center gap-1.5 border-b bg-muted/40 px-3">
								<span
									className="h-2.5 w-2.5 rounded-full bg-border"
									aria-hidden
								/>
								<span
									className="h-2.5 w-2.5 rounded-full bg-border"
									aria-hidden
								/>
								<span
									className="h-2.5 w-2.5 rounded-full bg-border"
									aria-hidden
								/>
								<span className="ml-2.5 font-mono text-xs text-muted-foreground/70">
									admin.truekredit
								</span>
							</div>
							<Image
								src="/truekredit/hero_dashboard_screenshot.png"
								alt="TrueKredit admin dashboard — outstanding, collections and portfolio health for a Malaysian money lender"
								width={3368}
								height={2662}
								quality={100}
								unoptimized
								className="h-auto w-full"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
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
								Built for KPKT review
							</p>
							<h2 className="type-h2-sm text-foreground">
								Ready when examiners ask.
							</h2>
							<p className="mt-3.5 type-lede text-muted-foreground">
								Digital licensing is as much about control and
								traceability as it is about apps. Your platform
								is set up so the answers are already there, not
								assembled the night before.
							</p>
						</div>
						<div className="grid gap-5 md:grid-cols-3">
							{TRUST.map((item) => (
								<div
									key={item.title}
									className="rounded-xl border bg-card p-6"
								>
									<div className="mb-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-lg bg-primary/10">
										<item.icon
											className="h-5 w-5 text-primary"
											aria-hidden
										/>
									</div>
									<h3 className="text-lg font-semibold text-foreground">
										{item.title}
									</h3>
									<p className="mt-1.5 text-[15px] text-muted-foreground">
										{item.desc}
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
				eyebrow="Selected work"
				title="Lenders we have taken digital."
				subtitle="Real KPKT-licensed lenders launched on TrueKredit™ Pro — licensed, built, and approved with our team."
				viewAllLabel="All success stories"
				columns={3}
				align="start"
			/>

			<DigitalLicenseFaq />

			<ConsultationCta
				accent="kpkt"
				eyebrow="Full-service KPKT digital licensing"
				heading="Ready to go nationwide?"
				body="Book a free consultation. We will map your route to a KPKT digital licence and the TrueKredit™ Pro platform that gets you there — before you commit to anything."
				primary={{
					href: "/contact?subject=Digital%20KPKT%20Licence",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "/truekredit",
					label: "Explore TrueKredit™",
				}}
				extraLinks={[
					{
						href: "/truekredit#compare",
						label: "Compare Standard vs Pro",
					},
					{
						href: "/truekredit#zero-to-license",
						label: "See the Pro journey on TrueKredit",
					},
				]}
			/>
		</>
	);
}
