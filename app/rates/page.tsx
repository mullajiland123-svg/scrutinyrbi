export default function CurrentRates() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-[#002366] mb-8">Current Policy Rates</h1>
      
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#002366] text-white">
            <tr>
              <th className="py-5 px-8 text-left">Particulars</th>
              <th className="py-5 px-8 text-left">Rate (%)</th>
              <th className="py-5 px-8 text-left">Effective From</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="py-6 px-8 font-medium">Repo Rate</td>
              <td className="py-6 px-8 text-2xl font-semibold text-[#c8102e]">6.50</td>
              <td className="py-6 px-8 text-gray-600">February 08, 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-6 px-8 font-medium">Reverse Repo Rate</td>
              <td className="py-6 px-8 text-2xl font-semibold">5.25</td>
              <td className="py-6 px-8 text-gray-600">February 08, 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-6 px-8 font-medium">CRR (Cash Reserve Ratio)</td>
              <td className="py-6 px-8 text-2xl font-semibold">4.00</td>
              <td className="py-6 px-8 text-gray-600">—</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-6 px-8 font-medium">SLR (Statutory Liquidity Ratio)</td>
              <td className="py-6 px-8 text-2xl font-semibold">18.00</td>
              <td className="py-6 px-8 text-gray-600">—</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-6 px-8 font-medium">Bank Rate</td>
              <td className="py-6 px-8 text-2xl font-semibold">6.75</td>
              <td className="py-6 px-8 text-gray-600">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-6">Last updated: March 27, 2026</p>
    </div>
  );
}