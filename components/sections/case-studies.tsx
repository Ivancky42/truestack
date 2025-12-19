import { SectionHeader } from "@/components/shared/section-header";
import { CaseStudyCard } from "@/components/shared/case-study-card";

const caseStudies = [
  {
    title: "Kredit.my",
    description:
      "A fully digital lending platform licensed under KPKT Malaysia. End-to-end loan management with on-premise digital signing and Malaysia data residency.",
      tags: ["KPKT Licensed", "On-Prem Digital Signing", "Audit Trail"],
      href: "https://kredit.my",
  },
  {
    title: "CreditXpress",
    description:
      "KPKT-compliant digital lending platform with regulatory audit trails. Built for fast approvals with Malaysia-based AWS infrastructure.",
    tags: ["KPKT Licensed", "On-Prem Digital Signing", "Audit Trail"],
    href: "https://creditxpress.com.my",
  },
  {
    title: "CashSouk",
    description:
      "P2P lending platform connecting borrowers and investors. Modern fintech infrastructure with full compliance features.",
    tags: ["P2P Lending", "AWS", "Syariah Compliant", "SC Licensed"],
    href: "https://cashsouk.com",
    isComingSoon: true,
  },
];

export function CaseStudies() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Our Work"
          subtitle="Real platforms we've built for fintech companies across the region."
          centered
        />
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              description={study.description}
              tags={study.tags}
              href={study.href}
              isComingSoon={study.isComingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
