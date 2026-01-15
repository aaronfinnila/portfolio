'use client';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-24 px-6 bg-gray-200">
      <div 
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="space-y-4 text-lg">
          <p>
            I'm a third-year IT student at the University of Turku, set to graduate with my Bachelor's degree in spring 2026. I'm planning to continue with my Master's in fall 2026. My Bachelor's thesis, which focused on pathfinding algorithms, was completed in fall 2025.
          </p>
          <p>
            I like to combine my theoretical knowledge with hands-on learning through my own projects. I'm always motivated to learn more.
          </p>
          <p>
            My current experience is primarily with Java applications and web development, with some exposure to C and Python. However, my strong foundational knowledge allows me to quickly adapt and learn new technologies as needed.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-gray-700 text-lg">
              Bachelor's in IT - University of Turku, 2023-2026
            </p>
            <p className="text-gray-700 text-lg">
              Master's in IT - University of Turku, 2026-2028
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300">
            <h3 className="text-2xl font-semibold mb-4">Technologies</h3>
            <p className="text-gray-700 text-lg">
              Java, C, Python, TypeScript, React, Node.js, Spring Boot, Tailwind CSS, Git, PostgreSQL, MongoDB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
