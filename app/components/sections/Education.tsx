'use client';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const timeline = [
    {
      period: '2026 — 2028',
      title: "Master's in IT",
      organization: 'University of Turku',
      description:
        'Continuing studies with a focus on advanced software engineering and distributed systems.',
      tech: ['Software Engineering', 'Distributed Systems'],
    },
    {
      period: '2023 — 2026',
      title: "Bachelor's in IT",
      organization: 'University of Turku',
      description:
        "Completed Bachelor's thesis on pathfinding algorithms in fall 2025. Core coursework in algorithms, data structures, databases, and software development.",
      tech: ['Java', 'C', 'Python', 'Algorithms', 'Databases'],
    },
  ];

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-50/75 dark:bg-dark-bg/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">Education</h2>
        </div>

        <div>
          <ul className="space-y-2">
            {timeline.map((item, index) => (
              <li key={index} className="group">
                <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover:opacity-50">

                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500 sm:col-span-2">
                    {item.period}
                  </header>

                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-gray-900 dark:text-gray-200">
                      <span>{item.title}</span>
                      <span className="mx-1 text-gray-500 dark:text-gray-500">&middot;</span>
                      <span className="text-gray-700 dark:text-gray-300">{item.organization}</span>
                    </h3>

                    <p className="mt-2 text-sm leading-normal text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>

                    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                      {item.tech.map((t, i) => (
                        <li key={i}>
                          <span className="flex items-center rounded-full bg-blue-100/80 dark:bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-800 dark:text-blue-300">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
