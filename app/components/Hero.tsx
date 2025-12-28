'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className={`text-center space-y-8 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-3xl md:text-8xl lg:text-9xl font-playfair font-bold tracking-tight text-gray-900">
          Aaron Finnilä
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Passionate programmer crafting elegant solutions
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
                    <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 border-2 border-gray-800 hover:border-gray-900 text-gray-900 rounded-lg transition-colors text-lg cursor-pointer"
          >View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-gray-800 hover:border-gray-900 text-gray-900 rounded-lg transition-colors text-lg cursor-pointer"
          >Contact
          </button>
        </div>
      </div>
    </section>
  );
}
