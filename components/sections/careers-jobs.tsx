"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  MapPin,
  Sparkles,
  CircleOff,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { JobRole } from "@/lib/careers-data";

export type { JobRole };

type RoleTab = "open" | "closed";

function JobDetailList({
  items,
  muted = false,
}: {
  items: string[];
  muted?: boolean;
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm text-muted-foreground"
        >
          <CheckCircle2
            className={cn(
              "mt-0.5 h-4 w-4 shrink-0",
              muted ? "text-primary/50" : "text-primary"
            )}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function JobDetailModal({ role }: { role: JobRole }) {
  return (
    <div className="space-y-6 pr-6">
      <DialogHeader className="space-y-3 text-left">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{role.department}</Badge>
          {role.open ? (
            <Badge
              variant="outline"
              className="gap-1 border-primary/20 bg-primary/5 text-primary"
            >
              <Sparkles className="h-3 w-3" />
              Hiring
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="gap-1 border-muted-foreground/30 bg-muted text-muted-foreground"
            >
              <CircleOff className="h-3 w-3" />
              Position filled
            </Badge>
          )}
        </div>
        <DialogTitle className="font-display text-2xl font-medium leading-snug md:text-3xl">
          {role.title}
        </DialogTitle>
        <DialogDescription asChild>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {role.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Briefcase className="h-3.5 w-3.5 shrink-0" />
              {role.type}
            </span>
          </div>
        </DialogDescription>
      </DialogHeader>

      <p className="text-base leading-relaxed text-muted-foreground">
        {role.description}
      </p>

      {role.workAreas && role.workAreas.length > 0 && (
        <div>
          <h4 className="mb-3 text-sm font-semibold">What You&apos;ll Work On</h4>
          <JobDetailList items={role.workAreas} />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="mb-3 text-sm font-semibold">Responsibilities</h4>
          <JobDetailList items={role.responsibilities} />
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Requirements</h4>
          <JobDetailList items={role.requirements} />
        </div>
        {role.bonusSkills && role.bonusSkills.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-semibold">Bonus Skills</h4>
            <JobDetailList items={role.bonusSkills} muted />
          </div>
        )}
        {role.technologies && role.technologies.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-semibold">Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {role.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {role.whyJoin.length > 0 && (
        <div className="rounded-xl bg-primary/5 p-5">
          <h4 className="mb-3 text-sm font-semibold">Why Join Us</h4>
          <JobDetailList items={role.whyJoin} />
        </div>
      )}

      <div className="flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
        {role.open ? (
          <>
            <p className="text-sm text-muted-foreground">
              Interested? Send us your CV and mention this role.
            </p>
            <Button asChild className="shrink-0 gap-2">
              <Link href="/contact">
                Apply for this role
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">
              This position is currently filled. You can still introduce
              yourself — we&apos;re always interested in meeting talented people.
            </p>
            <Button asChild variant="outline" className="shrink-0 gap-2">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

function JobCard({
  role,
  dark,
  onSelect,
}: {
  role: JobRole;
  dark: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group w-full rounded-xl border text-left shadow-sm transition-all md:col-span-1",
        dark
          ? role.open
            ? "border-slate-800 bg-slate-900/50 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-lg hover:shadow-blue-500/5"
            : "border-slate-800/80 bg-slate-900/30 opacity-80 hover:border-slate-600 hover:bg-slate-900/50 hover:opacity-100"
          : role.open
            ? "border-border bg-card hover:border-primary/30 hover:shadow-md"
            : "border-border/80 bg-muted/20 opacity-80 hover:opacity-100"
      )}
    >
      <div className="flex flex-col gap-2.5 p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge
            variant="secondary"
            className={cn(
              "text-[11px] font-medium",
              dark && "border-slate-700 bg-slate-800 text-slate-200"
            )}
          >
            {role.department}
          </Badge>
          {role.open ? (
            <Badge
              variant="outline"
              className={cn(
                "gap-0.5 text-[11px]",
                dark
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : "border-primary/20 bg-primary/5 text-primary"
              )}
            >
              <Sparkles className="h-2.5 w-2.5" />
              Hiring
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className={cn(
                "gap-0.5 text-[11px]",
                dark
                  ? "border-slate-600 bg-slate-800/80 text-slate-400"
                  : "border-muted-foreground/30 text-muted-foreground"
              )}
            >
              <CircleOff className="h-2.5 w-2.5" />
              Filled
            </Badge>
          )}
        </div>

        <div>
          <h3
            className={cn(
              "text-sm font-semibold leading-snug md:text-base",
              dark && "text-white"
            )}
          >
            {role.title}
          </h3>
          <div
            className={cn(
              "mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[11px]",
              dark ? "text-slate-500" : "text-muted-foreground"
            )}
          >
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0" />
              {role.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-3 w-3 shrink-0" />
              {role.type}
            </span>
          </div>
        </div>

        <p
          className={cn(
            "line-clamp-2 text-xs leading-relaxed",
            dark ? "text-slate-400" : "text-muted-foreground"
          )}
        >
          {role.description}
        </p>

        <span
          className={cn(
            "inline-flex items-center gap-1 text-xs font-medium transition-colors",
            dark
              ? role.open
                ? "text-blue-400 group-hover:text-blue-300"
                : "text-slate-500 group-hover:text-slate-300"
              : role.open
                ? "text-primary group-hover:text-primary/80"
                : "text-muted-foreground group-hover:text-foreground"
          )}
        >
          View details
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </button>
  );
}

function RoleTabs({
  activeTab,
  onChange,
  openCount,
  closedCount,
  dark,
}: {
  activeTab: RoleTab;
  onChange: (tab: RoleTab) => void;
  openCount: number;
  closedCount: number;
  dark: boolean;
}) {
  const tabs: { id: RoleTab; label: string; count: number }[] = [
    { id: "open", label: "Open", count: openCount },
    { id: "closed", label: "Closed", count: closedCount },
  ];

  return (
    <div
      className={cn(
        "inline-flex rounded-lg border p-1",
        dark ? "border-slate-700 bg-slate-900/60" : "border-border bg-muted/50"
      )}
      role="tablist"
      aria-label="Job listings"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors",
            activeTab === tab.id
              ? dark
                ? "bg-slate-800 text-white shadow-sm"
                : "bg-background text-foreground shadow-sm"
              : dark
                ? "text-slate-400 hover:text-slate-200"
                : "text-muted-foreground hover:text-foreground"
          )}
        >
          {tab.label}
          <span
            className={cn(
              "tabular-nums",
              activeTab === tab.id
                ? dark
                  ? "text-blue-400"
                  : "text-primary"
                : "opacity-60"
            )}
          >
            ({tab.count})
          </span>
        </button>
      ))}
    </div>
  );
}

function EmptyTabState({
  tab,
  dark,
}: {
  tab: RoleTab;
  dark: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed px-6 py-14 text-center",
        dark
          ? "border-slate-700 bg-slate-900/30"
          : "border-border bg-muted/20"
      )}
    >
      <p className={cn("text-base font-medium", dark && "text-white")}>
        {tab === "open"
          ? "No open positions right now"
          : "No closed positions to show"}
      </p>
      <p
        className={cn(
          "mt-2 text-sm",
          dark ? "text-slate-400" : "text-muted-foreground"
        )}
      >
        {tab === "open"
          ? "Check back soon — we're always looking for great people."
          : "Previously filled roles will appear here."}
      </p>
    </div>
  );
}

export function CareersJobs({
  roles,
  variant = "light",
}: {
  roles: JobRole[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
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
    <>
      <RoleTabs
        activeTab={activeTab}
        onChange={handleTabChange}
        openCount={openRoles.length}
        closedCount={closedRoles.length}
        dark={dark}
      />

      <div className="mt-6" role="tabpanel">
        {visibleRoles.length === 0 ? (
          <EmptyTabState tab={activeTab} dark={dark} />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {visibleRoles.map((role) => (
              <JobCard
                key={role.id}
                role={role}
                dark={dark}
                onSelect={() => setSelectedRole(role)}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog
        open={selectedRole !== null}
        onOpenChange={(open) => !open && setSelectedRole(null)}
      >
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-6 md:p-8">
          {selectedRole && <JobDetailModal role={selectedRole} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
