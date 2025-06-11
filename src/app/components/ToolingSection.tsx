'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const cards = [
  {
    title: 'React',
    icon: '⚛️',
    description:
      'The library for web and native user interfaces. Next.js is built on the latest React features.',
  },
  {
    title: 'Turbopack',
    icon: '📦',
    description:
      'An incremental bundler optimized for JavaScript and TypeScript, written in Rust.',
  },
  {
    title: 'Speedy Web Compiler',
    icon: '⚡',
    description:
      'A Rust-based platform for fast dev tools. Used for both compilation and minification.',
  },
]

export default function ToolingSection() {
  const [dashOffset, setDashOffset] = useState(1200)

  useEffect(() => {
    const interval = setInterval(() => {
      setDashOffset((prev) => (prev <= 0 ? 1200 : prev - 5))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="text-center mb-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Built on a foundation of fast, production-grade tooling
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto mb-16 w-fit px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg font-semibold text-sm"
      >
        Powered By
      </motion.div>

      {/* Electric Line Effect */}
      <div className="absolute top-[200px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-[180px] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none">
          <path
            d="M600 0 V70 M600 70 H300 V200"
            stroke="#E5E7EB"
            strokeWidth="1.5"
            strokeDasharray="1200"
            strokeDashoffset={dashOffset}
          />
          <path
            d="M600 70 V200"
            stroke="#E5E7EB"
            strokeWidth="1.5"
            strokeDasharray="1200"
            strokeDashoffset={dashOffset}
          />
          <path
            d="M600 70 H900 V200"
            stroke="#E5E7EB"
            strokeWidth="1.5"
            strokeDasharray="1200"
            strokeDashoffset={dashOffset}
          />
        </svg>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="mb-4 text-3xl">{card.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">{card.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
