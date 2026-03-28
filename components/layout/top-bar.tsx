import { Moon, Sun, Type, Languages } from "lucide-react";
import { Container } from "../shared/container";

export function Topbar() {
  return (
    <div className="gov-topbar border-b border-rbi-border text-[13px]">
      <Container className="flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-rbi-text-light">
          <button className="hover:text-rbi-navy transition-colors">
            Skip to main content
          </button>
          <button className="hover:text-rbi-navy transition-colors">
            Screen Reader Access
          </button>
          <button className="hover:text-rbi-navy transition-colors">
            Accessibility
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-rbi-text-light">
          <div className="flex items-center gap-1">
            <Type className="h-3.5 w-3.5" />
            <button className="hover:text-rbi-navy transition-colors">A+</button>
            <button className="hover:text-rbi-navy transition-colors">A</button>
            <button className="hover:text-rbi-navy transition-colors">A-</button>
          </div>

          <div className="h-4 w-px bg-rbi-border" />

          <div className="flex items-center gap-2">
            <Sun className="h-3.5 w-3.5" />
            <button className="hover:text-rbi-navy transition-colors">Light</button>
            <Moon className="h-3.5 w-3.5" />
            <button className="hover:text-rbi-navy transition-colors">Dark</button>
          </div>

          <div className="h-4 w-px bg-rbi-border" />

          <button className="inline-flex items-center gap-1 hover:text-rbi-navy transition-colors">
            <Languages className="h-3.5 w-3.5" />
            English / हिंदी
          </button>
        </div>
      </Container>
    </div>
  );
}