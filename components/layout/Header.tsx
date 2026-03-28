import { Search, Landmark } from "lucide-react";
import { Container } from "../shared/container";

export function Header() {
  return (
    <header className="border-b border-rbi-border bg-white">
      <Container className="flex flex-col gap-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-rbi-border bg-rbi-cream shadow-sm">
            <Landmark className="h-8 w-8 text-rbi-navy" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-rbi-red">
              Official Institutional Portal
            </p>
            <h1 className="text-2xl font-bold leading-tight text-rbi-navy md:text-3xl">
              Reserve-Style Public Information Portal
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-rbi-text-light">
              Modern, accessible and RBI-inspired government-grade website built
              with Next.js, TypeScript, Tailwind and shadcn/ui.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex w-full flex-col gap-3 lg:w-90">
          <div className="flex overflow-hidden rounded-lg border border-rbi-border bg-white shadow-sm">
            <input
              type="text"
              placeholder="Search the portal..."
              className="h-11 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-rbi-text-light"
            />
            <button className="flex h-11 w-12 items-center justify-center bg-rbi-navy text-white transition-colors hover:bg-rbi-navy-light">
              <Search className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-rbi-text-light">
            <span className="rounded-full border border-rbi-border bg-rbi-cream px-3 py-1">
              Notifications
            </span>
            <span className="rounded-full border border-rbi-border bg-rbi-cream px-3 py-1">
              Press Releases
            </span>
            <span className="rounded-full border border-rbi-border bg-rbi-cream px-3 py-1">
              Statistics
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}