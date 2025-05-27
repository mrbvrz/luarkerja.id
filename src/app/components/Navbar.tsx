'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const params = useParams();

  // Ambil locale dari route params
  const locale = params?.locale ?? 'en';

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi cek active menu dengan locale prefix
  const isActive = (href: string) => {
    // Build full path with locale prefix
    const fullPath = `/${locale}${href === '/' ? '' : href}`;

    // Contoh: pathname = "/en/about"
    return pathname === fullPath;
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900 dark:text-white">LOGO</div>
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
              {navItems.map(({ label, href }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      locale={locale}
                      className={`transition px-2 py-1 rounded-md ${
                        active
                          ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4'
                          : 'hover:text-blue-500'
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
