import { ManualSidebarAccordion } from "@/components/home/manual-sidebar-accordion";
import { functionwiseSitesSections } from "./sidebar.data";

export function RightSidebar() {
  return (
    <aside>
      <ManualSidebarAccordion
        title="FUNCTIONWISE SITES"
        sections={functionwiseSitesSections}
        defaultOpen={null}
      />
    </aside>
  );
}