"use client";

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
import { cn } from "@/lib/utils";
import { FileCheck, Code2, ClipboardCheck } from "lucide-react";

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

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

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

        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
