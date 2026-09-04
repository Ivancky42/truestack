"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

type PathId = "ppw" | "shariah";

const PATH_IDS = ["ppw", "shariah"] as const;

function pathFromHash(): PathId {
	if (typeof window === "undefined") return "ppw";
	const hash = window.location.hash.replace("#", "");
	return hash === "shariah" ? "shariah" : "ppw";
}

export function DigitalLicensePaths() {
	const t = useTranslations("DigitalLicense");
	const tCommon = useTranslations("Common");
	const [path, setPath] = useState<PathId>("ppw");
	const ppwPoints = t.raw("paths.items.ppw.points") as string[];
	const shariahPoints = t.raw("paths.items.shariah.points") as string[];

	useEffect(() => {
		const applyHash = () => setPath(pathFromHash());
		applyHash();
		const onClick = (event: MouseEvent) => {
			const href =
				(event.target as Element | null)
					?.closest("a")
					?.getAttribute("href") ?? "";
			if (
				href === "#shariah" ||
				href.endsWith("/services/digital-license#shariah")
			) {
				setPath("shariah");
			}
		};
		window.addEventListener("hashchange", applyHash);
		document.addEventListener("click", onClick);
		return () => {
			window.removeEventListener("hashchange", applyHash);
			document.removeEventListener("click", onClick);
		};
	}, []);

	const select = (id: PathId) => {
		setPath(id);
		const hash = id === "shariah" ? "shariah" : "paths";
		window.history.replaceState(null, "", `#${hash}`);
	};

	return (
		<section
			id="paths"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-9 max-w-[42em]"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-primary">
						{t("paths.eyebrow")}
					</p>
					<h2 className="type-h2 text-pretty">
						{t("paths.title")}
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						{t("paths.body")}
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<div
						role="tablist"
						aria-label={t("paths.tablistAria")}
						className="grid border border-border sm:grid-cols-2"
					>
						{PATH_IDS.map((id) => {
							const selected = path === id;
							return (
								<button
									key={id}
									type="button"
									role="tab"
									id={
										id === "shariah"
											? "shariah"
											: `license-path-${id}-tab`
									}
									aria-selected={selected}
									aria-controls={`license-path-${id}-panel`}
									onClick={() => select(id)}
									className={cn(
										"border-b p-6 text-left transition-colors sm:border-b-0",
										id === "ppw" && "sm:border-r",
										selected
											? id === "shariah"
												? "bg-ts-paper shadow-[inset_0_-2px_0_var(--ts-gold)]"
												: "bg-background shadow-[inset_0_-2px_0_var(--color-kpkt)]"
											: "bg-transparent hover:bg-background/70",
									)}
								>
									<div className="mb-3 flex items-center justify-between gap-3">
										<span
											className={cn(
												"type-mono-label",
												selected
													? id === "shariah"
														? "text-ts-gold"
														: "text-kpkt"
													: "text-muted-foreground",
											)}
										>
											{t(`paths.items.${id}.kicker`)}
										</span>
										{id === "shariah" ? (
											<span className="rounded-full bg-amber-500/10 px-2 py-0.5 type-micro font-semibold text-amber-800">
												{t("paths.upcoming")}
											</span>
										) : (
											<span className="rounded-full bg-kpkt/10 px-2 py-0.5 type-micro font-semibold text-kpkt">
												{tCommon("live")}
											</span>
										)}
									</div>
									<p
										className={cn(
											"type-card-title",
											selected && id === "shariah"
												? "text-ts-ink"
												: "text-foreground",
										)}
									>
										{t(`paths.items.${id}.label`)}
									</p>
									<p
										className={cn(
											"mt-2 type-ui",
											selected && id === "shariah"
												? "text-ts-ink-soft"
												: "text-muted-foreground",
										)}
									>
										{t(`paths.items.${id}.summary`)}
									</p>
								</button>
							);
						})}
					</div>

					<div
						id="license-path-ppw-panel"
						role="tabpanel"
						aria-labelledby="license-path-ppw-tab"
						hidden={path !== "ppw"}
						className="border border-t-0 border-border bg-background px-6 py-8 md:px-8"
					>
						<div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
							<div>
								<div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-kpkt/10">
									<FileCheck
										className="size-4 text-kpkt"
										aria-hidden
									/>
								</div>
								<h3 className="type-h2-sm">
									{t("paths.items.ppw.title")}
								</h3>
								<p className="mt-3 type-ui text-muted-foreground">
									{t("paths.items.ppw.body")}
								</p>
								<div className="mt-6 flex flex-wrap gap-3">
									<Button asChild className="gap-2 bg-kpkt hover:bg-kpkt/90">
										<CtaLink href="/contact?subject=Digital%20KPKT%20Licence">
											{tCommon("bookConsultation")}
											<ArrowRight className="h-4 w-4" />
										</CtaLink>
									</Button>
									<Button asChild variant="outline">
										<CtaLink href="#qualify">
											{t("paths.items.ppw.qualifyCta")}
										</CtaLink>
									</Button>
								</div>
							</div>
							<ul className="space-y-3">
								{ppwPoints.map((point) => (
									<li
										key={point}
										className="flex items-start gap-3 border-b border-border/70 pb-3 last:border-0 last:pb-0"
									>
										<span
											className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-kpkt"
											aria-hidden
										/>
										<span className="type-ui text-muted-foreground">
											{point}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div
						id="license-path-shariah-panel"
						role="tabpanel"
						aria-labelledby="shariah"
						hidden={path !== "shariah"}
						className="border border-t-0 border-ts-rule bg-ts-parchment px-6 py-8 md:px-8"
					>
						<div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
							<div>
								<div className="mb-4 flex size-9 items-center justify-center border border-ts-gold/30 bg-ts-gold/10">
									<Scale
										className="size-4 text-ts-gold"
										aria-hidden
									/>
								</div>
								<p className="mb-3 type-ts-eyebrow text-ts-gold">
									{t("paths.items.shariah.eyebrow")}
								</p>
								<h3 className="type-ts-h3 text-ts-ink">
									{t("paths.items.shariah.title")}
								</h3>
								<p className="mt-3 type-ui text-ts-ink-soft">
									{t("paths.items.shariah.body")}
								</p>
								<div className="mt-6 flex flex-wrap gap-3">
									<Link
										href="/contact?subject=TrueSyariah"
										className="inline-flex min-h-11 items-center gap-2 rounded-[2px] bg-ts-ink px-5 text-[15px] font-medium text-ts-parchment transition-colors hover:bg-ts-gold"
									>
										{tCommon("bookConsultation")}
										<ArrowRight className="h-4 w-4" />
									</Link>
									<Link
										href="/truesyariah"
										className="inline-flex min-h-11 items-center rounded-[2px] border border-ts-line px-5 text-[15px] font-medium text-ts-ink transition-colors hover:border-ts-ink"
									>
										{t("paths.items.shariah.seeTrueSyariah")}
									</Link>
								</div>
							</div>
							<ul className="space-y-3">
								{shariahPoints.map((point) => (
									<li
										key={point}
										className="flex items-start gap-3 border-b border-ts-rule-faint pb-3 last:border-0 last:pb-0"
									>
										<span
											className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-ts-gold"
											aria-hidden
										/>
										<span className="type-ui text-ts-ink-soft">
											{point}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
