"use client";

import { useRef, useState, useEffect } from 'react';
import { CircleChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '@/components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Spinner from '@/components/Spinner';

function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [loading, setLoading ] = useState(true);

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const ref = sectionRefs[section].current;
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetHeight = ref.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading)
    return (
      <AnimatePresence>
        <motion.div
          key="spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Spinner />
        </motion.div>
      </AnimatePresence>
    );
  return (
    <div className='w-full'>
      <div className="sticky top-0 z-[999]">
        <NavBar 
          onClickMenu={scrollToSection} 
          changeBg={showScrollTop} 
          activeSection={activeSection} 
        />
      </div>

      <div ref={sectionRefs.home}><Home onClickMouse={() => scrollToSection('about')} /></div>
      <div ref={sectionRefs.about}><About /></div>
      <div ref={sectionRefs.skills}><Skills /></div>
      <div ref={sectionRefs.projects}><Projects /></div>
      <div ref={sectionRefs.contact}><Contact /></div>

      {showScrollTop && (
        <CircleChevronUp
          size={65}
          className='text-accent transition-transform hover:scale-105 fixed bottom-2 right-2 cursor-pointer'
          fill='#FFF7C8'
          onClick={() => scrollToSection('home')}
        />
      )}
    </div>
  );
}

export default App;
