import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Globe,
  LayoutDashboard,
  MonitorPlay,
  Server,
} from "lucide-react";

export const LEGAL_LAST_UPDATED = "September 2026";
export const LEGAL_DATE_MODIFIED = "2026-09-01";

export const legalPolicies = [
  { href: "/cybersecurity", label: "Cybersecurity", short: "Security" },
  { href: "/pdpa", label: "PDPA Notice", short: "PDPA" },
  { href: "/privacy", label: "Privacy Policy", short: "Privacy" },
  { href: "/terms", label: "Terms of Use", short: "Terms" },
] as const;

export type LegalPolicyHref = (typeof legalPolicies)[number]["href"];

export type CoveredSystem = {
  host: string;
  role: string;
  icon: LucideIcon;
};

/** Public Truestack hosts covered by the policy pages. */
export const coveredSystems: CoveredSystem[] = [
  { host: "truestack.my", role: "Marketing site", icon: Globe },
  { host: "admin.truestack.my", role: "Operations console", icon: LayoutDashboard },
  { host: "developers.truestack.my", role: "Developer portal", icon: Code2 },
  { host: "demo.truestack.my", role: "Product demonstration", icon: MonitorPlay },
  { host: "demo-admin.truestack.my", role: "Demo administration", icon: LayoutDashboard },
  { host: "api.truestack.my", role: "Platform APIs", icon: Server },
];

export const coveredHosts = coveredSystems.map((system) => system.host);

export const identityApiHost = "api.truestack.my";

export type LegalTocItem = {
  id: string;
  label: string;
};

export const cybersecurityToc: LegalTocItem[] = [
  { id: "purpose", label: "Purpose and scope" },
  { id: "systems", label: "Systems we cover" },
  { id: "principles", label: "Security principles" },
  { id: "controls", label: "Controls we apply" },
  { id: "services", label: "Service considerations" },
  { id: "incidents", label: "Incidents" },
  { id: "responsibilities", label: "Your responsibilities" },
  { id: "review", label: "Policy review" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export const pdpaToc: LegalTocItem[] = [
  { id: "scope", label: "Scope of this notice" },
  { id: "services", label: "Services covered" },
  { id: "data", label: "Personal data we process" },
  { id: "purposes", label: "Why we process data" },
  { id: "roles", label: "Controller and processor" },
  { id: "disclosure", label: "Disclosure and transfers" },
  { id: "processors", label: "Third-party processors" },
  { id: "security", label: "Security and retention" },
  { id: "rights", label: "Your rights" },
  { id: "kyc", label: "KYC consent" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export const privacyToc: LegalTocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use it" },
  { id: "disclosure", label: "Who we share it with" },
  { id: "security", label: "Security" },
  { id: "retention", label: "Retention" },
  { id: "rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "links", label: "Third-party links" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export const termsToc: LegalTocItem[] = [
  { id: "acceptance", label: "Acceptance" },
  { id: "about", label: "About Truestack" },
  { id: "scope", label: "What these terms cover" },
  { id: "use", label: "Acceptable use" },
  { id: "demo", label: "Demos and developer access" },
  { id: "ip", label: "Intellectual property" },
  { id: "accuracy", label: "Information accuracy" },
  { id: "advice", label: "No professional advice" },
  { id: "links", label: "Third-party links" },
  { id: "liability", label: "Liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "changes", label: "Modifications" },
  { id: "law", label: "Governing law" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];
