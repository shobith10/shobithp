import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-dark-900 mb-16">Work Experience</h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {portfolioData.experience.map((job, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="flex md:justify-center">
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8">
                                        <div className="w-5 h-5 bg-primary-500 rounded-full border-4 border-white shadow-md"></div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                        <h3 className="text-2xl font-bold text-dark-900 mb-2">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                                            <p className="text-lg font-semibold text-primary-500">
                                                {job.company}
                                            </p>
                                            <p className="text-sm text-dark-600">
                                                {job.period}
                                            </p>
                                        </div>

                                        <ul className="space-y-2 text-dark-700">
                                            {job.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="text-primary-500 font-bold mt-1">•</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
