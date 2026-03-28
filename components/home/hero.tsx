import { Container } from "@/components/shared/container";

export function Hero() {
  return (
    <section className="gov-section border-b border-rbi-border">
      <Container className="grid gap-6 py-6 lg:grid-cols-[1.2fr_0.95fr]">
        {/* Left visual / institutional feature */}
        <div className="overflow-hidden border border-rbi-border bg-white shadow-sm">
          <div className="grid min-h-80 md:grid-cols-[1fr_1.1fr]">
            <div className="flex items-center justify-center bg-rbi-cream p-6">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-rbi-orange/40 bg-white shadow-sm md:h-56 md:w-56">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rbi-red">
                    Reserve Portal
                  </p>
                  <h2 className="mt-2 text-3xl font-bold text-rbi-navy">RBI</h2>
                  <p className="mt-2 text-sm text-rbi-text-light">
                    Institutional Public Information Hub
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-[linear-gradient(180deg,#fff_0%,#f8f4ea_100%)] p-6 md:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-rbi-red">
                Featured
              </p>
              <h1 className="max-w-xl text-3xl font-bold leading-tight text-rbi-navy md:text-4xl">
                Central banking information, updates, policy and public resources
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-rbi-text-light md:text-[15px]">
                A modern RBI-inspired portal designed to publish circulars,
                policy releases, notifications, statistics, research and
                institutional updates in a clear public-facing format.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-rbi">Latest Notifications</button>
                <button className="btn-orange">Explore Publications</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right preamble-style panel */}
        <div className="gov-panel overflow-hidden">
          <div className="border-b border-rbi-border bg-(--gradient-preamble) px-6 py-4">
            <h3 className="text-xl font-semibold text-rbi-navy">Preamble</h3>
          </div>

          <div className="space-y-4 p-6 text-[15px] leading-8 text-rbi-text">
            <p>
              The primary objective of this portal is to provide structured,
              transparent and timely access to institutional communication,
              policy direction, financial data and citizen-focused services.
            </p>

            <p>
              It is designed to reflect the credibility, clarity and functional
              depth expected from a modern public financial institution.
            </p>

            <p>
              This space can later contain your official institutional mandate,
              charter summary, legal purpose, or public mission statement.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}