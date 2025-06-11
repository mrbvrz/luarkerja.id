'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileNavbarProps {
  navItems: { label: string; href: string }[];
  locale: string;
}

export default function MobileNavbar({ navItems, locale }: MobileNavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <button
        className="p-2 text-gray-800 dark:text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg z-[100] p-6"
          >
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={`/${locale}${href === '/' ? '' : href}`}
                    className="block hover:text-luarkerja-600 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
