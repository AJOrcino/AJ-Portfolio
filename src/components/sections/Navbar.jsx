import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="z-50 ml-2 text-xl font-semibold text-white md:ml-0">
            Allen<span className="text-cyan-300">.Orcino</span>
          </a>

          {!menuOpen && (
            <div
              className="relative z-40 flex h-5 w-7 cursor-pointer items-center justify-center text-2xl text-white md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </div>
          )}

          <div className="hidden items-center space-x-7 md:flex">
            <a href="#home" className="text-slate-300 transition hover:text-cyan-300">
              Home
            </a>
            <a href="#about" className="text-slate-300 transition hover:text-cyan-300">
              About
            </a>
            <a href="#certi" className="text-slate-300 transition hover:text-cyan-300">
              Certificates
            </a>
            <a href="#project" className="text-slate-300 transition hover:text-cyan-300">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
