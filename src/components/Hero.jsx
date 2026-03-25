import { portfolioData } from '../data/portfolio';
import SocialLinks from './common/SocialLinks';
import TechBadge from './common/TechBadge';

export default function Hero() {
    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Hero Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Content */}
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 leading-tight">
                            Hi, I'm {portfolioData.name}
                        </h1>
                        <p className="text-2xl md:text-3xl font-semibold text-primary-500 mb-6">
                            {portfolioData.title}
                        </p>
                        <p className="text-lg text-dark-700 mb-8 leading-relaxed">
                            {portfolioData.bio}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={() => handleNavClick('contact')}
                                className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                            >
                                Get in touch
                            </button>
                            <button
                                onClick={() => handleNavClick('projects')}
                                className="px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
                            >
                                View projects
                            </button>
                        </div>

                        {/* Social Links */}
                        <SocialLinks links={portfolioData.socialLinks} compact={true} />
                    </div>

                    {/* Right Side - Avatar Placeholder */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-primary-100 to-primary-300 rounded-full flex items-center justify-center border-4 border-primary-500 shadow-lg">
                            <div className="text-8xl">👨‍💻</div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-16"></div>

                {/* Tech Stack */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-dark-900 mb-8">Tech Stack</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {[
                            'Flutter',
                            'Dart',
                            'Firebase',
                            'REST APIs',
                            'SQL/NoSQL',
                            'Android',
                            'iOS',
                            'GitHub'
                        ].map((tech) => (
                            <TechBadge key={tech} text={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
