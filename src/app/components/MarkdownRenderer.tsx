'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';

interface Props {
    markdown: string;
}

export default function MarkdownRenderer({ markdown }: Props) {
    const [html, setHtml] = useState('');

    useEffect(() => {
        async function parseMarkdown() {
            const parsed = await marked.parse(markdown);
            setHtml(parsed);
        }
        parseMarkdown();
    }, [markdown]);

    return (
        <div
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
