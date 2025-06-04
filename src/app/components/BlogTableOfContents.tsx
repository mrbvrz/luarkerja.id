'use client';

import { useEffect, useState } from 'react';

type Heading = {
    id: string;
    text: string;
    level: number;
};

export default function TableOfContents() {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const headingElements = Array.from(
            document.querySelectorAll('h2, h3')
        ) as HTMLHeadingElement[];

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' } // Scroll spy behavior
        );

        const extractedHeadings: Heading[] = headingElements.map(heading => {
            observer.observe(heading);
            return {
                id: heading.id,
                text: heading.textContent || '',
                level: parseInt(heading.tagName[1])
            };
        });

        setHeadings(extractedHeadings);

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="sticky top-20 hidden lg:block w-64 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <h2 className="font-semibold text-base mb-2">Watcher</h2>
            <ul className="space-y-1 border-l border-gray-300 dark:border-gray-600 pl-4">
                {headings.map(heading => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            className={`block hover:underline transition ${
                                activeId === heading.id ? 'text-blue-600 font-medium' : ''
                            } ml-${(heading.level - 2) * 4}`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
