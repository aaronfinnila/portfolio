import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-200">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Get Connected</h2>
        <div className="flex items-center gap-4">
          <a
            href="mailto:aaronfinnilaa@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors cursor-pointer"
          >
            <FaEnvelope size={20} />
            <span>aaronfinnilaa@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/aaronfinnila"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
