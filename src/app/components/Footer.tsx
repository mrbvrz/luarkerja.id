'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const locales = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'id', label: '🇮🇩 Bahasa Indonesia' }
];

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<'en' | 'id'>('en');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Load locale & theme from localStorage
    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale === 'en' || storedLocale === 'id') {
            setSelected(storedLocale);
        }

        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);

    // Locale change & route update
    const handleChangeLocale = (newLocale: 'en' | 'id') => {
        setSelected(newLocale);
        localStorage.setItem('locale', newLocale);

        const segments = pathname.split('/');
        if (segments[1] === 'en' || segments[1] === 'id') {
            segments[1] = newLocale;
        } else {
            segments.unshift(newLocale);
        }

        router.push(segments.join('/'));
        setOpen(false);
    };

    // Toggle light/dark theme
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    // Klik luar dropdown → tutup
    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 mt-10">
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    © {new Date().getFullYear()} LuarKerja. All rights reserved.
                </p>

                <div className="flex gap-4 items-center">
                    {/* Toggle Theme */}
                    <button
                        onClick={toggleTheme}
                        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                    >
                        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </button>

                    {/* Locale Dropdown */}
                    <div className="relative inline-block text-left" ref={dropdownRef}>
                        <button
                            onClick={() => setOpen(prev => !prev)}
                            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                        >
                            {locales.find(l => l.code === selected)?.label}
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden"
                                >
                                    {locales.map(locale => (
                                        <button
                                            key={locale.code}
                                            onClick={() =>
                                                handleChangeLocale(locale.code as 'en' | 'id')
                                            }
                                            className={`block w-full px-4 py-2 text-sm text-left transition ${
                                                selected === locale.code
                                                    ? 'bg-blue-500 text-white font-semibold'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }`}
                                        >
                                            {locale.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </footer>
    );
}
