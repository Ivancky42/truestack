"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { truekreditFaq } from "@/lib/truekredit-faq";
import {
	ArrowRight,
	Check,
	X,
	Shield,
	ShieldCheck,
	Users,
	Fingerprint,
	Mail,
	Building2,
	ChevronRight,
	Database,
	Lock,
	BarChart3,
	Sparkles,
	PenLine,
	Award,
	CalendarDays,
	HelpCircle,
	Cloud,
	Layers,
	Wallet,
	Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/shared/section-badge";
import {
	WalkInVisual,
	WebOriginationVisual,
	MobileAppVisual,
} from "@/components/sections/origination-channel-visuals";
import { FeatureCarousel } from "@/components/shared/feature-carousel";
import {
	TrueIdentityVisual,
	TruesendVisual,
	CTOSVisual,
	SSMVisual,
	TrueSightVisual,
	DigitalSigningVisual,
	AttestationVisual,
} from "@/components/sections/module-visuals";
import { TrueKreditFeatureScroll } from "@/components/sections/truekredit-feature-scroll";
import { TrueKreditHeroVisual } from "@/components/sections/truekredit-hero-visual";
import { ConsultationCta } from "@/components/sections/consultation-cta";

function GridPattern() {
	return (
		<div className="absolute inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent" />
			<svg
				className="absolute inset-0 h-full w-full opacity-[0.03]"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="grid-truekredit"
						width="60"
						height="60"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M 60 0 L 0 0 0 60"
							fill="none"
							stroke="currentColor"
							strokeWidth="1"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#grid-truekredit)" />
			</svg>
			<motion.div
				className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-primary/10 to-primary/5 blur-3xl"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
		</div>
	);
}

export default function TrueKreditPage() {
	return (
		<>
			{/* Hero */}
			<section id="hero" className="relative overflow-hidden">
				<GridPattern />
				<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<motion.h1
								className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
							>
								Run your entire lending book from{" "}
								<span className="bg-linear-to-r from-primary via-indigo-500 to-violet-500 bg-clip-text text-transparent">
									one platform.
								</span>
							</motion.h1>
							<motion.p
								className="mt-5 text-lg font-medium text-primary md:text-xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.15 }}
							>
								The loan management system for Malaysian
								KPKT-licensed money lenders.
							</motion.p>
							<motion.p
								className="mt-4 text-lg text-muted-foreground md:text-xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								Borrowers, schedules, repayments and KPKT
								paperwork — one system your whole team trusts.
								Your data stays on your own secure cloud in
								Malaysia. Go nationwide with Pro when you are
								ready.
							</motion.p>
							<motion.div
								className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.25 }}
							>
								<Button asChild size="lg" className="gap-2">
									<Link href="/contact?subject=TrueKredit">
										Book a Free Consultation
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="gap-2"
								>
									<Link href="#compare">
										Standard vs Pro
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</motion.div>
						</motion.div>

						<TrueKreditHeroVisual animateOnMount />
					</div>
				</div>
			</section>

			{/* Problem → solution */}
			<section id="story" className="border-t bg-background py-14 md:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
							The reality of lending
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
							Lending is messy.{" "}
							<span className="text-muted-foreground">
								Keeping it under control shouldn&apos;t be.
							</span>
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							Every borrower file, every instalment, every audit
							request — it piles up fast. When records live in
							spreadsheets, folders and inboxes, something always
							slips.
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						{/* Pain */}
						<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 p-6 text-white shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red-500/20 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300 ring-1 ring-red-500/30">
								<X className="h-3.5 w-3.5" />
								What most teams juggle
							</span>
							<h3 className="mt-5 font-display text-xl font-medium tracking-tight md:text-2xl">
								Too much to track. Too easy to miss.
							</h3>
							<ul className="mt-6 space-y-3.5">
								{[
									{
										icon: Users,
										title: "Borrower records everywhere",
										desc: "ICs, contacts, guarantors and documents scattered across Excel and paper files.",
									},
									{
										icon: Receipt,
										title: "Payments hard to reconcile",
										desc: "Schedules, slips and late fees updated by hand — errors show up at month-end.",
									},
									{
										icon: HelpCircle,
										title: "Audits become a scramble",
										desc: "KPKT asks for a trail. Your team digs through folders instead of answering in minutes.",
									},
									{
										icon: BarChart3,
										title: "No single view of the book",
										desc: "Outstanding, arrears and who owes what — pieced together from three places.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/15">
											<item.icon className="h-4 w-4 text-red-300" />
										</div>
										<div>
											<p className="text-sm font-semibold text-white">
												{item.title}
											</p>
											<p className="mt-0.5 text-sm leading-snug text-slate-400">
												{item.desc}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* Solution */}
						<div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-linear-to-br from-primary/8 via-background to-violet-500/5 p-6 shadow-lg sm:p-8">
							<div
								className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
								aria-hidden
							/>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
								<Check className="h-3.5 w-3.5" />
								With TrueKredit
							</span>
							<h3 className="mt-5 font-display text-xl font-medium tracking-tight md:text-2xl">
								One system. One source of truth.
							</h3>
							<p className="mt-3 text-sm text-muted-foreground md:text-[15px]">
								Every loan file, payment and compliance document
								lives in one place — ready when your team or an
								auditor needs it.
							</p>
							<ul className="mt-6 space-y-3.5">
								{[
									{
										icon: Wallet,
										title: "The full loan book in one view",
										desc: "From first enquiry to final settlement — your team works from the same live file.",
									},
									{
										icon: Shield,
										title: "Audit-ready every day",
										desc: "Who did what, when — plus KPKT schedules, Lampiran and exports on demand.",
									},
									{
										icon: Cloud,
										title: "Your data stays with you",
										desc: "Hosted on your own secure cloud in Malaysia — never mixed with other lenders.",
									},
									{
										icon: Award,
										title: "Grow without starting over",
										desc: "Start at the branch. Unlock nationwide apps and signing with Pro — same loan book.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="flex gap-3 rounded-xl border border-primary/15 bg-background/80 p-3.5 shadow-sm"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
											<item.icon className="h-4 w-4 text-primary" />
										</div>
										<div>
											<p className="text-sm font-semibold text-foreground">
												{item.title}
											</p>
											<p className="mt-0.5 text-sm leading-snug text-muted-foreground">
												{item.desc}
											</p>
										</div>
									</li>
								))}
							</ul>
							<div className="mt-6">
								<Link
									href="#features"
									className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
								>
									See how it works
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Device scroll features */}
			<TrueKreditFeatureScroll />

			{/* Integrations amplify the lifecycle */}
			<section id="modules" className="border-t bg-background py-16 md:py-20">
				<FeatureCarousel
					eyebrow="Connected checks"
					title="Checks that live inside the loan file"
					description="Identity checks, company lookups and credit reports happen in the same system your team already uses — not across separate websites."
					items={[
						{
							icon: Fingerprint,
							title: "TrueIdentity™ — e-KYC & liveness",
							desc: "Scan MyKad, take a selfie, confirm it is the same person — result saved on the borrower file.",
							tag: "First-party",
							visual: <TrueIdentityVisual />,
						},
						{
							icon: Building2,
							title: "TrueSSM™ company lookups",
							desc: "Company, director and shareholder details for corporate borrowers — pulled into the application.",
							tag: "Powered by Infomina",
							visual: <SSMVisual />,
						},
						{
							icon: BarChart3,
							title: "CTOS credit reports",
							desc: "Credit information next to the application — so your credit team decides with the full picture.",
							tag: "Powered by CTOS",
							visual: <CTOSVisual />,
						},
						{
							icon: Mail,
							title: "Truesend™ — automated delivery",
							desc: "Receipts, reminders, collection and default letters emailed automatically from the loan file.",
							tag: "First-party",
							visual: <TruesendVisual />,
						},
						{
							icon: Sparkles,
							title: "TrueSight™ AI risk scoring",
							desc: "Extra risk insight on top of your existing checks — helping your credit team spot weaker files earlier.",
							tag: "Network",
							visual: <TrueSightVisual />,
						},
						{
							icon: CalendarDays,
							title: "Digital Attestation — live & video",
							desc: "At the counter or on a scheduled video call — invites and reminders stay on the loan file.",
							tag: "Pro",
							visual: <AttestationVisual />,
						},
						{
							icon: PenLine,
							title: "Digital signing on your premises",
							desc: "Legally binding signatures with Trustgate — signing stays under your control. Customers sign from web or phone.",
							tag: "Pro only",
							visual: <DigitalSigningVisual />,
						},
					]}
				/>
			</section>

			{/* Origination channels — entry points into the same lifecycle */}
			<section
				id="origination"
				className="border-t bg-muted/30 py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
							Same journey · more ways in
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Every channel feeds one loan file.
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							Start at the counter on Standard. When you go
							nationwide with Pro, website and mobile applications
							land in the same queue your team already works from.
						</p>
					</motion.div>

					<motion.div
						className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:col-span-2 lg:col-span-1">
							<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
								<WalkInVisual />
							</div>
							<div className="flex flex-col gap-3 p-5 sm:p-6">
								<div className="flex flex-wrap gap-1.5">
									<span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
										<Shield className="h-3 w-3" />
										Standard
									</span>
									<span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
										<Award className="h-3 w-3" />
										Pro
									</span>
								</div>
								<h3 className="font-display text-xl font-semibold tracking-tight">
									Walk-in counter
								</h3>
								<p className="text-[15px] leading-relaxed text-muted-foreground">
									Branch officers open the file — MyKad,
									identity check and credit details in one
									screen, then the same approval path as every
									other channel.
								</p>
							</div>
						</div>

						<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md">
							<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
								<WebOriginationVisual />
							</div>
							<div className="flex flex-col gap-3 p-5 sm:p-6">
								<span className="inline-flex w-fit items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
									<Award className="h-3 w-3" />
									Pro only
								</span>
								<h3 className="font-display text-xl font-semibold tracking-tight">
									Branded customer website
								</h3>
								<p className="text-[15px] leading-relaxed text-muted-foreground">
									Customers apply on your website day or night —
									upload documents, verify identity, then land
									straight in your approval queue.
								</p>
							</div>
						</div>

						<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md">
							<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
								<MobileAppVisual />
							</div>
							<div className="flex flex-col gap-3 p-5 sm:p-6">
								<span className="inline-flex w-fit items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
									<Award className="h-3 w-3" />
									Pro only
								</span>
								<h3 className="font-display text-xl font-semibold tracking-tight">
									iPhone &amp; Android apps
								</h3>
								<p className="text-[15px] leading-relaxed text-muted-foreground">
									Apply, track balances, pay and sign under
									your brand — feeding the same loan file
									your office team already uses.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Trust — data stays with the lender */}
			<section
				id="infrastructure"
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-16 text-white md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<SectionBadge
								icon={ShieldCheck}
								text="Your data stays yours"
								className="[&>svg]:text-primary [&>span]:text-primary"
							/>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								Your cloud. Kept in Malaysia. Never mixed.
							</h2>
							<p className="mt-4 text-lg text-slate-400">
								Standard and Pro both run on{" "}
								<span className="font-medium text-white">
									your own secure cloud account
								</span>
								. Loan data stays in Malaysia and is never mixed
								with other lenders.
							</p>
							<ul className="mt-6 space-y-3">
								{[
									{
										icon: Database,
										title: "Data stays in Malaysia",
										desc: "Customer information is hosted in Malaysia — it does not leave the country.",
									},
									{
										icon: Lock,
										title: "Protected and backed up",
										desc: "Bank-grade protection with daily backups and a full record of every action.",
									},
									{
										icon: Cloud,
										title: "Upgrade without starting over",
										desc: "Moving to Pro keeps your borrowers, loans and history exactly where they are.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="flex items-start gap-3"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
											<item.icon className="h-4 w-4 text-primary" />
										</div>
										<div>
											<p className="font-medium text-white">
												{item.title}
											</p>
											<p className="text-sm text-slate-400">
												{item.desc}
											</p>
										</div>
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className="mb-4 flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div className="flex h-6 w-6 items-center justify-center rounded bg-[#FF9900]/20">
										<svg
											className="h-4 w-4"
											viewBox="0 0 24 24"
											fill="#FF9900"
											aria-hidden
										>
											<path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296z" />
										</svg>
									</div>
									<span className="text-xs font-medium text-slate-300">
										Your secure cloud
									</span>
								</div>
								<span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
									Malaysia
								</span>
							</div>
							<div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
								<div className="flex items-center justify-center gap-6">
									<div className="flex flex-col items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-4">
										<Building2 className="h-5 w-5 text-primary" />
										<p className="text-xs font-semibold text-white">
											Your lender
										</p>
										<p className="text-[10px] text-slate-400">
											Your data only
										</p>
									</div>
									<div className="flex flex-col items-center gap-1 text-[10px] text-slate-500">
										<span>not shared</span>
										<div className="h-px w-10 bg-slate-600" />
									</div>
									<div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-slate-600 bg-slate-800/40 px-5 py-4 opacity-50">
										<Users className="h-5 w-5 text-slate-500" />
										<p className="text-xs font-semibold text-slate-400">
											Other lenders
										</p>
										<p className="text-[10px] text-slate-500">
											Separate accounts
										</p>
									</div>
								</div>
								<div className="mt-4 flex items-center justify-between rounded bg-slate-800/50 px-3 py-2">
									<div className="flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-green-500" />
										<span className="text-[10px] text-slate-400">
											Hosted in Malaysia
										</span>
									</div>
									<span className="text-[10px] text-primary">
										Protected
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Pro upgrade — hidden for now
			<section
				id="pro"
				data-nav-theme="dark"
				className="relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-16 text-white md:py-20"
			>
				...
			</section>
			*/}

			{/* Compare — aligned with PPW brochure module matrix */}
			<section id="compare" className="border-t bg-muted/20 py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-8 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<SectionBadge
							icon={Layers}
							text="Feature Comparison"
							className="justify-center"
						/>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Standard vs Pro
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
							Same core system for your branch team. Pro unlocks
							nationwide customer channels, digital signing and
							attestation — without moving your loan book.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<Card className="overflow-hidden">
							<CardContent className="p-0">
								<div className="overflow-x-auto">
									<table className="w-full text-left text-sm">
										<thead className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground">
											<tr>
												<th className="w-1/2 px-5 py-4 font-semibold">
													Capability
												</th>
												<th className="w-1/4 px-5 py-4 text-center font-semibold text-primary">
													<div className="flex flex-col items-center gap-0.5">
														<span>Standard</span>
														<span className="text-[10px] font-normal normal-case text-muted-foreground">
															Branch &amp; counter
														</span>
													</div>
												</th>
												<th className="w-1/4 px-5 py-4 text-center font-semibold text-violet-700">
													<div className="flex flex-col items-center gap-0.5">
														<span>Pro</span>
														<span className="text-[10px] font-normal normal-case text-muted-foreground">
															Nationwide
														</span>
													</div>
												</th>
											</tr>
										</thead>
										<tbody className="divide-y">
											<tr className="bg-muted/40">
												<td
													colSpan={3}
													className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
												>
													Core admin platform
												</td>
											</tr>
											{[
												"Rich borrower profiles — work, family, commitments and documents",
												"Flexible loan products — interest methods, schedules and late fees",
												"Applications & approvals — counter intake, field visits, director packs",
												"Risk scoring — affordability checks before you approve",
												"Agreement & finance — payment vouchers and two-person approval before money goes out",
												"Schedules & repayments — instalments, slips, early settlement, arrears",
												"KPKT paperwork — schedules, Lampiran, receipts, default notices and exports",
												"Reports & staff roles — portfolio view, who did what, access by job role",
												"Your own secure cloud in Malaysia — data never mixed with other lenders",
											].map((row) => (
												<tr key={row}>
													<td className="px-5 py-3">
														{row}
													</td>
													<td className="px-5 py-3 text-center text-primary">
														<Check className="mx-auto h-5 w-5" />
													</td>
													<td className="bg-violet-500/5 px-5 py-3 text-center text-violet-700">
														<Check className="mx-auto h-5 w-5" />
													</td>
												</tr>
											))}
											<tr className="bg-muted/40">
												<td
													colSpan={3}
													className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
												>
													Optional add-ons
												</td>
											</tr>
											{[
												"Collections workspace — team view, promises to pay, escalations, maturity alerts",
												"Referral & lead gen — sales queue, agents, who brought the lead, and commission",
											].map((row) => (
												<tr key={row}>
													<td className="px-5 py-3">
														{row}
													</td>
													<td className="px-5 py-3 text-center text-primary">
														<Check className="mx-auto h-5 w-5" />
													</td>
													<td className="bg-violet-500/5 px-5 py-3 text-center text-violet-700">
														<Check className="mx-auto h-5 w-5" />
													</td>
												</tr>
											))}
											<tr className="bg-primary/5">
												<td
													colSpan={3}
													className="px-5 py-3"
												>
													<p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
														Free integrations
													</p>
													<p className="mt-1 text-sm text-muted-foreground">
														Identity, company and
														credit checks are already
														wired into TrueKredit.
														No fee to connect them —
														you only pay for each
														check you run.
													</p>
												</td>
											</tr>
											{(
												[
													{
														label: "TrueIdentity™ e-KYC — MyKad scan, selfie and face match",
														status: "check" as const,
													},
													{
														label: "TrueSSM™ company lookups",
														status: "check" as const,
													},
													{
														label: "Payment gateway",
														status: "check" as const,
													},
													{
														label: "CTOS credit pulls",
														status: "soon" as const,
													},
													{
														label: "TrueSight™ AI risk scoring",
														status: "soon" as const,
													},
												] as const
											).map((row) => (
												<tr key={row.label}>
													<td className="px-5 py-3">
														{row.label}
													</td>
													<td className="px-5 py-3 text-center text-primary">
														{row.status === "check" ? (
															<Check className="mx-auto h-5 w-5" />
														) : (
															<span className="text-xs font-medium text-muted-foreground">
																Soon
															</span>
														)}
													</td>
													<td className="bg-violet-500/5 px-5 py-3 text-center text-violet-700">
														{row.status === "check" ? (
															<Check className="mx-auto h-5 w-5" />
														) : (
															<span className="text-xs font-medium">
																Soon
															</span>
														)}
													</td>
												</tr>
											))}
											<tr className="bg-violet-500/5">
												<td
													colSpan={3}
													className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-violet-700"
												>
													Pro unlocks
												</td>
											</tr>
											{[
												"Branded customer website — apply day or night on your domain",
												"iPhone & Android customer apps",
												"Digital signing on your premises — MSC Trustgate",
												"Digital attestation — live counter or scheduled video",
												"Support for KPKT Online Money Lending Licence reviews",
											].map((row) => (
												<tr key={row}>
													<td className="px-5 py-3">
														{row}
													</td>
													<td className="px-5 py-3 text-center text-muted-foreground/50">
														—
													</td>
													<td className="bg-violet-500/5 px-5 py-3 text-center text-violet-700">
														<Check className="mx-auto h-5 w-5" />
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</CardContent>
						</Card>
					</motion.div>
					<p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
						Shariah-compliant?{" "}
						<Link
							href="/truesyariah"
							className="font-medium text-emerald-700 hover:underline"
						>
							TrueSyariah™
						</Link>
						{" · "}
						SC P2P?{" "}
						<Link
							href="/services/p2p-software-development"
							className="font-medium text-primary hover:underline"
						>
							TrueP2P™
						</Link>
					</p>
				</div>
			</section>

			{/* Zero to licensed — Pro digital licence journey */}
			<section id="zero-to-license" className="border-t bg-muted/30 py-16">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<span className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-700">
								<Award className="h-3.5 w-3.5" />
								TrueKredit Pro
							</span>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								From licence to live lending.
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Going for a KPKT Online Money Lending Licence?
								We help with licensing advice, TrueKredit Pro
								setup, testing and go-live — so you can lend
								nationwide on the same platform.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<Button
									asChild
									size="lg"
									className="gap-2 bg-violet-600 hover:bg-violet-700"
								>
									<Link href="/contact?subject=TrueKredit%20Pro">
										Talk to us about Pro
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="gap-2 border-violet-300 text-violet-800 hover:bg-violet-500/5"
								>
									<Link href="/services/digital-license">
										Explore Digital KPKT Licence
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>
						<ol className="space-y-2.5">
							{[
								{
									step: "1",
									title: "Licence acquisition",
									desc: "Online / digital licence path — applications, renewals and liaison.",
								},
								{
									step: "2",
									title: "Compliance & consultancy",
									desc: "Regulatory advisory and audit readiness for digital lending.",
								},
								{
									step: "3",
									title: "Build on TrueKredit Pro",
									desc: "Customer website, mobile apps, signing and attestation — on your secure cloud.",
								},
								{
									step: "4",
									title: "Test, security review & go-live",
									desc: "Ready for examiners — then nationwide lending live.",
									highlight: true,
								},
							].map((s) => (
								<li
									key={s.step}
									className={`flex gap-4 rounded-xl border bg-background p-4 ${s.highlight ? "border-violet-300/60 bg-violet-500/5" : ""}`}
								>
									<div
										className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${s.highlight ? "bg-violet-600 text-white" : "bg-muted text-foreground"}`}
									>
										{s.step}
									</div>
									<div>
										<p
											className={`font-medium ${s.highlight ? "text-violet-700" : ""}`}
										>
											{s.title}
										</p>
										<p className="text-sm text-muted-foreground">
											{s.desc}
										</p>
									</div>
								</li>
							))}
						</ol>
					</motion.div>
				</div>
			</section>

			{/* FAQ */}
			<section id="faq" className="border-t bg-muted/30 py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto mb-10 max-w-3xl text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<SectionBadge
							icon={HelpCircle}
							text="FAQ"
							className="justify-center"
						/>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Frequently asked questions
						</h2>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.08 }}
					>
						<Accordion type="single" collapsible className="w-full">
							{truekreditFaq.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
								>
									<AccordionTrigger className="py-5 text-left text-base font-medium md:text-lg">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-base leading-relaxed text-muted-foreground md:text-lg">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>
				</div>
			</section>

			<ConsultationCta
				accent="truekredit"
				heading="Ready to run your lending book with confidence?"
				body="Book a free consultation to see how TrueKredit fits your branch today — or Pro when you are ready to lend nationwide. Your loan data stays with you either way."
				primary={{
					href: "/contact?subject=TrueKredit",
					label: "Book a Free Consultation",
				}}
				secondary={{
					href: "#compare",
					label: "Compare Standard vs Pro",
				}}
				extraLinks={[
					{
						href: "/services/digital-license",
						label: "Need a KPKT licence?",
					},
					{ href: "/truesyariah", label: "Compare with TrueSyariah" },
					{
						href: "/services/p2p-software-development",
						label: "Compare with TrueP2P",
					},
				]}
			/>
		</>
	);
}
