'use client';

import useSWRInfinite from 'swr/infinite';
import { useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
import SkeletonBlogCard from './SkeletonBlogCard';

const LIMIT = 9;

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function BlogList({ locale }: { locale: string }) {
    const { data, error, size, setSize, isValidating } = useSWRInfinite(
        index => `/api/blogs?locale=${locale}&page=${index + 1}&limit=${LIMIT}`,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    const loaderRef = useRef<HTMLDivElement | null>(null);
    const isLoadingInitialData = !data && !error;
    const isLoadingMore = isValidating && data?.length === size;

    // Gabungkan semua halaman
    const blogs = data ? [].concat(...data) : [];

    // Cek apakah sudah sampai akhir (jumlah terakhir < LIMIT)
    const isReachingEnd = data && data[data.length - 1]?.length < LIMIT;

    // Intersection Observer untuk infinite scroll
    useEffect(() => {
        if (!loaderRef.current || isReachingEnd) return;

        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && !isLoadingMore) {
                    setSize(prev => prev + 1);
                }
            },
            { rootMargin: '100px' }
        );

        observer.observe(loaderRef.current);
        return () => observer.disconnect();
    }, [loaderRef.current, isReachingEnd, isLoadingMore]);

    if (isLoadingInitialData) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonBlogCard key={i} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p className="text-red-500">Gagal memuat blog.</p>;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((post: any) => (
                    <BlogCard
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        slug={post.slug}
                        lang={post.lang}
                    />
                ))}
            </div>

            {!isReachingEnd && (
                <div ref={loaderRef} className="h-20 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm animate-pulse">
                        Memuat lebih banyak...
                    </span>
                </div>
            )}
        </>
    );
}
