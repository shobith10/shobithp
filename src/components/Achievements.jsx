import { portfolioData } from '../data/portfolio';

export default function Achievements() {
    return (
        <section id="achievements" className="section-shell">
            <p className="text-sm uppercase tracking-[0.3em] accent">/ achievements</p>
            <h2 className="section-heading">highlights</h2>

            <div className="space-y-6 text-sm leading-7 text-[#cbd5e1]">
                {portfolioData.achievements.map((achievement, index) => (
                    <div key={index}>
                        <span className="accent mr-2">&gt;</span>
                        <span className="text-[#f3f4f6]">{achievement.title}</span> — {achievement.description}
                    </div>
                ))}
            </div>

            <div className="mt-8 border-t border-[#1f2d22] pt-8">
                <p className="text-sm uppercase tracking-[0.3em] accent">/ education</p>
                <p className="mt-3 text-[#f3f4f6]">{portfolioData.education.degree}</p>
                <p className="text-[#9ca3af]">{portfolioData.education.institution} • {portfolioData.education.year}</p>
            </div>
        </section>
    );
}
