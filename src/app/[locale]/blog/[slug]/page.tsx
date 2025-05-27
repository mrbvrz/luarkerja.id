import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';

export default async function BlogDetailPage({
    params
}: {
    params: { locale: string; slug: string };
}) {
    const supabase = createServerComponentClient({ cookies });
    const { locale, slug } = params;

    const { data: blog } = await supabase
        .from('blogs')
        .select('title, content, description, created_at')
        .eq('slug', slug)
        .eq('lang', locale)
        .eq('status', 'published')
        .single();

    if (!blog) return notFound();

    const t = await getTranslations('Blog');

    return (
        <article className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
                {new Date(blog.created_at).toLocaleDateString(locale)}
            </p>

            {/* Render Markdown */}
            <MarkdownRenderer markdown={blog.content} />
        </article>
    );
}
