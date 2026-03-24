import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";
import { WorkPageContent } from "@/components/sections/work-page-content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Truestack's work: digital KPKT license conversion, enterprise loan management systems, and P2P fintech platforms built for Malaysia with in-region hosting and audit-ready operations.",
  keywords: [
    "Truestack case studies",
    "Truestack work",
    "fintech projects Malaysia",
    "KPKT case studies",
    "KPKT digital license",
    "digital lending software Malaysia",
    "P2P lending platform Malaysia",
    "CreditXpress",
    "Andas Capital",
    "money lending platform",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work - Truestack",
    description:
      "Digital KPKT conversions, enterprise lending systems, and regulated fintech platforms delivered by Truestack in Malaysia.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work - Truestack",
    description:
      "Digital KPKT conversions, enterprise lending systems, and regulated fintech platforms delivered by Truestack in Malaysia.",
    images: [defaultOgImage.url],
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
