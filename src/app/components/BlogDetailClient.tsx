'use client';

import useSWR from 'swr';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import { motion } from 'framer-motion';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function BlogDetailClient({ slug }: { slug: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = searchParams?.get('locale') || 'id';

    const {
        data: blog,
        error,
        isLoading
    } = useSWR(`/api/blogs/${slug}?locale=${locale}`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    if (error) return <p className="text-red-500">Gagal memuat blog.</p>;
    if (isLoading)
        return (
            <div className="max-w-3xl mx-auto px-4 py-10 animate-pulse space-y-4">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-60 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
        );

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-3xl mx-auto px-4 py-10"
        >
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
                {new Date(blog.created_at).toLocaleDateString(locale)}
            </p>

            <MarkdownRenderer markdown={blog.content} />
        </motion.article>
    );
}
