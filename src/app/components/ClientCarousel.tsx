'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const clients = [
    { name: 'Google', logoMono: '/clients/google-mono.png', logo: '/clients/google.png' },
    { name: 'Facebook', logoMono: '/clients/facebook-mono.png', logo: '/clients/facebook.png' },
    { name: 'Netflix', logoMono: '/clients/netflix-mono.png', logo: '/clients/netflix.png' },
    { name: 'Amazon', logoMono: '/clients/amazon-mono.png', logo: '/clients/amazon.png' },
    { name: 'Microsoft', logoMono: '/clients/microsoft-mono.png', logo: '/clients/microsoft.png' },
    { name: 'Apple', logoMono: '/clients/apple-mono.png', logo: '/clients/apple.png' },
    { name: 'Tesla', logoMono: '/clients/tesla-mono.png', logo: '/clients/tesla.png' },
    { name: 'Airbnb', logoMono: '/clients/airbnb-mono.png', logo: '/clients/airbnb.png' },
    { name: 'Spotify', logoMono: '/clients/spotify-mono.png', logo: '/clients/spotify.png' },
    { name: 'Twitter', logoMono: '/clients/twitter-mono.png', logo: '/clients/twitter.png' }
];

const itemWidth = 160 + 40; // item width + gap

export default function ClientCarousel() {
    const [index, setIndex] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % clients.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        controls.start({
            x: -index * itemWidth,
            transition: { duration: 0.7, ease: 'easeInOut' }
        });
    }, [index, controls]);

    return (
        <section className="py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 overflow-hidden">
                <h2 className="text-xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-200">
                    Dipercaya oleh perusahaan besar
                </h2>

                <div className="w-full overflow-hidden">
                    <motion.div
                        className="flex gap-10"
                        animate={controls}
                        style={{ width: `${clients.length * 2 * itemWidth}px` }} // dua kali lipat untuk looping
                    >
                        {[...clients, ...clients].map((client, idx) => (
                            <div
                                key={idx}
                                className="relative w-[160px] h-20 flex-shrink-0 group cursor-pointer"
                            >
                                <Image
                                    src={client.logoMono}
                                    alt={client.name}
                                    fill
                                    sizes="160px"
                                    className="object-contain grayscale"
                                    priority={false}
                                />
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    sizes="160px"
                                    className="object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                                    priority={false}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
