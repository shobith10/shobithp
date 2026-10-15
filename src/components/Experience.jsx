import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className="section-shell">
            <p className="text-sm uppercase tracking-[0.3em] accent">/ experience</p>
            <h2 className="section-heading">work history</h2>

            <div className="space-y-8">
                {portfolioData.experience.map((job, index) => (
                    <div key={index} className="border-b border-[#1f2d22] pb-6 last:border-none">
                        <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <div>
                                <h3 className="text-lg text-[#f3f4f6]">{job.title}</h3>
                                <p className="text-[#9ca3af]">{job.company}</p>
                            </div>
                            <p className="text-sm text-[#6b7280]">{job.period}</p>
                        </div>

                        <ul className="space-y-2 text-sm leading-7 text-[#cbd5e1]">
                            {job.responsibilities.map((resp, i) => (
                                <li key={i}>
                                    <span className="accent mr-2">-</span>
                                    {resp}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
