import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-slate-800 backdrop-blur-lg border-b border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-white z-50 ml-16"
          >
            Allen<span className="text-blue-500">.AJ</span>
          </a>

          {/* Mobile Menu Button */}
          {!menuOpen && (
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-white text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          )}

          {/* Desktop Navigation - Right-aligned */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              About
            </a>
            <a
              href="#certi"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Certificate   
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Project
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
            <div>
              <a
                href="/CV/Orcino-Allen-Resume.pdf"
                download="Orcino-Allen-Resume.pdf"
                className="text-gray-300 hover:text-white transition-colors p-4 py-2 bg-blue-500 text-sm rounded  mr-3 text-center items-end"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
