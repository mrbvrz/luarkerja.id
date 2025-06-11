'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' }
  ],
  id: [
    { label: 'Beranda', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tentang', href: '/about' },
    { label: 'Layanan', href: '/services' },
    { label: 'Kontak', href: '/contact' }
  ]
};

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const isScrollingUp = useRef(false);

  const locale = pathname.startsWith('/en') ? 'en' : 'id';
  const currentNavItems = navItems[locale as 'en' | 'id'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTop(scrollY <= 10);

      const scrollingUp = scrollY < lastScrollY.current;
      const scrollingDown = scrollY > lastScrollY.current;

      if (scrollingDown && scrollY > 100) {
        isScrollingUp.current = false;
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        setShow(false);
      }

      if (scrollingUp) {
        if (!isScrollingUp.current) {
          isScrollingUp.current = true;
          if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            if (isScrollingUp.current) setShow(true);
          }, 100);
        }
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const isActive = (href: string) => {
    const full = `/${locale}${href === '/' ? '' : href}`;
    return href === '/' ? pathname === `/${locale}` : pathname.startsWith(full);
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
            isTop
              ? 'bg-transparent shadow-none'
              : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
          }`}
          style={{
            willChange: 'opacity, transform',
            transform: 'translate3d(0,0,0)',
            pointerEvents: show ? 'auto' : 'none',
          }}
        >
          <div
            className={`max-w-6xl mx-auto px-4 ${
              isTop ? 'py-4' : 'py-2'
            } flex items-center justify-between transition-all duration-300 ease-in-out`}
          >
            <div className="text-2xl font-bold text-luarkerja-700 dark:text-white">
              LuarKerja.id
            </div>
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
              {currentNavItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={`/${locale}${href === '/' ? '' : href}`}
                    locale={locale}
                    className={`px-2 py-1 rounded-md transition-colors duration-200 ${
                      isActive(href)
                        ? 'text-luarkerja-700 dark:text-blue-400 font-semibold'
                        : 'hover:text-luarkerja-600 dark:hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
