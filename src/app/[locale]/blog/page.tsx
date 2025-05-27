import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import BlogCard from '@/app/components/BlogCard';
import { getTranslations } from 'next-intl/server';
import '@/app/globals.css';

export default async function BlogPage({ params }: { params: { locale: string } }) {
    const supabase = createServerComponentClient({ cookies });
    const { locale } = params;

    const { data: blogs } = await supabase
        .from('blogs')
        .select('id, title, description, slug, lang, status')
        .eq('lang', locale)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

    const t = await getTranslations('Blog');

    return (
        <main className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
            <div className="space-y-4">
                {blogs?.map(post => (
                    <BlogCard
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        slug={post.slug}
                        lang={post.lang}
                    />
                ))}
            </div>
        </main>
    );
}
