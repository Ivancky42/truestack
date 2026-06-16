"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * Renders a same-page smooth-scroll anchor for hash hrefs and a Next.js Link
 * for everything else. Shared by heroes and CTA bands so the smooth-scroll
 * behaviour stays consistent across the site.
 */
export function CtaLink({ href, children, className }: CtaLinkProps) {
  const isHashLink = href.startsWith("#");
  const isExternal = /^https?:\/\//.test(href);

  if (isHashLink) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
