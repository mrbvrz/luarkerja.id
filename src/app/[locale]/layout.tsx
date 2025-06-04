import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CookieConsent from '../components/CookieConsent';
import SubFooter from '../components/SubFooter';
import '@/app/globals.css';
import { DM_Sans } from 'next/font/google';
import PageTransition from '../components/PageTransition';
import { GlobalLoadingProvider } from '../hooks/useGlobalLoading';

const figtree = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dm-sans',
    display: 'swap'
});

export const metadata = {
    title: 'LuarKerja',
    description: 'Website resmi LuarKerja'
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        console.error('Gagal load messages:', error);
        notFound();
    }

    return (
        <html lang={locale} className={figtree.className}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {/* <GlobalLoadingProvider> */}
                    <Navbar />
                    <PageTransition>{children}</PageTransition>
                    <CookieConsent />
                    <SubFooter />
                    <Footer />
                    {/* </GlobalLoadingProvider> */}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
