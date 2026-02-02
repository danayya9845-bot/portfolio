import { NavLink } from "react-router-dom";

export default function MobileMenu({ navItems, onClose }) {
  return (
    <div className="md:hidden fixed top-16 left-0 w-full bg-eclipse-mid text-white shadow-xl z-40 animate-slideDown">
      <ul className="flex flex-col py-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-6 py-3 text-lg transition ${
                  isActive
                    ? "text-white font-semibold bg-eclipse-accent/40"
                    : "text-eclipse-light hover:bg-eclipse-accent/20 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
