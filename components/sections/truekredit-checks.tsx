"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
	BarChart3,
	Building2,
	CalendarDays,
	Fingerprint,
	Mail,
	PenLine,
	Sparkles,
	Wallet,
	type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TrueKreditChecksCollage } from "@/components/sections/truekredit-check-visuals";

type CheckKey =
	| "identity"
	| "ssm"
	| "payments"
	| "ctos"
	| "truesend"
	| "truesight"
	| "attestation"
	| "signing";

type CheckCard = {
	key: CheckKey;
	icon: LucideIcon;
	tagTone: "muted" | "pro" | "soon";
	highlight?: boolean;
};

const CHECKS: CheckCard[] = [
	{ key: "identity", icon: Fingerprint, tagTone: "muted" },
	{ key: "ssm", icon: Building2, tagTone: "muted" },
	{ key: "payments", icon: Wallet, tagTone: "muted" },
	{ key: "ctos", icon: BarChart3, tagTone: "soon" },
	{ key: "truesend", icon: Mail, tagTone: "muted" },
	{ key: "truesight", icon: Sparkles, tagTone: "soon" },
	{
		key: "attestation",
		icon: CalendarDays,
		tagTone: "pro",
		highlight: true,
	},
	{ key: "signing", icon: PenLine, tagTone: "pro", highlight: true },
];

function Tag({
	label,
	tone,
}: {
	label: string;
	tone: CheckCard["tagTone"];
}) {
	return (
		<span
			className={cn(
				"rounded-full px-2.5 py-0.5 type-micro font-medium",
				tone === "pro" &&
					"bg-linear-to-r from-indigo-600 to-violet-600 text-white",
				tone === "soon" && "bg-amber-500/10 text-amber-700",
				tone === "muted" && "bg-muted text-muted-foreground",
			)}
		>
			{label}
		</span>
	);
}

export function TrueKreditChecks() {
	const t = useTranslations("TrueKredit");
	return (
		<section
			id="checks"
			aria-labelledby="truekredit-checks-heading"
			className="scroll-mt-20 border-t bg-muted/30 py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-8 max-w-[44em]"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-primary">
						{t("checks.eyebrow")}
					</p>
					<h2 id="truekredit-checks-heading" className="type-h2">
						{t("checks.title")}
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						{t("checks.lede")}
					</p>
				</motion.div>

				<motion.div
					className="mb-5"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.06 }}
				>
					<TrueKreditChecksCollage />
				</motion.div>

				<motion.div
					className="grid gap-3 sm:grid-cols-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{CHECKS.map((item) => (
						<article
							key={item.key}
							className={cn(
								"rounded-xl border bg-card p-5 shadow-sm",
								item.highlight &&
									"border-primary/25 bg-primary/3",
							)}
						>
							<div className="mb-3 flex items-center justify-between gap-3">
								<div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
									<item.icon className="size-4 text-primary" />
								</div>
								<Tag
									label={t(`checks.items.${item.key}.tag`)}
									tone={item.tagTone}
								/>
							</div>
							<h3 className="type-card-title text-[1.125rem]">
								{t(`checks.items.${item.key}.title`)}
							</h3>
							<p className="mt-1.5 type-ui text-muted-foreground">
								{t(`checks.items.${item.key}.desc`)}
							</p>
						</article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
