import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen text-[#f3f4f6]">
            <Navbar />
            <main className="mx-auto max-w-4xl px-4 pt-24 sm:px-6 lg:px-8">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />

                <footer className="border-t border-[#1f2d22] py-8 text-sm text-[#6b7280]">
                    <p>© 2024 Shobith P. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
