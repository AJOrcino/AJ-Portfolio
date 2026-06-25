import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <p className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bachelor of Science in Information Technology graduate with a
            passion for software development and modern web technologies.
            Dedicated to building responsive, user-friendly, and efficient
            digital solutions while continuously expanding technical expertise
            and professional experience.
          </p>

          <div className="grid md:grid-cols-3 gap-3 items-stretch">
            {/* Email */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-[180px] flex flex-col justify-center backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <h3 className="text-blue-400 text-lg font-semibold uppercase tracking-wider mb-4">
                Email Address
              </h3>

              <a
                href="mailto:allenjeffersonorcino@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition break-all text-sm md:text-base"
              >
                allenjeffersonorcino@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-[180px] flex flex-col justify-center backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <h3 className="text-blue-400 text-lg font-semibold uppercase tracking-wider mb-4">
                Contact Number
              </h3>

              <a
                href="tel:+639811732889"
                className="text-gray-300 hover:text-blue-400 transition text-sm md:text-base"
              >
                +63 981 173 2889
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 min-h-[180px] flex flex-col justify-center backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <h3 className="text-blue-400 text-lg font-semibold uppercase tracking-wider mb-4">
                Location
              </h3>

              <p className="text-gray-300 text-sm md:text-base">
                Alabang, Muntinlupa City,
                <br />
                Philippines
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
