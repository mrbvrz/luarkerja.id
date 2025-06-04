'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, ThumbsUp } from 'lucide-react';

const reasons = [
    { icon: <Users className="text-blue-600 w-8 h-8" />, key: 'team' },
    { icon: <ShieldCheck className="text-green-600 w-8 h-8" />, key: 'security' },
    { icon: <Zap className="text-yellow-500 w-8 h-8" />, key: 'fast' },
    { icon: <ThumbsUp className="text-purple-600 w-8 h-8" />, key: 'reliable' }
];

export default function WhyChooseUs() {
    const t = useTranslations('WhyChooseUs');

    return (
        <section className="bg-white dark:bg-gray-900 py-16 px-4">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.15 }}
                className="max-w-6xl mx-auto text-center"
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {t('title')}
                </motion.h2>
                <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {t('description')}
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {reasons.map(({ icon, key }, index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-md transition duration-300 text-center cursor-default"
                        >
                            <div className="mb-4 flex justify-center">{icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                {t(`${key}.title`)}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {t(`${key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
