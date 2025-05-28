'use client';

import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <motion.div
            className="flex items-center justify-center min-h-screen bg-white dark:bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            />
        </motion.div>
    );
}
