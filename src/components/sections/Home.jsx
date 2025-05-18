import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-gray-900 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Allen Jefferson
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto mt-5">
            Aspiring Frontend Developer and College Student passionate about
            building beautiful and functional websites. Skilled in HTML, CSS,
            JavaScript, PHP, React, and Tailwind, I am always eager to learn and
            grow in the tech industry.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
