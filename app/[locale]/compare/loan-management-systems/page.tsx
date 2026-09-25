import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ConsultationCta } from "@/components/sections/consultation-cta";
import { RelatedKpktServices } from "@/components/shared/related-kpkt-services";
import { FaqSchema } from "@/components/seo/faq-schema";
import { TrueKreditCompareSchema } from "@/components/seo/truekredit-compare-schema";
import { TrueKreditCompareFaq } from "@/components/sections/truekredit-compare-faq";
import { resolveAppLocale } from "@/lib/i18n/config";
import { publishedFaqItems } from "@/lib/i18n/faq";
import { PageMessages } from "@/lib/i18n/messages";
import { localizePageMetadata } from "@/lib/i18n/seo";
import {
	defaultOgImage,
	defaultTwitterCard,
	siteName,
} from "@/lib/seo-defaults";
import {
	COMPARE_KEYWORDS,
	COMPARE_PAGE_PATH,
	COMPARE_ROWS,
} from "@/lib/truekredit-compare-seo";
import { TRUEKREDIT_PAGE_PATH } from "@/lib/truekredit-seo";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const resolved = resolveAppLocale(locale);
	const t = await getTranslations({
		locale: resolved,
		namespace: "TrueKreditCompare",
	});
	return localizePageMetadata(
		{
			title: { absolute: t("meta.title") },
			description: t("meta.description"),
			keywords: [...COMPARE_KEYWORDS],
			alternates: { canonical: COMPARE_PAGE_PATH },
			openGraph: {
				title: t("meta.openGraphTitle"),
				description: t("meta.openGraphDescription"),
				url: COMPARE_PAGE_PATH,
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
		COMPARE_PAGE_PATH,
		resolved,
	);
}

export default async function CompareLoanManagementSystemsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale: raw } = await params;
	const locale = resolveAppLocale(raw);
	setRequestLocale(locale);
	const t = await getTranslations("TrueKreditCompare");
	const tCommon = await getTranslations("Common");
	const faqItems = publishedFaqItems(
		t.raw("faq.items") as { question: string; answer: string }[],
	);

	return (
		<>
			<TrueKreditCompareSchema />
			<FaqSchema items={faqItems} />

			<Hero
				eyebrow={t("hero.eyebrow")}
				title={t("hero.title")}
				subtitle={t("hero.lede")}
				primaryCta={{
					label: tCommon("bookConsultation"),
					href: "/contact?subject=TrueKredit",
				}}
				secondaryCta={{
					label: t("hero.secondaryCta"),
					href: TRUEKREDIT_PAGE_PATH,
				}}
			/>

			<section
				id="checklist"
				aria-labelledby="compare-checklist-heading"
				className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
			>
				<div className="mx-auto max-w-6xl px-6">
					<div className="mb-9 max-w-[44em]">
						<p className="type-eyebrow mb-3 text-primary">
							{t("checklist.eyebrow")}
						</p>
						<h2 id="compare-checklist-heading" className="type-h2">
							{t("checklist.title")}
						</h2>
						<p className="mt-3.5 type-lede text-muted-foreground">
							{t("checklist.lede")}
						</p>
					</div>

					<div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
						<div className="overflow-x-auto">
							<table className="w-full min-w-160 text-left text-sm">
								<thead className="bg-slate-950 text-white">
									<tr>
										<th scope="col" className="w-[26%] px-6 py-5 font-semibold">
											{t("checklist.headers.question")}
										</th>
										<th
											scope="col"
											className="w-[34%] border-l border-slate-800 px-6 py-5 font-semibold"
										>
											{t("checklist.headers.check")}
										</th>
										<th
											scope="col"
											className="border-l border-slate-800 px-6 py-5 font-semibold"
										>
											{t("checklist.headers.truekredit")}
										</th>
									</tr>
								</thead>
								<tbody>
									{COMPARE_ROWS.map((row) => (
										<tr key={row} className="border-t align-top">
											<th
												scope="row"
												className="px-6 py-5 text-base font-semibold text-foreground"
											>
												{t(`checklist.rows.${row}.question`)}
											</th>
											<td className="border-l px-6 py-5 type-ui text-muted-foreground">
												{t(`checklist.rows.${row}.check`)}
											</td>
											<td className="border-l bg-primary/4 px-6 py-5 type-ui text-foreground">
												<span className="flex gap-2.5">
													<Check
														className="mt-0.5 h-4 w-4 shrink-0 text-primary"
														aria-hidden
													/>
													<span>{t(`checklist.rows.${row}.truekredit`)}</span>
												</span>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>

			<section
				id="alternatives"
				aria-labelledby="compare-alternatives-heading"
				className="border-t bg-background py-16 md:py-20"
			>
				<div className="mx-auto max-w-3xl px-6">
					<h2 id="compare-alternatives-heading" className="type-h2">
						{t("alternatives.title")}
					</h2>
					<p className="mt-4 type-lede text-muted-foreground">
						{t("alternatives.body")}
					</p>
				</div>
			</section>

			<PageMessages namespaces={["TrueKreditCompare"]}>
				<TrueKreditCompareFaq />
			</PageMessages>

			<RelatedKpktServices />

			<ConsultationCta
				accent="brand"
				primary={{
					href: "/contact?subject=TrueKredit",
					label: tCommon("bookConsultation"),
				}}
				secondary={{
					href: TRUEKREDIT_PAGE_PATH,
					label: t("hero.secondaryCta"),
				}}
			/>
		</>
	);
}
