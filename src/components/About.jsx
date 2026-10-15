import { portfolioData } from '../data/portfolio';

export default function About() {
    return (
        <section id="about" className="section-shell">
            <p className="text-sm uppercase tracking-[0.3em] accent">/ about</p>
            <h2 className="section-heading">about me</h2>

            <div className="space-y-6 section-copy">
                {portfolioData.about.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>

            <ul className="mt-8 space-y-2 text-sm text-[#cbd5e1]">
                <li><span className="accent mr-2">-</span>Name: {portfolioData.name}</li>
                <li><span className="accent mr-2">-</span>Email: {portfolioData.email}</li>
                <li><span className="accent mr-2">-</span>Location: {portfolioData.location}</li>
                <li><span className="accent mr-2">-</span>Focus: Flutter, mobile product delivery, clean architecture</li>
            </ul>
        </section>
    );
}
