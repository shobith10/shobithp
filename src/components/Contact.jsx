import { portfolioData } from '../data/portfolio';
import SocialLinks from './common/SocialLinks';

export default function Contact() {
    return (
        <section id="contact" className="section-shell">
            <p className="text-sm uppercase tracking-[0.3em] accent">/ contact</p>
            <h2 className="section-heading">reach out</h2>

            <div className="space-y-4 text-sm text-[#cbd5e1]">
                <p><span className="accent mr-2">&gt;</span>Email: <a href={`mailto:${portfolioData.email}`} className="soft-link">{portfolioData.email}</a></p>
                <p><span className="accent mr-2">&gt;</span>Phone: {portfolioData.phone}</p>
                <p><span className="accent mr-2">&gt;</span>Location: {portfolioData.location}</p>
            </div>

            <div className="mt-6">
                <SocialLinks links={portfolioData.socialLinks} compact={true} />
            </div>
        </section>
    );
}
