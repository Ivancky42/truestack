"use client";

import { useState } from "react";
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
import { FileCheck, Code2, ClipboardCheck, Menu, ChevronDown, Fingerprint, CreditCard } from "lucide-react";

const kpktServices = [
  {
    title: "Account Management",
    href: "/services/account-management",
    description: "Compliance handling, license renewals, and regulatory submissions.",
    icon: ClipboardCheck,
  },
  {
    title: "Digital License Conversion",
    href: "/services/digital-license",
    description: "Transform to a fully digital KPKT-licensed platform in 6 months.",
    icon: FileCheck,
  },
];

const softwareServices = [
  {
    title: "Custom Fintech Solutions",
    href: "/services/software-development",
    description: "P2P lending, digital lending platforms, and payment systems.",
    icon: Code2,
  },
];

const corePlatforms = [
  {
    title: "TrueKredit™",
    href: "/truekredit",
    description: "KPKT Loan Management System for licensed money lenders.",
    icon: CreditCard,
    external: false,
  },
  {
    title: "TrueIdentity™",
    href: "https://core.truestack.my",
    description: "e-KYC verification for Malaysian fintechs. Fast, secure, and compliant.",
    icon: Fingerprint,
    external: true,
  },
];

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [platformsExpanded, setPlatformsExpanded] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesExpanded(false);
    setPlatformsExpanded(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/truestack-logo-transparent.svg"
            alt="Truestack"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-sm font-medium",
                    isServicesActive
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[420px] p-4">
                    {/* KPKT Services Group */}
                    <div className="mb-4">
                      <p className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wider text-kpkt">
                        <span className="h-1.5 w-1.5 rounded-full bg-kpkt" />
                        KPKT Services
                      </p>
                      <ul className="space-y-1">
                        {kpktServices.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-kpkt/10"
                              >
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-kpkt/10">
                                  <item.icon className="h-4 w-4 text-kpkt" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{item.title}</div>
                                  <p className="text-xs text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Development Group */}
                    <div className="border-t pt-4">
                      <p className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Software Development
                      </p>
                      <ul className="space-y-1">
                        {softwareServices.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-accent"
                              >
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                                  <item.icon className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium">{item.title}</div>
                                  <p className="text-xs text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View All Services Link */}
                    <div className="mt-4 border-t pt-4">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="flex items-center justify-center rounded-md bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/80"
                        >
                          View All Services
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent text-sm font-medium text-muted-foreground"
                >
                  Platforms
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4">
                    {/* Core Group */}
                    <div>
                      <p className="mb-2 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wider text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Core
                      </p>
                      <ul className="space-y-1">
                        {corePlatforms.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              {item.external ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-accent"
                                >
                                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                                    <item.icon className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium">{item.title}</div>
                                    <p className="text-xs text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-accent"
                                >
                                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                                    <item.icon className="h-4 w-4 text-primary" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium">{item.title}</div>
                                    <p className="text-xs text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              )}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[350px] sm:max-w-[350px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  src="/truestack-logo-transparent.svg"
                  alt="Truestack"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2">
              {/* Services Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-medium transition-colors hover:bg-accent",
                    isServicesActive ? "text-primary" : "text-foreground"
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      servicesExpanded && "rotate-180"
                    )}
                  />
                </button>
                {servicesExpanded && (
                  <div className="ml-3 space-y-1 border-l pl-3">
                    {/* KPKT Services */}
                    <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-kpkt">
                      KPKT Services
                    </p>
                    {kpktServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-kpkt/10",
                          pathname === item.href
                            ? "bg-kpkt/10 text-kpkt"
                            : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    ))}
                    {/* Software Development */}
                    <p className="mt-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Software
                    </p>
                    {softwareServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                          pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    ))}
                    {/* View All */}
                    <Link
                      href="/services"
                      onClick={closeMobileMenu}
                      className="mt-2 flex items-center justify-center rounded-md bg-muted px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/80"
                    >
                      View All Services
                    </Link>
                  </div>
                )}
              </div>

              {/* Platforms Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setPlatformsExpanded(!platformsExpanded)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-medium transition-colors hover:bg-accent text-foreground"
                >
                  Platforms
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      platformsExpanded && "rotate-180"
                    )}
                  />
                </button>
                {platformsExpanded && (
                  <div className="ml-3 space-y-1 border-l pl-3">
                    {/* Core */}
                    <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Core
                    </p>
                    {corePlatforms.map((item) =>
                      item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent text-muted-foreground"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent",
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                        </Link>
                      )
                    )}
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
                    "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent",
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
