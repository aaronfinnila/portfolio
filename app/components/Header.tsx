'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        // Always show when near the top
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gray-100/90 backdrop-blur-sm shadow-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Aaron Finnilä</h1>
          
          <div className="flex items-center gap-8">
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
              onClick={() => scrollToSection('skills')}
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                Contact
            </button>
            
            <div className="flex items-center gap-4 ml-4 border-l border-gray-300 pl-4">
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
