"use client";

import { useEffect } from "react";
import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import enInsights from "@/messages/en/insightsChrome.json";
import msInsights from "@/messages/ms/insightsChrome.json";
import ruInsights from "@/messages/ru/insightsChrome.json";
import zhInsights from "@/messages/zh/insightsChrome.json";

// Error boundaries render outside the page's PageMessages provider, so the
// chrome strings are bundled here per locale (English fills any gaps).
const ERROR_MESSAGES: Record<string, typeof enInsights.InsightsChrome> = {
	en: enInsights.InsightsChrome,
	ms: {
		...enInsights.InsightsChrome,
		...msInsights.InsightsChrome,
		error: { ...enInsights.InsightsChrome.error, ...msInsights.InsightsChrome.error },
	},
	zh: {
		...enInsights.InsightsChrome,
		...zhInsights.InsightsChrome,
		error: { ...enInsights.InsightsChrome.error, ...zhInsights.InsightsChrome.error },
	},
	ru: {
		...enInsights.InsightsChrome,
		...ruInsights.InsightsChrome,
		error: { ...enInsights.InsightsChrome.error, ...ruInsights.InsightsChrome.error },
	},
};

type InsightPostErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
	unstable_retry?: () => void;
};

function InsightPostErrorInner({
	error,
	reset,
	unstable_retry,
}: InsightPostErrorProps) {
	const t = useTranslations("InsightsChrome");
	const retry = unstable_retry ?? reset;

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<section className="bg-background py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl rounded-3xl border bg-card p-8 shadow-sm md:p-12">
					<p className="mb-3 type-eyebrow text-primary">
						{t("error.eyebrow")}
					</p>
					<h1 className="type-h2">
						{t("error.title")}
					</h1>
					<p className="mt-4 type-lede text-muted-foreground">
						{t("error.body")}
					</p>
					<div className="mt-7 flex flex-col gap-3 sm:flex-row">
						<Button size="lg" onClick={() => retry()}>
							{t("error.retry")}
						</Button>
						<Button asChild variant="outline" size="lg" className="gap-2">
							<Link href="/insights">
								{t("error.back")}
								<ArrowRight className="h-4 w-4" aria-hidden />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function InsightPostError(props: InsightPostErrorProps) {
	const locale = useLocale();

	return (
		<NextIntlClientProvider
			locale={locale}
			messages={{
				InsightsChrome: ERROR_MESSAGES[locale] ?? enInsights.InsightsChrome,
			}}
		>
			<InsightPostErrorInner {...props} />
		</NextIntlClientProvider>
	);
}
