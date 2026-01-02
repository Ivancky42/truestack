import { SectionHeader } from "@/components/shared/section-header";
import { CaseStudyCard } from "@/components/shared/case-study-card";

const caseStudies = [
  {
    title: "CreditXpress",
    description:
      "Digital KPKT license conversion success story. Transformed from traditional lending to a fully digital, nationwide platform.",
    tags: ["Digital License", "Web + Mobile App", "KPKT Licensed"],
    href: "https://creditxpress.com.my",
    logo: "/logos/creditxpress.svg",
  },
  {
    title: "Kredit.my",
    description:
      "Custom-built digital lending platform with KPKT and SC Malaysia compliance. Full web and mobile apps with on-premise digital signing.",
    tags: ["Custom Software", "KPKT & SC Licensed", "Audit Trail"],
    href: "https://kredit.my",
    logo: "/logos/kredit.png",
  },
  {
    title: "CashSouk",
    description:
      "P2P lending marketplace connecting borrowers with investors. Built for scale with full compliance features.",
    tags: ["Custom Software", "P2P Lending", "SC Licensed"],
    href: "https://cashsouk.com",
    isComingSoon: true,
    logo: "/logos/cashsouk_logo.png",
  },
];

export function CaseStudies() {
  return (
    <section className="border-t py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Success Stories"
          subtitle="See how we've helped KPKT operators go digital and built custom fintech platforms."
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
              logo={study.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
