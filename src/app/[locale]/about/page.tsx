import Image from 'next/image';
import { useTranslations } from 'next-intl';
import StatsSection from '@/app/components/StatsSection';

const teamMembers = [
    {
        name: 'Hasan Suryaman',
        roleId: 'founder',
        descriptionId: 'hasanDesc',
        image: '/images/hasan.jpg'
    },
    {
        name: 'Dina Rahmawati',
        roleId: 'designer',
        descriptionId: 'dinaDesc',
        image: '/images/dina.jpg'
    },
    {
        name: 'Riko Pratama',
        roleId: 'pm',
        descriptionId: 'rikoDesc',
        image: '/images/riko.jpg'
    }
];

export default function AboutPage() {
    const t = useTranslations('About');

    return (
        <main className="max-w-6xl mx-auto px-4 py-10">
            <section className="mb-12">
                <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{t('intro1')}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300">{t('intro2')}</p>
            </section>
            <StatsSection />
            <section>
                <h2 className="text-2xl font-bold mb-6">{t('teamTitle')}</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
                        >
                            <div className="mb-4">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="rounded-full mx-auto object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">
                                {t(`roles.${member.roleId}`)}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {t(`descriptions.${member.descriptionId}`)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
