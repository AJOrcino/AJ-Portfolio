export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Certificates", href: "#certi" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-40 flex w-full flex-col items-center justify-center bg-slate-950/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        menuOpen
          ? "pointer-events-auto h-screen opacity-100"
          : "pointer-events-none h-0 opacity-0"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-5 cursor-pointer text-3xl text-slate-200 transition hover:text-cyan-300"
        aria-label="Close Menu"
      >
        ×
      </button>

      <div className="flex flex-col items-center space-y-4">
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white transition-all duration-300 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="/CV/Orcino-Allen-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className={`mt-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition-all duration-300 ${
          menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        View Resume
      </a>
    </div>
  );
};
