"use client";

import { useRef, useState, useEffect } from "react";
import { CircleChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Spinner from "@/components/Spinner";

function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sections = ["home", "about", "skills", "projects", "contact"];

      for (const section of sections) {
        const ref = sectionRefs[section].current;
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetHeight = ref.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Spinner />
        </motion.div>
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="sticky top-0 z-[999]">
            <NavBar
              onClickMenu={scrollToSection}
              changeBg={showScrollTop}
              activeSection={activeSection}
            />
          </div>

          <div ref={sectionRefs.home}>
            <Home onClickMouse={() => scrollToSection("about")} />
          </div>
          <div ref={sectionRefs.about}>
            <About />
          </div>
          <div ref={sectionRefs.skills}>
            <Skills />
          </div>
          <div ref={sectionRefs.projects}>
            <Projects />
          </div>
          <div ref={sectionRefs.contact}>
            <Contact />
          </div>

          {/* Scroll-to-top button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.div
                key="scroll-top"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-2 right-2 cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                <CircleChevronUp
                  size={65}
                  fill="#FFF7C8"
                  className="text-accent"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;