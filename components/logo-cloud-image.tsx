"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { LogoDisplaySize } from "@/lib/logo-display-size";

type LogoShape = "square" | "wide" | "medium" | "tall";

function getLogoShape(ratio: number): LogoShape {
	if (ratio <= 1.35) return "square";
	if (ratio >= 2.4) return "wide";
	if (ratio <= 0.75) return "tall";
	return "medium";
}

const slotClasses: Record<LogoDisplaySize, Record<LogoShape, string>> = {
	dense: {
		square: "h-9 w-9 sm:h-10 sm:w-10",
		tall: "h-9 w-14 sm:h-10 sm:w-16",
		medium: "h-8 w-24 sm:h-9 sm:w-28",
		wide: "h-8 w-32 sm:h-9 sm:w-36",
	},
	default: {
		square: "h-12 w-12 md:h-14 md:w-14",
		tall: "h-12 w-20 md:h-14 md:w-24",
		medium: "h-10 w-28 md:h-12 md:w-32",
		wide: "h-10 w-36 md:h-12 md:w-44",
	},
	large: {
		square: "h-12 w-12 md:h-14 md:w-14",
		tall: "h-12 w-20 md:h-14 md:w-20",
		medium: "h-10 w-28 md:h-12 md:w-32",
		wide: "h-10 w-40 md:h-12 md:w-48",
	},
};

/** Slightly larger slots for wordmarks that need a bit more visual weight. */
const boostedSlotClasses: Record<LogoDisplaySize, Record<LogoShape, string>> = {
	dense: {
		square: "h-10 w-10 sm:h-11 sm:w-11",
		tall: "h-10 w-16 sm:h-11 sm:w-20",
		medium: "h-9 w-28 sm:h-10 sm:w-32",
		wide: "h-9 w-40 sm:h-10 sm:w-44",
	},
	default: {
		square: "h-12 w-12 md:h-14 md:w-14",
		tall: "h-12 w-20 md:h-14 md:w-24",
		medium: "h-11 w-32 md:h-12 md:w-36",
		wide: "h-11 w-44 md:h-12 md:w-52",
	},
	large: {
		square: "h-12 w-12 md:h-14 md:w-14",
		tall: "h-12 w-20 md:h-14 md:w-24",
		medium: "h-11 w-32 md:h-12 md:w-40",
		wide: "h-11 w-48 md:h-12 md:w-56",
	},
};

const intrinsicSize: Record<LogoShape, { width: number; height: number }> = {
	square: { width: 128, height: 128 },
	tall: { width: 96, height: 128 },
	medium: { width: 140, height: 56 },
	wide: { width: 200, height: 48 },
};

interface AdaptiveLogoImageProps {
	src: string;
	alt: string;
	displaySize?: LogoDisplaySize;
	className?: string;
	/** Show logo in full color instead of muted grayscale. */
	color?: boolean;
	/** Use a larger slot — for wordmarks that read small at default size. */
	boost?: boolean;
}

export function AdaptiveLogoImage({
	src,
	alt,
	displaySize = "default",
	className,
	color = false,
	boost = false,
}: AdaptiveLogoImageProps) {
	// Wide wordmarks start in the wide slot so boost applies before onLoad.
	const [shape, setShape] = useState<LogoShape>(boost ? "wide" : "medium");

	const onLoad = useCallback(
		(e: React.SyntheticEvent<HTMLImageElement>) => {
			const img = e.currentTarget;
			if (img.naturalWidth > 0 && img.naturalHeight > 0) {
				setShape(getLogoShape(img.naturalWidth / img.naturalHeight));
			}
		},
		[],
	);

	const { width, height } = intrinsicSize[shape];
	const slots = boost ? boostedSlotClasses : slotClasses;

	return (
		<div
			className={cn(
				"flex items-center justify-center",
				slots[displaySize][shape],
				className,
			)}
		>
			<Image
				src={src}
				alt={alt}
				width={boost ? 240 : width}
				height={boost ? 72 : height}
				onLoad={onLoad}
				className={cn(
					"max-h-full max-w-full object-contain transition-all",
					color
						? "opacity-100"
						: boost
							? "opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0"
							: "opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0",
				)}
				style={{ width: "auto", height: "auto" }}
			/>
		</div>
	);
}
