import { InvestForm } from "@/components/invest/invest-form";

export default function InvestPage() {
  return (
    <main className="gov-section min-h-screen py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 rounded-2xl border border-rbi-border bg-white p-6 shadow-sm">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-rbi-red">
            Investment Application
          </p>
          <h1 className="text-3xl font-bold text-rbi-navy">
            Investor Registration Form
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-rbi-text-light">
            Please complete the following application form carefully. Ensure
            your personal, banking, and KYC details are accurate before
            submission.
          </p>
        </div>

        <InvestForm />
      </div>
    </main>
  );
}