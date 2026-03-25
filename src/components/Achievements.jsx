import { portfolioData } from '../data/portfolio';

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-dark-900 mb-16">Achievements & Certifications</h2>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Achievements */}
                    <div>
                        <h3 className="text-2xl font-bold text-dark-900 mb-8">Key Achievements</h3>
                        <div className="space-y-6">
                            {portfolioData.achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex gap-4">
                                        <div className="text-4xl">{achievement.icon}</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-dark-900 mb-2">
                                                {achievement.title}
                                            </h4>
                                            <p className="text-dark-700">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold text-dark-900 mb-8">Certifications</h3>
                        <div className="space-y-4">
                            {portfolioData.certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-lg font-bold text-dark-900 mb-2">
                                        {cert.title}
                                    </h4>
                                    <div className="flex justify-between items-center">
                                        <p className="text-dark-700">{cert.issuer}</p>
                                        <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full">
                                            {cert.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-3xl font-bold text-dark-900 mb-8">Education</h2>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex gap-4">
                            <div className="text-5xl">🎓</div>
                            <div>
                                <h3 className="text-2xl font-bold text-dark-900 mb-2">
                                    {portfolioData.education.degree}
                                </h3>
                                <p className="text-lg text-dark-700 mb-2">
                                    {portfolioData.education.institution}
                                </p>
                                <p className="text-dark-600">
                                    {portfolioData.education.year} | GPA: {portfolioData.education.gpa}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
