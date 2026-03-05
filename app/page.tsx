'use client';

import { useState, useEffect, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './context/ThemeContext';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'contact'];

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      const threshold = window.innerHeight * 0.3;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const isActive = (id: string) => activeSection === id;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="lg:flex lg:justify-between lg:gap-24 mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <header
           className={`lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
              Aaron Finnil&auml;
            </h1>
            <h2 className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300 sm:text-xl">
              Software Engineer
            </h2>
            <p className="mt-4 max-w-xs text-gray-700 dark:text-gray-400 leading-relaxed">
              Passionate programmer crafting elegant solutions.
            </p>

            <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
              <ul className="space-y-5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`group flex items-center cursor-pointer transition-all duration-200 ${
                        isActive(item.id)
                          ? 'text-gray-900 dark:text-gray-100'
                          : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300'
                      }`}
                    >
                      <span
                        className={`mr-4 h-px transition-all duration-200 ${
                          isActive(item.id)
                            ? 'w-16 bg-gray-900 dark:bg-gray-100'
                            : 'w-8 bg-gray-400 dark:bg-gray-600 group-hover:w-16 group-hover:bg-gray-900 dark:group-hover:bg-gray-300'
                        }`}
                      />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {item.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex items-center gap-5 lg:mt-0">
            <a
              href="https://github.com/aaronfinnila"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aaronfinnila"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <HiMoon size={22} /> : <HiSun size={22} />}
            </button>
          </div>
        </header>

        <main className="pt-24 lg:w-[55%] lg:py-24">
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
