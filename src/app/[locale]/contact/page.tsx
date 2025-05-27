'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function ContactPage() {
    const t = useTranslations('Contact');
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
        reset(); // reset form after submit
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl mx-auto px-4 py-10"
        >
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t('title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Informasi Perusahaan */}
                <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{t('description')}</p>
                    <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li>
                            <strong>{t('company')}:</strong> LuarKerja
                        </li>
                        <li>
                            <strong>{t('address')}:</strong> Jl. Teknologi No. 123, Jakarta
                        </li>
                        <li>
                            <strong>{t('email')}:</strong> info@luarkerja.com
                        </li>
                        <li>
                            <strong>{t('phone')}:</strong> +62 812-3456-7890
                        </li>
                    </ul>
                </div>

                {/* Form Kontak */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register('name', { required: true })}
                        placeholder={t('form.name')}
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{t('error.name')}</span>}

                    <input
                        type="email"
                        {...register('email', { required: true })}
                        placeholder={t('form.email')}
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{t('error.email')}</span>
                    )}

                    <input
                        {...register('subject', { required: true })}
                        placeholder={t('form.subject')}
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.subject && (
                        <span className="text-red-500 text-sm">{t('error.subject')}</span>
                    )}

                    <textarea
                        rows={5}
                        {...register('message', { required: true })}
                        placeholder={t('form.message')}
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.message && (
                        <span className="text-red-500 text-sm">{t('error.message')}</span>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        {t('form.send')}
                    </button>

                    {isSubmitSuccessful && <p className="text-green-600 mt-2">{t('success')}</p>}
                </form>
            </div>
        </motion.div>
    );
}
