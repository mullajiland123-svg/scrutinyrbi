"use client";

import Link from "next/link";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/shared/container";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import clsx from "clsx";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Notifications",
    href: "/notifications",
    children: [
      { label: "Master Directions", href: "/notifications/master-directions" },
      { label: "Master Circulars", href: "/notifications/master-circulars" },
      {
        label: "Draft Notifications",
        href: "/notifications/draft-notifications",
      },
      { label: "Circular Index", href: "/notifications/circular-index" },
    ],
  },
  { label: "Press Releases", href: "/press-releases" },
  {
    label: "Speeches & Media Interactions",
    href: "/speeches-media",
    children: [
      { label: "Governor Speeches", href: "/speeches-media/governor-speeches" },
      {
        label: "Deputy Governor Speeches",
        href: "/speeches-media/deputy-governor-speeches",
      },
      { label: "Interviews", href: "/speeches-media/interviews" },
      { label: "Media Statements", href: "/speeches-media/media-statements" },
    ],
  },
  {
    label: "Publications",
    href: "/publications",
    children: [
      { label: "Annual Reports", href: "/publications/annual-reports" },
      { label: "Monthly Bulletin", href: "/publications/monthly-bulletin" },
      { label: "Working Papers", href: "/publications/working-papers" },
      { label: "Research Reports", href: "/publications/research-reports" },
    ],
  },
  {
    label: "Legal Framework",
    href: "/legal-framework",
    children: [
      { label: "Acts", href: "/legal-framework/acts" },
      { label: "Regulations", href: "/legal-framework/regulations" },
      { label: "Directions", href: "/legal-framework/directions" },
      { label: "Compliance Notes", href: "/legal-framework/compliance-notes" },
    ],
  },
  { label: "Research", href: "/research" },
  {
    label: "Statistics",
    href: "/statistics",
    children: [
      { label: "Database", href: "/statistics/database" },
      { label: "Time Series", href: "/statistics/time-series" },
      { label: "Reports", href: "/statistics/reports" },
      { label: "Indicators", href: "/statistics/indicators" },
    ],
  },
  {
    label: "Regulatory Reporting",
    href: "/regulatory-reporting",
    children: [
      { label: "Returns", href: "/regulatory-reporting/returns" },
      {
        label: "Submission Systems",
        href: "/regulatory-reporting/submission-systems",
      },
      { label: "Guidelines", href: "/regulatory-reporting/guidelines" },
    ],
  },
];

export function MegaNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  return (
    <nav className="gov-nav sticky top-0 z-100 border-y border-rbi-nav-border shadow-sm">
      <Container className="px-0">
        {/* Desktop */}
        <div className="hidden w-full items-stretch lg:flex">
          {navItems.map((item) => {
            const isOpen = openDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative shrink-0"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={clsx(
                    "flex h-10 items-center gap-1 border-r border-rbi-nav-border px-3 text-[13px] font-medium transition-colors",
                    "text-rbi-nav-text hover:bg-rbi-nav-bg-hover",
                    isOpen && "bg-rbi-nav-bg-hover",
                  )}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {item.children && isOpen && (
                  <div className="absolute left-0 top-full z-200 min-w-62.5 border border-rbi-border bg-rbi-blue shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block border-b border-white/20 px-4 py-3 text-sm text-white transition-colors hover:bg-rbi-blue-dark last:border-b-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="flex h-10 w-full items-center justify-between px-4 lg:hidden">
          <span className="text-sm font-semibold text-rbi-nav-text">
            Navigation
          </span>

          <Sheet>
            <SheetTrigger>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-rbi-nav-border text-rbi-nav-text"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[320px] bg-white p-0">
              <div className="border-b border-rbi-border bg-rbi-nav-bg px-5 py-4">
                <p className="text-sm font-semibold text-rbi-nav-text">Menu</p>
                <p className="text-xs text-rbi-text-light">
                  Institutional portal navigation
                </p>
              </div>

              <div className="divide-y divide-rbi-border">
                {navItems.map((item) => {
                  const isMobileOpen = openMobileDropdown === item.label;

                  return (
                    <div key={item.label}>
                      <div className="flex items-center justify-between px-5 py-4">
                        <Link
                          href={item.href}
                          className="block text-sm font-medium text-rbi-navy"
                        >
                          {item.label}
                        </Link>

                        {item.children && (
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMobileDropdown((prev) =>
                                prev === item.label ? null : item.label,
                              )
                            }
                            className="ml-3 rounded p-1 text-rbi-navy"
                          >
                            <ChevronDown
                              className={clsx(
                                "h-4 w-4 transition-transform",
                                isMobileOpen && "rotate-180",
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {item.children && isMobileOpen && (
                        <div className="border-t border-rbi-border bg-rbi-cream px-5 py-3">
                          <div className="space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-2 text-sm text-rbi-text hover:text-rbi-blue"
                              >
                                <ChevronRight className="h-3.5 w-3.5" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
}
