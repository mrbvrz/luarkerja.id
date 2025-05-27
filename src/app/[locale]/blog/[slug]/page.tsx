import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getTranslations } from 'next-intl/server';

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

    const html = marked(blog.content || '');

    const t = await getTranslations('BlogDetail');

    return (
        <article className="prose lg:prose-xl max-w-3xl mx-auto px-4 py-10">
            <h1>{blog.title}</h1>
            <p className="text-sm text-gray-500">
                {new Date(blog.created_at).toLocaleDateString(locale)}
            </p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    );
}
