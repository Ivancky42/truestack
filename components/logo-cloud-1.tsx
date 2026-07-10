import { cn } from "@/lib/utils";
import { Handshake, Users } from "lucide-react";
import { LogoMarqueeRow } from "@/components/logo-marquee-row";
import { AdaptiveLogoImage } from "@/components/logo-cloud-image";
import {
	type LogoDisplaySize,
	toLogoDisplaySize,
} from "@/lib/logo-display-size";

// Technology partners data (for software development page)
export const technologyPartners = [
	{
		name: "CTOS",
		category: "Credit Intelligence",
		logo: "/logos/ctos.png",
	},
	{
		name: "Regtank",
		category: "Onboarding & AML",
		logo: "/logos/regtank.webp",
	},
	{
		name: "Trustgate",
		category: "e-Signature & e-KYC",
		logo: "/logos/trustgate.png",
	},
	{
		name: "Airwallex",
		category: "Payments",
		logo: "/logos/airwallex.png",
	},
	{
		name: "Meta",
		category: "WhatsApp Notifications",
		logo: "/logos/meta.svg",
	},
	{
		name: "Infomina",
		category: "TrueSSM™",
		logo: "/logos/infomina.png",
	},
	{
		name: "AWS",
		category: "Cloud Hosting",
		logo: "/logos/aws.svg",
	},
	{
		name: "RHB Trustees",
		category: "Trust Account",
		logo: "/logos/rhb_trustees.jpg",
	},
	{
		name: "DigitalOcean",
		category: "Cloud Hosting",
		logo: "/logos/digitalocean.svg",
	},
] as const;

// Client logos (for homepage)
export const clientLogos = [
	{
		name: "PinjoCep",
		logo: "/logos/pinjocep-logo.png",
	},
	{
		name: "Shoraka Digital",
		logo: "/logos/shoraka-digital.png",
	},
	{
		name: "CreditXpress",
		logo: "/logos/creditxpress.png",
	},
	{
		name: "Credibly",
		logo: "/logos/credibly.png",
	},
	{
		name: "JomDana",
		logo: "/logos/JomDana.png",
	},
	{
		name: "AMS OSRAM",
		logo: "/logos/ams-osram.png",
	},
	{
		name: "Malcan",
		logo: "/logos/Malcan-3.svg",
	},
	{
		name: "EVIE Bikes",
		logo: "/logos/EVIE LOGO_FA-08.png",
	},
	{
		name: "Terraworld",
		logo: "/logos/terraworld.png",
	},
	{
		name: "Andas Capital",
		logo: "/logos/Andas.svg",
	},
	{
		name: "Fundle",
		logo: "/logos/fundle.png",
	},
	{
		name: "ezdana",
		logo: "/logos/ezdana.png",
	},
	{
		name: "Proficient Premium",
		logo: "/logos/proficient-premium-logo.png",
	},
	{
		name: "AI Express",
		logo: "/logos/ai-express-logo.svg",
	},
] as const;

// Strategic partners (homepage marquee — separate from technology integration partners)
export const homepagePartners = [
	{
		name: "GKash",
		logo: "/logos/gkash.png",
	},
	{
		name: "MSC Trustgate",
		logo: "/logos/trustgate.png",
	},
	{
		name: "SSM Search",
		logo: "/truekredit/integrations/ssmsearch-logo.webp",
	},
	{
		name: "Innov8tif",
		logo: "/logos/innov8tif.png",
	},
	{
		name: "EC-Council",
		logo: "/logos/ec-council.png",
	},
	{
		name: "CTOS",
		logo: "/logos/ctos.png",
	},
	{
		name: "AWS",
		logo: "/logos/aws.svg",
	},
] as const;

type LogoItem = {
	name: string;
	logo: string;
	category?: string;
};

interface LogoCloudProps {
	className?: string;
	logos?: readonly LogoItem[];
	variant?: "partners" | "clients";
	showCategories?: boolean;
	title?: string;
	subtitle?: string;
	badge?: string;
	bottomText?: string;
	size?: "default" | "large";
	compact?: boolean;
	/** Use `div` when embedding inside another landmark (e.g. page hero). */
	asContainer?: "section" | "div";
	/** Tighter logo grid and padding (e.g. embedded in a hero card). */
	dense?: boolean;
	/** Full-width auto-scrolling logo strip (homepage client cloud). */
	layout?: "grid" | "marquee";
}

/** Repeated sets; keep in sync with globals.css (-25% = one loop). */
const MARQUEE_COPIES = 4;

function LogoMarqueeRowWrapper({
	items,
	displaySize,
	reverse = false,
	rowKey,
}: {
	items: readonly LogoItem[];
	displaySize: LogoDisplaySize;
	reverse?: boolean;
	rowKey: string;
}) {
	return (
		<LogoMarqueeRow
			items={items}
			displaySize={displaySize}
			reverse={reverse}
			rowKey={rowKey}
			copies={MARQUEE_COPIES}
		/>
	);
}

export function LogoMarquee({
	items,
	displaySize,
	rows = 2,
	reverse = false,
}: {
	items: readonly LogoItem[];
	displaySize: LogoDisplaySize;
	/** Single strip or split into two opposing rows. */
	rows?: 1 | 2;
	/** Scroll direction for a single row (false = left, true = right). */
	reverse?: boolean;
}) {
	if (rows === 1) {
		return (
			<div className="relative w-full overflow-hidden">
				<div
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent sm:w-20 md:w-28"
					aria-hidden
				/>
				<div
					className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent sm:w-20 md:w-28"
					aria-hidden
				/>
				<LogoMarqueeRowWrapper
					items={items}
					displaySize={displaySize}
					reverse={reverse}
					rowKey="single"
				/>
			</div>
		);
	}

	const midpoint = Math.ceil(items.length / 2);
	const topRow = items.slice(0, midpoint);
	const bottomRow = items.slice(midpoint);

	return (
		<div className="relative w-full overflow-hidden">
			<div
				className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent sm:w-20 md:w-28"
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent sm:w-20 md:w-28"
				aria-hidden
			/>
			<div className="logo-marquee-rows flex flex-col gap-3 md:gap-4">
				<LogoMarqueeRowWrapper
					items={topRow}
					displaySize={displaySize}
					rowKey="top"
				/>
				<LogoMarqueeRowWrapper
					items={bottomRow}
					displaySize={displaySize}
					reverse
					rowKey="bottom"
				/>
			</div>
		</div>
	);
}

const LogoCloud1 = ({
	className,
	logos,
	variant = "partners",
	showCategories = true,
	title,
	subtitle,
	badge,
	bottomText,
	size,
	compact = false,
	asContainer = "section",
	dense = false,
	layout = "grid",
}: LogoCloudProps) => {
	const isClients = variant === "clients";
	const items = logos || (isClients ? clientLogos : technologyPartners);
	const isMarquee = layout === "marquee";
	// Default to large for clients, default for partners (but smaller if compact)
	const logoSize =
		size ||
		(isMarquee && isClients
			? "large"
			: compact
				? "default"
				: isClients
					? "large"
					: "default");

	const defaultTitle = isClients
		? "Trusted by Industry Leaders"
		: "Integrated with Industry Leaders";

	const defaultSubtitle = isClients
		? "We partner with leading companies across fintech, lending, and enterprise sectors."
		: "We work with trusted partners to deliver comprehensive fintech solutions with credit intelligence, compliance, payments, and cloud infrastructure.";

	const defaultBadge = isClients ? "Our Clients" : "Partner Ecosystem";
	const Icon = isClients ? Users : Handshake;
	const Container = asContainer === "div" ? "div" : "section";
	const displaySize = toLogoDisplaySize(logoSize, dense);

	return (
		<Container
			className={cn(
				"relative w-full",
				compact
					? dense
						? "pt-0 pb-4 md:pb-5"
						: "pt-0 pb-10 md:pb-12"
					: "py-12 md:py-16",
				className,
			)}
		>
			{/* Header */}
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-5xl">
					<div
						className={cn(
							"text-center",
							compact
								? dense
									? "mb-3"
									: isMarquee
										? "mb-6 md:mb-8"
										: "mb-5"
								: "mb-12 space-y-4",
						)}
					>
						{!compact && (
							<div className="flex items-center justify-center gap-2">
								<Icon className="text-primary size-5" />
								<span className="text-primary text-sm font-medium">
									{badge || defaultBadge}
								</span>
							</div>
						)}
						<p
							className={cn(
								compact
									? "text-sm text-muted-foreground/70 uppercase tracking-wider"
									: "font-display font-medium tracking-tight text-3xl md:text-4xl",
							)}
						>
							{title || defaultTitle}
						</p>
						{!compact && (
							<p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
								{subtitle || defaultSubtitle}
							</p>
						)}
					</div>

					{/* Logo grid (non-marquee) */}
					{!isMarquee && (
						<div className="relative overflow-hidden">
							<div
								className={cn(
									"flex flex-wrap items-center justify-center",
									dense
										? "gap-x-5 gap-y-3 sm:gap-x-6 sm:gap-y-3.5"
										: logoSize === "large"
											? "gap-x-12 gap-y-8 md:gap-x-16"
											: "gap-x-10 gap-y-8 md:gap-x-14",
								)}
							>
								{items.map((item) => (
									<div
										key={item.name}
										className="group flex flex-col items-center gap-2 transition-all hover:scale-105"
									>
										<AdaptiveLogoImage
											src={item.logo}
											alt={item.name}
											displaySize={displaySize}
										/>
										{showCategories &&
											"category" in item &&
											item.category && (
												<span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
													{item.category}
												</span>
											)}
									</div>
								))}
							</div>
						</div>
					)}

					{/* Bottom text (grid layout only) */}
					{bottomText !== "" && !compact && !isMarquee && (
						<div className="mt-10 text-center">
							<p className="text-muted-foreground text-sm">
								{bottomText ||
									(isClients
										? "And many more across Malaysia"
										: "+ more integrations tailored to your specific requirements")}
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Full-width marquee */}
			{isMarquee && (
				<LogoMarquee items={items} displaySize={displaySize} />
			)}
		</Container>
	);
};

export default LogoCloud1;
