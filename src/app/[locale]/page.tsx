import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LocaleDropdown from '../components/LocaleDropdown';
import '@/app/globals.css';

export default function HomePage() {
    const t = useTranslations('Index');
    return (
        <div>
            <LocaleDropdown />
            <h1>{t('title')}</h1>
            <Link href="/about">{t('description')}</Link>
        </div>
    );
}
