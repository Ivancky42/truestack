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
    title: "KPKT Account Management",
    href: "/services/account-management",
    description: "Compliance handling, license renewals, and regulatory submissions.",
    icon: ClipboardCheck,
  },
];

const kpktDigitalLicenseConversion = [
  {
    title: "KPKT Digital License Conversion",
    href: "/services/digital-license",
    description: "Transform to a fully digital KPKT-licensed platform in 6 months.",
    icon: FileCheck,
  },
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
  const isSolutionsActive = pathname.startsWith("/services") || pathname.startsWith("/truekredit");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsExpanded(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-visible">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 overflow-visible">
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
        <nav className="hidden items-center gap-7 md:flex overflow-visible">
          <NavigationMenu className="overflow-visible">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent text-base font-medium",
                    isSolutionsActive
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-2 gap-6 p-6">
                    {/* Left Column - Services */}
                    <div className="space-y-4">
                      {/* KPKT Services Group */}
                      <div>
                        <p className="mb-2 flex items-center gap-2 px-2 text-sm font-semibold uppercase tracking-wider text-kpkt">
                          <span className="h-1.5 w-1.5 rounded-full bg-kpkt" />
                          Services
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
                                    <div className="text-base font-medium">{item.title}</div>
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

                      {/* KPKT Digital License Conversion Group */}
                      <div className="border-t pt-4">
                        <p className="mb-2 flex items-center gap-2 px-2 text-sm font-semibold uppercase tracking-wider text-kpkt">
                          <span className="h-1.5 w-1.5 rounded-full bg-kpkt" />
                          Software Development
                        </p>
                        <ul className="space-y-1">
                          {kpktDigitalLicenseConversion.map((item) => (
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
                                    <div className="text-base font-medium">{item.title}</div>
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
                    </div>

                    {/* Right Column - Platforms */}
                    <div className="border-l pl-4">
                      <p className="mb-2 flex items-center gap-2 px-2 text-sm font-semibold uppercase tracking-wider text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Platforms
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
                                    <div className="text-base font-medium">{item.title}</div>
                                    <p className="text-[15px] text-muted-foreground">
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
                                    <div className="text-base font-medium">{item.title}</div>
                                    <p className="text-[15px] text-muted-foreground">
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
                "text-base font-medium transition-colors hover:text-primary",
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
                    {/* KPKT Services */}
                    <p className="px-3 py-1 text-sm font-semibold uppercase tracking-wider text-kpkt">
                      KPKT Services
                    </p>
                    {kpktServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2.5 text-base transition-colors hover:bg-kpkt/10",
                          pathname === item.href
                            ? "bg-kpkt/10 text-kpkt"
                            : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    ))}
                    {/* KPKT Digital License Conversion */}
                    <p className="mt-2 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-kpkt">
                      KPKT Digital License Conversion
                    </p>
                    {kpktDigitalLicenseConversion.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2.5 text-base transition-colors hover:bg-kpkt/10",
                          pathname === item.href
                            ? "bg-kpkt/10 text-kpkt"
                            : "text-muted-foreground"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    ))}
                    {/* Platforms */}
                    <p className="mt-2 px-3 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
                      Platforms
                    </p>
                    {corePlatforms.map((item) =>
                      item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 rounded-md px-3 py-2.5 text-base transition-colors hover:bg-accent text-muted-foreground"
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
                            "flex items-center gap-2 rounded-md px-3 py-2.5 text-base transition-colors hover:bg-accent",
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
