import { portfolioData } from '../data/portfolio';

export default function Navbar() {
    const handleResumeClick = () => {
        window.open('https://drive.google.com/file/d/1b4eZaC2sDuVO4eV29tC5PlfqxT-njUlM/view?usp=sharing', '_blank');
    };

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-[#1f2d22] bg-[#0a0f0a]/90 backdrop-blur">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#home" className="text-sm text-[#f3f4f6] transition-colors hover:text-[#4ade80]">
                    <span className="accent">[</span> {portfolioData.name} <span className="accent">]</span>
                </a>

                <div className="hidden items-center gap-5 text-sm text-[#9ca3af] md:flex">
                    {portfolioData.sections.map((section) => (
                        <a
                            key={section}
                            href={`#${section.toLowerCase()}`}
                            className="soft-link"
                        >
                            {section}
                        </a>
                    ))}
                </div>

                <button
                    onClick={handleResumeClick}
                    className="text-sm text-[#9ca3af] transition-colors hover:text-[#4ade80]"
                >
                    [ resume ]
                </button>
            </div>
        </nav>
    );
}
