export default function Projects() {
  const projects = [
    {
      title: "C Calculator",
      description: "A calculator application built in C programming language.",
      tech: ["C"],
      github: "https://github.com/aaronfinnila/c_calculator",
    },
    {
      title: "Spring Boot Project",
      description: "A full-stack application built with Spring Boot framework.",
      tech: ["Java", "Spring Boot"],
      github: "https://github.com/aaronfinnila/springboot_project1",
    },
    {
      title: "Whispers",
      description: "A communication application project.",
      tech: ["JavaScript"],
      github: "https://github.com/aaronfinnila/whispers",
    },
    {
      title: "Rilk",
      description: "A Java 2D game with engaging gameplay mechanics.",
      tech: ["Java", "2D Game"],
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
      description: "A business advisory platform for Espoo region.",
      tech: ["Web App"],
      demo: "https://test.attractor.fi",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-forest-900">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-forest-900">{project.title}</h3>
              <p className="text-forest-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-forest-100 text-forest-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-600 hover:text-forest-800 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-600 hover:text-forest-800 hover:underline"
                  >
                    Live Demo →
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
