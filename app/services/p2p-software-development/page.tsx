import type { Metadata } from "next";
import Link from "next/link";
import { defaultOgImage } from "@/lib/seo-defaults";
import { p2pFaq } from "@/lib/p2p-faq";
import { P2P_METADATA, P2P_PAGE_PATH } from "@/lib/p2p-seo";
import { P2PHero } from "@/components/sections/p2p-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionBadge } from "@/components/shared/section-badge";
import { P2PPlatformDiagram } from "@/components/sections/p2p-platform-diagram";
import { P2PListingsPreview } from "@/components/sections/p2p-listings-preview";
import {
	CaseStudies,
	type CaseStudy,
} from "@/components/sections/case-studies";
import { P2PSchema } from "@/components/seo/p2p-schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	ArrowRight,
	BadgeCheck,
	Banknote,
	BarChart3,
	Boxes,
	Building2,
	CheckCircle2,
	ClipboardList,
	Code2,
	Coins,
	FileCheck2,
	FileSignature,
	Gauge,
	HandCoins,
	HeartHandshake,
	Layers,
	LineChart,
	Network,
	PenTool,
	Receipt,
	Repeat,
	Rocket,
	Scale,
	ScanFace,
	Server,
	ShieldCheck,
	Sparkles,
	Star,
	Users,
	Wallet,
	Zap,
} from "lucide-react";

export const metadata: Metadata = {
	title: { absolute: P2P_METADATA.title },
	description: P2P_METADATA.description,
	keywords: [...P2P_METADATA.keywords],
	alternates: { canonical: P2P_PAGE_PATH },
	openGraph: {
		title: P2P_METADATA.openGraphTitle,
		description: P2P_METADATA.openGraphDescription,
		url: P2P_PAGE_PATH,
		type: "website",
		locale: "en_MY",
		siteName: "Truestack",
		images: [defaultOgImage],
	},
	twitter: {
		card: "summary_large_image",
		title: P2P_METADATA.openGraphTitle,
		description: P2P_METADATA.openGraphDescription,
		images: [defaultOgImage.url],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const platformModules = [
	{
		icon: Users,
		title: "Investor portal",
		description:
			"Branded web and mobile experiences for investor sign-up, suitability, deposits, allocations and statements.",
	},
	{
		icon: Building2,
		title: "Issuer portal",
		description:
			"Self-serve onboarding, document upload, listing applications and live funding visibility for SMEs and originators.",
	},
	{
		icon: Layers,
		title: "Listings & matching engine",
		description:
			"Configurable note types, Shariah-screened asset onboarding, funding caps, allocation rules, waitlists and per-investor concentration limits.",
	},
	{
		icon: Wallet,
		title: "Escrow & payments",
		description:
			"Trust account integration, FPX and DuitNow rails, automated disbursement and repayment reconciliation.",
	},
	{
		icon: ScanFace,
		title: "e-KYC & accreditation",
		description:
			"MyKad, liveness, AML/CFT screening and tiered investor accreditation built into the onboarding flow.",
	},
	{
		icon: FileSignature,
		title: "e-Signing & contracts",
		description:
			"On-platform agreement generation, e-signing and a tamper-evident document vault for every party.",
	},
	{
		icon: BarChart3,
		title: "Operations & reporting",
		description:
			"Admin console for ops, finance and compliance — plus exports tuned for SC submissions, audits, and Shariah committee reviews.",
	},
	{
		icon: ShieldCheck,
		title: "Security & audit trail",
		description:
			"Encryption, RBAC, immutable audit logs, infrastructure-as-code and pen-test-ready architecture.",
	},
];

const buildSteps = [
	{
		title: "Discovery & regulatory mapping",
		description:
			"We translate your P2P business model into a clear product spec — asset class, investor tiers, fee structure and the SC obligations the platform must satisfy. Where you need it, our consultancy team aligns this roadmap with your SC Malaysia RMO registration journey.",
		Icon: ClipboardList,
	},
	{
		title: "UX & system architecture",
		description:
			"Design of investor, issuer and admin journeys alongside the cloud architecture, data model, security boundaries and integration map.",
		Icon: PenTool,
	},
	{
		title: "Build & integrations",
		description:
			"Iterative delivery of the platform with e-KYC, payments, escrow, e-signing and CTOS / SSM integrations wired in by our team.",
		Icon: Code2,
	},
	{
		title: "Compliance review & UAT",
		description:
			"Walk-throughs with your compliance officer and counsel, examiner-style screen recordings, plus structured user acceptance testing.",
		Icon: ShieldCheck,
	},
	{
		title: "Launch & ongoing support",
		description:
			"AWS Malaysia deployment, monitoring, incident response, periodic security reviews and continuous feature delivery as your platform scales.",
		Icon: Rocket,
	},
];

const stackHighlights = [
	"End-to-end P2P platform — investor + issuer + admin",
	"SC RMO preparation — consultancy alongside engineering (in-house + partner consultants)",
	"SC-aligned investor accreditation & limits",
	"Escrow, FPX, DuitNow and trustee integrations",
	"MyKad e-KYC, AML/CFT and CTOS connectors",
	"AWS Malaysia data residency, encrypted by default",
	"Audit-ready logs, exports and reporting",
	"White-labelled brand, web and native mobile",
	"Long-term managed engineering retainer",
];

const operatorFeatures = [
	{
		title: "Speed-to-market",
		description:
			"Battle-tested modules and clear delivery rituals get you from kickoff to live platform without the typical agency drag.",
		Icon: Gauge,
	},
	{
		title: "Examiner-ready by design",
		description:
			"Architecture diagrams, IT controls, audit trails and security policies are produced as the platform is built — not retrofitted later — with artefacts your SC submission can cite.",
		Icon: FileCheck2,
	},
	{
		title: "Predictable engineering",
		description:
			"Fixed-fee build, transparent change-control, and a single accountable team that owns delivery and post-launch support.",
		Icon: Scale,
	},
];

const investorFeatures = [
	{
		title: "Trust by design",
		description:
			"Clean onboarding, transparent listings, real-time funding progress and clear investor statements build the credibility a regulated platform needs.",
		Icon: ShieldCheck,
	},
	{
		title: "Asset-backed clarity",
		description:
			"Per-note structures, tenor, expected yield, and risk score are surfaced consistently so investors can size positions with confidence.",
		Icon: LineChart,
	},
	{
		title: "Secure participation",
		description:
			"Tiered accreditation, investment limits and segregated trust accounts protect both the investor and the operator's licence.",
		Icon: ShieldCheck,
	},
];

const issuerFeatures = [
	{
		title: "Time to funding",
		description:
			"Listings reach their goal in days, not months, with daily progress visibility and clear next-step prompts for issuers.",
		Icon: Zap,
	},
	{
		title: "Transparent terms",
		description:
			"Effective rate, tenor, fees and obligations are surfaced up front — no hidden costs and no post-disbursement surprises.",
		Icon: Receipt,
	},
	{
		title: "Earn the next round",
		description:
			"On-time repayment data feeds straight into faster, larger future raises, with less paperwork the second time around.",
		Icon: Repeat,
	},
];

const shariahPillars = [
	{
		icon: Repeat,
		title: "Tawarruq disbursement",
		arabic: "تورق",
		summary:
			"Shariah-compliant cash disbursement structured as a commodity sale and onward sale — typically executed on Bursa Suq Al-Sila', Bursa Malaysia's Shariah commodity trading platform.",
		points: [
			"Automated Tawarruq trade legs orchestrated at disbursement",
			"Bursa Suq Al-Sila' commodity trade integration and recordkeeping",
			"Contract pack and audit trail per disbursement for Shariah review",
		],
	},
	{
		icon: HeartHandshake,
		title: "Gharamah account",
		arabic: "غرامة",
		summary:
			"Late-payment penalty that, under Shariah, must not enrich the financier — channelled to charity instead.",
		points: [
			"Auto-split from every late charge into a segregated ledger",
			"Charity disbursement workflow with documented schedule",
			"Auditable allocation report for the Shariah committee",
		],
	},
	{
		icon: Coins,
		title: "Ta'widh account",
		arabic: "تعويض",
		summary:
			"Compensation for the actual cost of recovery — legitimately retained by the operator or financier.",
		points: [
			"Cost-justified allocation with metadata for Shariah review",
			"Cap-aware accumulation so postings stay within agreed limits",
			"Shariah committee-ready exports alongside SC reporting",
		],
	},
];

const cashsoukStudy: CaseStudy = {
	title: "CashSouk",
	description:
		"Peer-to-peer financing marketplace connecting Malaysian SMEs with investors. Truestack engineered the full stack — investor portal, issuer onboarding, listings engine, escrow integration and reporting — and continues to operate it as the platform scales.",
	tags: ["TrueP2P™", "Investor + Issuer Portals", "SC-Aligned Architecture"],
	href: "https://cashsouk.com",
	logo: "/logos/cashsouk_logo.png",
	stats: [
		{ label: "Platform", value: "TrueP2P™" },
		{ label: "Regulator", value: "SC Malaysia" },
	],
};

const complianceItems = [
	"SC Malaysia RMO registration support — consultancy team plus specialist consultant network",
	"Securities Commission (SC) Malaysia RMO framework alignment",
	"Investor accreditation tiers & per-investor caps",
	"Per-issuer funding limits enforced in code",
	"Segregated trust account / escrow integration",
	"AML/CFT screening, sanctions checks & PEP review",
	"PDPA-compliant data handling & consent management",
	"Independent penetration testing pre-launch",
	"AWS Malaysia data residency, encrypted at rest & in transit",
];

export default function P2PSoftwareDevelopmentPage() {
	return (
		<>
			<P2PSchema />

			<P2PHero />

			{/* SEO intro paragraph - visible and scannable */}
			<section className="border-t bg-muted/30 py-12">
				<div className="mx-auto max-w-4xl px-6">
					<p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
						<strong className="text-foreground">
							TrueP2P™ is Truestack&apos;s Malaysian peer-to-peer
							platform engineering partner.
						</strong>{" "}
						We build production-ready peer-to-peer financing
						platforms —{" "}
						<span className="font-medium text-foreground">
							conventional and Shariah-aligned
						</span>{" "}
						— covering investor onboarding, listings, escrow,
						payments, e-signing,{" "}
						<span className="font-medium text-foreground">
							Tawarruq disbursement via Bursa Suq Al-Sila&apos;
						</span>
						,{" "}
						<span className="font-medium text-foreground">
							Gharamah and Ta&apos;widh accounting
						</span>{" "}
						and reporting, for operators running under the{" "}
						<span className="font-medium text-foreground">
							Securities Commission Malaysia
						</span>{" "}
						Recognised Market Operator framework. Whether you are
						launching a new P2P platform, replatforming an existing
						one, or extending into a new asset class, we ship the
						full stack and operate it alongside your team.
						<strong className="font-semibold text-foreground">
							{" "}
							Beyond engineering, our consultancy team — supported
							by a network of specialist consultants — can guide
							the A–Z of SC Malaysia RMO registration alongside
							your build.
						</strong>
					</p>
				</div>
			</section>

			{/* Hub diagram: Investors → Platform → Issuers */}
			<P2PPlatformDiagram />

			{/* What we build / Modules */}
			<section id="what-we-build" className="border-t bg-muted/30 py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="mx-auto max-w-3xl text-center">
						<SectionBadge
							icon={Boxes}
							text="What we build"
							className="justify-center"
						/>
						<h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
							Every module a regulated P2P platform needs
						</h2>
						<p className="mt-4 text-lg text-muted-foreground md:text-xl">
							A complete peer-to-peer platform is more than a
							marketing site and a database. We deliver every
							piece — and we know exactly which pieces matter to a
							Malaysian regulator.
						</p>
					</div>

					<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{platformModules.map((mod) => (
							<Card
								key={mod.title}
								className="h-full transition-all hover:border-primary/50 hover:shadow-md"
							>
								<CardContent className="px-6">
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
										<mod.icon className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold">
										{mod.title}
									</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{mod.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Listings preview carousel */}
			<section className="border-t py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="mx-auto max-w-3xl text-center">
						<SectionBadge
							icon={Sparkles}
							text="Investor experience"
							className="justify-center"
						/>
						<h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
							Listings designed to earn investor trust
						</h2>
						<p className="mt-4 text-lg text-muted-foreground md:text-xl">
							A peer-to-peer platform lives or dies by how its
							listings feel. Below is the kind of investor-grade
							UI we build for our clients — tuned to your asset
							class, risk model and brand.
						</p>
					</div>
				</div>

				<div className="mt-12">
					<P2PListingsPreview />
				</div>

				<div className="mx-auto mt-10 max-w-2xl px-6 text-center">
					<p className="text-sm text-muted-foreground">
						Sample UI for illustration. Listings, scores and amounts
						are not real investments and are not an offer to invest.
					</p>
				</div>
			</section>

			{/* Build process - vertical timeline + featured stack card */}
			<section className="border-t bg-muted/30 py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="max-w-2xl">
						<SectionBadge icon={Network} text="Our process" />
						<h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
							How we deliver your P2P platform
						</h2>
						<p className="mt-4 text-lg text-muted-foreground md:text-xl">
							A predictable, end-to-end engagement — from
							regulatory mapping to launch and ongoing support.
							You get one accountable engineering partner instead
							of five vendors to coordinate.
						</p>
					</div>

					<div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-start lg:gap-16">
						<ol
							className="relative space-y-0"
							aria-label="P2P platform delivery process"
						>
							{buildSteps.map((step, index) => {
								const { Icon } = step;
								const isLast = index === buildSteps.length - 1;
								return (
									<li
										key={step.title}
										className="relative flex gap-5 pb-10 last:pb-0"
									>
										{!isLast ? (
											<span
												className="absolute bottom-0 left-5 top-11 w-px bg-border"
												aria-hidden
											/>
										) : null}
										<div className="relative z-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
											<Icon
												className="h-5 w-5"
												aria-hidden
											/>
										</div>
										<div className="min-w-0 pt-0.5">
											<h3 className="text-lg font-bold text-foreground">
												{step.title}
											</h3>
											<p className="mt-2 text-base leading-7 text-muted-foreground md:text-[17px]">
												{step.description}
											</p>
										</div>
									</li>
								);
							})}
						</ol>

						<article className="rounded-2xl border bg-card p-6 shadow-sm md:p-8 lg:p-10">
							<div className="flex items-start justify-between gap-4">
								<div
									className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"
									aria-hidden
								>
									<Server className="h-5 w-5" />
								</div>
								<Badge
									variant="secondary"
									className="border-transparent bg-emerald-100 text-emerald-900 hover:bg-emerald-100/90"
								>
									<Star className="h-2.5 w-2.5" />
									Most popular
								</Badge>
							</div>
							<h3 className="mt-6 text-xl font-bold text-foreground md:text-2xl">
								Production-ready P2P stack
							</h3>
							<p className="mt-3 text-base leading-7 text-muted-foreground md:text-[17px]">
								A full peer-to-peer platform delivered as a
								single, accountable engagement — built for
								Malaysian operators, hosted in AWS Malaysia,
								ready for SC examiner conversations from day
								one, with optional RMO registration consultancy
								running in parallel.
							</p>
							<ul className="mt-8 space-y-4" role="list">
								{stackHighlights.map((line) => (
									<li
										key={line}
										className="flex gap-3 text-base leading-7 text-foreground md:text-[17px]"
									>
										<CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
										<span>{line}</span>
									</li>
								))}
							</ul>
							<Button
								asChild
								size="lg"
								className="mt-10 h-12 w-full rounded-xl text-[15px] font-semibold"
							>
								<Link href="/contact">
									Get a scoped proposal
								</Link>
							</Button>
						</article>
					</div>
				</div>
			</section>

			{/* Why P2P / For Operators / For Investors / For Issuers - tri cards */}
			<section className="border-t bg-background py-20">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mx-auto max-w-3xl text-center">
						<SectionBadge
							icon={Users}
							text="Built for everyone on the platform"
							className="justify-center"
						/>
						<h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">
							A P2P platform that earns trust on every side
						</h2>
						<p className="mt-4 text-lg text-muted-foreground md:text-xl">
							Strong peer-to-peer platforms balance three
							audiences at once: the operator who is accountable
							to regulators, the investors whose confidence drives
							every new listing, and the issuers whose growth
							gives the platform a reason to exist.
						</p>
					</div>

					<div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-8">
						{/* For operators */}
						<article className="flex h-full min-h-0 flex-col rounded-2xl border bg-card p-6 shadow-sm md:p-8 lg:p-10">
							<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
								<Building2 className="h-6 w-6" aria-hidden />
							</div>
							<h3 className="mt-6 text-xl font-bold text-foreground md:text-2xl">
								For platform operators
							</h3>
							<p className="mt-3 text-base leading-7 text-muted-foreground md:text-[17px]">
								Ship the platform your licence assumes you have
								— without the headaches of stitching five
								vendors together.
							</p>
							<ul
								className="mt-8 flex flex-col gap-6"
								role="list"
							>
								{operatorFeatures.map(
									({ title, description, Icon }) => (
										<li key={title} className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
												<Icon
													className="h-5 w-5 text-muted-foreground"
													aria-hidden
												/>
											</div>
											<div>
												<p className="font-bold text-foreground">
													{title}
												</p>
												<p className="mt-1 text-sm leading-6 text-muted-foreground md:text-[15px]">
													{description}
												</p>
											</div>
										</li>
									),
								)}
							</ul>
							<div className="mt-auto w-full pt-12">
								<Button
									asChild
									size="lg"
									className="h-12 w-full rounded-xl text-[15px] font-semibold"
								>
									<Link href="/contact">
										Talk to engineering
									</Link>
								</Button>
							</div>
						</article>

						{/* For investors — highlighted center card */}
						<article className="flex h-full min-h-0 flex-col rounded-2xl border border-primary/25 bg-primary p-6 text-primary-foreground shadow-[0_24px_55px_-18px_rgba(37,99,235,0.45)] md:p-8 lg:p-10">
							<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15">
								<Users className="h-6 w-6" aria-hidden />
							</div>
							<h3 className="mt-6 text-xl font-bold md:text-2xl">
								For your investors
							</h3>
							<p className="mt-3 text-base leading-7 text-primary-foreground/90 md:text-[17px]">
								A clean, transparent investor experience that
								signals exactly the kind of platform a regulated
								market expects.
							</p>
							<ul
								className="mt-8 flex flex-col gap-6"
								role="list"
							>
								{investorFeatures.map(
									({ title, description, Icon }) => (
										<li key={title} className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15 text-primary-foreground">
												<Icon
													className="h-5 w-5"
													aria-hidden
												/>
											</div>
											<div>
												<p className="font-bold">
													{title}
												</p>
												<p className="mt-1 text-sm leading-6 text-primary-foreground/85 md:text-[15px]">
													{description}
												</p>
											</div>
										</li>
									),
								)}
							</ul>
							<div className="mt-auto w-full pt-12">
								<Button
									asChild
									size="lg"
									variant="secondary"
									className="h-12 w-full rounded-xl bg-background text-[15px] font-semibold text-foreground hover:bg-background/90"
								>
									<Link href="#what-we-build">
										See platform modules
									</Link>
								</Button>
							</div>
						</article>

						{/* For issuers (SMEs) */}
						<article className="flex h-full min-h-0 flex-col rounded-2xl border bg-card p-6 shadow-sm md:p-8 lg:p-10">
							<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
								<HandCoins className="h-6 w-6" aria-hidden />
							</div>
							<h3 className="mt-6 text-xl font-bold text-foreground md:text-2xl">
								For issuers &amp; SMEs
							</h3>
							<p className="mt-3 text-base leading-7 text-muted-foreground md:text-[17px]">
								A funding experience that respects an
								issuer&apos;s time — and rewards good repayment
								with smoother future access to capital.
							</p>
							<ul
								className="mt-8 flex flex-col gap-6"
								role="list"
							>
								{issuerFeatures.map(
									({ title, description, Icon }) => (
										<li key={title} className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
												<Icon
													className="h-5 w-5 text-muted-foreground"
													aria-hidden
												/>
											</div>
											<div>
												<p className="font-bold text-foreground">
													{title}
												</p>
												<p className="mt-1 text-sm leading-6 text-muted-foreground md:text-[15px]">
													{description}
												</p>
											</div>
										</li>
									),
								)}
							</ul>
							<div className="mt-auto w-full pt-12">
								<Button
									asChild
									size="lg"
									variant="outline"
									className="h-12 w-full rounded-xl text-[15px] font-semibold"
								>
									<Link href="/contact">
										Plan your platform
									</Link>
								</Button>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* SC Malaysia Compliance section — dark theme */}
			<section
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-20 text-white"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
						<div>
							<SectionBadge
								icon={ShieldCheck}
								text="SC Malaysia compliance"
								className="[&>span]:text-primary [&>svg]:text-primary"
							/>
							<h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
								Engineered for the SC&apos;s Recognised Market
								framework
							</h2>
							<p className="mt-4 text-lg text-slate-400 md:text-xl">
								Every P2P platform we deliver is built with the{" "}
								<span className="font-medium text-white">
									Guidelines on Recognised Markets
								</span>{" "}
								and the{" "}
								<span className="font-medium text-white">
									Capital Markets and Services Act
								</span>{" "}
								in view. We translate those obligations into
								product controls — so your operations team
								isn&apos;t relying on spreadsheets to stay
								compliant.
							</p>
							<p className="mt-4 text-base text-slate-400 md:text-lg">
								We are a software partner, not legal counsel.
								Our consultancy complements — never replaces —
								your lawyers: we align product delivery with RMO
								preparation, artefacts and examiner-facing
								flows, while counsel advises on obligations and
								filings.
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg">
									<Link href="/contact">
										Discuss your SC submission
										<ArrowRight className="ml-1 h-4 w-4" />
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-slate-700 bg-transparent text-white hover:border-slate-600 hover:bg-slate-900 hover:text-white"
								>
									<Link href="/services/software-development">
										Other fintech services
									</Link>
								</Button>
							</div>
						</div>

						<Card className="border-slate-800 bg-slate-900/50">
							<CardContent className="px-6 py-2">
								<p className="text-sm font-semibold uppercase tracking-wider text-primary">
									Built into the platform
								</p>
								<ul className="mt-4 space-y-3" role="list">
									{complianceItems.map((item) => (
										<li
											key={item}
											className="flex items-start gap-3 text-base text-slate-200"
										>
											<div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
												<CheckCircle2 className="h-3.5 w-3.5 text-primary" />
											</div>
											<span className="leading-6">
												{item}
											</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Shariah-aligned by design — Tawarruq lead, then Gharamah & Ta'widh — dark theme */}
			<section
				data-nav-theme="dark"
				className="border-t border-slate-800 bg-slate-950 py-20 text-white"
			>
				<div className="mx-auto max-w-6xl px-6">
					{/* Intro — full width, constrained for readability */}
					<div className="max-w-3xl">
						<SectionBadge
							icon={BadgeCheck}
							text="Shariah-aligned by design"
							className="[&>span]:text-primary [&>svg]:text-primary"
						/>
						<h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
							Engineered for Islamic peer-to-peer financing
						</h2>
						<p className="mt-4 text-lg text-slate-400 md:text-xl">
							We engineer Shariah-aligned variants of every P2P
							platform we deliver — including{" "}
							<span className="font-medium text-white">
								Tawarruq
							</span>{" "}
							(تورق) disbursement orchestrated through{" "}
							<span className="font-medium text-white">
								Bursa Suq Al-Sila&apos;
							</span>
							, segregated{" "}
							<span className="font-medium text-white">
								Gharamah
							</span>{" "}
							and{" "}
							<span className="font-medium text-white">
								Ta&apos;widh
							</span>{" "}
							accounting, Shariah-screened asset onboarding, and
							contract templates aligned with your Shariah
							committee.
						</p>
						<p className="mt-4 text-base text-slate-400 md:text-lg">
							We work with your appointed Shariah advisor to map
							every flow to the contracts and rulings they require
							— so the ledger your auditors see matches the
							rulings your committee has approved.
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button asChild size="lg">
								<Link href="/contact">
									Discuss your Shariah build
									<ArrowRight className="ml-1 h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>

					{/* Tawarruq — full-width lead pillar */}
					{shariahPillars[0] && (
						<Card className="mt-12 border-slate-800 bg-slate-900/50 md:mt-16">
							<CardContent className="px-6 py-2 md:px-10 md:py-4">
								<div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
									{/* Left rail: icon + Arabic */}
									<div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
										<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground md:h-16 md:w-16">
											{(() => {
												const PillarIcon =
													shariahPillars[0].icon;
												return (
													<PillarIcon
														className="h-6 w-6 md:h-7 md:w-7"
														aria-hidden
													/>
												);
											})()}
										</div>
										<span
											lang="ar"
											dir="rtl"
											className="font-display text-3xl font-medium text-slate-500 md:text-4xl"
											aria-hidden
										>
											{shariahPillars[0].arabic}
										</span>
									</div>

									{/* Content */}
									<div className="min-w-0">
										<div className="flex flex-wrap items-center gap-3">
											<h3 className="font-display text-2xl font-bold text-white md:text-3xl">
												{shariahPillars[0].title}
											</h3>
											<span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
												Disbursement structure
											</span>
										</div>
										<p className="mt-3 text-base leading-7 text-slate-400 md:text-[17px]">
											{shariahPillars[0].summary}
										</p>
										<p className="mt-3 text-sm leading-7 text-slate-400 md:text-[15px]">
											Tawarruq is the dominant
											Shariah-compliant structure for cash
											disbursement in Malaysian Islamic
											finance. We wire the commodity-trade
											legs into your platform&apos;s
											disbursement flow — with full
											recordkeeping for every leg — so each
											financing event has a verifiable,
											audit-ready Shariah footprint.
										</p>
										<ul
											className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
											role="list"
										>
											{shariahPillars[0].points.map(
												(point) => (
													<li
														key={point}
														className="flex items-start gap-2.5 text-sm leading-6 text-slate-200 md:text-[15px]"
													>
														<CheckCircle2
															className="mt-0.5 h-4 w-4 shrink-0 text-primary"
															aria-hidden
														/>
														<span>{point}</span>
													</li>
												),
											)}
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Gharamah & Ta'widh — paired below */}
					<div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-8">
						{shariahPillars.slice(1).map((pillar) => (
							<Card
								key={pillar.title}
								className="h-full border-slate-800 bg-slate-900/50"
							>
								<CardContent className="px-6">
									<div className="flex items-start justify-between gap-3">
										<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
											<pillar.icon
												className="h-5 w-5"
												aria-hidden
											/>
										</div>
										<span
											lang="ar"
											dir="rtl"
											className="font-display text-2xl font-medium text-slate-500"
											aria-hidden
										>
											{pillar.arabic}
										</span>
									</div>
									<h3 className="mt-5 text-xl font-bold text-white">
										{pillar.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-slate-400 md:text-[15px]">
										{pillar.summary}
									</p>
									<ul
										className="mt-5 space-y-2.5"
										role="list"
									>
										{pillar.points.map((point) => (
											<li
												key={point}
												className="flex items-start gap-2.5 text-sm leading-6 text-slate-200 md:text-[15px]"
											>
												<CheckCircle2
													className="mt-0.5 h-4 w-4 shrink-0 text-primary"
													aria-hidden
												/>
												<span>{point}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Success story — featured single case study */}
			<CaseStudies
				featured
				studies={[cashsoukStudy]}
				title="Success story"
				subtitle="An SC-compliant, investor-ready peer-to-peer financing platform we designed and engineered for a Malaysian P2P operator."
				className="border-t bg-background py-20"
			/>

			{/* FAQ */}
			<section className="border-t bg-muted/30 py-20">
				<div className="mx-auto max-w-4xl px-6">
					<SectionHeader
						title="TrueP2P™ — frequently asked"
						subtitle="Practical answers to the questions Malaysian operators usually bring to us first."
						centered
					/>
					<Accordion type="single" collapsible className="w-full">
						{p2pFaq.map((item, idx) => (
							<AccordionItem
								key={item.question}
								value={`faq-${idx}`}
							>
								<AccordionTrigger className="text-left text-base font-semibold md:text-lg">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-base leading-7 text-muted-foreground md:text-[17px]">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* CTA */}
			<section className="border-t py-20">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<Banknote className="mx-auto mb-4 h-10 w-10 text-primary" />
					<h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
						Ready to build TrueP2P™?
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
						Whether you&apos;re preparing your SC RMO submission or
						replatforming an existing P2P operation, our engineering
						team can take you from scope to live platform — without
						the usual fintech build pain.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button asChild size="lg">
							<Link href="/contact">
								Start a conversation
								<ArrowRight className="ml-1 h-4 w-4" />
							</Link>
						</Button>
						<Button asChild size="lg" variant="outline">
							<Link href="/work">See our work</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
