"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	applyMailto,
	shortLocation,
	type JobId,
	type JobRole,
} from "@/lib/careers-data";

export type { JobRole };

type RoleTab = "open" | "closed";

type JobCopy = {
	title: string;
	department: string;
	location: string;
	type: string;
	summary: string;
	description: string;
	workAreas: string[];
	responsibilities: string[];
	requirements: string[];
	bonusSkills: string[];
	technologies: string[];
};

function useJobCopy() {
	const t = useTranslations("Careers");
	return (id: JobId): JobCopy => ({
		title: t(`jobs.items.${id}.title`),
		department: t(`jobs.items.${id}.department`),
		location: t(`jobs.items.${id}.location`),
		type: t(`jobs.items.${id}.type`),
		summary: t(`jobs.items.${id}.summary`),
		description: t(`jobs.items.${id}.description`),
		workAreas: t.raw(`jobs.items.${id}.workAreas`) as string[],
		responsibilities: t.raw(`jobs.items.${id}.responsibilities`) as string[],
		requirements: t.raw(`jobs.items.${id}.requirements`) as string[],
		bonusSkills: t.raw(`jobs.items.${id}.bonusSkills`) as string[],
		technologies: t.raw(`jobs.items.${id}.technologies`) as string[],
	});
}

function JobDetailList({ items }: { items: string[] }) {
	return (
		<ul className="space-y-2">
			{items.map((item) => (
				<li
					key={item}
					className="flex items-start gap-2.5 type-ui text-muted-foreground"
				>
					<span
						className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
						aria-hidden
					/>
					{item}
				</li>
			))}
		</ul>
	);
}

function JobDetailModal({
	role,
	copy,
}: {
	role: JobRole;
	copy: JobCopy;
}) {
	const t = useTranslations("Careers");
	return (
		<div className="space-y-6 pr-2 sm:pr-6">
			<DialogHeader className="space-y-3 text-left">
				<div className="flex flex-wrap items-center gap-2">
					<Badge variant="secondary">{copy.department}</Badge>
					<Badge
						variant="outline"
						className={
							role.open
								? "border-primary/20 bg-primary/5 text-primary"
								: "border-muted-foreground/30 bg-muted text-muted-foreground"
						}
					>
						{role.open ? t("jobs.status.open") : t("jobs.status.filled")}
					</Badge>
				</div>
				<DialogTitle className="type-h2-sm">{copy.title}</DialogTitle>
				<DialogDescription asChild>
					<div className="flex flex-wrap items-center gap-x-4 gap-y-1 type-ui">
						<span className="inline-flex items-center gap-1.5 text-muted-foreground">
							<MapPin className="h-3.5 w-3.5 shrink-0" />
							{copy.location}
						</span>
						<span className="inline-flex items-center gap-1.5 text-muted-foreground">
							<Briefcase className="h-3.5 w-3.5 shrink-0" />
							{copy.type}
						</span>
					</div>
				</DialogDescription>
			</DialogHeader>

			<p className="text-base leading-relaxed text-muted-foreground">
				{copy.description}
			</p>

			{copy.workAreas.length > 0 && (
				<div>
					<h4 className="mb-3 text-sm font-semibold">
						{t("jobs.modal.workOn")}
					</h4>
					<JobDetailList items={copy.workAreas} />
				</div>
			)}

			<div className="grid gap-6 sm:grid-cols-2">
				<div>
					<h4 className="mb-3 text-sm font-semibold">
						{t("jobs.modal.do")}
					</h4>
					<JobDetailList items={copy.responsibilities} />
				</div>
				<div>
					<h4 className="mb-3 text-sm font-semibold">
						{t("jobs.modal.lookingFor")}
					</h4>
					<JobDetailList items={copy.requirements} />
				</div>
				{copy.bonusSkills.length > 0 && (
					<div>
						<h4 className="mb-3 text-sm font-semibold">
							{t("jobs.modal.niceToHave")}
						</h4>
						<JobDetailList items={copy.bonusSkills} />
					</div>
				)}
				{copy.technologies.length > 0 && (
					<div>
						<h4 className="mb-3 text-sm font-semibold">
							{t("jobs.modal.whatWeUse")}
						</h4>
						<div className="flex flex-wrap gap-1.5">
							{copy.technologies.map((tech) => (
								<Badge
									key={tech}
									variant="secondary"
									className="font-normal"
								>
									{tech}
								</Badge>
							))}
						</div>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
				{role.open ? (
					<>
						<p className="type-ui text-muted-foreground">
							{t("jobs.modal.applyHint")}
						</p>
						<Button asChild className="shrink-0 gap-2">
							<a href={applyMailto(copy.title)}>
								{t("jobs.modal.apply")}
								<ArrowRight className="h-4 w-4" />
							</a>
						</Button>
					</>
				) : (
					<>
						<p className="type-ui text-muted-foreground">
							{t("jobs.modal.filledHint")}
						</p>
						<Button
							asChild
							variant="outline"
							className="shrink-0 gap-2"
						>
							<a href={applyMailto(copy.title)}>
								{t("jobs.modal.write")}
								<ArrowRight className="h-4 w-4" />
							</a>
						</Button>
					</>
				)}
			</div>
		</div>
	);
}

function RoleTabs({
	activeTab,
	onChange,
	openCount,
	closedCount,
}: {
	activeTab: RoleTab;
	onChange: (tab: RoleTab) => void;
	openCount: number;
	closedCount: number;
}) {
	const t = useTranslations("Careers");
	const tabs: { id: RoleTab; count: number }[] = [
		{ id: "open", count: openCount },
		{ id: "closed", count: closedCount },
	];

	return (
		<div
			className="inline-flex rounded-full border bg-card p-1 shadow-sm"
			role="tablist"
			aria-label={t("jobs.tabsAria")}
		>
			{tabs.map((tab) => {
				const active = activeTab === tab.id;
				return (
					<button
						key={tab.id}
						type="button"
						role="tab"
						aria-selected={active}
						onClick={() => onChange(tab.id)}
						className={cn(
							"rounded-full px-4 py-2 type-ui font-medium transition-colors",
							active
								? "bg-foreground text-background shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						{t(`jobs.tabs.${tab.id}`)} ({tab.count})
					</button>
				);
			})}
		</div>
	);
}

function RoleRow({
	role,
	copy,
	onSelect,
}: {
	role: JobRole;
	copy: JobCopy;
	onSelect: () => void;
}) {
	const t = useTranslations("Careers");
	return (
		<button
			type="button"
			onClick={onSelect}
			className={cn(
				"grid w-full gap-2 border-b px-5 py-5 text-left transition-colors last:border-b-0 md:grid-cols-[minmax(0,2.1fr)_1fr_1.3fr_0.8fr_7.5rem] md:items-center md:gap-5 md:px-6",
				role.open ? "hover:bg-muted/40" : "hover:bg-muted/30",
			)}
		>
			<div className="min-w-0">
				<h3
					className={cn(
						"type-subhead",
						role.open ? "text-foreground" : "text-muted-foreground",
					)}
				>
					{copy.title}
				</h3>
				<p
					className={cn(
						"mt-1 type-ui",
						role.open
							? "text-muted-foreground"
							: "text-muted-foreground/70",
					)}
				>
					{copy.summary}
				</p>
				<p className="mt-2 type-ui text-muted-foreground md:hidden">
					{copy.department}
					<span className="mx-1.5 text-border" aria-hidden>
						·
					</span>
					{shortLocation(copy.location)}
					<span className="mx-1.5 text-border" aria-hidden>
						·
					</span>
					{copy.type}
				</p>
			</div>
			<p
				className={cn(
					"hidden type-ui md:block",
					role.open
						? "text-muted-foreground"
						: "text-muted-foreground/70",
				)}
			>
				{copy.department}
			</p>
			<p
				className={cn(
					"hidden type-ui md:block",
					role.open
						? "text-muted-foreground"
						: "text-muted-foreground/70",
				)}
			>
				{shortLocation(copy.location)}
			</p>
			<p
				className={cn(
					"hidden type-ui md:block",
					role.open
						? "text-muted-foreground"
						: "text-muted-foreground/70",
				)}
			>
				{copy.type}
			</p>
			<div className="mt-1 text-left md:mt-0 md:text-right">
				{role.open ? (
					<span className="inline-flex items-center gap-1.5 type-ui font-medium text-primary">
						{t("jobs.details")}
						<ArrowRight className="h-3.5 w-3.5" />
					</span>
				) : (
					<span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-sm font-medium text-muted-foreground">
						{t("jobs.status.filled")}
					</span>
				)}
			</div>
		</button>
	);
}

export function CareersJobs({ roles }: { roles: JobRole[] }) {
	const t = useTranslations("Careers");
	const getCopy = useJobCopy();
	const openRoles = roles.filter((r) => r.open);
	const closedRoles = roles.filter((r) => !r.open);
	const [activeTab, setActiveTab] = useState<RoleTab>("open");
	const [selectedRole, setSelectedRole] = useState<JobRole | null>(null);

	const visibleRoles = activeTab === "open" ? openRoles : closedRoles;

	function handleTabChange(tab: RoleTab) {
		setActiveTab(tab);
		setSelectedRole(null);
	}

	return (
		<section
			id="open-roles"
			aria-labelledby="careers-roles-heading"
			className="scroll-mt-24 border-t bg-background py-16 md:py-20"
		>
			<div className="mx-auto max-w-6xl px-6">
				<div className="mb-8 flex flex-wrap items-end justify-between gap-5">
					<motion.div
						className="max-w-xl"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5 }}
					>
						<p className="mb-3 type-eyebrow text-primary">
							{t("jobs.eyebrow")}
						</p>
						<h2 id="careers-roles-heading" className="type-h2">
							{t("jobs.title")}
						</h2>
						<p className="mt-4 type-lede text-muted-foreground">
							{t("jobs.lede")}
						</p>
					</motion.div>
					<RoleTabs
						activeTab={activeTab}
						onChange={handleTabChange}
						openCount={openRoles.length}
						closedCount={closedRoles.length}
					/>
				</div>

				<div role="tabpanel">
					{visibleRoles.length === 0 ? (
						<div className="rounded-2xl border border-dashed px-6 py-14 text-center">
							<p className="text-base font-medium">
								{activeTab === "open"
									? t("jobs.empty.openTitle")
									: t("jobs.empty.closedTitle")}
							</p>
							<p className="mt-2 type-ui text-muted-foreground">
								{activeTab === "open"
									? t("jobs.empty.openBody")
									: t("jobs.empty.closedBody")}
							</p>
						</div>
					) : (
						<div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
							<div className="hidden grid-cols-[minmax(0,2.1fr)_1fr_1.3fr_0.8fr_7.5rem] gap-5 border-b bg-muted/40 px-6 py-3 type-mono-label uppercase tracking-[0.06em] text-muted-foreground md:grid">
								<div>{t("jobs.columns.role")}</div>
								<div>{t("jobs.columns.team")}</div>
								<div>{t("jobs.columns.location")}</div>
								<div>{t("jobs.columns.type")}</div>
								<div />
							</div>
							{visibleRoles.map((role) => (
								<RoleRow
									key={role.id}
									role={role}
									copy={getCopy(role.id)}
									onSelect={() => setSelectedRole(role)}
								/>
							))}
						</div>
					)}
				</div>

				<p className="mt-4 type-ui text-muted-foreground">
					{activeTab === "open"
						? t("jobs.footer.open")
						: t("jobs.footer.closed")}
				</p>
			</div>

			<Dialog
				open={selectedRole !== null}
				onOpenChange={(open) => !open && setSelectedRole(null)}
			>
				<DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-6 md:p-8">
					{selectedRole && (
						<JobDetailModal
							role={selectedRole}
							copy={getCopy(selectedRole.id)}
						/>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
}
