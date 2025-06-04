'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SubFooter() {
    return (
        <div className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo dan Deskripsi */}
                <div>
                    <Link href="/" className="inline-block mb-4">
                        <Image
                            src="/logo.svg"
                            alt="LuarKerja Logo"
                            width={150}
                            height={50}
                            priority
                        />
                    </Link>
                    <p className="text-sm leading-relaxed">
                        LuarKerja adalah platform jasa pembuatan aplikasi web & mobile yang membantu
                        bisnis tumbuh dengan solusi digital terbaik.
                    </p>
                </div>

                {/* Navigasi Link */}
                <div>
                    <h4 className="text-md font-semibold mb-3">Navigasi</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link href="/layanan" className="hover:underline">
                                Layanan
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:underline">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontak" className="hover:underline">
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Kontak & Sosial */}
                <div>
                    <h4 className="text-md font-semibold mb-3">Hubungi Kami</h4>
                    <ul className="text-sm space-y-1">
                        <li>
                            Email:{' '}
                            <a href="mailto:halo@luarkerja.com" className="hover:underline">
                                halo@luarkerja.com
                            </a>
                        </li>
                        <li>Telepon: +62 812-3456-7890</li>
                        <li>Alamat: Jakarta, Indonesia</li>
                    </ul>

                    <div className="flex gap-3 mt-4">
                        <a href="#" className="hover:opacity-80" aria-label="Instagram">
                            <Image
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={20}
                                height={20}
                            />
                        </a>
                        <a href="#" className="hover:opacity-80" aria-label="LinkedIn">
                            <Image
                                src="/icons/linkedin.svg"
                                alt="LinkedIn"
                                width={20}
                                height={20}
                            />
                        </a>
                        <a href="#" className="hover:opacity-80" aria-label="GitHub">
                            <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
