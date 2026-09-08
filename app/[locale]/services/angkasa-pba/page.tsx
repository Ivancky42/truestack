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
import { AngkasaSchema } from "@/components/seo/angkasa-schema";
import { FaqSchema } from "@/components/seo/faq-schema";
import { AngkasaFaq } from "@/components/sections/angkasa-faq";
import { AngkasaQualify } from "@/components/sections/angkasa-qualify";
import {
	ANGKASA_CONTACT_HREF,
	ANGKASA_KEYWORDS,
	ANGKASA_PAGE_PATH,
} from "@/lib/angkasa-seo";
import {
	CalendarCheck,
	HeartHandshake,
	MessageSquare,
	Network,
	PiggyBank,
	Shield,
	ShieldCheck,
	TrendingUp,
	Users,
	Wallet,
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
		namespace: "Angkasa",
	});
	return localizePageMetadata(
		{
			title: { absolute: t("meta.title") },
			description: t("meta.description"),
			keywords: [...ANGKASA_KEYWORDS],
			alternates: { canonical: ANGKASA_PAGE_PATH },
			openGraph: {
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				url: ANGKASA_PAGE_PATH,
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
		ANGKASA_PAGE_PATH,
		resolved,
	);
}

const basicsItems = [
	{ key: "source", icon: CalendarCheck },
	{ key: "channel", icon: ShieldCheck },
	{ key: "market", icon: Users },
] as const;

const useItems = [
	{ key: "loans", icon: Wallet },
	{ key: "takaful", icon: Shield },
	{ key: "fees", icon: PiggyBank },
	{ key: "donations", icon: HeartHandshake },
	{ key: "default", icon: TrendingUp },
	{ key: "segment", icon: Network },
] as const;

const processSteps = [
	"assess",
	"entity",
	"submit",
	"liaison",
	"manage",
] as const;

export default async function AngkasaPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(resolveAppLocale(locale));
	const t = await getTranslations("Angkasa");
	const tCommon = await getTranslations("Common");
	const faqItems = t.raw("faq.items") as {
		question: string;
		answer: string;
	}[];

	return (
		<>
			<AngkasaSchema />
			<FaqSchema items={faqItems} />
			<BreadcrumbSchema
				items={[
					{ name: tCommon("breadcrumbHome"), path: "/" },
					{
						name: t("breadcrumb.current"),
						path: ANGKASA_PAGE_PATH,
					},
				]}
			/>
			<Hero
				title={t("hero.title")}
				subtitle={t("hero.subtitle")}
				eyebrow={t("hero.eyebrow")}
				eyebrowIcon="banknote"
				primaryCta={{
					label: tCommon("bookConsultation"),
					href: ANGKASA_CONTACT_HREF,
				}}
				secondaryCta={{ label: t("hero.secondaryCta"), href: "#qualify" }}
				variant="kpkt"
				image={{
					src: "/photos/digital-license-advisory-documents.jpg",
					alt: t("hero.photoAlt"),
				}}
			/>

			<section id="what" className="py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
						<div>
							<Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">
								{t("basics.badge")}
							</Badge>
							<h2 className="mb-4 type-h2">{t("basics.title")}</h2>
							<p className="mb-4 type-lede text-muted-foreground">
								{t("basics.para1")}
							</p>
							<p className="type-lede text-muted-foreground">
								{t.rich("basics.para2", {
									emphasis: (chunks) => (
										<span className="font-semibold text-foreground">
											{chunks}
										</span>
									),
								})}
							</p>
							<div className="mt-6 space-y-3">
								{basicsItems.map((item) => (
									<div key={item.key} className="flex items-start gap-3">
										<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-kpkt/10">
											<item.icon className="h-4 w-4 text-kpkt" />
										</div>
										<div>
											<p className="type-subhead">
												{t(`basics.items.${item.key}.title`)}
											</p>
											<p className="text-base text-muted-foreground">
												{t(`basics.items.${item.key}.description`)}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative aspect-4/3 overflow-hidden rounded-3xl border shadow-sm">
							<Image
								src="/photos/account-management-advisory.jpg"
								alt={t("basics.photoAlt")}
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

			<section className="border-t bg-muted/30 py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6">
					<SectionHeader
						title={t("uses.title")}
						subtitle={t("uses.subtitle")}
					/>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{useItems.map((item) => (
							<Card
								key={item.key}
								className="transition-all hover:-translate-y-0.5 hover:border-kpkt/50 hover:shadow-md"
							>
								<CardHeader className="pb-2">
									<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt/10">
										<item.icon className="h-5 w-5 text-kpkt" />
									</div>
									<CardTitle className="type-card-title">
										{t(`uses.items.${item.key}.title`)}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-base text-muted-foreground">
										{t(`uses.items.${item.key}.description`)}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="border-t py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6">
					<div className="mb-12 max-w-2xl">
						<Badge className="mb-4 bg-kpkt hover:bg-kpkt/90">
							{t("process.badge")}
						</Badge>
						<h2 className="type-h2">{t("process.title")}</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("process.subtitle")}
						</p>
					</div>
					<div className="grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-3">
						{processSteps.map((key, index) => (
							<div
								key={key}
								className="flex flex-col gap-2.5 bg-card p-7"
							>
								<span className="type-mono-label text-kpkt">
									{String(index + 1).padStart(2, "0")}
								</span>
								<p className="type-subhead leading-snug">
									{t(`process.steps.${key}.title`)}
								</p>
								<p className="text-base text-muted-foreground">
									{t(`process.steps.${key}.description`)}
								</p>
							</div>
						))}
						<div className="flex flex-col justify-center gap-2.5 bg-linear-to-br from-kpkt/5 to-card p-7">
							<div className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-kpkt/10">
								<MessageSquare className="h-5 w-5 text-kpkt" />
							</div>
							<p className="type-subhead leading-snug">
								{t("process.contactTitle")}
							</p>
							<p className="text-base text-muted-foreground">
								{t.rich("process.contactBody", {
									link: (chunks) => (
										<Link
											href={ANGKASA_CONTACT_HREF}
											className="font-medium text-kpkt underline-offset-4 hover:underline"
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

			<PageMessages namespaces={["Angkasa"]}>
				<AngkasaQualify />
				<AngkasaFaq />
			</PageMessages>

			<div id="cta">
				<ConsultationCta
					accent="kpkt"
					heading={t("cta.heading")}
					body={t("cta.body")}
					primary={{
						href: ANGKASA_CONTACT_HREF,
						label: tCommon("bookConsultation"),
					}}
					secondary={{
						href: "/services/digital-license",
						label: t("cta.secondary"),
					}}
				/>
			</div>
		</>
	);
}
