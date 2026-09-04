import type { JobRole } from "@/lib/careers-data";
import { orgAddress, orgEmail, orgLogo, siteName, siteUrl } from "@/lib/seo-defaults";

const baseUrl = siteUrl;

export const CAREERS_PAGE_PATH = "/careers";
export const CAREERS_PAGE_URL = `${baseUrl}${CAREERS_PAGE_PATH}`;

/** Update when open roles change — used in JobPosting datePosted */
export const CAREERS_JOBS_DATE_POSTED = "2026-05-01";

export const CAREERS_KEYWORDS = [
	"Truestack careers",
	"Truestack jobs",
	"jobs Kuala Lumpur Malaysia",
	"tech jobs Kuala Lumpur",
	"fintech jobs Malaysia",
	"software developer jobs Malaysia",
	"full-stack developer Malaysia",
	"software intern Malaysia",
	"B2B sales jobs Kuala Lumpur",
	"client success jobs Malaysia",
	"admin jobs Kuala Lumpur",
	"hybrid software jobs Malaysia",
	"tech company careers Malaysia",
	"TrueStack careers",
	"TrueStack jobs KL",
] as const;

export type JobPostingCopy = {
	title: string;
	description: string;
	department: string;
	workAreas: string[];
	responsibilities: string[];
	requirements: string[];
	bonusSkills: string[];
	technologies: string[];
};

export type CareersSchemaCopy = {
	webpageName: string;
	webpageDescription: string;
	inLanguage: string;
	breadcrumbHome: string;
	breadcrumbCurrent: string;
	jobListName: string;
	industryEngineering: string;
	industryOther: string;
	headings: {
		workOn: string;
		responsibilities: string;
		requirements: string;
		bonus: string;
		tech: string;
	};
};

export type JobRoleWithCopy = JobRole & JobPostingCopy;

export function jobPostingDescription(
	role: JobRoleWithCopy,
	headings: CareersSchemaCopy["headings"],
): string {
	const sections = [role.description];

	if (role.workAreas.length) {
		sections.push(
			`\n\n${headings.workOn}\n${role.workAreas.map((item) => `• ${item}`).join("\n")}`,
		);
	}

	sections.push(
		`\n\n${headings.responsibilities}\n${role.responsibilities.map((item) => `• ${item}`).join("\n")}`,
		`\n\n${headings.requirements}\n${role.requirements.map((item) => `• ${item}`).join("\n")}`,
	);

	if (role.bonusSkills.length) {
		sections.push(
			`\n\n${headings.bonus}\n${role.bonusSkills.map((item) => `• ${item}`).join("\n")}`,
		);
	}

	if (role.technologies.length) {
		sections.push(`\n\n${headings.tech} ${role.technologies.join(", ")}`);
	}

	return sections.join("");
}

export function buildJobPostingSchema(
	role: JobRoleWithCopy,
	copy: CareersSchemaCopy,
) {
	return {
		"@type": "JobPosting",
		"@id": `${CAREERS_PAGE_URL}#job-${role.id}`,
		title: role.title,
		description: jobPostingDescription(role, copy.headings),
		identifier: {
			"@type": "PropertyValue",
			name: "Truestack",
			value: role.id,
		},
		datePosted: CAREERS_JOBS_DATE_POSTED,
		validThrough: "2026-12-31",
		employmentType: role.employmentType,
		hiringOrganization: {
			"@type": "Organization",
			"@id": `${baseUrl}/#organization`,
			name: siteName,
			sameAs: baseUrl,
			logo: `${baseUrl}${orgLogo.url}`,
		},
		jobLocation: {
			"@type": "Place",
			address: {
				"@type": "PostalAddress",
				streetAddress: orgAddress.streetAddress,
				addressLocality: orgAddress.addressLocality,
				addressRegion: orgAddress.addressRegion,
				postalCode: orgAddress.postalCode,
				addressCountry: orgAddress.addressCountry,
			},
		},
		...(role.hybrid
			? {
					applicantLocationRequirements: {
						"@type": "Country",
						name: "Malaysia",
					},
				}
			: {}),
		directApply: true,
		applicationContact: {
			"@type": "ContactPoint",
			contactType: "HR",
			email: orgEmail,
			url: `${baseUrl}/contact`,
		},
		url: `${CAREERS_PAGE_URL}#open-roles`,
		industry: role.engineering
			? copy.industryEngineering
			: copy.industryOther,
	};
}

export function buildCareersJsonLd(
	roles: JobRoleWithCopy[],
	copy: CareersSchemaCopy,
) {
	const openRoles = roles.filter((role) => role.open);

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": `${CAREERS_PAGE_URL}#webpage`,
				url: CAREERS_PAGE_URL,
				name: copy.webpageName,
				description: copy.webpageDescription,
				inLanguage: copy.inLanguage,
				isPartOf: { "@id": `${baseUrl}/#website` },
				about: { "@id": `${baseUrl}/#organization` },
				breadcrumb: { "@id": `${CAREERS_PAGE_URL}#breadcrumb` },
				mainEntity: { "@id": `${CAREERS_PAGE_URL}#job-list` },
			},
			{
				"@type": "BreadcrumbList",
				"@id": `${CAREERS_PAGE_URL}#breadcrumb`,
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: copy.breadcrumbHome,
						item: baseUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: copy.breadcrumbCurrent,
						item: CAREERS_PAGE_URL,
					},
				],
			},
			{
				"@type": "ItemList",
				"@id": `${CAREERS_PAGE_URL}#job-list`,
				name: copy.jobListName,
				numberOfItems: openRoles.length,
				itemListElement: openRoles.map((role, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: role.title,
					item: { "@id": `${CAREERS_PAGE_URL}#job-${role.id}` },
				})),
			},
			...openRoles.map((role) => buildJobPostingSchema(role, copy)),
		],
	};
}
