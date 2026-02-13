// src/components/layout/Footer/FooterBottom.jsx

const FooterBottom = () => {
  return (
    <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Aabid.co. All rights reserved.</p>

      <div className="flex gap-4">
        <a
          href="#"
          className="hover:text-gray-900 transition"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:text-gray-900 transition"
        >
          Legal
        </a>
        <a
          href="#"
          className="hover:text-gray-900 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
