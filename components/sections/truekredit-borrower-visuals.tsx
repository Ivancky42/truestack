import Image from "next/image";
import { cn } from "@/lib/utils";

export const BORROWER_SHOTS = {
	webDashboard: {
		src: "/truekredit/borrower_web_dashboard_screenshot.png",
		alt: "TrueKredit Pro borrower website — outstanding balance, next payment and loans on a branded dashboard",
		width: 1440,
		height: 938,
	},
	webApply: {
		src: "/truekredit/borrower_web_apply_screenshot.png",
		alt: "TrueKredit Pro borrower website — apply for a loan with amount, tenure and monthly repayment on screen",
		width: 1440,
		height: 938,
	},
	webSign: {
		src: "/truekredit/borrower_web_sign_screenshot.png",
		alt: "TrueKredit Pro borrower website — digital signing of a loan agreement with an on-screen audit trail",
		width: 1440,
		height: 938,
	},
	appHome: {
		src: "/truekredit/borrower_app_home_mockup.png",
		alt: "TrueKredit Pro borrower app — home screen with outstanding balance, next payment and a signing reminder",
		width: 618,
		height: 1186,
	},
	appApply: {
		src: "/truekredit/borrower_app_apply_mockup.png",
		alt: "TrueKredit Pro borrower app — choose what the loan is for before setting an amount",
		width: 618,
		height: 1186,
	},
	appPay: {
		src: "/truekredit/borrower_app_pay_mockup.png",
		alt: "TrueKredit Pro borrower app — pay an instalment by FPX, DuitNow QR or debit card",
		width: 618,
		height: 1186,
	},
	appPhones: {
		src: "/truekredit/borrower_app_phones_collage.png",
		alt: "TrueKredit Pro borrower app — home, apply and pay screens on iPhone",
		width: 2400,
		height: 1500,
	},
} as const;

export const APP_SHOTS = [
	BORROWER_SHOTS.appHome,
	BORROWER_SHOTS.appApply,
	BORROWER_SHOTS.appPay,
] as const;

function AppPhone({
	shot,
	sizes,
}: {
	shot: (typeof APP_SHOTS)[number];
	sizes: string;
}) {
	return (
		<Image
			src={shot.src}
			alt={shot.alt}
			width={shot.width}
			height={shot.height}
			quality={100}
			unoptimized
			loading="eager"
			sizes={sizes}
			className="h-auto w-full"
		/>
	);
}

export function BorrowerAppPhones({
	className,
}: {
	className?: string;
}) {
	return (
		<div className={cn("relative h-full w-full overflow-hidden bg-muted/30", className)}>
			<Image
				src={BORROWER_SHOTS.appPhones.src}
				alt={BORROWER_SHOTS.appPhones.alt}
				width={BORROWER_SHOTS.appPhones.width}
				height={BORROWER_SHOTS.appPhones.height}
				quality={100}
				unoptimized
				sizes="(max-width: 1080px) calc(100vw - 3rem), 1080px"
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
}

export function BorrowerPortalCollage({
	className,
	web = BORROWER_SHOTS.webDashboard,
	phone = BORROWER_SHOTS.appHome,
}: {
	className?: string;
	web?: (typeof BORROWER_SHOTS)[keyof typeof BORROWER_SHOTS];
	phone?: (typeof APP_SHOTS)[number];
}) {
	return (
		<div className={cn("relative pb-8 sm:pb-10 md:pb-12", className)}>
			<div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
				<Image
					src={web.src}
					alt={web.alt}
					width={web.width}
					height={web.height}
					quality={100}
					unoptimized
					sizes="(max-width: 1080px) 100vw, 1080px"
					className="h-auto w-full"
				/>
			</div>
			<div className="absolute right-3 -bottom-2 hidden w-[132px] sm:right-6 sm:block md:right-10 md:w-[168px] lg:-bottom-4 lg:w-[196px]">
				<AppPhone
					shot={phone}
					sizes="(max-width: 768px) 132px, 196px"
				/>
			</div>
		</div>
	);
}

export function BorrowerPhoneOverlay({
	className,
	shot = BORROWER_SHOTS.appHome,
	sizes = "180px",
}: {
	className?: string;
	shot?: (typeof APP_SHOTS)[number];
	sizes?: string;
}) {
	return (
		<div className={cn("pointer-events-none", className)}>
			<AppPhone shot={shot} sizes={sizes} />
		</div>
	);
}
