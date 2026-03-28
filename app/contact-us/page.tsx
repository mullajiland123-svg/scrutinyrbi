import { ContactForm } from "@/components/contact/contact-form";
import { ContactTabs } from "@/components/contact/contact-tabs";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#e9e9e9]">
      <div className="mx-auto max-w-[1100px] px-4 py-3">
        {/* Breadcrumb */}
        <div className="bg-[var(--rbi-blue)] px-3 py-2 text-[13px] text-white">
          <Link href="/" className="underline underline-offset-2">
            Home
          </Link>
          <span className="mx-1 text-white/80">›</span>
          <span>Contact Us</span>
        </div>

        {/* Content Wrapper */}
        <div className="border border-[#d8c5a6] bg-white">
          <ContactTabs />

          <div className="px-3 py-6 md:px-5">
            <h1 className="border-b border-dotted border-[#9b9b9b] pb-2 text-[22px] font-normal uppercase tracking-[0.2px] text-[var(--rbi-blue)]">
              Contact Us
            </h1>

            <div className="mt-9 flex justify-center">
              <ContactForm />
            </div>

            <div className="mt-2 text-center">
              <Link
                href="#"
                className="text-[13px] text-[var(--rbi-blue)] underline underline-offset-2 hover:text-[var(--rbi-brown)]"
              >
                Back to previous page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}