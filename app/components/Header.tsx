'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isScrollingToSection = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isScrollingToSection.current) {
        lastScrollY.current = currentScrollY;
        return;
      }
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      isScrollingToSection.current = true;
      setIsVisible(true);
      element.scrollIntoView({ behavior: 'smooth' });
      
      const handleScrollEnd = () => {
        isScrollingToSection.current = false;
        lastScrollY.current = window.scrollY;
      };
      
      scrollTimeout.current = setTimeout(() => {
        handleScrollEnd();
      }, 1500);
      
      window.addEventListener('scrollend', () => {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        handleScrollEnd();
      }, { once: true });
    }
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-100/90 backdrop-blur-sm shadow-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="w-full px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <h1
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-gray-600 transition-colors"
          >
            Aaron Finnilä
          </h1>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
            >About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                Contact
            </button>
            
            <div className="flex items-center gap-4 border-l border-gray-300 pl-3">
              <a
                href="https://github.com/aaronfinnila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aaronfinnila"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
