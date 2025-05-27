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
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    const locale = pathname.startsWith('/en') ? 'en' : 'id';
    const currentNavItems = navItems[locale as 'en' | 'id'];

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY < 0) return;

            if (currentY > lastScrollY.current && currentY > 100) {
                setShow(false);
            } else {
                setShow(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        const full = `/${locale}${href === '/' ? '' : href}`;

        // Khusus untuk root '/'
        if (href === '/') {
            return pathname === `/${locale}`;
        }

        // Untuk path lain, aktif jika sama atau berada dalam path detail
        return pathname === full || pathname.startsWith(`${full}/`);
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
                        <div className="text-xl font-bold text-gray-900 dark:text-white">
                            LuarKerja
                        </div>
                        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300">
                            {currentNavItems.map(({ label, href }) => {
                                const active = isActive(href);
                                return (
                                    <li key={href}>
                                        <Link
                                            href={`/${locale}${href === '/' ? '' : href}`}
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
