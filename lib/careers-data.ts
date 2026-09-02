export type JobRole = {
	id: string;
	title: string;
	department: string;
	location: string;
	type: string;
	open: boolean;
	/** One-line blurb for the roles table. */
	summary: string;
	description: string;
	responsibilities: string[];
	requirements: string[];
	bonusSkills?: string[];
	technologies?: string[];
	workAreas?: string[];
};

export const howToApply =
	"Your CV, portfolio or project links, and the role you are after. If none of the open ones fit, tell us what you do and we will keep it on file.";

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
		title: "Full-Stack Web Developer",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Full-time",
		open: true,
		summary:
			"React, Next.js, TypeScript, Node and Postgres, across our lending platforms and the services behind them. 3+ years.",
		description:
			"You will build and maintain the lending platforms our clients run every day — the screens their staff use, the borrower-facing apps, and the services behind them. The work sits across frontend and backend, with product and operations in the same room.",
		workAreas: [
			"Customer-facing web apps for lending and fintech operations",
			"Internal admin tools and operational dashboards",
			"Backend services and third-party connections (e-KYC, notifications, payments)",
			"Systems that have to stand up to compliance, reporting and audits",
		],
		responsibilities: [
			"Build and maintain web apps in React, Next.js and TypeScript",
			"Write backend services in Node.js and Express",
			"Connect our systems to internal tools and third-party services",
			"Work with PostgreSQL and the data models behind live loan books",
			"Sit with product, design and operations to decide what to build next",
			"Fix problems across the stack and make the system more reliable",
			"Write code other people can read, change and test",
			"Help with releases, CI and the cloud setup we already run",
			"Keep an eye on performance and how painful the system is to work in",
		],
		requirements: [
			"3+ years of full-stack web development",
			"Comfortable with React / Next.js and TypeScript",
			"Have built backend services with Node.js and Express",
			"Have worked with PostgreSQL or another relational database",
			"Know how to design a straightforward REST API; GraphQL is a plus",
			"Familiar with AWS, Docker, CI and how releases actually go out",
			"Can work on a problem without someone standing over you",
			"Can explain a technical decision to someone who is not an engineer",
			"Malaysian citizen or permanent resident preferred",
		],
		bonusSkills: [
			"You have shipped fintech, lending, SaaS or compliance-heavy software",
			"You have dealt with payments, identity checks or workflow-heavy products",
			"You have worked in a regulated environment",
			"You have been on-call or handled production issues",
		],
		technologies: [
			"React / Next.js",
			"TypeScript",
			"Node.js / Express",
			"PostgreSQL",
			"AWS",
			"Docker & CI/CD",
		],
	},
	{
		id: "software-development-intern",
		title: "Software Development Intern",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Internship",
		open: true,
		summary:
			"Real client work, not busywork, with a developer reviewing yours. Can convert to full-time.",
		description:
			"You will sit with the engineering team on live client and internal work. You write real code, someone reviews it, and it ships. We are not looking for someone to fetch coffee or redraw tickets.",
		responsibilities: [
			"Help build and maintain web apps and internal tools",
			"Work on frontend, backend, or both — depending on what you are good at and what we need",
			"Take part in features, bug fixes and testing",
			"Join the same stand-ups and tools the rest of the team uses",
			"Write code someone else can pick up after you",
			"Learn how we actually ship things, not just how a tutorial does",
		],
		technologies: [
			"React / Next.js",
			"TypeScript / JavaScript",
			"Node.js",
			"Tailwind CSS",
			"APIs & databases",
			"Git & GitHub",
		],
		requirements: [
			"Currently doing a Diploma or Degree in Computer Science, Software Engineering, IT, or something close",
			"You understand the basics of programming",
			"You have built a website, even a small one",
			"You can work independently on hybrid days",
			"You can ask a question when you are stuck",
		],
		bonusSkills: [
			"A personal project or portfolio you can show us",
			"Any time with React, Next.js or Node.js",
			"You already use Git",
			"Curiosity about UI, automation or cloud — none of these are required",
		],
	},
	{
		id: "marketing-sales-executive",
		title: "Marketing & Sales Executive (B2B)",
		department: "Sales & Marketing",
		location: "Kuala Lumpur, Malaysia · On-site",
		type: "Full-time",
		open: true,
		summary:
			"Meet lenders and fintechs, show them what we do, and stay with them through to handover. Own transport needed.",
		description:
			"You will spend most of your week talking to people who run loan books. The job is to meet them, show them what we do, and stay with them until the work is handed to delivery. It is not a phone farm.",
		responsibilities: [
			"Find licensed lenders and fintechs who might need us",
			"Set up meetings and sit in them",
			"Keep the relationship going after the first conversation",
			"Listen to what they actually need and propose the right product or service",
			"Write quotations, proposals and the occasional deck",
			"Follow up on leads that are still open",
			"Hand work over cleanly to the people who will build it",
			"Help with the odd event, partnership or branding effort",
		],
		requirements: [
			"Diploma or Degree in Marketing, Business, Communications, or something close",
			"You can talk to people without it sounding like a script",
			"Comfortable meeting clients in person",
			"You get things moving without being asked twice",
			"Good written and spoken English",
			"Own transport, and willing to travel for meetings around KL",
			"Fresh graduates who can hold a conversation are welcome",
		],
		bonusSkills: [
			"You have sold to businesses before",
			"You have sold software or a service, not only a product",
			"You already know people in lending or fintech",
		],
	},
	{
		id: "client-success-executive",
		title: "Client Success Executive",
		department: "Client Success",
		location: "Kuala Lumpur, Malaysia · On-site",
		type: "Full-time",
		open: true,
		summary:
			"The person clients call, from onboarding through to delivery, working alongside the engineering team.",
		description:
			"You are the person clients call, from the first onboarding conversation through to delivery. You work next to engineering — not as a buffer in front of them.",
		responsibilities: [
			"Be the named contact for clients while a project is running",
			"Keep clients and the engineering team talking to each other",
			"Track progress and send updates before anyone has to ask",
			"Collect what the client actually needs, not what they said in week one",
			"Keep timelines, documents and deliverables from drifting",
			"Get people onboarded without a three-week fog of kickoff decks",
			"Stay in touch after go-live, because that is when the real questions start",
		],
		requirements: [
			"Diploma or Degree in Business, Communications, IT, or something close",
			"You can write a clear email and run a meeting",
			"Organised, and you notice when a date has slipped",
			"Able to hold more than one project in your head",
			"You stay calm when something is late or unclear",
			"Fresh graduates are welcome",
		],
		bonusSkills: [
			"You have used Notion, Trello, ClickUp or something like them",
			"You have worked at a tech company, an agency, or on a software project",
		],
	},
	{
		id: "admin-executive",
		title: "Admin Executive",
		department: "Operations",
		location: "Kuala Lumpur, Malaysia · On-site",
		type: "Full-time",
		open: true,
		summary:
			"Invoices, quotations, records and scheduling. The coordination that keeps everything else moving.",
		description:
			"Invoices, quotations, records and scheduling — the coordination that keeps a small company from tripping over itself. People will notice if you are good at it.",
		responsibilities: [
			"Handle the day-to-day admin and operations work",
			"Prepare invoices, quotations and the documents around them",
			"Keep calendars, meetings and follow-ups from colliding",
			"Keep company records in a place other people can find",
			"Help with HR paperwork and onboarding",
			"Talk to vendors, clients and the rest of the team when something needs chasing",
			"Support the people running the company with whatever is on fire that week",
		],
		requirements: [
			"Diploma or Degree in Business Administration or something close",
			"Organised, and you write clearly",
			"You notice when a number or a name is wrong",
			"Comfortable with Microsoft Office or Google Workspace",
			"You can hold a few tasks at once without dropping the important one",
			"Fresh graduates are welcome",
		],
		bonusSkills: [
			"You have used bookkeeping or accounting software",
			"You have done admin or office coordination before",
		],
	},
	{
		id: "backend-developer",
		title: "Backend Developer",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Full-time",
		open: false,
		summary:
			"Node, TypeScript and Postgres behind our services and audit trails.",
		description:
			"Design and build the backend behind our lending platforms — the services, the data models, and the audit trails regulators expect to see.",
		responsibilities: [
			"Design backend services that can grow with the loan book",
			"Build the APIs our apps and partners call",
			"Keep PostgreSQL queries and data models honest",
			"Put audit trails and compliance features in from the start",
			"Connect KYC, payments and other third-party services",
			"Keep the system up and reasonably fast",
			"Work with frontend and whoever is running the cloud that week",
		],
		requirements: [
			"3+ years of backend development",
			"Strong Node.js and TypeScript",
			"Experience with Express or something like it",
			"You understand PostgreSQL, not just ORMs",
			"You know how authentication and basic security work",
			"Some AWS (ECS, EC2, S3 or similar)",
			"Fintech or compliance experience is a plus, not a gate",
			"Malaysian citizen or permanent resident",
		],
		technologies: [
			"Node.js / TypeScript",
			"Express",
			"PostgreSQL",
			"AWS",
			"REST APIs",
		],
	},
	{
		id: "qa-engineer",
		title: "QA Engineer",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Full-time",
		open: false,
		summary:
			"Automated and manual testing across the platforms, plus release support.",
		description:
			"Make sure what we ship actually works — automated tests, the occasional exploratory pass, and a say in how releases go out.",
		responsibilities: [
			"Decide what is worth testing and how",
			"Write and keep automated test suites",
			"Do the manual and exploratory testing the suite cannot",
			"Fix the small things you find, when that is faster than filing a ticket",
			"Keep test environments from rotting",
			"Sit in on releases so surprises show up before clients do",
			"Watch what breaks in production and feed it back",
		],
		requirements: [
			"2+ years of QA",
			"Comfortable with Jest, Cypress or Playwright",
			"You have done both automated and exploratory testing",
			"You can read JavaScript/TypeScript and a React app",
			"You know how to test an API",
			"You have seen a CI pipeline and a release process",
			"Docker and a cloud platform are familiar",
			"Malaysian citizen or permanent resident",
		],
		technologies: [
			"Jest / Cypress / Playwright",
			"TypeScript",
			"CI/CD",
			"Docker",
		],
	},
];
