// src/components/layout/Header/MobileMenu.jsx

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "@/data/navigation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-900 focus:outline-none"
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-sm">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
