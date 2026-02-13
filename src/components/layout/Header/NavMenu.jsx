// src/components/layout/Header/NavMenu.jsx

import { NavLink } from "react-router-dom";
import { navigation } from "@/data/navigation";

const NavMenu = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium transition ${
              isActive
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavMenu;
