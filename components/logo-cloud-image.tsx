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
}

export function AdaptiveLogoImage({
	src,
	alt,
	displaySize = "default",
	className,
}: AdaptiveLogoImageProps) {
	const [shape, setShape] = useState<LogoShape>("medium");

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

	return (
		<div
			className={cn(
				"flex items-center justify-center",
				slotClasses[displaySize][shape],
				className,
			)}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				onLoad={onLoad}
				className="max-h-full max-w-full object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
				style={{ width: "auto", height: "auto" }}
			/>
		</div>
	);
}
