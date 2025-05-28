import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';

const BlogList = dynamic(() => import('@/app/components/BlogList'), {
    ssr: false // Load di client
});

export default async function BlogPage({ params }: { params: { locale: string } }) {
    const { locale } = params;
    const t = await getTranslations('Blog');

    return (
        <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
            <BlogList locale={locale} />
        </main>
    );
}
