import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Rilk",
      description: "A 2D adventure game made with vanilla Java. Includes core gameplay mechanics, game engine, story and interactive UI.",
      tech: ["Java", "2D Game"],
      github: "https://github.com/aaronfinnila/javagame",
      demo: "https://awsy.itch.io/rilk",
    },
    {
      title: "Company Investment Advisor",
      description: "An AI-powered advisor for company investment decisions.",
      tech: ["AI", "Web App"],
      demo: "https://cia.attractor.fi",
    },
    {
      title: "Espoo Business Advisor",
      description: "A web application that helps you prepare for business advisory meetings.",
      tech: ["AI", "Web App"],
      demo: "https://test.attractor.fi",
    },
    {
      title: "C Calculator",
      description: "A calculator application with graphical user interface made with GTK4 library.",
      tech: ["C"],
      github: "https://github.com/aaronfinnila/c_calculator",
    },
    {
      title: "Spring Boot Project",
      description: "A full-stack application built with Spring Boot framework and React + TypeScript.",
      tech: ["Java", "Spring Boot", "React"],
      github: "https://github.com/aaronfinnila/springboot_project1",
    },
    {
      title: "Whispers",
      description: "A communication application project for Distributed Computer Systems course.",
      tech: ["Java"],
      github: "https://github.com/aaronfinnila/whispers",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow border border-gray-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-sm flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
