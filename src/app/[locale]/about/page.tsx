import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Navbar from '@/app/components/Navbar';
import '@/app/globals.css';

export default function HomePage() {
    const t = useTranslations('About');
    return (
        <div>
            <Navbar />
            <h1>{t('title')}</h1>
            <Link href="/about">{t('description')}</Link>
        </div>
    );
}
