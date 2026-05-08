"use client";

import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { FileCheck, Code2, ClipboardCheck, Menu, ChevronDown, Fingerprint, CreditCard, Network, TrendingUp, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type SolutionMenuItem = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  badgeIcon?: LucideIcon;
};

/** Desktop Solutions dropdown + mobile accordion (three columns: Platforms, APIs, Services). */
const solutionsMenuColumns: { heading: string; items: SolutionMenuItem[] }[] = [
  {
    heading: "Platforms",
    items: [
      {
        title: "TrueKredit™",
        href: "/truekredit",
        description: "KPKT Loan Management System for licensed money lenders.",
        icon: CreditCard,
        badge: "Popular",
        badgeIcon: TrendingUp,
      },
      {
        title: "TrueP2P™",
        href: "/services/p2p-software-development",
        description: "SC-aligned peer-to-peer financing platforms, built end-to-end for Malaysia.",
        icon: Network,
      },
    ],
  },
  {
    heading: "APIs",
    items: [
      {
        title: "TrueIdentity™",
        href: "/trueidentity",
        description: "e-KYC verification for Malaysian fintechs. Fast, secure, and compliant.",
        icon: Fingerprint,
      },
      {
        title: "TrueSSM™",
        href: "/truessm",
        description: "Programmatic SSM registry search, profiles, and scanned documents.",
        icon: Building2,
      },
    ],
  },
  {
    heading: "Services",
    items: [
      {
        title: "KPKT Digital License",
        href: "/services/digital-license",
        description: "Transform to a fully digital KPKT-licensed platform in 3 months.",
        icon: FileCheck,
        badge: "Popular",
        badgeIcon: TrendingUp,
      },
      {
        title: "KPKT Account Management",
        href: "/services/account-management",
        description: "Compliance handling, license renewals, and regulatory submissions.",
        icon: ClipboardCheck,
      },
      {
        title: "Custom Software Development",
        href: "/services/software-development",
        description: "Digital lending platforms, payment systems, and bespoke software built to spec.",
        icon: Code2,
      },
    ],
  },
];

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

function useIsDarkSection(pathname: string) {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const check = () => {
      // Sample point: center of viewport, just below header (~90px from top)
      const el = document.elementFromPoint(window.innerWidth / 2, 90);
      const inDarkSection = el?.closest('[data-nav-theme="dark"]');
      setIsDark(!!inDarkSection);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  return isDark;
}

export function Header() {
  const pathname = usePathname();
  const isSolutionsActive = pathname.startsWith("/services") || pathname.startsWith("/truekredit") || pathname.startsWith("/trueidentity") || pathname.startsWith("/truessm");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);
  const isDarkSection = useIsDarkSection(pathname);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsExpanded(false);
  };

  const headerClasses = cn(
    "sticky top-0 z-50 w-full border-b overflow-visible transition-colors duration-200",
    isDarkSection
      ? "bg-slate-950 border-slate-800 backdrop-blur"
      : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border"
  );

  const navLinkClasses = (active: boolean) =>
    cn(
      "text-base font-medium transition-colors",
      isDarkSection
        ? active
          ? "text-white"
          : "text-slate-300 hover:text-white"
        : active
          ? "text-primary"
          : "text-muted-foreground hover:text-primary"
    );

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 overflow-visible">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={isDarkSection ? "/truestack-logo-transparent-dark.png" : "/truestack-logo-transparent.png"}
            alt="Truestack"
            width={140}
            height={32}
            className="h-8 w-auto"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex overflow-visible">
          <NavigationMenu className="flex-none overflow-visible">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-base font-medium",
                    navLinkClasses(isSolutionsActive)
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={cn(
                    // Radix sizes the viewport from this node’s offsetWidth; without an
                    // explicit width, absolute positioning collapses to ~trigger width.
                    "w-[min(calc(100vw-2rem),72rem)] min-w-[min(calc(100vw-2rem),72rem)] max-w-[calc(100vw-2rem)] p-0",
                  )}
                >
                  <div className="grid w-full grid-cols-3 gap-x-10 gap-y-2 p-8">
                    {solutionsMenuColumns.map((column, colIndex) => (
                      <div
                        key={column.heading}
                        className={cn(
                          colIndex > 0 && "border-l border-border pl-8",
                        )}
                      >
                        <p className="mb-2 flex items-center gap-2 px-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                          {column.heading}
                        </p>
                        <ul className="space-y-1">
                          {column.items.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-accent"
                                >
                                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                                    <item.icon className="h-4 w-4 text-primary" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-base font-medium">{item.title}</span>
                                      {item.badge && (
                                        <Badge variant="secondary" className="shrink-0 gap-1 bg-emerald-100 px-1.5 py-0 text-[10px] font-medium text-emerald-800">
                                          {item.badgeIcon && <item.badgeIcon className="h-2.5 w-2.5" />}
                                          {item.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-[15px] text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClasses(pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            asChild
            variant={isDarkSection ? "outline" : "default"}
            className={isDarkSection ? "border-slate-400 bg-transparent text-white hover:bg-slate-800 hover:text-white hover:border-slate-300" : ""}
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" className={isDarkSection ? "text-slate-300 hover:text-white hover:bg-slate-800" : ""}>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[350px] sm:max-w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  src={isDarkSection ? "/truestack-logo-transparent-dark.png" : "/truestack-logo-transparent.png"}
                  alt="Truestack"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                  style={{ width: "auto" }}
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2">
              {/* Solutions Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-lg font-medium transition-colors hover:bg-accent",
                    isSolutionsActive ? "text-primary" : "text-foreground"
                  )}
                >
                  Solutions
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      solutionsExpanded && "rotate-180"
                    )}
                  />
                </button>
                {solutionsExpanded && (
                  <div className="ml-3 space-y-1 border-l pl-3">
                    {solutionsMenuColumns.map((column, colIndex) => (
                      <div key={column.heading}>
                        <p
                          className={cn(
                            "px-3 py-1 text-sm font-semibold uppercase tracking-wider text-foreground",
                            colIndex > 0 && "mt-2"
                          )}
                        >
                          {column.heading}
                        </p>
                        {column.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-3 py-2.5 text-base transition-colors hover:bg-accent",
                              pathname === item.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground"
                            )}
                          >
                            <item.icon className="h-4 w-4 shrink-0" />
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                              <Badge variant="secondary" className="shrink-0 gap-1 bg-emerald-100 px-1.5 py-0 text-[10px] font-medium text-emerald-800">
                                {item.badgeIcon && <item.badgeIcon className="h-2.5 w-2.5" />}
                                {item.badge}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-lg font-medium transition-colors hover:bg-accent",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Contact Button */}
              <div className="mt-4 border-t pt-4 px-3">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Contact
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
