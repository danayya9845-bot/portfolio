import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <>
      {/* 📱 Mobile Floating Button */}
      <a
        href="https://wa.me/919845267050?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* 💻 Desktop Navbar Button */}
      <a
        href="https://wa.me/919845267050?text=Hello%20I%20am%20interested%20in%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
      >
        <FaWhatsapp size={20} />
        <span className="font-medium">WhatsApp</span>
      </a>
    </>
  );
}
