'use client'

import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const testimonials = Array.from({ length: 10 }, (_, i) => ({
  name: `Person ${i + 1}`,
  title: `Role at Company ${i + 1}`,
  text: `“Radiant helped us exceed expectations and simplified our entire process.”`,
  img: `https://picsum.photos/seed/${i + 100}/600/400`,
}))

export default function TestimonialsSlider() {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current = (current + 1) % testimonials.length
      setActiveIndex(current)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Auto-animate based on index
  useEffect(() => {
    const cardWidth = 340 + 24 // card + gap (min-w + gap)
    animate(x, -activeIndex * cardWidth, {
      type: 'tween',
      duration: 0.7,
      ease: 'easeInOut',
    })
  }, [activeIndex])

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">What everyone is saying</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Trusted by professionals.</h2>
      </div>

      <div className="overflow-hidden max-w-6xl mx-auto px-6">
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -(testimonials.length - 1) * 340, right: 0 }}
          ref={containerRef}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[340px] lg:min-w-[340px] rounded-2xl overflow-hidden relative text-white shadow-xl bg-black"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={t.img}
                alt={t.name}
                width={400}
                height={300}
                className="object-cover w-full h-64 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-0 w-full p-6">
                <p className="text-lg font-light mb-4">{t.text}</p>
                <hr className="border-gray-600/50 my-3" />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm font-medium bg-gradient-to-r from-fuchsia-500 to-violet-500 bg-clip-text text-transparent">
                    {t.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dot indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === activeIndex ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
