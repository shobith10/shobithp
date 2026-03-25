import { portfolioData } from '../data/portfolio';
import SocialLinks from './common/SocialLinks';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-dark-900 mb-16 text-center">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-dark-900 mb-8">Contact Information</h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-sm text-dark-600 font-medium">Email</p>
                                    <a href={`mailto:${portfolioData.email}`} className="text-lg text-dark-900 font-semibold hover:text-primary-500 transition-colors">
                                        {portfolioData.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                    📱
                                </div>
                                <div>
                                    <p className="text-sm text-dark-600 font-medium">Phone</p>
                                    <p className="text-lg text-dark-900 font-semibold">
                                        {portfolioData.phone}
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm text-dark-600 font-medium">Location</p>
                                    <p className="text-lg text-dark-900 font-semibold">
                                        {portfolioData.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-dark-900 mb-8">Find Me On</h3>

                        <div className="space-y-4">
                            {portfolioData.socialLinks.map((link) => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors group"
                                >
                                    <div className="text-3xl group-hover:scale-110 transition-transform">
                                        {link.icon === 'github' && '🐙'}
                                        {link.icon === 'linkedin' && '💼'}
                                        {link.icon === 'mail' && '✉️'}
                                        {link.icon === 'twitter' && '𝕏'}
                                    </div>
                                    <span className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">
                                        {link.platform}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <p className="mt-8 p-4 bg-primary-50 rounded-lg text-primary-600 text-center font-medium">
                            Feel free to reach out! I'm always interested in hearing about new projects and opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
