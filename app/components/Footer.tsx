export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-forest-700">
            © {new Date().getFullYear()} Aaron Finnilä. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
