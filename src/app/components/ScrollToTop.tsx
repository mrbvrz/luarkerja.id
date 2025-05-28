'use client';

import { useEffect } from 'react';
import { animate } from 'framer-motion';

export default function ScrollToTop() {
    useEffect(() => {
        const timer = setTimeout(() => {
            animate(window.scrollY, 0, {
                duration: 1.3,
                ease: [0.25, 0.1, 0.25, 1],
                onUpdate(value) {
                    window.scrollTo(0, value);
                }
            });
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
