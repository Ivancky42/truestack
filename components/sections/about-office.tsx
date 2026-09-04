"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CtaLink } from "@/components/shared/cta-link";
import {
	legalName,
	orgAddressLines,
	orgEmail,
	orgLinkedInUrl,
	orgRegistrationNumber,
} from "@/lib/seo-defaults";

const audiences = ["lenders", "shariah", "p2p", "fintechs"] as const;

export function AboutOffice() {
	const t = useTranslations("About");
	const entityFields = [
		{ key: "company", value: legalName.toUpperCase() },
		{ key: "registration", value: orgRegistrationNumber },
		{ key: "incorporated", value: t("office.fields.incorporatedValue") },
	] as const;
	return (
		<section
			id="office"
			aria-labelledby="about-office-heading"
			className="scroll-mt-24 border-t bg-background py-16 md:py-20"
		>
			<div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="mb-3 type-eyebrow text-primary">{t("office.eyebrow")}</p>
					<h2 id="about-office-heading" className="type-h2">
						{t("office.title")}
					</h2>
					<p className="mt-4 max-w-xl type-lede text-muted-foreground">
						{t("office.lede")}
					</p>
					<address className="mt-6 not-italic text-[17px] leading-relaxed text-foreground/80">
						<span className="block font-semibold text-foreground">
							{legalName}
						</span>
						{orgAddressLines.map((line) => (
							<span key={line} className="block">
								{line}
							</span>
						))}
					</address>
					<div className="mt-6 flex flex-wrap gap-3">
						<Button asChild variant="outline" size="lg">
							<a href={`mailto:${orgEmail}`}>{orgEmail}</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<CtaLink href={orgLinkedInUrl}>{t("office.linkedin")}</CtaLink>
						</Button>
					</div>
				</motion.div>

				<motion.div
					className="overflow-hidden rounded-2xl border bg-muted/30 shadow-sm"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<div className="border-b px-7 py-7 md:px-8">
						<p className="mb-4 type-eyebrow text-muted-foreground">
							{t("office.registeredEntity")}
						</p>
						<dl className="space-y-4">
							{entityFields.map((field) => (
								<div key={field.key}>
									<dt className="type-mono-label text-muted-foreground">
										{t(`office.fields.${field.key}`)}
									</dt>
									<dd className="mt-0.5 font-semibold text-foreground">
										{field.value}
									</dd>
								</div>
							))}
						</dl>
					</div>
					<div className="bg-card px-7 py-6 md:px-8">
						<p className="mb-3 type-eyebrow text-muted-foreground">
							{t("office.whoWeWorkWith")}
						</p>
						<div className="flex flex-wrap gap-2">
							{audiences.map((audience) => (
								<span
									key={audience}
									className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
								>
									{t(`office.audiences.${audience}`)}
								</span>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
