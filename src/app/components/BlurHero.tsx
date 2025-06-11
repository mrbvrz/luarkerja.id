'use client'

export default function BlurHero() {
  return (
    <section className="relative w-full overflow-hidden py-24 px-4 md:px-8 lg:px-16 bg-white">
      {/* Animated Circular Blur */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] animated-white-bubble z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
          The editor suite to build products with
        </h1>
        <h2 className="text-4xl md:text-6xl font-light mt-4 text-gray-800">
          version c
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Tiptap is the headless and open source editor framework. Integrate over 100+ extensions and paid features like collaboration and AI agents to create the UX you want.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
            Read the docs →
          </button>
          <button className="border border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
            Try it live
          </button>
        </div>
      </div>
    </section>
  )
}
