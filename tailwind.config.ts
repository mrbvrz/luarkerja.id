import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                luarkerja: {
                    50: '#FFFDFA',
                    100: '#FFFAF5',
                    200: '#FFF3E5',
                    300: '#FFEEDB',
                    400: '#FFE6CC',
                    500: '#FFE0BF',
                    600: '#FFB566',
                    700: '#FF8B0F',
                    800: '#B35C00',
                    900: '#5C2F00',
                    950: '#2E1800'
                }
            },
            fontFamily: {
                sans: ['var(--font-dm-sans)', 'sans-serif']
            }
        }
    },
    plugins: [typography]
};
export default config;
