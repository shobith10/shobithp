import { portfolioData } from '../data/portfolio';

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-dark-900 mb-12">About Me</h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Bio Content */}
                    <div className="md:col-span-2">
                        <div className="space-y-6">
                            {portfolioData.about.map((paragraph, index) => (
                                <p key={index} className="text-lg text-dark-700 leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Personal Details Card */}
                    <div className="bg-white p-8 rounded-lg shadow-md h-fit">
                        <h3 className="text-xl font-bold text-dark-900 mb-6">Personal Details</h3>
                        <div className="space-y-4">
                            <div className="border-b border-gray-200 pb-4">
                                <p className="text-sm text-dark-600 font-medium">Name</p>
                                <p className="text-dark-900 font-semibold">{portfolioData.name}</p>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <p className="text-sm text-dark-600 font-medium">Email</p>
                                <p className="text-dark-900 font-semibold">{portfolioData.email}</p>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <p className="text-sm text-dark-600 font-medium">Location</p>
                                <p className="text-dark-900 font-semibold">{portfolioData.location}</p>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <p className="text-sm text-dark-600 font-medium">Experience</p>
                                <p className="text-dark-900 font-semibold">4+ Years</p>
                            </div>
                            <div className="border-b border-gray-200 pb-4">
                                <p className="text-sm text-dark-600 font-medium">Current Position</p>
                                <p className="text-dark-900 font-semibold">Grapes Innovative Solutions</p>
                            </div>
                            <div>
                                <p className="text-sm text-dark-600 font-medium">Availability</p>
                                <p className="text-dark-900 font-semibold">Full-time/Contract</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
