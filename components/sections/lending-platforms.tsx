"use client";

import { useState } from "react";
import { CreditCard, Layers, Moon, Network } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/shared/section-badge";
import { TrueKreditPanel } from "@/components/sections/truekredit-promo";
import { TrueSyariahPanel } from "@/components/sections/truesyariah-promo";
import { TrueP2PPanel } from "@/components/sections/p2p-promo";

type TabId = "truekredit" | "truesyariah" | "truep2p";

const tabs: {
	id: TabId;
	label: string;
	sublabel: string;
	icon: typeof CreditCard;
	activeClass: string;
}[] = [
	{
		id: "truekredit",
		label: "TrueKredit™",
		sublabel: "Conventional loan management",
		icon: CreditCard,
		activeClass:
			"border-primary/40 bg-primary/5 text-primary [&_svg]:text-primary",
	},
	{
		id: "truesyariah",
		label: "TrueSyariah™",
		sublabel: "Shariah digital financing",
		icon: Moon,
		activeClass:
			"border-emerald-300 bg-emerald-500/5 text-emerald-800 [&_svg]:text-emerald-700",
	},
	{
		id: "truep2p",
		label: "TrueP2P™",
		sublabel: "Peer-to-peer financing",
		icon: Network,
		activeClass:
			"border-violet-300 bg-violet-500/5 text-violet-800 [&_svg]:text-violet-700",
	},
];

export function LendingPlatforms() {
	const [active, setActive] = useState<TabId>("truekredit");

	return (
		<section
			aria-labelledby="lending-platforms-heading"
			className="border-t bg-muted/20 py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				{/* Section header */}
				<div className="mx-auto mb-10 max-w-3xl text-center">
					<SectionBadge
						icon={Layers}
						text="Custom Lending Software"
						className="justify-center"
					/>
					<h2
						id="lending-platforms-heading"
						className="font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
					>
						Lending &amp; Financing Platforms
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
						We build custom lending software for Malaysian operators
						on our proven engines — whether you&apos;re applying for a
						KPKT money-lending licence, launching Shariah financing, or
						building a peer-to-peer marketplace. Compliant,
						audit-ready, tailored to your business, and supported long
						after launch.
					</p>
				</div>

				{/* Tabs */}
				<div
					role="tablist"
					aria-label="Lending and financing platforms"
					className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
				>
					{tabs.map((tab) => {
						const isActive = active === tab.id;
						const Icon = tab.icon;
						return (
							<button
								key={tab.id}
								type="button"
								role="tab"
								id={`${tab.id}-tab`}
								aria-selected={isActive}
								aria-controls={`${tab.id}-panel`}
								tabIndex={isActive ? 0 : -1}
								onClick={() => setActive(tab.id)}
								className={cn(
									"flex items-start gap-3 rounded-2xl border bg-background p-4 text-left transition-all hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
									isActive
										? `${tab.activeClass} shadow-sm`
										: "border-border text-muted-foreground [&_svg]:text-muted-foreground hover:border-foreground/20",
								)}
							>
								<span
									className={cn(
										"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
										isActive ? "bg-background" : "bg-muted",
									)}
								>
									<Icon className="h-5 w-5" aria-hidden />
								</span>
								<span className="min-w-0">
									<span className="block font-display text-base font-semibold">
										{tab.label}
									</span>
									<span className="block text-xs text-muted-foreground">
										{tab.sublabel}
									</span>
								</span>
							</button>
						);
					})}
				</div>

				{/* Panels — all rendered for SEO; inactive ones hidden via attribute */}
				<div className="mt-10">
					<div
						role="tabpanel"
						id="truekredit-panel"
						aria-labelledby="truekredit-tab"
						hidden={active !== "truekredit"}
					>
						<TrueKreditPanel />
					</div>
					<div
						role="tabpanel"
						id="truesyariah-panel"
						aria-labelledby="truesyariah-tab"
						hidden={active !== "truesyariah"}
					>
						<TrueSyariahPanel />
					</div>
					<div
						role="tabpanel"
						id="truep2p-panel"
						aria-labelledby="truep2p-tab"
						hidden={active !== "truep2p"}
					>
						<TrueP2PPanel />
					</div>
				</div>
			</div>
		</section>
	);
}
