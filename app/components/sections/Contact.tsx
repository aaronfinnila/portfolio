'use client';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100%+3rem)] bg-gray-50/75 dark:bg-dark-bg/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">Contact</h2>
        </div>

        <div className="space-y-4 text-gray-700 dark:text-gray-400 leading-relaxed">
          <p>
            Feel free to reach out - I'd love to hear from you. Whether you have a
            question, want to collaborate, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="mailto:aaronfinnilaa@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 dark:bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-400/20 transition-colors"
          >
            <FaEnvelope size={14} />
            <span>aaronfinnilaa@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/aaronfinnila"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 dark:bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-400/20 transition-colors"
          >
            <FaLinkedin size={14} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
