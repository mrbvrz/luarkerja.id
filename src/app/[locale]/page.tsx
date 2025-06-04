import LocaleDropdown from '../components/LocaleDropdown';
import Hero from '../components/Hero';
import ProjectCarousel from '../components/ProjectCarousel';
import ClientCarousel from '../components/ClientCarousel';

export default function HomePage() {
    return (
        <div>
            <Hero />
            <ProjectCarousel />
            <LocaleDropdown />
            <ClientCarousel />
        </div>
    );
}
