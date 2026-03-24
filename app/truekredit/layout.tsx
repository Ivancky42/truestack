import type { Metadata } from "next";
import { TrueKreditFaqSchema } from "@/components/seo/truekredit-faq-schema";

export const metadata: Metadata = {
  title: "TrueKredit™ — KPKT Loan Management System",
  description:
    "Loan management system built specifically for KPKT PPW (offline) licensed money lenders in Malaysia. Manage borrowers, loans, compliance, and audits — all in one secure system.",
  keywords: [
    "KPKT",
    "PPW",
    "money lender Malaysia",
    "loan management system",
    "KPKT compliance",
    "Lampiran A",
    "Lampiran B1",
    "iDEAL",
    "licensed money lender",
    "TrueKredit",
    "loan software",
    "lending platform",
  ],
  alternates: { canonical: "/truekredit" },
  openGraph: {
    title: "TrueKredit™ — KPKT Loan Management System - Truestack",
    description:
      "Loan management system built specifically for KPKT PPW (offline) licensed money lenders in Malaysia. Manage borrowers, loans, compliance, and audits — all in one secure system.",
    type: "website",
    locale: "en_MY",
    siteName: "Truestack",
    images: [
      {
        url: "/truekredit/loan_application_screenshot.png",
        width: 1200,
        height: 630,
        alt: "TrueKredit Loan Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrueKredit™ — KPKT Loan Management System - Truestack",
    description:
      "Loan management system built specifically for KPKT PPW (offline) licensed money lenders in Malaysia.",
    images: ["/truekredit/loan_application_screenshot.png"],
  },
};

export default function TrueKreditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TrueKreditFaqSchema />
      {children}
    </>
  );
}
