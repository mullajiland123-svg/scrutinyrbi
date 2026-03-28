import Link from "next/link";
import { ChevronRight, Rss, Smartphone } from "lucide-react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const moreLinksColumns = [
  [
    { text: "Bank Holidays", href: "#" },
    { text: "Banking Glossary", href: "#" },
    { text: "Citizen's Charter", href: "#" },
    { text: "Complaints", href: "#" },
    { text: "Contact Us", href: "/contact-us" },
  ],
  [
    { text: "COVID-19 Measures", href: "#" },
    { text: "E-LMS", href: "#" },
    { text: "Events", href: "#" },
    { text: "FAQs", href: "#" },
    { text: "Financial Education", href: "#" },
  ],
  [
    { text: "Forms", href: "#" },
    { text: "IFSC/MICR Codes", href: "#" },
    { text: "Important Websites", href: "#" },
    { text: "Opportunities@RBI", href: "#" },
    { text: "RBI Clarifications", href: "#" },
  ],
  [
    { text: "RBI Kehta Hai", href: "#" },
    { text: "RBI's Core Purpose, Values and Vision", href: "#" },
    { text: "Right to Information Act", href: "#" },
    { text: "Tenders", href: "#" },
  ],
];

const socialLinks = [
  { name: "RSS", icon: Rss, href: "#" },
  { name: "Twitter", icon: null, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
];

export function Footer() {
  return (
    <footer className="mt-10 border-t border-black/20">
      {/* Top Footer */}
      <div className="bg-[var(--rbi-page-gray)]">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px]">
            {/* More Links */}
            <div>
              <div className="mb-2 border-b border-black/25 pb-1">
                <h3 className="text-[16px] font-normal uppercase tracking-[0.2px] text-[var(--rbi-blue)]">
                  MORE <span className="text-[var(--rbi-brown)]">LINKS</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {moreLinksColumns.map((column, index) => (
                  <ul key={index} className="space-y-2">
                    {column.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={`${item.href}`}
                          className="group inline-flex items-start gap-1.5 text-[13px] leading-[1.35] text-black hover:text-[var(--rbi-blue)]"
                        >
                          <ChevronRight className="mt-0.5 h-3 w-3 shrink-0 text-black group-hover:text-[var(--rbi-blue)]" />
                          <span>{item.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Follow RBI */}
            <div>
              <div className="mb-2 border-b border-black/25 pb-1">
                <h3 className="text-[16px] font-normal uppercase tracking-[0.2px] text-[var(--rbi-blue)]">
                  FOLLOW RBI
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-2 text-[13px] text-black">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="inline-flex items-center gap-2 hover:text-[var(--rbi-blue)]"
                    >
                      {Icon ? (
                        <Icon className="h-4 w-4" />
                      ) : (
                        <span className="inline-block h-4 w-4 text-center text-[14px] leading-4">
                          𝕏
                        </span>
                      )}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}

                <Link
                  href="#"
                  className="col-span-2 inline-flex items-center gap-2 pt-1 hover:text-[var(--rbi-blue)]"
                >
                  <Smartphone className="h-4 w-4" />
                  <span>Download Mobile App</span>
                </Link>
              </div>

              {/* Store Buttons */}
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="#"
                  className="inline-flex w-fit items-center gap-2 rounded-sm bg-black px-3 py-2 text-[12px] text-white hover:opacity-90"
                >
                  <span className="text-[14px]">▶</span>
                  <span>Play Store</span>
                </Link>

                <Link
                  href="#"
                  className="inline-flex w-fit items-center gap-2 rounded-sm bg-black px-3 py-2 text-[12px] text-white hover:opacity-90"
                >
                  <span className="text-[14px]"></span>
                  <span>App Store</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#555555] text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 md:px-6">
          <div className="grid grid-cols-1 gap-4 text-[12px] leading-[1.45] md:grid-cols-2">
            {/* Left */}
            <div>
              <p>© Reserve Bank of India. All Rights Reserved.</p>
              <p>
                Website owned and managed by Reserve Bank of India. Contact us
                on helpdoc[at]rbi[dot]org[dot]in
              </p>
              <p>
                Supports: Google Chrome 125+ | Firefox 126+ | Microsoft Edge
                Version 125+ | Safari 17+
              </p>
            </div>

            {/* Right */}
            <div className="text-left md:text-right">
              <p>
                <Link href="#" className="hover:underline">
                  Sitemap
                </Link>{" "}
                |{" "}
                <Link href="#" className="hover:underline">
                  Disclaimer
                </Link>
              </p>
              <p>Website last updated date: Mar 28, 2026</p>
              <p>
                <Link href="#" className="hover:underline">
                  Accessibility Statement
                </Link>{" "}
                |{" "}
                <Link href="#" className="hover:underline">
                  Screen Reader
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
