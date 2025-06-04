'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const locales = [
    { code: 'en', label: '🇬🇧 English' },
    { code: 'id', label: '🇮🇩 Bahasa Indonesia' }
];

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const [selected, setSelected] = useState<'en' | 'id'>('en');

    useEffect(() => {
        const storedLocale = localStorage.getItem('locale');
        if (storedLocale === 'en' || storedLocale === 'id') {
            setSelected(storedLocale);
        }
    }, []);

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
    };

    return (
        <select
            className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-white"
            value={selected}
            onChange={e => handleChangeLocale(e.target.value as 'en' | 'id')}
        >
            {locales.map(locale => (
                <option key={locale.code} value={locale.code}>
                    {locale.label}
                </option>
            ))}
        </select>
    );
}
