export default function WhatsNew() {
  const announcements = [
    { date: "Mar 27, 2026", title: "Meeting Schedule of the Monetary Policy Committee for 2026-2027" },
    { date: "Mar 26, 2026", title: "RBI Bulletin – March 2026" },
    { date: "Mar 20, 2026", title: "Guidelines on Digital Lending – Review" },
    { date: "Mar 15, 2026", title: "Master Direction on Know Your Customer (KYC) Direction, 2026" },
    { date: "Mar 06, 2026", title: "Digitalisation for Inclusive Finance and Sustainability" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-[#002366] mb-10">What&apos;s New / Press Releases</h1>
      
      <div className="space-y-8">
        {announcements.map((item, index) => (
          <div key={index} className="border-l-4 border-[#c8102e] pl-8 py-2">
            <span className="text-sm text-gray-500 block mb-1">{item.date}</span>
            <h3 className="text-xl font-medium hover:text-[#c8102e] cursor-pointer">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-500">More announcements available on the official RBI website.</p>
    </div>
  );
}