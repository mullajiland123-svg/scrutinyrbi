import { ManualSidebarAccordion } from "@/components/home/manual-sidebar-accordion";
import { currentRatesSections } from "./sidebar.data";

export function LeftSidebar() {
  return (
    <aside className="space-y-6">
      <ManualSidebarAccordion
        title="1. Current Rates"
        sections={currentRatesSections}
        defaultOpen={0}
      />

      <div className="space-y-2">
        <h3 className="text-[15px] font-normal text-[var(--rbi-brown)]">
          2. Connect 2 Regulate
        </h3>
        <div className="bg-[var(--rbi-blue)] px-3 py-2 text-[13px] font-medium text-white">
          Connect 2 Regulate
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-[15px] font-normal text-[var(--rbi-brown)]">
          3. RBI Regulated Entities
        </h3>
        <div className="bg-[var(--rbi-blue)] px-3 py-2 text-[13px] font-medium text-white">
          RBI Regulated Entities
        </div>
      </div>
    </aside>
  );
}