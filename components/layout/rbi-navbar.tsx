"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { navItems } from "./nav-data";

export function RbiNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="relative z-50 border-y border-[var(--rbi-nav-border)] bg-[var(--rbi-nav-bg)] shadow-sm">
      <div className="mx-auto flex max-w-350 items-stretch overflow-x-auto">
        {navItems.map((item) => {
          const hasChildren = !!item.children?.length;
          const isOpen = activeMenu === item.label;

          return (
            <div
              key={item.label}
              className="relative shrink-0"
              onMouseEnter={() => hasChildren && setActiveMenu(item.label)}
              onMouseLeave={() => hasChildren && setActiveMenu(null)}
            >
              {hasChildren ? (
                <>
                  <button
                    type="button"
                    className={clsx(
                      "flex h-9 items-center gap-1 border-r border-[var(--rbi-nav-border)] px-3 text-[13px] font-medium whitespace-nowrap transition-colors",
                      "text-[var(--rbi-nav-text)] hover:bg-[var(--rbi-nav-bg-hover)]",
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full min-w-57.5 border border-[var(--rbi-nav-border)] bg-white shadow-lg">
                      <div className="py-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block border-b border-[#e8dcc7] px-4 py-2 text-[13px] text-[var(--rbi-text)] transition-colors hover:bg-[var(--rbi-cream)] hover:text-[var(--rbi-brown)] last:border-b-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="flex h-9 items-center border-r border-[var(--rbi-nav-border)] px-3 text-[13px] font-medium whitespace-nowrap text-[var(--rbi-nav-text)] transition-colors hover:bg-[var(--rbi-nav-bg-hover)]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}