'use client';

import { useEffect, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { useTranslations } from 'next-intl';

export default function BlogClientRenderer({
    blog,
    locale
}: {
    blog: {
        title: string;
        content: string;
        description: string;
        created_at: string;
    };
    locale: string;
}) {
    const t = useTranslations('Blog');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000); // 1 second delay

        return () => clearTimeout(timeout);
    }, []);

    if (loading) {
        return (
            <article className="max-w-3xl mx-auto px-4 py-10 animate-pulse space-y-4">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/3 mb-6"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/6"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                </div>
            </article>
        );
    }

    return (
        <article className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
                {new Date(blog.created_at).toLocaleDateString(locale)}
            </p>
            <MarkdownRenderer markdown={t('content')} />
        </article>
    );
}
