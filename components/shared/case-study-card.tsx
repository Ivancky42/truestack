import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  isComingSoon?: boolean;
  className?: string;
  logo?: string;
}

export function CaseStudyCard({
  title,
  description,
  tags,
  href,
  isComingSoon = false,
  className,
  logo,
}: CaseStudyCardProps) {
  const isClickable = href !== undefined;

  const cardContent = (
    <Card className="h-full transition-all hover:shadow-md group-hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {logo ? (
              <div className="flex h-12 w-28 items-center justify-center">
                <Image
                  src={logo}
                  alt={title}
                  width={112}
                  height={48}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-foreground">
                {title.charAt(0)}
              </div>
            )}
            {!logo && <CardTitle className="text-xl">{title}</CardTitle>}
          </div>
          {isComingSoon ? (
            <Badge variant="secondary">Coming Soon</Badge>
          ) : href ? (
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (isClickable) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("group block cursor-pointer", className)}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cn("group block", className)}>
      {cardContent}
    </div>
  );
}
