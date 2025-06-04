'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const t = useTranslations('Newsletter');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validasi email basic
        if (!email) {
            setError(t('emptyEmail'));
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(t('invalidEmail'));
            return;
        }

        setSubmitted(true);

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const result = await res.json();

            if (!res.ok) {
                if (res.status === 409 && result.error === 'exists') {
                    setError(t('alreadySubscribed'));
                } else if (res.status === 400 && result.error === 'invalid_email') {
                    setError(t('invalidEmail'));
                } else {
                    setError(t('serverError'));
                }
                setSubmitted(false);
                return;
            }

            setEmail('');
            setError('');
            setSubmitted(false);
        } catch (err) {
            setError(t('serverError'));
            setSubmitted(false);
        }
    };

    return (
        <section className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                📬 {t('title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{t('description')}</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    required
                    placeholder={t('placeholder')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={submitted}
                />
                <button
                    type="submit"
                    disabled={submitted}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {submitted ? t('submitted') : t('subscribe')}
                </button>
            </form>
            {error && <p className="mt-3 text-red-600">{error}</p>}
        </section>
    );
}
