import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/shared/cta-link";

type StripAccent = "kpkt" | "violet";

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
		<section id={id} aria-label={ariaLabel} className="border-t bg-muted/30">
			<div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
				<p className="type-ui text-muted-foreground">
					<span className="font-medium text-foreground">{lead}</span>{" "}
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
