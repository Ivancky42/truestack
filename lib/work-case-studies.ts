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
	blurb: string;
};

export type WorkCaseStudyCopy = {
	headline: string;
	lead: string;
	tags: string[];
	stats: { label: string; value: string }[];
	productPage: { label: string; blurb: string };
	sections: WorkCaseStudySection[];
	galleries: { alt: string; caption?: string }[][];
	faq: { question: string; answer: string }[];
	seo: {
		title: string;
		description: string;
		keywords: string[];
	};
};

export type WorkCaseStudySlug = "ezdana" | "landstore" | "cashsouk" | "eviebikes";

export type WorkCaseStudyStructure = {
	slug: WorkCaseStudySlug;
	client: string;
	liveUrl: string;
	logo: string;
	productLabel: string;
	productPageHref: string;
	gallerySrcs: string[][];
};

export type WorkCaseStudyDetail = {
	slug: WorkCaseStudySlug;
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
	seo: WorkCaseStudyCopy["seo"];
};

export const workCaseStudyStructures: WorkCaseStudyStructure[] = [
	{
		slug: "ezdana",
		client: "ezdana",
		liveUrl: "https://ezdana.my",
		logo: "/logos/ezdana.png",
		productLabel: "TrueKredit™ Pro",
		productPageHref: "/truekredit",
		gallerySrcs: [
			[
				"/work/ezdana/borrower-dashboard.jpg",
				"/work/ezdana/borrower-loans.jpg",
			],
			[
				"/work/ezdana/admin-dashboard.png",
				"/work/ezdana/admin-applications.jpg",
				"/work/ezdana/admin-loans.jpg",
			],
			["/work/ezdana/borrower-applications.jpg"],
		],
	},
	{
		slug: "landstore",
		client: "LandStore",
		liveUrl: "https://landstore.my",
		logo: "/logos/landstore.png",
		productLabel: "Custom Software",
		productPageHref: "/services/software-development",
		gallerySrcs: [
			["/work/landstore/homepage.jpg"],
			["/work/landstore/explore.jpg"],
		],
	},
	{
		slug: "cashsouk",
		client: "CashSouk",
		liveUrl: "https://cashsouk.com",
		logo: "/logos/cashsouk_logo.png",
		productLabel: "TrueP2P™",
		productPageHref: "/services/p2p-software-development",
		gallerySrcs: [
			[
				"/work/cashsouk/homepage.jpg",
				"/work/cashsouk/investor-investments.jpg",
			],
			[
				"/work/cashsouk/issuer-application.jpg",
				"/work/cashsouk/admin-finance.jpg",
			],
			["/work/cashsouk/admin-reconciliation.jpg"],
		],
	},
	{
		slug: "eviebikes",
		client: "EVIE Bikes",
		liveUrl: "https://eviebikes.com",
		logo: "/logos/EVIE LOGO_FA-08.png",
		productLabel: "Custom Software",
		productPageHref: "/services/software-development",
		gallerySrcs: [
			["/work/eviebikes/homepage.jpg", "/work/eviebikes/shop.jpg"],
			["/work/eviebikes/product-t1.jpg", "/work/eviebikes/product-s1.jpg"],
			["/work/eviebikes/design.jpg", "/work/eviebikes/app.jpg"],
		],
	},
];

export function isWorkCaseStudySlug(slug: string): slug is WorkCaseStudySlug {
	return workCaseStudyStructures.some((study) => study.slug === slug);
}

export function mergeWorkCaseStudy(
	structure: WorkCaseStudyStructure,
	copy: WorkCaseStudyCopy,
): WorkCaseStudyDetail {
	return {
		slug: structure.slug,
		client: structure.client,
		headline: copy.headline,
		lead: copy.lead,
		tags: copy.tags,
		stats: copy.stats,
		liveUrl: structure.liveUrl,
		logo: structure.logo,
		productLabel: structure.productLabel,
		productPage: {
			label: copy.productPage.label,
			href: structure.productPageHref,
			blurb: copy.productPage.blurb,
		},
		sections: copy.sections,
		galleries: structure.gallerySrcs.map((srcs, galleryIndex) =>
			srcs.map((src, imageIndex) => {
				const imageCopy = copy.galleries[galleryIndex]?.[imageIndex];
				return {
					src,
					alt: imageCopy?.alt ?? structure.client,
					caption: imageCopy?.caption,
				};
			}),
		),
		faq: copy.faq,
		seo: copy.seo,
	};
}

export function getWorkCaseStudyStructure(
	slug: string,
): WorkCaseStudyStructure | undefined {
	return workCaseStudyStructures.find((study) => study.slug === slug);
}

export function getWorkCaseStudySlugs(): string[] {
	return workCaseStudyStructures.map((study) => study.slug);
}

export function getRelatedWorkCaseStudyStructures(
	slug: string,
): WorkCaseStudyStructure[] {
	return workCaseStudyStructures.filter((study) => study.slug !== slug);
}
