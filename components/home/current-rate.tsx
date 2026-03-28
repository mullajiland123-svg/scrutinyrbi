import { Container } from "@/components/shared/container";

const rates = [
  { label: "Policy Repo Rate", value: "6.50%" },
  { label: "Standing Deposit Facility Rate", value: "6.25%" },
  { label: "Marginal Standing Facility Rate", value: "6.75%" },
  { label: "Bank Rate", value: "6.75%" },
  { label: "CRR", value: "4.50%" },
  { label: "SLR", value: "18.00%" },
];

export function CurrentRates() {
  return (
    <section className="border-b border-rbi-border bg-rbi-paper">
      <Container className="py-8">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">Current Rates</h2>
            <p className="section-subtitle">
              Key policy and reserve indicators
            </p>
          </div>

          <p className="text-xs text-rbi-text-light">
            Last updated: 28 March 2026
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {rates.map((item) => (
            <div key={item.label} className="rbi-rate-card card-hover">
              <p className="rbi-rate-label leading-6">{item.label}</p>
              <p className="rbi-rate-value">{item.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}