export default function RegulatedEntities() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-semibold text-[#002366] mb-8">RBI Regulated Entities</h1>
      <p className="text-lg text-gray-600 mb-10">
        Search for Banks, Non-Banking Financial Companies (NBFCs), Payment System Operators, Credit Rating Agencies, and more.
      </p>

      <div className="bg-white p-12 rounded-2xl shadow text-center">
        <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          🔍
        </div>
        <p className="text-2xl font-medium mb-3">Search Regulated Entities</p>
        <p className="max-w-md mx-auto text-gray-600">
          This feature will allow users to search licensed entities under RBI&apos;s regulation.
        </p>
        <div className="mt-10 text-sm text-gray-500">
          (Placeholder — Real site has a searchable database)
        </div>
      </div>
    </div>
  );
}