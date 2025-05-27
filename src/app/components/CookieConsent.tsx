'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function CookieConsent() {
    const t = useTranslations('Cookie');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-lg rounded-lg p-4 z-50 backdrop-blur-md border border-gray-200 dark:border-gray-700"
                >
                    <p className="text-sm mb-2">{t('message')}</p>
                    <div className="flex justify-end">
                        <button
                            onClick={handleAccept}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition"
                        >
                            {t('accept')}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
