import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneBezel({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-[1.85rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl",
				className,
			)}
		>
			<div className="overflow-hidden rounded-[1.45rem] bg-slate-900">
				{children}
			</div>
		</div>
	);
}
