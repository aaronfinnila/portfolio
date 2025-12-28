import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-200">
      <div className="container mx-89 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Get Connected</h2>
        <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-300">
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
              Email Address
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                id="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent"
              />
              <a
                href="mailto:aaronfinnila@example.com"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
              >
                <FaEnvelope className="mr-2" />
                Send
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <a
              href="https://github.com/aaronfinnila"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aaronfinnila"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
