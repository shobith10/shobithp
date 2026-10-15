import { portfolioData } from '../data/portfolio';

export default function Projects() {
    return (
        <section id="projects" className="section-shell">
            <p className="text-sm uppercase tracking-[0.3em] accent">/ projects</p>
            <h2 className="section-heading">selected work</h2>

            <div className="space-y-6">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="border-b border-[#1f2d22] pb-6 last:border-none">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                            <h3 className="text-lg text-[#f3f4f6]">{project.title}</h3>
                            <span className="text-sm accent">{project.icon}</span>
                        </div>
                        <p className="mb-3 section-copy">{project.description}</p>
                        <div className="flex flex-wrap gap-2 text-sm text-[#9ca3af]">
                            {project.technologies.map((tech, i) => (
                                <span key={i}>[{tech}]</span>
                            ))}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm">
                            <a href={project.links.demo} className="soft-link">[ demo ]</a>
                            <a href={project.links.github} className="soft-link">[ code ]</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
