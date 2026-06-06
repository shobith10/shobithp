import { portfolioData } from '../data/portfolio';
import SkillBar from './common/SkillBar';
import { useState, useRef } from 'react';

export default function Skills() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -1000, y: -1000 });
    };

    const allTechnicalSkills = [
        ...portfolioData.skills.mobile,
        ...portfolioData.skills.backend,
        ...portfolioData.skills.tools,
        ...portfolioData.skills.soft.map(skill => ({ name: skill }))
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
            <style>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .section-title {
                    animation: fadeInDown 0.6s ease-out;
                }

                .tech-skills-container {
                    border: 3px solid rgba(59, 130, 246, 0.2);
                    border-radius: 16px;
                    padding: 40px;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(99, 102, 241, 0.02) 100%);
                    animation: fadeInDown 0.8s ease-out;
                    transition: border-color 0.3s ease;
                }

                .tech-skills-container:hover {
                    border-color: rgba(59, 130, 246, 0.4);
                }

                .interactive-skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
                    gap: 16px;
                }

                .skill-wrapper {
                    position: relative;
                    transition: transform 0.1s ease-out;
                }

              
             

                @media (max-width: 768px) {
                    .tech-skills-container {
                        padding: 24px;
                    }

                    .interactive-skills-grid {
                        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                        gap: 12px;
                    }

                
                }
            `}</style>
            <div className="max-w-6xl mx-auto">
                <h2 className="section-title text-4xl font-bold text-dark-900 mb-12">Technical Skills</h2>

                {/* All Technical Skills in One Container */}
                <div
                    ref={containerRef}
                    className="tech-skills-container"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="interactive-skills-grid">
                        {allTechnicalSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-wrapper"
                                style={{
                                    transform: mousePos.x > 0
                                        ? (() => {
                                            const skillElement = document.querySelector(`[data-skill-index="${index}"]`);
                                            if (!skillElement) return 'translate(0, 0)';
                                            const rect = skillElement.getBoundingClientRect();
                                            const containerRect = containerRef.current.getBoundingClientRect();
                                            const skillCenterX = rect.left - containerRect.left + rect.width / 2;
                                            const skillCenterY = rect.top - containerRect.top + rect.height / 2;

                                            const dx = skillCenterX - mousePos.x;
                                            const dy = skillCenterY - mousePos.y;
                                            const distance = Math.sqrt(dx * dx + dy * dy);
                                            const force = Math.max(0, 100 - distance) / 100;
                                            const angle = Math.atan2(dy, dx);

                                            const moveX = Math.cos(angle) * force * 20;
                                            const moveY = Math.sin(angle) * force * 20;

                                            return `translate(${moveX}px, ${moveY}px)`;
                                        })()
                                        : 'translate(0, 0)'
                                }}
                            >
                                <div data-skill-index={index}>
                                    <SkillBar name={skill.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills Section
                <div className="soft-skills-section">
                    <h3 className="section-title text-2xl font-bold text-dark-900 mb-6">Soft Skills</h3>
                    <div className="soft-skills-grid">
                        {portfolioData.skills.soft.map((skill, index) => (
                            <SkillBar key={index} name={skill} />
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
}
