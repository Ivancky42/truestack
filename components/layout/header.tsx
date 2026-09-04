"use client";

import {
	useState,
	useEffect,
	useLayoutEffect,
	useRef,
	type ComponentProps,
	type RefObject,
} from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { LanguageSuggestionBar } from "@/components/layout/language-suggestion-bar";
import { brandThemeColor, darkThemeColor, siteName } from "@/lib/seo-defaults";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import {
	FileCheck,
	Menu,
	ChevronDown,
	CreditCard,
	ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ProductAccent = "primary" | "violet" | "emerald" | "kpkt";
type SolutionBadge = "upcoming" | "new";
type SolutionKey =
	| "truekredit"
	| "digitalLicense"
	| "shariahLicense"
	| "accountManagement"
	| "softwareDevelopment"
	| "truesyariah"
	| "truep2p"
	| "trueidentity"
	| "truessm"
	| "payments";

type SolutionMenuItem = {
	key: SolutionKey;
	href: string;
	/** Left icon — used on featured cards only. */
	icon?: LucideIcon;
	badge?: SolutionBadge;
	/** Brand accent — featured icon colour, or catalog active-state highlight. */
	accent?: ProductAccent;
};

const accentClasses: Record<
	ProductAccent,
	{ tile: string; icon: string; activeBg: string; activeText: string }
> = {
	primary: {
		tile: "bg-primary/10",
		icon: "text-primary",
		activeBg: "bg-primary/10",
		activeText: "text-primary",
	},
	violet: {
		tile: "bg-violet-500/10",
		icon: "text-violet-600",
		activeBg: "bg-violet-500/10",
		activeText: "text-violet-700",
	},
	emerald: {
		tile: "bg-emerald-500/10",
		icon: "text-emerald-600",
		activeBg: "bg-emerald-500/10",
		activeText: "text-emerald-700",
	},
	kpkt: {
		tile: "bg-kpkt/10",
		icon: "text-kpkt",
		activeBg: "bg-kpkt/10",
		activeText: "text-kpkt",
	},
};

/** Flagship destinations — featured in the Solutions menu, not repeated in the columns. */
const featuredSolutions: SolutionMenuItem[] = [
	{
		key: "truekredit",
		href: "/truekredit",
		icon: CreditCard,
	},
	{
		key: "digitalLicense",
		href: "/services/digital-license",
		icon: FileCheck,
		accent: "kpkt",
	},
];

/** Remaining catalog after the featured pair (Services, Platforms, APIs). */
const solutionsMenuColumns: {
	key: "services" | "platforms" | "apis";
	items: SolutionMenuItem[];
}[] = [
	{
		key: "services",
		items: [
			{
				key: "shariahLicense",
				href: "/services/digital-license#shariah",
				badge: "upcoming",
			},
			{
				key: "accountManagement",
				href: "/services/account-management",
			},
			{
				key: "softwareDevelopment",
				href: "/services/software-development",
			},
		],
	},
	{
		key: "platforms",
		items: [
			{
				key: "truesyariah",
				href: "/truesyariah",
				badge: "new",
			},
			{
				key: "truep2p",
				href: "/services/p2p-software-development",
				accent: "violet",
			},
		],
	},
	{
		key: "apis",
		items: [
			{
				key: "trueidentity",
				href: "/trueidentity",
			},
			{
				key: "truessm",
				href: "/truessm",
			},
			{
				key: "payments",
				href: "/contact?subject=Payments",
			},
		],
	},
];

const navLinks = [
	{ href: "/work", key: "work" },
	{ href: "/insights", key: "insights" },
	{ href: "/about", key: "about" },
	{ href: "/careers", key: "careers" },
] as const;

const solutionMenuItemClassName =
	"block w-full rounded-xl p-3 transition-colors hover:bg-accent";

function SolutionItemBadges({ item }: { item: SolutionMenuItem }) {
	const t = useTranslations("Header");
	if (!item.badge) return null;
	return (
		<Badge
			variant="secondary"
			className={cn(
				"shrink-0 px-1.5 py-0 text-[10px] font-medium",
				item.badge === "upcoming"
					? "bg-amber-100 text-amber-800"
					: "bg-primary/10 text-primary",
			)}
		>
			{t(`badges.${item.badge}`)}
		</Badge>
	);
}

function SolutionMenuItemContent({ item }: { item: SolutionMenuItem }) {
	const t = useTranslations("Header");
	return (
		<div className="min-w-0">
			<div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
				<span className="type-ui font-medium leading-snug text-primary">
					{t(`solutions.${item.key}.title`)}
				</span>
				<SolutionItemBadges item={item} />
			</div>
			<p className="mt-1 text-[14px] leading-snug text-muted-foreground">
				{t(`solutions.${item.key}.description`)}
			</p>
		</div>
	);
}

function DesktopSolutionMenuItem({ item }: { item: SolutionMenuItem }) {
	return (
		<NavigationMenuLink asChild>
			<Link href={item.href} className={solutionMenuItemClassName}>
				<SolutionMenuItemContent item={item} />
			</Link>
		</NavigationMenuLink>
	);
}

function FeaturedSolutionCard({
	item,
	onNavigate,
	compact = false,
	className,
	onClick,
	...props
}: {
	item: SolutionMenuItem;
	onNavigate?: () => void;
	compact?: boolean;
} & Omit<ComponentProps<typeof Link>, "href">) {
	const t = useTranslations("Header");
	const accent = accentClasses[item.accent ?? "primary"];

	return (
		<Link
			href={item.href}
			onClick={(event) => {
				onNavigate?.();
				onClick?.(event);
			}}
			className={cn(
				className,
				"group flex flex-row items-start gap-3.5 rounded-2xl border bg-card transition-all",
				compact ? "p-3.5" : "p-5",
				item.accent === "kpkt"
					? "hover:border-kpkt/30 hover:shadow-sm"
					: "hover:border-primary/25 hover:shadow-sm",
			)}
			{...props}
		>
			{item.icon && (
				<div
					className={cn(
						"flex shrink-0 items-center justify-center rounded-lg",
						compact ? "size-9" : "size-10",
						accent.tile,
					)}
				>
					<item.icon
						className={cn(compact ? "size-4" : "size-4.5", accent.icon)}
					/>
				</div>
			)}
			<div className="min-w-0 flex-1">
				<p
					className={cn(
						"font-semibold text-foreground",
						compact ? "type-ui" : "type-card-title",
					)}
				>
					{t(`solutions.${item.key}.title`)}
				</p>
				<p
					className={cn(
						"text-muted-foreground",
						compact
							? "mt-0.5 text-[13px] leading-snug"
							: "mt-1.5 type-ui leading-snug",
					)}
				>
					{t(`solutions.${item.key}.description`)}
				</p>
			</div>
			<ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
		</Link>
	);
}

function DesktopFeaturedRow() {
	const t = useTranslations("Header");
	return (
		<div className="border-b px-6 py-5 md:px-8 md:py-6">
			<p className="mb-3 flex items-center gap-2 type-eyebrow text-foreground">
				<span className="h-1.5 w-1.5 rounded-full bg-foreground" />
				{t("startHere")}
			</p>
			<ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
				{featuredSolutions.map((item) => (
					<li key={item.key}>
						<NavigationMenuLink
							asChild
							className="hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent"
						>
							<FeaturedSolutionCard item={item} />
						</NavigationMenuLink>
					</li>
				))}
			</ul>
		</div>
	);
}

function MobileSolutionMenuItem({
	item,
	pathname,
	onNavigate,
}: {
	item: SolutionMenuItem;
	pathname: string;
	onNavigate: () => void;
}) {
	const t = useTranslations("Header");
	const accent = accentClasses[item.accent ?? "primary"];

	return (
		<Link
			href={item.href}
			onClick={onNavigate}
			className={cn(
				"flex items-center gap-2 rounded-md px-1 py-2.5 type-ui transition-colors hover:bg-accent",
				pathname === item.href
					? cn(accent.activeBg, accent.activeText)
					: "text-muted-foreground",
			)}
		>
			<span className="flex-1 font-medium text-primary">
				{t(`solutions.${item.key}.title`)}
			</span>
			<SolutionItemBadges item={item} />
		</Link>
	);
}

function useNavChrome(
	pathname: string,
	headerRef: RefObject<HTMLElement | null>,
	bannerVisible: boolean,
) {
	const [isDark, setIsDark] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);

	useLayoutEffect(() => {
		const check = () => {
			setIsAtTop(window.scrollY < 8);
			// Sample just below the header's real bottom edge (it grows when the
			// language suggestion bar is visible) so dark heroes still flip the chrome.
			const headerBottom =
				headerRef.current?.getBoundingClientRect().bottom ?? 72;
			const el = document.elementFromPoint(
				window.innerWidth / 2,
				headerBottom + 18,
			);
			const inDarkSection = el?.closest('[data-nav-theme="dark"]');
			setIsDark(!!inDarkSection);
		};

		const frame = requestAnimationFrame(check);
		window.addEventListener("scroll", check, { passive: true });
		window.addEventListener("resize", check);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", check);
			window.removeEventListener("resize", check);
		};
		// `bannerVisible` changes the header's height, so re-sample when it flips.
	}, [pathname, headerRef, bannerVisible]);

	useLayoutEffect(() => {
		const meta = document.querySelector('meta[name="theme-color"]');
		if (meta) {
			meta.setAttribute(
				"content",
				isDark ? darkThemeColor : brandThemeColor,
			);
		}
	}, [isDark]);

	return { isDark, isAtTop };
}

export function Header() {
	const t = useTranslations("Header");
	const pathname = usePathname();
	const isSolutionsActive =
		pathname.startsWith("/services") ||
		pathname.startsWith("/truekredit") ||
		pathname.startsWith("/truesyariah") ||
		pathname.startsWith("/trueidentity") ||
		pathname.startsWith("/truessm");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [solutionsExpanded, setSolutionsExpanded] = useState(false);
	const [solutionsMenu, setSolutionsMenu] = useState("");
	const headerRef = useRef<HTMLElement>(null);
	const [bannerVisible, setBannerVisible] = useState(false);
	const { isDark: isDarkSection, isAtTop } = useNavChrome(
		pathname,
		headerRef,
		bannerVisible,
	);

	useEffect(() => {
		const frame = requestAnimationFrame(() => {
			setSolutionsMenu("");
			setMobileMenuOpen(false);
			setSolutionsExpanded(false);
		});
		return () => cancelAnimationFrame(frame);
	}, [pathname]);

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
		setSolutionsExpanded(false);
	};

	const headerClasses = cn(
		"sticky top-0 z-50 w-full overflow-visible border-b transition-[background-color,border-color,backdrop-filter] duration-200",
		// Transparent-at-top assumes a hero tucked under the 72px header. With the
		// suggestion bar showing, the header is taller and body background would
		// bleed through, so fall back to the solid chrome.
		isAtTop && !bannerVisible
			? "border-transparent bg-transparent"
			: isDarkSection
				? "border-slate-800 bg-slate-950/90 backdrop-blur-md"
				: "border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
	);

	const navLinkClasses = (active: boolean) =>
		cn(
			"type-ui font-medium transition-colors",
			isDarkSection
				? active
					? "text-white"
					: "text-slate-300 hover:text-white"
				: active
					? "text-primary"
					: "text-muted-foreground hover:text-primary",
		);

	return (
		<header ref={headerRef} className={headerClasses}>
			<div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 overflow-visible">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src={
							isDarkSection
								? "/truestack-logo-transparent-dark.png"
								: "/truestack-logo-transparent.png"
						}
						alt={siteName}
						width={140}
						height={32}
						className="h-8 w-auto"
						style={{ width: "auto" }}
						priority
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-7 md:flex overflow-visible">
					<NavigationMenu
						value={solutionsMenu}
						onValueChange={setSolutionsMenu}
						className="flex-none overflow-visible"
					>
						<NavigationMenuList>
							<NavigationMenuItem value="solutions">
								<NavigationMenuTrigger
									className={cn(
										"bg-transparent",
										navLinkClasses(isSolutionsActive),
									)}
								>
									{t("nav.solutions")}
								</NavigationMenuTrigger>
								<NavigationMenuContent
									className={cn(
										// Radix sizes the viewport from this node’s offsetWidth; without an
										// explicit width, absolute positioning collapses to ~trigger width.
										"w-[min(calc(100vw-2rem),80rem)] min-w-[min(calc(100vw-2rem),80rem)] max-w-[calc(100vw-2rem)] p-0",
									)}
								>
									<div className="w-full">
										<DesktopFeaturedRow />
										<div className="grid grid-cols-1 gap-x-8 gap-y-6 px-6 py-5 sm:grid-cols-3 sm:gap-x-10 md:px-8 md:py-6">
											{solutionsMenuColumns.map(
												(column, colIndex) => (
													<div
														key={column.key}
														className={cn(
															colIndex > 0 &&
																"sm:border-l sm:border-border sm:pl-8",
														)}
													>
														<p className="mb-3 flex items-center gap-2 px-3 type-eyebrow text-foreground">
															<span className="h-1.5 w-1.5 rounded-full bg-foreground" />
															{t(`columns.${column.key}`)}
														</p>
														<ul className="space-y-0.5">
															{column.items.map(
																(item) => (
																	<li
																		key={
																			item.key
																		}
																	>
																		<DesktopSolutionMenuItem
																			item={
																				item
																			}
																		/>
																	</li>
																),
															)}
														</ul>
													</div>
												),
											)}
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={navLinkClasses(pathname === link.href)}
						>
							{t(`nav.${link.key}`)}
						</Link>
					))}
				</nav>

				{/* Desktop actions */}
				<div className="hidden items-center gap-4 md:flex">
					<LanguageSwitcher
						variant="desktop"
						className={cn(
							navLinkClasses(false),
							isDarkSection
								? "hover:bg-slate-800 hover:text-white"
								: undefined,
						)}
					/>
					<Button
						asChild
						variant={isDarkSection ? "outline" : "default"}
						className={
							isDarkSection
								? "border-slate-400 bg-transparent text-white hover:bg-slate-800 hover:text-white hover:border-slate-300"
								: ""
						}
					>
						<Link href="/contact">{t("freeConsultation")}</Link>
					</Button>
				</div>

				{/* Mobile Menu */}
				<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							aria-label={t("openMenu")}
							className={
								isDarkSection
									? "text-slate-300 hover:text-white hover:bg-slate-800"
									: ""
							}
						>
							<Menu className="h-5 w-5" />
						</Button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="!inset-0 !left-0 !right-0 !h-dvh !w-full !max-w-none gap-0 border-0 p-0 sm:!max-w-none"
					>
						<SheetHeader className="shrink-0 border-b px-6 py-4">
							<SheetTitle className="text-left">
								<Image
									src={
										isDarkSection
											? "/truestack-logo-transparent-dark.png"
											: "/truestack-logo-transparent.png"
									}
									alt={siteName}
									width={120}
									height={28}
									className="h-7 w-auto"
									style={{ width: "auto" }}
								/>
							</SheetTitle>
						</SheetHeader>
						<nav className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
							<div className="space-y-1">
								<button
									onClick={() =>
										setSolutionsExpanded(!solutionsExpanded)
									}
									className={cn(
										"flex w-full items-center justify-between rounded-md px-1 py-2.5 text-left text-lg font-medium transition-colors hover:bg-accent",
										isSolutionsActive
											? "text-primary"
											: "text-foreground",
									)}
								>
									{t("nav.solutions")}
									<ChevronDown
										className={cn(
											"h-4 w-4 transition-transform",
											solutionsExpanded && "rotate-180",
										)}
									/>
								</button>
								{solutionsExpanded && (
									<div className="space-y-5 pt-2">
										<div>
											<p className="px-1 pb-2.5 type-eyebrow text-foreground">
												{t("startHere")}
											</p>
											<ul className="space-y-2.5">
												{featuredSolutions.map(
													(item) => (
														<li key={item.key}>
															<FeaturedSolutionCard
																item={item}
																onNavigate={
																	closeMobileMenu
																}
															/>
														</li>
													),
												)}
											</ul>
										</div>
										{solutionsMenuColumns.map((column) => (
											<div key={column.key}>
												<p className="px-1 py-1 type-eyebrow text-foreground">
													{t(`columns.${column.key}`)}
												</p>
												{column.items.map((item) => (
													<MobileSolutionMenuItem
														key={item.key}
														item={item}
														pathname={pathname}
														onNavigate={
															closeMobileMenu
														}
													/>
												))}
											</div>
										))}
									</div>
								)}
							</div>

							<div className="mt-4 space-y-1">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										onClick={closeMobileMenu}
										className={cn(
											"block rounded-md px-1 py-2.5 text-lg font-medium transition-colors hover:bg-accent",
											pathname === link.href
												? "text-primary"
												: "text-foreground",
										)}
									>
										{t(`nav.${link.key}`)}
									</Link>
								))}
							</div>
						</nav>
						<div className="shrink-0 border-t px-6 py-4">
							<LanguageSwitcher
								variant="mobile"
								className="mb-4 w-full"
								onSelected={closeMobileMenu}
							/>
							<Button asChild className="w-full" size="lg">
								<Link
									href="/contact"
									onClick={closeMobileMenu}
								>
									{t("bookConsultation")}
								</Link>
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
			{/* Lives inside the sticky header so `-mt-18` heroes cannot paint over it. */}
			<LanguageSuggestionBar
				tone={isDarkSection ? "dark" : "light"}
				onVisibilityChange={setBannerVisible}
			/>
		</header>
	);
}
