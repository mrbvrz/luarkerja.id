'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function CallToAction() {
    const t = useTranslations('CallToAction');

    return (
        <section className="py-12 bg-luarkerja-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="bg-luarkerja-500 rounded-3xl overflow-hidden shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-luarkerja-50 mb-4">
                            {t('heading')}
                        </h2>
                        <p className="text-sm md:text-base text-white mb-6 max-w-xl">
                            {t('description')}
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-luarkerja-800 hover:bg-luarkerja-900 text-white font-semibold px-6 py-3 rounded-lg transition"
                        >
                            {t('button')}
                        </a>
                    </motion.div>

                    <motion.div
                        className="flex-1 max-w-md"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/images/cta-person.png"
                            alt="Call to action person"
                            width={400}
                            height={300}
                            className="w-full h-auto rounded-xl object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
