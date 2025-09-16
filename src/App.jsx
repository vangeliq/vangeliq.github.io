import "./styles/globals.css";
import Icons from "./assets/Icons";
import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Timeline } from "./components/timeline/Timeline";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

function App() {
  const root = window.document.documentElement;
  const [isLight, toggleLight] = useState(localStorage.getItem("theme") === "light");
  const ref = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleDarkMode = async () => {
    if (!ref.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        toggleLight(!isLight);
        const theme = isLight ? "dark" : "light";
        root.classList.remove("dark", "light");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    // Calculates the radius of circle that can cover the screen
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <div className="min-h-screen">
      <button
        onClick={toggleDarkMode}
        ref={ref}
        className="fixed top-4 right-4 z-50 px-3 py-3 bg-primary/70 text-background rounded-md hover:bg-primary/50  transition-transform duration-150 active:scale-85"
      >
        {isLight ? <Icons.Theme.DarkModeIcon className="w-5 h-5" /> : <Icons.Theme.LightModeIcon className="w-5 h-5" />}
      </button>

      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 lg:px-12"
      >
        <Hero scrollToSection={scrollToSection} />
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 lg:px-12 bg-background-muted"
      >
        <About />
      </section>

      <section
        id="timeline"
        className="min-h-screen flex flex-col justify-center my-8 px-6 lg:px-12"
      >
        <h2 className="text-3xl lg:text-4xl font-medium  text-center mb-8">
          My Journey
        </h2>
        <Timeline />
      </section>

      <section
        id="projects"
        className="min-h-screen flex flex-col flex-start py-16 px-6 lg:px-12 bg-background-muted"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center px-6 lg:px-12"
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;
