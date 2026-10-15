import { portfolioData } from '../data/portfolio';
import SocialLinks from './common/SocialLinks';

export default function Hero() {
    return (
        <section id="home" className="section-shell">
            <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] accent">/ home</p>
                <h1 className="text-4xl leading-tight sm:text-5xl">
                    <span className="block text-[#f3f4f6]">Hi, I’m {portfolioData.name}</span>
                    <span className="mt-2 block accent">{portfolioData.title}</span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 section-copy">{portfolioData.bio}</p>

                <ul className="space-y-2 text-sm text-[#9ca3af]">
                    <li><span className="accent mr-2">&gt;</span> Flutter, Dart, Firebase, and REST APIs</li>
                    <li><span className="accent mr-2">&gt;</span> Product-minded builder with 4+ years shipping mobile apps</li>
                    <li><span className="accent mr-2">&gt;</span> Focused on maintainable code and clean UX</li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-2 text-sm">
                    <a href="#contact" className="soft-link">[ contact ]</a>
                    <a href="#projects" className="soft-link">[ projects ]</a>
                    <a href="https://drive.google.com/file/d/19sIKc5Bvn9AydA68fWrmw9z4Y5XcgALw/view?usp=sharing" target="_blank" rel="noreferrer" className="soft-link">[ resume ]</a>
                </div>

                <div className="pt-4">
                    <SocialLinks links={portfolioData.socialLinks} compact={true} />
                </div>
            </div>
        </section>
    );
}
