'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9fafe] py-24 px-6 sm:px-10">
      {/* Blurred Background Animation */}
      <motion.div
  initial={{ scale: 0.9, opacity: 0.6 }}
  animate={{ scale: 1.1, opacity: 0.8 }}
  transition={{
    duration: 8,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatType: 'mirror',
  }}
  className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 blur-[140px] opacity-50 z-0"
/>


      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <p className="text-sm text-slate-500 mb-2 tracking-wide">
          04–06 of April, <span className="font-semibold">2022</span> • Los Angeles, CA
        </p>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-600 leading-tight mb-6">
          A design conference for the dark side.
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-700 leading-relaxed mb-10">
          The next generation of web users are tech–savvy and suspicious.
          They know how to use dev tools, detect phishing scams, and won't accept checks from Western Union.
          <br /><br />
          At <span className="text-blue-500 font-semibold">DeceptiConf</span>, you’ll learn about the latest dark patterns being developed to trick even the smartest visitors—and how to deploy them without ever being detected.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-left max-w-2xl mx-auto">
          <div>
            <p className="uppercase text-blue-600 font-medium tracking-wide">Speakers</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">18</p>
          </div>
          <div>
            <p className="uppercase text-blue-600 font-medium tracking-wide">People Attending</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">2,091</p>
          </div>
          <div>
            <p className="uppercase text-blue-600 font-medium tracking-wide">Venue</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">Staples Center</p>
          </div>
          <div>
            <p className="uppercase text-blue-600 font-medium tracking-wide">Location</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">Los Angeles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
