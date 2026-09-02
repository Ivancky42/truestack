import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/shared/cta-link";

type StripAccent = "kpkt" | "violet" | "truesyariah";

type CrossLinkStripProps = {
	id: string;
	ariaLabel: string;
	lead: string;
	body: string;
	href: string;
	cta: string;
	accent?: StripAccent;
};

const accentClass: Record<StripAccent, string> = {
	kpkt: "text-kpkt",
	violet: "text-violet-700",
	truesyariah: "text-ts-gold hover:text-ts-ink",
};

const shellClass: Record<StripAccent, string> = {
	kpkt: "border-t bg-muted/30",
	violet: "border-t bg-muted/30",
	truesyariah: "border-t border-ts-rule bg-ts-parchment",
};

const leadClass: Record<StripAccent, string> = {
	kpkt: "font-medium text-foreground",
	violet: "font-medium text-foreground",
	truesyariah: "font-medium text-ts-ink",
};

const bodyClass: Record<StripAccent, string> = {
	kpkt: "type-ui text-muted-foreground",
	violet: "type-ui text-muted-foreground",
	truesyariah: "type-ui text-ts-ink-soft",
};

export function CrossLinkStrip({
	id,
	ariaLabel,
	lead,
	body,
	href,
	cta,
	accent = "kpkt",
}: CrossLinkStripProps) {
	return (
		<section id={id} aria-label={ariaLabel} className={shellClass[accent]}>
			<div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
				<p className={bodyClass[accent]}>
					<span className={leadClass[accent]}>{lead}</span>{" "}
					{body}
				</p>
				<CtaLink
					href={href}
					className={`inline-flex shrink-0 items-center gap-1 type-ui font-medium hover:underline ${accentClass[accent]}`}
				>
					{cta}
					<ArrowRight className="h-3.5 w-3.5" />
				</CtaLink>
			</div>
		</section>
	);
}
