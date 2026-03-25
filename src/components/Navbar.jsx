import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Name */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            SP
                        </div>
                        <span className="font-bold text-lg text-dark-900 hidden sm:inline">
                            {portfolioData.name}
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-1">
                        {portfolioData.sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleNavClick(section.toLowerCase())}
                                className="px-3 py-2 text-sm font-medium text-dark-700 hover:text-primary-600 transition-colors"
                            >
                                {section}
                            </button>
                        ))}
                    </div>

                    {/* Resume Button & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm">
                            Resume
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-200">
                        {portfolioData.sections.map((section) => (
                            <button
                                key={section}
                                onClick={() => handleNavClick(section.toLowerCase())}
                                className="block w-full text-left px-4 py-2 text-sm font-medium text-dark-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                            >
                                {section}
                            </button>
                        ))}
                        <button className="w-full mt-2 mx-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm">
                            Resume
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
