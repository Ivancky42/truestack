import type { Metadata } from "next";
import { defaultOgImage } from "@/lib/seo-defaults";

export const metadata: Metadata = {
  title: "TrueSSM™ — Malaysian Registry API",
  description:
    "Programmatic SSM registry access for Malaysian fintechs. Entity search, ROC/ROB/LLP profiles, particulars, and scanned documents — one REST API, transparent credit-based pricing.",
  keywords: [
    "SSM API Malaysia",
    "TrueSSM",
    "Malaysian registry API",
    "ROC company profile",
    "ROB business profile",
    "LLP profile",
    "scanned documents",
    "entity search",
    "fintech Malaysia",
  ],
  alternates: { canonical: "/truessm" },
  openGraph: {
    title: "TrueSSM™ — Malaysian Registry API - Truestack",
    description:
      "Programmatic SSM registry access. Entity search, profiles, particulars, and scanned documents via a single REST API.",
    type: "website",
    locale: "en_MY",
    siteName: "Truestack",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueSSM™ — Malaysian Registry API - Truestack",
    description:
      "Programmatic SSM registry access. Entity search, profiles, particulars, and scanned documents via a single REST API.",
    images: [defaultOgImage.url],
  },
};

export default function TrueSsmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
