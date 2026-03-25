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
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />

                {/* Footer */}
                <footer className="bg-dark-900 text-white py-8 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <p className="text-gray-400">
                            © 2024 Shobith P. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Designed & Built with React & Tailwind CSS
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
