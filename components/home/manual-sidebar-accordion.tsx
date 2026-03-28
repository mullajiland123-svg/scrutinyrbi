"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type AccordionChild = {
  label: string;
  href?: string;
  value?: string;
};

type AccordionSection = {
  title: string;
  children?: AccordionChild[];
};

type ManualSidebarAccordionProps = {
  title: string;
  sections: AccordionSection[];
  defaultOpen?: number | null;
};

export function ManualSidebarAccordion({
  title,
  sections,
  defaultOpen = 0,
}: ManualSidebarAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const toggleSection = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-2">
      <h3 className="text-[15px] font-normal text-[var(--rbi-brown)]">
        {title}
      </h3>

      <div className="space-y-0.5">
        {sections.map((section, index) => {
          const isOpen = openIndex === index;
          const hasChildren = section.children && section.children.length > 0;

          return (
            <div key={section.title}>
              {/* Header */}
              <button
                type="button"
                onClick={() => hasChildren && toggleSection(index)}
                className={clsx(
                  "flex w-full items-center justify-between px-3 py-2 text-left text-[13px] font-medium text-white transition-colors",
                  "bg-[var(--rbi-blue)] hover:bg-[var(--rbi-blue-dark)]",
                )}
              >
                <span>{section.title}</span>

                {hasChildren ? (
                  isOpen ? (
                    <ChevronUp className="h-4 w-4 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0" />
                  )
                ) : null}
              </button>

              {/* Content */}
              {hasChildren && isOpen && (
                <div className="border border-t-0 border-[var(--rbi-blue)] bg-[#f7f1e4]">
                  {section.children?.map((child, childIndex) => (
                    <div
                      key={child.label}
                      className={clsx(
                        "border-b border-dotted border-[#8a7f6a] px-3 py-2 text-[13px] text-black last:border-b-0",
                        child.href && "hover:bg-[#efe6d3]",
                      )}
                    >
                      {child.href ? (
                        <Link
                          href={child.href}
                          className="flex items-start justify-between gap-3"
                        >
                          <span>{child.label}</span>
                          {child.value ? (
                            <span className="font-medium">{child.value}</span>
                          ) : null}
                        </Link>
                      ) : (
                        <div className="flex items-start justify-between gap-3">
                          <span>{child.label}</span>
                          {child.value ? (
                            <span className="font-medium">{child.value}</span>
                          ) : null}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}