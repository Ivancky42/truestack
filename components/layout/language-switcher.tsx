"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { Check, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import {
	htmlLang,
	label,
	LOCALES,
	LOCALE_COOKIE,
	LOCALE_HINT_COOKIE,
	shortLabel,
} from "@/lib/i18n/config";
import { setCookie } from "@/lib/i18n/cookies";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const LOCALE_MAX_AGE = 31_536_000;
const HINT_MAX_AGE = 2_592_000;

type LanguageSwitcherProps = {
	variant: "desktop" | "mobile";
	className?: string;
	onSelected?: () => void;
};

function queryFromSearchParams(
	searchParams: ReturnType<typeof useSearchParams>,
): Record<string, string> {
	const query: Record<string, string> = {};
	searchParams.forEach((value, key) => {
		query[key] = value;
	});
	return query;
}

function LanguageSwitcherInner({
	variant,
	className,
	onSelected,
}: LanguageSwitcherProps) {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const select = (next: AppLocale) => {
		setCookie(LOCALE_COOKIE, next, LOCALE_MAX_AGE);
		setCookie(LOCALE_HINT_COOKIE, "dismissed", HINT_MAX_AGE);
		router.replace(
			{ pathname, query: queryFromSearchParams(searchParams) },
			{ locale: next },
		);
		onSelected?.();
	};

	if (variant === "mobile") {
		return (
			<div
				className={cn(
					"grid grid-cols-3 rounded-lg border p-1",
					className,
				)}
			>
				{LOCALES.map((loc) => {
					const current = loc === locale;
					return (
						<button
							key={loc}
							type="button"
							lang={htmlLang[loc]}
							onClick={() => select(loc)}
							className={cn(
								"type-ui rounded-md px-2 py-1.5 font-medium transition-colors",
								current
									? "bg-primary/10 text-primary"
									: "text-muted-foreground",
							)}
						>
							{shortLabel[loc]}
						</button>
					);
				})}
			</div>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					aria-label="Change language"
					className={cn("type-ui gap-1.5 px-2.5", className)}
				>
					<Globe className="h-4 w-4 size-4" />
					{shortLabel[locale]}
					<ChevronDown className="h-3.5 w-3.5 size-3.5" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="min-w-44">
				{LOCALES.map((loc) => (
					<DropdownMenuItem
						key={loc}
						lang={htmlLang[loc]}
						onSelect={() => select(loc)}
						className="type-ui"
					>
						<span className="flex-1">{label[loc]}</span>
						{loc === locale ? (
							<Check className="h-4 w-4 size-4" />
						) : null}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export function LanguageSwitcher(props: LanguageSwitcherProps) {
	return (
		<Suspense fallback={null}>
			<LanguageSwitcherInner {...props} />
		</Suspense>
	);
}
