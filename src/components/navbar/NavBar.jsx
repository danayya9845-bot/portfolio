import { NavLink } from "react-router-dom";
import { useState } from "react";
import WhatsAppButton from "../buttons/WhatsAppButton";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" }
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-eclipse-dark/95 backdrop-blur-md border-b border-eclipse-accent/30">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* LEFT — Logo */}
        <div className="text-xl font-bold tracking-wide text-white">
          Danayya
        </div>

        {/* CENTER — Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-eclipse-light hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-eclipse-accent transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* RIGHT — WhatsApp Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <WhatsAppButton />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <MobileMenu navItems={navItems} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
