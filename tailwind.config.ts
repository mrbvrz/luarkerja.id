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
            animation: {
        gradientMove: 'gradientMove 20s ease-in-out infinite',
      },
            keyframes: {
                gradientMove: {
                    '0%, 100%': {
                        transform: 'translate(0%, 0%) scale(1)',
                        backgroundPosition: '0% 50%'
                    },
                    '50%': {
                        transform: 'translate(-10%, -10%) scale(1.1)',
                        backgroundPosition: '100% 50%'
                    }
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                luarkerja: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407'
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
