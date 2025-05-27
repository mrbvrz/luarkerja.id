'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-white text-center bg-blue-700 px-4">
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold mb-4"
            >
                {t('title')}
            </motion.h1>
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="max-w-xl mb-6"
            >
                {t('subtitle')}
            </motion.p>
            <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full"
            >
                {t('cta')}
            </motion.a>
        </section>
    );
}
