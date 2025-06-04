'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FacebookIcon, TwitterIcon, LinkedinIcon, CopyIcon } from 'lucide-react'; // Ganti dengan ikon lain jika perlu

export default function ShareButtons() {
    const pathname = usePathname();
    const [copied, setCopied] = useState(false);
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(`${window.location.origin}${pathname}`);
    }, [pathname]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    return (
        <div className="flex flex-wrap items-center gap-3 mt-6">
            {/* Twitter */}
            <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded transition"
            >
                <TwitterIcon className="w-4 h-4" />
                Twitter
            </a>

            {/* LinkedIn */}
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm rounded transition"
            >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
            </a>

            {/* Facebook */}
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
            >
                <FacebookIcon className="w-4 h-4" />
                Facebook
            </a>

            {/* Copy Link */}
            <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-sm text-gray-800 dark:text-gray-100 rounded transition"
            >
                <CopyIcon className="w-4 h-4" />
                {copied ? 'Tersalin!' : 'Salin link'}
            </button>
        </div>
    );
}
