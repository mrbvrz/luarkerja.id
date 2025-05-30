import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LocaleDropdown from '../components/LocaleDropdown';
import Hero from '../components/Hero';
import ProjectCarousel from '../components/ProjectCarousel';

export default function HomePage() {
    const t = useTranslations('Index');
    return (
        <div>
            <Hero />
            <ProjectCarousel />
            <LocaleDropdown />
            <h1>{t('title')}</h1>
            <Link href="/about">{t('description')}</Link>
        </div>
    );
}
