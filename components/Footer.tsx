import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f1f1f1] text-sm">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-12 gap-8">
          
          {/* MORE LINKS - Left Side */}
          <div className="md:col-span-8">
            <h3 className="text-[#002366] font-semibold text-base mb-4 tracking-wide">MORE LINKS</h3>
            
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-8 text-gray-700">
              {/* Column 1 */}
              <div className="space-y-2">
                <Link href="#" className="block hover:text-[#c8102e]">Bank Holidays</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Banking Glossary</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Citizen&apos;s Charter</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Complaints</Link>
                <Link href="/contact" className="block hover:text-[#c8102e]">Contact Us</Link>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <Link href="#" className="block hover:text-[#c8102e]">COVID-19 Measures</Link>
                <Link href="#" className="block hover:text-[#c8102e]">E-LMS</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Events</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Financial Education</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Forms</Link>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <Link href="#" className="block hover:text-[#c8102e]">IFSC/MICR Codes</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Important Websites</Link>
                <Link href="#" className="block hover:text-[#c8102e]">Opportunities@RBI</Link>
                <Link href="#" className="block hover:text-[#c8102e]">RBI Clarifications</Link>
                <Link href="#" className="block hover:text-[#c8102e]">RBI Kehta Hai</Link>
              </div>
            </div>
          </div>

          {/* FOLLOW RBI - Right Side */}
          <div className="md:col-span-4">
            <h3 className="text-[#002366] font-semibold text-base mb-4 tracking-wide">FOLLOW RBI</h3>
            
            <div className="grid grid-cols-2 gap-y-3 text-gray-700">
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                RSS
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                𝕏 Twitter
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                YouTube
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                Instagram
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                Facebook
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                LinkedIn
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                Download Mobile App
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                Play Store
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#c8102e]">
                App Store
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dark Bar */}
      <div className="bg-[#1a1a1a] text-white py-6 text-xs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            
            {/* Left - Copyright & Contact */}
            <div>
              <p>© Reserve Bank of India. All Rights Reserved.</p>
              <p className="mt-1">
                Website owned and managed by Reserve Bank of India. 
                Contact us on <span className="underline">helpdoc@rbi.org.in</span>
              </p>
            </div>

            {/* Right - Support & Last Updated */}
            <div className="text-right">
              <p>Supports: Google Chrome 125+ | Firefox 126+ | Microsoft Edge Version 125+ | Safari 17+</p>
              <p className="mt-1">
                Website last updated date: <span className="font-medium">Mar 27, 2026</span>
              </p>
            </div>
          </div>

          {/* Very Bottom Links */}
          <div className="border-t border-gray-700 mt-6 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] justify-center md:justify-start">
            <Link href="#" className="hover:underline">Sitemap</Link>
            <Link href="#" className="hover:underline">Disclaimer</Link>
            <Link href="#" className="hover:underline">Accessibility Statement</Link>
            <Link href="#" className="hover:underline">Screen Reader</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}