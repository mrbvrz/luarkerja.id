'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const projects = [
    {
        title: 'Aplikasi Kepegawaian',
        description: 'Sistem data pegawai.',
        image: '/images/project1.png'
    },
    {
        title: 'e-Surat Masuk',
        description: 'Manajemen surat digital.',
        image: '/images/project2.png'
    },
    {
        title: 'Inventaris Aset',
        description: 'Pantau dan kelola aset.',
        image: '/images/project3.png'
    },
    {
        title: 'Sistem Absensi',
        description: 'Absensi online real-time.',
        image: '/images/project4.png'
    },
    { title: 'PPID', description: 'Portal informasi publik.', image: '/images/project5.png' },
    {
        title: 'Website Profil',
        description: 'Identitas digital organisasi.',
        image: '/images/project6.png'
    },
    {
        title: 'e-Layanan Warga',
        description: 'Layanan publik terpadu.',
        image: '/images/project7.png'
    },
    {
        title: 'e-Monev',
        description: 'Monitoring evaluasi kinerja.',
        image: '/images/project8.png'
    },
    {
        title: 'e-Budgeting',
        description: 'Perencanaan anggaran online.',
        image: '/images/project9.png'
    },
    {
        title: 'Layanan Mandiri',
        description: 'Warga bisa akses sendiri.',
        image: '/images/project10.png'
    }
];

export default function ProjectCarousel() {
    const carouselRef = useRef(null);

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Pengalaman Proyek Kami</h2>
            <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -((projects.length - 3) * 320), right: 0 }}
                    className="flex gap-6"
                >
                    {projects.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[320px] bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
