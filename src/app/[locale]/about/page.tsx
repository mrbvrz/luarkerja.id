import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('About');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('description')}</Link>
    </div>
  );
}
