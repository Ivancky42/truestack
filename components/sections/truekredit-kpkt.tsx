"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Cloud, FileCheck, Globe } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { COMPARE_PAGE_PATH } from "@/lib/truekredit-compare-seo";

const ITEMS = [
	{ key: "paperwork", icon: FileCheck },
	{ key: "licence", icon: Globe },
	{ key: "cloud", icon: Cloud },
] as const;

/** "Built around KPKT" summary on /truekredit, linking the licence path and the LMS comparison checklist. */
export function TrueKreditKpkt() {
	const t = useTranslations("TrueKredit");

	return (
		<section
			id="kpkt"
			aria-labelledby="truekredit-kpkt-heading"
			className="scroll-mt-20 border-t bg-background py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-9 max-w-[44em]"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-primary">
						{t("kpktSystem.eyebrow")}
					</p>
					<h2 id="truekredit-kpkt-heading" className="type-h2">
						{t("kpktSystem.title")}
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						{t("kpktSystem.lede")}
					</p>
				</motion.div>

				<motion.div
					className="grid gap-6 md:grid-cols-3"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					{ITEMS.map((item) => (
						<div
							key={item.key}
							className="rounded-2xl border bg-card p-6 shadow-sm"
						>
							<div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
								<item.icon className="h-4 w-4 text-primary" aria-hidden />
							</div>
							<h3 className="type-card-title">
								{t(`kpktSystem.items.${item.key}.title`)}
							</h3>
							<p className="mt-2 type-ui text-muted-foreground">
								{t.rich(`kpktSystem.items.${item.key}.desc`, {
									link: (c) => (
										<Link
											href="/services/digital-license"
											className="font-medium text-primary hover:underline"
										>
											{c}
										</Link>
									),
								})}
							</p>
						</div>
					))}
				</motion.div>

				<p className="mt-8 type-ui text-muted-foreground">
					{t.rich("kpktSystem.compare", {
						link: (c) => (
							<Link
								href={COMPARE_PAGE_PATH}
								className="font-medium text-primary hover:underline"
							>
								{c}
							</Link>
						),
					})}
				</p>
			</div>
		</section>
	);
}
