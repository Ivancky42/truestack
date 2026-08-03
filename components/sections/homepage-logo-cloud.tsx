import { cn } from "@/lib/utils";
import {
	clientLogos,
	homepagePartners,
	LogoMarquee,
	LogoStaticGrid,
} from "@/components/logo-cloud-1";
import { toLogoDisplaySize } from "@/lib/logo-display-size";

const allHomepageLogos = [...clientLogos, ...homepagePartners];

export function HomepageLogoCloud({ className }: { className?: string }) {
	const displaySize = toLogoDisplaySize("large", false);

	return (
		<section
			className={cn("relative w-full pt-0 pb-10 md:pb-12", className)}
		>
			<p className="container mx-auto mb-6 px-4 text-center text-sm text-muted-foreground/80 tracking-wide md:mb-8 md:px-6">
				Brands &amp; partners we&apos;ve helped scale
			</p>

			{/* Reduced-motion only: one tidy grid of unique logos */}
			<div className="hidden motion-reduce:block">
				<LogoStaticGrid
					items={allHomepageLogos}
					displaySize={displaySize}
				/>
			</div>

			{/* Default (incl. mobile): dual opposing marquees */}
			<div className="space-y-4 motion-reduce:hidden sm:space-y-5 md:space-y-6">
				<LogoMarquee
					items={clientLogos}
					displaySize={displaySize}
					rows={1}
					staticFallback={false}
				/>
				<LogoMarquee
					items={homepagePartners}
					displaySize={displaySize}
					rows={1}
					reverse
					staticFallback={false}
				/>
			</div>
		</section>
	);
}
