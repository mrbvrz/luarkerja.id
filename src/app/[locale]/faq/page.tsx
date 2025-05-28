'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';

const faqs = {
    id: [
        {
            question: 'Apa itu LuarKerja?',
            answer: 'LuarKerja adalah platform digital yang menyediakan layanan pembuatan aplikasi, website, dan solusi teknologi untuk berbagai kebutuhan bisnis dan personal.'
        },
        {
            question: 'Layanan apa saja yang tersedia di LuarKerja?',
            answer: 'Kami menyediakan layanan pengembangan website, aplikasi mobile, sistem informasi, konsultasi teknologi, dan pemeliharaan sistem.'
        },
        {
            question: 'Bagaimana cara memesan layanan?',
            answer: 'Anda dapat mengisi formulir kontak di halaman Kontak atau menghubungi kami langsung melalui email atau WhatsApp.'
        },
        {
            question: 'Apakah LuarKerja menerima proyek dari luar negeri?',
            answer: 'Ya, kami menerima klien dari berbagai negara dengan komunikasi yang fleksibel secara daring.'
        },
        {
            question: 'Berapa lama waktu pengerjaan sebuah proyek?',
            answer: 'Waktu pengerjaan tergantung kompleksitas proyek. Rata-rata pengerjaan website membutuhkan 2–4 minggu.'
        }
    ],
    en: [
        {
            question: 'What is LuarKerja?',
            answer: 'LuarKerja is a digital platform providing website, app development, and tech solutions for various business and personal needs.'
        },
        {
            question: 'What services does LuarKerja offer?',
            answer: 'We offer website development, mobile apps, information systems, tech consultation, and system maintenance services.'
        },
        {
            question: 'How can I order a service?',
            answer: 'You can fill out the contact form on the Contact page or reach us directly via email or WhatsApp.'
        },
        {
            question: 'Does LuarKerja accept international projects?',
            answer: 'Yes, we accept clients from around the world with flexible online communication.'
        },
        {
            question: 'How long does a project take?',
            answer: 'Project duration depends on complexity. Website projects usually take around 2–4 weeks.'
        }
    ]
};

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const locale = useLocale();
    const content = faqs[locale as 'id' | 'en'] || faqs.id;

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {locale === 'id'
                    ? 'Pertanyaan yang Sering Diajukan (FAQ)'
                    : 'Frequently Asked Questions (FAQ)'}
            </h1>

            <div className="space-y-4">
                {content.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-700 rounded-md"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-medium"
                        >
                            {faq.question}
                            <span>{openIndex === index ? '-' : '+'}</span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
