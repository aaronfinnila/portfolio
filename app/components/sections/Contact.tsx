export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-forest-900">Get Connected</h2>
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300">
          <p className="text-lg mb-6 text-forest-800">
            Always interested to hear about new opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-6 py-3 bg-forest-600 hover:bg-forest-700 text-white rounded-lg transition-colors"
            >
              Send me an email
            </a>
            <a
              href="https://github.com/aaronfinnila"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aaronfinnila"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-forest-700 hover:bg-forest-800 text-white rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
