'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    phone: string;
};

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset
    } = useForm<FormData>();

    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data: FormData) => {
        setSuccess(false);
        setErrorMessage('');

        const { error } = await supabase.from('contacts').insert([data]);

        if (error) {
            console.error(error);
            setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
        } else {
            setSuccess(true);
            reset();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-5xl mx-auto px-4 py-10"
        >
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Hubungi Kami</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Informasi Perusahaan */}
                <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Silakan isi formulir di samping untuk menghubungi kami.
                    </p>
                    <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                        <li><strong>Perusahaan:</strong> LuarKerja</li>
                        <li><strong>Alamat:</strong> Jl. Teknologi No. 123, Jakarta</li>
                        <li><strong>Email:</strong> info@luarkerja.com</li>
                        <li><strong>Telepon:</strong> +62 812-3456-7890</li>
                    </ul>
                </div>

                {/* Formulir Kontak */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        {...register('name', { required: true })}
                        placeholder="Nama"
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.name && <span className="text-red-500 text-sm">Nama wajib diisi</span>}

<input
    {...register('phone', { required: true })}
    placeholder="Nomor HP"
    className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
/>
{errors.phone && <span className="text-red-500 text-sm">Nomor HP wajib diisi</span>}

                    <input
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.email && <span className="text-red-500 text-sm">Email wajib diisi</span>}

                    <input
                        {...register('subject', { required: true })}
                        placeholder="Subjek"
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.subject && <span className="text-red-500 text-sm">Subjek wajib diisi</span>}

                    <textarea
                        rows={5}
                        {...register('message', { required: true })}
                        placeholder="Pesan"
                        className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {errors.message && <span className="text-red-500 text-sm">Pesan wajib diisi</span>}

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Kirim Pesan
                    </button>

                    {success && <p className="text-green-600 mt-2">Pesan berhasil dikirim!</p>}
                    {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
                </form>
            </div>

            {/* Google Maps */}
            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1121.1655103904832!2d101.85435153602117!3d0.39954957174973904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sid!4v1748369546126!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </motion.div>
    );
}
