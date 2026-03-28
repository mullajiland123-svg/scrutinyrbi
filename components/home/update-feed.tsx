import { Container } from "@/components/shared/container";
import { ChevronRight } from "lucide-react";

const updates = [
  {
    title: "Master Direction on Digital Payment Security Controls",
    date: "28 Mar 2026",
  },
  {
    title: "Monetary Policy Committee Meeting Schedule for FY 2026–27",
    date: "27 Mar 2026",
  },
  {
    title: "RBI Bulletin – March 2026",
    date: "25 Mar 2026",
  },
  {
    title: "Statement on Developmental and Regulatory Policies",
    date: "24 Mar 2026",
  },
  {
    title: "Updated Directions on KYC and Customer Due Diligence",
    date: "22 Mar 2026",
  },
  {
    title: "Annual Report on Currency and Payments Infrastructure",
    date: "20 Mar 2026",
  },
];

const quickLinks = [
  "Bank Holidays",
  "Acts",
  "Master Circulars",
  "Notifications",
  "Press Releases",
  "Tenders",
  "Citizen Charter",
  "Public Awareness",
];

export function UpdatesFeed() {
  return (
    <section className="gov-section border-b border-rbi-border">
      <Container className="grid gap-6 py-8 lg:grid-cols-[1.3fr_0.8fr]">
        {/* What's New */}
        <div className="gov-card overflow-hidden rounded-none">
          <div className="border-b border-rbi-border bg-rbi-navy px-5 py-4">
            <h2 className="text-lg font-semibold text-white">What’s New</h2>
          </div>

          <div className="divide-y divide-rbi-border">
            {updates.map((item, index) => (
              <button
                key={index}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-rbi-cream"
              >
                <div>
                  <p className="rbi-news-link text-[15px] leading-6">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-rbi-text-light">{item.date}</p>
                </div>

                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-rbi-text-light" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick access */}
        <div className="gov-card overflow-hidden rounded-none">
          <div className="border-b border-rbi-border bg-rbi-orange px-5 py-4">
            <h2 className="text-lg font-semibold text-rbi-navy">Quick Links</h2>
          </div>

          <div className="grid grid-cols-1 divide-y divide-rbi-border">
            {quickLinks.map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-rbi-text transition-colors hover:bg-rbi-cream"
              >
                <span>{item}</span>
                <ChevronRight className="h-4 w-4 text-rbi-text-light" />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}