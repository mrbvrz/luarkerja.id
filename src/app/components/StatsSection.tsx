'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function StatsSection() {
    const t = useTranslations('statsSection');

    const stats: { value: number; label: string }[] = t.raw('items');

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold mb-10 text-gray-800 dark:text-white">
                    {t('title')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                                className="text-4xl font-bold text-blue-600 dark:text-blue-400"
                            >
                                <CountUp end={stat.value} duration={2} />
                            </motion.div>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, latest => Math.floor(latest));

    useEffect(() => {
        const controls = animate(motionValue, end, { duration });
        return controls.stop;
    }, [end, duration, motionValue]);

    return <motion.span>{rounded}</motion.span>;
}
