import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { resolveAppLocale } from "@/lib/i18n/config";
import { localizePageMetadata } from "@/lib/i18n/seo";
import { PageMessages } from "@/lib/i18n/messages";
import { defaultOgImage, defaultTwitterCard, siteName } from "@/lib/seo-defaults";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/sections/hero";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { AccountManagementSchema } from "@/components/seo/account-management-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { AccountManagementFaq } from "@/components/sections/account-management-faq";
import {
	ACCOUNT_MANAGEMENT_KEYWORDS,
	ACCOUNT_MANAGEMENT_PAGE_PATH,
} from "@/lib/account-management-seo";
import {
	Building2,
	FileCheck,
	CalendarCheck,
	Shield,
	ArrowUpCircle,
	Zap,
	CheckCircle2,
	X,
	Clock,
	AlertCircle,
	FileText,
	Users,
} from "lucide-react";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({
		locale: resolved,
		namespace: "AccountManagement",
	});
	return localizePageMetadata(
		{
			title: { absolute: t("meta.title") },
			description: t("meta.description"),
			keywords: [...ACCOUNT_MANAGEMENT_KEYWORDS],
			alternates: { canonical: ACCOUNT_MANAGEMENT_PAGE_PATH },
			openGraph: {
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				url: ACCOUNT_MANAGEMENT_PAGE_PATH,
				type: "website",
				locale: "en_MY",
				siteName,
				images: [defaultOgImage],
			},
			twitter: {
				card: defaultTwitterCard,
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				images: [defaultOgImage.url],
			},
		},
		ACCOUNT_MANAGEMENT_PAGE_PATH,
		resolved,
	);
}

const painPoints = [
	{ key: "compliance", icon: AlertCircle },
	{ key: "coordination", icon: Clock },
	{ key: "renewals", icon: FileText },
	{ key: "admin", icon: Users },
] as const;

const servicesIncluded = [
	{ key: "company", icon: Building2 },
	{ key: "renewals", icon: FileCheck },
	{ key: "submissions", icon: CalendarCheck },
	{ key: "pdpa", icon: Shield },
	{ key: "upgrade", icon: ArrowUpCircle },
	{ key: "express", icon: Zap },
] as const;

const advantageItems = [
	{ key: "experience", icon: Zap },
	{ key: "network", icon: Users },
	{ key: "firstTime", icon: FileCheck },
] as const;

type PricingCell = string | boolean | null;

interface PricingRow {
	key: "subscription" | "perRequest" | "priority" | "annualSubmission" | "savings" | "bestFor";
	noSubscription: PricingCell;
	monthly: PricingCell;
	annual: PricingCell;
	isHighlight?: boolean;
}

const pricingRows: PricingRow[] = [
	{
		key: "subscription",
		noSubscription: "noSubscription",
		monthly: "monthly",
		annual: "annual",
	},
	{
		key: "perRequest",
		noSubscription: "noSubscription",
		monthly: "monthly",
		annual: "annual",
	},
	{
		key: "priority",
		noSubscription: null,
		monthly: true,
		annual: true,
	},
	{
		key: "annualSubmission",
		noSubscription: "noSubscription",
		monthly: "monthly",
		annual: "annual",
	},
	{
		key: "savings",
		noSubscription: "noSubscription",
		monthly: "monthly",
		annual: "annual",
		isHighlight: true,
	},
	{
		key: "bestFor",
		noSubscription: "noSubscription",
		monthly: "monthly",
		annual: "annual",
	},
];

export default async function AccountManagementPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("AccountManagement");
	const tCommon = await getTranslations("Common");
	const faqItems = t.raw("faq.items") as {
		question: string;
		answer: string;
	}[];

	const pricingCells = {
		subscription: {
			noSubscription: t("pricing.rows.subscription.noSubscription"),
			monthly: t("pricing.rows.subscription.monthly"),
			annual: t("pricing.rows.subscription.annual"),
		},
		perRequest: {
			noSubscription: t("pricing.rows.perRequest.noSubscription"),
			monthly: t("pricing.rows.perRequest.monthly"),
			annual: t("pricing.rows.perRequest.annual"),
		},
		annualSubmission: {
			noSubscription: t("pricing.rows.annualSubmission.noSubscription"),
			monthly: t("pricing.rows.annualSubmission.monthly"),
			annual: t("pricing.rows.annualSubmission.annual"),
		},
		savings: {
			noSubscription: t("pricing.rows.savings.noSubscription"),
			monthly: t("pricing.rows.savings.monthly"),
			annual: t("pricing.rows.savings.annual"),
		},
		bestFor: {
			noSubscription: t("pricing.rows.bestFor.noSubscription"),
			monthly: t("pricing.rows.bestFor.monthly"),
			annual: t("pricing.rows.bestFor.annual"),
		},
	} as const;

	const renderCell = (
		row: PricingRow,
		column: "noSubscription" | "monthly" | "annual",
		value: PricingCell,
	) => {
		if (value === null) {
			return <X className="mx-auto h-5 w-5 text-muted-foreground" />;
		}
		if (value === true) {
			return <CheckCircle2 className="mx-auto h-5 w-5 text-kpkt" />;
		}
		const text =
			row.key === "priority" ? "" : pricingCells[row.key][column];
		if (column === "annual") {
			return (
				<span
					className={
						row.isHighlight
							? "font-semibold text-kpkt"
							: "font-medium"
					}
				>
					{text}
				</span>
			);
		}
		return (
			<span className={row.isHighlight ? "text-muted-foreground" : ""}>
				{text}
			</span>
		);
	};

	return (
		<>
			<AccountManagementSchema />
			<FaqSchema items={faqItems} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{
						name: t("breadcrumb.current"),
						path: ACCOUNT_MANAGEMENT_PAGE_PATH,
					},
				]}
			/>
			<Hero
				title={t("hero.title")}
				subtitle={t("hero.subtitle")}
				primaryCta={{
					label: tCommon("bookConsultation"),
					href: "/contact",
				}}
				secondaryCta={{ label: t("hero.secondaryCta"), href: "#pricing" }}
				variant="kpkt"
			/>

			{/* Pain Points */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title={t("pain.title")}
						subtitle={t("pain.subtitle")}
					/>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{painPoints.map((point) => (
							<Card key={point.key} className="text-center">
								<CardContent className="pt-6">
									<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
										<point.icon className="h-6 w-6 text-destructive" />
									</div>
									<h3 className="mb-2 text-lg font-semibold">
										{t(`pain.items.${point.key}.title`)}
									</h3>
									<p className="text-base text-muted-foreground">
										{t(`pain.items.${point.key}.description`)}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Our Solution */}
			<section className="border-t bg-kpkt/5 py-12">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
						<div className="max-w-3xl">
							<Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">
								{t("solution.badge")}
							</Badge>
							<h2 className="mb-4 type-h2">{t("solution.title")}</h2>
							<p className="type-lede text-muted-foreground">
								{t.rich("solution.body", {
									emphasis: (chunks) => (
										<span className="font-semibold text-foreground">
											{chunks}
										</span>
									),
								})}
							</p>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/account-management-shop-counter.jpg"
								alt={t("solution.photoAlt")}
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
				</div>
			</section>

			{/* Speed Advantage */}
			<section className="py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						{/* Left: Content */}
						<div className="max-w-xl">
							<Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">
								{t("advantage.badge")}
							</Badge>
							<h2 className="mb-4 type-h2">
								{t.rich("advantage.title", {
									accent: (chunks) => (
										<span className="text-kpkt">{chunks}</span>
									),
								})}
							</h2>
							<p className="mb-6 type-lede text-muted-foreground">
								{t("advantage.body")}
							</p>
							<div className="space-y-4">
								{advantageItems.map((item) => (
									<div key={item.key} className="flex items-start gap-3">
										<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
											<item.icon className="h-4 w-4 text-kpkt" />
										</div>
										<div>
											<h4 className="text-lg font-semibold">
												{t(`advantage.items.${item.key}.title`)}
											</h4>
											<p className="text-base text-muted-foreground">
												{t(`advantage.items.${item.key}.description`)}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right: Visual Comparison */}
						<div className="relative">
							<Card className="overflow-hidden">
								<div className="-mx-px -mt-px rounded-t-xl border-b bg-muted/50 px-6 py-4">
									<h3 className="text-center text-lg font-semibold">
										{t("advantage.timelineTitle")}
									</h3>
								</div>
								<CardContent className="p-6">
									<div className="space-y-8">
										{/* DIY Bar */}
										<div className="space-y-3">
											<div className="flex items-center justify-between text-sm">
												<span className="font-medium text-muted-foreground">
													{t("advantage.diyLabel")}
												</span>
												<span className="font-semibold">
													{t("advantage.diyTime")}
												</span>
											</div>
											<div className="relative h-10 w-full overflow-hidden rounded-lg bg-muted">
												<div
													className="absolute inset-y-0 left-0 flex items-center justify-end rounded-lg bg-muted-foreground/30 pr-3"
													style={{ width: "100%" }}
												>
													<Clock className="h-5 w-5 text-muted-foreground" />
												</div>
											</div>
										</div>

										{/* Truestack Bar */}
										<div className="space-y-3">
											<div className="flex items-center justify-between text-sm">
												<span className="font-semibold text-kpkt">
													{t("advantage.truestackLabel")}
												</span>
												<span className="font-bold text-kpkt">
													{t("advantage.truestackTime")}
												</span>
											</div>
											<div className="relative h-10 w-full overflow-hidden rounded-lg bg-muted">
												<div
													className="absolute inset-y-0 left-0 flex items-center justify-end rounded-lg bg-gradient-to-r from-kpkt to-kpkt/80 pr-3"
													style={{ width: "50%" }}
												>
													<Zap className="h-5 w-5 text-white" />
												</div>
											</div>
										</div>

										{/* Savings Highlight */}
										<div className="rounded-xl border-2 border-dashed border-kpkt/30 bg-kpkt/5 p-4 text-center">
											<div className="mb-1 text-3xl font-bold text-kpkt">
												{t("advantage.savingsValue")}
											</div>
											<div className="text-sm font-medium text-muted-foreground">
												{t("advantage.savingsCaption")}
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Services Covered */}
			<section className="border-t py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
						<SectionHeader
							title={t("services.title")}
							subtitle={t("services.subtitle")}
							className="mb-0"
						/>
						<div className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/account-management-advisory.jpg"
								alt={t("services.photoAlt")}
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
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{servicesIncluded.map((service) => (
							<Card
								key={service.key}
								className="transition-all hover:shadow-md hover:border-kpkt/50"
							>
								<CardHeader className="pb-2">
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt/10">
										<service.icon className="h-5 w-5 text-kpkt" />
									</div>
									<CardTitle className="text-xl">
										{t(`services.items.${service.key}.title`)}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-base text-muted-foreground">
										{t(`services.items.${service.key}.description`)}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="mx-auto mt-10 max-w-2xl">
						<div className="flex items-center gap-4 rounded-xl border bg-gradient-to-r from-kpkt/5 to-transparent p-5">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
								<CheckCircle2 className="h-6 w-6 text-kpkt" />
							</div>
							<div>
								<p className="text-lg font-medium text-foreground">
									{t("services.cosecTitle")}
								</p>
								<p className="text-base text-muted-foreground">
									{t("services.cosecBody")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="scroll-mt-20 border-t bg-muted/30 py-20">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title={t("pricing.title")}
						subtitle={t("pricing.subtitle")}
					/>

					<div className="mx-auto max-w-4xl">
						<Card className="overflow-hidden">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="border-b bg-muted/50">
											<th className="px-6 py-4 text-left font-semibold align-bottom">
												{t("pricing.headers.item")}
											</th>
											<th className="px-6 py-4 text-center font-semibold align-bottom">
												{t("pricing.headers.noSubscription")}
											</th>
											<th className="px-6 py-4 text-center font-semibold align-bottom">
												{t("pricing.headers.monthly")}
											</th>
											<th className="px-6 py-4 text-center font-semibold align-bottom">
												<Badge
													variant="default"
													className="mb-2 bg-kpkt hover:bg-kpkt/90"
												>
													{t("pricing.recommended")}
												</Badge>
												<div>{t("pricing.headers.annual")}</div>
											</th>
										</tr>
									</thead>
									<tbody>
										{pricingRows.map((row) => (
											<tr
												key={row.key}
												className={`border-b last:border-0 ${row.isHighlight ? "bg-kpkt/5" : ""}`}
											>
												<td className="px-6 py-4 font-medium">
													{t(`pricing.rows.${row.key}.item`)}
												</td>
												<td className="px-6 py-4 text-center">
													{renderCell(row, "noSubscription", row.noSubscription)}
												</td>
												<td className="px-6 py-4 text-center">
													{renderCell(row, "monthly", row.monthly)}
												</td>
												<td className="px-6 py-4 text-center">
													{renderCell(row, "annual", row.annual)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</Card>

						{/* Notes */}
						<div className="mt-6 space-y-2 text-sm text-muted-foreground">
							<p className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-kpkt" />
								{t("pricing.noteLockin")}
							</p>
							<p className="flex items-center gap-2">
								<CheckCircle2 className="h-4 w-4 text-kpkt" />
								{t("pricing.noteSavings")}
							</p>
							<p className="flex items-center gap-2 font-medium text-foreground">
								<Zap className="h-4 w-4 text-kpkt" />
								{t.rich("pricing.noteConversion", {
									link: (chunks) => (
										<Link
											href="/services/digital-license"
											className="text-kpkt underline-offset-4 hover:underline"
										>
											{chunks}
										</Link>
									),
								})}
							</p>
						</div>
					</div>
				</div>
			</section>

			<PageMessages namespaces={["AccountManagement"]}>
				<AccountManagementFaq />
			</PageMessages>

			<ConsultationCta
				accent="kpkt"
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
