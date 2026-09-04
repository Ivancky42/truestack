import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { PageMessages } from "@/lib/i18n/messages";
import type { CSSProperties } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { siteName } from "@/lib/seo-defaults";
import { P2P_KEYWORDS, P2P_OG_IMAGE_PATH, P2P_PAGE_PATH } from "@/lib/p2p-seo";
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
import { FaqSchema } from "@/components/seo/faq-schema";
import { publishedFaqItems } from "@/lib/i18n/faq";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { ConsultationCta } from "@/components/sections/consultation-cta";
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({ locale: resolved, namespace: "P2P" });
	return localizePageMetadata(
		{
			title: { absolute: t("meta.title") },
			description: t("meta.description"),
			keywords: [...P2P_KEYWORDS],
			alternates: { canonical: P2P_PAGE_PATH },
			openGraph: {
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				url: P2P_PAGE_PATH,
				type: "website",
				locale: "en_MY",
				siteName,
				images: [
					{
						url: P2P_OG_IMAGE_PATH,
						width: 1536,
						height: 1024,
						alt: t("meta.ogImageAlt"),
					},
				],
			},
			twitter: {
				card: "summary_large_image",
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				images: [P2P_OG_IMAGE_PATH],
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
		},
		P2P_PAGE_PATH,
		resolved,
	);
}

const platformModules = [
	{ key: "investor", icon: Users },
	{ key: "issuer", icon: Building2 },
	{ key: "listings", icon: Layers },
	{ key: "escrow", icon: Wallet },
	{ key: "ekyc", icon: ScanFace },
	{ key: "esign", icon: FileSignature },
	{ key: "ops", icon: BarChart3 },
	{ key: "security", icon: ShieldCheck },
] as const;

const buildSteps = [
	{ key: "discovery", Icon: ClipboardList },
	{ key: "ux", Icon: PenTool },
	{ key: "build", Icon: Code2 },
	{ key: "uat", Icon: ShieldCheck },
	{ key: "launch", Icon: Rocket },
] as const;

const operatorFeatures = [
	{ key: "speed", Icon: Gauge },
	{ key: "examiner", Icon: FileCheck2 },
	{ key: "predictable", Icon: Scale },
] as const;

const investorFeatures = [
	{ key: "trust", Icon: ShieldCheck },
	{ key: "clarity", Icon: LineChart },
	{ key: "secure", Icon: ShieldCheck },
] as const;

const issuerFeatures = [
	{ key: "speed", Icon: Zap },
	{ key: "terms", Icon: Receipt },
	{ key: "next", Icon: Repeat },
] as const;

const shariahPillars = [
	{ key: "tawarruq", icon: Repeat },
	{ key: "gharamah", icon: HeartHandshake },
	{ key: "tawidh", icon: Coins },
] as const;

// Re-brand this page (and all its sections) from the global blue `primary`
// to TrueP2P violet by overriding the brand CSS variables for this subtree.
const p2pBrandVars = {
	"--primary": "oklch(0.541 0.281 293.009)" /* violet-600 */,
	"--primary-start": "oklch(0.606 0.25 292.717)" /* violet-500 */,
	"--primary-end": "oklch(0.541 0.281 293.009)" /* violet-600 */,
	"--ring": "oklch(0.541 0.281 293.009)" /* violet-600 */,
} as CSSProperties;

export default async function P2PSoftwareDevelopmentPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("P2P");
	const tCommon = await getTranslations("Common");
	const faqItems = publishedFaqItems(
		t.raw("faq.items") as {
			question: string;
			answer: string;
		}[],
	);
	const stackHighlights = t.raw("process.highlights") as string[];
	const complianceItems = t.raw("compliance.items") as string[];
	const cashsoukStudy: CaseStudy = {
		id: "cashsouk",
		title: "CashSouk",
		description: t("caseStudies.cashsouk.description"),
		blurb: t("caseStudies.cashsouk.blurb"),
		product: "CustomSoftware",
		tags: t.raw("caseStudies.cashsouk.tags") as string[],
		href: "/work/cashsouk",
		logo: "/logos/cashsouk_logo.png",
		stats: [
			{ label: t("caseStudies.cashsouk.stats.platform"), value: "TrueP2P™" },
			{ label: t("caseStudies.cashsouk.stats.regulator"), value: "SC Malaysia" },
		],
	};
	return (
		<div style={p2pBrandVars}>
			<P2PSchema />
			<FaqSchema items={faqItems} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{ name: t("breadcrumb.current"), path: P2P_PAGE_PATH },
				]}
			/>

			<PageMessages namespaces={["P2P", "WorkStudies"]}>
			<P2PHero />

			{/* SEO intro paragraph - visible and scannable */}
			<section className="border-t bg-muted/30 py-12">
				<div className="mx-auto max-w-4xl px-6">
					<p className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-8">
						{t.rich("intro.body", {
							lead: (chunks) => (
								<strong className="text-foreground">{chunks}</strong>
							),
							emphasis: (chunks) => (
								<span className="font-medium text-foreground">
									{chunks}
								</span>
							),
							tawarruq: (chunks) => (
								<span className="font-medium text-foreground">
									{chunks}
								</span>
							),
							gharamah: (chunks) => (
								<span className="font-medium text-foreground">
									{chunks}
								</span>
							),
							sc: (chunks) => (
								<span className="font-medium text-foreground">
									{chunks}
								</span>
							),
							close: (chunks) => (
								<strong className="font-semibold text-foreground">
									{chunks}
								</strong>
							),
						})}
					</p>
					<p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base md:leading-7">
						{t.rich("intro.kpktLead", {
							truekredit: (chunks) => (
								<Link
									href="/truekredit"
									className="font-medium text-primary hover:underline"
								>
									{chunks}
								</Link>
							),
							truesyariah: (chunks) => (
								<Link
									href="/truesyariah"
									className="font-medium text-emerald-700 hover:underline"
								>
									{chunks}
								</Link>
							),
						})}
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
							text={t("modules.badge")}
							className="justify-center"
						/>
						<h2 className="type-h2">
							{t("modules.title")}
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("modules.body")}
						</p>
					</div>

					<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{platformModules.map((mod) => (
							<Card
								key={mod.key}
								className="h-full transition-all hover:border-primary/50 hover:shadow-md"
							>
								<CardContent className="px-6">
									<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
										<mod.icon className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-lg font-semibold">
										{t(`modules.items.${mod.key}.title`)}
									</h3>
									<p className="mt-2 text-sm text-muted-foreground">
										{t(`modules.items.${mod.key}.description`)}
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
							text={t("listings.badge")}
							className="justify-center"
						/>
						<h2 className="type-h2">
							{t("listings.title")}
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("listings.body")}
						</p>
					</div>
				</div>

				<div className="mt-12">
					<P2PListingsPreview />
				</div>

				<div className="mx-auto mt-10 max-w-2xl px-6 text-center">
					<p className="text-sm text-muted-foreground">
						{t("listings.disclaimer")}
					</p>
				</div>
			</section>

			{/* Build process - vertical timeline + featured stack card */}
			<section className="border-t bg-muted/30 py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
						<div className="max-w-2xl">
							<SectionBadge icon={Network} text={t("process.badge")} />
							<h2 className="type-h2">
								{t("process.title")}
							</h2>
							<p className="mt-4 type-lede text-muted-foreground">
								{t("process.body")}
							</p>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/p2p-delivery-team.jpg"
								alt={t("process.photoAlt")}
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover"
							/>
							<div
								className="absolute inset-0 bg-primary/10 mix-blend-multiply"
								aria-hidden
							/>
						</div>
					</div>

					<div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-center lg:gap-16">
						<ol
							className="relative space-y-0"
							aria-label={t("process.stepsAria")}
						>
							{buildSteps.map((step, index) => {
								const { Icon } = step;
								const isLast = index === buildSteps.length - 1;
								return (
									<li
										key={step.key}
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
												{t(`process.steps.${step.key}.title`)}
											</h3>
											<p className="mt-2 text-base leading-7 text-muted-foreground md:text-[17px]">
												{t(`process.steps.${step.key}.description`)}
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
									{t("process.stackBadge")}
								</Badge>
							</div>
							<h3 className="mt-6 text-xl font-bold text-foreground md:text-2xl">
								{t("process.stackTitle")}
							</h3>
							<p className="mt-3 text-base leading-7 text-muted-foreground md:text-[17px]">
								{t("process.stackBody")}
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
									{t("process.stackCta")}
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
							text={t("audiences.badge")}
							className="justify-center"
						/>
						<h2 className="type-h2">
							{t("audiences.title")}
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("audiences.body")}
						</p>
					</div>

					<div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-8">
						{/* For operators */}
						<article className="flex h-full min-h-0 flex-col rounded-2xl border bg-card p-6 shadow-sm md:p-8 lg:p-10">
							<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
								<Building2 className="h-6 w-6" aria-hidden />
							</div>
							<h3 className="mt-6 text-xl font-bold text-foreground md:text-2xl">
								{t("audiences.operators.title")}
							</h3>
							<p className="mt-3 text-base leading-7 text-muted-foreground md:text-[17px]">
								{t("audiences.operators.body")}
							</p>
							<ul
								className="mt-8 flex flex-col gap-6"
								role="list"
							>
								{operatorFeatures.map(
									({ key, Icon }) => (
										<li key={key} className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
												<Icon
													className="h-5 w-5 text-muted-foreground"
													aria-hidden
												/>
											</div>
											<div>
												<p className="font-bold text-foreground">
													{t(`audiences.operators.items.${key}.title`)}
												</p>
												<p className="mt-1 text-sm leading-6 text-muted-foreground md:text-[15px]">
													{t(`audiences.operators.items.${key}.description`)}
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
										{t("audiences.operators.cta")}
									</Link>
								</Button>
							</div>
						</article>

						{/* For investors — highlighted center card */}
						<article className="flex h-full min-h-0 flex-col rounded-2xl border border-primary/25 bg-primary p-6 text-primary-foreground shadow-[0_24px_55px_-18px_rgba(124,58,237,0.45)] md:p-8 lg:p-10">
							<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15">
								<Users className="h-6 w-6" aria-hidden />
							</div>
							<h3 className="mt-6 text-xl font-bold md:text-2xl">
								{t("audiences.investors.title")}
							</h3>
							<p className="mt-3 text-base leading-7 text-primary-foreground/90 md:text-[17px]">
								{t("audiences.investors.body")}
							</p>
							<ul
								className="mt-8 flex flex-col gap-6"
								role="list"
							>
								{investorFeatures.map(
									({ key, Icon }) => (
										<li key={key} className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15 text-primary-foreground">
												<Icon
													className="h-5 w-5"
													aria-hidden
												/>
											</div>
											<div>
												<p className="font-bold">
													{t(`audiences.investors.items.${key}.title`)}
												</p>
												<p className="mt-1 text-sm leading-6 text-primary-foreground/85 md:text-[15px]">
													{t(`audiences.investors.items.${key}.description`)}
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
										{t("audiences.investors.cta")}
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
								{t("audiences.issuers.title")}
							</h3>
							<p className="mt-3 text-base leading-7 text-muted-foreground md:text-[17px]">
								{t("audiences.issuers.body")}
							</p>
							<ul
								className="mt-8 flex flex-col gap-6"
								role="list"
							>
								{issuerFeatures.map(
									({ key, Icon }) => (
										<li key={key} className="flex gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
												<Icon
													className="h-5 w-5 text-muted-foreground"
													aria-hidden
												/>
											</div>
											<div>
												<p className="font-bold text-foreground">
													{t(`audiences.issuers.items.${key}.title`)}
												</p>
												<p className="mt-1 text-sm leading-6 text-muted-foreground md:text-[15px]">
													{t(`audiences.issuers.items.${key}.description`)}
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
										{t("audiences.issuers.cta")}
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
								text={t("compliance.badge")}
								className="[&>span]:text-primary [&>svg]:text-primary"
							/>
							<h2 className="type-h2 text-white">
								{t("compliance.title")}
							</h2>
							<p className="mt-4 text-lg text-slate-400 md:text-xl">
								{t.rich("compliance.body", {
									emphasis: (chunks) => (
										<span className="font-medium text-white">
											{chunks}
										</span>
									),
								})}
							</p>
							<p className="mt-4 type-lede text-slate-400">
								{t("compliance.disclaimer")}
							</p>
							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Button asChild size="lg">
									<Link href="/contact">
										{t("compliance.discussCta")}
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
										{t("compliance.otherCta")}
									</Link>
								</Button>
							</div>
						</div>

						<Card className="border-slate-800 bg-slate-900/50">
							<CardContent className="px-6 py-2">
								<p className="type-eyebrow text-primary">
									{t("compliance.catalogEyebrow")}
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
							text={t("shariah.badge")}
							className="[&>span]:text-primary [&>svg]:text-primary"
						/>
						<h2 className="type-h2 text-white">
							{t("shariah.title")}
						</h2>
						<p className="mt-4 text-lg text-slate-400 md:text-xl">
							{t.rich("shariah.body", {
								tawarruq: (chunks) => (
									<span className="font-medium text-white">
										{chunks}
									</span>
								),
								gharamah: (chunks) => (
									<span className="font-medium text-white">
										{chunks}
									</span>
								),
								tawidh: (chunks) => (
									<span className="font-medium text-white">
										{chunks}
									</span>
								),
							})}
						</p>
						<p className="mt-4 type-lede text-slate-400">
							{t("shariah.advisor")}
						</p>
						<p className="mt-4 text-sm text-slate-400 md:text-base">
							{t.rich("shariah.kpktLead", {
								link: (chunks) => (
									<Link
										href="/truesyariah"
										className="font-medium text-emerald-400 hover:text-emerald-300 hover:underline"
									>
										{chunks}
									</Link>
								),
							})}
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:flex-row">
							<Button asChild size="lg">
								<Link href="/contact">
									{t("shariah.discussCta")}
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
											className="type-h2 text-slate-500"
											aria-hidden
										>
											{t("shariah.pillars.tawarruq.arabic")}
										</span>
									</div>

									{/* Content */}
									<div className="min-w-0">
										<div className="flex flex-wrap items-center gap-3">
											<h3 className="type-h2-sm text-white">
												{t("shariah.pillars.tawarruq.title")}
											</h3>
											<span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
												{t("shariah.disbursementBadge")}
											</span>
										</div>
										<p className="mt-3 text-base leading-7 text-slate-400 md:text-[17px]">
											{t("shariah.pillars.tawarruq.summary")}
										</p>
										<p className="mt-3 text-sm leading-7 text-slate-400 md:text-[15px]">
											{t("shariah.tawarruqNote")}
										</p>
										<ul
											className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
											role="list"
										>
											{(
												t.raw(
													"shariah.pillars.tawarruq.points",
												) as string[]
											).map((point) => (
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
									</div>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Gharamah & Ta'widh — paired below */}
					<div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-8">
						{shariahPillars.slice(1).map((pillar) => (
							<Card
								key={pillar.key}
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
											className="type-h2-sm text-slate-500"
											aria-hidden
										>
											{t(`shariah.pillars.${pillar.key}.arabic`)}
										</span>
									</div>
									<h3 className="mt-5 text-xl font-bold text-white">
										{t(`shariah.pillars.${pillar.key}.title`)}
									</h3>
									<p className="mt-2 text-sm leading-6 text-slate-400 md:text-[15px]">
										{t(`shariah.pillars.${pillar.key}.summary`)}
									</p>
									<ul
										className="mt-5 space-y-2.5"
										role="list"
									>
										{(
											t.raw(
												`shariah.pillars.${pillar.key}.points`,
											) as string[]
										).map((point) => (
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
				title={t("caseStudies.title")}
				subtitle={t("caseStudies.subtitle")}
				className="border-t bg-background py-20"
			/>

			{/* FAQ */}
			<section className="border-t bg-muted/30 py-20">
				<div className="mx-auto max-w-4xl px-6">
					<SectionHeader
						title={t("faq.title")}
						subtitle={t("faq.subtitle")}
						centered
					/>
					<Accordion type="single" collapsible className="w-full">
						{faqItems.map((item, idx) => (
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

			<ConsultationCta
				heading={t("cta.heading")}
				body={t("cta.body")}
				primary={{
					href: "/contact?subject=TrueP2P",
					label: tCommon("bookConsultation"),
				}}
				secondary={{ href: "/work", label: t("cta.secondary") }}
			/>
			</PageMessages>
		</div>
	);
}
