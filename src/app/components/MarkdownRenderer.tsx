'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';

interface Props {
  markdown: string;
}

export default function MarkdownRenderer({ markdown }: Props) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    setHtml(marked.parse(markdown));
  }, [markdown]);

  return (
    <div
      className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
