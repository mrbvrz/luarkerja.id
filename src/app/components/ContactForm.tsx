'use client';

import { useState } from 'react';
import { useSubmitContact } from '@/lib/useSubmitContact';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ContactFormSection() {
    const t = useTranslations('Contact');
    const [form, setForm] = useState({
        fullName: '',
        companyName: '',
        phone: '',
        email: '',
        position: '',
        needs: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const { trigger, isMutating } = useSubmitContact();
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -100]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        if (!form.fullName || !form.email || !form.message) {
            setError(t('error.required'));
            return;
        }

        try {
            await trigger(form);
            setSuccess(true);
            setForm({
                fullName: '',
                companyName: '',
                phone: '',
                email: '',
                position: '',
                needs: '',
                message: ''
            });
        } catch (err) {
            setError(err.message);
        }
    };

    const randomImage = `https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

    return (
        <section className="relative overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${randomImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60" />
            </motion.div>

            <div className="relative z-10 container mx-auto py-20 px-4 md:px-10 grid md:grid-cols-2 gap-8 text-white">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
                    <p>{t('description')}</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="bg-white text-gray-800 rounded-lg shadow-lg p-6 space-y-4 z-10"
                >
                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-600">{t('success')}</p>}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            placeholder={t('fullName')}
                            className="input"
                        />
                        <input
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            placeholder={t('companyName')}
                            className="input"
                        />
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder={t('phone')}
                            className="input"
                        />
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder={t('email')}
                            className="input"
                        />
                        <input
                            name="position"
                            value={form.position}
                            onChange={handleChange}
                            placeholder={t('position')}
                            className="input"
                        />
                        <input
                            name="needs"
                            value={form.needs}
                            onChange={handleChange}
                            placeholder={t('needs')}
                            className="input"
                        />
                    </div>

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder={t('message')}
                        className="w-full h-24 p-2 border border-gray-300 rounded-md"
                    />

                    <button
                        type="submit"
                        disabled={isMutating}
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        {isMutating ? t('submitting') : t('submit')}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
