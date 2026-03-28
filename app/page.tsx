'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'whatsnew' | 'updated' | 'citizen' | 'rekyc'>('whatsnew');

  const whatsNewItems = [
    "Meeting Schedule of the Monetary Policy Committee for 2026-2027",
    "RBI Bulletin – March 2026",
    "622nd Meeting of Central Board of the Reserve Bank of India",
    "Statement on HDFC Bank Limited",
    "Digital Payments Awareness Week 2026 - Launch of ‘Awareness Program on Digital Payments’",
    "RBI issues Amendment Directions on ‘Counterparty Credit Risk’",
    "RBI issues Directions on Prudential Norms on Declaration of Dividend",
    "Digitalisation for Inclusive Finance and Sustainability: Priorities for the Next Phase",
  ];

  const tabs = [
    { key: 'whatsnew', label: "What's New" },
    { key: 'updated', label: 'Sections Updated Today' },
    { key: 'citizen', label: "Citizen's Corner" },
    { key: 'rekyc', label: 'ReKYC' },
  ]

  return (
    <>
      {/* Orange Preamble Banner */}
      <section className="text-white py-2">
        <div className="max-w-7xl mx-auto px-6 bg-amber-800">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Building Image Placeholder */}
            <div className="w-full lg:w-80 h-52 bg-linear-to-br from-amber-800 to-amber-900 rounded-xl flex items-center justify-center text-6xl shadow-inner">
              🏛️
            </div>

            {/* Preamble Text */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 tracking-wide">PREAMBLE</h2>
              <p className="italic text-lg leading-relaxed">
                “to regulate the issue of Bank notes and keeping of reserves with a view to securing monetary stability in India
                and generally to operate the currency and credit system of the country to its advantage; to have a modern monetary
                policy framework to meet the challenge of an increasingly complex economy, to maintain price stability while keeping
                in mind the objective of growth.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Three-Column Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-3 space-y-6">
            {/* 1. Current Rates */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#002366] text-white px-6 py-4 font-semibold text-lg">
                1. Current Rates
              </div>
              <div className="divide-y">
                {['Policy Rates', 'Reserve Ratios', 'Exchange Rates', 'Lending / Deposit Rates', 'Market Trends'].map((item) => (
                  <div key={item} className="px-6 py-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center">
                    <span>{item}</span>
                    <span className="text-xl">›</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Connect 2 Regulate */}
            <Link href="/connect2regulate">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="bg-[#002366] text-white px-6 py-4 font-semibold text-lg rounded-lg">
                  2. Connect 2 Regulate
                </div>
                <div className="mt-4 text-center text-[#c8102e] font-medium">
                  Click here to lodge your complaint →
                </div>
              </div>
            </Link>

            {/* 3. RBI Regulated Entities */}
            <Link href="/regulated-entities">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="bg-[#002366] text-white px-6 py-4 font-semibold text-lg rounded-lg">
                  3. RBI Regulated Entities
                </div>
                <div className="mt-4 text-center text-[#c8102e] font-medium">
                  Search Regulated Entities →
                </div>
              </div>
            </Link>

            {/* Logos Section */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-xl border text-center text-xs">Retail Direct</div>
              <div className="bg-white p-4 rounded-xl border text-center text-xs">UDGAM</div>
              <div className="bg-white p-4 rounded-xl border text-center text-xs">Maha MANI</div>
              <div className="bg-white p-4 rounded-xl border text-center text-xs">RBI Kehta Hai</div>
            </div>
          </div>

          {/* CENTER CONTENT - TABS */}
          <div className="lg:col-span-6">
            {/* Tabs */}
            <div className="flex border-b mb-6 overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as 'whatsnew' | 'updated' | 'citizen' | 'rekyc')}
                  className={`px-8 py-4 font-medium whitespace-nowrap border-b-4 transition-all ${activeTab === tab.key
                      ? 'border-[#c8102e] text-[#002366] font-semibold'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'whatsnew' && (
              <div className="space-y-6">
                {whatsNewItems.map((title, index) => (
                  <div key={index} className="border-l-4 border-[#c8102e] pl-6 py-1">
                    <Link href="#" className="text-[#002366] hover:underline font-medium leading-tight">
                      {title}
                    </Link>
                  </div>
                ))}
                <div className="text-center pt-4">
                  <Link href="/whats-new" className="text-[#c8102e] hover:underline font-medium">
                    View All Announcements →
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'updated' && (
              <div className="p-10 bg-gray-50 rounded-2xl text-center text-gray-600">
                Sections Updated Today content will appear here.
              </div>
            )}

            {activeTab === 'citizen' && (
              <div className="p-10 bg-gray-50 rounded-2xl text-center text-gray-600">
                Citizen&apos;s Corner content will appear here.
              </div>
            )}

            {activeTab === 'rekyc' && (
              <div className="p-10 bg-gray-50 rounded-2xl text-center text-gray-600">
                ReKYC Portal information and link will appear here.
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR - FUNCTIONWISE SITES */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-[#002366] text-white px-6 py-4 font-semibold text-lg">
                FUNCTIONWISE SITES
              </div>
              <div className="divide-y text-sm">
                {[
                  'Monetary Policy', 'Banker to Governments and Banks', 'Currency Management',
                  'Consumer Education and Protection', 'Debt Management', 'Enforcement',
                  'External Investments and Operations', 'Financial Inclusion and Development',
                  'Financial Markets', 'Financial Stability Analysis', 'FinTech',
                  'Foreign Exchange Management', 'International Relations', 'Payment and Settlement Systems',
                  'Regulation', 'Supervision', 'Research'
                ].map((item) => (
                  <div key={item} className="px-6 py-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center">
                    <span>{item}</span>
                    <span className="text-xl">›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}