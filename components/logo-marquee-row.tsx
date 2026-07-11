"use client";

import { useEffect, useRef, useState } from "react";
import { AdaptiveLogoImage } from "@/components/logo-cloud-image";
import { cn } from "@/lib/utils";
import type { LogoDisplaySize } from "@/lib/logo-display-size";

/** Visible scroll speed — one loop (25% of track) in pixels per second. */
const MARQUEE_PIXELS_PER_SECOND = 26;

type LogoItem = {
	name: string;
	logo: string;
	/** Larger marquee slot for wordmarks that read small at default size. */
	boost?: boolean;
};

export function LogoMarqueeRow({
	items,
	displaySize,
	reverse = false,
	rowKey,
	copies = 4,
}: {
	items: readonly LogoItem[];
	displaySize: LogoDisplaySize;
	reverse?: boolean;
	rowKey: string;
	copies?: number;
}) {
	const trackRef = useRef<HTMLDivElement>(null);
	const [duration, setDuration] = useState(50);

	const marqueeItems = Array.from({ length: copies }, () => [...items]).flat();

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const updateDuration = () => {
			const loopDistance = track.scrollWidth / copies;
			setDuration(
				Math.max(loopDistance / MARQUEE_PIXELS_PER_SECOND, 12),
			);
		};

		updateDuration();

		const observer = new ResizeObserver(updateDuration);
		observer.observe(track);

		return () => observer.disconnect();
	}, [copies, items]);

	return (
		<div
			ref={trackRef}
			className={cn(
				"flex w-max items-center",
				reverse ? "logo-marquee-track-reverse" : "logo-marquee-track",
			)}
			style={{ ["--marquee-duration" as string]: `${duration}s` }}
		>
			{marqueeItems.map((item, index) => (
				<div
					key={`${rowKey}-${item.name}-${index}`}
					className="group flex shrink-0 items-center justify-center px-5 sm:px-7 md:px-9"
					aria-hidden={index >= items.length}
				>
					<AdaptiveLogoImage
						src={item.logo}
						alt={index < items.length ? item.name : ""}
						displaySize={displaySize}
						boost={item.boost}
					/>
				</div>
			))}
		</div>
	);
}
