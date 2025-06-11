export default function CustomerInsightSection() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="uppercase text-sm font-semibold text-slate-500">Sales</p>
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">
            Know more about your customers than they do.
          </h2>
        </div>

        {/* Grid Layout - 2 cards atas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <h3 className="text-lg font-semibold text-slate-800 mb-1">Amy Lichty</h3>
            <p className="text-sm text-slate-600">
              Head of Marketing · Budget: <strong>$40,000</strong>
            </p>
            <div className="mt-4 border-t pt-4 text-sm text-slate-600 space-y-1">
              <p><strong>Marital Status:</strong> Divorced</p>
              <p><strong>Age:</strong> 34</p>
              <p><strong>Kids:</strong> Brian (5), Emily (2)</p>
            </div>
            <div className="mt-6">
              <p className="text-xs font-medium text-slate-500 uppercase mb-1">Insight</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Radiant uses social engineering to build a detailed financial picture of your leads.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-800 mb-3">Competitors</h3>
            <div className="text-sm text-slate-600 space-y-1">
              <p><strong>Ashby</strong> — Proposal Made</p>
              <p><strong>Breezy HR</strong> — Contact Made</p>
              <p><strong>Pinpoint</strong> — Contact Made</p>
            </div>
            <div className="mt-6">
              <p className="text-xs font-medium text-slate-500 uppercase mb-1">Analysis</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                With advanced data mining, know which companies your leads are talking to and what they’re being charged.
              </p>
            </div>
          </Card>
        </div>

        {/* Grid Layout - 3 cards bawah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-xs font-medium text-slate-500 uppercase mb-2">Speed</p>
            <div className="aspect-video w-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
              ⌨️ Keyboard Preview
            </div>
          </Card>

          <Card>
            <p className="text-xs font-medium text-slate-500 uppercase mb-2">Source</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["Up", "In", "WWR", "Dr"].map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sm text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-xs font-medium text-slate-500 uppercase mb-2">Limitless</p>
            <div className="aspect-video w-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
              🗺️ World Map
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      {/* Soft orange-white gradient */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top left, rgba(255, 236, 213, 0.4), rgba(255, 255, 255, 0.9))',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
