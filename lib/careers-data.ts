export type JobEmploymentType = "FULL_TIME" | "INTERN";

export type JobId =
	| "full-stack-web-developer"
	| "software-development-intern"
	| "marketing-sales-executive"
	| "client-success-executive"
	| "admin-executive"
	| "backend-developer"
	| "qa-engineer";

export type JobRole = {
	id: JobId;
	open: boolean;
	employmentType: JobEmploymentType;
	hybrid: boolean;
	engineering: boolean;
};

export const APPLY_EMAIL = "hello@truestack.my";

export function applyMailto(roleTitle?: string) {
	const subject = roleTitle ? `Application — ${roleTitle}` : "Application";
	return `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

/** Table-friendly location: drop the country suffix. */
export function shortLocation(location: string) {
	return location.replace(", Malaysia", "");
}

export const jobRoles: JobRole[] = [
	{
		id: "full-stack-web-developer",
		open: true,
		employmentType: "FULL_TIME",
		hybrid: true,
		engineering: true,
	},
	{
		id: "software-development-intern",
		open: true,
		employmentType: "INTERN",
		hybrid: true,
		engineering: true,
	},
	{
		id: "marketing-sales-executive",
		open: true,
		employmentType: "FULL_TIME",
		hybrid: false,
		engineering: false,
	},
	{
		id: "client-success-executive",
		open: true,
		employmentType: "FULL_TIME",
		hybrid: false,
		engineering: false,
	},
	{
		id: "admin-executive",
		open: true,
		employmentType: "FULL_TIME",
		hybrid: false,
		engineering: false,
	},
	{
		id: "backend-developer",
		open: false,
		employmentType: "FULL_TIME",
		hybrid: true,
		engineering: true,
	},
	{
		id: "qa-engineer",
		open: false,
		employmentType: "FULL_TIME",
		hybrid: true,
		engineering: true,
	},
];
