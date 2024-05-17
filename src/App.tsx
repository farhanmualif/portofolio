import "./App.css";
import MainPage from "./pages/MainPage";
import AOS from "aos";
import { useEffect, useState } from "react";
import { HiArrowDown } from "react-icons/hi2";
import "aos/dist/aos.css";

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const handleScroll = () => {
      const sections = ["about", "project", "contact"];
      let currentSectionIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          currentSectionIndex = i;
        }
      }

      setCurrentSection(sections[currentSectionIndex]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const sections = ["about", "project", "contact"];
    const currentSectionIndex = sections.indexOf(currentSection);
    const nextSectionIndex = (currentSectionIndex + 1) % sections.length;
    const nextSection = sections[nextSectionIndex];

    const nextSectionElement = document.getElementById(nextSection);
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <MainPage />
      <div
        className="fixed bottom-20 right-20 animate-bounce w-10 h-10 bg-white flex justify-center items-center rounded-full cursor-pointer"
        onClick={handleClick}>
        <HiArrowDown />
      </div>
    </div>
  );
}

export default App;
