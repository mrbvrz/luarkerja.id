'use client';

import BlogDetailClient from '@/app/components/BlogDetailClient';
import CallToAction from '@/app/components/CallToAction';

export default function BlogDetailPage({ params }: { params: { slug: string; locale: string } }) {
    return (
        <>
            <BlogDetailClient slug={params.slug} locale={params.locale} />;
            <CallToAction />
        </>
    );
}
