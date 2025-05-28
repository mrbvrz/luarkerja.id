'use client';

import BlogDetailClient from '@/app/components/BlogDetailClient';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return <BlogDetailClient slug={params.slug} />;
}
