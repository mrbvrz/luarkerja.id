'use client';

import { useScroll, useTransform, useMotionTemplate, motion } from 'framer-motion';

export default function BlurParallaxSection() {
  const { scrollY } = useScroll();

  // Skala dan transparansi
  const scale = useTransform(scrollY, [0, 1500], [1, 1.8]);
  const opacity = useTransform(scrollY, [0, 1500], [0.6, 0.2]);

  // Warna dinamis R, G, B
  const r = useTransform(
    scrollY,
    [0, 300, 600, 900, 1200, 1500],
    [96, 168, 244, 250, 132, 96]
  );
  const g = useTransform(
    scrollY,
    [0, 300, 600, 900, 1200, 1500],
    [165, 112, 72, 204, 204, 165]
  );
  const b = useTransform(
    scrollY,
    [0, 300, 600, 900, 1200, 1500],
    [250, 250, 180, 21, 245, 250]
  );

  // Background radial dengan warna dinamis
  const bg = useMotionTemplate`radial-gradient(circle at center, rgba(${r}, ${g}, ${b}, 0.7), transparent)`;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f9f9ff]">
      {/* Animated Blur */}
      <motion.div
        style={{
          scale,
          opacity,
          background: bg,
          filter: 'blur(160px)',
        }}
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Second blur layer (optional for depth) */}
      <motion.div
        style={{
          scale,
          opacity,
          background: bg,
          filter: 'blur(120px)',
        }}
        className="absolute top-[60%] left-[45%] w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-5xl font-bold text-slate-900 mb-4">
          Smooth Scroll Color Blur
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto">
          Watch the color shift gradually as you scroll down.
        </p>
      </div>
    </section>
  );
}
