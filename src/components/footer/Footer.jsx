
export default function Footer() {
  return (
    <footer className="bg-eclipse-dark text-gray-200 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        {/* Footer Links */}
        <ul className="flex flex-wrap gap-6 md:gap-10 text-sm md:text-base font-medium text-gray-300 justify-center md:justify-start">
          <li>
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-white transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="/process" className="hover:text-white transition-colors">
              Process
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Social / Contact Buttons */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a href="https://wa.me/919845267050?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer">
            <button className="bg-eclipse-accent text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
              WhatsApp
            </button>
          </a>
     
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
