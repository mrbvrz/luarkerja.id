import Hero from '../components/Hero';
import ProjectCarousel from '../components/ProjectCarousel';
import ClientCarousel from '../components/ClientCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';
import { useTranslations } from 'next-intl';
import Blur from '../components/Blur';
import TestimonialsSlider from '../components/TestimonialSlider';
import NewsletterSection from '../components/NewsletterSection';
import CustomerInsightSection from '../components/CustomerInsightSection';
import ToolingSection from '../components/ToolingSection';
import BlurParallaxSection from '../components/BlurParallaxSection';
import AnimatedWords from '../components/AnimatedWords';
import BlurHero from '../components/BlurHero';

export default function HomePage() {
    const t = useTranslations('ContactPage');
    return (
        <div>
            <BlurHero />
        <BlurParallaxSection />
            <Blur />
            <Hero />
            <TestimonialsSlider />
            <NewsletterSection />
            <CustomerInsightSection />
            <AnimatedWords />

            <ToolingSection />
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
