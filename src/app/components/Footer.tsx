import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                    © {new Date().getFullYear()} LuarKerja. All rights reserved.
                </p>
                <div className="flex gap-4 items-center">
                    <ThemeSelector />
                    <LanguageSelector />
                </div>
            </div>
        </footer>
    );
}
