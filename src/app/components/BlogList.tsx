'use client';

import useSWR from 'swr';
import BlogCard from './BlogCard';
import SkeletonBlogCard from './SkeletonBlogCard';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function BlogList({ locale }: { locale: string }) {
    const { data: blogs, error, isLoading } = useSWR(`/api/blogs?locale=${locale}`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    if (isLoading) {
        return (
            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonBlogCard key={i} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500">Gagal memuat blog.</p>;
    }

    return (
        <div className="space-y-4">
            {blogs?.map((post: any) => (
                <BlogCard
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    slug={post.slug}
                    lang={post.lang}
                />
            ))}
        </div>
    );
}
