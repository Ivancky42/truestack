"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";

type PathId = "ppw" | "shariah";

const PATHS = [
	{
		id: "ppw" as const,
		kicker: "Digital licence · PPW",
		label: "Conventional e-Lending",
		summary:
			"Kebenaran tambahan on an existing lesen PPW — nationwide lending on TrueKredit™ Pro.",
	},
	{
		id: "shariah" as const,
		kicker: "Shariah digital licence",
		label: "Syariah Lending",
		summary:
			"A separate entity, committee and book — TrueSyariah™ from the first filing.",
	},
] as const;

const PPW_POINTS = [
	"Existing lesen PPW, then kebenaran tambahan to lend online",
	"TrueKredit™ Pro — branded web, apps and signing on your premises",
	"About three months from kickoff to nationwide go-live",
	"Licence, platform and KPKT review under one contract",
] as const;

const SHARIAH_POINTS = [
	"Own operating company — not the same entity as a conventional PPW",
	"Committee, Aqad and Tawarruq sequence approved before you file",
	"TrueSyariah™ — Ta'widh and Gharamah split, books ring-fenced",
	"We start you in the order the regulator expects, not the other way around",
] as const;

function pathFromHash(): PathId {
	if (typeof window === "undefined") return "ppw";
	const hash = window.location.hash.replace("#", "");
	return hash === "shariah" ? "shariah" : "ppw";
}

export function DigitalLicensePaths() {
	const [path, setPath] = useState<PathId>("ppw");

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
						Choose your path
					</p>
					<h2 className="type-h2 text-pretty">
						Two licences. Pick the one that matches your book.
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						Digital lending on a conventional lesen PPW is one
						approval. Shariah digital lending is another — its own
						entity, committee and book. Pick the path you are on.
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
						aria-label="Licence paths"
						className="grid border border-border sm:grid-cols-2"
					>
						{PATHS.map((item) => {
							const selected = path === item.id;
							return (
								<button
									key={item.id}
									type="button"
									role="tab"
									id={
										item.id === "shariah"
											? "shariah"
											: `license-path-${item.id}-tab`
									}
									aria-selected={selected}
									aria-controls={`license-path-${item.id}-panel`}
									onClick={() => select(item.id)}
									className={cn(
										"border-b p-6 text-left transition-colors sm:border-b-0",
										item.id === "ppw" && "sm:border-r",
										selected
											? item.id === "shariah"
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
													? item.id === "shariah"
														? "text-ts-gold"
														: "text-kpkt"
													: "text-muted-foreground",
											)}
										>
											{item.kicker}
										</span>
										{item.id === "shariah" ? (
											<span className="rounded-full bg-amber-500/10 px-2 py-0.5 type-micro font-semibold text-amber-800">
												Upcoming
											</span>
										) : (
											<span className="rounded-full bg-kpkt/10 px-2 py-0.5 type-micro font-semibold text-kpkt">
												Live
											</span>
										)}
									</div>
									<p
										className={cn(
											"type-card-title",
											selected && item.id === "shariah"
												? "text-ts-ink"
												: "text-foreground",
										)}
									>
										{item.label}
									</p>
									<p
										className={cn(
											"mt-2 type-ui",
											selected && item.id === "shariah"
												? "text-ts-ink-soft"
												: "text-muted-foreground",
										)}
									>
										{item.summary}
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
									Digital licence on your existing PPW.
								</h3>
								<p className="mt-3 type-ui text-muted-foreground">
									Holding a money-lending licence does not let
									you lend online. You apply for kebenaran
									tambahan, show KPKT the platform, and go
									nationwide on TrueKredit™ Pro. That is the
									path this page walks.
								</p>
								<div className="mt-6 flex flex-wrap gap-3">
									<Button asChild className="gap-2 bg-kpkt hover:bg-kpkt/90">
										<CtaLink href="/contact?subject=Digital%20KPKT%20Licence">
											Book a Free Consultation
											<ArrowRight className="h-4 w-4" />
										</CtaLink>
									</Button>
									<Button asChild variant="outline">
										<CtaLink href="#qualify">
											See if you qualify
										</CtaLink>
									</Button>
								</div>
							</div>
							<ul className="space-y-3">
								{PPW_POINTS.map((point) => (
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
									Lesen pinjaman digital syariah
								</p>
								<h3 className="type-ts-h3 text-ts-ink">
									A Shariah book cannot sit on a conventional
									licence.
								</h3>
								<p className="mt-3 type-ui text-ts-ink-soft">
									KPKT treats Shariah digital lending as its
									own approval. The entity, the committee and
									the contracts have to be in place before
									the software is much use — and the platform
									has to evidence Tawarruq, Ta&apos;widh and
									Gharamah from day one.
								</p>
								<div className="mt-6 flex flex-wrap gap-3">
									<Link
										href="/contact?subject=TrueSyariah"
										className="inline-flex min-h-11 items-center gap-2 rounded-[2px] bg-ts-ink px-5 text-[15px] font-medium text-ts-parchment transition-colors hover:bg-ts-gold"
									>
										Book a Free Consultation
										<ArrowRight className="h-4 w-4" />
									</Link>
									<Link
										href="/truesyariah"
										className="inline-flex min-h-11 items-center rounded-[2px] border border-ts-line px-5 text-[15px] font-medium text-ts-ink transition-colors hover:border-ts-ink"
									>
										See TrueSyariah™
									</Link>
								</div>
							</div>
							<ul className="space-y-3">
								{SHARIAH_POINTS.map((point) => (
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
