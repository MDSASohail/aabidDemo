// src/components/layout/Footer/FooterLinks.jsx

import { Link } from "react-router-dom";
import { footerLinks } from "@/data/footerLinks";

const FooterLinks = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {footerLinks.map((group) => (
        <div key={group.title} className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">
            {group.title}
          </h3>

          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
