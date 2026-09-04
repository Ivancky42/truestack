"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award, Globe, Smartphone, Store } from "lucide-react";
import {
	BORROWER_SHOTS,
	BorrowerAppPhones,
} from "@/components/sections/truekredit-borrower-visuals";
import { cn } from "@/lib/utils";

const ADMIN_SHOT = {
	src: "/truekredit/hero_dashboard_screenshot.png",
	width: 3368,
	height: 2662,
} as const;

const CHANNELS = [
	{
		id: "walkin",
		editions: ["standard", "pro"] as readonly ("standard" | "pro")[],
	},
	{
		id: "website",
		editions: ["pro"] as readonly ("standard" | "pro")[],
	},
	{
		id: "app",
		editions: ["pro"] as readonly ("standard" | "pro")[],
	},
] as const;

function ChannelShot({
	shot,
	priority = false,
}: {
	shot: { src: string; alt: string; width: number; height: number };
	priority?: boolean;
}) {
	return (
		<Image
			src={shot.src}
			alt={shot.alt}
			width={shot.width}
			height={shot.height}
			quality={100}
			unoptimized
			priority={priority}
			loading={priority ? undefined : "eager"}
			sizes="(max-width: 1080px) 100vw, 1080px"
			className="h-full w-full object-cover object-top"
		/>
	);
}

function ChannelPanel({
	on,
	children,
}: {
	on: boolean;
	children: ReactNode;
}) {
	return (
		<div
			className={cn(
				"absolute inset-0 transition-opacity duration-200",
				on ? "opacity-100" : "pointer-events-none opacity-0",
			)}
			aria-hidden={!on}
		>
			{children}
		</div>
	);
}

function ChannelVisual({
	active,
	adminAlt,
}: {
	active: (typeof CHANNELS)[number]["id"];
	adminAlt: string;
}) {
	return (
		<>
			<ChannelPanel on={active === "walkin"}>
				<ChannelShot
					shot={{ ...ADMIN_SHOT, alt: adminAlt }}
					priority
				/>
			</ChannelPanel>
			<ChannelPanel on={active === "website"}>
				<ChannelShot shot={BORROWER_SHOTS.webDashboard} />
			</ChannelPanel>
			<ChannelPanel on={active === "app"}>
				<BorrowerAppPhones />
			</ChannelPanel>
		</>
	);
}

export function TrueKreditChannels() {
	const t = useTranslations("TrueKredit");
	const [active, setActive] = useState(0);
	const channel = CHANNELS[active];

	return (
		<section
			id="channels"
			aria-labelledby="truekredit-channels-heading"
			className="scroll-mt-20 border-t bg-background py-12 md:py-16"
		>
			<div className="mx-auto max-w-6xl px-6">
				<motion.div
					className="mb-6 max-w-[44em]"
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
				>
					<p className="type-eyebrow mb-3 text-primary">
						{t("channels.eyebrow")}
					</p>
					<h2 id="truekredit-channels-heading" className="type-h2">
						{t("channels.title")}
					</h2>
					<p className="mt-3.5 type-lede text-muted-foreground">
						{t("channels.lede")}
					</p>
				</motion.div>

				<motion.div
					id="borrower"
					className="scroll-mt-20 overflow-hidden rounded-2xl border bg-card shadow-sm"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, delay: 0.08 }}
				>
					<div className="relative aspect-16/10 overflow-hidden bg-muted/30">
						<ChannelVisual
							active={channel.id}
							adminAlt={t("channels.adminAlt")}
						/>
					</div>

					<div
						role="tablist"
						aria-label={t("channels.tablistAria")}
						className="grid border-t sm:grid-cols-3"
					>
						{CHANNELS.map((item, index) => {
							const on = index === active;
							const Icon =
								item.id === "walkin"
									? Store
									: item.id === "website"
										? Globe
										: Smartphone;
							return (
								<button
									key={item.id}
									type="button"
									role="tab"
									aria-selected={on}
									onClick={() => setActive(index)}
									className={cn(
										"flex flex-col gap-1.5 border-t px-4 py-3 text-left transition-colors sm:border-t-0 sm:px-5 sm:py-4",
										index > 0 && "sm:border-l",
										on
											? item.id === "walkin"
												? "bg-background shadow-[inset_0_2px_0_0_var(--color-primary)]"
												: "bg-background shadow-[inset_0_2px_0_0_var(--color-violet-600)]"
											: "bg-muted/20 text-muted-foreground hover:bg-background/80 hover:text-foreground",
									)}
								>
									<div className="flex flex-wrap items-center gap-2">
										<Icon
											className={cn(
												"size-3.5",
												on
													? "text-primary"
													: "text-muted-foreground",
											)}
											aria-hidden
										/>
										<span className="type-ui font-semibold text-foreground">
											{t(`channels.items.${item.id}.label`)}
										</span>
										{item.editions.includes("standard") ? (
											<span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 type-micro font-semibold uppercase tracking-wider text-primary">
												{t("channels.standard")}
											</span>
										) : null}
										{item.editions.includes("pro") ? (
											<span className="inline-flex items-center gap-1 rounded-full bg-violet-500/10 px-2 py-0.5 type-micro font-semibold uppercase tracking-wider text-violet-700">
												<Award className="size-3" />
												{t("channels.pro")}
											</span>
										) : null}
									</div>
									<p className="type-ui">
										<span className="font-medium text-foreground">
											{t(`channels.items.${item.id}.title`)}.
										</span>{" "}
										<span
											className={cn(
												"hidden sm:inline",
												on
													? "text-muted-foreground"
													: "",
											)}
										>
											{t(`channels.items.${item.id}.desc`)}
										</span>
									</p>
								</button>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
