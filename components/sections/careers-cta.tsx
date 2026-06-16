import { ConsultationCta } from "@/components/sections/consultation-cta";

export function CareersCta({ howToApply }: { howToApply: string }) {
  return (
    <ConsultationCta
      eyebrow="HQ in Kuala Lumpur"
      heading="Ready to join us?"
      body={howToApply}
      primary={{ href: "/contact", label: "Apply Now" }}
      secondary={{ href: "#open-roles", label: "Browse Roles" }}
    />
  );
}
