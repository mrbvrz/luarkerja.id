// app/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blur() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-orange-300" />

      {/* Blur “Blob” Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px]
                     bg-blue-400 opacity-30 rounded-full blur-3xl"
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px]
                     bg-pink-300 opacity-30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          API Documentation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl"
        >
          Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate
          your product into the workflows of dozens of devoted Protocol users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <Link href="/quickstart" className="inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
              Quickstart →

          </Link>
          <Link href="/sdks" className="inline-block bg-white text-gray-900 border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-50 transition">
              Explore SDKs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
