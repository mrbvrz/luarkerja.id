'use client';

import { useEffect, useState } from 'react';

export default function ThemeSelector() {
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system';
        if (storedTheme) {
            setTheme(storedTheme);
            applyTheme(storedTheme);
        } else {
            applyTheme('system');
        }
    }, []);

    const applyTheme = (theme: 'light' | 'dark' | 'system') => {
        const root = document.documentElement;

        if (theme === 'system') {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.toggle('dark', systemDark);
        } else {
            root.classList.toggle('dark', theme === 'dark');
        }
    };

    const handleChange = (value: 'light' | 'dark' | 'system') => {
        setTheme(value);
        localStorage.setItem('theme', value);
        applyTheme(value);
    };

    return (
        <select
            className="px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm text-gray-800 dark:text-white"
            value={theme}
            onChange={e => handleChange(e.target.value as 'light' | 'dark' | 'system')}
        >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="system">🖥️ System</option>
        </select>
    );
}
