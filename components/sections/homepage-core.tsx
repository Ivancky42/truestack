"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Building2, CreditCard, Fingerprint } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { homepagePartners } from "@/components/logo-cloud-1";
import { AdaptiveLogoImage } from "@/components/logo-cloud-image";

const LIVE: {
	key: "trueidentity" | "truessm" | "payments";
	name?: string;
	href: string;
	icon: LucideIcon;
	chips?: string[];
}[] = [
	{
		key: "trueidentity",
		name: "TrueIdentity™",
		href: "/trueidentity",
		icon: Fingerprint,
	},
	{
		key: "truessm",
		name: "TrueSSM™",
		href: "/truessm",
		icon: Building2,
	},
	{
		key: "payments",
		href: "/contact?subject=Payments",
		icon: CreditCard,
		chips: ["FassPay", "GKash"],
	},
];

const COMING_SOON = [
	{
		key: "truescore",
		name: "TrueScore™",
	},
	{
		key: "truecommodity",
		name: "TrueCommodity™",
	},
	{
		key: "truesight",
		name: "TrueSight™",
	},
] as const;

export function HomepageCore() {
	const t = useTranslations("Home");
	const tCommon = useTranslations("Common");

	return (
		<section
			id="core"
			data-nav-theme="dark"
			className="scroll-mt-20 border-t bg-slate-950 py-16 text-white md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-9 max-w-3xl"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-blue-400">
						{t("core.eyebrow")}
					</p>
					<h2 className="type-h2">
						{t("core.title")}
					</h2>
					<p className="mt-3.5 type-lede text-slate-400">
						{t("core.lede")}
					</p>
				</motion.div>

				<div className="grid gap-4 md:grid-cols-3">
					{LIVE.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={item.key}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
							>
								<Link
									href={item.href}
									className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-colors hover:border-primary"
								>
									<div className="mb-3.5 flex items-center justify-between">
										<div className="flex h-10.5 w-10.5 items-center justify-center rounded-lg bg-primary/15">
											<Icon
												className="h-5 w-5 text-blue-400"
												aria-hidden
											/>
										</div>
										<span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
											{tCommon("live")}
										</span>
									</div>
									<h3 className="type-card-title">
										{item.key === "payments"
											? t("core.items.payments.name")
											: item.name}
									</h3>
									<p className="mt-2 text-[15px] leading-relaxed text-slate-400">
										{t(`core.items.${item.key}.body`)}
									</p>
									{item.chips ? (
										<div className="mt-3 flex flex-wrap gap-1.5">
											{item.chips.map((chip) => (
												<span
													key={chip}
													className="rounded-full bg-slate-400/15 px-2.5 py-0.5 text-xs font-medium text-slate-300"
												>
													{chip}
												</span>
											))}
										</div>
									) : null}
								</Link>
							</motion.div>
						);
					})}
				</div>

				<div className="mt-4 grid gap-4 md:grid-cols-3">
					{COMING_SOON.map((item, index) => (
						<motion.div
							key={item.key}
							className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-6"
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.24 + index * 0.08,
							}}
						>
							<div className="mb-3.5 flex items-center justify-between gap-3">
								<h3 className="type-card-title text-slate-200">
									{item.name}
								</h3>
								<span className="shrink-0 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
									{t("core.comingSoon")}
								</span>
							</div>
							<p className="text-[15px] leading-relaxed text-slate-500">
								{t(`core.items.${item.key}.body`)}
							</p>
						</motion.div>
					))}
				</div>

				<div className="mt-10 border-t border-slate-800 pt-8">
					<p className="mb-5 type-eyebrow text-slate-500">
						{t("core.partners")}
					</p>
					<div className="flex flex-wrap items-center gap-x-10 gap-y-6">
						{homepagePartners.map((partner) => (
							<AdaptiveLogoImage
								key={partner.name}
								src={partner.logo}
								alt={partner.name}
								displaySize="default"
								color
								boost={"boost" in partner && partner.boost}
								className="opacity-75 brightness-0 invert"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
