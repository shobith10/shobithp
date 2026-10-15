import { portfolioData } from '../data/portfolio';

export default function Skills() {
    const skillGroups = [
        {
            title: 'Mobile & UI',
            skills: portfolioData.skills.mobile.map(skill => skill.name)
        },
        {
            title: 'Architecture & APIs',
            skills: portfolioData.skills.backend.map(skill => skill.name)
        },
        {
            title: 'Tools & Delivery',
            skills: portfolioData.skills.tools.map(skill => skill.name)
        },
        {
            title: 'Leadership & Workflow',
            skills: portfolioData.skills.soft
        }
    ];

    return (
        <section id="skills" className="section-shell">
            <p className="text-sm uppercase tracking-[0.3em] accent">/ skills</p>
            <h2 className="section-heading">toolchain</h2>

            <div className="skill-groups">
                {skillGroups.map((group, index) => (
                    <div className="skill-group" key={index}>
                        <div className="skill-group-header">
                            <span className="accent">//</span>
                            <h3>{group.title}</h3>
                        </div>

                        <div className="skill-pills">
                            {group.skills.map((skill, skillIndex) => (
                                <span className="skill-pill" key={`${group.title}-${skillIndex}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                .skill-groups {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 1.1rem;
                    margin-top: 1.5rem;
                }

                .skill-group {
                    background: rgba(15, 23, 42, 0.72);
                    border: 1px solid rgba(96, 165, 250, 0.16);
                    border-radius: 16px;
                    padding: 1rem 1.1rem;
                    box-shadow: inset 0 1px 0 rgba(148, 163, 184, 0.08);
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                }

                .skill-group:hover {
                    transform: translateY(-2px);
                    border-color: rgba(96, 165, 250, 0.32);
                    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.12);
                }

                .skill-group-header {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    margin-bottom: 0.9rem;
                    padding-bottom: 0.55rem;
                    border-bottom: 1px solid rgba(148, 163, 184, 0.14);
                }

                .skill-group-header h3 {
                    margin: 0;
                    font-size: 0.88rem;
                    font-weight: 700;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #e2e8f0;
                }

                .skill-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                }

                .skill-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.55rem 0.8rem;
                    border-radius: 9999px;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(14, 116, 144, 0.12));
                    border: 1px solid rgba(96, 165, 250, 0.28);
                    color: #e2e8f0;
                    font-size: 0.76rem;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    line-height: 1.2;
                    transition: all 0.2s ease;
                }

                .skill-pill:hover {
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(14, 116, 144, 0.18));
                    border-color: rgba(96, 165, 250, 0.52);
                    transform: translateY(-1px);
                }

                @media (max-width: 768px) {
                    .skill-groups {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}
