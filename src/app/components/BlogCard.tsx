import Link from 'next/link';

export default function BlogCard({ title, description, slug, lang }: any) {
    return (
        <Link href={`/${lang}/blog/${slug}`}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </Link>
    );
}
