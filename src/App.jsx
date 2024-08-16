import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assurez-vous que le chemin est correct
import Hero from './components/Hero'; // Assurez-vous que le chemin est correct
import About from './components/About'; // Assurez-vous que le chemin est correct
import Tech from './components/Tech'; // Assurez-vous que le chemin est correct
import Projects from './components/Projects'; // Assurez-vous que le chemin est correct
import Experience from './components/Experience'; // Assurez-vous que le chemin est correct
import Contact from './components/Contact'; // Assurez-vous que le chemin est correct

const App = () => {
    const [active, setActive] = useState('');

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BrowserRouter>
            <div className="relative z-0">
                <Navbar active={active} setActive={setActive} scrollToSection={scrollToSection} />
                <Hero />

                <div className="bg-about bg-cover bg-center bg-no-repeat" id="about">
                    <About />
                </div>

                <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10" id="tech">
                    <Tech />
                </div>

                <div className="bg-projects bg-cover bg-center bg-no-repeat" id="projects">
                    <Projects />
                </div>

                <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]" id="experience">
                    <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                        <Experience />
                    </div>
                </div>

                <div className="relative z-0" id="contact">
                    <Contact />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;