'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-8">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-playfair font-bold tracking-tight text-forest-900">
          Aaron Finnilä
        </h1>
        <p className="text-xl md:text-2xl text-forest-700 max-w-2xl mx-auto">
          Passionate programmer crafting elegant solutions
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-forest-600 hover:bg-forest-700 text-white rounded-lg transition-colors text-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-forest-600 hover:border-forest-700 text-forest-900 rounded-lg transition-colors text-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-6 h-6 text-forest-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
