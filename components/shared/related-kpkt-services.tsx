"use client";

import {useTranslations} from "next-intl";
import {Link, usePathname} from "@/i18n/navigation";
import {RELATED_KPKT_SERVICES} from "@/lib/related-kpkt-services";

/**
 * Compact in-body sibling nav (same chrome as software-dev
 * cross-links / CrossLinkStrip). Labels are existing Footer strings.
 * Covers TrueKredit™ plus KPKT licence / account / ANGKASA pages.
 */
export function RelatedKpktServices() {
	const t = useTranslations("Footer");
	const pathname = usePathname();
	const links = RELATED_KPKT_SERVICES.filter((item) => item.href !== pathname);

	if (links.length === 0) return null;

	return (
		<nav aria-label={t("columns.services")} className="border-t bg-muted/30">
			<div className="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-3 gap-y-1 px-6 py-3.5 type-ui text-muted-foreground">
				<span className="font-medium text-foreground">
					{t("columns.services")}
				</span>
				{links.map((item, index) => (
					<span
						key={item.href}
						className="inline-flex items-center gap-x-3"
					>
						{index > 0 ? <span aria-hidden>·</span> : null}
						<Link
							href={item.href}
							className="font-medium text-kpkt hover:underline"
						>
							{t(`solutions.${item.key}`)}
						</Link>
					</span>
				))}
			</div>
		</nav>
	);
}
