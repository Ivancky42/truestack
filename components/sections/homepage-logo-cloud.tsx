import { cn } from "@/lib/utils";
import {
	clientLogos,
	homepagePartners,
	LogoMarquee,
} from "@/components/logo-cloud-1";
import { toLogoDisplaySize } from "@/lib/logo-display-size";

export function HomepageLogoCloud({ className }: { className?: string }) {
	const displaySize = toLogoDisplaySize("large", false);

	return (
		<section
			className={cn("relative w-full pt-0 pb-10 md:pb-12", className)}
		>
			<p className="container mx-auto mb-6 px-4 text-center text-sm text-muted-foreground/80 tracking-wide md:mb-8 md:px-6">
				Brands &amp; partners we&apos;ve helped scale
			</p>
			<div className="space-y-5 md:space-y-6">
				<LogoMarquee
					items={clientLogos}
					displaySize={displaySize}
					rows={1}
				/>
				<LogoMarquee
					items={homepagePartners}
					displaySize={displaySize}
					rows={1}
					reverse
				/>
			</div>
		</section>
	);
}
