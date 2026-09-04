"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
	Check,
	CheckCircle2,
	FileCheck,
	Fingerprint,
	ScanFace,
} from "lucide-react";

const KYC_STEPS = [
	{
		icon: FileCheck,
		label: "Scan MyKad",
		sublabel: "OCR extraction",
		color: "text-blue-600",
		bg: "bg-blue-50",
		borderColor: "border-blue-200",
	},
	{
		icon: ScanFace,
		label: "Selfie Capture",
		sublabel: "Liveness check",
		color: "text-violet-600",
		bg: "bg-violet-50",
		borderColor: "border-violet-200",
	},
	{
		icon: Fingerprint,
		label: "Biometric Match",
		sublabel: "Face comparison",
		color: "text-indigo-600",
		bg: "bg-indigo-50",
		borderColor: "border-indigo-200",
	},
	{
		icon: CheckCircle2,
		label: "Verified",
		sublabel: "Result in <3s",
		color: "text-emerald-600",
		bg: "bg-emerald-50",
		borderColor: "border-emerald-200",
	},
] as const;

/** Full TrueIdentity hero phone + stat chips. */
export function KycFlowDiagram() {
	const t = useTranslations("TrueIdentity");
	return (
		<motion.div
			className="relative"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.2 }}
		>
			<motion.div
				className="mx-auto w-full max-w-[320px]"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.3 }}
			>
				<KycPhone />
			</motion.div>

			<motion.div
				className="absolute -left-4 top-12 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 1.8, duration: 0.5 }}
			>
				<p className="text-xs font-semibold text-foreground">{t("hero.chips.verification.value")}</p>
				<p className="text-[10px] text-muted-foreground">{t("hero.chips.verification.label")}</p>
			</motion.div>

			<motion.div
				className="absolute -right-4 top-32 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 2.0, duration: 0.5 }}
			>
				<p className="text-xs font-semibold text-emerald-600">{t("hero.chips.uptime.value")}</p>
				<p className="text-[10px] text-muted-foreground">{t("hero.chips.uptime.label")}</p>
			</motion.div>

			<motion.div
				className="absolute -left-8 bottom-24 hidden rounded-lg border bg-white px-3 py-2 shadow-md lg:block"
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 2.2, duration: 0.5 }}
			>
				<p className="text-xs font-semibold text-primary">{t("hero.chips.pdpa.value")}</p>
				<p className="text-[10px] text-muted-foreground">{t("hero.chips.pdpa.label")}</p>
			</motion.div>
		</motion.div>
	);
}

/** Compact KYC phone for collage overlays — same UI as the TrueIdentity hero. */
export function KycHeroOverlay() {
	return (
		<div className="w-[168px] lg:w-[184px]">
			<KycPhone compact />
		</div>
	);
}

function KycPhone({ compact = false }: { compact?: boolean }) {
	return (
		<div
			className={
				compact
					? "overflow-hidden rounded-[1.4rem] border bg-card shadow-xl"
					: "overflow-hidden rounded-[2rem] border-2 border-border/80 bg-white shadow-xl"
			}
		>
			<div
				className={
					compact
						? "flex items-center justify-between bg-muted/50 px-3 py-1.5"
						: "flex items-center justify-between bg-slate-50 px-6 py-2"
				}
			>
				<span className="text-[10px] font-medium text-slate-400">
					9:41
				</span>
				<div
					className={
						compact
							? "mx-auto h-3.5 w-14 rounded-full bg-slate-950"
							: "mx-auto h-5 w-20 rounded-full bg-slate-900"
					}
				/>
				<div className="flex gap-1">
					<div className="h-2 w-2 rounded-full bg-slate-300" />
					<div className="h-2 w-2 rounded-full bg-slate-300" />
				</div>
			</div>

			<div className={compact ? "px-3 pt-3 pb-3.5" : "px-5 pt-4 pb-6"}>
				<div className={compact ? "mb-3 text-center" : "mb-5 text-center"}>
					<div
						className={
							compact
								? "mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10"
								: "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
						}
					>
						<Fingerprint
							className={
								compact
									? "h-4 w-4 text-primary"
									: "h-5 w-5 text-primary"
							}
						/>
					</div>
					<p
						className={
							compact
								? "text-[11px] font-medium text-foreground"
								: "text-xs font-medium text-foreground"
						}
					>
						Identity Verification
					</p>
					<p className="text-[10px] text-muted-foreground">
						Powered by TrueIdentity™
					</p>
				</div>

				<div className={compact ? "space-y-1.5" : "space-y-3"}>
					{KYC_STEPS.map((step, i) => {
						const Icon = step.icon;
						const isLast = i === KYC_STEPS.length - 1;
						return (
							<div key={step.label}>
								<div
									className={`flex items-center gap-2 rounded-lg border bg-card shadow-sm ${step.borderColor} ${compact ? "p-2" : "gap-3 rounded-xl bg-white p-3"}`}
								>
									<div
										className={`flex shrink-0 items-center justify-center rounded-md ${step.bg} ${compact ? "h-7 w-7" : "h-10 w-10 rounded-lg"}`}
									>
										<Icon
											className={`${step.color} ${compact ? "h-3.5 w-3.5" : "h-5 w-5"}`}
										/>
									</div>
									<div className="min-w-0 flex-1">
										<p
											className={
												compact
													? "text-[11px] font-medium text-foreground"
													: "text-sm font-medium text-foreground"
											}
										>
											{step.label}
										</p>
										<p className="text-[10px] text-muted-foreground">
											{step.sublabel}
										</p>
									</div>
									{isLast ? (
										<CheckCircle2 className="h-4 w-4 text-emerald-500" />
									) : (
										<div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
											<Check className="h-2.5 w-2.5 text-primary" />
										</div>
									)}
								</div>
								{!isLast ? (
									<div
										className={
											compact
												? "ml-5 h-1.5 w-0.5 bg-border"
												: "ml-8 h-2 w-0.5 bg-border"
										}
									/>
								) : null}
							</div>
						);
					})}
				</div>

				<div className={compact ? "mt-3" : "mt-5"}>
					<div className="mb-1.5 flex items-center justify-between">
						<span className="text-[10px] font-medium text-muted-foreground">
							Verification complete
						</span>
						<span className="text-[10px] font-semibold text-emerald-600">
							100%
						</span>
					</div>
					<div className="h-1.5 overflow-hidden rounded-full bg-muted">
						<div className="h-full w-full rounded-full bg-emerald-500" />
					</div>
				</div>
			</div>
		</div>
	);
}
