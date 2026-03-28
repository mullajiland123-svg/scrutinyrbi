import { Container } from "@/components/shared/container";
import { LeftSidebar } from "./left-sidebar";
import { HomeTabs } from "./home-tabs";
import { RightSidebar } from "./right-sidebar";

export function HomeDashboard() {
  return (
    <section className="bg-rbi-page-gray">
      <Container className="py-4">
        {/* Preamble */}
        <div className="mb-4 grid border border-rbi-border bg-rbi-preamble lg:grid-cols-[180px_1fr]">
          <div className="flex items-center justify-center border-r border-rbi-border bg-rbi-preamble-image p-4">
            <div className="flex h-28 w-20 items-end justify-center rounded-t-[2rem] bg-linear-to-t from-stone-400 to-stone-100 shadow-md">
              <div className="mb-2 h-5 w-5 rounded-full bg-stone-700" />
            </div>
          </div>

          <div className="p-4 md:p-5">
            <h1 className="mb-2 text-2xl font-medium uppercase text-black">
              PREAMBLE
            </h1>
            <p className="max-w-5xl text-[15px] leading-8 text-black">
              “to regulate the issue of Bank notes and keeping of reserves with
              a view to securing monetary stability in India and generally to
              operate the currency and credit system of the country to its
              advantage; to have a modern monetary policy framework to meet the
              challenge of an increasing complex economy, to maintain price
              stability while keeping in mind the objective of growth.”
            </p>
          </div>
        </div>

        {/* Blue divider */}
        <div className="mb-4 h-8 bg-rbi-blue-strip" />

        {/* 3-column layout */}
        <div className="grid gap-4 lg:grid-cols-[244px_minmax(0,1fr)_244px]">
          <LeftSidebar />
          <HomeTabs />
          <RightSidebar />
        </div>
      </Container>
    </section>
  );
}