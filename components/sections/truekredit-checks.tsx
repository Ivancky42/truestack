"use client";

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

type CheckCard = {
	icon: LucideIcon;
	title: string;
	desc: string;
	tag: string;
	tagTone: "muted" | "pro" | "soon";
	highlight?: boolean;
};

const CHECKS: CheckCard[] = [
	{
		icon: Fingerprint,
		title: "TrueIdentity™ — e-KYC & liveness",
		desc: "Scan MyKad, take a selfie, confirm it is the same person. The result is saved to the borrower file.",
		tag: "First-party",
		tagTone: "muted",
	},
	{
		icon: Building2,
		title: "TrueSSM™ company lookups",
		desc: "Company, director and shareholder details for corporate borrowers, pulled straight into the application.",
		tag: "First-party",
		tagTone: "muted",
	},
	{
		icon: Wallet,
		title: "Payment gateway — collections and disbursements",
		desc: "Collect through FPX or e-wallet, and send disbursements from the same loan file your team already works from.",
		tag: "FassPay · GKash",
		tagTone: "muted",
	},
	{
		icon: BarChart3,
		title: "CTOS credit reports",
		desc: "Credit information sits next to the application, so your credit team decides with the full picture.",
		tag: "Soon",
		tagTone: "soon",
	},
	{
		icon: Mail,
		title: "Truesend™ — automated delivery",
		desc: "Receipts, reminders, collection and default letters sent automatically from the loan file.",
		tag: "First-party",
		tagTone: "muted",
	},
	{
		icon: Sparkles,
		title: "TrueSight™ AI risk scoring",
		desc: "Extra risk insight on top of your existing checks, helping your credit team spot weaker files earlier.",
		tag: "Soon",
		tagTone: "soon",
	},
	{
		icon: CalendarDays,
		title: "Digital attestation — live & video",
		desc: "At the counter or on a scheduled video call — invites and reminders stay on the loan file.",
		tag: "Pro",
		tagTone: "pro",
		highlight: true,
	},
	{
		icon: PenLine,
		title: "Digital signing on your premises",
		desc: "Legally binding signatures with MSC Trustgate — signing stays under your control. Customers sign from web or phone.",
		tag: "Pro",
		tagTone: "pro",
		highlight: true,
	},
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
						Connected checks
					</p>
					<h2 id="truekredit-checks-heading" className="type-h2">
						Checks that live inside the loan file.
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						Identity checks, company lookups and payments
						happen in the system your team already uses — not
						across four separate websites with four separate
						logins.
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
							key={item.title}
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
								<Tag label={item.tag} tone={item.tagTone} />
							</div>
							<h3 className="type-card-title text-[1.125rem]">
								{item.title}
							</h3>
							<p className="mt-1.5 type-ui text-muted-foreground">
								{item.desc}
							</p>
						</article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
