import Hero from '../components/Hero';
import ProjectCarousel from '../components/ProjectCarousel';
import ClientCarousel from '../components/ClientCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('ContactPage');
    return (
        <div>
            <Hero />
            <ProjectCarousel />
            <ClientCarousel />
            <div
                className="relative bg-cover bg-center py-24 px-6 md:px-12"
                style={{ backgroundImage: 'url("/contact-bg.jpg")' }}
            >
                <div className="absolute inset-0 bg-luarkerja-600 z-0" />
                <div className="relative z-10 max-w-6xl mx-auto text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('heading')}</h2>
                    <p className="mb-10 text-lg">{t('subheading')}</p>
                    <ContactForm />
                </div>
            </div>
            <WhyChooseUs />
            <CallToAction />
        </div>
    );
}
