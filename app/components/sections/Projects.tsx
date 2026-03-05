'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      title: "Rilk",
      description: "A 2D adventure RPG built with vanilla Java and Swing. Features a custom combat system, original art and audio, explorable areas, and an in-game casino.",
      tech: ["Java", "Swing"],
      github: "https://github.com/aaronfinnila/rilk",
      demo: "https://awsy.itch.io/rilk",
    },
    {
      title: "Funding Advisor",
      description: "An AI-powered advisor for company investment decisions. Built with Next.js, it features a multi-step wizard that integrates with the Finnish PRH company registry API and uses AI to match companies against a funding instruments database.",
      tech: ["Next.js", "AI", "TypeScript"],
      demo: "https://fa.attractor.fi",
    },
    {
      title: "cs2dle",
      description: "A CS2 pro player guessing game. Fullstack app with a React + TypeScript frontend, Spring Boot backend, and PostgreSQL database. Player data sourced from the Liquipedia API.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/aaronfinnila/cs2dle",
      demo: "https://cs2dle.org",
    },
    {
      title: "Business Advisor",
      description: "A guided, multilingual web application that helps entrepreneurs prepare for business advisory meetings. Built with Next.js, it uses AI to generate personalized guidance based on a structured questionnaire.",
      tech: ["Next.js", "AI", "TypeScript"],
      demo: "https://ba.attractor.fi",
    },
    {
      title: "C Calculator",
      description: "A calculator application written in C with a graphical user interface built using the GTK4 library.",
      tech: ["C", "GTK4"],
      github: "https://github.com/aaronfinnila/c_calculator",
    },
    {
      title: "Whispers",
      description: "A Java messaging application built for a Distributed Computer Systems course. Features TCP socket communication, multi-threaded client handling, and a client-server architecture.",
      tech: ["Java", "TCP Sockets"],
      github: "https://github.com/aaronfinnila/whispers",
    },
    {
      title: "3dgame",
      description: "A 3D game development project built with the MonoGame framework.",
      tech: ["C#", ".NET", "MonoGame"],
      github: "https://github.com/aaronfinnila/3dgame",
    },
  ];

  const getProjectLink = (project: { github?: string; demo?: string }) => {
    if (project.demo) return project.demo;
    if (project.github) return project.github;
    return '#';
  };

  const updateScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector<HTMLElement>('[data-project-card]')?.offsetWidth ?? 300;
    const gap = 12;
    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100%+3rem)] bg-gray-50/75 dark:bg-dark-bg/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">Projects</h2>
        </div>

        <div className="relative">
          {/* Desktop side arrows */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border items-center justify-center transition-opacity cursor-pointer ${
              canScrollLeft ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-200" size={12} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto overflow-y-visible scroll-smooth pt-2 pb-4 -mt-2 pr-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <a
                key={index}
                data-project-card
                href={getProjectLink(project)}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-dark-card rounded-lg p-5 shadow-md hover:shadow-lg dark:shadow-black/30 border border-gray-200 dark:border-dark-border-subtle flex flex-col min-w-[calc(40%-4px)] w-[calc(40%-4px)] flex-shrink-0 transition-all duration-300 hover:-translate-y-1 cursor-pointer no-underline"
              >
                <div className="flex items-center justify-between mb-3">
                  <FaFolder className="text-gray-400 dark:text-gray-600" size={24} />
                  <div className="flex items-center gap-2.5">
                    {project.github && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={16} />
                      </span>
                    )}
                    {project.demo && (
                      <span
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.demo, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        aria-label="External Link"
                      >
                        <FaExternalLinkAlt size={14} />
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-sm font-semibold mb-1.5 text-gray-950 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-2 mt-auto flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-blue-100/80 dark:bg-blue-400/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-800 dark:text-blue-300 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Desktop side arrow (right) */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border items-center justify-center transition-opacity cursor-pointer ${
              canScrollRight ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-200" size={12} />
          </button>

          {/* Mobile bottom arrows */}
          <div className="flex lg:hidden justify-center gap-4 mt-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border flex items-center justify-center transition-opacity cursor-pointer ${
                canScrollLeft ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-30 pointer-events-none'
              }`}
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-gray-700 dark:text-gray-200" size={12} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border flex items-center justify-center transition-opacity cursor-pointer ${
                canScrollRight ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-30 pointer-events-none'
              }`}
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-gray-700 dark:text-gray-200" size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
