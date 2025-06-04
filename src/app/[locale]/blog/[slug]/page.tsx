'use client';

import BlogDetailClient from '@/app/components/BlogDetailClient';

export default function BlogDetailPage({ params }: { params: { slug: string; locale: string } }) {
    return <BlogDetailClient slug={params.slug} locale={params.locale} />;
}
