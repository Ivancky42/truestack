import type { JobRole } from "@/lib/careers-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://truestack.my";

export const CAREERS_PAGE_PATH = "/careers";
export const CAREERS_PAGE_URL = `${baseUrl}${CAREERS_PAGE_PATH}`;

/** Update when open roles change — used in JobPosting datePosted */
export const CAREERS_JOBS_DATE_POSTED = "2026-05-01";

export const CAREERS_METADATA = {
  title: "Careers at Truestack | Jobs in Kuala Lumpur, Malaysia",
  description:
    "Join Truestack in Kuala Lumpur, Malaysia. Open roles: B2B sales, admin, client success, full-stack developer, and software engineering intern. Hybrid engineering roles. Fresh graduates welcome. Apply at truestack.my/careers.",
  keywords: [
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
  ],
  openGraphTitle: "Careers at Truestack | Jobs in Kuala Lumpur, Malaysia",
  openGraphDescription:
    "Build fintech and digital products with Truestack in Kuala Lumpur. View open roles in sales, operations, client success, and engineering.",
} as const;

function employmentType(type: string): string {
  if (type.toLowerCase().includes("intern")) return "INTERN";
  return "FULL_TIME";
}

function isHybridLocation(location: string): boolean {
  return location.toLowerCase().includes("hybrid");
}

function jobPostingDescription(role: JobRole): string {
  const sections = [role.description];

  if (role.workAreas?.length) {
    sections.push(
      `\n\nWhat you'll work on:\n${role.workAreas.map((item) => `• ${item}`).join("\n")}`
    );
  }

  sections.push(
    `\n\nResponsibilities:\n${role.responsibilities.map((item) => `• ${item}`).join("\n")}`,
    `\n\nRequirements:\n${role.requirements.map((item) => `• ${item}`).join("\n")}`
  );

  if (role.bonusSkills?.length) {
    sections.push(
      `\n\nBonus skills:\n${role.bonusSkills.map((item) => `• ${item}`).join("\n")}`
    );
  }

  if (role.technologies?.length) {
    sections.push(`\n\nTech stack: ${role.technologies.join(", ")}`);
  }

  return sections.join("");
}

export function buildJobPostingSchema(role: JobRole) {
  const hybrid = isHybridLocation(role.location);

  return {
    "@type": "JobPosting",
    "@id": `${CAREERS_PAGE_URL}#job-${role.id}`,
    title: role.title,
    description: jobPostingDescription(role),
    identifier: {
      "@type": "PropertyValue",
      name: "Truestack",
      value: role.id,
    },
    datePosted: CAREERS_JOBS_DATE_POSTED,
    validThrough: "2026-12-31",
    employmentType: employmentType(role.type),
    hiringOrganization: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Truestack",
      sameAs: baseUrl,
      logo: `${baseUrl}/truestack-logo-transparent.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kuala Lumpur",
        addressRegion: "Wilayah Persekutuan Kuala Lumpur",
        addressCountry: "MY",
      },
    },
    ...(hybrid
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
      email: "hello@truestack.my",
      url: `${baseUrl}/contact`,
    },
    url: `${CAREERS_PAGE_URL}#open-roles`,
    industry: role.department.includes("Engineering")
      ? "Software Development"
      : "Technology",
  };
}

export function buildCareersJsonLd(
  roles: JobRole[],
  faq: ReadonlyArray<{ readonly question: string; readonly answer: string }>
) {
  const openRoles = roles.filter((role) => role.open);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CAREERS_PAGE_URL}#webpage`,
        url: CAREERS_PAGE_URL,
        name: CAREERS_METADATA.openGraphTitle,
        description: CAREERS_METADATA.description,
        inLanguage: "en-MY",
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
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: CAREERS_PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${CAREERS_PAGE_URL}#job-list`,
        name: "Truestack open positions",
        numberOfItems: openRoles.length,
        itemListElement: openRoles.map((role, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: role.title,
          item: { "@id": `${CAREERS_PAGE_URL}#job-${role.id}` },
        })),
      },
      ...openRoles.map((role) => buildJobPostingSchema(role)),
      {
        "@type": "FAQPage",
        "@id": `${CAREERS_PAGE_URL}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
