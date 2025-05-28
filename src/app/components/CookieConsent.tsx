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
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 50, y: 50 }}
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                    <div className="text-sm mb-3">{t('message')}</div>
                    <div className="flex justify-end">
                        <button
                            onClick={handleAccept}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-sm rounded"
                        >
                            {t('accept')}
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
