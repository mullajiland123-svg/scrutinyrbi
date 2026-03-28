"use client";

import clsx from "clsx";
import { useState } from "react";

const tabs = [
  "Contact us through email",
  "Contact us-Departments",
  "Contact us-Regional Offices",
];

export function ContactTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-wrap border-b border-[#d8c5a6] bg-[#f5f5f5]">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(index)}
          className={clsx(
            "border-r border-[#d8c5a6] px-4 py-4 text-left text-[13px] font-normal text-[var(--rbi-text)] transition-colors",
            activeTab === index
              ? "bg-[#efe4d1] font-semibold text-[var(--rbi-brown)]"
              : "bg-[#f8f8f8] hover:bg-[#f1ece3]"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}