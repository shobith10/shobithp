import { portfolioData } from '../data/portfolio';
import SkillBar from './common/SkillBar';

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-dark-900 mb-16">Technical Skills</h2>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Mobile & Backend Skills */}
                    <div>
                        <h3 className="text-2xl font-bold text-dark-900 mb-6">Mobile Development</h3>
                        {portfolioData.skills.mobile.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-dark-900 mb-6">Backend & Tools</h3>
                        {portfolioData.skills.backend.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Development Tools */}
                    <div>
                        <h3 className="text-2xl font-bold text-dark-900 mb-6">Development Tools</h3>
                        {portfolioData.skills.tools.map((skill, index) => (
                            <SkillBar key={index} name={skill.name} proficiency={skill.proficiency} />
                        ))}
                    </div>

                    {/* Placeholder for balance */}
                    <div></div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h2 className="text-3xl font-bold text-dark-900 mb-8">Soft Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {portfolioData.skills.soft.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-100 text-dark-800 rounded-full font-medium hover:bg-primary-100 hover:text-primary-600 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
