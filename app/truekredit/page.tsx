"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { truekreditFaq } from "@/lib/truekredit-faq";
import {
	ArrowRight,
	AlertTriangle,
	Check,
	X,
	FileText,
	Calculator,
	FileCheck,
	Wallet,
	Receipt,
	History,
	Shield,
	ShieldCheck,
	Users,
	Fingerprint,
	Mail,
	Building2,
	ChevronRight,
	Database,
	Lock,
	Server,
	Eye,
	FilePlusCorner,
	BarChart3,
	Sparkles,
	LineChart,
	Layers,
	Link2,
	Smartphone,
	Globe,
	PenLine,
	Briefcase,
	Award,
	CalendarDays,
	HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
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
// Grid Pattern Background Component
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
			{/* Hero Section */}
			<section id="hero" className="relative overflow-hidden">
				<GridPattern />
				<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
						{/* Left: Text Content */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<motion.div
								className="mb-5 flex flex-wrap gap-2 text-sm font-medium"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4 }}
							>
								<span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-primary">
									<Shield className="h-4 w-4 shrink-0" />
									TrueKredit™ — Multi-tenant SaaS
								</span>
								<span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3.5 py-1.5 text-violet-700">
									<Award className="h-4 w-4 shrink-0" />
									TrueKredit™ Pro — Dedicated AWS
								</span>
							</motion.div>
							<motion.h1
								className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
							>
								Run your entire lending business from{" "}
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
								Built for Malaysian KPKT-licensed money lenders.
							</motion.p>
							<motion.p
								className="mt-4 text-lg text-muted-foreground md:text-xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								One integrated loan management system —
								borrowers, products, schedules, collections, and
								KPKT compliance — with optional borrower web,
								native mobile apps, and on-premises digital
								signing in{" "}
								<span className="font-medium text-foreground/90">
									TrueKredit Pro
								</span>
								.
							</motion.p>
							<motion.div
								className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.25 }}
							>
								<Button asChild size="lg" className="gap-2">
									<Link
										href="https://kredit.truestack.my/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Get started with TrueKredit
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									size="lg"
									className="gap-2 border-violet-300 bg-violet-500/5 text-violet-700 hover:bg-violet-500/10 hover:text-violet-800"
								>
									<Link href="/contact?subject=TrueKredit%20Pro">
										Talk to us about Pro
										<ChevronRight className="h-4 w-4" />
									</Link>
								</Button>
							</motion.div>
						</motion.div>

						{/* Right: Hero illustration */}
						<motion.div
							className="relative mx-auto w-full max-w-[560px]"
							initial={{ opacity: 0, scale: 0.96 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7, delay: 0.15 }}
						>
							<div className="relative aspect-square overflow-hidden rounded-3xl border border-primary/15 bg-linear-to-br from-primary/5 via-white to-violet-500/5 shadow-xl">
								<Image
									src="/truekredit/hero.png"
									alt="TrueKredit KPKT-aligned loan management platform — lifecycle, signing, dashboards and compliance modules"
									fill
									priority
									sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 100vw"
									className="object-cover"
								/>
							</div>
							{/* Floating credibility chips */}
							<div className="absolute -bottom-4 left-6 hidden items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 shadow-md sm:inline-flex">
								<Shield className="h-3.5 w-3.5 text-primary" />
								<span className="text-[11px] font-semibold text-primary">
									KPKT audit-ready
								</span>
							</div>
							<div className="absolute -top-3 right-6 hidden items-center gap-2 rounded-full border border-violet-200 bg-white px-3 py-1.5 shadow-md sm:inline-flex">
								<Award className="h-3.5 w-3.5 text-violet-700" />
								<span className="text-[11px] font-semibold text-violet-700">
									Pro · Dedicated AWS
								</span>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Problem → Answer Narrative — compact before/after contrast */}
			<section id="story" className="border-t bg-muted/30 py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					{/* Centered header (matches the carousel section style) */}
					<motion.div
						className="mx-auto max-w-3xl text-center"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
							The challenge
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
							Lending shouldn&apos;t mean stitching eight vendors
							together.
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							Separate tools, separate contracts, separate bills —
							and manual gaps that creep back into your
							compliance.
						</p>
					</motion.div>

					{/* Before / After visual contrast */}
					<motion.div
						className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{/* BEFORE — scattered stack */}
						<div className="rounded-2xl border border-red-200/70 bg-linear-to-br from-red-50/70 via-background to-background p-6 sm:p-8">
							<div className="mb-5 flex items-center justify-between gap-2">
								<span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
									<X className="h-3.5 w-3.5" />
									Without TrueKredit
								</span>
								<span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
									8+ tools
								</span>
							</div>
							<h3 className="mb-5 font-display text-lg font-medium leading-snug md:text-xl">
								Eight vendor logins. Eight bills. Months of
								integration.
							</h3>
							{/* Scattered vendor pills */}
							<div className="mb-6 flex flex-wrap gap-2">
								{[
									"Excel",
									"Paper files",
									"CTOS",
									"e-KYC",
									"Trustgate",
									"TrueSSM™",
									"Email",
									"Payments",
								].map((v) => (
									<span
										key={v}
										className="rounded-full border border-red-200/70 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm"
									>
										{v}
									</span>
								))}
							</div>
							<ul className="space-y-2.5 text-sm text-muted-foreground">
								{[
									"Manual instalment, interest, and late-fee maths",
									"Months of integration before the first disbursement",
									"Compliance reporting pressure and audit stress",
								].map((line) => (
									<li
										key={line}
										className="flex items-start gap-2"
									>
										<X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
										<span>{line}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Arrow / divider */}
						<div className="flex items-center justify-center py-2 lg:py-0">
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 lg:h-14 lg:w-14">
								<ArrowRight className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
							</div>
						</div>

						{/* AFTER — TrueKredit unified */}
						<div className="rounded-2xl border border-primary/30 bg-linear-to-br from-primary/5 via-background to-background p-6 sm:p-8">
							<div className="mb-5 flex items-center justify-between gap-2">
								<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
									<Check className="h-3.5 w-3.5" />
									With TrueKredit
								</span>
								<span className="text-xs font-medium uppercase tracking-wider text-primary/70">
									1 platform
								</span>
							</div>
							<h3 className="mb-5 font-display text-lg font-medium leading-snug md:text-xl">
								One platform. Everything connected. KPKT-aligned
								by design.
							</h3>
							{/* Unified pillars */}
							<div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
								{[
									{ label: "Borrowers", icon: Users },
									{ label: "Loans", icon: Wallet },
									{ label: "Payments", icon: Receipt },
									{ label: "Compliance", icon: Shield },
								].map((p) => (
									<div
										key={p.label}
										className="flex flex-col items-center gap-1.5 rounded-lg border border-primary/15 bg-background px-2 py-3 text-center"
									>
										<p.icon className="h-4 w-4 text-primary" />
										<span className="text-xs font-medium">
											{p.label}
										</span>
									</div>
								))}
							</div>
							<ul className="space-y-2.5 text-sm text-foreground/80">
								{[
									"CTOS, Trustgate, SSM Search, e-KYC, payments — already integrated",
									"Live in weeks — no integration project required",
									"Built around KPKT requirements from day one",
								].map((line) => (
									<li
										key={line}
										className="flex items-start gap-2"
									>
										<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
										<span>{line}</span>
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* Two-edition selector ribbon */}
					<motion.div
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-40px" }}
						transition={{ duration: 0.45, delay: 0.15 }}
						className="mt-10 grid gap-4 rounded-2xl border bg-background p-5 shadow-sm md:grid-cols-2 md:p-6"
					>
						<div className="flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
							<div className="flex items-center justify-between gap-3">
								<span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
									<Shield className="h-4 w-4" />
									TrueKredit
								</span>
								<span className="text-xs font-medium uppercase tracking-wider text-primary/80">
									SaaS
								</span>
							</div>
							<p className="text-sm text-muted-foreground">
								Multi-tenant on TrueStack&apos;s AWS Malaysia.
								Predictable subscription, fully managed, shared
								core for licensed money lenders.
							</p>
							<Link
								href="#features"
								className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
							>
								See connected modules{" "}
								<ArrowRight className="h-3.5 w-3.5" />
							</Link>
						</div>
						<div className="flex flex-col gap-3 rounded-xl border border-violet-300/60 bg-violet-500/5 p-5">
							<div className="flex items-center justify-between gap-3">
								<span className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
									<Award className="h-4 w-4" />
									TrueKredit Pro
								</span>
								<span className="text-xs font-medium uppercase tracking-wider text-violet-700/80">
									Dedicated AWS
								</span>
							</div>
							<p className="text-sm text-muted-foreground">
								Same platform on a dedicated, isolated AWS
								environment — adds borrower web, native mobile
								apps, on-prem PKI signing, and pen-test
								packaging.
							</p>
							<Link
								href="/contact?subject=TrueKredit%20Pro"
								className="inline-flex items-center gap-1 text-sm font-medium text-violet-700 hover:underline"
							>
								Talk to us about Pro{" "}
								<ArrowRight className="h-3.5 w-3.5" />
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Cost of Manual Operations Section */}
			{/* <section id="cost" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge icon={AlertTriangle} text="Hidden Costs" className="justify-center" />
            <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
              Manual Work Creates Risk and Hidden Cost
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              "Staff time wasted on repetitive admin",
              "Higher chance of human error",
              "Inconsistent records across loans/branches",
              "Missed/late compliance submissions",
              "Exposure to penalties/enforcement",
              "Hard to scale without hiring more staff",
            ].map((risk, index) => (
              <motion.div
                key={risk}
                className="flex items-start gap-3 rounded-xl border bg-red-50/50 p-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                <span className="text-sm text-muted-foreground">{risk}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg font-medium md:text-xl">
              Manual systems don&apos;t just slow you down — they increase compliance risk.
            </p>
          </motion.div>
        </div>
      </section> */}

			{/* Core Features Section — full bleed Apple-style carousels.
          The section title is dropped; each carousel's title is promoted to a
          centered section-style header. */}
			<section id="features" className="border-t bg-muted/30 py-20">
				<div className="space-y-20">
					<FeatureCarousel
						eyebrow="Core Platform"
						title="The full lending lifecycle in one place"
						description="From customer enquiry through disbursement, repayment, late fees, default, and KPKT-ready compliance — every screen ships in TrueKredit."
						items={[
							{
								icon: FileText,
								title: "Customer enquiry & document capture",
								desc: "Digitise borrower information and supporting documents from the very first contact.",
								image: {
									src: "/truekredit/borrower_details_screenshot.png",
									alt: "Borrower details",
									width: 2120,
									height: 1322,
								},
							},
							{
								icon: Calculator,
								title: "Loan calculation & approval",
								desc: "Automated interest and instalment maths with approval tracking and one-click WhatsApp quote sharing.",
								image: {
									src: "/truekredit/loan_summary_screenshot.png",
									alt: "Loan summary",
									width: 2360,
									height: 2362,
								},
							},
							{
								icon: FilePlusCorner,
								title: "Product configuration",
								desc: "Define products once — interest model, eligibility, Jadual J or K schedule — and reuse across every loan.",
								image: {
									src: "/truekredit/edit_product_screenshot.png",
									alt: "Edit product",
									width: 2360,
									height: 2362,
								},
							},
							{
								icon: Wallet,
								title: "Disbursement & repayment tracking",
								desc: "Track every disbursement and repayment with full fund-flow records and a live, sen-accurate schedule.",
								image: {
									src: "/truekredit/repayment_schedule_screenshot.png",
									alt: "Repayment schedule",
									width: 1806,
									height: 1288,
								},
							},
							{
								icon: History,
								title: "Settlement engine",
								desc: "Early-settlement quotes with discounted interest, lock-ins and late-fee rules — record settlement payments, optional approval, then post with a full audit trail.",
								image: {
									src: "/truekredit/early_settlement_screenshot.png",
									alt: "Early settlement",
									width: 2360,
									height: 2362,
								},
							},
							{
								icon: AlertTriangle,
								title: "Late fees, arrears & default",
								desc: "Auto-calculated late charges, automatic arrears-to-default progression, and the right letters generated for you.",
								accent: "bg-amber-500/10",
								iconColor: "text-amber-500",
								iconBg: "bg-linear-to-br from-amber-500/10 via-amber-500/5 to-background",
								image: {
									src: "/truekredit/late_summary_screenshot.png",
									alt: "Late payment summary",
									width: 1778,
									height: 1220,
								},
							},
							{
								icon: Lock,
								title: "Role-based access for your whole team",
								desc: "Default presets for Owner, Super Admin, Approval L1/L2, Attestor, Auditor and Collections — or build custom roles with granular per-permission controls.",
								accent: "bg-indigo-500/10",
								iconColor: "text-indigo-600",
								iconBg: "bg-linear-to-br from-indigo-500/10 via-indigo-500/5 to-background",
								image: {
									src: "/truekredit/rba_screenshot.png",
									alt: "Role-based access controls",
									width: 2360,
									height: 2362,
								},
							},
							{
								icon: LineChart,
								title: "Borrower & book analytics",
								desc: "See each borrower’s repayments versus what’s due, balances and arrears risk next to disbursement trends, loan-status mix and PAR — one concise dashboard.",
								image: {
									src: "/truekredit/analytics_screenshot.png",
									alt: "TrueKredit analytics dashboard",
									width: 2126,
									height: 1566,
								},
							},
							{
								icon: ShieldCheck,
								title: "KPKT-ready, audit-ready, every day",
								desc: "Jadual J & K, Lampiran A, receipts, default notices and discharge letters — all auto-generated and inspection-ready.",
								images: [
									{
										src: "/truekredit/jadual_j_screenshot.png",
										alt: "Jadual J",
										label: "Jadual J",
									},
									{
										src: "/truekredit/lampiran_a_screenshot.png",
										alt: "Lampiran A",
										label: "Lampiran A",
									},
									{
										src: "/truekredit/document_example_receipt.png",
										alt: "Payment receipt",
										label: "Receipt",
									},
									{
										src: "/truekredit/document_example_default.png",
										alt: "Default notice",
										label: "Default notice",
									},
								],
							},
						]}
					/>

					<FeatureCarousel
						eyebrow="Connected Modules"
						title="Modules that make everything work as one"
						description="Identity, credit, company checks, digital attestation and video-call scheduling, comms, and intelligence — first-party modules and pre-wired partners that live inside the loan file, not across five portals."
						items={[
							{
								icon: Fingerprint,
								title: "TrueIdentity™ — e-KYC & liveness",
								desc: "QR-based borrower verification with IC OCR and face-liveness. Pass or fail saved straight into the loan file.",
								tag: "First-party",
								visual: <TrueIdentityVisual />,
							},
							{
								icon: CalendarDays,
								title: "Digital Attestation — live & video",
								desc: "Live at the counter or on scheduled video calls — shared calendar, borrower invites and reminders, all recorded on the loan file.",
								tag: "First-party",
								visual: <AttestationVisual />,
							},
							{
								icon: Mail,
								title: "Truesend™ — automated comms",
								desc: "Receipts, reminders, default notices and discharge letters delivered automatically — no more manual emails.",
								tag: "First-party",
								visual: <TruesendVisual />,
							},
							{
								icon: BarChart3,
								title: "CTOS credit reports",
								desc: "Pull credit reports right inside the loan workflow. Risk indicators surface next to underwriting decisions, with a full audit trail.",
								tag: "Powered by CTOS",
								visual: <CTOSVisual />,
							},
							{
								icon: Building2,
								title: "TrueSSM™ company lookups",
								desc: "Company info, director and shareholder checks for corporate borrowers — pulled inside the loan file via Infomina.",
								tag: "Powered by Infomina",
								visual: <SSMVisual />,
							},
							{
								icon: Sparkles,
								title: "TrueSight™ cross-lender intelligence",
								desc: "See how a borrower performs across the TrueKredit network — active, completed, defaulted loans, plus on-time payment rate.",
								tag: "Network",
								visual: <TrueSightVisual />,
							},
							{
								icon: PenLine,
								title: "On-prem digital signing",
								desc: "Trustgate-backed PKI signing on infrastructure you control. Borrowers sign from web or mobile.",
								tag: "Pro only",
								visual: <DigitalSigningVisual />,
							},
						]}
					/>
				</div>
			</section>

			{/* Borrower Origination — light section sitting between modules and
          the dark infrastructure block. Contrasts how each edition reaches
          borrowers: TrueKredit is walk-in only; Pro adds branded web and
          native mobile apps so customers come to you 24/7. */}
			<section
				id="origination"
				className="border-t bg-background py-20 md:py-24"
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
							Borrower origination
						</p>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
							Three ways to bring borrowers in.
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							TrueKredit ships with everything you need at the
							counter.{" "}
							<span className="font-medium text-foreground/90">
								TrueKredit Pro
							</span>{" "}
							adds branded web and native mobile apps — so
							borrowers can apply, KYC, sign and track their loan
							24/7, on any device.
						</p>
					</motion.div>

					{/* Channels — three cards, each with a custom mock on top
              and copy + edition badge below. */}
					<motion.div
						className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{/* Walk-in — both editions */}
						<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
							<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
								<WalkInVisual />
							</div>
							<div className="flex flex-col gap-3 p-6 sm:p-7">
								<div className="flex flex-wrap gap-1.5">
									<span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
										<Shield className="h-3 w-3" />
										TrueKredit
									</span>
									<span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
										<Award className="h-3 w-3" />
										Pro
									</span>
								</div>
								<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
									Walk-in counter
								</h3>
								<p className="text-[15px] leading-relaxed text-muted-foreground">
									Officers add new customers at the branch in
									minutes — MyKad scan, e-KYC and CTOS pull
									all happen in one screen, with the loan file
									ready to go.
								</p>
								<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
									{[
										"Counter-friendly customer creation flow",
										"e-KYC + CTOS inline with the application",
										"Same-day approval and disbursement",
									].map((line) => (
										<li
											key={line}
											className="flex items-start gap-2"
										>
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											<span>{line}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Web — Pro only */}
						<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md">
							<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
								<WebOriginationVisual />
							</div>
							<div className="flex flex-col gap-3 p-6 sm:p-7">
								<span className="inline-flex w-fit items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
									<Award className="h-3 w-3" />
									Pro only
								</span>
								<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
									Branded web portal
								</h3>
								<p className="text-[15px] leading-relaxed text-muted-foreground">
									A fully branded origination site at your own
									domain. Borrowers self-onboard, upload
									documents, complete e-KYC and sign — every
									submission lands inside TrueKredit.
								</p>
								<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
									{[
										"Your domain, your colours, your logo",
										"Application + e-KYC + e-sign in one flow",
										"Leads land directly in the loan pipeline",
									].map((line) => (
										<li
											key={line}
											className="flex items-start gap-2"
										>
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
											<span>{line}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Mobile — Pro only */}
						<div className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md">
							<div className="aspect-5/4 w-full shrink-0 overflow-hidden">
								<MobileAppVisual />
							</div>
							<div className="flex flex-col gap-3 p-6 sm:p-7">
								<span className="inline-flex w-fit items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
									<Award className="h-3 w-3" />
									Pro only
								</span>
								<h3 className="font-display text-xl font-semibold leading-snug tracking-tight md:text-2xl">
									Native iOS &amp; Android apps
								</h3>
								<p className="text-[15px] leading-relaxed text-muted-foreground">
									A borrower app published under your brand.
									Customers track their loan, pay instalments,
									complete e-KYC and sign documents — all from
									their pocket.
								</p>
								<ul className="mt-1 space-y-1.5 text-sm text-foreground/80">
									{[
										"Live balances and repayment schedule",
										"In-app e-KYC, e-sign and payments",
										"Push notifications for due dates",
									].map((line) => (
										<li
											key={line}
											className="flex items-start gap-2"
										>
											<Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
											<span>{line}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>

					{/* Bottom ribbon — quick edition contrast */}
					<motion.div
						className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border bg-muted/40 p-5 sm:flex-row sm:items-center sm:p-6"
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.45, delay: 0.15 }}
					>
						<div className="flex items-start gap-4">
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
								<Users className="h-5 w-5 text-primary" />
							</div>
							<div>
								<p className="font-display text-base font-semibold tracking-tight md:text-lg">
									Pick the channels that match your borrowers.
								</p>
								<p className="mt-1 text-sm text-muted-foreground md:text-[15px]">
									Run a counter-only operation on TrueKredit,
									or unlock branded web + mobile origination
									with TrueKredit Pro — same core platform,
									same loan file, more ways in.
								</p>
							</div>
						</div>
						<Link
							href="/contact?subject=TrueKredit%20Pro"
							className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-500/15"
						>
							Talk to us about Pro origination
							<ArrowRight className="h-3.5 w-3.5" />
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Enterprise-Grade Infrastructure Section */}
			<section
				id="infrastructure"
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-20 text-white"
			>
				<div className="mx-auto max-w-6xl px-6">
					{/* Header */}
					<motion.div
						className="mb-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<SectionBadge
							icon={ShieldCheck}
							text="Lend with confidence"
							className="[&>svg]:text-primary [&>span]:text-primary"
						/>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Enterprise-Grade Infrastructure
						</h2>
						<p className="mt-4 max-w-2xl text-lg text-slate-400 md:text-xl">
							Your loan data is securely stored and always
							available. Built on modern cloud infrastructure with
							Malaysian data residency.
						</p>
					</motion.div>

					{/* Infrastructure Grid */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Malaysia Data Residency - Large card */}
						<motion.div
							className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<div className="grid gap-6 lg:grid-cols-2 lg:items-center">
								<div>
									<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
										<Database className="h-5 w-5 text-primary" />
									</div>
									<h3 className="mb-2 text-xl font-semibold text-white">
										Malaysia Data Residency
									</h3>
									<p className="text-slate-400">
										All data hosted on AWS Malaysia region
										ensuring data sovereignty and regulatory
										compliance. Your customer data never
										leaves Malaysia.
									</p>
								</div>
								{/* AWS Malaysia illustration */}
								<div className="relative">
									<div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
										{/* Header with AWS badge */}
										<div className="mb-4 flex items-center justify-between">
											<div className="flex items-center gap-2">
												<div className="flex h-6 w-6 items-center justify-center rounded bg-[#FF9900]/20">
													<svg
														className="h-4 w-4"
														viewBox="0 0 24 24"
														fill="#FF9900"
													>
														<path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.296.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296z" />
													</svg>
												</div>
												<span className="text-xs font-medium text-slate-300">
													Amazon Web Services
												</span>
											</div>
											<span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
												ap-southeast-5
											</span>
										</div>

										{/* Data center visualization */}
										<div className="relative rounded-lg border border-slate-700 bg-slate-900 p-4">
											{/* Server rack representation */}
											<div className="flex items-center justify-center gap-4">
												{/* Server racks */}
												<div className="flex gap-2">
													{[1, 2, 3].map((rack) => (
														<div
															key={rack}
															className="flex h-20 w-8 flex-col items-center justify-between rounded border border-slate-600 bg-slate-800 p-1"
														>
															<div className="w-full space-y-0.5">
																<div className="h-1 w-full rounded-sm bg-primary/60" />
																<div className="h-1 w-full rounded-sm bg-primary/40" />
																<div className="h-1 w-full rounded-sm bg-slate-600" />
																<div className="h-1 w-full rounded-sm bg-primary/50" />
															</div>
															<div className="flex w-full justify-center gap-0.5">
																<div className="h-1 w-1 rounded-full bg-green-500" />
																<div className="h-1 w-1 rounded-full bg-green-500" />
															</div>
														</div>
													))}
												</div>

												{/* Connection lines */}
												<div className="flex flex-col items-center gap-1">
													<div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
													<div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
													<div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
												</div>

												{/* Malaysia indicator */}
												<div className="flex flex-col items-center">
													<div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-slate-800">
														<div className="absolute inset-2 animate-pulse rounded-full bg-primary/10" />
														<div className="text-center">
															<div className="text-lg font-bold text-primary">
																MY
															</div>
														</div>
													</div>
													<span className="mt-1 text-[10px] font-medium text-slate-400">
														Malaysia
													</span>
												</div>
											</div>

											{/* Status bar */}
											<div className="mt-4 flex items-center justify-between rounded bg-slate-800/50 px-3 py-2">
												<div className="flex items-center gap-2">
													<div className="h-2 w-2 rounded-full bg-green-500" />
													<span className="text-[10px] text-slate-400">
														All systems operational
													</span>
												</div>
												<div className="flex items-center gap-3 text-[10px] text-slate-500">
													<span>
														Uptime:{" "}
														<span className="text-primary">
															99.9%
														</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Automatic Backups */}
						<motion.div
							className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<Server className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								Automatic Backups
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Daily automated backups with point-in-time
								recovery. Your data is never lost.
							</p>
							{/* Backup illustration */}
							<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
								<div className="flex items-center gap-3">
									<div className="flex h-12 w-10 flex-col items-center justify-center rounded border border-slate-600 bg-slate-900">
										<div className="mb-1 h-1 w-6 rounded bg-primary" />
										<div className="mb-1 h-1 w-6 rounded bg-slate-600" />
										<div className="h-1 w-6 rounded bg-slate-600" />
									</div>
									<div className="flex-1">
										<div className="mb-1 text-xs font-medium text-white">
											Last Backup
										</div>
										<div className="flex items-center gap-1">
											<div className="h-1.5 w-1.5 rounded-full bg-green-500" />
											<span className="text-[10px] text-slate-500">
												Today, 03:00 AM
											</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Enterprise Security */}
						<motion.div
							className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<Lock className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								Enterprise Security
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Bank-grade encryption protects your data at rest
								and in transit.
							</p>
							{/* Security layers illustration */}
							<div className="space-y-2">
								<div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
									<div className="h-2 w-2 rounded-full bg-primary" />
									<span className="text-xs text-slate-300">
										256-bit AES Encryption
									</span>
								</div>
								<div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
									<div className="h-2 w-2 rounded-full bg-primary" />
									<span className="text-xs text-slate-300">
										TLS 1.3 Protocol
									</span>
								</div>
								<div className="flex items-center gap-2 rounded border border-slate-700 bg-slate-800/50 px-3 py-2">
									<div className="h-2 w-2 rounded-full bg-primary" />
									<span className="text-xs text-slate-300">
										Role-Based Access
									</span>
								</div>
							</div>
						</motion.div>

						{/* Complete Audit Trails */}
						<motion.div
							className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<FileCheck className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								Complete Audit Trails
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Every action is logged and traceable. Full
								history preserved indefinitely.
							</p>
							{/* Audit log illustration */}
							<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
								<div className="space-y-2 font-mono text-[10px]">
									<div className="flex items-center gap-2">
										<span className="text-slate-500">
											10:42:15
										</span>
										<span className="text-primary">
											PAYMENT_RECEIVED
										</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-slate-500">
											10:41:02
										</span>
										<span className="text-slate-300">
											LOAN_APPROVED
										</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-slate-500">
											10:40:28
										</span>
										<span className="text-slate-300">
											DOC_GENERATED
										</span>
									</div>
								</div>
							</div>
						</motion.div>

						{/* 24/7 Availability */}
						<motion.div
							className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<Eye className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								24/7 Availability
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Access your data anytime, anywhere. 99.9% uptime
								SLA guaranteed.
							</p>
							{/* Uptime chart illustration */}
							<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
								<div className="mb-2 flex items-center justify-between">
									<span className="text-xs text-slate-400">
										System Status
									</span>
									<span className="flex items-center gap-1 text-xs text-green-400">
										<div className="h-1.5 w-1.5 rounded-full bg-green-500" />
										Operational
									</span>
								</div>
								<div className="flex h-8 items-end gap-1">
									{[
										40, 65, 45, 80, 55, 70, 60, 75, 50, 85,
										65, 70,
									].map((h, i) => (
										<div
											key={i}
											className="flex-1 rounded-t bg-primary/50"
											style={{ height: `${h}%` }}
										/>
									))}
								</div>
							</div>
						</motion.div>
					</div>

					{/* Data Preservation Promise */}
					{/* <motion.div
						className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<p className="text-lg font-medium text-primary md:text-xl">
							Your data is preserved securely for as long as you
							subscribe. Access your complete loan history
							anytime.
						</p>
					</motion.div> */}
				</div>
			</section>

			{/* TrueKredit Pro Section */}
			<section
				id="pro"
				data-nav-theme="dark"
				className="relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-24 text-white"
			>
				{/* Decorative background */}
				<div className="pointer-events-none absolute inset-0 z-0">
					<div className="absolute -top-32 right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />
					<div className="absolute -bottom-32 left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
					<svg
						className="absolute inset-0 h-full w-full opacity-[0.04]"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<pattern
								id="pro-grid"
								width="60"
								height="60"
								patternUnits="userSpaceOnUse"
							>
								<path
									d="M 60 0 L 0 0 0 60"
									fill="none"
									stroke="white"
									strokeWidth="1"
								/>
							</pattern>
						</defs>
						<rect
							width="100%"
							height="100%"
							fill="url(#pro-grid)"
						/>
					</svg>
				</div>

				<div className="relative mx-auto max-w-6xl px-6">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						{/* Left intro */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5 }}
						>
							<span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-violet-500/30">
								<Award className="h-3.5 w-3.5" />
								TrueKredit Pro
							</span>
							<h2 className="mt-5 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
								<span className="bg-linear-to-r from-indigo-200 via-violet-200 to-purple-200 bg-clip-text text-transparent">
									For lenders who go further.
								</span>
							</h2>
							<p className="mt-5 text-lg text-slate-300">
								Everything in TrueKredit, plus borrower-facing
								web and mobile apps, on-premises digital
								signing, and a dedicated AWS deployment in your
								own account — designed for
								<span className="font-medium text-white">
									{" "}
									KPKT Online Money Lending License
								</span>{" "}
								workloads.
							</p>

							<ul className="mt-6 space-y-3">
								{[
									{
										icon: Check,
										title: "Includes everything in TrueKredit",
										desc: "Same platform — deployed on your own AWS account.",
									},
									{
										icon: ShieldCheck,
										title: "Designed for digital licence compliance",
										desc: "Tenant isolation, dedicated DB & secrets, pinned semver releases.",
									},
									{
										icon: Server,
										title: "On-premises signing where you need it",
										desc: "PKI signing stack lives at your site; cloud talks to it via Cloudflare Tunnel.",
									},
								].map((item) => (
									<li
										key={item.title}
										className="flex items-start gap-3 rounded-xl border border-violet-400/20 bg-white/4 p-4 backdrop-blur-sm"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/20">
											<item.icon className="h-5 w-5 text-violet-300" />
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

						{/* Right: 4 spotlight cards */}
						<motion.div
							className="grid gap-4 sm:grid-cols-2"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: 0.15 }}
						>
							{[
								{
									icon: PenLine,
									title: "On-Premise Digital Signing",
									desc: "Powered by MSC Trustgate. Your keys, your control — Malaysian Digital Signature Act–aligned.",
									tag: "Trustgate",
								},
								{
									icon: Globe,
									title: "Borrower Web Origination",
									desc: "Fully branded portal — borrowers self-onboard, apply, and sign 24/7.",
									tag: "Branded",
								},
								{
									icon: Smartphone,
									title: "Mobile App — iOS & Android",
									desc: "Native borrower app with e-KYC, e-sign, and live loan tracking. Included in Pro.",
									tag: "Native",
								},
								{
									icon: Building2,
									title: "Branded Marketing Website",
									desc: "Your own front door — capture leads before they ever pick up the phone.",
									tag: "Lead Gen",
								},
							].map((card, i) => (
								<motion.div
									key={card.title}
									initial={{ opacity: 0, y: 14 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.4,
										delay: 0.2 + i * 0.07,
									}}
									className="group relative overflow-hidden rounded-2xl border border-violet-400/20 bg-linear-to-br from-white/6 to-white/3 p-5 backdrop-blur-sm transition-colors hover:border-violet-300/40"
								>
									<div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500/30 to-violet-500/30">
										<card.icon className="h-5 w-5 text-violet-200" />
									</div>
									<h3 className="text-base font-semibold text-white">
										{card.title}
									</h3>
									<p className="mt-1.5 text-sm text-slate-400">
										{card.desc}
									</p>
									<span className="mt-3 inline-flex rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-violet-300">
										{card.tag}
									</span>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Signing flow */}
					<motion.div
						className="mt-20 rounded-3xl border border-violet-400/15 bg-white/4 p-8 backdrop-blur-sm md:p-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-14">
							<div>
								<span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
									Pro Spotlight
								</span>
								<h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white md:text-3xl">
									Loan agreements signed digitally — on your
									own server.
								</h3>
								<p className="mt-4 text-slate-400">
									Trustgate-backed PKI signing runs on
									infrastructure you control. Borrowers sign
									remotely from web or mobile; signed
									documents land back in TrueKredit,
									audit-ready.
								</p>
							</div>
							<ol className="space-y-4">
								{[
									{
										step: "1",
										title: "Agreement generated",
										desc: "TrueKredit Pro auto-generates the loan agreement from approved terms.",
									},
									{
										step: "2",
										title: "Borrower receives signing link",
										desc: "Sent via email or in the borrower mobile app — sign from any device.",
									},
									{
										step: "3",
										title: "Signed. Stored. Compliant.",
										desc: "Trustgate-signed document stored securely — legally binding, audit-ready.",
									},
								].map((s, i) => (
									<motion.li
										key={s.step}
										className="flex gap-4 rounded-xl border border-violet-400/15 bg-white/4 p-5"
										initial={{ opacity: 0, x: 12 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.4,
											delay: i * 0.08,
										}}
									>
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-lg shadow-violet-500/40">
											{s.step}
										</div>
										<div>
											<p className="font-medium text-white">
												{s.title}
											</p>
											<p className="mt-1 text-sm text-slate-400">
												{s.desc}
											</p>
										</div>
									</motion.li>
								))}
							</ol>
						</div>
					</motion.div>

					<div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
						<Button
							asChild
							size="lg"
							className="gap-2 bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600"
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
							className="gap-2 border-violet-400/30 bg-white/4 text-white hover:bg-white/8 hover:text-white"
						>
							<Link href="#compare">
								Compare TrueKredit vs Pro
								<ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* SaaS vs Pro Comparison */}
			<section id="compare" className="border-t bg-muted/20 py-20">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-10 text-center"
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
							TrueKredit vs TrueKredit Pro
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
							Both editions share the full KPKT-aligned core. Pro
							adds borrower channels, digital attestation, on-prem
							signing, and a dedicated environment.
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
														<span>TrueKredit</span>
														<span className="text-[10px] font-normal text-muted-foreground normal-case">
															TrueStack-hosted
															SaaS
														</span>
													</div>
												</th>
												<th className="w-1/4 px-5 py-4 text-center font-semibold text-violet-700">
													<div className="flex flex-col items-center gap-0.5">
														<span>
															TrueKredit Pro
														</span>
														<span className="text-[10px] font-normal text-muted-foreground normal-case">
															Dedicated AWS
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
													Core platform
												</td>
											</tr>
											{[
												"Loan lifecycle management",
												"Book A / Book B management",
												"e-KYC — MyKad OCR, liveness, biometric match",
												"CTOS reports — built in",
												"TrueSSM™ reports via Infomina — built in",
												"Auto document generation — Lampiran A, Jadual J & K, default letters",
												"Auto emails & WhatsApp notifications",
												"Payment gateway integration",
												"Audit trail & KPKT-compliant reporting",
												"AWS Malaysia data residency",
												"iDeaL system export for KPKT submissions",
												"Walk-in borrower origination (counter / branch)",
												"Daily automated backups",
												"Borrower & portfolio analytics — dues, trends & PAR",
											].map((row) => (
												<tr
													key={row}
													className="text-foreground"
												>
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
											<tr className="bg-violet-500/5">
												<td
													colSpan={3}
													className="px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-violet-700"
												>
													Pro exclusive
												</td>
											</tr>
											{[
												"Digital signing — on-prem Trustgate server",
												"Digital Attestation — live & video scheduling",
												"Borrower web origination portal (branded)",
												"Borrower mobile app — iOS & Android (native)",
												"Branded marketing website",
												"Penetration test report & security compliance",
												"Dedicated AWS account, DB, and secrets",
											].map((row) => (
												<tr
													key={row}
													className="text-foreground"
												>
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
				</div>
			</section>

			{/* Integration Advantage */}
			<section id="integrations" className="border-t py-20">
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="mb-10 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<SectionBadge
							icon={Link2}
							text="Integration Advantage"
							className="justify-center"
						/>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
							Integrations included. We negotiate better rates for
							you.
						</h2>
					</motion.div>

					{/* Partner strip */}
					<motion.div
						className="overflow-hidden rounded-2xl border bg-card shadow-sm"
						initial={{ opacity: 0, y: 14 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.45 }}
					>
						<div className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
							{[
								{
									name: "CTOS",
									desc: "Credit reporting",
									logoSrc:
										"/truekredit/integrations/ctos-logo.png",
									// Official PNG is white-on-transparent (for dark headers); darken for light UI.
									logoClassName:
										"[filter:brightness(0)] dark:[filter:none]",
								},
								{
									name: "Trustgate",
									desc: "PKI signing",
									logoSrc:
										"/truekredit/integrations/trustgate-logo.png",
								},
								{
									name: "TrueSSM™",
									desc: "SSM Search company checks",
									logoSrc:
										"/truekredit/integrations/ssmsearch-logo.webp",
								},
								{
									name: "TrueIdentity™",
									desc: "e-KYC",
									logoSrc: "/truestack-logo-transparent.svg",
								},
								{
									name: "GKash",
									desc: "Payment gateway",
									logoSrc:
										"/truekredit/integrations/gkash-logo.png",
								},
							].map((p) => (
								<div
									key={p.name}
									className="flex flex-col items-center px-6 py-6 text-center"
								>
									<div className="relative mb-4 h-10 w-38">
										<Image
											src={p.logoSrc}
											alt={
												p.name === "e-KYC"
													? "TrueStack e-KYC"
													: p.name === "Infomina"
														? "SSM Search logo"
														: `${p.name} logo`
											}
											fill
											className={`object-contain${
												"logoClassName" in p &&
												p.logoClassName
													? ` ${p.logoClassName}`
													: ""
											}`}
											sizes="152px"
										/>
									</div>
									<div className="font-display text-xl font-semibold tracking-tight text-foreground">
										{p.name}
									</div>
									<div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
										{p.desc}
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						{[
							{
								icon: Check,
								title: "No integration fees",
								desc: "You'd otherwise pay each vendor separately to integrate. With TrueKredit, it's already done and included.",
							},
							{
								icon: BarChart3,
								title: "Better partner rates",
								desc: "Our volume and partnerships unlock pricing you can't reach by going direct.",
							},
							{
								icon: Briefcase,
								title: "One vendor, one contract",
								desc: "We manage the partner relationships so you can focus on lending. Especially valuable for SaaS operators.",
							},
						].map((c, i) => (
							<motion.div
								key={c.title}
								initial={{ opacity: 0, y: 14 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: i * 0.07 }}
							>
								<Card className="h-full transition-all hover:border-primary/30 hover:shadow-md">
									<CardHeader>
										<div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
											<c.icon className="h-5 w-5 text-primary" />
										</div>
										<CardTitle className="text-base">
											{c.title}
										</CardTitle>
										<CardDescription>
											{c.desc}
										</CardDescription>
									</CardHeader>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Zero to Licensed — services bridge */}
			<section
				id="zero-to-license"
				className="border-t bg-muted/30 py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<motion.div
						className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<SectionBadge
								icon={Building2}
								text="Full-Service Partnership"
							/>
							<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
								We take you from zero to licensed and lending.
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Don&apos;t have a KPKT licence yet? TrueStack
								covers the full journey — licence work,
								compliance setup, and the digital infrastructure
								that makes you operational fast.
							</p>
							<Button asChild size="lg" className="mt-6 gap-2">
								<Link href="/services/digital-license">
									Explore Digital KPKT Licence
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
						<ol className="space-y-3">
							{[
								{
									step: "1",
									title: "Licence acquisition",
									desc: "KPKT licence trading, new applications & renewals — we handle paperwork and liaison.",
								},
								{
									step: "2",
									title: "Compliance & consultancy",
									desc: "KPKT account management, regulatory advisory, annual submissions, audit readiness.",
								},
								{
									step: "3",
									title: "Digital licence conversion",
									desc: "Transform a physical KPKT lender into a fully digital, cloud-ready operation.",
								},
								{
									step: "4",
									title: "TrueKredit goes live",
									desc: "Platform onboarded, staff trained, first loan disbursed — compliant from day one.",
									highlight: true,
								},
							].map((s) => (
								<li
									key={s.step}
									className={`flex gap-4 rounded-xl border bg-background p-5 ${s.highlight ? "border-primary/30 bg-primary/5" : ""}`}
								>
									<div
										className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${s.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
									>
										{s.step}
									</div>
									<div>
										<p
											className={`font-medium ${s.highlight ? "text-primary" : "text-foreground"}`}
										>
											{s.title}
										</p>
										<p className="mt-1 text-sm text-muted-foreground">
											{s.desc}
										</p>
									</div>
								</li>
							))}
						</ol>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="border-t bg-muted/30 py-20 md:py-24">
				<div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
					<motion.div
						className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
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
						<p className="mx-auto mt-3 text-base text-muted-foreground md:text-lg">
							Quick answers on what you get on either plan—and
							what Pro unlocks—plus pointers back to the
							comparison table above when you want the checklist.
						</p>
					</motion.div>

					<motion.div
						className="w-full max-w-none"
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
									<AccordionTrigger className="py-5 text-left text-base font-medium md:text-lg data-[state=open]:text-foreground">
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

			{/* Bottom CTA band */}
			<section
				id="cta"
				data-nav-theme="dark"
				className="relative overflow-hidden border-t border-slate-800 bg-linear-to-br from-slate-950 via-indigo-950 to-slate-950 py-24 text-white"
			>
				<div className="pointer-events-none absolute inset-0 z-0">
					<div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
					<div className="absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/15 blur-3xl" />
				</div>
				<div className="relative mx-auto max-w-6xl px-6 text-center">
					<h2 className="mx-auto mb-4 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						<span className="bg-linear-to-r from-indigo-200 via-violet-200 to-purple-200 bg-clip-text text-transparent">
							Ready to supercharge your lending?
						</span>
					</h2>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
						Get started with TrueKredit on Core when you&apos;re
						ready—or reach out if you want to discuss TrueKredit Pro
						for your licence, borrowers, and roadmap.
					</p>
					<div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
						<Button
							asChild
							size="lg"
							className="gap-2 bg-linear-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600"
						>
							<Link
								href="https://kredit.truestack.my/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Get started with TrueKredit
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="gap-2 border-violet-300 bg-violet-500/5 text-violet-200 hover:bg-violet-500/10 hover:text-white"
						>
							<Link href="/contact?subject=TrueKredit%20Pro">
								Talk to us about Pro
								<ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button
							asChild
							variant="ghost"
							size="lg"
							className="gap-2 text-slate-300 hover:bg-white/6 hover:text-white"
						>
							<Link href="/services/digital-license">
								Need a KPKT licence?
								<ChevronRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
