'use client';

import Link from 'next/link';

interface BlogCardProps {
    title: string;
    description: string;
    slug: string;
    lang: string;
}

export default function BlogCard({ title, description, slug, lang }: BlogCardProps) {
    return (
        <Link
            href={`/${lang}/blog/${slug}`}
            className="block p-4 border rounded-md hover:shadow-md transition"
        >
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
        </Link>
    );
}
