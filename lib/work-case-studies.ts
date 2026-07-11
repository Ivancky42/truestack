export type WorkCaseStudySection = {
	number: string;
	title: string;
	/** Plain text, or use [[label|/path]] for internal product links. */
	paragraphs: string[];
};

export type WorkCaseStudyImage = {
	src: string;
	alt: string;
	caption?: string;
};

export type WorkCaseStudyProductPage = {
	label: string;
	href: string;
	/** Short line under “Built on …” */
	blurb: string;
};

export type WorkCaseStudyDetail = {
	slug: string;
	client: string;
	headline: string;
	lead: string;
	tags: string[];
	stats: { label: string; value: string }[];
	liveUrl: string;
	logo: string;
	productLabel: string;
	productPage: WorkCaseStudyProductPage;
	sections: WorkCaseStudySection[];
	galleries: WorkCaseStudyImage[][];
	faq: { question: string; answer: string }[];
	seo: {
		title: string;
		description: string;
		keywords: string[];
	};
};

export const workCaseStudyDetails: WorkCaseStudyDetail[] = [
	{
		slug: "ezdana",
		client: "ezdana",
		headline: "A branded lending stack your team and borrowers both trust.",
		lead: "We stood up ezdana on TrueKredit™ Pro — borrower self-serve on one side, full loan-book operations on the other — so the lender could go live fast without rebuilding the core.",
		tags: ["TrueKredit™ Pro", "Digital Lending", "Borrower + Admin"],
		stats: [
			{ label: "Product", value: "TrueKredit™ Pro" },
			{ label: "Launch", value: "3 mo" },
			{ label: "Surfaces", value: "2 portals" },
		],
		liveUrl: "https://ezdana.my",
		logo: "/logos/ezdana.png",
		productLabel: "TrueKredit™ Pro",
		productPage: {
			label: "TrueKredit™ Pro",
			href: "/truekredit",
			blurb:
				"Nationwide digital lending on TrueKredit™ Pro — branded apps, loan-book ops, and KPKT-ready workflows.",
		},
		sections: [
			{
				number: "01",
				title: "The challenge",
				paragraphs: [
					"ezdana needed a complete digital lending operation — not a brochure site with a form. Borrowers had to apply, track status, sign agreements, and manage repayments. The lender’s team needed the other half of that story: L1/L2 review queues, disbursement control, portfolio metrics, and day-to-day servicing.",
					"Starting from scratch would have meant months of compliance plumbing before a single loan moved. The brief was clear: ship a branded experience that feels like ezdana’s product, on [[TrueKredit™ Pro|/truekredit]] — the stack built for Malaysian digital lending.",
				],
			},
			{
				number: "02",
				title: "What we built",
				paragraphs: [
					"We configured [[TrueKredit™ Pro|/truekredit]] as ezdana’s operating system, then wrapped it in a branded borrower portal and admin workspace. Borrowers see applications, loan journeys, digital signing, and repayment progress — with passkeys and 2FA available when they are ready to harden access.",
					"On the admin side, the same loan book surfaces as action queues: L1 and L2 review, pending disbursement, attestation meetings, payment approvals, and early settlement. Portfolio KPIs — disbursed, outstanding, earned, overdue — sit above the work, so owners see the book while operators clear the queue.",
					"Every screen is productised, not mocked up. Status badges, journey timelines, and scheduled jobs (late fees, reminders) are the same patterns we run for other KPKT-licensed lenders — tuned to ezdana’s products and brand.",
				],
			},
			{
				number: "03",
				title: "How we delivered",
				paragraphs: [
					"Speed came from reuse with discipline. [[TrueKredit™ Pro|/truekredit]] already covered origination, servicing, e-KYC hooks, and audit-ready records. Our job was configuration, branding, and the borrower/admin UX — not inventing a second loan engine.",
					"We shipped both portals in roughly three months: borrower dashboard with apply → approve → attest → sign → repay, and an admin console with multi-level review and portfolio visibility. Attention to detail shows up in the small things decision makers notice — clear next actions, colour-coded statuses, and a loan book that stays coherent from first enquiry to final settlement.",
				],
			},
		],
		galleries: [
			[
				{
					src: "/work/ezdana/borrower-dashboard.jpg",
					alt: "ezdana borrower dashboard with payout CTA and loan summary cards",
					caption: "Borrower dashboard — next action, balances, and to-dos in one place",
				},
				{
					src: "/work/ezdana/borrower-loans.jpg",
					alt: "ezdana borrower loans page showing journey progress and repayment status",
					caption: "Loan journeys — approval through signing, with repayment progress",
				},
			],
			[
				{
					src: "/work/ezdana/admin-dashboard.png",
					alt: "ezdana admin dashboard with portfolio KPIs and disbursement chart",
					caption: "Admin overview — disbursed, outstanding, earned, and overdue",
				},
				{
					src: "/work/ezdana/admin-applications.jpg",
					alt: "ezdana admin loan applications queue with L1 and L2 review filters",
					caption: "Applications — L1/L2 queues your team can clear without hunting",
				},
				{
					src: "/work/ezdana/admin-loans.jpg",
					alt: "ezdana admin loans table with status filters and repayment progress",
					caption: "Loan book — filters for arrears, disbursement, and completion",
				},
			],
			[
				{
					src: "/work/ezdana/borrower-applications.jpg",
					alt: "ezdana borrower applications list with status filters",
					caption: "Borrower applications — status filters borrowers understand",
				},
			],
		],
		faq: [
			{
				question: "What is ezdana built on?",
				answer:
					"ezdana runs on TrueKredit™ Pro, Truestack’s digital lending platform for KPKT-licensed money lenders in Malaysia. The borrower portal and admin workspace are branded for ezdana while sharing the same live loan book, review queues, and servicing workflows. Learn more about TrueKredit™ on the product page at truestack.my/truekredit.",
			},
			{
				question: "What can borrowers and admins do in the portals?",
				answer:
					"Borrowers can apply online, track application status, complete attestation and digital signing, and manage active loans and repayments. Admins review applications (including L1/L2 queues), manage disbursement, monitor portfolio KPIs, and handle day-to-day servicing from one console.",
			},
			{
				question: "How long did ezdana take to launch?",
				answer:
					"ezdana went live in about three months. Delivery focused on configuring TrueKredit™ Pro, branding both portals, and wiring borrower and admin journeys — rather than rebuilding lending core from scratch.",
			},
		],
		seo: {
			title: "ezdana Case Study | TrueKredit Pro Lending",
			description:
				"How Truestack launched ezdana on TrueKredit™ Pro — branded borrower and admin portals, L1/L2 review, and a live loan book in about three months.",
			keywords: [
				"ezdana",
				"TrueKredit Pro case study",
				"digital lending Malaysia",
				"money lender software",
				"KPKT loan management",
			],
		},
	},
	{
		slug: "landstore",
		client: "LandStore",
		headline: "A land marketplace built for how Malaysia actually buys land.",
		lead: "LandStore needed more than a listings grid. We built a mediated marketplace with map exploration, Malaysian land filters, shortlists, and enquiry workflows — custom software shaped around real deal flow.",
		tags: ["Custom Software", "Proptech", "Marketplace"],
		stats: [
			{ label: "Engagement", value: "Custom software" },
			{ label: "Launch", value: "8 mo" },
			{ label: "Focus", value: "Map + listings" },
		],
		liveUrl: "https://landstore.my",
		logo: "/logos/landstore.png",
		productLabel: "Custom Software",
		productPage: {
			label: "Custom software development",
			href: "/services/software-development",
			blurb:
				"Web apps, platforms, and marketplaces from brief to go-live — built around how your business actually works.",
		},
		sections: [
			{
				number: "01",
				title: "The challenge",
				paragraphs: [
					"Buying land in Malaysia is not the same as browsing apartments. Buyers filter by negeri and daerah, deal type, terrain, utilisation, and constraints such as Tanah Rizab Melayu. Sellers and mediators need shortlists and enquiry trails — not a generic property template.",
					"LandStore’s brief was to become the mediated land marketplace: searchable inventory, map-first discovery, and workflows that keep serious buyers moving without losing context. That called for [[custom software development|/services/software-development]], not an off-the-shelf listing theme.",
				],
			},
			{
				number: "02",
				title: "What we built",
				paragraphs: [
					"Through our [[custom software|/services/software-development]] practice, we engineered a web platform around land discovery. The homepage leads with search — negeri, category, deal type, terrain — over a full-bleed Malaysia context. Explore Map pairs filter panels with listing cards and a live map pin, so location and inventory stay in sync.",
					"Domain detail is deliberate: commercial and industrial categories, acreage ranges, utilisation states, and Malay Reserve toggles sit in the filter rail because that is how deals are qualified. Shortlists and enquiries give registered users a path from interest to conversation without leaving the product.",
					"The stack is a modern web app — fast page loads, responsive layouts, and a UI system tuned for high-value browsing. Under the hood, listing search and map state are built to stay coherent as inventory grows past a thousand parcels.",
				],
			},
			{
				number: "03",
				title: "How we delivered",
				paragraphs: [
					"This was an eight-month [[custom software|/services/software-development]] engagement: discovery with land operators, marketplace information architecture, map-integrated search, and the enquiry loop that turns browsers into mediated deals.",
					"Decision makers care that the product feels finished — branded 404s, consistent navigation, and filters that match Malaysian land vocabulary. That attention to detail is what separates a marketplace from a directory.",
				],
			},
		],
		galleries: [
			[
				{
					src: "/work/landstore/homepage.jpg",
					alt: "LandStore homepage hero with land search filters over Malaysia landscape",
					caption: "Homepage — search-first discovery for 1000+ land listings",
				},
			],
			[
				{
					src: "/work/landstore/explore.jpg",
					alt: "LandStore Explore Map at landstore.my/explore with filters, listing card, and Malaysia map pin",
					caption: "Explore Map — filters, cards, and map pins in one workspace",
				},
			],
		],
		faq: [
			{
				question: "What is LandStore?",
				answer:
					"LandStore.my is a mediated land marketplace for Malaysia. Buyers explore agriculture, industrial, and commercial land through search and map views, then shortlist parcels and send enquiries through the platform.",
			},
			{
				question: "What did Truestack build for LandStore?",
				answer:
					"Truestack built LandStore as custom software development: homepage search, Explore Map with Malaysian land filters, listing presentation, shortlists, and enquiry workflows. The product is shaped around how land deals are qualified in Malaysia — not a generic property template. See our custom software service at truestack.my/services/software-development.",
			},
			{
				question: "How long did LandStore take to deliver?",
				answer:
					"LandStore was delivered as an approximately eight-month custom software engagement, covering discovery, marketplace UX, map-integrated search, and enquiry workflows through go-live.",
			},
		],
		seo: {
			title: "LandStore Case Study | Land Marketplace Malaysia",
			description:
				"How Truestack built LandStore.my — a mediated Malaysian land marketplace with map exploration, domain filters, shortlists, and enquiry workflows.",
			keywords: [
				"LandStore",
				"land marketplace Malaysia",
				"proptech case study",
				"custom software Malaysia",
				"Truestack work",
			],
		},
	},
	{
		slug: "cashsouk",
		client: "CashSouk",
		headline: "An SC-facing P2P marketplace built to connect capital and growth.",
		lead: "CashSouk connects investors with verified financing opportunities. We engineered the full TrueP2P™ stack — marketplace, dual journeys, and the operational rails a regulated platform needs.",
		tags: ["TrueP2P™", "SC-Aligned", "Marketplace"],
		stats: [
			{ label: "Product", value: "TrueP2P™" },
			{ label: "Launch", value: "9 mo" },
			{ label: "Regulator", value: "SC Malaysia" },
		],
		liveUrl: "https://cashsouk.com",
		logo: "/logos/cashsouk_logo.png",
		productLabel: "TrueP2P™",
		productPage: {
			label: "TrueP2P™",
			href: "/services/p2p-software-development",
			blurb:
				"SC-aligned peer-to-peer financing platforms — investor and issuer journeys, marketplace, and regulated ops rails.",
		},
		sections: [
			{
				number: "01",
				title: "The challenge",
				paragraphs: [
					"Peer-to-peer financing only works when both sides of the marketplace trust the same system. Investors need clear listings — profit rates, risk grades, funding progress. Businesses need a path to apply for financing without a parallel ops spreadsheet.",
					"CashSouk required a production platform aligned to Securities Commission expectations: investor and issuer journeys, marketplace transparency, and the operational controls that keep a regulated book auditable as volume grows. That is the job of [[TrueP2P™|/services/p2p-software-development]].",
				],
			},
			{
				number: "02",
				title: "What we built",
				paragraphs: [
					"We delivered CashSouk on [[TrueP2P™|/services/p2p-software-development]] — Truestack’s peer-to-peer platform engineering. Investors track notes, returns, and maturity in a live portfolio. Issuers move through a structured financing application — contract details through declarations — without losing their place.",
					"Operators get the book they actually need to run: bucket balances across investor, repayment, operating, Ta’widh and Gharamah accounts; a lifecycle pipeline from onboarding to notes; and gateway reconciliation against Curlec so settlement exceptions stay in a clear queue.",
					"The public site still leads with dual CTAs — invest or get funded — but the proof for decision makers is behind the login: three surfaces, one ledger, and workflows shaped for SC-aligned day-to-day ops.",
				],
			},
			{
				number: "03",
				title: "How we delivered",
				paragraphs: [
					"CashSouk was a nine-month platform build: marketplace UX, investor and issuer journeys, and the [[TrueP2P™|/services/p2p-software-development]] operational core — finance buckets, payouts, withdrawals, and scheduled reconciliation. We continue to support the platform as it scales.",
					"For decision makers evaluating a P2P build, the proof is concrete: a live Malaysian marketplace brand, dual-sided product thinking, and delivery paced for regulated go-live — not a prototype that stalls at compliance.",
				],
			},
		],
		galleries: [
			[
				{
					src: "/work/cashsouk/homepage.jpg",
					alt: "CashSouk homepage hero with invest and get funded calls to action",
					caption: "Homepage — dual journeys for investors and businesses",
				},
				{
					src: "/work/cashsouk/investor-investments.jpg",
					alt: "CashSouk investor investments portfolio with note cards and return metrics",
					caption: "Investor portfolio — notes, returns, and maturity in one view",
				},
			],
			[
				{
					src: "/work/cashsouk/issuer-application.jpg",
					alt: "CashSouk issuer multi-step financing application with contract details form",
					caption: "Issuer application — guided financing intake, step by step",
				},
				{
					src: "/work/cashsouk/admin-finance.jpg",
					alt: "CashSouk admin finance dashboard with bucket balances and lifecycle pipeline",
					caption: "Admin finance — bucket balances and the ops lifecycle pipeline",
				},
			],
			[
				{
					src: "/work/cashsouk/admin-reconciliation.jpg",
					alt: "CashSouk admin gateway reconciliation against Curlec with daily run history",
					caption: "Gateway reconciliation — daily Curlec settlement with exception queues",
				},
			],
		],
		faq: [
			{
				question: "What is CashSouk?",
				answer:
					"CashSouk is a Malaysian peer-to-peer financing marketplace that connects investors with verified business financing opportunities. The public product covers marketplace discovery plus separate paths to start investing or apply for financing.",
			},
			{
				question: "What technology underpins CashSouk?",
				answer:
					"CashSouk is built on TrueP2P™, Truestack’s peer-to-peer platform stack for Malaysia. It covers investor portfolios, issuer financing applications, admin finance buckets and lifecycle ops, plus gateway reconciliation — with SC-aligned operational rails. Learn more at truestack.my/services/p2p-software-development.",
			},
			{
				question: "How long did CashSouk take to build?",
				answer:
					"CashSouk was delivered over approximately nine months as a full TrueP2P™ platform engagement — marketplace UX, dual-sided journeys, and regulated operating foundations through go-live, with ongoing platform support.",
			},
		],
		seo: {
			title: "CashSouk Case Study | P2P Marketplace Malaysia",
			description:
				"How Truestack built CashSouk on TrueP2P™ — investor portfolio, issuer applications, admin finance buckets, and gateway reconciliation for an SC-facing P2P marketplace.",
			keywords: [
				"CashSouk",
				"P2P lending Malaysia",
				"TrueP2P case study",
				"peer-to-peer financing",
				"SC marketplace",
			],
		},
	},
	{
		slug: "eviebikes",
		client: "EVIE Bikes",
		headline: "A European brand built to sell across the European Union.",
		lead: "EVIE Bikes is a European smart electric bicycle brand that sells in the European Union. We built their ecommerce experience on Shopify — product storytelling, conversion-ready product pages, and a storefront that matches the hardware.",
		tags: ["Custom Software", "E-commerce"],
		stats: [
			{ label: "Engagement", value: "Custom software" },
			{ label: "Platform", value: "Shopify" },
			{ label: "Market", value: "European Union" },
		],
		liveUrl: "https://eviebikes.com",
		logo: "/logos/EVIE LOGO_FA-08.png",
		productLabel: "Custom Software",
		productPage: {
			label: "Custom software development",
			href: "/services/software-development",
			blurb:
				"Web apps, ecommerce, and brand platforms from brief to go-live — including Shopify storefronts shaped around how you sell.",
		},
		sections: [
			{
				number: "01",
				title: "The challenge",
				paragraphs: [
					"EVIE needed more than a theme with product photos. As a European brand that sells in the European Union, the store had to carry premium hardware storytelling, clear model choice (S1, T1, L1), and trust signals EU buyers expect — warranty, certification, shipping from the EU — without feeling generic.",
					"The brief was a full brand commerce experience on Shopify: homepage that sells the ride, product pages that convert, and supporting pages for design, sustainability, and the EVIE app — all coherent under one visual system.",
				],
			},
			{
				number: "02",
				title: "What we built",
				paragraphs: [
					"Through our [[custom software development|/services/software-development]] practice, we engineered the EVIE storefront on Shopify. The homepage leads with lifestyle hero storytelling and direct paths to buy or discover. Product pages carry gallery, pricing, urgency, trust badges, and feature lists tuned for EU shoppers.",
					"Beyond the catalogue, we shaped brand pages — design philosophy, sustainability, and the companion app — so the site sells the product and the company behind it. Navigation stays simple: e-bikes, explore, reviews, find a dealer.",
					"Attention to detail shows in the conversion layer: review counts, certification callouts, EU shipping cues, and a chat path for questions before purchase. The result reads as a European consumer brand, not a stock template.",
				],
			},
			{
				number: "03",
				title: "How we delivered",
				paragraphs: [
					"This was a [[custom software|/services/software-development]] ecommerce engagement on Shopify: information architecture, theme and page builds, product templates, and brand content surfaces through go-live at [[eviebikes.com|https://eviebikes.com]].",
					"For decision makers evaluating a brand storefront, the proof is live in the EU market — a polished buy journey from first impression to product page, built to the brand rather than bolted onto a default theme.",
				],
			},
		],
		galleries: [
			[
				{
					src: "/work/eviebikes/homepage.jpg",
					alt: "EVIE Bikes homepage hero with lifestyle e-bike photography and Ride Smarter headline",
					caption: "Homepage — European brand storytelling with clear buy paths",
				},
				{
					src: "/work/eviebikes/shop.jpg",
					alt: "EVIE T1 product info feature cards for motor, torque sensor, and gear shifter",
					caption: "EVIE T1 product info — feature storytelling into buy",
				},
			],
			[
				{
					src: "/work/eviebikes/product-t1.jpg",
					alt: "EVIE T1 product page with gallery, pricing, and EU trust badges",
					caption: "Product page — gallery, pricing, and EU trust signals",
				},
				{
					src: "/work/eviebikes/product-s1.jpg",
					alt: "EVIE S1 product page on the Shopify storefront",
					caption: "EVIE S1 — model-specific product journey",
				},
			],
			[
				{
					src: "/work/eviebikes/design.jpg",
					alt: "EVIE Bikes design brand page",
					caption: "Design — brand narrative beyond the catalogue",
				},
				{
					src: "/work/eviebikes/app.jpg",
					alt: "EVIE Bikes companion app page",
					caption: "EVIE App — the smart-bike companion story",
				},
			],
		],
		faq: [
			{
				question: "What is EVIE Bikes?",
				answer:
					"EVIE Bikes is a European smart electric bicycle brand that sells across the European Union. The public storefront at eviebikes.com presents models such as the EVIE S1, T1, and L1 with ecommerce checkout, brand storytelling, and EU-facing trust signals.",
			},
			{
				question: "What did Truestack build for EVIE Bikes?",
				answer:
					"Truestack built EVIE’s ecommerce experience as custom software on Shopify — homepage and catalogue, conversion-ready product pages, and brand pages for design, sustainability, and the companion app. The work sits under Truestack’s custom software development practice.",
			},
			{
				question: "Where does EVIE Bikes sell?",
				answer:
					"EVIE Bikes is a European brand selling into the European Union market. The storefront is built for EU shoppers, with product and trust messaging aligned to that region.",
			},
		],
		seo: {
			title: "EVIE Bikes Case Study | Shopify Ecommerce EU",
			description:
				"How Truestack built EVIE Bikes — a European smart e-bike brand selling across the EU — on Shopify with custom storefront, product pages, and brand storytelling.",
			keywords: [
				"EVIE Bikes",
				"Shopify ecommerce case study",
				"European e-bike brand",
				"custom software development",
				"EU ecommerce",
			],
		},
	},
];

export function getWorkCaseStudy(slug: string): WorkCaseStudyDetail | undefined {
	return workCaseStudyDetails.find((study) => study.slug === slug);
}

export function getWorkCaseStudySlugs(): string[] {
	return workCaseStudyDetails.map((study) => study.slug);
}

export function getRelatedWorkCaseStudies(
	slug: string,
): WorkCaseStudyDetail[] {
	return workCaseStudyDetails.filter((study) => study.slug !== slug);
}
