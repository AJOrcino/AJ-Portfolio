import { RevealOnScroll } from "../RevealOnScroll";
import profilePicture from "../../assets/Graduation.jpg";

const techStack = ["React", "Tailwind CSS", "JavaScript", "C++", "Python"];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%)]" />

      <RevealOnScroll>
        <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-cyan-400/40 to-blue-600/40 blur-2xl" />
                <img
                  src={profilePicture}
                  alt="Allen Jefferson Orcino"
                  className="relative h-56 w-56 rounded-[1.75rem] border border-white/10 object-cover shadow-2xl md:h-64 md:w-64"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                Software Engineer • Frontend Developer
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Allen Jefferson Orcino
              </h1>

              <p className="mt-3 text-base text-slate-400 md:text-lg">
                Metro Manila, Philippines
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                I build clean, scalable web experiences with a strong focus on
                user experience, performance, and modern frontend design.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#project"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-slate-700 bg-slate-800/70 px-7 py-3 font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
