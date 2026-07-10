export type JobRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  open: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
  bonusSkills?: string[];
  technologies?: string[];
  workAreas?: string[];
  whyJoin: string[];
};

export const howToApply =
  "Send your CV, portfolio, or project links. Tell us which role interests you — we'd love to hear from you.";

export const jobRoles: JobRole[] = [
	{
		id: "marketing-sales-executive",
		title: "Marketing & Sales Executive (B2B)",
		department: "Sales & Marketing",
		location: "Kuala Lumpur, Malaysia · On-site",
		type: "Full-time",
		open: true,
		description:
			"Help grow our B2B client base by meeting businesses, presenting our services, and building lasting relationships. Ideal for someone who enjoys networking, communication, and business development.",
		responsibilities: [
			"Identify and approach potential B2B clients",
			"Arrange and attend client meetings and presentations",
			"Build and maintain strong client relationships",
			"Understand client needs and propose suitable solutions",
			"Prepare quotations, proposals, and sales presentations",
			"Follow up on leads and ongoing discussions",
			"Work closely with the internal team to ensure smooth project handover",
			"Support branding, networking, and business development activities",
		],
		requirements: [
			"Diploma or Degree in Marketing, Business, Communications, or related field",
			"Strong communication and interpersonal skills",
			"Comfortable meeting and speaking with clients",
			"Self-motivated, proactive, and results-oriented",
			"Good written and spoken English",
			"Possess own transport and willing to travel for client meetings",
			"Fresh graduates with strong communication skills are encouraged to apply",
		],
		bonusSkills: [
			"Experience in B2B sales or business development",
			"Familiarity with digital solutions or technology services",
			"Existing business network is a plus",
		],
		whyJoin: [
			"Opportunity to work with businesses across different industries",
			"Performance and growth-driven environment",
			"Exposure to real-world client engagement and technology solutions",
			"Career growth opportunities within a growing tech company",
		],
	},
	{
		id: "admin-executive",
		title: "Admin Executive",
		department: "Operations",
		location: "Kuala Lumpur, Malaysia · On-site",
		type: "Full-time",
		open: true,
		description:
			"Support daily business operations and ensure smooth internal coordination across the company. A reliable, organized role at the heart of how Truestack runs day to day.",
		responsibilities: [
			"Handle administrative and operational tasks",
			"Prepare invoices, quotations, and documents",
			"Coordinate schedules, meetings, and follow-ups",
			"Maintain company records and filing systems",
			"Assist with HR and onboarding administrative tasks",
			"Liaise with vendors, clients, and internal team members",
			"Support management with day-to-day coordination",
		],
		requirements: [
			"Diploma or Degree in Business Administration or related field",
			"Strong organizational and communication skills",
			"Good attention to detail",
			"Proficient in Microsoft Office / Google Workspace",
			"Responsible and able to multitask",
			"Fresh graduates are welcome to apply",
		],
		bonusSkills: [
			"Experience with bookkeeping or accounting software",
			"Prior admin or office coordination experience",
		],
		whyJoin: [
			"Friendly and supportive team environment",
			"Career growth opportunities",
			"Exposure to operations within a growing technology company",
		],
	},
	{
		id: "client-success-executive",
		title: "Client Success Executive",
		department: "Client Success",
		location: "Kuala Lumpur, Malaysia · On-site",
		type: "Full-time",
		open: true,
		description:
			"Be the main point of contact for clients throughout the project lifecycle — from onboarding and planning to delivery and follow-up. Perfect for someone who thrives on communication, coordination, and building strong relationships.",
		responsibilities: [
			"Serve as the main point of contact for clients during projects",
			"Coordinate between clients and internal development teams",
			"Track project progress and ensure timely updates",
			"Gather client feedback and requirements",
			"Help manage timelines, documentation, and deliverables",
			"Ensure smooth onboarding and project execution",
			"Build long-term client relationships",
		],
		requirements: [
			"Diploma or Degree in Business, Communications, IT, or related field",
			"Strong communication and coordination skills",
			"Organized and detail-oriented",
			"Able to manage multiple projects and stakeholders",
			"Positive attitude and problem-solving mindset",
			"Fresh graduates are encouraged to apply",
		],
		bonusSkills: [
			"Experience with project management tools (Notion, Trello, ClickUp, etc.)",
			"Background in tech, digital agencies, or software projects",
		],
		whyJoin: [
			"Work on real-world digital and technology projects",
			"Collaborative and fast-paced environment",
			"Opportunity to grow into project management or business roles",
		],
	},
	{
		id: "full-stack-web-developer",
		title: "Full-Stack Web Developer",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Full-time",
		open: true,
		description:
			"Build and scale modern web applications, APIs, internal systems, and customer-facing fintech platforms. You'll work on products used by lenders and fintech businesses, contributing across both frontend and backend while collaborating closely with product, design, and operations.",
		workAreas: [
			"Customer-facing web platforms for lending and fintech operations",
			"Internal admin systems and operational dashboards",
			"Backend APIs and integrations",
			"Fintech infrastructure such as e-KYC, notifications, and third-party service integrations",
			"Scalable systems that support compliance, reporting, and business workflows in regulated environments",
		],
		responsibilities: [
			"Build and maintain responsive web applications using React, Next.js, and TypeScript",
			"Develop scalable backend services and APIs using Node.js and Express",
			"Design and implement integrations with internal and third-party systems",
			"Work with PostgreSQL and related data models to support business-critical workflows",
			"Collaborate with cross-functional teams to define, design, build, and ship new features",
			"Troubleshoot issues across the stack and improve system reliability",
			"Write clean, maintainable, and well-tested code",
			"Contribute to deployment workflows, CI/CD pipelines, and cloud infrastructure",
			"Optimize application performance, observability, and developer efficiency",
			"Support ongoing improvement of engineering standards, architecture, and product quality",
		],
		requirements: [
			"3+ years of full-stack web development experience",
			"Strong proficiency in React / Next.js and TypeScript",
			"Solid experience building backend services with Node.js and Express",
			"Experience working with PostgreSQL or other relational databases",
			"Good understanding of REST API design; GraphQL experience is a plus",
			"Familiarity with AWS, cloud deployment, and modern DevOps workflows",
			"Experience with Docker, CI/CD, and version control best practices",
			"Strong problem-solving skills and the ability to work independently",
			"Good communication skills and ability to collaborate in a distributed team environment",
			"Malaysian citizen or permanent resident preferred",
		],
		bonusSkills: [
			"Experience building or maintaining fintech, lending, SaaS, or compliance-related software",
			"Familiarity with payment systems, identity verification, or workflow-heavy business applications",
			"Experience working in regulated environments or with audit/compliance-sensitive systems",
			"Exposure to monitoring, logging, and production support practices",
			"Experience with mobile-friendly product development and performance optimization",
		],
		technologies: [
			"React / Next.js",
			"TypeScript",
			"Node.js / Express",
			"PostgreSQL",
			"AWS",
			"Docker & CI/CD",
		],
		whyJoin: [
			"Work on real-world fintech products with direct business impact",
			"Build end-to-end across frontend, backend, and infrastructure",
			"Contribute to platforms used by lenders and fintech operators in Malaysia",
			"Join a growing team with exposure to product, compliance, and operations",
		],
	},
	{
		id: "software-development-intern",
		title: "Software Development Intern",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Internship",
		open: true,
		description:
			"Join our engineering team and gain hands-on experience building real-world digital products and systems alongside experienced developers on live client and internal projects.",
		responsibilities: [
			"Assist in developing and maintaining web applications and software systems",
			"Work with frontend and/or backend technologies depending on your interests and strengths",
			"Participate in feature development, debugging, and testing",
			"Collaborate with the team through online meetings and project management tools",
			"Write clean, maintainable, and scalable code",
			"Learn modern development workflows and best practices",
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
			"Currently pursuing a Diploma or Degree in Computer Science, Software Engineering, IT, or related field",
			"Basic understanding of programming fundamentals",
			"Familiarity with web development concepts",
			"Eager to learn and able to work independently in a hybrid environment",
			"Good communication skills",
		],
		bonusSkills: [
			"Personal projects or portfolio",
			"Experience with React, Next.js, or Node.js",
			"Familiarity with Git/GitHub",
			"Interest in UI/UX, AI, automation, or cloud technologies",
		],
		whyJoin: [
			"Flexible hybrid working environment",
			"Real-world project exposure",
			"Opportunity to work with modern technologies and development practices",
			"Mentorship and guidance from experienced developers",
			"Potential opportunity for full-time conversion based on performance",
		],
	},
	{
		id: "backend-developer",
		title: "Backend Developer",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Full-time",
		open: false,
		description:
			"Design and build robust backend systems for fintech applications. Focus on API development, database design, and system architecture.",
		responsibilities: [
			"Design and implement scalable backend architectures",
			"Build secure APIs for fintech applications",
			"Optimize database queries and data models",
			"Implement audit trails and compliance features",
			"Integrate with third-party services (KYC, payments, etc.)",
			"Ensure system reliability and performance",
			"Collaborate with frontend and DevOps teams",
		],
		requirements: [
			"3+ years of backend development experience",
			"Strong proficiency in Node.js and TypeScript",
			"Experience with Express or similar frameworks",
			"Deep understanding of PostgreSQL and database design",
			"Knowledge of authentication and security best practices",
			"Experience with AWS services (ECS, EC2, S3, etc.)",
			"Understanding of fintech compliance requirements is a plus",
			"Malaysian citizen or permanent resident",
		],
		technologies: [
			"Node.js / TypeScript",
			"Express",
			"PostgreSQL",
			"AWS",
			"REST APIs",
		],
		whyJoin: [
			"Work on backend systems that power real fintech products",
			"Build secure, scalable APIs in a regulated environment",
			"Collaborate with full-stack and DevOps engineers",
		],
	},
	{
		id: "qa-engineer",
		title: "QA Engineer",
		department: "Engineering",
		location: "Kuala Lumpur, Malaysia · Hybrid",
		type: "Full-time",
		open: false,
		description:
			"Ensure software quality through comprehensive testing while contributing to development and deployment processes.",
		responsibilities: [
			"Design and implement comprehensive test strategies",
			"Develop and maintain automated test suites",
			"Perform manual testing and exploratory testing",
			"Contribute to codebase improvements and bug fixes",
			"Set up and maintain testing environments",
			"Collaborate on deployment processes and release management",
			"Monitor application performance and quality metrics",
		],
		requirements: [
			"2+ years of QA testing experience",
			"Proficiency in automated testing frameworks (Jest, Cypress, Playwright)",
			"Experience with manual and exploratory testing methodologies",
			"Knowledge of JavaScript/TypeScript and React applications",
			"Understanding of API testing (REST/GraphQL)",
			"Familiarity with CI/CD pipelines and deployment processes",
			"Experience with Docker and cloud platforms",
			"Malaysian citizen or permanent resident",
		],
		technologies: [
			"Jest / Cypress / Playwright",
			"TypeScript",
			"CI/CD",
			"Docker",
		],
		whyJoin: [
			"Ensure quality across fintech products used in production",
			"Work closely with engineering on test automation and releases",
			"Gain exposure to full-stack web applications and APIs",
		],
	},
];

