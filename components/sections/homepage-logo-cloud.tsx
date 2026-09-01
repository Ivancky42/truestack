import { cn } from "@/lib/utils";
import {
	clientLogos,
	LogoMarquee,
	LogoStaticGrid,
} from "@/components/logo-cloud-1";
import { toLogoDisplaySize } from "@/lib/logo-display-size";

const HOMEPAGE_CLIENT_NAMES = new Set([
	"PinjoCep",
	"ezdana",
	"CreditXpress",
	"Credibly",
	"JomDana",
	"jompinjam",
	"danakini",
	"Andas Capital",
	"Fundle",
	"Shoraka Digital",
	"Proficient Premium",
]);

const homepageClientLogos = clientLogos.filter((logo) =>
	HOMEPAGE_CLIENT_NAMES.has(logo.name),
);

export function HomepageLogoCloud({ className }: { className?: string }) {
	const displaySize = toLogoDisplaySize("large", false);

	return (
		<section
			className={cn("relative w-full pt-0 pb-14 md:pb-14", className)}
		>
			<p className="mx-auto mb-6 max-w-6xl px-6 text-center text-[13px] font-medium uppercase tracking-[0.08em] text-muted-foreground/70 md:mb-7">
				Lenders and fintechs we have taken live
			</p>

			<div className="hidden motion-reduce:block">
				<LogoStaticGrid
					items={homepageClientLogos}
					displaySize={displaySize}
				/>
			</div>

			<div className="motion-reduce:hidden">
				<LogoMarquee
					items={homepageClientLogos}
					displaySize={displaySize}
					rows={1}
					staticFallback={false}
				/>
			</div>
		</section>
	);
}
