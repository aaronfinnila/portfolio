'use client';

import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const education = [
    {
      period: '2026 — 2028',
      title: 'Master of Science (Technology)',
      organization: 'University of Turku',
      description:
        'Continuing studies with a major in Software Engineering and a minor in Cybersecurity. Deepening my knowledge and experience in safe and scalable software as well as in cybersecurity topics such as penetration testing.',
      tech: ['Software Engineering', 'Distributed Systems'],
    },
    {
      period: '2023 — 2026',
      title: 'Bachelor of Science (Technology)',
      organization: 'University of Turku',
      description:
        "Completed Bachelor's thesis on pathfinding algorithms in fall 2025. Core coursework in algorithms, data structures, databases, and software development.",
      tech: ['Java', 'C', 'Python', 'Algorithms', 'Databases'],
    },
  ];

  const experience = [
    {
      period: 'Summer 2026',
      title: 'Summer Trainee',
      organization: 'Vitec ALMA Oy',
      description:
        'Trainee in the Software Development team. Work primarily consists of fixing bugs and developing features on the frontend of a large enterprise-level web application.',
      tech: ['React', 'TypeScript', 'Java', 'Fullstack', 'Auth'],
    },
  ];

  return (
    <section
      id="about"
      className="mb-12 scroll-mt-16 md:mb-20 lg:mb-28 lg:scroll-mt-24"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-[calc(100%+3rem)] bg-gray-50/75 dark:bg-dark-bg/75 px-6 py-5 backdrop-blur-sm md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">About</h2>
        </div>

        <div className="space-y-4 text-gray-700 dark:text-gray-400 leading-relaxed">
          <p>
            I&apos;m a software engineer with hands-on experience in building and deploying{' '}
            applications.
            I have experience working in the entire development lifecycle - from initial development
            to deployment pipelines and cloud platforms.
            I&apos;m constantly building new things, and picking up new technologies along
            the way.
          </p>
          <p>
            Most of my experience is in fullstack development and{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#E76F00] dark:hover:text-[#E76F00] transition-colors cursor-default">Java</span> applications,
            but I also have experience with scripting in{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#FFD43B] dark:hover:text-[#FFD43B] transition-colors cursor-default">Python</span> and
            building applications with{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#A8B9CC] dark:hover:text-[#A8B9CC] transition-colors cursor-default">C</span>. I am also currently
            learning{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#9B4DCA] dark:hover:text-[#9B4DCA] transition-colors cursor-default">C#</span> for
            application and game development. In web development, my stack has often included some of the following:{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#61DAFB] dark:hover:text-[#61DAFB] transition-colors cursor-default">React</span>,{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-gray-500 dark:hover:text-white transition-colors cursor-default">Next.js</span>,{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#336791] dark:hover:text-[#5A9BD5] transition-colors cursor-default">PostgreSQL</span>,{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#6DB33F] dark:hover:text-[#6DB33F] transition-colors cursor-default">Spring Boot</span>,{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#FF9900] dark:hover:text-[#FF9900] transition-colors cursor-default">AWS</span>,{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#2088FF] dark:hover:text-[#2088FF] transition-colors cursor-default">GitHub Actions</span>.
          </p>
          <p>
            Currently I&apos;m in my third year of studies at the{' '}
            <span className="text-gray-950 dark:text-gray-200 font-medium hover:text-[#0D9488] dark:hover:text-[#2DD4BF] transition-colors cursor-default">University of Turku</span>,
            graduating with my Bachelor&apos;s degree in spring 2026 and planning to continue with my
            Master&apos;s in fall 2026. My{' '}
            <a
              href="https://www.utupub.fi/handle/10024/197400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-950 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Bachelor&apos;s thesis
            </a>{' '}
            on pathfinding algorithms was completed in fall 2025.
          </p>
          <p>
            I enjoy combining theory with hands-on learning through personal projects and
            hackathons. At{' '}
            <a
              href="https://www.hackjunction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-950 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Junction
            </a>{' '}
            2025, my team placed 2nd in our challenge, where we built the first iteration of Business Advisor. At{' '}
            <a
              href="https://www.sinceai.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-950 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Since AI
            </a>{' '}
            2025, we placed 5th overall with the first version of Funding Advisor.
          </p>
          <p>
            When I'm not building, I like to spend my free time exercising, reading,
            and playing video games. One of my goals this year is to run 3km in under 12 minutes.
            My favorite book is Dostoevsky&apos;s <span className="italic">The Brothers Karamazov</span>,
            and my favorite video game is Counter-Strike.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">
            Education
          </h3>

          <ul className="space-y-8">
            {education.map((item, index) => (
              <li key={index}>
                <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-50">

                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500 sm:col-span-2">
                    {item.period}
                  </header>

                  <div className="z-10 sm:col-span-6">
                    <h4 className="font-medium leading-snug text-gray-950 dark:text-gray-200">
                      <span>{item.title}</span>
                      <span className="mx-1 text-gray-500 dark:text-gray-500">&middot;</span>
                      <span className="text-gray-700 dark:text-gray-300">{item.organization}</span>
                    </h4>

                    <p className="mt-2 text-sm leading-normal text-gray-700 dark:text-gray-400">
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

        <div className="mt-12">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">
            Experience
          </h3>

          <ul className="space-y-8">
            {experience.map((item, index) => (
              <li key={index}>
                <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-50">

                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500 sm:col-span-2">
                    {item.period}
                  </header>

                  <div className="z-10 sm:col-span-6">
                    <h4 className="font-medium leading-snug text-gray-950 dark:text-gray-200">
                      <span>{item.title}</span>
                      <span className="mx-1 text-gray-500 dark:text-gray-500">&middot;</span>
                      <span className="text-gray-700 dark:text-gray-300">{item.organization}</span>
                    </h4>

                    <p className="mt-2 text-sm leading-normal text-gray-700 dark:text-gray-400">
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
