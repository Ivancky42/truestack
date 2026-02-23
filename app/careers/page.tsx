import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Clock,
  Gem,
  BookOpen,
  MapPin,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Truestack and build fintech platforms that make a real impact. View open positions and learn about our culture.",
  keywords: [
    "Truestack careers",
    "fintech jobs Malaysia",
    "software developer Malaysia",
    "full-stack developer",
  ],
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers - Truestack",
    description:
      "Join Truestack and build fintech platforms that make a real impact. View open positions and learn about our culture.",
  },
};

const openRoles = [
  {
    title: "Full-Stack Web Developer",
    description:
      "Build modern web applications and APIs using our core technology stack. Work on customer-facing platforms and backend systems that scale.",
    location: "Remote (Malaysia)",
    type: "Full-time",
    requirements: [
      "3+ years of full-stack web development experience",
      "Strong proficiency in React/Next.js and TypeScript",
      "Experience with Node.js and Express for backend development",
      "Database experience with PostgreSQL",
      "Understanding of REST/GraphQL API design",
      "Familiarity with cloud platforms (AWS, Vercel)",
      "Experience with Docker and CI/CD pipelines",
      "Malaysian citizen or permanent resident",
    ],
    responsibilities: [
      "Develop responsive web applications using React/Next.js",
      "Build and maintain scalable APIs and backend services",
      "Implement data pipelines and integrations",
      "Write comprehensive tests and maintain code quality",
      "Collaborate on DevOps and deployment automation",
      "Optimize application performance and monitoring",
      "Work closely with design and product teams",
    ],
  },
  {
    title: "Backend Developer",
    description:
      "Design and build robust backend systems for fintech applications. Focus on API development, database design, and system architecture.",
    location: "Remote (Malaysia)",
    type: "Full-time",
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
    responsibilities: [
      "Design and implement scalable backend architectures",
      "Build secure APIs for fintech applications",
      "Optimize database queries and data models",
      "Implement audit trails and compliance features",
      "Integrate with third-party services (KYC, payments, etc.)",
      "Ensure system reliability and performance",
      "Collaborate with frontend and DevOps teams",
    ],
  },
  {
    title: "QA Engineer",
    description:
      "Ensure software quality through comprehensive testing while contributing to development and deployment processes.",
    location: "Remote (Malaysia)",
    type: "Full-time",
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
    responsibilities: [
      "Design and implement comprehensive test strategies",
      "Develop and maintain automated test suites",
      "Perform manual testing and exploratory testing",
      "Contribute to codebase improvements and bug fixes",
      "Set up and maintain testing environments",
      "Collaborate on deployment processes and release management",
      "Monitor application performance and quality metrics",
    ],
  },
];

const workingPrinciples = [
  {
    icon: Target,
    title: "Ownership",
    description:
      "Take full responsibility for your work from conception to deployment and maintenance.",
  },
  {
    icon: Clock,
    title: "Async-First",
    description:
      "Deep work time with clear communication and documentation. Meetings when necessary.",
  },
  {
    icon: Gem,
    title: "Quality Over Volume",
    description:
      "We value well-crafted solutions over quick fixes. Take time to do it right.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Stay current with technology and share knowledge with the team.",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Introduction",
    duration: "30 minutes",
    description:
      "Initial conversation about your background, interests, and our current needs.",
  },
  {
    step: "02",
    title: "Technical Discussion",
    duration: "60 minutes",
    description:
      "Deep dive into your experience and approach to problem-solving.",
  },
  {
    step: "03",
    title: "Practical Task",
    duration: "1-2 days",
    description:
      "Optional paid project to work together on a real problem (for senior roles).",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    duration: "1 week",
    description:
      "Final discussion, offer presentation, and smooth onboarding process.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        title="Build Fintech. Ship Real Products."
        subtitle="Join a team of engineers building platforms that make a real impact for fintech companies across the region."
      />

      {/* Open Roles */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Open Roles"
            subtitle="All positions are currently filled. Check back later for new opportunities."
            centered
          />

          <div className="space-y-8">
            {openRoles.map((role) => (
              <Card key={role.title} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-2xl">{role.title}</CardTitle>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <MapPin className="h-3 w-3" />
                          {role.location}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Briefcase className="h-3 w-3" />
                          {role.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="gap-1.5 bg-muted px-4 py-2 font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Position Filled
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-6 text-lg text-muted-foreground">
                    {role.description}
                  </p>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="mb-4 font-semibold">Requirements</h4>
                      <ul className="space-y-2">
                        {role.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-4 font-semibold">Responsibilities</h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((resp) => (
                          <li
                            key={resp}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="How We Work"
            subtitle="Our working principles create an environment where you can do your best work."
            centered
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workingPrinciples.map((principle) => (
              <div key={principle.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <principle.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-16 rounded-2xl border bg-background p-8">
            <h3 className="mb-6 text-center text-xl font-semibold">
              Benefits & Perks
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <h4 className="mb-2 font-medium">Competitive Package</h4>
                <p className="text-sm text-muted-foreground">
                  Competitive salary and benefits package
                </p>
              </div>
              <div className="text-center">
                <h4 className="mb-2 font-medium">Remote-First</h4>
                <p className="text-sm text-muted-foreground">
                  Flexible working hours and remote-first culture
                </p>
              </div>
              <div className="text-center">
                <h4 className="mb-2 font-medium">Growth & Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Mentorship and career development opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Hiring Process"
            subtitle="Our hiring process is designed to be respectful of your time while ensuring a good mutual fit."
            centered
          />

          <div className="grid gap-8 md:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Connector line */}
                {index < hiringSteps.length - 1 && (
                  <div className="absolute left-1/2 top-7 hidden h-0.5 w-full bg-border md:block" />
                )}
                <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mb-1 font-semibold">{step.title}</h3>
                <p className="mb-2 text-xs text-primary">{step.duration}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            <strong>Note:</strong> The practical task (step 3) is optional and
            only for senior roles. It's a paid engagement where we work together
            on a real project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to join us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're interested in a specific role or just want to
              connect, we'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Introduce Yourself
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

