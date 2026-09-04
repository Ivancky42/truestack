"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Languages, X } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import {
	htmlLang,
	isAppLocale,
	LOCALE_COOKIE,
	LOCALE_HINT_COOKIE,
} from "@/lib/i18n/config";
import { readCookie, setCookie } from "@/lib/i18n/cookies";
import { cn } from "@/lib/utils";

const LOCALE_MAX_AGE = 31_536_000;
const HINT_MAX_AGE = 2_592_000;

function matchBrowserLocale(tag: string): AppLocale | undefined {
	const lower = tag.toLowerCase();
	if (lower.startsWith("zh")) return "zh";
	if (lower.startsWith("ms")) return "ms";
	if (lower.startsWith("en")) return "en";
	return undefined;
}

function detectSuggestedLocale(): AppLocale | undefined {
	const tags =
		navigator.languages?.length > 0
			? navigator.languages
			: navigator.language
				? [navigator.language]
				: [];
	for (const tag of tags) {
		const match = matchBrowserLocale(tag);
		if (match) return match;
	}
	return undefined;
}

function queryFromSearchParams(
	searchParams: ReturnType<typeof useSearchParams>,
): Record<string, string> {
	const query: Record<string, string> = {};
	searchParams.forEach((value, key) => {
		query[key] = value;
	});
	return query;
}

type Tone = "light" | "dark";

type LanguageSuggestionBarProps = {
	tone?: Tone;
	/** Fires whenever the bar mounts or unmounts, so the header can adapt. */
	onVisibilityChange?: (visible: boolean) => void;
};

function LanguageSuggestionBarInner({
	tone,
	onVisibilityChange,
}: Required<Pick<LanguageSuggestionBarProps, "tone">> &
	Pick<LanguageSuggestionBarProps, "onVisibilityChange">) {
	const locale = useLocale();
	const current = isAppLocale(locale) ? locale : "en";
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const t = useTranslations("Banner");
	const [target, setTarget] = useState<AppLocale | null>(null);

	useEffect(() => {
		const frame = requestAnimationFrame(() => {
			if (readCookie(LOCALE_COOKIE) || readCookie(LOCALE_HINT_COOKIE)) {
				return;
			}
			const suggested = detectSuggestedLocale();
			if (suggested && suggested !== current) {
				setTarget(suggested);
			}
		});
		return () => cancelAnimationFrame(frame);
	}, [current]);

	useEffect(() => {
		onVisibilityChange?.(target !== null);
	}, [target, onVisibilityChange]);

	if (!target) return null;

	const switchToTarget = () => {
		setCookie(LOCALE_COOKIE, target, LOCALE_MAX_AGE);
		setCookie(LOCALE_HINT_COOKIE, "dismissed", HINT_MAX_AGE);
		setTarget(null);
		router.replace(
			{ pathname, query: queryFromSearchParams(searchParams) },
			{ locale: target },
		);
	};

	const dismiss = () => {
		setCookie(LOCALE_HINT_COOKIE, "dismissed", HINT_MAX_AGE);
		setTarget(null);
	};

	const dark = tone === "dark";

	return (
		<div
			role="status"
			className={cn(
				"border-t border-b",
				dark
					? "border-slate-800 bg-slate-950 text-slate-200"
					: "border-border bg-muted text-foreground",
			)}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5 type-ui">
				<p className="flex min-w-0 items-center gap-2">
					<Languages className="h-4 w-4 shrink-0 text-primary" />
					<span lang={htmlLang[target]}>{t(`${target}.message`)}</span>
				</p>
				<div className="flex shrink-0 items-center gap-3">
					<button
						type="button"
						lang={htmlLang[target]}
						onClick={switchToTarget}
						className={cn(
							"font-medium underline-offset-4 hover:underline",
							dark ? "text-white" : "text-primary",
						)}
					>
						{t(`${target}.cta`)}
					</button>
					<button
						type="button"
						onClick={dismiss}
						aria-label={t(`${target}.dismiss`)}
						className={cn(
							"rounded-md p-1 transition-colors",
							dark
								? "text-slate-400 hover:bg-slate-800 hover:text-white"
								: "text-muted-foreground hover:bg-accent hover:text-foreground",
						)}
					>
						<X className="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	);
}

export function LanguageSuggestionBar({
	tone = "light",
	onVisibilityChange,
}: LanguageSuggestionBarProps) {
	return (
		<Suspense fallback={null}>
			<LanguageSuggestionBarInner
				tone={tone}
				onVisibilityChange={onVisibilityChange}
			/>
		</Suspense>
	);
}
