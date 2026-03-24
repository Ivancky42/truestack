import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { WorkPageContent } from "@/components/sections/work-page-content";

export const metadata: Metadata = {
  title: "Selected work & case studies",
  description:
    "Live lending and fintech platforms we’ve delivered in Malaysia — digital KPKT conversions, enterprise loan systems, and marketplace infrastructure with in-region hosting and audit-ready operations.",
  keywords: [
    "Truestack case studies",
    "fintech projects Malaysia",
    "KPKT digital license",
    "CreditXpress",
    "Andas Capital",
    "money lending platform",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected work & case studies - Truestack",
    description:
      "Live lending and fintech platforms we’ve delivered in Malaysia — digital KPKT conversions, enterprise stacks, and regulated marketplaces.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected work & case studies - Truestack",
    description:
      "Live lending and fintech platforms we’ve delivered in Malaysia — digital KPKT conversions, enterprise stacks, and regulated marketplaces.",
    images: [defaultOgImage.url],
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
