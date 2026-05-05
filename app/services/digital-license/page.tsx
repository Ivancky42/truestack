import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import Link from "next/link";
import { DigitalLicenseHero } from "@/components/sections/digital-license-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionBadge } from "@/components/shared/section-badge";
import { CaseStudies } from "@/components/sections/case-studies";
import { caseStudies } from "@/lib/case-studies-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Stepper } from "@/components/ui/stepper";
import {
	Presentation,
	ShieldCheck,
	ArrowRight,
	CheckCircle2,
	Globe,
	Smartphone,
	Clock,
	ArrowUpRight,
	Server,
	Building2,
	Layers,
	Database,
	Lock,
	FileCheck,
	Eye,
	HandshakeIcon,
	Sparkles,
	UserCheck,
	Briefcase,
	Headphones,
	Award,
} from "lucide-react";

export const metadata: Metadata = {
	title: "Digital KPKT License — End-to-End Service on TrueKredit™ Pro",
	description:
		"From provisional licence to first digital loan, we run the full KPKT digital lending licence journey on TrueKredit™ Pro — consultancy, build, KPKT review, and final approval, in ~3 months.",
	keywords: [
		"digital KPKT license",
		"KPKT digital license conversion",
		"KPKT digital lending license",
		"KPKT license consultancy",
		"TrueKredit Pro",
		"digital money lender Malaysia",
		"online lending platform Malaysia",
		"KPKT PPW to digital",
		"fully digital money lender",
	],
	alternates: { canonical: "/services/digital-license" },
	openGraph: {
		title: "Digital KPKT License — End-to-End on TrueKredit™ Pro",
		description:
			"Full-service digital KPKT lending licence — consultancy, TrueKredit™ Pro build on dedicated AWS, KPKT review, and final approval, in ~3 months.",
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "Digital KPKT License — End-to-End on TrueKredit™ Pro",
		description:
			"Full-service digital KPKT lending licence — consultancy, TrueKredit™ Pro build on dedicated AWS, KPKT review, and final approval, in ~3 months.",
		images: [defaultOgImage.url],
	},
};

const benefits = [
	{
		icon: Globe,
		title: "Operate Nationwide",
		description:
			"Serve customers across all of Malaysia, not just your local area.",
	},
	{
		icon: Smartphone,
		title: "Web + Mobile Apps",
		description: "Customers can apply, KYC and pay from anywhere, anytime.",
	},
	{
		icon: Clock,
		title: "~3 Months to Launch",
		description:
			"Our proven process gets you operational faster than going it alone.",
	},
	{
		icon: ShieldCheck,
		title: "KPKT-Compliant by Design",
		description:
			"Built on TrueKredit™ Pro — every requirement covered from day one.",
	},
];

// What it means to work with us — the consultancy/hand-holding promise.
const partnershipPillars = [
	{
		icon: HandshakeIcon,
		title: "Licensing strategy & advisory",
		desc: "We sit with you, map your operating model to KPKT digital licence requirements, and structure your application to maximise approval.",
	},
	{
		icon: FileCheck,
		title: "Provisional licence preparation",
		desc: "We assemble the dossier, draft the policy documents, and walk into the KPKT presentation with you for the provisional licence.",
	},
	{
		icon: Layers,
		title: "Build on TrueKredit™ Pro",
		desc: "Your dedicated TrueKredit™ Pro deployment on AWS Malaysia — branded web, native mobile apps, on-prem digital signing, all wired up.",
	},
	{
		icon: ShieldCheck,
		title: "UAT, pen-test & KPKT review prep",
		desc: "Independent third-party penetration testing, hands-on UAT with your team, and a complete KPKT review pack — ready for inspection.",
	},
	{
		icon: Award,
		title: "Final approval & go-live",
		desc: "We accompany you through the KPKT final inspection, handle the technical Q&A, and stay on through your first digital disbursement.",
	},
	{
		icon: Headphones,
		title: "Post-launch support",
		desc: "Annual KPKT submissions, regulatory updates, and platform operations — we keep you compliant long after you go live.",
	},
];

const platformFeatures = [
	"Online loan application & approval",
	"e-KYC identity verification",
	"On-premise digital signing",
	"Automated disbursement",
	"Admin dashboard",
	"Auto document generation (receipts, notices)",
	"Complete audit trails",
	"Malaysia data residency (AWS)",
	"Real-time reporting dashboard",
	"Customer mobile app",
];

// Case studies for this page — operators we've taken to a digital KPKT licence.
const digitalLicenseStudyTitles = [
	"PinjoCep",
	"Proficient Premium",
	"CreditXpress",
	"Andas Capital",
];
const digitalLicenseStudies = digitalLicenseStudyTitles
	.map((title) => caseStudies.find((c) => c.title === title))
	.filter((s): s is NonNullable<typeof s> => Boolean(s));

export default function DigitalLicensePage() {
	return (
		<>
			<DigitalLicenseHero />

			{/* Value Proposition — bento grid that frames the "why" of going
          digital. Untouched in structure; copy now points at the end-to-end
          partnership story that follows. */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title="Transform Your Lending Business"
						subtitle="From a single branch to a fully digital, KPKT-licensed platform — we handle the licence, the build, and everything in between."
						centered
					/>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{/* Before → After */}
						<div className="overflow-hidden rounded-2xl border bg-card lg:col-span-2">
							<div className="grid sm:grid-cols-2">
								<div className="relative p-6">
									<p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
										Before
									</p>
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
										<Building2 className="h-6 w-6 text-muted-foreground" />
									</div>
									<p className="text-2xl font-semibold">
										1 Location
									</p>
									<p className="mt-1 text-sm text-muted-foreground">
										Branch-based only, limited to your local
										area
									</p>
									<div className="mt-4">
										<div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
											<span>Customer Reach</span>
											<span>Local</span>
										</div>
										<div className="h-2 w-full rounded-full bg-muted">
											<div className="h-2 w-[8%] rounded-full bg-muted-foreground/40" />
										</div>
									</div>
								</div>
								<div className="relative border-t bg-primary/5 p-6 sm:border-l sm:border-t-0">
									<p className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
										After
									</p>
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
										<Globe className="h-6 w-6 text-primary-foreground" />
									</div>
									<p className="text-2xl font-semibold text-primary">
										All of Malaysia
									</p>
									<p className="mt-1 text-sm text-muted-foreground">
										Web &amp; mobile platform serving
										customers nationwide
									</p>
									<div className="mt-4">
										<div className="mb-1 flex items-center justify-between text-xs">
											<span className="text-primary">
												Customer Reach
											</span>
											<span className="font-medium text-primary">
												Nationwide
											</span>
										</div>
										<div className="h-2 w-full rounded-full bg-primary/20">
											<div className="h-2 w-full rounded-full bg-primary" />
										</div>
									</div>
								</div>
							</div>
						</div>

						{benefits.map((benefit) => (
							<Card
								key={benefit.title}
								className="flex flex-col justify-between rounded-2xl"
							>
								<CardContent className="pt-6">
									<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
										<benefit.icon className="h-5 w-5 text-primary" />
									</div>
									<h3 className="mb-1 font-semibold">
										{benefit.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{benefit.description}
									</p>
								</CardContent>
							</Card>
						))}

						<div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-5 sm:flex-row lg:col-span-2">
							<div className="text-center sm:text-left">
								<p className="font-medium">
									Don&apos;t have a KPKT traditional licence
									yet?
								</p>
								<p className="text-sm text-muted-foreground">
									We can help you obtain or acquire one to get
									started.
								</p>
							</div>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="shrink-0 gap-2"
							>
								<Link href="/contact">
									Get in Touch
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Built on TrueKredit Pro — light, prominent. The product
          differentiator: this isn't a generic platform, it's TrueKredit Pro
          packaged for KPKT digital licensing. */}
			<section
				id="truekredit-pro"
				className="scroll-mt-20 border-t bg-muted/30 py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
						<div>
							<SectionBadge
								icon={Sparkles}
								text="Built on TrueKredit™ Pro"
							/>
							<h2 className="mb-4 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
								KPKT-digital-ready{" "}
								<span className="text-primary">
									out of the box.
								</span>
							</h2>
							<p className="mb-5 text-lg text-muted-foreground md:text-xl">
								Your digital lending platform runs on{" "}
								<strong className="text-foreground">
									TrueKredit™ Pro
								</strong>
								— our flagship lending platform engineered
								specifically for the KPKT Online Money Lending
								Licence. Every requirement KPKT will ask about
								is already wired in.
							</p>
							<p className="mb-6 text-base text-muted-foreground">
								Same battle-tested core as our{" "}
								<Link
									href="/truekredit"
									className="text-primary underline underline-offset-4 hover:text-primary/80"
								>
									TrueKredit™ system
								</Link>{" "}
								powering KPKT-licensed lenders today — plus
								borrower web + mobile apps, on-premises PKI
								signing, and a fully isolated AWS deployment in
								your own account.
							</p>

							<div className="grid gap-3 sm:grid-cols-2">
								{[
									{
										icon: ShieldCheck,
										title: "KPKT digital licence aligned",
										desc: "Built around the technical and procedural requirements KPKT inspects.",
									},
									{
										icon: Server,
										title: "Dedicated AWS Malaysia",
										desc: "Your own isolated infrastructure, database, and secrets — never shared.",
									},
									{
										icon: Smartphone,
										title: "Branded web + mobile apps",
										desc: "Native iOS &amp; Android, plus a borrower web portal at your domain.",
									},
									{
										icon: Lock,
										title: "On-premise digital signing",
										desc: "MSC Trustgate PKI signing under your control, as KPKT requires.",
									},
								].map((item) => (
									<div
										key={item.title}
										className="flex gap-3 rounded-xl border bg-card p-4"
									>
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
											<item.icon className="h-4.5 w-4.5 text-primary" />
										</div>
										<div>
											<p className="text-sm font-semibold">
												{item.title}
											</p>
											<p className="mt-0.5 text-sm text-muted-foreground">
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>

							<div className="mt-6 flex flex-wrap gap-3">
								<Button
									asChild
									variant="outline"
									className="gap-2"
								>
									<Link href="/truekredit#pro">
										Explore TrueKredit™ Pro
										<ArrowRight className="h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									variant="ghost"
									className="gap-2 text-muted-foreground hover:text-foreground"
								>
									<Link
										href="https://demo.truestack.my"
										target="_blank"
										rel="noopener noreferrer"
									>
										See it live
										<ArrowUpRight className="h-4 w-4" />
									</Link>
								</Button>
							</div>
						</div>

						{/* Right — layered diagram showing Pro additions on top
                of the TrueKredit core. Light themed. */}
						<div className="flex justify-center">
							<div className="w-full max-w-sm space-y-3">
								<div className="rounded-2xl border-2 border-primary/30 bg-primary/5 p-5 shadow-sm">
									<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
										TrueKredit™ Pro layer
									</p>
									<div className="space-y-2">
										{[
											"Borrower Web Portal",
											"Borrower Mobile App (iOS + Android)",
											"On-Premise Digital Signing (HSM)",
											"Digital Attestation",
											"Online Repayments",
											"e-KYC Verification",
											"Online Loan Application Flow",
										].map((f) => (
											<div
												key={f}
												className="flex items-center gap-2 rounded-lg border border-primary/20 bg-background px-3 py-2"
											>
												<CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
												<span className="text-sm text-foreground">
													{f}
												</span>
											</div>
										))}
									</div>
								</div>

								<div className="flex items-center justify-center">
									<div className="h-6 w-px bg-border" />
								</div>

								<div className="rounded-2xl border bg-card p-5 shadow-sm">
									<div className="mb-3 flex items-center justify-between">
										<p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
											TrueKredit™ Core
										</p>
										<Link
											href="/truekredit"
											className="flex items-center gap-1 text-xs text-primary hover:underline"
										>
											Learn more{" "}
											<ArrowUpRight className="h-3 w-3" />
										</Link>
									</div>
									<div className="grid grid-cols-2 gap-2">
										{[
											"Loan Management",
											"Borrower Lifecycle",
											"Compliance & Audit",
											"Auto Documents",
											"Late Fees Engine",
											"Repayment Tracking",
										].map((f) => (
											<div
												key={f}
												className="flex items-center gap-2 rounded-lg border bg-muted/30 px-3 py-2"
											>
												<CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
												<span className="text-xs text-muted-foreground">
													{f}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* End-to-End Partnership — explicitly call out the consultancy /
          hand-holding promise. Sits between "what platform" and "how the
          journey runs", so prospects understand they are buying a service,
          not just software. */}
			<section
				id="partnership"
				className="scroll-mt-20 border-t bg-background py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="mx-auto max-w-3xl text-center">
						<SectionBadge
							icon={HandshakeIcon}
							text="End-to-End Partnership"
							className="justify-center"
						/>
						<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
							Not just software —{" "}
							<span className="text-primary">
								a full-service team
							</span>{" "}
							that gets you licensed.
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
							We don&apos;t hand you software and wish you luck.
							TrueStack walks with you from the first KPKT
							conversation through provisional licence, build,
							review, and final approval — and stays on for
							operations after go-live.
						</p>
					</div>

					<div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{partnershipPillars.map((p, i) => (
							<div
								key={p.title}
								className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
							>
								<div className="mb-4 flex items-center gap-3">
									<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
										<p.icon className="h-5 w-5 text-primary" />
									</div>
									<span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
										{String(i + 1).padStart(2, "0")}
									</span>
								</div>
								<h3 className="mb-2 font-semibold leading-snug">
									{p.title}
								</h3>
								<p className="text-sm text-muted-foreground">
									{p.desc}
								</p>
							</div>
						))}
					</div>

					{/* "What you don't have to worry about" reassurance ribbon */}
					<div className="mt-10 grid gap-4 rounded-2xl border bg-muted/30 p-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:p-6">
						<div className="flex items-start gap-4">
							<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
								<UserCheck className="h-5 w-5 text-primary" />
							</div>
							<div>
								<p className="font-display text-base font-semibold tracking-tight md:text-lg">
									One team. One contract. One number to call.
								</p>
								<p className="mt-1 text-sm text-muted-foreground md:text-[15px]">
									KPKT consultants, engineers, security
									reviewers, and operations — all under
									TrueStack. You focus on lending; we handle
									the rest.
								</p>
							</div>
						</div>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="shrink-0 gap-2 md:justify-self-end"
						>
							<Link href="/contact">
								Talk to our licensing team
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			{/* Timeline Section — the same 4 phases, but reworded so each
          phase makes the consultancy / hand-holding obvious. */}
			<section
				id="timeline"
				className="scroll-mt-20 border-t bg-muted/30 py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title="Your 3-Month Journey to Digital"
						subtitle="A proven playbook — every step run by us, with you in the room."
						centered
					/>

					<Stepper
						steps={[
							{
								title: "Weeks 1–2",
								description: "Provisional Licence",
							},
							{ title: "Weeks 3–8", description: "Build on Pro" },
							{
								title: "Weeks 9–10",
								description: "UAT & Pen-Test",
							},
							{
								title: "Weeks 11–12",
								description: "Final Approval",
							},
						]}
						className="mx-auto mb-10 hidden max-w-2xl md:block"
					/>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{/* Phase 1 */}
						<div className="group relative rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40">
							<div className="mb-3 flex items-center gap-2.5">
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
									<FileCheck className="h-5 w-5 text-primary" />
								</div>
								<Badge variant="secondary" className="text-xs">
									Weeks 1–2
								</Badge>
							</div>
							<h3 className="mb-1.5 font-semibold leading-snug">
								Provisional licence prep
							</h3>
							<p className="text-sm text-muted-foreground">
								We assemble the dossier, draft the policies, and
								walk into the KPKT presentation with you to
								secure the provisional licence.
							</p>
							<p className="mt-3 text-xs font-medium text-primary">
								We lead. You attend.
							</p>
						</div>

						{/* Phase 2 — highlighted */}
						<div className="group relative rounded-2xl border border-primary/30 bg-primary/5 p-5 transition-colors hover:border-primary/50">
							<div className="mb-3 flex items-center gap-2.5">
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
									<Layers className="h-5 w-5 text-primary-foreground" />
								</div>
								<Badge className="bg-primary text-xs hover:bg-primary/90">
									Weeks 3–8
								</Badge>
							</div>
							<h3 className="mb-1.5 font-semibold leading-snug">
								Build on TrueKredit™ Pro
							</h3>
							<p className="mb-3 text-sm text-muted-foreground">
								Dedicated AWS deployment, on-prem signing
								server, branded web &amp; mobile apps — all
								configured, deployed, and integrated by us.
							</p>
							<div className="flex flex-wrap gap-1.5">
								<Badge
									variant="outline"
									className="text-[11px]"
								>
									Web App
								</Badge>
								<Badge
									variant="outline"
									className="text-[11px]"
								>
									iOS
								</Badge>
								<Badge
									variant="outline"
									className="text-[11px]"
								>
									Android
								</Badge>
								<Badge
									variant="outline"
									className="text-[11px]"
								>
									Dashboard
								</Badge>
							</div>
						</div>

						{/* Phase 3 */}
						<div className="group relative rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40">
							<div className="mb-3 flex items-center gap-2.5">
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
									<ShieldCheck className="h-5 w-5 text-primary" />
								</div>
								<Badge variant="secondary" className="text-xs">
									Weeks 9–10
								</Badge>
							</div>
							<h3 className="mb-1.5 font-semibold leading-snug">
								UAT, pen-test &amp; review pack
							</h3>
							<p className="text-sm text-muted-foreground">
								Hands-on UAT with your team, an independent
								third-party penetration test, and a full KPKT
								review pack — assembled and ready.
							</p>
							<p className="mt-3 text-xs font-medium text-primary">
								We organise. You sign off.
							</p>
						</div>

						{/* Phase 4 */}
						<div className="group relative rounded-2xl border bg-card p-5 transition-colors hover:border-primary/40">
							<div className="mb-3 flex items-center gap-2.5">
								<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
									<CheckCircle2 className="h-5 w-5 text-primary" />
								</div>
								<Badge variant="secondary" className="text-xs">
									Weeks 11–12
								</Badge>
							</div>
							<h3 className="mb-1.5 font-semibold leading-snug">
								Final approval &amp; go-live
							</h3>
							<p className="text-sm text-muted-foreground">
								We accompany you to the KPKT final inspection,
								handle the technical Q&amp;A, and stay on
								through your first borrower disbursement.
							</p>
							<p className="mt-3 text-xs font-medium text-primary">
								We sit beside you, the whole way.
							</p>
						</div>
					</div>

					<div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 px-6 py-4 text-center text-sm text-muted-foreground">
						<span className="font-medium text-primary">
							~3 months
						</span>{" "}
						from kickoff to serving customers nationwide — and we
						stay on for ongoing KPKT compliance after launch.
					</div>
				</div>
			</section>

			{/* What You Get — keep dark; emphasises the platform mockups. */}
			<section
				data-nav-theme="dark"
				className="border-t bg-slate-950 py-20 text-white"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div>
							<SectionBadge
								icon={Layers}
								text="Your Digital Platform"
								className="[&>svg]:text-primary [&>span]:text-primary"
							/>
							<h2 className="mb-4 font-display text-4xl font-medium tracking-tight md:text-5xl">
								A complete digital lending platform — branded,
								yours.
							</h2>
							<p className="mb-6 text-lg text-slate-400 md:text-xl">
								A fully branded TrueKredit™ Pro deployment
								shipped under your domain, your colours, and
								your logo — designed to meet KPKT digital
								requirements and feel native to your borrowers.
							</p>
							<div className="grid gap-3 sm:grid-cols-2">
								{platformFeatures.map((feature) => (
									<div
										key={feature}
										className="flex items-center gap-2"
									>
										<CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
										<span className="text-slate-200">
											{feature}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Platform Illustrations */}
						<div className="relative">
							<div className="grid gap-6">
								<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
									<div className="mb-3 flex items-center gap-2">
										<Globe className="h-5 w-5 text-primary" />
										<span className="text-sm font-medium text-white">
											Web Application
										</span>
										<span className="ml-auto text-xs text-slate-500">
											Desktop &amp; Tablet
										</span>
									</div>
									<div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
										<div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-3 py-2">
											<div className="flex gap-1.5">
												<div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
												<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
												<div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
											</div>
											<div className="ml-2 flex-1 rounded bg-slate-800 px-3 py-1 text-xs text-slate-400">
												yourbrand.com.my
											</div>
										</div>
										<div className="p-4">
											<div className="mb-3 h-3 w-32 rounded bg-primary/30" />
											<div className="mb-2 h-2 w-full rounded bg-slate-700" />
											<div className="mb-2 h-2 w-3/4 rounded bg-slate-700" />
											<div className="mt-4 grid grid-cols-3 gap-2">
												<div className="h-16 rounded bg-slate-700/50" />
												<div className="h-16 rounded bg-slate-700/50" />
												<div className="h-16 rounded bg-slate-700/50" />
											</div>
										</div>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
										<div className="mb-3 flex items-center gap-2">
											<Smartphone className="h-5 w-5 text-primary" />
											<span className="text-sm font-medium text-white">
												Mobile App
											</span>
										</div>
										<div className="mx-auto w-28">
											<div className="overflow-hidden rounded-2xl border-2 border-slate-600 bg-slate-800">
												<div className="mx-auto h-4 w-12 rounded-b-lg bg-slate-900" />
												<div className="p-3">
													<div className="mb-2 h-2 w-12 rounded bg-primary/30" />
													<div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
													<div className="mb-1.5 h-1.5 w-3/4 rounded bg-slate-700" />
													<div className="mt-3 h-8 rounded bg-primary/20" />
													<div className="mt-2 h-8 rounded bg-slate-700/50" />
													<div className="mt-2 h-8 rounded bg-slate-700/50" />
												</div>
											</div>
										</div>
										<p className="mt-3 text-center text-xs text-slate-500">
											iOS &amp; Android
										</p>
									</div>

									<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
										<div className="mb-3 flex items-center gap-2">
											<Presentation className="h-5 w-5 text-primary" />
											<span className="text-sm font-medium text-white">
												Admin
											</span>
										</div>
										<div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
											<div className="flex">
												<div className="w-8 border-r border-slate-700 bg-slate-900 p-1.5">
													<div className="mb-2 h-2 w-full rounded bg-primary/50" />
													<div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
													<div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
													<div className="mb-1.5 h-1.5 w-full rounded bg-slate-700" />
												</div>
												<div className="flex-1 p-2">
													<div className="mb-2 grid grid-cols-2 gap-1">
														<div className="h-6 rounded bg-primary/20" />
														<div className="h-6 rounded bg-slate-700/50" />
													</div>
													<div className="h-12 rounded bg-slate-700/30" />
												</div>
											</div>
										</div>
										<p className="mt-3 text-center text-xs text-slate-500">
											Full Control
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Compliance & Data Residency Section */}
			<section
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-20 text-white"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="mb-12">
						<SectionBadge
							icon={ShieldCheck}
							text="Built for Compliance"
							className="[&>svg]:text-primary [&>span]:text-primary"
						/>
						<h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
							Enterprise-grade infrastructure
						</h2>
						<p className="mt-4 max-w-2xl text-lg text-slate-400 md:text-xl">
							Modern technology stack with Malaysian regulatory
							compliance built in from day one.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Malaysia Data Residency - Large card with illustration */}
						<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2">
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
								<div className="relative">
									<div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
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
										<div className="relative rounded-lg border border-slate-700 bg-slate-900 p-4">
											<div className="flex items-center justify-center gap-4">
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
												<div className="flex flex-col items-center gap-1">
													<div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
													<div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
													<div className="h-0.5 w-8 bg-linear-to-r from-primary/60 to-primary" />
												</div>
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
											<div className="mt-4 flex items-center justify-between rounded bg-slate-800/50 px-3 py-2">
												<div className="flex items-center gap-2">
													<div className="h-2 w-2 rounded-full bg-green-500" />
													<span className="text-[10px] text-slate-400">
														All systems operational
													</span>
												</div>
												<div className="flex items-center gap-3 text-[10px] text-slate-500">
													<span>
														Latency:{" "}
														<span className="text-green-400">
															12ms
														</span>
													</span>
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
						</div>

						{/* On-Premise Digital Signing */}
						<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<Server className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								On-Premise Digital Signing
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Dedicated servers for digital signing as
								required by KPKT regulations.
							</p>
							<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
								<div className="flex items-center gap-3">
									<div className="flex h-12 w-10 flex-col items-center justify-center rounded border border-slate-600 bg-slate-900">
										<div className="mb-1 h-1 w-6 rounded bg-primary" />
										<div className="mb-1 h-1 w-6 rounded bg-slate-600" />
										<div className="h-1 w-6 rounded bg-slate-600" />
									</div>
									<div className="flex-1">
										<div className="mb-1 text-xs font-medium text-white">
											HSM Server
										</div>
										<div className="flex items-center gap-1">
											<div className="h-1.5 w-1.5 rounded-full bg-green-500" />
											<span className="text-[10px] text-slate-500">
												Active
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Enterprise Security */}
						<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<Lock className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								Enterprise Security
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Bank-grade encryption, secure APIs, and
								role-based access control.
							</p>
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
										RBAC Controls
									</span>
								</div>
							</div>
						</div>

						{/* Complete Audit Trails */}
						<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<FileCheck className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								Complete Audit Trails
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Comprehensive logging for every action, ensuring
								full traceability.
							</p>
							<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
								<div className="space-y-2 font-mono text-[10px]">
									<div className="flex items-center gap-2">
										<span className="text-slate-500">
											10:42:15
										</span>
										<span className="text-primary">
											LOAN_APPROVED
										</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-slate-500">
											10:41:02
										</span>
										<span className="text-slate-300">
											EKYC_VERIFIED
										</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-slate-500">
											10:40:28
										</span>
										<span className="text-slate-300">
											DOC_SIGNED
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Real-time Monitoring */}
						<div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
								<Eye className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-semibold text-white">
								24/7 Monitoring
							</h3>
							<p className="mb-4 text-sm text-slate-400">
								Real-time system monitoring with instant alerts
								and 99.9% SLA.
							</p>
							<div className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
								<div className="mb-2 flex items-center justify-between">
									<span className="text-xs text-slate-400">
										System Status
									</span>
									<span className="flex items-center gap-1 text-xs text-green-400">
										<div className="h-1.5 w-1.5 rounded-full bg-green-500" />
										All Systems Operational
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
						</div>
					</div>
				</div>
			</section>

			{/* Success Stories — full carousel using the same component as the
          home page, filtered to the digital-licence operators we've taken
          live (PinjoCep, Proficient Premium, CreditXpress, Andas Capital). */}
			<section
				id="success-stories"
				className="scroll-mt-20 border-t bg-muted/30"
			>
				<CaseStudies
					studies={digitalLicenseStudies}
					title="Operators we've taken digital"
					subtitle="Real KPKT-licensed lenders launched on TrueKredit™ Pro — built, reviewed, and approved with our end-to-end licensing team."
					className="py-20"
				/>
			</section>

			{/* CTA Section */}
			<section className="border-t py-20">
				<div className="mx-auto max-w-6xl px-6 text-center">
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary">
						<Briefcase className="h-3.5 w-3.5" />
						Full-service KPKT digital licensing
					</div>
					<h2 className="mb-4 font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
						Ready to go digital?
					</h2>
					<p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
						Talk to our licensing team. We&apos;ll map your route to
						a KPKT digital licence — provisional, build, review,
						approval — and stay with you through go-live.
					</p>
					<p className="mx-auto mb-8 max-w-2xl text-sm text-muted-foreground md:text-base">
						Want to look around first? Try the{" "}
						<Link
							href="https://demo.truestack.my"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-primary underline-offset-4 hover:underline"
						>
							public lending demo
						</Link>{" "}
						— borrower origination, admin portal, and on-prem
						signing all live.
					</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Button
							asChild
							size="lg"
							className="gap-2 bg-primary hover:bg-primary/90"
						>
							<Link href="/contact">
								Start your transformation
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="gap-2"
						>
							<Link
								href="https://demo.truestack.my"
								target="_blank"
								rel="noopener noreferrer"
							>
								Open lending demo
								<ArrowUpRight className="h-4 w-4" />
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="gap-2"
						>
							<Link href="/truekredit">
								Explore TrueKredit™ for traditional licences
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
