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

            <a
                href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in
                        reverse chronological order.
                    </p>
                </div>
            </a>

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
