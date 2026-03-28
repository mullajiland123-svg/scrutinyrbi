"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  "What's New",
  "Sections Updated Today",
  "Citizen's Corner",
  "ReKYC",
];

const tabContent: Record<string, string[]> = {
  "What's New": [
    "Meeting Schedule of the Monetary Policy Committee for 2026-2027",
    "RBI Bulletin – March 2026",
    "622nd Meeting of Central Board of the Reserve Bank of India",
    "Statement on HDFC Bank Limited",
    "Digital Payments Awareness Week 2026 - Launch of Awareness Program",
    "RBI issues Amendment Directions on Counterparty Credit Risk",
    "RBI issues Directions on Prudential Norms on Dividend Declaration",
    "RBI Issues Draft Amendment Directions for Review of Framework of Limiting Customer Liability in Digital Transactions",
  ],
  "Sections Updated Today": [
    "Notifications section updated with latest circulars",
    "Exchange rates page revised",
    "Publications repository updated",
    "Financial Stability Analysis section refreshed",
    "Research papers index updated",
    "Citizen awareness resources updated",
  ],
  "Citizen's Corner": [
    "How to identify safe digital payment channels",
    "Banking ombudsman resources",
    "Complaint redressal process explained",
    "Consumer awareness on fraud prevention",
    "Safe banking and cyber hygiene guidance",
    "Public financial literacy resources",
  ],
  ReKYC: [
    "ReKYC guidelines for regulated entities",
    "Periodic KYC update instructions",
    "Customer due diligence FAQs",
    "ReKYC compliance circulars",
    "Account update requirements",
    "Digital KYC workflow notes",
  ],
};

export function HomeTabs() {
  const [activeTab, setActiveTab] = useState("What's New");

  return (
    <section className="border border-rbi-border bg-rbi-tab-bg">
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-rbi-border bg-transparent">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "min-h-12.5 border-r border-rbi-border px-4 py-3 text-left text-sm font-medium transition-colors",
                isActive
                  ? "bg-rbi-tab-active text-rbi-brown"
                  : "bg-rbi-tab-inactive text-rbi-text hover:bg-rbi-tab-hover"
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="bg-rbi-tab-content px-4 py-3">
        <div className="divide-y divide-dotted divide-rbi-border-strong">
          {tabContent[activeTab].map((item, index) => (
            <button
              key={index}
              className="block w-full py-4 text-left text-[15px] font-medium leading-7 text-blue-700 hover:underline"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}