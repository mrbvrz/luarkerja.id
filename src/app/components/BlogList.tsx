// 'use client';

// import useSWRInfinite from 'swr/infinite';
// import { useEffect, useRef } from 'react';
// import BlogCard from './BlogCard';
// import SkeletonBlogCard from './SkeletonBlogCard';

// const LIMIT = 9;

// const fetcher = (url: string) => fetch(url).then(res => res.json());

// export default function BlogList({ locale }: { locale: string }) {
//     const { data, error, size, setSize, isValidating } = useSWRInfinite(
//         index => `/api/blogs?locale=${locale}&page=${index + 1}&limit=${LIMIT}`,
//         fetcher,
//         {
//             revalidateOnFocus: false,
//             revalidateOnReconnect: false
//         }
//     );

//     const loaderRef = useRef<HTMLDivElement | null>(null);
//     const isLoadingInitialData = !data && !error;
//     const isLoadingMore = isValidating && data?.length === size;

//     // Gabungkan semua halaman
//     const blogs = data ? [].concat(...data) : [];

//     // Cek apakah sudah sampai akhir (jumlah terakhir < LIMIT)
//     const isReachingEnd = data && data[data.length - 1]?.length < LIMIT;

//     // Intersection Observer untuk infinite scroll
//     useEffect(() => {
//         if (!loaderRef.current || isReachingEnd) return;

//         const observer = new IntersectionObserver(
//             entries => {
//                 if (entries[0].isIntersecting && !isLoadingMore) {
//                     setSize(prev => prev + 1);
//                 }
//             },
//             { rootMargin: '100px' }
//         );

//         observer.observe(loaderRef.current);
//         return () => observer.disconnect();
//     }, [loaderRef.current, isReachingEnd, isLoadingMore]);

//     if (isLoadingInitialData) {
//         return (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {Array.from({ length: 6 }).map((_, i) => (
//                     <SkeletonBlogCard key={i} />
//                 ))}
//             </div>
//         );
//     }

//     if (error) {
//         return <p className="text-red-500">Gagal memuat blog.</p>;
//     }

//     return (
//         <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {blogs.map((post: any) => (
//                     <BlogCard
//                         key={post.id}
//                         title={post.title}
//                         description={post.description}
//                         slug={post.slug}
//                         lang={post.lang}
//                     />
//                 ))}
//             </div>

//             <a
//                 href="#"
//                 class="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//             >
//                 {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
//                 <div class="flex flex-col justify-between p-4 leading-normal">
//                     <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         Noteworthy technology acquisitions 2021
//                     </h5>
//                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
//                         Here are the biggest enterprise technology acquisitions of 2021 so far, in
//                         reverse chronological order.
//                     </p>
//                 </div>
//             </a>

//             {!isReachingEnd && (
//                 <div ref={loaderRef} className="h-20 flex items-center justify-center">
//                     <span className="text-gray-500 dark:text-gray-400 text-sm animate-pulse">
//                         Memuat lebih banyak...
//                     </span>
//                 </div>
//             )}
//         </>
//     );
// }


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: "Outdoor Work: a Designer’s Checklist for Every UX Project.",
    date: "December 23, 2024",
    readingTime: "4 min read",
    excerpt: "Using a Query A CSS pseudo-class is a keyword added to a...",
    tags: ["Guides", "Media"],
    imageUrl: "https://picsum.photos/1920/1080?random"
  },
  {
    id: 2,
    title: "Creativo Para Jóvenes: a Designer’s UI/UX Complete Checklist.",
    date: "July 5, 2024",
    readingTime: "4 min read",
    excerpt: "Using a Query A CSS pseudo-class is a keyword added to a...",
    tags: ["Digital", "Marketing"],
    imageUrl: "https://picsum.photos/1920/1080?random"
  },
  {
    id: 3,
    title: "The Highly Creative UI/UX Workflow from a Silicon Valley.",
    date: "July 5, 2024",
    readingTime: "4 min read",
    excerpt: "Using a Query A CSS pseudo-class is a keyword added to a...",
    tags: ["Digital", "Marketing"],
    imageUrl: "https://picsum.photos/1920/1080?random"
  },
]

export default function BlogPage() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold mb-4">Blog Page</h1>
      <nav className="text-sm text-gray-500 mb-12">
        <span className="text-black font-medium">Home</span> &gt; Blog Page
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: post.id * 0.1 }}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={800}
              height={600}
              className="object-cover w-full h-72"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm text-white p-6 flex flex-col justify-end">
              <p className="text-sm mb-1">
                {post.date} • {post.readingTime}
              </p>
              <h2 className="text-lg font-bold leading-tight mb-1">{post.title}</h2>
              <p className="text-sm mb-2 line-clamp-2">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-white/20 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="text-sm underline hover:text-orange-300"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
