export default function NewsletterSection() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-16 md:px-16 md:py-24 shadow-md">
          {/* Gradient background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(ellipse at 60% 50%, #fef3c7 0%, #fff7ed 50%, transparent 90%)`,
              opacity: 0.5,
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Stay up to date</h2>
              <p className="mt-4 text-base text-slate-600">
                Get updates on all of our events and be the first to get notified when tickets go on sale.
              </p>
            </div>

            <form className="flex flex-col gap-4 w-full max-w-md">
              <label className="text-slate-700 text-sm font-medium">
                Sign up to our newsletter ↓
              </label>
              <div className="flex items-center w-full rounded-full overflow-hidden border border-slate-300 shadow-sm bg-white">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow px-5 py-3 text-sm text-slate-700 outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="px-5 py-3 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition"
                >
                  Sign up today
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
