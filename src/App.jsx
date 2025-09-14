import './styles/globals.css'

import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Timeline } from './components/timeline/Timeline'
import { Contact } from './components/contact/Contact';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-white">
            <section id="hero" className="min-h-screen flex flex-col justify-center px-6 lg:px-12">
              <Hero scrollToSection={scrollToSection} />
            </section>

            <section id="about" className="min-h-screen flex flex-col justify-center px-6 lg:px-12 bg-gray-50">
              <About />
            </section>

            <section id="timeline" className="min-h-screen flex flex-col justify-center px-6 lg:px-12">
              <h2 className="text-3xl lg:text-4xl font-medium mb-8 text-center">My Journey</h2>
              <Timeline />
            </section>

            <section id="contact" className="min-h-screen flex flex-col justify-center px-6 lg:px-12 bg-gray-50">
              <Contact />
            </section>
    </div>
  )
}

export default App
