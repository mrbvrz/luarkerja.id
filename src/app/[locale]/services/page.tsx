'use client';

import { useTranslations } from 'next-intl';

const services = [
    {
        icon: '🧠',
        titleKey: 'consultingTitle',
        descKey: 'consultingDesc'
    },
    {
        icon: '💻',
        titleKey: 'developmentTitle',
        descKey: 'developmentDesc'
    },
    {
        icon: '📱',
        titleKey: 'mobileTitle',
        descKey: 'mobileDesc'
    },
    {
        icon: '🌐',
        titleKey: 'webTitle',
        descKey: 'webDesc'
    }
];

export default function ServicesPage() {
    const t = useTranslations('Services');

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12">{t('pageTitle')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition duration-300 p-6"
                    >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{t(service.titleKey)}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {t(service.descKey)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
