import { getLocale, getTranslations } from "next-intl/server";
import { jobRoles, type JobId } from "@/lib/careers-data";
import {
	CAREERS_PAGE_PATH,
	buildCareersJsonLd,
	type JobRoleWithCopy,
} from "@/lib/careers-seo";
import { inLanguage, resolveAppLocale } from "@/lib/i18n/config";
import { absoluteLocalizedUrl } from "@/lib/seo-defaults";

function jobCopy(
	t: Awaited<ReturnType<typeof getTranslations<"Careers">>>,
	id: JobId,
) {
	return {
		title: t(`jobs.items.${id}.title`),
		department: t(`jobs.items.${id}.department`),
		description: t(`jobs.items.${id}.description`),
		workAreas: t.raw(`jobs.items.${id}.workAreas`) as string[],
		responsibilities: t.raw(`jobs.items.${id}.responsibilities`) as string[],
		requirements: t.raw(`jobs.items.${id}.requirements`) as string[],
		bonusSkills: t.raw(`jobs.items.${id}.bonusSkills`) as string[],
		technologies: t.raw(`jobs.items.${id}.technologies`) as string[],
	};
}

export async function CareersSchema() {
	const locale = resolveAppLocale(await getLocale());
	const t = await getTranslations({ locale, namespace: "Careers" });
	const roles: JobRoleWithCopy[] = jobRoles.map((role) => ({
		...role,
		...jobCopy(t, role.id),
	}));
	const schema = buildCareersJsonLd(roles, {
		pageUrl: absoluteLocalizedUrl(CAREERS_PAGE_PATH, locale),
		homeUrl: absoluteLocalizedUrl("/", locale),
		webpageName: t("meta.openGraphTitle"),
		webpageDescription: t("meta.description"),
		inLanguage: inLanguage[locale],
		breadcrumbHome: t("schema.breadcrumbHome"),
		breadcrumbCurrent: t("schema.breadcrumbCurrent"),
		jobListName: t("schema.jobListName"),
		industryEngineering: t("schema.industryEngineering"),
		industryOther: t("schema.industryOther"),
		headings: {
			workOn: t("schema.workOn"),
			responsibilities: t("schema.responsibilities"),
			requirements: t("schema.requirements"),
			bonus: t("schema.bonus"),
			tech: t("schema.tech"),
		},
	});

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
			}}
		/>
	);
}
