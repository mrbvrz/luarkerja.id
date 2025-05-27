'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const locales = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'id', label: '🇮🇩 Bahasa Indonesia' }
];

export default function LocaleDropdown() {
    const router = useRouter();
    const pathname = usePathname();
    const [selected, setSelected] = useState<'en' | 'id'>('en');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Ambil locale tersimpan dari localStorage saat pertama render
    useEffect(() => {
        const saved = localStorage.getItem('locale') as 'en' | 'id' | null;
        const currentLocale = pathname.split('/')[1] as 'en' | 'id';

        if (saved && saved !== currentLocale) {
            const newPath = `/${saved}${pathname.substring(3)}`;
            router.replace(newPath);
        } else if (!saved) {
            localStorage.setItem('locale', currentLocale);
            setSelected(currentLocale);
        } else {
            setSelected(currentLocale);
        }
    }, [pathname, router]);

    // Tutup dropdown kalau klik di luar elemen dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleChangeLocale = (newLocale: 'en' | 'id') => {
        if (newLocale === selected) {
            setOpen(false);
            return;
        }

        localStorage.setItem('locale', newLocale);
        setSelected(newLocale);

        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');

        router.push(newPath);
        setOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setOpen(prev => !prev)}
                className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
                {locales.find(l => l.code === selected)?.label}
            </button>

            {/* Backdrop blur & overlay */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black backdrop-blur-sm z-40"
                        />

                        {/* Dropdown menu vertikal */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            className="absolute left-0 top-full mt-2 flex flex-col rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50 py-2 w-44"
                        >
                            {locales.map(locale => (
                                <button
                                    key={locale.code}
                                    onClick={() => handleChangeLocale(locale.code as 'en' | 'id')}
                                    className={`text-sm px-4 py-2 rounded-md text-left whitespace-nowrap transition ${
                                        selected === locale.code
                                            ? 'bg-blue-500 text-white font-semibold'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {locale.label}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
