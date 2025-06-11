'use client'

const lines = [
  ['Headless', 'Modular', 'Expandable', 'Scalable'],
  ['Cloud', 'Customizable', 'Composable', 'On-premises'],
  ['Open Source', 'Fully', 'Custom', 'Extendable'],
  ['Realtime', 'Fast', 'Flexible', 'Secure'],
  ['Performant', 'Portable', 'Smart', 'Modern'],
]

export default function WordWall() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="flex flex-col space-y-10">
        {lines.map((words, i) => {
          const isReverse = i % 2 !== 0

          return (
            <div
              key={i}
              className={`flex whitespace-nowrap text-[clamp(2rem,8vw,6rem)] font-black leading-none
                ${isReverse ? 'animate-marquee-reverse' : 'animate-marquee'}
              `}
            >
              {/* Duplikasi agar marquee bisa looping */}
              {[...words, ...words].map((word, j) => (
                <span
                  key={j}
                  className={`mx-8 ${j % 2 === 0 ? 'text-black' : 'stroke-black'}`}
                >
                  {word}
                </span>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
